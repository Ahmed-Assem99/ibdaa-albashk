import {
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
  type SyntheticEvent,
} from 'react'
import { useMutation } from '@tanstack/react-query'
import { AlertCircle, CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'
import { useContent } from '@/i18n/useLocale'
import { cn } from '@/lib/cn'
import { sendContactMessage, type ContactMessage } from '@/lib/contact-service'
import { validateContact, type ContactErrors } from '@/lib/validation'

const MIN_FILL_TIME_MS = 3000

const empty: ContactMessage = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

interface FieldProps {
  id: string
  label: string
  error?: string
  optional?: boolean
  children: (describedBy: string | undefined) => ReactNode
}

function Field({ id, label, error, optional, children }: FieldProps) {
  const t = useContent().ui.form
  const errorId = `${id}-error`
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold tracking-[0.14em] text-charcoal-800 uppercase"
      >
        {label}{' '}
        {optional && (
          <span className="font-normal tracking-normal text-charcoal-600 normal-case">
            {t.optional}
          </span>
        )}
      </label>
      {children(error ? errorId : undefined)}
      {error && (
        <p id={errorId} className="mt-2 flex items-center gap-1.5 text-sm text-red-700">
          <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass = (invalid: boolean) =>
  cn(
    'block w-full border bg-white px-4 py-3 text-charcoal-900 placeholder:text-charcoal-400 transition focus:border-charcoal-900 focus:outline-2 focus:outline-offset-0 focus:outline-gold-500',
    invalid ? 'border-red-600' : 'border-charcoal-200',
  )

export function ContactForm() {
  const { ui, services } = useContent()
  const t = ui.form
  const uid = useId()
  const [values, setValues] = useState<ContactMessage>(empty)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [honeypot, setHoneypot] = useState('')
  const startedAt = useRef(0)

  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  const mutation = useMutation({ mutationFn: sendContactMessage })

  const ids = Object.fromEntries(Object.keys(empty).map((k) => [k, `${uid}-${k}`])) as Record<
    keyof ContactMessage,
    string
  >

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof ContactMessage
    setValues((v) => ({ ...v, [name]: e.target.value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Basic spam protection: bots fill the hidden field or submit instantly.
    if (honeypot || Date.now() - startedAt.current < MIN_FILL_TIME_MS) return

    const found = validateContact(values, t.errors)
    setErrors(found)
    const firstInvalid = (Object.keys(found) as (keyof ContactMessage)[])[0]
    if (firstInvalid) {
      document.getElementById(ids[firstInvalid])?.focus()
      return
    }
    mutation.mutate(values)
  }

  const reset = () => {
    setValues(empty)
    setErrors({})
    startedAt.current = Date.now()
    mutation.reset()
  }

  if (mutation.isSuccess) {
    const mailto = mutation.data.method === 'mailto'
    return (
      <div role="status" className="border-t-4 border-gold-500 bg-charcoal-50 p-8">
        <CheckCircle2 aria-hidden="true" className="size-10 text-emerald-700" />
        <h3 className="mt-4 text-xl font-semibold text-charcoal-900">
          {mailto ? t.mailto.title : t.success.title}
        </h3>
        <p className="mt-2 text-charcoal-700">
          {mailto ? (
            <>
              {t.mailto.text}{' '}
              <a href={`mailto:${company.email}`} className="font-semibold text-gold-700 underline">
                {company.email}
              </a>
              .
            </>
          ) : (
            t.success.text
          )}
        </p>
        <Button variant="outline-dark" className="mt-6" onClick={reset}>
          {t.again}
        </Button>
      </div>
    )
  }

  const hasErrors = Object.values(errors).some(Boolean)

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="space-y-6"
      aria-describedby={hasErrors ? `${uid}-summary` : undefined}
    >
      {hasErrors && (
        <p
          id={`${uid}-summary`}
          role="alert"
          className="border-s-4 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {t.errors.summary}
        </p>
      )}
      {mutation.isError && (
        <div
          role="alert"
          className="border-s-4 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <p className="font-semibold">{t.failure.title}</p>
          <p>{t.failure.text}</p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={ids.name} label={t.name} error={errors.name}>
          {(d) => (
            <input
              id={ids.name}
              name="name"
              autoComplete="name"
              required
              value={values.name}
              onChange={update}
              aria-invalid={!!errors.name}
              aria-describedby={d}
              className={inputClass(!!errors.name)}
            />
          )}
        </Field>
        <Field id={ids.company} label={t.company} optional>
          {(d) => (
            <input
              id={ids.company}
              name="company"
              autoComplete="organization"
              value={values.company}
              onChange={update}
              aria-describedby={d}
              className={inputClass(false)}
            />
          )}
        </Field>
        <Field id={ids.email} label={t.email} error={errors.email}>
          {(d) => (
            <input
              id={ids.email}
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={update}
              aria-invalid={!!errors.email}
              aria-describedby={d}
              className={inputClass(!!errors.email)}
            />
          )}
        </Field>
        <Field id={ids.phone} label={t.phone} error={errors.phone} optional>
          {(d) => (
            <input
              id={ids.phone}
              name="phone"
              type="tel"
              autoComplete="tel"
              dir="ltr"
              value={values.phone}
              onChange={update}
              aria-invalid={!!errors.phone}
              aria-describedby={d}
              className={cn(inputClass(!!errors.phone), 'text-start')}
            />
          )}
        </Field>
      </div>

      <Field id={ids.service} label={t.service} optional>
        {(d) => (
          <select
            id={ids.service}
            name="service"
            value={values.service}
            onChange={update}
            aria-describedby={d}
            className={inputClass(false)}
          >
            <option value="">{t.servicePlaceholder}</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value={t.serviceOther}>{t.serviceOther}</option>
          </select>
        )}
      </Field>

      <Field id={ids.message} label={t.message} error={errors.message}>
        {(d) => (
          <textarea
            id={ids.message}
            name="message"
            rows={6}
            required
            value={values.message}
            onChange={update}
            aria-invalid={!!errors.message}
            aria-describedby={d}
            className={inputClass(!!errors.message)}
          />
        )}
      </Field>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -start-[9999px] size-px overflow-hidden">
        <label htmlFor={`${uid}-website`}>{t.honeypot}</label>
        <input
          id={`${uid}-website`}
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => {
            setHoneypot(e.target.value)
          }}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={mutation.isPending}
        icon={<Send className="size-4" />}
      >
        {mutation.isPending ? t.submitting : t.submit}
      </Button>
    </form>
  )
}

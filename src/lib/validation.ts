import type { ContactMessage } from './contact-service'

export type ContactErrors = Partial<Record<keyof ContactMessage, string>>

interface Messages {
  required: string
  email: string
  phone: string
  messageLength: string
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE = /^\+?[\d\s()-]{7,20}$/

export function validateContact(values: ContactMessage, t: Messages): ContactErrors {
  const errors: ContactErrors = {}
  if (!values.name.trim()) errors.name = t.required
  if (!values.email.trim()) errors.email = t.required
  else if (!EMAIL.test(values.email.trim())) errors.email = t.email
  if (values.phone.trim() && !PHONE.test(values.phone.trim())) errors.phone = t.phone
  if (!values.message.trim()) errors.message = t.required
  else if (values.message.trim().length < 20) errors.message = t.messageLength
  return errors
}

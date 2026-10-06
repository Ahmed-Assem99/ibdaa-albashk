/**
 * Contact form delivery. This is the ONLY file that knows how messages are sent.
 *
 * - If `VITE_CONTACT_ENDPOINT` is set (e.g. a Formspree form URL such as
 *   https://formspree.io/f/xxxxxxx), the message is POSTed there as JSON.
 * - Otherwise it falls back to opening the visitor's email app (mailto:).
 *
 * To use EmailJS or your own API instead, replace `sendViaEndpoint` below.
 */
import { company } from '@/data/company'

export interface ContactMessage {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}

export type ContactResult = { method: 'endpoint' } | { method: 'mailto' }

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim()

async function sendViaEndpoint(url: string, message: ContactMessage): Promise<ContactResult> {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...message, _subject: `Website enquiry from ${message.name}` }),
  })
  if (!response.ok) throw new Error(`Contact endpoint responded with ${response.status}`)
  return { method: 'endpoint' }
}

function sendViaMailto(message: ContactMessage): ContactResult {
  const subject = `Website enquiry – ${message.service || 'General'} – ${message.name}`
  const body = [
    `Name: ${message.name}`,
    message.company && `Company: ${message.company}`,
    `Email: ${message.email}`,
    message.phone && `Phone: ${message.phone}`,
    message.service && `Service: ${message.service}`,
    '',
    message.message,
  ]
    .filter((line) => line !== '')
    .join('\n')
  window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return { method: 'mailto' }
}

export async function sendContactMessage(message: ContactMessage): Promise<ContactResult> {
  if (endpoint) return sendViaEndpoint(endpoint, message)
  return Promise.resolve(sendViaMailto(message))
}

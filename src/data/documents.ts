import type { CompanyDocument } from '../types/content'

/**
 * Company documents and credentials shown on the About page.
 * To publish a document: put the PDF in /public/docs and set `file`, e.g. '/docs/registration-certificate.pdf'.
 * Documents without a `file` show "Available on request".
 * TODO: decide which documents to publish. The originals include personal ID details,
 * so redact them before uploading.
 */
export const documents: CompanyDocument[] = [
  {
    title: 'Company Registration Certificate',
    issuer: 'Ministry of Trade – Registrar of Companies',
    description: 'Certificate of incorporation as a limited liability company.',
  },
  {
    title: 'Founding Statement & Articles',
    issuer: 'Registrar of Companies',
    description: 'Company name, objectives, capital and founder details.',
  },
  {
    title: 'Registration Verification',
    issuer: 'Ministry of Trade – Companies Registration Department',
    description: 'Electronic verification record of the company registration.',
  },
  {
    title: 'Acceptance Certificate – 60m IT Tower',
    issuer: 'Kuwait Energy Basra Ltd.',
    description: 'Provisional acceptance of the CPF IT tower works.',
  },
  {
    title: 'Contract Award – Al-Diwaniyah Entrance Road',
    issuer: 'Ministry of Construction, Housing, Municipalities & Public Works',
    description: 'Award of the road widening and bridge maintenance contract.',
  },
  {
    title: 'Contract Award – Basra Intermediate Stations',
    issuer: 'Basra Governorate – Government Contracts Department',
    description: 'Award and site handover letters for the intermediate stations.',
  },
]

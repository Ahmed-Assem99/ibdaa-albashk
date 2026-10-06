import type { SiteContent } from '../en'
import { documents as en } from '../en/documents'

const text = [
  {
    title: 'شهادة تأسيس الشركة',
    issuer: 'وزارة التجارة – دائرة تسجيل الشركات',
    description: 'شهادة تأسيس الشركة بصفتها شركة محدودة المسؤولية.',
  },
  {
    title: 'بيان التأسيس وعقد الشركة',
    issuer: 'دائرة تسجيل الشركات',
    description: 'اسم الشركة وأغراضها ورأس مالها وبيانات المؤسس.',
  },
  {
    title: 'التحقق من التسجيل',
    issuer: 'وزارة التجارة – دائرة تسجيل الشركات',
    description: 'سجل التحقق الإلكتروني من تسجيل الشركة.',
  },
  {
    title: 'شهادة الاستلام – برج الاتصالات بارتفاع 60 متراً',
    issuer: 'كويت إنرجي البصرة المحدودة',
    description: 'الاستلام الأولي لأعمال برج الاتصالات في محطة المعالجة المركزية.',
  },
  {
    title: 'كتاب الإحالة – مدخل الديوانية',
    issuer: 'وزارة الإعمار والإسكان والبلديات والأشغال العامة',
    description: 'إحالة عقد توسيع الطريق وصيانة الجسر.',
  },
  {
    title: 'كتاب الإحالة – المحطات الوسطية في البصرة',
    issuer: 'محافظة البصرة – قسم العقود الحكومية',
    description: 'كتب الإحالة وتسليم المواقع الخاصة بالمحطات الوسطية.',
  },
]

/** Same order as the English list; the PDF `file` is shared between languages. */
export const documents: SiteContent['documents'] = en.map((doc, i) => ({ ...doc, ...text[i] }))

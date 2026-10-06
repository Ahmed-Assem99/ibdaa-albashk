import type { CompanyText } from '../../types/content'

export const companyText: CompanyText = {
  name: 'إبداع الباشق',
  logo: { first: 'إبداع', second: 'الباشق', subtitle: 'للمقاولات العامة' },
  // TODO: confirm the Arabic tagline ("Together we build Iraq").
  tagline: 'معاً نبني العراق',
  description:
    'شركة مقاولات عراقية تنفّذ خطوط نقل الطاقة ذات الجهد العالي ومحطات التحويل، ومحطات الطاقة الشمسية، وأعمال النفط والغاز، والبنى التحتية للاتصالات في جنوب العراق.',
  // TODO: confirm the final office address (see the English version).
  addressLines: ['المنصور', 'بغداد، العراق'],
  // TODO: confirm the working days (hours confirmed as 9 AM – 5 PM).
  workingHours: 'الأحد – الخميس · 9:00 صباحاً – 5:00 مساءً',
}

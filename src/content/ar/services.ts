import type { SiteContent } from '../en'
import { capabilities as enCapabilities, services as enServices } from '../en/services'
import type { CapabilityIcon, Service, ServiceCategory } from '../../types/content'

export const categoryLabels: SiteContent['categoryLabels'] = {
  transmission: 'خطوط النقل الكهربائية ومحطات التحويل',
  solar: 'الطاقة الشمسية',
  'oil-gas': 'النفط والغاز',
  telecom: 'الاتصالات',
  civil: 'الأعمال المدنية',
}

/** Arabic text for each core service (civil works is a capability, not a core service). */
const text: Partial<Record<ServiceCategory, Pick<Service, 'title' | 'summary' | 'points'>>> = {
  transmission: {
    title: 'خطوط نقل الطاقة ذات الجهد العالي ومحطات التحويل',
    summary:
      'أعمال خطوط النقل الهوائية مزدوجة الدائرة بجهد 400 ك.ف، من نصب الأبراج إلى سحب الموصلات وتنفيذ التقاطعات، إضافة إلى محطات التحويل وشبكات الجهد المتوسط والمنخفض.',
    points: [
      'نصب الأبراج وتجميعها',
      'سحب الموصلات باستخدام معدات السحب والشد',
      'تقاطعات خطوط الكهرباء والطرق',
      'محطات التحويل ذات الجهد العالي',
      'شبكات الكهرباء ذات الجهد المتوسط والمنخفض',
    ],
  },
  solar: {
    title: 'محطات الطاقة الشمسية الكهروضوئية',
    summary:
      'دعم أعمال الهندسة والتوريد والإنشاء (EPC) لمحطات الطاقة الشمسية، بما في ذلك العمل إلى جانب شركة كالباتارو.',
    points: [
      'دعم أعمال الإنشاء ضمن عقود EPC',
      'تهيئة المواقع والأعمال المدنية',
      'الأعمال الكهربائية',
    ],
  },
  'oil-gas': {
    title: 'أنابيب النفط والغاز وصيانتها',
    summary:
      'إنشاء الأنابيب، وصيانة خطوط الأنابيب وتأهيلها، والأعمال المدنية لمنشآت النفط والغاز، مع خبرة في العمل إلى جانب مشغّلين مثل بي بي وإيني.',
    points: [
      'إنشاء الأنابيب وخطوط الأنابيب الجديدة',
      'صيانة خطوط الأنابيب واستبدالها وتأهيلها',
      'اللحام والتفريع على الساخن والقطع على البارد',
      'إنشاء خزانات التخزين وصيانتها',
      'الأعمال المدنية لمنشآت النفط والغاز',
    ],
  },
  telecom: {
    title: 'الاتصالات',
    summary:
      'أبراج الاتصالات، ومدّ الألياف الضوئية، والمولدات، وأنظمة المراقبة لمشغّلي الاتصالات مثل زين.',
    points: [
      'أسس أبراج الاتصالات وتركيبها',
      'مدّ كابلات الألياف الضوئية ولحامها',
      'توريد المولدات وتركيبها وتزويدها بالوقود',
      'تركيب كاميرات المراقبة وتجهيز غرف تقنية المعلومات',
      'صيانة مواقع الأبراج',
    ],
  },
}

export const services: SiteContent['services'] = enServices.map((service) => ({
  ...service,
  ...text[service.id],
}))

const capabilityText: Record<CapabilityIcon, { title: string; description: string }> = {
  building: {
    title: 'الأعمال المدنية والإنشائية',
    description:
      'الأسس والخرسانة المسلحة والهياكل الحديدية ومباني المواقع والمحطات للجهات الصناعية والعامة.',
  },
  earthworks: {
    title: 'الأعمال الترابية والطرق',
    description: 'الحفر والتسوية والحدل وطرق الوصول وتأهيل الطرق باستخدام معداتنا الثقيلة الخاصة.',
  },
  fleet: {
    title: 'أسطول المعدات والمعامل',
    description:
      'أسطول مملوك من معدات تحريك التربة والرافعات والمولدات ومعامل الخرسانة والإسفلت، تتم صيانته في ورشنا الخاصة.',
  },
  logistics: {
    title: 'الخدمات اللوجستية والمشتريات',
    description:
      'توريد المواد والمعدات وقطع الغيار وإيصالها من موردين محليين ودوليين، وفق الأنظمة المحلية والدولية.',
  },
}

export const capabilities: SiteContent['capabilities'] = enCapabilities.map((capability) => ({
  ...capability,
  ...capabilityText[capability.icon],
}))

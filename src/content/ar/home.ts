import type { SiteContent } from '../en'
import {
  finalCta as enFinal,
  hero as enHero,
  landmark as enLandmark,
  safetyTeaser as enSafety,
} from '../en/home'

type Home = SiteContent['home']

export const hero: Home['hero'] = {
  eyebrow: 'مقاولات عامة · العراق',
  title: [[{ text: 'إبداع' }], [{ text: 'الباشق', accent: true }]],
  valueStatement:
    'خطوط نقل الطاقة ذات الجهد العالي، ومحطات الطاقة الشمسية، وأعمال النفط والغاز، والبنى التحتية للاتصالات، ننفّذها بأمان بكوادرنا ومعداتنا الخاصة في جنوب العراق.',
  primaryCta: { label: 'استعرض المشاريع', to: enHero.primaryCta.to },
  secondaryCta: { label: 'تواصل معنا', to: enHero.secondaryCta.to },
  panels: enHero.panels,
}

export const landmark: Home['landmark'] = {
  id: enLandmark.id,
  badge: 'منفّذو أعلى برج لنقل الطاقة الكهربائية في آسيا · 186 م',
  eyebrow: 'إنجاز بارز',
  title: 'أعلى برج لنقل الطاقة الكهربائية ذات الجهد العالي في آسيا',
  highlight: 'أعلى',
  height: enLandmark.height,
  unit: 'م',
  heightLabel: 'ارتفاع البرج',
  text: 'نفّذت كوادرنا أعمال إنشاء ونصب وسحب موصلات برج لنقل الطاقة الكهربائية ذات الجهد العالي بارتفاع 186 متراً، وهو الأعلى في آسيا. إنجاز نفخر به لفريقنا ولشبكة الكهرباء في العراق.',
  scope: ['الإنشاء', 'نصب البرج', 'سحب الموصلات'],
  cta: { label: 'استعرض مشاريع خطوط النقل', to: enLandmark.cta.to },
  image: enLandmark.image,
}

export const servicesSection: Home['servicesSection'] = {
  title: 'خدماتنا الأساسية',
  highlight: 'الأساسية',
  intro:
    'أربعة مجالات عمل رئيسية، تدعمها الأعمال المدنية والترابية وأسطول معداتنا الخاص وخدماتنا اللوجستية.',
  cardCta: 'استعرض المشاريع',
}

export const statsSection: Home['statsSection'] = { title: 'أرقام رئيسية' }

export const featuredSection: Home['featuredSection'] = {
  title: 'مشاريع مختارة',
  highlight: 'مختارة',
  intro: 'نماذج من أعمالنا المنجزة والجارية.',
  cta: 'جميع المشاريع',
}

export const safetyTeaser: Home['safetyTeaser'] = {
  title: 'السلامة أولاً. والجودة دائماً.',
  highlight: 'السلامة',
  text: 'تبدأ كل وردية عمل باجتماع سلامة ميداني. خطط سلامة موثّقة، وإبلاغ عن الحوادث، وخطط لضمان الجودة ومراقبتها تُطبَّق في كل مشروع، بهدف واحد: صفر حوادث.',
  cta: { label: 'نهجنا في الصحة والسلامة والبيئة', to: enSafety.cta.to },
  image: enSafety.image,
}

export const finalCta: Home['finalCta'] = {
  title: 'لنبنِ معاً',
  highlight: 'معاً',
  text: 'حدّثنا عن مشروعك، أو حمّل ملفنا التعريفي لأغراض التأهيل المسبق.',
  cta: { label: 'تواصل معنا', to: enFinal.cta.to },
}

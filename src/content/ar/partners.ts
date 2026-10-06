import type { SiteContent } from '../en'
import { partners as en } from '../en/partners'

const sectors = [
  'نقل الطاقة والطاقة الشمسية',
  'النفط والغاز',
  'النفط والغاز',
  'الاتصالات',
  'النفط والغاز',
]

/** Same partners and logos as English; brand names stay in Latin script, as written officially. */
export const partners: SiteContent['partners'] = {
  heading: 'خبرة إلى جانب',
  list: en.list.map((partner, i) => ({ ...partner, sector: sectors[i] ?? partner.sector })),
}

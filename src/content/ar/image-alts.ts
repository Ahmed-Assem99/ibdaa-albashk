/**
 * Arabic alt text for every image, keyed by file path. The i18n test fails if an
 * image on the site has no entry here, so add one whenever you add a photo.
 */
export const imageAlts: Record<string, string> = {
  // Services
  '/images/services/transmission.webp': 'برج نقل طاقة شبكي مع معدات سحب الموصلات عند قاعدته',
  '/images/services/solar-pv.webp': 'صورة مؤقتة لخدمات الطاقة الشمسية',
  '/images/services/oil-gas.webp': 'خزانات معالجة وأنابيب حمراء في موقع نفطي',
  '/images/services/telecom.webp': 'برج اتصالات شبكي باللونين الأحمر والأبيض في موقع صحراوي',

  // 400kV OHTL
  '/images/projects/400kv-ohtl-basra/tower-stringing.webp':
    'طاقم يسحب الموصلات عند برج شبكي بجهد 400 ك.ف',
  '/images/projects/400kv-ohtl-basra/tower-loc-110.webp':
    'برج 400 ك.ف مكتمل في الموقع 110 مع معدات السحب',
  '/images/projects/400kv-ohtl-basra/puller-tensioner-loc-114.webp':
    'معدات السحب والشد منصوبة عند موقع البرج 114',
  '/images/projects/400kv-ohtl-basra/crew-working-at-height.webp':
    'فنيو خطوط يعملون على ارتفاع فوق ذراع البرج',
  '/images/projects/400kv-ohtl-basra/crane-line-crossing.webp':
    'رافعة متنقلة تدعم أعمال تقاطع خط كهرباء',
  '/images/projects/400kv-ohtl-basra/conductor-stringing.webp': 'آلة سحب الموصلات أمام برج 400 ك.ف',
  '/images/projects/400kv-ohtl-basra/conductor-compression.webp': 'مكبس هيدروليكي لوصلات الموصلات',
  '/images/projects/400kv-ohtl-basra/conductor-joint.webp': 'لقطة قريبة لوصلة موصل بالكبس',
  '/images/projects/400kv-ohtl-basra/tensioner-controls.webp': 'لوحة تحكم جهاز الشد',
  '/images/projects/400kv-ohtl-basra/line-layout-crew.webp':
    'طاقم يفرد المواد على امتداد مسار خط النقل',
  '/images/projects/400kv-ohtl-basra/tensioner-at-tower.webp': 'جهاز الشد عند قاعدة أحد الأبراج',

  // CPF IT tower
  '/images/projects/cpf-60m-it-tower/tower-base-trench.webp':
    'قاعدة البرج وخندق الكابلات في موقع محطة المعالجة المركزية',
  '/images/projects/cpf-60m-it-tower/foundation-excavation.webp':
    'حفريات أسس البرج قرب شعلة المحطة',
  '/images/projects/cpf-60m-it-tower/footing-rebar.webp': 'حديد تسليح قواعد البرج',
  '/images/projects/cpf-60m-it-tower/foundation-blocks.webp': 'كتل أسس خرسانية معزولة',
  '/images/projects/cpf-60m-it-tower/aircraft-warning-light-box.webp':
    'صندوق تحكم إنارة التحذير الجوي مثبّت على البرج',

  // ZAIN towers
  '/images/projects/zain-telecom-towers/generator-and-fuel-tank.webp':
    'مولّد وخزان وقود في موقع برج اتصالات',
  '/images/projects/zain-telecom-towers/tower-base-compound.webp':
    'قاعدة برج داخل موقع اتصالات مسوّر',
  '/images/projects/zain-telecom-towers/generator-silent-power.webp':
    'مولّد كاتم للصوت بجانب خزان وقود',
  '/images/projects/zain-telecom-towers/generator-installation.webp': 'مولّد مركّب في موقع برج',
  '/images/projects/zain-telecom-towers/generator-cummins.webp':
    'مجموعة توليد ديزل في موقع اتصالات',
  '/images/projects/zain-telecom-towers/generator-shelter.webp': 'مظلة تضم مولّداً وخزان وقود',
  '/images/projects/zain-telecom-towers/control-panel.webp':
    'لوحة تحكم كهربائية تضم مرحّلات وقواطع',
  '/images/projects/zain-telecom-towers/equipment-shelter.webp': 'خزائن معدات تحت مظلة حديدية',

  // Oil & gas civil works
  '/images/projects/basra-oil-gas-civil-works/concrete-slab.webp':
    'بلاطة خرسانية منجزة في منشأة حقل نفطي',
  '/images/projects/basra-oil-gas-civil-works/slab-near-flare.webp':
    'إنهاء بلاطة خرسانية مع شعلة غاز في الخلفية',
  '/images/projects/basra-oil-gas-civil-works/coated-foundations.webp':
    'أسس معدات معزولة مع براغي تثبيت',
  '/images/projects/basra-oil-gas-civil-works/pipeline-valves.webp':
    'صمامات خط أنابيب مركّبة على مساند خرسانية داخل خندق',
  '/images/projects/basra-oil-gas-civil-works/wall-formwork.webp': 'قوالب وحديد تسليح لجدار خرساني',
  '/images/projects/basra-oil-gas-civil-works/wall-starter-bars.webp':
    'جدار خرساني مع أشاير حديد التسليح',
  '/images/projects/basra-oil-gas-civil-works/site-building.webp': 'مبنى موقع من طابق واحد',
  '/images/projects/basra-oil-gas-civil-works/site-preparation.webp': 'تهيئة الموقع وتسويته',

  // Halfaya
  '/images/projects/halfaya-geotechnical-investigations/drilling-rig.webp':
    'حفارة محمولة على شاحنة لآبار التحريات الجيوتقنية',
  '/images/projects/halfaya-geotechnical-investigations/survey.webp':
    'مسّاح يستخدم جهاز المحطة الشاملة في الموقع',

  // Placeholder project covers
  '/images/projects/al-diwaniyah-entrance-road/cover.webp': 'صورة مؤقتة لمشروع مدخل الديوانية',
  '/images/projects/kuwait-energy-caravans/cover.webp': 'صورة مؤقتة لمشروع الكرفانات السكنية',
  '/images/projects/basra-intermediate-stations/cover.webp':
    'صورة مؤقتة لمشروع المحطات الوسطية في البصرة',
  '/images/projects/solar-pv-kalpataru/cover.webp': 'صورة مؤقتة لمشروع الطاقة الشمسية',
  '/images/projects/oil-gas-bp/cover.webp': 'صورة مؤقتة لأعمال النفط والغاز مع بي بي',
  '/images/projects/oil-gas-eni/cover.webp': 'صورة مؤقتة لأعمال النفط والغاز مع إيني',

  // Team & HSE
  '/images/team/toolbox-talk-stringing.webp': 'اجتماع سلامة صباحي مع طاقم سحب الموصلات عند برج نقل',
  '/images/team/toolbox-talk-zubair.webp': 'إيجاز سلامة في أحد مواقع الزبير',
  '/images/team/toolbox-talk-crew.webp': 'اجتماع سلامة مع طاقم الموقع',
  '/images/team/toolbox-talk-circle.webp': 'اجتماع سلامة في حلقة قبل بدء العمل',
  '/images/team/crew-at-cable-drums.webp': 'طاقم العمل بجانب بكرات الموصلات',
  '/images/team/engineers-site-visit.webp': 'مهندسون في زيارة ميدانية',
  '/images/team/crew-briefing.webp': 'طاقم الموقع مصطفّ لإيجاز الصباح',
  '/images/team/site-inspection.webp': 'جولة تفتيش ميدانية مع فريق المشروع',
  '/images/team/hse-training-sessions.webp': 'جلسات تدريب على السلامة في مكتب الموقع',

  // Gallery
  '/images/gallery/foundation-excavation-crew.webp': 'طاقم يعمل على الأسس داخل حفرية',
  '/images/gallery/concrete-pour.webp': 'صبّ الخرسانة من خلاطة متنقلة',
  '/images/gallery/process-tanks-and-piping.webp': 'خزانات معالجة وأنابيب حمراء',
  '/images/gallery/pipe-offloading.webp': 'تنزيل الأنابيب من شاحنة باستخدام الأحزمة',
  '/images/gallery/steel-structure-fabrication.webp': 'تصنيع هياكل حديدية في الموقع',
  '/images/gallery/generator-engine.webp': 'محرك مولّد ديزل في الموقع',
  '/images/gallery/skid-units.webp': 'صف من وحدات المعالجة المحمولة على قواعد',
  '/images/gallery/crane-truck.webp': 'رافعة محمولة على شاحنة في موقع صحراوي',
  '/images/gallery/lattice-tower.webp': 'برج شبكي باللونين الأحمر والأبيض في موقع صحراوي',
  '/images/gallery/rebar-column-starter.webp': 'حدّادون يثبّتون حديد تسليح الأعمدة',
  '/images/gallery/rebar-mat.webp': 'شبكة حديد تسليح لأساس كبير',
  '/images/gallery/motor-grader.webp': 'كريدر يسوّي أرض الموقع',
  '/images/gallery/excavator-stockpile.webp': 'حفارة تعمل على كومة من التربة',
  '/images/gallery/trench-excavation.webp': 'حفر خندق طويل',
  '/images/gallery/loader-and-dump-truck.webp': 'شفل يملأ شاحنة قلابة',
  '/images/gallery/roller-compaction.webp': 'حادلة تدكّ الردم قرب خطوط كهرباء هوائية',
  '/images/gallery/grader-roadworks.webp': 'كريدر في أعمال طريق بجانب جدار ساند',
  '/images/gallery/site-levelling.webp': 'تسوية موقع مع شعلة غاز في الأفق',
  '/images/gallery/water-bowser.webp': 'صهريج ماء يرشّ طبقة أساس الطريق',
  '/images/gallery/grader-on-access-track.webp': 'كريدر ينشئ طريق وصول',
  '/images/gallery/excavator-loading-truck.webp': 'حفارة تحمّل شاحنة',
  '/images/gallery/pipe-laying.webp': 'معدات مدّ الأنابيب على امتداد مسار خط الأنابيب',
  '/images/gallery/site-grading.webp': 'تسوية موقع بمساعدة شاحنة قلابة',
  '/images/gallery/transmission-corridor.webp': 'مسار خط نقل طاقة مع الأبراج',
  '/images/gallery/rebar-cages.webp': 'أقفاص حديد تسليح لمنشآت خرسانية',
}

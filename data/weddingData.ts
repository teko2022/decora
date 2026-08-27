import { ServiceItem, GalleryItem, Testimonial, InstagramPost, WhyChooseItem, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Decora Art',
  arabicName: 'ديكورا آرت لتنسيق الحفلات والمناسبات',
  instagramHandle: '@decora_art111',
  instagramUrl: 'https://instagram.com/decora_art111',
  phone: '+966500000000', // Default luxury format
  whatsappNumber: '966500000000',
  city: 'المملكة العربية السعودية والخليج',
  workingHours: 'يومياً من 10 صباحاً حتى 10 مساءً',
  email: 'contact@decora-art.com',
  tagline: 'خلي يومك المميز أجمل مع أرقى تفاصيل الديكور ✨💍'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'wedding-decor',
    title: 'ديكور وتنظيم الأفراح',
    subtitle: 'ليلة العمر بأعلى درجات الفخامة والملكية',
    emoji: '💍',
    iconName: 'Ring',
    category: 'wedding',
    badge: 'الأكثر طلباً',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    description: 'تصميم وتنفيذ متكامل لقاعات وحفلات الزفاف، يشمل الممشى الملكي، الإضاءات الساحرة، الكوشة الفاخرة وتنسيق كافة الطاولات والمدخل بأناقة استثنائية تعكس فخامة مناسبتك.',
    highlights: [
      'تصميم ثيم مخصص (Classic White, Royal Gold, Romantic Blush)',
      'تجهيز الممشى (Aisle) وإضاءات الشموع والثرثرات الضوئية',
      'تنسيق متكامل لطاولات كبار الشخصيات والضيوف',
      'إشراف ميداني كامل حتى نهاية الحفل'
    ]
  },
  {
    id: 'engagement-decor',
    title: 'ديكور حفلات الخطوبة',
    subtitle: 'أجواء رومانسية دافئة وناعمة تلتقط أولى خطوات الفرح',
    emoji: '🌸',
    iconName: 'Sparkles',
    category: 'engagement',
    badge: 'تصاميم حديثة',
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    description: 'تنسيق رقيق لحفلات الخطوبة والملكة، بتنسيقات ورد طبيعي عصرية، خلفيات تصوير أنيقة، وتفاصيل بصرية تجمع بين البساطة والرقي لإبهار ضيوفك.',
    highlights: [
      'خلفيات خطوبة دائرية وهندسية عصرية مع بالونات وورود',
      'تنسيق طاولات التقديم والضيافة',
      'إضاءات دافئة ونيون مخصص بأسماء العروسين',
      'تناسق ألوان الباستيل والروز غولد والبيج'
    ]
  },
  {
    id: 'bride-room',
    title: 'تجهيز وديكور رومات العرايس',
    subtitle: 'أجواء استثنائية لأولى لحظات الاستعداد والراحة للعروس',
    emoji: '👰',
    iconName: 'Heart',
    category: 'bride_room',
    badge: 'خدمة حصرية',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    description: 'تحويل غرفة العروس في الفندق أو المنزل إلى جناح ملكي مفعم بالرومانسية والهدوء، مع بالونات الهيليوم الفاخرة، باقات الورد، الشموع المعطرة، ومكان مخصص لتصوير الفستان والتفاصيل.',
    highlights: [
      'تجهيز ركن تصوير فستان الزفاف والمجوهرات والميك اب',
      'بتلات الورد الطبيعي والشموع الآمنة العطرية',
      'بالونات فاخرة بألوان مخصصة مع طباعة أسماء العروسين',
      'ترتيب ركن الضيافة الخفيفة وروب العروس'
    ]
  },
  {
    id: 'kosha-backdrops',
    title: 'كوشات وأركان تصوير',
    subtitle: 'كوشات زفاف ملكية وخلفيات فوتوغرافية تخطف الأنظار',
    emoji: '📸',
    iconName: 'Camera',
    category: 'kosha_backdrop',
    badge: 'تصاميم 2026',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    description: 'كوشات زفاف صممت خصيصاً كتحفة فنية لتكون محط الأنظار في ليلة العمر، مع بوابات ورد هندسية، شلالات كريستال، وأركان تصوير فوتوبوث تمنح الضيوف ذكريات لا تُنسى.',
    highlights: [
      'كوشات مصممة حسب مساحة القاعة وطراز الفستان',
      'أقواس ورود طبيعية وصناعية عالية النقاء (Premium Silk)',
      'كورنر تصوير تفاعلي للضيوف مع إكسسوارات مميزة',
      'لوحات مضيئة وحروف مخصصة بأسماء العروسين'
    ]
  },
  {
    id: 'tables-flowers',
    title: 'تنسيق طاولات وورود',
    subtitle: 'سنتربيس فاخر، مفارش راقية ولمسات زهرية ساحرة',
    emoji: '🌹',
    iconName: 'Flower2',
    category: 'tables_flowers',
    imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    description: 'تنسيق طاولات الاستقبال والعشاء مع سنتربيس فخم من الورود الطبيعية، شمعدانات كريستالية وذهبية، أطقم صحون منسقة، ومطبوعات مخصصة بأسماء المدعوين.',
    highlights: [
      'فازات زجاجية وكريستالية وتصاميم سنتربيس مرتفعة وناعمة',
      'تنسيق ورد متناغم مع الباقة الملكية للعروس',
      'مناديل قماشية مطرزة ومفارش ساتان ومخملية فاخرة',
      'طاولات استقبال (Welcome Table) مع دفتر الذكريات'
    ]
  },
  {
    id: 'custom-events',
    title: 'ديكورات المناسبات الخاصة',
    subtitle: 'حفلات استقبال مواليد، توديع عزوبية، وحفلات خاصة حسب الطلب',
    emoji: '✨',
    iconName: 'Crown',
    category: 'custom_event',
    imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
    description: 'تصميم وتنفيذ مناسبات خاصة مصممة خصيصاً وفقاً لرؤيتك وميزانيتك بدقة متناهية، من جلسات العشاء الرومانسية إلى الحفلات العائلية الفخمة.',
    highlights: [
      'تنفيذ أفكار مخصصة بنسبة 100% حسب طلبك',
      'مرونة عالية في الميزانية واختيار المواد',
      'استشارات تصميمية واختيار باليتة الألوان المناسبة',
      'التزام تام بالمواعيد والسرعة في التركيب والإخلاء'
    ]
  }
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: '1',
    title: 'تصميمات مميزة وعصرية',
    description: 'نواكب أحدث صيحات الديكور العالمية لعام 2026 ونبتكر أفكاراً لا تتكرر لتكون مناسبتك أيقونة فريدة.',
    icon: 'Sparkles',
    metric: 'أفكار حصرية'
  },
  {
    id: '2',
    title: 'اهتمام بأدق التفاصيل',
    description: 'من تناغم درجات الزهور وصولاً لدرجة الإضاءة وزوايا التصوير، نحرص أن تكون كل زاوية متقنة باحترافية.',
    icon: 'Eye',
    metric: 'دقة 100%'
  },
  {
    id: '3',
    title: 'تصميمات تناسب ذوقك',
    description: 'نستمع لرؤيتك وشخصيتك ونترجمها إلى واقع ساحر يمثل ذوقك الخاص سواء كان كلاسيكياً، ملكياً أو عصرياً.',
    icon: 'HeartHandshake',
    metric: 'طابعك الخاص'
  },
  {
    id: '4',
    title: 'أسعار مناسبة لمختلف الميزانيات',
    description: 'باقات متنوعة وخيارات دفع مرنة تضمن لك أعلى مستويات الجودة والفخامة بأفضل قيمة دون تكاليف خفية.',
    icon: 'BadgePercent',
    metric: 'أفضل قيمة'
  },
  {
    id: '5',
    title: 'أفكار مبتكرة لكل مناسبة',
    description: 'فريق شغوف ومبدع يقدم حلولاً ديكورية مدهشة واستغلالاً ذكياً للمساحات الداخلية والخارجية.',
    icon: 'Lightbulb',
    metric: 'إبداع مستمر'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'كوشة زفاف ملكية بتدرجات الأبيض والذهب',
    category: 'kosha',
    categoryLabel: 'كوشات وأقواس',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    description: 'تصميم كوشة ملكية فاخرة بأعمدة كلاسيكية، ثريات كريستال مع شلالات ورود بيضاء هيدرانجيا وجوري.',
    tags: ['أفراح ملكية', 'كوشة فخمة', 'أبيض وذهبي']
  },
  {
    id: 'g2',
    title: 'تجهيز غرفة عروس فندقية رومانسية',
    category: 'bride_room',
    categoryLabel: 'رومات عرايس',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
    description: 'تنسيق جناح العروس ببالونات هيليوم بيضاء وروز غولد، إضاءة شموع دافئة مع ركن مخصص لتصوير التفاصيل.',
    tags: ['غرفة العروس', 'بالونات فاخرة', 'أجواء رومانسية']
  },
  {
    id: 'g3',
    title: 'حفل خطوبة عصري بالورود البودرة والبيج',
    category: 'engagement',
    categoryLabel: 'حفلات خطوبة',
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80',
    description: 'قوس خطوبة دائري مكسو بزهور البامباس وجوري البيبي بينك مع نيون مضيء مخصص بأسماء العروسين.',
    tags: ['خطوبة ناعمة', 'بوهو شيك', 'ورد طبيعي']
  },
  {
    id: 'g4',
    title: 'تنسيق طاولات VIP لكبار الشخصيات',
    category: 'flowers',
    categoryLabel: 'طاولات وزهور',
    imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80',
    description: 'سنتربيس طاولات عالي مع شمعدانات ذهبية وأطقم عشاء كريستالية منسقة بعناية فائقة.',
    tags: ['طاولات عشاء', 'سنتربيس فخم', 'تنسيق فاخر']
  },
  {
    id: 'g5',
    title: 'ركن تصوير فوتوبوث تفاعلي للضيوف',
    category: 'photocorner',
    categoryLabel: 'أركان تصوير',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
    description: 'خلفية جدارية خضراء مع ورود زهرية وشعار نيون مضيء يمنح الضيوف أجمل لقطات تذكارية.',
    tags: ['فوتوبوث', 'ركن تصوير', 'ذكريات لا تُنسى']
  },
  {
    id: 'g6',
    title: 'ممشى العروس الملكي مع إضاءات الشموع',
    category: 'wedding',
    categoryLabel: 'ديكور أفراح',
    imageUrl: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1000&q=80',
    description: 'تصميم ممشى الزفة بسجاد عاجي، فازات زهور مميزة على الجانبين وإضاءة شموع دافئة خافتة.',
    tags: ['زفة ملكية', 'ممشى العروس', 'أفراح']
  },
  {
    id: 'g7',
    title: 'تنسيق طاولة الاستقبال وترحيب الضيوف',
    category: 'flowers',
    categoryLabel: 'طاولات وزهور',
    imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80',
    description: 'طاولة استقبال فخمة مع مجسمات عطور، ضيافة فاخرة، وباقة ورد ضخمة ترحب بالحضور بأناقة.',
    tags: ['طاولة استقبال', 'Welcome Table', 'ضيافة']
  },
  {
    id: 'g8',
    title: 'تجهيز رومانسي لسرير وجلسة العروسين',
    category: 'bride_room',
    categoryLabel: 'رومات عرايس',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    description: 'تنسيق أسرّة العرسان بالحرير الأبيض وبتلات الورد الطبيعي وإضاءات ليد خافتة رومانسية.',
    tags: ['جناح عرسان', 'غرفة العروس', 'رومانسية']
  },
  {
    id: 'g9',
    title: 'قوس ورد هندسي حديث لعقد القران',
    category: 'engagement',
    categoryLabel: 'حفلات خطوبة',
    imageUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80',
    description: 'قوس سداسي مطلي بالذهب ومزين بأغصان الزيتون وزهور الأوركيد والفاوانيا الناعمة.',
    tags: ['عقد قران', 'قوس ورد', 'حديث']
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig1',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    likes: '1,420',
    comments: '88',
    caption: 'سحر الأبيض والذهبي في ليلة زفاف أسطورية ✨ شكراً لاختياركم @decora_art111 💍',
    tag: '#كوشات_أفراح',
    isVideo: false
  },
  {
    id: 'ig2',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80',
    likes: '2,150',
    comments: '143',
    caption: 'تجهيز روم العروسة لأجمل لحظات الاستعداد 👰💕 بالونات وتنسيق ورود طبيعي فاخر',
    tag: '#رومات_عرايس',
    isVideo: true
  },
  {
    id: 'ig3',
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80',
    likes: '980',
    comments: '56',
    caption: 'تفاصيل ناعمة لحفلة خطوبة مميزة بألوان الباستيل والروز غولد 🌸✨',
    tag: '#ديكور_خطوبة',
    isVideo: false
  },
  {
    id: 'ig4',
    imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80',
    likes: '1,890',
    comments: '94',
    caption: 'سنتربيس طاولات زفاف بتنسيق ورد طبيعي يضفي بهجة وفخامة على كل زاوية 🌹🤍',
    tag: '#تنسيق_طاولات',
    isVideo: false
  },
  {
    id: 'ig5',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
    likes: '3,210',
    comments: '210',
    caption: 'كورنر تصوير مميز يخلد أحلى الذكريات مع العائلة والأصدقاء 📸✨',
    tag: '#أركان_تصوير',
    isVideo: true
  },
  {
    id: 'ig6',
    imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80',
    likes: '1,640',
    comments: '73',
    caption: 'تصاميم مخصصة تعكس ذوقك الرفيع بكل دقة وأناقة 👑 تواصلوا معنا عبر الواتساب',
    tag: '#ديكور_أعراس',
    isVideo: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'سارة عبد الله',
    eventType: 'حفل زفاف ملكي',
    city: 'الرياض',
    comment: 'تعامل راقي جداً وتنسيق أكثر من رائع! الكوشة والممشى كانوا خياااال وكل الضيوف انبهروا بالديكور والألوان. تسلم إيدكم على الإتقان والاهتمام بكل التفاصيل الصغيرة.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    eventDate: 'منذ أسبوعين',
    serviceUsed: 'ديكور زفاف كامل وكوشة'
  },
  {
    id: 't2',
    clientName: 'نورة المنصور',
    eventType: 'تجهيز غرفة العروس',
    city: 'جدة',
    comment: 'تجهيز الروم بالفندق فاق توقعاتي! دخلت الغرفة وشعرت براحة نفسية وفخامة لا توصف. صور الفستان والبالونات طلعت تجنن بالبوم العرس. شكراً ديكورا آرت!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    eventDate: 'منذ شهر',
    serviceUsed: 'تجهيز روم العروس VIP'
  },
  {
    id: 't3',
    clientName: 'ريم وخالد',
    eventType: 'حفلة خطوبة',
    city: 'الدمام',
    comment: 'التزام بالمواعيد وذوق عالي جداً. القوس والورود والأضواء أعطت للبيت طابع فندقي مبهج. والأسعار مقارنة بالجودة ممتازة جداً.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    eventDate: 'منذ 3 أسابيع',
    serviceUsed: 'ديكور خطوبة وبوث تصوير'
  },
  {
    id: 't4',
    clientName: 'الهنوف الشمري',
    eventType: 'تنسيق طاولات وكوشة',
    city: 'الخبر',
    comment: 'من أفضل من تعاملت معهم، مرونة وسرعة تجاوب وفهموا ذوقي من أول اجتماع. الديكور كان حديث وناعم ونفس الصور بالضبط وأجمل على الواقع.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
    eventDate: 'منذ شهرين',
    serviceUsed: 'تنسيق طاولات وكوشة ناعمة'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'كم من الوقت قبل المناسبة يُفضل التواصل والحجز معكم؟',
    answer: 'نوصي بالتواصل والحجز قبل موعد المناسبة بـ 2 إلى 4 أسابيع على الأقل لحفلات الزفاف الكبيرة لضمان توفير كافة التجهيزات والورود الطبيعية المطلوبة. أما بخصوص تجهيز رومات العرايس والخطوبات الصغيرة فيمكن استقبال الحجوزات قبل 5 إلى 7 أيام حسب الإتاحة.'
  },
  {
    id: 'faq2',
    question: 'هل تقومون بتصميم ديكور مخصص بناءً على صوري وميزانيتي؟',
    answer: 'نعم بكل تأكيد! نحن في Decora Art نؤمن بأن كل مناسبة فريدة. يمكنك إرسال صور الإلهام والمراجع التي تعجبك وتحديد ميزانيتك التقريبية، وسيقوم فريقنا بابتكار تصميم يجمع بين ذوقك وأعلى جودة ممكنة.'
  },
  {
    id: 'faq3',
    question: 'ما هي المناطق والمدن التي تغطون خدمات الديكور بها؟',
    answer: 'نغطي كافة مدن ومناطق المملكة والخليج، مع فريق تركيب متخصص يحضر للقاعة أو الفندق أو المنزل بوقت كافٍ قبل بدء المناسبة لضمان الجاهزية التامة.'
  },
  {
    id: 'faq4',
    question: 'ما الذي تشمله خدمة تجهيز روم العروسة؟',
    answer: 'تشمل تجهيز وتزيين كامل الغرفة ببالونات الهيليوم الفاخرة، ورود طبيعية، بتلات ورد، شموع رومانسية آمنة، ركن مخصص ومضيء لتصوير الفستان والطرحة والمسكة، وترتيب الضيافة الخاصة بالعروس.'
  },
  {
    id: 'faq5',
    question: 'كيف يمكنني تأكيد الحجز والاستفسار عن الأسعار؟',
    answer: 'يمكنك ملء نموذج الحجز المباشر في الصفحة أو الضغط على زر الواتساب للتواصل الفوري مع منسقة الديكور وتحديد كافة التفاصيل والحصول على عرض سعر فوري.'
  }
];

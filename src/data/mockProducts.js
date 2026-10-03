const categories = {
  kitchen: { id: 1, cat_title: 'لوازم آشپزخانه' },
  cooling: { id: 2, cat_title: 'سرمایش و گرمایش' },
  cleaning: { id: 3, cat_title: 'نظافت منزل' },
  audio: { id: 4, cat_title: 'صوتی و تصویری' },
}

const makeImage = path => ({
  url: path,
  formats: {
    small: { url: path },
    thumbnail: { url: path },
    medium: { url: path },
  },
})

const images = [
  '/assets/images/product1.png',
  '/assets/images/product2.png',
  '/assets/images/product3.png',
  '/assets/images/product4.png',
  '/assets/images/home_appliances.png',
]

export const mockProducts = [
  {
    id: 1,
    product_slug: 'yakhchal-bamdad-530',
    product_title: 'یخچال فریزر بامداد مدل ۵۳۰ لیتری',
    product_price: 48500000,
    product_stock: 12,
    product_description:
      'یخچال فریزر ساید بای ساید بامداد با ظرفیت ۵۳۰ لیتر، تکنولوژی نوفراست و سیستم سرمایش چندگانه. مصرف انرژی بهینه و طراحی مدرن برای آشپزخانه‌های امروزی.',
    product_category: categories.cooling,
    product_image: makeImage(images[0]),
    speces: [
      { attr_title: { title: 'ظرفیت' }, attr_value: { value: '۵۳۰ لیتر' } },
      { attr_title: { title: 'نوع سرمایش' }, attr_value: { value: 'نوفراست' } },
      { attr_title: { title: 'رتبه انرژی' }, attr_value: { value: 'A++' } },
      { attr_title: { title: 'گارانتی' }, attr_value: { value: '۲۴ ماه' } },
      { attr_title: { title: 'رنگ' }, attr_value: { value: 'استیل مات' } },
      { attr_title: { title: 'ابعاد' }, attr_value: { value: '۱۸۵×۷۰×۷۲ سانتی‌متر' } },
    ],
    comments: [
      {
        id: 1,
        comment_full_name: 'مریم احمدی',
        comment_body: 'کیفیت ساخت عالی و صدای بسیار کم. پیشنهاد می‌کنم.',
        comment_status: 'publish',
        createdAt: '2025-11-12T10:00:00.000Z',
      },
      {
        id: 2,
        comment_full_name: 'حسین رضایی',
        comment_body: 'ارسال سریع و بسته‌بندی مطمئن. از خرید راضی هستم.',
        comment_status: 'publish',
        createdAt: '2025-12-01T14:30:00.000Z',
      },
    ],
  },
  {
    id: 2,
    product_slug: 'mashin-lebasshoyi-8kg',
    product_title: 'ماشین لباسشویی بامداد ۸ کیلویی',
    product_price: 32900000,
    product_stock: 8,
    product_description:
      'ماشین لباسشویی هوشمند با ظرفیت ۸ کیلوگرم، ۱۵ برنامه شستشو و موتور اینورتر کم‌صدا. مناسب خانواده‌های ۳ تا ۵ نفره با مصرف آب و برق بهینه.',
    product_category: categories.cleaning,
    product_image: makeImage(images[1]),
    speces: [
      { attr_title: { title: 'ظرفیت' }, attr_value: { value: '۸ کیلوگرم' } },
      { attr_title: { title: 'موتور' }, attr_value: { value: 'اینورتر' } },
      { attr_title: { title: 'سرعت چرخش' }, attr_value: { value: '۱۴۰۰ دور' } },
      { attr_title: { title: 'برنامه شستشو' }, attr_value: { value: '۱۵ برنامه' } },
      { attr_title: { title: 'گارانتی' }, attr_value: { value: '۱۸ ماه' } },
    ],
    comments: [
      {
        id: 3,
        comment_full_name: 'سارا کریمی',
        comment_body: 'شستشوی تمیز و صدای خیلی کم. راضی‌ام.',
        comment_status: 'publish',
        createdAt: '2026-01-08T09:15:00.000Z',
      },
    ],
  },
  {
    id: 3,
    product_slug: 'gas-barghi-5-sholeh',
    product_title: 'اجاق گاز رومیزی ۵ شعله استیل',
    product_price: 12400000,
    product_stock: 20,
    product_description:
      'اجاق گاز رومیزی ۵ شعله با صفحه استیل ضدزنگ، فندک اتوماتیک و ترموکوپل ایمنی. طراحی جمع‌وجور مناسب آشپزخانه‌های کوچک و متوسط.',
    product_category: categories.kitchen,
    product_image: makeImage(images[2]),
    speces: [
      { attr_title: { title: 'تعداد شعله' }, attr_value: { value: '۵ شعله' } },
      { attr_title: { title: 'جنس صفحه' }, attr_value: { value: 'استیل' } },
      { attr_title: { title: 'ایمنی' }, attr_value: { value: 'ترموکوپل' } },
      { attr_title: { title: 'گارانتی' }, attr_value: { value: '۱۲ ماه' } },
    ],
    comments: [],
  },
  {
    id: 4,
    product_slug: 'tv-smart-55',
    product_title: 'تلویزیون هوشمند ۵۵ اینچ 4K',
    product_price: 27800000,
    product_stock: 15,
    product_description:
      'تلویزیون هوشمند ۵۵ اینچ با وضوح 4K، سیستم‌عامل اندروید تی‌وی، پشتیبانی از HDR و اسپیکرهای استریو قدرتمند برای تجربه سینمایی در خانه.',
    product_category: categories.audio,
    product_image: makeImage(images[3]),
    speces: [
      { attr_title: { title: 'سایز صفحه' }, attr_value: { value: '۵۵ اینچ' } },
      { attr_title: { title: 'رزولوشن' }, attr_value: { value: '4K UHD' } },
      { attr_title: { title: 'سیستم‌عامل' }, attr_value: { value: 'Android TV' } },
      { attr_title: { title: 'HDR' }, attr_value: { value: 'دارد' } },
      { attr_title: { title: 'گارانتی' }, attr_value: { value: '۲۴ ماه' } },
    ],
    comments: [
      {
        id: 4,
        comment_full_name: 'امیر محمدی',
        comment_body: 'تصویر فوق‌العاده شفاف و رابط کاربری روان.',
        comment_status: 'publish',
        createdAt: '2026-02-14T16:45:00.000Z',
      },
    ],
  },
  {
    id: 5,
    product_slug: 'jaroo-barghi-bamdad-pro',
    product_title: 'جاروبرقی بامداد پرو ۲۲۰۰ وات',
    product_price: 8900000,
    product_stock: 25,
    product_description:
      'جاروبرقی قدرتمند با موتور ۲۲۰۰ وات، فیلتر HEPA و سری‌های متنوع برای نظافت کف، فرش و مبلمان. سبک، کم‌صدا و مناسب استفاده روزانه.',
    product_category: categories.cleaning,
    product_image: makeImage(images[4]),
    speces: [
      { attr_title: { title: 'قدرت موتور' }, attr_value: { value: '۲۲۰۰ وات' } },
      { attr_title: { title: 'فیلتر' }, attr_value: { value: 'HEPA' } },
      { attr_title: { title: 'ظرفیت مخزن' }, attr_value: { value: '۳ لیتر' } },
      { attr_title: { title: 'گارانتی' }, attr_value: { value: '۱۲ ماه' } },
    ],
    comments: [],
  },
  {
    id: 6,
    product_slug: 'microvawe-digital-30l',
    product_title: 'مایکروویو دیجیتال ۳۰ لیتری',
    product_price: 11200000,
    product_stock: 18,
    product_description:
      'مایکروویو دیجیتال ۳۰ لیتری با ۱۰ سطح قدرت، تایمر دقیق و قابلیت گریل. مناسب گرم‌کردن سریع غذا و پخت ساده روزانه.',
    product_category: categories.kitchen,
    product_image: makeImage(images[0]),
    speces: [
      { attr_title: { title: 'ظرفیت' }, attr_value: { value: '۳۰ لیتر' } },
      { attr_title: { title: 'قدرت' }, attr_value: { value: '۹۰۰ وات' } },
      { attr_title: { title: 'گریل' }, attr_value: { value: 'دارد' } },
      { attr_title: { title: 'گارانتی' }, attr_value: { value: '۱۲ ماه' } },
    ],
    comments: [],
  },
  {
    id: 7,
    product_slug: 'cooler-portable-bamdad',
    product_title: 'کولر گازی پرتابل ۱۲۰۰۰',
    product_price: 21500000,
    product_stock: 6,
    product_description:
      'کولر گازی پرتابل با ظرفیت ۱۲۰۰۰ بی‌تی‌یو، مناسب فضاهای تا ۳۰ متر مربع. نصب آسان بدون نیاز به لوله‌کشی دائمی.',
    product_category: categories.cooling,
    product_image: makeImage(images[1]),
    speces: [
      { attr_title: { title: 'ظرفیت' }, attr_value: { value: '۱۲۰۰۰ BTU' } },
      { attr_title: { title: 'نوع' }, attr_value: { value: 'پرتابل' } },
      { attr_title: { title: 'گارانتی' }, attr_value: { value: '۱۸ ماه' } },
    ],
    comments: [],
  },
  {
    id: 8,
    product_slug: 'soundbar-bamdad-x1',
    product_title: 'ساندبار بامداد X1 با ساب‌ووفر',
    product_price: 9800000,
    product_stock: 14,
    product_description:
      'ساندبار ۲.۱ کاناله با ساب‌ووفر بی‌سیم، بلوتوث و ورودی HDMI ARC. صدای فراگیر برای فیلم، موسیقی و گیمینگ.',
    product_category: categories.audio,
    product_image: makeImage(images[2]),
    speces: [
      { attr_title: { title: 'کانال' }, attr_value: { value: '۲.۱' } },
      { attr_title: { title: 'توان خروجی' }, attr_value: { value: '۱۲۰ وات' } },
      { attr_title: { title: 'اتصال' }, attr_value: { value: 'بلوتوث / HDMI ARC' } },
      { attr_title: { title: 'گارانتی' }, attr_value: { value: '۱۲ ماه' } },
    ],
    comments: [
      {
        id: 5,
        comment_full_name: 'نیما صادقی',
        comment_body: 'بیس قوی و نصب خیلی ساده. ارزش خرید دارد.',
        comment_status: 'publish',
        createdAt: '2026-03-02T11:20:00.000Z',
      },
    ],
  },
]

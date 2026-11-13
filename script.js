(() => {
  const STORAGE_KEY = 'preferred_site_lang';

  const TRANSLATIONS = {
    fa: {
      pageTitle: 'نام و نام خانوادگی | قالب وب‌سایت شخصی دوزبانه',
      skipLink: 'پرش به محتوای اصلی',
      brandAria: 'صفحه اصلی',
      navAria: 'منوی اصلی',
      footerNavAria: 'منوی فوتر',
      socialsAria: 'شبکه‌های اجتماعی',
      socialWebAria: 'وب‌سایت نمونه',
      socialLinkedinAria: 'لینکدین',
      socialInstagramAria: 'اینستاگرام',
      momentsAria: 'تصاویر جایگزین نمونه',
      brandScript: 'نام کوچک',
      brandSerif: 'نام خانوادگی',
      navHome: 'خانه',
      navStages: 'مراحل',
      navWork: 'نمونه‌کارها',
      navArticles: 'مقالات و سئو',
      navBrands: 'همکاری‌ها',
      navContact: 'تماس',
      studioBtnText: 'استودیو سئو و بارگذاری مقاله',
      toggleAria: 'Switch language to English',
      heroEyebrow: 'عنوان فرعی نمونه — معرفی تخصص',
      heroTitle: 'تیتر اصلی لورم ایپسوم؟',
      heroLead:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؛ چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      heroCtaPrimary: 'دکمه اصلی نمونه',
      heroCtaSecondary: 'مشاهده ۶ بخش',
      heroImgAlt: 'تصویر نمونه بخش معرفی اول',
      meetingImgAlt: 'تصویر جایگزین بخش نمونه‌کار',
      ctaImgAlt: 'تصویر نمونه بخش پایانی',
      p1Alt: 'تصویر جایگزین شماره یک',
      p2Alt: 'تصویر جایگزین شماره دو',
      p3Alt: 'تصویر جایگزین شماره سه',
      p4Alt: 'تصویر جایگزین شماره چهار',
      stripTitle: 'شش سرفصل لورم ایپسوم',
      num1: '۰۱',
      num2: '۰۲',
      num3: '۰۳',
      num4: '۰۴',
      num5: '۰۵',
      num6: '۰۶',
      strip1: 'لورم ایپسوم متن ساختگی اول',
      strip2: 'لورم ایپسوم متن ساختگی دوم',
      strip3: 'لورم ایپسوم متن ساختگی سوم',
      strip4: 'لورم ایپسوم متن ساختگی چهارم',
      strip5: 'لورم ایپسوم متن ساختگی پنجم',
      strip6: 'لورم ایپسوم متن ساختگی ششم',
      s1Title: 'عنوان اول — لورم ایپسوم متن ساختگی',
      s1Body:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است.',
      s2Title: 'عنوان دوم — لورم ایپسوم با تولید سادگی نامفهوم',
      s2Body:
        'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه‌ای و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
      s3Title: 'عنوان سوم — لورم ایپسوم طراحی و هویت',
      s3Body:
        'در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی باشد.',
      s4Title: 'عنوان چهارم — لورم ایپسوم ساختگی پیگیری پروژه',
      s4Body:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارها است.',
      s5Title: 'عنوان پنجم — لورم ایپسوم بازنگری مسیر',
      s5Body:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و ساختار منسجمی شکل بگیرد.',
      s6Title: 'عنوان ششم — لورم ایپسوم مشاوره و شفافیت',
      s6Body:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؛ کاربردهای متنوع با هدف بهبود ابزارهای کاربردی و تصمیم‌گیری دقیق‌تر در پروژه‌ها.',
      stageSelectCta: 'انتخاب این گزینه — گفتگو کنیم',
      portfolioHeading: 'لورم ایپسوم تا خروجی',
      portfolioManifesto: [
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.',
        'طراحان گرافیک از این متن برای نمایش چیدمان استفاده می‌کنند.'
      ],
      portfolioProof: [
        'لورم ایپسوم متن ساختگی برای معرفی پورتفولیو،',
        'نمونه‌کارها را در لینک نمونه زیر ببینید.'
      ],
      portfolioBtn: 'مشاهده وب‌سایت نمونه',

      /* Articles & SEO Section on Index */
      articlesHeading: 'مقالات و راهنماهای بهینه‌شده سئو',
      badgeFeatured: 'مقاله منتخب',
      teaserDate: 'آبان ۱۴۰۵ · ۵ دقیقه مطالعه',
      teaserSchema: 'اسکیما کامل + جدول سئو',
      teaserTitle: 'راهنمای استراتژی برند و سئو: چگونه از ابهام به نقشه راه و نتایج پایدار برسیم؟',
      teaserDesc:
        'توضیحات اسنیپت گوگل: چارچوب مدرن تبدیل ایده خام به نقشه راه عملیاتی، جدول مقایسه شاخص‌ها، اصول لینک‌دهی معنایی و بهینه‌سازی برای موتورهای جستجوی هوش مصنوعی (GEO).',
      btnReadArticle: 'مطالعه مقاله کامل و باز کردن استودیو سئو',
      btnOpenStudio: '⚡ استودیو بارگذاری و سئو',

      brandsHeading: 'برندهای نمونه که این مسیر را طی کردند',
      brandsLead: 'لورم ایپسوم تیتر کوتاه همکاری‌های ساختگی.',
      brandsCopy:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      brandsSub: 'نمونه لوگوها و تصاویر جایگزین:',
      brand1Name: 'برند نمونه یک',
      brand1Tag: 'لورم ایپسوم طراحی برند',
      brand2Name: 'برند نمونه دو',
      brand2Tag: 'لورم ایپسوم استراتژی',
      brand3Name: 'برند نمونه سه',
      brand3Tag: 'لورم ایپسوم وب و اجرا',
      brand4Name: 'برند نمونه چهار',
      brand4Tag: 'لورم ایپسوم بازطراحی',
      brand5Name: 'برند نمونه پنج',
      brand5Tag: 'لورم ایپسوم محتوا',
      brand6Name: 'برند نمونه شش',
      brand6Tag: 'لورم ایپسوم مشاوره',
      contactHeading: 'لورم ایپسوم فرم تماس — متن ساختگی دعوت به گفتگو.',
      labelName: 'نام',
      labelEmail: 'ایمیل یا شماره تماس',
      labelStage: 'انتخاب مرحله نمونه',
      labelMessage: 'پیام',
      optStage1: '۱. لورم ایپسوم مرحله اول',
      optStage2: '۲. لورم ایپسوم مرحله دوم',
      optStage3: '۳. لورم ایپسوم مرحله سوم',
      optStage4: '۴. لورم ایپسوم مرحله چهارم',
      optStage5: '۵. لورم ایپسوم مرحله پنجم',
      optStage6: '۶. لورم ایپسوم مرحله ششم',
      btnSubmit: 'ارسال پیام',
      contactPs: 'پی‌نوشت: لورم ایپسوم متن ساختگی برای یادداشت پایین فرم تماس است.',
      bottomCtaTitle: 'لورم ایپسوم تیتر بخش پایانی صفحه.',
      bottomCtaText: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و طراحی وب.',
      bottomCtaBtn: 'دکمه دعوت به اقدام',
      copyright: '© ۲۰۲۶ نام شما. تمامی حقوق محفوظ است.',
      errName: 'لطفاً نام خود را وارد کنید.',
      errEmail: 'لطفاً ایمیل یا شماره تماس معتبر وارد کنید.',
      errMessage: 'لطفاً پیام خود را وارد کنید.',
      formSuccess: 'پیام نمونه با موفقیت ثبت شد (دموی استاتیک).',
      langSwitchedAnnouncement: 'زبان صفحه به فارسی تغییر یافت.',

      /* Article Page Specifics */
      bcHome: 'خانه',
      bcArticles: 'مقالات و راهنماها',
      artTitlePreview: 'راهنمای استراتژی برند و سئو',
      artCategory: 'استراتژی و سئو ۲۰۲۶',
      artReadingTime: '۵ دقیقه مطالعه',
      artDate: '۲۲ آبان ۱۴۰۵',
      artH1: 'راهنمای استراتژی برند و سئو: چگونه از ابهام به نقشه راه و نتایج پایدار برسیم؟',
      artLead:
        'شکل‌دهی یک برند فقط به لوگو یا متن سایت خلاصه نمی‌شود؛ بدون تدوین استراتژی شفاف و بهینه‌سازی هدفمند برای موتورهای جستجو و هوش مصنوعی، بهترین ایده‌ها هم در مرحله اجرا خاموش می‌مانند.',
      artAuthorName: 'نویسنده: مشاور ارشد استراتژی',
      artAuthorRole: 'متخصص هدایت برند، معماری اطلاعات و سئو',
      nuggetTitle: 'پاسخ مستقیم و چکیده (TL;DR)',
      nuggetBody:
        'استراتژی برند و سئو دو روی یک سکه‌اند: استراتژی برند هویت، مخاطب و ارزش پیشنهادی را تعریف می‌کند؛ و سئو آن را در دسترس کسانی قرار می‌دهد که در جستجوی پاسخ‌اند. برای اجرای موفق، لازم است مسیر را به ۶ گام تفکیک کرد: شفاف‌سازی هدف، نقشه راه، هویت منسجم، کنترل کیفیت اجرا، رفع گره‌ها و بازنگری واقع‌بینانه.',
      sec1H2: '۱. چرا سئو بدون استراتژی برند مانند ساختن روی ماسه است؟',
      sec1P1:
        'بسیاری از کسب‌وکارها تولید محتوا را با یک لیست کلمات کلیدی شروع می‌کنند، بدون اینکه بدانند قرار است چه ارزش متمایزی عرضه کنند. نتیجه این کار ترافیکی است که هرگز تبدیل به مشتری وفادار یا مخاطب جدی نمی‌شود.',
      sec1P2:
        'وقتی مسیر ۶ مرحله‌ای همکاری را مرور می‌کنیم، متوجه می‌شویم قبل از نوشتن حتی یک کلمه محتوا، باید تکلیف نام، صدا، مخاطب و استراتژی مشخص شده باشد. همچنین طبق اصول کیفی جستجوی گوگل (E-E-A-T)، موتورهای جستجو به محتوایی رتبه می‌دهند که حاصل تجربه واقعی، تخصص و اعتبار برند باشد.',
      internalLinkSample: 'مسیر ۶ مرحله‌ای همکاری',
      externalLinkSample: 'اصول کیفی جستجوی گوگل (E-E-A-T)',
      sec2H2: '۲. جدول مقایسه‌ای: رویکرد سنتی در برابر رویکرد استراتژیک مدرن',
      sec2P1: 'برای درک بهتر تفاوت، جدول زیر شاخص‌های کلیدی تصمیم‌گیری، اجرا و بهینه‌سازی را مقایسه می‌کند:',
      tableCaption: 'جدول ۱: مقایسه شاخص‌های اجرای برند و سئو در دو رویکرد سنتی و استراتژیک',
      thMetric: 'شاخص ارزیابی',
      thTraditional: 'رویکرد سنتی (پراکنده)',
      thStrategic: 'رویکرد استراتژیک (یکپارچه)',
      thOutcome: 'نتیجه نهایی',
      row1Th: 'تعریف هویت برند',
      row1Td1: 'فقط طراحی لوگو و کارت ویزیت',
      row1Td2: 'شکل‌دهی هویت، لحن، پیام و ارزش متمایز',
      row1Td3: 'ماندگاری در ذهن',
      row2Th: 'معماری سئو و محتوا',
      row2Td1: 'تکرار کلمات کلیدی بدون ساختار معنایی',
      row2Td2: 'پاسخ‌های مستقیم، جدول داده و ساختار تاپیک کلاستر',
      row2Td3: 'تسلط در گوگل و هوش مصنوعی',
      row3Th: 'کنترل کیفیت در اجرا',
      row3Td1: 'واگذاری کار بدون پیگیری استانداردها',
      row3Td2: 'نظارت مداوم تا رسیدن به خروجی استاندارد',
      row3Td3: 'کاهش ۹۰٪ خطاهای بازطراحی',
      row4Th: 'واکنش به بن‌بست مسیر',
      row4Td1: 'ادامه اصرار بر مسیر اشتباه یا توقف پروژه',
      row4Td2: 'بازنگری سریع، رفع گره‌ها و طراحی مجدد مسیر',
      row4Td3: 'چابکی و حفظ سرمایه',
      quoteText:
        '«حرف زدن از استراتژی راحت است؛ اما هنر واقعی در اتصال استراتژی به خروجی‌های روزمره، جداول مقایسه شفاف و نتایج قابل لمس است.»',
      quoteCite: '— بخشی از بیانیه مسیر همکاری',
      sec4H2: '۳. اصول لینک‌دهی معنایی برای ارتقای رتبه سئو',
      sec4P1: 'یک مقاله سئو شده استاندارد، باید پل ارتباطی میان صفحات اصلی سایت شما باشد:',
      linkTip1Title: 'لینک‌های داخلی (Internal Links):',
      linkTip1Text: 'اتصال دقیق کلمات کلیدی متن به',
      linkTip1Anchor: 'فرم مشاوره یا صفحات خدمات اصلی',
      linkTip2Title: 'لینک‌های خارجی معتبر (Outbound Authority):',
      linkTip2Text: 'ارجاع به مراجع علمی یا استانداردها با پروتکل امنیتی',
      linkTip3Title: 'انکر تکست طبیعی:',
      linkTip3Text: 'پرهیز از عبارت‌های نامفهوم مانند «اینجا کلیک کنید» و استفاده از عبارات معنادار و شفاف.',
      faqHeading: 'پرسش‌های متداول (FAQ Schema)',
      faq1Q: 'چرا استراتژی برند پیش‌نیاز موفقیت در سئو و بازاریابی محتوا است؟',
      faq1A:
        'استراتژی برند مشخص می‌کند مخاطب هدف کیست، تمایز اصلی چیست و لحن پیام چگونه باشد. بدون این مبنا، محتوا پراکنده شده و سئو به ترافیک بی‌هدف تبدیل می‌شود.',
      faq2Q: 'بهینه‌سازی برای موتورهای جستجوی هوش مصنوعی (GEO) چه تفاوتی با سئوی سنتی دارد؟',
      faq2A:
        'سئوی سنتی بر کلمات کلیدی و بک‌لینک تکیه دارد؛ اما GEO روی تراکم انتیتی‌ها، پاسخ مستقیم (Answer Nuggets)، جدول‌های مقایسه و مستندسازی دقیق متمرکز است.',
      faq3Q: 'چگونه می‌توان این مقاله را با محتوای جدید شخصی‌سازی یا بارگذاری کرد؟',
      faq3A:
        'با فشردن دکمه «استودیو سئو و بارگذاری مقاله» در بالای صفحه، پنل تعاملی باز می‌شود که به شما اجازه می‌دهد عنوان، متن، جدول، کلمات کلیدی، عنوان اسنیپت و متادیسکریپشن را ویرایش کنید و پیش‌نمایش زنده در گوگل و امتیاز سئو را مشاهده کنید.',
      tocTitle: 'فهرست مطالب مقاله',
      toc1: '۱. اهمیت استراتژی برند',
      toc2: '۲. جدول مقایسه‌ای شاخص‌ها',
      toc3: '۳. بیانیه و نگاه استراتژیک',
      toc4: '۴. اصول لینک‌دهی معنایی',
      toc5: '۵. پرسش‌های متداول',
      kwCardTitle: 'کلمات کلیدی مقاله (SEO Tags)',
      studioCardBadge: 'ابزار سئو',
      studioCardTitle: 'تنظیمات و بارگذاری مقاله',
      studioCardText: 'عنوان اسنیپت، متادیسکریپشن، جدول و امتیاز سئوی رنک‌مث را به‌صورت زنده مدیریت کنید.',
      studioCardBtn: 'باز کردن استودیو سئو',

      /* SEO Studio Drawer */
      studioMainHeading: 'استودیو سئو و بارگذاری مقاله (SEO & Content Studio)',
      studioIntro:
        'در این بخش می‌توانید جایگاه عنوان، متن، جدول، لینک‌دهی، کلمات کلیدی، عنوان اسنیپت و توضیحات اسنیپت را تنظیم کنید؛ پیش‌نمایش نحوه نمایش در گوگل را ببینید و امتیاز لحظه‌ای سئو را ارزیابی کنید.',
      groupTitleSlug: '۱. جایگاه عنوان و پیوند یکتا (Slug)',
      labelArtTitle: 'عنوان مقاله (H1)',
      labelSlug: 'پیوند یکتا / اسلاگ (Slug)',
      groupKeywords: '۲. کلمات کلیدی (Keywords & Entities)',
      labelFocusKw: 'کلمه کلیدی اصلی (Focus Keyword)',
      labelSecondaryKw: 'کلمات کلیدی فرعی و LSI (جدا شده با ویرگول)',
      groupSnippet: '۳. عنوان و توضیحات اسنیپت گوگل (Google SERP Snippet)',
      labelSnippetTitle: 'عنوان اسنیپت (Meta Title — حداکثر ۶۰ کاراکتر)',
      labelSnippetDesc: 'توضیحات اسنیپت (Meta Description — ۱۳۰ تا ۱۵۸ کاراکتر)',
      groupBodyTable: '۴. متن، جدول و لینک‌دهی',
      labelLead: 'پاراگراف لید / مقدمه (شامل کلمه کلیدی اصلی در ۱۰٪ اول)',
      labelNugget: 'پاسخ مستقیم / TL;DR (برای موتورهای هوش مصنوعی GEO)',
      labelTableTitle: 'عنوان جدول داده‌ها',
      btnAddTableRow: '+ افزودن سطر به جدول',
      btnInsertLink: 'افزودن نمونه لینک داخلی / خارجی',
      actionsTitle: 'اقدامات و بارگذاری',
      btnApply: '✓ اعمال زنده روی مقاله بالای صفحه',
      btnUploadJson: '📁 بارگذاری مقاله از فایل JSON',
      btnExportJson: '📥 استخراج داده‌های سئو (JSON)',
      btnExportHtml: '📄 استخراج کد کامل HTML مقاله',
      scoreExcellent: 'عالی — بهینه برای رتبه ۱ گوگل و هوش مصنوعی',
      scoreSub: 'بر اساس الگوریتم‌های رنک‌مث و GEO 2026',
      serpPreviewTitle: 'پیش‌نمایش زنده در نتایج جستجوی گوگل',
      serpDesktop: 'دسکتاپ',
      serpMobile: 'موبایل',
      checklistTitle: 'چک‌لیست شاخص‌های حیاتی سئو (Rank Math Audit)',
      chkFocusTitle: 'کلمه کلیدی در عنوان اسنیپت وجود دارد',
      chkFocusDesc: 'کلمه کلیدی در توضیحات اسنیپت قرار دارد',
      chkTitleLength: 'طول عنوان سئو بهینه است (زیر ۶۰ کاراکتر)',
      chkDescLength: 'طول متادیسکریپشن در بازه استاندارد (۱۳۰-۱۵۸ کاراکتر) است',
      chkKeywordLead: 'کلمه کلیدی در ۱۰٪ ابتدای متن لید آمده است',
      chkTable: 'جدول داده‌ها یا مقایسه‌ای در محتوا وجود دارد',
      chkLinks: 'لینک‌دهی داخلی و خارجی با پروتکل امنیتی دارد',
      chkSchema: 'ساختار اسکیما JSON-LD (Article, Breadcrumb, FAQ) فعال است'
    },
    en: {
      pageTitle: 'Your Name | Bilingual Editorial Personal Template',
      skipLink: 'Skip to main content',
      brandAria: 'Home page',
      navAria: 'Primary navigation',
      footerNavAria: 'Footer navigation',
      socialsAria: 'Social links',
      socialWebAria: 'Sample Website',
      socialLinkedinAria: 'LinkedIn',
      socialInstagramAria: 'Instagram',
      momentsAria: 'Sample placeholder visuals',
      brandScript: 'First Name',
      brandSerif: 'Last Name',
      navHome: 'Home',
      navStages: 'Stages',
      navWork: 'Portfolio',
      navArticles: 'Articles & SEO',
      navBrands: 'Brands',
      navContact: 'Contact',
      studioBtnText: 'SEO & Article Studio',
      toggleAria: 'تغییر زبان به فارسی',
      heroEyebrow: 'Sample Eyebrow — Role & Specialty',
      heroTitle: 'Lorem ipsum dolor sit amet?',
      heroLead:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      heroCtaPrimary: 'Primary CTA',
      heroCtaSecondary: 'View 6 Sections',
      heroImgAlt: 'Editorial workspace placeholder image',
      meetingImgAlt: 'Geometric placeholder frame 01',
      ctaImgAlt: 'Bottom call-to-action workspace placeholder',
      p1Alt: 'Placeholder visual 01',
      p2Alt: 'Placeholder visual 02',
      p3Alt: 'Placeholder visual 03',
      p4Alt: 'Placeholder visual 04',
      stripTitle: 'Six lorem ipsum highlights',
      num1: '01',
      num2: '02',
      num3: '03',
      num4: '04',
      num5: '05',
      num6: '06',
      strip1: 'Lorem ipsum dolor sit amet one',
      strip2: 'Consectetur adipiscing elit two',
      strip3: 'Sed do eiusmod tempor three',
      strip4: 'Incididunt ut labore four',
      strip5: 'Dolore magna aliqua five',
      strip6: 'Ut enim ad minim veniam six',
      s1Title: 'Stage 01 — Lorem ipsum dolor sit amet',
      s1Body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      s2Title: 'Stage 02 — Consectetur adipiscing elit, sed do!',
      s2Body:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
      s3Title: 'Stage 03 — Ut enim ad minim veniam',
      s3Body:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
      s4Title: 'Stage 04 — Quis nostrud exercitation ullamco.',
      s4Body:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.',
      s5Title: 'Stage 05 — Duis aute irure dolor in',
      s5Body:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.',
      s6Title: 'Stage 06 — Excepteur sint occaecat cupidatat',
      s6Body:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.',
      stageSelectCta: 'Select this stage — let’s talk',
      portfolioHeading: 'From Copy to Showcase',
      portfolioManifesto: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore.'
      ],
      portfolioProof: [
        'Ut enim ad minim veniam, quis nostrud exercitation,',
        'explore sample outcomes on the demo website below.'
      ],
      portfolioBtn: 'Visit Example Website',

      /* Articles & SEO Section on Index */
      articlesHeading: 'SEO-Optimized Articles & Strategy Guides',
      badgeFeatured: 'Featured Guide',
      teaserDate: 'November 2026 · 5 min read',
      teaserSchema: 'Full Schema + Data Table',
      teaserTitle: 'Brand Strategy & Modern SEO: Turning Uncertainty into a Tangible Roadmap',
      teaserDesc:
        'Google Snippet Meta Description: The modern blueprint for turning raw ideas into structured strategy, responsive data tables, semantic internal links, and Generative Engine Optimization (GEO 2026).',
      btnReadArticle: 'Read Full Guide & Open SEO Studio',
      btnOpenStudio: '⚡ Launch SEO Studio',

      brandsHeading: 'Sample brands along the path',
      brandsLead: 'Lorem ipsum dolor sit amet, consectetur.',
      brandsCopy:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      brandsSub: 'Sample placeholders and partner marks:',
      brand1Name: 'Sample Brand 01',
      brand1Tag: 'Lorem Ipsum Identity',
      brand2Name: 'Sample Brand 02',
      brand2Tag: 'Dolor Sit Strategy',
      brand3Name: 'Sample Brand 03',
      brand3Tag: 'Amet Web & Launch',
      brand4Name: 'Sample Brand 04',
      brand4Tag: 'Consectetur Redesign',
      brand5Name: 'Sample Brand 05',
      brand5Tag: 'Elit Content System',
      brand6Name: 'Sample Brand 06',
      brand6Tag: 'Tempor Advisory',
      contactHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      labelName: 'Name',
      labelEmail: 'Email or phone',
      labelStage: 'Select a sample stage',
      labelMessage: 'Message',
      optStage1: '1. Lorem ipsum stage one',
      optStage2: '2. Lorem ipsum stage two',
      optStage3: '3. Lorem ipsum stage three',
      optStage4: '4. Lorem ipsum stage four',
      optStage5: '5. Lorem ipsum stage five',
      optStage6: '6. Lorem ipsum stage six',
      btnSubmit: 'Send Message',
      contactPs: 'PS: Lorem ipsum dolor sit amet, consectetur adipiscing elit note.',
      bottomCtaTitle: 'Lorem ipsum dolor sit amet, consectetur.',
      bottomCtaText:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.',
      bottomCtaBtn: 'Call to Action',
      copyright: '© 2026 Your Name. All rights reserved.',
      errName: 'Please enter your name.',
      errEmail: 'Please enter a valid email or phone number.',
      errMessage: 'Please enter a short message.',
      formSuccess: 'Demo submission recorded (static template).',
      langSwitchedAnnouncement: 'Language switched to English.',

      /* Article Page Specifics */
      bcHome: 'Home',
      bcArticles: 'Articles & Guides',
      artTitlePreview: 'Brand Strategy & SEO Blueprint',
      artCategory: 'Strategy & SEO 2026',
      artReadingTime: '5 min read',
      artDate: 'Nov 12, 2026',
      artH1: 'Brand Strategy & Modern SEO: Turning Uncertainty into a Tangible Roadmap',
      artLead:
        'Building a brand is never just about a logo or website copy. Without transparent strategic direction and disciplined optimization for search and generative engines, the best ideas stall out during execution.',
      artAuthorName: 'Author: Senior Strategy Consultant',
      artAuthorRole: 'Brand Architecture & Organic Search Specialist',
      nuggetTitle: 'Direct Answer & Executive Summary (TL;DR)',
      nuggetBody:
        'Brand strategy and modern SEO are two halves of the same coin: strategy defines identity, audience, and unique value; SEO makes it discoverable when people actively search for solutions. To execute sustainably, divide the path into six distinct milestones: purpose clarity, actionable roadmap, unified identity, quality follow-through, bottleneck resolution, and realistic advisory.',
      sec1H2: '1. Why SEO Without Brand Strategy Is Built on Sand',
      sec1P1:
        'Most teams kick off content production with a raw list of search keywords, without defining what differentiated perspective they actually offer. The predictable result is hollow traffic that never converts into loyal advocates.',
      sec1P2:
        'When reviewing the six collaborative stages, it becomes clear that before writing a single word, voice, positioning, and customer expectations must align. Under Google E-E-A-T guidelines, search engines reward experience, domain depth, and proven brand authority.',
      internalLinkSample: 'Six Collaboration Stages',
      externalLinkSample: 'Google Search Quality (E-E-A-T)',
      sec2H2: '2. Comparative Table: Traditional vs. Strategic Approach',
      sec2P1: 'To illustrate the difference, this comparison table breaks down critical execution and search benchmarks:',
      tableCaption: 'Table 1: Strategic vs. Traditional Execution & SEO Benchmarks',
      thMetric: 'Metric / Dimension',
      thTraditional: 'Traditional (Fragmented)',
      thStrategic: 'Strategic (Integrated)',
      thOutcome: 'Measurable Outcome',
      row1Th: 'Brand Identity',
      row1Td1: 'Isolated logo and business cards',
      row1Td2: 'Cohesive voice, story, and value proposition',
      row1Td3: 'Long-term Recall',
      row2Th: 'SEO & Content Architecture',
      row2Td1: 'Keyword stuffing without semantic graph',
      row2Td2: 'Direct answers, comparison tables, topic clusters',
      row2Td3: 'AI Search Dominance',
      row3Th: 'Execution Oversight',
      row3Td1: 'Handing off without QA follow-through',
      row3Td2: 'Continuous stewardship until production finish',
      row3Td3: '90% Fewer Redesigns',
      row4Th: 'Pivot & Bottlenecks',
      row4Td1: 'Doubling down on dead ends',
      row4Td2: 'Rapid recalibration and path redesign',
      row4Td3: 'Capital Efficiency',
      quoteText:
        '"Talking about strategy is easy; the real craft lies in connecting high-level vision to everyday tables, honest metrics, and tangible execution."',
      quoteCite: '— From the Collaborative Roadmap Manifesto',
      sec4H2: '3. Semantic Linking Principles for Organic Authority',
      sec4P1: 'A high-ranking article serves as a central hub across your web property:',
      linkTip1Title: 'Internal Links:',
      linkTip1Text: 'Precision linking of contextual keywords to your',
      linkTip1Anchor: 'Advisory Consultation Form',
      linkTip2Title: 'Outbound Citations:',
      linkTip2Text: 'Authoritative external citations with secure protocol',
      linkTip3Title: 'Natural Descriptive Anchors:',
      linkTip3Text: 'Avoiding ambiguous phrases like "click here" in favor of descriptive anchors.',
      faqHeading: 'Frequently Asked Questions (FAQ Schema)',
      faq1Q: 'Why is brand strategy an essential prerequisite for SEO?',
      faq1A:
        'Brand strategy defines who the audience is, why they should care, and what distinct value is promised. Without this core anchor, SEO becomes disconnected keyword churn.',
      faq2Q: 'How does Generative Engine Optimization (GEO) differ from traditional SEO?',
      faq2A:
        'While classic SEO targets keyword repetition and link volume, GEO optimizes for high entity density, direct answer nuggets, structured comparison tables, and verifiable facts.',
      faq3Q: 'How can I customize or upload my own article using this template?',
      faq3A:
        'Click the "SEO & Article Studio" button at the top or in the sidebar to open the interactive panel. You can edit the H1 title, slug, focus keywords, meta snippet title/description, table, and view real-time Google previews and Rank Math scores.',
      tocTitle: 'Table of Contents',
      toc1: '1. Brand Strategy First',
      toc2: '2. Comparative Table',
      toc3: '3. Strategic Manifesto',
      toc4: '4. Semantic Linking',
      toc5: '5. FAQ Schema',
      kwCardTitle: 'Article SEO Keywords',
      studioCardBadge: 'SEO TOOLKIT',
      studioCardTitle: 'Article Publisher & SEO',
      studioCardText: 'Manage your SERP title, meta description, comparison table, and live Rank Math audit.',
      studioCardBtn: 'Open SEO Studio',

      /* SEO Studio Drawer */
      studioMainHeading: 'SEO & Content Studio (Article Publisher)',
      studioIntro:
        'Configure your article title, slug, body copy, comparison table, internal/external links, focus keywords, snippet title, and meta description. Preview live in Google SERP and audit with real-time SEO scoring.',
      groupTitleSlug: '1. Article Title & Permalink (Slug)',
      labelArtTitle: 'Article Title (H1)',
      labelSlug: 'Permalink / Slug',
      groupKeywords: '2. Keywords & Semantic Entities',
      labelFocusKw: 'Focus Keyword (Primary)',
      labelSecondaryKw: 'Secondary / LSI Keywords (comma-separated)',
      groupSnippet: '3. Google SERP Snippet Preview & Metadata',
      labelSnippetTitle: 'Snippet Title (Meta Title — max 60 chars)',
      labelSnippetDesc: 'Snippet Description (Meta Description — 130 to 158 chars)',
      groupBodyTable: '4. Body Text, Table & Links',
      labelLead: 'Lead Introduction (include focus keyword in first 10%)',
      labelNugget: 'Direct Answer / TL;DR (GEO AI Engine Optimization)',
      labelTableTitle: 'Data / Comparison Table Title',
      btnAddTableRow: '+ Add Row to Table',
      btnInsertLink: 'Insert Sample Link Template',
      actionsTitle: 'Actions & Publishing',
      btnApply: '✓ Apply Live to Article Above',
      btnUploadJson: '📁 Upload Article from JSON File',
      btnExportJson: '📥 Export SEO Data (JSON)',
      btnExportHtml: '📄 Export Full Article HTML',
      scoreExcellent: 'Excellent — Optimized for Google Page 1 & AI Engines',
      scoreSub: 'Benchmarked against Rank Math & GEO 2026 standards',
      serpPreviewTitle: 'Live Google Search Result Preview',
      serpDesktop: 'Desktop',
      serpMobile: 'Mobile',
      checklistTitle: 'Critical SEO Checklist (Rank Math Audit)',
      chkFocusTitle: 'Focus keyword appears in Snippet Title',
      chkFocusDesc: 'Focus keyword appears in Meta Description',
      chkTitleLength: 'Snippet title length is optimal (under 60 chars)',
      chkDescLength: 'Meta description length is in sweet spot (130-158 chars)',
      chkKeywordLead: 'Focus keyword appears in first 10% of lead copy',
      chkTable: 'Structured comparison / data table is present',
      chkLinks: 'Internal and secure outbound authority links exist',
      chkSchema: 'Valid JSON-LD schema (Article, Breadcrumbs, FAQ) active'
    }
  };

  let currentLang = 'fa';

  function setMultilineText(el, lines) {
    el.textContent = '';
    lines.forEach((line, idx) => {
      if (idx > 0) {
        el.appendChild(document.createElement('br'));
      }
      el.appendChild(document.createTextNode(line));
    });
  }

  function applyLanguage(lang, announce = false) {
    currentLang = lang === 'en' ? 'en' : 'fa';
    const dict = TRANSLATIONS[currentLang];

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    if (!document.body.classList.contains('article-page')) {
      document.title = dict.pageTitle;
    }

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (value === undefined) return;
      if (Array.isArray(value)) {
        setMultilineText(el, value);
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key]) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (dict[key]) {
        el.setAttribute('alt', dict[key]);
      }
    });

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-label', dict.toggleAria);
      toggleBtn.querySelectorAll('[data-lang-badge]').forEach((badge) => {
        badge.classList.toggle(
          'is-active',
          badge.getAttribute('data-lang-badge') === currentLang
        );
      });
    }

    // Reset form validation styling if on homepage
    document.querySelectorAll('.field-error').forEach((errEl) => {
      errEl.textContent = '';
    });
    document.querySelectorAll('.form-control').forEach((ctrl) => {
      ctrl.removeAttribute('aria-invalid');
    });
    const statusEl = document.getElementById('form-status');
    if (statusEl) {
      statusEl.textContent = '';
      statusEl.classList.remove('is-success');
    }

    try {
      localStorage.setItem(STORAGE_KEY, currentLang);
    } catch {
      // Ignore storage errors in private contexts
    }

    if (announce) {
      const announcer = document.getElementById('live-announcer');
      if (announcer) {
        announcer.textContent = dict.langSwitchedAnnouncement;
      }
    }

    // Trigger SEO re-evaluation if studio is present
    if (typeof runSeoAudit === 'function') {
      runSeoAudit();
    }
  }

  function initLanguage() {
    let saved = 'fa';
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'fa') {
        saved = stored;
      }
    } catch {
      saved = 'fa';
    }
    applyLanguage(saved, false);

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        applyLanguage(currentLang === 'fa' ? 'en' : 'fa', true);
      });
    }
  }

  function initStageButtons() {
    const stageSelect = document.getElementById('input-stage');
    const nameInput = document.getElementById('input-name');
    const contactSection = document.getElementById('contact');

    document.querySelectorAll('.stage-select-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const stageVal = btn.getAttribute('data-stage-value');
        if (stageSelect && stageVal) {
          stageSelect.value = stageVal;
        }
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        if (nameInput) {
          window.setTimeout(() => {
            nameInput.focus({ preventScroll: true });
          }, 350);
        }
      });
    });
  }

  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('input-name');
    const emailInput = document.getElementById('input-email');
    const msgInput = document.getElementById('input-message');
    const errName = document.getElementById('error-name');
    const errEmail = document.getElementById('error-email');
    const errMsg = document.getElementById('error-message');
    const statusEl = document.getElementById('form-status');

    function setFieldState(input, errEl, message) {
      if (message) {
        input.setAttribute('aria-invalid', 'true');
        errEl.textContent = message;
      } else {
        input.removeAttribute('aria-invalid');
        errEl.textContent = '';
      }
    }

    function validateField(input) {
      const dict = TRANSLATIONS[currentLang];
      const val = input.value.trim();
      if (input === nameInput) {
        const msg = val.length === 0 ? dict.errName : '';
        setFieldState(nameInput, errName, msg);
        return !msg;
      }
      if (input === emailInput) {
        const looksValid = val.includes('@') || /^[\d+\-\s()]{7,}$/.test(val);
        const msg = !looksValid ? dict.errEmail : '';
        setFieldState(emailInput, errEmail, msg);
        return !msg;
      }
      if (input === msgInput) {
        const msg = val.length < 4 ? dict.errMessage : '';
        setFieldState(msgInput, errMsg, msg);
        return !msg;
      }
      return true;
    }

    [nameInput, emailInput, msgInput].forEach((input) => {
      if (!input) return;
      input.addEventListener('blur', () => {
        if (input.value.trim() !== '' || input.hasAttribute('aria-invalid')) {
          validateField(input);
        }
      });
      input.addEventListener('input', () => {
        if (input.hasAttribute('aria-invalid')) {
          validateField(input);
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const dict = TRANSLATIONS[currentLang];

      const okName = validateField(nameInput);
      const okEmail = validateField(emailInput);
      const okMsg = validateField(msgInput);

      if (!okName) {
        nameInput.focus();
        return;
      }
      if (!okEmail) {
        emailInput.focus();
        return;
      }
      if (!okMsg) {
        msgInput.focus();
        return;
      }

      if (statusEl) {
        statusEl.textContent = dict.formSuccess;
        statusEl.classList.add('is-success');
      }
      form.reset();
    });
  }

  /* ======================================================== */
  /* SEO STUDIO & ARTICLE PUBLISHING ENGINE                   */
  /* ======================================================== */
  let runSeoAudit = null;

  function initSeoStudio() {
    const drawer = document.getElementById('seo-studio-drawer');
    if (!drawer) return;

    const btnQuickToggle = document.getElementById('btn-toggle-studio');
    const btnSidebarOpen = document.getElementById('btn-open-studio-sidebar');
    const btnClose = document.getElementById('btn-close-studio');

    function toggleStudio(open) {
      const willOpen = open !== undefined ? open : drawer.hidden;
      drawer.hidden = !willOpen;
      if (btnQuickToggle) {
        btnQuickToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      }
      if (willOpen) {
        drawer.scrollIntoView({ behavior: 'smooth' });
        runSeoAudit();
      }
    }

    if (btnQuickToggle) btnQuickToggle.addEventListener('click', () => toggleStudio());
    if (btnSidebarOpen) btnSidebarOpen.addEventListener('click', () => toggleStudio(true));
    if (btnClose) btnClose.addEventListener('click', () => toggleStudio(false));

    // Form controls
    const inputTitle = document.getElementById('studio-input-title');
    const inputSlug = document.getElementById('studio-input-slug');
    const inputFocusKw = document.getElementById('studio-input-focus-kw');
    const inputSecondaryKw = document.getElementById('studio-input-secondary-kw');
    const inputMetaTitle = document.getElementById('studio-input-meta-title');
    const inputMetaDesc = document.getElementById('studio-input-meta-desc');
    const inputLead = document.getElementById('studio-input-lead');
    const inputNugget = document.getElementById('studio-input-nugget');
    const inputTableTitle = document.getElementById('studio-input-table-title');

    // Display counters & preview
    const counterMetaTitle = document.getElementById('counter-meta-title');
    const barMetaTitle = document.getElementById('bar-meta-title');
    const counterMetaDesc = document.getElementById('counter-meta-desc');
    const barMetaDesc = document.getElementById('bar-meta-desc');

    const serpTitleDisplay = document.getElementById('serp-title-display');
    const serpBreadcrumbDisplay = document.getElementById('serp-breadcrumb-display');
    const serpDescDisplay = document.getElementById('serp-desc-display');
    const serpSimulator = document.getElementById('google-serp-simulator');
    const serpBtnDesktop = document.getElementById('serp-view-desktop');
    const serpBtnMobile = document.getElementById('serp-view-mobile');

    // Score elements
    const scoreNum = document.getElementById('seo-score-num');
    const scoreLabel = document.getElementById('seo-score-text');

    // Checklist elements
    const chkFocusTitle = document.getElementById('chk-focus-title');
    const chkFocusDesc = document.getElementById('chk-focus-desc');
    const chkTitleLength = document.getElementById('chk-title-length');
    const chkDescLength = document.getElementById('chk-desc-length');
    const chkKeywordLead = document.getElementById('chk-keyword-lead');
    const chkTablePresent = document.getElementById('chk-table-present');
    const chkLinksPresent = document.getElementById('chk-links-present');
    const chkSchemaPresent = document.getElementById('chk-schema-present');

    // Actions
    const btnApply = document.getElementById('btn-apply-changes');
    const btnAddTableRow = document.getElementById('btn-add-table-row');
    const btnInsertLink = document.getElementById('btn-insert-link-template');
    const fileUpload = document.getElementById('file-upload-article');
    const btnExportJson = document.getElementById('btn-export-json');
    const btnExportHtml = document.getElementById('btn-export-html');
    const feedbackMsg = document.getElementById('studio-feedback');

    // SERP Desktop / Mobile switcher
    if (serpBtnDesktop && serpBtnMobile && serpSimulator) {
      serpBtnDesktop.addEventListener('click', () => {
        serpSimulator.classList.remove('is-mobile');
        serpBtnDesktop.classList.add('is-active');
        serpBtnMobile.classList.remove('is-active');
      });
      serpBtnMobile.addEventListener('click', () => {
        serpSimulator.classList.add('is-mobile');
        serpBtnMobile.classList.add('is-active');
        serpBtnDesktop.classList.remove('is-active');
      });
    }

    function setCheckState(el, pass) {
      if (!el) return;
      el.classList.toggle('is-pass', pass);
      el.classList.toggle('is-fail', !pass);
      const icon = el.querySelector('.chk-icon');
      if (icon) icon.textContent = pass ? '✓' : '✕';
    }

    function highlightKeyword(text, keyword) {
      if (!keyword || !keyword.trim()) return text;
      const cleanKw = keyword.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${cleanKw})`, 'gi');
      return text.replace(regex, '<strong>$1</strong>');
    }

    runSeoAudit = function () {
      const metaTitle = inputMetaTitle ? inputMetaTitle.value.trim() : '';
      const metaDesc = inputMetaDesc ? inputMetaDesc.value.trim() : '';
      const focusKw = inputFocusKw ? inputFocusKw.value.trim().toLowerCase() : '';
      const slug = inputSlug ? inputSlug.value.trim() : 'article-slug';
      const lead = inputLead ? inputLead.value.trim().toLowerCase() : '';

      // Meta Title character counter (Optimal: 35 - 60 chars)
      const tLen = metaTitle.length;
      if (counterMetaTitle) counterMetaTitle.textContent = `${tLen} / 60`;
      const tPercent = Math.min(100, Math.round((tLen / 60) * 100));
      if (barMetaTitle) {
        barMetaTitle.style.inlineSize = `${tPercent}%`;
        barMetaTitle.style.backgroundColor = tLen >= 35 && tLen <= 60 ? '#22C55E' : (tLen > 60 ? '#EF4444' : '#F59E0B');
      }

      // Meta Description character counter (Optimal: 130 - 158 chars)
      const dLen = metaDesc.length;
      if (counterMetaDesc) counterMetaDesc.textContent = `${dLen} / 158`;
      const dPercent = Math.min(100, Math.round((dLen / 158) * 100));
      if (barMetaDesc) {
        barMetaDesc.style.inlineSize = `${dPercent}%`;
        barMetaDesc.style.backgroundColor = dLen >= 125 && dLen <= 160 ? '#22C55E' : (dLen > 160 ? '#EF4444' : '#F59E0B');
      }

      // SERP Live Simulator update
      if (serpTitleDisplay) {
        serpTitleDisplay.textContent = metaTitle || 'Untitled Article';
      }
      if (serpBreadcrumbDisplay) {
        serpBreadcrumbDisplay.textContent = `https://example.com › blog › ${slug}`;
      }
      if (serpDescDisplay) {
        serpDescDisplay.innerHTML = highlightKeyword(metaDesc, focusKw);
      }

      // Audit Checks
      const hasFocusInTitle = focusKw.length > 0 && metaTitle.toLowerCase().includes(focusKw);
      const hasFocusInDesc = focusKw.length > 0 && metaDesc.toLowerCase().includes(focusKw);
      const isTitleOptimal = tLen >= 30 && tLen <= 65;
      const isDescOptimal = dLen >= 120 && dLen <= 165;
      const leadCutoff = lead.slice(0, Math.max(100, Math.round(lead.length * 0.2)));
      const hasFocusInLead = focusKw.length > 0 && leadCutoff.includes(focusKw);
      const hasTable = Boolean(document.getElementById('article-table'));
      const hasLinks = Boolean(document.querySelector('.article-link'));
      const hasSchema = Boolean(document.getElementById('seo-schema-json'));

      setCheckState(chkFocusTitle, hasFocusInTitle);
      setCheckState(chkFocusDesc, hasFocusInDesc);
      setCheckState(chkTitleLength, isTitleOptimal);
      setCheckState(chkDescLength, isDescOptimal);
      setCheckState(chkKeywordLead, hasFocusInLead);
      setCheckState(chkTablePresent, hasTable);
      setCheckState(chkLinksPresent, hasLinks);
      setCheckState(chkSchemaPresent, hasSchema);

      // Score computation
      let score = 20; // baseline
      if (hasFocusInTitle) score += 15;
      if (hasFocusInDesc) score += 15;
      if (isTitleOptimal) score += 10;
      if (isDescOptimal) score += 10;
      if (hasFocusInLead) score += 10;
      if (hasTable) score += 10;
      if (hasLinks) score += 5;
      if (hasSchema) score += 5;
      score = Math.min(100, score);

      if (scoreNum) scoreNum.textContent = score;
      if (scoreLabel) {
        if (score >= 85) {
          scoreLabel.textContent = currentLang === 'fa' ? 'عالی — امتیاز ۸۵ تا ۱۰۰ (رنک‌مث سبز)' : 'Excellent (Score 85-100, Rank Math Green)';
          scoreLabel.style.color = '#22C55E';
        } else if (score >= 60) {
          scoreLabel.textContent = currentLang === 'fa' ? 'متوسط — نیاز به بهینه‌سازی کلمات کلیدی' : 'Good — Can improve keyword placement';
          scoreLabel.style.color = '#F59E0B';
        } else {
          scoreLabel.textContent = currentLang === 'fa' ? 'ضعیف — طول متن و متادیتاها ناکافی است' : 'Needs Work — Metadata & links missing';
          scoreLabel.style.color = '#EF4444';
        }
      }
    };

    // Attach listeners
    [inputTitle, inputSlug, inputFocusKw, inputSecondaryKw, inputMetaTitle, inputMetaDesc, inputLead, inputNugget, inputTableTitle].forEach((field) => {
      if (field) {
        field.addEventListener('input', runSeoAudit);
      }
    });

    // Apply Changes Live to the Article Above
    if (btnApply) {
      btnApply.addEventListener('click', () => {
        const artTitle = inputTitle.value.trim();
        const metaTitle = inputMetaTitle.value.trim();
        const metaDesc = inputMetaDesc.value.trim();
        const lead = inputLead.value.trim();
        const nugget = inputNugget.value.trim();
        const tableTitle = inputTableTitle.value.trim();
        const focusKw = inputFocusKw.value.trim();
        const secKw = inputSecondaryKw.value.trim();

        // Mutate live elements
        const h1 = document.getElementById('article-h1');
        if (h1) h1.textContent = artTitle;
        const bc = document.getElementById('breadcrumb-current');
        if (bc) bc.textContent = artTitle;
        const leadEl = document.getElementById('article-lead');
        if (leadEl) leadEl.textContent = lead;
        const nuggetEl = document.getElementById('art-nugget-body');
        if (nuggetEl) nuggetEl.textContent = nugget;

        const tableCaption = document.querySelector('#article-table caption');
        if (tableCaption && tableTitle) tableCaption.textContent = tableTitle;

        // Meta tags
        document.title = metaTitle || artTitle;
        const metaDescEl = document.getElementById('meta-description');
        if (metaDescEl) metaDescEl.setAttribute('content', metaDesc);
        const metaKwEl = document.getElementById('meta-keywords');
        if (metaKwEl) metaKwEl.setAttribute('content', `${focusKw}, ${secKw}`);

        // Tags pill update
        const tagCloud = document.getElementById('sidebar-tag-cloud');
        if (tagCloud && (focusKw || secKw)) {
          tagCloud.innerHTML = '';
          if (focusKw) {
            const p1 = document.createElement('span');
            p1.className = 'tag-pill tag-pill-primary';
            p1.textContent = focusKw;
            tagCloud.appendChild(p1);
          }
          secKw.split(',').forEach((k) => {
            const clean = k.trim();
            if (clean) {
              const p = document.createElement('span');
              p.className = 'tag-pill';
              p.textContent = clean;
              tagCloud.appendChild(p);
            }
          });
        }

        // Schema JSON-LD update
        const schemaEl = document.getElementById('seo-schema-json');
        if (schemaEl) {
          try {
            const data = JSON.parse(schemaEl.textContent);
            if (data['@graph'] && data['@graph'][0]) {
              data['@graph'][0].headline = metaTitle || artTitle;
              data['@graph'][0].description = metaDesc;
              data['@graph'][0].keywords = [focusKw, ...secKw.split(',').map((s) => s.trim())];
              data['@graph'][0].dateModified = new Date().toISOString();
            }
            schemaEl.textContent = JSON.stringify(data, null, 2);
          } catch {
            // ignore JSON parse issue
          }
        }

        if (feedbackMsg) {
          feedbackMsg.textContent = currentLang === 'fa' ? '✓ تغییرات با موفقیت در مقاله بالا و متاتگ‌های سئو اعمال شد!' : '✓ Changes successfully applied to article and SEO meta tags!';
          window.setTimeout(() => {
            feedbackMsg.textContent = '';
          }, 3500);
        }

        // Smooth scroll to top of article
        const heroSection = document.querySelector('.article-hero-section');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Add row to table
    if (btnAddTableRow) {
      btnAddTableRow.addEventListener('click', () => {
        const tableBody = document.querySelector('#article-table tbody');
        if (!tableBody) return;
        const row = document.createElement('tr');
        const count = tableBody.querySelectorAll('tr').length + 1;
        row.innerHTML = `
          <th scope="row">${currentLang === 'fa' ? `شاخص جدید ${count}` : `Metric ${count}`}</th>
          <td>${currentLang === 'fa' ? 'داده نمونه سنتی' : 'Legacy metric data'}</td>
          <td>${currentLang === 'fa' ? 'داده استراتژیک مدرن' : 'Modern strategic metric'}</td>
          <td><strong class="badge-tag-positive">${currentLang === 'fa' ? 'بهینه‌سازی فعال' : 'Active Optimization'}</strong></td>
        `;
        tableBody.appendChild(row);
        if (feedbackMsg) {
          feedbackMsg.textContent = currentLang === 'fa' ? `سطر ${count} به جدول مقاله اضافه شد.` : `Row ${count} added to table.`;
          window.setTimeout(() => (feedbackMsg.textContent = ''), 2000);
        }
      });
    }

    // Insert Link Template
    if (btnInsertLink) {
      btnInsertLink.addEventListener('click', () => {
        const target = document.getElementById('section-4');
        if (!target) return;
        const p = document.createElement('p');
        p.className = 'article-paragraph';
        p.innerHTML = currentLang === 'fa'
          ? 'نمونه پیوند داخلی به <a href="index.html#contact" class="article-link link-internal">بخش مشاوره و طراحی استراتژی</a> و پیوند خارجی معتبر به <a href="https://schema.org" target="_blank" rel="noopener noreferrer" class="article-link link-external">مستندات استاندارد Schema.org</a>.'
          : 'Sample internal link to <a href="index.html#contact" class="article-link link-internal">Strategic Advisory Form</a> and outbound authority citation to <a href="https://schema.org" target="_blank" rel="noopener noreferrer" class="article-link link-external">Schema.org Specifications</a>.';
        target.appendChild(p);
        if (feedbackMsg) {
          feedbackMsg.textContent = currentLang === 'fa' ? 'نمونه لینک داخلی و خارجی به بخش ۴ مقاله اضافه شد.' : 'Sample internal & external links added to section 4.';
          window.setTimeout(() => (feedbackMsg.textContent = ''), 2500);
        }
      });
    }

    // Upload Article JSON
    if (fileUpload) {
      fileUpload.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = JSON.parse(event.target.result);
            if (data.title) inputTitle.value = data.title;
            if (data.slug) inputSlug.value = data.slug;
            if (data.focus_keyword) inputFocusKw.value = data.focus_keyword;
            if (data.secondary_keywords) inputSecondaryKw.value = data.secondary_keywords;
            if (data.seo_title) inputMetaTitle.value = data.seo_title;
            if (data.seo_description) inputMetaDesc.value = data.seo_description;
            if (data.lead) inputLead.value = data.lead;
            if (data.nugget) inputNugget.value = data.nugget;
            if (data.table_title) inputTableTitle.value = data.table_title;

            runSeoAudit();
            if (btnApply) btnApply.click();

            if (feedbackMsg) {
              feedbackMsg.textContent = currentLang === 'fa' ? 'فایل مقاله با موفقیت بارگذاری و اعمال شد!' : 'Article file successfully loaded and applied!';
            }
          } catch {
            alert(currentLang === 'fa' ? 'خطا در خواندن فایل JSON.' : 'Invalid JSON file format.');
          }
        };
        reader.readAsText(file);
      });
    }

    // Export SEO JSON
    if (btnExportJson) {
      btnExportJson.addEventListener('click', () => {
        const payload = {
          title: inputTitle.value,
          slug: inputSlug.value,
          focus_keyword: inputFocusKw.value,
          secondary_keywords: inputSecondaryKw.value,
          seo_title: inputMetaTitle.value,
          seo_description: inputMetaDesc.value,
          lead: inputLead.value,
          nugget: inputNugget.value,
          table_title: inputTableTitle.value,
          seo_score: scoreNum ? parseInt(scoreNum.textContent, 10) : 95,
          exported_at: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${inputSlug.value || 'article'}-seo-data.json`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    // Export Full HTML
    if (btnExportHtml) {
      btnExportHtml.addEventListener('click', () => {
        const htmlContent = document.documentElement.outerHTML;
        const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${inputSlug.value || 'article'}-published.html`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    // Initial audit trigger
    runSeoAudit();
  }

  function initTableOfContents() {
    const tocLinks = document.querySelectorAll('.toc-link');
    if (!tocLinks.length) return;

    const sections = Array.from(tocLinks)
      .map((link) => {
        const targetId = link.getAttribute('href').replace('#', '');
        return document.getElementById(targetId);
      })
      .filter(Boolean);

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            tocLinks.forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-20% 0px -65% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  function initReveal() {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      return;
    }

    document.documentElement.classList.add('js-anim-enabled');
    const blocks = document.querySelectorAll('.reveal-block');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    blocks.forEach((block) => observer.observe(block));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initStageButtons();
    initContactForm();
    initSeoStudio();
    initTableOfContents();
    initReveal();
  });
})();

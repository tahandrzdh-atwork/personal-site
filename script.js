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
      navBrands: 'همکاری‌ها',
      navContact: 'تماس',
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
      langSwitchedAnnouncement: 'زبان صفحه به فارسی تغییر یافت.'
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
      navBrands: 'Brands',
      navContact: 'Contact',
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
      langSwitchedAnnouncement: 'Language switched to English.'
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
    document.title = dict.pageTitle;

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
    initReveal();
  });
})();

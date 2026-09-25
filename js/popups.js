/* =========================================================
   Customer-care popups (footer links):
   FAQ, return policy, size guide, branches and order tracking.
   All of them use the same popup box (#info-popup in index.html);
   only the title and the body change.
   Helper functions (pick, icon, updateScrollLock) live in app.js.
   ========================================================= */

/* ---------- Content ---------- */

const FAQS = [
  {
    qAr: 'كم تستغرق مدة التوصيل؟',
    qEn: 'How long does delivery take?',
    aAr: 'يتم التوصيل خلال 2-3 أيام عمل داخل القاهرة والجيزة، وخلال 3-5 أيام عمل لباقي المحافظات.',
    aEn: 'Delivery takes 2-3 working days in Cairo & Giza, and 3-5 working days for other governorates.'
  },
  {
    qAr: 'كم تكلفة الشحن؟',
    qEn: 'How much is shipping?',
    aAr: 'الشحن مجاني على الطلبات الأكثر من 1000 جنيه، وتكلفته 50 جنيه فقط للطلبات الأقل.',
    aEn: 'Shipping is free on orders over 1000 EGP, and only 50 EGP for smaller orders.'
  },
  {
    qAr: 'ما هي طرق الدفع المتاحة؟',
    qEn: 'Which payment methods do you accept?',
    aAr: 'يمكنك الدفع عند الاستلام، أو بالبطاقات البنكية (فيزا - ماستركارد - ميزة)، أو بالتقسيط عبر ڤاليو وأمان.',
    aEn: 'You can pay cash on delivery, by card (Visa, Mastercard, Meeza), or in instalments with ValU and Aman.'
  },
  {
    qAr: 'هل يمكنني استبدال أو استرجاع المنتج؟',
    qEn: 'Can I exchange or return a product?',
    aAr: 'نعم، يمكنك الاستبدال أو الاسترجاع خلال 14 يوماً من الاستلام بشرط أن يكون المنتج بحالته الأصلية ومعه الفاتورة.',
    aEn: 'Yes, within 14 days of delivery as long as the item is in its original condition with the receipt.'
  },
  {
    qAr: 'كيف أختار المقاس المناسب؟',
    qEn: 'How do I choose the right size?',
    aAr: 'راجعي جدول المقاسات من رابط "دليل المقاسات" أسفل الصفحة، ويمكنك التواصل مع خدمة العملاء لمساعدتك.',
    aEn: 'Check the size chart from the "Size Guide" link in the footer, or contact customer care for help.'
  },
  {
    qAr: 'كيف أستخدم كود الخصم؟',
    qEn: 'How do I use a discount code?',
    aAr: 'افتحي حقيبة التسوق واكتبي الكود (مثل VOILE10) في خانة كود الخصم ثم اضغطي تطبيق، وسيتم خصم 10% من الإجمالي.',
    aEn: 'Open your shopping bag, type the code (e.g. VOILE10) in the coupon field and press Apply to get 10% off.'
  },
  {
    qAr: 'كيف أتابع شحنتي؟',
    qEn: 'How can I track my order?',
    aAr: 'اضغطي على "تتبع الشحنة" أسفل الصفحة واكتبي رقم الطلب الموجود في رسالة التأكيد.',
    aEn: 'Click "Track Shipment" in the footer and enter the order number from your confirmation message.'
  }
];

const RETURN_POLICY = {
  highlights: [
    { icon: 'clock', titleAr: '14 يوماً', titleEn: '14 Days', descAr: 'للاستبدال أو الاسترجاع', descEn: 'to exchange or return' },
    { icon: 'refresh', titleAr: 'استبدال مجاني', titleEn: 'Free Exchange', descAr: 'لأول استبدال لكل طلب', descEn: 'for the first exchange per order' },
    { icon: 'card', titleAr: '7-10 أيام', titleEn: '7-10 Days', descAr: 'لاسترداد المبلغ', descEn: 'to receive your refund' }
  ],
  steps: [
    { ar: 'تواصلي مع خدمة العملاء على 19999 خلال 14 يوماً من استلام الطلب.', en: 'Contact customer care on 19999 within 14 days of receiving your order.' },
    { ar: 'غلفي المنتج في عبوته الأصلية مع الفاتورة والتيكت.', en: 'Pack the item in its original packaging with the invoice and tags.' },
    { ar: 'سيقوم المندوب باستلام الشحنة من عنوانك، أو يمكنك إرجاعها في أقرب فرع.', en: 'Our courier collects it from your address, or return it at any branch.' },
    { ar: 'بعد فحص المنتج يتم الاستبدال أو رد المبلغ.', en: 'After inspection we send the exchange or process your refund.' }
  ],
  accepted: [
    { ar: 'المنتج غير مستخدم وغير مغسول', en: 'Item is unused and unwashed' },
    { ar: 'التيكت الأصلي ما زال مثبتاً', en: 'Original tags are still attached' },
    { ar: 'وجود فاتورة الشراء', en: 'Purchase invoice is included' }
  ],
  notAccepted: [
    { ar: 'البندانات والإكسسوارات الشخصية (لأسباب صحية)', en: 'Inner caps and personal accessories (hygiene reasons)' },
    { ar: 'المنتجات التي تم تعديلها أو قصها', en: 'Items that were altered or cut' },
    { ar: 'منتجات التصفية النهائية (استبدال فقط)', en: 'Final clearance items (exchange only)' }
  ],
  refundNoteAr: 'يتم رد المبلغ بنفس طريقة الدفع. في حالة الدفع عند الاستلام يتم التحويل على محفظة إلكترونية أو حساب بنكي.',
  refundNoteEn: 'Refunds go back to the original payment method. Cash-on-delivery orders are refunded to a mobile wallet or bank account.'
};

const SIZE_CHART = {
  clothes: [
    { size: 'S', chest: '88 - 92', waist: '70 - 74', hips: '94 - 98', length: '138', weight: '50 - 58' },
    { size: 'M', chest: '94 - 98', waist: '76 - 80', hips: '100 - 104', length: '140', weight: '59 - 67' },
    { size: 'L', chest: '100 - 104', waist: '82 - 86', hips: '106 - 110', length: '142', weight: '68 - 76' },
    { size: 'XL', chest: '106 - 110', waist: '88 - 92', hips: '112 - 116', length: '145', weight: '77 - 86' },
    { size: 'XXL', chest: '112 - 118', waist: '94 - 100', hips: '118 - 124', length: '148', weight: '87 - 98' }
  ],
  scarves: [
    { typeAr: 'طرحة مودال', typeEn: 'Modal scarf', size: '75 × 195' },
    { typeAr: 'طرحة شيفون', typeEn: 'Chiffon scarf', size: '70 × 180' },
    { typeAr: 'إسدال الصلاة', typeEn: 'Prayer isdal', size: 'Free Size' },
    { typeAr: 'بندانة ليكرا', typeEn: 'Lycra inner cap', size: 'Free Size' }
  ],
  howToMeasure: [
    { ar: 'الصدر: قيسي حول أعرض جزء من الصدر.', en: 'Chest: measure around the fullest part of your chest.' },
    { ar: 'الوسط: قيسي حول أضيق جزء من الخصر.', en: 'Waist: measure around the narrowest part of your waist.' },
    { ar: 'الأرداف: قيسي حول أعرض جزء من الأرداف.', en: 'Hips: measure around the fullest part of your hips.' },
    { ar: 'الطول: من أعلى الكتف حتى نهاية القطعة.', en: 'Length: from the top of the shoulder to the hem.' }
  ],
  care: [
    { ar: 'المودال والشيفون: غسيل يدوي بماء بارد وتجفيف في الظل.', en: 'Modal & chiffon: hand wash in cold water, dry in the shade.' },
    { ar: 'الكريب والكتان: غسيل على 30 درجة وكي على حرارة متوسطة.', en: 'Crepe & linen: wash at 30°C, iron on medium heat.' },
    { ar: 'لا تستخدمي المبيض أو المجفف الحراري.', en: 'Do not bleach or tumble dry.' }
  ]
};

const BRANCHES = [
  { city: 'cairo', nameAr: 'سيتي ستارز', nameEn: 'City Stars Mall', addressAr: 'سيتي ستارز مول، الدور الثاني - مدينة نصر، القاهرة', addressEn: 'City Stars Mall, 2nd floor - Nasr City, Cairo', hours: '10:00 - 23:00' },
  { city: 'cairo', nameAr: 'كايرو فستيفال سيتي', nameEn: 'Cairo Festival City', addressAr: 'كايرو فستيفال سيتي مول - التجمع الخامس، القاهرة الجديدة', addressEn: 'Cairo Festival City Mall - Fifth Settlement, New Cairo', hours: '10:00 - 24:00' },
  { city: 'cairo', nameAr: 'وسط البلد', nameEn: 'Downtown', addressAr: 'شارع طلعت حرب - وسط البلد، القاهرة', addressEn: 'Talaat Harb St. - Downtown, Cairo', hours: '10:00 - 22:00' },
  { city: 'giza', nameAr: 'مول العرب', nameEn: 'Mall of Arabia', addressAr: 'مول العرب، البوابة 4 - السادس من أكتوبر، الجيزة', addressEn: 'Mall of Arabia, Gate 4 - 6th of October, Giza', hours: '10:00 - 23:00' },
  { city: 'giza', nameAr: 'المهندسين', nameEn: 'Mohandessin', addressAr: 'شارع جامعة الدول العربية - المهندسين، الجيزة', addressEn: 'Gameat El Dewal El Arabeya St. - Mohandessin, Giza', hours: '10:00 - 23:00' },
  { city: 'alex', nameAr: 'سان ستيفانو', nameEn: 'San Stefano', addressAr: 'سان ستيفانو جراند بلازا - الإسكندرية', addressEn: 'San Stefano Grand Plaza - Alexandria', hours: '10:00 - 23:00' },
  { city: 'delta', nameAr: 'المنصورة', nameEn: 'Mansoura', addressAr: 'شارع الجمهورية - المنصورة، الدقهلية', addressEn: 'El Gomhoreya St. - Mansoura, Dakahlia', hours: '10:00 - 22:00' },
  { city: 'delta', nameAr: 'طنطا', nameEn: 'Tanta', addressAr: 'شارع البحر - طنطا، الغربية', addressEn: 'El Bahr St. - Tanta, Gharbia', hours: '10:00 - 22:00' }
];

const BRANCH_CITIES = [
  { id: 'all', ar: 'الكل', en: 'All' },
  { id: 'cairo', ar: 'القاهرة', en: 'Cairo' },
  { id: 'giza', ar: 'الجيزة', en: 'Giza' },
  { id: 'alex', ar: 'الإسكندرية', en: 'Alexandria' },
  { id: 'delta', ar: 'الدلتا', en: 'Delta' }
];

const TRACKING_STEPS = [
  { ar: 'تم استلام الطلب', en: 'Order placed' },
  { ar: 'تم تأكيد الطلب', en: 'Order confirmed' },
  { ar: 'تم الشحن', en: 'Shipped' },
  { ar: 'خرج للتوصيل', en: 'Out for delivery' },
  { ar: 'تم التوصيل', en: 'Delivered' }
];

// Title + subtitle of every popup
const POPUPS = {
  faq: {
    titleAr: 'الأسئلة الشائعة', titleEn: 'FAQ',
    subtitleAr: 'إجابات سريعة على أكثر الأسئلة التي تصلنا', subtitleEn: 'Quick answers to the questions we get most',
    render: renderFaqBody
  },
  returns: {
    titleAr: 'سياسة الاستبدال والاسترجاع', titleEn: 'Returns & Exchange Policy',
    subtitleAr: 'تسوقي براحة، الاستبدال والاسترجاع سهل وسريع', subtitleEn: 'Shop with confidence - returns are quick and easy',
    render: renderReturnsBody
  },
  sizes: {
    titleAr: 'دليل المقاسات والعناية بالأقمشة', titleEn: 'Size Guide & Fabric Care',
    subtitleAr: 'جميع القياسات بالسنتيمتر والوزن بالكيلوجرام', subtitleEn: 'All measurements in cm, weight in kg',
    render: renderSizesBody
  },
  branches: {
    titleAr: 'فروع لو فوال في مصر', titleEn: 'Le Voile Stores in Egypt',
    subtitleAr: 'زوري أقرب فرع لكِ وجربي قطعك المفضلة', subtitleEn: 'Visit your nearest store and try your favourite pieces',
    render: renderBranchesBody
  },
  track: {
    titleAr: 'تتبع الشحنة', titleEn: 'Track Shipment',
    subtitleAr: 'اعرفي مكان طلبك خطوة بخطوة', subtitleEn: 'Follow your order step by step',
    render: renderTrackBody
  }
};

/* ---------- Popup state ---------- */
const popupState = {
  current: null,        // which popup is open: 'faq', 'returns', 'sizes', 'branches', 'track' or null
  branchCity: 'all',    // city filter in the branches popup
  trackInput: '',       // order number typed by the user
  trackResult: null     // { orderNumber, stage } or { error: true }
};

/* ---------- Open / close ---------- */
function openPopup(type) {
  popupState.current = type;
  renderPopup();
  document.getElementById('info-popup').classList.remove('hidden');
  document.getElementById('popup-body').scrollTop = 0;
  updateScrollLock();
}

function closePopup() {
  popupState.current = null;
  document.getElementById('info-popup').classList.add('hidden');
  updateScrollLock();
}

function renderPopup() {
  const popup = POPUPS[popupState.current];
  if (!popup) return;
  document.getElementById('popup-title').textContent = pick(popup.titleAr, popup.titleEn);
  document.getElementById('popup-subtitle').textContent = pick(popup.subtitleAr, popup.subtitleEn);
  document.getElementById('popup-body').innerHTML = popup.render();
  document.getElementById('popup-help').textContent = pick('لديكِ سؤال آخر؟ اتصلي بخدمة العملاء:', 'Need more help? Call customer care:');
}

// Small helper: a titled section inside a popup
function popupSection(titleAr, titleEn, content) {
  return `
    <section class="popup-section">
      <h3 class="popup-section__title">${pick(titleAr, titleEn)}</h3>
      ${content}
    </section>
  `;
}

/* ---------- 1. FAQ ---------- */
function renderFaqBody() {
  return FAQS.map((faq, i) => `
    <div class="faq-item">
      <button class="faq-item__question" data-action="toggle-faq" data-index="${i}" aria-expanded="false">
        <span>${pick(faq.qAr, faq.qEn)}</span>
        ${icon('chevronDown', 'faq-item__arrow')}
      </button>
      <div class="faq-item__answer"><p>${pick(faq.aAr, faq.aEn)}</p></div>
    </div>
  `).join('');
}

// Opens one question and closes the others (accordion)
function toggleFaq(index) {
  document.querySelectorAll('.faq-item').forEach((item, i) => {
    const open = i === index && !item.classList.contains('open');
    item.classList.toggle('open', open);
    item.querySelector('.faq-item__question').setAttribute('aria-expanded', open);
  });
}

/* ---------- 2. Return policy ---------- */
function renderReturnsBody() {
  const p = RETURN_POLICY;

  const highlights = `
    <div class="highlights">
      ${p.highlights.map(h => `
        <div class="highlight">
          ${icon(h.icon)}
          <strong>${pick(h.titleAr, h.titleEn)}</strong>
          <span>${pick(h.descAr, h.descEn)}</span>
        </div>
      `).join('')}
    </div>
  `;

  const steps = `
    <ol class="steps">
      ${p.steps.map((step, i) => `
        <li class="steps__item"><span class="steps__num">${i + 1}</span><p>${pick(step.ar, step.en)}</p></li>
      `).join('')}
    </ol>
  `;

  const listHtml = (items, iconName, modifier) => `
    <ul class="check-list check-list--${modifier}">
      ${items.map(item => `<li>${icon(iconName)}<span>${pick(item.ar, item.en)}</span></li>`).join('')}
    </ul>
  `;

  return `
    ${highlights}
    ${popupSection('خطوات الاسترجاع', 'How to return', steps)}
    <div class="two-cols">
      ${popupSection('شروط القبول', 'Accepted when', listHtml(p.accepted, 'checkCircle', 'yes'))}
      ${popupSection('لا يمكن استرجاع', 'Not returnable', listHtml(p.notAccepted, 'xCircle', 'no'))}
    </div>
    <div class="note">${icon('shield')}<span>${pick(p.refundNoteAr, p.refundNoteEn)}</span></div>
  `;
}

/* ---------- 3. Size guide ---------- */
function renderSizesBody() {
  const c = SIZE_CHART;

  const clothesTable = `
    <div class="table-wrap">
      <table class="size-table">
        <thead>
          <tr>
            <th>${pick('المقاس', 'Size')}</th>
            <th>${pick('الصدر', 'Chest')}</th>
            <th>${pick('الوسط', 'Waist')}</th>
            <th>${pick('الأرداف', 'Hips')}</th>
            <th>${pick('الطول', 'Length')}</th>
            <th>${pick('الوزن', 'Weight')}</th>
          </tr>
        </thead>
        <tbody>
          ${c.clothes.map(row => `
            <tr>
              <td><strong>${row.size}</strong></td>
              <td>${row.chest}</td>
              <td>${row.waist}</td>
              <td>${row.hips}</td>
              <td>${row.length}</td>
              <td>${row.weight}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  const scarvesTable = `
    <div class="table-wrap">
      <table class="size-table">
        <thead>
          <tr><th>${pick('المنتج', 'Product')}</th><th>${pick('المقاس (سم)', 'Size (cm)')}</th></tr>
        </thead>
        <tbody>
          ${c.scarves.map(row => `<tr><td>${pick(row.typeAr, row.typeEn)}</td><td>${row.size}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;

  const simpleList = (items, iconName) => `
    <ul class="check-list">
      ${items.map(item => `<li>${icon(iconName)}<span>${pick(item.ar, item.en)}</span></li>`).join('')}
    </ul>
  `;

  return `
    ${popupSection('الفساتين والعبايات والإسدالات والأطقم', 'Dresses, abayas, isdals & sets', clothesTable)}
    ${popupSection('الطرح والإكسسوارات', 'Scarves & accessories', scarvesTable)}
    <div class="two-cols">
      ${popupSection('كيف تأخذين مقاساتك؟', 'How to measure', simpleList(c.howToMeasure, 'ruler'))}
      ${popupSection('العناية بالأقمشة', 'Fabric care', simpleList(c.care, 'sparkles'))}
    </div>
    <div class="note">${icon('checkCircle')}<span>${pick('بين مقاسين؟ ننصحك باختيار المقاس الأكبر للحصول على إطلالة أكثر راحة واحتشاماً.', 'Between two sizes? We recommend the larger one for a more comfortable, modest fit.')}</span></div>
  `;
}

/* ---------- 4. Branches ---------- */
function renderBranchesBody() {
  const branches = BRANCHES.filter(b => popupState.branchCity === 'all' || b.city === popupState.branchCity);

  const filters = `
    <div class="city-filters">
      ${BRANCH_CITIES.map(city => `
        <button class="chip ${popupState.branchCity === city.id ? 'active' : ''}" data-action="branch-city" data-city="${city.id}">
          ${pick(city.ar, city.en)}
        </button>
      `).join('')}
    </div>
  `;

  const cards = branches.map(b => {
    const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(b.addressEn);
    return `
      <div class="branch">
        <div class="branch__icon">${icon('mapPin')}</div>
        <div class="branch__info">
          <h4>${pick(b.nameAr, b.nameEn)}</h4>
          <p>${pick(b.addressAr, b.addressEn)}</p>
          <div class="branch__meta">
            <span>${icon('clock')} <bdi>${b.hours}</bdi></span>
            <span>${icon('phone')} <bdi>19999</bdi></span>
          </div>
        </div>
        <a class="branch__map" href="${mapUrl}" target="_blank" rel="noreferrer">${pick('الخريطة', 'Map')}</a>
      </div>
    `;
  }).join('');

  return `
    ${filters}
    <p class="branches-count">${pick(`${branches.length} فروع`, `${branches.length} stores`)}</p>
    <div class="branches">${cards}</div>
  `;
}

/* ---------- 5. Order tracking ---------- */

// Demo only: there is no real server, so the order status is calculated from the order number
function findOrder(orderNumber) {
  const clean = orderNumber.trim().toUpperCase().replace(/\s/g, '');
  const match = clean.match(/^LV-?(\d{5})$/);
  if (!match) return { error: true };
  const digitsSum = match[1].split('').reduce((sum, d) => sum + Number(d), 0);
  return { orderNumber: 'LV-' + match[1], stage: digitsSum % TRACKING_STEPS.length };
}

function formatDate(daysFromToday) {
  const date = new Date();
  date.setDate(date.getDate() + daysFromToday);
  return date.toLocaleDateString(state.lang === 'ar' ? 'ar-EG' : 'en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
}

function renderTrackBody() {
  const result = popupState.trackResult;

  const form = `
    <form class="track-form" id="track-form">
      <label for="track-input">${pick('رقم الطلب', 'Order number')}</label>
      <div class="track-form__row">
        <input type="text" id="track-input" placeholder="LV-10236" value="${escapeHtml(popupState.trackInput)}" dir="ltr" autocomplete="off">
        <button type="submit">${icon('search')}<span>${pick('تتبع', 'Track')}</span></button>
      </div>
      <p class="track-form__hint">${pick('ستجدين رقم الطلب في رسالة التأكيد (مثال: LV-10236)', 'You can find it in your confirmation message (e.g. LV-10236)')}</p>
    </form>
  `;

  if (!result) {
    return form + `
      <div class="track-empty">
        ${icon('package')}
        <p>${pick('اكتبي رقم طلبك لمعرفة حالته', 'Enter your order number to see its status')}</p>
      </div>
    `;
  }

  if (result.error) {
    return form + `<div class="alert alert--error">${pick('رقم الطلب غير صحيح. يجب أن يكون بالشكل LV-12345', 'Invalid order number. It should look like LV-12345')}</div>`;
  }

  const lastStage = TRACKING_STEPS.length - 1;
  const delivered = result.stage === lastStage;

  // Each step gets a date: past steps before today, future steps after today
  const timeline = TRACKING_STEPS.map((step, i) => {
    const status = i < result.stage ? 'done' : i === result.stage ? 'current' : 'todo';
    return `
      <li class="timeline__step timeline__step--${status}">
        <span class="timeline__dot">${status === 'todo' ? '' : icon('check')}</span>
        <div>
          <strong>${pick(step.ar, step.en)}</strong>
          <span>${formatDate(i - result.stage)}</span>
        </div>
      </li>
    `;
  }).join('');

  return form + `
    <div class="track-result">
      <div class="track-result__head">
        <div>
          <span>${pick('رقم الطلب', 'Order')}</span>
          <strong dir="ltr">${result.orderNumber}</strong>
        </div>
        <div>
          <span>${delivered ? pick('تاريخ التوصيل', 'Delivered on') : pick('التوصيل المتوقع', 'Expected delivery')}</span>
          <strong>${formatDate(lastStage - result.stage)}</strong>
        </div>
      </div>
      <ol class="timeline">${timeline}</ol>
    </div>
  `;
}

// Makes user-typed text safe to put inside HTML
function escapeHtml(text) {
  return text.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
}

function trackOrder(orderNumber) {
  popupState.trackInput = orderNumber.trim();
  popupState.trackResult = findOrder(orderNumber);
  renderPopup();
}

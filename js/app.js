/* =========================================================
   Le Voile Stores - plain JavaScript (no frameworks)
   Data (PRODUCTS, CATEGORIES, COLORS, MATERIALS, translations)
   comes from js/data.js; the footer popups from js/popups.js.
   ========================================================= */

/* ---------- Extra texts ---------- */
const extraTexts = {
  ar: {
    otherLanguage: 'English',
    promoEyebrow: 'عرض خاص',
    promoTitle: 'خصم إضافي 10% على طلبك',
    promoDesc: 'انسخي الكود واستخدميه في حقيبة التسوق.',
    copyCode: 'انسخي الكود',
    codeCopied: 'تم نسخ الكود VOILE10',
    fastDelivery: 'توصيل لكل المحافظات',
    returns14: 'استبدال خلال 14 يوماً',
    chooseSize: 'اختاري المقاس أولاً',
    cashOnDelivery: 'الدفع عند الاستلام',
    linkReturns: 'سياسة الاستبدال والاسترجاع',
    linkSizeGuide: 'دليل المقاسات والعناية بالأقمشة',
    linkBranches: 'فروع لو فوال في مصر',
    linkTrack: 'تتبع الشحنة',
    linkFaq: 'الأسئلة الشائعة'
  },
  en: {
    otherLanguage: 'العربية',
    promoEyebrow: 'Special offer',
    promoTitle: 'Extra 10% off your order',
    promoDesc: 'Copy the code and use it in your shopping bag.',
    copyCode: 'Copy code',
    codeCopied: 'Code VOILE10 copied',
    fastDelivery: 'Delivery to all governorates',
    returns14: 'Exchange within 14 days',
    chooseSize: 'Choose a size first',
    cashOnDelivery: 'Cash on Delivery',
    linkReturns: 'Returns & Exchange Policy',
    linkSizeGuide: 'Size Guide & Fabric Care',
    linkBranches: 'Le Voile Stores in Egypt',
    linkTrack: 'Track Shipment',
    linkFaq: 'FAQ'
  }
};

/* ---------- Hero slides (photos from levoilestores.com) ---------- */
const SLIDES = [
  {
    eyebrowAr: 'وصل حديثاً', eyebrowEn: 'New Season',
    titleAr: 'طرح الكتان والماربل الناعمة', titleEn: 'Soft Linen & Marble Scarves',
    descAr: 'خامات خفيفة وألوان هادئة لإطلالة يومية أنيقة ومريحة.', descEn: 'Lightweight fabrics and calm tones for an elegant, comfortable everyday look.',
    tagAr: 'تبدأ من 180 ج.م', tagEn: 'From 180 EGP',
    image: '12_4c71fbb0-a682-4b18-920c-b55aca8f8f95.jpg',
    primary: { category: 'scarves', ar: 'تسوقي الطرح', en: 'Shop Scarves' },
    secondary: { category: 'new', ar: 'وصل حديثاً', en: 'New Arrivals' }
  },
  {
    eyebrowAr: 'تخفيضات الصيف', eyebrowEn: 'Summer Sale',
    titleAr: 'خصم حتى 30% على الملابس', titleEn: 'Up to 30% Off Fashion Wear',
    descAr: 'قمصان وبنطلونات وجيبات من الكتان والساتان بأسعار مميزة.', descEn: 'Linen and satin shirts, pants and skirts at special prices.',
    tagAr: 'حتى -30%', tagEn: 'Up to -30%',
    image: '5_2c279d39-0382-46da-ae5d-2ef65cb302f3.jpg',
    primary: { category: 'sale', ar: 'تسوقي التخفيضات', en: 'Shop the Sale' },
    secondary: { category: 'fashion', ar: 'كل الملابس', en: 'All Fashion Wear' }
  },
  {
    eyebrowAr: 'احتشام يومي', eyebrowEn: 'Everyday Modesty',
    titleAr: 'عبايات وإسدالات لكل يوم', titleEn: 'Abayas & Isdals for Every Day',
    descAr: 'قصات واسعة وخامات مريحة للصلاة والخروج.', descEn: 'Relaxed cuts and comfortable fabrics for prayer and outings.',
    tagAr: 'خامات مريحة', tagEn: 'Comfortable fabrics',
    image: '111_e46aea23-ed35-4273-90b4-5f3a87279d5c.jpg',
    primary: { category: 'abayas', ar: 'تسوقي العبايات', en: 'Shop Abayas' },
    secondary: { category: 'isdals', ar: 'الإسدالات', en: 'Isdals' }
  }
];

const FREE_SHIPPING_THRESHOLD = 1000;
const SHIPPING_FEE = 50;
const VALID_COUPONS = ['VOILE10'];

/* ---------- SVG icons (paths from the open-source Lucide icon set) ---------- */
const ICONS = {
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  chevronUp: '<path d="m18 15-6-6-6 6"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  external: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  rotate: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  card: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  xCircle: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  mapPin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  package: '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>',
  ruler: '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>'
};

// Returns the <svg> markup for an icon name
function icon(name, extraClass = '') {
  return `<svg class="icon icon-${name} ${extraClass}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

// Replaces every <i data-icon="..."> placeholder in the HTML with a real SVG
function renderStaticIcons() {
  document.querySelectorAll('i[data-icon]').forEach(el => {
    const wrapper = document.createElement('span');
    wrapper.innerHTML = icon(el.dataset.icon, el.className);
    el.replaceWith(wrapper.firstElementChild);
  });
}

/* ---------- localStorage helpers ---------- */
function loadFromStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage may be blocked (private mode) - the site still works without it
  }
}

/* ---------- App state ---------- */
const state = {
  lang: loadFromStorage('lv_lang', 'ar'),
  category: 'all',
  searchQuery: '',
  sortBy: 'featured',
  material: 'all',
  saleOnly: false,
  under200: false,
  currentSlide: 0,
  cart: loadFromStorage('lv_cart_v2', []),         // [{ id, productId, colorIndex, size, quantity }]
  wishlist: loadFromStorage('lv_wishlist_v2', []), // [productId, ...]
  appliedCoupon: null,
  cardColors: {},   // productId -> colour index picked on the product card
  modal: null       // { productId, gallery, imageIndex, colorIndex, sizeIndex, quantity, added }
};

let sliderTimer = null;

/* ---------- Small helpers ---------- */
function t() {
  return { ...translations[state.lang], ...extraTexts[state.lang] };
}

function pick(ar, en) {
  return state.lang === 'ar' ? ar : en;
}

// Reads a nested key such as "footer.aboutDesc"
function getText(path) {
  return path.split('.').reduce((obj, key) => (obj ? obj[key] : ''), t()) || '';
}

function formatPrice(amount) {
  return `${Number(amount).toLocaleString('en-US')} ${t().egp}`;
}

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function productTitle(product) {
  return pick(product.titleAr, product.titleEn);
}

function isNew(product) {
  return product.date >= NEW_SINCE;
}

function onSale(product) {
  return Boolean(product.oldPrice && product.oldPrice > product.price);
}

function discountPercent(product) {
  return onSale(product) ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
}

function categoryName(id) {
  const cat = CATEGORIES.find(c => c.id === id);
  return cat ? pick(cat.ar, cat.en) : '';
}

function productSizes(product) {
  return product.sizes && product.sizes.length ? product.sizes : [t().oneSize];
}

// Returns { hex, name, image } for a colour of a product
function getColor(product, index) {
  const entry = product.colors[index];
  if (!entry) return null;
  // Printed designs are written as ['#hex', 'Design 1', image]
  if (entry[0].startsWith('#')) {
    return { hex: entry[0], name: pick(entry[1].replace('Design', 'تصميم'), entry[1]), image: entry[2] };
  }
  const [nameAr, hex] = COLORS[entry[0]] || [entry[0], '#cccccc'];
  return { hex, name: pick(nameAr, entry[0]), image: entry[1] };
}

// Image shown for a product (the chosen colour, or the main photo)
function productImage(product, colorIndex) {
  const color = colorIndex === undefined ? null : getColor(product, colorIndex);
  return color && color.image ? color.image : product.images[0];
}

function inCategory(product, categoryId) {
  if (categoryId === 'all') return true;
  if (categoryId === 'new') return isNew(product);
  if (categoryId === 'sale') return onSale(product);
  return product.category === categoryId;
}

function isWishlisted(id) {
  return state.wishlist.includes(id);
}

/* ---------- Cart calculations ---------- */
function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + getProduct(item.productId).price * item.quantity, 0);
}

function discountAmount() {
  return state.appliedCoupon ? Math.round(cartTotal() * 0.1) : 0;
}

/* =========================================================
   Toast notifications (replace alert boxes)
   ========================================================= */
function showToast(message, options = {}) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast__icon">${icon(options.icon || 'check')}</span>
    <p>${message}</p>
    ${options.actionLabel ? `<button type="button">${options.actionLabel}</button>` : ''}
  `;
  if (options.actionLabel) {
    toast.querySelector('button').addEventListener('click', () => {
      options.onAction();
      removeToast(toast);
    });
  }
  const container = document.getElementById('toasts');
  container.appendChild(toast);
  // Keep at most 3 toasts on screen
  while (container.children.length > 3) container.firstElementChild.remove();
  setTimeout(() => removeToast(toast), 3500);
}

function removeToast(toast) {
  toast.classList.add('hide');
  setTimeout(() => toast.remove(), 250);
}

function bumpBadge(id) {
  const badge = document.getElementById(id);
  badge.classList.remove('bump');
  void badge.offsetWidth; // restart the animation
  badge.classList.add('bump');
}

/* =========================================================
   Rendering
   ========================================================= */

// Fills every element with data-t / data-t-placeholder in the current language
function applyTranslations() {
  document.querySelectorAll('[data-t]').forEach(el => {
    el.textContent = getText(el.dataset.t);
  });
  document.querySelectorAll('[data-t-placeholder]').forEach(el => {
    el.placeholder = getText(el.dataset.tPlaceholder);
  });
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
}

function renderAnnouncement() {
  // The list is repeated so the scrolling text never shows a gap
  const items = t().announcements.map(text => `<span>${text}</span>`).join('');
  document.getElementById('announcement-track').innerHTML = items.repeat(6);
}

function renderSearchTags() {
  document.getElementById('search-tags').innerHTML = t().suggestionTags
    .map(tag => `<button class="search__tag" data-tag="${tag}">${tag}</button>`)
    .join('');
}

function renderHeaderCounts() {
  const cartBadge = document.getElementById('cart-count');
  cartBadge.textContent = cartCount();
  cartBadge.classList.toggle('hidden', cartCount() === 0);

  const wishBadge = document.getElementById('wishlist-count');
  wishBadge.textContent = state.wishlist.length;
  wishBadge.classList.toggle('hidden', state.wishlist.length === 0);
}

function renderNavigation() {
  const navCategories = CATEGORIES.filter(c => c.id !== 'all');

  document.getElementById('category-nav').innerHTML = navCategories.map(cat => `
    <button class="category-nav__item ${cat.id === 'sale' ? 'category-nav__item--sale' : ''} ${state.category === cat.id ? 'active' : ''}"
            data-action="select-category" data-category="${cat.id}">
      ${pick(cat.ar, cat.en)}
    </button>
  `).join('');

  document.getElementById('mobile-categories').innerHTML = CATEGORIES.map(cat => `
    <button class="mobile-menu__item ${state.category === cat.id ? 'active' : ''}" data-action="select-category" data-category="${cat.id}">
      <img src="${imageUrl(cat.image || PRODUCTS[0].images[0], 120)}" alt="" loading="lazy">
      <span>${pick(cat.ar, cat.en)}</span>
      ${icon('chevronRight', 'flip-rtl')}
    </button>
  `).join('');

  document.getElementById('footer-categories').innerHTML = navCategories.map(cat => `
    <li><a href="#catalog" data-action="select-category" data-category="${cat.id}">${pick(cat.ar, cat.en)}</a></li>
  `).join('');
}

function renderHero() {
  const slidesHtml = SLIDES.map((slide, i) => `
    <div class="hero__slide ${i === state.currentSlide ? 'active' : ''}" aria-hidden="${i !== state.currentSlide}">
      <div class="container hero__inner">
        <div class="hero__text">
          <span class="hero__eyebrow">${pick(slide.eyebrowAr, slide.eyebrowEn)}</span>
          <h1 class="hero__title">${pick(slide.titleAr, slide.titleEn)}</h1>
          <p class="hero__desc">${pick(slide.descAr, slide.descEn)}</p>
          <div class="hero__buttons">
            <button class="btn btn--primary" data-action="select-category" data-category="${slide.primary.category}">
              ${pick(slide.primary.ar, slide.primary.en)} ${icon('arrowRight', 'flip-rtl')}
            </button>
            <button class="btn btn--outline" data-action="select-category" data-category="${slide.secondary.category}">
              ${pick(slide.secondary.ar, slide.secondary.en)}
            </button>
          </div>
        </div>
        <div class="hero__media">
          <img src="${imageUrl(slide.image, 1000)}" alt="" ${i === 0 ? '' : 'loading="lazy"'}>
          <span class="hero__tag">${icon('sparkles')} ${pick(slide.tagAr, slide.tagEn)}</span>
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('hero').innerHTML = `
    <div class="hero__slides">${slidesHtml}</div>
    <div class="hero__controls">
      <button class="hero__arrow" data-action="prev-slide" aria-label="Previous slide">${icon('chevronLeft', 'flip-rtl')}</button>
      <div class="hero__dots">
        ${SLIDES.map((_, i) => `<button class="hero__dot ${i === state.currentSlide ? 'active' : ''}" data-action="go-slide" data-index="${i}" aria-label="Slide ${i + 1}"></button>`).join('')}
      </div>
      <button class="hero__arrow" data-action="next-slide" aria-label="Next slide">${icon('chevronRight', 'flip-rtl')}</button>
    </div>
  `;
}

function showSlide(index) {
  state.currentSlide = (index + SLIDES.length) % SLIDES.length;
  document.querySelectorAll('.hero__slide').forEach((el, i) => {
    el.classList.toggle('active', i === state.currentSlide);
    el.setAttribute('aria-hidden', i !== state.currentSlide);
  });
  document.querySelectorAll('.hero__dot').forEach((el, i) => el.classList.toggle('active', i === state.currentSlide));
}

function startSlider() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => showSlide(state.currentSlide + 1), 6000);
}

function renderPerks() {
  document.getElementById('perks').innerHTML = t().perks.map(([iconName, title, desc]) => `
    <div class="perk">
      <span class="perk__icon">${icon(iconName)}</span>
      <div><strong>${title}</strong><span>${desc}</span></div>
    </div>
  `).join('');
}

function renderCategoryCards() {
  document.getElementById('category-cards').innerHTML = CATEGORIES.filter(c => c.image).map(cat => `
    <button class="category-card" data-action="select-category" data-category="${cat.id}">
      <img src="${imageUrl(cat.image, 500)}" alt="${pick(cat.ar, cat.en)}" loading="lazy">
      <span class="category-card__label">${pick(cat.ar, cat.en)} ${icon('arrowRight', 'flip-rtl')}</span>
    </button>
  `).join('');
}

function renderMaterialSelect() {
  const used = [...new Set(PRODUCTS.map(p => p.material).filter(Boolean))];
  const select = document.getElementById('material-select');
  select.innerHTML = `<option value="all">${t().allMaterials}</option>` +
    used.map(key => `<option value="${key}">${pick(MATERIALS[key].ar, MATERIALS[key].en)}</option>`).join('');
  select.value = state.material;
}

function getFilteredProducts() {
  const query = state.searchQuery.toLowerCase().trim();

  const list = PRODUCTS.filter(product => {
    if (!inCategory(product, state.category)) return false;
    if (state.saleOnly && !onSale(product)) return false;
    if (state.under200 && product.price >= 200) return false;
    if (state.material !== 'all' && product.material !== state.material) return false;
    if (query) {
      const material = MATERIALS[product.material] || { ar: '', en: '' };
      const colorNames = product.colors.map(c => (COLORS[c[0]] || [c[1] || '']).join(' ') + ' ' + c[0]).join(' ');
      const text = [product.titleEn, product.titleAr, material.ar, material.en, categoryName(product.category), colorNames].join(' ').toLowerCase();
      if (!text.includes(query)) return false;
    }
    return true;
  });

  if (state.sortBy === 'price-low') list.sort((a, b) => a.price - b.price);
  if (state.sortBy === 'price-high') list.sort((a, b) => b.price - a.price);
  if (state.sortBy === 'newest') list.sort((a, b) => b.date.localeCompare(a.date));
  return list;
}

function productCardHtml(product, index) {
  const texts = t();
  const chosenColor = state.cardColors[product.id];
  const wished = isWishlisted(product.id);
  const title = productTitle(product);
  const maxSwatches = 5;

  const swatches = product.colors.length > 1 ? `
    <div class="swatches">
      ${product.colors.slice(0, maxSwatches).map((_, i) => {
        const color = getColor(product, i);
        return `<button class="swatch ${i === chosenColor ? 'active' : ''}" style="background-color:${color.hex}"
                  title="${color.name}" aria-label="${color.name}"
                  data-action="card-color" data-id="${product.id}" data-index="${i}"></button>`;
      }).join('')}
      ${product.colors.length > maxSwatches ? `<span class="swatches__more">+${product.colors.length - maxSwatches}</span>` : ''}
    </div>` : '';

  return `
    <article class="card" data-card="${product.id}" style="animation-delay:${Math.min(index, 8) * 40}ms">
      <div class="card__media" data-action="quick-view" data-id="${product.id}">
        <img class="card__img card__img--main" src="${imageUrl(productImage(product, chosenColor), 600)}" alt="${title}" loading="lazy">
        ${product.images[1] ? `<img class="card__img card__img--hover" src="${imageUrl(product.images[1], 600)}" alt="" loading="lazy">` : ''}

        <div class="card__badges">
          ${onSale(product) ? `<span class="badge badge--sale">-${discountPercent(product)}%</span>` : ''}
          ${isNew(product) ? `<span class="badge badge--new">${texts.newBadge}</span>` : ''}
        </div>

        <button class="wish-btn ${wished ? 'active' : ''}" data-action="toggle-wishlist" data-id="${product.id}" aria-label="${texts.wishlist}">
          ${icon('heart')}
        </button>

        <button class="quick-add" data-action="quick-add" data-id="${product.id}" aria-label="${texts.addToCart}">
          ${icon('bag')}<span>${texts.addToCart}</span>
        </button>
      </div>

      <div class="card__body">
        <div class="card__meta">
          <span>${categoryName(product.category)}</span>
          ${product.colors.length > 1 ? `<span>${texts.colorsCount.replace('{count}', product.colors.length)}</span>` : ''}
        </div>
        <h3 class="card__title" data-action="quick-view" data-id="${product.id}">${title}</h3>
        <div class="price-row">
          <span class="price ${onSale(product) ? 'price--sale' : ''}">${formatPrice(product.price)}</span>
          ${onSale(product) ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
        </div>
        ${swatches}
      </div>
    </article>
  `;
}

// Chips, filters, counts and the product grid
function renderCatalog() {
  const texts = t();
  const products = getFilteredProducts();

  document.getElementById('category-chips').innerHTML = CATEGORIES.map(cat => {
    const count = PRODUCTS.filter(p => inCategory(p, cat.id)).length;
    return `<button class="chip ${state.category === cat.id ? 'active' : ''}" data-action="select-category" data-category="${cat.id}" data-no-scroll="true">
      ${pick(cat.ar, cat.en)}<span class="chip__count">${count}</span>
    </button>`;
  }).join('');

  document.getElementById('toggle-sale').classList.toggle('active', state.saleOnly);
  document.getElementById('toggle-under200').classList.toggle('active', state.under200);
  document.getElementById('material-select').value = state.material;
  document.getElementById('sort-select').value = state.sortBy;
  document.getElementById('results-count').textContent = texts.resultsFound.replace('{count}', products.length);

  const hasFilters = state.category !== 'all' || state.saleOnly || state.under200 || state.material !== 'all' || state.searchQuery !== '';
  document.getElementById('clear-filters').classList.toggle('hidden', !hasFilters);

  const grid = document.getElementById('product-grid');
  grid.innerHTML = products.map(productCardHtml).join('');
  grid.classList.toggle('hidden', products.length === 0);
  document.getElementById('empty-state').classList.toggle('hidden', products.length > 0);

  renderNavigation();
}

function refreshWishlistButtons() {
  document.querySelectorAll('.wish-btn, .modal-wish').forEach(btn => {
    btn.classList.toggle('active', isWishlisted(btn.dataset.id));
  });
  renderHeaderCounts();
  renderWishlist();
}

/* ---------- Product quick view ---------- */
function openModal(productId) {
  const product = getProduct(productId);
  // Gallery = product photos + colour photos (without duplicates)
  const gallery = [...new Set([...product.images, ...product.colors.map((_, i) => getColor(product, i).image)])].slice(0, 8);
  const chosen = state.cardColors[productId];
  const colorIndex = chosen || 0;

  state.modal = {
    productId,
    gallery,
    colorIndex,
    imageIndex: chosen !== undefined ? Math.max(0, gallery.indexOf(getColor(product, chosen).image)) : 0,
    sizeIndex: productSizes(product).length > 1 ? -1 : 0, // -1 = not chosen yet
    quantity: 1,
    added: false
  };
  renderModal();
  document.getElementById('product-modal').classList.remove('hidden');
  updateScrollLock();
}

function closeModal() {
  state.modal = null;
  document.getElementById('product-modal').classList.add('hidden');
  updateScrollLock();
}

function renderModal() {
  if (!state.modal) return;
  const m = state.modal;
  const product = getProduct(m.productId);
  const texts = t();
  const color = getColor(product, m.colorIndex);
  const sizes = productSizes(product);
  const material = MATERIALS[product.material];

  const colorsHtml = product.colors.length ? `
    <div>
      <div class="option-label">${texts.color}: <span>${color.name}</span></div>
      <div class="options">
        ${product.colors.map((_, i) => {
          const c = getColor(product, i);
          return `<button class="color-option ${i === m.colorIndex ? 'active' : ''}" style="background-color:${c.hex}" title="${c.name}" aria-label="${c.name}" data-action="modal-color" data-index="${i}"></button>`;
        }).join('')}
      </div>
    </div>` : '';

  document.getElementById('modal-content').innerHTML = `
    <button class="icon-btn modal__close" data-action="close-modal" aria-label="Close">${icon('x')}</button>

    <div class="modal__gallery">
      <div class="modal__main-img">
        <img src="${imageUrl(m.gallery[m.imageIndex], 1000)}" alt="${productTitle(product)}">
        ${onSale(product) ? `<span class="badge badge--sale">-${discountPercent(product)}%</span>` : ''}
      </div>
      ${m.gallery.length > 1 ? `
        <div class="thumbs no-scrollbar">
          ${m.gallery.map((img, i) => `
            <button class="thumb ${i === m.imageIndex ? 'active' : ''}" data-action="modal-image" data-index="${i}" aria-label="Photo ${i + 1}">
              <img src="${imageUrl(img, 160)}" alt="">
            </button>`).join('')}
        </div>` : ''}
    </div>

    <div class="modal__details">
      <div>
        <span class="modal__category">${categoryName(product.category)}</span>
        <h2 class="modal__title">${productTitle(product)}</h2>
      </div>

      <div class="modal__price-row">
        <span class="price ${onSale(product) ? 'price--sale' : ''}">${formatPrice(product.price)}</span>
        ${onSale(product) ? `
          <span class="price-old">${formatPrice(product.oldPrice)}</span>
          <span class="save-pill">${texts.save} ${formatPrice(product.oldPrice - product.price)}</span>` : ''}
      </div>

      ${colorsHtml}

      <div>
        <div class="option-label">${texts.size}:
          <span>${m.sizeIndex >= 0 ? sizes[m.sizeIndex] : texts.chooseSize}</span>
        </div>
        <div class="options">
          ${sizes.map((size, i) => `<button class="size-option ${i === m.sizeIndex ? 'active' : ''}" data-action="modal-size" data-index="${i}">${size}</button>`).join('')}
        </div>
      </div>

      <div class="modal__actions">
        <div class="qty">
          <button data-action="modal-qty" data-change="-1" aria-label="-">−</button>
          <span>${m.quantity}</span>
          <button data-action="modal-qty" data-change="1" aria-label="+">+</button>
        </div>
        <button class="btn btn--primary add-btn ${m.added ? 'added' : ''}" data-action="modal-add" ${m.added ? 'disabled' : ''}>
          ${m.added ? `${icon('check')} ${texts.added}` : `${icon('bag')} ${texts.addToCart}`}
        </button>
        <button class="modal-wish ${isWishlisted(product.id) ? 'active' : ''}" data-action="toggle-wishlist" data-id="${product.id}" aria-label="${texts.wishlist}">
          ${icon('heart')}
        </button>
      </div>

      <ul class="features">
        ${pick(product.featuresAr, product.featuresEn).map(f => `<li>${icon('check')}<span>${f}</span></li>`).join('')}
      </ul>

      ${material || product.dims ? `
        <dl class="spec-table">
          ${material ? `<dt>${texts.material}</dt><dd>${pick(material.ar, material.en)}</dd>` : ''}
          ${product.dims ? `<dt>${texts.dimensions}</dt><dd dir="ltr">${product.dims}</dd>` : ''}
        </dl>` : ''}

      <div class="modal__perks">
        <div>${icon('truck')}<span>${texts.fastDelivery}</span></div>
        <div>${icon('refresh')}<span>${texts.returns14}</span></div>
      </div>

      <a class="store-link" href="https://levoilestores.com/products/${product.id}" target="_blank" rel="noreferrer">
        ${texts.viewOnStore} ${icon('external')}
      </a>
    </div>
  `;
}

/* ---------- Cart ---------- */
function openCart() {
  closeWishlist();
  renderCart();
  document.getElementById('cart-drawer').classList.remove('hidden');
  updateScrollLock();
}

function closeCart() {
  document.getElementById('cart-drawer').classList.add('hidden');
  updateScrollLock();
}

function saveCart() {
  saveToStorage('lv_cart_v2', state.cart);
  renderHeaderCounts();
  renderCart();
}

function addToCart(productId, colorIndex = 0, size, quantity = 1) {
  const product = getProduct(productId);
  const chosenSize = size || productSizes(product)[0];
  const itemId = `${productId}|${colorIndex}|${chosenSize}`;

  const existing = state.cart.find(item => item.id === itemId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ id: itemId, productId, colorIndex, size: chosenSize, quantity });
  }
  saveCart();
  bumpBadge('cart-count');
  showToast(t().addedToCart.replace('{name}', productTitle(product)), {
    icon: 'bag',
    actionLabel: t().viewBag,
    onAction: openCart
  });
}

function updateQuantity(itemId, quantity) {
  if (quantity <= 0) {
    state.cart = state.cart.filter(item => item.id !== itemId);
  } else {
    state.cart.find(item => item.id === itemId).quantity = quantity;
  }
  saveCart();
}

function lineItemImage(product, colorIndex) {
  return imageUrl(productImage(product, product.colors.length ? colorIndex : undefined), 200);
}

function renderCart() {
  const texts = t();
  const total = cartTotal();
  const discount = discountAmount();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - total);
  const progress = Math.min(100, (total / FREE_SHIPPING_THRESHOLD) * 100);
  const shippingFee = total >= FREE_SHIPPING_THRESHOLD || total === 0 ? 0 : SHIPPING_FEE;
  const finalTotal = Math.max(0, total - discount + shippingFee);

  const head = `
    <div class="panel-head">
      <h2>${texts.cartTitle} <small>(${cartCount()})</small></h2>
      <button class="icon-btn" data-action="close-cart" aria-label="Close">${icon('x')}</button>
    </div>`;

  if (state.cart.length === 0) {
    document.getElementById('cart-content').innerHTML = head + `
      <div class="drawer-empty">
        <div class="drawer-empty__icon">${icon('bag')}</div>
        <h3>${texts.cartEmpty}</h3>
        <p>${texts.cartEmptyDesc}</p>
        <button class="btn btn--primary" data-action="close-cart" data-scroll-catalog="true">${texts.startShopping}</button>
      </div>`;
    return;
  }

  const items = state.cart.map(item => {
    const product = getProduct(item.productId);
    const color = getColor(product, item.colorIndex);
    return `
      <div class="line-item">
        <img class="line-item__img" src="${lineItemImage(product, item.colorIndex)}" alt="" data-action="quick-view" data-id="${product.id}">
        <div class="line-item__info">
          <div class="line-item__top">
            <h4 class="line-item__title">${productTitle(product)}</h4>
            <button class="line-item__remove" data-action="remove-item" data-id="${item.id}" aria-label="${texts.remove}">${icon('trash')}</button>
          </div>
          <div class="line-item__variant">
            ${color ? `<span class="line-item__dot" style="background:${color.hex}"></span><span>${color.name}</span><span>•</span>` : ''}
            <span>${item.size}</span>
          </div>
          <div class="line-item__bottom">
            <div class="qty qty--small">
              <button data-action="item-qty" data-id="${item.id}" data-change="-1" aria-label="-">−</button>
              <span>${item.quantity}</span>
              <button data-action="item-qty" data-id="${item.id}" data-change="1" aria-label="+">+</button>
            </div>
            <strong class="price">${formatPrice(product.price * item.quantity)}</strong>
          </div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('cart-content').innerHTML = head + `
    <div class="shipping-progress">
      <p>${icon('truck')} ${remaining > 0 ? texts.freeShippingNotice.replace('{amount}', remaining) : texts.freeShippingQualified}</p>
      <div class="progress"><div class="progress__bar" style="width:${progress}%"></div></div>
    </div>

    <div class="drawer__items">${items}</div>

    <div class="drawer__footer">
      ${state.appliedCoupon
        ? `<div class="alert alert--success">${icon('checkCircle')} ${texts.couponApplied.replace('{code}', state.appliedCoupon)}</div>`
        : `<form class="coupon-form" id="coupon-form">
             <input type="text" id="coupon-input" placeholder="${texts.couponCode}" aria-label="${texts.couponCode}">
             <button type="submit">${texts.apply}</button>
           </form>
           <div class="alert alert--error hidden" id="coupon-error">${icon('xCircle')} ${texts.couponInvalid}</div>`}

      <div class="summary">
        <div class="summary__row"><span>${texts.subtotal}</span><span>${formatPrice(total)}</span></div>
        ${discount > 0 ? `<div class="summary__row summary__row--green"><span>${texts.discount}</span><span>-${formatPrice(discount)}</span></div>` : ''}
        <div class="summary__row ${shippingFee === 0 ? 'summary__row--green' : ''}">
          <span>${texts.shipping}</span><span>${shippingFee === 0 ? texts.free : formatPrice(shippingFee)}</span>
        </div>
        <div class="summary__row summary__row--total"><span>${texts.total}</span><span>${formatPrice(finalTotal)}</span></div>
      </div>

      <button class="btn btn--primary btn--block" data-action="checkout" data-total="${finalTotal}">
        ${texts.checkout} ${icon('arrowRight', 'flip-rtl')}
      </button>
      <div class="secure-note">${icon('shield')} ${texts.secureNote}</div>
    </div>`;
}

function applyCoupon(code) {
  const clean = code.trim().toUpperCase();
  if (VALID_COUPONS.includes(clean)) {
    state.appliedCoupon = clean;
    renderCart();
    return;
  }
  document.getElementById('coupon-error').classList.remove('hidden');
}

/* ---------- Wishlist drawer ---------- */
function openWishlist() {
  closeCart();
  renderWishlist();
  document.getElementById('wishlist-drawer').classList.remove('hidden');
  updateScrollLock();
}

function closeWishlist() {
  document.getElementById('wishlist-drawer').classList.add('hidden');
  updateScrollLock();
}

function toggleWishlist(id) {
  const adding = !isWishlisted(id);
  state.wishlist = adding ? [...state.wishlist, id] : state.wishlist.filter(w => w !== id);
  saveToStorage('lv_wishlist_v2', state.wishlist);
  refreshWishlistButtons();
  if (adding) bumpBadge('wishlist-count');
  showToast(adding ? t().addedToWishlist : t().removedFromWishlist, { icon: 'heart' });
}

function renderWishlist() {
  const texts = t();
  const items = state.wishlist.map(getProduct).filter(Boolean);

  const head = `
    <div class="panel-head">
      <h2>${texts.wishlist} <small>(${items.length})</small></h2>
      <button class="icon-btn" data-action="close-wishlist" aria-label="Close">${icon('x')}</button>
    </div>`;

  if (items.length === 0) {
    document.getElementById('wishlist-content').innerHTML = head + `
      <div class="drawer-empty">
        <div class="drawer-empty__icon">${icon('heart')}</div>
        <h3>${texts.wishlistEmpty}</h3>
        <p>${texts.wishlistEmptyDesc}</p>
        <button class="btn btn--primary" data-action="close-wishlist" data-scroll-catalog="true">${texts.startShopping}</button>
      </div>`;
    return;
  }

  document.getElementById('wishlist-content').innerHTML = head + `
    <div class="drawer__items">
      ${items.map(product => `
        <div class="line-item">
          <img class="line-item__img" src="${imageUrl(product.images[0], 200)}" alt="" data-action="quick-view" data-id="${product.id}">
          <div class="line-item__info">
            <div class="line-item__top">
              <h4 class="line-item__title">${productTitle(product)}</h4>
              <button class="line-item__remove" data-action="toggle-wishlist" data-id="${product.id}" aria-label="${texts.remove}">${icon('trash')}</button>
            </div>
            <div class="price-row">
              <span class="price ${onSale(product) ? 'price--sale' : ''}">${formatPrice(product.price)}</span>
              ${onSale(product) ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
            </div>
            <div class="line-item__bottom">
              <button class="btn btn--primary" data-action="quick-add" data-id="${product.id}">${icon('bag')} ${texts.moveToCart}</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>`;
}

/* ---------- Mobile menu ---------- */
function openMenu() {
  document.getElementById('mobile-menu').classList.remove('hidden');
  updateScrollLock();
}

function closeMenu() {
  document.getElementById('mobile-menu').classList.add('hidden');
  updateScrollLock();
}

// Stop the page behind an open popup from scrolling
function updateScrollLock() {
  const anyOpen = document.querySelector('.overlay:not(.hidden)') !== null;
  document.body.classList.toggle('no-scroll', anyOpen);
}

function closeAllOverlays() {
  closeModal();
  closeCart();
  closeWishlist();
  closeMenu();
  closePopup();
}

/* ---------- Search & filters ---------- */
function setSearch(value) {
  state.searchQuery = value;
  document.getElementById('search-desktop').value = value;
  document.getElementById('search-mobile').value = value;
  document.querySelector('.search__clear').classList.toggle('hidden', value === '');
  renderCatalog();
}

function scrollToCatalog() {
  const top = document.getElementById('catalog').getBoundingClientRect().top + window.scrollY;
  const headerHeight = document.getElementById('header').offsetHeight;
  window.scrollTo({ top: top - headerHeight + 8, behavior: 'smooth' });
}

function selectCategory(categoryId, scroll = true) {
  state.category = categoryId;
  renderCatalog();
  closeMenu();
  if (scroll) scrollToCatalog();
}

function clearFilters() {
  state.category = 'all';
  state.saleOnly = false;
  state.under200 = false;
  state.material = 'all';
  setSearch('');
}

/* ---------- Render everything (start + language change) ---------- */
function renderAll() {
  applyTranslations();
  renderAnnouncement();
  renderSearchTags();
  renderHeaderCounts();
  renderHero();
  renderPerks();
  renderCategoryCards();
  renderMaterialSelect();
  renderCatalog();
  renderCart();
  renderWishlist();
  renderModal();
  renderPopup();
}

/* =========================================================
   Events
   ========================================================= */

// One click listener for the whole page ("event delegation").
document.addEventListener('click', event => {
  const el = event.target.closest('[data-action]');
  if (!el) return;

  const action = el.dataset.action;
  const id = el.dataset.id;
  const index = Number(el.dataset.index);

  switch (action) {
    // Header
    case 'toggle-lang':
      state.lang = state.lang === 'ar' ? 'en' : 'ar';
      saveToStorage('lv_lang', state.lang);
      renderAll();
      break;
    case 'login':
      showToast(t().loginSoon, { icon: 'user' });
      break;
    case 'open-menu': openMenu(); break;
    case 'close-menu': closeMenu(); break;
    case 'clear-search': setSearch(''); break;

    // Categories & filters
    case 'select-category':
      event.preventDefault();
      selectCategory(el.dataset.category, !el.dataset.noScroll);
      break;
    case 'toggle-sale':
      state.saleOnly = !state.saleOnly;
      renderCatalog();
      break;
    case 'toggle-under200':
      state.under200 = !state.under200;
      renderCatalog();
      break;
    case 'clear-all':
      clearFilters();
      break;

    // Hero slider
    case 'prev-slide': showSlide(state.currentSlide - 1); startSlider(); break;
    case 'next-slide': showSlide(state.currentSlide + 1); startSlider(); break;
    case 'go-slide': showSlide(index); startSlider(); break;

    // Product cards
    case 'card-color': {
      state.cardColors[id] = index;
      const card = document.querySelector(`[data-card="${id}"]`);
      card.querySelector('.card__img--main').src = imageUrl(productImage(getProduct(id), index), 600);
      card.querySelectorAll('.swatch').forEach((sw, i) => sw.classList.toggle('active', i === index));
      break;
    }
    case 'toggle-wishlist':
      toggleWishlist(id);
      break;
    case 'quick-view':
      closeCart();
      closeWishlist();
      openModal(id);
      break;
    case 'quick-add': {
      const product = getProduct(id);
      // Products with several sizes open the quick view so the size can be chosen
      if (productSizes(product).length > 1) {
        closeWishlist();
        openModal(id);
        break;
      }
      addToCart(id, state.cardColors[id] || 0);
      if (el.classList.contains('quick-add')) {
        el.classList.add('added');
        el.innerHTML = `${icon('check')}<span>${t().added}</span>`;
        setTimeout(() => {
          el.classList.remove('added');
          el.innerHTML = `${icon('bag')}<span>${t().addToCart}</span>`;
        }, 1500);
      }
      break;
    }

    // Quick view
    case 'close-modal': closeModal(); break;
    case 'modal-image':
      state.modal.imageIndex = index;
      renderModal();
      break;
    case 'modal-color': {
      const product = getProduct(state.modal.productId);
      state.modal.colorIndex = index;
      const imageIndex = state.modal.gallery.indexOf(getColor(product, index).image);
      if (imageIndex >= 0) state.modal.imageIndex = imageIndex;
      renderModal();
      break;
    }
    case 'modal-size':
      state.modal.sizeIndex = index;
      renderModal();
      break;
    case 'modal-qty':
      state.modal.quantity = Math.max(1, state.modal.quantity + Number(el.dataset.change));
      renderModal();
      break;
    case 'modal-add': {
      const m = state.modal;
      const product = getProduct(m.productId);
      if (m.sizeIndex < 0) {
        showToast(t().chooseSize, { icon: 'ruler' });
        break;
      }
      addToCart(m.productId, m.colorIndex, productSizes(product)[m.sizeIndex], m.quantity);
      m.added = true;
      renderModal();
      setTimeout(closeModal, 900);
      break;
    }

    // Cart & wishlist
    case 'open-cart': openCart(); break;
    case 'close-cart':
      closeCart();
      if (el.dataset.scrollCatalog) scrollToCatalog();
      break;
    case 'open-wishlist': openWishlist(); break;
    case 'close-wishlist':
      closeWishlist();
      if (el.dataset.scrollCatalog) scrollToCatalog();
      break;
    case 'remove-item': updateQuantity(id, 0); break;
    case 'item-qty': {
      const item = state.cart.find(i => i.id === id);
      updateQuantity(id, item.quantity + Number(el.dataset.change));
      break;
    }
    case 'checkout':
      showToast(t().checkoutDone.replace('{total}', Number(el.dataset.total).toLocaleString('en-US')), { icon: 'checkCircle' });
      state.cart = [];
      state.appliedCoupon = null;
      saveCart();
      closeCart();
      break;

    // Promo code
    case 'copy-code':
      if (navigator.clipboard) navigator.clipboard.writeText('VOILE10').catch(() => {});
      showToast(t().codeCopied, { icon: 'copy' });
      break;

    // Customer-care popups (js/popups.js)
    case 'open-popup':
      event.preventDefault();
      openPopup(el.dataset.popup);
      break;
    case 'close-popup': closePopup(); break;
    case 'toggle-faq': toggleFaq(index); break;
    case 'branch-city':
      popupState.branchCity = el.dataset.city;
      renderPopup();
      break;

    case 'back-to-top':
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
  }
});

// Search inputs (desktop + mobile stay in sync); Enter jumps to the results
['search-desktop', 'search-mobile'].forEach(inputId => {
  const input = document.getElementById(inputId);
  input.addEventListener('input', e => setSearch(e.target.value));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      input.blur();
      scrollToCatalog();
    }
  });
});

// Popular search suggestions
const desktopSearch = document.getElementById('search-desktop');
const suggestions = document.getElementById('search-suggestions');
desktopSearch.addEventListener('focus', () => suggestions.classList.remove('hidden'));
desktopSearch.addEventListener('blur', () => setTimeout(() => suggestions.classList.add('hidden'), 150));
suggestions.addEventListener('mousedown', e => {
  const tag = e.target.closest('[data-tag]');
  if (!tag) return;
  e.preventDefault();
  setSearch(tag.dataset.tag);
  desktopSearch.blur();
  scrollToCatalog();
});

// Dropdown filters
document.getElementById('material-select').addEventListener('change', e => {
  state.material = e.target.value;
  renderCatalog();
});

document.getElementById('sort-select').addEventListener('change', e => {
  state.sortBy = e.target.value;
  renderCatalog();
});

// Forms
document.addEventListener('submit', e => {
  if (e.target.id === 'coupon-form') {
    e.preventDefault();
    applyCoupon(document.getElementById('coupon-input').value);
  }
  if (e.target.id === 'track-form') {
    e.preventDefault();
    trackOrder(document.getElementById('track-input').value);
  }
  if (e.target.id === 'newsletter-form') {
    e.preventDefault();
    showToast(t().newsletterThanks, { icon: 'checkCircle' });
    e.target.reset();
  }
});

// Escape closes any open popup
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAllOverlays();
});

// Header shadow + back-to-top button while scrolling
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 10);
  document.getElementById('back-to-top').classList.toggle('show', window.scrollY > 700);
}, { passive: true });

/* ---------- Start the app ---------- */
renderStaticIcons();
renderAll();
startSlider();

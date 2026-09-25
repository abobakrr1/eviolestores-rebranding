/* =========================================================
   Store data: products, categories and interface texts.
   Products, prices and photos are taken from levoilestores.com
   (images are loaded from the store's Shopify image server).
   ========================================================= */

const IMAGE_BASE = 'https://cdn.shopify.com/s/files/1/0852/8484/7908/files/';

// Builds a full image URL with the width we need (smaller = faster)
function imageUrl(fileName, width = 800) {
  return `${IMAGE_BASE}${fileName}?width=${width}`;
}

// Products created after this date get the "New" badge
const NEW_SINCE = '2026-07-01';

/* ---------- Colours: English name -> Arabic name + swatch colour ---------- */
const COLORS = {
  'White': ['أبيض', '#FFFFFF'],
  'Offwhite': ['أوف وايت', '#F4EFE6'],
  'Ivorywhite': ['أبيض عاجي', '#F6F1E4'],
  'Creamy': ['كريمي', '#EFE3CF'],
  'Light Cream': ['كريمي فاتح', '#F2E8D8'],
  'Champagne': ['شامبين', '#E8D3B5'],
  'Light Champagne': ['شامبين فاتح', '#EEDFC8'],
  'Beige': ['بيج', '#D9C4A8'],
  'Light Beige': ['بيج فاتح', '#E8DCC8'],
  'Dark Beige': ['بيج غامق', '#B89F80'],
  'Ivory Beige': ['بيج عاجي', '#EDE3D1'],
  'Pearl Beige': ['بيج لؤلؤي', '#E6DACB'],
  'Oat Beige': ['بيج شوفاني', '#DCCBB2'],
  'Almond Beige': ['بيج لوزي', '#D8C0A3'],
  'Stone Beige': ['بيج حجري', '#CDBBA5'],
  'Sand Beige': ['بيج رملي', '#D2B99A'],
  'Fawn Beige': ['بيج غزالي', '#C49A7C'],
  'Bone Beige': ['بيج عظمي', '#E3D5C0'],
  'Warm Beige': ['بيج دافئ', '#D2B48C'],
  'Pale Sand': ['رملي فاتح', '#E4D5BE'],
  'Light Sand': ['رملي فاتح', '#DCC7A6'],
  'Sand': ['رملي', '#CDB594'],
  'Bisque': ['بيسك', '#F2D8C2'],
  'Nude': ['نود', '#E3BC9A'],
  'Mushroom': ['مشروم', '#BDAE9F'],
  'Mushroom Grey': ['رمادي مشروم', '#A39A92'],
  'Khaki': ['كاكي', '#B5A27F'],
  'Taupe': ['توبي', '#8B7D72'],
  'Light Taupe': ['توبي فاتح', '#C6B6A8'],
  'Warm Taupe': ['توبي دافئ', '#A89080'],
  'Smoky Taupe': ['توبي مدخن', '#8F7F74'],
  'Cashmere': ['كشمير', '#C9A99A'],
  'Cafe': ['كافيه', '#8B6B4E'],
  'Brown': ['بني', '#6B4A36'],
  'Tawny Brown': ['بني محروق', '#8A5A3C'],
  'Black': ['أسود', '#1E1E1E'],
  'Grey': ['رمادي', '#9E9E9E'],
  'Light Grey': ['رمادي فاتح', '#C8C8C8'],
  'Silver': ['فضي', '#C0C0C0'],
  'Gold': ['ذهبي', '#C9A445'],
  'Yellow': ['أصفر', '#E8C547'],
  'Cream Yellow': ['أصفر كريمي', '#F1DFA8'],
  'Pale Pink': ['وردي فاتح', '#EBCFCB'],
  'Rose': ['روز', '#D8A6A6'],
  'Peach Pink': ['وردي خوخي', '#F0B9A5'],
  'Pale Peach': ['خوخي فاتح', '#F3C9A8'],
  'Dusty Mauve': ['موف مطفي', '#B08A93'],
  'Fushcia': ['فوشيا', '#C2185B'],
  'Burgundy': ['نبيتي', '#6E1F2E'],
  'Dark Red': ['أحمر غامق', '#7A1E24'],
  'Orange': ['برتقالي', '#D2691E'],
  'Ginger Orange': ['برتقالي جنزبيلي', '#B5542F'],
  'Olive': ['زيتي', '#6B6B3A'],
  'Pear Green': ['أخضر كمثري', '#B5B35C'],
  'Lime Green': ['أخضر ليموني', '#A3B13A'],
  'Misty Blue': ['أزرق ضبابي', '#A9B8C6'],
  'Dusty Blue': ['أزرق مطفي', '#6B8BA4'],
  'Navy': ['كحلي', '#1F2A44']
};

/* ---------- Materials ---------- */
const MATERIALS = {
  linen: { ar: 'كتان', en: 'Linen' },
  chiffon: { ar: 'شيفون', en: 'Chiffon' },
  cotton: { ar: 'قطن', en: 'Cotton' },
  silk: { ar: 'حرير', en: 'Silk' },
  satinChiffon: { ar: 'شيفون ساتان كرينكل', en: 'Crinkle Satin Chiffon' },
  lycra: { ar: 'ليكرا', en: 'Lycra' },
  poplin: { ar: 'بوبلين', en: 'Poplin' },
  satin: { ar: 'ساتان', en: 'Satin' },
  crinkle: { ar: 'كرينكل', en: 'Crinkle' },
  gabardine: { ar: 'جبردين', en: 'Gabardine' },
  ribbed: { ar: 'ريب', en: 'Ribbed' },
  royalCrepe: { ar: 'كريب رويال', en: 'Royal Crepe' },
  viscose: { ar: 'قطن فسكوز', en: 'Cotton Viscose' },
  cottonLycra: { ar: 'قطن ليكرا', en: 'Cotton Lycra' },
  leather: { ar: 'جلد', en: 'Leather' },
  metal: { ar: 'معدن', en: 'Metal' }
};

/* ---------- Categories ---------- */
// "new" and "sale" are smart categories calculated from the products
const CATEGORIES = [
  { id: 'all', ar: 'الكل', en: 'All' },
  { id: 'new', ar: 'وصل حديثاً', en: 'New Arrivals', image: '4_510db88a-4565-4b3b-9258-f316517d0bf6.jpg' },
  { id: 'scarves', ar: 'الطرح', en: 'Scarves', image: '26_37f6fb16-53f0-4f7d-a53a-369655f25472.jpg' },
  { id: 'fashion', ar: 'ملابس', en: 'Fashion Wear', image: '5_2c279d39-0382-46da-ae5d-2ef65cb302f3.jpg' },
  { id: 'isdals', ar: 'إسدالات', en: 'Isdal', image: '9_62d96241-c257-4258-a45b-55d40e633728.jpg' },
  { id: 'abayas', ar: 'عبايات', en: 'Abayas', image: '4_0d019598-7ec8-490b-ba8a-966836f2068e.jpg' },
  { id: 'inners', ar: 'بندانات', en: 'Inner Caps', image: 'gg_389cd2a8-fe3c-448e-a3ad-27765cd287b0.jpg' },
  { id: 'accessories', ar: 'إكسسوارات', en: 'Accessories', image: 'Re_1fc32d1c-d00c-48fb-a6f8-5868b66f8993.jpg' },
  { id: 'sale', ar: 'تخفيضات', en: 'Sale', image: '39_75c581b0-b43f-41f1-90a4-188060d0b347.jpg' }
];

/* ---------- Products ----------
   colors: [English colour name, image file]  (Arabic name + swatch come from COLORS)
   A colour written as ['#hex', 'Design 1', file] is a printed design with no name. */
const PRODUCTS = [
  // ===== Scarves =====
  {
    id: 'twill-linen-scarf', category: 'scarves', date: '2026-09-23',
    titleEn: 'Twill Linen Scarf', titleAr: 'طرحة كتان تويل',
    price: 180, material: 'linen', dims: '190 × 80',
    images: ['12_4c71fbb0-a682-4b18-920c-b55aca8f8f95.jpg', '11_691426dd-514d-4247-a5fb-dcee40096ea4.jpg', '10_20a9d537-f359-4bc0-8c93-42f5cc3aa28f.jpg'],
    colors: [['Offwhite', '1_76e6dbbb-cdb3-4d82-b36f-fd24c2aa9584.jpg'], ['Creamy', '8_4812a9d5-b268-4850-a4ad-643ddc80b7d6.jpg'], ['Champagne', '2_27100754-7ff4-491c-9487-3e6674ddb609.jpg'], ['Burgundy', '4_6cb5b035-ea62-4b65-b48c-a06e0f89f418.jpg'], ['Misty Blue', '5_b96e370c-6ef4-41fc-babe-86abf28ea601.jpg']],
    featuresEn: ['Soft and lightweight fabric for a smooth, comfortable feel.', 'Perfect for everyday wear and special occasions.', 'A versatile essential for a simple and chic hijab look.'],
    featuresAr: ['خامة ناعمة وخفيفة لملمس مريح.', 'مناسبة للاستخدام اليومي والمناسبات.', 'قطعة أساسية لإطلالة حجاب بسيطة وأنيقة.']
  },
  {
    id: 'marble-chiffon-scarf-1', category: 'scarves', date: '2026-09-23',
    titleEn: 'Plain Marble Chiffon Scarf', titleAr: 'طرحة شيفون ماربل سادة',
    price: 450, material: 'chiffon', dims: '190 × 100',
    images: ['26_2d995f9f-7896-401f-9ec7-6a6c01a4e187.jpg', '25_f54e8381-77ec-4745-a4f7-b4b2c0aaaf09.jpg', '1_ae60858f-8b8d-4d25-a0d8-b2a7fea67001.jpg'],
    colors: [['Ivory Beige', '1_ae60858f-8b8d-4d25-a0d8-b2a7fea67001.jpg'], ['Pale Sand', '2_927c37c7-0306-42ad-827d-0cba8999e097.jpg'], ['Pearl Beige', '22_cb70bd95-4974-4628-a22d-d024b288bf02.jpg'], ['Oat Beige', '23_f8322a59-2ff1-4e95-939f-577fb8c1d6f1.jpg'], ['Almond Beige', '21_c8daa5a4-39ae-462a-ab8f-594e5c818b9f.jpg']],
    featuresEn: ['Smooth plain finish with a lightweight, airy drape.', 'Breathable fabric in a compact size.', 'Made for everyday hijab and modest casual looks.'],
    featuresAr: ['لمسة نهائية سادة وانسدال خفيف.', 'خامة تسمح بمرور الهواء بمقاس عملي.', 'مناسبة للحجاب اليومي والإطلالات الكاجوال.']
  },
  {
    id: 'soft-tie-dye-cotton-scarf', category: 'scarves', date: '2026-09-23',
    titleEn: 'Soft Tie Dye Cotton Scarf', titleAr: 'طرحة قطن تاي داي ناعمة',
    price: 450, material: 'cotton', dims: '200 × 100',
    images: ['1_23edc597-6ddb-4117-8e89-124aab4be2c4.jpg', '16_b9d80871-b851-49ac-887d-0ce2ce5e6651.jpg', '15_b9ff380c-0dc3-493e-b645-23f79c137f66.jpg'],
    colors: [['#A0A3A0', 'Design 1', '1_23edc597-6ddb-4117-8e89-124aab4be2c4.jpg'], ['#998D8D', 'Design 2', '2_8a266e19-79fc-4e70-873c-5a8c6bc71ad6.jpg'], ['#C9C6C7', 'Design 3', '3_dc57ed97-4401-45f5-8737-8bde45c13c3b.jpg'], ['#DAD1CC', 'Design 4', '4_974be075-7126-48fa-814a-a59d738d2acd.jpg'], ['#C1B8B6', 'Design 5', '5_687ed58a-92b4-4337-8f5c-9893e69007f5.jpg']],
    featuresEn: ['A soft, elegant scarf with a subtle watercolor wash effect.', 'Elegant drape for both casual and classic looks.', 'Soft, lightweight and comfortable.'],
    featuresAr: ['طرحة ناعمة بتأثير ألوان مائية هادئ.', 'انسدال أنيق يناسب الإطلالات الكاجوال والكلاسيكية.', 'خفيفة ومريحة طوال اليوم.']
  },
  {
    id: 'lined-marble-cotton-scarf', category: 'scarves', date: '2026-09-23',
    titleEn: 'Lined Marble Cotton Scarf', titleAr: 'طرحة قطن ماربل مخططة',
    price: 450, material: 'cotton', dims: '200 × 80',
    images: ['26_37f6fb16-53f0-4f7d-a53a-369655f25472.jpg', '27_90aac683-a19a-4ee6-8c0e-1768c2fb1862.jpg', '1_e37d70e0-ffa5-4f6f-8871-07a83ef1de06.jpg'],
    colors: [['Champagne', '1_e37d70e0-ffa5-4f6f-8871-07a83ef1de06.jpg'], ['Mushroom', '24_d6bc9385-6801-4590-90c2-dfd062509e15.jpg'], ['Stone Beige', '21_cd736e7e-d515-4a83-84bc-313dbe417a15.jpg'], ['Khaki', '22_ac73cf2f-6632-4525-910b-e90cd9fe8671.jpg'], ['Warm Taupe', '20_36965762-a58d-4e07-a6ee-a210af525017.jpg']],
    featuresEn: ['Soft and lightweight fabric for a smooth, comfortable feel.', 'Comfortable for everyday wear.', 'Flowy drape that styles easily with any outfit.'],
    featuresAr: ['خامة ناعمة وخفيفة لملمس مريح.', 'مريحة للاستخدام اليومي.', 'انسدال سلس يتناسق مع أي إطلالة.']
  },
  {
    id: 'fluffy-linen-marble-scarf', category: 'scarves', date: '2026-08-24',
    titleEn: 'Fluffy Linen Marble Scarf', titleAr: 'طرحة كتان ماربل ناعمة',
    price: 450, material: 'linen', dims: '200 × 80',
    images: ['1_806934d1-eb60-4d39-afc9-1549bf0c28e6.jpg', '11_deb7ad1a-c7c8-4d60-8d4e-51c8517a0811.jpg', '12_c3216bb6-ab4c-40f9-b5f1-f142e15a61c0.jpg'],
    colors: [['Light Beige', '1_806934d1-eb60-4d39-afc9-1549bf0c28e6.jpg'], ['Light Taupe', '10_493fc8e9-66fa-4fe8-9449-7052555b08e1.jpg'], ['Warm Taupe', '2_bf79cc8a-b602-48c6-bc2c-2b51f2c97a48.jpg'], ['Sand', '8_9a451858-8dc8-4479-a99c-9e765eac1a78.jpg'], ['Smoky Taupe', '9_50acaa56-588f-459d-a6c8-16abd368ad2a.jpg']],
    featuresEn: ['A refined scarf with a subtle, luminous weave.', 'Unique pattern for a modern look.', 'Easy to style with casual and elegant outfits.'],
    featuresAr: ['طرحة راقية بنسيج لامع هادئ.', 'نقشة مميزة لإطلالة عصرية.', 'سهلة التنسيق مع الإطلالات الكاجوال والأنيقة.']
  },
  {
    id: 'elegance-marble-cotton-scarf', category: 'scarves', date: '2026-08-23',
    titleEn: 'Elegance Marble Cotton Scarf', titleAr: 'طرحة قطن ماربل إليجانس',
    price: 450, material: 'cotton', dims: '200 × 80',
    images: ['19_60afdac6-9759-42ac-82f8-93b3f85fcc24.jpg', '27_b76741a3-2267-4544-92ac-8dc86ca76a0e.jpg', '28_9cb788a1-547b-46c4-9915-76abf8bf9ee8.jpg'],
    colors: [['Light Cream', '19_60afdac6-9759-42ac-82f8-93b3f85fcc24.jpg'], ['Light Champagne', '20_e9b5ffe5-cb81-400c-be44-9e361cc3f20a.jpg'], ['Pale Pink', '3_024db29d-624f-4c14-83f3-b94025d0177b.jpg'], ['Rose', '2_61587c2e-5632-4d3e-82fd-dc452fcf18e5.jpg'], ['Cashmere', '5_2629ce80-16a5-4f74-98f5-5bf10d415d05.jpg']],
    featuresEn: ['A refined scarf with a soft, weathered finish.', 'Comfortable for everyday wear.', 'Flowy drape that styles easily with any outfit.'],
    featuresAr: ['طرحة راقية بلمسة نهائية ناعمة.', 'مريحة للاستخدام اليومي.', 'انسدال سلس يتناسق مع أي إطلالة.']
  },
  {
    id: 'flowy-silk-scarf', category: 'scarves', date: '2025-12-02',
    titleEn: 'Flowy Silk Scarf', titleAr: 'طرحة حرير منسدلة',
    price: 200, oldPrice: 250, material: 'silk', dims: '200 × 75',
    images: ['1_07cadd86-fec5-427b-a7fa-ec7dfdbf872a.jpg', 'Untitled-1_3e51ceeb-9649-48ca-a070-5120011cd724.jpg', 'Untitled-2_0fac040f-6f84-47bd-a10e-033bb6f2078a.jpg'],
    colors: [['Sand Beige', '2_95989438-2dd4-4d85-8077-8ea4dc5ec497.jpg']],
    featuresEn: ['Pleated texture with a luminous tonal wrap.', 'Quiet luxury for every day.'],
    featuresAr: ['ملمس بليسيه بلمعة هادئة.', 'فخامة هادئة لكل يوم.']
  },
  {
    id: 'glittery-crinkle-satin-chiffon-scarf-1', category: 'scarves', date: '2025-11-02',
    titleEn: 'Glittery Crinkle Satin Chiffon Scarf', titleAr: 'طرحة شيفون ساتان كرينكل لامعة',
    price: 125, oldPrice: 250, material: 'satinChiffon', dims: '200 × 75',
    images: ['1_ee33ecc2-9dfa-47d0-87a0-576ed64f3e9e.jpg', '24_c5937e1b-1cbd-4924-83aa-7f9a863b71c3.jpg', '25_1b36092a-af8d-4b0f-8b33-072efc5b247e.jpg'],
    colors: [['Offwhite', '1_ee33ecc2-9dfa-47d0-87a0-576ed64f3e9e.jpg'], ['Black', '16_6b6f5b29-7dbd-4c7e-ab49-9f43afe41237.jpg']],
    featuresEn: ['Lightweight, airy textured fabric.', 'Soft, flowy and comfortable to wear.', 'Drapes smoothly for an elegant look.'],
    featuresAr: ['خامة خفيفة بملمس مميز.', 'ناعمة ومنسدلة ومريحة.', 'انسدال سلس لإطلالة أنيقة.']
  },
  {
    id: 'breezy-kuwaiti-scarf', category: 'scarves', date: '2025-10-30',
    titleEn: 'Breezy Kuwaiti Scarf', titleAr: 'طرحة كويتي خفيفة',
    price: 250, oldPrice: 300, material: 'lycra', dims: '200 × 70',
    images: ['12_c9ba9dd2-032b-426d-8d71-c91052accabd.jpg', '13_74840351-05de-4b21-8cd6-ef61f3f0a271.jpg', '1_7e0313ab-dd83-4cd2-8f93-0eb2481d4b8b.jpg'],
    colors: [['Offwhite', '1_7e0313ab-dd83-4cd2-8f93-0eb2481d4b8b.jpg'], ['Beige', '2_82075e68-7bf7-465a-8061-e4f74be63c89.jpg'], ['Fawn Beige', '5_bbe7f6a3-5bcd-4e22-a387-d2775552f683.jpg'], ['Tawny Brown', '11_8a030e01-0dd7-4b8c-994d-a0024eef0e69.jpg'], ['Grey', '6_8d5d7a56-38f3-4a06-b324-1dd33b5f2841.jpg']],
    featuresEn: ['Lightweight wrap with a subtle ribbed lycra texture.', 'Stretchy and no-slip for all-day wear.'],
    featuresAr: ['طرحة خفيفة بملمس ليكرا ريب هادئ.', 'مطاطة ولا تنزلق طوال اليوم.']
  },

  // ===== Fashion wear =====
  {
    id: 'swaying-skirt', category: 'fashion', date: '2026-07-30',
    titleEn: 'Swaying Skirt', titleAr: 'جيبة سوينج',
    price: 525, oldPrice: 750, material: 'poplin', sizes: ['S', 'M', 'L', 'XL'],
    images: ['1_b97be162-251c-4ca5-a146-e6cbf524cfcd.jpg', '10_a032080d-d70c-4fb9-8156-c60dd1803d51.jpg', '6_707b4457-e858-417d-b85c-36ca8b0e351e.jpg'],
    colors: [['White', '1_b97be162-251c-4ca5-a146-e6cbf524cfcd.jpg'], ['Light Beige', '2_cb3aa038-7a99-44ee-aa74-442699202b6a.jpg'], ['Beige', '3_03cd103a-e82d-413e-b8bd-6f9960303296.jpg'], ['Dark Beige', '4_e8702219-5d00-4f54-a119-817626594595.jpg'], ['Black', '5_737e519c-fab5-4db1-bf9e-017a7a2b39fe.jpg']],
    featuresEn: ['Elegant A-line midi skirt with a double-breasted button design.', 'Comfortable high-waist fit for all-day wear.', 'Perfect for work, outings and everyday elegance.'],
    featuresAr: ['جيبة ميدي بقصة A وأزرار مزدوجة.', 'خصر عالٍ مريح طوال اليوم.', 'مناسبة للعمل والخروجات والإطلالة اليومية.']
  },
  {
    id: 'flowy-pants', category: 'fashion', date: '2026-07-29',
    titleEn: 'Flowy Pants', titleAr: 'بنطلون ساتان واسع',
    price: 525, oldPrice: 750, material: 'satin', sizes: ['S', 'M', 'L', 'XL'],
    images: ['1_e2472421-88c2-4a67-bd0c-13017c356928.jpg', '6_ce51dcbb-b663-4daa-9e08-3e05f1991938.jpg', '6_4c25e7ec-a874-4892-b881-db14f7f6b2ab.jpg'],
    colors: [['White', '1_e2472421-88c2-4a67-bd0c-13017c356928.jpg'], ['Beige', '2_0aeb866c-1adf-4528-a30c-b281bacf8b1f.jpg'], ['Dark Beige', '3_e62cec78-e91e-4a68-a550-085e45b9d0c0.jpg'], ['Olive', '4_7911e44b-7672-4432-9469-f511cb24c6f1.jpg'], ['Black', '5_c6fbb751-b0da-4d9b-94af-b2e811b7a7f0.jpg']],
    featuresEn: ['Wide-leg design for ease of movement and a flattering look.', 'Elastic waistband for a flexible, comfortable fit.', 'Great for outings, vacations and everyday wear.'],
    featuresAr: ['تصميم واسع يمنح حرية الحركة.', 'وسط أستك مريح ومرن.', 'مناسب للخروجات والسفر والاستخدام اليومي.']
  },
  {
    id: 'flow-linen-skirt', category: 'fashion', date: '2026-07-14',
    titleEn: 'Flow Linen Skirt', titleAr: 'جيبة كتان منسدلة',
    price: 680, oldPrice: 850, material: 'linen',
    images: ['8_39d579d6-ba2c-4c6c-99f5-368c408dcd72.jpg', '13_582f8cae-0c9d-4b5e-afa1-1be0aaa4c877.jpg', '10_8a3acfb9-352a-4de8-8160-c25c16b3457c.jpg'],
    colors: [['Beige', '2_9ad2a337-334f-40c1-9267-73ffb9f1a204.jpg'], ['Dark Red', '4_c33a6185-6172-4472-8828-233a367be797.jpg'], ['Peach Pink', '3_7f5efe62-0325-4448-aa73-af81ed06ab66.jpg'], ['Black', '6_836bf39d-7d23-401d-be15-94d499a2cdcb.jpg']],
    featuresEn: ['Feminine, flowy and effortlessly elegant.', 'Easy to style with shirts, blouses or basic tops.', 'Breathable, comfortable and modest.'],
    featuresAr: ['جيبة أنثوية منسدلة وأنيقة.', 'سهلة التنسيق مع القمصان والبلوزات.', 'خامة مريحة وتسمح بمرور الهواء.']
  },
  {
    id: 'elara-crinkle-shirt', category: 'fashion', date: '2026-07-08',
    titleEn: 'Elara Crinkle Shirt', titleAr: 'قميص إيلارا كرينكل',
    price: 520, oldPrice: 650, material: 'crinkle',
    images: ['2_2f3d38fd-9868-42b2-8add-20b0e0ece6ad.jpg', '7_ba76ec3f-6727-461a-8d6c-784d7f1ed8e5.jpg', '8_29425bba-08cb-460d-9a9f-36b7642ee16c.jpg'],
    colors: [['Fushcia', '2_2f3d38fd-9868-42b2-8add-20b0e0ece6ad.jpg'], ['Pear Green', '1_60427443-3f47-4642-9b8e-ced0978aae23.jpg'], ['Brown', '3_850cf9b3-433c-470c-ac09-03995a6e0c3b.jpg'], ['Black', '5_55212332-8e38-404a-a18f-f928ef662da9.jpg']],
    featuresEn: ['Loose, relaxed fit with long, wide sleeves.', 'Casual and elegant, perfect for everyday wear.'],
    featuresAr: ['قصة واسعة مريحة بأكمام طويلة واسعة.', 'كاجوال وأنيق ومناسب لكل يوم.']
  },
  {
    id: 'flow-linen-pants', category: 'fashion', date: '2026-07-07',
    titleEn: 'Flow Linen Pants', titleAr: 'بنطلون كتان واسع',
    price: 840, oldPrice: 1050, material: 'linen', sizes: ['S/M', 'L/XL'],
    images: ['7_076f6985-747f-42b1-9f39-b5611ffbd6ff.jpg', '10_0594ed1a-5db9-4bd5-99c3-615498e24e27.jpg', '9_ce220ea7-6c92-43f4-a829-79dc19567623.jpg'],
    colors: [['Offwhite', '1_f179113a-2a44-4298-b591-848d8df5ddd6.jpg'], ['Beige', '2_ab7d1824-ee08-48a8-bca7-493dfe684c3c.jpg'], ['Dark Red', '3_82979852-b09f-453c-87e8-9c361db20f93.jpg'], ['Tawny Brown', '6_8bc64918-c521-45b1-816f-5ccc320943db.jpg'], ['Navy', '4_9c11f0fe-94a0-43ac-a6b7-031ff72b99d9.jpg']],
    featuresEn: ['Fluid silhouette with a soft drape.', 'Effortlessly chic wide-leg pants for every day.'],
    featuresAr: ['قصة منسدلة بخامة ناعمة.', 'بنطلون واسع أنيق لكل يوم.']
  },
  {
    id: 'easy-wrap-pants-1', category: 'fashion', date: '2026-07-07',
    titleEn: 'Butterfly Pants', titleAr: 'بنطلون باترفلاي',
    price: 1450, material: 'gabardine', sizes: ['S/M', 'L/XL'],
    images: ['9_17f417a7-1104-4c2d-914d-e3c54740fc14.jpg', '9_9a5aaa0d-d8f7-4fc2-898c-5f41c6db6e43.jpg', '6_5f7f3527-63e4-4c3f-b125-d518a4735311.jpg'],
    colors: [['Dark Red', '1_1268200b-3af2-4a25-9027-afe5b5ab4083.jpg'], ['Olive', '2_63f2d143-4f7f-48cf-830f-ca207b7048ee.jpg'], ['Brown', '4_e7ec9e04-fbd6-4fca-a78e-d2a199b7a8e7.jpg'], ['Black', '3_ca0ec204-e104-4a47-b9b2-b45578764761.jpg']],
    featuresEn: ['Relaxed fit with beautiful movement.', 'Wide-leg pants with a unique wrap front.'],
    featuresAr: ['قصة مريحة بحركة جميلة.', 'بنطلون واسع بتصميم لف أمامي مميز.']
  },
  {
    id: 'chill-ribbed-shirt', category: 'fashion', date: '2026-07-07',
    titleEn: 'Chill Ribbed Shirt', titleAr: 'قميص ريب مريح',
    price: 1100, material: 'ribbed',
    images: ['10_ce022abf-333c-492a-ba28-bc124ae15a34.jpg', '6_f14c481a-9fde-411f-9cbc-e528057987f9.jpg', '7_d5ca8303-9c33-4684-8146-cde45e89a61e.jpg'],
    colors: [['Offwhite', '1_e0b83b6c-2a54-4ea9-9c28-68ef23286540.jpg']],
    featuresEn: ['Effortlessly elegant blouse with a relaxed silhouette.', 'All-day comfort and versatile styling.'],
    featuresAr: ['بلوزة أنيقة بقصة مريحة.', 'راحة طوال اليوم وسهلة التنسيق.']
  },
  {
    id: 'buttoned-crushed-shirt', category: 'fashion', date: '2026-07-07',
    titleEn: 'Buttoned Crushed Shirt', titleAr: 'قميص كرينكل بأزرار',
    price: 1250, material: 'crinkle',
    images: ['12_525f04bd-4e55-40c0-85e7-9859dc523ebf.jpg', '3_6d804e2d-a048-4a67-941c-4ce8936c530b.jpg', '10_295f01ae-1e96-4e74-adf0-1390fa490978.jpg'],
    colors: [['White', '1_80669614-42fa-4fac-a14c-7fba952a1f23.jpg'], ['Beige', '6_aa216cf6-abb9-41a9-8716-71ed3208bd9a.jpg'], ['Brown', '2_640dbef7-5fc6-4093-a732-a94e69e7e71b.jpg'], ['Black', '5_96a454d9-6d0c-4dfd-8102-413f283c4945.jpg']],
    featuresEn: ['Oversized, relaxed-fit shirt in a crushed fabric.', 'Ideal for casual outings, university or daily wear.'],
    featuresAr: ['قميص أوفر سايز بخامة كرينكل.', 'مثالي للجامعة والخروجات والاستخدام اليومي.']
  },
  {
    id: 'new-easy-go-shirt', category: 'fashion', date: '2026-06-21',
    titleEn: 'New Easy Go Shirt', titleAr: 'قميص إيزي جو الجديد',
    price: 680, material: 'cotton',
    images: ['5_61a8119f-78de-4f57-8d5a-a722c53fd5c6.jpg', '10_5840eb2b-bf26-4f6d-baef-63f8b9c86b60.jpg', '7_97a805e9-3b73-467b-822f-76fd0151a27b.jpg'],
    colors: [['White', '1_42910087-751c-40e5-a07d-0284fec6f0e5.jpg'], ['Offwhite', '2_a47db77a-77ec-439d-9c85-d93b422396bf.jpg'], ['Beige', '1_5dc4468f-4f68-4bb0-addd-e2210e11ac30.jpg'], ['Light Sand', '1_dc0525e4-1de4-4dba-9eb8-a1460844273a.jpg'], ['Cafe', '4_277b232d-226b-4fd5-b70d-dcbe4a02113a.jpg']],
    featuresEn: ['Breathable and comfortable with a modest long-line cut.', 'Ideal for casual outings, university or daily wear.'],
    featuresAr: ['قطن مريح بقصة طويلة محتشمة.', 'مثالي للجامعة والخروجات والاستخدام اليومي.']
  },

  // ===== Isdal =====
  {
    id: 'royal-basic-isdal', category: 'isdals', date: '2026-02-16',
    titleEn: 'Royal Basic Isdal', titleAr: 'إسدال رويال بيسك',
    price: 1250, material: 'royalCrepe', dims: '155 × 90',
    images: ['111_e46aea23-ed35-4273-90b4-5f3a87279d5c.jpg', '7_9ad2d505-e280-4ba3-9bad-fbbbe11955cf.jpg', '9_8b585fc2-5266-4304-8ded-31d0c511cb3c.jpg'],
    colors: [['Olive', '2_dfba77f1-7393-4e9f-9757-5debc7b92942.jpg'], ['Black', '4_05afba5c-5d01-4895-b72c-ae807acf8914.jpg']],
    featuresEn: ['Clean solid tones with an attached khimar.', 'Structured crepe feel with full coverage.'],
    featuresAr: ['ألوان سادة مع خمار متصل.', 'خامة كريب متماسكة وتغطية كاملة.']
  },
  {
    id: 'plain-viscose-flounce-sleeves-isdal', category: 'isdals', date: '2025-07-14',
    titleEn: 'Plain Viscose Flounce Sleeves Isdal', titleAr: 'إسدال فسكوز بأكمام كشكش',
    price: 800, material: 'viscose', dims: '160 × 80',
    images: ['9_62d96241-c257-4258-a45b-55d40e633728.jpg', '10_09ed6e66-6310-4fed-9be2-d0bb73879d9d.jpg', '11_4b9e6d16-4ae6-42f1-8b22-59e7a96039ce.jpg'],
    colors: [['Orange', '2_dad3cfe8-3b5d-48a1-bf4e-da983b8525dc.jpg'], ['Ginger Orange', '2_5155376f-7db7-4068-a0ee-da865bab85ab.jpg'], ['Lime Green', '4_d4a226a9-81c0-456b-85f5-2804504f63b5.jpg'], ['Black', '6_91d4c64f-af70-483f-8e41-0ffb0b8c48e5.jpg']],
    featuresEn: ['Delicate flounce sleeve detail with an attached khimar.', 'Breathable fabric with full coverage.'],
    featuresAr: ['أكمام كشكش رقيقة مع خمار متصل.', 'خامة تسمح بمرور الهواء وتغطية كاملة.']
  },
  {
    id: 'jacquard-satin-isdal-1', category: 'isdals', date: '2025-08-23',
    titleEn: 'Jacquard Satin Isdal', titleAr: 'إسدال ساتان جاكار',
    price: 1000, material: 'satin', dims: '160 × 85',
    images: ['2_ead8a1e9-eae6-488d-9fe1-3e98518ac506.jpg', '3_2177ea20-fde5-4dc2-b651-e07dbc74dadb.jpg', '3_08d21751-b3bc-489c-8781-79537e6d52b7.jpg'],
    colors: [['White', '1_c73c98fd-d0e4-4101-9549-1a71d569493e.jpg'], ['Black', '2_ead8a1e9-eae6-488d-9fe1-3e98518ac506.jpg']],
    featuresEn: ['Oversized batwing silhouette with a tonal grid-weave texture.', 'Effortless full coverage in classic colors.'],
    featuresAr: ['قصة باتوينج واسعة بنسيج جاكار هادئ.', 'تغطية كاملة بألوان كلاسيكية.']
  },
  {
    id: 'plain-viscose-isdal-2-pcs-1', category: 'isdals', date: '2025-02-18',
    titleEn: 'Plain Viscose Isdal 2 PCS', titleAr: 'إسدال فسكوز سادة قطعتين',
    price: 800, material: 'viscose',
    images: ['6_e0d9e56d-d4ea-4b0e-bce0-3c49200648bc.jpg', '7_26fa6e2d-4ba4-484d-a595-1318212b05f2.jpg', '8_b7cb8d1b-1850-47f6-9313-70960bc598a6.jpg'],
    colors: [['Black', '4_aaa5b175-c28b-4940-8d79-0840f4dbedc9.jpg']],
    featuresEn: ['Two pieces: skirt and matching khimar.', 'Breathable fabric, chic coordinated set.'],
    featuresAr: ['قطعتان: جيبة وخمار متناسق.', 'خامة مريحة وطقم متناسق أنيق.']
  },

  // ===== Abayas =====
  {
    id: 'dayflow-abaya', category: 'abayas', date: '2026-05-04',
    titleEn: 'Dayflow Abaya', titleAr: 'عباية داي فلو',
    price: 1350, material: 'cotton', sizes: ['S/M', 'L/XL'],
    images: ['4_0d019598-7ec8-490b-ba8a-966836f2068e.jpg', '7_a66b85ab-58c5-44a5-a82a-c56fa596715a.jpg', '8_403b54a7-b77b-42fa-9b14-363f013f7ef6.jpg'],
    colors: [['Beige', '3_e4c0a353-3b64-493f-9667-5dbb3ef2476d.jpg'], ['Brown', '2_039392ea-c295-4177-86d2-3437eb5658da.jpg'], ['Black', '3_d22bf36f-7595-43c4-845d-63a0fd2b915a.jpg']],
    featuresEn: ['Loose fit, gathered chest detail, full length.', 'For daily wear and casual outings.'],
    featuresAr: ['قصة واسعة بتفصيلة كشكشة عند الصدر وطول كامل.', 'مناسبة للاستخدام اليومي والخروجات.']
  },
  {
    id: 'everyday-abaya', category: 'abayas', date: '2026-01-25',
    titleEn: 'Everyday Isdal', titleAr: 'إسدال إيفري داي',
    price: 1250, material: 'lycra', dims: '145 × 70',
    images: ['4_74da34c1-e125-454e-9dc5-dc5f2f8fe0bf.jpg', '5_e304a351-3fdc-402c-8f84-b0932bc9ac52.jpg', '6_9496fe2c-4bcd-4b63-83d4-d730a9ae6680.jpg'],
    colors: [['Black', '1_7888a15f-a662-48e5-928f-bee492c4b2dc.jpg'], ['Dusty Blue', '3_3cd3da5e-62fb-4c71-9b25-2d8fd564f261.jpg']],
    featuresEn: ['High neck, full sleeves, relaxed maxi fit.', 'For prayer and modest daily wear.'],
    featuresAr: ['رقبة عالية وأكمام كاملة وقصة ماكسي مريحة.', 'مناسب للصلاة والاستخدام اليومي.']
  },
  {
    id: 'luma-linen-abaya', category: 'abayas', date: '2025-04-16',
    titleEn: 'Luma Linen Abaya', titleAr: 'عباية لوما كتان',
    price: 1100, material: 'linen', dims: '145 × 70',
    images: ['res_40245000-7516-420b-afd0-2f72ddd2079b.jpg', '2_a851ebd9-836a-48d2-96ce-bc960f3e39c9.jpg', '4_18070ccd-5f66-4744-833c-949b5f2c070c.jpg'],
    colors: [['Ivorywhite', 'ree_e06f54b3-156e-4f3e-bb9b-2b4c60671d6f.jpg'], ['Beige', 'res_40245000-7516-420b-afd0-2f72ddd2079b.jpg'], ['Black', 'res_68d74c8f-33df-461a-8402-797844b2153a.jpg']],
    featuresEn: ['Maxi length, hooded, oversized fit with stripe sleeve detail.', 'A clean, cool, modern modest essential.'],
    featuresAr: ['طول ماكسي بكابيشون وقصة أوفر سايز وتفصيلة على الأكمام.', 'قطعة أساسية عصرية ومريحة.']
  },

  // ===== Inner caps =====
  {
    id: 'normal-underscarf-1', category: 'inners', date: '2025-05-21',
    titleEn: 'Normal Underscarf', titleAr: 'بندانة عادية',
    price: 110, material: 'cottonLycra',
    images: ['7_72e670fb-fffd-429a-ac25-09c02b872a1a.jpg', '23_535430a3-a117-4cdc-a0ef-65144850732b.jpg', '25_b4473158-001d-4005-983d-4702cf605169.jpg'],
    colors: [['White', '7_72e670fb-fffd-429a-ac25-09c02b872a1a.jpg'], ['Offwhite', '8_62fd6561-77c8-4877-9363-1348058fbb48.jpg'], ['Creamy', '21_7cdc7768-2bd0-4f97-bdf4-1a7a4b33f96f.jpg'], ['Nude', '2_76211f85-5d1f-40ff-865c-8ca72c8737d5.jpg'], ['Warm Beige', '6_a029d467-5567-4ca7-b1aa-569eff2751f9.jpg']],
    featuresEn: ['Comfortable full coverage with a simple everyday fit.', 'Lightweight, breathable and stretchy.'],
    featuresAr: ['تغطية كاملة مريحة وقصة بسيطة.', 'خفيفة ومطاطة وتسمح بمرور الهواء.']
  },
  {
    id: 'full-neck-underscarf-1', category: 'inners', date: '2025-05-20',
    titleEn: 'Full Neck Underscarf', titleAr: 'بندانة برقبة كاملة',
    price: 135, material: 'cottonLycra',
    images: ['7_05cb8776-3c71-4c0b-8f24-d0d3d468c43a.jpg', '20_244503ab-19b9-4961-980c-116e8ae5b37d.jpg', '21_a8412459-6f00-4349-956d-96665be0bae8.jpg'],
    colors: [['White', '7_05cb8776-3c71-4c0b-8f24-d0d3d468c43a.jpg'], ['Offwhite', '18_59866fa1-3d14-4836-b798-97201d68b693.jpg'], ['Cream Yellow', 're_236e26b6-71de-4e2b-9521-5bbf5f4c4f3f.jpg'], ['Pale Peach', '1_0cd62d85-4945-42d6-ad47-e952cac06c81.jpg'], ['Beige', '8_297d2d99-810b-4052-9f99-ab71265f5a36.jpg']],
    featuresEn: ['Extended neck coverage with a comfortable full fit.', 'Lightweight, breathable and stretchy.'],
    featuresAr: ['تغطية ممتدة للرقبة وقصة مريحة.', 'خفيفة ومطاطة وتسمح بمرور الهواء.']
  },
  {
    id: 'kuwaiti-double-layered-cap', category: 'inners', date: '2026-09-13',
    titleEn: 'Kuwaiti Double Layered Cap', titleAr: 'بندانة كويتي بطبقتين',
    price: 200, material: 'lycra',
    images: ['9_6d68efba-2c30-40ec-9580-387edddd50bf.jpg', '11_d87ff862-6488-45d1-8eb0-3f6c1d749a31.jpg', '10_09039828-a145-48f4-a755-29277668179e.jpg'],
    colors: [['Creamy', '1_cae0ca2f-5e0e-438d-92fa-716c1ca90a50.jpg'], ['Taupe', '3_4ed565f7-c6b8-4931-9351-3255a48a55f2.jpg'], ['Mushroom Grey', '5_45908f04-4734-4078-9c94-d63cf7923997.jpg'], ['Burgundy', '2_cc64c876-b0c9-419b-8048-23c28e7532d0.jpg'], ['Dusty Mauve', '8_3418e86e-0c54-47f5-8245-976d3ec6d62c.jpg']],
    featuresEn: ['Double-layer design for extra coverage and a smooth look.', 'Lightweight, breathable and stretchy.'],
    featuresAr: ['طبقتان لتغطية إضافية ومظهر ناعم.', 'خفيفة ومطاطة وتسمح بمرور الهواء.']
  },
  {
    id: 'triangle-bandana', category: 'inners', date: '2025-12-02',
    titleEn: 'Triangle Bandana', titleAr: 'بندانة مثلث',
    price: 65, material: 'cottonLycra', dims: '90 × 40',
    images: ['Untitled-1_135557b6-939c-4959-935e-a96029a0e778.jpg', 'Untitled-2_4294ff46-659c-4aed-8565-af98c240da68.jpg', '1_a9be5b8c-2a8a-481d-a5d7-e20343a37bf9.jpg'],
    colors: [['White', '1_a9be5b8c-2a8a-481d-a5d7-e20343a37bf9.jpg'], ['Offwhite', '2_36fe97b5-09d0-4ada-8cca-4dfc1d0fd97a.jpg'], ['Bisque', 'res_fc4dbdac-b9be-481f-9e72-deaa28410a22.jpg'], ['Bone Beige', '6_323a41e7-ca0e-4b8e-9736-19d9b0d473d5.jpg'], ['Light Grey', '4_313beed5-6745-417d-b89c-0f560e8e1420.jpg']],
    featuresEn: ['Triangle bandana with a tie-back style.', 'Lightweight, breathable and easy to wear.'],
    featuresAr: ['بندانة مثلث بربطة خلفية.', 'خفيفة وسهلة الارتداء.']
  },

  // ===== Accessories =====
  {
    id: 'holster-leather-belt', category: 'accessories', date: '2026-06-20',
    titleEn: 'Holster Leather Belt', titleAr: 'حزام جلد هولستر',
    price: 275, material: 'leather', dims: '106 × 4',
    images: ['1_43d24db2-0c5a-4844-912e-78ed655fde9a.jpg', '5_f9f014f4-a493-46f7-843d-478d598b4cc3.jpg', '2_910bbc4f-3ede-446b-a730-abe439cbe8c1.jpg'],
    colors: [['Brown', '2_910bbc4f-3ede-446b-a730-abe439cbe8c1.jpg'], ['Black', '4_30a87ca8-c431-4529-a070-403ca63cd3bb.jpg']],
    featuresEn: ['Wide leather belt that defines any loose outfit.'],
    featuresAr: ['حزام جلد عريض يحدد أي إطلالة واسعة.']
  },
  {
    id: 'stud-leather-belt', category: 'accessories', date: '2026-06-20',
    titleEn: 'Stud Leather Belt', titleAr: 'حزام جلد ستاد',
    price: 200, material: 'leather', dims: '112 × 1.5',
    images: ['1_d0b03138-9d34-4bc2-b204-e79d093dcad7.jpg', '5_6c5088e7-87f3-4659-80fe-540c78d36ab9.jpg', '2_c5f79ee0-0465-4952-8341-87c3a65ec25b.jpg'],
    colors: [['Offwhite', '1_d0b03138-9d34-4bc2-b204-e79d093dcad7.jpg'], ['Brown', '2_c5f79ee0-0465-4952-8341-87c3a65ec25b.jpg'], ['Black', '3_37ecc00a-a24b-445c-8c0e-9d26a1362613.jpg']],
    featuresEn: ['Slim leather belt with stud details.'],
    featuresAr: ['حزام جلد رفيع بتفاصيل معدنية.']
  },
  {
    id: 'octa-magnetic-pin-pack-of-2', category: 'accessories', date: '2025-10-23',
    titleEn: 'Octa Magnetic Pin (Pack of 2)', titleAr: 'دبوس مغناطيس أوكتا (قطعتين)',
    price: 150, material: 'metal',
    images: ['10_8667d366-d6b4-4666-bac3-145744e84846.jpg', '5_37c07f17-cd4a-43a0-8ae4-d364eab1aa24.jpg', '1_aa415b01-c46a-4d54-bddd-41d8afd5091b.jpg'],
    colors: [['#C4A8B3', 'Design 3', '3_dd60b868-6e17-49c3-9f0b-cbf039fb2b39.jpg'], ['#CCB4BD', 'Design 4', '4_47523f36-f104-4091-9d0a-2cb018806d16.jpg'], ['#C9AEB8', 'Design 5', '5_df91286d-9e93-4c8e-992c-91c7b88bfd4b.jpg'], ['#CBB4BC', 'Design 7', '7_eb9665f3-6fc2-4fb9-87ed-20c1af873d02.jpg']],
    featuresEn: ['Minimal flat design, pack of 2.', 'No pin holes in your scarves.'],
    featuresAr: ['تصميم بسيط، عبوة بها قطعتان.', 'تثبيت بدون ثقوب في الطرحة.']
  },
  {
    id: 'marigold-brooch', category: 'accessories', date: '2026-08-26',
    titleEn: 'Marigold Brooch', titleAr: 'بروش ماريجولد',
    price: 300, material: 'metal',
    images: ['Re_b096309f-b352-430a-8e5b-96f7e8e2362e.jpg'],
    colors: [],
    featuresEn: ['Floral brooch that adds a delicate touch to any scarf.'],
    featuresAr: ['بروش على شكل وردة يضيف لمسة رقيقة لأي طرحة.']
  },
  {
    id: 'yaqin-counter', category: 'accessories', date: '2026-01-27',
    titleEn: 'Yaqin Counter', titleAr: 'عداد تسبيح يقين',
    price: 85,
    images: ['1_6aa04f71-4ae8-4fe0-b847-f2a43672d7fe.jpg', '2_250d895c-67fa-4e02-b1af-af025748d401.jpg', '3_27797ef7-813c-4074-ae1f-ffb859bc757f.jpg'],
    colors: [['Yellow', '1_6aa04f71-4ae8-4fe0-b847-f2a43672d7fe.jpg'], ['Gold', '2_250d895c-67fa-4e02-b1af-af025748d401.jpg'], ['Grey', '3_27797ef7-813c-4074-ae1f-ffb859bc757f.jpg'], ['Silver', '4_aa3a6472-0bd0-4d78-b1f8-ff81aabc3645.jpg']],
    featuresEn: ['Digital ring counter for dhikr with a gold-tone frame.', 'Compact and easy to carry.'],
    featuresAr: ['عداد تسبيح رقمي على شكل خاتم بإطار ذهبي.', 'صغير وسهل الحمل.']
  }
];

/* ---------- Interface texts (Arabic / English) ---------- */
const translations = {
  ar: {
    brandSubtitle: 'أزياء المحجبات العصرية',
    announcements: ['تخفيضات حتى 30%', 'شحن مجاني للطلبات فوق 1000 ج.م', 'استخدمي كود VOILE10 لخصم إضافي 10%'],
    searchPlaceholder: 'ابحثي عن طرح، ملابس، إسدالات...',
    searchSuggestions: 'عمليات بحث شائعة',
    suggestionTags: ['طرحة كتان', 'شيفون', 'بندانة', 'إسدال', 'عباية', 'حزام'],
    account: 'حسابي',
    wishlist: 'المفضلة',
    cart: 'الحقيبة',
    cartTitle: 'حقيبة التسوق',
    categories: 'الأقسام',
    shopByCategory: 'تسوقي حسب القسم',
    shopByCategoryDesc: 'اختاري القسم لعرض المنتجات مباشرة',
    collectionTitle: 'تشكيلتنا',
    collectionDesc: 'منتجات مختارة من أحدث تشكيلات لو فوال',
    resultsFound: '{count} منتج',
    sortBy: 'ترتيب',
    sortFeatured: 'المميز',
    sortNewest: 'الأحدث',
    sortPriceLow: 'السعر: من الأقل',
    sortPriceHigh: 'السعر: من الأعلى',
    saleOnly: 'التخفيضات',
    under200: 'أقل من 200 ج.م',
    allMaterials: 'كل الخامات',
    clearAll: 'مسح الفلاتر',
    noResultsTitle: 'لا توجد منتجات مطابقة',
    noResultsDesc: 'جربي كلمة بحث أخرى أو امسحي الفلاتر.',
    newBadge: 'جديد',
    quickView: 'عرض سريع',
    addToCart: 'أضيفي للحقيبة',
    added: 'تمت الإضافة',
    color: 'اللون',
    size: 'المقاس',
    oneSize: 'مقاس واحد',
    material: 'الخامة',
    dimensions: 'المقاس (سم)',
    quantity: 'الكمية',
    save: 'وفري',
    egp: 'ج.م',
    colorsCount: '{count} ألوان',
    viewOnStore: 'عرض المنتج على الموقع الرسمي',
    cartEmpty: 'حقيبتك فارغة',
    cartEmptyDesc: 'اكتشفي أحدث التشكيلات وأضيفي قطعك المفضلة.',
    startShopping: 'ابدئي التسوق',
    freeShippingNotice: 'أضيفي {amount} ج.م للحصول على شحن مجاني',
    freeShippingQualified: 'رائع! طلبك مؤهل للشحن المجاني',
    couponCode: 'كود الخصم',
    apply: 'تطبيق',
    couponApplied: 'تم تطبيق الكود {code} (خصم 10%)',
    couponInvalid: 'كود غير صالح. جربي VOILE10',
    subtotal: 'المجموع الفرعي',
    discount: 'الخصم',
    shipping: 'الشحن',
    free: 'مجاني',
    total: 'الإجمالي',
    checkout: 'إتمام الشراء',
    secureNote: 'دفع آمن 100% أو الدفع عند الاستلام',
    remove: 'حذف',
    wishlistEmpty: 'قائمة المفضلة فارغة',
    wishlistEmptyDesc: 'اضغطي على ♡ في أي منتج لحفظه هنا.',
    moveToCart: 'أضيفي للحقيبة',
    addedToCart: 'تمت إضافة "{name}" للحقيبة',
    addedToWishlist: 'تمت الإضافة للمفضلة',
    removedFromWishlist: 'تم الحذف من المفضلة',
    viewBag: 'عرض الحقيبة',
    loginSoon: 'تسجيل الدخول سيتوفر قريباً',
    checkoutDone: 'شكراً لكِ! تم استلام طلبك بقيمة {total} ج.م (نسخة تجريبية)',
    newsletterThanks: 'شكراً لاشتراكك في نشرة لو فوال!',
    backToTop: 'العودة للأعلى',
    perks: [
      ['truck', 'شحن مجاني', 'للطلبات فوق 1000 ج.م'],
      ['rotate', 'استبدال سهل', 'خلال 14 يوماً'],
      ['card', 'الدفع عند الاستلام', 'أو بالبطاقات وڤاليو'],
      ['shield', 'دفع آمن', 'حماية كاملة لبياناتك']
    ],
    footer: {
      aboutDesc: 'براند مصري لأزياء المحجبات: طرح، إسدالات، عبايات وملابس عصرية تجمع بين الاحتشام والأناقة والراحة اليومية.',
      shopLinks: 'تسوقي',
      customerCare: 'خدمة العملاء',
      newsletterTitle: 'اشتركي في النشرة البريدية',
      newsletterDesc: 'كوني أول من يعرف بالتشكيلات الجديدة والعروض الحصرية.',
      newsletterPlaceholder: 'بريدك الإلكتروني',
      subscribe: 'اشتراك',
      allRights: '© 2026 لو فوال ستورز. مشروع جامعي تعليمي.'
    }
  },
  en: {
    brandSubtitle: 'Modest Modern Fashion',
    announcements: ['SALE UP TO 30%', 'Free shipping on orders over 1000 EGP', 'Use code VOILE10 for an extra 10% off'],
    searchPlaceholder: 'Search scarves, clothes, isdals...',
    searchSuggestions: 'Popular searches',
    suggestionTags: ['Linen Scarf', 'Chiffon', 'Underscarf', 'Isdal', 'Abaya', 'Belt'],
    account: 'Account',
    wishlist: 'Wishlist',
    cart: 'Bag',
    cartTitle: 'Shopping Bag',
    categories: 'Categories',
    shopByCategory: 'Shop by Category',
    shopByCategoryDesc: 'Pick a category to jump straight to its products',
    collectionTitle: 'Our Collection',
    collectionDesc: 'Hand-picked pieces from the latest Le Voile collections',
    resultsFound: '{count} products',
    sortBy: 'Sort',
    sortFeatured: 'Featured',
    sortNewest: 'Newest',
    sortPriceLow: 'Price: Low to High',
    sortPriceHigh: 'Price: High to Low',
    saleOnly: 'On Sale',
    under200: 'Under 200 EGP',
    allMaterials: 'All materials',
    clearAll: 'Clear filters',
    noResultsTitle: 'No matching products',
    noResultsDesc: 'Try another search word or clear the filters.',
    newBadge: 'New',
    quickView: 'Quick view',
    addToCart: 'Add to Bag',
    added: 'Added',
    color: 'Color',
    size: 'Size',
    oneSize: 'One Size',
    material: 'Material',
    dimensions: 'Size (cm)',
    quantity: 'Quantity',
    save: 'Save',
    egp: 'EGP',
    colorsCount: '{count} colors',
    viewOnStore: 'View on the official store',
    cartEmpty: 'Your bag is empty',
    cartEmptyDesc: 'Discover the latest collections and add your favourite pieces.',
    startShopping: 'Start shopping',
    freeShippingNotice: 'Add {amount} EGP more for free shipping',
    freeShippingQualified: 'Great! Your order ships for free',
    couponCode: 'Discount code',
    apply: 'Apply',
    couponApplied: 'Code {code} applied (10% off)',
    couponInvalid: 'Invalid code. Try VOILE10',
    subtotal: 'Subtotal',
    discount: 'Discount',
    shipping: 'Shipping',
    free: 'Free',
    total: 'Total',
    checkout: 'Checkout',
    secureNote: '100% secure payment or cash on delivery',
    remove: 'Remove',
    wishlistEmpty: 'Your wishlist is empty',
    wishlistEmptyDesc: 'Tap ♡ on any product to save it here.',
    moveToCart: 'Add to Bag',
    addedToCart: '"{name}" was added to your bag',
    addedToWishlist: 'Added to wishlist',
    removedFromWishlist: 'Removed from wishlist',
    viewBag: 'View bag',
    loginSoon: 'Sign in is coming soon',
    checkoutDone: 'Thank you! Your order of {total} EGP was received (demo)',
    newsletterThanks: 'Thanks for subscribing to the Le Voile newsletter!',
    backToTop: 'Back to top',
    perks: [
      ['truck', 'Free Shipping', 'On orders over 1000 EGP'],
      ['rotate', 'Easy Exchange', 'Within 14 days'],
      ['card', 'Cash on Delivery', 'Or card & ValU'],
      ['shield', 'Secure Payment', 'Your data is protected']
    ],
    footer: {
      aboutDesc: 'An Egyptian modest fashion brand: scarves, isdals, abayas and modern wear that combine modesty, elegance and everyday comfort.',
      shopLinks: 'Shop',
      customerCare: 'Customer Care',
      newsletterTitle: 'Join our newsletter',
      newsletterDesc: 'Be the first to hear about new drops and exclusive offers.',
      newsletterPlaceholder: 'Your email address',
      subscribe: 'Subscribe',
      allRights: '© 2026 Le Voile Stores. A college student project.'
    }
  }
};

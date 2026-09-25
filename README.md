# Le Voile Stores — HTML / CSS / JavaScript version

A copy of the Le Voile storefront built with **plain HTML, CSS and JavaScript only**
(no React, no Tailwind, no build tools, no libraries).

## Files

```
vanilla-version/
├── index.html      page structure (header, hero, catalog, footer, popups)
├── css/style.css   all the styling, responsive layout and RTL support
└── js/
    ├── data.js     products, categories, stories and Arabic/English texts
    ├── popups.js   footer customer-care popups (FAQ, returns, size guide, branches, tracking)
    └── app.js      app state, rendering, filters, cart, modal, slider, language switch
```

## How to run

Open `index.html` in a browser (double-click it), or serve the folder, for example:

```
python -m http.server 5510 --directory vanilla-version
```

then open http://localhost:5510.

## Features

- Arabic (RTL) / English (LTR) language switch
- Category navigation, story circles and auto-playing hero slider
- Search with popular suggestions, "special deals" filter, fabric filter and sorting
- Product cards with colour swatches, hover image, wishlist and quick add
- Quick-view modal with colour, size and quantity selection
- Cart drawer with free-shipping progress bar and coupon codes (`VOILE10` or `DEFACTO` = 10% off)
- Cart and wishlist saved in `localStorage`
- Customer-care popups from the footer:
  - FAQ (accordion)
  - Return & exchange policy (steps + conditions)
  - Size guide (size tables, how to measure, fabric care)
  - Branches (filter by city, link to Google Maps)
  - Order tracking (demo: enter an order number like `LV-10236` to see a delivery timeline)

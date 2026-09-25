# Le Voile Stores — HTML / CSS / JavaScript version

A modern copy of the [Le Voile Stores](https://levoilestores.com) website, built with **plain HTML, CSS and JavaScript only**
(no React, no Tailwind, no build tools, no libraries). Made as a college project.

The brand colour (plum `#9e197e`), the Montserrat font, the products, prices, colours and photos all come from the
real store. Photos are loaded directly from the store's image server, so an internet connection is needed.

## Files

```
vanilla-version/
├── index.html      page structure (header, hero, categories, catalog, footer, popups)
├── css/style.css   all styling: colour variables, responsive layout, RTL (Arabic) support
└── js/
    ├── data.js     34 real products, colours, materials, categories and Arabic/English texts
    ├── popups.js   footer customer-care popups (FAQ, returns, size guide, branches, tracking)
    └── app.js      state, rendering, filters, bag, wishlist, quick view, slider, toasts
```

## How to run

Open `index.html` in a browser (double-click it), or serve the folder:

```
python -m http.server 5510 --directory vanilla-version
```

then open http://localhost:5510.

## Features

- Arabic (RTL) / English (LTR) switch — the chosen language is remembered
- Scrolling announcement bar, sticky header, search with popular suggestions
- Hero slider with three campaigns and "Shop by category" tiles
- Catalog with category chips (with product counts), "On sale", "Under 200 EGP", material filter and sorting
- Product cards: second photo on hover, colour swatches that change the photo, New / -% badges, quick add
- Quick view: photo gallery, colour + size selection (size is required for clothes), quantity, product details,
  link to the product on the official store
- Shopping bag drawer: quantities, free-shipping progress bar, coupon `VOILE10` (10% off), totals
- Wishlist drawer (saved in `localStorage`, like the bag)
- Toast notifications instead of `alert()` boxes, copy-to-clipboard promo code, back-to-top button
- Customer-care popups from the footer: FAQ, return policy, size guide, branches (filter by city), order tracking
  (demo: enter an order number like `LV-10236`)

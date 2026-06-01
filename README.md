Product links and documentation

This project stores product metadata in `product-data.js`. Each product has these key fields you can edit:

- `id`: product identifier (used in URLs)
- `name`: product display name
- `shopeeLink`: existing Shopee link
- `buyLink`: (NEW) link used for the "Buy Now" button — paste your preferred sales/checkout URL here
- `documentation`: (NEW) link to product documentation or PDF. Set this to `paste link here` as a placeholder.

How to add your links

1. Open `product-data.js` and find the product you want to update (e.g., `byou`, `nano-expansion`, `rover-module`).
2. Update the `buyLink` value with your product's purchase URL.
3. Replace the `documentation` value with the documentation URL (or keep `paste link here` until ready).

Example:

	{
		id: "byou",
		name: "Build-Your-Own Uno",
		...
		buyLink: "https://yourstore.example.com/byou",
		documentation: "https://docs.example.com/byou"
	}

What the site shows

- The product list cards include a "View Product" link (to the detail page), a "Buy Now" button (opens the `buyLink`), and a "Docs" button (opens `documentation`).
- The product detail page also uses `buyLink` for the Buy button and `documentation` for the Product Documentation button.

Other quick tips

- To change the hero text, edit the `quotes` array inside `script.js` (used by the typing animation).
- To change visual styles, edit `style.css` (look for `.hero-section`, `.doc-btn`, `.product-button-wrap`).

If you want, tell me the exact buy/documentation URLs and I can paste them into `product-data.js` for you.
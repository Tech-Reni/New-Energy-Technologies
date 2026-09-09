# Nature Energy Technologies Limited

Static seven-page corporate website built with HTML5, CSS3 and vanilla JavaScript.

## Pages

- `index.html` - Home
- `about.html` - About Us
- `products.html` - Products
- `services.html` - Services
- `projects.html` - Projects
- `why-us.html` - Why Choose Us
- `contact.html` - Contact and quote request

## Run locally

Because this is a static site, it can be opened directly in a browser. For a local server, from this folder run:

```powershell
py -m http.server 8080
```

Then open `http://localhost:8080`.

## Content to replace

The workspace did not include the official logo asset, confirmed contact details, company statistics, product specifications, approved project case studies or social handles. The site uses a temporary text/leaf lockup and clearly labelled placeholders for those items. Replace them in `js/main.js` and the relevant page content once the official material is available.

The quote form currently validates in the browser and displays a demo confirmation. Connect `form[data-quote-form]` in `js/main.js` to the chosen backend or form endpoint before launch.

## Libraries

Remix Icon, GSAP, ScrollTrigger and Lenis are loaded from CDNs. The site remains readable and navigable without JavaScript; JavaScript adds the shared shell, mobile navigation, filters, smooth scroll, reveals and sun movement.

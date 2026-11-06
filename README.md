# CorperHub

Find verified rooms near your NYSC place of primary assignment. Plain HTML, CSS and JavaScript, no build step. Open `index.html` in a browser.

## Structure

| Area | Files |
|---|---|
| Core and data | `js/core.js`, `js/data.js`, `js/store.js` |
| Shared UI | `js/components.js`, `css/base.css`, `css/layout.css`, `css/components.css` |
| Home and search | `js/pages/home.js`, `js/pages/search.js`, `css/home.css` |
| Saved homes and listing dialog | `js/pages/saved.js`, `js/listing-dialog.js`, `js/interactions.js` |
| Listers | `js/pages/listers.js` |
| Roommates and costs | `js/pages/roommates.js`, `js/pages/costs.js` |
| Login and signup | `js/pages/auth.js`, `css/auth.css` |
| Router | `js/app.js` |

Demo only: accounts and listings are stored in the browser (localStorage).

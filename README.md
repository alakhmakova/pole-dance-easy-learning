# React + Vite

## Project documentation

- [Routing: why BrowserRouter, and Link instead of a](docs/routing.md)
- [Learning log: documentation behind each commit](docs/learning-log.md)
- [Event handlers: passing a function, not calling it](docs/event-handlers.md)

## Buying elements and marking them as mastered

There is no payment and no user account yet. Progress is saved only in the
browser, in `localStorage` (code in `src/storage.js`).

- On a category page, click **Buy · €4**. The element counts as bought, and
  the button turns into a round **Mastered** checkbox.
- Tick the checkbox to mark the element as mastered, untick it to remove the
  mark. A bought element stays bought: as in a real shop, there is no button
  that cancels a purchase.

The browser keeps two lists of element ids:

| Key | Example value | Meaning |
| --- | --- | --- |
| `pole.owned` | `["F1","F4"]` | bought elements |
| `pole.mastered` | `["F1"]` | elements marked as mastered |

Each new id is added at the end, so the last id in a list is the latest
action. The ids are the `id` values in `public/data/elements.json`.

Progress belongs to one browser and one address: `localhost` and the Vercel
site have separate lists, and a private (incognito) window starts with none.

### Reset progress, for example before the next demo

**All progress:**

1. Open the site and press F12 to open the developer tools.
2. Chrome or Edge: tab **Application** → **Local storage** → the site's
   address. Firefox: tab **Storage** → **Local Storage** → the site's address.
3. Select `pole.owned` and press Delete. Do the same for `pole.mastered`.
4. Reload the page.

The same in one step: in the **Console** tab, run
`localStorage.removeItem("pole.owned"); localStorage.removeItem("pole.mastered");`
and reload the page.

**One element:** in the same list of keys, double-click the value of
`pole.owned` and remove that element's id, for example change `["F1","F4"]`
to `["F1"]`. Remove it from `pole.mastered` too, then reload the page.

### Why element ids are not shown on the site

Students don't need an element's id to buy or learn it, so the site shows only
names. To find an id now, look it up in `public/data/elements.json`, or take
the last id in `pole.owned` for the latest purchase. An admin panel for the
site owner, where ids are useful, is a possible next step.

## Development notes

- **StrictMode** (in `src/main.jsx`) is a React helper for development only. It shows nothing on the page. It runs components and effects twice on purpose, so bugs show up early. That is why in `npm run dev` the browser console can show the same log or error twice and `categories.json` is requested twice. The built site (Vercel) is not affected. [React docs: StrictMode](https://react.dev/reference/react/StrictMode)
- **vercel.json** tells Vercel to return `index.html` for every address. The site uses BrowserRouter, so pages like `/category/flexibility` exist only inside React, not as files on the server. Without this rule, refreshing such a page or opening its link directly would give a 404 error. In `npm run dev` Vite does this by itself. More in [docs/routing.md](docs/routing.md).

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

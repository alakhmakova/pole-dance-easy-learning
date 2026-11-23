# Routing: why BrowserRouter

## How pages work in this project

The site has only one HTML file, `index.html`, with one empty `div id="root"`.
React draws the whole site inside that `div`.
The "pages" are React components. The **router** reads the address in the browser
and decides which page component to show:

| Address | Page |
|---|---|
| `/` | Catalog (list of categories) |
| `/category/:id` | One category, for example `/category/flexibility` |

`index.html` never changes. Only what React draws inside `root` changes.

## Why a router at all

Without a router you could switch screens with `useState`, but the screens would have no
addresses of their own:

- the browser **Back** button would leave the site instead of going to the previous screen;
- you could not share a link to one category;
- a page refresh would always open the home page.

A router gives every page its own address.

## HashRouter vs BrowserRouter

React Router has two common routers. The difference is how the address looks.

### HashRouter

Address with `#`: `site.com/#/category/flexibility`

- The browser never sends the part after `#` to the server. The server always gets
  `site.com/` and returns `index.html`; React reads the part after `#` itself.
- **Plus:** works on any hosting without any setup.
- **Minus:** less clean addresses.
- **Minus (the main one for us):** `#` is already used for anchors. The menu links
  `#about` and `#contact` must scroll to the footer, but HashRouter would treat them
  as page addresses.

### BrowserRouter

Normal address: `site.com/category/flexibility`

- While you click links inside the site, React changes the address itself,
  without asking the server.
- **But:** on a page refresh, or when a link is opened directly, the browser asks the
  server for the file `/category/flexibility`. That file does not exist, so the server
  returns **404**.
- **Fix:** tell the server to return `index.html` for every address.
  On Vercel this is a rewrite rule in `vercel.json`.
  In development (`npm run dev`) Vite already does this by itself.
- **Plus:** clean addresses, and the anchors `#about` and `#contact` work as usual.

## Decision

This project uses **BrowserRouter** + a rewrite rule in `vercel.json`,
because the menu needs `#about` / `#contact` anchors and clean page addresses.

## Reference

- [React Router: Installation](https://reactrouter.com/start/declarative/installation)
- [React Router: Routing](https://reactrouter.com/start/declarative/routing)
- [Vercel: Rewrites](https://vercel.com/docs/rewrites)

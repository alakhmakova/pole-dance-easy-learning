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

### Where to find an element id

The page of a bought element shows its id in the address: `/element/F1` is
the element with the id `F1`. The text on the page shows only names, because
students don't need ids to buy or learn an element. For an element that is not
bought yet (it has no page), look the id up in `public/data/elements.json`.

## Opening an element page from the elements table

A bought element opens its own page (`/element/F1`) with a click anywhere in
its table row, except on the Mastered checkbox. Elements that are not bought
yet have no link: their rows are not clickable, and Buy works as before.

### Problems on the way and how they were solved

1. **The link opened the category id instead of the element id.**
   `ElementRow` used `useParams()`. `useParams` reads the parameters from the
   address of the *current page*. On `/category/flexibility` it returns the
   category id `flexibility`, and it knows nothing about a single row.
   **Solution:** take the id from the data the component already has in its
   props: `element.id`.
2. **The table layout broke.** `Link` was placed around the whole `tr`.
   `Link` becomes an `a` tag, and HTML allows only `tr` inside `tbody`, so the
   browser rebuilt the table and the rows fell apart. Wrapping every cell in
   its own link would give many links per row for keyboard and screen reader
   users. **Solution:** one link on the element name, inside its cell. For an
   element that is not bought, the name stays plain text (ternary on `owned`).
3. **Only the name was clickable,** but users also click the picture or empty
   space. **Solution:** a "stretched link" in `ElementRow.css`:
   - `tr` gets `position: relative`, so it becomes the frame for the link;
   - `a.el-name::after` is an empty, invisible layer with
     `position: absolute; inset: 0`, stretched over the whole row. It is part
     of the link, so a click on it opens the page;
   - the Buy button and the checkbox get `position: relative; z-index: 1`, so
     they lie above that layer and keep working without opening the page;
   - `tr:has(a.el-name:hover)` highlights a bought row under the mouse.

   No JavaScript is needed, the row is one link for the keyboard, and
   "Open in new tab" works.

### Two ways to get an id

| Where | How | Why |
| --- | --- | --- |
| Pages (`CategoryPage`, `ElementPage`) | `const { id } = useParams()` | The page must know *which* category or element to load, and that is written in the address (`category/:id`, `element/:id` in `App.jsx`). |
| Links (`ElementRow`, `CategoryCard`) | from the data in props: `` `/element/${element.id}` `` | The component already has the object it shows. It builds the address of the *next* page from it, not from the current address. |

Docs: [useParams](https://reactrouter.com/api/hooks/useParams),
[Link](https://reactrouter.com/api/components/Link),
[::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after),
[inset](https://developer.mozilla.org/en-US/docs/Web/CSS/inset),
[z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index),
[:has()](https://developer.mozilla.org/en-US/docs/Web/CSS/:has).

## How to trace the data: search, filters, buying, mastered and counts

Each chain below starts with what the user does and ends with what changes on
the screen. Read it from top to bottom; every step names the file and the
function, so you can open them in this order. One rule holds everywhere: the
**page** keeps the state (`useState`), the small components only show it and
report clicks through functions they get as props, and every list or number
on the screen is computed again on each render from that state.

### Search in the catalog

1. The user types in the field: `SearchBox.jsx`, `onChange={(event) => onChange(event.target.value)}`.
2. `onChange` is `setSearchText` from `CategoryList.jsx`, so the typed text goes into the state `searchText`.
3. The new state makes React render `CategoryList` again.
4. `visibleCategories = categories.filter(category => matchesSearch(category.name, searchText))`.
   `matchesSearch` (`src/utils.js`) compares in lower case and ignores spaces around the search text;
   an empty field matches every category.
5. `visibleCategories.map(...)` draws a `CategoryCard` for each one, or the text
   "No categories match your search." when the list is empty.

### Search and level filter on a category page

1. Typing works as in the catalog: `SearchBox` → `setSearchText` in `CategoryPage.jsx`.
2. A level button: `Filters.jsx`, `onClick={() => onChange('Beginner')}` (and so on for each level).
   `onChange` is `setLevel` from `CategoryPage.jsx`; the state `level` is `'All'` at the start.
3. `Filters` gets `selected={level}` back; the chosen button has `aria-pressed="true"` and is filled (`Filters.css`).
4. `visibleElements = elements.filter(element => matchesSearch(element.name, searchText) && (level === 'All' || getLevel(element.techValue) === level))`.
   Both conditions must be true; the parentheses are needed because `&&` runs before `||`.
5. `visibleElements.map(...)` draws an `ElementRow` for each one, or "No elements match your search.".
   The search field and the buttons stay on the page, so the user can change the search.

### Buying an element (owned)

1. The user clicks **Buy · €4**: `ElementRow.jsx`, `onClick={() => onBuy(element.id)}`.
2. `onBuy` is `handleBuy` in `CategoryPage.jsx`, which calls `setOwned(buyElement(elementId))`.
3. `buyElement(id)` in `src/storage.js` adds the id to the list `pole.owned` in `localStorage`
   (only once) and returns the new list.
4. `setOwned` puts the new list into the state `owned`, and the page renders again.
5. Each row gets `owned={owned.includes(element.id)}`. With `true`, the row shows the Mastered
   checkbox instead of the Buy button, the name becomes a link to `/element/<id>`, and the lock
   badge and the grey picture disappear.
6. The element page checks the same list: `ElementPage.jsx`, `getOwnedIds().includes(id)`.
   If the element is not bought, `<Navigate>` sends the user back to its category page.

### Marking an element as mastered

1. On a category page: the checkbox in `ElementRow.jsx`, `onChange={() => onToggleMastered(element.id)}`.
   On an element page: the Mastered button in `ElementPage.jsx`, `onClick={() => handleToggleMastered(element.id)}`.
2. `handleToggleMastered` (in `CategoryPage.jsx` and in `ElementPage.jsx`) calls `setMastered(toggleMastered(elementId))`.
3. `toggleMastered(id)` in `src/storage.js` removes the id from `pole.mastered` if it is there, adds it
   otherwise, saves the list and returns it.
4. The state `mastered` changes and the page renders again:
   - category page: each row gets `mastered={mastered.includes(element.id)}` (checkbox ticked or not);
   - element page: `isMastered = mastered.includes(element.id)` sets `aria-pressed` and the text of the button.

### Numbers on the screen

| Where | What is shown | How it is computed |
| --- | --- | --- |
| Catalog card | "8 elements" | `countElementsInCategory(category.id)` in `CategoryList.jsx`: elements of all categories (`getAllElements()`), filtered by `categoryId`, then `.length` |
| Catalog card | "1/3 mastered" | `countIdsInCategory(masteredIds, category.id)` / `countIdsInCategory(ownedIds, category.id)` in `CategoryList.jsx`: the category's elements whose id is in the list, then `.length`. The two lists are read once from `localStorage` with `getMasteredIds()` and `getOwnedIds()` |
| Catalog card | Olive progress bar | `masteredPercent` in `CategoryCard.jsx`: `Math.round(categoryMastered / categoryOwned * 100)`, or 0 when nothing is bought; it becomes the `width` of the olive part (`style={{ width: ... }}`) |
| Category page header | "1 / 3 mastered of the elements you own" | `masteredCount` and `ownedCount` in `CategoryPage.jsx`: `elements.filter(el => mastered.includes(el.id)).length` and the same with `owned`. `elements` already holds only this category (`getElements(id)` in `src/api.js`) |
| Table row, element page | Level: Beginner, Intermediate, Advanced | `getLevel(element.techValue)` in `src/utils.js`: up to 0.3 Beginner, up to 0.6 Intermediate, higher Advanced |
| Table row | Leaves before the level | `leafCount` in `ElementRow.jsx`: position of the level in `['Beginner', 'Intermediate', 'Advanced']` plus 1; that many filled leaves, the rest are outlines |
| Table row, element page | "Tech value 0.1" | `element.techValue` from `elements.json`; `toFixed(1)` always shows one decimal (1 becomes "1.0") |

Only bought elements have a checkbox, so a mastered element is always a bought
one, and "mastered" is never larger than "owned".

### Previous / next element on the element page

1. `ElementPage.jsx`: `ownedInCategory` = bought elements of the same category, in the order of `elements.json`
   (`elements.filter(el => el.categoryId === element.categoryId && ownedIds.includes(el.id))`).
2. `position = ownedInCategory.findIndex(el => el.id === element.id)`; `previousElement` and `nextElement`
   are the elements at `position - 1` and `position + 1`, or `undefined` at the start or the end of the list.
3. If there is a previous or next element, the pager shows a `Link` to `/element/<id>`; otherwise a pale
   text that cannot be clicked. The middle link goes back to the category page.
4. The address changes but the same page component stays open, so an Effect with `[id]` calls
   `window.scrollTo(0, 0)` to show the new element from the top.

### Wide (landscape) pictures on the element page

1. `ElementPage.jsx`: the picture has `onLoad={(event) => setWide(event.target.naturalWidth > event.target.naturalHeight)}`.
   `naturalWidth` and `naturalHeight` are the real size of the image file.
2. `wide` becomes `true` for a landscape picture, and `div.el-wrap` gets the class `wide`.
3. `ElementPage.css`, rules `.el-wrap.wide`: the picture takes the full width, the text goes into two columns under it.

## Ways to move between pages and places on a page

The site uses several kinds of links. Each one does a different job.

| Kind | Where in the code | What happens | Page reloads? |
| --- | --- | --- | --- |
| `<Link to="/...">` from `react-router` | category cards, element names in the table, breadcrumbs, logo, Previous / next element | Opens another page of the site (another route) | No, React only swaps the page component |
| `<Navigate to="..." replace />` from `react-router` | `ElementPage.jsx`, element that is not bought | Sends the visitor to another page by itself, without a click | No |
| `<a href="#id">` (hash link) | "Browse categories" in the hero (`#catalog`), "About" and "Contact" in the header (`#about`, `#contact`) | Scrolls to the element with that `id` on the same page | No |
| `window.scrollTo(0, 0)` in an Effect | `ElementPage.jsx`, when `id` changes | JavaScript scrolls the page to the top | No |

### Link and Navigate: other pages of the site

- `Link` is written like `<Link to="/category/flexibility">`. In the browser it becomes a normal `<a>`,
  but React Router stops the reload and only shows the new page component. A plain `<a href="/category/flexibility">`
  would load the whole site again, so links between pages of the site always use `Link`.
- `Navigate` is a component, not a link. When React draws it, the address changes at once.
  `replace` means the old address is replaced in the history, so the Back button does not return
  to the locked element and send the visitor away again.

### Hash links: a place on the same page

1. The link has `href="#catalog"`. The `#` means "not a new page, a place on this page".
2. The target has `id="catalog"` (`<section id="catalog">` in `CatalogPage.jsx`).
3. On click the browser finds the element with this `id` and scrolls to it. No JavaScript is needed.
4. `index.css`: `html { scroll-behavior: smooth; }` makes the scroll smooth. It is inside
   `@media (prefers-reduced-motion: no-preference)`, so visitors who turned off animations in their
   system get a jump instead of a moving page.
5. "About" and "Contact" work from every page, because the footer with `#about` and `#contact` is on every page.
   `#catalog` exists only on the home page.

### Scrolling with JavaScript

- `window.scrollTo(0, 0)` scrolls the whole window to the top. The element page uses it because
  Previous / next keeps the same page component open, and the browser would stay at the old scroll position.
- Not used yet: `element.scrollIntoView({ behavior: 'smooth' })` scrolls to one element after some action
  (for example after a form is sent). In React the element is usually found with `useRef`.

Read more: [Link](https://reactrouter.com/api/components/Link), [Navigate](https://reactrouter.com/api/components/Navigate),
[scroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior),
[scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView),
[scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo).

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

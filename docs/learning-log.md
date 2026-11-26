# Learning log: documentation behind each commit

This project was my first React project. For every commit, this file lists
the topics I had to learn and the documentation I used to write and understand
the code. When I start a new React project, I can find the right page here
quickly.

Commits are in the order they were made.

---

## 1. Create Vite React project

**Topics:** what a single page application is, what React and Vite are,
installing Node.js, creating a Vite project, deploying on Vercel.

- freeCodeCamp lectures:
  - [The role of JS libraries and frameworks](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/lecture-introduction-to-javascript-libraries-and-frameworks/what-is-the-role-of-js-libraries-and-frameworks-and-why-are-they-used-in-the-industry)
  - [Single page applications](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/lecture-introduction-to-javascript-libraries-and-frameworks/what-are-single-page-applications-and-what-are-some-issues-surrounding-them)
  - [What is React](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/lecture-introduction-to-javascript-libraries-and-frameworks/what-is-react-and-what-is-it-commonly-used-for)
  - [What is Vite](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/lecture-introduction-to-javascript-libraries-and-frameworks/what-is-vite-and-how-can-it-be-used-to-set-up-a-new-react-project)
- [Node.js download](https://nodejs.org/en/download)
- [Vite: Scaffolding your first Vite project](https://vite.dev/guide/#scaffolding-your-first-vite-project)
- [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite)
- [Create React App: Deployment](https://create-react-app.dev/docs/deployment/) (general deployment guide)

## 2. Add Header component

**Topics:** components, JSX, import and export, semantic HTML elements,
Fragment, CSS files in Vite.

- [React: Quick Start](https://react.dev/learn)
- [Your First Component](https://react.dev/learn/your-first-component)
- [Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components)
- [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [Fragment](https://react.dev/reference/react/Fragment)
- [Vite: CSS](https://vite.dev/guide/features.html#css)
- MDN: [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), [nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
- [BEM naming](https://getbem.com/introduction/) (class names)

## 3. Add global styles and fonts

**Topics:** CSS custom properties (design tokens) in `index.css`.

- [Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## 4. Add category list with category cards

**Topics:** props, rendering lists with `map`, the `key` attribute, arrow
functions, destructuring props, modules.

- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component), especially [reading props in the child](https://react.dev/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component) and [passing JSX as children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)
- [Rendering Lists](https://react.dev/learn/rendering-lists)
- javascript.info: [Arrow functions](https://javascript.info/arrow-functions-basics), [Array methods](https://javascript.info/array-methods), [Destructuring assignment](https://javascript.info/destructuring-assignment), [Export and import](https://javascript.info/import-export)

## 5. Style header and add logo

**Topics:** Flexbox, Grid, media queries, `object-fit`, `line-height`.

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) (CSS-Tricks)
- MDN: [Grids](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids), [Media queries](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries), [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit), [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)

## 6. Style category grid and cards

**Topics:** the `fr` unit, the box model, cascade and specificity, `flex-grow`,
`margin-top: auto` to push content down in a flex column.

- MDN: [Flexible grids with the fr unit](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit), [The box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model), [Handling conflicts](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts), [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [flex-grow](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-grow) (CSS-Tricks)
- [Using auto margins in flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#using_auto_margins_for_main_axis_alignment) (MDN)

## 7. Load categories with fetch

**Topics:** promises, `async`/`await`, `fetch`, `response.ok`, `useState`,
`useEffect`, loading, error and empty states, strict equality.

- javascript.info: [Promise basics](https://javascript.info/promise-basics), [Async/await](https://javascript.info/async-await), [Fetch](https://javascript.info/fetch), [Strict equality](https://javascript.info/comparison#strict-equality)
- [Response.ok](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) (MDN)
- [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- freeCodeCamp blocks: [State and events](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#lecture-working-with-state-and-responding-to-events-in-react), [Effects](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#lecture-understanding-effects-and-referencing-values-in-react), [Data fetching](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#lecture-working-with-data-fetching-and-memoization-in-react), [Review: state and hooks](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/#review-react-state-and-hooks)

## 8. Add React Router with catalog and category pages

**Topics:** why a router is needed, BrowserRouter vs HashRouter, `Routes`
and `Route`, StrictMode, the Vercel rewrite in `vercel.json`.

- React Router: [Installation](https://reactrouter.com/start/declarative/installation), [Routing](https://reactrouter.com/start/declarative/routing)
- [StrictMode](https://react.dev/reference/react/StrictMode)
- [Serving apps with client-side routing](https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing) (Create React App docs: why the server must return index.html for every address, the reason for `vercel.json`)
- My own notes: [routing.md](routing.md)

## 9. Add layout with footer and router links

**Topics:** layout routes and `Outlet`, `Link` instead of a plain link,
function vs class components.

- React Router: [Layout routes](https://reactrouter.com/start/declarative/routing#layout-routes), [Navigating](https://reactrouter.com/start/declarative/navigating)
- [Class components](https://react.dev/reference/react/Component) (only to know they exist; this project uses function components)

## 10. Load category and its elements on the category page

**Topics:** reading the id from the address with `useParams`, `filter` and
`find`, `response.json()`, loading two files at once with `Promise.all`,
array destructuring, `useState` and re-rendering, `useEffect` with the `[id]`
dependency, cleanup with an `ignore` flag, template literals.

- React: [State: A Component's Memory](https://react.dev/learn/state-a-components-memory), [Render and Commit](https://react.dev/learn/render-and-commit), [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects) (dependencies, cleanup, fetching data)
- [useParams](https://reactrouter.com/api/hooks/useParams) (React Router)
- javascript.info: [Promise.all](https://javascript.info/promise-api#promise-all), [Array destructuring](https://javascript.info/destructuring-assignment#array-destructuring), [Strings and backticks](https://javascript.info/string#quotes)
- MDN: [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [Response.json()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json), [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
- [Throttle the network](https://developer.chrome.com/docs/devtools/network#throttle) (Chrome DevTools: how to see the loading state)

## 11. Add elements table to the category page

**Topics:** a component for one table row, passing a whole object as one
prop, conditional rendering with the ternary operator, HTML table structure
(`thead`, `tbody`, `tr`, `th`, `td`), formatting numbers with `toFixed`,
breadcrumbs with `Link`, table styling (`border-collapse`, `overflow-x`),
fluid font size with `clamp()`.

- React: [Conditional Rendering](https://react.dev/learn/conditional-rendering), [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- MDN: [table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table), [Number.toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed), [border-collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse), [overflow-x](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x), [clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)

## 12. Add buying, mastered progress and category counts

**Topics:** saving data in the browser with `localStorage`, turning arrays
into text and back with `JSON.stringify` and `JSON.parse`, handling errors
with `try...catch`, building a new array with spread syntax, checking a value
with `includes`, removing a value with `filter`, event handlers (`onClick`,
`onChange`) and passing an argument with an arrow function, counting with
`filter` + `includes` + `length` instead of storing numbers that can be computed.

- MDN: [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse), [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch), [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [Array.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- React: [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state), [useState: Avoiding recreating the initial state](https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state), [Responding to Events](https://react.dev/learn/responding-to-events#adding-event-handlers), [Controlling an input with a state variable](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
- My own notes: [event-handlers.md](event-handlers.md)

## 13. Add phone menu and make elements table responsive

**Topics:** media queries (`@media (max-width: ...)`), a Menu button that
opens and closes the links on phones (`useState` with `true`/`false`, a class
name chosen with a ternary, `aria-expanded`), keeping text on one line with
`white-space: nowrap` and `flex-shrink: 0`, turning table rows into small
cards on phones with CSS Grid (`display: grid` on `tr`, `grid-column`,
`grid-row`).

- MDN: [Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries), [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap), [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink), [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space), [Basic concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout), [grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column), [grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
- MDN: [aria-expanded](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [Device Mode](https://developer.chrome.com/docs/devtools/device-mode) (Chrome DevTools: how to check the site at phone width)

## 14. Add route and empty element page

**Topics:** a new route with a parameter (`element/:id`), a new page component.

- [Routing](https://reactrouter.com/start/declarative/routing) (React Router: dynamic segments)

## 15. Link bought elements to their page

**Topics:** `useParams` reads the current address, so a link takes its id from
the data in props (`element.id`); why `Link` cannot wrap a `tr`; the
"stretched link" pattern (`position: relative` on the row, `::after` with
`position: absolute; inset: 0`, `z-index` for the button and the checkbox);
`:has()`; smooth hover effects with `transition`, `transform: scale()` and
`color-mix()`; `prefers-reduced-motion`.

- React Router: [Link](https://reactrouter.com/api/components/Link), [useParams](https://reactrouter.com/api/hooks/useParams), [useNavigate](https://reactrouter.com/api/hooks/useNavigate) (why Link is better for normal links)
- MDN: [::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after), [inset](https://developer.mozilla.org/en-US/docs/Web/CSS/inset), [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index), [:has()](https://developer.mozilla.org/en-US/docs/Web/CSS/:has), [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition), [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow), [color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix), [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- More in the README section "Opening an element page from the elements table"

## 16. Add element page and lock badges on elements that are not bought

**Topics (element page):** sharing a function between components through its own module
(`src/level.js`), finding one item in a list with `find` after loading,
why code must not read properties of `undefined` before the "not found" check,
a value computed from state (`isMastered`) instead of a function, the click event
that React passes to `onClick` (and why an arrow function passes the id instead),
redirecting with the `Navigate` component and `replace`, rendering a list with `map` and `key`.

- React: [Rendering Lists](https://react.dev/learn/rendering-lists), [Responding to Events: passing handlers](https://react.dev/learn/responding-to-events#passing-event-handlers-as-props)
- React Router: [Navigate](https://reactrouter.com/api/components/Navigate)
- MDN: [JavaScript modules: export and import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

**Topics (landscape images and the leaf icon):** the `onLoad` event of an image and the event object
(`event.target`), comparing `naturalWidth` and `naturalHeight` to find landscape pictures,
a state value (`wide`) that switches a CSS class, a grid item that spans all columns (`grid-column: 1 / -1`)
only when it is a direct child of the grid, a decorative image with an empty `alt`,
icon and text in one row with `display: flex` and `gap`, crediting a CC BY icon.

- React: [Image events (onLoad)](https://react.dev/reference/react-dom/components/common#image-events)
- MDN: [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target), [naturalWidth](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/naturalWidth), [grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column), [img alt](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt)

**Topics (lock badge):** a class name chosen with a ternary (`className={owned ? undefined : "locked"}`),
showing something only when a condition is true with `&&`, inline SVG with
`currentColor`, `aria-hidden` for decorative icons, `opacity` and `filter: grayscale()`,
a badge in the corner with `position: absolute` inside a `position: relative` box.

- React: [Conditional Rendering: Logical AND operator](https://react.dev/learn/conditional-rendering#logical-and-operator-)
- MDN: [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter), [opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity), [currentColor](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword), [aria-hidden](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)

## 17. Add search, level filters and headings to catalog and category pages

**Topics:** a reusable controlled input (`SearchBox` gets `value`, `onChange` and `placeholder` from the page),
lifting state up (the page keeps `searchText` and `level`, the child components only show and report them),
a filtered list computed during render instead of a second state, `filter` with `includes`, `toLowerCase` and `trim`,
`&&` runs before `||` (parentheses around the level condition), a ternary for "nothing found" instead of an early
`return` (so the search field stays on the page), a fragment `<>...</>` that adds no extra element,
shared helpers in `src/utils.js` (`getLevel`, `matchesSearch`), `aria-pressed` on toggle buttons.
Level leaves in the table: `indexOf` to turn the level into a number, `map` over `[1, 2, 3]` to draw three images.
Progress bar on catalog cards (an inline `style` with a computed width), previous / next links on the element page
(`findIndex`, reading `array[index]` outside the list gives `undefined`), scrolling to the top in an Effect with `[id]`.
Hero section on the home page: a link to `#catalog` that scrolls to an element with that id, `scroll-behavior: smooth`
with `prefers-reduced-motion`, decorations placed with `position: absolute` around a `position: relative` box,
`overflow: hidden` to cut a picture to rounded corners, one `h1` per page (the catalog title became `h2`).
README section "How to trace the data" describes each chain step by step.

- React: [Thinking in React](https://react.dev/learn/thinking-in-react), [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components), [Avoid redundant state](https://react.dev/learn/choosing-the-state-structure#avoid-redundant-state), [Controlling an input with a state variable](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable), [Fragment](https://react.dev/reference/react/Fragment)
- JavaScript: [Array methods](https://javascript.info/array-methods), [Strings](https://javascript.info/string), [Logical operators](https://javascript.info/logical-operators)

## 18. Move decorative pictures from public/images to src/assets/images

**Rule.** `public/` is for files the site asks for by a URL string at runtime: `data/*.json`,
category pictures and element pictures (their paths are written in the JSON files), `favicon.svg`
(used in `index.html`). Files there are copied as they are and nobody checks that a path is right.
`src/assets/` is for pictures a component uses directly: they are imported in JavaScript,
`import leafUrl from '../assets/images/leaf.svg'`, and used as `src={leafUrl}`.
Vite then checks the file exists (a wrong path breaks the build, not the live site),
adds a hash to the file name so browsers never keep an old copy, and puts very small files
(under 4 KB, like `sparkle.svg` and the level leaves) straight into the code as data URLs.

**Moved:** logo, leaf, level leaves, hero branch and flowers, sparkle, divider sprig.
**Stayed in public:** `data/`, `images/*.jpg`, `images/elements/`, `favicon.svg`.

- Vite: [Static Asset Handling](https://vite.dev/guide/assets), [The public directory](https://vite.dev/guide/assets#the-public-directory)

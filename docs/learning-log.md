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

## In progress: buying elements and marking them as mastered

**Topics:** saving data in the browser with `localStorage`, turning arrays
into text and back with `JSON.stringify` and `JSON.parse`, handling errors
with `try...catch`, building a new array with spread syntax, checking a value
with `includes`, removing a value with `filter`, event handlers (`onClick`,
`onChange`) and passing an argument with an arrow function.

- MDN: [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse), [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch), [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [Array.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- React: [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state), [useState: Avoiding recreating the initial state](https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state), [Responding to Events](https://react.dev/learn/responding-to-events#adding-event-handlers), [Controlling an input with a state variable](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
- My own notes: [event-handlers.md](event-handlers.md)

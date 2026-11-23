# React + Vite

## Project documentation

- [Routing: why BrowserRouter](docs/routing.md)

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

# Frontend — Tailwind CSS setup

This project uses Vite + React and Tailwind CSS. The local environment where this assistant runs doesn't have Node.js/npm available, so I updated the CSS and added instructions so you can finish the installation and run the dev server locally.

Steps to get the frontend running locally

1. Install Node.js (includes npm)

   - Recommended (macOS): using Homebrew

     ```bash
     # install Homebrew if you don't have it
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

     # install Node
     brew install node
     ```

   - Or use the Node installer from https://nodejs.org/ or nvm (recommended for managing versions).

2. Install dependencies and run the dev server

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. Troubleshooting editor warnings about unknown at-rules

- If your editor shows warnings like "Unknown at rule @tailwind" or "Unknown at rule @apply":
  - Make sure `node_modules` is installed (`npm install`). Many editor plugins rely on local packages to provide syntax support.
  - Install the Tailwind CSS IntelliSense extension in VS Code.
  - If you use stylelint and it flags `@apply` or `@tailwind`, add a stylelint config that disables `at-rule-no-unknown` for PostCSS/Tailwind, or add this comment near the top of your CSS file:

    ```css
    /* stylelint-disable at-rule-no-unknown */
    ```

Notes from the changes made by this assistant

- Updated `src/index.css` to include Tailwind directives and a small set of base styles using `@layer base` and `@apply`.
- I added a stylelint disable comment at the top of `src/index.css` to reduce editor/linter noise when Tailwind/PostCSS isn't available.

If you want, tell me once you've run `npm install` locally and I will run additional checks or help with any remaining issues.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

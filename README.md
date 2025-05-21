# Next.js 15 Starter Pack with shadcn/ui and Theme Provider

This is a Next.js 15 starter project using the App Router, configured with TypeScript, Prettier for formatting, ESLint for code quality, Vitest with jsdom for UI testing, and shadcn/ui with a theme provider for light/dark mode support. The project does not use a `src/` directory, with source files organized in `app/`, `components/`, and `lib/`.

## Features

- **Next.js 15**: Utilizes the App Router and React 19 for modern routing and enhanced features.
- **TypeScript**: Type-safe development with path aliases (`@/*` mapped to `app/*`).
- **Prettier**: Standalone code formatting with custom rules (tabs, `tabWidth: 4`, single quotes).
- **ESLint**: Code quality linting, separated from Prettier, using ESLint 9 flat configuration.
- **Vitest with jsdom**: Fast unit testing for React components using React Testing Library.
- **shadcn/ui**: Customizable, accessible React components built with Tailwind CSS and Radix UI.
- **Theme Provider**: Light/dark/system mode support via `next-themes` with a toggle component.
- **Tailwind CSS v4**: Configured with shadcn/ui’s theme variables for consistent styling.
- **VS Code Integration**: Auto-formatting with Prettier and ESLint fixes on save.

## Prerequisites

- **Node.js**: Version 18 or higher.
- **npm**: Version 8 or higher.
- **VS Code** (recommended): Install the following extensions:
     - Prettier - Code formatter (`esbenp.prettier-vscode`)
     - ESLint (`dbaeumer.vscode-eslint`)

## Setup

1. **Clone the Repository**:

     ```bash
     git clone <repository-url>
     cd nextjs-app-router-starter
     ```

2. **Install Dependencies**:

     ```bash
     npm install
     ```

3. **Initialize shadcn/ui** (if not already set up):

     ```bash
     npx --legacy-peer-deps shadcn@latest init
     ```

     Recommended options:

     - Style: Default
     - Base color: Slate
     - CSS variables: Yes
     - Components directory: `components/ui`
     - Global CSS: `app/globals.css`
     - Utils: `lib/utils.ts`

4. **Verify Configuration**:
     - Ensure the following files are in the project root: `.prettierrc`, `.prettierignore`, `eslint.config.mjs`, `tsconfig.json`, `vitest.config.mts`, `components.json`, `tailwind.config.js`.
     - Check `app/globals.css` for Tailwind and shadcn/ui styles.
     - Verify `app/tests/setup.ts` for Vitest setup, `app/__tests__/page.test.tsx` for a sample test, `components/theme-provider.tsx` for theming, and `components/ui/` for shadcn/ui components.

## Available Scripts

In the project directory, you can run:

- **Start Development Server**:

     ```bash
     npm run dev
     ```

     Runs the app in development mode with Turbopack. Open [http://localhost:3000](http://localhost:3000) to view it, including the shadcn/ui button and theme toggle.

- **Build for Production**:

     ```bash
     npm run build
     ```

     Builds the app for production to the `.next` folder.

- **Start Production Server**:

     ```bash
     npm run start
     ```

     Runs the built app in production mode.

- **Lint Code**:

     ```bash
     npm run lint
     ```

     Runs ESLint to check for code quality issues.

- **Format Code**:

     ```bash
     npm run format
     ```

     Formats all `.ts`, `.tsx`, `.js`, and `.jsx` files using Prettier, excluding `components/ui/*`.

- **Check Formatting**:

     ```bash
     npm run format:check
     ```

     Verifies that files are formatted according to Prettier rules.

- **Run Tests**:

     ```bash
     npm run test
     ```

     Runs Vitest tests in watch mode with jsdom, including a workaround for Vite’s CommonJS deprecation warning.

- **Run Tests with UI**:

     ```bash
     npm run test:ui
     ```

     Runs tests with Vitest’s browser-based UI.

- **Run Tests with Coverage**:
     ```bash
     npm run test:coverage
     ```
     Generates a test coverage report.

## Project Structure

- `app/`: Contains Next.js App Router pages and layouts (e.g., `app/page.tsx`, `app/layout.tsx`).
- `app/__tests__/`: Vitest test files (e.g., `page.test.tsx`).
- `app/tests/`: Test setup files (e.g., `setup.ts` for React Testing Library).
- `components/`: Custom components, including `theme-provider.tsx`.
- `components/ui/`: shadcn/ui components (e.g., `button.tsx`, `dropdown-menu.tsx`, `mode-toggle.tsx`).
- `lib/`: Utility functions (e.g., `utils.ts` for `cn` helper).
- `.vscode/`: VS Code settings for Prettier and ESLint integration.

## Theming

- **Theme Provider**: Configured in `components/theme-provider.tsx` using `next-themes` for light, dark, and system mode support.
- **Mode Toggle**: A `ModeToggle` component in `components/ui/mode-toggle.tsx` provides a dropdown to switch themes.
- **Customization**: Edit `app/globals.css` to modify theme colors or use the shadcn/ui theme editor at [ui.shadcn.com/themes](https://ui.shadcn.com/themes).

## Adding shadcn/ui Components

To add more sh

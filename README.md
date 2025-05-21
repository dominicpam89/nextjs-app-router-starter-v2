# Next.js 15 Starter Pack

This is a Next.js 15 starter project using the App Router, configured with TypeScript, Prettier for formatting, ESLint for code quality, and Vitest with jsdom for UI testing. The project does not use a `src/` directory, with source files organized in `app/`, `components/`, etc.

## Features

- **Next.js 15**: Uses the App Router for modern routing and React 19 for enhanced features.
- **TypeScript**: Type-safe development with path aliases (`@/*` mapped to `app/*`).
- **Prettier**: Standalone code formatting with custom rules (tabs, single quotes, etc.).
- **ESLint**: Code quality linting, separated from Prettier, using flat configuration.
- **Vitest with jsdom**: Fast unit testing with React Testing Library for UI components.
- **VS Code Integration**: Configured for auto-formatting and linting on save.

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

3. **Verify Configuration**:
     - Ensure `.prettierrc`, `.prettierignore`, `eslint.config.mjs`, `tsconfig.json`, and `vitest.config.mts` are in the project root.
     - Check `app/tests/setup.ts` for Vitest setup and `app/__tests__/page.test.tsx` for a sample test.

## Available Scripts

In the project directory, you can run:

- **Start Development Server**:

     ```bash
     npm run dev
     ```

     Runs the app in development mode with Turbopack. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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

     Formats all `.ts`, `.tsx`, `.js`, and `.jsx` files using Prettier.

- **Check Formatting**:

     ```bash
     npm run format:check
     ```

     Verifies that files are formatted per Prettier rules.

- **Run Tests**:

     ```bash
     npm run test
     ```

     Runs Vitest tests in watch mode, using jsdom for UI testing. Includes a workaround for Vite’s CJS deprecation warning.

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

- `app/`: Contains Next.js App Router pages and layouts (e.g., `app/page.tsx`).
- `app/__tests__/`: Test files for Vitest (e.g., `page.test.tsx`).
- `app/tests/`: Test setup files (e.g., `setup.ts` for React Testing Library).
- `components/`: Reusable React components (optional, create as needed).
- `.vscode/`: VS Code settings for Prettier and ESLint integration.

## Testing

This project uses Vitest with jsdom for unit testing React components. A sample test is provided in `app/__tests__/page.test.tsx`, which tests the `Home` component in `app/page.tsx`.

To write new tests:

1. Create test files in `app/__tests__/` with `.test.tsx` or `.spec.tsx` extensions.
2. Use React Testing Library and jest-dom matchers (e.g., `toHaveTextContent`).

Example:

```tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../page';

describe('Home Component', () => {
	it('renders the welcome heading', () => {
		render(<Home />);
		expect(screen.getByTestId('home-heading')).toHaveTextContent(
			'Welcome to Next.js 15'
		);
	});
});
```

## Formatting and Linting

- **Prettier**: Configured in `.prettierrc` with tabs (`tabWidth: 4`), single quotes, and other rules. Run `npm run format` to format files or `npm run format:check` to verify formatting.
- **ESLint**: Uses flat configuration in `eslint.config.mjs`, focusing on code quality (e.g., `no-unused-vars`). Formatting rules are disabled to avoid conflicts with Prettier. Run `npm run lint` to check for issues.
- **VS Code**: `.vscode/settings.json` enables auto-formatting with Prettier and ESLint fixes on save.

## Notes

- **CommonJS**: The project uses CommonJS (`"module": "CommonJS"` in `tsconfig.json`) to avoid setting `"type": "module"` in `package.json`. Vitest uses ESM via `vitest.config.mts` and a `VITE_CJS_IGNORE_WARNING=true` workaround for Vite’s CJS deprecation.
- **No `src/` Directory**: Source files are in `app/`, with tests in `app/__tests__/`.
- **Next.js 15**: Compatible with Next.js 15.3.2 and React 19, using the App Router.
- **Vitest Warning**: The `VITE_CJS_IGNORE_WARNING=true` prefix in test scripts suppresses Vite’s CJS deprecation warning. This is temporary until Vite 6, when full ESM migration may be required.

## Troubleshooting

- **CJS Deprecation Warning**: If the warning persists, ensure `vitest.config.mts` is used and run `npm update` to get the latest `vitest` and `@vitejs/plugin-react`.
- **Test Failures**: Check `app/tests/setup.ts` and ensure dependencies like `@testing-library/react` are version `^16.0.1` for React 19 compatibility.
- **Formatting Issues**: Verify `.prettierrc` and `.prettierignore` are applied. Run `npm run format:check`.
- **Linting Issues**: Check `eslint.config.mjs` and ensure the ESLint VS Code extension is installed.

For further assistance, refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Vitest Documentation](https://vitest.dev)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)
- [ESLint Documentation](https://eslint.org/docs/latest/)

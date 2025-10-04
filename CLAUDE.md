# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FormCraft is a React-based form builder library inspired by Laravel Filament. It's designed to be published as an npm package with a declarative API for building complex forms.

## Architecture

### Core Design Principles

1. **Validation Strategy**: Function-based validation where users pass validation functions as props. Optional adapters (e.g., Zod) are provided via subpath exports (`@formcraft/core/validators`).

2. **Package Structure**: Uses **Scoped Package** (`@formcraft/core`) with **Subpath Exports** for namespace-like organization:
   - `@formcraft/core` - Main components and hooks
   - `@formcraft/core/validators` - Validation adapters (Zod, etc.)
   - Additional exports can be added as needed

3. **File Co-location**: Test files (`*.test.tsx`) and Storybook stories (`*.stories.tsx`) are placed alongside their source files, not in separate directories.

4. **Component Architecture**:
   - `src/components/` - Form components (fields, layout)
   - `src/builders/` - Laravel Filament-inspired builder API classes
   - `src/hooks/` - Custom React hooks for form management
   - `src/context/` - React context for form state
   - `src/types/` - TypeScript type definitions
   - `src/utils/` - Utility functions

## Technology Stack

- **Build**: Vite (library mode)
- **Test**: Vitest
- **CSS**: Tailwind CSS
- **TypeScript Config**: strict mode, ES2020 target, ESNext modules, bundler moduleResolution

## Development Commands

(To be added once package.json scripts are configured)

Expected scripts will include:
- `npm run dev` - Start Vite dev server
- `npm run build` - Build library (TypeScript + Vite)
- `npm test` - Run Vitest tests
- `npm run lint` - ESLint check
- `npm run storybook` - Start Storybook dev server

## Package Publishing Configuration

### Output Format
- CommonJS: `./dist/index.cjs`
- ESM: `./dist/index.js`
- TypeScript declarations: `./dist/index.d.ts`

### Peer Dependencies
- React: `^18.0.0`
- React DOM: `^18.0.0`

### Side Effects
- `sideEffects: ["**/*.css"]` (Tailwind CSS files)

### Published Files
- Only `dist/` directory is published to npm
- Test and story files are automatically excluded

## Code Style

- **ESLint**: `@typescript-eslint/recommended` + `eslint-config-prettier`
- **Prettier**: printWidth: 100, semi: true, singleQuote: true
- **Git Hooks**: Husky with lint-staged for pre-commit checks (optional Conventional Commits)

## Documentation

- Technical details are in `./docs/`:
  - `directory-structure.md` - Full project structure
  - `technical-stack.md` - Technology choices and rationale
  - `development-environment.md` - Setup and tooling details
  - `package-publishing.md` - Publishing configuration and documentation strategy

# AGENTS.md

## Project Overview

This is a personal portfolio website for RailgunBreaker. It is a Vite-powered React app written in TypeScript, styled with Tailwind CSS v4 and HeroUI v3.

Keep the site focused, polished, and portfolio-first. Prefer direct, usable pages and components over marketing filler.

## Tech Stack

- Package manager: `pnpm`
- Framework/runtime: React 19 with Vite
- Language: TypeScript
- UI library: HeroUI v3
- Styling: Tailwind CSS v4 via `@tailwindcss/vite`
- Formatting: Prettier with `prettier-plugin-tailwindcss`
- Linting: ESLint flat config

## Useful Commands

- Install dependencies: `pnpm install`
- Start local development: `pnpm dev`
- Build for production: `pnpm build`
- Lint: `pnpm lint`
- Strict lint check: `pnpm lint:check`
- Format: `pnpm format`
- Check formatting: `pnpm format:check`

Run `pnpm build` before considering larger UI or TypeScript changes complete. For smaller style-only edits, at least run `pnpm lint:check` or explain why it was not run.

## Repository Layout

- `src/main.tsx` is the current React entry point.
- Put reusable React components in `src/components/`.
- Put reusable React hooks in `src/hooks/`.
- `src/styles/index.css` imports Tailwind and HeroUI styles.
- `vite.config.ts` configures Tailwind, React, and the React Compiler Babel preset.
- `dist/` is generated build output. Do not edit it by hand unless the user explicitly asks.

## Coding Guidelines

- Follow the existing Vite + React + TypeScript patterns.
- Prefer functional React components and typed props when extracting components.
- Keep components small and portfolio-oriented; avoid adding broad app architecture until the site needs it.
- Use Tailwind utilities for layout and styling. Keep class names readable and let Prettier sort Tailwind classes.
- Apply styles through Tailwind whenever possible.
- Keep `src/styles/index.css` clean and limited to essential global imports or necessary custom styles that cannot be expressed with Tailwind.
- Avoid one-off CSS unless Tailwind or HeroUI cannot express the design cleanly.
- Keep generated assets and build artifacts out of source edits unless they are intentionally part of the requested change.

## Design Guidelines

- Design for a personal portfolio: clear identity, strong project presentation, and fast scanning.
- Make the first viewport communicate RailgunBreaker's work or persona immediately.
- Use HeroUI controls for interactive UI where appropriate.
- Keep layout responsive across mobile and desktop.
- Avoid oversized decorative sections that delay access to actual portfolio content.
- Do not add instructional text about how the UI works unless it is necessary for the user experience.

## Quality Bar

- Preserve TypeScript correctness.
- Keep ESLint and Prettier clean.
- When adding dependencies, justify the need and prefer packages that fit the current Vite/React stack.
- Respect existing uncommitted user changes. Do not revert or overwrite unrelated edits.

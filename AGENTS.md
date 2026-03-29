# Repository Guidelines

## Project Structure & Module Organization

This repository is a small Expo Router app. Route files live in `app/`; `app/_layout.tsx` defines the root stack and `app/index.tsx` is the current home screen. Shared build and styling config lives at the repo root in `global.css`, `metro.config.js`, `babel.config.js`, `postcss.config.mjs`, and `nativewind-env.d.ts`. Expo runtime settings are in `app.json`. Static assets such as icons and splash images live in `assets/images/`. Generated output goes to `dist/` and should not be edited.

## Build, Test, and Development Commands

Use `pnpm`, not `npm`.

- `pnpm install`: install dependencies and apply the pinned `lightningcss` override.
- `pnpm start`: start the Expo development server.
- `pnpm android`: launch the app in an Android emulator.
- `pnpm ios`: launch the app in an iOS simulator.
- `pnpm web`: run the app in a local web build.
- `pnpm lint`: run ESLint with Expo’s flat config.
- `pnpm exec tsc --noEmit`: run the strict TypeScript check.
- `pnpm exec expo export --platform web`: verify the production web bundle.

## Coding Style & Naming Conventions

Follow the existing TypeScript and React style in the repo: functional components, concise props, and consistent formatting within each file. Keep Expo Router filenames conventional, for example `index.tsx` for index routes and `_layout.tsx` for layouts. When using `className`, import primitives from `react-native-css/components/...` rather than `react-native`. Keep NativeWind configuration CSS-first in `global.css`; do not add a legacy Tailwind v3 config.

## Testing Guidelines

No dedicated test runner is configured yet. For every change, run `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm exec expo export --platform web`. If you introduce a test framework later, place tests near the code they cover and document the command in `package.json`.

## Commit & Pull Request Guidelines

The visible Git history only contains `Initial commit`, so there is no established convention beyond keeping messages short and imperative, such as `Add profile route` or `Fix web export`. Pull requests should include a clear summary, linked issue when relevant, validation steps, and screenshots or recordings for UI changes.

## Configuration Notes

This project uses Expo SDK 54, Expo Router 6, React Native 0.81, NativeWind v5 preview, and Tailwind CSS v4. Preserve the `pnpm.overrides.lightningcss` pin in `package.json`; changing it can break the Expo and NativeWind web toolchain.

Always use the global theme instead of a hardcoded color values.
is no established convention beyond keeping messages short and imperative, such as `Add profile route` or `Fix web export`. Pull requests should include a clear summary, linked issue when relevant, validation steps, and screenshots or recordings for UI changes.

## Configuration Notes

This project uses Expo SDK 54, Expo Router 6, React Native 0.81, NativeWind v5 preview, and Tailwind CSS v4. Preserve the `pnpm.overrides.lightningcss` pin in `package.json`; changing it can break the Expo and NativeWind web toolchain.

Always use the global theme instead of a hardcoded color values.

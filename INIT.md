# Project Notes

This file explains the main design decisions in simple terms so future changes stay consistent.

## App Structure

- The app uses Expo Router with file-based routing.
- `app/_layout.tsx` is the root layout for the whole app.
- `app/index.tsx` redirects into the tabs area instead of rendering its own screen.
- The main app lives under `app/(tabs)`.
- Auth screens live under `app/(auth)`.

## Tabs

- The tab bar is custom, not the default Expo tab bar.
- Tabs are defined from `constants/data.ts` instead of hardcoding each screen in the layout.
- This keeps tab order, names, and icons in one place.
- The current tabs are Home, Subscriptions, Insights, and Settings.

## Tab Bar Design

- The tab bar is meant to feel like a floating bottom navigation bar.
- It uses absolute positioning, rounded corners, and theme-based colors.
- Safe area insets are used so the bar sits correctly above the iPhone home indicator and other device edges.
- Tab labels are currently hidden, so navigation relies on icons.
- Active and inactive icon states are handled with shared classes like `tabs-pill` and `tabs-active`.

## Subscriptions Routing

- The subscriptions tab has a nested folder route.
- `app/(tabs)/subscriptions/index.tsx` is the main subscriptions tab screen.
- `app/(tabs)/subscriptions/[id].tsx` is a dynamic detail route for individual subscriptions.
- This avoids creating separate files for every service like Spotify or Netflix.

## Styling

- Styling is controlled through `global.css` with NativeWind and theme tokens.
- Theme colors should come from the global theme instead of hardcoded color values.
- Shared tab bar styles also live in `global.css`.

## Fonts

- The app uses Plus Jakarta Sans from `assets/fonts`.
- Fonts are registered in `app.json` through the `expo-font` plugin.
- Fonts are loaded in `app/_layout.tsx` before the UI renders.
- The splash screen stays visible until fonts finish loading so the app does not flash unstyled text.
- Tailwind font utilities are mapped to the loaded font names in `global.css`.
- Use the shared vocabulary instead of raw font file names:
- `font-sans` for regular body text
- `font-sans-light` for lighter supporting text
- `font-sans-medium` for emphasized body text
- `font-sans-semibold` for labels and UI emphasis
- `font-sans-bold` for headings and strong actions
- `font-sans-extrabold` for hero text and major emphasis

## Safe Area Handling

- The root layout uses `SafeAreaProvider`.
- Screen-level safe area wrappers are used on rendered screens instead of wrapping the whole router tree.
- This avoids blank-screen issues while still respecting device insets.

## Package Manager

- Use `pnpm`, not `npm`.
- This repo relies on `pnpm` behavior and pinned overrides, especially for `lightningcss`.

## Guidance For Future Changes

- Keep route groups organized by purpose, like `(tabs)` and `(auth)`.
- Prefer data-driven config over repeated hardcoded screen declarations.
- Reuse theme tokens and shared utility classes before adding one-off styles.
- Keep startup behavior stable: fonts should load before screens render.
- When changing navigation or layout, always account for safe areas.

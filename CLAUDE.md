# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Expo React Native application using:
- **Expo SDK 54** with the new architecture enabled
- **React 19** and **React Native 0.81.5**
- **NativeWind 5.0** (Tailwind CSS for React Native)
- **Expo Router 6** with file-based routing and typed routes
- **TypeScript** with strict mode enabled
- **pnpm** as the package manager

## Development Commands

### Starting the App
```bash
pnpm start           # Start Expo development server
pnpm android         # Run on Android emulator
pnpm ios             # Run on iOS simulator
pnpm web             # Run in web browser
```

### Code Quality
```bash
pnpm lint            # Run ESLint (expo lint)
```

### Connecting to Physical iPhone via Tunnel

When you need to test on a physical iPhone device:

1. Stop current Expo server (if running)
2. Start Expo with tunnel mode:
   ```bash
   pnpm expo start --tunnel
   ```
3. Wait for tunnel URL to be generated (takes 10-30 seconds)
4. Scan the new QR code on iPhone

## Architecture

### Routing
- Uses **Expo Router** with file-based routing in the `app/` directory
- `app/_layout.tsx` is the root layout that wraps all routes
- Typed routes are enabled via `experiments.typedRoutes` in `app.json`
- Uses Stack navigation from expo-router by default

### Styling System
The project uses **NativeWind** (Tailwind CSS for React Native) with a specific setup:

1. **Components from `react-native-css/components`**: Import `View` and `Text` from `react-native-css/components` instead of `react-native` to use Tailwind className prop
2. **Global CSS**: The `global.css` file imports Tailwind layers and NativeWind theme
3. **Metro Config**: Configured with NativeWind Metro plugin (`withNativewind`)
4. **Babel Config**: Includes `nativewind/babel` preset
5. **PostCSS**: Configured with `@tailwindcss/postcss` v4
6. **Type Definitions**: `nativewind-env.d.ts` provides types for `react-native-css`

### TypeScript Configuration
- Path alias `@/*` maps to the root directory
- Strict mode enabled
- Excludes `app-example` directory

### Expo Configuration
Key settings in `app.json`:
- **New Architecture**: Enabled (`newArchEnabled: true`)
- **React Compiler**: Experimental feature enabled
- **Edge-to-edge**: Enabled on Android
- **Metro bundler**: Used for web output
- **Color scheme**: Automatic (supports dark mode)

## Important Notes

### Package Manager
This project uses **pnpm** with specific overrides:
- `lightningcss` is pinned to version `1.30.1` in pnpm overrides

### Component Imports
Always import UI components from `react-native-css/components` when using className:
```tsx
import { View, Text } from "react-native-css/components";
```

Do NOT import from `react-native` if you need className support.

### File-Based Routing
- Routes are defined by files in the `app/` directory
- `_layout.tsx` files define nested layouts
- Index routes use `index.tsx` filename
- Route parameters and dynamic routes follow Expo Router conventions

# Crema App - Mobile - 2.0 📱

[![Build Status](https://github.com/cremalab/crema-app-mobile/workflows/CI/badge.svg)](https://github.com/cremalab/crema-app-mobile/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project includes configuration and tooling that conforms to Crema's baseline best-practices for a Mobile Application.

## 🧰 Tools Used

- [![Native Base Logo](./public/assets/nativebase.svg)](https://nativebase.io/) for super quick UI buildouts.
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/#expovector-icons) because we like good type definitions and react-native-vector-icons currently does not have types for its icon names
- [ESLint](https://eslint.org) for code linting
- [Expo (Bare Workflow)](https://docs.expo.dev/bare/exploring-bare-workflow/) for leveraging expo modules, including [expo-updates](https://docs.expo.dev/versions/latest/sdk/updates/)
- [Jest](https://jestjs.io) for unit tests
- [Prettier](https://prettier.io) for code formatting (via ESLint plugin)
- [TypeScript](http://www.typescriptlang.org) for Static Typing in JavaScript ([Learn](http://www.typescriptlang.org/docs/handbook/basic-types.html))
- [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv) - for using environmental variables with TS support
- [react-native-svg](react-native-svg) - for creating and using SVGs
- [React Navigation](https://reactnavigation.org/) - for all that navigation goodness
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/) - for near native performance with animations
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) for testing react-native components
- [Storybook](https://storybook.js.org) for component documentation/playground

## 👟👟 First Steps

1. [Install Node/NPM](https://nodejs.org/en/)
2. [Install NVM](https://github.com/creationix/nvm#installation-and-update) (Node Version Manager)
3. `nvm install 'lts/*' && nvm use`
4. `npm i -g expo-cli`
5. `npm i` (install project dependencies)
6. [Install the ESLint plugin for ~~your editor~~ VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
7. Enable "Auto-Fix on Save" in `settings.json`:

```
// There will likely be other settings within this JSON object...
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

8. Ensure that `XCode` and the related command line tools are setup using [this guide](https://docs.expo.io/versions/latest/workflow/ios-simulator/)
9. Ensure that `Android Studio` and a virtual device (Emulator) are setup using [this guide](https://docs.expo.io/versions/v37.0.0/workflow/android-studio-emulator/)
10. Ensure that `adb` is setup correctly, if you have followed step `9` it should be.
    - If `adb --version` outputs a version then you should be good to go.

## 🎨 Customizing Your App

Please note, expo-splash-screen has known issues on android, if after running the below script an error is thrown, read [here](https://github.com/expo/expo/tree/main/packages/expo-splash-screen#-configure-android) on how to manually set the splash screen for android.

1. To rename your app, including its bundle identifier, package name (android), display name, and app directories, run the following script: `npm run customize:makeityours` and follow the prompts. **This will delete and replace ./ios ./android and app.json**

2. [Customize Icon](https://github.com/martiliones/icon-set-creator): `npm run customize:icon <your-icon-path>`
3. Customize SplashScreen: `npm run customize:splashscreen [options]` Click [here](https://github.com/expo/expo-cli/tree/master/unlinked-packages/configure-splash-screen#-usage) to see all available options.
4. The default NativeBase theme is extended [here](./src/theme/index.tsx). Use the existing key/value pairs as suggestions and feel free to cater them towards your app's design system. NativeBase has some excellent defaults that you can get started with as well. If you wish to learn more about customizing the NativeBase theme, you can read more [here](https://docs.nativebase.io/customizing-theme).
5. The default navigator is a tab navigator, but a drawer navigator has been built out as well. Simply comment it in, and delete references to the tab navigator. We've included 4 screens and a modal to get you started. You can very easily change the names and icons for each screen and start giving your app it's own identity.

## 🏛 Structure

The `src` directory is where the meat of your app is located. Below is a printout of its file-tree with a description for each part.

```
src
├── assets // Fonts, Images, Etc.
│   └── logo.svg
├── components // Create a new one with `npm run new:component`
│   └── ExampleComponent
│       ├── README.md // Documentation
│       ├── index.tsx // Main Module Code
│       ├── stories.tsx // Playground stories (npm run start:visual)
│       └── test.tsx // Unit Tests (Jest)
├── hooks // Custom Hooks live here
│   └── useSomeHook.ts
├── navigation
│   ├── index.ts // Navigation re-exports
│   ├── RootNavigator.tsx
│   ├── TabNavigator.tsx
│   └── DrawerNavigator.tsx
├── screens
│   ├── Home
│   │   ├── README.md // Documentation
│   │   ├── index.tsx // Main Module Code
│   │   ├── stories.tsx // Playground stories (npm run start:visual)
│   │   └── test.tsx // Unit Tests (Jest)
│   └── index.ts // Screens re-exports
├── types // Centralized Type Definitions
│   ├── Entity.ts // Base Type
│   ├── EntityThing.ts // A Sub-Type
│   ├── Id.ts // A Type Alias of `string`
│   └── Thing.ts // Silly example used by `EntityThing`
├── utils // Create a new one with `npm run new:util`
│   └── exampleUtil // Utility directory
│       ├── index.ts // Define and export the utility here
│       ├── README.md // Document the utility
│       └── test.ts // Test the utility
├── stories // Directory used to load storybook stories in one place
│   └── index.tsx
├── App.tsx
└── index.js // Root Module
```

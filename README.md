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

## ▶ Run

### Start React-Native

You can start the react-native process with a number of different commands that each do something slightly different.

- `npm start` - Starts the react-native development server but does not open the app on any devices.
- `npm run start:ios`, `npm run start:android`, `npm run start:web` - Starts the react-native development server and attempts to open the app on a device that matches the platform in the script (i.e. `ios`, `android`, or `web`).
- `npm run start:visual` - Starts the react-native development server using the storybook entry point (i.e. `./storybook/index.js` ) as well as starts the storybook server.

### On Device

There are a number of different ways to run your app, some virtual and some on physical hardware.

#### iOS Simulator

As long as XCode is setup correctly you should be able to start the Simulator directly by starting the app with `npm run start:ios`.

- [Expo Docs - iOS Simulator](https://docs.expo.io/versions/v37.0.0/workflow/ios-simulator/)

#### Android Emulator

If Android Studio is installed correctly you should be able to open an emulator by following these steps:

1. Open the Android Studio app
2. Click the button `Configure` in the bottom right of the window
3. Click `AVD Manager` from the list of options
4. Click `Launch this AVD in the Emulator` (It's the green play icon )
   - If there are no devices in the list then create one by clicking `Create Virtual Device`
5. You should be able to launch the app on the Emulator by starting the app with `npm run start:android`.

- [Expo Docs - Android Studio Emulator](https://docs.expo.io/versions/v37.0.0/workflow/android-studio-emulator/)

#### Actual Device

- [React-Native Docs: Running On Device](https://reactnative.dev/docs/running-on-device)

## 🎨 Customizing Your App

Please note, expo-splash-screen has known issues on android, if after running the below script an error is thrown, read [here](https://github.com/expo/expo/tree/main/packages/expo-splash-screen#-configure-android) on how to manually set the splash screen for android.

1. To rename your app, including its bundle identifier, package name (android), display name, and app directories, run the following script: `npm run customize:makeityours` and follow the prompts. **This will delete and replace ./ios ./android and app.json**

2. [Customize Icon](https://github.com/martiliones/icon-set-creator): `npm run customize:icon <your-icon-path>`
3. Customize SplashScreen: `npm run customize:splashscreen [options]` Click [here](https://github.com/expo/expo-cli/tree/master/unlinked-packages/configure-splash-screen#-usage) to see all available options.
4. The default NativeBase theme is extended [here](./src/theme/index.tsx). Use the existing key/value pairs as suggestions and feel free to cater them towards your app's design system. NativeBase has some excellent defaults that you can get started with as well. If you wish to learn more about customizing the NativeBase theme, you can read more [here](https://docs.nativebase.io/customizing-theme).
5. The default navigator is a tab navigator, but a drawer navigator has been built out as well. Simply comment it in, and delete references to the tab navigator. We've included 4 screens and a modal to get you started. You can very easily change the names and icons for each screen and start giving your app it's own identity.

## 📋 Test

### Lint

Linting is done with `ESlint` and `Prettier` and can be ran with `npm run test:lint` or `npm run test:lint:fix` which will attempt to auto-fix any issues that it can.

The relevant configuration files are:

- `.eslintrc.js`
- `.prettierrc.js`

### Types

Type checking is done with `tsc` and can be ran with `npm run test:types` or started in watch mode with `npm run start:types`.

The typescript config is at `tsconfig.json`.

### Unit

Unit testing is done with Jest and can be ran with `npm run test:unit` or started in watch mode with `npm run start:unit`.

### Visual

Visual testing is done with a combination of Storybook and Loki and has a little more setup that the other test scripts.

#### Start Storybook

1. Expo needs to be started with the Storybook root, this is done by running `npm run start:visual`.
1. Load the App onto any device you are testing.

At this point clicking on one of the stories in the Web UI should display that story on any device that loaded the App onto.

Story files are first placed in the same directory as the component and then imported into `src/stories/index.tsx`.

_Notes:_

- _If you are testing on Android make sure the Android Emulator is already running before you run `npm run start:expo`. You need to stop any other expo processes before you run this._
- _If you see `adb: error: no devices/emulators found` then it didn't connect to the Android emulator for some reason._
- _You may need to reload the app on the devices to connect to Storybook, you can do this with CMD+R on iOS or pulling down the notification shade and clicking reload on Android._

## ⚙️ Scripts

Run the following scripts with `npm run <SCRIPT_HERE>`:

- `clear:cache` - start the react native server and clear metro cache
- `customize:icon` - customize your app's icon
- `customize:splashscreen` - customize your app's splashscreen
- `customize:makeityours` - remove existing android/ios directories and rebuild them with your own app name
- `start` - start react-native server
- `android` - build android app (will start react-native server if not running) 👉 be sure an android emulator is running
- `ios` - build ios app and start simulator (will start react-native server if not running)
- `web` - build for web 👉 please note that this repo is not configured for web, you'll have to set that up yourself
- `start:production` - explicity start server with NODE_ENV=production
- `start:development` - explicity start server with NODE_ENV=development
- `start:local` - explicity start server with NODE_ENV=local
- `start:visual` - start component playground with storybook
- `test:types` - run tsc
- `test:unit` - run unit tests
- `test:lint` - run linter
- `test:ci` - run the same tests that CI runs

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
├── App.tsx
├── storybook
│   ├── addons.js // storybook add-ons
│   ├── index.js // storybook entry point
│   ├── rn-addons.js // react-native add-ons
│   └── storyloader.js // this is an auto-generated file, do not edit it
└── index.js // Root Module
```

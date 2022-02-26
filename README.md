# Crema App - Mobile - 2.0 📱

[![Build Status](https://github.com/cremalab/crema-app-mobile/workflows/CI/badge.svg)](https://github.com/cremalab/crema-app-mobile/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project includes configuration and tooling that conforms to Crema's baseline best-practices for a Mobile Application.

## 🧰 Tools Used

- [![Native Base Logo](./public/assets/nativebase.svg)](https://nativebase.io/) for super quick UI buildouts.
- [ESLint](https://eslint.org) for code linting
- [Prettier](https://prettier.io) for code formatting (via ESLint plugin)
- [TypeScript](http://www.typescriptlang.org) for Static Typing in JavaScript ([Learn](http://www.typescriptlang.org/docs/handbook/basic-types.html))
- [React Navigation](https://reactnavigation.org/) - for all that navigation goodness
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/) - for near native performance with animations

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

1. Run the following script: `npm run customize:makeityours` and follow the prompts. ![#CD5C5C](This will delete and replace ./ios ./android and app.json)
2. [Customize Icon](https://github.com/martiliones/icon-set-creator): `npm run customize:icon <your-icon-path>`
3. Customize SplashScreen: `npm run customize:splashscreen [options]` Click [here](https://github.com/expo/expo-cli/tree/master/unlinked-packages/configure-splash-screen#-usage) to see all available options.

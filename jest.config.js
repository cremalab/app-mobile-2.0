const config = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "<rootDir>/../node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
  ],
  setupFilesAfterEnv: ["<rootDir>/__mocks__/globalMock.js"],
  moduleNameMapper: {
    "^react-native-reanimated$":
      "<rootDir>/node_modules/react-native-reanimated/src/Animated.js",
  },
}

module.exports = config

const config = {
  preset: "react-native",
  transformIgnorePatterns: [
    "<rootDir>/../node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
  ],
  setupFilesAfterEnv: [
    "<rootDir>/__mocks__/globalMock.js",
    "@testing-library/jest-native/extend-expect",
  ],
  moduleNameMapper: {
    "^react-native-reanimated$":
      "<rootDir>/node_modules/react-native-reanimated/src/Animated.js",
    "test-utils": "<rootDir>/src/testing/test-utils",
  },
}

module.exports = config

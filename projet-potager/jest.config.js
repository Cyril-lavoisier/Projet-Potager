module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    transformIgnorePatterns: [
      "node_modules/(?!(expo|react-native|react-native-fetch-api|react-native-polyfill-globals)/)"
    ],
  };
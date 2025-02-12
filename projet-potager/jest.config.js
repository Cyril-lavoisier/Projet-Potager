module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    transformIgnorePatterns: [
      'node_modules/(?!(react-native|@react-native|react-clone-referenced-element|react-native-fetch-api|react-native-polyfill-globals)/)',
    ],
  };
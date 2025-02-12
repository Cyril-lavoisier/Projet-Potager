module.exports = {
  preset: "react-native",
  transformIgnorePatterns: [
    "node_modules/(?!(expo|expo-asset|react-native|@react-native|react-native-fetch-api|react-native-polyfill-globals)/)"
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
};

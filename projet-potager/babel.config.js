module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['@babel/plugin-transform-runtime'],
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ['@babel/plugin-transform-private-methods'],
  };
};

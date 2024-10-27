module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset'
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "./src/components",
            "@store": "./src/store",
            "@utils": "./src/utils",
            "@styles": "./src/styles",
            "@assets": "./src/assets",
            "@config": "./src/config",
            "@api": "./src/api"
          }
        }
      ]
    ]
  };
};

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "./src/components",
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

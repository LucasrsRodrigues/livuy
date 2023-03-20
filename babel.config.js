module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            "@assets": './src/assets',
            "@components": './src/components',
            "@screens": './src/screens',
            "@global": './src/global',
            "@storage": './src/storage',
            "@hooks": './src/hooks',
            "@themes": './src/themes',
            "@utils": './src/utils',
          }
        }
      ],
    ]
  };
};

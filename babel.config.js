module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          ':assets': './src/assets',
          ':imageAssets': './src/assets/images',
          ':components': './src/components',
          ':modules': './src/modules',
          ':module_app': './src/modules/app',
          ':module_news': './src/modules/news',
          ':global': './src/global',
          ':navigation': './src/navigation',
          ':scenes': './src/scenes',
        },
      },
    ],
  ],
};

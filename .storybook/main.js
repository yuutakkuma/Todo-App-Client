const path = require('path');

module.exports = {
  stories: ['../stories/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ]
  // webpackFinal: async config => {
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     use: [
  //       // Optional
  //       {
  //         loader: require.resolve('preset-create-react-app')
  //       }
  //     ]
  //   });
  //   config.resolve.extensions.push('.ts', '.tsx');
  //   return config;
  // }
};

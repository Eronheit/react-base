const CracoLessPlugin = require('craco-less');
const path = require('path');

const theme = require('./src/styles/theme');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: theme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src$1',
      },
    },
  },
};

const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN; // we will set up this env var using the CI/CD pipeline
/*
  Domain will be same, but remoteEntry file will be at different path for each subproject
  We have to make an assumption now, and ensure we setup our infra according to this assumption
  domain
  |__ marketing
    |__ remoteEntry.js
  |__ auth
    |__ remoteEntry.js
  ......
  ......
*/

const prodConfig = {
  mode: 'production', // webpack optimises & minifies JS files
  output: {
    filename: '[name].[contenthash].js' // when we build, the file names will follow this template, also deals with caching issues
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        'marketing': `marketing@${domain}/marketing/remoteEntry.js`
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
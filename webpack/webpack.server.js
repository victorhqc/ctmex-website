/* eslint import/no-extraneous-dependencies: 0 */

const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const universalConfig = require('./webpack.universal.js');
const productionConfig = require('./webpack.server.production.js');

const {
  getFilename,
} = require('./utils');

const config = {
  // Inform webpack that we're bundling a bundle
  // for NodeJS, rather than for the browser.
  target: 'node',

  // Tell webpack the root file of our server application.
  entry: './src/index.js',

  // Tell webpack where to put the output file that is generated.
  output: {
    filename: getFilename(),
    path: path.resolve(__dirname, '../dist'),
  },

  externals: [webpackNodeExternals()],
};

module.exports = merge(universalConfig, productionConfig, config);

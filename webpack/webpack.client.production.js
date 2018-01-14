/* eslint import/no-extraneous-dependencies: 0 */

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

if (process.env.NODE_ENV !== 'production') {
  module.exports = {};
} else {
  module.exports = {
    plugins: [
      new UglifyJsPlugin(),
      new LodashModuleReplacementPlugin(),
    ],
  };
}

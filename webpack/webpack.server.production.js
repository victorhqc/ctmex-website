/* eslint import/no-extraneous-dependencies: 0 */

const WebpackAutoInject = require('webpack-auto-inject-version');

if (process.env.NODE_ENV !== 'production') {
  module.exports = {};
} else {
  module.exports = {
    plugins: [
      new WebpackAutoInject({
        PACKAGE_JSON_PATH: './package.json',
      }),
    ],
  };
}

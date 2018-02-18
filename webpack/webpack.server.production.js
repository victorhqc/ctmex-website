/* eslint import/no-extraneous-dependencies: 0 */

const map = require('lodash/map');
const WebpackAutoInject = require('webpack-auto-inject-version');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const {
  routes,
} = require('../src/locales/es/main');

if (process.env.NODE_ENV !== 'production') {
  module.exports = {};
} else {
  module.exports = {
    plugins: [
      new WebpackAutoInject({
        PACKAGE_JSON_PATH: './package.json',
      }),
      // SEO sitemap
      new SitemapPlugin(
        process.env.WEB_DOMAIN,
        map(routes, route => `${route.url === '/' ? '' : route.url}/`),
      ),
    ],
  };
}

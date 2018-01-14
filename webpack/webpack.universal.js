/* eslint import/no-extraneous-dependencies: 0 */

const webpack = require('webpack');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const paths = {
  appSrc: resolveApp('src'),
};

const env = process.env.NODE_ENV || 'development';

const getFileName = (e) => {
  if (e === 'production') {
    return 'static/media/[name].[hash:8].[ext]';
  }

  return 'static/media-dev/[name].[ext]';
};

const fileOptions = {
  name: getFileName(env),
};

module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              // @remove-on-eject-begin
              // baseConfig: {
              //   extends: [require.resolve('eslint-config-react-app')],
              // },
              ignore: false,
              useEslintrc: true,
              // @remove-on-eject-end
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      // "file" loader makes sure those assets get served by WebpackDevServer.
      // When you `import` an asset, you get its (virtual) filename.
      // In production, they would get copied to the `build` folder.
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
        ],
        loader: require.resolve('file-loader'),
        options: {
          ...fileOptions,
        },
      },
      // "url" loader works like "file" loader except that it embeds assets
      // smaller than specified limit in bytes as data URLs to avoid requests.
      // A missing `test` is equivalent to a match.
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          ...fileOptions,
        },
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-3',
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ],
          plugins: ['lodash'],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
};

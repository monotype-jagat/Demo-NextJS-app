const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// module.exports = withCSS({
module.exports = withCSS(withSass({
  cssLoaderOptions: {
    url: false
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });

    config.plugins.push(
      new CopyWebpackPlugin([
        //  regular expression for svg|png not working properly so created two diff obj : '([a-zA-Z0-9]*\.(png|svg))' for png nd svg
        {
          from: '*.svg', context: path.join(__dirname, 'node_modules/myfonts-header-footer/dist/'),
          to: path.join(__dirname, '.next/static/css/')
        },
        {
          from: '*.png', context: path.join(__dirname, 'node_modules/myfonts-header-footer/dist/'),
          to: path.join(__dirname, '.next/static/css/')
        }
      ])
    );

    return config
  }

  // });
}));
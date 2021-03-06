const webpack = require('webpack')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const optimizedImages = require('next-optimized-images');

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/oldbaynewfoundlands' : ''

const nextConfig =  {
      exportPathMap: () => ({
      '/': { page: '/' },
    }),
    assetPrefix: assetPrefix,
    webpack: config => {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
        }),
      )
      return config
    },
  }

  module.exports = withCSS(withSass(optimizedImages(withFonts(nextConfig))));

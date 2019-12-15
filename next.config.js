const webpack = require('webpack')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/oldbaynewfoundlands' : ''

// module.exports = {
//   exportPathMap: () => ({
//     '/': { page: '/' },
//   }),
//   assetPrefix: assetPrefix,
//   webpack: config => {
//     config.plugins.push(
//       new webpack.DefinePlugin({
//         'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
//       }),
//     )

//     return config
//   },
// }

/* const optimizeImagesConfig = {
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif', 'ico'],
  optimizeImages: true,
  optimizeImagesInDev: false,
  mozjpeg: {
      quality: 80,
  },
  optipng: {
      optimizationLevel: 3,
  },
  pngquant: false,
  gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
  },
  webp: {
      preset: 'default',
      quality: 75,
  },
} */

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

  // module.exports = withPlugins([optimizedImages, nextConfig],[withSass], 
  //    [withCSS], [withFonts], 
  //   (nextConfig))

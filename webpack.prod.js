/* eslint-disable import/no-extraneous-dependencies */
const webpack = require("webpack");
const merge = require("webpack-merge");
const MinifyPlugin = require("babel-minify-webpack-plugin");
/* eslint-enable import/no-extraneous-dependencies */
const common = require("./webpack.common.js");

module.exports = merge.smart(common, {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // Specifying webp here will create a WEBP version of your JPG/PNG images
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MinifyPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        BABEL_ENV: JSON.stringify("production")
      }
    })
  ]
});

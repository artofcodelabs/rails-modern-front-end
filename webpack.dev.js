/* eslint-disable import/no-extraneous-dependencies */
const merge = require("webpack-merge");
/* eslint-enable import/no-extraneous-dependencies */
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map"
});

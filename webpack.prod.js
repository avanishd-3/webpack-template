// Minimize bundle size and improve performance for production

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map", // Generate source maps for production (helps with debugging)
});

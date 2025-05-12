// Just adds development mode and starts server automatically

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: "./dist", // Serve files from the dist directory
    hot: true, // Enable hot module replacement
    open: true, // Open the browser after server is started
    port: 3000, // Port to run the server on
  },
});

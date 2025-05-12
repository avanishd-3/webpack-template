// Base Webpack configuration that dev and prod share

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Dist will only contain the latest build
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Template",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Use css in Webpack
        use: ["style-loader", "css-loader"], // Order matters here
      },
      {
        test: /\.html$/i,
        loader: "html-loader", // Load image files with local file paths
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // Load image files
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource", // Load font files
      },
      {
        test: /\.ts$/i,
        use: "ts-loader", // Load TypeScript files
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Resolve these file types
  },
};

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname + "/src",
  entry: "./index.ts",
  devtool: "source-map",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
      { test: /\.html$/, exclude: /node_modules/, loader: "html-loader" }
    ]
  },
  resolve: {
    modules: [__dirname + "/src", __dirname + "/node_modules"],
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" })
  ]
}

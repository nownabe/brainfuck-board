module.exports = {
  context: __dirname + "/src",
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /(\.js|\.jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    modules: [__dirname + "/src", __dirname + "/node_modules"],
    extensions: [".js", ".jsx"]
  }
}

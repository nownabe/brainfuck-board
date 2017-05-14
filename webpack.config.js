module.exports = {
  context: __dirname + "/src",
  entry: "./index.ts",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" }
    ]
  },
  resolve: {
    modules: [__dirname + "/src", __dirname + "/node_modules"],
    extensions: [".ts", ".tsx", ".js"]
  }
}

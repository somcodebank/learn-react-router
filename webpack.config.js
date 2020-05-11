const path = require("path");

module.exports = {
  entry: ["./app/App.js"],
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      { test: /\.(css)/, loader: ["style-loader", "css-loader"] },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    // historyApiFallback: { index: "index.html" },
    historyApiFallback: { rewrites: [{ from: /./, to: "index.html" }] },
    port: 3000,
    hot: true,
  },
};

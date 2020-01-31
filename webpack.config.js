const path = require("path");

module.exports = {
  entry: "./react.hostronavt.ru/market_list/src/jsx/app.js",
  output: {
    path: path.join(__dirname, "/react.hostronavt.ru/market_list/static/js"),
    filename: "app_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  }
};
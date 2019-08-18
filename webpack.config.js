const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', //3)
          'css-loader', //2)
          'sass-loader', //1)
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: "./src/app/template.html"
    })
  ]
};

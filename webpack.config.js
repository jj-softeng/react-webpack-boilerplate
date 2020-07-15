const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "./build"),
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./build"),
    index: "index.html",
    port: 3000,
  },
  module: {
    rules: [
      {
        exclude: "/node_modules/",
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|giff|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff2|woff|ttf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
    new htmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};

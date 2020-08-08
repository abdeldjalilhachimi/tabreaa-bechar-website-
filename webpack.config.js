const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//const DIST_DIR = path.resolve(__dirname, "dist");
//const SRC_DIR = path.resolve(__dirname, "src");

module.exports = (env) => {
  const isPoduction = env === "production";
  return {
    entry: "./src/app/index.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "[name].[hash].js",
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      contentBase: ".",
      host: "localhost",
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          query: {
            presets: ["react", "es2015", "stage-2", "source-map-loader"],
          },
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },

        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader", "source-map-loader"],
        },
      ],
    },

    devtool: isPoduction ? "source-map" : "cheap-module-eval-source-map",
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/[name].[hash].css",
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/app/index.html"),
        filename: "index.html",
        inject: true,
      }),
    ],
  };
};

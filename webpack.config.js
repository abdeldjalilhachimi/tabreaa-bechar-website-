const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = (env) => {
  const isPoduction = env === "production";
  return {
    entry: SRC_DIR + "/app/index.js",
    output: {
      path: DIST_DIR,
      filename: "bundler.js",
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          include: SRC_DIR,
          loader: "babel-loader",
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
    devServer: {
      historyApiFallback: true, // for avoiding the routining problem whenyou reload one of the link for example
    },
    devtool: isPoduction ? "source-map" : "cheap-module-eval-source-map",
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};

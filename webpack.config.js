const path = require("path");
const isMinPack = process.env.NODE_ENV.includes("min");
const config = {
  target: "web", //支持web，node，async-node...
  mode: isMinPack ? "production" : "development",
  entry: path.resolve(__dirname, "./lib/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `index.umd${isMinPack ? ".min" : ""}.js`,
    library: "myCancelToken", //打包导出的变量名称
    globalObject: "this", // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
    libraryTarget:'umd', // 定义打包方式Universal Module Definition,根据环境判断打包方式同时支持在CommonJS、AMD，Script和全局变量使用
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "lib"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ], //es6转es5
  },
  plugins: [
  ],
};

module.exports = config;

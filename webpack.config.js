const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const BASE_JS = "./src/client/js/";


module.exports = {
  // main.js를 컴파일, main.js는 base.pug에 로드 되어있음
    entry: {
      main: BASE_JS + "main.js",
      videoPlayer: BASE_JS + "videoPlayer.js",
      commentSection: BASE_JS + "commentSection.js",
    },
    mode: "development",
    watch: true,
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/styles.css",
      }),
    ],
    output: {
      // entry에 있는 2개의 파일의 이름에 각각 맞는 이름에 해당하는 파일 생성
      filename: "js/[name].js",
      path: path.resolve(__dirname, "assets"),
      clean: true,
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [["@babel/preset-env", { targets: "defaults" }]],
              },
            },
          },
          {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
        ],
    },
};
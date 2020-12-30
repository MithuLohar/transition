const path = require("path");
module.exports = {
  entry: "./src/combine.js",
  output: {
    filename: "combine.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000,
  },
};

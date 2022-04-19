const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  //...
  resolve: {
    mainFields: ["esm2017", "browser", "module"],
  },
};

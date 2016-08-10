var entryData = require('./webpackEntryPoints.json');
var path = require('path')

entryData["test/vendor"] = "./scripts/e2e/vendor";
entryData["test/polyfills"] = "./scripts/e2e/polyfills";

module.exports = {
  devtool: "source-map",

  entry: entryData,

  output: {
    "path": path.join(__dirname, '../../'),
    "filename": "[name].js"
  },

  resolve: {
    extensions: ["", ".js", ".json"],
    mainFields: ["main", "browser"]
  },

  module: {
    loaders: [
      {
        test   : /\.css$/,
        loader : 'file-loader?config=cssLoader'
      }
    ]
  },

  cssLoader: {
    name: 'test/css/[name]-[hash].[ext]'
  },
};
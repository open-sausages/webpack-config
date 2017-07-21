const webpack = require('webpack');

module.exports = (ENV) => () => (
    ENV === 'devserver' ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ] : []
);
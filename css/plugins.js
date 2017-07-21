const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Exports the settings for plugins in webpack.config
 */
module.exports = (ENV) => ([
  new ExtractTextPlugin({
    filename: 'styles/[name].css',
    allChunks: true,
    disable: ENV === 'devserver',
  }),
]);

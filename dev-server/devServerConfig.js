module.exports = (ENV, port) => () => (
  ENV === 'devserver' ? {
      host: 'localhost',
      port,
      historyApiFallback: true,
      hot: true,
      publicPath: '/client/dist/'
  } : {}
);
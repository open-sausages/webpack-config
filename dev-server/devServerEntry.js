module.exports = (ENV, port) => (...bundles) => (
  ENV === 'devserver' ? [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    ...bundles
  ] : bundles
);

const devServerEntry = require('./devServerEntry');
const devServerPlugins = require('./devServerPlugins');
const devServerConfig = require('./devServerConfig');

module.exports = (ENV, port) => ({
    entry: devServerEntry(ENV, port),
    plugins: devServerPlugins(ENV),
    config: devServerConfig(ENV, port),
});
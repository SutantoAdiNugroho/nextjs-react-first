require('dotenv').config();

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push( new webpack.EnvironmentPlugin(['BLOGGER_URL', 'API_KEY']));
    return config;
  }
};
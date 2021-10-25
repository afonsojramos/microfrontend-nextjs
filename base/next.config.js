const { withModuleFederation } = require('@module-federation/nextjs-mf');
const path = require('path');

// For SSR, resolve to disk path (or you can use code streaming if you have access)
// in production use the chunks
const ssrRemoteEntry = (app) =>
  process.env.NODE_ENV === 'production'
    ? path.join(
        `<remotes-path>/${app}/.next/server/chunks/static/runtime/remoteEntry.js`
      )
    : path.resolve(
        __dirname,
        `../${app}/.next/server/static/runtime/remoteEntry.js`
      );

module.exports = {
  webpack5: true,
  images: {
    domains: ['static.wikia.nocookie.net'],
  },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      name: 'base',
      library: {
        type: config.output.libraryTarget,
        name: 'base',
      },
      remotes: {
        app1: isServer ? ssrRemoteEntry('app1') : 'app1',
        app2: isServer ? ssrRemoteEntry('app2') : 'app2',
      },
      exposes: {},
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};

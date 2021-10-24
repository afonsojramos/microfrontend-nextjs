const { withModuleFederation } = require('@module-federation/nextjs-mf');
module.exports = {
  webpack5: true,
  images: {
    domains: ['static.wikia.nocookie.net'],
  },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true,
      name: 'app2',
      library: {
        type: config.output.libraryTarget,
        name: 'app2',
      },
      filename: 'static/runtime/app2RemoteEntry.js',
      remotes: {},
      exposes: {
        './zagreus': './components/zagreus',
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);
    if (!isServer) {
      config.output.publicPath = 'https://test.vercel.app/_next/';
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};

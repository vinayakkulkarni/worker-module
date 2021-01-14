const { resolve } = require('path');

function workerModule(_moduleOptions) {
  const { nuxt } = this;

  // Combine options
  const moduleOptions = {
    ...nuxt.options.worker,
    ..._moduleOptions,
    ...(nuxt.options.runtimeConfig && nuxt.options.runtimeConfig.worker),
  };

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'worker.js',
    options: moduleOptions,
  });
}

module.exports = workerModule;
module.exports.meta = require('../package.json');

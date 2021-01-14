const { resolve } = require('path');

module.exports = {
  ssr: false,
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [{ handler: require('../') }],
  worker: {
    worker: './assets/js/long-sleep-worker.js',
  },
};

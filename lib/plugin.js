import Worker from 'web-worker';

export default (ctx, inject) => {
  // configuration
  const runtimeConfig = (ctx.$config && ctx.$config.worker) || {};

  // create a new Web Worker
  const w = new Worker(runtimeConfig.worker, { type: 'module' });

  /**
   * Payload sent to Web Worker
   * @param {Object} message
   */
  function send(message) {
    return w.postMessage({ message });
  }
  /**
   * Transformed data received from Web worker
   * @param {Function} cb
   */
  function receive(cb) {
    w.onmessage = (event) => {
      cb(event);
    };
  }

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const worker = { send, receive };

  // Inject axios to the context as $axios
  ctx.$worker = worker;
  inject('worker', worker);
};

# worker-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Web Workers in your dope Nuxt apps

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `worker-module` dependency to your project

```bash
yarn add worker-module # or npm install worker-module
```

2. Add `worker-module` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'worker-module',

    // With options
    ['worker-module', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Vinayak Kulkarni <inbox.vinayak@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/worker-module/latest.svg
[npm-version-href]: https://npmjs.com/package/worker-module

[npm-downloads-src]: https://img.shields.io/npm/dt/worker-module.svg
[npm-downloads-href]: https://npmjs.com/package/worker-module

[github-actions-ci-src]: https://github.com/vinayakkulkarni/worker-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/vinayakkulkarni/worker-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/vinayakkulkarni/worker-module.svg
[codecov-href]: https://codecov.io/gh/vinayakkulkarni/worker-module

[license-src]: https://img.shields.io/npm/l/worker-module.svg
[license-href]: https://npmjs.com/package/worker-module

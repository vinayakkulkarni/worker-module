# @vinayakkulkarni/worker-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Web Workers in your dope Nuxt apps

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@vinayakkulkarni/worker-module` dependency to your project

```bash
npm install @vinayakkulkarni/worker-module
```

2. Add `@vinayakkulkarni/worker-module` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@vinayakkulkarni/worker-module',

    // With options
    ['@vinayakkulkarni/worker-module', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Vinayak Kulkarni <inbox.vinayak@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@vinayakkulkarni/worker-module/latest.svg
[npm-version-href]: https://npmjs.com/package/@vinayakkulkarni/worker-module

[npm-downloads-src]: https://img.shields.io/npm/dt/@vinayakkulkarni/worker-module.svg
[npm-downloads-href]: https://npmjs.com/package/@vinayakkulkarni/worker-module

[github-actions-ci-src]: https://github.com/vinayakkulkarni/@vinayakkulkarni/worker-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/vinayakkulkarni/@vinayakkulkarni/worker-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/vinayakkulkarni/@vinayakkulkarni/worker-module.svg
[codecov-href]: https://codecov.io/gh/vinayakkulkarni/@vinayakkulkarni/worker-module

[license-src]: https://img.shields.io/npm/l/@vinayakkulkarni/worker-module.svg
[license-href]: https://npmjs.com/package/@vinayakkulkarni/worker-module

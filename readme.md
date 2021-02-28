# electron-is-dev

> Check if [Electron](https://electronjs.org) is running in development

Useful for enabling debug features only during development.

This package must be used from the Electron main process.

## Install

```
$ npm install electron-is-dev
```

*Requires Electron 3 or later.*

## Usage

```js
const isDev = require('electron-is-dev');

if (isDev) {
	console.log('Running in development');
} else {
	console.log('Running in production');
}
```

You can force development mode by setting the `ELECTRON_IS_DEV` environment variable to `1`.

## Related

- [electron-util](https://github.com/sindresorhus/electron-util) - Useful utilities for developing Electron apps
- [electron-debug](https://github.com/sindresorhus/electron-debug) - Adds useful debug features to your Electron app

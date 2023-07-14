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

## FAQ

### How is this different than [`app.isPackaged`](https://www.electronjs.org/docs/api/app#appispackaged-readonly)?

This package existed long before that property. The benefit of this package is that you can override the value using an environment variable.

### How do I use this in the renderer process?

You can use [`contextBridge`](https://www.electronjs.org/docs/latest/api/context-bridge) in the [preload script](https://www.electronjs.org/docs/latest/tutorial/tutorial-preload) to manually expose the variable:

```js
const {contextBridge} = require('electron');
const isDev = require('electron-is-dev');

contextBridge.exposeInMainWorld('isDev', isDev);
```

You can then access it in the `window` global from the renderer process:

```js
console.log(window.isDev);
```

## Related

- [electron-util](https://github.com/sindresorhus/electron-util) - Useful utilities for developing Electron apps
- [electron-debug](https://github.com/sindresorhus/electron-debug) - Adds useful debug features to your Electron app

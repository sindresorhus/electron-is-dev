# electron-is-dev

> Check if [Electron](http://electron.atom.io) is running in development

Useful for enabling debug features only during development.


## Install

```
$ npm install --save electron-is-dev
```


## Usage

```js
const isDev = require('electron-is-dev');

if (isDev) {
	console.log('Running in development');
} else {
	console.log('Running in production');
}
```

Can be overridden by setting the `ELECTRON_IS_DEV` environment variable to `1`.


## Related

- [electron-debug](https://github.com/sindresorhus/electron-debug) - Adds useful debug features to your Electron app


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

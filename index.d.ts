/**
Check if Electron is running in development.

This package must be used from the Electron main process.

You can force development mode by setting the `ELECTRON_IS_DEV` environment variable to `1`.

@example
```
import isDev from 'electron-is-dev';

if (isDev) {
	console.log('Running in development');
} else {
	console.log('Running in production');
}
```
*/
declare const isDev: boolean;

export default isDev;

'use strict';

const getFromEnv = () => {
	return ('ELECTRON_IS_DEV' in process.env &&
			parseInt(process.env.ELECTRON_IS_DEV, 10) === 1);
};

module.exports = getFromEnv() || process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath);

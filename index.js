'use strict';

const getFromEnv = () => {
	if ('ELECTRON_IS_DEV' in process.env) {
		return parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;
	}

	return false;
};

module.exports = getFromEnv() || process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath);

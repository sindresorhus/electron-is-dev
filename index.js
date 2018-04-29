'use strict';
const proc = typeof window !== 'undefined' && typeof window.process !== 'undefined' ? window.process : process;
const getFromEnv = parseInt(proc.env.ELECTRON_IS_DEV, 10) === 1;
const isEnvSet = 'ELECTRON_IS_DEV' in proc.env;

module.exports = isEnvSet ? getFromEnv : (proc.defaultApp || /node_modules[\\/]electron[\\/]/.test(proc.execPath));

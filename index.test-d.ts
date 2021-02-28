import {expectType} from 'tsd';
import isDev = require('./index.js');

expectType<boolean>(isDev);

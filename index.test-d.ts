import {expectType} from 'tsd';
import isDev = require('.');

expectType<boolean>(isDev);

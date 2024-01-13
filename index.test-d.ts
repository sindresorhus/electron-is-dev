import {expectType} from 'tsd';
import isDev from './index.js';

expectType<boolean>(isDev);

'use strict';

import { combineReducers } from 'redux';
import reducer1 from './reducer_1.js';
import reducer2 from './reducer_2.js';

const rootReducer = combineReducers({
  reducer1,
  reducer2
});

export default rootReducer;

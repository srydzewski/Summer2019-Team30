/**
 * @file Combines all reducers into the root.
 */

import { combineReducers } from 'redux';

import { contributorsReducer as contributors } from 'reducers/contributors.js';
import { userReducer as user } from 'reducers/user.js';

// Note: combineReducers will call each reducer 3 times at the start to probe
// for errors. See https://github.com/reduxjs/redux/issues/729.
export default combineReducers({ contributors, user });

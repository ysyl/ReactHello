import { combineReducers } from 'redux';

import WeiboReducers from './WeiboReducers.js';

export default combineReducers({
  home:WeiboReducers
});

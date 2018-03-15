import { combineReducers } from 'redux';

import WeiboReducers from './WeiboReducers.js';
import CommentReducers from './CommentReducers.js';

export default combineReducers({
    weibo: WeiboReducers,
    comment: CommentReducers,
});

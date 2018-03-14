import avatarJpg from '../img/avatar/avatar.jpg';
import exampleJpg from '../img/paella.jpg';

import axios from 'axios';

const FINDUSERBYID = 'FINDUSERBYID';
const FINALLDWEIBOBYUSERID = 'findAllWeiboByUserId';
const FINDALLWEIBO = 'findAllWeibo';
const LOAD_ALLWEIBO = 'LOAD_ALLWEIBO';
const LOAD_ALLWEIBO_SUCCESS = 'LOAD_ALLWEIBO_SUCCESS';
const LOAD_ALLWEIBO_ERROR = 'LOAD_ALLWEIBO_ERROR';

const URL_FINDALLWEIBO = "http://localhost:8080/web/weibo/all";

const findUserById = id => {
  return {
    type: FINDUSERBYID,
    payload: id
  }
}

const findAllWeiboAction = uid => {
  if(!uid) {
    return {
      type: FINDALLWEIBO,
    }
  } else {
    return {
      type: FINALLDWEIBOBYUSERID,
      payload: uid,
    }
  }
}

const mockTime = new Date();
mockTime.setFullYear(2009);

const mockLikeCount = 224;

const initialComment = {
  id:1,
  content:'测试评论',
  arthor: {
    id:2,
    username: 'admin',
    avatar: avatarJpg,
  },
  createAt: mockTime,
  reply: 0,
}

const initialReplyComment = {
  id:2,
  arthor:{
    id:3,
    username: 'od',
    avatar: avatarJpg,
  },
  content:'测试回复',
  createAt: mockTime,
  reply:1 //user id
}

const initialState = {
    arthor:{
      id:1,
      username: 'zhou',
      avatar:avatarJpg,
    },
    content: '测试微薄21',
    createAt: mockTime,
    like:mockLikeCount,
    comments: [initialComment, initialReplyComment],
    image:exampleJpg,
  };

/*
weibo数据
 {
    arthor:{
      id:int,
      username: String,
      avatar:String,
    },
    content: String,
    createAt: Date,
    like:int,
    comments: List<Comment>,
    image:String,
  }

Comment
{
  id:int,
  arthor:{
    id:int,
    username: String,
    avatar: String,
  },
  content:String,
  createAt: Date,
  reply:int //user id
}

*/

let repeatInitialState = (new Array(10).fill(initialState)).map( (item, index) => ({
  ...initialState,
  id: index+1,
}));


const mockData = {
    arthor:{
      id:1,
      username: 'zhou',
      avatar:avatarJpg,
    },
    content: '测试微薄Actisdfon1',
    createAt: mockTime,
    like:mockLikeCount,
    comments: [initialComment, initialReplyComment],
    image:exampleJpg,
  };
let repeatMockData = (new Array(10).fill(mockData)).map( (item, index) => ({
  ...mockData,
  id: index+1,
}));

const initialAsyncState = {
  loading: true,
  error: false,
  weiboList:[],
}

export function load_allweibo() {
  return (dispatch, getState) => {

    axios.get(URL_FINDALLWEIBO)
      .then( result => {
        dispatch({
          type: LOAD_ALLWEIBO_SUCCESS,
          payload: result.data,
        })
      })
      .catch( error => {
        dispatch({
          type: LOAD_ALLWEIBO_ERROR,
          payload: error
        })
      });

      dispatch({
        type: LOAD_ALLWEIBO
      })
  }
}


export default function weibo(state = initialAsyncState, action) {
  switch (action.type) {
    case LOAD_ALLWEIBO:
      return {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case LOAD_ALLWEIBO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        weiboList: action.payload
      }
      break;
    case LOAD_ALLWEIBO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      }
      break;
    default:
      return state;
  }
}

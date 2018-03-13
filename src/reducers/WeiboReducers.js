import avatarJpg from '../img/avatar/avatar.jpg';
import exampleJpg from '../img/paella.jpg';

import axios from 'axios';

const FINDUSERBYID = 'FINDUSERBYID';
const FINALLDWEIBOBYUSERID = 'findAllWeiboByUserId';
const FINDALLWEIBO = 'findAllWeibo';

const findUserById = id => {
  return {
    type: FINDUSERBYID,
    payload: id
  }
}

export const findAllWeiboAction = uid => {
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

export default function weibo(state = repeatInitialState, action) {
  switch (action.type) {
    case FINDALLWEIBO:
      return repeatMockData;
      break;
    default:
      return repeatMockData;
  }
}

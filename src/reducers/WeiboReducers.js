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


const initialComment = {
  content:'测试评论',
  arthor: 'od',
  createAt: mockTime,
  reply: -1,
}

const initialReplyComment = {
  content:'测试回复',
  arthor: 'zhou',
  createAt: mockTime,
  reply:1 //user id
}

export const initialState = [
  {
    arthor:'admin',
    content: '测试微薄1',
    createAt: mockTime,
    like:224,
    comments: [initialComment, initialReplyComment]
  }
];

const mockData = [
  {
    arthor:'mock',
    content:'mockContent',
    createAt: mockTime,
    comments:[initialComment]
  }
]

export default function weibo(state = initialState, action) {
  switch (action) {
    case FINDALLWEIBO:
      console.log("test")
      return {
        mockData
      }
      break;
    case FINALLDWEIBOBYUSERID:
      return null
      break;
    default:
      return state;
  }
}

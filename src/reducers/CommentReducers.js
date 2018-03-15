import axios from "axios";

const LOAD_COMMENTS_BY_WEIBO_ID = "LOAD_COMMENTS_BY_WEIBO_ID";
const LOAD_COMMENTS_BY_WEIBO_ID_SUCCESS = "LOAD_COMMENTS_BY_WEIBO_ID_SUCCESS";
const LOAD_COMMENTS_BY_WEIBO_ID_ERROR = "LOAD_COMMENTS_BY_WEIBO_ID_ERROR";

const URL_FINDALLCOMMENTSBYWEIBOID = "http://localhost:8080/comment/reply";

const initialAsyncState = {
  load: false,
  error: false,
  commentsMap:{},
}

export function load_commentsByWeiboId(wid) {
  return (dispatch, getState) => {

    axios.get(
      URL_FINDALLCOMMENTSBYWEIBOID,
      {
        params: {
          reply: wid
        }
      }
    ).then( result => {
      dispatch({
        type: LOAD_COMMENTS_BY_WEIBO_ID_SUCCESS,
        payload: {
          commentsList:result.data,
          keyId: wid,
        }
      })
    })
    .catch( error => {
      dispatch({
        type: LOAD_COMMENTS_BY_WEIBO_ID_ERROR,
      })
    });

    dispatch({
      type: LOAD_COMMENTS_BY_WEIBO_ID,
    })
  }
}

export default function commentsList(state = initialAsyncState, action) {
  switch (action.type) {
    case LOAD_COMMENTS_BY_WEIBO_ID:
      return {
        ...state,
        load:true,
        error: false,
      }
      break;
    case LOAD_COMMENTS_BY_WEIBO_ID_SUCCESS:
      return {
        ...state,
        load:false,
        error: false,
        commentsMap: Object.assign(state.commentsMap, {
          [action.payload.keyId]: action.payload.commentsList,
        })
      }
      break;
    case LOAD_COMMENTS_BY_WEIBO_ID_ERROR:
      return {
        ...state,
        load: false,
        error: true,
      }
      break;
    default:
      return state;

  }
}

import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import axios from 'axios'
// import {
//   GET_USER_TICKET_REQUEST,
//   GET_USER_TICKET_SUCCESS,
//   GET_USER_TICKET_FAILURE
// } from "constants/actionTypes";
const GET_POST_COMMENT_REQUEST = "GET_POST_COMMENT_REQUEST";
const GET_POST_COMMENT_SUCCESS = "GET_POST_COMMENT_SUCCESS";
const GET_POST_COMMENT_FAILURE = "GET_POST_COMMENT_FAILURE";

function getCommentApi(params) {
  let token = localStorage.getItem('access_token');
  return axios.get(`http://localhost:8001/api/board/post/${params.id}/comments/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}

function* getComment(action) {
  try {
    // api 통신할때는 call
    // const result = yield call(getPostListApi, action.params);
    // 아래와 같이 api 결과를 핸들링하여 dispatch 가능
    // yield put({ type: GET_POST_SUCCESS, data: result.data });

    // TODO
    let api, type;
    switch(action.type) {
      case GET_POST_COMMENT_REQUEST:
        api = getCommentApi;
        type = GET_POST_COMMENT_SUCCESS;
    }
    const result = yield call(api, action.params);
    yield put({ type: type, data: result.data });
  } catch (err) {
    yield put({ type: GET_POST_COMMENT_FAILURE, data: err.response.data });
  }
}

function* watchGetComment() {
  yield takeLatest([
    GET_POST_COMMENT_REQUEST], getComment);
}

export default function* commentSaga() {
  yield all([fork(watchGetComment)]);
}

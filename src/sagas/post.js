import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import axios from 'axios'
// import {
//   GET_USER_TICKET_REQUEST,
//   GET_USER_TICKET_SUCCESS,
//   GET_USER_TICKET_FAILURE
// } from "constants/actionTypes";
const GET_POST_REQUEST = "GET_POST_REQUEST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_FAILURE = "GET_POST_FAILURE";

function getPostApi(params) {
  let token = localStorage.getItem('access_token');
  return axios.get("http://localhost:8001/api/board/post/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params : params
  })
}

function* getPost(action) {
  try {
    // api 통신할때는 call
    const result = yield call(getPostApi, action.params);

    // 아래와 같이 api 결과를 핸들링하여 dispatch 가능
    yield put({ type: GET_POST_SUCCESS, data: result.data });
  } catch (err) {
    yield put({ type: GET_POST_FAILURE, data: err.response.data });
  }
}

function* watchGetPost() {
  yield takeLatest(GET_POST_REQUEST, getPost);
}

export default function* postSaga() {
  yield all([fork(watchGetPost)]);
}
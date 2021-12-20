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
const GET_POST_ONE_REQUEST = "GET_POST_ONE_REQUEST";
const GET_POST_ONE_SUCCESS = "GET_POST_ONE_SUCCESS";


function getPostListApi(params) {
  let token = localStorage.getItem('access_token');
  return axios.get("http://localhost:8001/api/board/post/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params : params
  })
}

function getPostOneApi(params) {
  let token = localStorage.getItem('access_token');
  return axios.get(`http://localhost:8001/api/board/post/${params.id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}

function* getPost(action) {
  try {
    // api 통신할때는 call
    // const result = yield call(getPostListApi, action.params);
    // 아래와 같이 api 결과를 핸들링하여 dispatch 가능
    // yield put({ type: GET_POST_SUCCESS, data: result.data });

    // TODO
    let api, type;
    switch(action.type) {
      case GET_POST_REQUEST:
        api = getPostListApi;
        type = GET_POST_SUCCESS 
        break;
      case GET_POST_ONE_REQUEST:
        api = getPostOneApi;
        type = GET_POST_ONE_SUCCESS ;
        break;
    }
    const result = yield call(api, action.params);
    yield put({ type: type, data: result.data });
  } catch (err) {
    yield put({ type: GET_POST_FAILURE, data: err.response.data });
  }
}

function* watchGetPost() {
  yield takeLatest([
    GET_POST_REQUEST, 
    GET_POST_ONE_REQUEST], getPost);
}

export default function* postSaga() {
  yield all([fork(watchGetPost)]);
}

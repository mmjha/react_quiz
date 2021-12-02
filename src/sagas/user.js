import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import axios from 'axios'
// import {
//   GET_USER_TICKET_REQUEST,
//   GET_USER_TICKET_SUCCESS,
//   GET_USER_TICKET_FAILURE
// } from "constants/actionTypes";
const GET_USER_REQUEST = "GET_USER_REQUEST";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const GET_USER_FAILURE = "GET_USER_FAILURE";

function getUserApi(params) {
  let token = localStorage.getItem('token');
  return axios.get("http://localhost:8001/api/user/", {
    headers: {
      Authorization: `JWT ${token}`
    }
  })
}

function* getUser(action) {
  try {
    // api 통신할때는 call
    const result = yield call(getUserApi, action.params);

    // 아래와 같이 api 결과를 핸들링하여 dispatch 가능
    yield put({ type: GET_USER_SUCCESS, data: result.data });
  } catch (err) {
    yield put({ type: GET_USER_FAILURE, data: err.response.data });
  }
}

function* watchGetUser() {
  yield takeLatest(GET_USER_REQUEST, getUser);
}

export default function* userSaga() {
  yield all([fork(watchGetUser)]);
}
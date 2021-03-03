import { put, takeLatest, all, call } from "redux-saga/effects";
import {
  SET_DATA,
  GET_ASYNC_DATA,
  SET_DATA_REQUESTED,
  SET_DATA_FAILED,
  POST_ASYNC_DATA,
  POST_DATA,
} from "../constants/postConstant";
import * as service from "../../services/postService";

const runOurAction = function* () {
  try {
    yield put({ type: SET_DATA_REQUESTED, SET_DATA_REQUESTED });
    const remoteData = yield call(service.getTasks);
    yield put({ type: SET_DATA, payload: remoteData });
  } catch (e) {
    yield put({ type: SET_DATA_FAILED, payload: "error" });
  }
};

const postData = function* (data) {
  try {
    const remoteData = yield call(service.addTask, data);
    yield put({ type: POST_DATA, payload: remoteData });
  } catch (e) {
    yield put({ type: SET_DATA_FAILED, payload: "error" });
  }
};
function* getAsyncDataWatcher() {
  yield takeLatest(GET_ASYNC_DATA, runOurAction);
}

function* postAsyncDataWatcher() {
  yield takeLatest(POST_ASYNC_DATA, postData);
}

export default function* asyncDataSaga() {
  yield all([getAsyncDataWatcher(), postAsyncDataWatcher()]);
}

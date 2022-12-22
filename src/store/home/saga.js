import { call, put, retry, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import {
  ALL_CATEGORYS,
  LOG_IN_REQUEST
} from "./actionTypes"
import {
  CategorysFail,
  CategorysSuccess,
  loginRequestSuccess,
  loginRequestFail
} from "./actions"

import {
  getCategorys,
  loginApi
} from "../../helpers/backend_helper"

function* loginFunction({payload: { data, callback }}) {
  try {
    const response = yield call(loginApi, data)
    if (response.status === "failure") {
      if (response.message === "Not authorized") {
        localStorage.removeItem("token")
        localStorage.removeItem("authData")
      }
      return yield put(loginRequestFail(response.message))
    }
    if(response && response.data && response.data.token){
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("authData",JSON.stringify(response.data))
    }
    yield put(loginRequestSuccess(response))
    callback()
    // history.push("/")
  } catch (error) {
    yield put(loginRequestFail(error))
  }
}

function* getAllCategorys({ }) {
  try {
    const response = yield call(getCategorys)

    if (response.status === "failure") {
      if (response.message === "Not authorized") {
        localStorage.removeItem("token")
        localStorage.removeItem("authData")
      }
      return yield put(CategorysFail(response.message))
    }
    yield put(CategorysSuccess(response))
    // history.push("/")
  } catch (error) {
    yield put(CategorysFail(error))
  }
}

function* authSaga() {
  yield takeEvery(ALL_CATEGORYS, getAllCategorys)
  yield takeEvery(LOG_IN_REQUEST, loginFunction)
} 

export default authSaga

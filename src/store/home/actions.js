import {
  ALL_CATEGORYS,
  CATEGORYS_SUCCESS,
  CATEGORYS_FAIL,
  LOG_IN_REQUEST,
  LOG_IN_REQUEST_SUCCESS,
  LOG_IN_REQUEST_FAIL
} from "./actionTypes"

export const loginRequest = (data, callback) => {
  return {
    type: LOG_IN_REQUEST,
    payload: { data, callback },
  }
}

export const loginRequestSuccess = (user) => {
  return {
    type: LOG_IN_REQUEST_SUCCESS,
    payload: user,
  }
}

export const loginRequestFail = (error) => ({
  type: LOG_IN_REQUEST_FAIL,
  payload: error,
})

export const allCategorys = () => {
  return {
    type: ALL_CATEGORYS,
    payload: {  },
  }
}

export const CategorysSuccess = (user) => {
  return {
    type: CATEGORYS_SUCCESS,
    payload: user,
  }
}

export const CategorysFail = (error) => ({
  type: CATEGORYS_FAIL,
  payload: error,
})

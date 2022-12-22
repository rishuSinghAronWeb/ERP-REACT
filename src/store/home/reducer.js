import {
  ALL_CATEGORYS,
  CATEGORYS_SUCCESS,
  CATEGORYS_FAIL,
  LOG_IN_REQUEST,
  LOG_IN_REQUEST_SUCCESS,
  LOG_IN_REQUEST_FAIL
} from "./actionTypes"

const { data, ...authData } = JSON.parse(
  localStorage.getItem("authData") || "{}",
)

const initialState = {
  meLoading: false,
  error: "",
  user: data || {},
  authToken: data ? data.Token || null : null,
  categorys: [],
  categorysCount: 0
}

const Home = (state = initialState, action) => {
  console.log("action.payload ==> ",action.payload)

  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      }
    case LOG_IN_REQUEST_SUCCESS:
      return {
        ...state,
        error: "",
        authToken: action.payload.data.token,
        user: action.payload.data,
        loading: false,
      }
    case LOG_IN_REQUEST_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case ALL_CATEGORYS:
      return {
        ...state,
        error: "",
        loading: true,
      }
    case CATEGORYS_SUCCESS:
      return {
        ...state,
        error: "",
        categorys: action.payload.data,
        categorysCount: action.payload.totalcount,
        loading: false,
      }
    case CATEGORYS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return { ...state }
  }
}

export default Home

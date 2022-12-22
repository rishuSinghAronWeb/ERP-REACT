import { post, get, put } from "./api_helper"
import * as url from "./url_helper"
import authHeader from "./jwt-token-access/auth-token-header"

const config = {
    headers: { 'content-type': 'multipart/form-data' }
}
// get all categorys
export const getCategorys = () => get(url.GET_ALL_CATEGORY)
export const loginApi = (data) => post(url.LOGIN_API, data)
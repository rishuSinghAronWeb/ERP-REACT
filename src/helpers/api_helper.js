import axios from "axios";
import authHeader from "./jwt-token-access/auth-token-header";

//apply base url for axios
export const API_URL = "http://localhost:4000"
const API_VERSION = '/api/v1'
export const SOCKET_URL = process.env.REACT_APP_API_SOCKET_URL

const axiosApi = axios.create({
  baseURL: API_URL,
  baseURL: API_URL + API_VERSION,
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export const updateToken = (token) => {
  axiosApi.defaults.headers.common["token"] = token;
};


const obj = JSON.parse(localStorage.getItem("authData"));
updateToken(obj && obj.token ? obj.token : null);

const LogoutUser = () => {
  localStorage.clear();
  window.location.replace("/");
};

export async function get(url, config) {
  if (!config) {
    config = authHeader();
  }

  const obj = JSON.parse(localStorage.getItem("authData"));
  updateToken(obj && obj.token ? obj.token : null);

  return await axiosApi.get(url, { ...config }).then((response) => {
    if (response.data.status === "failure") {
      if (response.data.isInvalidToken) {
        return LogoutUser()
      } else if (response.data.message === "Invalid Login Credential!") {
        LogoutUser();
        return { status: "failure" };
      }
    }

    return response.data;
  });
}

export async function post(url, data, config) {
  if (!config) {
    config = authHeader();
  }

  const obj = JSON.parse(localStorage.getItem("authData"));
  updateToken(obj && obj.token ? obj.token : null);
  return axiosApi.post(url, data, { ...config }).then((response) => {
    if (response.data.status === "failure") {
      if (response.data.isInvalidToken) {
        return LogoutUser()
      } else if (response.data.message === "Invalid Login Credential!") {
        LogoutUser();
        return { status: "failure" };
      }
    }

    return response.data;
  });
}

export async function put(url, data, config) {
  if (!config) {
    config = authHeader();
  }

  const obj = JSON.parse(localStorage.getItem("authData"));
  updateToken(obj && obj.token ? obj.token : null);
  return axiosApi.put(url, { ...data }, { ...config }).then((response) => {
    if (response.data.status === "failure") {
      if (response.data.isInvalidToken) {
        return LogoutUser()
      } else if (response.data.message === "Invalid Login Credential!") {
        LogoutUser();
        return { status: "failure" };
      }
    }

    return response.data;
  });
}

export async function del(url, config) {
  if (!config) {
    config = authHeader();
  }

  const obj = JSON.parse(localStorage.getItem("authData"));
  updateToken(obj && obj.token ? obj.token : null);
  return await axiosApi.delete(url, { ...config }).then((response) => {
    if (response.data.status === "failure") {
      if (response.data.isInvalidToken) {
        return LogoutUser()
      } else if (response.data.message === "Invalid Login Credential!") {
        LogoutUser();
        return { status: "failure" };
      }
    }

    return response.data;
  });
}

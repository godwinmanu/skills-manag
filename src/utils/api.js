import axios from "axios";

const API = axios.create({
  baseURL: "https://c7de-196-192-31-126.eu.ngrok.io/api",
  headers: {
    Accept: "application/json",
    // "Content-Type": "multipart/form-data"
  }
});

const user = localStorage.getItem('user');
const userDataParsed = user ? JSON.parse(user) : null;


API.interceptors.request.use(
  (request) => {
    // console.log(request)
    /* if (userDataParsed) {
      request.headers.Authorization = `${userDataParsed.token_type} ${userDataParsed.access_token}`;
    } */
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code === "ERR_NETWORK") {
      localStorage.removeItem("user")
      window.location.href = "/login"
    }
    //return Promise.reject(error);
  }
); */

export const getRequest = (url) => {
  return API.get(url)
}

export const postRequest = (url, payload) => {
  return API.post(url, payload)
}

export const putRequest = (url, payload) => {
  return API.put(url, payload)
}

export const deleteRequest = (url) => {
  return API.delete(url)
}

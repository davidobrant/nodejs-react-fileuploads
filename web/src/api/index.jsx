import axios from "axios";

export const BASE_URL = "http://localhost:4000/api";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.status === 401) {
      console.log("error... 401");
    } else {
      console.log(err.message);
    }
    return Promise.reject(err);
  }
);

export default api;

import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:4000/api",
  baseURL: "https://evangadi-forum-backend-1-rvth.onrender.com/api",
});

export default axiosBase;

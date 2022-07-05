import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: { authentication: "bearer auth" },
});

export default instance;

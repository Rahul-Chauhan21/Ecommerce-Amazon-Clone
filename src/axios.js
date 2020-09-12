import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/ecommerce--clone-2d5d7/us-central1/api", // API URL (cloud function) URL
});

export default instance;

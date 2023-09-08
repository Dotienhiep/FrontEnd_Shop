import axios from "axios";

export const getListProductHomeAPI = async () => {
  return axios.get("https://backend-nodejs-61ox.onrender.com/home");
};

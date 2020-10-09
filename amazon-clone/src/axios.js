import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-clone-live.herokuapp.com",
});
export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://toktikmern.herokuapp.com/",
});

export default instance;
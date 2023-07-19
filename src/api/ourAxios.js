import axios from "axios";

const host = (window.location.hostname === "localhost"
  ? process.env.REACT_APP_SERVER_URL
  : "/proxy"
);


const ourAxios = axios.create({
  baseURL: host,
})

export default ourAxios;
import axios from "axios";

const host = (process.env.REACT_APP_DEPLOY === "deploy"
  ? "proxy"
  :process.env.REACT_APP_SERVER_URL 
);

console.log(host);


const ourAxios = axios.create({
  baseURL: host,
})

export default ourAxios;
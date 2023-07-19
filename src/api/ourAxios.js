import axios from "axios";

const deploy = true;

const host = (deploy === true
  ? "proxy"
  :process.env.REACT_APP_SERVER_URL 
);

console.log(host);


const ourAxios = axios.create({
  baseURL: host,
})

export default ourAxios;
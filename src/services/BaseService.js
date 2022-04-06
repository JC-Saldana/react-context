import axios from "axios";

const http = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  withCredentials: false
})

http.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

export default http
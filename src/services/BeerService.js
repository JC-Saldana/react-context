import http from "./BaseService";

export const getPokemon = (name) => http.get(`/${name}`)
export const getBeer = (id) => http.get(`/${id}`)
export const getRandomBeer = () => http.get(`/random`)
export const newBeer = (params) => http.post(`/new`, params)
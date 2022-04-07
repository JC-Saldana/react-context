import http from "./BaseService";

export const getPokemon = (name) => http.get(`/pokemon/${name}`)
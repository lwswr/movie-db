import axios from "axios";
import { MovieResponse, DetailedMovie } from "./App";

export const getMovies = (search: string, page: number, type: string) => {
  return axios
    .get<MovieResponse>(
      `https://www.omdbapi.com/?apikey=13d6c617&s=${search}&page=${page}&type=${type}`
    )
    .then((response) => {
      return response.data;
    });
};

export const getSelected = (id: string | undefined) => {
  return axios
    .get<DetailedMovie>(`https://www.omdbapi.com/?apikey=13d6c617&i=${id}`)
    .then((response) => {
      return response.data;
    });
};

import axios from "axios";
import { MovieResponse, DetailedMovie } from "./App";

export const getMovies = (search: string, page: number) => {
  return axios
    .get<MovieResponse>(
      `http://www.omdbapi.com/?apikey=13d6c617&s=${search}&page=${page}&type=movie`
    )
    .then((response) => {
      return response.data;
    });
};

export const getSelected = (id: string | undefined) => {
  return axios
    .get<DetailedMovie>(`http://www.omdbapi.com/?apikey=13d6c617&i=${id}`)
    .then((response) => {
      return response.data;
    });
};

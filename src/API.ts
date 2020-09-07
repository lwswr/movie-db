import axios from "axios";

export type MovieResponse = {
  Search: Movie[];
  Response: string;
  totalResults: string;
};

export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  imdbRating: string;
};
export type DetailedMovie = {
  Title: string;
  Plot: string;
  Year: string;
  Released: string;
  Runtime: string;
  Awards: string;
  imdbID: string;
  imdbRating: string;
  Poster: string;
};

export const getMovies = (search: string, page: number, type: string) => {
  return axios
    .get<MovieResponse>(
      `https://www.omdbapi.com/?apikey=13d6c617&s=${search}&page=${page}&type=${type}`
    )
    .then((response) => {
      return response.data;
    });
};

export const getDetailedMovie = (id: string | undefined) => {
  return axios
    .get<DetailedMovie>(`https://www.omdbapi.com/?apikey=13d6c617&i=${id}`)
    .then((response) => {
      return response.data;
    });
};

import React from "react";
import { Movie } from "./App";
import { MovieListCard } from "./MovieListCard";
import styled from "styled-components";

const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieList = ({ movies }: { movies: Movie[] }) => {
  return (
    <MoviesList>
      {movies.map((item) => {
        return <MovieListCard key={item.imdbID} movie={item} />;
      })}
    </MoviesList>
  );
};

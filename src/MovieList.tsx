import React from "react";
import { Movie } from "./App";
import { MovieListCard } from "./MovieListCard";
import styled from "styled-components";

const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgb(34, 41, 46);
`;

export const MovieList = ({
  movies,
  sendSelectedID,
}: {
  movies: Movie[];
  sendSelectedID: (id: string) => void;
}) => {
  return (
    <MoviesList>
      {movies.map((item) => {
        return (
          <MovieListCard
            key={item.imdbID}
            movie={item}
            onClick={(id: string) => sendSelectedID(id)}
          />
        );
      })}
    </MoviesList>
  );
};

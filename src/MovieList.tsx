import React from "react";
import { MovieListCard } from "./MovieListCard";
import styled from "styled-components";
import { DetailedMovie } from "./API";

const MoviesList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(34, 41, 46);
`;

export const MovieList = ({
  movies,
  clicked,
}: {
  movies: DetailedMovie[];
  clicked: (id: string) => void;
}) => {
  return (
    <MoviesList>
      {movies.map((item) => {
        return (
          <MovieListCard
            key={item.imdbID}
            movie={item}
            onClick={(id) => clicked(id)}
          />
        );
      })}
    </MoviesList>
  );
};

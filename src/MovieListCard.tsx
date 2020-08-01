import React from "react";
import { Movie } from "./App";
import styled from "styled-components";

const MovieListTile = styled.li`
  list-style: none;
  flex: 0 0 18%;
  height: 325px;
  width: 225px;
  margin: 20px 20px;
  padding: 20px 20px;
  background: white;
  border-radius: 8px;
`;

const Poster = styled.img`
  opacity: 1;
  height: 300px;
  width: 200px;
  transition: 0.5s ease;
  backface-visibility: hidden;
  :hover {
    opacity: 0.7;
  }
`;

const MovieTitle = styled.div`
  font-size: 12px;
`;

export const MovieListCard = ({
  movie,
  onClick,
}: {
  movie: Movie;
  onClick: (id: string) => void;
}) => {
  return (
    <MovieListTile onClick={() => onClick(movie.imdbID)}>
      <Poster src={movie.Poster} alt="#" />
      <MovieTitle>{movie.Title}</MovieTitle>
    </MovieListTile>
  );
};

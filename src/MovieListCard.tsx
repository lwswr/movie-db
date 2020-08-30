import React from "react";
import { Movie } from "./App";
import styled from "styled-components";

const MovieListTile = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  flex: 0 0 18%;
  margin: 10px 10px;
  padding: 10px 10px;
  width: 500px;
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
    opacity: 0.5;
  }
`;

const MovieTileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.div`
  font-size: 22px;
  padding: 10px;
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
      <MovieTileInfo>
        <MovieTitle>{movie.Title}</MovieTitle>
      </MovieTileInfo>
    </MovieListTile>
  );
};

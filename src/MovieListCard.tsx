import React from "react";
import styled from "styled-components";
import { DetailedMovie } from "./API";

const MovieListTile = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  flex: 0 0 18%;
  margin: 10px 10px;
  padding: 10px 10px;
  width: auto;
  background: white;
  border-radius: 8px;
`;

const Poster = styled.img`
  opacity: 1;
  height: 60px;
  width: 40px;
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
  movie: DetailedMovie;
  onClick: (id: string) => void;
}) => {
  return (
    <MovieListTile onClick={() => onClick(movie.imdbID)}>
      <Poster src={movie.Poster} alt="#" />
      <MovieTileInfo>
        <MovieTitle>
          {movie.Title} ({movie.Year})
        </MovieTitle>
      </MovieTileInfo>
    </MovieListTile>
  );
};

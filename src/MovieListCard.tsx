import React from "react";
import { Movie } from "./App";
import styled from "styled-components";

const MovieListTile = styled.li`
  list-style: none;
  flex: 0 0 18%;
  margin: 20px 20px;
  padding: 20px 20px;
  background: white;
  border-radius: 8px;
`;

const Poster = styled.img`
  height: 300px;
  width: 200px;
`;

const MovieTitle = styled.div`
  font-size: 12px;
`;

export const MovieListCard = ({ movie }: { movie: Movie }) => {
  return (
    <MovieListTile>
      <Poster src={movie.Poster} alt="#" />
      <MovieTitle>{movie.Title}</MovieTitle>
    </MovieListTile>
  );
};

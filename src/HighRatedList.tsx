import * as React from "react";
import styled from "styled-components";
import { DetailedMovie } from "./API";

const Container = styled.div`
  background: white;
  padding: 10px;
  margin: 10px 10px;
  border-radius: 8px;
`;

const Item = styled.div`
  font-size: 20px;
  padding: 20px 0px;
`;

export const HighRatedList = ({
  highRatedMovies,
}: {
  highRatedMovies: DetailedMovie[] | undefined;
}) => {
  if (!highRatedMovies) return null;
  return (
    <Container>
      {highRatedMovies.map((movie) => {
        return (
          <Item>
            {movie.Title} {movie.imdbRating}
          </Item>
        );
      })}
    </Container>
  );
};

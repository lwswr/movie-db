import * as React from "react";
import styled from "styled-components";
import { Movie } from "./App";

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
  highRatedMovies: Movie[] | undefined;
}) => {
  if (!highRatedMovies) return null;
  return (
    <Container>
      {highRatedMovies.map((movie: Movie) => {
        return <Item>{movie.Title}</Item>;
      })}
    </Container>
  );
};

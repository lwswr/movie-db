import * as React from "react";
import styled from "styled-components";
import { DetailedMovie } from "./API";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  margin: 20px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  color: black;
`;

const Title = styled.div`
  font-size: 20px;
`;

const List = styled.div`
  padding: 10px;
  margin: 10px 10px;
`;

const Item = styled.div`
  font-size: 12px;
  padding: 5px 0px;
`;

export const HighRatedList = ({
  highRatedMovies,
  search,
  mediaType,
}: {
  highRatedMovies: DetailedMovie[] | undefined;
  search: string;
  mediaType: string;
}) => {
  if (!highRatedMovies) return null;
  return (
    <Container>
      <Title>
        Top Rated {search} {mediaType}
      </Title>
      <List>
        {highRatedMovies.map((movie) => {
          return (
            <Item>
              <strong>{movie.imdbRating}</strong> {movie.Title}
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

import * as React from "react";

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
    <div>
      {highRatedMovies.map((movie) => {
        return (
          <li>
            {movie.Title} {movie.imdbRating}
          </li>
        );


      })}
    </Container>
  );
};

import * as React from "react";

import { Movie } from "./App";

export const HighRatedList = ({
  highRatedMovies,
}: {
  highRatedMovies: Movie[] | undefined;
}) => {
  if (!highRatedMovies) return null;
  return (
    <div>
      {highRatedMovies.map((movie: Movie) => {
        return (
          <li>
            {movie.Title} {movie.imdbRating}
          </li>
        );
      })}
    </div>
  );
};

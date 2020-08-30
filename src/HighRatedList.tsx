import * as React from "react";
import { DetailedMovie } from "./API";

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
    </div>
  );
};

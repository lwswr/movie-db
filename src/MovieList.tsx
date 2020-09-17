import React from "react";
import { MovieListCard } from "./MovieListCard";
import styled from "styled-components";
import { DetailedMovie } from "./API";
import { useSpring, animated as a } from "react-spring";

const MoviesList = styled(a.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 10px;
  margin: 20px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  width: auto;
  background: white;
`;

export const MovieList = ({
  movies,
  clicked,
}: {
  movies: DetailedMovie[];
  clicked: (id: string) => void;
}) => {
  const fade = useSpring({
    duration: 3000,
    from: { opacity: 0 },
    opacity: 1,
  });

  return (
    <MoviesList style={fade}>
      {movies.map((item) => {
        return (
          <MovieListCard
            key={item.imdbID}
            movie={item}
            onClick={(id) => clicked(id)}
          />
        );
      })}
    </MoviesList>
  );
};

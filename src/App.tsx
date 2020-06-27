import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { SearchForm } from "./SearchForm";
import { MovieList } from "./MovieList";

const MainContainer = styled.html`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Verdana";
  background: rgb(66, 76, 84);
  height: 100%;
  width: auto;
`;

const Title = styled.div`
  color: white;
  text-align: center;
  font-size: 50px;
  padding: 20px;
`;

const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export type MovieResponse = {
  Search: Movie[];
  Response: string;
  totalResults: string;
};

export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

function App() {
  const [search, setSearch] = useState("the lord of the rings");
  const [result, setResult] = useState<MovieResponse | undefined>(undefined);
  const [page, changePage] = useState<number>(1);

  useEffect(() => {
    const getMovies = (movieTitle: string) => {
      axios
        .get<MovieResponse>(
          `http://www.omdbapi.com/?apikey=13d6c617&s=${movieTitle}&page=${page}&type=movie`
        )
        .then((res) => setResult(res.data))
        .catch((err) => console.log("error", err));
    };
    if (search !== null) {
      getMovies(search);
    }
  }, [search, page]);

  if (!result) return null;
  return (
    <MainContainer>
      <Title>Movie Database</Title>
      <SearchForm
        submit={({ movieTitle }) => {
          setSearch(movieTitle);
          changePage(1);
        }}
      />
      <div>
        {result.totalResults} results for "{search}"
      </div>
      <MovieList movies={result.Search} />
      <NavButtons>
        <button
          onClick={() => {
            if (page !== 1) changePage(page - 1);
          }}
        >
          Prev
        </button>
        <button onClick={() => changePage(page + 1)}>Next</button>
        page {page}
      </NavButtons>
    </MainContainer>
  );
}

export default App;

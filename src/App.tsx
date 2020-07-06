import React, { useReducer } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { SearchForm } from "./SearchForm";
import { MovieList } from "./MovieList";
import { PopUp } from "./PopUp";
import { getMovies, getSelected } from "./API";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Verdana";
  background: rgb(66, 76, 84);
  height: 100%;
  width: auto;
  padding: none;
`;

const Title = styled.div`
  color: white;
  text-align: center;
  font-size: 50px;
  padding: 20px;
`;

const ResultsFound = styled.div`
  color: white;
  text-align: center;
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

export type DetailedMovie = {
  Title: string;
  Plot: string;
  Released: string;
  Runtime: string;
  imdbID: string;
  imdbRating: string;
  Poster: string;
};

export type AppState = {
  search: string;
  result: MovieResponse | undefined;
  page: number;
  selectedMovie: DetailedMovie | undefined;
};

const initialState: AppState = {
  search: "Lord of the Rings",
  result: undefined,
  page: 1,
  selectedMovie: undefined,
};

export type AppEvents =
  | {
      type: "search set";
      payload: { search: string };
    }
  | {
      type: "movie response set";
      movieResPayload: MovieResponse;
    }
  | {
      type: "page number changed";
      pagePayload: { page: number };
    }
  | {
      type: "select movie response set";
      selMovieResPayload: DetailedMovie;
    };

export const reducer: React.Reducer<AppState, AppEvents> = (state, event) => {
  switch (event?.type) {
    case "search set": {
      return {
        ...state,
        search: event.payload.search,
      };
    }
    case "movie response set": {
      return { ...state, result: event.movieResPayload };
    }
    case "page number changed": {
      return {
        ...state,
        page: event.pagePayload.page,
      };
    }
    case "select movie response set": {
      return {
        ...state,
        selectedMovie: event.selMovieResPayload,
      };
    }
  }
};

function App() {
  const [state, update] = useReducer(reducer, initialState);
  const [selectedID, updateSelectedID] = React.useState("");
  const [popUpState, updatePopUpState] = React.useState(false);

  useEffect(() => {
    async function callToAPIs() {
      try {
        const [movieResponse, selMovieResponse] = await Promise.all([
          getMovies(state.search, state.page),
          getSelected(selectedID),
        ]);
        update({ type: "movie response set", movieResPayload: movieResponse });
        update({
          type: "select movie response set",
          selMovieResPayload: selMovieResponse,
        });
        console.log(selMovieResponse);
      } catch (error) {
        console.log(error);
      }
    }
    if (state.search !== null) {
      callToAPIs();
    }
  }, [state.search, state.page, selectedID]);

  if (!state.result) return null;

  return (
    <MainContainer>
      <Title>Movie Database</Title>
      {popUpState ? (
        <div>
          <PopUp
            selected={state.selectedMovie}
            backClick={(popUp) => updatePopUpState(popUp)}
          />
        </div>
      ) : (
        <div>
          <SearchForm
            submit={({ search }) => {
              update({ type: "search set", payload: { search } });
              update({ type: "page number changed", pagePayload: { page: 1 } });
            }}
          />
          <ResultsFound>
            {state.result.totalResults} results for "{state.search}"
          </ResultsFound>
          <MovieList
            movies={state.result.Search}
            sendSelectedID={(id) => {
              updateSelectedID(id);
              updatePopUpState(true);
            }}
          />
          <NavButtons>
            <button
              onClick={() => {
                if (state.page! <= 0) {
                  update({
                    type: "page number changed",
                    pagePayload: { page: state.page - 1 },
                  });
                }
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                update({
                  type: "page number changed",
                  pagePayload: { page: state.page + 1 },
                });
              }}
            >
              Next
            </button>
            page {state.page}
          </NavButtons>
        </div>
      )}
    </MainContainer>
  );
}

export default App;

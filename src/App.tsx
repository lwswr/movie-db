import React, { useReducer } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { SearchForm } from "./SearchForm";
import { MovieList } from "./MovieList";
import { PopUp } from "./PopUp";
import { getMovies, getSelected } from "./API";
import "./index.css";
import { HighRatedList } from "./HighRatedList";
// import { PageButtons } from "./PageButtons";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(34, 41, 46);
  height: 100%;
  width: 100%;
  margin: 0px;
`;

const Title = styled.div`
  color: white;
  text-align: center;
  font-size: 50px;
  padding: 20px;
`;

const ResultsFound = styled.div`
  color: white;
  text-align: left;
  padding-left: 100px;
`;

const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NavButton = styled.button`
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  padding: 10px 20px;
  margin: 5px 10px;
  border: 2px solid white;
  border-radius: 10px;
  background: none;
  color: white;
  transition: 0.2s;
  :hover {
    background: white;
    color: rgb(66, 76, 84);
  }
`;

const PageNumber = styled.div`
  color: white;
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
  imdbRating: string;
};

export type DetailedMovie = {
  Title: string;
  Plot: string;
  Released: string;
  Runtime: string;
  Awards: string;
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

const initialDetailedState: DetailedMovie = {
  Title: "",
  Plot: "",
  Released: "",
  Runtime: "",
  Awards: "",
  imdbID: "",
  imdbRating: "",
  Poster: "",
};

const initialState: AppState = {
  search: "Star Wars",
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
      selMovieResPayload: DetailedMovie | undefined;
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
  const [mediaType, setMediaType] = React.useState("movie");

  useEffect(() => {
    async function callToAPIs() {
      try {
        const [movieResponse] = await Promise.all([
          getMovies(state.search, state.page, mediaType),
          getSelected(selectedID),
        ]);
        update({ type: "movie response set", movieResPayload: movieResponse });
      } catch (error) {
        console.log(error);
      }
    }
    if (state.search !== null) {
      callToAPIs();
    }
  }, [state.search, state.page, mediaType]);

  useEffect(() => {
    async function fetchData() {
      const selMovieResponse = await getSelected(selectedID);

      update({
        type: "select movie response set",
        selMovieResPayload: selMovieResponse,
      });
    }
    fetchData();
  }, [update, selectedID]);

  const sortedMovies = React.useMemo(() => {
    return state.result
      ? state.result.Search.slice(0).sort((a, b) => {
          return parseInt(a.imdbRating) - parseInt(b.imdbRating);
        })
      : [];
  }, [state.result?.Search]);

  return !state.result ? null : (
    <MainContainer>
      <Title>Movie Database</Title>
      {popUpState ? (
        <PopUp
          selected={state.selectedMovie}
          backClick={(click) => {
            updatePopUpState(click);
            update({
              type: "select movie response set",
              selMovieResPayload: initialDetailedState,
            });
            updateSelectedID("");
          }}
        />
      ) : (
        <div>
          <SearchForm
            submit={({ search, mediaType }) => {
              update({ type: "search set", payload: { search } });
              update({ type: "page number changed", pagePayload: { page: 1 } });
              setMediaType(mediaType);
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

          <HighRatedList highRatedMovies={sortedMovies} />
          <NavButtons>
            {state.page === 1 ? null : (
              <NavButton
                onClick={() => {
                  update({
                    type: "page number changed",
                    pagePayload: { page: state.page - 1 },
                  });
                }}
              >
                Prev
              </NavButton>
            )}

            <NavButton
              onClick={() => {
                update({
                  type: "page number changed",
                  pagePayload: { page: state.page + 1 },
                });
              }}
            >
              Next
            </NavButton>
            <PageNumber> page {state.page}</PageNumber>
          </NavButtons>
        </div>
      )}
    </MainContainer>
  );
}

export default App;

import React, { useReducer } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { SearchForm } from "./SearchForm";
import { MovieList } from "./MovieList";
import { PopUp } from "./PopUp";
import { getMovies, getDetailedMovie, MovieResponse } from "./API";
import { HighRatedList } from "./HighRatedList";
import { initialState, reducer } from "./state";

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

function App() {
  const [state, update] = useReducer(reducer, initialState());

  useEffect(() => {
    async function fetchMovies() {
      try {
        // destructure and alias so Search can be referred to as movies
        const { Search: movies } = await getMovies(
          state.search,
          state.page,
          state.mediaType
        );
        const detailedMovies = await Promise.all(
          movies.map((movie) => getDetailedMovie(movie.imdbID))
        );
        update({ type: "movies fetched", movies: detailedMovies });
      } catch (error) {
        console.log(error);
      }
    }
    if (state.search !== null) {
      fetchMovies();
    }
  }, [state.search, state.page, state.mediaType]);

  const sortedMovies = React.useMemo(() => {
    return state.movies
      ? state.movies.slice(0).sort((a, b) => {
          return parseInt(a.imdbRating) - parseInt(b.imdbRating);
        })
      : [];
  }, [state.movies]);

  return !state.movies ? null : (
    <MainContainer>
      <Title>Movie Database</Title>
      {state.popupState && state.selectedMovie && state.movies.length ? (
        <PopUp
          selected={state.movies.find(
            (movie) => movie.imdbID === state.selectedMovie
          )}
          backClick={() =>
            void update({
              type: "popup back button clicked",
            })
          }
        />
      ) : (
        <div>
          <SearchForm
            submit={({ search, mediaType }) =>
              void update({
                type: "search submitted",
                payload: {
                  // @ts-expect-error we will update to return MediaType instead of string later
                  mediaType,
                  search,
                },
              })
            }
          />
          <ResultsFound>
            {state.movies.length} results for "{state.search}"
          </ResultsFound>

          <MovieList
            movies={state.movies}
            clicked={(id) =>
              void update({
                type: "movies list item clicked",
                clickedMovieId: id,
              })
            }
          />

          <HighRatedList highRatedMovies={sortedMovies} />
          <NavButtons>
            {state.page === 1 ? null : (
              <NavButton
                onClick={() =>
                  void update({
                    type: "page button minus clicked",
                  })
                }
              >
                Prev
              </NavButton>
            )}
            <NavButton
              onClick={() =>
                void update({
                  type: "page button plus clicked",
                })
              }
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

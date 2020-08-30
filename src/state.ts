import React from "react";
import { DetailedMovie } from "./API";
import produce from "immer";

export type MediaType = "movie" | "series";

export type State = {
  search: string;
  movies: DetailedMovie[];
  page: number;
  selectedMovie: string | undefined;
  popupState: boolean;
  mediaType: MediaType;
};

export const initialState = (): State => ({
  search: "Star Wars",
  movies: [],
  page: 1,
  selectedMovie: undefined,
  popupState: false,
  mediaType: "movie",
});

export type Events =
  | {
      type: "movies fetched";
      movies: DetailedMovie[];
    }
  | {
      type: "popup visibility changed";
      visibility: boolean;
    }
  | {
      type: "page button minus clicked";
    }
  | {
      type: "page button plus clicked";
    }
  | {
      type: "popup back button clicked";
    }
  | {
      type: "movies list item clicked";
      clickedMovieId: string;
    }
  | {
      type: "search submitted";
      payload: {
        mediaType: MediaType;
        search: string;
      };
    };

export const reducer: React.Reducer<State, Events> = (state, event) =>
  produce(state, (draft) => {
    switch (event?.type) {
      case "movies fetched": {
        draft.movies = event.movies;
        break;
      }
      case "page button plus clicked": {
        draft.page += 1;
        break;
      }
      case "page button minus clicked": {
        draft.page -= 1;
        break;
      }
      case "popup back button clicked": {
        draft.selectedMovie = undefined;
        draft.popupState = false;
        break;
      }
      case "movies list item clicked": {
        draft.selectedMovie = event.clickedMovieId;
        draft.popupState = true;
        break;
      }
      case "search submitted": {
        draft.page = 1;
        draft.mediaType = event.payload.mediaType;
        draft.search = event.payload.search;
        break;
      }
    }
  });

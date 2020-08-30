import * as React from "react";
import styled from "styled-components";
import { DetailedMovie } from "./App";
import "./index.css";

const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  font-family: "Montserrat", sans-serif;
  background: rgb(34, 41, 46);
  height: 100vh;
  width: 70%;
`;

const PopUpWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  color: rgb(66, 76, 84);
  padding: 20px;
  border-radius: 25px;
`;

const PopUpBackButton = styled.button`
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

const PopUpTitle = styled.div`
  text-align: center;
  padding: 10px;
  color: rgb(66, 76, 84);
  font-size: 35px;
`;

const PopUpYear = styled.div`
  padding: 10px;
  color: rgb(66, 76, 84);
  font-size: 15px;
`;

const PopUpPlot = styled.div`
  padding: 10px;
  color: rgb(66, 76, 84);
  font-size: 15px;
`;

const PopUpPoster = styled.img`
  padding: 10px;
  height: 450px;
  width: 300;
`;

const PopUpAwards = styled.div`
  padding: 10px;
  color: rgb(66, 76, 84);
  font-size: 12px;
  font-style: italic;
`;

const PopUpIMDBRating = styled.div`
  padding: 10px;
  color: rgb(66, 76, 84);
  font-size: 16px;
`;

export const PopUp = ({
  selected,
  backClick,
}: {
  selected: DetailedMovie | undefined;
  backClick: (popUpState: boolean) => void;
}) => {
  if (!selected) return null;
  return (
    <PopUpContainer>
      <PopUpWindow>
        <PopUpTitle>{selected.Title}</PopUpTitle>
        <PopUpYear>{selected.Released}</PopUpYear>
        <PopUpIMDBRating>IMDB - {selected.imdbRating}/10</PopUpIMDBRating>
        <PopUpPlot>
          {selected.Plot}
          <PopUpAwards>{selected.Awards}</PopUpAwards>
        </PopUpPlot>
        <PopUpPoster src={selected.Poster} alt=""></PopUpPoster>
      </PopUpWindow>
      <PopUpBackButton onClick={() => backClick(false)}>Back</PopUpBackButton>
    </PopUpContainer>
  );
};

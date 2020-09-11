import * as React from "react";
import styled from "styled-components";
import { DetailedMovie } from "./API";
import "./index.css";

const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  width: 70%;
  padding: 20px;
`;

const PopUpWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  color: rgb(66, 76, 84);
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const PopUpBackButton = styled.button`
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  padding: 10px 20px;
  margin: 20px 0px;
  border: 2px solid black;
  border-radius: 10px;
  background: none;
  color: black;
  transition: 0.2s;
  :hover {
    background: black;
    color: white;
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
  height: 300px;
  width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  backClick: () => void;
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
      <PopUpBackButton onClick={() => backClick()}>Back</PopUpBackButton>
    </PopUpContainer>
  );
};

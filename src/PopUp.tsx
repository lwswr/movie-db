import * as React from "react";
import styled from "styled-components";
import { Movie } from "./App";

const PopUpContainer = styled.div`
  padding: 20px;
  border-radius: 15px;
`;

const PopUpTitle = styled.div`
  font-size: 25px;
`;

const PopUpYear = styled.div`
  font-size: 15px;
`;

const PopUpPlot = styled.div`
  font-size: 15px;
`;

export const PopUp = ({ selected }: { selected: Movie }) => {
  return (
    <PopUpContainer>
      <PopUpTitle>{selected.Title}</PopUpTitle>
      <PopUpYear onClick={() => console.log(selected.Year)}>
        ({selected.Year})
      </PopUpYear>
      <PopUpPlot></PopUpPlot>
    </PopUpContainer>
  );
};

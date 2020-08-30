import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "./index.css";
import { MediaType, mediaTypes } from "./state";

const SearchFormCon = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputField = styled.input`
  width: 300px;
  font-size: 25px;
  padding: 10px 20px;
  margin: 5px 10px;
  background: none;
  border-bottom: 2px solid white;
  border-left: none;
  border-right: none;
  border-top: none;
  color: white;
  font-family: "Montserrat", sans-serif;
  :focus,
  :hover {
    outline-width: 0;
  }
  option {
    background: red;
  }
`;

const SelectField = styled.select`
  width: 150px;
  font-size: 25px;
  padding: 10px 20px;
  margin: 5px 10px;
  background: none;
  border-bottom: 2px solid white;
  border-left: none;
  border-right: none;
  border-top: none;
  color: white;
  font-family: "Montserrat", sans-serif;
  :focus {
    outline-width: 0;
  }
`;

const SubmitButton = styled.button`
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

type SearchProps = {
  search: string;
  mediaType: MediaType;
};

export const SearchForm = ({
  submit,
}: {
  submit: (fullSearch: SearchProps) => void;
}) => {
  const [newSearch, setNewSearch] = useState("");
  const [newMediaType, setNewMediaType] = useState<MediaType>("movie");
  return (
    <SearchFormCon
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        if (newSearch !== "") {
          submit({ search: newSearch, mediaType: newMediaType });
          setNewSearch("");
        }
      }}
    >
      <InputField
        type="text"
        placeholder="search..."
        value={newSearch}
        onChange={(e) => setNewSearch(e.target.value)}
      />
      <SelectField
        onChange={(e) => setNewMediaType(e.target.value as MediaType)}
      >
        {mediaTypes.map((mediaType) => (
          <option key={mediaType} value={mediaType}>
            {mediaType}
          </option>
        ))}
      </SelectField>
      <SubmitButton type="submit">Search</SubmitButton>
    </SearchFormCon>
  );
};

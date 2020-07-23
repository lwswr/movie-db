import React from "react";
import { useState } from "react";
import styled from "styled-components";

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
  :focus {
    outline-width: 0;
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
  :focus {
    outline-width: 0;
  }
`;

const SubmitButton = styled.button`
  font-size: 25px;
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
  mediaType: string;
};

export const SearchForm = ({
  submit,
}: {
  submit: (fullSearch: SearchProps) => void;
}) => {
  const [newSearch, setNewSearch] = useState("");
  const [newMediaType, setNewMediaType] = useState("movie");

  return (
    <SearchFormCon
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        if (newSearch !== null) {
          submit({ search: newSearch, mediaType: newMediaType });
          setNewSearch("");
        }
      }}
    >
      <InputField
        type="text"
        value={newSearch}
        onChange={(e) => setNewSearch(e.target.value)}
      />
      <SelectField onChange={(e) => setNewMediaType(e.target.value)}>
        <option value="film">Film</option>
        <option value="series">Series</option>
      </SelectField>
      <SubmitButton type="submit">Search</SubmitButton>
    </SearchFormCon>
  );
};

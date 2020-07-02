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
  border-radius: 10px;
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
};

export const SearchForm = ({
  submit,
}: {
  submit: (search: SearchProps) => void;
}) => {
  const [newSearch, setNewSearch] = useState("");

  return (
    <SearchFormCon
      action="submit"
      onSubmit={(event) => {
        event.preventDefault();
        if (newSearch !== null) {
          submit({ search: newSearch });
          setNewSearch("");
        }
      }}
    >
      <InputField
        type="text"
        value={newSearch}
        onChange={(event) => setNewSearch(event.target.value)}
      />
      <SubmitButton type="submit">Search</SubmitButton>
    </SearchFormCon>
  );
};

import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import { RecipeImageWithTitle } from '../types/recipes';

export interface SearchBarProps {
  data: RecipeImageWithTitle;
}

function SearchBar(props: SearchBarProps) {
  const { data } = props;
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={data.map((option) => option.title)}
      renderInput={(params) => (
        <TextField {...params} label="검색어를 입력하세요" />
      )}
    />
  );
}

export default SearchBar;

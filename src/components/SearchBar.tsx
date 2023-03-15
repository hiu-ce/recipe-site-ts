import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import { server } from 'typescript';
import { searchData } from '../App';
import { RecipeImageWithTitle } from '../types/recipes';

export interface SearchBarProps {
  data: RecipeImageWithTitle;
  value: string|null;
  setValue: React.Dispatch<React.SetStateAction<string|null>>;
}

function SearchBar(props: SearchBarProps) {
  const { data } = props;
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const handleOnChange = (event : React.SyntheticEvent, value : string | null) => {
    props.setValue(value);
  }
  const handleOnInputChange= (event : React.SyntheticEvent, value : string | undefined) =>{
    setInputValue(value);
  }
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={data.map((option) => option.title)}
      value={props.value}
      inputValue={inputValue}
      onInputChange={handleOnInputChange}
      onChange={handleOnChange}
      renderInput={(params) => (
        <TextField {...params} label="검색어를 입력하세요" />
      )}
    />
  );
}

export default SearchBar;

import React from 'react';
import './App.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import db from './db.json';
import { Box, ImageListItemBar } from '@mui/material';
import Title from './components/Title';
import SearchBar from './components/SearchBar';

export type searchData = {
  title:string | null,
  img:string | null
};

function App() {
  const data = db.recipes.map((item) => ({
    img: item.src,
    title: item.name,
  }));
  const [value, setValue] = React.useState<string|null>(null);
  return (
    <div>
      <Title>My Recipes</Title>
      <SearchBar data={data} value={value} setValue={setValue}/>
      <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
        <ImageList  cols={3} gap={8}>
          {
            value === null ? data.map((item) => (
              <ImageListItem key={item.img} >
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position='below' title={item.title} />
            </ImageListItem>
            )) : data.map((item) => (
              value === item.title ? <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position='below' title={item.title} />
            </ImageListItem> : null
            ))
          }
        </ImageList>
      </Box>
    </div>
  );
}

export default App;

import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

export interface TitleProps extends TypographyProps {
  text?: string;
}

function Title(props: TitleProps) {
  return <Typography variant="h1" {...props} />;
}

export default Title;

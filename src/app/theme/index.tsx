'use client';

import { createTheme } from '@mui/material';
import typography from './typography';
import palette from './palette';

const themeOptions: any = {
  typography,
  palette: palette('default'),
};

const theme = createTheme(themeOptions);

export default theme;

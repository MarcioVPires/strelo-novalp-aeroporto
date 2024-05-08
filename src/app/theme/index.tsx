'use client';

import { createTheme } from '@mui/material';
import typography from './typography';
import palette from './palette';

const themeOptions: any = {
  typography,
  palette: palette('default'),
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#131313',
          borderRadius: '1rem',
          border: '1px solid #222222',
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;

'use client';

import { styled, AppBar, Toolbar, Box, MenuItem } from '@mui/material';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    height: '80px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '60px',
  },
}));

const CustomBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  height: ' 100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    maxWidth: '1188px',
  },
  [theme.breakpoints.down('sm')]: {},
}));

const CustomMenuItem = styled(MenuItem)({
  color: '#B3B9C6',
  padding: '0px',
  marginLeft: '2rem',
});

const CustomSubMenuItem = styled(MenuItem)({
  color: '#B3B9C6',
  '&:hover': {
    backgroundColor: '#222222',
  },
});

export {
  CustomMenuItem as MenuItem,
  CustomBox as Box,
  CustomAppBar as AppBar,
  CustomToolbar as Toolbar,
  CustomSubMenuItem as SubMenuItem,
};

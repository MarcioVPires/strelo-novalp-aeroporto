'use client';

import { styled, Box, Typography, DialogContent, Dialog, Slide, Button } from '@mui/material';
import { heroBG } from '@/assets';
const MainWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 'calc(100vh + 500px)',
  backgroundColor: 'black',
  backgroundImage: `
  linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 60%),
  url(${heroBG.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
});

const ContentWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: '80px',
  maxWidth: '1140px',

  [theme.breakpoints.down('sm')]: {
    paddingTop: '60px',
    maxWidth: '350px',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  marginBottom: '1rem',
  lineHeight: '120%',
  color: '#FFFFFF',
  fontWeight: '600',
  paddingTop: '17rem',
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.down('sm')]: {
    paddingTop: '8.5rem',
    fontSize: '1.75rem',
  },
  '& span': {
    color: '#627FFF',
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  marginBottom: '1rem',
  lineHeight: '120%',
  color: '#B3B9C6',
  fontWeight: '100',
  [theme.breakpoints.up('md')]: {
    maxWidth: '1140px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
  },
}));

const OutlinedButton = styled(Button)({
  color: '#FFFFFF',
  padding: '8px 16px',
  borderColor: '#FFFFFF',
  textTransform: 'none',
});

export { MainWrapper, ContentWrapper, Title, SubTitle, OutlinedButton };

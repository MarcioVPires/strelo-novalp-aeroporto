'use client';

import { styled, Box, Typography } from '@mui/material';
import { heroBG } from '@/assets';

interface CarouselMenuItemsProps {
  active?: boolean;
}

const MainWrapper = styled(Box)({
  display: 'flex',
  padding: '11.8rem 0 1rem 0',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: '#212636',
  backgroundImage: `
  linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 90%),
  url(${heroBG.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
  backgroundPosition: 'center top',
});

const ContentWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: '1140px',

  [theme.breakpoints.down('sm')]: {
    maxWidth: '350px',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: '1rem',
  lineHeight: '140%',
  color: '#FFFFFF',
  fontWeight: '500',
  paddingTop: '2rem',
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
  fontSize: '1.2rem',
  marginTop: '1rem',
  lineHeight: '145%',
  color: '#B3B9C6',
  fontWeight: '400',
  paddingRight: '2rem',
  [theme.breakpoints.up('md')]: {
    maxWidth: '1140px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
  },
}));

const CarouselWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  marginTop: '4rem',
  padding: '4rem 7.5rem 4rem 7.5rem',
  borderRadius: '1.25rem',
  backgroundImage: 'linear-gradient(180deg, #111D54 0%, #2A41A7 100%)',
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
}));

const CarouselMenu = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: '4rem',
  [theme.breakpoints.down('sm')]: {},
}));

const CarouselMenuColumn = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',

    justifyContent: 'center',
    marginTop: '2rem',
  },
}));

const CarouselMenuItems = styled(Box)<CarouselMenuItemsProps>(({ theme, active }) => ({
  fontSize: '1.125rem',
  color: active ? '#FFFFFF' : '#B3B9C6',
  fontWeight: active ? '600' : '400',

  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '1rem',
    fontSize: '1rem',
    marginLeft: 0,
  },
}));

const CarouselContent = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',

    justifyContent: 'center',
    marginTop: '2rem',
  },
}));

const CarouselContentColumn = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  margin: 'auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export {
  ContentWrapper,
  MainWrapper,
  Title,
  SubTitle,
  CarouselWrapper,
  CarouselMenu,
  CarouselMenuColumn,
  CarouselMenuItems,
  CarouselContent,
  CarouselContentColumn,
};

'use client';

import { styled, Box, Typography, Button } from '@mui/material';
import { dashBackground } from '@/assets';
const DashboardWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  backgroundColor: '#020919',
  backgroundImage: `
  linear-gradient(rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 80%),
  url(${dashBackground.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center bottom',
});

const DashboardContentWrapper = styled(Box)(({ theme }) => ({
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

const DashboardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: '1rem',
  lineHeight: '140%',
  color: '#FFFFFF',
  fontWeight: '500',
  paddingTop: '8rem',
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.down('sm')]: {
    paddingTop: '8.5rem',
    fontSize: '1.75rem',
  },
  '& span': {
    color: '#627FFF',
  },
}));

const DashboardSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.375rem',
  marginTop: '0.75rem',
  lineHeight: '145%',
  color: '#B3B9C6',
  fontWeight: '400',
  [theme.breakpoints.up('md')]: {
    maxWidth: '1140px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
  },
}));

const DashBoardList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '1rem',
  marginTop: '4rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
  },
}));

const DashBoardItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem 1.4rem 2rem 1.4rem',
  border: '1px solid #667085',
  borderRadius: '1rem',
  marginLeft: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
    maxWidth: '9.4rem',
    maxHeight: '9.4rem',
    padding: '1.25rem',
  },
}));

const DashBoardText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  marginTop: '1rem',
  lineHeight: '140%',
  color: '#FFFFFF',
  fontWeight: '400',
  maxWidth: '8.5rem',
}));

const OutlinedButton = styled(Button)({
  color: '#FFFFFF',
  padding: '8px 16px',
  borderColor: '#FFFFFF',
  textTransform: 'none',
});

const ImageContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: 'auto',
});

export {
  DashboardWrapper,
  DashboardContentWrapper,
  DashboardTitle,
  DashboardSubTitle,
  DashBoardList,
  DashBoardItem,
  DashBoardText,
  OutlinedButton,
  ImageContainer,
};

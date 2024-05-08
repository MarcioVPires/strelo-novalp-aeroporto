'use client';

import { styled, Box, Typography, Stack } from '@mui/material';

const MainWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  minHeight: '682px',
  overflow: 'hidden',
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
  color: '#212636',
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

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.375rem',
  marginTop: '1rem',
  lineHeight: '145%',
  color: '#667085',
  fontWeight: '400',
  [theme.breakpoints.up('md')]: {
    maxWidth: '1140px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
  },
}));

const ExplainerCard = styled(Box)(({ theme }) => ({
  width: '24rem',
  color: '#667085',
  backgroundColor: '#F9FAFB',
  border: '1px solid #DCDFE4',
  borderRadius: '1.25rem',
  padding: '2rem',
  textAlign: 'left',
  [theme.breakpoints.up('md')]: {
    maxWidth: '1140px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
  },
}));

const ExplainerCardText = styled(Box)(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: '140%',
  fontWeight: '400',
  marginTop: '1rem',
  [theme.breakpoints.up('md')]: {
    maxWidth: '1140px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
  },
}));

const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export {
  MainWrapper,
  ContentWrapper,
  Title,
  SubTitle,
  ExplainerCard,
  ExplainerCardText,
  CustomStack as Stack,
};

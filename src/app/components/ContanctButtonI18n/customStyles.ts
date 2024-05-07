'use client';

import { styled, Box, Typography } from '@mui/material';

type CustomBoxProps = {
  height?: number;
};

export const CustomBox = styled(Box)<CustomBoxProps>(({ height }) => ({
  backgroundImage: 'linear-gradient(180deg, #5B7FFF 0%, #3637F5 100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0.5rem',
  padding: '0.5rem 1rem',
  margin: '0 2rem 0 2.75rem',
  height: height ? `${height}rem` : '2.75rem',
  '&:hover': {
    cursor: 'pointer',
  },
}));

export const CustomTypography = styled(Typography)({
  color: '#FFFFFF',
});

'use client';

import { Chip, styled } from '@mui/material';

const CustomChip = styled(Chip)({
  padding: '0.5rem 0.75rem 0.5rem 0.75rem',
  borderRadius: '0.75rem',
  backgroundColor: '#EAEEFB',
  color: '#627FFF',
  fontSize: '0.9rem',
  fontWeight: '500',
  height: '2.25rem',
});

export { CustomChip as Chip };

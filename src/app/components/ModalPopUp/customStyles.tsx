import { forwardRef } from 'react';
import { styled, Box, DialogContent, Dialog, Slide, Button } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialog = styled(Dialog)({
  backdropFilter: 'blur(5px)',
});

const CustomButton = styled(Button)({
  backgroundImage: 'linear-gradient(180deg, #5B7FFF 0%, #3637F5 100%)',
});

const CustomDialogContent = styled(DialogContent)({
  color: '#FFFFFF',
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
  '& > :not(:last-child)': {
    marginBottom: '1rem',
  },
  '& > :first-child': {
    marginTop: '2rem',
  },
  '& > :nth-last-child(2)': {
    marginBottom: '2rem',
  },
});

const IconBox = styled(Box)({
  position: 'absolute',
  right: '1.563rem',
  top: '2.188rem',
  '&:hover': {
    cursor: 'pointer',
  },
});

export {
  Transition,
  IconBox,
  CustomDialogContent as DialogContent,
  CustomDialog as Dialog,
  CustomButton as Button,
};

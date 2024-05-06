'use client';

import { MenuItem } from '@mui/base';
import { Box, Dialog, Drawer, Menu, Slide, useTheme } from '@mui/material';
import { Typography } from '@mui/material';
import Link from '@mui/material';
import DropDownNavMenu from './NavigationItens';
import menuOptions from './menuSchema';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { mobileClosedIcon } from '@/assets';
import Image from 'next/image';
import NavigationItens from './NavigationItens';

function Navigation() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    console.log('clicou');
    setOpen(newOpen);
  };

  return (
    <Box>
      {isSmallScreen ? (
        <Box>
          <Image
            src={mobileClosedIcon}
            onClick={toggleDrawer(true)}
            alt="Menu expansion for mobile"
            priority
          />
          <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
            <p>Mobile Menu</p>
          </Drawer>
        </Box>
      ) : (
        <Box>
          <NavigationItens />
        </Box>
      )}
    </Box>
  );
}
export default Navigation;

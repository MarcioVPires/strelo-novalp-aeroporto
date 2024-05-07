import React from 'react';
import { Menu, Link, Typography, Box } from '@mui/material';
import { MenuItem, SubMenuItem } from './styles';
import ContactButton from '../ContanctButton';
import menuSchema from './menuSchema';
import { menuExpandIcon } from '@/assets';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function NavigationItems() {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<(HTMLElement | null)[]>(
    Array(menuSchema().length).fill(null)
  );

  const handleClick = (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
    const updatedAnchorEl = [...anchorEl];
    updatedAnchorEl[index] = event.currentTarget;
    setAnchorEl(updatedAnchorEl);
  };

  const handleClose = (index: number) => {
    const updatedAnchorEl = [...anchorEl];
    updatedAnchorEl[index] = null;
    setAnchorEl(updatedAnchorEl);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {menuSchema().map((menuItem, index) => (
        <Box key={index}>
          {menuItem.list ? (
            <>
              <button
                onClick={(event) => handleClick(index, event)}
                style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <MenuItem
                  aria-controls={`simple-menu-${index}`}
                  aria-haspopup="true"
                  sx={{ gap: 0.8 }}
                >
                  {`${menuItem.text}`}
                  <Image src={menuExpandIcon} alt="" />
                </MenuItem>
              </button>
              <Menu
                id={`simple-menu-${index}`}
                anchorEl={anchorEl[index]}
                keepMounted
                open={Boolean(anchorEl[index])}
                onClose={() => handleClose(index)}
              >
                {menuItem.list.map((item, subIndex) => (
                  <SubMenuItem key={subIndex}>
                    <Link href={item.href} underline="none" sx={{ color: 'inherit' }}>
                      <Typography variant="description">{item.text}</Typography>
                    </Link>
                  </SubMenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
              <MenuItem key={index}>
                <Link href={menuItem.href} underline="none" sx={{ color: 'inherit' }}>
                  <Typography>{menuItem.text}</Typography>
                </Link>
              </MenuItem>
            </button>
          )}
        </Box>
      ))}
      <ContactButton />
    </Box>
  );
}

export default NavigationItems;

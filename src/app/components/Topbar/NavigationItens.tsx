'use client';

import { Menu, MenuItem, Link, Typography, Box } from '@mui/material';
import ContactButton from '../ContanctButton';
import menuSchema from './menuSchema';
import { menuExpandIcon } from '@/assets';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function SingleMenuItem({ text, href }: { text: string; href: string }) {
  console.log(href);
  return (
    <MenuItem>
      <Link href={href} color="secondary" underline="none">
        <Typography>{`${text}`}</Typography>
      </Link>
    </MenuItem>
  );
}

function NavigationItens() {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<Array<null | HTMLElement>>(
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
    <>
      <Box sx={{ display: 'flex', alignItens: 'center', justifyContent: 'center' }}>
        {menuSchema().map((menuItem, index) => {
          return menuItem.list ? (
            <Box key={index}>
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
                {menuItem.list.map((item, subIndex) => {
                  return <SingleMenuItem key={subIndex} text={item.text} href={item.href} />;
                })}
              </Menu>
            </Box>
          ) : (
            <SingleMenuItem key={index} text={menuItem.text} href={menuItem.href} />
          );
        })}
        <ContactButton />
      </Box>
    </>
  );
}

export default NavigationItens;

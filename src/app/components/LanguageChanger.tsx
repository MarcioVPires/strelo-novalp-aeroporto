'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { Select, MenuItem, styled, Menu } from '@mui/material';
import { BRIcon, USIcon, SPIcon, FRIcon } from '@/assets';
import Image from 'next/image';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: SelectChangeEvent<string>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '.MuiOutlinedInput-notchedOutline': { border: 0 },
    '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
  }));

  return (
    <Select
      labelId="language-selector-label"
      id="language-selector"
      label="Age"
      onChange={handleChange}
      value={currentLocale}
      sx={{ minWidth: 10 }}
      variant="standard"
      disableUnderline
    >
      <StyledMenuItem value="pt">
        <Image src={BRIcon} alt="" />
      </StyledMenuItem>
      <StyledMenuItem value="en">
        <Image src={USIcon} alt="" />
      </StyledMenuItem>
      <StyledMenuItem value="es">
        <Image src={SPIcon} alt="" />
      </StyledMenuItem>
      <StyledMenuItem value="fr">
        <Image src={FRIcon} alt="" />
      </StyledMenuItem>
    </Select>
  );
}

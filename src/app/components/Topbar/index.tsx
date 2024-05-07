import { Container } from '@mui/material';
import { AppBar, Toolbar, Box } from './styles';
import Image from 'next/image';
import HideOnScroll from './HideOnScroll';
import Navigation from './Navigation';
import LanguageChanger from '../LanguageChanger';
import { logoImg } from '@/assets';

function TopBar() {
  return (
    <HideOnScroll>
      <AppBar color="darkBackground">
        <Toolbar>
          <Box>
            <Image src={logoImg} alt="Strelo Logo" priority />
          </Box>
          <Box>
            <Navigation />
            <LanguageChanger />
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default TopBar;

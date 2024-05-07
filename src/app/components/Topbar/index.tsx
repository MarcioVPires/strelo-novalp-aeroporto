import { AppBar, Box, Toolbar, Container } from '@mui/material';
import Image from 'next/image';
import HideOnScroll from './HideOnScroll';
import Navigation from './Navigation';
import LanguageChanger from '../LanguageChanger';
import { logoImg } from '@/assets';

function TopBar() {
  return (
    <HideOnScroll>
      <AppBar position="fixed">
        <Container>
          <Toolbar>
            <Box flexGrow={1}>
              <Box display="flex" flexDirection="row" alignItems="center" gap={0.5}>
                <Image src={logoImg} alt="Strelo Logo" priority />
              </Box>
            </Box>
            <Navigation />
            <LanguageChanger />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default TopBar;

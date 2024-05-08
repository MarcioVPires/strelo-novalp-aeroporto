import { Box } from '@mui/material';
import ContactModal from '../components/ModalPopUp';
import { HeroSection, ServiceSection } from '@/app/sections';

export default async function Home() {
  return (
    <main>
      <Box>
        <ContactModal />
        <HeroSection />
        <ServiceSection />
      </Box>
    </main>
  );
}

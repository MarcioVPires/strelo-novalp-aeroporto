import { Box } from '@mui/material';
import ContactModal from '../components/ModalPopUp';

export default async function Home() {
  return (
    <main>
      <Box>
        <ContactModal />
      </Box>
    </main>
  );
}

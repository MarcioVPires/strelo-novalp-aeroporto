'use client';

import { DialogTitle, DialogContentText, Box, TextField } from '@mui/material';
import { DialogContent, Dialog, Transition, IconBox, Button } from './customStyles';
import Image from 'next/image';
import { closeIcon } from '@/assets';
import { useModal } from '@/app/contexts/ModalStateProvider';

function ContactModal() {
  const { modalOpen, closeModal } = useModal();

  return (
    <Dialog open={modalOpen} onClose={closeModal} TransitionComponent={Transition}>
      <Box sx={{ position: 'relative', padding: '32px 25px 32px 25px' }}>
        <Box>
          <DialogTitle sx={{ padding: 0 }}>Mande sua mensagem</DialogTitle>
          <DialogContentText sx={{ maxWidth: '80%', marginTop: '0.5rem' }}>
            Nossa equipe responderá o mais breve possível.
          </DialogContentText>
        </Box>
        <IconBox>
          <Image src={closeIcon} alt="close modal icon" onClick={closeModal} />
        </IconBox>
        <DialogContent>
          <TextField variant="outlined" label="Nome Completo" fullWidth></TextField>
          <TextField variant="outlined" label="Empresa" fullWidth></TextField>
          <TextField variant="outlined" label="Email" fullWidth></TextField>
          <TextField variant="outlined" label="Telefone" fullWidth></TextField>
          <TextField variant="outlined" label="Mensagem" multiline rows={4} fullWidth />
          <Button variant="contained" color="primary">
            Continuar
          </Button>
        </DialogContent>
      </Box>
    </Dialog>
  );
}

export default ContactModal;

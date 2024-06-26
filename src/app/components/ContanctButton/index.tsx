'use client';

import { CustomBox, CustomTypography } from './customStyles';
import { useModal } from '@/app/contexts/ModalStateProvider';

type ContactButton = {
  height?: number;
  text: string;
};

function ContactButton({ height, text }: ContactButton) {
  const { openModal } = useModal();

  return (
    <CustomBox height={height} onClick={openModal}>
      <CustomTypography variant="button2">{text}</CustomTypography>
    </CustomBox>
  );
}

export default ContactButton;

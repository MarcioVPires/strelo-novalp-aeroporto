'use client';

import { CustomBox, CustomTypography } from './customStyles';
import { useTranslation } from 'react-i18next';
import { useModal } from '@/app/contexts/ModalStateProvider';

type ContactButton = {
  height?: number;
};

function ContactButtonI18n({ height }: ContactButton) {
  const { t } = useTranslation();
  const { openModal } = useModal();

  return (
    <CustomBox height={height} onClick={openModal}>
      <CustomTypography variant="button2">{t('button:contact')}</CustomTypography>
    </CustomBox>
  );
}

export default ContactButtonI18n;

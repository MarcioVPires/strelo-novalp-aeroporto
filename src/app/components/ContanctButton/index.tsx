'use client';

import { CustomBox, CustomTypography } from './customStyles';
import { useTranslation } from 'react-i18next';

type ContactButton = {
  height?: number;
  text: string;
};

function ContactButton({ height }: ContactButton) {
  const { t } = useTranslation();
  return (
    <CustomBox height={height}>
      <CustomTypography variant="button2">{t('button:contact')}</CustomTypography>
    </CustomBox>
  );
}

export default ContactButton;

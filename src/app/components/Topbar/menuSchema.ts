import { useTranslation } from 'react-i18next';

function menuSchema() {
  const { t } = useTranslation();
  console.log(t('begin'));
  return [
    { text: t('begin'), href: '' },
    {
      text: t('solutions'),
      list: [
        {
          text: t('solutions_chatbot'),
          href: 'https://aeroportos.strelo.com.br/atendente-virtual-e-chatbot-para-aeroportos/',
        },
        {
          text: t('solutions_delivery'),
          href: 'http://aeroportos.strelo.com.br//marketplace-de-alimentacao-para-aeroportos/',
        },
        {
          text: t('solutions_booking'),
          href: 'https://aeroportos.strelo.com.br/plataforma-de-reserva-de-servicos-para-aeroportos/',
        },
        {
          text: t('solutions_marketplace'),
          href: 'https://aeroportos.strelo.com.br/marketplace-de-alimentacao-para-aeroportos/',
        },
        {
          text: t('solutions_services'),
          href: 'https://aeroportos.strelo.com.br/sites-paginas-personalizadas-para-aeroportos/',
        },
      ],
      href: null,
    },
    {
      text: t('services'),
      list: [
        { text: 'Consultoria Estratégica ', href: '' },
        { text: 'Marketing Digital', href: '' },
        { text: 'Desenvolvimento de Software', href: '' },
      ],
      href: null,
    },
    { text: t('partners'), href: '' },
  ];
}

export default menuSchema;

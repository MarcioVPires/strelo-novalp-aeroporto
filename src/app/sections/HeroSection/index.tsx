import { Typography, Box, Button, Stack } from '@mui/material';
import Image from 'next/image';
import { MainWrapper, ContentWrapper, Title, SubTitle, OutlinedButton } from './style';
import { heroDashboardImage } from '@/assets';
import ContactButton from '@/app/components/ContanctButton';
import { btgLogo, aeroBahiaLogo, galeaoLogo } from '@/assets';
function HeroSection() {
  return (
    <MainWrapper>
      <ContentWrapper>
        <Box>
          <Title>
            A nova Era dos Aeroportos <span>Inteligentes</span> começa aqui, com a Strelo
          </Title>
          <SubTitle color="primary">
            Suporte estratégico e desenvolvimento de soluções digitais feitas sob medida para
            Aeroportos que desejam aumentar a eficiência operacional, a satisfação dos passageiros e
            o faturamento com produtos e serviços.
          </SubTitle>
        </Box>
        <Stack spacing={4} direction="row" sx={{ marginTop: '4rem' }}>
          <ContactButton text="Fale com um especialista" />
          <OutlinedButton variant="outlined">Saiba Mais</OutlinedButton>
        </Stack>
        <Stack spacing={4} direction="row" sx={{ marginTop: '9rem' }}>
          <Image src={galeaoLogo} alt="" />
          <Image src={btgLogo} alt="" />
          <Image src={aeroBahiaLogo} alt="" />
        </Stack>
        <Box>
          <Image src={heroDashboardImage} alt="as" layout="responsive" />
        </Box>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default HeroSection;

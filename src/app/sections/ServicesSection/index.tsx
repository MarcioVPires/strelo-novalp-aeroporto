'use client';
import {
  Title,
  MainWrapper,
  ContentWrapper,
  SubTitle,
  ExplainerCard,
  ExplainerCardText,
} from '@/app/sections/ServicesSection/style';
import CustomChip from '@/app/components/Chips';
import { useMediaQuery, Stack, useTheme } from '@mui/material';
import { chipDevelopmentIcon, chipGlobalIcon, chipStrategyIcon } from '@/assets';

function ServiceSection() {
  const theme = useTheme();
  const isBreakpointSM = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  return (
    <MainWrapper>
      <ContentWrapper>
        <Title>Soluções para Transformar Aeroportos</Title>
        <SubTitle>
          Nossos serviços e soluções são integrados para oferecer mais eficiência e eficácia no
          processo de descoberta, planejamento, desenvolvimento e entrega de soluções inovadoras.
        </SubTitle>
        <Stack spacing={4} direction={isBreakpointSM ? 'column' : 'row'} sx={{ marginTop: '4rem' }}>
          <ExplainerCard>
            <CustomChip label="Soluções Digitais " icon={chipGlobalIcon} />
            <ExplainerCardText>
              Oferecemos um ecossistema de soluções digitais totalmente personalizáveis e integradas
              para atender rapidamente às necessidades e requisitos específicos do negócio e
              operação.
            </ExplainerCardText>
          </ExplainerCard>
          <ExplainerCard>
            <CustomChip label="Desenvolvimento de Software" icon={chipDevelopmentIcon} />
            <ExplainerCardText>
              Somos especialistas em desenvolvimento de software de forma ágil, rápida e
              colaborativa. Nossos processos são pensados para dar máxima transparência e eficiência
              ao desenvolvimento.
            </ExplainerCardText>
          </ExplainerCard>
          <ExplainerCard>
            <CustomChip label="Estratégia Digital" icon={chipStrategyIcon} />
            <ExplainerCardText>
              Conduzimos a análise das necessidades e requisitos do negócio e da operação,
              elaborando e planejando a estratégia digital mais eficaz para alcançar os resultados
              esperados.
            </ExplainerCardText>
          </ExplainerCard>
        </Stack>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default ServiceSection;

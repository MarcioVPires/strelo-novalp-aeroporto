import {
  DashboardTitle,
  DashboardWrapper,
  DashboardContentWrapper,
  DashboardSubTitle,
  DashBoardList,
  DashBoardItem,
  DashBoardText,
  OutlinedButton,
  ImageContainer,
} from './style';
import Image from 'next/image';
import dashboardItens from './dashboardItens';
import { dashPainel } from '@/assets';
import { Box } from '@mui/system';

function DashboardSection() {
  return (
    <DashboardWrapper>
      <DashboardContentWrapper>
        <DashboardTitle>Painel de Admin e Dados do Aeroporto</DashboardTitle>
        <DashboardSubTitle>
          Oferecemos um painel de administração personalizável que integra dados, gráficos,
          relatórios e ferramentas de gestão de informação, tudo em um ambiente seguro para otimizar
          a tomada de decisões com eficiência.
        </DashboardSubTitle>
        <DashBoardList>
          {dashboardItens.map((item, index) => {
            return (
              <DashBoardItem key={index}>
                <Image src={item.image} alt="" />
                <DashBoardText>{item.text}</DashBoardText>
              </DashBoardItem>
            );
          })}
        </DashBoardList>

        <Box>
          <ImageContainer>
            <Image src={dashPainel} alt="" />
          </ImageContainer>
        </Box>

        <OutlinedButton variant="outlined">Peça uma demonstração</OutlinedButton>
      </DashboardContentWrapper>
    </DashboardWrapper>
  );
}

export default DashboardSection;

import { ContentWrapper, MainWrapper, Title, SubTitle } from './style';
import Carousel from './Carousel';
import CustomChip from '@/app/components/Chips';
import { chipGlobalIcon } from '@/assets';

function ProductsSection() {
  return (
    <MainWrapper>
      <ContentWrapper>
        <CustomChip label="Soluções Digitais" icon={chipGlobalIcon} />
        <Title>Soluções Digitais para Aeroportos</Title>
        <SubTitle>
          Oferecemos um conjunto de soluções digitais feitas para o segmento de aeroportos e prontas
          para serem configuradas e implantadas.{' '}
        </SubTitle>
        <Carousel />
      </ContentWrapper>
    </MainWrapper>
  );
}

export default ProductsSection;

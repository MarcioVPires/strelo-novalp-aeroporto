import {
  CarouselWrapper,
  CarouselMenuItems,
  CarouselMenu,
  CarouselMenuColumn,
  CarouselContent,
  CarouselContentColumn,
  Title,
  SubTitle,
} from './style';
import Image from 'next/image';
import { productChatBot } from '@/assets';

function Carousel() {
  return (
    <CarouselWrapper>
      <CarouselMenu>
        <CarouselMenuColumn>
          <CarouselMenuItems active>Chatbot</CarouselMenuItems>
          <CarouselMenuItems>Sites</CarouselMenuItems>
          <CarouselMenuItems>Booking</CarouselMenuItems>
        </CarouselMenuColumn>
        <CarouselMenuColumn>
          <CarouselMenuItems>Food</CarouselMenuItems>
          <CarouselMenuItems>E-commerce</CarouselMenuItems>
          <CarouselMenuItems>Recompensas</CarouselMenuItems>
        </CarouselMenuColumn>
      </CarouselMenu>
      <CarouselContent>
        <CarouselContentColumn>
          <Title>Chatbot de Atendimento</Title>
          <SubTitle>
            Oferece mais comodidade para os passageiros com uma plataforma online que permite
            encontrar, comparar e comprar diversas opções de produtos oferecidos no aeroporto, sem
            sair do conforto e segurança da sala de embarque.
          </SubTitle>
        </CarouselContentColumn>
        <CarouselContentColumn>
          <Image src={productChatBot} alt="" width={300} height={400} layout="responsive" />
        </CarouselContentColumn>
      </CarouselContent>
    </CarouselWrapper>
  );
}

export default Carousel;

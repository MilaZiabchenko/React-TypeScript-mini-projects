import type { ReactElement } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0.92;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ModalBody = styled.section`
  position: relative;
  padding: clamp(0.5rem, 5.5vmin, 3.5rem);
  border-radius: 12px;
  background-color: hsl(220, 12%, 15%, 0.82);
`;

type ModalProps = {
  children: ReactElement | ReactElement[];
  backgroundImage: string;
};

const Modal = ({ children, backgroundImage }: ModalProps) => (
  <ModalBackground className='modal'>
    <Image src={backgroundImage} alt='Warship Go!' />
    <ModalBody>{children}</ModalBody>
  </ModalBackground>
);

export default Modal;

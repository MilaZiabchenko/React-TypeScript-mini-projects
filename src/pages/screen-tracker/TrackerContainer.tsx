import { ReactElement, useState, MouseEvent } from 'react';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import useScreenDimensions from '../../hooks/useScreenDimensions';
import useNetworkStatus from '../../hooks/useNetworkStatus';

const Header = styled.header`
  position: sticky;
  top: 0;
  margin-inline: 1.5rem;
  padding-block: 1.5rem;
  border-radius: 12px;
  background-color: hsla(220, 12%, 5%, 0.82);
`;

const InfoHeading = styled.h3`
  color: var(--light-green-clr);

  span {
    color: var(--vivid-green-70);
    text-transform: uppercase;
  }
`;

const Heading = styled.h3`
  max-width: 780px;
  margin-inline: auto;
  padding-inline: 1.5rem;
  color: var(--vivid-green-70);
`;

const TrackerContainer = ({ children }: { children: ReactElement }) => {
  const isOnline = useNetworkStatus();
  const [windowWidth, windowHeight] = useScreenDimensions();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <Header>
        <InfoHeading className='tracker-heading'>
          Network status: <span>{isOnline ? 'online' : 'offline'}</span>
        </InfoHeading>
        <InfoHeading className='tracker-heading'>
          Screen size:{' '}
          <span>
            {windowWidth} x {windowHeight}
          </span>
        </InfoHeading>
        <InfoHeading className='tracker-heading'>
          Mouse position:{' '}
          <span>
            {position.x} x {position.y}
          </span>
        </InfoHeading>
      </Header>
      <main>
        <Heading>
          Change network status, resize screen, or move your mouse over the list
          below to track changes...
        </Heading>
        <div onMouseMove={handleMouseMove}>{children}</div>
      </main>
      <Footer color='hsla(90, 95%, 97.5%, 0.82)' />
    </>
  );
};

export default TrackerContainer;

import { type ReactElement, type MouseEvent, useState } from 'react';
import styled from 'styled-components';
import useScreenDimensions from '../../hooks/useScreenDimensions';
import useNetworkStatus from '../../hooks/useNetworkStatus';
import Footer from '../../components/Footer';

const ScreenTrackerHeader = styled.header`
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

const MainHeading = styled.h3`
  max-width: 850px;
  margin-inline: auto;
  padding-inline: 1.5rem;
  color: var(--vivid-green-70);
`;

const TrackerWrapper = ({ children }: { children: ReactElement }) => {
  const isOnline = useNetworkStatus();
  const [windowWidth, windowHeight] = useScreenDimensions();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <ScreenTrackerHeader>
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
      </ScreenTrackerHeader>
      <main>
        <MainHeading>
          Change network status, resize screen, or move your mouse over the list
          of balloons below to track changes...
        </MainHeading>
        <section onMouseMove={handleMouseMove}>{children}</section>
      </main>
      <Footer color='hsla(90, 95%, 97.5%, 0.82)' />
    </>
  );
};

export default TrackerWrapper;

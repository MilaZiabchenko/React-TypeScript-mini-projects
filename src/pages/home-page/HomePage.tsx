import { Link } from 'react-router-dom';
import useCurrentTime from '../../hooks/useCurrentTime';
import { weekDay } from '../../utils/getWeekDay';
import { useSpring, animated } from '@react-spring/web';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import './home-page.css';

const Time = styled.h2`
  width: fit-content;
  margin: 2rem auto;
  color: var(--summer-yellow-clr);
  color: var(--light-blue-clr);
  border-bottom: 1px dotted;
`;

const Heading = styled(animated.h2)`
  max-width: 22ch;
  margin: 2.5rem auto 3.5rem;
  color: var(--summer-yellow-clr);
`;

const HomePage = () => {
  const time = useCurrentTime();

  const titleAnimationStyles = useSpring({
    from: {
      transform: 'translateY(-30px)'
    },
    to: { transform: 'translateY(15px)' },
    config: { mass: 3, tension: 500, friction: 25 }
  });

  return (
    <>
      <Time>{time.toLocaleTimeString()}</Time>
      <Heading style={titleAnimationStyles}>
        Happy <span>{weekDay}</span>, and welcome to my playground :)
      </Heading>
      <nav className='nav-links'>
        <Link to='magic-memory-game'>Magic Memory Game</Link>
        <Link to='travel-agency'>Mila Ziablick Travel Agency</Link>
        <Link to='ski-resort-lifts'>Snowtooth Ski Resort Lifts</Link>
        <Link to='authorized-activities'>Authorized Activities</Link>
        <Link to='screen-tracker'>Screen Tracker</Link>
      </nav>
      <Footer color='hsla(190, 95%, 95%, 0.82)' />
    </>
  );
};

export default HomePage;

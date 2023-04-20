import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { weekDay } from '../../utils/getWeekDay';
import { routes_data } from '../../data/routes-data';
import Footer from '../../components/Footer';

const Heading = styled(animated.h2)`
  max-width: 22ch;
  margin: 2.5rem auto 3.5rem;
  color: var(--summer-yellow-clr);
`;

const HomeWrapper = ({ children }: { children: ReactElement }) => {
  const titleAnimationStyles = useSpring({
    from: {
      transform: 'translateY(-30px)'
    },
    to: { transform: 'translateY(15px)' },
    config: { mass: 3, tension: 500, friction: 25 }
  });

  return (
    <>
      <header>
        {children}
        <Heading style={titleAnimationStyles}>
          Happy <span>{weekDay}</span>, and welcome to my playground :)
        </Heading>
        <nav className='nav-links'>
          <ul>
            {routes_data.map(({ path, title }) => (
              <li key={path}>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Footer color='hsla(190, 95%, 95%, 0.82)' />
    </>
  );
};

export default HomeWrapper;

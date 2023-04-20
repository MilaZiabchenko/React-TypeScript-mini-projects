import styled from 'styled-components';
import { useThemeContext } from '../../context/ThemeContext';

const Heading = styled.h1`
  color: var(--vivid-green-70);
`;

const AvatarBackground = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  margin: 1.75rem auto;
  border-radius: 50%;

  @media (max-width: 520px) {
    width: 350px;
    height: 350px;
  }
`;

const Avatar = styled.img`
  position: absolute;
  inset: 0;
  height: 435px;
  margin: auto;
  border-radius: inherit;

  @media (max-width: 520px) {
    height: 335px;
  }
`;

const TravelAgencyHeader = ({ name = 'Mila', lastName = 'Ziablick' }) => {
  const { theme } = useThemeContext();

  const background =
    theme === 'dark' ? 'gradient-background' : 'green-background';

  return (
    <header>
      <Heading>
        {name} {lastName} Agency
      </Heading>
      <AvatarBackground className={background}>
        <Avatar src='https://github.com/milaziabchenko.png' alt='Mila' />
      </AvatarBackground>
    </header>
  );
};

export default TravelAgencyHeader;

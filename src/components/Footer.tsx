import styled from 'styled-components';

const Copyright = styled.p`
  color: ${props => props.color};
  font-size: 1.5rem;
`;

const Footer = ({
  color = 'var(--light-green-clr)',
  year = new Date().getFullYear()
}) => (
  <footer>
    <Copyright color={color}>&copy; Copyright {year}</Copyright>
  </footer>
);

export default Footer;

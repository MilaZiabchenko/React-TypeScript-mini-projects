import styled from 'styled-components';
import useCurrentTime from '../hooks/useCurrentTime';

const Time = styled.h2`
  width: fit-content;
  margin: 2rem auto;
  color: ${props => props.color};
  border-bottom: 1px dotted;
`;

const Clock = ({ color = 'var(--light-blue-clr)' }) => {
  const time = useCurrentTime();

  return <Time color={color}>{time.toLocaleTimeString()}</Time>;
};

export default Clock;

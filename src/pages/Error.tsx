import { useRouteError, Link } from 'react-router-dom';
import { getErrorMessage } from '../utils/getErrorMessage';
import styled from 'styled-components';

const ErrorSection = styled.section`
  height: 50vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;

const Error = () => {
  const error = useRouteError();

  console.error(getErrorMessage(error));

  return (
    <ErrorSection className='error-page'>
      <h2 className='text-gradient'>Oops, something went wrong :(</h2>
      <Link to='/'>‹ Back to homepage</Link>
    </ErrorSection>
  );
};

export default Error;

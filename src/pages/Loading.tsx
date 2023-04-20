import styled from 'styled-components';

const Loader = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;

const Loading = () => (
  <Loader className='loading-page'>
    <h2 className='text-gradient'>Loading...</h2>
  </Loader>
);

export default Loading;

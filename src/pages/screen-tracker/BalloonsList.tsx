import styled from 'styled-components';

const ListItem = styled.li`
  color: var(--light-green-clr);
`;

const BalloonsList = () => (
  <>
    <h3>Long List of 🎈🎈🎈🎈🎈🎈🎈</h3>
    <ul>
      {[...Array(77).keys()].map(i => (
        <ListItem key={i}>🎈 #{i + 1}</ListItem>
      ))}
    </ul>
  </>
);

export default BalloonsList;

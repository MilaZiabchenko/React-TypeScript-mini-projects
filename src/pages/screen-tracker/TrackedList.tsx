import styled from 'styled-components';

const ListItem = styled.li`
  color: var(--light-green-clr);
`;

const TrackedList = () => (
  <ul>
    {[...Array(50).keys()].map(i => (
      <ListItem key={i}>Item {i + 1}</ListItem>
    ))}
  </ul>
);

export default TrackedList;

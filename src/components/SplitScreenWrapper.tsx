import type { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 5rem auto;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  text-align: left;
`;

const LeftHandPane = styled.main<{ weight: number }>`
  flex: ${props => props.weight};
  min-width: 350px;
`;

const RightHandPane = styled.aside<{ weight: number }>`
  flex: ${props => props.weight};
  min-width: 350px;
`;

type SplitScreenProps = {
  children: ReactElement[];
  leftWeight?: number;
  rightWeight?: number;
};

const SplitScreenWrapper = ({
  children,
  leftWeight = 1,
  rightWeight = 1
}: SplitScreenProps) => {
  const [left, right] = children;

  return (
    <Container>
      <LeftHandPane weight={leftWeight}>{left}</LeftHandPane>
      <RightHandPane weight={rightWeight}>{right}</RightHandPane>
    </Container>
  );
};

export default SplitScreenWrapper;

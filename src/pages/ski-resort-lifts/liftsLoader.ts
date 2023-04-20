import { fetchData } from '../../utils/fetchData';
import type { LiftsConfig } from './LiftsConfig';

const fragment = `#graphql
  fragment LiftDetails on Lift {
    liftStatus: status
    liftName: name
    elevationGain
    nightSkiing: night
    liftId: id
    trailAccess {
      status
      trailName: name
      trailTrees: trees
      trailId: id
    }
  }
`;

const query = `#graphql
  ${fragment}
  query GetLiftsSummary {
    allLifts {
      ...LiftDetails
    }
  }
`;

const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query })
};

const liftsLoader = async () =>
  await fetchData<LiftsConfig.Lifts>(
    'https://snowtooth.moonhighway.com',
    options
  );

export { liftsLoader };

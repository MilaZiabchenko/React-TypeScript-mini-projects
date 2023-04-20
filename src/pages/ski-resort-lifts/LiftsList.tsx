import { useLoaderData } from 'react-router-dom';
import type { LiftsConfig } from './LiftsConfig';
import LiftsItem from './LiftsItem';
import './lifts.css';

const Lifts = () => {
  const lifts = useLoaderData() as LiftsConfig.Lifts;

  const existingLifts = lifts.data.allLifts;

  return existingLifts && existingLifts.length > 0 ? (
    <section>
      {existingLifts.map(
        (
          {
            liftId,
            liftName,
            liftStatus,
            elevationGain,
            nightSkiing,
            trailAccess
          },
          index
        ) => (
          <LiftsItem
            key={liftId}
            position={index + 1}
            liftName={liftName}
            liftStatus={liftStatus}
            elevationGain={elevationGain}
            nightSkiing={nightSkiing}
            trailAccess={trailAccess}
          />
        )
      )}
    </section>
  ) : (
    <h3 className='text-gradient'>No lifts for now :(</h3>
  );
};

export default Lifts;

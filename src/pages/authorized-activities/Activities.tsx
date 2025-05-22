import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { fetchData } from '../../utils/fetchData';
import { getErrorMessage } from '../../utils/getErrorMessage';
import Loading from '../Loading';

const Heading = styled.h2`
  color: var(--vivid-green-70);
`;

const ActivityItem = styled.li`
  color: var(--light-green-clr);

  span {
    color: var(--vivid-green-70);
  }
`;

type Activity = Record<'key' | 'activity', string>;

type Activities = {
  initialUniqueActivities: Activity[];
};

const Activities = () => {
  const { initialUniqueActivities } = useLoaderData() as Activities;

  const [activities, setActivities] = useState<Activity[] | null>(
    initialUniqueActivities
  );
  const [error, setError] = useState<string | null>(null);

  const loadActivity = async () => {
    try {
      const data = await fetchData<Activity>(
        'https://bored.api.lewagon.com/api/activity'
      );

      if (activities && data.activity) {
        if (activities.some(a => a.activity === data.activity)) {
          loadActivity();
        } else {
          setActivities([...activities, data]);
        }
      }
    } catch (error) {
      setError(getErrorMessage(error));
    }
  };

  if (error) return <h3 className='text-gradient'>{error}</h3>;

  if (!activities) return <Loading />;

  return activities.length > 0 ? (
    <section>
      <Heading>Fun and useful activities for everyone</Heading>
      <ul>
        {activities.map(({ key, activity }, index) => (
          <ActivityItem key={key}>
            <span>#{index + 1} — </span>
            {activity}
          </ActivityItem>
        ))}
      </ul>
      <button onClick={loadActivity}>Load Another Activity</button>
    </section>
  ) : (
    <h3 className='text-gradient'>No activities for now :(</h3>
  );
};

export type { Activity };
export default Activities;

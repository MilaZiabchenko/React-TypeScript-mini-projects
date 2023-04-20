import type { Activity } from './Activities';
import type { UserDataConfig } from './UserDataConfig';
import { fetchData } from '../../utils/fetchData';

const activitiesAndUsersLoader = async () => {
  const initialUniqueActivities = await Promise.all<Promise<Activity>[]>([
    fetchData('https://www.boredapi.com/api/activity'),
    fetchData('https://www.boredapi.com/api/activity'),
    fetchData('https://www.boredapi.com/api/activity'),
    fetchData('https://www.boredapi.com/api/activity'),
    fetchData('https://www.boredapi.com/api/activity')
  ])
    .then(activities => [
      ...new Map(
        activities.reduce<[Activity['activity'], Activity][]>(
          (acc, activity) =>
            activity.activity ? [...acc, [activity.activity, activity]] : acc,
          []
        )
      ).values()
    ])
    .catch(error => error.message);

  const recentlyActiveUsers = await Promise.all<
    Promise<UserDataConfig.UserAPIResponse>[]
  >([
    fetchData('https://randomuser.me/api'),
    fetchData('https://randomuser.me/api'),
    fetchData('https://randomuser.me/api'),
    fetchData('https://randomuser.me/api'),
    fetchData('https://randomuser.me/api')
  ])
    .then(users =>
      users.reduce<UserDataConfig.UserData[]>(
        (acc, user) => (user.results ? [...acc, user.results[0]] : acc),
        []
      )
    )
    .catch(error => error.message);

  return { initialUniqueActivities, recentlyActiveUsers };
};

export { activitiesAndUsersLoader };

import { Activity } from './Activities';
import { UserDataConfig } from './UserDataConfig';
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
        activities.reduce(
          (acc: [Activity['activity'], Activity][], activity) =>
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
      users.reduce(
        (acc: UserDataConfig.UserData[], user) =>
          user.results ? [...acc, user.results[0]] : acc,
        []
      )
    )
    .catch(error => error.message);

  return { initialUniqueActivities, recentlyActiveUsers };
};

export { activitiesAndUsersLoader };

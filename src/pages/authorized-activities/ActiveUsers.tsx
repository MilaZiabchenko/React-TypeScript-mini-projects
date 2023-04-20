import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { useTrail, animated } from '@react-spring/web';
import PlaceIcon from '@mui/icons-material/Place';
import type { UserDataConfig } from './UserDataConfig';
import Loading from '../Loading';

const Heading = styled.h3`
  margin-top: 0.5rem;
  color: var(--vivid-green-70);
`;

const User = styled.div`
  max-width: 420px;
  padding: 0.35rem;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: hsla(0, 0%, 100%, 0.05);
  color: var(--light-green-clr);
  font-size: 1.05rem;
  box-shadow: 1px 1px 3px hsla(0, 0%, 100%, 0.75),
    -1px -1px 3px hsla(0, 0%, 100%, 0.75);

  img {
    border-radius: 50%;
    width: 3.75rem;
  }

  div > p {
    padding-block: 0.25rem;
  }
`;

const Location = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--vivid-green-70);
`;

type Users = {
  recentlyActiveUsers: UserDataConfig.UserData[];
};

const ActiveUsers = () => {
  const { recentlyActiveUsers: users } = useLoaderData() as Users;

  const trails = useTrail(users.length, {
    from: { transform: 'translateX(800px)' },
    to: { transform: 'translateX(0)' }
  });

  if (!users) return <Loading />;

  return users.length > 0 ? (
    <section>
      <Heading>Recently active users</Heading>
      <ul>
        {trails.map((styles, i) => (
          <animated.li key={users[i]?.email} style={styles}>
            <User className='user'>
              <img
                src={users[i]?.picture.medium ?? users[i]?.picture.thumbnail}
                alt='User'
              />
              <div>
                <p>
                  {users[i]?.name.first} {users[i]?.name.last}
                </p>
                <Location>
                  <PlaceIcon
                    style={{ marginInline: '0 0.25rem', padding: 0 }}
                  />
                  <span>
                    {users[i]?.location.city}, {users[i]?.location.country}
                  </span>
                </Location>
              </div>
            </User>
          </animated.li>
        ))}
      </ul>
    </section>
  ) : (
    <h3 className='text-gradient'>No users for now :(</h3>
  );
};

export default ActiveUsers;

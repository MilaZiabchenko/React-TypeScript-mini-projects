import { type ReactNode, useState } from 'react';
import Authorization from './Authorization';

const AuthorizedActivitiesWrapper = ({ children }: { children: ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <>
      <Authorization
        isAuthorized={isAuthorized}
        handleAuthorized={() => setIsAuthorized(!isAuthorized)}
      />
      {isAuthorized && <>{children}</>}
    </>
  );
};

export default AuthorizedActivitiesWrapper;

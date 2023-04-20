import type { MouseEventHandler } from 'react';
import AuthorizationFreeComponent from './AuthorizationFreeComponent';
import AuthorizationSecretComponent from './AuthorizationSecretComponent';

enum Emotion {
  HAPPY = 'happy :)',
  FRUSTRATED = 'frustrated :('
}

type AuthorizationNestedComponentProps = {
  children: Emotion;
  toggleAuth: MouseEventHandler<HTMLButtonElement>;
};

type AuthorizationProps = {
  isAuthorized: boolean;
  handleAuthorized: MouseEventHandler<HTMLButtonElement>;
};

const Authorization = ({
  isAuthorized,
  handleAuthorized
}: AuthorizationProps) => {
  const emotion = isAuthorized ? Emotion.HAPPY : Emotion.FRUSTRATED;

  return isAuthorized ? (
    <AuthorizationFreeComponent toggleAuth={handleAuthorized}>
      {emotion}
    </AuthorizationFreeComponent>
  ) : (
    <AuthorizationSecretComponent toggleAuth={handleAuthorized}>
      {emotion}
    </AuthorizationSecretComponent>
  );
};

export type { AuthorizationNestedComponentProps };
export default Authorization;

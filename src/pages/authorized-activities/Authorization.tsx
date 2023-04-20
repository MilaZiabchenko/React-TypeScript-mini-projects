import { MouseEventHandler } from 'react';
import Modal from '../../components/Modal';
import soldier_vs_warship from './../../assets/russian_warship_go.webp';

enum Emotion {
  HAPPY = 'happy :)',
  FRUSTRATED = 'frustrated :('
}

type AuthComponentProps = {
  children: Emotion;
  toggleAuth: MouseEventHandler<HTMLButtonElement>;
};

type AuthorizationProps = {
  isAuthorized: boolean;
  handleAuthorized: MouseEventHandler<HTMLButtonElement>;
};

const FreeComponent = ({ children, toggleAuth }: AuthComponentProps) => (
  <section>
    <h2>
      Now all users are<span className='authorized'> {children}</span>
    </h2>
    <button onClick={toggleAuth}>Toggle Auth</button>
  </section>
);

const SecretComponent = ({ children, toggleAuth }: AuthComponentProps) => (
  <Modal backgroundImage={soldier_vs_warship}>
    <p>Secret information for authorized users only</p>
    <h2>
      Some users are<span> {children}</span>
    </h2>
    <button className='modal-button' onClick={toggleAuth}>
      Toggle Auth
    </button>
  </Modal>
);

const Authorization = ({
  isAuthorized,
  handleAuthorized
}: AuthorizationProps) => {
  const emotion = isAuthorized ? Emotion.HAPPY : Emotion.FRUSTRATED;

  return isAuthorized ? (
    <FreeComponent toggleAuth={handleAuthorized}>{emotion}</FreeComponent>
  ) : (
    <SecretComponent toggleAuth={handleAuthorized}>{emotion}</SecretComponent>
  );
};

export default Authorization;

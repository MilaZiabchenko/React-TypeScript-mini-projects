import type { AuthorizationNestedComponentProps } from './Authorization';
import Modal from '../../components/Modal';
import soldier_vs_warship from './../../assets/russian_warship_go.webp';

const AuthorizationSecretComponent = ({
  children,
  toggleAuth
}: AuthorizationNestedComponentProps) => (
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

export default AuthorizationSecretComponent;

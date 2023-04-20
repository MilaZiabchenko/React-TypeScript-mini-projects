import type { AuthorizationNestedComponentProps } from './Authorization';

const AuthorizationFreeComponent = ({
  children,
  toggleAuth
}: AuthorizationNestedComponentProps) => (
  <section>
    <h2>
      Now all users are<span className='authorized'> {children}</span>
    </h2>
    <button onClick={toggleAuth}>Toggle Auth</button>
  </section>
);

export default AuthorizationFreeComponent;

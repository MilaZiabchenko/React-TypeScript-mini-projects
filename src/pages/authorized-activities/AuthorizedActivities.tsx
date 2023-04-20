import AuthorizedActivitiesWrapper from './AuthorizedActivitiesWrapper';
import SplitScreenWrapper from '../../components/SplitScreenWrapper';
import Activities from './Activities';
import ActiveUsers from './ActiveUsers';
import Footer from '../../components/Footer';

const AuthorizedActivities = () => (
  <AuthorizedActivitiesWrapper>
    <SplitScreenWrapper leftWeight={3} rightWeight={2}>
      <Activities />
      <ActiveUsers />
    </SplitScreenWrapper>
    <Footer />
  </AuthorizedActivitiesWrapper>
);

export default AuthorizedActivities;

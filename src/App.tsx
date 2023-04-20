import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import {
  Error,
  HomePage,
  MemoryGame,
  TravelAgency,
  Lifts,
  liftsLoader,
  activitiesAndUsersLoader,
  AuthorizedActivities,
  ScreenTracker
} from './pages';
import { ThemeProvider } from './context/ThemeContext';
import ThemeWrapper from './components/ThemeWrapper';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<Error />}>
      <Route index element={<HomePage />} />
      <Route path='magic-memory-game' element={<MemoryGame />} />
      <Route path='travel-agency' element={<TravelAgency />} />
      <Route path='ski-resort-lifts' loader={liftsLoader} element={<Lifts />} />
      <Route
        path='authorized-activities'
        loader={activitiesAndUsersLoader}
        element={<AuthorizedActivities />}
      />
      <Route path='screen-tracker' element={<ScreenTracker />} />
    </Route>
  )
);

const App = () => (
  <ThemeProvider>
    <ThemeWrapper>
      <RouterProvider router={router} />
    </ThemeWrapper>
  </ThemeProvider>
);

export default App;


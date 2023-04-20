import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import RootLayout from './layout/RootLayout';
import {
  Error,
  Loading,
  HomePage,
  MemoryGame,
  TravelAgency,
  liftsLoader,
  SkiResortLifts,
  AuthorizedActivities,
  activitiesAndUsersLoader,
  ScreenTracker
} from './pages';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<HomePage />} />
      <Route path='magic-memory-game' element={<MemoryGame />} />
      <Route path='travel-agency' element={<TravelAgency />} />
      <Route
        path='ski-resort-lifts'
        loader={liftsLoader}
        element={<SkiResortLifts />}
      />
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
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </ThemeProvider>
);

export default App;


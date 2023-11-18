import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Gyser from './pages/Gyser';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Home from './pages/Home';
import User from './pages/Test';
import NotFound from './pages/Page404';
import Auth from './pages/Auth';
import Church from './pages/Church';
import StatsPage from './pages/StatsPage';
import ChurchRegister from './pages/ChurchRegister';
import EventRegister from './pages/calendar/AddEvent';
import StatsRegister from './pages/StatsRegister';
import AddUser from './pages/AddUser';
import CalendarPage from './pages/calendar/CalendarEvent';
import EventMenu from './pages/calendar/EventsMenu';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/app',
      element: <DashboardLayout />,
      children: [
        { path: 'home', element: <Home /> },
        { path: 'event-menu', element: <EventMenu/>},
        { path: 'dashboard', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'church', element: <Church /> },
        { path: 'stats', element: <StatsPage /> },
        { path: 'reports', element: <NotFound /> },
        { path: 'cells', element: <NotFound /> },
        { path: 'calendar', element: <CalendarPage /> },
        { path: 'storage', element: <NotFound /> },
        { path: 'stats', element: <NotFound /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Auth /> },
        { path: '/app', element: <Navigate to="/dashboard" /> },
        { path: 'login', element: <Login /> },
        { path: 'gyser', element: <Gyser /> },
        { path: 'register', element: <Register /> },
        { path: 'add-user', element: <AddUser /> },
        { path: 'add-stats', element: <StatsRegister /> },
        { path: 'add-church', element: <ChurchRegister /> },
        { path: 'add-event', element: <EventRegister /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> },
    { path: '/app/*', element: <Navigate to="/dashboard" replace /> }
  ]);
}

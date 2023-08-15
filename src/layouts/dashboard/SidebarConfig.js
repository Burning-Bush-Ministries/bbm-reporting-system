// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'people',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'church',
    path: '/dashboard/church',
    icon: getIcon('eva:home-fill')
  },
  {
    title: 'stats',
    path: '/dashboard/stats',
    icon: getIcon('eva:list-outline')
  },
  {
    title: 'reports',
    path: '/dashboard/reports',
    icon: getIcon('eva:attach-outline')
  },
  {
    title: 'cells',
    path: '/dashboard/cells',
    icon: getIcon('eva:book-open-fill')
  }
];

export default sidebarConfig;

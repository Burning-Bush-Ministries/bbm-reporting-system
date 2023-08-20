// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/app/dashboard',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'people',
    path: '/app/user',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'church',
    path: '/app/church',
    icon: getIcon('eva:home-fill')
  },
  {
    title: 'stats',
    path: '/app/stats',
    icon: getIcon('eva:list-outline')
  },
  {
    title: 'reports',
    path: '/app/reports',
    icon: getIcon('eva:attach-outline')
  },
  {
    title: 'cells',
    path: '/app/cells',
    icon: getIcon('eva:book-open-fill')
  }
];

export default sidebarConfig;

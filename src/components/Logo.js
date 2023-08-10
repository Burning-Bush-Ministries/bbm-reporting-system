import { Link as RouterLink } from 'react-router-dom';
// material

// ----------------------------------------------------------------------

Logo.propTypes = {};

export default function Logo() {
  return (
    <RouterLink to>
      <img src="/static/logo.jpg" width={50} height={50} alt="gct-logo" />
    </RouterLink>
  );
}

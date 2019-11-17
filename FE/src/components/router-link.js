import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const RouterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
const RouterNavLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

export default RouterLink;
export {
  RouterNavLink,
};

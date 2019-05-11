import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

/**
 * The common navbar ui used throughout the application.
 * @param props Properties passed to the Navbar.
 * @return The HTML for the nav bar.
 */
const Navbar = props => {
  return (
    <div className='Navbar'>
      <nav>
        <ul>
          <li>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'>About Our Team</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default withRouter(Navbar);

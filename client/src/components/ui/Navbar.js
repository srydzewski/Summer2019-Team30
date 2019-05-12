import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { SERVER_OK } from 'constants/webcodes.js';
import { ABOUT, HOME, LOGIN, LOGIN_STATUS, LOGOUT } from 'constants/links.js';

/** The common navbar ui used throughout the application. */
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /** Whether this navbar is fetching login status. */
      isFetching: false,
      /** Whether the user is logged in. */
      isLoggedIn: null,
      /** The user's email. */
      email: null
    };
  }

  /** React lifecycle. */
  componentDidMount = () => {
    this.setState({ ...this.state, isFetching: true });
    this.fetchLoginStatus();
  };

  /** Fetches the login status of the current user. */
  fetchLoginStatus = () =>
    fetch(LOGIN_STATUS)
      .then(response => {
        return response.status === SERVER_OK ? response.json() : null;
      })
      .then(status => {
        if (status) {
          this.setState({
            ...this.state,
            isFetching: false,
            isLoggedIn: status.isLoggedIn,
            email: status.email
          });
        } else {
          console.log('Error: Server is unavailable.');
        }
      });

  /** Renders a login or logout button depending on the user's login status. */
  renderLoginLogoutUi = () => {
    const { isFetching, isLoggedIn, email } = this.state;
    return !isFetching && isLoggedIn && email ? (
      // The user has logged in successfully.
      <a href={LOGOUT}>Logout</a>
    ) : (
      <a href={LOGIN}>Sign in</a>
    );
  };

  /** React lifecycle. */
  render = () => {
    return (
      <div className='Navbar'>
        <nav>
          <ul>
            <li>
              <NavLink exact to={HOME}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to={ABOUT}>
                About Our Team
              </NavLink>
            </li>
            <li>{this.renderLoginLogoutUi()}</li>
          </ul>
        </nav>
      </div>
    );
  };
}

export default NavBar;

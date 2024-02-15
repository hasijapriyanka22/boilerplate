import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';
import './header.css';
import { NavBar } from '../NavBar/NavBar';

export const Header = ({ 
  logo, 
  heading, 
  user, 
  onLogin, 
  onLogout, 
  onCreateAccount, 
  showNavBar,
  navBarComponent,
}) => (
  <header>
    <div className="header">
      <div>
        {logo}
        <h1>{heading}</h1>
        {showNavBar && <NavBar component={navBarComponent}/>}
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  logo: PropTypes.element,
  heading: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  showNavBar: PropTypes.bool,
  navBarComponent: PropTypes.element
};

Header.defaultProps = {
  user: null,
  showNavBar: false,
};

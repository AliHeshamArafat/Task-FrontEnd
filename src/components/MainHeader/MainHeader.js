import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Movie Filter</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
      <h1>{props.heading}</h1>
    </header>
  );
};

export default MainHeader;

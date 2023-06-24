import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import MovieCon from '../MovieLibrary/MovieCon';

const Home = (props) => {
  return (
    <div>
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <MovieCon />
    </Card>
    </div>
  );
};

export default Home;

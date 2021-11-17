import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/CreatePets';
import ViewPets from '../components/ListPets';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/listPets' component={ViewPets}></Route>
    </Switch>
  );
}

export default Main;
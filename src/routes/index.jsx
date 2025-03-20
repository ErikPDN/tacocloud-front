import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/login';
import Page404 from '../pages/page404';
import Home from '../pages/home';

export default function Routes() {
  return (
    <Switch>
      <MyRoute path="/login" exact component={Login} />
      <MyRoute path="/" exact component={Home} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

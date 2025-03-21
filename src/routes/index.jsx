import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/login';
import Register from '../pages/register';
import Page404 from '../pages/page404';
import Design from '../pages/design';
import Orders from '../pages/orders';

export default function Routes() {
  return (
    <Switch>
      <MyRoute path="/login" exact component={Login} />
      <MyRoute path="/register" exact component={Register} />
      <MyRoute path="/" exact component={Design} />
      <MyRoute path="/orders" exact component={Orders} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

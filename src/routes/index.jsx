import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/login';
import Register from '../pages/register';
import Page404 from '../pages/page404';
import Design from '../pages/design';
import Orders from '../pages/orders';
import User from '../pages/user';

export default function Routes() {
  return (
    <Switch>
      <MyRoute path="/login" exact component={Login} isClosed={false} />
      <MyRoute path="/register" exact component={Register} isClosed={false} />
      <MyRoute path="/user/:id/edit" exact component={User} isClosed />
      <MyRoute path="/" exact component={Design} isClosed />
      <MyRoute path="/orders" exact component={Orders} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

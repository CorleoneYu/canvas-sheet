import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import TableList from '../../table';
import Card from '../card';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/table" component={TableList} />
        <Route path="/card" component={Card} />
        <Redirect from="*" to="/table" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

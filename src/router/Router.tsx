import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import TableList from '../table/render-dom';
import Editor from '../editor';
import Di from '../di';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/table-dom" component={TableList} />
                <Route path="/editor" component={Editor} />
                <Route path="/di" component={Di} />
                <Redirect from="*" to="/table-dom" />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

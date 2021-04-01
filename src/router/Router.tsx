import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import TableList from '@/cool-table/render-dom';
import Editor from '@/editor';
import Di from '@/di';
import TableCanvas from '@/cool-table/render-canvas';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/table-dom" component={TableList} />
                <Route path="/table-canvas" component={TableCanvas} />
                <Route path="/editor" component={Editor} />
                <Route path="/di" component={Di} />
                <Redirect from="*" to="/table-canvas" />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

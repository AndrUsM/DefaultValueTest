import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { IndexPage } from '../../pages';

export function AppRouterComponent() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexPage} />
            </Switch>
        </BrowserRouter>
    )
}
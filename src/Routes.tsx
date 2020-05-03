import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';
import ProjectsDashboard from './pages/Projects/ProjectsDashboard';

export const RoutedContent = () => {
    return (
        <Switch>
            <Redirect from="/" to="/pages/projects" exact={true} />
            <Route path="/pages/projects" exact component={ProjectsDashboard} />
        </Switch>
    )
}

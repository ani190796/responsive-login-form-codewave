import React from 'react';
import { Route, Switch } from "react-router-dom";
import Hospital from './pages/Hospital';

function AppRouter() {
  return (
            <>
                <Switch>
                      <Route exact path="/" component={Hospital} />
                </Switch>
            </>
        );
}

export default AppRouter;

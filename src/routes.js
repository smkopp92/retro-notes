import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavbarContainer from './containers/NavbarContainer';

let routes = (
  <div>
    <Switch>
      <Route path="/" component={NavbarContainer} />
    </Switch>
  </div>
);

export default routes;

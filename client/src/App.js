// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type { Location } from 'history';
import Controller from './Controller';
import Buzzer from './Buzzer';

type Props = {
  Router: React$ComponentType<{
    children: React$Element<any>,
    onListen?: (location: Location) => any,
  }>,
};

function App({ Router }: Props) {
  return (
    <Router>
      <Switch>
        <Route path="/controller" exact render={() => <Controller />} />
        <Route path="/" render={() => <Buzzer />} />
      </Switch>
    </Router>
  );
}

export default App;

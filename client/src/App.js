// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Pane } from 'evergreen-ui';
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
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      widht="100vw"
      height="100vh"
    >
      <Router>
        <Switch>
          <Route path="/controller" exact render={() => <Controller />} />
          <Route path="/" render={() => <Buzzer />} />
        </Switch>
      </Router>
    </Pane>
  );
}

export default App;

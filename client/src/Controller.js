// @flow
import React from 'react';
import { Pane } from 'evergreen-ui';
import ActiveBuzzes from './ActiveBuzzes';
import Reset from './Reset';

function Controller() {
  return (
    <Pane>
      <ActiveBuzzes />
      <Reset />
    </Pane>
  );
}

export default Controller;

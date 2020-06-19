// @flow
import React from 'react';
import { Pane } from 'evergreen-ui';
import ActiveBuzzes from './ActiveBuzzes';

function Controller() {
  return (
    <Pane background="rgba(255,255,255,0.6)" padding={24}>
      <ActiveBuzzes />
    </Pane>
  );
}

export default Controller;

// @flow
import React, { useState } from 'react';
import { Pane, Button } from 'evergreen-ui';

function ActiveBuzzes() {
  const [buzzes, setBuzzes] = useState([]);

  const getThem = () => {
    fetch('/api/buzzes')
      .then((resp) => resp.json())
      .then((data) => setBuzzes(data));
  };

  return (
    <Pane>
      <Pane>
        <Button onClick={getThem} iconBefore="refresh">
          Refresh
        </Button>
      </Pane>
      <Pane>
        {buzzes.map((buzz) => (
          <Pane>{buzz.name}</Pane>
        ))}
      </Pane>
    </Pane>
  );
}

export default ActiveBuzzes;

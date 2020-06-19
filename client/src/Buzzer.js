// @flow
import React, { useState } from 'react';
import { Pane, TextInput, Button } from 'evergreen-ui';

function Buzzer() {
  const [name, setName] = useState('');

  const buzz = () => {
    fetch('/api/buzz', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });
  };

  return (
    <Pane>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button margin={60} intent="danger" appearence="primary" onClick={buzz}>
        Buzz
      </Button>
    </Pane>
  );
}

export default Buzzer;

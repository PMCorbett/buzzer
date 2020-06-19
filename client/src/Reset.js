// @flow
import React, { useState } from 'react';
import { Pane, Button } from 'evergreen-ui';

function Reset() {
  const [isLoading, setIsLoading] = useState(false);

  const reset = () => {
    setIsLoading(true);

    fetch('/api/reset', {
      method: 'POST',
    }).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <Pane>
      <Button
        onClick={reset}
        intent="danger"
        appearence="primary"
        isLoading={isLoading}
      >
        Reset
      </Button>
    </Pane>
  );
}

export default Reset;

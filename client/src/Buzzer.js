// @flow
import React, { useState, useRef } from 'react';
import { Pane, TextInput, Button, Heading } from 'evergreen-ui';

function Buzzer() {
  const audioRef = useRef(null);
  const [name, setName] = useState('');
  const [nameIsSet, setNameIsSet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const buzz = () => {
    setIsLoading(true);

    if (audioRef.current) {
      audioRef.current.play();
    }

    fetch('/api/buzz', {
      method: 'POST',
      body: JSON.stringify({ name }),
    }).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <Pane background="rgba(255,255,255,0.6)" padding={24}>
      <audio ref={audioRef} src="/horn.mp3" />
      {nameIsSet ? (
        <Pane display="flex" flexDirection="column" alignItems="center">
          <Heading marginBottom={24}>{name}</Heading>
          <Heading>Buzz when you know the answer</Heading>
          <Button
            isLoading={isLoading}
            marginTop={24}
            intent="danger"
            appearance="primary"
            onClick={buzz}
            disabled={name === ''}
            height={56}
            iconBefore="cell-tower"
          >
            Buzz
          </Button>
        </Pane>
      ) : (
        <Pane display="flex" flexDirection="column" alignItems="center">
          <Heading marginBottom={24}>
            Please enter your name to enter the game
          </Heading>
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={() => setNameIsSet(true)} marginTop={24}>
            Set name
          </Button>
        </Pane>
      )}
    </Pane>
  );
}

export default Buzzer;

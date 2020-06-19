// @flow
import * as R from 'ramda';
import React, { useState, useEffect } from 'react';
import { Pane, Button, Text, Strong, Small } from 'evergreen-ui';
import moment from 'moment';
import Reset from './Reset';

function ActiveBuzzes() {
  const [buzzes, setBuzzes] = useState([]);

  const getThem = () => {
    fetch('/api/buzzes')
      .then((resp) => resp.json())
      .then(R.sortBy(R.prop('timestamp')))
      .then((data) => setBuzzes(data));
  };

  useEffect(() => {
    getThem();
  }, []);

  return (
    <Pane display="flex" flexDirection="column" alignItems="center">
      <Pane>
        <Button onClick={getThem} iconBefore="refresh">
          Refresh
        </Button>
      </Pane>
      <Pane background="#fff" padding={12} marginTop={12} marginBottom={12}>
        {buzzes.map((buzz, i) => (
          <Pane key={buzz.timestamp}>
            <Text>
              {i + 1} : <Strong>{buzz.name}</Strong> -{' '}
              <Small>{moment().diff(moment(+buzz.timestamp), 'seconds')}</Small>
            </Text>
          </Pane>
        ))}
      </Pane>
      <Reset refetch={getThem} />
    </Pane>
  );
}

export default ActiveBuzzes;

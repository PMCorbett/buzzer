// @flow
import React, { PureComponent } from 'react';
import { Router as ReactRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import type { Location } from 'history';

type Props = {
  children: React$Element<any>,
  onListen?: (location: Location) => any,
};

const history = createBrowserHistory();

const getUserConfirmation = (message, callback) => {
  console.log('message', message);
  console.log('message', message());

  callback(false);
};

class Router extends PureComponent<Props> {
  static defaultProps = {
    onListen: () => {},
  };

  componentDidMount() {
    const { onListen } = this.props;

    if (onListen) {
      history.listen(onListen);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <ReactRouter getUserConfirmation={getUserConfirmation} history={history}>
        {children}
      </ReactRouter>
    );
  }
}

export default Router;

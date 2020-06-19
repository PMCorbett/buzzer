// @flow
import type { NetworkStatus, ApolloQueryResult } from 'react-apollo';

export type LoadingPropType = {
  rowCount: number,
  type: 'spinner' | 'list' | 'detail' | 'box',
  customComponent?: ?React$Element<any>,
};

export type V = { [key: string]: any };

export type RefetchType = (variables?: V) => Promise<ApolloQueryResult<any>>;

export type QueryContext = {
  refetch: RefetchType,
  loading: boolean,
  networkStatus: NetworkStatus,
};

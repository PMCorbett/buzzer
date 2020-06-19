// @flow
import type {
  APIGatewayEvent,
  Context,
  ProxyCallback,
} from 'flow-aws-lambda/index';

export default (
  event: APIGatewayEvent<null>,
  context: Context,
  callback: ProxyCallback
) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ buzz: true }),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  });
};

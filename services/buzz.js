// @flow
import AWS from 'aws-sdk';
import type { APIGatewayEvent } from 'flow-aws-lambda/index';
import uuid from 'uuid';

export default (event: APIGatewayEvent<any>) => {
  const { name } = JSON.parse(
    event.body || JSON.stringify({ name: 'No Name' })
  );

  const dynamodb = new AWS.DynamoDB();

  let tableName = process.env.BUZZ_TABLE || 'devBuzzTable';

  if (tableName.search(/\[/) > -1) {
    tableName = 'devBuzzTable';
  }

  console.log('tableName', tableName, typeof tableName);

  const params = {
    TableName: tableName,
    Item: {
      name: {
        S: name,
      },
      email: {
        S: name,
      },
      uuid: {
        S: uuid(),
      },
      timestamp: { S: `${new Date().getTime()}` },
    },
  };

  return dynamodb
    .putItem(params)
    .promise()
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify(data),
    }));
};

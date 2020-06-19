// @flow
import AWS from 'aws-sdk';

export default () => {
  const dynamodb = new AWS.DynamoDB();

  let tableName = process.env.BUZZ_TABLE || 'devBuzzTable';

  if (tableName.search(/\[/) > -1) {
    tableName = 'devBuzzTable';
  }

  console.log('tableName', tableName, typeof tableName);

  const params = {
    TableName: tableName,
  };

  return dynamodb
    .scan(params)
    .promise()
    .then((data) => {
      const { Items: items } = data;

      console.log('data', data);

      const serializedItems = items.map((item) => ({
        name: item.name.S,
        timestamp: item.timestamp.S,
      }));

      return {
        statusCode: 200,
        body: JSON.stringify(serializedItems),
      };
    });
};

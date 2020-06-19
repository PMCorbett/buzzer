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
    .then(async (data) => {
      const { Items: items } = data;

      console.log('data', data);

      const deleted = await Promise.all(
        items.map((item) => {
          console.log('item', item);

          const deleteParams = {
            TableName: tableName,
            Key: {
              email: {
                S: item.email.S,
              },
              uuid: {
                S: item.uuid.S,
              },
            },
          };

          return dynamodb.deleteItem(deleteParams).promise();
        })
      );

      return {
        statusCode: 200,
        body: JSON.stringify(deleted),
      };
    });
};

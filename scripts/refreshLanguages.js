const AWS = require('aws-sdk');
const { argv } = require('yargs');

const lambda = new AWS.Lambda({ region: 'eu-west-2' });

const branchName = argv._[0];

const params = {
  FunctionName: `lab-${branchName}-branch-refreshLanguages`,
  InvocationType: 'Event',
  Payload: '',
};

lambda
  .invoke(params)
  .promise()
  .then((result) => {
    console.log(result);
  });

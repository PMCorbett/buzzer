const AWS = require('aws-sdk');
const R = require('ramda');
const chalk = require('chalk');
const simpleGit = require('simple-git/promise')(process.cwd());

const cloudformation = new AWS.CloudFormation({ region: 'eu-west-2' });
const s3 = new AWS.S3({ region: 'eu-west-2' });

const clearBucket = (client, bucket) =>
  client
    .listObjects({ Bucket: bucket })
    .promise()
    .then((data) => {
      const items = data.Contents;

      return Promise.all(
        items.map((item) =>
          client.deleteObject({ Bucket: bucket, Key: item.Key }).promise()
        )
      );
    });

cloudformation
  .listStacks({ StackStatusFilter: ['UPDATE_COMPLETE', 'CREATE_COMPLETE'] })
  .promise()
  .then(({ StackSummaries }) => {
    const stacks = R.filter(
      R.propSatisfies(R.test(/^lab-.*-branch$/), 'StackName'),
      StackSummaries
    );

    simpleGit.branch(['--remote']).then(({ all: allBranches }) => {
      const branches = R.compose(
        R.map(
          R.compose(
            (bn) => `lab-${bn}-branch`,
            R.last,
            R.split('/')
          )
        ),
        R.without('origin/develop'),
        R.without('origin/master')
      )(allBranches);

      const toDelete = R.reject(
        R.propSatisfies((x) => R.includes(x, branches), 'StackName'),
        stacks
      );

      if (R.isEmpty(toDelete)) {
        console.log(chalk.green('Nothing to delete'));

        return;
      }

      console.log(
        chalk.yellow(
          'Stacks To Delete: ',
          toDelete.map((d) => d.StackName).join(', ')
        )
      );

      toDelete.map((stack) =>
        cloudformation
          .listStackResources({ StackName: stack.StackName })
          .promise()
          .then(({ StackResourceSummaries }) => {
            const buckets = R.filter(
              R.propEq('ResourceType', 'AWS::S3::Bucket'),
              StackResourceSummaries
            );

            Promise.all(
              buckets.map((bucket) =>
                clearBucket(s3, bucket.PhysicalResourceId)
                  .then(() =>
                    s3
                      .deleteBucket({ Bucket: bucket.PhysicalResourceId })
                      .promise()
                      .catch((err) => {
                        console.log(chalk.red('error'), err);
                      })
                  )
                  .catch((err) => {
                    console.log(chalk.red('error'), err);
                  })
              )
            )
              .then(() =>
                cloudformation
                  .deleteStack({ StackName: stack.StackName })
                  .promise()
              )
              .then(() => {
                console.log(chalk.green(`Deleted Stack ${stack.StackName}`));
              })
              .catch((err) => {
                console.log(chalk.red('error'), err);
              });
          })
      );
    });
  });

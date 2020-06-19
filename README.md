# Lab [![CircleCI](https://circleci.com/gh/crowdlab-uk/lab.svg?style=svg)](https://circleci.com/gh/crowdlab-uk/lab)

Researcher Dashboard

# Dev Set up

## Clone it

## Install Serverless

`npm install -g serverless`

## NPM Install

`npm install`

## AWS Credential Set up

You need to have an AWS profile called `engage`, so serverless-offline can access all the resources, such as s3

```sh
  vim ~/.aws/credentials
```

add

```
[engage]
aws_access_key_id = xxxxxxxxxxxxx
aws_secret_access_key = xxxxxxxxxxxxx
```

The values are in 1Password called AWS EngageLocalDev

## Run it

`npm run dev` or `npm run dev:localgraph`

## Deploy it

Everything is deployed in circleci.

### Branch Deploys

Branch deploys happen for every commit on a branch. These use the staging graph and api

```
[branch-name]-lab.crowdlabtech.com
```

### Beta deploys

Beta deploys will happen for every commit on develop. These use the staging graph and api

```
crowdlab-beta-lab.crowdlabtech.com
tempo-beta-lab.crowdlabtech.com
momento-beta-lab.crowdlabtech.com
```

### Release candidate deploys

Release candidate deploys happen for every tag rc-abcdef that gets pushed.

To release a release candidate simply run `npm run rc` from the develop branch.

These use the production graph and api

```
crowdlab-rc.momentsdashboard.com
cymbol-rc.momentsdashboard.com
hub-rc.momentsdashboard.com
tempo-rc.momentsdashboard.com
```

### Master deploys

Any commits to master trigger the production build process but you do have to go in to circle ci and approve the build before it will finalise the release.

Releases are, under the hood, managed with git flow. But you can simply run `npm run release xx.xx.xx` from the develop branch.

These use the production graph and api

```
crowdlab.momentsdashboard.com
cymbol.momentsdashboard.com
hub.momentsdashboard.com
tempo.momentsdashboard.com
```

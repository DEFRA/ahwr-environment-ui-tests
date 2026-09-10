ahwr-environment-ui-tests

This repo is for running some environment specific tests against AHWR services in CDP.

- [Local](#local)
  - [Requirements](#requirements)
    - [Node.js](#nodejs)
  - [Setup](#setup)
  - [Running local tests](#running-local-tests)
  - [Debugging local tests](#debugging-local-tests)
- [Dependabot](#dependabot)
- [SonarCloud](#sonarcloud)
- [Licence](#licence)
  - [About the licence](#about-the-licence)

## Local Development

### Requirements

#### Node.js

Please install [Node.js](http://nodejs.org/) `>= v20` and [npm](https://nodejs.org/) `>= v9`. You will find it
easier to use the Node Version Manager [nvm](https://github.com/creationix/nvm)

To use the correct version of Node.js for this application, via nvm:

```bash
nvm use
```

### Setup

Install application dependencies:

```bash
npm install
```

### Running local tests

Make sure you have DEVELOPER_API_KEY, RUN_ENVIRONMENT, and ENVIRONMENT set in your .env file.

RUN_ENVIRONMENT will be "local" and ENVIRONMENT will typically be "dev" but it can be whatever environment you want to run against.

```bash
npm run test:local
```

### Debugging local tests

```bash
npm run test:local:debug
```

## Dependabot

Currently setup to work into four groups, so we don't have PRs per package. The updates run once a week, on a Monday. Except for the security group, which is advisory-triggered and ignores the schedule.

## SonarCloud

This project is set up to integrate with sonarcloud, and scans will be performed on all pull requests, and on
publish to main branch. We follow the quality gates as per DEFRA standards, and if coverage falls below the
acceptable level, or new issues are introduced the build will fail.

## Licence

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

<http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3>

The following attribution statement MUST be cited in your products and applications when using this information.

> Contains public sector information licensed under the Open Government licence v3

### About the licence

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable
information providers in the public sector to license the use and re-use of their information under a common open
licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.

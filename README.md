# cav
[![npm version](https://badge.fury.io/js/cav.svg)](https://badge.fury.io/js/cav)

A supporter for making your CLI.

## Install
```sh
$ npm i -S cav
```

## Examples
```js
#!/usr/bin/env node

// sample-cli

const Cav = require('cav');
const packageJson = require('./package.json');

const commands = {
  'deploy <to> <env>'            : 'Deploy to ec2.',
  'migrate <from> <to> <version>': 'Migrate data.',
  '-f'                           : '✊',
  '-c, --current-state'          : 'Show Current State.'
};

const cav = new Cav(commands, packageJson);

cav.start((args) => {
  console.log(args)
});
```

## Parse arguments
```sh
$ sample-cli deploy japan prod -f -c ok
```
```js
cav.start((args) => {
  console.log(JSON.stringify(args, null, 2));
  //  {
  //    "commands": {
  //      "deploy": {
  //        "to": "japan",
  //        "env": "prod"
  //      }
  //    },
  //    "options": {
  //      "f": true,
  //      "c": "ok"
  //    }
  //  }
});
```

## help
```
Version:    1.0.0

Usage:      sample-cli <commands> <options>

Commands:
            deploy <to> <env>                 Deploy to ec2.
            migrate <from> <to> <version>     Migrate data.
Options:
            -v, --version                     Display version.
            -h, --help                        Display help.
            -f                                ✊
            -c, --current-state               Show Current State.
```

#!/usr/bin/env node

'use strict';

const Cav = require('../lib');
const packageJson = require('./package.json');

const commands = {
  'deploy <to> <env>'            : 'Deploy to ec2.',
  'migrate <from> <to> <version>': 'Migrate data.',
  '-f'                           : '✊',
  '-c, --current-state'          : 'Show Current State.'
};

const cav = new Cav(commands, packageJson);

cav.start((args) => {
  console.log(JSON.stringify(args, null, 2));
});

console.log(cav.help());

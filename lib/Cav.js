'use strict';

const parseArgs = require('minimist');
const parse = require('./parse');
const table = require('./table');

// [TODO] atuocomplete
// [TODO] allow default

const defaultList = {
  '-v, --version': 'Display version.',
  '-h, --help'   : 'Display help.'
};

class Cav {
  constructor(args, packageJson) {
    const combinedArgs = Object.assign({}, defaultList, args);

    this.list = Object.keys(combinedArgs).reduce((prev, current) => {
      if (!~current.indexOf('-')) {
        prev.commands = Object.assign(prev.commands || {}, {
          [current]: combinedArgs[current]
        });
      }
      else {
        prev.options = Object.assign(prev.options || {}, {
          [current]: combinedArgs[current]
        });
      }
      return prev;
    }, {});

    this.packageJson = packageJson || {};
  }

  // [TODO] create defalt value
  start(cb) {
    const args = parseArgs(process.argv.slice(2));

    const parsedArgs = parse(args, this.list);

    if (args.v || args.version) {
      console.log(this.packageJson.version);
    }
    else if (args.h || args.help) {
      console.log(this.help());
    }
    else {
      cb(parsedArgs);
    }
  }

  help(theme) {
    const usage = `${Object.keys(this.packageJson.bin)[0] } ${
     this.list.hasOwnProperty('commands') ? '<commands>' : '' } ${
     this.list.hasOwnProperty('options') ? '<options>' : ''}`;

    const info = {
      usage,
      version: this.packageJson.version || 'unknown'
    };

    return table(this.list, info, theme);
  }

  autoComplete() {

    // default is true
  }
}

module.exports = Cav;

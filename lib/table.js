'use strict';

const Table = require('cli-table2');
const chalk = require('chalk');

const table = (list, info, theme) => {
  const table = new Table({
    chars: {
      'top'         : '', 'top-mid'     : '', 'top-left'    : '', 'top-right'   : '',
      'bottom'      : '', 'bottom-mid'  : '', 'bottom-left' : '', 'bottom-right': '',
      'left'        : '', 'left-mid'    : '', 'mid'         : '', 'mid-mid'     : '',
      'right'       : '', 'right-mid'   : '', 'middle'      : ' '
    }
  });

  table.push(
    [chalk.cyan.bold('Version:'), info.version],
    [chalk.cyan.bold('Usage:'), info.usage],
    [chalk.cyan.bold('Commands:')],
    ...Object.keys(list.commands || {}).map((key) =>
      ['', key, list.commands[key]]
    ),
    [chalk.cyan.bold('Options:')],
    ...Object.keys(list.options || {}).map((key) =>
      ['', key, list.options[key]]
    )
  );

  return table.toString();
};

module.exports = table;

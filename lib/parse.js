'use strict';

const parse = (args, list) => {
  const parsedArgs = Object.keys(args).reduce((prev, current) => {

    // commands
    if (current === '_') {
      const argument = args[current];
      const key = argument[0];

      // [TODO] fix
      const targetKey = Object.keys(list.commands || {}).find((e) => !!~e.indexOf(key));

      if (targetKey === undefined) return prev;
      const commandOptions = targetKey.match(/(<.+?>)/g);
      const commandOptionsList = commandOptions.reduce((prev, current, i) => {
        prev[current.split(/<(.+)>/)[1]] = argument[i + 1];

        return prev;
      }, {});

      prev.commands = Object.assign(prev.commands ||{}, {
        [argument[0]]: commandOptionsList
      });
    }

    // options
    else {

      // [TODO] fix
      const existed = Object.keys(list.options).some((e) =>
        ~e.indexOf(`-${current}`) || ~e.indexOf(`--${current}`)
      );

      if (existed) {
        prev.options = Object.assign(prev.options || {}, {
          [current]: args[current]
        });
      }
    }
    return prev;
  }, {});

  return parsedArgs;
};

module.exports = parse;

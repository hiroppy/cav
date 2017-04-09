import test from 'ava';
import Cav from '../lib';

test('should return empty object when there is no argument', (t) => {
  const cav = new Cav();
  process.argv = [];

  cav.start((args) => {
    t.deepEqual(args, {});
  });
});

// test('should show default help', (t) => {
//   const cav = new Cav();
//   const expected = `Version:    unknown
//
// Usage:      command  <A>  <options>
//
// Commands:
//
// Options:
//            -v, --version             Display version.
//            -h, --help                Display help.
// `;
//
//   console.log(cav.help());
//   t.is(cav.help(), expected);
// });

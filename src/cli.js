import arg from 'arg';
import app from './app';

/**
 * -c: draws a single card
 * -h: print the help
 * -a: lists the existing spreads
 * -l `path`: adds the spread in `path` to the program
 * -s `value`: choose a spread with name `value`
 */
function parseArgs(rawArgs) {
  const args = arg({
    '-c': Boolean,
    '-h': Boolean,
    '-a': Boolean,
    '-l': String,
    '-s': String
  },{ argv: rawArgs.slice(2) });

  return {
    card: args['-c'] || args['_'][0] || false,
    help: args['-h'],
    list: args['-a'],
    load: args['-l'],
    spread: args['-s']
  };
}

export function cli(args) {
  app().run(parseArgs(args));
}

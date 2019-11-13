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
    help: args['-h'] || (!rawArgs || rawArgs.length <= 2),
    card: args['-c'],
    list: args['-a'],
    spreadToLoad: args['-l'],
    spread: args['-s']
  };
}

export function cli(args) {
  try {
    app(parseArgs(args));
  }
  catch (err) {
    if (err.code === 'ARG_UNKNOWN_OPTION') {
      console.error('Error: Unrecognized option');
    }
    else if (err.toString().includes('argument: -l')) {
      console.error('Error: A path must be supplied');
    }
    else if (err.toString().includes('argument: -s')) {
      console.error('Error: A spread to use must be specified');
    }
  }
  
}

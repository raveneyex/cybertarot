import arg from 'arg';

function parseArgs(rawArgs) {
  const args = arg({
    '--card': Boolean
  },{ argv: rawArgs.slice(2) });

  return {
    card: args['--card']
  };
}

export function cli(args) {
  const options = parseArgs(args);
  console.log("Options:", options);
}
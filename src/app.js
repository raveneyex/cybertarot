import * as printer from './utils/printer';
import spreads from './spreads/spreads';
import { readSpread, drawSingleCard } from './tarot/tarot';

const run = async function run(options) {
    const { help, card, list, load, spread } = options;

    if (help) {
        printer.printHelp();
        return;
    }

    if (spread) {
        const chosenSpread = spreads.get(spread);
        const result = readSpread(chosenSpread);
        printer.printReading(result);
        return;
    }

    if (card) {
        const card = drawSingleCard();
        printer.printSingleCard(card);
        return;
    }

    if (list) {
        const files = await spreads.list();
        printer.printSpreads(files);
        return;
    }

    if (load) {
        console.log('Load');
        return;
        // TBD
    }
};

export default run;

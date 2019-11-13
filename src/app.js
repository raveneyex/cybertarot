import { printHelp, printReading, printSingleCard, printSpreads} from './utils/printer';
import { readSpread, drawSingleCard } from './tarot/tarot';
import { getSpread, listSpreads, loadSpread } from './spreads/spreads';

async function app(options) {
    const { help, card, list, spreadToLoad, spread } = options;

    if (help) {
        printHelp();
    }

    else if (spread) {
        const chosenSpread = getSpread(spread);
        if (chosenSpread) {
            printReading(readSpread(chosenSpread));
        }
    }

    else if (card) {
        const card = drawSingleCard();
        printSingleCard(card);
    }

    else if (list) {
        const files = await listSpreads();
        if (files) {
            printSpreads(files);
        }
    }

    else if (spreadToLoad) {
        loadSpread(spreadToLoad);
    }
}

export default app;

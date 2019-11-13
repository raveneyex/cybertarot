import { printHelp, printReading, printSingleCard, printSpreads} from './utils/printer';
import { readSpread, drawSingleCard } from './tarot/tarot';
import spreads from './spreads/spreads';

const app = async function run(options) {
    const { help, card, list, spreadToLoad, spread } = options;

    if (help) {
        printHelp();
        return;
    }

    if (spread) {
        const chosenSpread = spreads.get(spread);
        const result = readSpread(chosenSpread);
        printReading(result);
        return;
    }

    if (card) {
        const card = drawSingleCard();
        printSingleCard(card);
        return;
    }

    if (list) {
        const files = await spreads.list();
        printSpreads(files);
        return;
    }

    if (spreadToLoad) {
        spreads.load(spreadToLoad);
        return
        // TBD
    }
};

export default app;

import printer from './utils/printer';
import spreads from './spreads/spreads';
import tarot from './tarot/tarot';

function app() {
    const run = async (options) => {
        const { help, card, list, load, spread } = options;

        if (help) {
            return printer.printHelp();
        }

        if (spread) {
            const chosenSpread = spreads.get(spread);
            const result = tarot().read(chosenSpread);
            printer.printReading(result);
            return;
        }

        if (card) {
            const card = tarot().draw();
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

    return { run };
}

export default app;

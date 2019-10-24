import printer from './utils/printer';
import spreads from './spreads/spreads';
import tarot from './tarot/tarot';

function app() {
    const run = async (options) => {
        const { help, card, list, load, spread } = options;

        if (help) {
            return printHelp();
        }

        if (spread) {
            return tarot(spreads.get(spread)).reveal();
        }

        // TBD: Step by step reveal
        // if (spread && singleStep) {
        //     
        // }

        if (card) {
            return tarot().draw();
        }

        if (list) {
            const files = await spreads.list();
            printer.printSpreads(files);
            return;
        }

        if (load) {
            // TBD
        }
    };

    return { run };
}

export default app;

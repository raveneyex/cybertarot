import printer from './utils/printer';
import spreads from './spreads/spreads';
import tarot from './tarot/tarot';

function app() {
    const run = async (options) => {
        const { help, card, list, load, spread } = options;

        if (help) {
            console.log("Help");
            return printer.printHelp();
        }

        if (spread) {
            console.log("Reading");
            return tarot(spreads.get(spread)).reveal();
        }

        // TBD: Step by step reveal
        // if (spread && singleStep) {
        //     console.log("Step by Step Reading");
        // }

        if (card) {
            console.log("Card");
            return tarot().draw();
        }

        if (list) {
            console.log("List");
            const files = await spreads.list();
            printer.printSpreads(files);
            return;
        }

        if (load) {
            console.log("Load");
            // TBD
        }
    };

    return { run };
}

export default app;

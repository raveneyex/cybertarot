const printSpreads = (files) => {
    console.log("\tThe available spreads are:");
    files.forEach(filePath => {
        console.log(" * ", filePath.split('/').pop());
    });
}

const printHelp = () => {
    console.log("TBD");
}

const printSingleCard = (card) => {
    if (card.arcana === 'MAJOR') {
        printMajorArcana(card);
    } else {
        printMinorArcana(card);
    }
}

const printMinorArcana = (card) => {
    console.log(`\t\t${card.name} ${printReversed(card)}\n`);
}

const printMajorArcana = (card) => {
    const {name, number} = card;
    console.log(`\t\t${number} - ${name} ${printReversed(card)}\n`);
}

const printReversed = (card) => {
    return card.reversed ? '(reversed)' : '';
}

const printSpread = (spread) => {
    Object.keys(spread).forEach(key => {
        console.log(`\t${key.toLocaleUpperCase()}:`);
        printSingleCard(spread[key]);
    });
}

const printer = {
    printHelp,
    printSpreads,
    printSingleCard,
    printSpread
};

export default printer;

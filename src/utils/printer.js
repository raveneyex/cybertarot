const printSpreads = (files) => {
    console.log("The available spreads are:");
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
    console.log(`${card.name} ${printReversed(card)}`);
}

const printMajorArcana = (card) => {
    const {name, number} = card;
    console.log(`${number} - ${name} ${printReversed(card)}`);
}

const printReversed = (card) => {
    return card.reversed ? '(reversed)' : '';
}

const printSpread = (spread) => {
    for (key in spread) {
        console.log(`\t${key}:`);
        printSingleCard(spread[key]);
    }
}


const printer = {
    printHelp,
    printSpreads,
    printSingleCard,
    printSpread
};

export default printer;

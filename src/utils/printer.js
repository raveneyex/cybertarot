const printSpreads = (files) => {
    console.log("\tThe available spreads are:");
    files.forEach(filePath => {
        console.log(" * ", filePath.split('/').pop());
    });
}

const printHelp = () => {
    console.log("\n\tHELP\n");
    console.log("\t* Use the option -c if you want a single card:");
    console.log("\t\tcybertarot -c");
    console.log("\t* Use the option -h to print this help:");
    console.log("\t\tcybertarot -h");
    console.log("\t* Use the option -a if you want to list all the available spreads:");
    console.log("\t\tcybertarot -a");
    console.log("\t* Use the option -l `path` if you want to load the spread in `path`:");
    console.log("\t\tcybertarot -l ~/Documents/newSpread.json");
    console.log("\t* Use the option -s `spread` to do a reading using `spread`:");
    console.log("\t\tcybertarot -s pentagram");
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

const printReading = (spread) => {
    Object.keys(spread).forEach(key => {
        console.log(`\t${key.toLocaleUpperCase()}:`);
        printSingleCard(spread[key]);
    });
}

const printer = {
    printHelp,
    printSpreads,
    printSingleCard,
    printReading
};

export default printer;

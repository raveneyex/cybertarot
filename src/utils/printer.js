import chalk from 'chalk';
import {RAVENEYEX_SIGIL_40x40_INVERTED} from './sigil-logo';

const CLEAN_SCREEN_CHARACTER = '\x1Bc';
const TAB = '\t';

const asTitle = (message) => chalk.bgBlack.red.bold(message);

const asHighlight = (message) => chalk.bgBlack.red(message);

const printMessage = (message) => {
    console.log(CLEAN_SCREEN_CHARACTER);
    console.log(asTitle(RAVENEYEX_SIGIL_40x40_INVERTED));
    setTimeout(() => {
        console.log(CLEAN_SCREEN_CHARACTER);
        console.log(message);
    }, 500);
};

const printSpreads = (files) => {
    const title = asTitle(`${TAB}* AVAILABLE SPREADS *`);
    const fileNames = files
        .map(filePath => `${TAB}*  ${filePath.split('/').pop()}\n`)
        .join('');
    const message = `${title}\n\n${fileNames}`;
    printMessage(message);
};

const printHelp = () => {
    const help = `
        ${asTitle("* AVAILABLE SPREADS *")}


        * Use the option -c if you want a single card:
            ${asHighlight("cybertarot -c")}

        * Use the option -h to print this help:
            ${asHighlight("cybertarot -h")}

        * Use the option -a if you want to list all the available spreads:
            ${asHighlight("cybertarot -a")}

        * Use the option -l \`path\` if you want to load the spread in \`path\`:
            ${asHighlight("cybertarot -l ~/Documents/newSpread.json")}

        * Use the option -s \`spread\` to do a reading using \`spread\`:
            ${asHighlight("cybertarot -s pentagram")}
    `;
    printMessage(help);
};

const printSingleCard = (card) => {
    if (card.arcana === 'MAJOR') {
        printMajorArcana(card);
    } else {
        printMinorArcana(card);
    }
};

const printMinorArcana = (card) => {
    console.log(`\t\t${card.name} ${printReversed(card)}\n`);
};

const printMajorArcana = (card) => {
    const {name, number} = card;
    console.log(`\t\t${number} - ${name} ${printReversed(card)}\n`);
};

const printReversed = (card) => {
    return card.reversed
        ? chalk.bgBlack.redBright('(reversed)')
        : '';
};

const printReading = (spread) => {
    Object.keys(spread).forEach(key => {
        console.log(`\t${key.toLocaleUpperCase()}:`);
        printSingleCard(spread[key]);
    });
};

const printer = {
    printHelp,
    printSpreads,
    printSingleCard,
    printReading
};

export default printer;

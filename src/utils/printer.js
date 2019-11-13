import chalk from 'chalk';
import {RAVENEYEX_SIGIL_40x40_INVERTED} from './sigil-logo';

const CLEAN_SCREEN_CHARACTER = '\x1Bc';

const asTitle = (message) => chalk.bgBlack.red.bold(message);

const asHighlight = (message) => chalk.bgBlack.red(message);

const asKey = (message) => chalk.white.inverse.bold(message.toLocaleUpperCase());

const asValue = (message) => chalk.bgBlack.white.underline(message);

const printReversed = (card) => card.reversed ? asHighlight('(reversed)') : '';

const asMajorArcana = (card) => {
    const {name, number} = card;
    const cardName = asValue(`${number} - ${name}`);
    const reversedBagde = printReversed(card);

    return `${cardName} ${reversedBagde}`;
};

const asMinorArcana = (card) => {
    const { name } = card;
    const cardName = asValue(name);
    const reversedBagde = printReversed(card);

    return `${cardName} ${reversedBagde}`;
};

const printCard = (card) => {
    switch (card.arcana) {
        case 'MAJOR':
            return asMajorArcana(card);

        case 'MINOR':
            return asMinorArcana(card);

        default:
            break;
    }
};

const printMessage = (message) => {
    console.log(CLEAN_SCREEN_CHARACTER);
    console.log(asTitle(RAVENEYEX_SIGIL_40x40_INVERTED));
    setTimeout(() => {
        console.log(CLEAN_SCREEN_CHARACTER);
        console.log(message);
    }, 9);
};

const printSpreads = (files) => {
    const title = asTitle(`\t* AVAILABLE SPREADS *`);
    const fileNames = files
        .map(filePath => `\t*  ${filePath.split('/').pop()}\n`)
        .join('');
    const message = `${title}\n\n${fileNames}`;
    printMessage(message);
};

const printHelp = () => {
    const help = `
        ${asTitle('* HELP *')}


        * Use the option -c if you want a single card:
            ${asHighlight('cybertarot -c')}

        * Use the option -h to print this help:
            ${asHighlight('cybertarot -h')}

        * Use the option -a if you want to list all the available spreads:
            ${asHighlight('cybertarot -a')}

        * Use the option -l \`path\` if you want to load the spread in \`path\`:
            ${asHighlight('cybertarot -l ~/Documents/newSpread.json')}

        * Use the option -s \`spread\` to do a reading using \`spread\`:
            ${asHighlight('cybertarot -s pentagram')}
    `;
    printMessage(help);
};

const printReading = (spread) => {
    const title = asTitle(`\t* ${spread._name.toLocaleUpperCase()} *\n\n`)
    const entries = Object
        .keys(spread)
        .filter(key => !key.startsWith('_'))
        .map(key =>
            `\t${asKey(key)}\t${printCard(spread[key])}`)
        .join('\n\n');
    printMessage(`${title}\n${entries}`);
}

const printSingleCard = (card) => {
    const message = `
        ${asTitle('* CARD OF THE MOMENT *')}

        ${printCard(card)}
    `;
    printMessage(message);
};

const printer = {
    printHelp,
    printSpreads,
    printSingleCard,
    printReading
};

export default printer;

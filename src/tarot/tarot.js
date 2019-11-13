import getDeck from './deck';

export const readSpread = ({ name, structure }) => {
    const deck = getDeck();

    return Object
        .keys(structure)
        .map(slot => ({ [slot]: deck.drawCard() }))
        .reduce((acc, curr) => ({...acc, ...curr}), { _name: name });
};

export const drawSingleCard = () => getDeck().drawCard();

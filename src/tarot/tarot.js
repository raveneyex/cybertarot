import getDeck from './deck';

export const readSpread = ({ name, structure }) => {
    const deck = getDeck();
    const spread = { _name: name };

    Object
        .keys(structure)
        .forEach((slot) => spread[slot] = deck.drawCard());

    return spread;
};

export const drawSingleCard = () => getDeck().drawCard();

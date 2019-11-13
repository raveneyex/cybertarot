import getDeck from './deck';

function tarot() {
    const draw = () => getDeck().drawCard();
    const read = ({ name, structure }) => {
        const deck = getDeck();
        const spread = { _name: name };

        const fillSlot = (slot) => spread[slot] = deck.drawCard();
        Object
            .keys(structure)
            .forEach(fillSlot)

        return spread;
    };

    return { draw, read };
}

export default tarot;

import getDeck from './deck';

function tarot({ name, structure }) {
    if (!structure) {
        // If no spread is chosen all you can do is ask for a random card
        return {
            draw: () => getDeck().drawCard()
        };
    }

    
    /* Inner State */
    const spread = { _name: name };
    const deck = getDeck();
    const slots = Object.keys(structure);

    /* Functions */
    const getSpread = () => spread;
    const fillSlot = (slot) => spread[slot] = deck.drawCard();
    const fillSpread = () => [...slots].forEach(fillSlot);
    const reveal = () => {
        fillSpread();
        return getSpread();
    };
    const fillNextSlot = () => {
        const nextSlot = slots.shift();
        if (nextSlot) {
            fillSlot(nextSlot);
        }
    };
    
    /* API */
    return { fillNextSlot, reveal };
}

export default tarot;

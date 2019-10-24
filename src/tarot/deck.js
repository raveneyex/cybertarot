import { shuffle } from 'underscore';
import { getRandomBoolean, getRandomNumber } from '../utils/utils';
import DECK from './cards';

const flipCard = (card) => ({ ...card, reversed: getRandomBoolean() });

const flipCards = (cards) => cards.map(flipCard);

const shuffleDeck = (deck) => shuffle(flipCards(deck));

const getDeckIndex = (size) => getRandomNumber(size);

function deck() {
    // initial state: full deck
    const cards = shuffleDeck(DECK);
    // remove a random card from the deck and return it
    const drawCard = () => [...cards.splice(getDeckIndex(cards.length), 1)].shift();
    
    return { drawCard };
}

export default deck;

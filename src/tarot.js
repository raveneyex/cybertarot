/*
 * Golds: Cryptos
 * Wands: Peripherics
 * Swords: Scripts   
 * Cups: Drives
 */
import _ from 'underscore';
import {getRandomNumber} from './utils';

const THE_FOOL = Object.freeze({
    number: 0,
    name: 'The Fool'
});
const THE_MAGICIAN = Object.freeze({
    number: 1,
    name: 'The Magician'
});
const THE_HIGH_PRIESTESS = Object.freeze({
    number: 2,
    name: 'The High Priestess'
});
const THE_EMPRESS = Object.freeze({
    number: 3,
    name: 'The Empress'
});
const THE_EMPEROR = Object.freeze({
    number: 4,
    name: 'The Emperor'
});
const THE_HIEROPHANT = Object.freeze({
    number: 5,
    name: 'The Hierophant'
});
const THE_LOVERS = Object.freeze({
    number: 6,
    name: 'The Lovers'
});
const THE_CHARIOT = Object.freeze({
    number: 7,
    name: 'The Chariot'
});
const STRENGTH = Object.freeze({
    number: 8,
    name: 'Strength'
});
const THE_HERMIT = Object.freeze({
    number: 9,
    name: 'The Hermit'
});
const THE_WHEEL_OF_FORTUNE = Object.freeze({
    number: 10,
    name: 'The Wheel of Fortune'
});
const JUSTICE = Object.freeze({
    number: 11,
    name: 'Justice'
});
const THE_HANGED_MAN = Object.freeze({
    number: 12,
    name: 'The Hanged Man'
});
const DEATH = Object.freeze({
    number: 13,
    name: 'Death'
});
const TEMPERANCE = Object.freeze({
    number: 14,
    name: 'Temperance'
});
const THE_DEVIL = Object.freeze({
    number: 15,
    name: 'The Devil'
});
const THE_TOWER = Object.freeze({
    number: 16,
    name: 'The Tower'
});
const THE_STAR = Object.freeze({
    number: 17,
    name: 'The Star'
});
const THE_MOON = Object.freeze({
    number: 18,
    name: 'The Moon'
});
const THE_SUN = Object.freeze({
    number: 19,
    name: 'The Sun'
});
const JUDGEMENT = Object.freeze({
    number: 20,
    name: 'Judgement'
});
const THE_WORLD = Object.freeze({
    number: 21,
    name: 'The World'
});

const MAJOR_ARCANA = [
    THE_FOOL,
    THE_MAGICIAN,
    THE_HIGH_PRIESTESS,
    THE_EMPRESS,
    THE_EMPEROR,
    THE_HIEROPHANT,
    THE_LOVERS,
    THE_CHARIOT,
    STRENGTH,
    THE_HERMIT,
    THE_WHEEL_OF_FORTUNE,
    JUSTICE,
    THE_HANGED_MAN,
    DEATH,
    TEMPERANCE,
    THE_DEVIL,
    THE_TOWER,
    THE_STAR,
    THE_MOON,
    THE_SUN,
    JUDGEMENT,
    THE_WORLD
];

const CRYPTOS = [];
const PERIPHERICS = [];
const SCRIPTS = [];
const DRIVES = []; 
const MINOR_ARCANA = [
    ...CRYPTOS,
    ...PERIPHERICS,
    ...SCRIPTS,
    ...DRIVES
];
const DECK_SIZE = MAJOR_ARCANA.length + MINOR_ARCANA.length;

const getShuffledDeck = () => _.shuffle([
    ..._.shuffle(MINOR_ARCANA), 
    ..._.shuffle(MAJOR_ARCANA)
]);

export const drawSingleCard = () => getShuffledDeck()[getRandomNumber(Math.random(), DECK_SIZE)];

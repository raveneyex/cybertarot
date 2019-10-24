import { sample } from 'underscore';

export const getRandomNumber = (limit, seed = 666) => Math.round((Math.random() * 10 * seed) % limit);

export const getRandomBoolean = () => sample([true, false]);

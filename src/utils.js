export const getRandomNumber = (seed = 666, limit) => Math.floor((Math.random() * 10 * seed) % limit);
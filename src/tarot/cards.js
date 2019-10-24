import _ from 'underscore';

const THE_FOOL = Object.freeze({
    number: 0,
    name: 'The Fool',
    arcana: 'MAJOR'
});
const THE_MAGICIAN = Object.freeze({
    number: 1,
    name: 'The Magician',
    arcana: 'MAJOR'
});
const THE_HIGH_PRIESTESS = Object.freeze({
    number: 2,
    name: 'The High Priestess',
    arcana: 'MAJOR'
});
const THE_EMPRESS = Object.freeze({
    number: 3,
    name: 'The Empress',
    arcana: 'MAJOR'
});
const THE_EMPEROR = Object.freeze({
    number: 4,
    name: 'The Emperor',
    arcana: 'MAJOR'
});
const THE_HIEROPHANT = Object.freeze({
    number: 5,
    name: 'The Hierophant',
    arcana: 'MAJOR'
});
const THE_LOVERS = Object.freeze({
    number: 6,
    name: 'The Lovers',
    arcana: 'MAJOR'
});
const THE_CHARIOT = Object.freeze({
    number: 7,
    name: 'The Chariot',
    arcana: 'MAJOR'
});
const STRENGTH = Object.freeze({
    number: 8,
    name: 'Strength',
    arcana: 'MAJOR'
});
const THE_HERMIT = Object.freeze({
    number: 9,
    name: 'The Hermit',
    arcana: 'MAJOR'
});
const THE_WHEEL_OF_FORTUNE = Object.freeze({
    number: 10,
    name: 'The Wheel of Fortune',
    arcana: 'MAJOR'
});
const JUSTICE = Object.freeze({
    number: 11,
    name: 'Justice',
    arcana: 'MAJOR'
});
const THE_HANGED_MAN = Object.freeze({
    number: 12,
    name: 'The Hanged Man',
    arcana: 'MAJOR'
});
const DEATH = Object.freeze({
    number: 13,
    name: 'Death',
    arcana: 'MAJOR'
});
const TEMPERANCE = Object.freeze({
    number: 14,
    name: 'Temperance',
    arcana: 'MAJOR'
});
const THE_DEVIL = Object.freeze({
    number: 15,
    name: 'The Devil',
    arcana: 'MAJOR'
});
const THE_TOWER = Object.freeze({
    number: 16,
    name: 'The Tower',
    arcana: 'MAJOR'
});
const THE_STAR = Object.freeze({
    number: 17,
    name: 'The Star',
    arcana: 'MAJOR'
});
const THE_MOON = Object.freeze({
    number: 18,
    name: 'The Moon',
    arcana: 'MAJOR'
});
const THE_SUN = Object.freeze({
    number: 19,
    name: 'The Sun',
    arcana: 'MAJOR'
});
const JUDGEMENT = Object.freeze({
    number: 20,
    name: 'Judgement',
    arcana: 'MAJOR'
});
const THE_WORLD = Object.freeze({
    number: 21,
    name: 'The World',
    arcana: 'MAJOR'
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

/*
 * Coins/Cryptos: Physical Experience
 * Wands/Peripherics: Will
 * Swords/Scripts: Thoughts
 * Cups/Drives: Relationship
 */
const COINS = [
    Object.freeze({
        number: 1,
        name: 'Ace of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Coins',
        _oldSuit: 'coins'
    }),
    Object.freeze({
        number: 2,
        name: 'Two of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Coins',
        _oldSuit: 'coins'
    }),
    Object.freeze({
        number: 3,
        name: 'Three of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Coins',
        _oldSuit: 'coins'
    }),
    Object.freeze({
        number: 4,
        name: 'Four of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Coins',
        _oldSuit: 'coins'
    }),
    Object.freeze({
        number: 5,
        name: 'Five of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Coins',
        _oldSuit: 'coins'
    }),
    Object.freeze({
        number: 6,
        name: 'Six of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Coins',
        _oldSuit: 'coins'
    }),
    Object.freeze({
        number: 7,
        name: 'Seven of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Coins',
        _oldSuit: 'coins'
    }),
    Object.freeze({
        number: 8,
        name: 'Eight of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Coins',
        _oldSuit: 'coins'
    }),
    Object.freeze({
        number: 9,
        name: 'Nine of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Coins',
        _oldSuit: 'coins'
    }),
    Object.freeze({
        number: 10,
        name: 'Ten of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Coins',
        _oldSuit: 'coins'
    }),
    Object.freeze({
        number: 11,
        name: 'Page of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Coins',
        _oldSuit: 'coins'
    }),
    Object.freeze({
        number: 12,
        name: 'Knight of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Coins',
        _oldSuit: 'coins'
    }),
    Object.freeze({
        number: 13,
        name: 'Queen of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Coins',
        _oldSuit: 'coins'
    }),
    Object.freeze({
        number: 14,
        name: 'King of Coins',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Coins',
        _oldSuit: 'coins'
    })
];
const WANDS = [
    Object.freeze({
        number: 1,
        name: 'Ace of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Wands',
        _oldSuit: 'wands'
    }),
    Object.freeze({
        number: 2,
        name: 'Two of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Wands',
        _oldSuit: 'wands'
    }),
    Object.freeze({
        number: 3,
        name: 'Three of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Wands',
        _oldSuit: 'wands'
    }),
    Object.freeze({
        number: 4,
        name: 'Four of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Wands',
        _oldSuit: 'wands'
    }),
    Object.freeze({
        number: 5,
        name: 'Five of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Wands',
        _oldSuit: 'wands'
    }),
    Object.freeze({
        number: 6,
        name: 'Six of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Wands',
        _oldSuit: 'wands'
    }),
    Object.freeze({
        number: 7,
        name: 'Seven of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Wands',
        _oldSuit: 'wands'
    }),
    Object.freeze({
        number: 8,
        name: 'Eight of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Wands',
        _oldSuit: 'wands'
    }),
    Object.freeze({
        number: 9,
        name: 'Nine of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Wands',
        _oldSuit: 'wands'
    }),
    Object.freeze({
        number: 10,
        name: 'Ten of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Wands',
        _oldSuit: 'wands'
    }),
    Object.freeze({
        number: 11,
        name: 'Page of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Wands',
        _oldSuit: 'wands'
    }),
    Object.freeze({
        number: 12,
        name: 'Knight of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Wands',
        _oldSuit: 'wands'
    }),
    Object.freeze({
        number: 13,
        name: 'Queen of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Wands',
        _oldSuit: 'wands'
    }),
    Object.freeze({
        number: 14,
        name: 'King of Wands',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Wands',
        _oldSuit: 'wands'
    })
];
const SWORDS = [
    Object.freeze({
        number: 1,
        name: 'Ace of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Swords',
        _oldSuit: 'swords'
    }),
    Object.freeze({
        number: 2,
        name: 'Two of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Swords',
        _oldSuit: 'swords'
    }),
    Object.freeze({
        number: 3,
        name: 'Three of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Swords',
        _oldSuit: 'swords'
    }),
    Object.freeze({
        number: 4,
        name: 'Four of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Swords',
        _oldSuit: 'swords'
    }),
    Object.freeze({
        number: 5,
        name: 'Five of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Swords',
        _oldSuit: 'swords'
    }),
    Object.freeze({
        number: 6,
        name: 'Six of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Swords',
        _oldSuit: 'swords'
    }),
    Object.freeze({
        number: 7,
        name: 'Seven of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Swords',
        _oldSuit: 'swords'
    }),
    Object.freeze({
        number: 8,
        name: 'Eight of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Swords',
        _oldSuit: 'swords'
    }),
    Object.freeze({
        number: 9,
        name: 'Nine of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Swords',
        _oldSuit: 'swords'
    }),
    Object.freeze({
        number: 10,
        name: 'Ten of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Swords',
        _oldSuit: 'swords'
    }),
    Object.freeze({
        number: 11,
        name: 'Page of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Swords',
        _oldSuit: 'swords'
    }),
    Object.freeze({
        number: 12,
        name: 'Knight of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Swords',
        _oldSuit: 'swords'
    }),
    Object.freeze({
        number: 13,
        name: 'Queen of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Swords',
        _oldSuit: 'swords'
    }),
    Object.freeze({
        number: 14,
        name: 'King of Swords',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Swords',
        _oldSuit: 'swords'
    })
];
const CUPS = [
    Object.freeze({
        number: 1,
        name: 'Ace of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Cups',
        _oldSuit: 'cups'
    }),
    Object.freeze({
        number: 2,
        name: 'Two of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Cups',
        _oldSuit: 'cups'
    }),
    Object.freeze({
        number: 3,
        name: 'Three of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Cups',
        _oldSuit: 'cups'
    }),
    Object.freeze({
        number: 4,
        name: 'Four of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Cups',
        _oldSuit: 'cups'
    }),
    Object.freeze({
        number: 5,
        name: 'Five of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Cups',
        _oldSuit: 'cups'
    }),
    Object.freeze({
        number: 6,
        name: 'Six of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Cups',
        _oldSuit: 'cups'
    }),
    Object.freeze({
        number: 7,
        name: 'Seven of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Cups',
        _oldSuit: 'cups'
    }),
    Object.freeze({
        number: 8,
        name: 'Eight of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Cups',
        _oldSuit: 'cups'
    }),
    Object.freeze({
        number: 9,
        name: 'Nine of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Cups',
        _oldSuit: 'cups'
    }),
    Object.freeze({
        number: 10,
        name: 'Ten of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: false,
        suit: 'Cups',
        _oldSuit: 'cups'
    }),
    Object.freeze({
        number: 11,
        name: 'Page of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Cups',
        _oldSuit: 'cups'
    }),
    Object.freeze({
        number: 12,
        name: 'Knight of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Cups',
        _oldSuit: 'cups'
    }),
    Object.freeze({
        number: 13,
        name: 'Queen of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Cups',
        _oldSuit: 'cups'
    }),
    Object.freeze({
        number: 14,
        name: 'King of Cups',
        arcana: 'MINOR',
        reversed: false,
        court: true,
        suit: 'Cups',
        _oldSuit: 'cups'
    })
];

const MINOR_ARCANA = [
    ...COINS,
    ...WANDS,
    ...SWORDS,
    ...CUPS
];

const DECK = [
    ...MINOR_ARCANA,
    ...MAJOR_ARCANA
];

export default DECK;

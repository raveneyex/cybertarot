# Cybertarot

A simple CLI tarot app.

## Getting Started

Simply do `npm start` and the app will download its dependencies and then will register locally as `cybertarot`.

You can then use the app as `cybertarot -<flag>`, where `<flag>` can be one of the following options:

- `-h`
- `-c`
- `-a`
- `-s`
- `-l`

## Usage Options

### The `-h` option

The `-h` option prints the help menu for the application. No parameters are required.

Usage: `cybertarot -h`


### The `-c` option

The `-c` option randomly draws a card from a freshly-mixed deck.

Usage: `cybertarot -c`


### The `-a` option

The `-a` option lists all the spreads that are currently available for the application.

By default the app comes with the `basic` spread and the `pentagram` spread. Both are detailed in a section below.

Note that it is possible to load new spreads using the `-l` option detailed below.

Usage: `cybertarot -a`


### The `-s` option

The `-s` option performs a reading using the supplied `<spread>`.
If no `<spread>` parameter is supplied an error will be thrown.

A list of available spreads can be queried using the `-a` option.

Usage: `cybertarot -s <spread>`

### The `-l` option

The `-l` option is used to load new spreads into the application.

This option requires a `<path/to/jsonFile.json>` parameter to be supplied.
The application will attempt to load and validate the JSON file; if the validation succeeds it means that the imported JSON has the proper format to be considered a `spread` and it will be then copied to the spreads folder of the application. An example spread format is detailed in a section below.

Note that the spread will be saved using the file name of the original json file. i.e. `jsonFile.json`. 
In the event that a file `jsonFile.json` already exists it will be overwritten.

## The spread format

In order for a JSON file to be considered a valid `spread` it should adjust to the following format:

```
{
    "name": "Name of the spread",
    "description": "A spread based on the pentagram",
    "structure": {
        "slot1": null,
        "slot2": null,
        "slot3": null
        ...
    }
}
```

Where the `name` field is a string. The name of the spread, and a mandatory field.
The `description` field is a string. Not currently used and thus optional.
The `structure` field is a javascript object. Mandatory. It is the structure of the reading: each of the object's `keys` corresponds to a card slot to be filled during a reading. The value assigned to these keys is irrelevant and thus whatever the user wants.

## Available Spreads

### The `basic` spread

It's a simple 3-card spread; although usually interpreted as `past`, `present`, and `future` it can be made to mean whatever trio the user wants.
Another usual interpretation for this spread is `above`, `below`, and `self`.

### The `pentagram` spread

A very versatile 5-card spread that decomposes a situation into five aspects.
Labeled here as `air`, `earth`, `water`, `fire` and `spirit` for the five elements of the classical world.

## Dedications

I dedicate this little app to:

1. The _God of Magick_, in whatever form and name he might take. Hail, Hermes!
2. The _Prince of Darkness_, in whatever form and name he might take. Hail, _Horned Lord_!
3. Myself, and the Black Flame that burns inside me and makes it possible for me to get inspired and do magick.

[![The RavenEyex Sigil](./raveneyex.png)](https://twitter.com/HumoBinario)

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

### The `-h` option

The `-h` option prints the help menu for the application. No parameters are required.

Usage: `cybertarot -h`


### The `-c` option

The `-c` option randomly draws a card from a freshly-mixed deck.

Usage: `cybertarot -c`


### The `-a` option

The `-a` option lists all the spreads that are currently available for the application.

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
The application will attempt to load and validate the JSON file; if the validation succeeds it means that the imported JSON has the proper format to be considered a spread and it will be then copied to the spreads folder of the application.

Note that the spread will be saved using the file name of the original json file. i.e. `jsonFile.json`. 
In the event that a file `jsonFile.json` already exists it will be overwritten.

#### The spread format

In order for a JSON file to be considered a valid `spread` it should adjust to the following format:

```
{
    "name": "Name of the spread",
    "description": "A spread based on the pentagram",
    "structure": {
        "slot1": null,
        "slot2": null,
        "slot3": null
    }
}
```

Where `name` is the name of the spread, and a mandatory field.
The `description` field is for information purposes only and is not mandatory.
The `structure` field is the one that provides the guidance for a reading. It needs to be an object, and each of the object's keys corresponds to a card slot to be filled during a reading.

# Dedications

I dedicate this little app to:

1. The _God of Magick_, in whatever form and name he might take. Hail, Hermes!
2. The _Prince of Darkness_, in whatever form and name he might take. Hail, _Horned Lord_!
3. Myself, and the Black Flame that burns inside me and makes it possible for me to get inspired and do magick.

[![The RavenEyex Sigil](./raveneyex.png)](https://twitter.com/HumoBinario)

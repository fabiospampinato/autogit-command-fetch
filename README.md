# Autogit Command - Fetch

A command for fetching from a remote.

## Install

```sh
npm install --save autogit-command-fetch
```

## Usage

#### Options

This command uses the following options object:

```js
{
  remote: 'origin', // The remote to fetch from
  branch: '' // The branch to fetch from, if not set the current branch will be used
}
```

#### Configuration

Add this command to your configuration:

```js
const fetch = require ( 'autogit-command-fetch' );

module.exports = {
  commands: {
    fetch: fetch ({ /* YOUR OPTIONS */ })
  }
}
```

#### CLI

Call it from the CLI with:

```sh
autogit fetch
```

## License

MIT © Fabio Spampinato

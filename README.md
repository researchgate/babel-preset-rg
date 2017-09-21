# babel-preset-rg [![npm](https://img.shields.io/npm/v/@researchgate/babel-preset-rg.svg)](https://www.npmjs.com/package/@researchgate/babel-preset-rg)

> Babel preset for ResearchGate

## Install

```js
$ yarn add --dev @researchgate/babel-preset-rg
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["@researchgate/babel-preset-rg"]
}
```

## Options

### env BABEL_ENV

Supports either `production`, `development` or `test`

### env BABEL_OUTPUT

Supports either `esm` or `cjs`

Default to `esm` unless BABEL_ENV is set to test then it defaults to `cjs`

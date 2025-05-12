# core-ts-utils

[![npm version](https://badge.fury.io/js/core-ts-utils.svg)](https://badge.fury.io/js/core-ts-utils)

A modular and efficient collection of reusable TypeScript utilities.

## Installation

```sh
npm install core-ts-utils
# or
yarn add core-ts-utils
```

## Usage

```ts
import {
  debounce,
  throttle,
  curry,
  deepClone,
  flatten,
  isEmpty,
  memoize,
  once,
  randomId,
  sleep,
  capitalize,
  chunk,
  groupBy,
  omit,
  pick,
  merge,
  uniqueBy,
  camelCase,
  kebabCase,
  snakeCase,
  truncate,
  template,
  compose,
  pipe,
  partial,
  isEmail,
  isURL,
  isNumeric,
  cookies,
  storage,
  queryParams,
  retry,
  promisify,
  parallel
} from "core-ts-utils";
```

## Utilities

### Function Utilities

- `debounce`, `throttle`, `curry`, `memoize`, `once`, `partial`, `compose`, `pipe`, `promisify`, `retry`, `parallel`

### Object & Array

- `deepClone`, `flatten`, `chunk`, `groupBy`, `omit`, `pick`, `merge`, `uniqueBy`, `isEmpty`

### String Utilities

- `capitalize`, `camelCase`, `kebabCase`, `snakeCase`, `truncate`, `template`

### Validation

- `isEmail`, `isURL`, `isNumeric`

### Miscellaneous

- `sleep`, `randomId`, `cookies`, `storage`, `queryParams`

## License

MIT © [Hrithik Agarwal](https://github.com/hrithik-infinite)

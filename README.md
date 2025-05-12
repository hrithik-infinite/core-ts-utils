# core-ts-utils

[![npm version](https://badge.fury.io/js/core-ts-utils.svg)](https://badge.fury.io/js/core-ts-utils)

A collection of commonly used TypeScript utility functions like debounce, throttle, curry, deepClone, and more.

## Installation

```sh
npm install core-ts-utils
```

or using yarn:

```sh
yarn add core-ts-utils
```

## Usage

### Importing Functions

```ts
import { debounce, throttle, curry, deepClone, flatten, isEmpty, memoize, once, randomId, sleep } from "core-ts-utils";
```

### Available Utilities

#### `debounce`

Delays the execution of a function until after a specified time has elapsed since the last invocation.

```ts
const logMessage = (msg: string) => console.log(msg);
const debouncedLog = debounce(logMessage, 500);
debouncedLog("Hello"); // Will execute after 500ms
```

#### `throttle`

Ensures a function is executed at most once within a specified time interval.

```ts
const logMessage = (msg: string) => console.log(msg);
const throttledLog = throttle(logMessage, 1000);
throttledLog("Hello"); // Executes immediately
throttledLog("World"); // Ignored if called within 1 second
```

#### `curry`

Transforms a function so that arguments can be provided one at a time.

```ts
const add = (a: number, b: number, c: number) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
```

#### `deepClone`

Creates a deep copy of an object.

```ts
const obj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(obj);
console.log(clonedObj); // { a: 1, b: { c: 2 } }
```

#### `flatten`

Flattens a nested array.

```ts
const arr = [1, [2, [3, 4]], 5];
console.log(flatten(arr)); // Output: [1, 2, 3, 4, 5]
```

#### `isEmpty`

Checks if a value is empty.

```ts
console.log(isEmpty({})); // true
console.log(isEmpty([])); // true
console.log(isEmpty("")); // true
console.log(isEmpty({ key: "value" })); // false
```

#### `memoize`

Caches function results for performance improvement.

```ts
const factorial = memoize((n: number): number => (n <= 1 ? 1 : n * factorial(n - 1)));
console.log(factorial(5)); // Computes result
console.log(factorial(5)); // Returns cached result
```

#### `once`

Ensures a function is executed only once.

```ts
const initialize = once(() => console.log("Initialized!"));
initialize(); // Output: "Initialized!"
initialize(); // No output
```

#### `randomId`

Generates a random string ID.

```ts
console.log(randomId(8)); // Example: "a1b2c3d4"
```

#### `sleep`

Pauses execution for a given time.

```ts
async function demo() {
  console.log("Before sleep");
  await sleep(2000);
  console.log("After 2 seconds");
}
demo();
```

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

## License

This project is licensed under the MIT License.

## Author

Developed by [Hrithik Agarwal](https://github.com/hrithik-infinite).

## Contact

- **LinkedIn**: [Hrithik Agarwal](https://www.linkedin.com/in/hrithikagarwal/)
- **Email**: [hrithikinfinite@gmail.com](mailto:hrithikinfinite@gmail.com)

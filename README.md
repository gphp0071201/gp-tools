# gp-tools

Some commonly used js tool functions

### Usage

```javascript
import { Utils, Verify } from 'gp-tools'

console.log(Verify.isNumber(123)) // true

console.log(Verify.isNumber('123')) // false
```

### Verify

| method        | description                |
| ------------- | -------------------------- |
| `isString`    | verify is string           |
| `isNumber`    | verify is number           |
| `isFunction`  | verify is function         |
| `isUndefined` | verify is undefined        |
| `isArray`     | verify is array            |
| `isNull`      | verify is null             |
| `isObject`    | verify is object           |
| `isDate`      | verify is date             |
| `isSymbol`    | verify is symbol           |
| `isRegExp`    | verify is regexp           |
| `isPromise`   | verify is promise          |
| `isPosInt`    | verify is positive integer |
| `isPosFloat`  | verify is positive float   |
| `isNegInt`    | verify is negative integer |
| `isNegFloat`  | verify is negative float   |
| `isEmail`     | verify is email            |

### Utils

| method            |
| ----------------- |
| `delay`           |
| `randomString`    |
| `prototypeString` |

```js
  Utils.delay(1000) // delay 1000ms, default 1000
  /**
   * @param {object} params
   * @param {number} params.length default value 8
   * @param {boolean} params.numeric default value true
   * @param {boolean} params.letters default value true
   * @param {boolean} params.special default value false
   * @param {array} params.execude default value []
   */
  Utils.randomString(
    {length = 8,
    numeric = true,
    letters = true,
    special = false,
    execude = []
  }
  Utils.prototypeString(1) // [object Number]
)
```

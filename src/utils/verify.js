/**
 * Detect data type
 * @param {*} o
 * @returns
 */
export const prototypeString = (o) => Object.prototype.toString.call(o)
/**
 * Determine whether it is a string type
 * @param {*} o
 * @returns
 */
export const isString = (o) => prototypeString(o) === '[object String]'
/**
 * Determine whether it is a numeric type
 * @param {*} o
 * @returns
 */
export const isNumber = (o) => prototypeString(o) === '[object Number]'
/**
 * Determine whether it is a function type
 * @param {*} o
 * @returns
 */
export const isFunction = (o) => prototypeString(o) === '[object Function]'
/**
 * Determine whether it is a undefined type
 * @param {*} o
 * @returns
 */
export const isUndefined = (o) => prototypeString(o) === '[object Undefined]'
/**
 * Determine whether it is a array type
 * @param {*} o
 * @returns
 */
export const isArray = (o) => prototypeString(o) === '[object Array]'
/**
 * Determine whether it is a null type
 * @param {*} o
 * @returns
 */
export const isNull = (o) => prototypeString(o) === '[object Null]'
/**
 * Determine whether it is a object type
 * @param {*} o
 * @returns
 */
export const isObject = (o) => prototypeString(o) === '[object Object]'
/**
 * Determine whether it is a Date type
 * @param {*} o
 * @returns
 */
export const isDate = (o) => prototypeString(o) === '[object Date]'
/**
 * Determine whether it is a Symbol type
 * @param {*} o
 * @returns
 */
export const isSymbol = (o) => prototypeString(o) === '[object Symbol]'
/**
 * Determine whether it is a RegExp type
 * @param {*} o
 * @returns
 */
export const isRegExp = (o) => prototypeString(o) === '[object RegExp]'
/**
 * Determine whether it is a Promise type
 * @param {*} o
 * @returns
 */
export const isPromise = (o) => prototypeString(o) === '[object Promise]'
/**
 * Is it a positive integer
 * @param {*} o
 * @returns
 */
export const isPosInt = (o) => /^\d+$/.test(o)
/**
 * Whether positive floating point number
 * @param {*} o
 * @returns
 */
export const isPosFloat = (o) => /^[1-9]\d*\.\d*[1-9]\d*$/.test(o)
/**
 * Whether negative integer
 * @param {*} o
 * @returns
 */
export const isNegInt = (o) => /^-\d+$/.test(o)
/**
 * Whether negative float
 * @param {*} o
 * @returns
 */
export const isNegFloat = (o) => /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/.test(o)
/**
 * whether email
 * @param {*} o
 * @returns
 */
export const isEmail = (o) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    o
  )

/**
 * check id-card no
 * @param {*} o
 * @returns
 */
export const isCardId = (o) => {
  const regexp =
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  if (!regexp.test(o)) return false
  const coefficientList = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const checkList = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  const sum = coefficientList.reduce((total, num) => total + num, 0)
  return o.substr(-1).toUpperCase() === checkList[sum % 11]
}
/**
 * check phone number
 * @param {*} o
 * @returns
 */
export const isPhone = (o) => /^1[3456789]\d{9}$/.test(o)

import { isCardId, isEmail, isPhone } from './verify'

/**
 * time delay
 * @param {number} t ms
 * @returns
 */
export const delay = (t = 1000) =>
  new Promise((resolve) => setTimeout(resolve, t))

/**
 * generate custom string
 * @param {object} options
 * @param {number} options.length  length of generated string
 * @param {boolean} options.numeric  whether to contain numbers
 * @param {boolean} options.letters  whether to contain letters
 * @param {boolean} options.special  characters not included
 * @returns
 */
export const randomString = ({
  length = 8,
  numeric = true,
  letters = true,
  special = false,
  execude = [],
}) => {
  if (length === 0) return ''
  const specialStr = '!$%^&*()_+|~-=`{}[]:;<>?,./'
  const numericStr = '0123456789'
  const lettersStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let targetStr = ''
  if (numeric) targetStr += numericStr
  if (letters) targetStr += lettersStr
  if (special) targetStr += specialStr
  execude = Array.isArray(execude) ? execude : []
  execude.forEach((item) => {
    targetStr = targetStr.replace(new RegExp(item, 'g'), '')
  })
  let result = ''
  for (let i = 0; i < length; i++) {
    const rdm = Math.floor(Math.random() * targetStr.length)
    result += targetStr[rdm]
  }
  return result
}
/**
 * Phone number desensitization
 * @param {*} phone
 * @returns
 */
export const phoneDesensitization = (phone) => {
  if (!isPhone(phone)) throw new Error('Parameter is not a phone number')
  return `${phone}`.replace(/^(.{3})(?:\d+)(.{4})$/, '$1****$2')
}

export const nameDesensitization = (name = '') => {
  const nameArr = Array.from(`${name}`)
  if (nameArr.length === 2) {
    return `${nameArr[0]}*`
  } else if (nameArr.length > 2) {
    const replaceStr = ''.padStart('*', nameArr.length - 2)
    return `${nameArr[0]}${replaceStr}${nameArr[nameArr.length - 1]}`
  }
  return name
}
/**
 * idCard Desensitization
 * @param {*} idCard
 * @returns
 */
export const idCardDesensitization = (idCard) => {
  if (!isCardId) throw new Error('The parameter is not an ID number')
  return `${idCard}`.replace(/^(\d{4})\d*(.{4})/, '$1****$2')
}
/**
 * email desensitization
 * @param {*} email
 * @returns
 */
export const emailDesensitization = (email) => {
  if (!isEmail) throw new Error('parameter is not email')
  return `${email}`.replace(/^(.{0,3}).*@(.*)$/, '$1*****@$2')
}

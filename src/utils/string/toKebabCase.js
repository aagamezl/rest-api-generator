import { normalizeInput } from './normalizeInput.js'

/**
 *
 * @param {string} input
 * @returns {string}
 */
export const toKebabCase = (input) => {
  return normalizeInput(input).replace(/ /g, '-')
}

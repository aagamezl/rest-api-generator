import { normalizeInput } from './normalizeInput.js'

/**
 *
 * @param {string} input
 * @returns {string}
 */
export const toSnakeCase = (input) => {
  return normalizeInput(input).replace(/ /g, '_')
}

import { normalizeInput } from './normalizeInput.js'

/**
 *
 * @param {string} input
 * @returns {string}
 */
export const toPascalCase = (input) => {
  return normalizeInput(input)
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

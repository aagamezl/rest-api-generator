import { toPascalCase } from './toPascalCase.js'

/**
 *
 * @param {string} input
 * @returns {string}
 */
export const toCamelCase = (input) => {
  const pascalCase = toPascalCase(input)

  return pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1)
}

/**
 *
 * @param {string} input
 * @returns {string}
 */
export const normalizeInput = (input) => {
  return input
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .replace(/[ _-]+/g, ' ')
}

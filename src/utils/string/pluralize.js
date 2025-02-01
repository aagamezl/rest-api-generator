const irregularPlurals = {
  foot: 'feet',
  goose: 'geese',
  man: 'men',
  tooth: 'teeth',
  woman: 'women',
  child: 'children',
  die: 'dice',
  louse: 'lice',
  mouse: 'mice',
  ox: 'oxen',
  person: 'people',
  alumnus: 'alumni',
  fungus: 'fungi',
  nucleus: 'nuclei',
  axis: 'axes',
  analysis: 'analyses',
  crisis: 'crises',
  oasis: 'oases',
  thesis: 'theses',
  bacterium: 'bacteria',
  datum: 'data',
  erratum: 'errata',
  stratum: 'strata',
  criterion: 'criteria',
  phenomenon: 'phenomena'
}

const uncountableNouns = new Set([
  'binoculars', 'glasses', 'headphones', 'jeans', 'knickers', 'pants', 'pyjamas',
  'scales', 'scissors', 'tights', 'trousers', 'carp', 'cod', 'mackerel', 'pike',
  'plaice', 'salmon', 'squid', 'trout', 'cattle', 'deer', 'moose', 'sheep', 'swine',
  'barracks', 'craft', 'aircraft', 'spacecraft', 'gallows', 'means', 'quid', 'series', 'species'
])

/**
 *
 * @param {string} word
 * @returns {string}
 */
export const pluralize = (word) => {
  if (irregularPlurals[word]) return irregularPlurals[word]
  if (uncountableNouns.has(word)) return word

  if (/.*[sxz]$|.*(ch|sh)$/.test(word)) {
    return `${word}es`
  }
  if (/.*o$/.test(word)) {
    return /(hero|potato|tomato|torpedo)$/.test(word) ? `${word}es` : `${word}s`
  }
  if (/.*[^aeiou]y$/.test(word)) {
    return `${word.slice(0, -1)}ies`
  }
  if (/.*[aeiou]y$/.test(word)) {
    return `${word}s`
  }
  if (/.*(f|fe)$/.test(word)) {
    return /(?:calf|half|knife|leaf|life|loaf|sheaf|shelf|thief|wife|wolf)$/.test(word)
      ? word.replace(/(f|fe)$/, 'ves')
      : `${word}s`
  }
  return `${word}s`
}

const IRREGULAR_SINGULARS = {
  feet: 'foot',
  geese: 'goose',
  men: 'man',
  teeth: 'tooth',
  women: 'woman',
  children: 'child',
  dice: 'die',
  lice: 'louse',
  mice: 'mouse',
  oxen: 'ox',
  people: 'person',
  alumni: 'alumnus',
  fungi: 'fungus',
  nuclei: 'nucleus',
  axes: 'axis',
  analyses: 'analysis',
  crises: 'crisis',
  oases: 'oasis',
  theses: 'thesis',
  bacteria: 'bacterium',
  data: 'datum',
  errata: 'erratum',
  strata: 'stratum',
  criteria: 'criterion',
  phenomena: 'phenomenon'
}

const UNCOUNTABLE_NOUNS = new Set([
  'binoculars',
  'glasses',
  'headphones',
  'jeans',
  'knickers',
  'pants',
  'pyjamas',
  'scales',
  'scissors',
  'tights',
  'trousers',
  'carp',
  'cod',
  'mackerel',
  'pike',
  'plaice',
  'salmon',
  'squid',
  'trout',
  'cattle',
  'deer',
  'moose',
  'sheep',
  'swine',
  'barracks',
  'craft',
  'aircraft',
  'spacecraft',
  'gallows',
  'means',
  'quid',
  'series',
  'species',
  'acoustics',
  'athletics',
  'classics',
  'economics',
  'ethics',
  'gymnastics',
  'mathematics',
  'maths',
  'physics',
  'politics',
  'news',
  'measles',
  'mumps',
  'rabies',
  'rickets',
  'shingles',
  'billiards',
  'bowls',
  'checkers',
  'darts',
  'dominoes',
  'draughts',
  'hearts'
])

export const singularize = (word) => {
  if (UNCOUNTABLE_NOUNS.has(word)) {
    return word
  }

  if (IRREGULAR_SINGULARS[word]) {
    return IRREGULAR_SINGULARS[word]
  }

  if (/^(.*)ves$/.test(word)) {
    return word.replace(/ves$/, match => {
      const base = word.slice(0, -3)
      return ['f', 'fe'].includes(base.slice(-1)) ? base + 'f' : base + 'fe'
    })
  }

  if (/^(.*)ies$/.test(word)) {
    return word.replace(/ies$/, 'y')
  }

  if (/^(.*)oes$/.test(word)) {
    return word.replace(/oes$/, 'o')
  }

  if (/^(.*)(s|x|ch|sh)es$/.test(word)) {
    return word.replace(/es$/, '')
  }

  if (/^(.*)s$/.test(word)) {
    return word.replace(/s$/, '')
  }

  return word
}

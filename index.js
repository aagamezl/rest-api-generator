#!/usr/bin/env node

import { displayUsage, generateApplication, generateDomain } from './src/utils/index.js'

// Parse command-line arguments
const args = process.argv.slice(2)
// const args = ['-d', 'dist/src/domains/users']

if (args.length < 2) {
  displayUsage()

  process.exit(1)
}

const option = args[0]
const argument = args[1]

switch (option) {
  case '-d':
    generateDomain(argument)

    break
  case '-n':
    generateApplication()

    break
  default:
    console.log(`Error: Invalid option '${option}'.`)
    displayUsage()

    process.exit(1)
}

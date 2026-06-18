function flags(obj) {
  // Separate help from the rest of the flags
  const { help, ...rest } = obj

  // Build aliases: h -> help, then first letter of each flag
  const alias = { h: 'help' }
  for (const key of Object.keys(rest)) {
    alias[key[0]] = key
  }

  // Determine which flags to describe
  const toDescribe = (help && help.length) ? help : Object.keys(rest)

  // Build description lines
  const lines = toDescribe.map((key) => {
    const letter = key[0]
    return `-${letter}, --${key}: ${rest[key]}`
  })

  const description = lines.join('\n')

  return { alias, description }
}

// Test 1: help with specific flags
console.log(flags({
  multiply: 'multiply the values',
  divide: 'divides the values',
  help: ['divide'],
}))

// Test 2: no help key -> describe all
console.log(flags({
  multiply: 'multiply the values',
  divide: 'divides the values',
}))

// Test 3: help with empty array -> describe all
console.log(flags({
  multiply: 'multiply the values',
  divide: 'divides the values',
  help: [],
}))
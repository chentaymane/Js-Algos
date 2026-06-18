import { readFile, writeFile } from 'node:fs/promises'

try {
  const inputFile = process.argv[2]
  const mode = process.argv[3]
  const outputFile =
    process.argv[4] ||
    (mode === 'encode' ? 'cypher.txt' : 'clear.txt')

  const content = await readFile(inputFile, 'utf8')

  let result

  if (mode === 'encode') {
    result = Buffer.from(content).toString('base64')
  } 
  else if (mode === 'decode') {
    result = Buffer.from(content, 'base64').toString('utf8')
  } 
  else {
    throw new Error('Invalid mode: use encode or decode')
  }

  await writeFile(outputFile, result)

} catch (err) {
  console.error(err.message)
}
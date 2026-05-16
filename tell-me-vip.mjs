import { readdir, readFile, writeFile } from 'node:fs/promises'

let i = 1

try {
  const files = await readdir(process.argv[2])

  let result = []

  for (const file of files) {
    const path = `${process.argv[2]}/${file}`

    const content = await readFile(path, 'utf8')

    const data = JSON.parse(content)

    if (data.answer === 'yes') {
      const cleanName = file.slice(0, -5)

      const [first, last] = cleanName.split('_')

      result.push(`${last} ${first}`)
    }
  }

  result.sort()

  const finalText = result
    .map(name => `${i++}. ${name}`)
    .join('\n')

  await writeFile('vip.txt', finalText)

} catch (err) {
  console.error(err.message)
}
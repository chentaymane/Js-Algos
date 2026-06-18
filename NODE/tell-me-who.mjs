import { readdir } from 'node:fs/promises'

let i = 1

try {
  const files = await readdir(process.argv[2])

  const names = files.map((x) => {
    const cleanName = x.slice(0, x.length - 5)

    const [first, last] = cleanName.split('_')

    return `${last} ${first}`
  })

  for (const name of names.sort()) {
    console.log(`${i++}. ${name}`)
  }
} catch (err) {
  console.error(err.message)
}
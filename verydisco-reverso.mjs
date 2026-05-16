import { readFile } from 'node:fs/promises'

async function logFile() {
  try {
    const contents = (await readFile(process.argv[2], 'utf8')).trim()

    let result = []

    for (let arg of contents.split(' ')) {
      let splt = Math.floor(arg.length / 2)

      let word =
        arg.slice(splt) +
        arg.slice(0, splt)

      result.push(word)
    }

    console.log(result.join(' '))
  } catch (err) {
    console.error(err.message)
  }
}

logFile()
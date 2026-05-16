import { readFile }from 'node:fs/promises';
import { resolve }from 'node:path';
async function logFile() {
  try {
    const filePath = resolve(`./${process.argv[2]}`);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    let result = [] 
    for (let arg of contents.split(' ')) {
   let splt = Math.ceil(arg.length / 2)
   let word = arg.slice(splt,arg.length)+arg.slice(0,splt) 
    result.push(word) 
}
    console.log(result.join(' '));
  } catch (err) {
    console.error(err.message);
  }
}
logFile();
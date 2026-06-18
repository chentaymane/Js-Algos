import { writeFile } from "node:fs/promises";

const args = process.argv.slice(2);
let result = [] 
for (let arg of args[0].split(' ')) {
   let splt = Math.ceil(arg.length / 2)
   let word = arg.slice(splt,arg.length)+arg.slice(0,splt) 
    result.push(word) 
}
await writeFile("verydisco-forever.txt", result.join(' '));
 
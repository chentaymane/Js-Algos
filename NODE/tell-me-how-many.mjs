
import { readdir } from 'node:fs/promises';
let count= 0
try {
  const files = await readdir(process.argv[2]);
  for (const file of files) {

      count++
  }
} catch (err) {
  console.error(err);
}
console.log(count);

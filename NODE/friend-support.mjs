import http from 'node:http'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

http.createServer(async (req, res) => {
  try {
    const name = req.url.slice(1)
    const file = join('guests', name + '.json')

    const data = await readFile(file, 'utf8')

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(data)

  } catch (err) {
    res.writeHead(err.code === 'ENOENT' ? 404 : 500, {
      'Content-Type': 'application/json'
    })

    res.end(JSON.stringify({
      error: err.code === 'ENOENT' ? 'guest not found' : 'server failed'
    }))
  }
}).listen(5000, () => {
  console.log('Server listening on port 5000')
})
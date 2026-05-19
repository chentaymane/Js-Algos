// uninvited.mjs

import http from 'http'
import fs from 'fs/promises'
import path from 'path'

const PORT = 5000
const guestsDir = './guests'

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    if (req.method === 'POST') {
        try {
            const guestName = req.url.slice(1)

            let body = ''

            req.on('data', chunk => {
                body += chunk
            })

            req.on('end', async () => {
                try {
                    const data = JSON.parse(body)

                    const filePath = path.join(guestsDir, `${guestName}.json`)

                    await fs.writeFile(
                        filePath,
                        JSON.stringify(data, null, 2)
                    )

                    res.statusCode = 201
                    res.end(JSON.stringify(data, null, 2))
                } catch (err) {
                    res.statusCode = 500
                    res.end(JSON.stringify({
                        error: 'server failed'
                    }))
                }
            })
        } catch (err) {
            res.statusCode = 500
            res.end(JSON.stringify({
                error: 'server failed'
            }))
        }
    } else {
        res.statusCode = 500
        res.end(JSON.stringify({
            error: 'server failed'
        }))
    }
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
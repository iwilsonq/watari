// @flow
console.log('Starting watari api...')
import express from 'express'
import { createServer } from 'http';

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
})

const server = createServer(app)

server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))
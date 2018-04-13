// @flow
console.log('Starting watari api...')
import express from 'express'
import { createServer } from 'http';
import apiRoutes from './routes/api';
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
})

app.use('/api', apiRoutes)

const server = createServer(app)

server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))
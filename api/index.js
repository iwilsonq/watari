// @flow
console.log('Starting watari api...')
import express from 'express'
import bodyParser from 'body-parser'
import apiRoutes from './routes/api';

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json());

app.use('/api', apiRoutes)

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))
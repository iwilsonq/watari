// @flow
console.log('Starting watari api...')
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import keys from './config/keys'
import apiRoutes from './routes/api'
import BoardModel from './models/board'

const PORT = process.env.PORT || 3000

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI).then(
	() => {
		console.log('Connected to MongoDB!')
	},
	err => {
		console.error('Error connectin to MongoDB: ', err)
	}
)

const app = express()

app.use(bodyParser.json())

app.use('/api', apiRoutes)

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))

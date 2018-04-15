// @flow
console.log('Starting watari api...')
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import keys from './config/keys'
import apiRoutes from './routes/api'

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

// import type { Loader } from './loaders/types'
export type GraphQLContext = {
	// 	user: DBUser,
	loaders: {
		[key: string]: Loader
	}
}

app.listen(PORT, () =>
	console.log(`Listening at http://localhost:${PORT}`)
)

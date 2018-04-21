const debug = require('debug')('api:migrations:seed')
import mongoose from 'mongoose'
import keys from 'config/keys'
import { generate } from 'test'
import { BoardModel } from 'models/board'
import { CardModel } from 'models/card'

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI).then(
	() => {
		console.log('Connected to MongoDB!')
		insertBoardWithCards()
			.then(() => {
				console.log(`Successfully created board with cards!`)
				mongoose.disconnect()
			})
			.catch(e => {
				console.error('Error:', e)
				mongoose.disconnect()
			})
	},
	err => {
		console.error('Error connectin to MongoDB: ', err)
	}
)

function insertBoardWithCards() {
	const { board, cards } = generate.createBoardWithCards(20)
	console.log(cards)
	return Promise.all([
		BoardModel.create(board),
		CardModel.insertMany(cards)
	])
}

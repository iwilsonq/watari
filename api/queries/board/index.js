// @flow
import board from './rootBoard'
import cardConnection from './cardConnection'

export default {
	Query: {
		board,
		boards: board
	},
	Board: {
		cardConnection
	}
}

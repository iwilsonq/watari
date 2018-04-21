import cardConnection from '../cardConnection'
import { generate } from 'test'
import { getCardsByBoard } from 'models/card'
jest.mock('models/card')

const createResolverArgs = args => [
	{ id: 'board-id-1' },
	{
		...args
	},
	{}
]

let cards = generate.cards()

let expected = {
	pageInfo: {
		hasPrevPage: false,
		hasNextPage: false
	},
	edges: cards.map(card => ({ node: card, cursor: '' }))
}

getCardsByBoard.mockResolvedValue(cards)

describe('cardConnection', () => {
	it('fetches cards by boardId', async () => {
		const args = createResolverArgs()
		const actual = await cardConnection(...args)
		expect(actual).toEqual(expected)
	})
})

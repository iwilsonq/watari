import createBoard from '../createBoard'
import * as BoardModel from 'models/board'
jest.mock('models/board')

let boardInput = {
	name: 'Watari Board 2',
	team: 'Watari Team',
	description: 'The second board for this incredible app.',
	isPrivate: false
}

let expectedBoard = {
	id: 'abc123',
	name: 'Watari Board 2',
	slug: 'watari-board-2',
	team: 'Watari Team',
	teamSlug: 'watari-team',
	description: 'The second board for this incredible app.',
	isPrivate: false
}
BoardModel.createBoard.mockResolvedValue(expectedBoard)

const createResolverArgs = args => [
	{},
	{
		...boardInput,
		...args
	},
	{
		user: {
			userId: 'abc123'
		}
	}
]

describe('createBoard mutation', () => {
	it('creates a new board', async () => {
		const args = createResolverArgs()
		const actual = await createBoard(...args)
		expect(actual).toEqual(expectedBoard)
	})
})

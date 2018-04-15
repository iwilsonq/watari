import rootBoard from 'queries/board/rootBoard'
import * as Board from 'models/board'
jest.mock('models/board')

const loaders = {
	board: {
		load: jest.fn(id => ({ id }))
	}
}

const createResolverArgs = args => [
	{},
	{
		...args
	},
	{ loaders }
]

it('should fail when env not test ', () => {
	expect(process.env.NODE_ENV).toEqual('test')
})

describe('Board root query', () => {
	let board = {
		id: 'abc123',
		teamSlug: 'watari-team',
		boardSlug: 'watari-testing'
	}

	it('returns a board from loader if id present', async () => {
		Board.getBoardById.mockResolvedValue(board)
		let args = createResolverArgs({ id: board.id })
		let actual = await rootBoard(...args)
		expect(actual.id).toBe(board.id)
	})

	it('returns a board if team slug and board slug are present', async () => {
		Board.getBoardBySlug.mockResolvedValue(board)
		let args = createResolverArgs({
			teamSlug: board.teamSlug,
			boardSlug: board.boardSlug
		})
		let actual = await rootBoard(...args)
		expect(actual.id).toBe(board.id)
	})

	it('returns an error if no arguments specified', async () => {
		let args = createResolverArgs()
		let actual = await rootBoard(...args)
		expect(actual.name).toBe('Error')
	})

	it('returns an error if no only one slug specified', async () => {
		let args = createResolverArgs({
			teamSlug: board.teamSlug
		})
		let actual = await rootBoard(...args)
		expect(actual.name).toBe('Error')
	})
})

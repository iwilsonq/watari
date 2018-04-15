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
	const board = {
		id: 'abc123',
		teamSlug: 'watari-team',
		boardSlug: 'watari-testing'
	}

	it('returns a board from loader if id present', async () => {
		const args = createResolverArgs({ id: board.id })
		const actual = await rootBoard(...args)
		expect(actual.id).toBe(board.id)
	})

	it('returns a board if team slug and board slug are present', async () => {
		Board.getBoardBySlug.mockResolvedValue(board)
		const args = createResolverArgs({
			teamSlug: board.teamSlug,
			boardSlug: board.boardSlug
		})
		const actual = await rootBoard(...args)
		expect(actual.id).toBe(board.id)
	})

	it('returns an error if no arguments specified', async () => {
		const args = createResolverArgs()
		let actual = await rootBoard(...args)
		expect(actual.name).toBe('Error')
	})

	it('returns an error if no only one slug specified', async () => {
		const args = createResolverArgs({
			teamSlug: board.teamSlug
		})
		let actual = await rootBoard(...args)
		expect(actual.name).toBe('Error')
	})
})

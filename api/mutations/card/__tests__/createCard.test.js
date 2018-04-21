import createCard from '../createCard'
import * as CardModel from 'models/card'
jest.mock('models/card')

let cardInput = {
	name: 'Do some work.',
	description:
		'I have been very lazy recently. Its time to get down to business',
	boardId: 'abc123',
	team: 'Watari Team',
	teamSlug: 'watari-team',
	list: 'to-do'
}

let expectedCard = {
	name: 'Do some work.',
	team: 'Watari Team',
	description:
		'I have been very lazy recently. Its time to get down to business',
	list: 'to-do',
	labels: [],
	boardId: 'abc123',
	team: 'Watari Team',
	teamSlug: 'watari-team'
}

CardModel.createCard.mockResolvedValue(expectedCard)

const createResolverArgs = args => [
	{},
	{
		input: {
			...cardInput,
			...args
		}
	},
	{
		user: {
			userId: 'abc123'
		}
	}
]

describe('createCard', () => {
	it('returns error if no boardId present', async () => {
		const args = createResolverArgs({ boardId: undefined })
		const actual = await createCard(...args)
		expect(actual.name).toBe('Error')
	})

	it('creates a card', async () => {
		const args = createResolverArgs()
		const actual = await createCard(...args)
		expect(actual).toEqual(expectedCard)
	})
})

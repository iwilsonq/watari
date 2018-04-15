import { deriveCreateBoard } from 'models/board'

let expectedBoard = {
	name: 'Watari Board 2',
	slug: 'watari-board-2',
	team: 'Watari Team',
	teamSlug: 'watari-team',
	description: 'The second board for this incredible app.',
	isPrivate: false
}

let boardInput = {
	name: 'Watari Board 2',
	team: 'Watari Team',
	description: 'The second board for this incredible app.',
	isPrivate: false
}

describe('deriveCreateBoard', () => {
	it('derives input arguments for createBoard', () => {
		const actual = deriveCreateBoard(boardInput)
		expect(actual).toEqual(expectedBoard)
	})
})

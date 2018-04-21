// @flow
import faker from 'faker'
import cuid from 'cuid'
import { slugify } from 'utils/slugify'
import type { Board, List } from 'models/board'
import type { Card } from 'models/card'

const team = 'Watari Team'
const teamSlug = 'watari-team'
const lists = ['Stories', 'To Do', 'In Progress', 'Testing', 'Done']
const labels = ['Bug', 'Feature', 'Test', 'Research', 'Engage']

const randomElement = (arr: Array<any>): any => {
	return arr[Math.floor(Math.random() * arr.length)]
}

const randomPerson = (): string => {
	return faker.name.findName()
}

const randomPeople = (peopleCount: number = 2): Array<string> => {
	let people = []
	for (let i = 0; i < peopleCount; i++) {
		people.push(randomPerson())
	}
	return people
}

const createLists = (listNames: Array<string> = lists): Array<List> => {
	return listNames.map((name, order) => ({
		name,
		order
	}))
}

export const createBoard = (overrides = {}): Board => {
	const title = `${faker.hacker.noun()} Board`
	const slug = slugify(title)
	const team = `Team ${faker.hacker.adjective()} ${faker.hacker.noun()}`
	const teamSlug = slugify(team)

	return {
		_id: cuid(),
		title,
		slug,
		team,
		teamSlug,
		description: faker.lorem.sentences(2),
		isPrivate: false,
		lists: createLists(),
		created: Date.now(),
		modified: Date.now(),
		...overrides
	}
}

export const createCard = (
	{
		_id: boardId,
		team,
		teamSlug,
		lists
	}: {
		_id: string,
		team: string,
		teamSlug: string,
		lists: Array<List>
	},
	overrides: any = {}
): Card => {
	const members = randomPerson()
	return {
		boardId,
		_id: cuid(),
		title: faker.lorem.words(7),
		description: faker.lorem.sentences(2),
		team,
		teamSlug,
		author: randomPerson(),
		members: randomPeople(2),
		labels: [randomElement(labels)],
		list: randomElement(lists).name,
		created: +faker.date.recent(2),
		modified: +faker.date.recent(1),
		...overrides
	}
}

export const createBoardWithCards = (
	cardCount: number,
	overrides: any = {}
) => {
	const board = createBoard()
	const cards = createCards(cardCount, board)
	return {
		board,
		cards
	}
}

export const createCards = (cardCount: number = 3, board: Board) => {
	const results = new Array(cardCount)
	for (let i = 0; i < cardCount; i++) {
		results.push(createCard(board))
	}
	return results
}

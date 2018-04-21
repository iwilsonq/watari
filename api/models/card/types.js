/* Card types */

export type Card = {
	id: string,
	boardId: string,
	title: string,
	author: string,
	team: string,
	teamSlug: string,
	description: string,
	list: string,
	labels: Array<string>,
	created: number,
	modified: number
}

export type CreateCardInput = {
	input: {
		title: string,
		team: string,
		description: string,
		list: string
	}
}

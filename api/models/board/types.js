export type List = {
	name: string,
	order: number
}

export type Board = {
	id: string,
	title: string,
	slug: string,
	team: string,
	teamSlug: string,
	description: string,
	isPrivate: boolean,
	lists: Array<string>,
	created: Date,
	modified: Date
}

type GetBoardByIdArgs = {|
	id: string
|}

type GetBoardBySlugArgs = {|
	teamSlug: string,
	boardSlug: string
|}

export type GetBoardArgs = GetBoardByIdArgs | GetBoardBySlugArgs

export type CreateBoardInput = {
	input: {
		title: string,
		team: string,
		description: string,
		isPrivate: boolean
	}
}

export type DeleteBoardInput = {
	id: string
}

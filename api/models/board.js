// @flow
import mongoose from 'mongoose'
import { slugify } from 'utils/slugify'

const Schema = mongoose.Schema

const ListSchema = new Schema({
	name: { type: String, required: true, default: 'To-Do' },
	cards: { type: [Schema.Types.ObjectId], ref: 'Card' },
	order: { type: Number, default: 0 }
})

const BoardSchema = new Schema({
	name: { type: String, required: true },
	slug: String,
	team: String,
	teamSlug: String,
	description: String,
	isPrivate: Boolean,
	owner: { type: Schema.Types.ObjectId, ref: 'User' },
	members: { type: [Schema.Types.ObjectId], ref: 'User' },
	cards: { type: [Schema.Types.ObjectId], ref: 'Card' },
	lists: [ListSchema],
	created: { type: Date, default: Date.now },
	modified: { type: Date }
})

const BoardModel = mongoose.model('Board', BoardSchema, 'boards')

/* Board types */

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
		name: string,
		team: string,
		description: string,
		isPrivate: boolean
	}
}

/* Board API */

const getBoardById = (boardId: string) => {
	return BoardModel.findById(boardId)
}

const getBoardBySlug = (boardSlug: string, teamSlug: string) => {
	return BoardModel.findOne({
		team: teamSlug,
		slug: boardSlug
	})
}

const deriveCreateBoard = ({ name, team, ...input }) => {
	const boardSlug = slugify(name)
	const teamSlug = slugify(team)
	return {
		name,
		team,
		slug: boardSlug,
		teamSlug,
		...input
	}
}

const createBoard = ({ input }): Promise => {
	const createBoardArgs = deriveCreateBoard(input)
	return BoardModel.create(createBoardArgs)
}

export { getBoardById, getBoardBySlug, createBoard, deriveCreateBoard }

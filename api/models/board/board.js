// @flow
import mongoose from 'mongoose'
import cuid from 'cuid'
import { slugify } from 'utils/slugify'
import type { CreateBoardInput, Board } from './types'

const Schema = mongoose.Schema

const ListSchema = new Schema({
	name: { type: String, required: true },
	order: { type: Number }
})

const BoardSchema = new Schema(
	{
		_id: { type: String, required: true },
		title: { type: String, required: true },
		slug: String,
		team: String,
		teamSlug: String,
		description: String,
		isPrivate: Boolean,
		lists: [ListSchema],
		owner: String,
		members: String,
		created: { type: Number, default: Date.now() },
		modified: { type: Number, default: Date.now() }
	},
	{ _id: false }
)

export const BoardModel = mongoose.model('Board', BoardSchema, 'boards')

/* Board API */

const getBoardById = (boardId: string) => {
	return BoardModel.findById(boardId)
}

const getBoardBySlug = (boardSlug: string, teamSlug: string) => {
	return BoardModel.findOne({
		teamSlug,
		slug: boardSlug
	})
}

const getBoardsByTeam = (teamSlug: string) => {
	return BoardModel.find({ teamSlug })
}

const deriveCreateBoard = ({
	title,
	team,
	...input
}: {
	title: string,
	team: string
}) => {
	const boardSlug = slugify(title)
	const teamSlug = slugify(team)
	return {
		title,
		team,
		slug: boardSlug,
		teamSlug,
		...input
	}
}

const createBoard = ({ input }: CreateBoardInput): Promise<Board> => {
	const createBoardArgs = deriveCreateBoard(input)
	return BoardModel.create({
		_id: cuid(),
		...createBoardArgs
	})
}

const deleteBoard = (boardId: string) => {
	return BoardModel.findOneAndRemove({ _id: boardId })
}

export {
	getBoardById,
	getBoardBySlug,
	getBoardsByTeam,
	createBoard,
	deleteBoard,
	deriveCreateBoard
}

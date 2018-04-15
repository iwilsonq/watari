// @flow
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ListSchema = new Schema({
	name: { type: String, required: true, default: 'To-Do' },
	cards: { type: [Schema.Types.ObjectId], ref: 'Card' },
	order: { type: Number, default: 0 }
})

const BoardSchema = new Schema({
	name: { type: String, required: true },
	team: String,
	slug: String,
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

export { getBoardById, getBoardBySlug }

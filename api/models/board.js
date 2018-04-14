import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ListSchema = new Schema({
	name: { type: String, required: true, default: 'To-Do' },
	cards: { type: [Schema.Types.ObjectId], ref: 'Card' },
	order: { type: Number, default: 0 }
})

const BoardSchema = new Schema({
	name: { type: String, required: true },
	description: String,
	isPrivate: Boolean,
	owner: { type: Schema.Types.ObjectId, ref: 'User' },
	members: { type: [Schema.Types.ObjectId], ref: 'User' },
	cards: { type: [Schema.Types.ObjectId], ref: 'Card' },
	lists: [ListSchema],
	created: { type: Date, default: Date.now },
	modified: { type: Date }
})

export default mongoose.model('Board', BoardSchema, 'boards')

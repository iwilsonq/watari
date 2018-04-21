// @flow
import mongoose from 'mongoose'
import cuid from 'cuid'
import { slugify } from 'utils/slugify'
import type { PaginationOptions } from 'types/general'
import type { CreateCardInput, Card } from 'models/card'

const Schema = mongoose.Schema

const CardSchema = new Schema({
	_id: { type: String, required: true },
	boardId: { type: String, required: true },
	title: { type: String, required: true },
	team: String,
	teamSlug: String,
	description: String,
	list: String,
	labels: [String],
	author: String,
	members: [String],
	created: { type: Number, default: Date.now },
	modified: { type: Number, default: Date.now }
})

export const CardModel = mongoose.model('Card', CardSchema, 'cards')

/* Card API */

const createCard = ({ input }: CreateCardInput): Promise<Card> => {
	return CardModel.create({
		_id: cuid(),
		...input
	})
}

const getCardsByBoard = (
	boardId: string,
	options: PaginationOptions
): Promise<Array<Card>> => {
	return CardModel.find({ boardId }, null, { limit: options.first })
}

const deleteCard = (cardId: string) => {
	return CardModel.findOneAndRemove({ _id: cardId })
}

export { getCardsByBoard, createCard, deleteCard }

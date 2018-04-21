const debug = require('debug')('api:board-card-connection')
import { getCardsByBoard } from 'models/card'
import UserError from 'utils/UserError'
import { encode, decode } from 'utils/base64'
import type { GraphQLContext } from '../'

export default async (
	{ id }: any,
	{
		first,
		after,
		last,
		before
	}: { first: number, after: string, last: number, before: string },
	{ user }: GraphQLContext
) => {
	debug(`get messages for ${id}`)
	let cursor = after || before
	try {
		cursor = decode(cursor)
		if (cursor) cursor = parseInt(cursor, 10)
	} catch (err) {
		debug(err)
		throw new UserError(
			'Invalid cursor passed to board.cardConnection.'
		)
	}
	if (cursor) debug(`cursor: ${cursor}`)

	let options = {
		first: first ? first : after ? 50 : null,
		last: last ? last : before ? 50 : null,
		// Set after/before to the cursor depending on which one was requested by the user
		after: after ? cursor : null,
		before: before ? cursor : null
	}

	debug('pagination options for query:', options)

	options.first && options.first++
	options.last && options.last++

	const cards = await getCardsByBoard(id, options)

	return {
		pageInfo: {
			hasPrevPage: false,
			hasNextPage: false
		},
		edges: cards.map(card => ({ node: card, cursor }))
	}
}

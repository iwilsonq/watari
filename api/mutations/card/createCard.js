import type { GraphQLContext } from '../../index'
import type { CreateCardInput } from 'models/card'
import { createCard } from 'models/card'
import UserError from 'utils/UserError'

export default async (
	_: any,
	args: CreateCardInput,
	{ user }: GraphQLContext
) => {
	// board must be present to create card
	if (args.input && args.input.boardId) {
		return createCard(args)
	}

	return new UserError('Need board to create card.')
}

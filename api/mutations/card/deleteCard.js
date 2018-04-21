// @flow
import type { GraphQLContext } from '../../index'
import { deleteCard } from 'models/card'
import UserError from 'utils/UserError'

export default async (
	_: any,
	{ id }: { id: string },
	{ user }: GraphQLContext
) => {
	if (id) {
		return await deleteCard(id)
	}

	return new UserError('Need card ID to delete card.')
}

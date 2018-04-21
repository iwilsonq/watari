// @flow
import type { GraphQLContext } from '../../'
import { deleteBoard } from 'models/board'
import UserError from 'utils/UserError'

export default async (
	_: any,
	{ id }: { id: string },
	{ user }: GraphQLContext
) => {
	if (id) {
		return await deleteBoard(id)
	}

	return new UserError('Need board ID to delete board.')
}

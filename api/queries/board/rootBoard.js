// @flow
import type { GraphQLContext } from '../../'
import type { GetBoardArgs } from 'models/board'
import { getBoardBySlug, getBoardById } from 'models/board'
import UserError from 'utils/UserError'

export default async (
	_: any,
	args: GetBoardArgs,
	{ loaders }: GraphQLContext
): Promise => {
	if (args.id) {
		return await getBoardById(args.id)
		// return await loaders.board.load(args.id)
	}
	if (args.teamSlug && args.boardSlug) {
		return await getBoardBySlug(args.teamSlug, args.boardSlug)
	}
	return new UserError('We couldn’t find this board')
}

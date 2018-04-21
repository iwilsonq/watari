// @flow
import type { GraphQLContext } from '../../'
import type { GetBoardArgs, Board } from 'models/board'
import {
	getBoardBySlug,
	getBoardById,
	getBoardsByTeam
} from 'models/board'
import UserError from 'utils/UserError'

export default async (
	_: any,
	args: GetBoardArgs,
	{ loaders }: GraphQLContext
): Promise<Board> => {
	if (args.id) {
		return await getBoardById(args.id)
		// return await loaders.board.load(args.id)
	}
	if (args.teamSlug && args.boardSlug) {
		return await getBoardBySlug(args.teamSlug, args.boardSlug)
	}

	if (args.teamSlug) {
		return await getBoardsByTeam(args.teamSlug)
	}

	return new UserError('We couldn’t find this board')
}

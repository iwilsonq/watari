// @flow
import type { GraphQLContext } from '../../'
import type { CreateBoardInput } from 'models/board'
import { createBoard } from 'models/board'

export default async (
	_: any,
	args: CreateBoardInput,
	{ user }: GraphQLContext
) => {
	return createBoard(args)
}

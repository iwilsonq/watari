import merge from 'lodash/merge'
import { makeExecutableSchema } from 'graphql-tools'

import GeneralTypes from 'types/general'
import Scalars from 'types/scalars'
import Board from 'types/board'
import List from 'types/List'
import User from 'types/User'
import Card from 'types/card'
import scalars from 'types/scalars'

import BoardQueries from 'queries/board'

import BoardMutations from 'mutations/board'
import CardMutations from 'mutations/card'

const Root = /* GraphQL */ `
  type Query {
		dummy: String
	}

	type Mutation {
		dummy: String
	}

  schema {
		query: Query
		mutation: Mutation
	}
`

const resolvers = merge(
	{},
	scalars.resolvers,
	BoardQueries,
	BoardMutations,
	CardMutations
)

const schema = makeExecutableSchema({
	typeDefs: [
		Root,
		Scalars.typeDefs,
		Board,
		List,
		User,
		Card,
		GeneralTypes
	],
	resolvers
})

export default schema

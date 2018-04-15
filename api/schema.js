import merge from 'lodash/merge'
import { makeExecutableSchema } from 'graphql-tools'

import GeneralTypes from './types/general'
import Scalars from './types/scalars'
import Board from './types/Board'
import List from './types/List'
import User from './types/User'
import Card from './types/Card'
import scalars from './types/scalars'

import BoardQueries from 'queries/Board'

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

const resolvers = merge({}, scalars.resolvers, BoardQueries)

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

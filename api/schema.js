import merge from 'lodash/merge'
import { makeExecutableSchema } from 'graphql-tools'

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

const resolvers = {}

const schema = makeExecutableSchema({
  typeDefs: [],
  resolvers
})

export default schema
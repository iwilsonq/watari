const Card = /* GraphQL */ `
  type Attachment {
		attachmentType: String
		data: String
	}

  type Card {
    id: ID!
    boardId: ID!
    title: String!
    description: String
    team: String
    teamSlug: String
    labels: [String]
    list: String
    author: String
    members: [String]
  }

  extend type Query {
		card(id: ID!): Card
	}

  input CreateCardInput {
    title: String!
    boardId: String!
    team: String
    teamSlug: String
    description: String
    list: String
    labels: [String]
  }

  extend type Mutation {
    createCard(input: CreateCardInput!): Card
    deleteCard(id: ID!): Card
  }
`

export default Card

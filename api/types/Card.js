const Card = /* GraphQL */ `
  type Attachment {
		attachmentType: String
		data: String
	}

  type Card {
    id: ID!
    title: String!
    description: String
    labels: [String]
    column: String
    board: String
    author: User
    assignee: User
    attachment: [Attachment]

    created: Date
    modified: Date
  }

  extend type Query {
		card(id: ID!): Card
	}
`

export default Card
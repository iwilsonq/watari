const User = /* GraphQL */ `
  type UserCardsConnection {
    pageInfo: PageInfo!
    edges: [UserCardEdge]
  }

  type UserCardEdge {
    cursor: String!
    node: Card!
  }

  type UserMetaData {
    cards: Int
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    avatarURL: String
    description: String
    email: String
    lastActive: Boolean
    board: Board
    cardConnection(first: Int = 10, after: String): UserCardsConnection!


    metaData: BoardMetaData
    created: Date
    modified: Date
  }

  extend type Query {
    user(id: ID): User
    currentUser: User
  }
`

export default User


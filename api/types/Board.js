const Board = /* GraphQL */ `
  type BoardMembersConnection {
    pageInfo: PageInfo!
    edges: [BoardMemberEdge]
  }

  type BoardMemberEdge {
    cursor: String!
    node: User!
  }

  type BoardCardsConnection {
    pageInfo: PageInfo!
    edges: [BoardCardEdge]
  }

  type BoardCardEdge {
    cursor: String!
    node: Card!
  }

  type BoardMetaData {
    members: Int
    cards: Int
  }

  type Board {
    id: ID!
    title: String!
    slug: String
    team: String
    teamSlug: String
    description: String
    isPrivate: Boolean
    owner: User
    memberConnection(first: Int = 10, after: String): BoardMembersConnection!
    cardConnection(first: Int = 10, after: String): BoardCardsConnection!
    lists: List

    metaData: BoardMetaData
    created: Date
    modified: Date
  }

  extend type Query {
    board(id: ID, teamSlug: String, boardSlug: String): Board
    boards(teamSlug: String): [Board]
  }

  input CreateBoardInput {
    title: String!
		description: String
    team: String
		isPrivate: Boolean
  }

  extend type Mutation {
    createBoard(input: CreateBoardInput): Board
    deleteBoard(id: ID!): Board
  }
`

export default Board

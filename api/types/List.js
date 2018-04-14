const List = /* GraphQL */ `
  type ListCardsConnection {
    pageInfo: PageInfo!,
    edges: [ListCardEdge]
  }
  
  type ListCardEdge {
    cursor: String!
    node: List!
  }

  type List {
    name: String
    order: Int
    cardConnection: [ListCardsConnection]
  }
`

export default List

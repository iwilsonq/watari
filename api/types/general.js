const general = /* GraphQL */ `
	type PageInfo {
		hasNextPage: Boolean
		hasPreviousPage: Boolean
	}
`

export type PaginationOptions = {
	first: string,
	after: string,
	before: string,
	last: string
}

export default general

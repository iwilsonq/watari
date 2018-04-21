import { slugify } from '../slugify'

const title1 = 'Watari the ultimate product management APP'
const slug1 = 'watari-the-ultimate-product-management-app'

const title2 = 'Watari!the@^ultimate*app&for()all'
const slug2 = 'wataritheultimateappforall'

const title3 = 'whack a mole n'
const slug3 = 'whack-a-mole-n'

describe('slugify', () => {
	it('takes a title string and slugifies it', () => {
		const actual = slugify(title1)
		expect(actual).toBe(slug1)
	})

	it('parses out special characters', () => {
		const actual = slugify(title2)
		expect(actual).toBe(slug2)
	})

	it('handles non-words', () => {
		const actual = slugify(title3)
		expect(actual).toBe(slug3)
	})
})

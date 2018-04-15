import { slugify } from '../slugify'

const name1 = 'Watari the ultimate product management APP'
const slug1 = 'watari-the-ultimate-product-management-app'

const name2 = 'Watari!the@^ultimate*app&for()all'
const slug2 = 'wataritheultimateappforall'

const name3 = 'whack a mole n'
const slug3 = 'whack-a-mole-n'

describe('slugify', () => {
	it('takes a name string and slugifies it', () => {
		const actual = slugify(name1)
		expect(actual).toBe(slug1)
	})

	it('parses out special characters', () => {
		const actual = slugify(name2)
		expect(actual).toBe(slug2)
	})

	it('handles non-words', () => {
		const actual = slugify(name3)
		expect(actual).toBe(slug3)
	})
})

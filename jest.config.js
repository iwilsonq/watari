// @flow
// The Jest configuration
const path = require('path')

module.exports = {
	setupTestFrameworkScriptFile: path.resolve(
		__dirname,
		'./test/setup-test-framework'
	),
	testPathIgnorePatterns: ['/node_modules/']
}

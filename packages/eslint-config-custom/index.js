module.exports = {
	extends: ['neon/common', 'neon/typescript', 'neon/prettier', 'turbo'],
	rules: {
		'@typescript-eslint/consistent-type-definitions': [
			'error',
			'interface',
		],
	},
};

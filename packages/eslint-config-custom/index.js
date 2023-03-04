module.exports = {
	extends: ['next', 'turbo', 'prettier'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'react/jsx-key': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'class-methods-use-this': 'off',
	},
};

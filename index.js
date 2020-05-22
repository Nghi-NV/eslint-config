'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		'import',
		'eslint-comments',
		'jsdoc',
		'promise',
		'filenames',
		'unicorn'
		// Disabled for now. Not sure if it is worth it.
		// 'compat'
	],
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
		'plugin:jsdoc/recommended',
		...[
			'./rules/possible-errors',
			'./rules/best-practices',
			'./rules/variables',
			'./rules/eslint-node',
			'./rules/stylistic-issues',
			'./rules/es6'
		].map(require.resolve)
	],
	env: {
		es6: true,
		browser: true,
		node: true
	},
	settings: {
		'import/ignore': [
			'node_modules',
			'.json$',
			'.(scss|less|css|styl)$'
		]
	},
	rules: {
		// Disabled for now. Not sure if it is worth it.
		// 'compat/compat': 'warn',

		'filenames/match-exported': 2,
		// Disabled for now as it is a bit annoying
		// 'filenames/match-regex': [
		// 	2,
		// 	'^[A-Z]?[a-z]+(?:[A-Z][a-z]+)*$',
		// 	false
		// ],
		'filenames/no-index': 0,
		'unicorn/better-regex': 'error',
		'unicorn/catch-error-name': 'error',
		'unicorn/consistent-function-scoping': 'error',
		'unicorn/custom-error-definition': 'off',
		'unicorn/error-message': 'error',
		'unicorn/escape-case': 'error',
		'unicorn/expiring-todo-comments': 'error',
		'unicorn/explicit-length-check': 'error',
		'unicorn/filename-case': 'error',
		'unicorn/import-index': 'error',
		'unicorn/new-for-builtins': 'error',
		'unicorn/no-abusive-eslint-disable': 'error',
		'unicorn/no-array-instanceof': 'error',
		'unicorn/no-console-spaces': 'error',
		'unicorn/no-fn-reference-in-iterator': 'warn',
		'unicorn/no-for-loop': 'error',
		'unicorn/no-hex-escape': 'error',
		'unicorn/no-keyword-prefix': 'off',
		'no-nested-ternary': 'off',
		'unicorn/no-nested-ternary': 'error',
		'unicorn/no-new-buffer': 'error',
		'unicorn/no-null': 'error',
		'unicorn/no-process-exit': 'error',
		'unicorn/no-reduce': 'error',
		'unicorn/no-unreadable-array-destructuring': 'error',
		'unicorn/no-unsafe-regex': 'off',
		'unicorn/no-unused-properties': 'off',
		'unicorn/no-useless-undefined': 'error',
		'unicorn/no-zero-fractions': 'error',
		'unicorn/number-literal-case': 'error',
		'unicorn/prefer-add-event-listener': 'error',
		'unicorn/prefer-dataset': 'error',
		'unicorn/prefer-event-key': 'error',
		'unicorn/prefer-flat-map': 'error',
		'unicorn/prefer-includes': 'error',
		'unicorn/prefer-modern-dom-apis': 'warn',
		'unicorn/prefer-negative-index': 'error',
		'unicorn/prefer-node-append': 'error',
		'unicorn/prefer-node-remove': 'error',
		'unicorn/prefer-number-properties': 'error',
		'unicorn/prefer-optional-catch-binding': 'error',
		'unicorn/prefer-query-selector': 'error',
		'unicorn/prefer-reflect-apply': 'error',
		'unicorn/prefer-replace-all': 'off',
		'unicorn/prefer-set-has': 'error',
		'unicorn/prefer-spread': 'error',
		'unicorn/prefer-starts-ends-with': 'error',
		'unicorn/prefer-string-slice': 'error',
		'unicorn/prefer-text-content': 'error',
		'unicorn/prefer-trim-start-end': 'error',
		'unicorn/prefer-type-error': 'error',
		'unicorn/prevent-abbreviations': 'warn',
		'unicorn/string-content': 'off',
		'unicorn/throw-new-error': 'error'
	}
};

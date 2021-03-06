module.exports = {
  extends: ['airbnb-base'],
  env: {
    'jest': true,
  },
  parserOptions: {
    'parser': 'babel-eslint',
    'ecmaVersion': 2020,
  },
  rules: {
    'max-classes-per-file': ['error', 9],
    semi: [2, 'never'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'space-before-function-paren': [2, 'always'],
    'max-params': ['error', { max: 3 }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'function-paren-newline': ['error', 'multiline'],
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  }
}
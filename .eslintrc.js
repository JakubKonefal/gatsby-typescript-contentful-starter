module.exports = {
  plugins: ['@typescript-eslint', 'prettier', 'eslint-plugin-prettier'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    // Disable prop-types as we use TypeScript for type checking
    'react/prop-types': 'off',
    // Disable unescaped entities checking
    'react/no-unescaped-entities': 'off',
    // Disable because of performance issues
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // interface start with capital I
    '@typescript-eslint/interface-name-prefix': 'off',
    // allow "any" as type
    '@typescript-eslint/no-explicit-any': 'off',
    // allow @ts-ignore for testing purposes
    '@typescript-eslint/ban-ts-ignore': 'off',
    // Enable prettier rules
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/prefer-default-export': 'warn',
    '@typescript-eslint/semi': 'off',
    'arrow-body-style': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
  },
}

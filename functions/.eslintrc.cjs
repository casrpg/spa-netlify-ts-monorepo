module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
    {
      'files': ['**/*.spec.ts', '**/*.test.ts'],
      'parserOptions': {
        'project': './tsconfig.tests.json'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.tests.json']
  },
  ignorePatterns: ['node_modules'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'n/handle-callback-err': 'off',
  }
}

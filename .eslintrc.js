module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'sort-keys-fix'],
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'max-len': [
      'error',
      {
        code: 80,
        comments: 180,
        ignoreUrls: true,
      },
    ],
    'max-lines': ['error', 120],
    'react/jsx-curly-newline': [
      0,
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],
    'react/jsx-max-depth': ['error', { max: 7 }],
    'react/jsx-max-props-per-line': [
      1,
      { maximum: 3, when: 'always' },
    ],
    'react/jsx-sort-props': 'error',
    'react/jsx-wrap-multilines': [
      1,
      {
        arrow: 'parens',
        assignment: 'parens',
        condition: 'parens-new-line',
        declaration: 'parens',
        logical: 'parens',
        prop: 'parens',
        return: 'parens',
      },
    ],
    'react/require-default-props': 0,
    'sort-keys': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'space-before-function-paren': 0,
    'sort-keys-fix/sort-keys-fix': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};

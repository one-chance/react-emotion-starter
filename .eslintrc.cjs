module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier'],
  plugins: [
    'import',
    'react',
    'react-hooks',
    'react-refresh',
    '@typescript-eslint',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.[jt]s',
          '**/*.spec.[jt]s',
          '**/*.test.[jt]sx',
          '**/*.spec.[jt]sx',
        ],
      },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '{react,react-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern:
              '{@apis/*,@assets/*,@components/*,@constants/*,@hooks/*,@interfaces/*,@pages/*,@routes/*,@states/*,@styles/*,@utils/*}',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandLast: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-redeclare': 'off',
  },
};

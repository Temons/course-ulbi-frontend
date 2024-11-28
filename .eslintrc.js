module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  settings: {
    react: {
      version: "detect"  
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'arttraf-eslint-fsd-plugin',
    'unused-imports',
    'import',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-undef': 'off',
    'unused-imports/no-unused-imports': 'error',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'data-testid',
          'to',
          'name',
          'target',
          'justify',
          'align',
          'direction',
          'gap',
          'role',
          'as',
          'border',
          'feature',
          'color',
          'variant',
          'size',
          'wrap',
        ],
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'react/display-name': 'off',
    'arttraf-eslint-fsd-plugin/path-checker': ['error', { alias: '@' }],
    'arttraf-eslint-fsd-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    'arttraf-eslint-fsd-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.story.*',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'react/jsx-max-props-per-line': ['error', { maximum: 5 }],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};

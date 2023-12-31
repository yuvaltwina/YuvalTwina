module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['vite.config.ts'],
      excludedFiles: 'vite.config.ts',
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'linebreak-style': 'off',
    // Configure prettier
    // Disallow the any type.
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    // 'react-hooks/exhaustive-deps': 'off',
    // Enforce the use of the shorthand syntax.
    'object-shorthand': 'error',
    'no-console': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};

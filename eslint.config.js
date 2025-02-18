// @ts-check
const eslint = require('@eslint/js')
const tseslint = require('typescript-eslint')
const angular = require('angular-eslint')
const prettierPlugin = require('eslint-plugin-prettier')
const globals = require('globals')
const ngrx = require('@ngrx/eslint-plugin/v9')
const prettierConfig = require('eslint-config-prettier')

module.exports = tseslint.config(
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,js}'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      ...ngrx.configs.all
    ],
    plugins: {
      prettier: prettierPlugin,
      '@typescript-eslint': tseslint.plugin,
      '@ngrx': ngrx
    },
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.es2020,
        ...globals.node,
        ...globals.browser
      }
    },
    processor: angular.processInlineTemplates,
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }]
    },
    ignores: ['node_modules', 'dist']
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {}
  }
)

import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import sonarjs from 'eslint-plugin-sonarjs';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        node: true,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      sonarjs,
    },
    rules: {
      'prettier/prettier': 'error',
      'sonarjs/no-duplicate-string': 'warn',
      complexity: ['warn', { max: 10 }],
      'max-lines': ['warn', 300],
      'max-depth': ['warn', 4],
      'max-params': ['warn', 4],
    },
  },
  prettierConfig,
];

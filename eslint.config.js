import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
import babelParser from '@babel/eslint-parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  // Base JS rules
  js.configs.recommended,

  // Babel parser for JSX
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        babelOptions: { presets: ['@babel/preset-react'] },
      },
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        alert: 'readonly',
        fetch: 'readonly',
        localStorage: 'readonly',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
      sonarjs: sonarjsPlugin,
    },
    rules: {
      // Prettier enforcement
      'prettier/prettier': 'error',

      // SonarJS rules
      'sonarjs/no-duplicate-string': 'warn',

      // Complexity and maintainability
      complexity: ['warn', { max: 10 }],
      'max-lines': ['warn', 300],
      'max-depth': ['warn', 4],
      'max-params': ['warn', 4],

      // JSX variables handled by react plugin
      'no-unused-vars': 'off',

      // React specific rules
      'react/jsx-uses-react': 'off', // React 17+ JSX transform
      'react/react-in-jsx-scope': 'off', // React 17+ JSX transform
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  // Jest test files
  {
    files: ['**/*.test.{js,jsx}'],
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
  },

  // Prettier config last
  prettierConfig,
];

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // Ignore build/output folders
  globalIgnores(['dist', 'node_modules']),

  {
    files: ['**/*.{js,jsx}'],

    // Base configs
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser, // window, document, localStorage, etc.
        fetch: 'readonly',
        console: 'readonly',
        alert: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },

    rules: {
      // Allow React component variables to start with capital letters
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // Optional: add any custom rules you want
      'react-hooks/rules-of-hooks': 'error', // Checks rules of hooks
      'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    },
  },
]);

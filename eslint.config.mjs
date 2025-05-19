import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import pluginJs from '@eslint/js';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    rules: {
      eqeqeq: 'off',
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'no-undefined': 'error',
    },
  },
  {
    ignores: ['.node_modules/*', 'dist'],
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
]);

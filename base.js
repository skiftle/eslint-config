import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { importX } from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';
import globals from 'globals';
import ts from 'typescript-eslint';

const DEFAULT_IGNORES = ['dist/', 'build/', '**/*.config.*'];

export function base({ tsconfigRootDir, ignores = [] }) {
  return [
    {
      ignores: [...DEFAULT_IGNORES, ...ignores],
    },
    eslint.configs.recommended,
    ...ts.configs.strictTypeChecked,
    ...ts.configs.stylisticTypeChecked,
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir,
        },
        globals: {
          ...globals.browser,
          ...globals.node,
          ...globals.es2025,
        },
      },
    },
    {
      rules: {
        'no-inner-declarations': 'error',
        'import-x/consistent-type-specifier-style': [
          'error',
          'prefer-top-level',
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            fixStyle: 'separate-type-imports',
            prefer: 'type-imports',
          },
        ],
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        '@typescript-eslint/only-throw-error': 'off',
      },
    },
    perfectionist.configs['recommended-natural'],
    {
      rules: {
        'perfectionist/sort-imports': [
          'error',
          {
            type: 'natural',
            internalPattern: ['^#'],
          },
        ],
        'perfectionist/sort-interfaces': [
          'error',
          {
            type: 'natural',
            groups: ['unknown', 'callback'],
            customGroups: [
              {
                groupName: 'callback',
                elementNamePattern: '^on.+',
              },
            ],
          },
        ],
        'perfectionist/sort-object-types': [
          'error',
          {
            type: 'natural',
            groups: ['unknown', 'callback'],
            customGroups: [
              {
                groupName: 'callback',
                elementNamePattern: '^on.+',
              },
            ],
          },
        ],
        'perfectionist/sort-objects': [
          'error',
          {
            type: 'natural',
            groups: ['unknown', 'callback'],
            customGroups: [
              {
                groupName: 'callback',
                elementNamePattern: '^on.+',
              },
            ],
          },
        ],
      },
    },
    prettier,
  ];
}

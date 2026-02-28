import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { reactRefresh } from 'eslint-plugin-react-refresh';

import { base } from './base.js';

export function react({ tsconfigRootDir, ignores }) {
  return [
    ...base({ tsconfigRootDir, ignores }),
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: {
        'jsx-a11y': jsxA11y,
        react: reactPlugin,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh.plugin,
      },
      rules: {
        ...reactPlugin.configs.recommended.rules,
        ...reactPlugin.configs['jsx-runtime'].rules,
        ...reactHooks.configs.recommended.rules,
        ...jsxA11y.configs.recommended.rules,
        'perfectionist/sort-jsx-props': [
          'error',
          {
            customGroups: [
              {
                groupName: 'callback',
                elementNamePattern: '^on.+',
              },
            ],
            groups: ['multiline', 'unknown', 'shorthand', 'callback'],
            type: 'natural',
          },
        ],
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ];
}

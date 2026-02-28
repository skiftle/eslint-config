# @skiftle/eslint-config

Shared ESLint configuration for Skiftle projects. Flat config only (ESLint 9+).

## Install

```bash
npm install -D @skiftle/eslint-config
```

## Usage

### Base (TypeScript)

```js
import { base } from '@skiftle/eslint-config';

export default base({ tsconfigRootDir: import.meta.dirname });
```

### React

```js
import { react } from '@skiftle/eslint-config';

export default react({ tsconfigRootDir: import.meta.dirname });
```

The `react` config extends `base` with React, JSX a11y, and React Refresh plugins.

## Options

| Option | Description |
| --- | --- |
| `tsconfigRootDir` | Root directory for TypeScript project resolution (required) |
| `ignores` | Additional glob patterns to ignore |

## What's included

**Base:** ESLint recommended, typescript-eslint strict, import-x, perfectionist, Prettier.

**React:** Everything in base, plus React, React Hooks, JSX a11y, React Refresh.

## License

MIT

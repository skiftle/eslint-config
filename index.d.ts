import type { Linter } from 'eslint';

interface Options {
  tsconfigRootDir: string;
  ignores?: string[];
}

export function base(options: Options): Linter.Config[];
export function react(options: Options): Linter.Config[];

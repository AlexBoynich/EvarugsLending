import { join } from 'path';

import { parseArguments } from './helpers';

const parsedArguments = parseArguments();
export const mode = parsedArguments.mode ?? 'production';
export const isDevServer = parsedArguments.isDevServer ?? false;
export const isProd = mode === 'production';
export const isDev = !isProd;
export const isOpen = parsedArguments.isOpen ?? false;
export const rootDir = join(__dirname, '../../');
export const webpackDir = join(__dirname, '../');

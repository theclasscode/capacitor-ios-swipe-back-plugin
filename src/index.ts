import { registerPlugin } from '@capacitor/core';

import type { iOSSwipeBackPlugin } from './definitions';

const iOSSwipeBack = registerPlugin<iOSSwipeBackPlugin>('iOSSwipeBack', {
  web: () => import('./web').then(m => new m.iOSSwipeBackWeb()),
});

export * from './definitions';
export { iOSSwipeBack };
exports.iOSSwipeBack = iOSSwipeBack;

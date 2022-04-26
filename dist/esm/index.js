import { registerPlugin } from '@capacitor/core';
const iOSSwipeBack = registerPlugin('iOSSwipeBack', {
    web: () => import('./web').then(m => new m.iOSSwipeBackWeb()),
});
export * from './definitions';
export { iOSSwipeBack };
//# sourceMappingURL=index.js.map
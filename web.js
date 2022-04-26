import { WebPlugin } from '@capacitor/core';
export class iOSSwipeBackWeb extends WebPlugin {
    async enable() {
        console.log('ENABLE');
        return undefined;
    }
    async disable() {
        console.log('DISABLE');
        return undefined;
    }
}
//# sourceMappingURL=web.js.map
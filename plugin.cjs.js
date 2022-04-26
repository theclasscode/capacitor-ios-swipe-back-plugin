'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const iOSSwipeBack = core.registerPlugin('iOSSwipeBack', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.iOSSwipeBackWeb()),
});
exports.iOSSwipeBack = iOSSwipeBack;

class iOSSwipeBackWeb extends core.WebPlugin {
    async enable() {
        console.log('ENABLE');
        return undefined;
    }
    async disable() {
        console.log('DISABLE');
        return undefined;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    iOSSwipeBackWeb: iOSSwipeBackWeb
});

exports.iOSSwipeBack = iOSSwipeBack;
//# sourceMappingURL=plugin.cjs.js.map

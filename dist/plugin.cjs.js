'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const iOSSwipeBack = core.registerPlugin('iOSSwipeBack', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.iOSSwipeBackWeb()),
});

class iOSSwipeBackWeb extends core.WebPlugin {
    async enable() {
        return undefined;
    }
    async disable() {
        return undefined;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    iOSSwipeBackWeb: iOSSwipeBackWeb
});

exports.iOSSwipeBack = iOSSwipeBack;
//# sourceMappingURL=plugin.cjs.js.map

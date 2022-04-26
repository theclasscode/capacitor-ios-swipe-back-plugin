var iOSSwipeBack = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map

var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
// node_modules/.pnpm/debug@4.3.4_supports-color@9.4.0/node_modules/debug/src/common.js
  "node_modules/.pnpm/debug@4.3.4_supports-color@9.4.0/node_modules/debug/src/common.js"(exports2, module2) {
// node_modules/.pnpm/debug@4.3.4_supports-color@9.4.0/node_modules/debug/src/browser.js
  "node_modules/.pnpm/debug@4.3.4_supports-color@9.4.0/node_modules/debug/src/browser.js"(exports2, module2) {
// node_modules/.pnpm/@kwsites+file-exists@1.1.1_supports-color@9.4.0/node_modules/@kwsites/file-exists/dist/src/index.js
  "node_modules/.pnpm/@kwsites+file-exists@1.1.1_supports-color@9.4.0/node_modules/@kwsites/file-exists/dist/src/index.js"(exports2) {
// node_modules/.pnpm/@kwsites+file-exists@1.1.1_supports-color@9.4.0/node_modules/@kwsites/file-exists/dist/index.js
  "node_modules/.pnpm/@kwsites+file-exists@1.1.1_supports-color@9.4.0/node_modules/@kwsites/file-exists/dist/index.js"(exports2) {
        var isObject2 = object !== null && typeof object === "object";
        var isFunction2 = toStr.call(object) === "[object Function]";
        var isString = isObject2 && toStr.call(object) === "[object String]";
        if (!isObject2 && !isFunction2 && !isArguments) {
        var skipProto = hasProtoEnumBug && isFunction2;
// node_modules/.pnpm/has-proto@1.0.1/node_modules/has-proto/index.js
var require_has_proto = __commonJS({
  "node_modules/.pnpm/has-proto@1.0.1/node_modules/has-proto/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var test = {
      foo: {}
    };
    var $Object = Object;
    module2.exports = function hasProto() {
      return { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);
    };
  }
});

// node_modules/.pnpm/get-intrinsic@1.2.1/node_modules/get-intrinsic/index.js
  "node_modules/.pnpm/get-intrinsic@1.2.1/node_modules/get-intrinsic/index.js"(exports2, module2) {
    var hasProto = require_has_proto()();
    var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
    } : null);
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
        if (gen && getProto) {
    var isFunction2 = function(fn) {
        } else if (!isFunction2(predicate) || !predicate()) {
// node_modules/.pnpm/which-typed-array@1.1.11/node_modules/which-typed-array/index.js
var require_which_typed_array = __commonJS({
  "node_modules/.pnpm/which-typed-array@1.1.11/node_modules/which-typed-array/index.js"(exports2, module2) {
    var callBind = require_call_bind();
    var gOPD = require_gopd();
    var $slice = callBound("String.prototype.slice");
    var getPrototypeOf = Object.getPrototypeOf;
    var cache = { __proto__: null };
          cache["$" + typedArray] = callBind(descriptor.get);
    } else {
      forEach2(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        cache["$" + typedArray] = callBind(arr.slice);
      });
      var found = false;
      forEach2(cache, function(getter, typedArray) {
        if (!found) {
            if ("$" + getter(value) === typedArray) {
              found = $slice(typedArray, 1);
            }
      return found;
    var trySlices = function tryAllSlices(value) {
      var found = false;
      forEach2(cache, function(getter, name) {
        if (!found) {
          try {
            getter(value);
            found = $slice(name, 1);
          } catch (e) {
          }
        }
      });
      return found;
    };
    module2.exports = function whichTypedArray(value) {
      if (!hasToStringTag) {
        if ($indexOf(typedArrays, tag2) > -1) {
          return tag2;
        }
        if (tag2 !== "Object") {
          return false;
        }
        return trySlices(value);
        return null;
// node_modules/.pnpm/is-typed-array@1.1.12/node_modules/is-typed-array/index.js
var require_is_typed_array = __commonJS({
  "node_modules/.pnpm/is-typed-array@1.1.12/node_modules/is-typed-array/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var whichTypedArray = require_which_typed_array();
    module2.exports = function isTypedArray(value) {
      return !!whichTypedArray(value);
    };
  }
});

// node_modules/.pnpm/deep-equal@2.2.2/node_modules/deep-equal/index.js
  "node_modules/.pnpm/deep-equal@2.2.2/node_modules/deep-equal/index.js"(exports2, module2) {
      if (aWhich !== bWhich) {
      if (aWhich || bWhich) {
        if (a.length !== b.length) {
          return false;
        }
        for (i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
// node_modules/.pnpm/feather-icons@4.29.1/node_modules/feather-icons/dist/feather.js
  "node_modules/.pnpm/feather-icons@4.29.1/node_modules/feather-icons/dist/feather.js"(exports2, module2) {
              module3.exports = { "activity": '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>', "airplay": '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>', "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>', "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>', "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>', "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>', "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>', "anchor": '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>', "aperture": '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>', "archive": '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>', "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>', "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>', "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>', "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>', "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>', "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>', "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>', "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>', "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>', "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>', "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>', "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>', "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>', "award": '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>', "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>', "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>', "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>', "battery": '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>', "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "bell": '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>', "bluetooth": '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>', "bold": '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>', "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>', "book": '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>', "bookmark": '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>', "box": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', "briefcase": '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>', "calendar": '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>', "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>', "camera": '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>', "cast": '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>', "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>', "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>', "check": '<polyline points="20 6 9 17 4 12"></polyline>', "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>', "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>', "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>', "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>', "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>', "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>', "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>', "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>', "chrome": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>', "circle": '<circle cx="12" cy="12" r="10"></circle>', "clipboard": '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>', "clock": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>', "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>', "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>', "cloud": '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>', "code": '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>', "codepen": '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>', "codesandbox": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', "coffee": '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>', "columns": '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>', "command": '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>', "compass": '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>', "copy": '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>', "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>', "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>', "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>', "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>', "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>', "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>', "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>', "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>', "cpu": '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>', "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>', "crop": '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>', "crosshair": '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>', "database": '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>', "delete": '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>', "disc": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>', "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>', "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>', "divide": '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>', "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>', "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>', "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>', "dribbble": '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>', "droplet": '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>', "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>', "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>', "edit": '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>', "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>', "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "eye": '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>', "facebook": '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>', "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>', "feather": '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>', "figma": '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>', "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>', "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>', "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>', "file": '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>', "film": '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>', "filter": '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>', "flag": '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>', "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>', "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>', "folder": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>', "framer": '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>', "frown": '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', "gift": '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>', "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>', "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>', "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>', "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>', "github": '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>', "gitlab": '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>', "globe": '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>', "grid": '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>', "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>', "hash": '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>', "headphones": '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>', "heart": '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>', "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>', "hexagon": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>', "home": '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>', "image": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>', "inbox": '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>', "info": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>', "instagram": '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>', "italic": '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>', "key": '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>', "layers": '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>', "layout": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>', "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>', "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>', "link": '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>', "linkedin": '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>', "list": '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>', "loader": '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>', "lock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>', "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>', "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>', "mail": '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>', "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>', "map": '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>', "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>', "maximize": '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>', "meh": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', "menu": '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>', "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>', "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>', "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', "mic": '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>', "minimize": '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>', "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>', "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>', "minus": '<line x1="5" y1="12" x2="19" y2="12"></line>', "monitor": '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>', "moon": '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>', "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>', "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>', "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>', "move": '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>', "music": '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>', "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>', "navigation": '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>', "octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>', "package": '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', "paperclip": '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>', "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>', "pause": '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>', "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>', "percent": '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>', "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>', "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>', "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>', "play": '<polygon points="5 3 19 12 5 21 5 3"></polygon>', "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', "plus": '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>', "pocket": '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>', "power": '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>', "printer": '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>', "radio": '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>', "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>', "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>', "repeat": '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>', "rewind": '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>', "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>', "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>', "rss": '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>', "save": '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>', "scissors": '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>', "search": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>', "send": '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>', "server": '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>', "settings": '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>', "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>', "share": '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>', "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>', "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>', "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>', "shuffle": '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>', "sidebar": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>', "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>', "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>', "slack": '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>', "slash": '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>', "sliders": '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>', "smartphone": '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', "smile": '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', "speaker": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>', "square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>', "star": '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>', "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>', "sun": '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', "sunrise": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>', "sunset": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>', "table": '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>', "tablet": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', "tag": '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>', "target": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>', "terminal": '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>', "thermometer": '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>', "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>', "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>', "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>', "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>', "tool": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>', "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>', "trash": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>', "trello": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>', "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>', "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>', "triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>', "truck": '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>', "tv": '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>', "twitch": '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7"></path>', "twitter": '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>', "type": '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>', "umbrella": '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>', "underline": '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>', "unlock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>', "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>', "upload": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>', "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>', "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>', "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>', "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>', "user": '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>', "users": '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>', "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "video": '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>', "voicemail": '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>', "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>', "volume": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>', "watch": '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>', "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', "wifi": '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', "wind": '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>', "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>', "x": '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>', "youtube": '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>', "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>', "zap": '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>', "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>', "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>' };
              var isObject2 = __webpack_require__(
                if (!isObject2(it)) {
              var isObject2 = __webpack_require__(
              var exist = isObject2(document2) && isObject2(document2.createElement);
              var isObject2 = __webpack_require__(
                  if (!isObject2(it) || (state = get(it)).type !== TYPE) {
              var isObject2 = __webpack_require__(
                if (!isObject2(it))
                if (S && typeof (fn = it.toString) == "function" && !isObject2(val = fn.call(it)))
                if (typeof (fn = it.valueOf) == "function" && !isObject2(val = fn.call(it)))
                if (!S && typeof (fn = it.toString) == "function" && !isObject2(val = fn.call(it)))
              var isObject2 = __webpack_require__(
                if (!isObject2(proto) && proto !== null) {
            /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, chevron-down, chevron-up, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-buoy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
              module3.exports = { "activity": ["pulse", "health", "action", "motion"], "airplay": ["stream", "cast", "mirroring"], "alert-circle": ["warning", "alert", "danger"], "alert-octagon": ["warning", "alert", "danger"], "alert-triangle": ["warning", "alert", "danger"], "align-center": ["text alignment", "center"], "align-justify": ["text alignment", "justified"], "align-left": ["text alignment", "left"], "align-right": ["text alignment", "right"], "anchor": [], "archive": ["index", "box"], "at-sign": ["mention", "at", "email", "message"], "award": ["achievement", "badge"], "aperture": ["camera", "photo"], "bar-chart": ["statistics", "diagram", "graph"], "bar-chart-2": ["statistics", "diagram", "graph"], "battery": ["power", "electricity"], "battery-charging": ["power", "electricity"], "bell": ["alarm", "notification", "sound"], "bell-off": ["alarm", "notification", "silent"], "bluetooth": ["wireless"], "book-open": ["read", "library"], "book": ["read", "dictionary", "booklet", "magazine", "library"], "bookmark": ["read", "clip", "marker", "tag"], "box": ["cube"], "briefcase": ["work", "bag", "baggage", "folder"], "calendar": ["date"], "camera": ["photo"], "cast": ["chromecast", "airplay"], "chevron-down": ["expand"], "chevron-up": ["collapse"], "circle": ["off", "zero", "record"], "clipboard": ["copy"], "clock": ["time", "watch", "alarm"], "cloud-drizzle": ["weather", "shower"], "cloud-lightning": ["weather", "bolt"], "cloud-rain": ["weather"], "cloud-snow": ["weather", "blizzard"], "cloud": ["weather"], "codepen": ["logo"], "codesandbox": ["logo"], "code": ["source", "programming"], "coffee": ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"], "columns": ["layout"], "command": ["keyboard", "cmd", "terminal", "prompt"], "compass": ["navigation", "safari", "travel", "direction"], "copy": ["clone", "duplicate"], "corner-down-left": ["arrow", "return"], "corner-down-right": ["arrow"], "corner-left-down": ["arrow"], "corner-left-up": ["arrow"], "corner-right-down": ["arrow"], "corner-right-up": ["arrow"], "corner-up-left": ["arrow"], "corner-up-right": ["arrow"], "cpu": ["processor", "technology"], "credit-card": ["purchase", "payment", "cc"], "crop": ["photo", "image"], "crosshair": ["aim", "target"], "database": ["storage", "memory"], "delete": ["remove"], "disc": ["album", "cd", "dvd", "music"], "dollar-sign": ["currency", "money", "payment"], "droplet": ["water"], "edit": ["pencil", "change"], "edit-2": ["pencil", "change"], "edit-3": ["pencil", "change"], "eye": ["view", "watch"], "eye-off": ["view", "watch", "hide", "hidden"], "external-link": ["outbound"], "facebook": ["logo", "social"], "fast-forward": ["music"], "figma": ["logo", "design", "tool"], "file-minus": ["delete", "remove", "erase"], "file-plus": ["add", "create", "new"], "file-text": ["data", "txt", "pdf"], "film": ["movie", "video"], "filter": ["funnel", "hopper"], "flag": ["report"], "folder-minus": ["directory"], "folder-plus": ["directory"], "folder": ["directory"], "framer": ["logo", "design", "tool"], "frown": ["emoji", "face", "bad", "sad", "emotion"], "gift": ["present", "box", "birthday", "party"], "git-branch": ["code", "version control"], "git-commit": ["code", "version control"], "git-merge": ["code", "version control"], "git-pull-request": ["code", "version control"], "github": ["logo", "version control"], "gitlab": ["logo", "version control"], "globe": ["world", "browser", "language", "translate"], "hard-drive": ["computer", "server", "memory", "data"], "hash": ["hashtag", "number", "pound"], "headphones": ["music", "audio", "sound"], "heart": ["like", "love", "emotion"], "help-circle": ["question mark"], "hexagon": ["shape", "node.js", "logo"], "home": ["house", "living"], "image": ["picture"], "inbox": ["email"], "instagram": ["logo", "camera"], "key": ["password", "login", "authentication", "secure"], "layers": ["stack"], "layout": ["window", "webpage"], "life-buoy": ["help", "life ring", "support"], "link": ["chain", "url"], "link-2": ["chain", "url"], "linkedin": ["logo", "social media"], "list": ["options"], "lock": ["security", "password", "secure"], "log-in": ["sign in", "arrow", "enter"], "log-out": ["sign out", "arrow", "exit"], "mail": ["email", "message"], "map-pin": ["location", "navigation", "travel", "marker"], "map": ["location", "navigation", "travel"], "maximize": ["fullscreen"], "maximize-2": ["fullscreen", "arrows", "expand"], "meh": ["emoji", "face", "neutral", "emotion"], "menu": ["bars", "navigation", "hamburger"], "message-circle": ["comment", "chat"], "message-square": ["comment", "chat"], "mic-off": ["record", "sound", "mute"], "mic": ["record", "sound", "listen"], "minimize": ["exit fullscreen", "close"], "minimize-2": ["exit fullscreen", "arrows", "close"], "minus": ["subtract"], "monitor": ["tv", "screen", "display"], "moon": ["dark", "night"], "more-horizontal": ["ellipsis"], "more-vertical": ["ellipsis"], "mouse-pointer": ["arrow", "cursor"], "move": ["arrows"], "music": ["note"], "navigation": ["location", "travel"], "navigation-2": ["location", "travel"], "octagon": ["stop"], "package": ["box", "container"], "paperclip": ["attachment"], "pause": ["music", "stop"], "pause-circle": ["music", "audio", "stop"], "pen-tool": ["vector", "drawing"], "percent": ["discount"], "phone-call": ["ring"], "phone-forwarded": ["call"], "phone-incoming": ["call"], "phone-missed": ["call"], "phone-off": ["call", "mute"], "phone-outgoing": ["call"], "phone": ["call"], "play": ["music", "start"], "pie-chart": ["statistics", "diagram"], "play-circle": ["music", "start"], "plus": ["add", "new"], "plus-circle": ["add", "new"], "plus-square": ["add", "new"], "pocket": ["logo", "save"], "power": ["on", "off"], "printer": ["fax", "office", "device"], "radio": ["signal"], "refresh-cw": ["synchronise", "arrows"], "refresh-ccw": ["arrows"], "repeat": ["loop", "arrows"], "rewind": ["music"], "rotate-ccw": ["arrow"], "rotate-cw": ["arrow"], "rss": ["feed", "subscribe"], "save": ["floppy disk"], "scissors": ["cut"], "search": ["find", "magnifier", "magnifying glass"], "send": ["message", "mail", "email", "paper airplane", "paper aeroplane"], "settings": ["cog", "edit", "gear", "preferences"], "share-2": ["network", "connections"], "shield": ["security", "secure"], "shield-off": ["security", "insecure"], "shopping-bag": ["ecommerce", "cart", "purchase", "store"], "shopping-cart": ["ecommerce", "cart", "purchase", "store"], "shuffle": ["music"], "skip-back": ["music"], "skip-forward": ["music"], "slack": ["logo"], "slash": ["ban", "no"], "sliders": ["settings", "controls"], "smartphone": ["cellphone", "device"], "smile": ["emoji", "face", "happy", "good", "emotion"], "speaker": ["audio", "music"], "star": ["bookmark", "favorite", "like"], "stop-circle": ["media", "music"], "sun": ["brightness", "weather", "light"], "sunrise": ["weather", "time", "morning", "day"], "sunset": ["weather", "time", "evening", "night"], "tablet": ["device"], "tag": ["label"], "target": ["logo", "bullseye"], "terminal": ["code", "command line", "prompt"], "thermometer": ["temperature", "celsius", "fahrenheit", "weather"], "thumbs-down": ["dislike", "bad", "emotion"], "thumbs-up": ["like", "good", "emotion"], "toggle-left": ["on", "off", "switch"], "toggle-right": ["on", "off", "switch"], "tool": ["settings", "spanner"], "trash": ["garbage", "delete", "remove", "bin"], "trash-2": ["garbage", "delete", "remove", "bin"], "triangle": ["delta"], "truck": ["delivery", "van", "shipping", "transport", "lorry"], "tv": ["television", "stream"], "twitch": ["logo"], "twitter": ["logo", "social"], "type": ["text"], "umbrella": ["rain", "weather"], "unlock": ["security"], "user-check": ["followed", "subscribed"], "user-minus": ["delete", "remove", "unfollow", "unsubscribe"], "user-plus": ["new", "add", "create", "follow", "subscribe"], "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"], "user": ["person", "account"], "users": ["group"], "video-off": ["camera", "movie", "film"], "video": ["camera", "movie", "film"], "voicemail": ["phone"], "volume": ["music", "sound", "mute"], "volume-1": ["music", "sound"], "volume-2": ["music", "sound"], "volume-x": ["music", "sound", "mute"], "watch": ["clock", "time"], "wifi-off": ["disabled"], "wifi": ["connection", "signal", "wireless"], "wind": ["weather", "air"], "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"], "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"], "x-square": ["cancel", "close", "delete", "remove", "times", "clear"], "x": ["cancel", "close", "delete", "remove", "times", "clear"], "youtube": ["logo", "video", "play"], "zap-off": ["flash", "camera", "lightning"], "zap": ["flash", "camera", "lightning"], "zoom-in": ["magnifying glass"], "zoom-out": ["magnifying glass"] };
// node_modules/.pnpm/isomorphic-git@1.24.5/node_modules/isomorphic-git/index.js
var BaseError = class _BaseError extends Error {
    const e = new _BaseError(json.message);
var UnmergedPathsError = class _UnmergedPathsError extends BaseError {
    this.code = this.name = _UnmergedPathsError.code;
var InternalError = class _InternalError extends BaseError {
    this.code = this.name = _InternalError.code;
var UnsafeFilepathError = class _UnsafeFilepathError extends BaseError {
    this.code = this.name = _UnsafeFilepathError.code;
var GitIndex = class _GitIndex {
      return _GitIndex.fromBuffer(buffer2);
      return new _GitIndex(null);
    if (buffer2.length === 0) {
      throw new InternalError("Index file is empty (.git/index)");
    }
    const index2 = new _GitIndex();
    const reader = new BufferCursor(buffer2);
    const magic = reader.toString("utf8", 4);
    if (magic !== "DIRC") {
      throw new InternalError(`Invalid dircache magic file number: ${magic}`);
    }
      entryBuffers.push(_GitIndex._entryToBuffer(entry));
            entryBuffers.push(_GitIndex._entryToBuffer(stage));
var NotFoundError = class _NotFoundError extends BaseError {
    this.code = this.name = _NotFoundError.code;
var ObjectTypeError = class _ObjectTypeError extends BaseError {
    this.code = this.name = _ObjectTypeError.code;
var InvalidOidError = class _InvalidOidError extends BaseError {
    this.code = this.name = _InvalidOidError.code;
var NoRefspecError = class _NoRefspecError extends BaseError {
    this.code = this.name = _NoRefspecError.code;
var GitPackedRefs = class _GitPackedRefs {
    return new _GitPackedRefs(text2);
var GitRefSpec = class _GitRefSpec {
    return new _GitRefSpec({
var GitRefSpecSet = class _GitRefSpecSet {
    return new _GitRefSpecSet(rules);
var GitConfig = class _GitConfig {
    return new _GitConfig(text2);
var GitRefManager = class _GitRefManager {
      const tags2 = await _GitRefManager.listRefs({
      await _GitRefManager.deleteRefs({
          if (!await _GitRefManager.exists({ fs, gitdir, ref: serverRef })) {
        const refs2 = (await _GitRefManager.listRefs({
        await _GitRefManager.deleteRefs({ fs, gitdir, refs: pruned });
    return _GitRefManager.deleteRefs({ fs, gitdir, refs: [ref] });
      return _GitRefManager.resolve({ fs, gitdir, ref, depth });
    const packedMap = await _GitRefManager.packedRefs({ fs, gitdir });
        return _GitRefManager.resolve({ fs, gitdir, ref: sha.trim(), depth });
      await _GitRefManager.expand({ fs, gitdir, ref });
    const packedMap = await _GitRefManager.packedRefs({ fs, gitdir });
      return _GitRefManager.resolveAgainstMap({ ref, fullref, depth, map });
        return _GitRefManager.resolveAgainstMap({
    const packedMap = _GitRefManager.packedRefs({ fs, gitdir });
      return _GitRefManager.listRefs({
      return _GitRefManager.listRefs({ fs, gitdir, filepath: `refs/heads` });
    const tags = await _GitRefManager.listRefs({
var GitTree = class _GitTree {
    return new _GitTree(tree);
var GitPackIndex = class _GitPackIndex {
    return new _GitPackIndex({
    const p = new _GitPackIndex({
var AlreadyExistsError = class _AlreadyExistsError extends BaseError {
    this.code = this.name = _AlreadyExistsError.code;
var AmbiguousError = class _AmbiguousError extends BaseError {
    this.code = this.name = _AmbiguousError.code;
var CheckoutConflictError = class _CheckoutConflictError extends BaseError {
    this.code = this.name = _CheckoutConflictError.code;
var CommitNotFetchedError = class _CommitNotFetchedError extends BaseError {
    this.code = this.name = _CommitNotFetchedError.code;
var EmptyServerResponseError = class _EmptyServerResponseError extends BaseError {
    this.code = this.name = _EmptyServerResponseError.code;
var FastForwardError = class _FastForwardError extends BaseError {
    this.code = this.name = _FastForwardError.code;
var GitPushError = class _GitPushError extends BaseError {
    this.code = this.name = _GitPushError.code;
var HttpError = class _HttpError extends BaseError {
    this.code = this.name = _HttpError.code;
var InvalidFilepathError = class _InvalidFilepathError extends BaseError {
    this.code = this.name = _InvalidFilepathError.code;
var InvalidRefNameError = class _InvalidRefNameError extends BaseError {
    this.code = this.name = _InvalidRefNameError.code;
var MaxDepthError = class _MaxDepthError extends BaseError {
    this.code = this.name = _MaxDepthError.code;
var MergeNotSupportedError = class _MergeNotSupportedError extends BaseError {
    this.code = this.name = _MergeNotSupportedError.code;
var MergeConflictError = class _MergeConflictError extends BaseError {
    this.code = this.name = _MergeConflictError.code;
var MissingNameError = class _MissingNameError extends BaseError {
    this.code = this.name = _MissingNameError.code;
var MissingParameterError = class _MissingParameterError extends BaseError {
    this.code = this.name = _MissingParameterError.code;
var MultipleGitError = class _MultipleGitError extends BaseError {
    this.code = this.name = _MultipleGitError.code;
var ParseError = class _ParseError extends BaseError {
    this.code = this.name = _ParseError.code;
var PushRejectedError = class _PushRejectedError extends BaseError {
    this.code = this.name = _PushRejectedError.code;
var RemoteCapabilityError = class _RemoteCapabilityError extends BaseError {
    this.code = this.name = _RemoteCapabilityError.code;
var SmartHttpError = class _SmartHttpError extends BaseError {
    this.code = this.name = _SmartHttpError.code;
var UnknownTransportError = class _UnknownTransportError extends BaseError {
    this.code = this.name = _UnknownTransportError.code;
var UrlParseError = class _UrlParseError extends BaseError {
    this.code = this.name = _UrlParseError.code;
var UserCanceledError = class _UserCanceledError extends BaseError {
    this.code = this.name = _UserCanceledError.code;
var IndexResetError = class _IndexResetError extends BaseError {
    this.code = this.name = _IndexResetError.code;
var GitAnnotatedTag = class _GitAnnotatedTag {
      this._tag = _GitAnnotatedTag.render(tag2);
    return new _GitAnnotatedTag(tag2);
    return _GitAnnotatedTag.from(signedTag);
var GitCommit = class _GitCommit {
      this._commit = _GitCommit.render(commit2);
    const headers = _GitCommit.justHeaders(payload);
    const message = _GitCommit.justMessage(payload);
    return new _GitCommit(commit2);
    return new _GitCommit(commit2);
    return _GitCommit.justMessage(this._commit);
    const headers = _GitCommit.justHeaders(this._commit).split("\n");
    return _GitCommit.renderHeaders(obj) + "\n" + normalizeNewlines(obj.message);
    const message = _GitCommit.justMessage(commit2._commit);
    const headers = _GitCommit.justHeaders(commit2._commit);
    return _GitCommit.from(signedCommit);
function isPromiseLike(obj) {
  return isObject(obj) && isFunction(obj.then) && isFunction(obj.catch);
}
function isObject(obj) {
  return obj && typeof obj === "object";
}
function isFunction(obj) {
  return typeof obj === "function";
}
function isPromiseFs(fs) {
  const test = (targetFs) => {
    try {
      return targetFs.readFile().catch((e) => e);
    } catch (e) {
      return e;
    }
  };
  return isPromiseLike(test(fs));
}
var commands = [
  "readFile",
  "writeFile",
  "mkdir",
  "rmdir",
  "unlink",
  "stat",
  "lstat",
  "readdir",
  "readlink",
  "symlink"
];
function bindFs(target, fs) {
  if (isPromiseFs(fs)) {
    for (const command of commands) {
      target[`_${command}`] = fs[command].bind(fs);
    }
  } else {
    for (const command of commands) {
      target[`_${command}`] = (0, import_pify.default)(fs[command].bind(fs));
    }
  }
  if (isPromiseFs(fs)) {
    if (fs.rm)
      target._rm = fs.rm.bind(fs);
    else if (fs.rmdir.length > 1)
      target._rm = fs.rmdir.bind(fs);
    else
      target._rm = rmRecursive.bind(null, target);
  } else {
    if (fs.rm)
      target._rm = (0, import_pify.default)(fs.rm.bind(fs));
    else if (fs.rmdir.length > 2)
      target._rm = (0, import_pify.default)(fs.rmdir.bind(fs));
    else
      target._rm = rmRecursive.bind(null, target);
  }
}
      bindFs(this, fs.promises);
      bindFs(this, fs);
  force = false,
  parallel = true
      return addToIndex({
        dir,
        gitdir,
        fs,
        filepath,
        index: index2,
        force,
        parallel
      });
async function addToIndex({
  dir,
  gitdir,
  fs,
  filepath,
  index: index2,
  force,
  parallel
}) {
      if (parallel) {
        const promises2 = children2.map(
          (child) => addToIndex({
            dir,
            gitdir,
            fs,
            filepath: [join(currentFilepath, child)],
            index: index2,
            force,
            parallel
          })
        );
        await Promise.all(promises2);
      } else {
        for (const child of children2) {
          await addToIndex({
            dir,
            gitdir,
            fs,
            filepath: [join(currentFilepath, child)],
            index: index2,
            force,
            parallel
          });
        }
      }
  version: "1.24.5",
  agent: "git/isomorphic-git@1.24.5"
  ref = ref.startsWith("refs/heads/") ? ref : `refs/heads/${ref}`;
  const results = await expandOidLoose({ fs, gitdir, oid: short });
  const packedOids = await expandOidPacked({
  for (const packedOid of packedOids) {
    if (results.indexOf(packedOid) === -1) {
      results.push(packedOid);
    }
  }
  const fullCurrentBranchRef = await _currentBranch({
    fs,
    gitdir,
    fullname: true
  });
  const isCurrentBranch = fullCurrentBranchRef === fulloldref;
  if (checkout2 || isCurrentBranch) {
// node_modules/.pnpm/github.com+Vinzent03+git-js@6b9a2d899bc8256e38a1d6f0b8a88116ba2bf56a_supports-color@9.4.0_rdkutdaeyye3o67thmklazfzta/node_modules/simple-git/dist/esm/index.js
var __defNormalProp2 = (obj, key2, value) => key2 in obj ? __defProp2(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
      __defNormalProp2(a, prop, b[prop]);
        __defNormalProp2(a, prop, b[prop]);
function appendTaskOptions(options, commands2 = []) {
    return commands2;
  return Object.keys(options).reduce((commands22, key2) => {
      commands22.push(key2 + "=" + value);
      commands22.push(key2);
    return commands22;
  }, commands2);
  const commands2 = ["rev-parse", "--is-inside-work-tree"];
    commands: commands2,
  const commands2 = ["rev-parse", "--git-dir"];
    commands: commands2,
  const commands2 = ["rev-parse", "--is-bare-repository"];
    commands: commands2,
function straightThroughStringTask(commands2, trimmed2 = false) {
    commands: commands2,
function straightThroughBufferTask(commands2) {
    commands: commands2,
  const commands2 = ["clean", `-${mode}`, ...customArgs];
    commands: commands2,
  const commands2 = ["config", `--${scope}`];
    commands2.push("--add");
  commands2.push(key2, value);
    commands: commands2,
  const commands2 = ["config", "--null", "--show-origin", "--get-all", key2];
    commands2.splice(1, 0, `--${scope}`);
    commands: commands2,
  const commands2 = ["config", "--list", "--show-origin", "--null"];
    commands2.push(`--${scope}`);
    commands: commands2,
      const commands2 = ["grep", "--null", "-n", "--full-name", ...options, ...searchTerm];
        commands: commands2,
  const commands2 = ["reset"];
    commands2.push(`--${mode}`);
  commands2.push(...customArgs);
  return straightThroughStringTask(commands2);
function pluginContext(task, commands2) {
    commands: commands2
  const commands2 = ["checkout", ...args];
  if (commands2[1] === "-b" && commands2.includes("-B")) {
    commands2[1] = remove2(commands2, "-B");
  return straightThroughStringTask(commands2);
  const commands2 = [
    commands: commands2,
  const commands2 = ["hash-object", filePath];
    commands2.push("-w");
  return straightThroughStringTask(commands2, true);
  const commands2 = ["init", ...customArgs];
  if (bare && !hasBareCommand(commands2)) {
    commands2.splice(1, 0, bareCommand);
    commands: commands2,
      return parseInit(commands2.includes("--bare"), path2, text2);
  const commands2 = ["diff"];
    commands2.push("--stat=4096");
  commands2.push(...customArgs);
  return validateLogFormatConfig(commands2) || {
    commands: commands2,
  const commands2 = ["push", ...customArgs];
    commands2.splice(1, 0, ref.branch);
    commands2.splice(1, 0, ref.remote);
  remove2(commands2, "-v");
  append(commands2, "--verbose");
  append(commands2, "--porcelain");
    commands: commands2,
  const commands2 = [
    commands: commands2,
function containsDeleteBranchCommand(commands2) {
  return commands2.some((command) => deleteCommands.includes(command));
  const commands2 = ["branch", ...customArgs];
  if (commands2.length === 1) {
    commands2.push("-a");
  if (!commands2.includes("-v")) {
    commands2.splice(1, 0, "-v");
    commands: commands2,
  const commands2 = ["clone", ...customArgs];
  filterString(repo) && commands2.push(repo);
  filterString(directory) && commands2.push(directory);
  const banned = commands2.find(disallowedCommand);
  return straightThroughStringTask(commands2);
  const commands2 = ["fetch", ...customArgs];
    commands2.push(remote, branch2);
  const banned = commands2.find(disallowedCommand2);
    commands: commands2,
  const commands2 = ["pull", ...customArgs];
    commands2.splice(1, 0, remote, branch2);
    commands: commands2,
  const commands2 = ["remote"];
    commands2.push("-v");
    commands: commands2,
  const commands2 = [...customArgs];
  if (commands2[0] !== "ls-remote") {
    commands2.unshift("ls-remote");
  return straightThroughStringTask(commands2);
  const commands2 = [...customArgs];
  if (commands2[0] !== "remote") {
    commands2.unshift("remote");
  return straightThroughStringTask(commands2);
  const commands2 = ["stash", "list", ...options.commands, ...customArgs];
  const parser3 = createListLogSummaryParser(options.splitter, options.fields, logFormatFromCommand(commands2));
  return validateLogFormatConfig(commands2) || {
    commands: commands2,
  const commands2 = [...customArgs];
  if (commands2[0] !== "submodule") {
    commands2.unshift("submodule");
  return straightThroughStringTask(commands2);
    Git2.prototype.raw = function(commands2) {
      const createRestCommands = !Array.isArray(commands2);
      const command = [].slice.call(createRestCommands ? arguments : commands2, 0);
      const commands2 = ["rev-parse", ...getTrailingOptions2(arguments, true)];
      return this._runTask(straightThroughStringTask2(commands2, true), trailingFunctionArgument2(arguments));
  disablePopupsForNoChanges: false,
function formatMinutes(minutes) {
  if (minutes === 1)
    return "1 minute";
  return `${minutes} minutes`;
}
    const allFilesFormatted = status2.files.map((e) => {
      const res = this.formatPath(e);
      return {
        path: res.path,
        from: res.from,
        index: e.index === "?" ? "U" : e.index,
        working_dir: e.working_dir === "?" ? "U" : e.working_dir,
        vault_path: this.getVaultPath(res.path)
      };
    });
      all: allFilesFormatted,
      changed: allFilesFormatted.filter((e) => e.working_dir !== " "),
      staged: allFilesFormatted.filter(
        (e) => e.index !== " " && e.index != "U"
      ),
  async commit({
    message,
    amend
  }) {
      amend ? ["--amend"] : [],
    try {
      await this.git.remote(["get-url", remote]);
    } catch (error) {
      if (error.toString().contains(remote)) {
        return void 0;
      } else {
        this.onError(error);
      }
    }
      var _a2, _b, _c, _d;
          files: (_b = (_a2 = e.diff) == null ? void 0 : _a2.files.map((f) => ({
          }))) != null ? _b : []
        fileName: (_d = (_c = e.diff) == null ? void 0 : _c.files.first()) == null ? void 0 : _d.file
      return { all: status2, changed, staged, conflicted };
      return this.commit({ message });
  async commit({
    message
  }) {
      const hadConflict = this.plugin.localStorage.getConflict();
      this.plugin.localStorage.setConflict(false);
  async branchIsMerged(_) {
  updateGitPath(_) {
      if (await this.app.vault.adapter.exists(vaultPath)) {
        workdirContent = await this.app.vault.adapter.read(vaultPath);
                `Automatic ${commitOrBackup} enabled! Every ${formatMinutes(
                  plugin.settings.autoSaveInterval
                )}.`
        new import_obsidian8.Setting(containerEl).setName(`Auto Backup after stopping file edits`).setDesc(
          `Requires the ${commitOrBackup} interval not to be 0.
                        If turned on, do auto ${commitOrBackup} every ${formatMinutes(
            plugin.settings.autoSaveInterval
          )} after stopping file edits.
                        This also prevents auto ${commitOrBackup} while editing a file. If turned off, it's independent from the last change.`
                  `Automatic push enabled! Every ${formatMinutes(
                    plugin.settings.autoPushInterval
                  )}.`
                `Automatic pull enabled! Every ${formatMinutes(
                  plugin.settings.autoPullInterval
                )}.`
      ).addTextArea(
      ).addTextArea(
      const datePlaceholderSetting = new import_obsidian8.Setting(containerEl).setName("{{date}} placeholder format").addText(
      datePlaceholderSetting.descEl.innerHTML = `
            Specify custom date format. E.g. "${DATE_TIME_FORMAT_SECONDS}. See <a href="https://momentjs.com">Moment.js</a> for more formats.`;
        this.display();
    if (!plugin.settings.disablePopups)
      new import_obsidian8.Setting(containerEl).setName("Hide notifications for no changes").setDesc(
        "Don't show notifications when there are no changes to commit/push"
      ).addToggle(
        (toggle) => toggle.setValue(plugin.settings.disablePopupsForNoChanges).onChange((value) => {
          plugin.settings.disablePopupsForNoChanges = value;
          plugin.saveSettings();
        })
      );
    new import_obsidian8.Setting(containerEl).setName("Show the count of modified files in the status bar").addToggle(
        `Git: View is not defined for editor cache key. Unforeseen situation. id: ${id}`
      console.warn("Git: Error in trackChanged." + reason);
        "Git: Attempted to track change of undefined filepath. Unforeseen situation."
          "Git: undefined lineAuthorInfoProvider. Unexpected situation."
      console.warn("Git: Error while loading line authoring feature.", e);
    this.statusBarEl.setAttribute("data-tooltip-position", "top");
      working_dir = `Working Dir: ${item.working_dir} `;
    /(?:^https:\/\/github\.com\/(.*)\/(.*)\.git$)|(?:^[a-zA-Z]+@github\.com:(.*)\/(.*)\.git$)/
    return app.loadLocalStorage(this.prefix + "conflict") == "true";
    return app.saveLocalStorage(this.prefix + "conflict", `${value}`);
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/diff2html.js
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/diff-parser.js
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/types.js
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/utils.js
  let i, chr, len;
  let hash2 = 0;
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/diff-parser.js
  const filenameParts = filename.split(".");
  return prefixes.reduce((startsWith, prefix) => startsWith || str.startsWith(prefix), false);
  const prefixes = extraPrefix !== void 0 ? [...baseDiffFilenamePrefixes, extraPrefix] : baseDiffFilenamePrefixes;
  const FilenameRegExp = linePrefix ? new RegExp(`^${escapeForRegExp(linePrefix)} "?(.+?)"?$`) : new RegExp('^"?(.+?)"?$');
  const [, filename = ""] = FilenameRegExp.exec(line) || [];
  const matchingPrefix = prefixes.find((p) => filename.indexOf(p) === 0);
  const fnameWithoutPrefix = matchingPrefix ? filename.slice(matchingPrefix.length) : filename;
function parse(diffInput, config = {}) {
  const files = [];
  let currentFile = null;
  let currentBlock = null;
  let oldLine = null;
  let oldLine2 = null;
  let newLine = null;
  let possibleOldName = null;
  let possibleNewName = null;
  const oldFileNameHeader = "--- ";
  const newFileNameHeader = "+++ ";
  const hunkHeaderPrefix = "@@";
  const oldMode = /^old mode (\d{6})/;
  const newMode = /^new mode (\d{6})/;
  const deletedFileMode = /^deleted file mode (\d{6})/;
  const newFileMode = /^new file mode (\d{6})/;
  const copyFrom = /^copy from "?(.+)"?/;
  const copyTo = /^copy to "?(.+)"?/;
  const renameFrom = /^rename from "?(.+)"?/;
  const renameTo = /^rename to "?(.+)"?/;
  const similarityIndex = /^similarity index (\d+)%/;
  const dissimilarityIndex = /^dissimilarity index (\d+)%/;
  const index2 = /^index ([\da-z]+)\.\.([\da-z]+)\s*(\d{6})?/;
  const binaryFiles = /^Binary files (.*) and (.*) differ/;
  const binaryDiff = /^GIT binary patch/;
  const combinedIndex = /^index ([\da-z]+),([\da-z]+)\.\.([\da-z]+)/;
  const combinedMode = /^mode (\d{6}),(\d{6})\.\.(\d{6})/;
  const combinedNewFile = /^new file mode (\d{6})/;
  const combinedDeletedFile = /^deleted file mode (\d{6}),(\d{6})/;
  const diffLines2 = diffInput.replace(/\\ No newline at end of file/g, "").replace(/\r\n?/g, "\n").split("\n");
    let values;
    const currentLine = {
    const addedPrefixes = currentFile.isCombined ? ["+ ", " +", "++"] : ["+"];
    const deletedPrefixes = currentFile.isCombined ? ["- ", " -", "--"] : ["-"];
    let idx = lineIdx;
  diffLines2.forEach((line, lineIndex) => {
    let values;
    const prevLine = diffLines2[lineIndex - 1];
    const nxtLine = diffLines2[lineIndex + 1];
    const afterNxtLine = diffLines2[lineIndex + 2];
      const gitDiffStart = /^diff --git "?([a-ciow]\/.+)"? "?([a-ciow]\/.+)"?/;
      const unixDiffBinaryStart = /^Binary files "?([a-ciow]\/.+)"? and "?([a-ciow]\/.+)"? differ/;
      const message = typeof config.diffTooBigMessage === "function" ? config.diffTooBigMessage(files.length) : "Diff too big to be displayed";
    const doesNotExistHunkHeader = !existHunkHeader(line, lineIndex);
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/file-list-renderer.js
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/render-utils.js
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/rematch.js
  const matrix = [];
  let i;
  let j;
  return (x, y) => {
    const xValue = str(x).trim();
    const yValue = str(y).trim();
    const lev = levenshtein(xValue, yValue);
  function findBestMatch(a, b, cache = /* @__PURE__ */ new Map()) {
    let bestMatchDist = Infinity;
    let bestMatch;
    for (let i = 0; i < a.length; ++i) {
      for (let j = 0; j < b.length; ++j) {
        const cacheKey = JSON.stringify([a[i], b[j]]);
        let md;
  function group(a, b, level = 0, cache = /* @__PURE__ */ new Map()) {
    const bm = findBestMatch(a, b, cache);
    const a1 = a.slice(0, bm.indexA);
    const b1 = b.slice(0, bm.indexB);
    const aMatch = [a[bm.indexA]];
    const bMatch = [b[bm.indexB]];
    const tailA = bm.indexA + 1;
    const tailB = bm.indexB + 1;
    const a2 = a.slice(tailA);
    const b2 = b.slice(tailB);
    const group1 = group(a1, b1, level + 1, cache);
    const groupMatch = group(aMatch, bMatch, level + 1, cache);
    const group2 = group(a2, b2, level + 1, cache);
    let result = groupMatch;
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/render-utils.js
var distance = newDistanceFn((change) => change.value);
function deconstructLine(line, isCombined, escape = true) {
  const indexToSplit = prefixLength(isCombined);
  const oldFilename = unifyPath(file.oldName);
  const newFilename = unifyPath(file.newName);
    const prefixPaths = [];
    const suffixPaths = [];
    const oldFilenameParts = oldFilename.split(separator);
    const newFilenameParts = newFilename.split(separator);
    const oldFilenamePartsSize = oldFilenameParts.length;
    const newFilenamePartsSize = newFilenameParts.length;
    let i = 0;
    let j = oldFilenamePartsSize - 1;
    let k = newFilenamePartsSize - 1;
    const finalPrefix = prefixPaths.join(separator);
    const finalSuffix = suffixPaths.join(separator);
    const oldRemainingPath = oldFilenameParts.slice(i, j + 1).join(separator);
    const newRemainingPath = newFilenameParts.slice(i, k + 1).join(separator);
  return `d2h-${hashCode(filenameDiff(file)).toString().slice(-6)}`;
  let templateName = "file-changed";
function diffHighlight(diffLine1, diffLine2, isCombined, config = {}) {
  const { matching, maxLineLengthHighlight, matchWordsThreshold, diffStyle } = Object.assign(Object.assign({}, defaultRenderConfig), config);
  const line1 = deconstructLine(diffLine1, isCombined, false);
  const line2 = deconstructLine(diffLine2, isCombined, false);
  const diff2 = diffStyle === "char" ? diffChars(line1.content, line2.content) : diffWordsWithSpace(line1.content, line2.content);
  const changedWords = [];
    const removed = diff2.filter((element2) => element2.removed);
    const added = diff2.filter((element2) => element2.added);
    const chunks = matcher(added, removed);
    chunks.forEach((chunk) => {
        const dist = distance(chunk[0][0], chunk[1][0]);
  const highlightedLine = diff2.reduce((highlightedLine2, part) => {
    const elemType = part.added ? "ins" : part.removed ? "del" : null;
    const addClass = changedWords.indexOf(part) > -1 ? ' class="d2h-change"' : "";
    const escapedValue = escapeForHtml(part.value);
    return elemType !== null ? `${highlightedLine2}<${elemType}${addClass}>${escapedValue}</${elemType}>` : `${highlightedLine2}${escapedValue}`;
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/file-list-renderer.js
  const files = diffFiles.map((file) => hoganUtils.render(baseTemplatesPath, "line", {
    fileHtmlId: getHtmlId(file),
    oldName: file.oldName,
    newName: file.newName,
    fileName: filenameDiff(file),
    deletedLines: "-" + file.deletedLines,
    addedLines: "+" + file.addedLines
  }, {
    fileIcon: hoganUtils.template(iconsBaseTemplatesPath, getFileIcon(file))
  })).join("\n");
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/line-by-line-renderer.js
var defaultLineByLineRendererConfig = Object.assign(Object.assign({}, defaultRenderConfig), { renderNothingWhenEmpty: false, matchingMaxComparisons: 2500, maxLineSizeInBlockForComparison: 200 });
var LineByLineRenderer = class {
  constructor(hoganUtils, config = {}) {
    this.config = Object.assign(Object.assign({}, defaultLineByLineRendererConfig), config);
  render(diffFiles) {
    const diffsHtml = diffFiles.map((file) => {
      let diffs;
        diffs = this.generateFileHtml(file);
        diffs = this.generateEmptyDiff();
      return this.makeFileDiffHtml(file, diffs);
  }
  makeFileDiffHtml(file, diffs) {
    const fileDiffTemplate = this.hoganUtils.template(baseTemplatesPath2, "file-diff");
    const filePathTemplate = this.hoganUtils.template(genericTemplatesPath, "file-path");
    const fileIconTemplate = this.hoganUtils.template(iconsBaseTemplatesPath2, "file");
    const fileTagTemplate = this.hoganUtils.template(tagsBaseTemplatesPath, getFileIcon(file));
  }
  generateEmptyDiff() {
  }
  generateFileHtml(file) {
    const matcher2 = newMatcherFn(newDistanceFn((e) => deconstructLine(e.content, file.isCombined).content));
    return file.blocks.map((block) => {
      let lines = this.hoganUtils.render(genericTemplatesPath, "block-header", {
      this.applyLineGroupping(block).forEach(([contextLines, oldLines, newLines]) => {
          this.applyRematchMatching(oldLines, newLines, matcher2).map(([oldLines2, newLines2]) => {
            const { left, right } = this.processChangedLines(file, file.isCombined, oldLines2, newLines2);
            lines += left;
            lines += right;
          contextLines.forEach((line) => {
            const { prefix, content } = deconstructLine(line.content, file.isCombined);
            lines += this.generateSingleLineHtml(file, {
          const { left, right } = this.processChangedLines(file, file.isCombined, oldLines, newLines);
  }
  applyLineGroupping(block) {
    const blockLinesGroups = [];
    let oldLines = [];
    let newLines = [];
    for (let i = 0; i < block.lines.length; i++) {
      const diffLine = block.lines[i];
  }
  applyRematchMatching(oldLines, newLines, matcher2) {
    const comparisons = oldLines.length * newLines.length;
    const maxLineSizeInBlock = Math.max.apply(null, [0].concat(oldLines.concat(newLines).map((elem) => elem.content.length)));
    const doMatching = comparisons < this.config.matchingMaxComparisons && maxLineSizeInBlock < this.config.maxLineSizeInBlockForComparison && (this.config.matching === "lines" || this.config.matching === "words");
  }
  processChangedLines(file, isCombined, oldLines, newLines) {
    const fileHtml = {
    const maxLinesNumber = Math.max(oldLines.length, newLines.length);
    for (let i = 0; i < maxLinesNumber; i++) {
      const oldLine = oldLines[i];
      const newLine = newLines[i];
      const diff2 = oldLine !== void 0 && newLine !== void 0 ? diffHighlight(oldLine.content, newLine.content, isCombined, this.config) : void 0;
      const preparedOldLine = oldLine !== void 0 && oldLine.oldNumber !== void 0 ? Object.assign(Object.assign({}, diff2 !== void 0 ? {
      } : Object.assign(Object.assign({}, deconstructLine(oldLine.content, isCombined)), { type: toCSSClass(oldLine.type) })), { oldNumber: oldLine.oldNumber, newNumber: oldLine.newNumber }) : void 0;
      const preparedNewLine = newLine !== void 0 && newLine.newNumber !== void 0 ? Object.assign(Object.assign({}, diff2 !== void 0 ? {
      } : Object.assign(Object.assign({}, deconstructLine(newLine.content, isCombined)), { type: toCSSClass(newLine.type) })), { oldNumber: newLine.oldNumber, newNumber: newLine.newNumber }) : void 0;
      const { left, right } = this.generateLineHtml(file, preparedOldLine, preparedNewLine);
  }
  generateLineHtml(file, oldLine, newLine) {
  }
  generateSingleLineHtml(file, line) {
    const lineNumberHtml = this.hoganUtils.render(baseTemplatesPath2, "numbers", {
  }
};
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/side-by-side-renderer.js
var defaultSideBySideRendererConfig = Object.assign(Object.assign({}, defaultRenderConfig), { renderNothingWhenEmpty: false, matchingMaxComparisons: 2500, maxLineSizeInBlockForComparison: 200 });
var SideBySideRenderer = class {
  constructor(hoganUtils, config = {}) {
    this.config = Object.assign(Object.assign({}, defaultSideBySideRendererConfig), config);
  render(diffFiles) {
    const diffsHtml = diffFiles.map((file) => {
      let diffs;
        diffs = this.generateFileHtml(file);
        diffs = this.generateEmptyDiff();
      return this.makeFileDiffHtml(file, diffs);
  }
  makeFileDiffHtml(file, diffs) {
    const fileDiffTemplate = this.hoganUtils.template(baseTemplatesPath3, "file-diff");
    const filePathTemplate = this.hoganUtils.template(genericTemplatesPath2, "file-path");
    const fileIconTemplate = this.hoganUtils.template(iconsBaseTemplatesPath3, "file");
    const fileTagTemplate = this.hoganUtils.template(tagsBaseTemplatesPath2, getFileIcon(file));
  }
  generateEmptyDiff() {
  }
  generateFileHtml(file) {
    const matcher2 = newMatcherFn(newDistanceFn((e) => deconstructLine(e.content, file.isCombined).content));
    return file.blocks.map((block) => {
      const fileHtml = {
        left: this.makeHeaderHtml(block.header, file),
        right: this.makeHeaderHtml("")
      this.applyLineGroupping(block).forEach(([contextLines, oldLines, newLines]) => {
          this.applyRematchMatching(oldLines, newLines, matcher2).map(([oldLines2, newLines2]) => {
            const { left, right } = this.processChangedLines(file.isCombined, oldLines2, newLines2);
            fileHtml.left += left;
            fileHtml.right += right;
          contextLines.forEach((line) => {
            const { prefix, content } = deconstructLine(line.content, file.isCombined);
            const { left, right } = this.generateLineHtml({
            });
            fileHtml.left += left;
            fileHtml.right += right;
          const { left, right } = this.processChangedLines(file.isCombined, oldLines, newLines);
    }).reduce((accomulated, html2) => {
  }
  applyLineGroupping(block) {
    const blockLinesGroups = [];
    let oldLines = [];
    let newLines = [];
    for (let i = 0; i < block.lines.length; i++) {
      const diffLine = block.lines[i];
  }
  applyRematchMatching(oldLines, newLines, matcher2) {
    const comparisons = oldLines.length * newLines.length;
    const maxLineSizeInBlock = Math.max.apply(null, [0].concat(oldLines.concat(newLines).map((elem) => elem.content.length)));
    const doMatching = comparisons < this.config.matchingMaxComparisons && maxLineSizeInBlock < this.config.maxLineSizeInBlockForComparison && (this.config.matching === "lines" || this.config.matching === "words");
  }
  makeHeaderHtml(blockHeader, file) {
  }
  processChangedLines(isCombined, oldLines, newLines) {
    const fileHtml = {
    const maxLinesNumber = Math.max(oldLines.length, newLines.length);
    for (let i = 0; i < maxLinesNumber; i++) {
      const oldLine = oldLines[i];
      const newLine = newLines[i];
      const diff2 = oldLine !== void 0 && newLine !== void 0 ? diffHighlight(oldLine.content, newLine.content, isCombined, this.config) : void 0;
      const preparedOldLine = oldLine !== void 0 && oldLine.oldNumber !== void 0 ? Object.assign(Object.assign({}, diff2 !== void 0 ? {
      } : Object.assign(Object.assign({}, deconstructLine(oldLine.content, isCombined)), { type: toCSSClass(oldLine.type) })), { number: oldLine.oldNumber }) : void 0;
      const preparedNewLine = newLine !== void 0 && newLine.newNumber !== void 0 ? Object.assign(Object.assign({}, diff2 !== void 0 ? {
      } : Object.assign(Object.assign({}, deconstructLine(newLine.content, isCombined)), { type: toCSSClass(newLine.type) })), { number: newLine.newNumber }) : void 0;
      const { left, right } = this.generateLineHtml(preparedOldLine, preparedNewLine);
  }
  generateLineHtml(oldLine, newLine) {
  }
  generateSingleHtml(line) {
    const lineClass = "d2h-code-side-linenumber";
    const contentClass = "d2h-code-side-line";
      type: (line === null || line === void 0 ? void 0 : line.type) || `${CSSLineClass.CONTEXT} d2h-emptyplaceholder`,
      lineClass: line !== void 0 ? lineClass : `${lineClass} d2h-code-side-emptyplaceholder`,
      contentClass: line !== void 0 ? contentClass : `${contentClass} d2h-code-side-emptyplaceholder`,
  }
};
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/hoganjs-utils.js
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/diff2html-templates.js
// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/hoganjs-utils.js
var HoganJsUtils = class {
  constructor({ compiledTemplates = {}, rawTemplates = {} }) {
    const compiledRawTemplates = Object.entries(rawTemplates).reduce((previousTemplates, [name, templateString]) => {
      const compiledTemplate = Hogan3.compile(templateString, { asString: false });
      return Object.assign(Object.assign({}, previousTemplates), { [name]: compiledTemplate });
    this.preCompiledTemplates = Object.assign(Object.assign(Object.assign({}, defaultTemplates), compiledTemplates), compiledRawTemplates);
  static compile(templateString) {
  }
  render(namespace, view, params, partials, indent2) {
    const templateKey = this.templateKey(namespace, view);
      const template = this.preCompiledTemplates[templateKey];
      throw new Error(`Could not find template to render '${templateKey}'`);
  }
  template(namespace, view) {
  }
  templateKey(namespace, view) {
    return `${namespace}-${view}`;
  }

// node_modules/.pnpm/diff2html@3.4.41/node_modules/diff2html/lib-esm/diff2html.js
var defaultDiff2HtmlConfig = Object.assign(Object.assign(Object.assign({}, defaultLineByLineRendererConfig), defaultSideBySideRendererConfig), { outputFormat: OutputFormatType.LINE_BY_LINE, drawFileList: true });
function html(diffInput, configuration = {}) {
  const config = Object.assign(Object.assign({}, defaultDiff2HtmlConfig), configuration);
  const diffJson = typeof diffInput === "string" ? parse(diffInput, config) : diffInput;
  const hoganUtils = new HoganJsUtils(config);
  const fileList = config.drawFileList ? render(diffJson, hoganUtils) : "";
  const diffOutput = config.outputFormat === "side-by-side" ? new SideBySideRenderer(hoganUtils, config).render(diffJson) : new LineByLineRenderer(hoganUtils, config).render(diffJson);
    if (import_obsidian17.Platform.isMobile) {
      this.leaf.view.titleEl.textContent = this.getDisplayText();
    }
// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/index.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/animations.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/utils.js
  return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/environment.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/loop.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/style_manager.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/dom.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/globals.js
init_polyfill_buffer();
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js
var ResizeObserverSingleton = class _ResizeObserverSingleton {
  /** @param {ResizeObserverOptions} options */
    /**
     * @private
     * @readonly
     * @type {WeakMap<Element, import('./private.js').Listener>}
     */
    __publicField(this, "_listeners", "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0);
    /**
     * @private
     * @type {ResizeObserver}
     */
    __publicField(this, "_observer");
    /** @type {ResizeObserverOptions} */
    __publicField(this, "options");
  /**
   * @param {Element} element
   * @param {import('./private.js').Listener} listener
   * @returns {() => void}
   */
  /**
   * @private
   */
    return (_a2 = this._observer) != null ? _a2 : this._observer = new ResizeObserver((entries) => {
        _ResizeObserverSingleton.entries.set(entry.target, entry);
        (_a3 = this._listeners.get(entry.target)) == null ? void 0 : _a3(entry);

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/dom.js
  if (root2 && /** @type {ShadowRoot} */
  root2.host) {
    return (
      /** @type {ShadowRoot} */
      root2
    );
  style_element.textContent = "/* empty */";
  append2(
    /** @type {Document} */
    node.head || node,
    style
  );
  text2.data = /** @type {string} */
  data;
  element2.classList.toggle(name, !!toggle);
  return new CustomEvent(type, { detail, bubbles, cancelable });
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach(
    /** @param {Element} node */
    (node) => {
      result[node.slot || "default"] = true;
    }
  );
  return result;
}

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/style_manager.js

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/await_block.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/transitions.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/scheduler.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/lifecycle.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/scheduler.js

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/transitions.js
  let original_inert_value;
    const d = (
      /** @type {Program['d']} */
      program.b - t
    );
    const {
      delay: delay2 = 0,
      duration = 300,
      easing = identity,
      tick: tick2 = noop,
      css
    } = config || null_transition;
    if ("inert" in node) {
      if (b) {
        if (original_inert_value !== void 0) {
          node.inert = original_inert_value;
        }
      } else {
        original_inert_value = /** @type {HTMLElement} */
        node.inert;
        node.inert = true;
      }
    }
            animation_name = create_rule(
              node,
              t,
              running_program.b,
              running_program.duration,
              0,
              easing,
              config.css
            );
          const opts = { direction: b ? "in" : "out" };
          config = config(opts);

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/each.js
init_polyfill_buffer();
function ensure_array_like(array_like_or_iterator) {
  return (array_like_or_iterator == null ? void 0 : array_like_or_iterator.length) !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/spread.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/ssr.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/shared/boolean_attributes.js
init_polyfill_buffer();
var _boolean_attributes = (
  /** @type {const} */
  [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ]
);

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/shared/utils/names.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/Component.js
init_polyfill_buffer();
function mount_component(component, target, anchor) {
  add_render_callback(() => {
    const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
    if (component.$$.on_destroy) {
      component.$$.on_destroy.push(...new_on_destroy);
    } else {
      run_all(new_on_destroy);
    }
    component.$$.on_mount = [];
  });
    mount_component(component, options.target, options.anchor);
    constructor($$componentCtor, $$slots, use_shadow_dom) {
      /** The Svelte component constructor */
      __publicField(this, "$$ctor");
      /** Slots */
      __publicField(this, "$$s");
      /** The Svelte component instance */
      __publicField(this, "$$c");
      /** Whether or not the custom element is connected */
      __publicField(this, "$$cn", false);
      /** Component props data */
      __publicField(this, "$$d", {});
      /** `true` if currently in the process of reflecting component props back to attributes */
      __publicField(this, "$$r", false);
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      __publicField(this, "$$p_d", {});
      /** @type {Record<string, Function[]>} Event listeners */
      __publicField(this, "$$l", {});
      /** @type {Map<Function, Function>} Event listener unsubscribe functions */
      __publicField(this, "$$l_u", /* @__PURE__ */ new Map());
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (use_shadow_dom) {
        this.attachShadow({ mode: "open" });
      }
    }
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot = function(name) {
          return () => {
            let node;
            const obj = {
              c: function create() {
                node = element("slot");
                if (name !== "default") {
                  attr(node, "name", name);
                }
              },
              /**
               * @param {HTMLElement} target
               * @param {HTMLElement} [anchor]
               */
              m: function mount(target, anchor) {
                insert(target, node, anchor);
              },
              d: function destroy(detaching) {
                if (detaching) {
                  detach(node);
                }
              }
            };
            return obj;
          };
        };
        await Promise.resolve();
        if (!this.$$cn) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            $$slots[name] = [create_slot(name)];
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        this.$$c = new this.$$ctor({
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$scope: {
              ctx: []
            }
          }
        });
        const reflect_attributes = () => {
          this.$$r = true;
          for (const key2 in this.$$p_d) {
            this.$$d[key2] = this.$$c.$$.ctx[this.$$c.$$.props[key2]];
            if (this.$$p_d[key2].reflect) {
              const attribute_value = get_custom_element_value(
                key2,
                this.$$d[key2],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(key2);
              } else {
                this.setAttribute(this.$$p_d[key2].attribute || key2, attribute_value);
              }
            }
          }
          this.$$r = false;
        };
        this.$$c.$$.after_update.push(reflect_attributes);
        reflect_attributes();
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
        }
        this.$$l = {};
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
      var _a2;
      if (this.$$r)
        return;
      attr2 = this.$$g_p(attr2);
      this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
      (_a2 = this.$$c) == null ? void 0 : _a2.$set({ [attr2]: this.$$d[attr2] });
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn) {
          this.$$c.$destroy();
          this.$$c = void 0;
        }
      });
    $$g_p(attribute_name) {
      return Object.keys(this.$$p_d).find(
        (key2) => this.$$p_d[key2].attribute === attribute_name || !this.$$p_d[key2].attribute && key2.toLowerCase() === attribute_name
      ) || attribute_name;
  };
}
function get_custom_element_value(prop, value, props_definition, transform) {
  var _a2;
  const type = (_a2 = props_definition[prop]) == null ? void 0 : _a2.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
  }
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    __publicField(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    __publicField(this, "$$set");
  }
  /** @returns {void} */
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(props) {
    if (this.$$set && !is_empty(props)) {
      this.$$set(props);
// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/dev.js
init_polyfill_buffer();

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/shared/version.js
init_polyfill_buffer();
var PUBLIC_VERSION = "4";

// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/internal/disclose-version/index.js
init_polyfill_buffer();
if (typeof window !== "undefined")
  (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);

// node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs
// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/index.js
// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/transition/index.js
// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/easing/index.js
// node_modules/.pnpm/svelte@4.2.0/node_modules/svelte/src/runtime/transition/index.js
  const capitalized_secondary_properties = secondary_properties.map(
    (e) => `${e[0].toUpperCase()}${e.slice(1)}`
  );
  const border_width_start_value = parseFloat(
    style[`border${capitalized_secondary_properties[0]}Width`]
  );
  const border_width_end_value = parseFloat(
    style[`border${capitalized_secondary_properties[1]}Width`]
  );
  append_styles(target, "svelte-1wbh8tp", "main.svelte-1wbh8tp .nav-file-title.svelte-1wbh8tp{align-items:center}");
      if (detaching) {
      }
  let div3_data_path_value;
      var _a2, _b;
      attr(div0, "class", "tree-item-inner nav-file-title-content");
      attr(div3, "class", "tree-item-self is-clickable nav-file-title svelte-1wbh8tp");
      attr(div3, "data-path", div3_data_path_value = /*diff*/
      ctx[0].vault_path);
      attr(
        div3,
        "data-tooltip-position",
        /*side*/
        ctx[3]
      );
      toggle_class(
        div3,
        "is-active",
        /*view*/
        ((_a2 = ctx[1].plugin.lastDiffViewState) == null ? void 0 : _a2.file) == /*diff*/
        ctx[0].vault_path && /*view*/
        ((_b = ctx[1].plugin.lastDiffViewState) == null ? void 0 : _b.hash)
      );
      attr(main, "class", "tree-item nav-file svelte-1wbh8tp");
      var _a2, _b;
      if (dirty & /*diff*/
      1 && div3_data_path_value !== (div3_data_path_value = /*diff*/
      ctx2[0].vault_path)) {
        attr(div3, "data-path", div3_data_path_value);
      }
      if (dirty & /*side*/
      8) {
        attr(
          div3,
          "data-tooltip-position",
          /*side*/
          ctx2[3]
        );
      }
      if (dirty & /*view, diff*/
      3) {
        toggle_class(
          div3,
          "is-active",
          /*view*/
          ((_a2 = ctx2[1].plugin.lastDiffViewState) == null ? void 0 : _a2.file) == /*diff*/
          ctx2[0].vault_path && /*view*/
          ((_b = ctx2[1].plugin.lastDiffViewState) == null ? void 0 : _b.hash)
        );
      }
      if (detaching) {
      }
      toggle_class(
        div1,
        "is-collapsed",
        /*closed*/
        ctx[4][
          /*entity*/
          ctx[8].title
        ]
      );
      attr(
        div3,
        "data-tooltip-position",
        /*side*/
        ctx[5]
      );
      if (!current || dirty & /*closed, hierarchy*/
      17) {
        toggle_class(
          div1,
          "is-collapsed",
          /*closed*/
          ctx[4][
            /*entity*/
            ctx[8].title
          ]
        );
      }
      if (!current || dirty & /*side*/
      32) {
        attr(
          div3,
          "data-tooltip-position",
          /*side*/
          ctx[5]
        );
      }
      if (detaching) {
      }
      if (detaching) {
      }
      if (detaching) {
      }
      if (detaching) {
      }
      if_blocks[current_block_type_index].d(detaching);
  let each_value = ensure_array_like(
        each_value = ensure_array_like(
          /*hierarchy*/
          ctx2[0].children
        );
      if (detaching) {
      }
      if (detaching) {
      }
      if (detaching) {
      }
  let each_value = ensure_array_like(
        each_value = ensure_array_like(
          /*log*/
          ctx2[0].diff.files
        );
      if (detaching) {
      }
      destroy_each(each_blocks, detaching);
      toggle_class(
        div0,
        "is-collapsed",
        /*isCollapsed*/
        ctx[4]
      );
      attr(
        div1,
        "data-tooltip-position",
        /*side*/
        ctx[5]
      );
      if (!current || dirty & /*isCollapsed*/
      16) {
        toggle_class(
          div0,
          "is-collapsed",
          /*isCollapsed*/
          ctx2[4]
        );
      }
      if (!current || dirty & /*side*/
      32) {
        attr(
          div1,
          "data-tooltip-position",
          /*side*/
          ctx2[5]
        );
      }
      if (detaching) {
      }
  let each_value = ensure_array_like(
        each_value = ensure_array_like(
          /*logs*/
          ctx2[6]
        );
      if (detaching) {
      }
      if (detaching) {
      }
// node_modules/.pnpm/github.com+Vinzent03+obsidian-community-lib@e663de4f95c879b40613090da78ea599ff621d24_@codemir_kbfcpig3uak7df3ohthcqq53p4/node_modules/obsidian-community-lib/dist/index.js
// node_modules/.pnpm/github.com+Vinzent03+obsidian-community-lib@e663de4f95c879b40613090da78ea599ff621d24_@codemir_kbfcpig3uak7df3ohthcqq53p4/node_modules/obsidian-community-lib/dist/utils.js
  append_styles(target, "svelte-1wbh8tp", "main.svelte-1wbh8tp .nav-file-title.svelte-1wbh8tp{align-items:center}");
      if (detaching) {
      }
  let div6_data_path_value;
      var _a2, _b, _c;
      attr(div0, "class", "tree-item-inner nav-file-title-content");
      attr(div6, "class", "tree-item-self is-clickable nav-file-title svelte-1wbh8tp");
      attr(div6, "data-path", div6_data_path_value = /*change*/
      ctx[0].vault_path);
      attr(
        div6,
        "data-tooltip-position",
        /*side*/
        ctx[3]
      );
      toggle_class(
        div6,
        "is-active",
        /*view*/
        ((_a2 = ctx[1].plugin.lastDiffViewState) == null ? void 0 : _a2.file) == /*change*/
        ctx[0].vault_path && !/*view*/
        ((_b = ctx[1].plugin.lastDiffViewState) == null ? void 0 : _b.hash) && !/*view*/
        ((_c = ctx[1].plugin.lastDiffViewState) == null ? void 0 : _c.staged)
      );
      attr(main, "class", "tree-item nav-file svelte-1wbh8tp");
      var _a2, _b, _c;
      if (dirty & /*change*/
      1 && div6_data_path_value !== (div6_data_path_value = /*change*/
      ctx2[0].vault_path)) {
        attr(div6, "data-path", div6_data_path_value);
      }
      if (dirty & /*side*/
      8) {
        attr(
          div6,
          "data-tooltip-position",
          /*side*/
          ctx2[3]
        );
      }
      if (dirty & /*view, change*/
      3) {
        toggle_class(
          div6,
          "is-active",
          /*view*/
          ((_a2 = ctx2[1].plugin.lastDiffViewState) == null ? void 0 : _a2.file) == /*change*/
          ctx2[0].vault_path && !/*view*/
          ((_b = ctx2[1].plugin.lastDiffViewState) == null ? void 0 : _b.hash) && !/*view*/
          ((_c = ctx2[1].plugin.lastDiffViewState) == null ? void 0 : _c.staged)
        );
      }
      if (detaching) {
      }
  append_styles(target, "svelte-1wbh8tp", "main.svelte-1wbh8tp .nav-file-title.svelte-1wbh8tp{align-items:center}");
  let div2_data_path_value;
      attr(div0, "class", "tree-item-inner nav-file-title-content");
      attr(div2, "class", "tree-item-self is-clickable nav-file-title svelte-1wbh8tp");
      attr(div2, "data-path", div2_data_path_value = /*change*/
      ctx[0].vault_path);
      attr(
        div2,
        "data-tooltip-position",
        /*side*/
        ctx[1]
      );
      attr(main, "class", "tree-item nav-file svelte-1wbh8tp");
      if (dirty & /*change*/
      1 && div2_data_path_value !== (div2_data_path_value = /*change*/
      ctx2[0].vault_path)) {
        attr(div2, "data-path", div2_data_path_value);
      }
      if (dirty & /*side*/
      2) {
        attr(
          div2,
          "data-tooltip-position",
          /*side*/
          ctx2[1]
        );
      }
      if (detaching) {
      }
  append_styles(target, "svelte-1wbh8tp", "main.svelte-1wbh8tp .nav-file-title.svelte-1wbh8tp{align-items:center}");
      if (detaching) {
      }
  let div5_data_path_value;
      var _a2, _b, _c;
      attr(div0, "class", "tree-item-inner nav-file-title-content");
      attr(div5, "class", "tree-item-self is-clickable nav-file-title svelte-1wbh8tp");
      attr(div5, "data-path", div5_data_path_value = /*change*/
      ctx[0].vault_path);
      attr(
        div5,
        "data-tooltip-position",
        /*side*/
        ctx[3]
      );
      toggle_class(
        div5,
        "is-active",
        /*view*/
        ((_a2 = ctx[1].plugin.lastDiffViewState) == null ? void 0 : _a2.file) == /*change*/
        ctx[0].vault_path && !/*view*/
        ((_b = ctx[1].plugin.lastDiffViewState) == null ? void 0 : _b.hash) && /*view*/
        ((_c = ctx[1].plugin.lastDiffViewState) == null ? void 0 : _c.staged)
      );
      attr(main, "class", "tree-item nav-file svelte-1wbh8tp");
      var _a2, _b, _c;
      if (dirty & /*change*/
      1 && div5_data_path_value !== (div5_data_path_value = /*change*/
      ctx2[0].vault_path)) {
        attr(div5, "data-path", div5_data_path_value);
      }
      if (dirty & /*side*/
      8) {
        attr(
          div5,
          "data-tooltip-position",
          /*side*/
          ctx2[3]
        );
      }
      if (dirty & /*view, change*/
      3) {
        toggle_class(
          div5,
          "is-active",
          /*view*/
          ((_a2 = ctx2[1].plugin.lastDiffViewState) == null ? void 0 : _a2.file) == /*change*/
          ctx2[0].vault_path && !/*view*/
          ((_b = ctx2[1].plugin.lastDiffViewState) == null ? void 0 : _b.hash) && /*view*/
          ((_c = ctx2[1].plugin.lastDiffViewState) == null ? void 0 : _c.staged)
        );
      }
      if (detaching) {
      }
  append_styles(target, "svelte-hup5mn", "main.svelte-hup5mn .nav-folder-title.svelte-hup5mn{align-items:center}");
      toggle_class(
        div1,
        "is-collapsed",
        /*closed*/
        ctx[5][
          /*entity*/
          ctx[15].title
        ]
      );
      attr(div2, "class", "tree-item-inner nav-folder-title-content");
      attr(div6, "class", "tree-item-self is-clickable nav-folder-title svelte-hup5mn");
      attr(
        div6,
        "data-tooltip-position",
        /*side*/
        ctx[6]
      );
        dispose = listen(div7, "click", stop_propagation(click_handler_3));
      if (!current || dirty & /*closed, hierarchy*/
      33) {
        toggle_class(
          div1,
          "is-collapsed",
          /*closed*/
          ctx[5][
            /*entity*/
            ctx[15].title
          ]
        );
      }
      if (!current || dirty & /*side*/
      64) {
        attr(
          div6,
          "data-tooltip-position",
          /*side*/
          ctx[6]
        );
      }
      if (detaching) {
      }
      if (detaching) {
      }
      if (detaching) {
      }
      if (detaching) {
      }
      if (detaching) {
      }
      if (detaching) {
      }
      if_blocks[current_block_type_index].d(detaching);
  let each_value = ensure_array_like(
      attr(main, "class", "svelte-hup5mn");
      if (dirty & /*hierarchy, plugin, view, fileType, closed, fold, side, unstage, stage, discard*/
        each_value = ensure_array_like(
          /*hierarchy*/
          ctx2[0].children
        );
      if (detaching) {
      }
  append_styles(target, "svelte-1bvmxec", `.commit-msg-input.svelte-1bvmxec.svelte-1bvmxec{width:100%;overflow:hidden;resize:none;padding:7px 5px;background-color:var(--background-modifier-form-field)}.git-commit-msg.svelte-1bvmxec.svelte-1bvmxec{position:relative;padding:0;width:calc(100% - var(--size-4-8));margin:4px auto}main.svelte-1bvmxec .git-tools .files-count.svelte-1bvmxec{padding-left:var(--size-2-1);width:11px;display:flex;align-items:center;justify-content:center}.nav-folder-title.svelte-1bvmxec.svelte-1bvmxec{align-items:center}.git-commit-msg-clear-button.svelte-1bvmxec.svelte-1bvmxec{position:absolute;background:transparent;border-radius:50%;color:var(--search-clear-button-color);cursor:var(--cursor);top:-4px;right:2px;bottom:0px;line-height:0;height:var(--input-height);width:28px;margin:auto;padding:0 0;text-align:center;display:flex;justify-content:center;align-items:center;transition:color 0.15s ease-in-out}.git-commit-msg-clear-button.svelte-1bvmxec.svelte-1bvmxec:after{content:"";height:var(--search-clear-button-size);width:var(--search-clear-button-size);display:block;background-color:currentColor;-webkit-mask-image:url("data:image/svg+xml,<svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM3.8705 3.09766L6.00003 5.22718L8.12955 3.09766L8.9024 3.8705L6.77287 6.00003L8.9024 8.12955L8.12955 8.9024L6.00003 6.77287L3.8705 8.9024L3.09766 8.12955L5.22718 6.00003L3.09766 3.8705L3.8705 3.09766Z' fill='currentColor'/></svg>");-webkit-mask-repeat:no-repeat}`);
      attr(div, "class", "git-commit-msg-clear-button svelte-1bvmxec");
      if (detaching) {
      }
      toggle_class(div0, "is-collapsed", !/*stagedOpen*/
      ctx[13]);
      attr(div4, "class", "files-count svelte-1bvmxec");
      attr(div6, "class", "tree-item-self is-clickable nav-folder-title svelte-1bvmxec");
      toggle_class(div8, "is-collapsed", !/*changesOpen*/
      ctx[12]);
      attr(div13, "class", "files-count svelte-1bvmxec");
      attr(div15, "class", "tree-item-self is-clickable nav-folder-title svelte-1bvmxec");
      attr(div16, "class", "changes tree-item nav-folder");
      if (!current || dirty[0] & /*stagedOpen*/
      8192) {
        toggle_class(div0, "is-collapsed", !/*stagedOpen*/
        ctx2[13]);
      }
      if (!current || dirty[0] & /*changesOpen*/
      4096) {
        toggle_class(div8, "is-collapsed", !/*changesOpen*/
        ctx2[12]);
      }
      if (detaching) {
      }
      if (detaching) {
      }
  let each_value_2 = ensure_array_like(
        each_value_2 = ensure_array_like(
          /*status*/
          ctx2[6].staged
        );
      if (detaching) {
      }
      destroy_each(each_blocks, detaching);
      if (detaching) {
      }
  let each_value_1 = ensure_array_like(
        each_value_1 = ensure_array_like(
          /*status*/
          ctx2[6].changed
        );
      if (detaching) {
      }
      destroy_each(each_blocks, detaching);
      attr(div2, "class", "tree-item-self is-clickable nav-folder-title svelte-1bvmxec");
      if (detaching) {
      }
      if (detaching) {
      }
  let each_value = ensure_array_like(
        each_value = ensure_array_like(
          /*lastPulledFiles*/
          ctx2[7]
        );
      if (detaching) {
      }
      destroy_each(each_blocks, detaching);
  let main_data_type_value;
      attr(textarea, "class", "commit-msg-input svelte-1bvmxec");
      attr(div10, "class", "git-commit-msg svelte-1bvmxec");
      attr(main, "data-type", main_data_type_value = SOURCE_CONTROL_VIEW_CONFIG.type);
      attr(main, "class", "svelte-1bvmxec");
      if (detaching) {
      }
        buttons.forEach((btn) => (0, import_obsidian28.setIcon)(btn, btn.getAttr("data-icon")));
        (0, import_obsidian28.setIcon)(layoutBtn, showTree ? "list" : "folder");
        plugin.promiseQueue.addTask(() => plugin.gitManager.commit({ message: commitMessage }).then(() => {
      const unPushedCommits = yield plugin.gitManager.getUnpushedCommits();
      buttons.forEach((btn) => {
        var _a2, _b;
        if (import_obsidian28.Platform.isMobile) {
          btn.removeClass("button-border");
          if (btn.id == "push" && unPushedCommits > 0) {
            btn.addClass("button-border");
          }
        } else {
          (_a2 = btn.firstElementChild) === null || _a2 === void 0 ? void 0 : _a2.removeAttribute("color");
          if (btn.id == "push" && unPushedCommits > 0) {
            (_b = btn.firstElementChild) === null || _b === void 0 ? void 0 : _b.setAttr("color", "var(--text-accent)");
          }
        }
      });
          (0, import_obsidian28.setIcon)(layoutBtn, showTree ? "list" : "folder");
      editorCallback: (editor, { file }) => {
        if (file)
          return openLineInGitHub(editor, file, this.gitManager);
      }
      editorCallback: (_, { file }) => {
        if (file)
          return openHistoryInGitHub(file, this.gitManager);
      }
    this.addCommand({
      id: "fetch",
      name: "fetch",
      callback: () => this.promiseQueue.addTask(() => this.fetch())
    });
        const file = this.app.workspace.getActiveFile();
          this.app.vault.adapter.append(
    if (import_obsidian30.Platform.isDesktopApp) {
      this.addCommand({
        id: "commit-amend-staged-specified-message",
        name: "Commit Amend",
        callback: () => this.promiseQueue.addTask(
          () => this.commit({
            fromAutoBackup: false,
            requestCustomMessage: true,
            onlyStaged: true,
            amend: true
          })
        )
      });
    }
        console.log(status2);
        new ChangedFilesModal(this, status2.all).open();
        "Git is now available on mobile! Please read the plugin's README for more information.",
        "Git Mobile is now deprecated. Please uninstall it and install Git instead.",
    this.app.workspace.offref(this.openEvent);
          this.openEvent = this.app.workspace.on(
            "active-leaf-change",
            (leaf) => this.handleViewActiveState(leaf)
          );
        options: this.gitManager instanceof IsomorphicGit ? [confirmOption] : [],
    commitMessage,
    amend = false
    let hadConflict = this.localStorage.getConflict();
        this.localStorage.setConflict(false);
        committedFiles = await this.gitManager.commit({
          message: cmtMessage,
          amend
        });
          unstagedFiles,
          amend
          this.localStorage.setConflict(false);
    const hadConflict = this.localStorage.getConflict();
      dispatchEvent(new CustomEvent("git-refresh"));
  async fetch() {
    if (!await this.remotesAreSet()) {
      return;
    }
    await this.gitManager.fetch();
    this.displayMessage(`Fetched from remote`);
    this.offlineMode = false;
    dispatchEvent(new CustomEvent("git-refresh"));
  }
        var _a2;
        if (leaf.view instanceof import_obsidian30.MarkdownView && ((_a2 = leaf.view.file) == null ? void 0 : _a2.path) == file.path) {
      const lastAutos = this.loadLastAuto();
    const lastAutos = this.loadLastAuto();
    this.localStorage.setConflict(true);
        "Please resolve them and commit them using the commands `Git: Commit all changes` followed by `Git: Push`",
      const branches = await this.gitManager.getRemoteBranches(remoteName);
  handleViewActiveState(leaf) {
    var _a2, _b;
    if (!(leaf == null ? void 0 : leaf.view.getState().file))
      return;
    const sourceControlLeaf = this.app.workspace.getLeavesOfType(SOURCE_CONTROL_VIEW_CONFIG.type).first();
    const historyLeaf = this.app.workspace.getLeavesOfType(HISTORY_VIEW_CONFIG.type).first();
    (_a2 = sourceControlLeaf == null ? void 0 : sourceControlLeaf.view.containerEl.querySelector(`div.nav-file-title.is-active`)) == null ? void 0 : _a2.removeClass("is-active");
    (_b = historyLeaf == null ? void 0 : historyLeaf.view.containerEl.querySelector(`div.nav-file-title.is-active`)) == null ? void 0 : _b.removeClass("is-active");
    if ((leaf == null ? void 0 : leaf.view) instanceof DiffView) {
      const path2 = leaf.view.state.file;
      this.lastDiffViewState = leaf.view.getState();
      let el;
      if (sourceControlLeaf && leaf.view.state.staged) {
        el = sourceControlLeaf.view.containerEl.querySelector(
          `div.staged div.nav-file-title[data-path='${path2}']`
        );
      } else if (sourceControlLeaf && leaf.view.state.staged === false && !leaf.view.state.hash) {
        el = sourceControlLeaf.view.containerEl.querySelector(
          `div.changes div.nav-file-title[data-path='${path2}']`
        );
      } else if (historyLeaf && leaf.view.state.hash) {
        el = historyLeaf.view.containerEl.querySelector(
          `div.nav-file-title[data-path='${path2}']`
        );
      }
      el == null ? void 0 : el.addClass("is-active");
    } else {
      this.lastDiffViewState = void 0;
    }
  }
      if (!this.settings.disablePopupsForNoChanges || !message.startsWith("No changes")) {
        new import_obsidian30.Notice(message, 5 * 1e3);
      }
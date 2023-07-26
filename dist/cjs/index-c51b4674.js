'use client';
'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.bottom-0{bottom:0}.bottom-1{bottom:.25rem}.left-0{left:0}.right-0{right:0}.right-4{right:1rem}.top-0{top:0}.top-0\\.5{top:.125rem}.z-10{z-index:10}.z-50{z-index:50}.m-5{margin:1.25rem}.-mx-4{margin-left:-1rem;margin-right:-1rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.mb-2{margin-bottom:.5rem}.ml-4{margin-left:1rem}.mr-1{margin-right:.25rem}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.flex{display:flex}.grid{display:grid}.h-4{height:1rem}.max-h-mobile{max-height:100lvh}.w-4{width:1rem}.w-full{width:100%}.w-mobile{width:100lvw}.flex-1{flex:1 1 0%}.origin-left{transform-origin:left}.-translate-y-1\\/2{--tw-translate-y:-50%}.-translate-y-1\\/2,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;appearance:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-x-3{column-gap:.75rem}.gap-x-6{column-gap:1.5rem}.gap-y-4{row-gap:1rem}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.divide-gray-700>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(55 65 81/var(--tw-divide-opacity))}.divide-neutral-300>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(212 212 212/var(--tw-divide-opacity))}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.whitespace-nowrap{white-space:nowrap}.break-words{overflow-wrap:break-word}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-none{border-style:none}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-slate-200{--tw-border-opacity:1;border-color:rgb(226 232 240/var(--tw-border-opacity))}.border-transparent{border-color:transparent}.bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.bg-slate-100{--tw-bg-opacity:1;background-color:rgb(241 245 249/var(--tw-bg-opacity))}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240/var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-white\\/50{background-color:hsla(0,0%,100%,.5)}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-4{padding:1rem}.px-0{padding-left:0;padding-right:0}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.pb-3{padding-bottom:.75rem}.pb-4{padding-bottom:1rem}.pl-8{padding-left:2rem}.pt-0{padding-top:0}.text-left{text-align:left}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-amber-500{--tw-text-opacity:1;color:rgb(245 158 11/var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}.text-indigo-600{--tw-text-opacity:1;color:rgb(79 70 229/var(--tw-text-opacity))}.text-neutral-600{--tw-text-opacity:1;color:rgb(82 82 82/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184/var(--tw-text-opacity))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.opacity-75{opacity:.75}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.shadow-sm,.shadow-xl{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-100{transition-duration:.1s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}:root{--vh:100vh}.placeholder\\:text-transparent:-ms-input-placeholder{color:transparent}.placeholder\\:text-transparent::placeholder{color:transparent}.hover\\:bg-slate-200:hover{--tw-bg-opacity:1;background-color:rgb(226 232 240/var(--tw-bg-opacity))}.focus\\:border-gray-500:focus{--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-1:focus,.focus\\:ring-2:focus{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-indigo-600:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(79 70 229/var(--tw-ring-opacity))}.focus\\:ring-slate-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(100 116 139/var(--tw-ring-opacity))}.group[open] .group-open\\:rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.peer:-ms-input-placeholder~.peer-placeholder-shown\\:top-1\\/2{top:50%}.peer:placeholder-shown~.peer-placeholder-shown\\:top-1\\/2{top:50%}.peer:-ms-input-placeholder~.peer-placeholder-shown\\:text-base{font-size:1rem;line-height:1.5rem}.peer:placeholder-shown~.peer-placeholder-shown\\:text-base{font-size:1rem;line-height:1.5rem}.peer:-ms-input-placeholder~.peer-placeholder-shown\\:text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.peer:placeholder-shown~.peer-placeholder-shown\\:text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.peer:focus~.peer-focus\\:top-0{top:0}.peer:focus~.peer-focus\\:pl-0{padding-left:0}.peer:focus~.peer-focus\\:text-sm{font-size:.875rem;line-height:1.25rem}.peer:focus~.peer-focus\\:text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (prefers-color-scheme:dark){.dark\\:border-slate-600{--tw-border-opacity:1;border-color:rgb(71 85 105/var(--tw-border-opacity))}.dark\\:border-slate-700{--tw-border-opacity:1;border-color:rgb(51 65 85/var(--tw-border-opacity))}.dark\\:text-amber-400{--tw-text-opacity:1;color:rgb(251 191 36/var(--tw-text-opacity))}.dark\\:text-red-400{--tw-text-opacity:1;color:rgb(248 113 113/var(--tw-text-opacity))}.dark\\:text-slate-200{--tw-text-opacity:1;color:rgb(226 232 240/var(--tw-text-opacity))}.dark\\:text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184/var(--tw-text-opacity))}}@media (min-width:640px){.sm\\:bottom-3{bottom:.75rem}.sm\\:col-span-1{grid-column:span 1/span 1}.sm\\:col-span-3{grid-column:span 3/span 3}.sm\\:m-4{margin:1rem}.sm\\:mx-3{margin-left:.75rem;margin-right:.75rem}.sm\\:mb-0{margin-bottom:0}.sm\\:max-h-\\[calc\\(100vh-theme\\(space\\.8\\)\\)\\]{max-height:calc(100vh - 2rem)}.sm\\:w-1\\/2{width:50%}.sm\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.sm\\:grid-cols-auto{grid-template-columns:auto 1fr}.sm\\:items-end{align-items:flex-end}.sm\\:justify-start{justify-content:flex-start}.sm\\:gap-x-0{column-gap:0}.sm\\:border-slate-200{--tw-border-opacity:1;border-color:rgb(226 232 240/var(--tw-border-opacity))}.sm\\:p-4{padding:1rem}.sm\\:pb-1{padding-bottom:.25rem}}";
styleInject(css_248z,{"insertAt":"top"});

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=React,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

var NetworkContext = /*#__PURE__*/ React.createContext({});
var useNetworkContext = function() {
    return React.useContext(NetworkContext);
};

function _array_like_to_array$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes$2(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes$1(arr) {
    if (Array.isArray(arr)) return _array_like_to_array$2(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array$1(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit$2(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest$2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array$2(arr, i) {
    return _array_with_holes$2(arr) || _iterable_to_array_limit$2(arr, i) || _unsupported_iterable_to_array$2(arr, i) || _non_iterable_rest$2();
}
function _to_consumable_array$1(arr) {
    return _array_without_holes$1(arr) || _iterable_to_array$1(arr) || _unsupported_iterable_to_array$2(arr) || _non_iterable_spread$1();
}
function _unsupported_iterable_to_array$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$2(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var withNetworkLogger = function(WrappedComponent) {
    var NetworkLogger = function(props) {
        var _useState = _sliced_to_array$2(React.useState(new Map()), 2), requests = _useState[0], setRequests = _useState[1];
        var addNetworkRequest = useNetworkContext().addNetworkRequest;
        var handleNetworkResponse = React.useCallback(function() {
            var _ref = _async_to_generator(function(response) {
                var request, _requests_keys_next_value, url, method, body, startTime, timeElapsed, responseData, contentType, _tmp, _tmp1, error;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                10,
                                ,
                                11
                            ]);
                            request = null;
                            if (_instanceof(response, Response)) {
                                _requests_keys_next_value = requests.keys().next().value, url = _requests_keys_next_value.url, method = _requests_keys_next_value.method, body = _requests_keys_next_value.body, startTime = _requests_keys_next_value.startTime;
                                request = {
                                    url: url,
                                    method: method,
                                    body: body,
                                    startTime: startTime
                                };
                            } else {
                                request = Array.from(requests.keys()).find(function(r) {
                                    var _response_request;
                                    return r.url === response.url && r.method === ((_response_request = response.request) === null || _response_request === void 0 ? void 0 : _response_request.method);
                                });
                            }
                            if (!request) return [
                                3,
                                9
                            ];
                            timeElapsed = "".concat(Date.now() - request.startTime, " ms");
                            responseData = {
                                status: response ? response.status : null,
                                statusText: response ? response.statusText : null,
                                headers: response ? _to_consumable_array$1(response.headers).reduce(function(acc, curr) {
                                    return _object_spread_props(_object_spread({}, acc), _define_property({}, curr[0], curr[1]));
                                }, {}) : null
                            };
                            contentType = responseData.headers ? responseData.headers["content-type"] : "";
                            if (!(contentType && contentType.includes("application/json"))) return [
                                3,
                                4
                            ];
                            if (!response) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                response.json()
                            ];
                        case 1:
                            _tmp = _state.sent();
                            return [
                                3,
                                3
                            ];
                        case 2:
                            _tmp = null;
                            _state.label = 3;
                        case 3:
                            responseData.body = _tmp;
                            return [
                                3,
                                8
                            ];
                        case 4:
                            if (!response) return [
                                3,
                                6
                            ];
                            return [
                                4,
                                response.text()
                            ];
                        case 5:
                            _tmp1 = _state.sent();
                            return [
                                3,
                                7
                            ];
                        case 6:
                            _tmp1 = null;
                            _state.label = 7;
                        case 7:
                            responseData.body = _tmp1;
                            _state.label = 8;
                        case 8:
                            addNetworkRequest({
                                request: request,
                                response: responseData,
                                timeElapsed: timeElapsed
                            });
                            setRequests(function(prevRequests) {
                                var updatedRequests = new Map(prevRequests);
                                updatedRequests.set(request, {
                                    response: responseData,
                                    timeElapsed: timeElapsed
                                });
                                return updatedRequests;
                            });
                            _state.label = 9;
                        case 9:
                            return [
                                3,
                                11
                            ];
                        case 10:
                            error = _state.sent();
                            console.log("erer", error);
                            throw error;
                        case 11:
                            return [
                                2
                            ];
                    }
                });
            });
            return function(response) {
                return _ref.apply(this, arguments);
            };
        }(), [
            requests,
            addNetworkRequest
        ]);
        React.useEffect(function() {
            var originalFetch = window.fetch;
            var handleResponse = function(response) {
                var clonedResponse = response.clone();
                handleNetworkResponse(clonedResponse);
                return response;
            };
            var fetchWithContext = window.fetch.bind(window);
            window.fetch = function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                console.log(args);
                var _args = _sliced_to_array$2(args, 2), url = _args[0], options = _args[1];
                var startTime = Date.now();
                var request = {
                    method: options && options.method ? options.method : "GET",
                    url: url,
                    body: options && options.body ? options.body : null,
                    startTime: startTime
                };
                setRequests(function(prevRequests) {
                    return new Map(prevRequests.set(request, null));
                });
                return fetchWithContext(url, options).then(handleResponse).catch(function(error) {
                    console.log("error", error);
                    handleNetworkResponse(error);
                    throw error;
                });
            };
            var originalSend = window.XMLHttpRequest.prototype.send;
            var handleXmlHttpRequest = function(xhr, body) {
                var method = xhr._method ? xhr._method : "GET";
                var url = xhr._url ? xhr._url : window.location.href;
                var startTime = Date.now();
                var request = {
                    method: method,
                    url: url,
                    body: JSON.parse(body),
                    startTime: startTime
                };
                setRequests(function(prevRequests) {
                    return new Map(prevRequests.set(request, null));
                });
                xhr.addEventListener("load", function() {
                    var xhrHeadersString = xhr.getAllResponseHeaders();
                    var xhrHeadersArray = xhrHeadersString.split("\r\n").filter(Boolean);
                    var fetchHeaders = [];
                    xhrHeadersArray.forEach(function(line) {
                        var parts = line.split(": ");
                        var name = parts.shift().trim();
                        var value = parts.join(": ").trim();
                        fetchHeaders.push([
                            name,
                            value
                        ]);
                    });
                    var response = {
                        status: xhr.status,
                        statusText: xhr.statusText,
                        url: url,
                        ok: xhr.status >= 200 && xhr.status < 300,
                        headers: fetchHeaders,
                        request: request,
                        json: /*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    JSON.parse(xhr.response)
                                ];
                            });
                        }),
                        text: /*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    xhr.responseText
                                ];
                            });
                        })
                    };
                    handleNetworkResponse(response);
                });
                xhr.addEventListener("error", function() {
                    var error = new Error("Network error");
                    error.request = xhr;
                    handleNetworkResponse(error);
                });
                originalSend.apply(xhr, [
                    body
                ]);
            };
            window.XMLHttpRequest.prototype.send = function() {
                var body = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                this._url = this._url || window.location.href;
                this._method = this._method || "GET";
                handleXmlHttpRequest(this, body);
            };
            return function() {
                window.fetch = originalFetch;
                window.XMLHttpRequest.prototype.send = originalSend;
            };
        }, [
            handleNetworkResponse
        ]);
        return /*#__PURE__*/ jsxRuntimeExports.jsx(WrappedComponent, _object_spread_props(_object_spread({}, props), {
            requests: requests
        }));
    };
    return NetworkLogger;
};

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-x'%3e%3cline x1='18' x2='6' y1='6' y2='18'%3e%3c/line%3e%3cline x1='6' x2='18' y1='6' y2='18'%3e%3c/line%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-settings'%3e%3cpath d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'%3e%3c/path%3e%3ccircle cx='12' cy='12' r='3'%3e%3c/circle%3e%3c/svg%3e";

function _array_like_to_array$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes$1(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit$1(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array$1(arr, i) {
    return _array_with_holes$1(arr) || _iterable_to_array_limit$1(arr, i) || _unsupported_iterable_to_array$1(arr, i) || _non_iterable_rest$1();
}
function _unsupported_iterable_to_array$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$1(o, minLen);
}
var Storage = /*#__PURE__*/ React.lazy(function() {
    return Promise.resolve().then(function () { return require('./Storage-600b92e2.js'); });
});
// import Storage from "./Storage";
function DebugOverlay() {
    var _useState = _sliced_to_array$1(React.useState(false), 2), mounted = _useState[0], setMounted = _useState[1];
    var _useState1 = _sliced_to_array$1(React.useState(false), 2), openPopup = _useState1[0], setOpenPopup = _useState1[1];
    // const [storageComponent, setStorageComponent] = useState(null);
    React.useEffect(function() {
        setMounted(true);
    }, []);
    // const loadStorageComponent = async () => {
    //   console.log('window', window);
    //   if (!storageComponent) {
    //     const { default: StorageComponent } = await import('./Storage');
    //     setStorageComponent(<StorageComponent />);
    //   }
    //   setOpenPopup(true);
    // };
    if (!mounted) return /*#__PURE__*/ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
    return openPopup ? /*#__PURE__*/ jsxRuntimeExports.jsx(React.Suspense, {
        fallback: /*#__PURE__*/ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
        children: /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
            className: "fixed bottom-0 max-h-mobile sm:max-h-[calc(100vh-theme(space.8))] overflow-auto no-scrollbar right-0 w-mobile sm:w-1/2 sm:m-4 bg-white shadow-xl rounded-lg z-50",
            children: [
                /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                    className: "sticky top-0 z-10 text-center bg-white/50 backdrop-blur py-4",
                    children: /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ jsxRuntimeExports.jsx("h1", {
                                className: "text-xl font-medium",
                                children: "App Settings"
                            }),
                            /*#__PURE__*/ jsxRuntimeExports.jsx("img", {
                                className: "absolute top-0.5 right-4",
                                src: img$1,
                                width: 24,
                                height: 24,
                                alt: "Open popup icon",
                                onClick: function(e) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setOpenPopup(false);
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                    className: "px-4 pb-4",
                    children: /*#__PURE__*/ jsxRuntimeExports.jsx(Storage, {})
                })
            ]
        })
    }) : /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
        className: "fixed bottom-0 right-0 m-5 z-50",
        children: /*#__PURE__*/ jsxRuntimeExports.jsx("img", {
            src: img,
            width: 24,
            height: 24,
            alt: "Open popup icon",
            onClick: function() {
                return setOpenPopup(true);
            }
        })
    });
}

function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var Child = function(param) {
    var children = param.children;
    return /*#__PURE__*/ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [
            /*#__PURE__*/ jsxRuntimeExports.jsx(DebugOverlay, {}),
            children
        ]
    });
};
var WrappedComponent = withNetworkLogger(Child);
var NetworkProvider = function(param) {
    var children = param.children;
    var _useState = _sliced_to_array(React.useState(false), 2), mounted = _useState[0], setMounted = _useState[1];
    var _useState1 = _sliced_to_array(React.useState([]), 2), networkRequests = _useState1[0], setNetworkRequests = _useState1[1];
    var addNetworkRequest = React.useCallback(function(request) {
        setNetworkRequests(function(prevNetworkRequests) {
            return _to_consumable_array(prevNetworkRequests).concat([
                request
            ]);
        });
    }, []);
    var clearNetworkRequests = React.useCallback(function() {
        setNetworkRequests([]);
    }, []);
    React.useEffect(function() {
        return setMounted(true);
    }, []);
    if (!mounted || typeof window === "undefined") return children;
    return /*#__PURE__*/ jsxRuntimeExports.jsx(NetworkContext.Provider, {
        value: {
            networkRequests: networkRequests,
            addNetworkRequest: addNetworkRequest,
            clearNetworkRequests: clearNetworkRequests
        },
        children: /*#__PURE__*/ jsxRuntimeExports.jsx(WrappedComponent, {
            children: children
        })
    });
};

if (typeof window.global === "undefined") {
    window.global = window;
}

exports.NetworkProvider = NetworkProvider;
exports.jsxRuntimeExports = jsxRuntimeExports;
exports.useNetworkContext = useNetworkContext;
//# sourceMappingURL=index-c51b4674.js.map

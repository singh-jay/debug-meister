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
var f$1=React,k=Symbol.for("react.element"),l$1=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n$1=f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$1.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n$1.current}}reactJsxRuntime_production_min.Fragment=l$1;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

var NetworkContext = /*#__PURE__*/ React.createContext({});
var useNetworkContext = function() {
    return React.useContext(NetworkContext);
};

function _array_like_to_array$7(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes$7(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes$3(arr) {
    if (Array.isArray(arr)) return _array_like_to_array$7(arr);
}
function asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, key, arg) {
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
function _async_to_generator$2(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property$3(obj, key, value) {
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
function _iterable_to_array$3(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit$7(arr, i) {
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
function _non_iterable_rest$7() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread$3() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread$3(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property$3(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$2(object, enumerableOnly) {
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
function _object_spread_props$2(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array$7(arr, i) {
    return _array_with_holes$7(arr) || _iterable_to_array_limit$7(arr, i) || _unsupported_iterable_to_array$7(arr, i) || _non_iterable_rest$7();
}
function _to_consumable_array$3(arr) {
    return _array_without_holes$3(arr) || _iterable_to_array$3(arr) || _unsupported_iterable_to_array$7(arr) || _non_iterable_spread$3();
}
function _unsupported_iterable_to_array$7(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array$7(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$7(o, minLen);
}
function _ts_generator$2(thisArg, body) {
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
        var _useState = _sliced_to_array$7(React.useState(new Map()), 2), requests = _useState[0], setRequests = _useState[1];
        var addNetworkRequest = useNetworkContext().addNetworkRequest;
        var handleNetworkResponse = React.useCallback(function() {
            var _ref = _async_to_generator$2(function(response) {
                var request, _requests_keys_next_value, url, method, body, startTime, timeElapsed, responseData, contentType, _tmp, _tmp1, error;
                return _ts_generator$2(this, function(_state) {
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
                                headers: response ? _to_consumable_array$3(response.headers).reduce(function(acc, curr) {
                                    return _object_spread_props$2(_object_spread$3({}, acc), _define_property$3({}, curr[0], curr[1]));
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
                var _args = _sliced_to_array$7(args, 2), url = _args[0], options = _args[1];
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
                        json: /*#__PURE__*/ _async_to_generator$2(function() {
                            return _ts_generator$2(this, function(_state) {
                                return [
                                    2,
                                    JSON.parse(xhr.response)
                                ];
                            });
                        }),
                        text: /*#__PURE__*/ _async_to_generator$2(function() {
                            return _ts_generator$2(this, function(_state) {
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
        return /*#__PURE__*/ jsxRuntimeExports.jsx(WrappedComponent, _object_spread_props$2(_object_spread$3({}, props), {
            requests: requests
        }));
    };
    return NetworkLogger;
};

var img$6 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-x'%3e%3cline x1='18' x2='6' y1='6' y2='18'%3e%3c/line%3e%3cline x1='6' x2='18' y1='6' y2='18'%3e%3c/line%3e%3c/svg%3e";

var img$5 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-settings'%3e%3cpath d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'%3e%3c/path%3e%3ccircle cx='12' cy='12' r='3'%3e%3c/circle%3e%3c/svg%3e";

function _array_like_to_array$6(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes$6(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
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
function _async_to_generator$1(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterable_to_array_limit$6(arr, i) {
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
function _non_iterable_rest$6() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array$6(arr, i) {
    return _array_with_holes$6(arr) || _iterable_to_array_limit$6(arr, i) || _unsupported_iterable_to_array$6(arr, i) || _non_iterable_rest$6();
}
function _unsupported_iterable_to_array$6(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array$6(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$6(o, minLen);
}
function _ts_generator$1(thisArg, body) {
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
// const Storage = lazy(() => import("./Storage"));
// import Storage from "./Storage";
function DebugOverlay() {
    var _useState = _sliced_to_array$6(React.useState(false), 2), mounted = _useState[0], setMounted = _useState[1];
    var _useState1 = _sliced_to_array$6(React.useState(false), 2), openPopup = _useState1[0], setOpenPopup = _useState1[1];
    var _useState2 = _sliced_to_array$6(React.useState(null), 2), storageComponent = _useState2[0], setStorageComponent = _useState2[1];
    React.useEffect(function() {
        setMounted(true);
    }, []);
    var loadStorageComponent = function() {
        var _ref = _async_to_generator$1(function() {
            var _ref, StorageComponent;
            return _ts_generator$1(this, function(_state) {
                switch(_state.label){
                    case 0:
                        console.log("window", window);
                        if (!!storageComponent) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            Promise.resolve().then(function () { return Storage$1; })
                        ];
                    case 1:
                        _ref = _state.sent(), StorageComponent = _ref.default;
                        setStorageComponent(/*#__PURE__*/ jsxRuntimeExports.jsx(StorageComponent, {}));
                        _state.label = 2;
                    case 2:
                        setOpenPopup(true);
                        return [
                            2
                        ];
                }
            });
        });
        return function loadStorageComponent() {
            return _ref.apply(this, arguments);
        };
    }();
    if (!mounted) return /*#__PURE__*/ jsxRuntimeExports.jsx(React.Fragment, {});
    return openPopup ? /*#__PURE__*/ jsxRuntimeExports.jsx(React.Suspense, {
        fallback: /*#__PURE__*/ jsxRuntimeExports.jsx(React.Fragment, {}),
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
                                src: img$6,
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
                    children: storageComponent
                })
            ]
        })
    }) : /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
        className: "fixed bottom-0 right-0 m-5 z-50",
        children: /*#__PURE__*/ jsxRuntimeExports.jsx("img", {
            src: img$5,
            width: 24,
            height: 24,
            alt: "Open popup icon",
            onClick: loadStorageComponent
        })
    });
}

function _array_like_to_array$5(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes$5(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes$2(arr) {
    if (Array.isArray(arr)) return _array_like_to_array$5(arr);
}
function _iterable_to_array$2(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit$5(arr, i) {
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
function _non_iterable_rest$5() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread$2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array$5(arr, i) {
    return _array_with_holes$5(arr) || _iterable_to_array_limit$5(arr, i) || _unsupported_iterable_to_array$5(arr, i) || _non_iterable_rest$5();
}
function _to_consumable_array$2(arr) {
    return _array_without_holes$2(arr) || _iterable_to_array$2(arr) || _unsupported_iterable_to_array$5(arr) || _non_iterable_spread$2();
}
function _unsupported_iterable_to_array$5(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array$5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$5(o, minLen);
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
    var _useState = _sliced_to_array$5(React.useState(false), 2), mounted = _useState[0], setMounted = _useState[1];
    var _useState1 = _sliced_to_array$5(React.useState([]), 2), networkRequests = _useState1[0], setNetworkRequests = _useState1[1];
    var addNetworkRequest = React.useCallback(function(request) {
        setNetworkRequests(function(prevNetworkRequests) {
            return _to_consumable_array$2(prevNetworkRequests).concat([
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

var img$4 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-trash-2'%3e%3cpath d='M3 6h18'%3e%3c/path%3e%3cpath d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'%3e%3c/path%3e%3cpath d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'%3e%3c/path%3e%3cline x1='10' x2='10' y1='11' y2='17'%3e%3c/line%3e%3cline x1='14' x2='14' y1='11' y2='17'%3e%3c/line%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-copy'%3e%3crect width='14' height='14' x='8' y='8' rx='2' ry='2'%3e%3c/rect%3e%3cpath d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2'%3e%3c/path%3e%3c/svg%3e";

// A memoized constant fn prevents unsubscribe/resubscribe
// In practice it is not a big deal
function subscribe(onStoreChange) {
    var _global_window;
    (_global_window = global.window) === null || _global_window === void 0 ? void 0 : _global_window.addEventListener("resize", onStoreChange);
    return function() {
        var _global_window;
        return (_global_window = global.window) === null || _global_window === void 0 ? void 0 : _global_window.removeEventListener("resize", onStoreChange);
    };
}
function getSnapshot() {
    var _global_window;
    return ((_global_window = global.window) === null || _global_window === void 0 ? void 0 : _global_window.innerWidth) < 640 ? true : false;
}
function useIsMobile() {
    return React.useSyncExternalStore(subscribe, getSnapshot);
}

function t(t){return null===t?"null":typeof t}function e(t){return !!t&&"object"==typeof t}function r(t){if(void 0===t)return "";if(null===t)return "Object";if("object"==typeof t&&!t.constructor)return "Object";var e=/function ([^(]*)/.exec(t.constructor.toString());return e&&e.length>1?e[1]:""}function n(t,e,r){return "null"===t||"undefined"===t?t:("string"!==t&&"stringifiable"!==t||(r='"'+r.replace(/"/g,'\\"')+'"'),"function"===t?e.toString().replace(/[\r\n]/g,"").replace(/\{.*\}/,"")+"{…}":r)}function o(o){var i="";return e(o)?(i=r(o),Array.isArray(o)&&(i+="["+o.length+"]")):i=n(t(o),o,o),i}function i(t){return "json-formatter-"+t}function s(t,e,r){var n=document.createElement(t);return e&&n.classList.add(i(e)),void 0!==r&&(r instanceof Node?n.appendChild(r):n.appendChild(document.createTextNode(String(r)))),n}!function(t){if(t&&"undefined"!=typeof window){var e=document.createElement("style");e.setAttribute("media","screen"),e.innerHTML=t,document.head.appendChild(e);}}('.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-row,\n.json-formatter-row a,\n.json-formatter-row a:hover {\n  color: black;\n  text-decoration: none;\n}\n.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-row .json-formatter-string,\n.json-formatter-row .json-formatter-stringifiable {\n  color: green;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-row .json-formatter-number {\n  color: blue;\n}\n.json-formatter-row .json-formatter-boolean {\n  color: red;\n}\n.json-formatter-row .json-formatter-null {\n  color: #855A00;\n}\n.json-formatter-row .json-formatter-undefined {\n  color: #ca0b69;\n}\n.json-formatter-row .json-formatter-function {\n  color: #FF20ED;\n}\n.json-formatter-row .json-formatter-date {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: blue;\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-bracket {\n  color: blue;\n}\n.json-formatter-row .json-formatter-key {\n  color: #00008B;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "►";\n}\n.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n.json-formatter-dark.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-dark.json-formatter-row,\n.json-formatter-dark.json-formatter-row a,\n.json-formatter-dark.json-formatter-row a:hover {\n  color: white;\n  text-decoration: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-string,\n.json-formatter-dark.json-formatter-row .json-formatter-stringifiable {\n  color: #31F031;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-number {\n  color: #66C2FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-boolean {\n  color: #EC4242;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-null {\n  color: #EEC97D;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-undefined {\n  color: #ef8fbe;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-function {\n  color: #FD48CB;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-date {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.json-formatter-dark.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: #027BFF;\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-bracket {\n  color: #9494FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-key {\n  color: #23A0DB;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "►";\n}\n.json-formatter-dark.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-dark.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n');var a=/(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/,f=/\d{2}:\d{2}:\d{2} GMT-\d{4}/,m=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,l=window.requestAnimationFrame||function(t){return t(),0},d={hoverPreviewEnabled:!1,hoverPreviewArrayCount:100,hoverPreviewFieldCount:5,animateOpen:!0,animateClose:!0,theme:null,useToJSON:!0,sortPropertiesBy:null},c=function(){function c(t,e,r,n){void 0===e&&(e=1),void 0===r&&(r=d),this.json=t,this.open=e,this.config=r,this.key=n,this._isOpen=null,void 0===this.config.hoverPreviewEnabled&&(this.config.hoverPreviewEnabled=d.hoverPreviewEnabled),void 0===this.config.hoverPreviewArrayCount&&(this.config.hoverPreviewArrayCount=d.hoverPreviewArrayCount),void 0===this.config.hoverPreviewFieldCount&&(this.config.hoverPreviewFieldCount=d.hoverPreviewFieldCount),void 0===this.config.useToJSON&&(this.config.useToJSON=d.useToJSON),""===this.key&&(this.key='""');}return Object.defineProperty(c.prototype,"isOpen",{get:function(){return null!==this._isOpen?this._isOpen:this.open>0},set:function(t){this._isOpen=t;},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"isDate",{get:function(){return this.json instanceof Date||"string"===this.type&&(a.test(this.json)||m.test(this.json)||f.test(this.json))},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"isUrl",{get:function(){return "string"===this.type&&0===this.json.indexOf("http")},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"isArray",{get:function(){return Array.isArray(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"isObject",{get:function(){return e(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"isEmptyObject",{get:function(){return !this.keys.length&&!this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"isEmpty",{get:function(){return this.isEmptyObject||this.keys&&!this.keys.length&&this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"useToJSON",{get:function(){return this.config.useToJSON&&"stringifiable"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"hasKey",{get:function(){return void 0!==this.key},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"constructorName",{get:function(){return r(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"type",{get:function(){return this.config.useToJSON&&this.json&&this.json.toJSON?"stringifiable":t(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"keys",{get:function(){if(this.isObject){var t=Object.keys(this.json);return !this.isArray&&this.config.sortPropertiesBy?t.sort(this.config.sortPropertiesBy):t}return []},enumerable:!0,configurable:!0}),c.prototype.toggleOpen=function(){this.isOpen=!this.isOpen,this.element&&(this.isOpen?this.appendChildren(this.config.animateOpen):this.removeChildren(this.config.animateClose),this.element.classList.toggle(i("open")));},c.prototype.openAtDepth=function(t){void 0===t&&(t=1),t<0||(this.open=t,this.isOpen=0!==t,this.element&&(this.removeChildren(!1),0===t?this.element.classList.remove(i("open")):(this.appendChildren(this.config.animateOpen),this.element.classList.add(i("open")))));},c.prototype.getInlinepreview=function(){var t=this;if(this.isArray)return this.json.length>this.config.hoverPreviewArrayCount?"Array["+this.json.length+"]":"["+this.json.map(o).join(", ")+"]";var e=this.keys,r=e.slice(0,this.config.hoverPreviewFieldCount).map((function(e){return e+":"+o(t.json[e])})),n=e.length>=this.config.hoverPreviewFieldCount?"…":"";return "{"+r.join(", ")+n+"}"},c.prototype.render=function(){this.element=s("div","row");var t=this.isObject?s("a","toggler-link"):s("span");if(this.isObject&&!this.useToJSON&&t.appendChild(s("span","toggler")),this.hasKey&&t.appendChild(s("span","key",this.key+":")),this.isObject&&!this.useToJSON){var e=s("span","value"),r=s("span"),o=s("span","constructor-name",this.constructorName);if(r.appendChild(o),this.isArray){var a=s("span");a.appendChild(s("span","bracket","[")),a.appendChild(s("span","number",this.json.length)),a.appendChild(s("span","bracket","]")),r.appendChild(a);}e.appendChild(r),t.appendChild(e);}else {(e=this.isUrl?s("a"):s("span")).classList.add(i(this.type)),this.isDate&&e.classList.add(i("date")),this.isUrl&&(e.classList.add(i("url")),e.setAttribute("href",this.json));var f=n(this.type,this.json,this.useToJSON?this.json.toJSON():this.json);e.appendChild(document.createTextNode(f)),t.appendChild(e);}if(this.isObject&&this.config.hoverPreviewEnabled){var m=s("span","preview-text");m.appendChild(document.createTextNode(this.getInlinepreview())),t.appendChild(m);}var l=s("div","children");return this.isObject&&l.classList.add(i("object")),this.isArray&&l.classList.add(i("array")),this.isEmpty&&l.classList.add(i("empty")),this.config&&this.config.theme&&this.element.classList.add(i(this.config.theme)),this.isOpen&&this.element.classList.add(i("open")),this.element.appendChild(t),this.element.appendChild(l),this.isObject&&this.isOpen&&this.appendChildren(),this.isObject&&!this.useToJSON&&t.addEventListener("click",this.toggleOpen.bind(this)),this.element},c.prototype.appendChildren=function(t){var e=this;void 0===t&&(t=!1);var r=this.element.querySelector("div."+i("children"));if(r&&!this.isEmpty)if(t){var n=0,o=function(){var t=e.keys[n],i=new c(e.json[t],e.open-1,e.config,t);r.appendChild(i.render()),(n+=1)<e.keys.length&&(n>10?o():l(o));};l(o);}else this.keys.forEach((function(t){var n=new c(e.json[t],e.open-1,e.config,t);r.appendChild(n.render());}));},c.prototype.removeChildren=function(t){void 0===t&&(t=!1);var e=this.element.querySelector("div."+i("children"));if(t){var r=0,n=function(){e&&e.children.length&&(e.removeChild(e.children[0]),(r+=1)>10?n():l(n));};l(n);}else e&&(e.innerHTML="");},c}();

var parseJSONValue = function(value) {
    var parseJSON = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!parseJSON) return value;
    try {
        var parsedJSON = JSON.parse(value);
        return parsedJSON;
    } catch (e) {
        return value;
    }
};
var TableRow = function(param) {
    var value = param.value, _param_overflowAllowed = param.overflowAllowed, overflowAllowed = _param_overflowAllowed === void 0 ? true : _param_overflowAllowed, _param_parseJSON = param.parseJSON, parseJSON = _param_parseJSON === void 0 ? true : _param_parseJSON, _param_open = param.open, open = _param_open === void 0 ? 0 : _param_open;
    var renderRef = React.useRef(null);
    React.useEffect(function() {
        if (renderRef.current) {
            var formatter = new c(parseJSONValue(value, parseJSON), open);
            var formattedElem = formatter.render();
            renderRef.current.innerHTML = "";
            renderRef.current.appendChild(formattedElem);
        }
    }, [
        value,
        parseJSON,
        open
    ]);
    return /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
        ref: renderRef,
        className: overflowAllowed ? "overflow-x-auto no-scrollbar whitespace-nowrap" : ""
    });
};
var TableRow$1 = /*#__PURE__*/ React.memo(TableRow);

function _array_like_to_array$4(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes$4(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit$4(arr, i) {
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
function _non_iterable_rest$4() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array$4(arr, i) {
    return _array_with_holes$4(arr) || _iterable_to_array_limit$4(arr, i) || _unsupported_iterable_to_array$4(arr, i) || _non_iterable_rest$4();
}
function _unsupported_iterable_to_array$4(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array$4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$4(o, minLen);
}
var EditableInput = function(param) {
    var value = param.value, onChange = param.onChange, onBlur = param.onBlur;
    return /*#__PURE__*/ jsxRuntimeExports.jsx("input", {
        type: "text",
        value: value,
        onChange: onChange,
        onBlur: onBlur,
        className: "appearance-none bg-transparent border-none rounded w-full py-1 px-2 focus:outline-none focus:ring-1 focus:ring-slate-500"
    });
};
var Table = function(param) {
    var data = param.data, storageType = param.storageType, handleAddItem = param.handleAddItem, handleDeleteItem = param.handleDeleteItem, copyContent = param.copyContent;
    var _useState = _sliced_to_array$4(React.useState(""), 2), editedIndex = _useState[0], setEditedIndex = _useState[1];
    var _useState1 = _sliced_to_array$4(React.useState(""), 2), editedValue = _useState1[0], setEditedValue = _useState1[1];
    var _useState2 = _sliced_to_array$4(React.useState(""), 2), showActionButtons = _useState2[0], setShowActionButtons = _useState2[1];
    var _useState3 = _sliced_to_array$4(React.useState(true), 2); _useState3[0]; _useState3[1];
    var _useState4 = _sliced_to_array$4(React.useState(false), 2), mounted = _useState4[0], setMounted = _useState4[1];
    var isMobile = useIsMobile();
    // console.log("isMobile", isMobile);
    React.useEffect(function() {
        setMounted(true);
    }, []);
    // useEffect(() => {
    // 	let vh = window.innerWidth;
    // 	if (vh >= 640) {
    // 		setIsMobile(false);
    // 	} else {
    // 		setIsMobile(true);
    // 	}
    // 	const resizeHandler = () => {
    // 		let vh = window.innerWidth;
    // 		// console.log("vh", vh);
    // 		if (vh >= 640) {
    // 			setIsMobile(false);
    // 		} else {
    // 			setIsMobile(true);
    // 		}
    // 	};
    // 	window.addEventListener("resize", resizeHandler);
    // 	return () => {
    // 		window.removeEventListener("resize", resizeHandler);
    // 	};
    // }, []);
    React.useEffect(function() {
        var scrollHandler = function() {
            if (showActionButtons !== "") {
                setShowActionButtons("");
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return function() {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [
        showActionButtons
    ]);
    var handleDoubleClick = function(index, value) {
        setEditedIndex(index);
        setEditedValue(value);
    };
    var handleInputBlur = function(type, _key) {
        if (type === "VALUE") {
            var oldDataIndex = data.findIndex(function(param) {
                var _param = _sliced_to_array$4(param, 1), key = _param[0];
                return key === _key;
            });
            console.log(storageType, _key, editedValue, oldDataIndex);
            handleAddItem(storageType, _key, editedValue, {
                isUpdateFlow: true,
                updateIndex: oldDataIndex,
                checkDuplicateKey: false
            });
        } else {
            var newKey = editedValue;
            var oldDataIndex1 = data.findIndex(function(param) {
                var _param = _sliced_to_array$4(param, 1), key = _param[0];
                return key === _key;
            });
            var newKeyValue = data[oldDataIndex1][1];
            handleAddItem(storageType, newKey, newKeyValue, {
                isUpdateFlow: true,
                updateIndex: oldDataIndex1,
                deleteKey: _key
            });
        }
        setEditedIndex("");
        setEditedValue("");
    };
    var handleInputChange = function(event) {
        setEditedValue(event.target.value);
    };
    var onRowClickHandler = function(val) {
        if (isMobile) {
            setShowActionButtons(val);
        }
    };
    var onPointerHandler = function(val) {
        if (!isMobile) {
            setShowActionButtons(val);
        }
    };
    if (!mounted) return null;
    return /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
        className: "grid grid-cols-1 sm:grid-cols-auto gap-x-3 sm:gap-x-0 overflow-hidden",
        children: [
            data.map(function(param) {
                var _param = _sliced_to_array$4(param, 2), key = _param[0], value = _param[1];
                // const formatter = new JSONFormatter(value);
                // console.log("formatter", formatter, formatter.render());
                return /*#__PURE__*/ jsxRuntimeExports.jsxs(React.Fragment, {
                    children: [
                        /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                            className: "border-b border-transparent sm:border-slate-200 dark:border-slate-700 p-1 sm:p-4 text-slate-500 dark:text-slate-400",
                            onDoubleClick: function() {
                                return handleDoubleClick("key_".concat(key), key);
                            },
                            onPointerEnter: function() {
                                return onPointerHandler("".concat(key));
                            },
                            onPointerLeave: function() {
                                return onPointerHandler("");
                            },
                            onClick: function() {
                                return onRowClickHandler("".concat(key));
                            },
                            children: editedIndex === "key_".concat(key) ? /*#__PURE__*/ jsxRuntimeExports.jsx(EditableInput, {
                                autofocus: true,
                                value: editedValue,
                                onChange: handleInputChange,
                                onBlur: function() {
                                    return handleInputBlur("KEY", key);
                                }
                            }) : key
                        }),
                        /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                            className: "relative border-b border-slate-200 dark:border-slate-700 mb-2 sm:mb-0 p-1 sm:p-4 text-slate-500 dark:text-slate-400 overflow-hidden",
                            onDoubleClick: function() {
                                return handleDoubleClick("value_".concat(key), value);
                            },
                            onPointerEnter: function() {
                                return onPointerHandler("".concat(key));
                            },
                            onPointerLeave: function() {
                                return onPointerHandler("");
                            },
                            onClick: function() {
                                return onRowClickHandler("".concat(key));
                            },
                            children: [
                                editedIndex === "value_".concat(key) ? /*#__PURE__*/ jsxRuntimeExports.jsx(EditableInput, {
                                    autofocus: true,
                                    value: editedValue,
                                    onChange: handleInputChange,
                                    onBlur: function() {
                                        return handleInputBlur("VALUE", key);
                                    }
                                }) : /*#__PURE__*/ jsxRuntimeExports.jsx(TableRow$1, {
                                    value: value
                                }),
                                showActionButtons === "".concat(key) && editedIndex === "" && /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                                    className: "absolute bottom-1 sm:bottom-3 right-0 flex gap-1",
                                    children: [
                                        /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                                            className: "p-1.5 bg-slate-200 rounded-md",
                                            onClick: function() {
                                                return handleDeleteItem(storageType, key);
                                            },
                                            children: /*#__PURE__*/ jsxRuntimeExports.jsx("img", {
                                                src: img$4,
                                                width: 18,
                                                height: 18,
                                                alt: "delete row"
                                            })
                                        }),
                                        /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                                            className: "p-1.5 bg-slate-200 rounded-md",
                                            onClick: function() {
                                                return copyContent([
                                                    [
                                                        key,
                                                        value
                                                    ]
                                                ]);
                                            },
                                            children: /*#__PURE__*/ jsxRuntimeExports.jsx("img", {
                                                src: img$3,
                                                width: 17,
                                                height: 17,
                                                alt: "copy row"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, "".concat(storageType, "_").concat(key));
            }),
            data.length === 0 && /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                className: "",
                children: /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                    className: "text-slate-500 dark:text-slate-400 text-center",
                    children: "No Data"
                })
            })
        ]
    });
};

function _define_property$2(obj, key, value) {
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
function _object_spread$2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property$2(target, key, source[key]);
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var Input = function(_param) {
    var label = _param.label, _param_type = _param.type, type = _param_type === void 0 ? "text" : _param_type, id = _param.id, placeholder = _param.placeholder, name = _param.name, value = _param.value, onChange = _param.onChange, rest = _object_without_properties(_param, [
        "label",
        "type",
        "id",
        "placeholder",
        "name",
        "value",
        "onChange"
    ]);
    if (type === "checkbox") {
        return /*#__PURE__*/ jsxRuntimeExports.jsx("input", {
            id: id,
            name: name,
            type: "checkbox",
            className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
            checked: value,
            onChange: onChange
        });
    }
    return /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
        className: "relative w-full",
        children: [
            /*#__PURE__*/ jsxRuntimeExports.jsx("input", _object_spread$2({
                className: "peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none",
                autoComplete: "off",
                type: type,
                id: id,
                name: name || label,
                placeholder: placeholder || label,
                value: value,
                onChange: function(e) {
                    return onChange(e.target.value);
                }
            }, rest)),
            /*#__PURE__*/ jsxRuntimeExports.jsx("label", {
                htmlFor: id,
                className: "pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800",
                children: label
            })
        ]
    });
};

var Button = function(param) {
    var label = param.label, _param_variant = param.variant, variant = _param_variant === void 0 ? "success" : _param_variant, onClick = param.onClick;
    return /*#__PURE__*/ jsxRuntimeExports.jsx("button", {
        className: "px-4 py-2 font-semibold text-sm text-white rounded-md shadow-sm ".concat(variant === "success" ? "bg-gray-700" : "bg-red-500"),
        onClick: onClick,
        children: label
    });
};

var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-plus'%3e%3cline x1='12' x2='12' y1='5' y2='19'%3e%3c/line%3e%3cline x1='5' x2='19' y1='12' y2='12'%3e%3c/line%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-minus'%3e%3cline x1='5' x2='19' y1='12' y2='12'%3e%3c/line%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' shape-rendering='geometricPrecision' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' %3e %3cpath d='M6 9l6 6 6-6'%3e%3c/path%3e %3c/svg%3e";

function _array_like_to_array$3(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes$3(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes$1(arr) {
    if (Array.isArray(arr)) return _array_like_to_array$3(arr);
}
function _define_property$1(obj, key, value) {
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
function _iterable_to_array$1(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit$3(arr, i) {
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
function _non_iterable_rest$3() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property$1(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$1(object, enumerableOnly) {
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
function _object_spread_props$1(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$1(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array$3(arr, i) {
    return _array_with_holes$3(arr) || _iterable_to_array_limit$3(arr, i) || _unsupported_iterable_to_array$3(arr, i) || _non_iterable_rest$3();
}
function _to_consumable_array$1(arr) {
    return _array_without_holes$1(arr) || _iterable_to_array$1(arr) || _unsupported_iterable_to_array$3(arr) || _non_iterable_spread$1();
}
function _unsupported_iterable_to_array$3(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array$3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$3(o, minLen);
}
var getErrorColorClass = function(error) {
    switch(error.type){
        case "error":
            return "text-red-500 dark:text-red-400";
        case "warn":
            return "text-amber-500 dark:text-amber-400";
        default:
            return "text-slate-500 dark:text-slate-400";
    }
};
var Console = function() {
    var _useState = _sliced_to_array$3(React.useState([]), 2), logs = _useState[0], setLogs = _useState[1];
    var _useState1 = _sliced_to_array$3(React.useState(""), 2), filter = _useState1[0], setFilter = _useState1[1];
    var deferredFilterValue = React.useDeferredValue(filter);
    var _useState2 = _sliced_to_array$3(React.useState(false), 2), openSection = _useState2[0], setOpenSection = _useState2[1];
    React.useEffect(function() {
        var originalConsole = window.console;
        window.console = _object_spread_props$1(_object_spread$1({}, originalConsole), {
            log: function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _originalConsole;
                (_originalConsole = originalConsole).log.apply(_originalConsole, _to_consumable_array$1(args));
                setLogs(function(logs) {
                    return _to_consumable_array$1(logs).concat([
                        {
                            type: "log",
                            message: args
                        }
                    ]);
                });
            },
            warn: function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _originalConsole;
                (_originalConsole = originalConsole).warn.apply(_originalConsole, _to_consumable_array$1(args));
                setLogs(function(logs) {
                    return _to_consumable_array$1(logs).concat([
                        {
                            type: "warn",
                            message: args
                        }
                    ]);
                });
            },
            error: function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _originalConsole;
                (_originalConsole = originalConsole).error.apply(_originalConsole, _to_consumable_array$1(args));
                setLogs(function(logs) {
                    return _to_consumable_array$1(logs).concat([
                        {
                            type: "error",
                            message: args
                        }
                    ]);
                });
            }
        });
        return function() {
            window.console = originalConsole;
        };
    }, []);
    var handleFilterChange = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setFilter(e.target.value);
    };
    var filteredLogs = React.useMemo(function() {
        return logs.filter(function(log) {
            var message = log.message.join(" ");
            return message.toLowerCase().includes(deferredFilterValue.toLowerCase());
        });
    }, [
        deferredFilterValue,
        logs
    ]);
    return /*#__PURE__*/ jsxRuntimeExports.jsxs("details", {
        className: "group",
        open: openSection,
        onToggle: function(e) {
            setOpenSection(e.target.open);
        },
        children: [
            /*#__PURE__*/ jsxRuntimeExports.jsxs("summary", {
                className: "flex cursor-pointer list-none items-center justify-between font-medium",
                children: [
                    /*#__PURE__*/ jsxRuntimeExports.jsx("h1", {
                        className: "text-lg font-medium",
                        children: "Console"
                    }),
                    /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                        className: "flex flex-1 mx-1 sm:mx-3 gap-2 items-center justify-between",
                        children: openSection && filteredLogs.length > 0 && /*#__PURE__*/ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                            children: [
                                /*#__PURE__*/ jsxRuntimeExports.jsx("input", {
                                    type: "text",
                                    placeholder: "Filter logs...",
                                    value: filter,
                                    onChange: handleFilterChange,
                                    className: "appearance-none bg-slate-100 border-none text-slate-500 dark:text-slate-400 rounded-md mt-2 py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-slate-500"
                                }),
                                /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                                    className: "p-1.5 mt-1.5 hover:bg-slate-200 rounded-md",
                                    onClick: function(e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        console.clear();
                                        setLogs([]);
                                    },
                                    children: /*#__PURE__*/ jsxRuntimeExports.jsx("img", {
                                        src: img$4,
                                        width: 24,
                                        height: 24,
                                        alt: "clear console"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsxRuntimeExports.jsx("span", {
                        className: "transition group-open:rotate-180",
                        children: /*#__PURE__*/ jsxRuntimeExports.jsx("img", {
                            src: img,
                            width: 24,
                            height: 24,
                            alt: "open icon"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                className: "group-open:animate-fadeIn mt-3 text-neutral-600",
                children: /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                    className: "divide-y divide-gray-700",
                    children: filteredLogs.map(function(log, index) {
                        return /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                            className: "py-2 ".concat(getErrorColorClass(log)),
                            children: log.message.map(function(part, index) {
                                return /*#__PURE__*/ jsxRuntimeExports.jsx("span", {
                                    className: "break-words",
                                    children: part.toString()
                                }, index);
                            })
                        }, index);
                    })
                })
            })
        ]
    });
};

function _array_like_to_array$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes$2(arr) {
    if (Array.isArray(arr)) return arr;
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
function _unsupported_iterable_to_array$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$2(o, minLen);
}
function ObjectViewer(param) {
    var data = param.data;
    var _useState = _sliced_to_array$2(React.useState({}), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var toggleOpen = function(key) {
        setIsOpen(function(prevState) {
            return _object_spread_props(_object_spread({}, prevState), _define_property({}, key, !prevState[key]));
        });
    };
    var renderData = function(data) {
        if (typeof data !== "object" || data === null) {
            return data;
        }
        if (Array.isArray(data)) {
            return data.map(function(item, index) {
                return /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                    className: "ml-4",
                    children: renderData(item)
                }, index);
            });
        }
        return Object.entries(data).map(function(param) {
            var _param = _sliced_to_array$2(param, 2), key = _param[0], value = _param[1];
            return /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                children: [
                    typeof value === "object" ? /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                        onClick: function() {
                            return toggleOpen(key);
                        },
                        className: "cursor-pointer",
                        children: [
                            /*#__PURE__*/ jsxRuntimeExports.jsx("span", {
                                className: "mr-1",
                                children: isOpen[key] ? "▸" : "▾"
                            }),
                            key
                        ]
                    }) : /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                        children: [
                            key,
                            ":",
                            "  ",
                            value
                        ]
                    }),
                    isOpen[key] && /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                        className: "ml-4",
                        children: renderData(value)
                    })
                ]
            }, key);
        });
    };
    return /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
        children: renderData(data)
    });
}

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
var Network = function() {
    var _useNetworkContext = useNetworkContext(), networkRequests = _useNetworkContext.networkRequests, clearNetworkRequests = _useNetworkContext.clearNetworkRequests;
    var _useState = _sliced_to_array$1(React.useState(false), 2), openSection = _useState[0], setOpenSection = _useState[1];
    var _useState1 = _sliced_to_array$1(React.useState(""), 2), filter = _useState1[0], setFilter = _useState1[1];
    var deferredFilterValue = React.useDeferredValue(filter);
    var handleFilterChange = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setFilter(e.target.value);
    };
    var filteredNetworkRequests = React.useMemo(function() {
        return networkRequests.filter(function(param) {
            var request = param.request;
            return request.url.includes(deferredFilterValue.toLowerCase());
        });
    }, [
        deferredFilterValue,
        networkRequests
    ]);
    return /*#__PURE__*/ jsxRuntimeExports.jsxs("details", {
        className: "group",
        open: openSection,
        onToggle: function(e) {
            setOpenSection(e.target.open);
        },
        children: [
            /*#__PURE__*/ jsxRuntimeExports.jsxs("summary", {
                className: "flex cursor-pointer list-none items-center justify-between font-medium",
                children: [
                    /*#__PURE__*/ jsxRuntimeExports.jsx("h1", {
                        className: "text-lg font-medium",
                        children: "Network"
                    }),
                    /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                        className: "flex flex-1 mx-1 sm:mx-3 gap-2 items-center justify-between",
                        children: openSection && filteredNetworkRequests.length > 0 && /*#__PURE__*/ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                            children: [
                                /*#__PURE__*/ jsxRuntimeExports.jsx("input", {
                                    type: "text",
                                    placeholder: "Filter requests...",
                                    value: filter,
                                    onChange: handleFilterChange,
                                    className: "appearance-none bg-slate-100 border-none text-slate-500 dark:text-slate-400 rounded-md mt-2 py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-slate-500"
                                }),
                                /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                                    className: "p-1.5 mt-1.5 hover:bg-slate-200 rounded-md",
                                    onClick: function(e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        clearNetworkRequests();
                                        setOpenSection(false);
                                    },
                                    children: /*#__PURE__*/ jsxRuntimeExports.jsx("img", {
                                        src: img$4,
                                        width: 24,
                                        height: 24,
                                        alt: "clear console"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsxRuntimeExports.jsx("span", {
                        className: "transition group-open:rotate-180",
                        children: /*#__PURE__*/ jsxRuntimeExports.jsx("img", {
                            src: img,
                            width: 24,
                            height: 24,
                            alt: "open icon"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                className: "group-open:animate-fadeIn mt-3 text-neutral-600 -mx-4",
                children: filteredNetworkRequests.map(function(request, index) {
                    return /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                        className: "px-4 py-2 ".concat(index % 2 === 0 ? "bg-slate-100" : ""),
                        children: /*#__PURE__*/ jsxRuntimeExports.jsx(ObjectViewer, {
                            data: request
                        })
                    }, index);
                })
            })
        ]
    });
};

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
var parseCookies = function() {
    var parsedCookies = {};
    if (document.cookie) {
        var cookies = document.cookie.split("; ");
        cookies.forEach(function(cookie) {
            var _cookie_split = _sliced_to_array(cookie.split("="), 2), key = _cookie_split[0], value = _cookie_split[1];
            parsedCookies[key] = value;
        });
    }
    return Object.entries(parsedCookies);
};
function arrayToJSON(arr) {
    return arr.reduce(function(obj, item) {
        obj[item[0]] = item[1];
        return obj;
    }, {});
}
var RenderImage = function(param) {
    var src = param.src, _param_width = param.width, width = _param_width === void 0 ? 22 : _param_width, _param_height = param.height, height = _param_height === void 0 ? 22 : _param_height, _param_alt = param.alt, alt = _param_alt === void 0 ? "image description" : _param_alt, onClick = param.onClick;
    return /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
        className: "p-1.5 hover:bg-slate-200 rounded-md",
        onClick: function(e) {
            e.preventDefault();
            e.stopPropagation();
            onClick();
        },
        children: /*#__PURE__*/ jsxRuntimeExports.jsx("img", {
            src: src,
            width: width,
            height: height,
            alt: alt
        })
    });
};
var Storage = function() {
    var _useState = _sliced_to_array(React.useState(Object.entries(localStorage)), 2), localStorageItems = _useState[0], setLocalStorageItems = _useState[1];
    var _useState1 = _sliced_to_array(React.useState(Object.entries(sessionStorage)), 2), sessionStorageItems = _useState1[0], setSessionStorageItems = _useState1[1];
    var _useState2 = _sliced_to_array(React.useState(parseCookies()), 2), cookieItems = _useState2[0], setCookieItems = _useState2[1];
    var _useState3 = _sliced_to_array(React.useState(""), 2), newLocalKey = _useState3[0], setNewLocalKey = _useState3[1];
    var _useState4 = _sliced_to_array(React.useState(""), 2), newLocalValue = _useState4[0], setNewLocalValue = _useState4[1];
    var _useState5 = _sliced_to_array(React.useState(""), 2), newSessionKey = _useState5[0], setNewSessionKey = _useState5[1];
    var _useState6 = _sliced_to_array(React.useState(""), 2), newSessionValue = _useState6[0], setNewSessionValue = _useState6[1];
    var _useState7 = _sliced_to_array(React.useState(""), 2), newCookieKey = _useState7[0], setNewCookieKey = _useState7[1];
    var _useState8 = _sliced_to_array(React.useState(""), 2), newCookieValue = _useState8[0], setNewCookieValue = _useState8[1];
    var _useState9 = _sliced_to_array(React.useState([
        true,
        false,
        false
    ]), 2), openSection = _useState9[0], setOpenSection = _useState9[1];
    var _useState10 = _sliced_to_array(React.useState([
        false,
        false,
        false
    ]), 2), openAddItem = _useState10[0], setOpenAddItem = _useState10[1];
    // useEffect(() => {
    // 	fetch("https://jsonplaceholder.typicode.com/posts/1")
    // 		.then((response) => response.json())
    // 		.then((json) => console.log(json));
    // }, []);
    var handleAddItem = function(storageType, _key, _value) {
        var extras = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var _extras_isUpdateFlow = extras.isUpdateFlow, isUpdateFlow = _extras_isUpdateFlow === void 0 ? false : _extras_isUpdateFlow, updateIndex = extras.updateIndex, _extras_checkDuplicateKey = extras.checkDuplicateKey, checkDuplicateKey = _extras_checkDuplicateKey === void 0 ? true : _extras_checkDuplicateKey, deleteKey = extras.deleteKey;
        if (!_key || !_value) return;
        var storageItems = storageType === "localStorage" ? localStorageItems : sessionStorageItems;
        if (checkDuplicateKey && storageItems.some(function(param) {
            var _param = _sliced_to_array(param, 1), key = _param[0];
            return key === _key;
        })) {
            return;
        }
        var updatedItems = _to_consumable_array(storageItems);
        if (updateIndex !== undefined) {
            updatedItems[updateIndex] = [
                _key,
                _value
            ];
        } else {
            updatedItems.push([
                _key,
                _value
            ]);
        }
        if (storageType === "localStorage") {
            localStorage.setItem(_key, _value);
            if (deleteKey) localStorage.removeItem(deleteKey);
            setLocalStorageItems(_to_consumable_array(updatedItems));
            if (!isUpdateFlow) {
                setNewLocalKey("");
                setNewLocalValue("");
                openAddItemHandler(0);
            }
        } else {
            sessionStorage.setItem(_key, _value);
            if (deleteKey) sessionStorage.removeItem(deleteKey);
            setSessionStorageItems(_to_consumable_array(updatedItems));
            if (!isUpdateFlow) {
                setNewSessionKey("");
                setNewSessionValue("");
                openAddItemHandler(1);
            }
        }
    };
    var handleDeleteItem = function(storageType, key) {
        if (storageType === "localStorage") {
            localStorage.removeItem(key);
            setLocalStorageItems(localStorageItems.filter(function(param) {
                var _param = _sliced_to_array(param, 1), k = _param[0];
                return k !== key;
            }));
        } else {
            sessionStorage.removeItem(key);
            setSessionStorageItems(sessionStorageItems.filter(function(param) {
                var _param = _sliced_to_array(param, 1), k = _param[0];
                return k !== key;
            }));
        }
    };
    var handleClearAll = function(storageType) {
        if (storageType === "localStorage") {
            localStorage.clear();
            setLocalStorageItems([]);
        } else {
            sessionStorage.clear();
            setSessionStorageItems([]);
        }
    };
    // Handler for adding a new cookie
    var handleAddCookie = function(_, _key, _value) {
        var extras = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var _extras_isUpdateFlow = extras.isUpdateFlow, isUpdateFlow = _extras_isUpdateFlow === void 0 ? false : _extras_isUpdateFlow, updateIndex = extras.updateIndex, deleteKey = extras.deleteKey;
        document.cookie = "".concat(_key, "=").concat(_value);
        var updatedItems = _to_consumable_array(cookieItems);
        if (updateIndex !== undefined) {
            updatedItems[updateIndex] = [
                _key,
                _value
            ];
        } else {
            updatedItems.push([
                _key,
                _value
            ]);
        }
        if (deleteKey) document.cookie = "".concat(deleteKey, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC");
        setCookieItems(_to_consumable_array(updatedItems));
        if (!isUpdateFlow) {
            setNewCookieKey("");
            setNewCookieValue("");
            openAddItemHandler(2);
        }
    };
    // Handler for deleting a cookie
    var handleDeleteCookie = function(_, key) {
        document.cookie = "".concat(key, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC");
        setCookieItems(cookieItems.filter(function(param) {
            var _param = _sliced_to_array(param, 1), k = _param[0];
            return k !== key;
        }));
    };
    // Handler for clearing all cookies
    var handleClearAllCookies = function() {
        document.cookie.split(";").forEach(function(c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=".concat(new Date().toUTCString(), ";path=/"));
        });
        setCookieItems([]);
    };
    var openSectionHandler = function(index, openState) {
        if (openState !== openSection[index]) {
            setOpenSection(function(state) {
                var updatedState = _to_consumable_array(state);
                updatedState[index] = openState;
                return updatedState;
            });
        }
    };
    var openAddItemHandler = function(index) {
        setOpenAddItem(function(state) {
            var updatedState = _to_consumable_array(state);
            updatedState[index] = !state[index];
            return updatedState;
        });
    };
    var copyContent = function() {
        var _ref = _async_to_generator(function(text) {
            var json, err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        json = arrayToJSON(text);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            navigator.clipboard.writeText(json)
                        ];
                    case 2:
                        _state.sent();
                        console.warn("text copied: ", text);
                        return [
                            3,
                            4
                        ];
                    case 3:
                        err = _state.sent();
                        console.error("Failed to copy: ", err);
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return function copyContent(text) {
            return _ref.apply(this, arguments);
        };
    }();
    return /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
        className: "grid grid-cols-1 divide-y divide-neutral-300",
        children: [
            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                className: "pb-4",
                children: /*#__PURE__*/ jsxRuntimeExports.jsxs("details", {
                    className: "group",
                    open: openSection[0],
                    onToggle: function(e) {
                        openSectionHandler(0, e.target.open);
                    },
                    children: [
                        /*#__PURE__*/ jsxRuntimeExports.jsxs("summary", {
                            className: "flex cursor-pointer list-none items-center justify-between font-medium",
                            children: [
                                /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                                    className: "flex gap-3 items-center",
                                    children: [
                                        /*#__PURE__*/ jsxRuntimeExports.jsx("h1", {
                                            className: "text-lg font-medium",
                                            children: "Local Storage"
                                        }),
                                        openSection[0] && /*#__PURE__*/ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsxRuntimeExports.jsx(RenderImage, {
                                                    src: openAddItem[0] ? img$1 : img$2,
                                                    width: 24,
                                                    height: 24,
                                                    alt: "add item",
                                                    onClick: function() {
                                                        return openAddItemHandler(0);
                                                    }
                                                }),
                                                localStorageItems.length > 0 && /*#__PURE__*/ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsxRuntimeExports.jsx(RenderImage, {
                                                            src: img$4,
                                                            width: 22,
                                                            height: 22,
                                                            alt: "clear all",
                                                            onClick: function() {
                                                                return handleClearAll("localStorage");
                                                            }
                                                        }),
                                                        /*#__PURE__*/ jsxRuntimeExports.jsx(RenderImage, {
                                                            src: img$3,
                                                            width: 22,
                                                            height: 22,
                                                            alt: "copy all",
                                                            onClick: function() {
                                                                return copyContent(localStorageItems);
                                                            }
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsxRuntimeExports.jsx("span", {
                                    className: "transition group-open:rotate-180",
                                    children: /*#__PURE__*/ jsxRuntimeExports.jsx(RenderImage, {
                                        src: img,
                                        width: 24,
                                        height: 24,
                                        alt: "open icon"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                            className: "group-open:animate-fadeIn mt-3 text-neutral-600",
                            children: [
                                /*#__PURE__*/ jsxRuntimeExports.jsx(Table, {
                                    data: localStorageItems,
                                    storageType: "localStorage",
                                    handleAddItem: handleAddItem,
                                    handleDeleteItem: handleDeleteItem,
                                    copyContent: copyContent
                                }),
                                openAddItem[0] && /*#__PURE__*/ jsxRuntimeExports.jsx("form", {
                                    onSubmit: function(e) {
                                        e.preventDefault();
                                        handleAddItem("localStorage", newLocalKey, newLocalValue);
                                    },
                                    "data-storage-type": "localStorage",
                                    children: /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                                        className: "mt-3 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-7",
                                        children: [
                                            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                                                className: "sm:col-span-3",
                                                children: /*#__PURE__*/ jsxRuntimeExports.jsx(Input, {
                                                    id: "localKey",
                                                    label: "Key",
                                                    placeholder: "Key",
                                                    name: "key",
                                                    value: newLocalKey,
                                                    onChange: setNewLocalKey
                                                })
                                            }),
                                            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                                                className: "sm:col-span-3",
                                                children: /*#__PURE__*/ jsxRuntimeExports.jsx(Input, {
                                                    id: "localValue",
                                                    label: "Value",
                                                    placeholder: "Value",
                                                    name: "value",
                                                    value: newLocalValue,
                                                    onChange: setNewLocalValue
                                                })
                                            }),
                                            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                                                className: "sm:col-span-1 flex justify-center sm:justify-start sm:items-end sm:pb-1",
                                                children: /*#__PURE__*/ jsxRuntimeExports.jsx(Button, {
                                                    label: "Add"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                className: "py-4",
                children: /*#__PURE__*/ jsxRuntimeExports.jsxs("details", {
                    className: "group",
                    open: openSection[1],
                    onToggle: function(e) {
                        openSectionHandler(1, e.target.open);
                    },
                    children: [
                        /*#__PURE__*/ jsxRuntimeExports.jsxs("summary", {
                            className: "flex cursor-pointer list-none items-center justify-between font-medium",
                            children: [
                                /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                                    className: "flex gap-3 items-center",
                                    children: [
                                        /*#__PURE__*/ jsxRuntimeExports.jsx("h1", {
                                            className: "text-lg font-medium",
                                            children: "Session Storage"
                                        }),
                                        openSection[1] && /*#__PURE__*/ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsxRuntimeExports.jsx(RenderImage, {
                                                    src: openAddItem[1] ? img$1 : img$2,
                                                    width: 24,
                                                    height: 24,
                                                    alt: "add item",
                                                    onClick: function() {
                                                        return openAddItemHandler(1);
                                                    }
                                                }),
                                                sessionStorageItems.length > 0 && /*#__PURE__*/ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsxRuntimeExports.jsx(RenderImage, {
                                                            src: img$4,
                                                            width: 22,
                                                            height: 22,
                                                            alt: "clear all",
                                                            onClick: function() {
                                                                return handleClearAll("sessionStorage");
                                                            }
                                                        }),
                                                        /*#__PURE__*/ jsxRuntimeExports.jsx(RenderImage, {
                                                            src: img$3,
                                                            width: 22,
                                                            height: 22,
                                                            alt: "copy all",
                                                            onClick: function() {
                                                                return copyContent(sessionStorageItems);
                                                            }
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsxRuntimeExports.jsx("span", {
                                    className: "transition group-open:rotate-180",
                                    children: /*#__PURE__*/ jsxRuntimeExports.jsx(RenderImage, {
                                        src: img,
                                        width: 24,
                                        height: 24,
                                        alt: "open icon",
                                        onClick: function() {
                                            return openSectionHandler(1);
                                        }
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                            className: "group-open:animate-fadeIn mt-3 text-neutral-600",
                            children: [
                                /*#__PURE__*/ jsxRuntimeExports.jsx(Table, {
                                    data: sessionStorageItems,
                                    storageType: "sessionStorage",
                                    handleAddItem: handleAddItem,
                                    handleDeleteItem: handleDeleteItem,
                                    copyContent: copyContent
                                }),
                                openAddItem[1] && /*#__PURE__*/ jsxRuntimeExports.jsx("form", {
                                    onSubmit: function(e) {
                                        e.preventDefault();
                                        handleAddItem("sessionStorage", newSessionKey, newSessionValue);
                                    },
                                    "data-storage-type": "sessionStorage",
                                    children: /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                                        className: "mt-3 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-7",
                                        children: [
                                            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                                                className: "sm:col-span-3",
                                                children: /*#__PURE__*/ jsxRuntimeExports.jsx(Input, {
                                                    id: "sessionKey",
                                                    label: "Key",
                                                    placeholder: "Key",
                                                    name: "key",
                                                    value: newSessionKey,
                                                    onChange: setNewSessionKey
                                                })
                                            }),
                                            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                                                className: "sm:col-span-3",
                                                children: /*#__PURE__*/ jsxRuntimeExports.jsx(Input, {
                                                    id: "sessionValue",
                                                    label: "Value",
                                                    placeholder: "Value",
                                                    name: "value",
                                                    value: newSessionValue,
                                                    onChange: setNewSessionValue
                                                })
                                            }),
                                            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                                                className: "sm:col-span-1 flex justify-center sm:justify-start sm:items-end sm:pb-1",
                                                children: /*#__PURE__*/ jsxRuntimeExports.jsx(Button, {
                                                    label: "Add"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                className: "py-4",
                children: /*#__PURE__*/ jsxRuntimeExports.jsxs("details", {
                    className: "group",
                    open: openSection[2],
                    onToggle: function(e) {
                        openSectionHandler(2, e.target.open);
                    },
                    children: [
                        /*#__PURE__*/ jsxRuntimeExports.jsxs("summary", {
                            className: "flex cursor-pointer list-none items-center justify-between font-medium",
                            children: [
                                /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                                    className: "flex gap-3 items-center",
                                    children: [
                                        /*#__PURE__*/ jsxRuntimeExports.jsx("h1", {
                                            className: "text-lg font-medium",
                                            children: "Cookies"
                                        }),
                                        openSection[2] && /*#__PURE__*/ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsxRuntimeExports.jsx(RenderImage, {
                                                    src: openAddItem[2] ? img$1 : img$2,
                                                    width: 24,
                                                    height: 24,
                                                    alt: "add item",
                                                    onClick: function() {
                                                        return openAddItemHandler(2);
                                                    }
                                                }),
                                                cookieItems.length > 0 && /*#__PURE__*/ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsxRuntimeExports.jsx(RenderImage, {
                                                            src: img$4,
                                                            width: 22,
                                                            height: 22,
                                                            alt: "clear all",
                                                            onClick: function() {
                                                                return handleClearAllCookies();
                                                            }
                                                        }),
                                                        /*#__PURE__*/ jsxRuntimeExports.jsx(RenderImage, {
                                                            src: img$3,
                                                            width: 22,
                                                            height: 22,
                                                            alt: "copy all",
                                                            onClick: function() {
                                                                return copyContent(cookieItems);
                                                            }
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsxRuntimeExports.jsx("span", {
                                    className: "transition group-open:rotate-180",
                                    children: /*#__PURE__*/ jsxRuntimeExports.jsx(RenderImage, {
                                        src: img,
                                        width: 24,
                                        height: 24,
                                        alt: "open icon",
                                        onClick: function() {
                                            return openSectionHandler(2);
                                        }
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                            className: "group-open:animate-fadeIn mt-3 text-neutral-600",
                            children: [
                                /*#__PURE__*/ jsxRuntimeExports.jsx(Table, {
                                    data: cookieItems,
                                    storageType: "cookie",
                                    handleAddItem: handleAddCookie,
                                    handleDeleteItem: handleDeleteCookie,
                                    copyContent: copyContent
                                }),
                                openAddItem[2] && /*#__PURE__*/ jsxRuntimeExports.jsx("form", {
                                    onSubmit: function(e) {
                                        e.preventDefault();
                                        handleAddCookie("cookie", newCookieKey, newCookieValue);
                                    },
                                    children: /*#__PURE__*/ jsxRuntimeExports.jsxs("div", {
                                        className: "mt-3 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-7",
                                        children: [
                                            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                                                className: "sm:col-span-3",
                                                children: /*#__PURE__*/ jsxRuntimeExports.jsx(Input, {
                                                    autofocus: true,
                                                    id: "cookieKey",
                                                    label: "Key",
                                                    placeholder: "Key",
                                                    name: "key",
                                                    value: newCookieKey,
                                                    onChange: setNewCookieKey
                                                })
                                            }),
                                            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                                                className: "sm:col-span-3",
                                                children: /*#__PURE__*/ jsxRuntimeExports.jsx(Input, {
                                                    id: "cookieValue",
                                                    label: "Value",
                                                    placeholder: "Value",
                                                    name: "value",
                                                    value: newCookieValue,
                                                    onChange: setNewCookieValue
                                                })
                                            }),
                                            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                                                className: "sm:col-span-1 flex justify-center sm:justify-start sm:items-end sm:pb-1",
                                                children: /*#__PURE__*/ jsxRuntimeExports.jsx(Button, {
                                                    label: "Add"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                className: "py-4",
                children: /*#__PURE__*/ jsxRuntimeExports.jsx(Console, {})
            }),
            /*#__PURE__*/ jsxRuntimeExports.jsx("div", {
                className: "py-4",
                children: /*#__PURE__*/ jsxRuntimeExports.jsx(Network, {})
            })
        ]
    });
};

var Storage$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: Storage
});

exports.NetworkProvider = NetworkProvider;

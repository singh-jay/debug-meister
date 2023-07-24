import { j as jsxRuntimeExports, u as useNetworkContext } from './index-c8d43d17.js';
import React, { useSyncExternalStore, useRef, useEffect, useState, useDeferredValue, useMemo } from 'react';

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
    return useSyncExternalStore(subscribe, getSnapshot);
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
    var renderRef = useRef(null);
    useEffect(function() {
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
    var _useState = _sliced_to_array$4(useState(""), 2), editedIndex = _useState[0], setEditedIndex = _useState[1];
    var _useState1 = _sliced_to_array$4(useState(""), 2), editedValue = _useState1[0], setEditedValue = _useState1[1];
    var _useState2 = _sliced_to_array$4(useState(""), 2), showActionButtons = _useState2[0], setShowActionButtons = _useState2[1];
    var _useState3 = _sliced_to_array$4(useState(true), 2); _useState3[0]; _useState3[1];
    var _useState4 = _sliced_to_array$4(useState(false), 2), mounted = _useState4[0], setMounted = _useState4[1];
    var isMobile = useIsMobile();
    // console.log("isMobile", isMobile);
    useEffect(function() {
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
    useEffect(function() {
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
    var _useState = _sliced_to_array$3(useState([]), 2), logs = _useState[0], setLogs = _useState[1];
    var _useState1 = _sliced_to_array$3(useState(""), 2), filter = _useState1[0], setFilter = _useState1[1];
    var deferredFilterValue = useDeferredValue(filter);
    var _useState2 = _sliced_to_array$3(useState(false), 2), openSection = _useState2[0], setOpenSection = _useState2[1];
    useEffect(function() {
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
    var filteredLogs = useMemo(function() {
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
    var _useState = _sliced_to_array$2(useState({}), 2), isOpen = _useState[0], setIsOpen = _useState[1];
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
    var _useState = _sliced_to_array$1(useState(false), 2), openSection = _useState[0], setOpenSection = _useState[1];
    var _useState1 = _sliced_to_array$1(useState(""), 2), filter = _useState1[0], setFilter = _useState1[1];
    var deferredFilterValue = useDeferredValue(filter);
    var handleFilterChange = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setFilter(e.target.value);
    };
    var filteredNetworkRequests = useMemo(function() {
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
    var _useState = _sliced_to_array(useState(Object.entries(localStorage)), 2), localStorageItems = _useState[0], setLocalStorageItems = _useState[1];
    var _useState1 = _sliced_to_array(useState(Object.entries(sessionStorage)), 2), sessionStorageItems = _useState1[0], setSessionStorageItems = _useState1[1];
    var _useState2 = _sliced_to_array(useState(parseCookies()), 2), cookieItems = _useState2[0], setCookieItems = _useState2[1];
    var _useState3 = _sliced_to_array(useState(""), 2), newLocalKey = _useState3[0], setNewLocalKey = _useState3[1];
    var _useState4 = _sliced_to_array(useState(""), 2), newLocalValue = _useState4[0], setNewLocalValue = _useState4[1];
    var _useState5 = _sliced_to_array(useState(""), 2), newSessionKey = _useState5[0], setNewSessionKey = _useState5[1];
    var _useState6 = _sliced_to_array(useState(""), 2), newSessionValue = _useState6[0], setNewSessionValue = _useState6[1];
    var _useState7 = _sliced_to_array(useState(""), 2), newCookieKey = _useState7[0], setNewCookieKey = _useState7[1];
    var _useState8 = _sliced_to_array(useState(""), 2), newCookieValue = _useState8[0], setNewCookieValue = _useState8[1];
    var _useState9 = _sliced_to_array(useState([
        true,
        false,
        false
    ]), 2), openSection = _useState9[0], setOpenSection = _useState9[1];
    var _useState10 = _sliced_to_array(useState([
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

export { Storage as default };
//# sourceMappingURL=Storage-94e388e7.js.map

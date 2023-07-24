"use strict";var react=require("react");function styleInject(t,r){void 0===r&&(r={});var e=r.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===e&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}var css_248z='/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.bottom-0{bottom:0}.bottom-1{bottom:.25rem}.left-0{left:0}.right-0{right:0}.right-4{right:1rem}.top-0{top:0}.top-0\\.5{top:.125rem}.z-10{z-index:10}.z-50{z-index:50}.m-5{margin:1.25rem}.-mx-4{margin-left:-1rem;margin-right:-1rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.mb-2{margin-bottom:.5rem}.ml-4{margin-left:1rem}.mr-1{margin-right:.25rem}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.flex{display:flex}.grid{display:grid}.h-4{height:1rem}.max-h-mobile{max-height:100lvh}.w-4{width:1rem}.w-full{width:100%}.w-mobile{width:100lvw}.flex-1{flex:1 1 0%}.origin-left{transform-origin:left}.-translate-y-1\\/2{--tw-translate-y:-50%}.-translate-y-1\\/2,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;appearance:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-x-3{column-gap:.75rem}.gap-x-6{column-gap:1.5rem}.gap-y-4{row-gap:1rem}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.divide-gray-700>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(55 65 81/var(--tw-divide-opacity))}.divide-neutral-300>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(212 212 212/var(--tw-divide-opacity))}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.whitespace-nowrap{white-space:nowrap}.break-words{overflow-wrap:break-word}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-none{border-style:none}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-slate-200{--tw-border-opacity:1;border-color:rgb(226 232 240/var(--tw-border-opacity))}.border-transparent{border-color:transparent}.bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.bg-slate-100{--tw-bg-opacity:1;background-color:rgb(241 245 249/var(--tw-bg-opacity))}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240/var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-white\\/50{background-color:hsla(0,0%,100%,.5)}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-4{padding:1rem}.px-0{padding-left:0;padding-right:0}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.pb-3{padding-bottom:.75rem}.pb-4{padding-bottom:1rem}.pl-8{padding-left:2rem}.pt-0{padding-top:0}.text-left{text-align:left}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-amber-500{--tw-text-opacity:1;color:rgb(245 158 11/var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}.text-indigo-600{--tw-text-opacity:1;color:rgb(79 70 229/var(--tw-text-opacity))}.text-neutral-600{--tw-text-opacity:1;color:rgb(82 82 82/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184/var(--tw-text-opacity))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.opacity-75{opacity:.75}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.shadow-sm,.shadow-xl{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-100{transition-duration:.1s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}:root{--vh:100vh}.placeholder\\:text-transparent:-ms-input-placeholder{color:transparent}.placeholder\\:text-transparent::placeholder{color:transparent}.hover\\:bg-slate-200:hover{--tw-bg-opacity:1;background-color:rgb(226 232 240/var(--tw-bg-opacity))}.focus\\:border-gray-500:focus{--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-1:focus,.focus\\:ring-2:focus{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-indigo-600:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(79 70 229/var(--tw-ring-opacity))}.focus\\:ring-slate-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(100 116 139/var(--tw-ring-opacity))}.group[open] .group-open\\:rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.peer:-ms-input-placeholder~.peer-placeholder-shown\\:top-1\\/2{top:50%}.peer:placeholder-shown~.peer-placeholder-shown\\:top-1\\/2{top:50%}.peer:-ms-input-placeholder~.peer-placeholder-shown\\:text-base{font-size:1rem;line-height:1.5rem}.peer:placeholder-shown~.peer-placeholder-shown\\:text-base{font-size:1rem;line-height:1.5rem}.peer:-ms-input-placeholder~.peer-placeholder-shown\\:text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.peer:placeholder-shown~.peer-placeholder-shown\\:text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.peer:focus~.peer-focus\\:top-0{top:0}.peer:focus~.peer-focus\\:pl-0{padding-left:0}.peer:focus~.peer-focus\\:text-sm{font-size:.875rem;line-height:1.25rem}.peer:focus~.peer-focus\\:text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (prefers-color-scheme:dark){.dark\\:border-slate-600{--tw-border-opacity:1;border-color:rgb(71 85 105/var(--tw-border-opacity))}.dark\\:border-slate-700{--tw-border-opacity:1;border-color:rgb(51 65 85/var(--tw-border-opacity))}.dark\\:text-amber-400{--tw-text-opacity:1;color:rgb(251 191 36/var(--tw-text-opacity))}.dark\\:text-red-400{--tw-text-opacity:1;color:rgb(248 113 113/var(--tw-text-opacity))}.dark\\:text-slate-200{--tw-text-opacity:1;color:rgb(226 232 240/var(--tw-text-opacity))}.dark\\:text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184/var(--tw-text-opacity))}}@media (min-width:640px){.sm\\:bottom-3{bottom:.75rem}.sm\\:col-span-1{grid-column:span 1/span 1}.sm\\:col-span-3{grid-column:span 3/span 3}.sm\\:m-4{margin:1rem}.sm\\:mx-3{margin-left:.75rem;margin-right:.75rem}.sm\\:mb-0{margin-bottom:0}.sm\\:max-h-\\[calc\\(100vh-theme\\(space\\.8\\)\\)\\]{max-height:calc(100vh - 2rem)}.sm\\:w-1\\/2{width:50%}.sm\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.sm\\:grid-cols-auto{grid-template-columns:auto 1fr}.sm\\:items-end{align-items:flex-end}.sm\\:justify-start{justify-content:flex-start}.sm\\:gap-x-0{column-gap:0}.sm\\:border-slate-200{--tw-border-opacity:1;border-color:rgb(226 232 240/var(--tw-border-opacity))}.sm\\:p-4{padding:1rem}.sm\\:pb-1{padding-bottom:.25rem}}';function _array_like_to_array(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,o=Array(r);e<r;e++)o[e]=t[e];return o}function _array_with_holes(t){if(Array.isArray(t))return t}function _iterable_to_array_limit(t,r){var e,o,a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var i=[],n=!0,s=!1;try{for(a=a.call(t);!(n=(e=a.next()).done)&&(i.push(e.value),!r||i.length!==r);n=!0);}catch(t){s=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(s)throw o}}return i}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(t,r){return _array_with_holes(t)||_iterable_to_array_limit(t,r)||_unsupported_iterable_to_array(t,r)||_non_iterable_rest()}function _unsupported_iterable_to_array(t,r){if(t){if("string"==typeof t)return _array_like_to_array(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _array_like_to_array(t,r)}}styleInject(css_248z,{insertAt:"top"});var NetworkProvider=function(){var t=_sliced_to_array(react.useState(0),2),r=t[0],e=t[1];return React.createElement("div",{className:"flex gap-2 text-xl text-red"},React.createElement("button",{onClick:function(){return e(function(t){return t+1})}},"+"),r,React.createElement("button",{onClick:function(){return e(function(t){return t-1})}},"-"))};exports.NetworkProvider=NetworkProvider;
//# sourceMappingURL=index.js.map

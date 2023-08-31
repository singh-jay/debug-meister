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

var css_248z = "*, ::before, ::after {\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-gradient-from-position:  ;\n    --tw-gradient-via-position:  ;\n    --tw-gradient-to-position:  ;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  ;\n}\n::backdrop {\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-gradient-from-position:  ;\n    --tw-gradient-via-position:  ;\n    --tw-gradient-to-position:  ;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  ;\n}\n.pointer-events-none {\n    pointer-events: none !important;\n}\n.static {\n    position: static !important;\n}\n.fixed {\n    position: fixed !important;\n}\n.absolute {\n    position: absolute !important;\n}\n.relative {\n    position: relative !important;\n}\n.sticky {\n    position: sticky !important;\n}\n.bottom-0 {\n    bottom: 0px !important;\n}\n.bottom-1 {\n    bottom: 0.25rem !important;\n}\n.left-0 {\n    left: 0px !important;\n}\n.right-0 {\n    right: 0px !important;\n}\n.right-4 {\n    right: 1rem !important;\n}\n.top-0 {\n    top: 0px !important;\n}\n.top-0\\.5 {\n    top: 0.125rem !important;\n}\n.z-10 {\n    z-index: 10 !important;\n}\n.z-50 {\n    z-index: 50 !important;\n}\n.m-5 {\n    margin: 1.25rem !important;\n}\n.-mx-4 {\n    margin-left: -1rem !important;\n    margin-right: -1rem !important;\n}\n.mx-1 {\n    margin-left: 0.25rem !important;\n    margin-right: 0.25rem !important;\n}\n.mb-2 {\n    margin-bottom: 0.5rem !important;\n}\n.ml-4 {\n    margin-left: 1rem !important;\n}\n.mr-1 {\n    margin-right: 0.25rem !important;\n}\n.mt-1 {\n    margin-top: 0.25rem !important;\n}\n.mt-1\\.5 {\n    margin-top: 0.375rem !important;\n}\n.mt-2 {\n    margin-top: 0.5rem !important;\n}\n.mt-3 {\n    margin-top: 0.75rem !important;\n}\n.flex {\n    display: flex !important;\n}\n.grid {\n    display: grid !important;\n}\n.h-4 {\n    height: 1rem !important;\n}\n.max-h-mobile {\n    max-height: 100lvh !important;\n}\n.w-4 {\n    width: 1rem !important;\n}\n.w-full {\n    width: 100% !important;\n}\n.w-mobile {\n    width: 100lvw !important;\n}\n.flex-1 {\n    flex: 1 1 0% !important;\n}\n.origin-left {\n    transform-origin: left !important;\n}\n.-translate-y-1\\/2 {\n    --tw-translate-y: -50% !important;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;\n}\n.transform {\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;\n}\n.cursor-pointer {\n    cursor: pointer !important;\n}\n.resize {\n    resize: both !important;\n}\n.list-none {\n    list-style-type: none !important;\n}\n.appearance-none {\n    -webkit-appearance: none !important;\n            appearance: none !important;\n}\n.grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;\n}\n.items-center {\n    align-items: center !important;\n}\n.justify-center {\n    justify-content: center !important;\n}\n.justify-between {\n    justify-content: space-between !important;\n}\n.gap-1 {\n    gap: 0.25rem !important;\n}\n.gap-2 {\n    gap: 0.5rem !important;\n}\n.gap-3 {\n    gap: 0.75rem !important;\n}\n.gap-x-3 {\n    column-gap: 0.75rem !important;\n}\n.gap-x-6 {\n    column-gap: 1.5rem !important;\n}\n.gap-y-4 {\n    row-gap: 1rem !important;\n}\n.divide-y > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-y-reverse: 0 !important;\n    border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse))) !important;\n    border-bottom-width: calc(1px * var(--tw-divide-y-reverse)) !important;\n}\n.divide-gray-700 > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-opacity: 1 !important;\n    border-color: rgb(55 65 81 / var(--tw-divide-opacity)) !important;\n}\n.divide-neutral-300 > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-opacity: 1 !important;\n    border-color: rgb(212 212 212 / var(--tw-divide-opacity)) !important;\n}\n.overflow-auto {\n    overflow: auto !important;\n}\n.overflow-hidden {\n    overflow: hidden !important;\n}\n.overflow-x-auto {\n    overflow-x: auto !important;\n}\n.whitespace-nowrap {\n    white-space: nowrap !important;\n}\n.break-words {\n    overflow-wrap: break-word !important;\n}\n.rounded {\n    border-radius: 0.25rem !important;\n}\n.rounded-lg {\n    border-radius: 0.5rem !important;\n}\n.rounded-md {\n    border-radius: 0.375rem !important;\n}\n.border-b {\n    border-bottom-width: 1px !important;\n}\n.border-b-2 {\n    border-bottom-width: 2px !important;\n}\n.border-none {\n    border-style: none !important;\n}\n.border-slate-200 {\n    --tw-border-opacity: 1 !important;\n    border-color: rgb(226 232 240 / var(--tw-border-opacity)) !important;\n}\n.border-slate-300 {\n    --tw-border-opacity: 1 !important;\n    border-color: rgb(203 213 225 / var(--tw-border-opacity)) !important;\n}\n.border-transparent {\n    border-color: transparent !important;\n}\n.bg-rose-600 {\n    --tw-bg-opacity: 1 !important;\n    background-color: rgb(225 29 72 / var(--tw-bg-opacity)) !important;\n}\n.bg-slate-100 {\n    --tw-bg-opacity: 1 !important;\n    background-color: rgb(241 245 249 / var(--tw-bg-opacity)) !important;\n}\n.bg-slate-200 {\n    --tw-bg-opacity: 1 !important;\n    background-color: rgb(226 232 240 / var(--tw-bg-opacity)) !important;\n}\n.bg-slate-50 {\n    --tw-bg-opacity: 1 !important;\n    background-color: rgb(248 250 252 / var(--tw-bg-opacity)) !important;\n}\n.bg-slate-500 {\n    --tw-bg-opacity: 1 !important;\n    background-color: rgb(100 116 139 / var(--tw-bg-opacity)) !important;\n}\n.bg-transparent {\n    background-color: transparent !important;\n}\n.bg-white {\n    --tw-bg-opacity: 1 !important;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;\n}\n.bg-white\\/50 {\n    background-color: rgb(255 255 255 / 0.5) !important;\n}\n.p-1 {\n    padding: 0.25rem !important;\n}\n.p-1\\.5 {\n    padding: 0.375rem !important;\n}\n.p-4 {\n    padding: 1rem !important;\n}\n.px-0 {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n}\n.px-2 {\n    padding-left: 0.5rem !important;\n    padding-right: 0.5rem !important;\n}\n.px-3 {\n    padding-left: 0.75rem !important;\n    padding-right: 0.75rem !important;\n}\n.px-4 {\n    padding-left: 1rem !important;\n    padding-right: 1rem !important;\n}\n.py-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n}\n.py-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n}\n.py-4 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n}\n.pb-3 {\n    padding-bottom: 0.75rem !important;\n}\n.pb-4 {\n    padding-bottom: 1rem !important;\n}\n.pl-8 {\n    padding-left: 2rem !important;\n}\n.pt-0 {\n    padding-top: 0px !important;\n}\n.text-left {\n    text-align: left !important;\n}\n.text-center {\n    text-align: center !important;\n}\n.text-lg {\n    font-size: 1.125rem !important;\n    line-height: 1.75rem !important;\n}\n.text-sm {\n    font-size: 0.875rem !important;\n    line-height: 1.25rem !important;\n}\n.text-xl {\n    font-size: 1.25rem !important;\n    line-height: 1.75rem !important;\n}\n.font-medium {\n    font-weight: 500 !important;\n}\n.font-semibold {\n    font-weight: 600 !important;\n}\n.text-amber-500 {\n    --tw-text-opacity: 1 !important;\n    color: rgb(245 158 11 / var(--tw-text-opacity)) !important;\n}\n.text-neutral-600 {\n    --tw-text-opacity: 1 !important;\n    color: rgb(82 82 82 / var(--tw-text-opacity)) !important;\n}\n.text-red-500 {\n    --tw-text-opacity: 1 !important;\n    color: rgb(239 68 68 / var(--tw-text-opacity)) !important;\n}\n.text-slate-400 {\n    --tw-text-opacity: 1 !important;\n    color: rgb(148 163 184 / var(--tw-text-opacity)) !important;\n}\n.text-slate-500 {\n    --tw-text-opacity: 1 !important;\n    color: rgb(100 116 139 / var(--tw-text-opacity)) !important;\n}\n.text-slate-800 {\n    --tw-text-opacity: 1 !important;\n    color: rgb(30 41 59 / var(--tw-text-opacity)) !important;\n}\n.text-slate-900 {\n    --tw-text-opacity: 1 !important;\n    color: rgb(15 23 42 / var(--tw-text-opacity)) !important;\n}\n.text-white {\n    --tw-text-opacity: 1 !important;\n    color: rgb(255 255 255 / var(--tw-text-opacity)) !important;\n}\n.opacity-75 {\n    opacity: 0.75 !important;\n}\n.shadow-sm {\n    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;\n    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color) !important;\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n.shadow-xl {\n    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;\n    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color) !important;\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n.filter {\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;\n}\n.backdrop-blur {\n    --tw-backdrop-blur: blur(8px) !important;\n    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;\n            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;\n}\n.transition {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter !important;\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter !important;\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter !important;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;\n    transition-duration: 150ms !important;\n}\n.transition-all {\n    transition-property: all !important;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;\n    transition-duration: 150ms !important;\n}\n.duration-100 {\n    transition-duration: 100ms !important;\n}\n.ease-in-out {\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n/* Hide scrollbar for Chrome, Safari and Opera */\n.no-scrollbar::-webkit-scrollbar {\n    display: none !important;\n  }\n/* Hide scrollbar for IE, Edge and Firefox */\n.no-scrollbar {\n    -ms-overflow-style: none !important; /* IE and Edge */\n    scrollbar-width: none !important; /* Firefox */\n  }\n\n:root {\n  --vh: 100vh;\n}\n\n.placeholder\\:text-transparent:-ms-input-placeholder {\n    color: transparent !important;\n}\n\n.placeholder\\:text-transparent::placeholder {\n    color: transparent !important;\n}\n\n.hover\\:bg-slate-200:hover {\n    --tw-bg-opacity: 1 !important;\n    background-color: rgb(226 232 240 / var(--tw-bg-opacity)) !important;\n}\n\n.focus\\:border-slate-500:focus {\n    --tw-border-opacity: 1 !important;\n    border-color: rgb(100 116 139 / var(--tw-border-opacity)) !important;\n}\n\n.focus\\:bg-slate-100:focus {\n    --tw-bg-opacity: 1 !important;\n    background-color: rgb(241 245 249 / var(--tw-bg-opacity)) !important;\n}\n\n.focus\\:outline-none:focus {\n    outline: 2px solid transparent !important;\n    outline-offset: 2px !important;\n}\n\n.focus\\:ring-1:focus {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;\n}\n\n.focus\\:ring-2:focus {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;\n}\n\n.focus\\:ring-slate-500:focus {\n    --tw-ring-opacity: 1 !important;\n    --tw-ring-color: rgb(100 116 139 / var(--tw-ring-opacity)) !important;\n}\n\n.focus\\:ring-slate-600:focus {\n    --tw-ring-opacity: 1 !important;\n    --tw-ring-color: rgb(71 85 105 / var(--tw-ring-opacity)) !important;\n}\n\n.group[open] .group-open\\:rotate-180 {\n    --tw-rotate: 180deg !important;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;\n}\n\n.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:top-1\\/2 {\n    top: 50% !important;\n}\n\n.peer:placeholder-shown ~ .peer-placeholder-shown\\:top-1\\/2 {\n    top: 50% !important;\n}\n\n.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:text-base {\n    font-size: 1rem !important;\n    line-height: 1.5rem !important;\n}\n\n.peer:placeholder-shown ~ .peer-placeholder-shown\\:text-base {\n    font-size: 1rem !important;\n    line-height: 1.5rem !important;\n}\n\n.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:text-slate-500 {\n    --tw-text-opacity: 1 !important;\n    color: rgb(100 116 139 / var(--tw-text-opacity)) !important;\n}\n\n.peer:placeholder-shown ~ .peer-placeholder-shown\\:text-slate-500 {\n    --tw-text-opacity: 1 !important;\n    color: rgb(100 116 139 / var(--tw-text-opacity)) !important;\n}\n\n.peer:focus ~ .peer-focus\\:top-0 {\n    top: 0px !important;\n}\n\n.peer:focus ~ .peer-focus\\:pl-0 {\n    padding-left: 0px !important;\n}\n\n.peer:focus ~ .peer-focus\\:text-sm {\n    font-size: 0.875rem !important;\n    line-height: 1.25rem !important;\n}\n\n.peer:focus ~ .peer-focus\\:text-slate-800 {\n    --tw-text-opacity: 1 !important;\n    color: rgb(30 41 59 / var(--tw-text-opacity)) !important;\n}\n\n@media (prefers-color-scheme: dark) {\n    .dark\\:border-slate-600 {\n        --tw-border-opacity: 1 !important;\n        border-color: rgb(71 85 105 / var(--tw-border-opacity)) !important;\n    }\n    .dark\\:border-slate-700 {\n        --tw-border-opacity: 1 !important;\n        border-color: rgb(51 65 85 / var(--tw-border-opacity)) !important;\n    }\n    .dark\\:text-amber-400 {\n        --tw-text-opacity: 1 !important;\n        color: rgb(251 191 36 / var(--tw-text-opacity)) !important;\n    }\n    .dark\\:text-red-400 {\n        --tw-text-opacity: 1 !important;\n        color: rgb(248 113 113 / var(--tw-text-opacity)) !important;\n    }\n    .dark\\:text-slate-200 {\n        --tw-text-opacity: 1 !important;\n        color: rgb(226 232 240 / var(--tw-text-opacity)) !important;\n    }\n    .dark\\:text-slate-400 {\n        --tw-text-opacity: 1 !important;\n        color: rgb(148 163 184 / var(--tw-text-opacity)) !important;\n    }\n}\n\n@media (min-width: 640px) {\n    .sm\\:bottom-3 {\n        bottom: 0.75rem !important;\n    }\n    .sm\\:col-span-1 {\n        grid-column: span 1 / span 1 !important;\n    }\n    .sm\\:col-span-3 {\n        grid-column: span 3 / span 3 !important;\n    }\n    .sm\\:m-4 {\n        margin: 1rem !important;\n    }\n    .sm\\:mx-3 {\n        margin-left: 0.75rem !important;\n        margin-right: 0.75rem !important;\n    }\n    .sm\\:mb-0 {\n        margin-bottom: 0px !important;\n    }\n    .sm\\:max-h-\\[calc\\(100vh-theme\\(space\\.8\\)\\)\\] {\n        max-height: calc(100vh - 2rem) !important;\n    }\n    .sm\\:w-1\\/2 {\n        width: 50% !important;\n    }\n    .sm\\:grid-cols-7 {\n        grid-template-columns: repeat(7, minmax(0, 1fr)) !important;\n    }\n    .sm\\:grid-cols-auto {\n        grid-template-columns: auto 1fr !important;\n    }\n    .sm\\:items-end {\n        align-items: flex-end !important;\n    }\n    .sm\\:justify-start {\n        justify-content: flex-start !important;\n    }\n    .sm\\:gap-x-0 {\n        column-gap: 0px !important;\n    }\n    .sm\\:border-slate-200 {\n        --tw-border-opacity: 1 !important;\n        border-color: rgb(226 232 240 / var(--tw-border-opacity)) !important;\n    }\n    .sm\\:p-4 {\n        padding: 1rem !important;\n    }\n    .sm\\:pb-1 {\n        padding-bottom: 0.25rem !important;\n    }\n}\n";
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

var DebugContext = /*#__PURE__*/ React.createContext({});
var useDebugContext = function() {
    return React.useContext(DebugContext);
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
        var addNetworkRequest = useDebugContext().addNetworkRequest;
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
    return Promise.resolve().then(function () { return require(/* webpackChunkName: "DebugProviderOverlayChunk" */ './Storage-28073ad7.js'); });
});
function DebugOverlay() {
    var _useState = _sliced_to_array$1(React.useState(false), 2), mounted = _useState[0], setMounted = _useState[1];
    var _useState1 = _sliced_to_array$1(React.useState(false), 2), openPopup = _useState1[0], setOpenPopup = _useState1[1];
    React.useEffect(function() {
        setMounted(true);
    }, []);
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
                                className: "text-slate-900 text-xl font-medium",
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
var DebugProvider = function(param) {
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
    if (!mounted) return children;
    return /*#__PURE__*/ jsxRuntimeExports.jsx(DebugContext.Provider, {
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

exports.DebugProvider = DebugProvider;
exports.jsxRuntimeExports = jsxRuntimeExports;
exports.useDebugContext = useDebugContext;
//# sourceMappingURL=index-bbc74044.js.map

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self2 = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self2 = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self2 = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self2, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext2(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext2(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState9(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef2(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect7(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback3(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo3(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue3(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore2(subscribe2, getSnapshot2, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe2, getSnapshot2, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext2;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback3;
        exports.useContext = useContext2;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue3;
        exports.useEffect = useEffect7;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo3;
        exports.useReducer = useReducer;
        exports.useRef = useRef2;
        exports.useState = useState9;
        exports.useSyncExternalStore = useSyncExternalStore2;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// src/context/NetworkContext.js
var import_react, NetworkContext, useNetworkContext;
var init_NetworkContext = __esm({
  "src/context/NetworkContext.js"() {
    import_react = __toESM(require_react(), 1);
    NetworkContext = (0, import_react.createContext)({});
    useNetworkContext = () => (0, import_react.useContext)(NetworkContext);
  }
});

// node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-dev-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React12 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React12.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self2) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV12(type, config, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self2);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV12(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        var jsxDEV$1 = jsxWithValidation;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsxDEV = jsxDEV$1;
      })();
    }
  }
});

// node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = __commonJS({
  "node_modules/react/jsx-dev-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_dev_runtime_development();
    }
  }
});

// src/icons/svg/trash.svg
var trash_default;
var init_trash = __esm({
  "src/icons/svg/trash.svg"() {
    trash_default = "./trash-TPWQYEL5.svg";
  }
});

// src/icons/svg/copy.svg
var copy_default;
var init_copy = __esm({
  "src/icons/svg/copy.svg"() {
    copy_default = "./copy-6GSL44YP.svg";
  }
});

// src/hooks/useIsMobile.js
function subscribe(onStoreChange) {
  var _a;
  (_a = global.window) == null ? void 0 : _a.addEventListener("resize", onStoreChange);
  return () => {
    var _a2;
    return (_a2 = global.window) == null ? void 0 : _a2.removeEventListener("resize", onStoreChange);
  };
}
function getSnapshot() {
  var _a;
  return ((_a = global.window) == null ? void 0 : _a.innerWidth) < 640 ? true : false;
}
function useIsMobile() {
  return (0, import_react3.useSyncExternalStore)(subscribe, getSnapshot);
}
var import_react3;
var init_useIsMobile = __esm({
  "src/hooks/useIsMobile.js"() {
    import_react3 = __toESM(require_react(), 1);
  }
});

// node_modules/json-formatter-js/dist/json-formatter.umd.js
var require_json_formatter_umd = __commonJS({
  "node_modules/json-formatter-js/dist/json-formatter.umd.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).JSONFormatter = e();
    }(exports, function() {
      "use strict";
      function t(t2) {
        return null === t2 ? "null" : typeof t2;
      }
      function e(t2) {
        return !!t2 && "object" == typeof t2;
      }
      function r(t2) {
        if (void 0 === t2)
          return "";
        if (null === t2)
          return "Object";
        if ("object" == typeof t2 && !t2.constructor)
          return "Object";
        var e2 = /function ([^(]*)/.exec(t2.constructor.toString());
        return e2 && e2.length > 1 ? e2[1] : "";
      }
      function n(t2, e2, r2) {
        return "null" === t2 || "undefined" === t2 ? t2 : ("string" !== t2 && "stringifiable" !== t2 || (r2 = '"' + r2.replace(/"/g, '\\"') + '"'), "function" === t2 ? e2.toString().replace(/[\r\n]/g, "").replace(/\{.*\}/, "") + "{\u2026}" : r2);
      }
      function o(o2) {
        var i2 = "";
        return e(o2) ? (i2 = r(o2), Array.isArray(o2) && (i2 += "[" + o2.length + "]")) : i2 = n(t(o2), o2, o2), i2;
      }
      function i(t2) {
        return "json-formatter-" + t2;
      }
      function s(t2, e2, r2) {
        var n2 = document.createElement(t2);
        return e2 && n2.classList.add(i(e2)), void 0 !== r2 && (r2 instanceof Node ? n2.appendChild(r2) : n2.appendChild(document.createTextNode(String(r2)))), n2;
      }
      !function(t2) {
        if (t2 && "undefined" != typeof window) {
          var e2 = document.createElement("style");
          e2.setAttribute("media", "screen"), e2.innerHTML = t2, document.head.appendChild(e2);
        }
      }('.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-row,\n.json-formatter-row a,\n.json-formatter-row a:hover {\n  color: black;\n  text-decoration: none;\n}\n.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-row .json-formatter-string,\n.json-formatter-row .json-formatter-stringifiable {\n  color: green;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-row .json-formatter-number {\n  color: blue;\n}\n.json-formatter-row .json-formatter-boolean {\n  color: red;\n}\n.json-formatter-row .json-formatter-null {\n  color: #855A00;\n}\n.json-formatter-row .json-formatter-undefined {\n  color: #ca0b69;\n}\n.json-formatter-row .json-formatter-function {\n  color: #FF20ED;\n}\n.json-formatter-row .json-formatter-date {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: blue;\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-bracket {\n  color: blue;\n}\n.json-formatter-row .json-formatter-key {\n  color: #00008B;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "\u25BA";\n}\n.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n.json-formatter-dark.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-dark.json-formatter-row,\n.json-formatter-dark.json-formatter-row a,\n.json-formatter-dark.json-formatter-row a:hover {\n  color: white;\n  text-decoration: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-string,\n.json-formatter-dark.json-formatter-row .json-formatter-stringifiable {\n  color: #31F031;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-number {\n  color: #66C2FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-boolean {\n  color: #EC4242;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-null {\n  color: #EEC97D;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-undefined {\n  color: #ef8fbe;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-function {\n  color: #FD48CB;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-date {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.json-formatter-dark.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: #027BFF;\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-bracket {\n  color: #9494FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-key {\n  color: #23A0DB;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "\u25BA";\n}\n.json-formatter-dark.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-dark.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n');
      var a = /(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/, f = /\d{2}:\d{2}:\d{2} GMT-\d{4}/, m = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/, l = window.requestAnimationFrame || function(t2) {
        return t2(), 0;
      }, d = { hoverPreviewEnabled: false, hoverPreviewArrayCount: 100, hoverPreviewFieldCount: 5, animateOpen: true, animateClose: true, theme: null, useToJSON: true, sortPropertiesBy: null };
      return function() {
        function c(t2, e2, r2, n2) {
          void 0 === e2 && (e2 = 1), void 0 === r2 && (r2 = d), this.json = t2, this.open = e2, this.config = r2, this.key = n2, this._isOpen = null, void 0 === this.config.hoverPreviewEnabled && (this.config.hoverPreviewEnabled = d.hoverPreviewEnabled), void 0 === this.config.hoverPreviewArrayCount && (this.config.hoverPreviewArrayCount = d.hoverPreviewArrayCount), void 0 === this.config.hoverPreviewFieldCount && (this.config.hoverPreviewFieldCount = d.hoverPreviewFieldCount), void 0 === this.config.useToJSON && (this.config.useToJSON = d.useToJSON), "" === this.key && (this.key = '""');
        }
        return Object.defineProperty(c.prototype, "isOpen", { get: function() {
          return null !== this._isOpen ? this._isOpen : this.open > 0;
        }, set: function(t2) {
          this._isOpen = t2;
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "isDate", { get: function() {
          return this.json instanceof Date || "string" === this.type && (a.test(this.json) || m.test(this.json) || f.test(this.json));
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "isUrl", { get: function() {
          return "string" === this.type && 0 === this.json.indexOf("http");
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "isArray", { get: function() {
          return Array.isArray(this.json);
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "isObject", { get: function() {
          return e(this.json);
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "isEmptyObject", { get: function() {
          return !this.keys.length && !this.isArray;
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "isEmpty", { get: function() {
          return this.isEmptyObject || this.keys && !this.keys.length && this.isArray;
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "useToJSON", { get: function() {
          return this.config.useToJSON && "stringifiable" === this.type;
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "hasKey", { get: function() {
          return void 0 !== this.key;
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "constructorName", { get: function() {
          return r(this.json);
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "type", { get: function() {
          return this.config.useToJSON && this.json && this.json.toJSON ? "stringifiable" : t(this.json);
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "keys", { get: function() {
          if (this.isObject) {
            var t2 = Object.keys(this.json);
            return !this.isArray && this.config.sortPropertiesBy ? t2.sort(this.config.sortPropertiesBy) : t2;
          }
          return [];
        }, enumerable: true, configurable: true }), c.prototype.toggleOpen = function() {
          this.isOpen = !this.isOpen, this.element && (this.isOpen ? this.appendChildren(this.config.animateOpen) : this.removeChildren(this.config.animateClose), this.element.classList.toggle(i("open")));
        }, c.prototype.openAtDepth = function(t2) {
          void 0 === t2 && (t2 = 1), t2 < 0 || (this.open = t2, this.isOpen = 0 !== t2, this.element && (this.removeChildren(false), 0 === t2 ? this.element.classList.remove(i("open")) : (this.appendChildren(this.config.animateOpen), this.element.classList.add(i("open")))));
        }, c.prototype.getInlinepreview = function() {
          var t2 = this;
          if (this.isArray)
            return this.json.length > this.config.hoverPreviewArrayCount ? "Array[" + this.json.length + "]" : "[" + this.json.map(o).join(", ") + "]";
          var e2 = this.keys, r2 = e2.slice(0, this.config.hoverPreviewFieldCount).map(function(e3) {
            return e3 + ":" + o(t2.json[e3]);
          }), n2 = e2.length >= this.config.hoverPreviewFieldCount ? "\u2026" : "";
          return "{" + r2.join(", ") + n2 + "}";
        }, c.prototype.render = function() {
          this.element = s("div", "row");
          var t2 = this.isObject ? s("a", "toggler-link") : s("span");
          if (this.isObject && !this.useToJSON && t2.appendChild(s("span", "toggler")), this.hasKey && t2.appendChild(s("span", "key", this.key + ":")), this.isObject && !this.useToJSON) {
            var e2 = s("span", "value"), r2 = s("span"), o2 = s("span", "constructor-name", this.constructorName);
            if (r2.appendChild(o2), this.isArray) {
              var a2 = s("span");
              a2.appendChild(s("span", "bracket", "[")), a2.appendChild(s("span", "number", this.json.length)), a2.appendChild(s("span", "bracket", "]")), r2.appendChild(a2);
            }
            e2.appendChild(r2), t2.appendChild(e2);
          } else {
            (e2 = this.isUrl ? s("a") : s("span")).classList.add(i(this.type)), this.isDate && e2.classList.add(i("date")), this.isUrl && (e2.classList.add(i("url")), e2.setAttribute("href", this.json));
            var f2 = n(this.type, this.json, this.useToJSON ? this.json.toJSON() : this.json);
            e2.appendChild(document.createTextNode(f2)), t2.appendChild(e2);
          }
          if (this.isObject && this.config.hoverPreviewEnabled) {
            var m2 = s("span", "preview-text");
            m2.appendChild(document.createTextNode(this.getInlinepreview())), t2.appendChild(m2);
          }
          var l2 = s("div", "children");
          return this.isObject && l2.classList.add(i("object")), this.isArray && l2.classList.add(i("array")), this.isEmpty && l2.classList.add(i("empty")), this.config && this.config.theme && this.element.classList.add(i(this.config.theme)), this.isOpen && this.element.classList.add(i("open")), this.element.appendChild(t2), this.element.appendChild(l2), this.isObject && this.isOpen && this.appendChildren(), this.isObject && !this.useToJSON && t2.addEventListener("click", this.toggleOpen.bind(this)), this.element;
        }, c.prototype.appendChildren = function(t2) {
          var e2 = this;
          void 0 === t2 && (t2 = false);
          var r2 = this.element.querySelector("div." + i("children"));
          if (r2 && !this.isEmpty)
            if (t2) {
              var n2 = 0, o2 = function() {
                var t3 = e2.keys[n2], i2 = new c(e2.json[t3], e2.open - 1, e2.config, t3);
                r2.appendChild(i2.render()), (n2 += 1) < e2.keys.length && (n2 > 10 ? o2() : l(o2));
              };
              l(o2);
            } else
              this.keys.forEach(function(t3) {
                var n3 = new c(e2.json[t3], e2.open - 1, e2.config, t3);
                r2.appendChild(n3.render());
              });
        }, c.prototype.removeChildren = function(t2) {
          void 0 === t2 && (t2 = false);
          var e2 = this.element.querySelector("div." + i("children"));
          if (t2) {
            var r2 = 0, n2 = function() {
              e2 && e2.children.length && (e2.removeChild(e2.children[0]), (r2 += 1) > 10 ? n2() : l(n2));
            };
            l(n2);
          } else
            e2 && (e2.innerHTML = "");
        }, c;
      }();
    });
  }
});

// src/components/TableRow.js
var import_react4, import_json_formatter_js, import_jsx_dev_runtime2, parseJSONValue, TableRow, TableRow_default;
var init_TableRow = __esm({
  "src/components/TableRow.js"() {
    import_react4 = __toESM(require_react(), 1);
    import_json_formatter_js = __toESM(require_json_formatter_umd(), 1);
    import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
    parseJSONValue = (value, parseJSON = true) => {
      if (!parseJSON)
        return value;
      try {
        const parsedJSON = JSON.parse(value);
        return parsedJSON;
      } catch (e) {
        return value;
      }
    };
    TableRow = ({ value, overflowAllowed = true, parseJSON = true, open = 0 }) => {
      const renderRef = (0, import_react4.useRef)(null);
      (0, import_react4.useEffect)(() => {
        if (renderRef.current) {
          const formatter = new import_json_formatter_js.default(parseJSONValue(value, parseJSON), open);
          const formattedElem = formatter.render();
          renderRef.current.innerHTML = "";
          renderRef.current.appendChild(formattedElem);
        }
      }, [value, parseJSON, open]);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref: renderRef, className: overflowAllowed ? "overflow-x-auto no-scrollbar whitespace-nowrap" : "" }, void 0, false, {
        fileName: "src/components/TableRow.js",
        lineNumber: 25,
        columnNumber: 9
      }, this);
    };
    TableRow_default = import_react4.default.memo(TableRow);
  }
});

// src/components/Table.js
var import_react5, import_jsx_dev_runtime3, EditableInput, Table, Table_default;
var init_Table = __esm({
  "src/components/Table.js"() {
    import_react5 = __toESM(require_react(), 1);
    init_trash();
    init_copy();
    init_useIsMobile();
    init_TableRow();
    import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
    EditableInput = ({ value, onChange, onBlur }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "input",
      {
        type: "text",
        value,
        onChange,
        onBlur,
        className: "appearance-none bg-transparent border-none rounded w-full py-1 px-2 focus:outline-none focus:ring-1 focus:ring-slate-500"
      },
      void 0,
      false,
      {
        fileName: "src/components/Table.js",
        lineNumber: 9,
        columnNumber: 2
      },
      this
    );
    Table = ({ data, storageType, handleAddItem, handleDeleteItem, copyContent }) => {
      const [editedIndex, setEditedIndex] = (0, import_react5.useState)("");
      const [editedValue, setEditedValue] = (0, import_react5.useState)("");
      const [showActionButtons, setShowActionButtons] = (0, import_react5.useState)("");
      const [_isMobile, setIsMobile] = (0, import_react5.useState)(true);
      const [mounted, setMounted] = (0, import_react5.useState)(false);
      const isMobile = useIsMobile();
      (0, import_react5.useEffect)(() => {
        setMounted(true);
      }, []);
      (0, import_react5.useEffect)(() => {
        const scrollHandler = () => {
          if (showActionButtons !== "") {
            setShowActionButtons("");
          }
        };
        window.addEventListener("scroll", scrollHandler);
        return () => {
          window.removeEventListener("scroll", scrollHandler);
        };
      }, [showActionButtons]);
      const handleDoubleClick = (index, value) => {
        setEditedIndex(index);
        setEditedValue(value);
      };
      const handleInputBlur = (type, _key) => {
        if (type === "VALUE") {
          const oldDataIndex = data.findIndex(([key]) => key === _key);
          console.log(storageType, _key, editedValue, oldDataIndex);
          handleAddItem(storageType, _key, editedValue, { isUpdateFlow: true, updateIndex: oldDataIndex, checkDuplicateKey: false });
        } else {
          const newKey = editedValue;
          const oldDataIndex = data.findIndex(([key]) => key === _key);
          const newKeyValue = data[oldDataIndex][1];
          handleAddItem(storageType, newKey, newKeyValue, { isUpdateFlow: true, updateIndex: oldDataIndex, deleteKey: _key });
        }
        setEditedIndex("");
        setEditedValue("");
      };
      const handleInputChange = (event) => {
        setEditedValue(event.target.value);
      };
      const onRowClickHandler = (val) => {
        if (isMobile) {
          setShowActionButtons(val);
        }
      };
      const onPointerHandler = (val) => {
        if (!isMobile) {
          setShowActionButtons(val);
        }
      };
      if (!mounted)
        return null;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-auto gap-x-3 sm:gap-x-0 overflow-hidden", children: [
        data.map(([key, value]) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react5.default.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "div",
              {
                className: "border-b border-transparent sm:border-slate-200 dark:border-slate-700 p-1 sm:p-4 text-slate-500 dark:text-slate-400",
                onDoubleClick: () => handleDoubleClick(`key_${key}`, key),
                onPointerEnter: () => onPointerHandler(`${key}`),
                onPointerLeave: () => onPointerHandler(""),
                onClick: () => onRowClickHandler(`${key}`),
                children: editedIndex === `key_${key}` ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EditableInput, { autofocus: true, value: editedValue, onChange: handleInputChange, onBlur: () => handleInputBlur("KEY", key) }, void 0, false, {
                  fileName: "src/components/Table.js",
                  lineNumber: 122,
                  columnNumber: 40
                }, this) : key
              },
              void 0,
              false,
              {
                fileName: "src/components/Table.js",
                lineNumber: 115,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "div",
              {
                className: "relative border-b border-slate-200 dark:border-slate-700 mb-2 sm:mb-0 p-1 sm:p-4 text-slate-500 dark:text-slate-400 overflow-hidden",
                onDoubleClick: () => handleDoubleClick(`value_${key}`, value),
                onPointerEnter: () => onPointerHandler(`${key}`),
                onPointerLeave: () => onPointerHandler(""),
                onClick: () => onRowClickHandler(`${key}`),
                children: [
                  editedIndex === `value_${key}` ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(EditableInput, { autofocus: true, value: editedValue, onChange: handleInputChange, onBlur: () => handleInputBlur("VALUE", key) }, void 0, false, {
                    fileName: "src/components/Table.js",
                    lineNumber: 132,
                    columnNumber: 9
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow_default, { value }, void 0, false, {
                    fileName: "src/components/Table.js",
                    lineNumber: 134,
                    columnNumber: 9
                  }, this),
                  showActionButtons === `${key}` && editedIndex === "" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute bottom-1 sm:bottom-3 right-0 flex gap-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-1.5 bg-slate-200 rounded-md", onClick: () => handleDeleteItem(storageType, key), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: trash_default, width: 18, height: 18, alt: "delete row" }, void 0, false, {
                      fileName: "src/components/Table.js",
                      lineNumber: 139,
                      columnNumber: 11
                    }, this) }, void 0, false, {
                      fileName: "src/components/Table.js",
                      lineNumber: 138,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-1.5 bg-slate-200 rounded-md", onClick: () => copyContent([[key, value]]), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: copy_default, width: 17, height: 17, alt: "copy row" }, void 0, false, {
                      fileName: "src/components/Table.js",
                      lineNumber: 142,
                      columnNumber: 11
                    }, this) }, void 0, false, {
                      fileName: "src/components/Table.js",
                      lineNumber: 141,
                      columnNumber: 10
                    }, this)
                  ] }, void 0, true, {
                    fileName: "src/components/Table.js",
                    lineNumber: 137,
                    columnNumber: 9
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "src/components/Table.js",
                lineNumber: 124,
                columnNumber: 7
              },
              this
            )
          ] }, `${storageType}_${key}`, true, {
            fileName: "src/components/Table.js",
            lineNumber: 114,
            columnNumber: 6
          }, this);
        }),
        data.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-slate-500 dark:text-slate-400 text-center", children: "No Data" }, void 0, false, {
          fileName: "src/components/Table.js",
          lineNumber: 152,
          columnNumber: 6
        }, this) }, void 0, false, {
          fileName: "src/components/Table.js",
          lineNumber: 151,
          columnNumber: 5
        }, this)
      ] }, void 0, true, {
        fileName: "src/components/Table.js",
        lineNumber: 107,
        columnNumber: 3
      }, this);
    };
    Table_default = Table;
  }
});

// src/components/Input.js
var import_react6, import_jsx_dev_runtime4, Input, Input_default;
var init_Input = __esm({
  "src/components/Input.js"() {
    import_react6 = __toESM(require_react(), 1);
    import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
    Input = ({ label, type = "text", id, placeholder, name, value, onChange, ...rest }) => {
      if (type === "checkbox") {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { id, name, type: "checkbox", className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600", checked: value, onChange }, void 0, false, {
          fileName: "src/components/Input.js",
          lineNumber: 5,
          columnNumber: 10
        }, this);
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "input",
          {
            className: "peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none",
            autoComplete: "off",
            type,
            id,
            name: name || label,
            placeholder: placeholder || label,
            value,
            onChange: (e) => onChange(e.target.value),
            ...rest
          },
          void 0,
          false,
          {
            fileName: "src/components/Input.js",
            lineNumber: 9,
            columnNumber: 4
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "label",
          {
            htmlFor: id,
            className: "pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800",
            children: label
          },
          void 0,
          false,
          {
            fileName: "src/components/Input.js",
            lineNumber: 20,
            columnNumber: 4
          },
          this
        )
      ] }, void 0, true, {
        fileName: "src/components/Input.js",
        lineNumber: 8,
        columnNumber: 3
      }, this);
    };
    Input_default = Input;
  }
});

// src/components/Button.js
var import_react7, import_jsx_dev_runtime5, Button, Button_default;
var init_Button = __esm({
  "src/components/Button.js"() {
    import_react7 = __toESM(require_react(), 1);
    import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
    Button = ({ label, variant = "success", onClick }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: `px-4 py-2 font-semibold text-sm text-white rounded-md shadow-sm ${variant === "success" ? "bg-gray-700" : "bg-red-500"}`, onClick, children: label }, void 0, false, {
        fileName: "src/components/Button.js",
        lineNumber: 5,
        columnNumber: 3
      }, this);
    };
    Button_default = Button;
  }
});

// src/icons/svg/plus.svg
var plus_default;
var init_plus = __esm({
  "src/icons/svg/plus.svg"() {
    plus_default = "./plus-H3YKVWHQ.svg";
  }
});

// src/icons/svg/minus.svg
var minus_default;
var init_minus = __esm({
  "src/icons/svg/minus.svg"() {
    minus_default = "./minus-FF3RSCPW.svg";
  }
});

// src/icons/svg/carrot.svg
var carrot_default;
var init_carrot = __esm({
  "src/icons/svg/carrot.svg"() {
    carrot_default = "./carrot-T4O527PM.svg";
  }
});

// src/components/Console.js
var import_react8, import_jsx_dev_runtime6, getErrorColorClass, Console, Console_default;
var init_Console = __esm({
  "src/components/Console.js"() {
    import_react8 = __toESM(require_react(), 1);
    init_carrot();
    init_trash();
    import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
    getErrorColorClass = (error) => {
      switch (error.type) {
        case "error":
          return "text-red-500 dark:text-red-400";
        case "warn":
          return "text-amber-500 dark:text-amber-400";
        default:
          return "text-slate-500 dark:text-slate-400";
      }
    };
    Console = () => {
      const [logs, setLogs] = (0, import_react8.useState)([]);
      const [filter, setFilter] = (0, import_react8.useState)("");
      const deferredFilterValue = (0, import_react8.useDeferredValue)(filter);
      const [openSection, setOpenSection] = (0, import_react8.useState)(false);
      (0, import_react8.useEffect)(() => {
        const originalConsole = window.console;
        window.console = {
          ...originalConsole,
          log: (...args) => {
            originalConsole.log(...args);
            setLogs((logs2) => [...logs2, { type: "log", message: args }]);
          },
          warn: (...args) => {
            originalConsole.warn(...args);
            setLogs((logs2) => [...logs2, { type: "warn", message: args }]);
          },
          error: (...args) => {
            originalConsole.error(...args);
            setLogs((logs2) => [...logs2, { type: "error", message: args }]);
          }
        };
        return () => {
          window.console = originalConsole;
        };
      }, []);
      const handleFilterChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setFilter(e.target.value);
      };
      const filteredLogs = (0, import_react8.useMemo)(
        () => logs.filter((log) => {
          const message = log.message.join(" ");
          return message.toLowerCase().includes(deferredFilterValue.toLowerCase());
        }),
        [deferredFilterValue, logs]
      );
      return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "details",
        {
          className: "group",
          open: openSection,
          onToggle: (e) => {
            setOpenSection(e.target.open);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("summary", { className: "flex cursor-pointer list-none items-center justify-between font-medium", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-lg font-medium", children: "Console" }, void 0, false, {
                fileName: "src/components/Console.js",
                lineNumber: 74,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-1 mx-1 sm:mx-3 gap-2 items-center justify-between", children: openSection && filteredLogs.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    placeholder: "Filter logs...",
                    value: filter,
                    onChange: handleFilterChange,
                    className: "appearance-none bg-slate-100 border-none text-slate-500 dark:text-slate-400 rounded-md mt-2 py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-slate-500"
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/components/Console.js",
                    lineNumber: 78,
                    columnNumber: 8
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  "div",
                  {
                    className: "p-1.5 mt-1.5 hover:bg-slate-200 rounded-md",
                    onClick: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.clear();
                      setLogs([]);
                    },
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: trash_default, width: 24, height: 24, alt: "clear console" }, void 0, false, {
                      fileName: "src/components/Console.js",
                      lineNumber: 94,
                      columnNumber: 9
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/components/Console.js",
                    lineNumber: 85,
                    columnNumber: 8
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "src/components/Console.js",
                lineNumber: 77,
                columnNumber: 7
              }, this) }, void 0, false, {
                fileName: "src/components/Console.js",
                lineNumber: 75,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "transition group-open:rotate-180", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: carrot_default, width: 24, height: 24, alt: "open icon" }, void 0, false, {
                fileName: "src/components/Console.js",
                lineNumber: 100,
                columnNumber: 6
              }, this) }, void 0, false, {
                fileName: "src/components/Console.js",
                lineNumber: 99,
                columnNumber: 5
              }, this)
            ] }, void 0, true, {
              fileName: "src/components/Console.js",
              lineNumber: 73,
              columnNumber: 4
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "group-open:animate-fadeIn mt-3 text-neutral-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "divide-y divide-gray-700", children: filteredLogs.map((log, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: `py-2 ${getErrorColorClass(log)}`, children: log.message.map((part, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "span",
              {
                className: "break-words",
                children: part.toString()
              },
              index2,
              false,
              {
                fileName: "src/components/Console.js",
                lineNumber: 108,
                columnNumber: 9
              },
              this
            )) }, index, false, {
              fileName: "src/components/Console.js",
              lineNumber: 106,
              columnNumber: 7
            }, this)) }, void 0, false, {
              fileName: "src/components/Console.js",
              lineNumber: 104,
              columnNumber: 5
            }, this) }, void 0, false, {
              fileName: "src/components/Console.js",
              lineNumber: 103,
              columnNumber: 4
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "src/components/Console.js",
          lineNumber: 66,
          columnNumber: 3
        },
        this
      );
    };
    Console_default = Console;
  }
});

// src/components/ObjectViewer.js
function ObjectViewer({ data }) {
  const [isOpen, setIsOpen] = (0, import_react9.useState)({});
  const toggleOpen = (key) => {
    setIsOpen((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };
  const renderData = (data2) => {
    if (typeof data2 !== "object" || data2 === null) {
      return data2;
    }
    if (Array.isArray(data2)) {
      return data2.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ml-4", children: renderData(item) }, index, false, {
        fileName: "src/components/ObjectViewer.js",
        lineNumber: 17,
        columnNumber: 5
      }, this));
    }
    return Object.entries(data2).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
      typeof value === "object" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { onClick: () => toggleOpen(key), className: "cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "mr-1", children: isOpen[key] ? "\u25B8" : "\u25BE" }, void 0, false, {
          fileName: "src/components/ObjectViewer.js",
          lineNumber: 27,
          columnNumber: 7
        }, this),
        key
      ] }, void 0, true, {
        fileName: "src/components/ObjectViewer.js",
        lineNumber: 26,
        columnNumber: 6
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        key,
        ":",
        "  ",
        value
      ] }, void 0, true, {
        fileName: "src/components/ObjectViewer.js",
        lineNumber: 31,
        columnNumber: 6
      }, this),
      isOpen[key] && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ml-4", children: renderData(value) }, void 0, false, {
        fileName: "src/components/ObjectViewer.js",
        lineNumber: 36,
        columnNumber: 21
      }, this)
    ] }, key, true, {
      fileName: "src/components/ObjectViewer.js",
      lineNumber: 24,
      columnNumber: 4
    }, this));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: renderData(data) }, void 0, false, {
    fileName: "src/components/ObjectViewer.js",
    lineNumber: 41,
    columnNumber: 9
  }, this);
}
var import_react9, import_jsx_dev_runtime7, ObjectViewer_default;
var init_ObjectViewer = __esm({
  "src/components/ObjectViewer.js"() {
    import_react9 = __toESM(require_react(), 1);
    import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
    ObjectViewer_default = ObjectViewer;
  }
});

// src/components/Network.js
var import_react10, import_jsx_dev_runtime8, Network;
var init_Network = __esm({
  "src/components/Network.js"() {
    import_react10 = __toESM(require_react(), 1);
    init_NetworkContext();
    init_carrot();
    init_trash();
    init_ObjectViewer();
    import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
    Network = () => {
      const { networkRequests, clearNetworkRequests } = useNetworkContext();
      const [openSection, setOpenSection] = (0, import_react10.useState)(false);
      const [filter, setFilter] = (0, import_react10.useState)("");
      const deferredFilterValue = (0, import_react10.useDeferredValue)(filter);
      const handleFilterChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setFilter(e.target.value);
      };
      const filteredNetworkRequests = (0, import_react10.useMemo)(() => {
        return networkRequests.filter(({ request }) => request.url.includes(deferredFilterValue.toLowerCase()));
      }, [deferredFilterValue, networkRequests]);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "details",
        {
          className: "group",
          open: openSection,
          onToggle: (e) => {
            setOpenSection(e.target.open);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("summary", { className: "flex cursor-pointer list-none items-center justify-between font-medium", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-lg font-medium", children: "Network" }, void 0, false, {
                fileName: "src/components/Network.js",
                lineNumber: 33,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-1 mx-1 sm:mx-3 gap-2 items-center justify-between", children: openSection && filteredNetworkRequests.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    placeholder: "Filter requests...",
                    value: filter,
                    onChange: handleFilterChange,
                    className: "appearance-none bg-slate-100 border-none text-slate-500 dark:text-slate-400 rounded-md mt-2 py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-slate-500"
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/components/Network.js",
                    lineNumber: 37,
                    columnNumber: 8
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                  "div",
                  {
                    className: "p-1.5 mt-1.5 hover:bg-slate-200 rounded-md",
                    onClick: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      clearNetworkRequests();
                      setOpenSection(false);
                    },
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: trash_default, width: 24, height: 24, alt: "clear console" }, void 0, false, {
                      fileName: "src/components/Network.js",
                      lineNumber: 53,
                      columnNumber: 9
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/components/Network.js",
                    lineNumber: 44,
                    columnNumber: 8
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "src/components/Network.js",
                lineNumber: 36,
                columnNumber: 7
              }, this) }, void 0, false, {
                fileName: "src/components/Network.js",
                lineNumber: 34,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "transition group-open:rotate-180", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: carrot_default, width: 24, height: 24, alt: "open icon" }, void 0, false, {
                fileName: "src/components/Network.js",
                lineNumber: 59,
                columnNumber: 6
              }, this) }, void 0, false, {
                fileName: "src/components/Network.js",
                lineNumber: 58,
                columnNumber: 5
              }, this)
            ] }, void 0, true, {
              fileName: "src/components/Network.js",
              lineNumber: 32,
              columnNumber: 4
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "group-open:animate-fadeIn mt-3 text-neutral-600 -mx-4", children: filteredNetworkRequests.map((request, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: `px-4 py-2 ${index % 2 === 0 ? "bg-slate-100" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ObjectViewer_default, { data: request }, void 0, false, {
              fileName: "src/components/Network.js",
              lineNumber: 65,
              columnNumber: 7
            }, this) }, index, false, {
              fileName: "src/components/Network.js",
              lineNumber: 64,
              columnNumber: 6
            }, this)) }, void 0, false, {
              fileName: "src/components/Network.js",
              lineNumber: 62,
              columnNumber: 4
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "src/components/Network.js",
          lineNumber: 25,
          columnNumber: 3
        },
        this
      );
    };
  }
});

// src/components/Storage.js
var Storage_exports = {};
__export(Storage_exports, {
  default: () => Storage_default
});
function arrayToJSON(arr) {
  return arr.reduce((obj, item) => {
    obj[item[0]] = item[1];
    return obj;
  }, {});
}
var import_react11, import_jsx_dev_runtime9, parseCookies, RenderImage, Storage, Storage_default;
var init_Storage = __esm({
  "src/components/Storage.js"() {
    import_react11 = __toESM(require_react(), 1);
    init_Table();
    init_Input();
    init_Button();
    init_plus();
    init_minus();
    init_trash();
    init_copy();
    init_carrot();
    init_Console();
    init_Network();
    import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
    parseCookies = () => {
      const parsedCookies = {};
      if (document.cookie) {
        const cookies = document.cookie.split("; ");
        cookies.forEach((cookie) => {
          const [key, value] = cookie.split("=");
          parsedCookies[key] = value;
        });
      }
      return Object.entries(parsedCookies);
    };
    RenderImage = ({
      src,
      width = 22,
      height = 22,
      alt = "image description",
      onClick
    }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "div",
        {
          className: "p-1.5 hover:bg-slate-200 rounded-md",
          onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();
            onClick();
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src, width, height, alt }, void 0, false, {
            fileName: "src/components/Storage.js",
            lineNumber: 49,
            columnNumber: 7
          }, this)
        },
        void 0,
        false,
        {
          fileName: "src/components/Storage.js",
          lineNumber: 41,
          columnNumber: 5
        },
        this
      );
    };
    Storage = () => {
      const [localStorageItems, setLocalStorageItems] = (0, import_react11.useState)(
        Object.entries(localStorage)
      );
      const [sessionStorageItems, setSessionStorageItems] = (0, import_react11.useState)(
        Object.entries(sessionStorage)
      );
      const [cookieItems, setCookieItems] = (0, import_react11.useState)(parseCookies());
      const [newLocalKey, setNewLocalKey] = (0, import_react11.useState)("");
      const [newLocalValue, setNewLocalValue] = (0, import_react11.useState)("");
      const [newSessionKey, setNewSessionKey] = (0, import_react11.useState)("");
      const [newSessionValue, setNewSessionValue] = (0, import_react11.useState)("");
      const [newCookieKey, setNewCookieKey] = (0, import_react11.useState)("");
      const [newCookieValue, setNewCookieValue] = (0, import_react11.useState)("");
      const [openSection, setOpenSection] = (0, import_react11.useState)([true, false, false]);
      const [openAddItem, setOpenAddItem] = (0, import_react11.useState)([false, false, false]);
      const handleAddItem = (storageType, _key, _value, extras = {}) => {
        const {
          isUpdateFlow = false,
          updateIndex,
          checkDuplicateKey = true,
          deleteKey
        } = extras;
        if (!_key || !_value)
          return;
        const storageItems = storageType === "localStorage" ? localStorageItems : sessionStorageItems;
        if (checkDuplicateKey && storageItems.some(([key]) => key === _key)) {
          return;
        }
        const updatedItems = [...storageItems];
        if (updateIndex !== void 0) {
          updatedItems[updateIndex] = [_key, _value];
        } else {
          updatedItems.push([_key, _value]);
        }
        if (storageType === "localStorage") {
          localStorage.setItem(_key, _value);
          if (deleteKey)
            localStorage.removeItem(deleteKey);
          setLocalStorageItems([...updatedItems]);
          if (!isUpdateFlow) {
            setNewLocalKey("");
            setNewLocalValue("");
            openAddItemHandler(0);
          }
        } else {
          sessionStorage.setItem(_key, _value);
          if (deleteKey)
            sessionStorage.removeItem(deleteKey);
          setSessionStorageItems([...updatedItems]);
          if (!isUpdateFlow) {
            setNewSessionKey("");
            setNewSessionValue("");
            openAddItemHandler(1);
          }
        }
      };
      const handleDeleteItem = (storageType, key) => {
        if (storageType === "localStorage") {
          localStorage.removeItem(key);
          setLocalStorageItems(localStorageItems.filter(([k]) => k !== key));
        } else {
          sessionStorage.removeItem(key);
          setSessionStorageItems(sessionStorageItems.filter(([k]) => k !== key));
        }
      };
      const handleClearAll = (storageType) => {
        if (storageType === "localStorage") {
          localStorage.clear();
          setLocalStorageItems([]);
        } else {
          sessionStorage.clear();
          setSessionStorageItems([]);
        }
      };
      const handleAddCookie = (_, _key, _value, extras = {}) => {
        const { isUpdateFlow = false, updateIndex, deleteKey } = extras;
        document.cookie = `${_key}=${_value}`;
        const updatedItems = [...cookieItems];
        if (updateIndex !== void 0) {
          updatedItems[updateIndex] = [_key, _value];
        } else {
          updatedItems.push([_key, _value]);
        }
        if (deleteKey)
          document.cookie = `${deleteKey}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        setCookieItems([...updatedItems]);
        if (!isUpdateFlow) {
          setNewCookieKey("");
          setNewCookieValue("");
          openAddItemHandler(2);
        }
      };
      const handleDeleteCookie = (_, key) => {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        setCookieItems(cookieItems.filter(([k]) => k !== key));
      };
      const handleClearAllCookies = () => {
        document.cookie.split(";").forEach((c) => {
          document.cookie = c.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
        });
        setCookieItems([]);
      };
      const openSectionHandler = (index, openState) => {
        if (openState !== openSection[index]) {
          setOpenSection((state) => {
            const updatedState = [...state];
            updatedState[index] = openState;
            return updatedState;
          });
        }
      };
      const openAddItemHandler = (index) => {
        setOpenAddItem((state) => {
          const updatedState = [...state];
          updatedState[index] = !state[index];
          return updatedState;
        });
      };
      const copyContent = async (text) => {
        const json = arrayToJSON(text);
        try {
          await navigator.clipboard.writeText(json);
          console.warn("text copied: ", text);
        } catch (err) {
          console.error("Failed to copy: ", err);
        }
      };
      return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "grid grid-cols-1 divide-y divide-neutral-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "details",
          {
            className: "group",
            open: openSection[0],
            onToggle: (e) => {
              openSectionHandler(0, e.target.open);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("summary", { className: "flex cursor-pointer list-none items-center justify-between font-medium", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex gap-3 items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-lg font-medium", children: "Local Storage" }, void 0, false, {
                    fileName: "src/components/Storage.js",
                    lineNumber: 218,
                    columnNumber: 15
                  }, this),
                  openSection[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                      RenderImage,
                      {
                        src: openAddItem[0] ? minus_default : plus_default,
                        width: 24,
                        height: 24,
                        alt: "add item",
                        onClick: () => openAddItemHandler(0)
                      },
                      void 0,
                      false,
                      {
                        fileName: "src/components/Storage.js",
                        lineNumber: 221,
                        columnNumber: 19
                      },
                      this
                    ),
                    localStorageItems.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        RenderImage,
                        {
                          src: trash_default,
                          width: 22,
                          height: 22,
                          alt: "clear all",
                          onClick: () => handleClearAll("localStorage")
                        },
                        void 0,
                        false,
                        {
                          fileName: "src/components/Storage.js",
                          lineNumber: 230,
                          columnNumber: 23
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        RenderImage,
                        {
                          src: copy_default,
                          width: 22,
                          height: 22,
                          alt: "copy all",
                          onClick: () => copyContent(localStorageItems)
                        },
                        void 0,
                        false,
                        {
                          fileName: "src/components/Storage.js",
                          lineNumber: 237,
                          columnNumber: 23
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "src/components/Storage.js",
                      lineNumber: 229,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "src/components/Storage.js",
                    lineNumber: 220,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/components/Storage.js",
                  lineNumber: 217,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "transition group-open:rotate-180", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  RenderImage,
                  {
                    src: carrot_default,
                    width: 24,
                    height: 24,
                    alt: "open icon"
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/components/Storage.js",
                    lineNumber: 250,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, false, {
                  fileName: "src/components/Storage.js",
                  lineNumber: 249,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "src/components/Storage.js",
                lineNumber: 216,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "group-open:animate-fadeIn mt-3 text-neutral-600", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  Table_default,
                  {
                    data: localStorageItems,
                    storageType: "localStorage",
                    handleAddItem,
                    handleDeleteItem,
                    copyContent
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/components/Storage.js",
                    lineNumber: 259,
                    columnNumber: 13
                  },
                  this
                ),
                openAddItem[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  "form",
                  {
                    onSubmit: (e) => {
                      e.preventDefault();
                      handleAddItem("localStorage", newLocalKey, newLocalValue);
                    },
                    "data-storage-type": "localStorage",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-3 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-7", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sm:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        Input_default,
                        {
                          id: "localKey",
                          label: "Key",
                          placeholder: "Key",
                          name: "key",
                          value: newLocalKey,
                          onChange: setNewLocalKey
                        },
                        void 0,
                        false,
                        {
                          fileName: "src/components/Storage.js",
                          lineNumber: 276,
                          columnNumber: 21
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "src/components/Storage.js",
                        lineNumber: 275,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sm:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        Input_default,
                        {
                          id: "localValue",
                          label: "Value",
                          placeholder: "Value",
                          name: "value",
                          value: newLocalValue,
                          onChange: setNewLocalValue
                        },
                        void 0,
                        false,
                        {
                          fileName: "src/components/Storage.js",
                          lineNumber: 286,
                          columnNumber: 21
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "src/components/Storage.js",
                        lineNumber: 285,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sm:col-span-1 flex justify-center sm:justify-start sm:items-end sm:pb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button_default, { label: "Add" }, void 0, false, {
                        fileName: "src/components/Storage.js",
                        lineNumber: 296,
                        columnNumber: 21
                      }, this) }, void 0, false, {
                        fileName: "src/components/Storage.js",
                        lineNumber: 295,
                        columnNumber: 19
                      }, this)
                    ] }, void 0, true, {
                      fileName: "src/components/Storage.js",
                      lineNumber: 274,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/components/Storage.js",
                    lineNumber: 267,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "src/components/Storage.js",
                lineNumber: 258,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "src/components/Storage.js",
            lineNumber: 209,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "src/components/Storage.js",
          lineNumber: 208,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "details",
          {
            className: "group",
            open: openSection[1],
            onToggle: (e) => {
              openSectionHandler(1, e.target.open);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("summary", { className: "flex cursor-pointer list-none items-center justify-between font-medium", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex gap-3 items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-lg font-medium", children: "Session Storage" }, void 0, false, {
                    fileName: "src/components/Storage.js",
                    lineNumber: 314,
                    columnNumber: 15
                  }, this),
                  openSection[1] && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                      RenderImage,
                      {
                        src: openAddItem[1] ? minus_default : plus_default,
                        width: 24,
                        height: 24,
                        alt: "add item",
                        onClick: () => openAddItemHandler(1)
                      },
                      void 0,
                      false,
                      {
                        fileName: "src/components/Storage.js",
                        lineNumber: 317,
                        columnNumber: 19
                      },
                      this
                    ),
                    sessionStorageItems.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        RenderImage,
                        {
                          src: trash_default,
                          width: 22,
                          height: 22,
                          alt: "clear all",
                          onClick: () => handleClearAll("sessionStorage")
                        },
                        void 0,
                        false,
                        {
                          fileName: "src/components/Storage.js",
                          lineNumber: 326,
                          columnNumber: 23
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        RenderImage,
                        {
                          src: copy_default,
                          width: 22,
                          height: 22,
                          alt: "copy all",
                          onClick: () => copyContent(sessionStorageItems)
                        },
                        void 0,
                        false,
                        {
                          fileName: "src/components/Storage.js",
                          lineNumber: 333,
                          columnNumber: 23
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "src/components/Storage.js",
                      lineNumber: 325,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "src/components/Storage.js",
                    lineNumber: 316,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/components/Storage.js",
                  lineNumber: 313,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "transition group-open:rotate-180", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  RenderImage,
                  {
                    src: carrot_default,
                    width: 24,
                    height: 24,
                    alt: "open icon",
                    onClick: () => openSectionHandler(1)
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/components/Storage.js",
                    lineNumber: 346,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, false, {
                  fileName: "src/components/Storage.js",
                  lineNumber: 345,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "src/components/Storage.js",
                lineNumber: 312,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "group-open:animate-fadeIn mt-3 text-neutral-600", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  Table_default,
                  {
                    data: sessionStorageItems,
                    storageType: "sessionStorage",
                    handleAddItem,
                    handleDeleteItem,
                    copyContent
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/components/Storage.js",
                    lineNumber: 356,
                    columnNumber: 13
                  },
                  this
                ),
                openAddItem[1] && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  "form",
                  {
                    onSubmit: (e) => {
                      e.preventDefault();
                      handleAddItem(
                        "sessionStorage",
                        newSessionKey,
                        newSessionValue
                      );
                    },
                    "data-storage-type": "sessionStorage",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-3 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-7", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sm:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        Input_default,
                        {
                          id: "sessionKey",
                          label: "Key",
                          placeholder: "Key",
                          name: "key",
                          value: newSessionKey,
                          onChange: setNewSessionKey
                        },
                        void 0,
                        false,
                        {
                          fileName: "src/components/Storage.js",
                          lineNumber: 377,
                          columnNumber: 21
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "src/components/Storage.js",
                        lineNumber: 376,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sm:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        Input_default,
                        {
                          id: "sessionValue",
                          label: "Value",
                          placeholder: "Value",
                          name: "value",
                          value: newSessionValue,
                          onChange: setNewSessionValue
                        },
                        void 0,
                        false,
                        {
                          fileName: "src/components/Storage.js",
                          lineNumber: 387,
                          columnNumber: 21
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "src/components/Storage.js",
                        lineNumber: 386,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sm:col-span-1 flex justify-center sm:justify-start sm:items-end sm:pb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button_default, { label: "Add" }, void 0, false, {
                        fileName: "src/components/Storage.js",
                        lineNumber: 397,
                        columnNumber: 21
                      }, this) }, void 0, false, {
                        fileName: "src/components/Storage.js",
                        lineNumber: 396,
                        columnNumber: 19
                      }, this)
                    ] }, void 0, true, {
                      fileName: "src/components/Storage.js",
                      lineNumber: 375,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/components/Storage.js",
                    lineNumber: 364,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "src/components/Storage.js",
                lineNumber: 355,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "src/components/Storage.js",
            lineNumber: 305,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "src/components/Storage.js",
          lineNumber: 304,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "details",
          {
            className: "group",
            open: openSection[2],
            onToggle: (e) => {
              openSectionHandler(2, e.target.open);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("summary", { className: "flex cursor-pointer list-none items-center justify-between font-medium", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex gap-3 items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-lg font-medium", children: "Cookies" }, void 0, false, {
                    fileName: "src/components/Storage.js",
                    lineNumber: 415,
                    columnNumber: 15
                  }, this),
                  openSection[2] && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                      RenderImage,
                      {
                        src: openAddItem[2] ? minus_default : plus_default,
                        width: 24,
                        height: 24,
                        alt: "add item",
                        onClick: () => openAddItemHandler(2)
                      },
                      void 0,
                      false,
                      {
                        fileName: "src/components/Storage.js",
                        lineNumber: 418,
                        columnNumber: 19
                      },
                      this
                    ),
                    cookieItems.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        RenderImage,
                        {
                          src: trash_default,
                          width: 22,
                          height: 22,
                          alt: "clear all",
                          onClick: () => handleClearAllCookies()
                        },
                        void 0,
                        false,
                        {
                          fileName: "src/components/Storage.js",
                          lineNumber: 427,
                          columnNumber: 23
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        RenderImage,
                        {
                          src: copy_default,
                          width: 22,
                          height: 22,
                          alt: "copy all",
                          onClick: () => copyContent(cookieItems)
                        },
                        void 0,
                        false,
                        {
                          fileName: "src/components/Storage.js",
                          lineNumber: 434,
                          columnNumber: 23
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "src/components/Storage.js",
                      lineNumber: 426,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "src/components/Storage.js",
                    lineNumber: 417,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/components/Storage.js",
                  lineNumber: 414,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "transition group-open:rotate-180", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  RenderImage,
                  {
                    src: carrot_default,
                    width: 24,
                    height: 24,
                    alt: "open icon",
                    onClick: () => openSectionHandler(2)
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/components/Storage.js",
                    lineNumber: 447,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, false, {
                  fileName: "src/components/Storage.js",
                  lineNumber: 446,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "src/components/Storage.js",
                lineNumber: 413,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "group-open:animate-fadeIn mt-3 text-neutral-600", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  Table_default,
                  {
                    data: cookieItems,
                    storageType: "cookie",
                    handleAddItem: handleAddCookie,
                    handleDeleteItem: handleDeleteCookie,
                    copyContent
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/components/Storage.js",
                    lineNumber: 457,
                    columnNumber: 13
                  },
                  this
                ),
                openAddItem[2] && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  "form",
                  {
                    onSubmit: (e) => {
                      e.preventDefault();
                      handleAddCookie("cookie", newCookieKey, newCookieValue);
                    },
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-3 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-7", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sm:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        Input_default,
                        {
                          autofocus: true,
                          id: "cookieKey",
                          label: "Key",
                          placeholder: "Key",
                          name: "key",
                          value: newCookieKey,
                          onChange: setNewCookieKey
                        },
                        void 0,
                        false,
                        {
                          fileName: "src/components/Storage.js",
                          lineNumber: 473,
                          columnNumber: 21
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "src/components/Storage.js",
                        lineNumber: 472,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sm:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        Input_default,
                        {
                          id: "cookieValue",
                          label: "Value",
                          placeholder: "Value",
                          name: "value",
                          value: newCookieValue,
                          onChange: setNewCookieValue
                        },
                        void 0,
                        false,
                        {
                          fileName: "src/components/Storage.js",
                          lineNumber: 484,
                          columnNumber: 21
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "src/components/Storage.js",
                        lineNumber: 483,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sm:col-span-1 flex justify-center sm:justify-start sm:items-end sm:pb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button_default, { label: "Add" }, void 0, false, {
                        fileName: "src/components/Storage.js",
                        lineNumber: 494,
                        columnNumber: 21
                      }, this) }, void 0, false, {
                        fileName: "src/components/Storage.js",
                        lineNumber: 493,
                        columnNumber: 19
                      }, this)
                    ] }, void 0, true, {
                      fileName: "src/components/Storage.js",
                      lineNumber: 471,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/components/Storage.js",
                    lineNumber: 465,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "src/components/Storage.js",
                lineNumber: 456,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "src/components/Storage.js",
            lineNumber: 406,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "src/components/Storage.js",
          lineNumber: 405,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Console_default, {}, void 0, false, {
          fileName: "src/components/Storage.js",
          lineNumber: 503,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "src/components/Storage.js",
          lineNumber: 502,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Network, {}, void 0, false, {
          fileName: "src/components/Storage.js",
          lineNumber: 506,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "src/components/Storage.js",
          lineNumber: 505,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "src/components/Storage.js",
        lineNumber: 207,
        columnNumber: 5
      }, this);
    };
    Storage_default = Storage;
  }
});

// src/context/NetworkProvider.js
var import_react13 = __toESM(require_react(), 1);
init_NetworkContext();

// src/components/HOC/withNetworkLogger.js
var import_react2 = __toESM(require_react(), 1);
init_NetworkContext();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var withNetworkLogger = (WrappedComponent2) => {
  const NetworkLogger = (props) => {
    const [requests, setRequests] = (0, import_react2.useState)(/* @__PURE__ */ new Map());
    const { addNetworkRequest } = useNetworkContext();
    const handleNetworkResponse = (0, import_react2.useCallback)(
      async (response) => {
        try {
          let request = null;
          if (response instanceof Response) {
            const { url, method, body, startTime } = requests.keys().next().value;
            request = { url, method, body, startTime };
          } else {
            request = Array.from(requests.keys()).find((r) => {
              var _a;
              return r.url === response.url && r.method === ((_a = response.request) == null ? void 0 : _a.method);
            });
          }
          if (request) {
            const timeElapsed = `${Date.now() - request.startTime} ms`;
            const responseData = {
              status: response ? response.status : null,
              statusText: response ? response.statusText : null,
              headers: response ? [...response.headers].reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {}) : null
            };
            const contentType = responseData.headers ? responseData.headers["content-type"] : "";
            if (contentType && contentType.includes("application/json")) {
              responseData.body = response ? await response.json() : null;
            } else {
              responseData.body = response ? await response.text() : null;
            }
            addNetworkRequest({ request, response: responseData, timeElapsed });
            setRequests((prevRequests) => {
              const updatedRequests = new Map(prevRequests);
              updatedRequests.set(request, { response: responseData, timeElapsed });
              return updatedRequests;
            });
          }
        } catch (error) {
          console.log("erer", error);
          throw error;
        }
      },
      [requests, addNetworkRequest]
    );
    (0, import_react2.useEffect)(() => {
      const originalFetch = window.fetch;
      const handleResponse = (response) => {
        const clonedResponse = response.clone();
        handleNetworkResponse(clonedResponse);
        return response;
      };
      const fetchWithContext = window.fetch.bind(window);
      window.fetch = (...args) => {
        console.log(args);
        const [url, options] = args;
        const startTime = Date.now();
        const request = {
          method: options && options.method ? options.method : "GET",
          url,
          body: options && options.body ? options.body : null,
          startTime
        };
        setRequests((prevRequests) => new Map(prevRequests.set(request, null)));
        return fetchWithContext(url, options).then(handleResponse).catch((error) => {
          console.log("error", error);
          handleNetworkResponse(error);
          throw error;
        });
      };
      const originalSend = window.XMLHttpRequest.prototype.send;
      const handleXmlHttpRequest = (xhr, body) => {
        const method = xhr._method ? xhr._method : "GET";
        const url = xhr._url ? xhr._url : window.location.href;
        const startTime = Date.now();
        const request = {
          method,
          url,
          body: JSON.parse(body),
          startTime
        };
        setRequests((prevRequests) => new Map(prevRequests.set(request, null)));
        xhr.addEventListener("load", () => {
          const xhrHeadersString = xhr.getAllResponseHeaders();
          const xhrHeadersArray = xhrHeadersString.split("\r\n").filter(Boolean);
          const fetchHeaders = [];
          xhrHeadersArray.forEach(function(line) {
            const parts = line.split(": ");
            const name = parts.shift().trim();
            const value = parts.join(": ").trim();
            fetchHeaders.push([name, value]);
          });
          const response = {
            status: xhr.status,
            statusText: xhr.statusText,
            url,
            ok: xhr.status >= 200 && xhr.status < 300,
            headers: fetchHeaders,
            request,
            json: async () => JSON.parse(xhr.response),
            text: async () => xhr.responseText
          };
          handleNetworkResponse(response);
        });
        xhr.addEventListener("error", () => {
          const error = new Error("Network error");
          error.request = xhr;
          handleNetworkResponse(error);
        });
        originalSend.apply(xhr, [body]);
      };
      window.XMLHttpRequest.prototype.send = function(body = null) {
        this._url = this._url || window.location.href;
        this._method = this._method || "GET";
        handleXmlHttpRequest(this, body);
      };
      return () => {
        window.fetch = originalFetch;
        window.XMLHttpRequest.prototype.send = originalSend;
      };
    }, [handleNetworkResponse]);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrappedComponent2, { ...props, requests }, void 0, false, {
      fileName: "src/components/HOC/withNetworkLogger.js",
      lineNumber: 140,
      columnNumber: 10
    }, this);
  };
  return NetworkLogger;
};
var withNetworkLogger_default = withNetworkLogger;

// src/icons/svg/cross.svg
var cross_default = "./cross-3BXOZD2Y.svg";

// src/icons/svg/settings.svg
var settings_default = "./settings-M6M5BOOZ.svg";

// src/components/DebugOverlay.js
var import_react12 = __toESM(require_react(), 1);
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
function DebugOverlay() {
  const [mounted, setMounted] = (0, import_react12.useState)(false);
  const [openPopup, setOpenPopup] = (0, import_react12.useState)(false);
  const [storageComponent, setStorageComponent] = (0, import_react12.useState)(null);
  (0, import_react12.useEffect)(() => {
    setMounted(true);
  }, []);
  const loadStorageComponent = async () => {
    console.log("window", window);
    if (!storageComponent) {
      const { default: StorageComponent } = await Promise.resolve().then(() => (init_Storage(), Storage_exports));
      setStorageComponent(/* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(StorageComponent, {}, void 0, false, {
        fileName: "src/components/DebugOverlay.js",
        lineNumber: 21,
        columnNumber: 24
      }, this));
    }
    setOpenPopup(true);
  };
  if (!mounted)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.default.Fragment, {}, void 0, false, {
      fileName: "src/components/DebugOverlay.js",
      lineNumber: 26,
      columnNumber: 23
    }, this);
  return openPopup ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.default.Fragment, {}, void 0, false, {
    fileName: "src/components/DebugOverlay.js",
    lineNumber: 29,
    columnNumber: 23
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "fixed bottom-0 max-h-mobile sm:max-h-[calc(100vh-theme(space.8))] overflow-auto no-scrollbar right-0 w-mobile sm:w-1/2 sm:m-4 bg-white shadow-xl rounded-lg z-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "sticky top-0 z-10 text-center bg-white/50 backdrop-blur py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-xl font-medium", children: "App Settings1" }, void 0, false, {
        fileName: "src/components/DebugOverlay.js",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "img",
        {
          className: "absolute top-0.5 right-4",
          src: cross_default,
          width: 24,
          height: 24,
          alt: "Open popup icon",
          onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpenPopup(false);
          }
        },
        void 0,
        false,
        {
          fileName: "src/components/DebugOverlay.js",
          lineNumber: 34,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, true, {
      fileName: "src/components/DebugOverlay.js",
      lineNumber: 32,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "src/components/DebugOverlay.js",
      lineNumber: 31,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "px-4 pb-4", children: storageComponent }, void 0, false, {
      fileName: "src/components/DebugOverlay.js",
      lineNumber: 48,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "src/components/DebugOverlay.js",
    lineNumber: 30,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "src/components/DebugOverlay.js",
    lineNumber: 29,
    columnNumber: 3
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "fixed bottom-0 right-0 m-5 z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: settings_default, width: 24, height: 24, alt: "Open popup icon", onClick: loadStorageComponent }, void 0, false, {
    fileName: "src/components/DebugOverlay.js",
    lineNumber: 53,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "src/components/DebugOverlay.js",
    lineNumber: 52,
    columnNumber: 3
  }, this);
}
var DebugOverlay_default = DebugOverlay;

// src/context/NetworkProvider.js
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
var Child = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DebugOverlay_default, {}, void 0, false, {
    fileName: "src/context/NetworkProvider.js",
    lineNumber: 10,
    columnNumber: 3
  }, this),
  children
] }, void 0, true, {
  fileName: "src/context/NetworkProvider.js",
  lineNumber: 9,
  columnNumber: 2
}, this);
var WrappedComponent = withNetworkLogger_default(Child);
var NetworkProvider = ({ children }) => {
  const [networkRequests, setNetworkRequests] = (0, import_react13.useState)([]);
  const addNetworkRequest = (0, import_react13.useCallback)((request) => {
    setNetworkRequests((prevNetworkRequests) => [...prevNetworkRequests, request]);
  }, []);
  const clearNetworkRequests = (0, import_react13.useCallback)(() => {
    setNetworkRequests([]);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(NetworkContext.Provider, { value: { networkRequests, addNetworkRequest, clearNetworkRequests }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(WrappedComponent, { children }, void 0, false, {
    fileName: "src/context/NetworkProvider.js",
    lineNumber: 30,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "src/context/NetworkProvider.js",
    lineNumber: 29,
    columnNumber: 3
  }, this);
};
export {
  NetworkProvider
};
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-dev-runtime.development.js:
  (**
   * @license React
   * react-jsx-dev-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.mjs.map

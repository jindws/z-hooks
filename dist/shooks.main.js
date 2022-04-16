var $8M2gN$react = require("react");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $fa170128f8c97660$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useMap", function () { return $80e8dff17c106379$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useSet", function () { return $d0040752fbf3c017$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useBoolean", function () { return $a58f74a897fd5b17$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useLocalStorage", function () { return $2047587efc98bb27$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useSessionStorage", function () { return $33b1bdcef4bd88f3$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useDebounce", function () { return $637db389d5c4f3e8$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "useDebounceValue", function () { return $5c27c88268695acc$export$2e2bcd8739ae039; });

function $80e8dff17c106379$var$useMap(init) {
    var intiData = $8M2gN$react.useMemo(function() {
        if (!init || !Array.isArray(init)) return new Map();
        return new Map(init);
    }, []);
    var _a = $8M2gN$react.useState(intiData), map = _a[0], setMap = _a[1];
    var remove = function remove(key) {
        setMap(function(prev) {
            var temp = new Map(prev);
            temp.delete(key);
            return temp;
        });
    };
    var set = function set(key, value) {
        setMap(function(prev) {
            var temp = new Map(prev);
            temp.set(key, value);
            return temp;
        });
    };
    var clear = function clear() {
        setMap(function(prev) {
            var temp = new Map(prev);
            temp.clear();
            return temp;
        });
    };
    var reset = function reset() {
        return setMap(new Map(intiData));
    };
    var has = function has(key) {
        return map.has(key);
    };
    var size = $8M2gN$react.useMemo(function() {
        return map.size;
    }, [
        map
    ]);
    return [
        map,
        {
            set: set,
            remove: remove,
            clear: clear,
            reset: reset,
            has: has,
            size: size
        }, 
    ];
}
var $80e8dff17c106379$export$2e2bcd8739ae039 = $80e8dff17c106379$var$useMap;



function $d0040752fbf3c017$var$useSet(init) {
    var intiData = $8M2gN$react.useMemo(function() {
        if (!init || !Array.isArray(init)) return new Set();
        return new Set(init);
    }, []);
    var _a = $8M2gN$react.useState(intiData), set = _a[0], setSet = _a[1];
    var remove = function remove(itm) {
        setSet(function(prev) {
            set.delete(itm);
            return set;
        });
    };
    var add = function add(itm) {
        setSet(function(prev) {
            var temp = new Set(prev);
            temp.add(itm);
            return temp;
        });
    };
    var clear = function clear() {
        setSet(function(prev) {
            return new Set();
        });
    };
    var reset = function reset() {
        return setSet(new Set(intiData));
    };
    var has = function has(itm) {
        return set.has(itm);
    };
    var size = $8M2gN$react.useMemo(function() {
        return set.size;
    }, [
        set
    ]);
    return [
        set,
        {
            add: add,
            remove: remove,
            clear: clear,
            reset: reset,
            has: has,
            size: size
        }, 
    ];
}
var $d0040752fbf3c017$export$2e2bcd8739ae039 = $d0040752fbf3c017$var$useSet;



function $a58f74a897fd5b17$var$useBoolean(init) {
    var intiData = $8M2gN$react.useMemo(function() {
        return !!init;
    }, []);
    var _a = $8M2gN$react.useState(intiData), state = _a[0], setState = _a[1];
    var actions = $8M2gN$react.useMemo(function() {
        var setTrue = function setTrue() {
            return setState(true);
        };
        var setFalse = function setFalse() {
            return setState(false);
        };
        var toggle = function toggle() {
            return setState(function(prevState) {
                return !prevState;
            });
        };
        return {
            toggle: toggle,
            set: function set(val) {
                return setState(!!val);
            },
            setTrue: setTrue,
            setFalse: setFalse
        };
    }, []);
    return [
        state,
        actions
    ];
}
var $a58f74a897fd5b17$export$2e2bcd8739ae039 = $a58f74a897fd5b17$var$useBoolean;



function $bd0b3e1cb8ea5209$var$useStorage(type, key, options) {
    var init = $8M2gN$react.useMemo(function() {
        var localData = type[key];
        var _a = options || {}, force = _a.force, defaultValue = _a.defaultValue;
        if (defaultValue !== undefined) {
            if (localData && !force) return JSON.parse(type[key]);
            type[key] = JSON.stringify(defaultValue);
            return defaultValue;
        }
        if (force || !localData) return "";
        return JSON.parse(type[key]);
    }, []);
    var _a1 = $8M2gN$react.useState(init), state = _a1[0], setState = _a1[1];
    $8M2gN$react.useEffect(function() {
        type[key] = JSON.stringify(state);
    }, [
        state
    ]);
    var actions = $8M2gN$react.useMemo(function() {
        var reset = function reset() {
            return setState(init);
        };
        var set = function set(value) {
            return setState(value);
        };
        return {
            reset: reset,
            set: set
        };
    }, []);
    return [
        state,
        actions
    ];
}
var $bd0b3e1cb8ea5209$export$2e2bcd8739ae039 = $bd0b3e1cb8ea5209$var$useStorage;


function $2047587efc98bb27$var$useLocalStorage(key, options) {
    return $bd0b3e1cb8ea5209$export$2e2bcd8739ae039(localStorage, key, options);
}
var $2047587efc98bb27$export$2e2bcd8739ae039 = $2047587efc98bb27$var$useLocalStorage;



function $33b1bdcef4bd88f3$var$useSessionStorage(key, options) {
    return $bd0b3e1cb8ea5209$export$2e2bcd8739ae039(sessionStorage, key, options);
}
var $33b1bdcef4bd88f3$export$2e2bcd8739ae039 = $33b1bdcef4bd88f3$var$useSessionStorage;



function $637db389d5c4f3e8$var$useDebounce(init, wait) {
    if (wait === void 0) wait = 1000;
    var _a = $8M2gN$react.useState(init), value = _a[0], setValue = _a[1];
    var update = $8M2gN$react.useMemo(function() {
        var last;
        return function(newValue) {
            clearTimeout(last);
            last = setTimeout(function() {
                return setValue(newValue);
            }, wait);
        };
    }, []);
    return [
        value,
        update
    ];
}
var $637db389d5c4f3e8$export$2e2bcd8739ae039 = $637db389d5c4f3e8$var$useDebounce;



function $5c27c88268695acc$var$useDebounceValue(init, wait) {
    if (wait === void 0) wait = 1000;
    var _a = $8M2gN$react.useState(init), value = _a[0], setValue = _a[1];
    $8M2gN$react.useEffect(function() {
        update(init);
    }, [
        init
    ]);
    var update = $8M2gN$react.useMemo(function() {
        var last;
        return function(newValue) {
            clearTimeout(last);
            last = setTimeout(function() {
                setValue(newValue);
            }, wait);
        };
    }, []);
    return value;
}
var $5c27c88268695acc$export$2e2bcd8739ae039 = $5c27c88268695acc$var$useDebounceValue;


var $fa170128f8c97660$export$2e2bcd8739ae039 = {
    useMap: $80e8dff17c106379$export$2e2bcd8739ae039,
    useSet: $d0040752fbf3c017$export$2e2bcd8739ae039,
    useBoolean: $a58f74a897fd5b17$export$2e2bcd8739ae039,
    useLocalStorage: $2047587efc98bb27$export$2e2bcd8739ae039,
    useSessionStorage: $33b1bdcef4bd88f3$export$2e2bcd8739ae039,
    useDebounce: $637db389d5c4f3e8$export$2e2bcd8739ae039,
    useDebounceValue: $5c27c88268695acc$export$2e2bcd8739ae039
};


//# sourceMappingURL=shooks.main.js.map

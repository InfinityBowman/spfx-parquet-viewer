var go = { exports: {} }, au = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function Qy() {
  if (J1) return au;
  J1 = 1;
  var a = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function o(c, s, A) {
    var d = null;
    if (A !== void 0 && (d = "" + A), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      A = {};
      for (var h in s)
        h !== "key" && (A[h] = s[h]);
    } else A = s;
    return s = A.ref, {
      $$typeof: a,
      type: c,
      key: d,
      ref: s !== void 0 ? s : null,
      props: A
    };
  }
  return au.Fragment = f, au.jsx = o, au.jsxs = o, au;
}
var _1;
function Ry() {
  return _1 || (_1 = 1, go.exports = Qy()), go.exports;
}
var he = Ry(), mo = { exports: {} }, ft = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F1;
function Ny() {
  if (F1) return ft;
  F1 = 1;
  var a = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), v = Symbol.for("react.activity"), b = Symbol.iterator;
  function Q(w) {
    return w === null || typeof w != "object" ? null : (w = b && w[b] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var D = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, N = Object.assign, B = {};
  function M(w, H, j) {
    this.props = w, this.context = H, this.refs = B, this.updater = j || D;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(w, H) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, H, "setState");
  }, M.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function V() {
  }
  V.prototype = M.prototype;
  function G(w, H, j) {
    this.props = w, this.context = H, this.refs = B, this.updater = j || D;
  }
  var K = G.prototype = new V();
  K.constructor = G, N(K, M.prototype), K.isPureReactComponent = !0;
  var _ = Array.isArray;
  function Z() {
  }
  var I = { H: null, A: null, T: null, S: null }, $ = Object.prototype.hasOwnProperty;
  function rt(w, H, j) {
    var F = j.ref;
    return {
      $$typeof: a,
      type: w,
      key: H,
      ref: F !== void 0 ? F : null,
      props: j
    };
  }
  function Et(w, H) {
    return rt(w.type, H, w.props);
  }
  function St(w) {
    return typeof w == "object" && w !== null && w.$$typeof === a;
  }
  function it(w) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(j) {
      return H[j];
    });
  }
  var Ot = /\/+/g;
  function ut(w, H) {
    return typeof w == "object" && w !== null && w.key != null ? it("" + w.key) : H.toString(36);
  }
  function lt(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(Z, Z) : (w.status = "pending", w.then(
          function(H) {
            w.status === "pending" && (w.status = "fulfilled", w.value = H);
          },
          function(H) {
            w.status === "pending" && (w.status = "rejected", w.reason = H);
          }
        )), w.status) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function O(w, H, j, F, at) {
    var ct = typeof w;
    (ct === "undefined" || ct === "boolean") && (w = null);
    var J = !1;
    if (w === null) J = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          J = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case a:
            case f:
              J = !0;
              break;
            case S:
              return J = w._init, O(
                J(w._payload),
                H,
                j,
                F,
                at
              );
          }
      }
    if (J)
      return at = at(w), J = F === "" ? "." + ut(w, 0) : F, _(at) ? (j = "", J != null && (j = J.replace(Ot, "$&/") + "/"), O(at, H, j, "", function(Ue) {
        return Ue;
      })) : at != null && (St(at) && (at = Et(
        at,
        j + (at.key == null || w && w.key === at.key ? "" : ("" + at.key).replace(
          Ot,
          "$&/"
        ) + "/") + J
      )), H.push(at)), 1;
    J = 0;
    var Qt = F === "" ? "." : F + ":";
    if (_(w))
      for (var wt = 0; wt < w.length; wt++)
        F = w[wt], ct = Qt + ut(F, wt), J += O(
          F,
          H,
          j,
          ct,
          at
        );
    else if (wt = Q(w), typeof wt == "function")
      for (w = wt.call(w), wt = 0; !(F = w.next()).done; )
        F = F.value, ct = Qt + ut(F, wt++), J += O(
          F,
          H,
          j,
          ct,
          at
        );
    else if (ct === "object") {
      if (typeof w.then == "function")
        return O(
          lt(w),
          H,
          j,
          F,
          at
        );
      throw H = String(w), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return J;
  }
  function X(w, H, j) {
    if (w == null) return w;
    var F = [], at = 0;
    return O(w, F, "", "", function(ct) {
      return H.call(j, ct, at++);
    }), F;
  }
  function tt(w) {
    if (w._status === -1) {
      var H = w._result;
      H = H(), H.then(
        function(j) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = j);
        },
        function(j) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = j);
        }
      ), w._status === -1 && (w._status = 0, w._result = H);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var gt = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
        error: w
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  }, vt = {
    map: X,
    forEach: function(w, H, j) {
      X(
        w,
        function() {
          H.apply(this, arguments);
        },
        j
      );
    },
    count: function(w) {
      var H = 0;
      return X(w, function() {
        H++;
      }), H;
    },
    toArray: function(w) {
      return X(w, function(H) {
        return H;
      }) || [];
    },
    only: function(w) {
      if (!St(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  };
  return ft.Activity = v, ft.Children = vt, ft.Component = M, ft.Fragment = o, ft.Profiler = s, ft.PureComponent = G, ft.StrictMode = c, ft.Suspense = m, ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, ft.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return I.H.useMemoCache(w);
    }
  }, ft.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, ft.cacheSignal = function() {
    return null;
  }, ft.cloneElement = function(w, H, j) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var F = N({}, w.props), at = w.key;
    if (H != null)
      for (ct in H.key !== void 0 && (at = "" + H.key), H)
        !$.call(H, ct) || ct === "key" || ct === "__self" || ct === "__source" || ct === "ref" && H.ref === void 0 || (F[ct] = H[ct]);
    var ct = arguments.length - 2;
    if (ct === 1) F.children = j;
    else if (1 < ct) {
      for (var J = Array(ct), Qt = 0; Qt < ct; Qt++)
        J[Qt] = arguments[Qt + 2];
      F.children = J;
    }
    return rt(w.type, at, F);
  }, ft.createContext = function(w) {
    return w = {
      $$typeof: d,
      _currentValue: w,
      _currentValue2: w,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, w.Provider = w, w.Consumer = {
      $$typeof: A,
      _context: w
    }, w;
  }, ft.createElement = function(w, H, j) {
    var F, at = {}, ct = null;
    if (H != null)
      for (F in H.key !== void 0 && (ct = "" + H.key), H)
        $.call(H, F) && F !== "key" && F !== "__self" && F !== "__source" && (at[F] = H[F]);
    var J = arguments.length - 2;
    if (J === 1) at.children = j;
    else if (1 < J) {
      for (var Qt = Array(J), wt = 0; wt < J; wt++)
        Qt[wt] = arguments[wt + 2];
      at.children = Qt;
    }
    if (w && w.defaultProps)
      for (F in J = w.defaultProps, J)
        at[F] === void 0 && (at[F] = J[F]);
    return rt(w, ct, at);
  }, ft.createRef = function() {
    return { current: null };
  }, ft.forwardRef = function(w) {
    return { $$typeof: h, render: w };
  }, ft.isValidElement = St, ft.lazy = function(w) {
    return {
      $$typeof: S,
      _payload: { _status: -1, _result: w },
      _init: tt
    };
  }, ft.memo = function(w, H) {
    return {
      $$typeof: g,
      type: w,
      compare: H === void 0 ? null : H
    };
  }, ft.startTransition = function(w) {
    var H = I.T, j = {};
    I.T = j;
    try {
      var F = w(), at = I.S;
      at !== null && at(j, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(Z, gt);
    } catch (ct) {
      gt(ct);
    } finally {
      H !== null && j.types !== null && (H.types = j.types), I.T = H;
    }
  }, ft.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, ft.use = function(w) {
    return I.H.use(w);
  }, ft.useActionState = function(w, H, j) {
    return I.H.useActionState(w, H, j);
  }, ft.useCallback = function(w, H) {
    return I.H.useCallback(w, H);
  }, ft.useContext = function(w) {
    return I.H.useContext(w);
  }, ft.useDebugValue = function() {
  }, ft.useDeferredValue = function(w, H) {
    return I.H.useDeferredValue(w, H);
  }, ft.useEffect = function(w, H) {
    return I.H.useEffect(w, H);
  }, ft.useEffectEvent = function(w) {
    return I.H.useEffectEvent(w);
  }, ft.useId = function() {
    return I.H.useId();
  }, ft.useImperativeHandle = function(w, H, j) {
    return I.H.useImperativeHandle(w, H, j);
  }, ft.useInsertionEffect = function(w, H) {
    return I.H.useInsertionEffect(w, H);
  }, ft.useLayoutEffect = function(w, H) {
    return I.H.useLayoutEffect(w, H);
  }, ft.useMemo = function(w, H) {
    return I.H.useMemo(w, H);
  }, ft.useOptimistic = function(w, H) {
    return I.H.useOptimistic(w, H);
  }, ft.useReducer = function(w, H, j) {
    return I.H.useReducer(w, H, j);
  }, ft.useRef = function(w) {
    return I.H.useRef(w);
  }, ft.useState = function(w) {
    return I.H.useState(w);
  }, ft.useSyncExternalStore = function(w, H, j) {
    return I.H.useSyncExternalStore(
      w,
      H,
      j
    );
  }, ft.useTransition = function() {
    return I.H.useTransition();
  }, ft.version = "19.2.7", ft;
}
var W1;
function Zo() {
  return W1 || (W1 = 1, mo.exports = Ny()), mo.exports;
}
var Zi = Zo(), vo = { exports: {} }, uu = {}, Eo = { exports: {} }, So = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k1;
function Yy() {
  return k1 || (k1 = 1, (function(a) {
    function f(O, X) {
      var tt = O.length;
      O.push(X);
      t: for (; 0 < tt; ) {
        var gt = tt - 1 >>> 1, vt = O[gt];
        if (0 < s(vt, X))
          O[gt] = X, O[tt] = vt, tt = gt;
        else break t;
      }
    }
    function o(O) {
      return O.length === 0 ? null : O[0];
    }
    function c(O) {
      if (O.length === 0) return null;
      var X = O[0], tt = O.pop();
      if (tt !== X) {
        O[0] = tt;
        t: for (var gt = 0, vt = O.length, w = vt >>> 1; gt < w; ) {
          var H = 2 * (gt + 1) - 1, j = O[H], F = H + 1, at = O[F];
          if (0 > s(j, tt))
            F < vt && 0 > s(at, j) ? (O[gt] = at, O[F] = tt, gt = F) : (O[gt] = j, O[H] = tt, gt = H);
          else if (F < vt && 0 > s(at, tt))
            O[gt] = at, O[F] = tt, gt = F;
          else break t;
        }
      }
      return X;
    }
    function s(O, X) {
      var tt = O.sortIndex - X.sortIndex;
      return tt !== 0 ? tt : O.id - X.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var A = performance;
      a.unstable_now = function() {
        return A.now();
      };
    } else {
      var d = Date, h = d.now();
      a.unstable_now = function() {
        return d.now() - h;
      };
    }
    var m = [], g = [], S = 1, v = null, b = 3, Q = !1, D = !1, N = !1, B = !1, M = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
    function K(O) {
      for (var X = o(g); X !== null; ) {
        if (X.callback === null) c(g);
        else if (X.startTime <= O)
          c(g), X.sortIndex = X.expirationTime, f(m, X);
        else break;
        X = o(g);
      }
    }
    function _(O) {
      if (N = !1, K(O), !D)
        if (o(m) !== null)
          D = !0, Z || (Z = !0, it());
        else {
          var X = o(g);
          X !== null && lt(_, X.startTime - O);
        }
    }
    var Z = !1, I = -1, $ = 5, rt = -1;
    function Et() {
      return B ? !0 : !(a.unstable_now() - rt < $);
    }
    function St() {
      if (B = !1, Z) {
        var O = a.unstable_now();
        rt = O;
        var X = !0;
        try {
          t: {
            D = !1, N && (N = !1, V(I), I = -1), Q = !0;
            var tt = b;
            try {
              e: {
                for (K(O), v = o(m); v !== null && !(v.expirationTime > O && Et()); ) {
                  var gt = v.callback;
                  if (typeof gt == "function") {
                    v.callback = null, b = v.priorityLevel;
                    var vt = gt(
                      v.expirationTime <= O
                    );
                    if (O = a.unstable_now(), typeof vt == "function") {
                      v.callback = vt, K(O), X = !0;
                      break e;
                    }
                    v === o(m) && c(m), K(O);
                  } else c(m);
                  v = o(m);
                }
                if (v !== null) X = !0;
                else {
                  var w = o(g);
                  w !== null && lt(
                    _,
                    w.startTime - O
                  ), X = !1;
                }
              }
              break t;
            } finally {
              v = null, b = tt, Q = !1;
            }
            X = void 0;
          }
        } finally {
          X ? it() : Z = !1;
        }
      }
    }
    var it;
    if (typeof G == "function")
      it = function() {
        G(St);
      };
    else if (typeof MessageChannel < "u") {
      var Ot = new MessageChannel(), ut = Ot.port2;
      Ot.port1.onmessage = St, it = function() {
        ut.postMessage(null);
      };
    } else
      it = function() {
        M(St, 0);
      };
    function lt(O, X) {
      I = M(function() {
        O(a.unstable_now());
      }, X);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, a.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : $ = 0 < O ? Math.floor(1e3 / O) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, a.unstable_next = function(O) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = b;
      }
      var tt = b;
      b = X;
      try {
        return O();
      } finally {
        b = tt;
      }
    }, a.unstable_requestPaint = function() {
      B = !0;
    }, a.unstable_runWithPriority = function(O, X) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var tt = b;
      b = O;
      try {
        return X();
      } finally {
        b = tt;
      }
    }, a.unstable_scheduleCallback = function(O, X, tt) {
      var gt = a.unstable_now();
      switch (typeof tt == "object" && tt !== null ? (tt = tt.delay, tt = typeof tt == "number" && 0 < tt ? gt + tt : gt) : tt = gt, O) {
        case 1:
          var vt = -1;
          break;
        case 2:
          vt = 250;
          break;
        case 5:
          vt = 1073741823;
          break;
        case 4:
          vt = 1e4;
          break;
        default:
          vt = 5e3;
      }
      return vt = tt + vt, O = {
        id: S++,
        callback: X,
        priorityLevel: O,
        startTime: tt,
        expirationTime: vt,
        sortIndex: -1
      }, tt > gt ? (O.sortIndex = tt, f(g, O), o(m) === null && O === o(g) && (N ? (V(I), I = -1) : N = !0, lt(_, tt - gt))) : (O.sortIndex = vt, f(m, O), D || Q || (D = !0, Z || (Z = !0, it()))), O;
    }, a.unstable_shouldYield = Et, a.unstable_wrapCallback = function(O) {
      var X = b;
      return function() {
        var tt = b;
        b = X;
        try {
          return O.apply(this, arguments);
        } finally {
          b = tt;
        }
      };
    };
  })(So)), So;
}
var P1;
function xy() {
  return P1 || (P1 = 1, Eo.exports = Yy()), Eo.exports;
}
var bo = { exports: {} }, ue = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $1;
function Ly() {
  if ($1) return ue;
  $1 = 1;
  var a = Zo();
  function f(m) {
    var g = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        g += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + m + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var c = {
    d: {
      f: o,
      r: function() {
        throw Error(f(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function A(m, g, S) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: v == null ? null : "" + v,
      children: m,
      containerInfo: g,
      implementation: S
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, g) {
    if (m === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, ue.createPortal = function(m, g) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(f(299));
    return A(m, g, null, S);
  }, ue.flushSync = function(m) {
    var g = d.T, S = c.p;
    try {
      if (d.T = null, c.p = 2, m) return m();
    } finally {
      d.T = g, c.p = S, c.d.f();
    }
  }, ue.preconnect = function(m, g) {
    typeof m == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, c.d.C(m, g));
  }, ue.prefetchDNS = function(m) {
    typeof m == "string" && c.d.D(m);
  }, ue.preinit = function(m, g) {
    if (typeof m == "string" && g && typeof g.as == "string") {
      var S = g.as, v = h(S, g.crossOrigin), b = typeof g.integrity == "string" ? g.integrity : void 0, Q = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      S === "style" ? c.d.S(
        m,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: v,
          integrity: b,
          fetchPriority: Q
        }
      ) : S === "script" && c.d.X(m, {
        crossOrigin: v,
        integrity: b,
        fetchPriority: Q,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, ue.preinitModule = function(m, g) {
    if (typeof m == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var S = h(
            g.as,
            g.crossOrigin
          );
          c.d.M(m, {
            crossOrigin: S,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && c.d.M(m);
  }, ue.preload = function(m, g) {
    if (typeof m == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var S = g.as, v = h(S, g.crossOrigin);
      c.d.L(m, S, {
        crossOrigin: v,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, ue.preloadModule = function(m, g) {
    if (typeof m == "string")
      if (g) {
        var S = h(g.as, g.crossOrigin);
        c.d.m(m, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: S,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else c.d.m(m);
  }, ue.requestFormReset = function(m) {
    c.d.r(m);
  }, ue.unstable_batchedUpdates = function(m, g) {
    return m(g);
  }, ue.useFormState = function(m, g, S) {
    return d.H.useFormState(m, g, S);
  }, ue.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, ue.version = "19.2.7", ue;
}
var tA;
function Hy() {
  if (tA) return bo.exports;
  tA = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (f) {
        console.error(f);
      }
  }
  return a(), bo.exports = Ly(), bo.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eA;
function qy() {
  if (eA) return uu;
  eA = 1;
  var a = xy(), f = Zo(), o = Hy();
  function c(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function A(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (A(t) !== t)
      throw Error(c(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (e = A(t), e === null) throw Error(c(188));
      return e !== t ? null : t;
    }
    for (var l = t, n = e; ; ) {
      var u = l.return;
      if (u === null) break;
      var i = u.alternate;
      if (i === null) {
        if (n = u.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (u.child === i.child) {
        for (i = u.child; i; ) {
          if (i === l) return m(u), t;
          if (i === n) return m(u), e;
          i = i.sibling;
        }
        throw Error(c(188));
      }
      if (l.return !== n.return) l = u, n = i;
      else {
        for (var r = !1, y = u.child; y; ) {
          if (y === l) {
            r = !0, l = u, n = i;
            break;
          }
          if (y === n) {
            r = !0, n = u, l = i;
            break;
          }
          y = y.sibling;
        }
        if (!r) {
          for (y = i.child; y; ) {
            if (y === l) {
              r = !0, l = i, n = u;
              break;
            }
            if (y === n) {
              r = !0, n = i, l = u;
              break;
            }
            y = y.sibling;
          }
          if (!r) throw Error(c(189));
        }
      }
      if (l.alternate !== n) throw Error(c(190));
    }
    if (l.tag !== 3) throw Error(c(188));
    return l.stateNode.current === l ? t : e;
  }
  function S(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = S(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var v = Object.assign, b = Symbol.for("react.element"), Q = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), G = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), rt = Symbol.for("react.activity"), Et = Symbol.for("react.memo_cache_sentinel"), St = Symbol.iterator;
  function it(t) {
    return t === null || typeof t != "object" ? null : (t = St && t[St] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Ot = Symbol.for("react.client.reference");
  function ut(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Ot ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case N:
        return "Fragment";
      case M:
        return "Profiler";
      case B:
        return "StrictMode";
      case _:
        return "Suspense";
      case Z:
        return "SuspenseList";
      case rt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case D:
          return "Portal";
        case G:
          return t.displayName || "Context";
        case V:
          return (t._context.displayName || "Context") + ".Consumer";
        case K:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case I:
          return e = t.displayName || null, e !== null ? e : ut(t.type) || "Memo";
        case $:
          e = t._payload, t = t._init;
          try {
            return ut(t(e));
          } catch {
          }
      }
    return null;
  }
  var lt = Array.isArray, O = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, tt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, gt = [], vt = -1;
  function w(t) {
    return { current: t };
  }
  function H(t) {
    0 > vt || (t.current = gt[vt], gt[vt] = null, vt--);
  }
  function j(t, e) {
    vt++, gt[vt] = t.current, t.current = e;
  }
  var F = w(null), at = w(null), ct = w(null), J = w(null);
  function Qt(t, e) {
    switch (j(ct, e), j(at, t), j(F, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? g1(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = g1(e), t = m1(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    H(F), j(F, t);
  }
  function wt() {
    H(F), H(at), H(ct);
  }
  function Ue(t) {
    t.memoizedState !== null && j(J, t);
    var e = F.current, l = m1(e, t.type);
    e !== l && (j(at, t), j(F, l));
  }
  function ge(t) {
    at.current === t && (H(F), H(at)), J.current === t && (H(J), tu._currentValue = tt);
  }
  var ze, bn;
  function je(t) {
    if (ze === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ze = e && e[1] || "", bn = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ze + t + bn;
  }
  var fe = !1;
  function Pe(t, e) {
    if (!t || fe) return "";
    fe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var q = function() {
                throw Error();
              };
              if (Object.defineProperty(q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(q, []);
                } catch (R) {
                  var z = R;
                }
                Reflect.construct(t, [], q);
              } else {
                try {
                  q.call();
                } catch (R) {
                  z = R;
                }
                t.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (R) {
                z = R;
              }
              (q = t()) && typeof q.catch == "function" && q.catch(function() {
              });
            }
          } catch (R) {
            if (R && z && typeof R.stack == "string")
              return [R.stack, z.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = n.DetermineComponentFrameRoot(), r = i[0], y = i[1];
      if (r && y) {
        var E = r.split(`
`), U = y.split(`
`);
        for (u = n = 0; n < E.length && !E[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; u < U.length && !U[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (n === E.length || u === U.length)
          for (n = E.length - 1, u = U.length - 1; 1 <= n && 0 <= u && E[n] !== U[u]; )
            u--;
        for (; 1 <= n && 0 <= u; n--, u--)
          if (E[n] !== U[u]) {
            if (n !== 1 || u !== 1)
              do
                if (n--, u--, 0 > u || E[n] !== U[u]) {
                  var Y = `
` + E[n].replace(" at new ", " at ");
                  return t.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", t.displayName)), Y;
                }
              while (1 <= n && 0 <= u);
            break;
          }
      }
    } finally {
      fe = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? je(l) : "";
  }
  function pn(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return je(t.type);
      case 16:
        return je("Lazy");
      case 13:
        return t.child !== e && e !== null ? je("Suspense Fallback") : je("Suspense");
      case 19:
        return je("SuspenseList");
      case 0:
      case 15:
        return Pe(t.type, !1);
      case 11:
        return Pe(t.type.render, !1);
      case 1:
        return Pe(t.type, !0);
      case 31:
        return je("Activity");
      default:
        return "";
    }
  }
  function me(t) {
    try {
      var e = "", l = null;
      do
        e += pn(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Xe = Object.prototype.hasOwnProperty, Ke = a.unstable_scheduleCallback, ml = a.unstable_cancelCallback, ra = a.unstable_shouldYield, vu = a.unstable_requestPaint, Pt = a.unstable_now, wn = a.unstable_getCurrentPriorityLevel, _o = a.unstable_ImmediatePriority, Fo = a.unstable_UserBlockingPriority, Eu = a.unstable_NormalPriority, d2 = a.unstable_LowPriority, Wo = a.unstable_IdlePriority, y2 = a.log, h2 = a.unstable_setDisableYieldValue, Aa = null, ve = null;
  function vl(t) {
    if (typeof y2 == "function" && h2(t), ve && typeof ve.setStrictMode == "function")
      try {
        ve.setStrictMode(Aa, t);
      } catch {
      }
  }
  var Ee = Math.clz32 ? Math.clz32 : v2, g2 = Math.log, m2 = Math.LN2;
  function v2(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (g2(t) / m2 | 0) | 0;
  }
  var Su = 256, bu = 262144, pu = 4194304;
  function Fl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function wu(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var u = 0, i = t.suspendedLanes, r = t.pingedLanes;
    t = t.warmLanes;
    var y = n & 134217727;
    return y !== 0 ? (n = y & ~i, n !== 0 ? u = Fl(n) : (r &= y, r !== 0 ? u = Fl(r) : l || (l = y & ~t, l !== 0 && (u = Fl(l))))) : (y = n & ~i, y !== 0 ? u = Fl(y) : r !== 0 ? u = Fl(r) : l || (l = n & ~t, l !== 0 && (u = Fl(l)))), u === 0 ? 0 : e !== 0 && e !== u && (e & i) === 0 && (i = u & -u, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : u;
  }
  function da(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function E2(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ko() {
    var t = pu;
    return pu <<= 1, (pu & 62914560) === 0 && (pu = 4194304), t;
  }
  function lf(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function ya(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function S2(t, e, l, n, u, i) {
    var r = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var y = t.entanglements, E = t.expirationTimes, U = t.hiddenUpdates;
    for (l = r & ~l; 0 < l; ) {
      var Y = 31 - Ee(l), q = 1 << Y;
      y[Y] = 0, E[Y] = -1;
      var z = U[Y];
      if (z !== null)
        for (U[Y] = null, Y = 0; Y < z.length; Y++) {
          var R = z[Y];
          R !== null && (R.lane &= -536870913);
        }
      l &= ~q;
    }
    n !== 0 && Po(t, n, 0), i !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(r & ~e));
  }
  function Po(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - Ee(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function $o(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - Ee(l), u = 1 << n;
      u & e | t[n] & e && (t[n] |= e), l &= ~u;
    }
  }
  function ts(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : nf(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function nf(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function af(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function es() {
    var t = X.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : G1(t.type));
  }
  function ls(t, e) {
    var l = X.p;
    try {
      return X.p = t, e();
    } finally {
      X.p = l;
    }
  }
  var El = Math.random().toString(36).slice(2), $t = "__reactFiber$" + El, ce = "__reactProps$" + El, Bn = "__reactContainer$" + El, uf = "__reactEvents$" + El, b2 = "__reactListeners$" + El, p2 = "__reactHandles$" + El, ns = "__reactResources$" + El, ha = "__reactMarker$" + El;
  function ff(t) {
    delete t[$t], delete t[ce], delete t[uf], delete t[b2], delete t[p2];
  }
  function Tn(t) {
    var e = t[$t];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Bn] || l[$t]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = B1(t); t !== null; ) {
            if (l = t[$t]) return l;
            t = B1(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Cn(t) {
    if (t = t[$t] || t[Bn]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ga(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(c(33));
  }
  function Un(t) {
    var e = t[ns];
    return e || (e = t[ns] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Wt(t) {
    t[ha] = !0;
  }
  var as = /* @__PURE__ */ new Set(), us = {};
  function Wl(t, e) {
    zn(t, e), zn(t + "Capture", e);
  }
  function zn(t, e) {
    for (us[t] = e, t = 0; t < e.length; t++)
      as.add(e[t]);
  }
  var w2 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), is = {}, fs = {};
  function B2(t) {
    return Xe.call(fs, t) ? !0 : Xe.call(is, t) ? !1 : w2.test(t) ? fs[t] = !0 : (is[t] = !0, !1);
  }
  function Bu(t, e, l) {
    if (B2(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Tu(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function $e(t, e, l, n) {
    if (n === null) t.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + n);
    }
  }
  function Me(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function cs(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function T2(t, e, l) {
    var n = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var u = n.get, i = n.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(r) {
          l = "" + r, i.call(this, r);
        }
      }), Object.defineProperty(t, e, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(r) {
          l = "" + r;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function cf(t) {
    if (!t._valueTracker) {
      var e = cs(t) ? "checked" : "value";
      t._valueTracker = T2(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function os(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = cs(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Cu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var C2 = /[\n"\\]/g;
  function Oe(t) {
    return t.replace(
      C2,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function of(t, e, l, n, u, i, r, y) {
    t.name = "", r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.type = r : t.removeAttribute("type"), e != null ? r === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Me(e)) : t.value !== "" + Me(e) && (t.value = "" + Me(e)) : r !== "submit" && r !== "reset" || t.removeAttribute("value"), e != null ? sf(t, r, Me(e)) : l != null ? sf(t, r, Me(l)) : n != null && t.removeAttribute("value"), u == null && i != null && (t.defaultChecked = !!i), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.name = "" + Me(y) : t.removeAttribute("name");
  }
  function ss(t, e, l, n, u, i, r, y) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        cf(t);
        return;
      }
      l = l != null ? "" + Me(l) : "", e = e != null ? "" + Me(e) : l, y || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? u, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = y ? t.checked : !!n, t.defaultChecked = !!n, r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.name = r), cf(t);
  }
  function sf(t, e, l) {
    e === "number" && Cu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Mn(t, e, l, n) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < l.length; u++)
        e["$" + l[u]] = !0;
      for (l = 0; l < t.length; l++)
        u = e.hasOwnProperty("$" + t[l].value), t[l].selected !== u && (t[l].selected = u), u && n && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Me(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          t[u].selected = !0, n && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function rs(t, e, l) {
    if (e != null && (e = "" + Me(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Me(l) : "";
  }
  function As(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(c(92));
        if (lt(n)) {
          if (1 < n.length) throw Error(c(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), e = l;
    }
    l = Me(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), cf(t);
  }
  function On(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var U2 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ds(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || U2.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function ys(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(c(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var u in e)
        n = e[u], e.hasOwnProperty(u) && l[u] !== n && ds(t, u, n);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && ds(t, i, e[i]);
  }
  function rf(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var z2 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), M2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Uu(t) {
    return M2.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function tl() {
  }
  var Af = null;
  function df(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Dn = null, Qn = null;
  function hs(t) {
    var e = Cn(t);
    if (e && (t = e.stateNode)) {
      var l = t[ce] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (of(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Oe(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var u = n[ce] || null;
                if (!u) throw Error(c(90));
                of(
                  n,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              n = l[e], n.form === t.form && os(n);
          }
          break t;
        case "textarea":
          rs(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Mn(t, !!l.multiple, e, !1);
      }
    }
  }
  var yf = !1;
  function gs(t, e, l) {
    if (yf) return t(e, l);
    yf = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (yf = !1, (Dn !== null || Qn !== null) && (yi(), Dn && (e = Dn, t = Qn, Qn = Dn = null, hs(e), t)))
        for (e = 0; e < t.length; e++) hs(t[e]);
    }
  }
  function ma(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[ce] || null;
    if (n === null) return null;
    l = n[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        c(231, e, typeof l)
      );
    return l;
  }
  var el = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), hf = !1;
  if (el)
    try {
      var va = {};
      Object.defineProperty(va, "passive", {
        get: function() {
          hf = !0;
        }
      }), window.addEventListener("test", va, va), window.removeEventListener("test", va, va);
    } catch {
      hf = !1;
    }
  var Sl = null, gf = null, zu = null;
  function ms() {
    if (zu) return zu;
    var t, e = gf, l = e.length, n, u = "value" in Sl ? Sl.value : Sl.textContent, i = u.length;
    for (t = 0; t < l && e[t] === u[t]; t++) ;
    var r = l - t;
    for (n = 1; n <= r && e[l - n] === u[i - n]; n++) ;
    return zu = u.slice(t, 1 < n ? 1 - n : void 0);
  }
  function Mu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ou() {
    return !0;
  }
  function vs() {
    return !1;
  }
  function oe(t) {
    function e(l, n, u, i, r) {
      this._reactName = l, this._targetInst = u, this.type = n, this.nativeEvent = i, this.target = r, this.currentTarget = null;
      for (var y in t)
        t.hasOwnProperty(y) && (l = t[y], this[y] = l ? l(i) : i[y]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ou : vs, this.isPropagationStopped = vs, this;
    }
    return v(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Ou);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Ou);
      },
      persist: function() {
      },
      isPersistent: Ou
    }), e;
  }
  var kl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Du = oe(kl), Ea = v({}, kl, { view: 0, detail: 0 }), O2 = oe(Ea), mf, vf, Sa, Qu = v({}, Ea, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Sf,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Sa && (Sa && t.type === "mousemove" ? (mf = t.screenX - Sa.screenX, vf = t.screenY - Sa.screenY) : vf = mf = 0, Sa = t), mf);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : vf;
    }
  }), Es = oe(Qu), D2 = v({}, Qu, { dataTransfer: 0 }), Q2 = oe(D2), R2 = v({}, Ea, { relatedTarget: 0 }), Ef = oe(R2), N2 = v({}, kl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Y2 = oe(N2), x2 = v({}, kl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), L2 = oe(x2), H2 = v({}, kl, { data: 0 }), Ss = oe(H2), q2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, G2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, I2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Z2(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = I2[t]) ? !!e[t] : !1;
  }
  function Sf() {
    return Z2;
  }
  var V2 = v({}, Ea, {
    key: function(t) {
      if (t.key) {
        var e = q2[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Mu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? G2[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Sf,
    charCode: function(t) {
      return t.type === "keypress" ? Mu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Mu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), j2 = oe(V2), X2 = v({}, Qu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), bs = oe(X2), K2 = v({}, Ea, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sf
  }), J2 = oe(K2), _2 = v({}, kl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), F2 = oe(_2), W2 = v({}, Qu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), k2 = oe(W2), P2 = v({}, kl, {
    newState: 0,
    oldState: 0
  }), $2 = oe(P2), td = [9, 13, 27, 32], bf = el && "CompositionEvent" in window, ba = null;
  el && "documentMode" in document && (ba = document.documentMode);
  var ed = el && "TextEvent" in window && !ba, ps = el && (!bf || ba && 8 < ba && 11 >= ba), ws = " ", Bs = !1;
  function Ts(t, e) {
    switch (t) {
      case "keyup":
        return td.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cs(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Rn = !1;
  function ld(t, e) {
    switch (t) {
      case "compositionend":
        return Cs(e);
      case "keypress":
        return e.which !== 32 ? null : (Bs = !0, ws);
      case "textInput":
        return t = e.data, t === ws && Bs ? null : t;
      default:
        return null;
    }
  }
  function nd(t, e) {
    if (Rn)
      return t === "compositionend" || !bf && Ts(t, e) ? (t = ms(), zu = gf = Sl = null, Rn = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return ps && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var ad = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Us(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!ad[t.type] : e === "textarea";
  }
  function zs(t, e, l, n) {
    Dn ? Qn ? Qn.push(n) : Qn = [n] : Dn = n, e = bi(e, "onChange"), 0 < e.length && (l = new Du(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var pa = null, wa = null;
  function ud(t) {
    s1(t, 0);
  }
  function Ru(t) {
    var e = ga(t);
    if (os(e)) return t;
  }
  function Ms(t, e) {
    if (t === "change") return e;
  }
  var Os = !1;
  if (el) {
    var pf;
    if (el) {
      var wf = "oninput" in document;
      if (!wf) {
        var Ds = document.createElement("div");
        Ds.setAttribute("oninput", "return;"), wf = typeof Ds.oninput == "function";
      }
      pf = wf;
    } else pf = !1;
    Os = pf && (!document.documentMode || 9 < document.documentMode);
  }
  function Qs() {
    pa && (pa.detachEvent("onpropertychange", Rs), wa = pa = null);
  }
  function Rs(t) {
    if (t.propertyName === "value" && Ru(wa)) {
      var e = [];
      zs(
        e,
        wa,
        t,
        df(t)
      ), gs(ud, e);
    }
  }
  function id(t, e, l) {
    t === "focusin" ? (Qs(), pa = e, wa = l, pa.attachEvent("onpropertychange", Rs)) : t === "focusout" && Qs();
  }
  function fd(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ru(wa);
  }
  function cd(t, e) {
    if (t === "click") return Ru(e);
  }
  function od(t, e) {
    if (t === "input" || t === "change")
      return Ru(e);
  }
  function sd(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Se = typeof Object.is == "function" ? Object.is : sd;
  function Ba(t, e) {
    if (Se(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var u = l[n];
      if (!Xe.call(e, u) || !Se(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function Ns(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ys(t, e) {
    var l = Ns(t);
    t = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = t + l.textContent.length, t <= e && n >= e)
          return { node: l, offset: e - t };
        t = n;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Ns(l);
    }
  }
  function xs(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? xs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Ls(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Cu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Cu(t.document);
    }
    return e;
  }
  function Bf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var rd = el && "documentMode" in document && 11 >= document.documentMode, Nn = null, Tf = null, Ta = null, Cf = !1;
  function Hs(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Cf || Nn == null || Nn !== Cu(n) || (n = Nn, "selectionStart" in n && Bf(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), Ta && Ba(Ta, n) || (Ta = n, n = bi(Tf, "onSelect"), 0 < n.length && (e = new Du(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: n }), e.target = Nn)));
  }
  function Pl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var Yn = {
    animationend: Pl("Animation", "AnimationEnd"),
    animationiteration: Pl("Animation", "AnimationIteration"),
    animationstart: Pl("Animation", "AnimationStart"),
    transitionrun: Pl("Transition", "TransitionRun"),
    transitionstart: Pl("Transition", "TransitionStart"),
    transitioncancel: Pl("Transition", "TransitionCancel"),
    transitionend: Pl("Transition", "TransitionEnd")
  }, Uf = {}, qs = {};
  el && (qs = document.createElement("div").style, "AnimationEvent" in window || (delete Yn.animationend.animation, delete Yn.animationiteration.animation, delete Yn.animationstart.animation), "TransitionEvent" in window || delete Yn.transitionend.transition);
  function $l(t) {
    if (Uf[t]) return Uf[t];
    if (!Yn[t]) return t;
    var e = Yn[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in qs)
        return Uf[t] = e[l];
    return t;
  }
  var Gs = $l("animationend"), Is = $l("animationiteration"), Zs = $l("animationstart"), Ad = $l("transitionrun"), dd = $l("transitionstart"), yd = $l("transitioncancel"), Vs = $l("transitionend"), js = /* @__PURE__ */ new Map(), zf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  zf.push("scrollEnd");
  function qe(t, e) {
    js.set(t, e), Wl(e, [t]);
  }
  var Nu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, De = [], xn = 0, Mf = 0;
  function Yu() {
    for (var t = xn, e = Mf = xn = 0; e < t; ) {
      var l = De[e];
      De[e++] = null;
      var n = De[e];
      De[e++] = null;
      var u = De[e];
      De[e++] = null;
      var i = De[e];
      if (De[e++] = null, n !== null && u !== null) {
        var r = n.pending;
        r === null ? u.next = u : (u.next = r.next, r.next = u), n.pending = u;
      }
      i !== 0 && Xs(l, u, i);
    }
  }
  function xu(t, e, l, n) {
    De[xn++] = t, De[xn++] = e, De[xn++] = l, De[xn++] = n, Mf |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function Of(t, e, l, n) {
    return xu(t, e, l, n), Lu(t);
  }
  function tn(t, e) {
    return xu(t, null, null, e), Lu(t);
  }
  function Xs(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var u = !1, i = t.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (u = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, u && e !== null && (u = 31 - Ee(l), t = i.hiddenUpdates, n = t[u], n === null ? t[u] = [e] : n.push(e), e.lane = l | 536870912), i) : null;
  }
  function Lu(t) {
    if (50 < Ja)
      throw Ja = 0, qc = null, Error(c(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ln = {};
  function hd(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function be(t, e, l, n) {
    return new hd(t, e, l, n);
  }
  function Df(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function ll(t, e) {
    var l = t.alternate;
    return l === null ? (l = be(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Ks(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Hu(t, e, l, n, u, i) {
    var r = 0;
    if (n = t, typeof t == "function") Df(t) && (r = 1);
    else if (typeof t == "string")
      r = Sy(
        t,
        l,
        F.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case rt:
          return t = be(31, l, e, u), t.elementType = rt, t.lanes = i, t;
        case N:
          return en(l.children, u, i, e);
        case B:
          r = 8, u |= 24;
          break;
        case M:
          return t = be(12, l, e, u | 2), t.elementType = M, t.lanes = i, t;
        case _:
          return t = be(13, l, e, u), t.elementType = _, t.lanes = i, t;
        case Z:
          return t = be(19, l, e, u), t.elementType = Z, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case G:
                r = 10;
                break t;
              case V:
                r = 9;
                break t;
              case K:
                r = 11;
                break t;
              case I:
                r = 14;
                break t;
              case $:
                r = 16, n = null;
                break t;
            }
          r = 29, l = Error(
            c(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return e = be(r, l, e, u), e.elementType = t, e.type = n, e.lanes = i, e;
  }
  function en(t, e, l, n) {
    return t = be(7, t, n, e), t.lanes = l, t;
  }
  function Qf(t, e, l) {
    return t = be(6, t, null, e), t.lanes = l, t;
  }
  function Js(t) {
    var e = be(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Rf(t, e, l) {
    return e = be(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var _s = /* @__PURE__ */ new WeakMap();
  function Qe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = _s.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: me(e)
      }, _s.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: me(e)
    };
  }
  var Hn = [], qn = 0, qu = null, Ca = 0, Re = [], Ne = 0, bl = null, Je = 1, _e = "";
  function nl(t, e) {
    Hn[qn++] = Ca, Hn[qn++] = qu, qu = t, Ca = e;
  }
  function Fs(t, e, l) {
    Re[Ne++] = Je, Re[Ne++] = _e, Re[Ne++] = bl, bl = t;
    var n = Je;
    t = _e;
    var u = 32 - Ee(n) - 1;
    n &= ~(1 << u), l += 1;
    var i = 32 - Ee(e) + u;
    if (30 < i) {
      var r = u - u % 5;
      i = (n & (1 << r) - 1).toString(32), n >>= r, u -= r, Je = 1 << 32 - Ee(e) + u | l << u | n, _e = i + t;
    } else
      Je = 1 << i | l << u | n, _e = t;
  }
  function Nf(t) {
    t.return !== null && (nl(t, 1), Fs(t, 1, 0));
  }
  function Yf(t) {
    for (; t === qu; )
      qu = Hn[--qn], Hn[qn] = null, Ca = Hn[--qn], Hn[qn] = null;
    for (; t === bl; )
      bl = Re[--Ne], Re[Ne] = null, _e = Re[--Ne], Re[Ne] = null, Je = Re[--Ne], Re[Ne] = null;
  }
  function Ws(t, e) {
    Re[Ne++] = Je, Re[Ne++] = _e, Re[Ne++] = bl, Je = e.id, _e = e.overflow, bl = t;
  }
  var te = null, Rt = null, mt = !1, pl = null, Ye = !1, xf = Error(c(519));
  function wl(t) {
    var e = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ua(Qe(e, t)), xf;
  }
  function ks(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[$t] = t, e[ce] = n, l) {
      case "dialog":
        dt("cancel", e), dt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        dt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Fa.length; l++)
          dt(Fa[l], e);
        break;
      case "source":
        dt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        dt("error", e), dt("load", e);
        break;
      case "details":
        dt("toggle", e);
        break;
      case "input":
        dt("invalid", e), ss(
          e,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        dt("invalid", e);
        break;
      case "textarea":
        dt("invalid", e), As(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || y1(e.textContent, l) ? (n.popover != null && (dt("beforetoggle", e), dt("toggle", e)), n.onScroll != null && dt("scroll", e), n.onScrollEnd != null && dt("scrollend", e), n.onClick != null && (e.onclick = tl), e = !0) : e = !1, e || wl(t, !0);
  }
  function Ps(t) {
    for (te = t.return; te; )
      switch (te.tag) {
        case 5:
        case 31:
        case 13:
          Ye = !1;
          return;
        case 27:
        case 3:
          Ye = !0;
          return;
        default:
          te = te.return;
      }
  }
  function Gn(t) {
    if (t !== te) return !1;
    if (!mt) return Ps(t), mt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || to(t.type, t.memoizedProps)), l = !l), l && Rt && wl(t), Ps(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Rt = w1(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Rt = w1(t);
    } else
      e === 27 ? (e = Rt, Ll(t.type) ? (t = uo, uo = null, Rt = t) : Rt = e) : Rt = te ? Le(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ln() {
    Rt = te = null, mt = !1;
  }
  function Lf() {
    var t = pl;
    return t !== null && (de === null ? de = t : de.push.apply(
      de,
      t
    ), pl = null), t;
  }
  function Ua(t) {
    pl === null ? pl = [t] : pl.push(t);
  }
  var Hf = w(null), nn = null, al = null;
  function Bl(t, e, l) {
    j(Hf, e._currentValue), e._currentValue = l;
  }
  function ul(t) {
    t._currentValue = Hf.current, H(Hf);
  }
  function qf(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function Gf(t, e, l, n) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var i = u.dependencies;
      if (i !== null) {
        var r = u.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var y = i;
          i = u;
          for (var E = 0; E < e.length; E++)
            if (y.context === e[E]) {
              i.lanes |= l, y = i.alternate, y !== null && (y.lanes |= l), qf(
                i.return,
                l,
                t
              ), n || (r = null);
              break t;
            }
          i = y.next;
        }
      } else if (u.tag === 18) {
        if (r = u.return, r === null) throw Error(c(341));
        r.lanes |= l, i = r.alternate, i !== null && (i.lanes |= l), qf(r, l, t), r = null;
      } else r = u.child;
      if (r !== null) r.return = u;
      else
        for (r = u; r !== null; ) {
          if (r === t) {
            r = null;
            break;
          }
          if (u = r.sibling, u !== null) {
            u.return = r.return, r = u;
            break;
          }
          r = r.return;
        }
      u = r;
    }
  }
  function In(t, e, l, n) {
    t = null;
    for (var u = e, i = !1; u !== null; ) {
      if (!i) {
        if ((u.flags & 524288) !== 0) i = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var r = u.alternate;
        if (r === null) throw Error(c(387));
        if (r = r.memoizedProps, r !== null) {
          var y = u.type;
          Se(u.pendingProps.value, r.value) || (t !== null ? t.push(y) : t = [y]);
        }
      } else if (u === J.current) {
        if (r = u.alternate, r === null) throw Error(c(387));
        r.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(tu) : t = [tu]);
      }
      u = u.return;
    }
    t !== null && Gf(
      e,
      t,
      l,
      n
    ), e.flags |= 262144;
  }
  function Gu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Se(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function an(t) {
    nn = t, al = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ee(t) {
    return $s(nn, t);
  }
  function Iu(t, e) {
    return nn === null && an(t), $s(t, e);
  }
  function $s(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, al === null) {
      if (t === null) throw Error(c(308));
      al = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else al = al.next = e;
    return l;
  }
  var gd = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, n) {
        t.push(n);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, md = a.unstable_scheduleCallback, vd = a.unstable_NormalPriority, Vt = {
    $$typeof: G,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function If() {
    return {
      controller: new gd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function za(t) {
    t.refCount--, t.refCount === 0 && md(vd, function() {
      t.controller.abort();
    });
  }
  var Ma = null, Zf = 0, Zn = 0, Vn = null;
  function Ed(t, e) {
    if (Ma === null) {
      var l = Ma = [];
      Zf = 0, Zn = Xc(), Vn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Zf++, e.then(tr, tr), e;
  }
  function tr() {
    if (--Zf === 0 && Ma !== null) {
      Vn !== null && (Vn.status = "fulfilled");
      var t = Ma;
      Ma = null, Zn = 0, Vn = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Sd(t, e) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        l.push(u);
      }
    };
    return t.then(
      function() {
        n.status = "fulfilled", n.value = e;
        for (var u = 0; u < l.length; u++) (0, l[u])(e);
      },
      function(u) {
        for (n.status = "rejected", n.reason = u, u = 0; u < l.length; u++)
          (0, l[u])(void 0);
      }
    ), n;
  }
  var er = O.S;
  O.S = function(t, e) {
    H0 = Pt(), typeof e == "object" && e !== null && typeof e.then == "function" && Ed(t, e), er !== null && er(t, e);
  };
  var un = w(null);
  function Vf() {
    var t = un.current;
    return t !== null ? t : Dt.pooledCache;
  }
  function Zu(t, e) {
    e === null ? j(un, un.current) : j(un, e.pool);
  }
  function lr() {
    var t = Vf();
    return t === null ? null : { parent: Vt._currentValue, pool: t };
  }
  var jn = Error(c(460)), jf = Error(c(474)), Vu = Error(c(542)), ju = { then: function() {
  } };
  function nr(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function ar(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(tl, tl), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, ir(t), t;
      default:
        if (typeof e.status == "string") e.then(tl, tl);
        else {
          if (t = Dt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(c(482));
          t = e, t.status = "pending", t.then(
            function(n) {
              if (e.status === "pending") {
                var u = e;
                u.status = "fulfilled", u.value = n;
              }
            },
            function(n) {
              if (e.status === "pending") {
                var u = e;
                u.status = "rejected", u.reason = n;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, ir(t), t;
        }
        throw cn = e, jn;
    }
  }
  function fn(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (cn = l, jn) : l;
    }
  }
  var cn = null;
  function ur() {
    if (cn === null) throw Error(c(459));
    var t = cn;
    return cn = null, t;
  }
  function ir(t) {
    if (t === jn || t === Vu)
      throw Error(c(483));
  }
  var Xn = null, Oa = 0;
  function Xu(t) {
    var e = Oa;
    return Oa += 1, Xn === null && (Xn = []), ar(Xn, t, e);
  }
  function Da(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ku(t, e) {
    throw e.$$typeof === b ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(
      c(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function fr(t) {
    function e(T, p) {
      if (t) {
        var C = T.deletions;
        C === null ? (T.deletions = [p], T.flags |= 16) : C.push(p);
      }
    }
    function l(T, p) {
      if (!t) return null;
      for (; p !== null; )
        e(T, p), p = p.sibling;
      return null;
    }
    function n(T) {
      for (var p = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? p.set(T.key, T) : p.set(T.index, T), T = T.sibling;
      return p;
    }
    function u(T, p) {
      return T = ll(T, p), T.index = 0, T.sibling = null, T;
    }
    function i(T, p, C) {
      return T.index = C, t ? (C = T.alternate, C !== null ? (C = C.index, C < p ? (T.flags |= 67108866, p) : C) : (T.flags |= 67108866, p)) : (T.flags |= 1048576, p);
    }
    function r(T) {
      return t && T.alternate === null && (T.flags |= 67108866), T;
    }
    function y(T, p, C, L) {
      return p === null || p.tag !== 6 ? (p = Qf(C, T.mode, L), p.return = T, p) : (p = u(p, C), p.return = T, p);
    }
    function E(T, p, C, L) {
      var et = C.type;
      return et === N ? Y(
        T,
        p,
        C.props.children,
        L,
        C.key
      ) : p !== null && (p.elementType === et || typeof et == "object" && et !== null && et.$$typeof === $ && fn(et) === p.type) ? (p = u(p, C.props), Da(p, C), p.return = T, p) : (p = Hu(
        C.type,
        C.key,
        C.props,
        null,
        T.mode,
        L
      ), Da(p, C), p.return = T, p);
    }
    function U(T, p, C, L) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== C.containerInfo || p.stateNode.implementation !== C.implementation ? (p = Rf(C, T.mode, L), p.return = T, p) : (p = u(p, C.children || []), p.return = T, p);
    }
    function Y(T, p, C, L, et) {
      return p === null || p.tag !== 7 ? (p = en(
        C,
        T.mode,
        L,
        et
      ), p.return = T, p) : (p = u(p, C), p.return = T, p);
    }
    function q(T, p, C) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return p = Qf(
          "" + p,
          T.mode,
          C
        ), p.return = T, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Q:
            return C = Hu(
              p.type,
              p.key,
              p.props,
              null,
              T.mode,
              C
            ), Da(C, p), C.return = T, C;
          case D:
            return p = Rf(
              p,
              T.mode,
              C
            ), p.return = T, p;
          case $:
            return p = fn(p), q(T, p, C);
        }
        if (lt(p) || it(p))
          return p = en(
            p,
            T.mode,
            C,
            null
          ), p.return = T, p;
        if (typeof p.then == "function")
          return q(T, Xu(p), C);
        if (p.$$typeof === G)
          return q(
            T,
            Iu(T, p),
            C
          );
        Ku(T, p);
      }
      return null;
    }
    function z(T, p, C, L) {
      var et = p !== null ? p.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return et !== null ? null : y(T, p, "" + C, L);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Q:
            return C.key === et ? E(T, p, C, L) : null;
          case D:
            return C.key === et ? U(T, p, C, L) : null;
          case $:
            return C = fn(C), z(T, p, C, L);
        }
        if (lt(C) || it(C))
          return et !== null ? null : Y(T, p, C, L, null);
        if (typeof C.then == "function")
          return z(
            T,
            p,
            Xu(C),
            L
          );
        if (C.$$typeof === G)
          return z(
            T,
            p,
            Iu(T, C),
            L
          );
        Ku(T, C);
      }
      return null;
    }
    function R(T, p, C, L, et) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return T = T.get(C) || null, y(p, T, "" + L, et);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Q:
            return T = T.get(
              L.key === null ? C : L.key
            ) || null, E(p, T, L, et);
          case D:
            return T = T.get(
              L.key === null ? C : L.key
            ) || null, U(p, T, L, et);
          case $:
            return L = fn(L), R(
              T,
              p,
              C,
              L,
              et
            );
        }
        if (lt(L) || it(L))
          return T = T.get(C) || null, Y(p, T, L, et, null);
        if (typeof L.then == "function")
          return R(
            T,
            p,
            C,
            Xu(L),
            et
          );
        if (L.$$typeof === G)
          return R(
            T,
            p,
            C,
            Iu(p, L),
            et
          );
        Ku(p, L);
      }
      return null;
    }
    function W(T, p, C, L) {
      for (var et = null, bt = null, P = p, st = p = 0, ht = null; P !== null && st < C.length; st++) {
        P.index > st ? (ht = P, P = null) : ht = P.sibling;
        var pt = z(
          T,
          P,
          C[st],
          L
        );
        if (pt === null) {
          P === null && (P = ht);
          break;
        }
        t && P && pt.alternate === null && e(T, P), p = i(pt, p, st), bt === null ? et = pt : bt.sibling = pt, bt = pt, P = ht;
      }
      if (st === C.length)
        return l(T, P), mt && nl(T, st), et;
      if (P === null) {
        for (; st < C.length; st++)
          P = q(T, C[st], L), P !== null && (p = i(
            P,
            p,
            st
          ), bt === null ? et = P : bt.sibling = P, bt = P);
        return mt && nl(T, st), et;
      }
      for (P = n(P); st < C.length; st++)
        ht = R(
          P,
          T,
          st,
          C[st],
          L
        ), ht !== null && (t && ht.alternate !== null && P.delete(
          ht.key === null ? st : ht.key
        ), p = i(
          ht,
          p,
          st
        ), bt === null ? et = ht : bt.sibling = ht, bt = ht);
      return t && P.forEach(function(Zl) {
        return e(T, Zl);
      }), mt && nl(T, st), et;
    }
    function nt(T, p, C, L) {
      if (C == null) throw Error(c(151));
      for (var et = null, bt = null, P = p, st = p = 0, ht = null, pt = C.next(); P !== null && !pt.done; st++, pt = C.next()) {
        P.index > st ? (ht = P, P = null) : ht = P.sibling;
        var Zl = z(T, P, pt.value, L);
        if (Zl === null) {
          P === null && (P = ht);
          break;
        }
        t && P && Zl.alternate === null && e(T, P), p = i(Zl, p, st), bt === null ? et = Zl : bt.sibling = Zl, bt = Zl, P = ht;
      }
      if (pt.done)
        return l(T, P), mt && nl(T, st), et;
      if (P === null) {
        for (; !pt.done; st++, pt = C.next())
          pt = q(T, pt.value, L), pt !== null && (p = i(pt, p, st), bt === null ? et = pt : bt.sibling = pt, bt = pt);
        return mt && nl(T, st), et;
      }
      for (P = n(P); !pt.done; st++, pt = C.next())
        pt = R(P, T, st, pt.value, L), pt !== null && (t && pt.alternate !== null && P.delete(pt.key === null ? st : pt.key), p = i(pt, p, st), bt === null ? et = pt : bt.sibling = pt, bt = pt);
      return t && P.forEach(function(Dy) {
        return e(T, Dy);
      }), mt && nl(T, st), et;
    }
    function Mt(T, p, C, L) {
      if (typeof C == "object" && C !== null && C.type === N && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Q:
            t: {
              for (var et = C.key; p !== null; ) {
                if (p.key === et) {
                  if (et = C.type, et === N) {
                    if (p.tag === 7) {
                      l(
                        T,
                        p.sibling
                      ), L = u(
                        p,
                        C.props.children
                      ), L.return = T, T = L;
                      break t;
                    }
                  } else if (p.elementType === et || typeof et == "object" && et !== null && et.$$typeof === $ && fn(et) === p.type) {
                    l(
                      T,
                      p.sibling
                    ), L = u(p, C.props), Da(L, C), L.return = T, T = L;
                    break t;
                  }
                  l(T, p);
                  break;
                } else e(T, p);
                p = p.sibling;
              }
              C.type === N ? (L = en(
                C.props.children,
                T.mode,
                L,
                C.key
              ), L.return = T, T = L) : (L = Hu(
                C.type,
                C.key,
                C.props,
                null,
                T.mode,
                L
              ), Da(L, C), L.return = T, T = L);
            }
            return r(T);
          case D:
            t: {
              for (et = C.key; p !== null; ) {
                if (p.key === et)
                  if (p.tag === 4 && p.stateNode.containerInfo === C.containerInfo && p.stateNode.implementation === C.implementation) {
                    l(
                      T,
                      p.sibling
                    ), L = u(p, C.children || []), L.return = T, T = L;
                    break t;
                  } else {
                    l(T, p);
                    break;
                  }
                else e(T, p);
                p = p.sibling;
              }
              L = Rf(C, T.mode, L), L.return = T, T = L;
            }
            return r(T);
          case $:
            return C = fn(C), Mt(
              T,
              p,
              C,
              L
            );
        }
        if (lt(C))
          return W(
            T,
            p,
            C,
            L
          );
        if (it(C)) {
          if (et = it(C), typeof et != "function") throw Error(c(150));
          return C = et.call(C), nt(
            T,
            p,
            C,
            L
          );
        }
        if (typeof C.then == "function")
          return Mt(
            T,
            p,
            Xu(C),
            L
          );
        if (C.$$typeof === G)
          return Mt(
            T,
            p,
            Iu(T, C),
            L
          );
        Ku(T, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, p !== null && p.tag === 6 ? (l(T, p.sibling), L = u(p, C), L.return = T, T = L) : (l(T, p), L = Qf(C, T.mode, L), L.return = T, T = L), r(T)) : l(T, p);
    }
    return function(T, p, C, L) {
      try {
        Oa = 0;
        var et = Mt(
          T,
          p,
          C,
          L
        );
        return Xn = null, et;
      } catch (P) {
        if (P === jn || P === Vu) throw P;
        var bt = be(29, P, null, T.mode);
        return bt.lanes = L, bt.return = T, bt;
      } finally {
      }
    };
  }
  var on = fr(!0), cr = fr(!1), Tl = !1;
  function Xf(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Kf(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Cl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ul(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Bt & 2) !== 0) {
      var u = n.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), n.pending = e, e = Lu(t), Xs(t, null, l), e;
    }
    return xu(t, n, e, l), Lu(t);
  }
  function Qa(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, $o(t, l);
    }
  }
  function Jf(t, e) {
    var l = t.updateQueue, n = t.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var u = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var r = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? u = i = r : i = i.next = r, l = l.next;
        } while (l !== null);
        i === null ? u = i = e : i = i.next = e;
      } else u = i = e;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: i,
        shared: n.shared,
        callbacks: n.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var _f = !1;
  function Ra() {
    if (_f) {
      var t = Vn;
      if (t !== null) throw t;
    }
  }
  function Na(t, e, l, n) {
    _f = !1;
    var u = t.updateQueue;
    Tl = !1;
    var i = u.firstBaseUpdate, r = u.lastBaseUpdate, y = u.shared.pending;
    if (y !== null) {
      u.shared.pending = null;
      var E = y, U = E.next;
      E.next = null, r === null ? i = U : r.next = U, r = E;
      var Y = t.alternate;
      Y !== null && (Y = Y.updateQueue, y = Y.lastBaseUpdate, y !== r && (y === null ? Y.firstBaseUpdate = U : y.next = U, Y.lastBaseUpdate = E));
    }
    if (i !== null) {
      var q = u.baseState;
      r = 0, Y = U = E = null, y = i;
      do {
        var z = y.lane & -536870913, R = z !== y.lane;
        if (R ? (yt & z) === z : (n & z) === z) {
          z !== 0 && z === Zn && (_f = !0), Y !== null && (Y = Y.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          t: {
            var W = t, nt = y;
            z = e;
            var Mt = l;
            switch (nt.tag) {
              case 1:
                if (W = nt.payload, typeof W == "function") {
                  q = W.call(Mt, q, z);
                  break t;
                }
                q = W;
                break t;
              case 3:
                W.flags = W.flags & -65537 | 128;
              case 0:
                if (W = nt.payload, z = typeof W == "function" ? W.call(Mt, q, z) : W, z == null) break t;
                q = v({}, q, z);
                break t;
              case 2:
                Tl = !0;
            }
          }
          z = y.callback, z !== null && (t.flags |= 64, R && (t.flags |= 8192), R = u.callbacks, R === null ? u.callbacks = [z] : R.push(z));
        } else
          R = {
            lane: z,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, Y === null ? (U = Y = R, E = q) : Y = Y.next = R, r |= z;
        if (y = y.next, y === null) {
          if (y = u.shared.pending, y === null)
            break;
          R = y, y = R.next, R.next = null, u.lastBaseUpdate = R, u.shared.pending = null;
        }
      } while (!0);
      Y === null && (E = q), u.baseState = E, u.firstBaseUpdate = U, u.lastBaseUpdate = Y, i === null && (u.shared.lanes = 0), Ql |= r, t.lanes = r, t.memoizedState = q;
    }
  }
  function or(t, e) {
    if (typeof t != "function")
      throw Error(c(191, t));
    t.call(e);
  }
  function sr(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        or(l[t], e);
  }
  var Kn = w(null), Ju = w(0);
  function rr(t, e) {
    t = yl, j(Ju, t), j(Kn, e), yl = t | e.baseLanes;
  }
  function Ff() {
    j(Ju, yl), j(Kn, Kn.current);
  }
  function Wf() {
    yl = Ju.current, H(Kn), H(Ju);
  }
  var pe = w(null), xe = null;
  function zl(t) {
    var e = t.alternate;
    j(qt, qt.current & 1), j(pe, t), xe === null && (e === null || Kn.current !== null || e.memoizedState !== null) && (xe = t);
  }
  function kf(t) {
    j(qt, qt.current), j(pe, t), xe === null && (xe = t);
  }
  function Ar(t) {
    t.tag === 22 ? (j(qt, qt.current), j(pe, t), xe === null && (xe = t)) : Ml();
  }
  function Ml() {
    j(qt, qt.current), j(pe, pe.current);
  }
  function we(t) {
    H(pe), xe === t && (xe = null), H(qt);
  }
  var qt = w(0);
  function _u(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || no(l) || ao(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var il = 0, ot = null, Ut = null, jt = null, Fu = !1, Jn = !1, sn = !1, Wu = 0, Ya = 0, _n = null, bd = 0;
  function Lt() {
    throw Error(c(321));
  }
  function Pf(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Se(t[l], e[l])) return !1;
    return !0;
  }
  function $f(t, e, l, n, u, i) {
    return il = i, ot = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, O.H = t === null || t.memoizedState === null ? Fr : yc, sn = !1, i = l(n, u), sn = !1, Jn && (i = yr(
      e,
      l,
      n,
      u
    )), dr(t), i;
  }
  function dr(t) {
    O.H = Ha;
    var e = Ut !== null && Ut.next !== null;
    if (il = 0, jt = Ut = ot = null, Fu = !1, Ya = 0, _n = null, e) throw Error(c(300));
    t === null || Xt || (t = t.dependencies, t !== null && Gu(t) && (Xt = !0));
  }
  function yr(t, e, l, n) {
    ot = t;
    var u = 0;
    do {
      if (Jn && (_n = null), Ya = 0, Jn = !1, 25 <= u) throw Error(c(301));
      if (u += 1, jt = Ut = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      O.H = Wr, i = e(l, n);
    } while (Jn);
    return i;
  }
  function pd() {
    var t = O.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? xa(e) : e, t = t.useState()[0], (Ut !== null ? Ut.memoizedState : null) !== t && (ot.flags |= 1024), e;
  }
  function tc() {
    var t = Wu !== 0;
    return Wu = 0, t;
  }
  function ec(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function lc(t) {
    if (Fu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Fu = !1;
    }
    il = 0, jt = Ut = ot = null, Jn = !1, Ya = Wu = 0, _n = null;
  }
  function ie() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return jt === null ? ot.memoizedState = jt = t : jt = jt.next = t, jt;
  }
  function Gt() {
    if (Ut === null) {
      var t = ot.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ut.next;
    var e = jt === null ? ot.memoizedState : jt.next;
    if (e !== null)
      jt = e, Ut = t;
    else {
      if (t === null)
        throw ot.alternate === null ? Error(c(467)) : Error(c(310));
      Ut = t, t = {
        memoizedState: Ut.memoizedState,
        baseState: Ut.baseState,
        baseQueue: Ut.baseQueue,
        queue: Ut.queue,
        next: null
      }, jt === null ? ot.memoizedState = jt = t : jt = jt.next = t;
    }
    return jt;
  }
  function ku() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function xa(t) {
    var e = Ya;
    return Ya += 1, _n === null && (_n = []), t = ar(_n, t, e), e = ot, (jt === null ? e.memoizedState : jt.next) === null && (e = e.alternate, O.H = e === null || e.memoizedState === null ? Fr : yc), t;
  }
  function Pu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return xa(t);
      if (t.$$typeof === G) return ee(t);
    }
    throw Error(c(438, String(t)));
  }
  function nc(t) {
    var e = null, l = ot.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var n = ot.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = {
        data: n.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = ku(), ot.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = Et;
    return e.index++, l;
  }
  function fl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function $u(t) {
    var e = Gt();
    return ac(e, Ut, t);
  }
  function ac(t, e, l) {
    var n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = l;
    var u = t.baseQueue, i = n.pending;
    if (i !== null) {
      if (u !== null) {
        var r = u.next;
        u.next = i.next, i.next = r;
      }
      e.baseQueue = u = i, n.pending = null;
    }
    if (i = t.baseState, u === null) t.memoizedState = i;
    else {
      e = u.next;
      var y = r = null, E = null, U = e, Y = !1;
      do {
        var q = U.lane & -536870913;
        if (q !== U.lane ? (yt & q) === q : (il & q) === q) {
          var z = U.revertLane;
          if (z === 0)
            E !== null && (E = E.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }), q === Zn && (Y = !0);
          else if ((il & z) === z) {
            U = U.next, z === Zn && (Y = !0);
            continue;
          } else
            q = {
              lane: 0,
              revertLane: U.revertLane,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, E === null ? (y = E = q, r = i) : E = E.next = q, ot.lanes |= z, Ql |= z;
          q = U.action, sn && l(i, q), i = U.hasEagerState ? U.eagerState : l(i, q);
        } else
          z = {
            lane: q,
            revertLane: U.revertLane,
            gesture: U.gesture,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          }, E === null ? (y = E = z, r = i) : E = E.next = z, ot.lanes |= q, Ql |= q;
        U = U.next;
      } while (U !== null && U !== e);
      if (E === null ? r = i : E.next = y, !Se(i, t.memoizedState) && (Xt = !0, Y && (l = Vn, l !== null)))
        throw l;
      t.memoizedState = i, t.baseState = r, t.baseQueue = E, n.lastRenderedState = i;
    }
    return u === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function uc(t) {
    var e = Gt(), l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch, u = l.pending, i = e.memoizedState;
    if (u !== null) {
      l.pending = null;
      var r = u = u.next;
      do
        i = t(i, r.action), r = r.next;
      while (r !== u);
      Se(i, e.memoizedState) || (Xt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function hr(t, e, l) {
    var n = ot, u = Gt(), i = mt;
    if (i) {
      if (l === void 0) throw Error(c(407));
      l = l();
    } else l = e();
    var r = !Se(
      (Ut || u).memoizedState,
      l
    );
    if (r && (u.memoizedState = l, Xt = !0), u = u.queue, cc(vr.bind(null, n, u, t), [
      t
    ]), u.getSnapshot !== e || r || jt !== null && jt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Fn(
        9,
        { destroy: void 0 },
        mr.bind(
          null,
          n,
          u,
          l,
          e
        ),
        null
      ), Dt === null) throw Error(c(349));
      i || (il & 127) !== 0 || gr(n, e, l);
    }
    return l;
  }
  function gr(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = ot.updateQueue, e === null ? (e = ku(), ot.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function mr(t, e, l, n) {
    e.value = l, e.getSnapshot = n, Er(e) && Sr(t);
  }
  function vr(t, e, l) {
    return l(function() {
      Er(e) && Sr(t);
    });
  }
  function Er(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Se(t, l);
    } catch {
      return !0;
    }
  }
  function Sr(t) {
    var e = tn(t, 2);
    e !== null && ye(e, t, 2);
  }
  function ic(t) {
    var e = ie();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), sn) {
        vl(!0);
        try {
          l();
        } finally {
          vl(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fl,
      lastRenderedState: t
    }, e;
  }
  function br(t, e, l, n) {
    return t.baseState = l, ac(
      t,
      Ut,
      typeof n == "function" ? n : fl
    );
  }
  function wd(t, e, l, n, u) {
    if (li(t)) throw Error(c(485));
    if (t = e.action, t !== null) {
      var i = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(r) {
          i.listeners.push(r);
        }
      };
      O.T !== null ? l(!0) : i.isTransition = !1, n(i), l = e.pending, l === null ? (i.next = e.pending = i, pr(e, i)) : (i.next = l.next, e.pending = l.next = i);
    }
  }
  function pr(t, e) {
    var l = e.action, n = e.payload, u = t.state;
    if (e.isTransition) {
      var i = O.T, r = {};
      O.T = r;
      try {
        var y = l(u, n), E = O.S;
        E !== null && E(r, y), wr(t, e, y);
      } catch (U) {
        fc(t, e, U);
      } finally {
        i !== null && r.types !== null && (i.types = r.types), O.T = i;
      }
    } else
      try {
        i = l(u, n), wr(t, e, i);
      } catch (U) {
        fc(t, e, U);
      }
  }
  function wr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        Br(t, e, n);
      },
      function(n) {
        return fc(t, e, n);
      }
    ) : Br(t, e, l);
  }
  function Br(t, e, l) {
    e.status = "fulfilled", e.value = l, Tr(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, pr(t, l)));
  }
  function fc(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, Tr(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function Tr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Cr(t, e) {
    return e;
  }
  function Ur(t, e) {
    if (mt) {
      var l = Dt.formState;
      if (l !== null) {
        t: {
          var n = ot;
          if (mt) {
            if (Rt) {
              e: {
                for (var u = Rt, i = Ye; u.nodeType !== 8; ) {
                  if (!i) {
                    u = null;
                    break e;
                  }
                  if (u = Le(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                i = u.data, u = i === "F!" || i === "F" ? u : null;
              }
              if (u) {
                Rt = Le(
                  u.nextSibling
                ), n = u.data === "F!";
                break t;
              }
            }
            wl(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return l = ie(), l.memoizedState = l.baseState = e, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cr,
      lastRenderedState: e
    }, l.queue = n, l = Kr.bind(
      null,
      ot,
      n
    ), n.dispatch = l, n = ic(!1), i = dc.bind(
      null,
      ot,
      !1,
      n.queue
    ), n = ie(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = u, l = wd.bind(
      null,
      ot,
      u,
      i,
      l
    ), u.dispatch = l, n.memoizedState = t, [e, l, !1];
  }
  function zr(t) {
    var e = Gt();
    return Mr(e, Ut, t);
  }
  function Mr(t, e, l) {
    if (e = ac(
      t,
      e,
      Cr
    )[0], t = $u(fl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = xa(e);
      } catch (r) {
        throw r === jn ? Vu : r;
      }
    else n = e;
    e = Gt();
    var u = e.queue, i = u.dispatch;
    return l !== e.memoizedState && (ot.flags |= 2048, Fn(
      9,
      { destroy: void 0 },
      Bd.bind(null, u, l),
      null
    )), [n, i, t];
  }
  function Bd(t, e) {
    t.action = e;
  }
  function Or(t) {
    var e = Gt(), l = Ut;
    if (l !== null)
      return Mr(e, l, t);
    Gt(), e = e.memoizedState, l = Gt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function Fn(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = ot.updateQueue, e === null && (e = ku(), ot.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function Dr() {
    return Gt().memoizedState;
  }
  function ti(t, e, l, n) {
    var u = ie();
    ot.flags |= t, u.memoizedState = Fn(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function ei(t, e, l, n) {
    var u = Gt();
    n = n === void 0 ? null : n;
    var i = u.memoizedState.inst;
    Ut !== null && n !== null && Pf(n, Ut.memoizedState.deps) ? u.memoizedState = Fn(e, i, l, n) : (ot.flags |= t, u.memoizedState = Fn(
      1 | e,
      i,
      l,
      n
    ));
  }
  function Qr(t, e) {
    ti(8390656, 8, t, e);
  }
  function cc(t, e) {
    ei(2048, 8, t, e);
  }
  function Td(t) {
    ot.flags |= 4;
    var e = ot.updateQueue;
    if (e === null)
      e = ku(), ot.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Rr(t) {
    var e = Gt().memoizedState;
    return Td({ ref: e, nextImpl: t }), function() {
      if ((Bt & 2) !== 0) throw Error(c(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Nr(t, e) {
    return ei(4, 2, t, e);
  }
  function Yr(t, e) {
    return ei(4, 4, t, e);
  }
  function xr(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Lr(t, e, l) {
    l = l != null ? l.concat([t]) : null, ei(4, 4, xr.bind(null, e, t), l);
  }
  function oc() {
  }
  function Hr(t, e) {
    var l = Gt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && Pf(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function qr(t, e) {
    var l = Gt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && Pf(e, n[1]))
      return n[0];
    if (n = t(), sn) {
      vl(!0);
      try {
        t();
      } finally {
        vl(!1);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function sc(t, e, l) {
    return l === void 0 || (il & 1073741824) !== 0 && (yt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = G0(), ot.lanes |= t, Ql |= t, l);
  }
  function Gr(t, e, l, n) {
    return Se(l, e) ? l : Kn.current !== null ? (t = sc(t, l, n), Se(t, e) || (Xt = !0), t) : (il & 42) === 0 || (il & 1073741824) !== 0 && (yt & 261930) === 0 ? (Xt = !0, t.memoizedState = l) : (t = G0(), ot.lanes |= t, Ql |= t, e);
  }
  function Ir(t, e, l, n, u) {
    var i = X.p;
    X.p = i !== 0 && 8 > i ? i : 8;
    var r = O.T, y = {};
    O.T = y, dc(t, !1, e, l);
    try {
      var E = u(), U = O.S;
      if (U !== null && U(y, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var Y = Sd(
          E,
          n
        );
        La(
          t,
          e,
          Y,
          Ce(t)
        );
      } else
        La(
          t,
          e,
          n,
          Ce(t)
        );
    } catch (q) {
      La(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: q },
        Ce()
      );
    } finally {
      X.p = i, r !== null && y.types !== null && (r.types = y.types), O.T = r;
    }
  }
  function Cd() {
  }
  function rc(t, e, l, n) {
    if (t.tag !== 5) throw Error(c(476));
    var u = Zr(t).queue;
    Ir(
      t,
      u,
      e,
      tt,
      l === null ? Cd : function() {
        return Vr(t), l(n);
      }
    );
  }
  function Zr(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: tt,
      baseState: tt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fl,
        lastRenderedState: tt
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fl,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Vr(t) {
    var e = Zr(t);
    e.next === null && (e = t.alternate.memoizedState), La(
      t,
      e.next.queue,
      {},
      Ce()
    );
  }
  function Ac() {
    return ee(tu);
  }
  function jr() {
    return Gt().memoizedState;
  }
  function Xr() {
    return Gt().memoizedState;
  }
  function Ud(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Ce();
          t = Cl(l);
          var n = Ul(e, t, l);
          n !== null && (ye(n, e, l), Qa(n, e, l)), e = { cache: If() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function zd(t, e, l) {
    var n = Ce();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, li(t) ? Jr(e, l) : (l = Of(t, e, l, n), l !== null && (ye(l, t, n), _r(l, e, n)));
  }
  function Kr(t, e, l) {
    var n = Ce();
    La(t, e, l, n);
  }
  function La(t, e, l, n) {
    var u = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (li(t)) Jr(e, u);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var r = e.lastRenderedState, y = i(r, l);
          if (u.hasEagerState = !0, u.eagerState = y, Se(y, r))
            return xu(t, e, u, 0), Dt === null && Yu(), !1;
        } catch {
        } finally {
        }
      if (l = Of(t, e, u, n), l !== null)
        return ye(l, t, n), _r(l, e, n), !0;
    }
    return !1;
  }
  function dc(t, e, l, n) {
    if (n = {
      lane: 2,
      revertLane: Xc(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, li(t)) {
      if (e) throw Error(c(479));
    } else
      e = Of(
        t,
        l,
        n,
        2
      ), e !== null && ye(e, t, 2);
  }
  function li(t) {
    var e = t.alternate;
    return t === ot || e !== null && e === ot;
  }
  function Jr(t, e) {
    Jn = Fu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function _r(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, $o(t, l);
    }
  }
  var Ha = {
    readContext: ee,
    use: Pu,
    useCallback: Lt,
    useContext: Lt,
    useEffect: Lt,
    useImperativeHandle: Lt,
    useLayoutEffect: Lt,
    useInsertionEffect: Lt,
    useMemo: Lt,
    useReducer: Lt,
    useRef: Lt,
    useState: Lt,
    useDebugValue: Lt,
    useDeferredValue: Lt,
    useTransition: Lt,
    useSyncExternalStore: Lt,
    useId: Lt,
    useHostTransitionStatus: Lt,
    useFormState: Lt,
    useActionState: Lt,
    useOptimistic: Lt,
    useMemoCache: Lt,
    useCacheRefresh: Lt
  };
  Ha.useEffectEvent = Lt;
  var Fr = {
    readContext: ee,
    use: Pu,
    useCallback: function(t, e) {
      return ie().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ee,
    useEffect: Qr,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, ti(
        4194308,
        4,
        xr.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return ti(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      ti(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = ie();
      e = e === void 0 ? null : e;
      var n = t();
      if (sn) {
        vl(!0);
        try {
          t();
        } finally {
          vl(!1);
        }
      }
      return l.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, l) {
      var n = ie();
      if (l !== void 0) {
        var u = l(e);
        if (sn) {
          vl(!0);
          try {
            l(e);
          } finally {
            vl(!1);
          }
        }
      } else u = e;
      return n.memoizedState = n.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, n.queue = t, t = t.dispatch = zd.bind(
        null,
        ot,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var e = ie();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = ic(t);
      var e = t.queue, l = Kr.bind(null, ot, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: oc,
    useDeferredValue: function(t, e) {
      var l = ie();
      return sc(l, t, e);
    },
    useTransition: function() {
      var t = ic(!1);
      return t = Ir.bind(
        null,
        ot,
        t.queue,
        !0,
        !1
      ), ie().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = ot, u = ie();
      if (mt) {
        if (l === void 0)
          throw Error(c(407));
        l = l();
      } else {
        if (l = e(), Dt === null)
          throw Error(c(349));
        (yt & 127) !== 0 || gr(n, e, l);
      }
      u.memoizedState = l;
      var i = { value: l, getSnapshot: e };
      return u.queue = i, Qr(vr.bind(null, n, i, t), [
        t
      ]), n.flags |= 2048, Fn(
        9,
        { destroy: void 0 },
        mr.bind(
          null,
          n,
          i,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = ie(), e = Dt.identifierPrefix;
      if (mt) {
        var l = _e, n = Je;
        l = (n & ~(1 << 32 - Ee(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Wu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = bd++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Ac,
    useFormState: Ur,
    useActionState: Ur,
    useOptimistic: function(t) {
      var e = ie();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = dc.bind(
        null,
        ot,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: nc,
    useCacheRefresh: function() {
      return ie().memoizedState = Ud.bind(
        null,
        ot
      );
    },
    useEffectEvent: function(t) {
      var e = ie(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((Bt & 2) !== 0)
          throw Error(c(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, yc = {
    readContext: ee,
    use: Pu,
    useCallback: Hr,
    useContext: ee,
    useEffect: cc,
    useImperativeHandle: Lr,
    useInsertionEffect: Nr,
    useLayoutEffect: Yr,
    useMemo: qr,
    useReducer: $u,
    useRef: Dr,
    useState: function() {
      return $u(fl);
    },
    useDebugValue: oc,
    useDeferredValue: function(t, e) {
      var l = Gt();
      return Gr(
        l,
        Ut.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = $u(fl)[0], e = Gt().memoizedState;
      return [
        typeof t == "boolean" ? t : xa(t),
        e
      ];
    },
    useSyncExternalStore: hr,
    useId: jr,
    useHostTransitionStatus: Ac,
    useFormState: zr,
    useActionState: zr,
    useOptimistic: function(t, e) {
      var l = Gt();
      return br(l, Ut, t, e);
    },
    useMemoCache: nc,
    useCacheRefresh: Xr
  };
  yc.useEffectEvent = Rr;
  var Wr = {
    readContext: ee,
    use: Pu,
    useCallback: Hr,
    useContext: ee,
    useEffect: cc,
    useImperativeHandle: Lr,
    useInsertionEffect: Nr,
    useLayoutEffect: Yr,
    useMemo: qr,
    useReducer: uc,
    useRef: Dr,
    useState: function() {
      return uc(fl);
    },
    useDebugValue: oc,
    useDeferredValue: function(t, e) {
      var l = Gt();
      return Ut === null ? sc(l, t, e) : Gr(
        l,
        Ut.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = uc(fl)[0], e = Gt().memoizedState;
      return [
        typeof t == "boolean" ? t : xa(t),
        e
      ];
    },
    useSyncExternalStore: hr,
    useId: jr,
    useHostTransitionStatus: Ac,
    useFormState: Or,
    useActionState: Or,
    useOptimistic: function(t, e) {
      var l = Gt();
      return Ut !== null ? br(l, Ut, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: nc,
    useCacheRefresh: Xr
  };
  Wr.useEffectEvent = Rr;
  function hc(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : v({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var gc = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var n = Ce(), u = Cl(n);
      u.payload = e, l != null && (u.callback = l), e = Ul(t, u, n), e !== null && (ye(e, t, n), Qa(e, t, n));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var n = Ce(), u = Cl(n);
      u.tag = 1, u.payload = e, l != null && (u.callback = l), e = Ul(t, u, n), e !== null && (ye(e, t, n), Qa(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Ce(), n = Cl(l);
      n.tag = 2, e != null && (n.callback = e), e = Ul(t, n, l), e !== null && (ye(e, t, l), Qa(e, t, l));
    }
  };
  function kr(t, e, l, n, u, i, r) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, i, r) : e.prototype && e.prototype.isPureReactComponent ? !Ba(l, n) || !Ba(u, i) : !0;
  }
  function Pr(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && gc.enqueueReplaceState(e, e.state, null);
  }
  function rn(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e)
        n !== "ref" && (l[n] = e[n]);
    }
    if (t = t.defaultProps) {
      l === e && (l = v({}, l));
      for (var u in t)
        l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  function $r(t) {
    Nu(t);
  }
  function t0(t) {
    console.error(t);
  }
  function e0(t) {
    Nu(t);
  }
  function ni(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function l0(t, e, l) {
    try {
      var n = t.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function mc(t, e, l) {
    return l = Cl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      ni(t, e);
    }, l;
  }
  function n0(t) {
    return t = Cl(t), t.tag = 3, t;
  }
  function a0(t, e, l, n) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var i = n.value;
      t.payload = function() {
        return u(i);
      }, t.callback = function() {
        l0(e, l, n);
      };
    }
    var r = l.stateNode;
    r !== null && typeof r.componentDidCatch == "function" && (t.callback = function() {
      l0(e, l, n), typeof u != "function" && (Rl === null ? Rl = /* @__PURE__ */ new Set([this]) : Rl.add(this));
      var y = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function Md(t, e, l, n, u) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && In(
        e,
        l,
        u,
        !0
      ), l = pe.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return xe === null ? hi() : l.alternate === null && Ht === 0 && (Ht = 3), l.flags &= -257, l.flags |= 65536, l.lanes = u, n === ju ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), Zc(t, n, u)), !1;
          case 22:
            return l.flags |= 65536, n === ju ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Zc(t, n, u)), !1;
        }
        throw Error(c(435, l.tag));
      }
      return Zc(t, n, u), hi(), !1;
    }
    if (mt)
      return e = pe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, n !== xf && (t = Error(c(422), { cause: n }), Ua(Qe(t, l)))) : (n !== xf && (e = Error(c(423), {
        cause: n
      }), Ua(
        Qe(e, l)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, n = Qe(n, l), u = mc(
        t.stateNode,
        n,
        u
      ), Jf(t, u), Ht !== 4 && (Ht = 2)), !1;
    var i = Error(c(520), { cause: n });
    if (i = Qe(i, l), Ka === null ? Ka = [i] : Ka.push(i), Ht !== 4 && (Ht = 2), e === null) return !0;
    n = Qe(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = u & -u, l.lanes |= t, t = mc(l.stateNode, n, t), Jf(l, t), !1;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Rl === null || !Rl.has(i))))
            return l.flags |= 65536, u &= -u, l.lanes |= u, u = n0(u), a0(
              u,
              t,
              l,
              n
            ), Jf(l, u), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var vc = Error(c(461)), Xt = !1;
  function le(t, e, l, n) {
    e.child = t === null ? cr(e, null, l, n) : on(
      e,
      t.child,
      l,
      n
    );
  }
  function u0(t, e, l, n, u) {
    l = l.render;
    var i = e.ref;
    if ("ref" in n) {
      var r = {};
      for (var y in n)
        y !== "ref" && (r[y] = n[y]);
    } else r = n;
    return an(e), n = $f(
      t,
      e,
      l,
      r,
      i,
      u
    ), y = tc(), t !== null && !Xt ? (ec(t, e, u), cl(t, e, u)) : (mt && y && Nf(e), e.flags |= 1, le(t, e, n, u), e.child);
  }
  function i0(t, e, l, n, u) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !Df(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, f0(
        t,
        e,
        i,
        n,
        u
      )) : (t = Hu(
        l.type,
        null,
        n,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !Cc(t, u)) {
      var r = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ba, l(r, n) && t.ref === e.ref)
        return cl(t, e, u);
    }
    return e.flags |= 1, t = ll(i, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function f0(t, e, l, n, u) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (Ba(i, n) && t.ref === e.ref)
        if (Xt = !1, e.pendingProps = n = i, Cc(t, u))
          (t.flags & 131072) !== 0 && (Xt = !0);
        else
          return e.lanes = t.lanes, cl(t, e, u);
    }
    return Ec(
      t,
      e,
      l,
      n,
      u
    );
  }
  function c0(t, e, l, n) {
    var u = n.children, i = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, t !== null) {
          for (n = e.child = t.child, u = 0; n !== null; )
            u = u | n.lanes | n.childLanes, n = n.sibling;
          n = u & ~i;
        } else n = 0, e.child = null;
        return o0(
          t,
          e,
          i,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Zu(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? rr(e, i) : Ff(), Ar(e);
      else
        return n = e.lanes = 536870912, o0(
          t,
          e,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (Zu(e, i.cachePool), rr(e, i), Ml(), e.memoizedState = null) : (t !== null && Zu(e, null), Ff(), Ml());
    return le(t, e, u, l), e.child;
  }
  function qa(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function o0(t, e, l, n, u) {
    var i = Vf();
    return i = i === null ? null : { parent: Vt._currentValue, pool: i }, e.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, t !== null && Zu(e, null), Ff(), Ar(e), t !== null && In(t, e, n, !0), e.childLanes = u, null;
  }
  function ai(t, e) {
    return e = ii(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function s0(t, e, l) {
    return on(e, t.child, null, l), t = ai(e, e.pendingProps), t.flags |= 2, we(e), e.memoizedState = null, t;
  }
  function Od(t, e, l) {
    var n = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (mt) {
        if (n.mode === "hidden")
          return t = ai(e, n), e.lanes = 536870912, qa(null, t);
        if (kf(e), (t = Rt) ? (t = p1(
          t,
          Ye
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: bl !== null ? { id: Je, overflow: _e } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Js(t), l.return = e, e.child = l, te = e, Rt = null)) : t = null, t === null) throw wl(e);
        return e.lanes = 536870912, null;
      }
      return ai(e, n);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var r = i.dehydrated;
      if (kf(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = s0(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(c(558));
      else if (Xt || In(t, e, l, !1), u = (l & t.childLanes) !== 0, Xt || u) {
        if (n = Dt, n !== null && (r = ts(n, l), r !== 0 && r !== i.retryLane))
          throw i.retryLane = r, tn(t, r), ye(n, t, r), vc;
        hi(), e = s0(
          t,
          e,
          l
        );
      } else
        t = i.treeContext, Rt = Le(r.nextSibling), te = e, mt = !0, pl = null, Ye = !1, t !== null && Ws(e, t), e = ai(e, n), e.flags |= 4096;
      return e;
    }
    return t = ll(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ui(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(c(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Ec(t, e, l, n, u) {
    return an(e), l = $f(
      t,
      e,
      l,
      n,
      void 0,
      u
    ), n = tc(), t !== null && !Xt ? (ec(t, e, u), cl(t, e, u)) : (mt && n && Nf(e), e.flags |= 1, le(t, e, l, u), e.child);
  }
  function r0(t, e, l, n, u, i) {
    return an(e), e.updateQueue = null, l = yr(
      e,
      n,
      l,
      u
    ), dr(t), n = tc(), t !== null && !Xt ? (ec(t, e, i), cl(t, e, i)) : (mt && n && Nf(e), e.flags |= 1, le(t, e, l, i), e.child);
  }
  function A0(t, e, l, n, u) {
    if (an(e), e.stateNode === null) {
      var i = Ln, r = l.contextType;
      typeof r == "object" && r !== null && (i = ee(r)), i = new l(n, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = gc, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = n, i.state = e.memoizedState, i.refs = {}, Xf(e), r = l.contextType, i.context = typeof r == "object" && r !== null ? ee(r) : Ln, i.state = e.memoizedState, r = l.getDerivedStateFromProps, typeof r == "function" && (hc(
        e,
        l,
        r,
        n
      ), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (r = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), r !== i.state && gc.enqueueReplaceState(i, i.state, null), Na(e, n, i, u), Ra(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      i = e.stateNode;
      var y = e.memoizedProps, E = rn(l, y);
      i.props = E;
      var U = i.context, Y = l.contextType;
      r = Ln, typeof Y == "object" && Y !== null && (r = ee(Y));
      var q = l.getDerivedStateFromProps;
      Y = typeof q == "function" || typeof i.getSnapshotBeforeUpdate == "function", y = e.pendingProps !== y, Y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (y || U !== r) && Pr(
        e,
        i,
        n,
        r
      ), Tl = !1;
      var z = e.memoizedState;
      i.state = z, Na(e, n, i, u), Ra(), U = e.memoizedState, y || z !== U || Tl ? (typeof q == "function" && (hc(
        e,
        l,
        q,
        n
      ), U = e.memoizedState), (E = Tl || kr(
        e,
        l,
        E,
        n,
        z,
        U,
        r
      )) ? (Y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = U), i.props = n, i.state = U, i.context = r, n = E) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      i = e.stateNode, Kf(t, e), r = e.memoizedProps, Y = rn(l, r), i.props = Y, q = e.pendingProps, z = i.context, U = l.contextType, E = Ln, typeof U == "object" && U !== null && (E = ee(U)), y = l.getDerivedStateFromProps, (U = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (r !== q || z !== E) && Pr(
        e,
        i,
        n,
        E
      ), Tl = !1, z = e.memoizedState, i.state = z, Na(e, n, i, u), Ra();
      var R = e.memoizedState;
      r !== q || z !== R || Tl || t !== null && t.dependencies !== null && Gu(t.dependencies) ? (typeof y == "function" && (hc(
        e,
        l,
        y,
        n
      ), R = e.memoizedState), (Y = Tl || kr(
        e,
        l,
        Y,
        n,
        z,
        R,
        E
      ) || t !== null && t.dependencies !== null && Gu(t.dependencies)) ? (U || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, R, E), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        R,
        E
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || r === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = R), i.props = n, i.state = R, i.context = E, n = Y) : (typeof i.componentDidUpdate != "function" || r === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), n = !1);
    }
    return i = n, ui(t, e), n = (e.flags & 128) !== 0, i || n ? (i = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && n ? (e.child = on(
      e,
      t.child,
      null,
      u
    ), e.child = on(
      e,
      null,
      l,
      u
    )) : le(t, e, l, u), e.memoizedState = i.state, t = e.child) : t = cl(
      t,
      e,
      u
    ), t;
  }
  function d0(t, e, l, n) {
    return ln(), e.flags |= 256, le(t, e, l, n), e.child;
  }
  var Sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function bc(t) {
    return { baseLanes: t, cachePool: lr() };
  }
  function pc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Te), t;
  }
  function y0(t, e, l) {
    var n = e.pendingProps, u = !1, i = (e.flags & 128) !== 0, r;
    if ((r = i) || (r = t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0), r && (u = !0, e.flags &= -129), r = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (mt) {
        if (u ? zl(e) : Ml(), (t = Rt) ? (t = p1(
          t,
          Ye
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: bl !== null ? { id: Je, overflow: _e } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Js(t), l.return = e, e.child = l, te = e, Rt = null)) : t = null, t === null) throw wl(e);
        return ao(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var y = n.children;
      return n = n.fallback, u ? (Ml(), u = e.mode, y = ii(
        { mode: "hidden", children: y },
        u
      ), n = en(
        n,
        u,
        l,
        null
      ), y.return = e, n.return = e, y.sibling = n, e.child = y, n = e.child, n.memoizedState = bc(l), n.childLanes = pc(
        t,
        r,
        l
      ), e.memoizedState = Sc, qa(null, n)) : (zl(e), wc(e, y));
    }
    var E = t.memoizedState;
    if (E !== null && (y = E.dehydrated, y !== null)) {
      if (i)
        e.flags & 256 ? (zl(e), e.flags &= -257, e = Bc(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (Ml(), e.child = t.child, e.flags |= 128, e = null) : (Ml(), y = n.fallback, u = e.mode, n = ii(
          { mode: "visible", children: n.children },
          u
        ), y = en(
          y,
          u,
          l,
          null
        ), y.flags |= 2, n.return = e, y.return = e, n.sibling = y, e.child = n, on(
          e,
          t.child,
          null,
          l
        ), n = e.child, n.memoizedState = bc(l), n.childLanes = pc(
          t,
          r,
          l
        ), e.memoizedState = Sc, e = qa(null, n));
      else if (zl(e), ao(y)) {
        if (r = y.nextSibling && y.nextSibling.dataset, r) var U = r.dgst;
        r = U, n = Error(c(419)), n.stack = "", n.digest = r, Ua({ value: n, source: null, stack: null }), e = Bc(
          t,
          e,
          l
        );
      } else if (Xt || In(t, e, l, !1), r = (l & t.childLanes) !== 0, Xt || r) {
        if (r = Dt, r !== null && (n = ts(r, l), n !== 0 && n !== E.retryLane))
          throw E.retryLane = n, tn(t, n), ye(r, t, n), vc;
        no(y) || hi(), e = Bc(
          t,
          e,
          l
        );
      } else
        no(y) ? (e.flags |= 192, e.child = t.child, e = null) : (t = E.treeContext, Rt = Le(
          y.nextSibling
        ), te = e, mt = !0, pl = null, Ye = !1, t !== null && Ws(e, t), e = wc(
          e,
          n.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (Ml(), y = n.fallback, u = e.mode, E = t.child, U = E.sibling, n = ll(E, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = E.subtreeFlags & 65011712, U !== null ? y = ll(
      U,
      y
    ) : (y = en(
      y,
      u,
      l,
      null
    ), y.flags |= 2), y.return = e, n.return = e, n.sibling = y, e.child = n, qa(null, n), n = e.child, y = t.child.memoizedState, y === null ? y = bc(l) : (u = y.cachePool, u !== null ? (E = Vt._currentValue, u = u.parent !== E ? { parent: E, pool: E } : u) : u = lr(), y = {
      baseLanes: y.baseLanes | l,
      cachePool: u
    }), n.memoizedState = y, n.childLanes = pc(
      t,
      r,
      l
    ), e.memoizedState = Sc, qa(t.child, n)) : (zl(e), l = t.child, t = l.sibling, l = ll(l, {
      mode: "visible",
      children: n.children
    }), l.return = e, l.sibling = null, t !== null && (r = e.deletions, r === null ? (e.deletions = [t], e.flags |= 16) : r.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function wc(t, e) {
    return e = ii(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function ii(t, e) {
    return t = be(22, t, null, e), t.lanes = 0, t;
  }
  function Bc(t, e, l) {
    return on(e, t.child, null, l), t = wc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function h0(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), qf(t.return, e, l);
  }
  function Tc(t, e, l, n, u, i) {
    var r = t.memoizedState;
    r === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: u,
      treeForkCount: i
    } : (r.isBackwards = e, r.rendering = null, r.renderingStartTime = 0, r.last = n, r.tail = l, r.tailMode = u, r.treeForkCount = i);
  }
  function g0(t, e, l) {
    var n = e.pendingProps, u = n.revealOrder, i = n.tail;
    n = n.children;
    var r = qt.current, y = (r & 2) !== 0;
    if (y ? (r = r & 1 | 2, e.flags |= 128) : r &= 1, j(qt, r), le(t, e, n, l), n = mt ? Ca : 0, !y && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && h0(t, l, e);
        else if (t.tag === 19)
          h0(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (u) {
      case "forwards":
        for (l = e.child, u = null; l !== null; )
          t = l.alternate, t !== null && _u(t) === null && (u = l), l = l.sibling;
        l = u, l === null ? (u = e.child, e.child = null) : (u = l.sibling, l.sibling = null), Tc(
          e,
          !1,
          u,
          l,
          i,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && _u(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = l, l = u, u = t;
        }
        Tc(
          e,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        Tc(
          e,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function cl(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Ql |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (In(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(c(153));
    if (e.child !== null) {
      for (t = e.child, l = ll(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = ll(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function Cc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Gu(t)));
  }
  function Dd(t, e, l) {
    switch (e.tag) {
      case 3:
        Qt(e, e.stateNode.containerInfo), Bl(e, Vt, t.memoizedState.cache), ln();
        break;
      case 27:
      case 5:
        Ue(e);
        break;
      case 4:
        Qt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Bl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, kf(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (zl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? y0(t, e, l) : (zl(e), t = cl(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        zl(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (n = (l & e.childLanes) !== 0, n || (In(
          t,
          e,
          l,
          !1
        ), n = (l & e.childLanes) !== 0), u) {
          if (n)
            return g0(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), j(qt, qt.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, c0(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        Bl(e, Vt, t.memoizedState.cache);
    }
    return cl(t, e, l);
  }
  function m0(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Xt = !0;
      else {
        if (!Cc(t, l) && (e.flags & 128) === 0)
          return Xt = !1, Dd(
            t,
            e,
            l
          );
        Xt = (t.flags & 131072) !== 0;
      }
    else
      Xt = !1, mt && (e.flags & 1048576) !== 0 && Fs(e, Ca, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = fn(e.elementType), e.type = t, typeof t == "function")
            Df(t) ? (n = rn(t, n), e.tag = 1, e = A0(
              null,
              e,
              t,
              n,
              l
            )) : (e.tag = 0, e = Ec(
              null,
              e,
              t,
              n,
              l
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === K) {
                e.tag = 11, e = u0(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (u === I) {
                e.tag = 14, e = i0(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              }
            }
            throw e = ut(t) || t, Error(c(306, e, ""));
          }
        }
        return e;
      case 0:
        return Ec(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return n = e.type, u = rn(
          n,
          e.pendingProps
        ), A0(
          t,
          e,
          n,
          u,
          l
        );
      case 3:
        t: {
          if (Qt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(c(387));
          n = e.pendingProps;
          var i = e.memoizedState;
          u = i.element, Kf(t, e), Na(e, n, null, l);
          var r = e.memoizedState;
          if (n = r.cache, Bl(e, Vt, n), n !== i.cache && Gf(
            e,
            [Vt],
            l,
            !0
          ), Ra(), n = r.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: r.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = d0(
                t,
                e,
                n,
                l
              );
              break t;
            } else if (n !== u) {
              u = Qe(
                Error(c(424)),
                e
              ), Ua(u), e = d0(
                t,
                e,
                n,
                l
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Rt = Le(t.firstChild), te = e, mt = !0, pl = null, Ye = !0, l = cr(
                e,
                null,
                n,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (ln(), n === u) {
              e = cl(
                t,
                e,
                l
              );
              break t;
            }
            le(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return ui(t, e), t === null ? (l = z1(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : mt || (l = e.type, t = e.pendingProps, n = pi(
          ct.current
        ).createElement(l), n[$t] = e, n[ce] = t, ne(n, l, t), Wt(n), e.stateNode = n) : e.memoizedState = z1(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ue(e), t === null && mt && (n = e.stateNode = T1(
          e.type,
          e.pendingProps,
          ct.current
        ), te = e, Ye = !0, u = Rt, Ll(e.type) ? (uo = u, Rt = Le(n.firstChild)) : Rt = u), le(
          t,
          e,
          e.pendingProps.children,
          l
        ), ui(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && mt && ((u = n = Rt) && (n = fy(
          n,
          e.type,
          e.pendingProps,
          Ye
        ), n !== null ? (e.stateNode = n, te = e, Rt = Le(n.firstChild), Ye = !1, u = !0) : u = !1), u || wl(e)), Ue(e), u = e.type, i = e.pendingProps, r = t !== null ? t.memoizedProps : null, n = i.children, to(u, i) ? n = null : r !== null && to(u, r) && (e.flags |= 32), e.memoizedState !== null && (u = $f(
          t,
          e,
          pd,
          null,
          null,
          l
        ), tu._currentValue = u), ui(t, e), le(t, e, n, l), e.child;
      case 6:
        return t === null && mt && ((t = l = Rt) && (l = cy(
          l,
          e.pendingProps,
          Ye
        ), l !== null ? (e.stateNode = l, te = e, Rt = null, t = !0) : t = !1), t || wl(e)), null;
      case 13:
        return y0(t, e, l);
      case 4:
        return Qt(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, t === null ? e.child = on(
          e,
          null,
          n,
          l
        ) : le(t, e, n, l), e.child;
      case 11:
        return u0(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return le(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return le(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return le(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return n = e.pendingProps, Bl(e, e.type, n.value), le(t, e, n.children, l), e.child;
      case 9:
        return u = e.type._context, n = e.pendingProps.children, an(e), u = ee(u), n = n(u), e.flags |= 1, le(t, e, n, l), e.child;
      case 14:
        return i0(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return f0(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return g0(t, e, l);
      case 31:
        return Od(t, e, l);
      case 22:
        return c0(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return an(e), n = ee(Vt), t === null ? (u = Vf(), u === null && (u = Dt, i = If(), u.pooledCache = i, i.refCount++, i !== null && (u.pooledCacheLanes |= l), u = i), e.memoizedState = { parent: n, cache: u }, Xf(e), Bl(e, Vt, u)) : ((t.lanes & l) !== 0 && (Kf(t, e), Na(e, null, null, l), Ra()), u = t.memoizedState, i = e.memoizedState, u.parent !== n ? (u = { parent: n, cache: n }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), Bl(e, Vt, n)) : (n = i.cache, Bl(e, Vt, n), n !== u.cache && Gf(
          e,
          [Vt],
          l,
          !0
        ))), le(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(c(156, e.tag));
  }
  function ol(t) {
    t.flags |= 4;
  }
  function Uc(t, e, l, n, u) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (j0()) t.flags |= 8192;
        else
          throw cn = ju, jf;
    } else t.flags &= -16777217;
  }
  function v0(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !R1(e))
      if (j0()) t.flags |= 8192;
      else
        throw cn = ju, jf;
  }
  function fi(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? ko() : 536870912, t.lanes |= e, $n |= e);
  }
  function Ga(t, e) {
    if (!mt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), l = l.sibling;
          n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
      }
  }
  function Nt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, n = 0;
    if (e)
      for (var u = t.child; u !== null; )
        l |= u.lanes | u.childLanes, n |= u.subtreeFlags & 65011712, n |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        l |= u.lanes | u.childLanes, n |= u.subtreeFlags, n |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= n, t.childLanes = l, e;
  }
  function Qd(t, e, l) {
    var n = e.pendingProps;
    switch (Yf(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Nt(e), null;
      case 1:
        return Nt(e), null;
      case 3:
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), ul(Vt), wt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Gn(e) ? ol(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Lf())), Nt(e), null;
      case 26:
        var u = e.type, i = e.memoizedState;
        return t === null ? (ol(e), i !== null ? (Nt(e), v0(e, i)) : (Nt(e), Uc(
          e,
          u,
          null,
          n,
          l
        ))) : i ? i !== t.memoizedState ? (ol(e), Nt(e), v0(e, i)) : (Nt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && ol(e), Nt(e), Uc(
          e,
          u,
          t,
          n,
          l
        )), null;
      case 27:
        if (ge(e), l = ct.current, u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && ol(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Nt(e), null;
          }
          t = F.current, Gn(e) ? ks(e) : (t = T1(u, n, l), e.stateNode = t, ol(e));
        }
        return Nt(e), null;
      case 5:
        if (ge(e), u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && ol(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Nt(e), null;
          }
          if (i = F.current, Gn(e))
            ks(e);
          else {
            var r = pi(
              ct.current
            );
            switch (i) {
              case 1:
                i = r.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                i = r.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    i = r.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    i = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    i = r.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof n.is == "string" ? r.createElement("select", {
                      is: n.is
                    }) : r.createElement("select"), n.multiple ? i.multiple = !0 : n.size && (i.size = n.size);
                    break;
                  default:
                    i = typeof n.is == "string" ? r.createElement(u, { is: n.is }) : r.createElement(u);
                }
            }
            i[$t] = e, i[ce] = n;
            t: for (r = e.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6)
                i.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === e) break t;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === e)
                  break t;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
            }
            e.stateNode = i;
            t: switch (ne(i, u, n), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break t;
              case "img":
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && ol(e);
          }
        }
        return Nt(e), Uc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== n && ol(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(c(166));
          if (t = ct.current, Gn(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, u = te, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  n = u.memoizedProps;
              }
            t[$t] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || y1(t.nodeValue, l)), t || wl(e, !0);
          } else
            t = pi(t).createTextNode(
              n
            ), t[$t] = e, e.stateNode = t;
        }
        return Nt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = Gn(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(c(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
              t[$t] = e;
            } else
              ln(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Nt(e), t = !1;
          } else
            l = Lf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (we(e), e) : (we(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Nt(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = Gn(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(c(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(c(317));
              u[$t] = e;
            } else
              ln(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Nt(e), u = !1;
          } else
            u = Lf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (we(e), e) : (we(e), null);
        }
        return we(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, u = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (u = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== u && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), fi(e, e.updateQueue), Nt(e), null);
      case 4:
        return wt(), t === null && Fc(e.stateNode.containerInfo), Nt(e), null;
      case 10:
        return ul(e.type), Nt(e), null;
      case 19:
        if (H(qt), n = e.memoizedState, n === null) return Nt(e), null;
        if (u = (e.flags & 128) !== 0, i = n.rendering, i === null)
          if (u) Ga(n, !1);
          else {
            if (Ht !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = _u(t), i !== null) {
                  for (e.flags |= 128, Ga(n, !1), t = i.updateQueue, e.updateQueue = t, fi(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Ks(l, t), l = l.sibling;
                  return j(
                    qt,
                    qt.current & 1 | 2
                  ), mt && nl(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && Pt() > Ai && (e.flags |= 128, u = !0, Ga(n, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = _u(i), t !== null) {
              if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, fi(e, t), Ga(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !mt)
                return Nt(e), null;
            } else
              2 * Pt() - n.renderingStartTime > Ai && l !== 536870912 && (e.flags |= 128, u = !0, Ga(n, !1), e.lanes = 4194304);
          n.isBackwards ? (i.sibling = e.child, e.child = i) : (t = n.last, t !== null ? t.sibling = i : e.child = i, n.last = i);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = Pt(), t.sibling = null, l = qt.current, j(
          qt,
          u ? l & 1 | 2 : l & 1
        ), mt && nl(e, n.treeForkCount), t) : (Nt(e), null);
      case 22:
      case 23:
        return we(e), Wf(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Nt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Nt(e), l = e.updateQueue, l !== null && fi(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && H(un), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), ul(Vt), Nt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, e.tag));
  }
  function Rd(t, e) {
    switch (Yf(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return ul(Vt), wt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return ge(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (we(e), e.alternate === null)
            throw Error(c(340));
          ln();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (we(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(c(340));
          ln();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return H(qt), null;
      case 4:
        return wt(), null;
      case 10:
        return ul(e.type), null;
      case 22:
      case 23:
        return we(e), Wf(), t !== null && H(un), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return ul(Vt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function E0(t, e) {
    switch (Yf(e), e.tag) {
      case 3:
        ul(Vt), wt();
        break;
      case 26:
      case 27:
      case 5:
        ge(e);
        break;
      case 4:
        wt();
        break;
      case 31:
        e.memoizedState !== null && we(e);
        break;
      case 13:
        we(e);
        break;
      case 19:
        H(qt);
        break;
      case 10:
        ul(e.type);
        break;
      case 22:
      case 23:
        we(e), Wf(), t !== null && H(un);
        break;
      case 24:
        ul(Vt);
    }
  }
  function Ia(t, e) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            n = void 0;
            var i = l.create, r = l.inst;
            n = i(), r.destroy = n;
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (y) {
      Ct(e, e.return, y);
    }
  }
  function Ol(t, e, l) {
    try {
      var n = e.updateQueue, u = n !== null ? n.lastEffect : null;
      if (u !== null) {
        var i = u.next;
        n = i;
        do {
          if ((n.tag & t) === t) {
            var r = n.inst, y = r.destroy;
            if (y !== void 0) {
              r.destroy = void 0, u = e;
              var E = l, U = y;
              try {
                U();
              } catch (Y) {
                Ct(
                  u,
                  E,
                  Y
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (Y) {
      Ct(e, e.return, Y);
    }
  }
  function S0(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        sr(e, l);
      } catch (n) {
        Ct(t, t.return, n);
      }
    }
  }
  function b0(t, e, l) {
    l.props = rn(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Ct(t, e, n);
    }
  }
  function Za(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(n) : l.current = n;
      }
    } catch (u) {
      Ct(t, e, u);
    }
  }
  function Fe(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (u) {
          Ct(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          Ct(t, e, u);
        }
      else l.current = null;
  }
  function p0(t) {
    var e = t.type, l = t.memoizedProps, n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break t;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (u) {
      Ct(t, t.return, u);
    }
  }
  function zc(t, e, l) {
    try {
      var n = t.stateNode;
      ey(n, t.type, l, e), n[ce] = e;
    } catch (u) {
      Ct(t, t.return, u);
    }
  }
  function w0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ll(t.type) || t.tag === 4;
  }
  function Mc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || w0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ll(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Oc(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = tl));
    else if (n !== 4 && (n === 27 && Ll(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (Oc(t, e, l), t = t.sibling; t !== null; )
        Oc(t, e, l), t = t.sibling;
  }
  function ci(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (n !== 4 && (n === 27 && Ll(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (ci(t, e, l), t = t.sibling; t !== null; )
        ci(t, e, l), t = t.sibling;
  }
  function B0(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      ne(e, n, l), e[$t] = t, e[ce] = l;
    } catch (i) {
      Ct(t, t.return, i);
    }
  }
  var sl = !1, Kt = !1, Dc = !1, T0 = typeof WeakSet == "function" ? WeakSet : Set, kt = null;
  function Nd(t, e) {
    if (t = t.containerInfo, Pc = Mi, t = Ls(t), Bf(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var u = n.anchorOffset, i = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break t;
            }
            var r = 0, y = -1, E = -1, U = 0, Y = 0, q = t, z = null;
            e: for (; ; ) {
              for (var R; q !== l || u !== 0 && q.nodeType !== 3 || (y = r + u), q !== i || n !== 0 && q.nodeType !== 3 || (E = r + n), q.nodeType === 3 && (r += q.nodeValue.length), (R = q.firstChild) !== null; )
                z = q, q = R;
              for (; ; ) {
                if (q === t) break e;
                if (z === l && ++U === u && (y = r), z === i && ++Y === n && (E = r), (R = q.nextSibling) !== null) break;
                q = z, z = q.parentNode;
              }
              q = R;
            }
            l = y === -1 || E === -1 ? null : { start: y, end: E };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for ($c = { focusedElem: t, selectionRange: l }, Mi = !1, kt = e; kt !== null; )
      if (e = kt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, kt = t;
      else
        for (; kt !== null; ) {
          switch (e = kt, i = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  u = t[l], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                t = void 0, l = e, u = i.memoizedProps, i = i.memoizedState, n = l.stateNode;
                try {
                  var W = rn(
                    l.type,
                    u
                  );
                  t = n.getSnapshotBeforeUpdate(
                    W,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = t;
                } catch (nt) {
                  Ct(
                    l,
                    l.return,
                    nt
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  lo(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      lo(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(c(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, kt = t;
            break;
          }
          kt = e.return;
        }
  }
  function C0(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Al(t, l), n & 4 && Ia(5, l);
        break;
      case 1:
        if (Al(t, l), n & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (r) {
              Ct(l, l.return, r);
            }
          else {
            var u = rn(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (r) {
              Ct(
                l,
                l.return,
                r
              );
            }
          }
        n & 64 && S0(l), n & 512 && Za(l, l.return);
        break;
      case 3:
        if (Al(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            sr(t, e);
          } catch (r) {
            Ct(l, l.return, r);
          }
        }
        break;
      case 27:
        e === null && n & 4 && B0(l);
      case 26:
      case 5:
        Al(t, l), e === null && n & 4 && p0(l), n & 512 && Za(l, l.return);
        break;
      case 12:
        Al(t, l);
        break;
      case 31:
        Al(t, l), n & 4 && M0(t, l);
        break;
      case 13:
        Al(t, l), n & 4 && O0(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Vd.bind(
          null,
          l
        ), oy(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || sl, !n) {
          e = e !== null && e.memoizedState !== null || Kt, u = sl;
          var i = Kt;
          sl = n, (Kt = e) && !i ? dl(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : Al(t, l), sl = u, Kt = i;
        }
        break;
      case 30:
        break;
      default:
        Al(t, l);
    }
  }
  function U0(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, U0(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ff(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var xt = null, se = !1;
  function rl(t, e, l) {
    for (l = l.child; l !== null; )
      z0(t, e, l), l = l.sibling;
  }
  function z0(t, e, l) {
    if (ve && typeof ve.onCommitFiberUnmount == "function")
      try {
        ve.onCommitFiberUnmount(Aa, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Kt || Fe(l, e), rl(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Kt || Fe(l, e);
        var n = xt, u = se;
        Ll(l.type) && (xt = l.stateNode, se = !1), rl(
          t,
          e,
          l
        ), ka(l.stateNode), xt = n, se = u;
        break;
      case 5:
        Kt || Fe(l, e);
      case 6:
        if (n = xt, u = se, xt = null, rl(
          t,
          e,
          l
        ), xt = n, se = u, xt !== null)
          if (se)
            try {
              (xt.nodeType === 9 ? xt.body : xt.nodeName === "HTML" ? xt.ownerDocument.body : xt).removeChild(l.stateNode);
            } catch (i) {
              Ct(
                l,
                e,
                i
              );
            }
          else
            try {
              xt.removeChild(l.stateNode);
            } catch (i) {
              Ct(
                l,
                e,
                i
              );
            }
        break;
      case 18:
        xt !== null && (se ? (t = xt, S1(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), fa(t)) : S1(xt, l.stateNode));
        break;
      case 4:
        n = xt, u = se, xt = l.stateNode.containerInfo, se = !0, rl(
          t,
          e,
          l
        ), xt = n, se = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ol(2, l, e), Kt || Ol(4, l, e), rl(
          t,
          e,
          l
        );
        break;
      case 1:
        Kt || (Fe(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && b0(
          l,
          e,
          n
        )), rl(
          t,
          e,
          l
        );
        break;
      case 21:
        rl(
          t,
          e,
          l
        );
        break;
      case 22:
        Kt = (n = Kt) || l.memoizedState !== null, rl(
          t,
          e,
          l
        ), Kt = n;
        break;
      default:
        rl(
          t,
          e,
          l
        );
    }
  }
  function M0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        fa(t);
      } catch (l) {
        Ct(e, e.return, l);
      }
    }
  }
  function O0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        fa(t);
      } catch (l) {
        Ct(e, e.return, l);
      }
  }
  function Yd(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new T0()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new T0()), e;
      default:
        throw Error(c(435, t.tag));
    }
  }
  function oi(t, e) {
    var l = Yd(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var u = jd.bind(null, t, n);
        n.then(u, u);
      }
    });
  }
  function re(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var u = l[n], i = t, r = e, y = r;
        t: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Ll(y.type)) {
                xt = y.stateNode, se = !1;
                break t;
              }
              break;
            case 5:
              xt = y.stateNode, se = !1;
              break t;
            case 3:
            case 4:
              xt = y.stateNode.containerInfo, se = !0;
              break t;
          }
          y = y.return;
        }
        if (xt === null) throw Error(c(160));
        z0(i, r, u), xt = null, se = !1, i = u.alternate, i !== null && (i.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        D0(e, t), e = e.sibling;
  }
  var Ge = null;
  function D0(t, e) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        re(e, t), Ae(t), n & 4 && (Ol(3, t, t.return), Ia(3, t), Ol(5, t, t.return));
        break;
      case 1:
        re(e, t), Ae(t), n & 512 && (Kt || l === null || Fe(l, l.return)), n & 64 && sl && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var u = Ge;
        if (re(e, t), Ae(t), n & 512 && (Kt || l === null || Fe(l, l.return)), n & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (n = t.memoizedState, l === null)
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  n = t.type, l = t.memoizedProps, u = u.ownerDocument || u;
                  e: switch (n) {
                    case "title":
                      i = u.getElementsByTagName("title")[0], (!i || i[ha] || i[$t] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = u.createElement(n), u.head.insertBefore(
                        i,
                        u.querySelector("head > title")
                      )), ne(i, n, l), i[$t] = t, Wt(i), n = i;
                      break t;
                    case "link":
                      var r = D1(
                        "link",
                        "href",
                        u
                      ).get(n + (l.href || ""));
                      if (r) {
                        for (var y = 0; y < r.length; y++)
                          if (i = r[y], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            r.splice(y, 1);
                            break e;
                          }
                      }
                      i = u.createElement(n), ne(i, n, l), u.head.appendChild(i);
                      break;
                    case "meta":
                      if (r = D1(
                        "meta",
                        "content",
                        u
                      ).get(n + (l.content || ""))) {
                        for (y = 0; y < r.length; y++)
                          if (i = r[y], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            r.splice(y, 1);
                            break e;
                          }
                      }
                      i = u.createElement(n), ne(i, n, l), u.head.appendChild(i);
                      break;
                    default:
                      throw Error(c(468, n));
                  }
                  i[$t] = t, Wt(i), n = i;
                }
                t.stateNode = n;
              } else
                Q1(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = O1(
                u,
                n,
                t.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? Q1(
              u,
              t.type,
              t.stateNode
            ) : O1(
              u,
              n,
              t.memoizedProps
            )) : n === null && t.stateNode !== null && zc(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        re(e, t), Ae(t), n & 512 && (Kt || l === null || Fe(l, l.return)), l !== null && n & 4 && zc(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (re(e, t), Ae(t), n & 512 && (Kt || l === null || Fe(l, l.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            On(u, "");
          } catch (W) {
            Ct(t, t.return, W);
          }
        }
        n & 4 && t.stateNode != null && (u = t.memoizedProps, zc(
          t,
          u,
          l !== null ? l.memoizedProps : u
        )), n & 1024 && (Dc = !0);
        break;
      case 6:
        if (re(e, t), Ae(t), n & 4) {
          if (t.stateNode === null)
            throw Error(c(162));
          n = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = n;
          } catch (W) {
            Ct(t, t.return, W);
          }
        }
        break;
      case 3:
        if (Ti = null, u = Ge, Ge = wi(e.containerInfo), re(e, t), Ge = u, Ae(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            fa(e.containerInfo);
          } catch (W) {
            Ct(t, t.return, W);
          }
        Dc && (Dc = !1, Q0(t));
        break;
      case 4:
        n = Ge, Ge = wi(
          t.stateNode.containerInfo
        ), re(e, t), Ae(t), Ge = n;
        break;
      case 12:
        re(e, t), Ae(t);
        break;
      case 31:
        re(e, t), Ae(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, oi(t, n)));
        break;
      case 13:
        re(e, t), Ae(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ri = Pt()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, oi(t, n)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var E = l !== null && l.memoizedState !== null, U = sl, Y = Kt;
        if (sl = U || u, Kt = Y || E, re(e, t), Kt = Y, sl = U, Ae(t), n & 8192)
          t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (l === null || E || sl || Kt || An(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                E = l = e;
                try {
                  if (i = E.stateNode, u)
                    r = i.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
                  else {
                    y = E.stateNode;
                    var q = E.memoizedProps.style, z = q != null && q.hasOwnProperty("display") ? q.display : null;
                    y.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (W) {
                  Ct(E, E.return, W);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                E = e;
                try {
                  E.stateNode.nodeValue = u ? "" : E.memoizedProps;
                } catch (W) {
                  Ct(E, E.return, W);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                E = e;
                try {
                  var R = E.stateNode;
                  u ? b1(R, !0) : b1(E.stateNode, !1);
                } catch (W) {
                  Ct(E, E.return, W);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        n & 4 && (n = t.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, oi(t, l))));
        break;
      case 19:
        re(e, t), Ae(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, oi(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        re(e, t), Ae(t);
    }
  }
  function Ae(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (w0(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(c(160));
        switch (l.tag) {
          case 27:
            var u = l.stateNode, i = Mc(t);
            ci(t, i, u);
            break;
          case 5:
            var r = l.stateNode;
            l.flags & 32 && (On(r, ""), l.flags &= -33);
            var y = Mc(t);
            ci(t, y, r);
            break;
          case 3:
          case 4:
            var E = l.stateNode.containerInfo, U = Mc(t);
            Oc(
              t,
              U,
              E
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (Y) {
        Ct(t, t.return, Y);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Q0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Q0(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Al(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        C0(t, e.alternate, e), e = e.sibling;
  }
  function An(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ol(4, e, e.return), An(e);
          break;
        case 1:
          Fe(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && b0(
            e,
            e.return,
            l
          ), An(e);
          break;
        case 27:
          ka(e.stateNode);
        case 26:
        case 5:
          Fe(e, e.return), An(e);
          break;
        case 22:
          e.memoizedState === null && An(e);
          break;
        case 30:
          An(e);
          break;
        default:
          An(e);
      }
      t = t.sibling;
    }
  }
  function dl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, u = t, i = e, r = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          dl(
            u,
            i,
            l
          ), Ia(4, i);
          break;
        case 1:
          if (dl(
            u,
            i,
            l
          ), n = i, u = n.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (U) {
              Ct(n, n.return, U);
            }
          if (n = i, u = n.updateQueue, u !== null) {
            var y = n.stateNode;
            try {
              var E = u.shared.hiddenCallbacks;
              if (E !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < E.length; u++)
                  or(E[u], y);
            } catch (U) {
              Ct(n, n.return, U);
            }
          }
          l && r & 64 && S0(i), Za(i, i.return);
          break;
        case 27:
          B0(i);
        case 26:
        case 5:
          dl(
            u,
            i,
            l
          ), l && n === null && r & 4 && p0(i), Za(i, i.return);
          break;
        case 12:
          dl(
            u,
            i,
            l
          );
          break;
        case 31:
          dl(
            u,
            i,
            l
          ), l && r & 4 && M0(u, i);
          break;
        case 13:
          dl(
            u,
            i,
            l
          ), l && r & 4 && O0(u, i);
          break;
        case 22:
          i.memoizedState === null && dl(
            u,
            i,
            l
          ), Za(i, i.return);
          break;
        case 30:
          break;
        default:
          dl(
            u,
            i,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Qc(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && za(l));
  }
  function Rc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && za(t));
  }
  function Ie(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        R0(
          t,
          e,
          l,
          n
        ), e = e.sibling;
  }
  function R0(t, e, l, n) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ie(
          t,
          e,
          l,
          n
        ), u & 2048 && Ia(9, e);
        break;
      case 1:
        Ie(
          t,
          e,
          l,
          n
        );
        break;
      case 3:
        Ie(
          t,
          e,
          l,
          n
        ), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && za(t)));
        break;
      case 12:
        if (u & 2048) {
          Ie(
            t,
            e,
            l,
            n
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, r = i.id, y = i.onPostCommit;
            typeof y == "function" && y(
              r,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (E) {
            Ct(e, e.return, E);
          }
        } else
          Ie(
            t,
            e,
            l,
            n
          );
        break;
      case 31:
        Ie(
          t,
          e,
          l,
          n
        );
        break;
      case 13:
        Ie(
          t,
          e,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, r = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? Ie(
          t,
          e,
          l,
          n
        ) : Va(t, e) : i._visibility & 2 ? Ie(
          t,
          e,
          l,
          n
        ) : (i._visibility |= 2, Wn(
          t,
          e,
          l,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Qc(r, e);
        break;
      case 24:
        Ie(
          t,
          e,
          l,
          n
        ), u & 2048 && Rc(e.alternate, e);
        break;
      default:
        Ie(
          t,
          e,
          l,
          n
        );
    }
  }
  function Wn(t, e, l, n, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, r = e, y = l, E = n, U = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Wn(
            i,
            r,
            y,
            E,
            u
          ), Ia(8, r);
          break;
        case 23:
          break;
        case 22:
          var Y = r.stateNode;
          r.memoizedState !== null ? Y._visibility & 2 ? Wn(
            i,
            r,
            y,
            E,
            u
          ) : Va(
            i,
            r
          ) : (Y._visibility |= 2, Wn(
            i,
            r,
            y,
            E,
            u
          )), u && U & 2048 && Qc(
            r.alternate,
            r
          );
          break;
        case 24:
          Wn(
            i,
            r,
            y,
            E,
            u
          ), u && U & 2048 && Rc(r.alternate, r);
          break;
        default:
          Wn(
            i,
            r,
            y,
            E,
            u
          );
      }
      e = e.sibling;
    }
  }
  function Va(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, u = n.flags;
        switch (n.tag) {
          case 22:
            Va(l, n), u & 2048 && Qc(
              n.alternate,
              n
            );
            break;
          case 24:
            Va(l, n), u & 2048 && Rc(n.alternate, n);
            break;
          default:
            Va(l, n);
        }
        e = e.sibling;
      }
  }
  var ja = 8192;
  function kn(t, e, l) {
    if (t.subtreeFlags & ja)
      for (t = t.child; t !== null; )
        N0(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function N0(t, e, l) {
    switch (t.tag) {
      case 26:
        kn(
          t,
          e,
          l
        ), t.flags & ja && t.memoizedState !== null && by(
          l,
          Ge,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        kn(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var n = Ge;
        Ge = wi(t.stateNode.containerInfo), kn(
          t,
          e,
          l
        ), Ge = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = ja, ja = 16777216, kn(
          t,
          e,
          l
        ), ja = n) : kn(
          t,
          e,
          l
        ));
        break;
      default:
        kn(
          t,
          e,
          l
        );
    }
  }
  function Y0(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Xa(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          kt = n, L0(
            n,
            t
          );
        }
      Y0(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        x0(t), t = t.sibling;
  }
  function x0(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Xa(t), t.flags & 2048 && Ol(9, t, t.return);
        break;
      case 3:
        Xa(t);
        break;
      case 12:
        Xa(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, si(t)) : Xa(t);
        break;
      default:
        Xa(t);
    }
  }
  function si(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          kt = n, L0(
            n,
            t
          );
        }
      Y0(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Ol(8, e, e.return), si(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, si(e));
          break;
        default:
          si(e);
      }
      t = t.sibling;
    }
  }
  function L0(t, e) {
    for (; kt !== null; ) {
      var l = kt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ol(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          za(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, kt = n;
      else
        t: for (l = t; kt !== null; ) {
          n = kt;
          var u = n.sibling, i = n.return;
          if (U0(n), n === l) {
            kt = null;
            break t;
          }
          if (u !== null) {
            u.return = i, kt = u;
            break t;
          }
          kt = i;
        }
    }
  }
  var xd = {
    getCacheForType: function(t) {
      var e = ee(Vt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return ee(Vt).controller.signal;
    }
  }, Ld = typeof WeakMap == "function" ? WeakMap : Map, Bt = 0, Dt = null, At = null, yt = 0, Tt = 0, Be = null, Dl = !1, Pn = !1, Nc = !1, yl = 0, Ht = 0, Ql = 0, dn = 0, Yc = 0, Te = 0, $n = 0, Ka = null, de = null, xc = !1, ri = 0, H0 = 0, Ai = 1 / 0, di = null, Rl = null, Ft = 0, Nl = null, ta = null, hl = 0, Lc = 0, Hc = null, q0 = null, Ja = 0, qc = null;
  function Ce() {
    return (Bt & 2) !== 0 && yt !== 0 ? yt & -yt : O.T !== null ? Xc() : es();
  }
  function G0() {
    if (Te === 0)
      if ((yt & 536870912) === 0 || mt) {
        var t = bu;
        bu <<= 1, (bu & 3932160) === 0 && (bu = 262144), Te = t;
      } else Te = 536870912;
    return t = pe.current, t !== null && (t.flags |= 32), Te;
  }
  function ye(t, e, l) {
    (t === Dt && (Tt === 2 || Tt === 9) || t.cancelPendingCommit !== null) && (ea(t, 0), Yl(
      t,
      yt,
      Te,
      !1
    )), ya(t, l), ((Bt & 2) === 0 || t !== Dt) && (t === Dt && ((Bt & 2) === 0 && (dn |= l), Ht === 4 && Yl(
      t,
      yt,
      Te,
      !1
    )), We(t));
  }
  function I0(t, e, l) {
    if ((Bt & 6) !== 0) throw Error(c(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || da(t, e), u = n ? Gd(t, e) : Ic(t, e, !0), i = n;
    do {
      if (u === 0) {
        Pn && !n && Yl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, i && !Hd(l)) {
          u = Ic(t, e, !1), i = !1;
          continue;
        }
        if (u === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i)
            var r = 0;
          else
            r = t.pendingLanes & -536870913, r = r !== 0 ? r : r & 536870912 ? 536870912 : 0;
          if (r !== 0) {
            e = r;
            t: {
              var y = t;
              u = Ka;
              var E = y.current.memoizedState.isDehydrated;
              if (E && (ea(y, r).flags |= 256), r = Ic(
                y,
                r,
                !1
              ), r !== 2) {
                if (Nc && !E) {
                  y.errorRecoveryDisabledLanes |= i, dn |= i, u = 4;
                  break t;
                }
                i = de, de = u, i !== null && (de === null ? de = i : de.push.apply(
                  de,
                  i
                ));
              }
              u = r;
            }
            if (i = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          ea(t, 0), Yl(t, e, 0, !0);
          break;
        }
        t: {
          switch (n = t, i = u, i) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Yl(
                n,
                e,
                Te,
                !Dl
              );
              break t;
            case 2:
              de = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((e & 62914560) === e && (u = ri + 300 - Pt(), 10 < u)) {
            if (Yl(
              n,
              e,
              Te,
              !Dl
            ), wu(n, 0, !0) !== 0) break t;
            hl = e, n.timeoutHandle = v1(
              Z0.bind(
                null,
                n,
                l,
                de,
                di,
                xc,
                e,
                Te,
                dn,
                $n,
                Dl,
                i,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          Z0(
            n,
            l,
            de,
            di,
            xc,
            e,
            Te,
            dn,
            $n,
            Dl,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    We(t);
  }
  function Z0(t, e, l, n, u, i, r, y, E, U, Y, q, z, R) {
    if (t.timeoutHandle = -1, q = e.subtreeFlags, q & 8192 || (q & 16785408) === 16785408) {
      q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: tl
      }, N0(
        e,
        i,
        q
      );
      var W = (i & 62914560) === i ? ri - Pt() : (i & 4194048) === i ? H0 - Pt() : 0;
      if (W = py(
        q,
        W
      ), W !== null) {
        hl = i, t.cancelPendingCommit = W(
          W0.bind(
            null,
            t,
            e,
            i,
            l,
            n,
            u,
            r,
            y,
            E,
            Y,
            q,
            null,
            z,
            R
          )
        ), Yl(t, i, r, !U);
        return;
      }
    }
    W0(
      t,
      e,
      i,
      l,
      n,
      u,
      r,
      y,
      E
    );
  }
  function Hd(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var u = l[n], i = u.getSnapshot;
          u = u.value;
          try {
            if (!Se(i(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Yl(t, e, l, n) {
    e &= ~Yc, e &= ~dn, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var i = 31 - Ee(u), r = 1 << i;
      n[i] = -1, u &= ~r;
    }
    l !== 0 && Po(t, l, e);
  }
  function yi() {
    return (Bt & 6) === 0 ? (_a(0), !1) : !0;
  }
  function Gc() {
    if (At !== null) {
      if (Tt === 0)
        var t = At.return;
      else
        t = At, al = nn = null, lc(t), Xn = null, Oa = 0, t = At;
      for (; t !== null; )
        E0(t.alternate, t), t = t.return;
      At = null;
    }
  }
  function ea(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, ay(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), hl = 0, Gc(), Dt = t, At = l = ll(t.current, null), yt = e, Tt = 0, Be = null, Dl = !1, Pn = da(t, e), Nc = !1, $n = Te = Yc = dn = Ql = Ht = 0, de = Ka = null, xc = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var u = 31 - Ee(n), i = 1 << u;
        e |= t[u], n &= ~i;
      }
    return yl = e, Yu(), l;
  }
  function V0(t, e) {
    ot = null, O.H = Ha, e === jn || e === Vu ? (e = ur(), Tt = 3) : e === jf ? (e = ur(), Tt = 4) : Tt = e === vc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Be = e, At === null && (Ht = 1, ni(
      t,
      Qe(e, t.current)
    ));
  }
  function j0() {
    var t = pe.current;
    return t === null ? !0 : (yt & 4194048) === yt ? xe === null : (yt & 62914560) === yt || (yt & 536870912) !== 0 ? t === xe : !1;
  }
  function X0() {
    var t = O.H;
    return O.H = Ha, t === null ? Ha : t;
  }
  function K0() {
    var t = O.A;
    return O.A = xd, t;
  }
  function hi() {
    Ht = 4, Dl || (yt & 4194048) !== yt && pe.current !== null || (Pn = !0), (Ql & 134217727) === 0 && (dn & 134217727) === 0 || Dt === null || Yl(
      Dt,
      yt,
      Te,
      !1
    );
  }
  function Ic(t, e, l) {
    var n = Bt;
    Bt |= 2;
    var u = X0(), i = K0();
    (Dt !== t || yt !== e) && (di = null, ea(t, e)), e = !1;
    var r = Ht;
    t: do
      try {
        if (Tt !== 0 && At !== null) {
          var y = At, E = Be;
          switch (Tt) {
            case 8:
              Gc(), r = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              pe.current === null && (e = !0);
              var U = Tt;
              if (Tt = 0, Be = null, la(t, y, E, U), l && Pn) {
                r = 0;
                break t;
              }
              break;
            default:
              U = Tt, Tt = 0, Be = null, la(t, y, E, U);
          }
        }
        qd(), r = Ht;
        break;
      } catch (Y) {
        V0(t, Y);
      }
    while (!0);
    return e && t.shellSuspendCounter++, al = nn = null, Bt = n, O.H = u, O.A = i, At === null && (Dt = null, yt = 0, Yu()), r;
  }
  function qd() {
    for (; At !== null; ) J0(At);
  }
  function Gd(t, e) {
    var l = Bt;
    Bt |= 2;
    var n = X0(), u = K0();
    Dt !== t || yt !== e ? (di = null, Ai = Pt() + 500, ea(t, e)) : Pn = da(
      t,
      e
    );
    t: do
      try {
        if (Tt !== 0 && At !== null) {
          e = At;
          var i = Be;
          e: switch (Tt) {
            case 1:
              Tt = 0, Be = null, la(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (nr(i)) {
                Tt = 0, Be = null, _0(e);
                break;
              }
              e = function() {
                Tt !== 2 && Tt !== 9 || Dt !== t || (Tt = 7), We(t);
              }, i.then(e, e);
              break t;
            case 3:
              Tt = 7;
              break t;
            case 4:
              Tt = 5;
              break t;
            case 7:
              nr(i) ? (Tt = 0, Be = null, _0(e)) : (Tt = 0, Be = null, la(t, e, i, 7));
              break;
            case 5:
              var r = null;
              switch (At.tag) {
                case 26:
                  r = At.memoizedState;
                case 5:
                case 27:
                  var y = At;
                  if (r ? R1(r) : y.stateNode.complete) {
                    Tt = 0, Be = null;
                    var E = y.sibling;
                    if (E !== null) At = E;
                    else {
                      var U = y.return;
                      U !== null ? (At = U, gi(U)) : At = null;
                    }
                    break e;
                  }
              }
              Tt = 0, Be = null, la(t, e, i, 5);
              break;
            case 6:
              Tt = 0, Be = null, la(t, e, i, 6);
              break;
            case 8:
              Gc(), Ht = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        Id();
        break;
      } catch (Y) {
        V0(t, Y);
      }
    while (!0);
    return al = nn = null, O.H = n, O.A = u, Bt = l, At !== null ? 0 : (Dt = null, yt = 0, Yu(), Ht);
  }
  function Id() {
    for (; At !== null && !ra(); )
      J0(At);
  }
  function J0(t) {
    var e = m0(t.alternate, t, yl);
    t.memoizedProps = t.pendingProps, e === null ? gi(t) : At = e;
  }
  function _0(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = r0(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          yt
        );
        break;
      case 11:
        e = r0(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          yt
        );
        break;
      case 5:
        lc(e);
      default:
        E0(l, e), e = At = Ks(e, yl), e = m0(l, e, yl);
    }
    t.memoizedProps = t.pendingProps, e === null ? gi(t) : At = e;
  }
  function la(t, e, l, n) {
    al = nn = null, lc(e), Xn = null, Oa = 0;
    var u = e.return;
    try {
      if (Md(
        t,
        u,
        e,
        l,
        yt
      )) {
        Ht = 1, ni(
          t,
          Qe(l, t.current)
        ), At = null;
        return;
      }
    } catch (i) {
      if (u !== null) throw At = u, i;
      Ht = 1, ni(
        t,
        Qe(l, t.current)
      ), At = null;
      return;
    }
    e.flags & 32768 ? (mt || n === 1 ? t = !0 : Pn || (yt & 536870912) !== 0 ? t = !1 : (Dl = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = pe.current, n !== null && n.tag === 13 && (n.flags |= 16384))), F0(e, t)) : gi(e);
  }
  function gi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        F0(
          e,
          Dl
        );
        return;
      }
      t = e.return;
      var l = Qd(
        e.alternate,
        e,
        yl
      );
      if (l !== null) {
        At = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        At = e;
        return;
      }
      At = e = t;
    } while (e !== null);
    Ht === 0 && (Ht = 5);
  }
  function F0(t, e) {
    do {
      var l = Rd(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, At = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        At = t;
        return;
      }
      At = t = l;
    } while (t !== null);
    Ht = 6, At = null;
  }
  function W0(t, e, l, n, u, i, r, y, E) {
    t.cancelPendingCommit = null;
    do
      mi();
    while (Ft !== 0);
    if ((Bt & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      if (i = e.lanes | e.childLanes, i |= Mf, S2(
        t,
        l,
        i,
        r,
        y,
        E
      ), t === Dt && (At = Dt = null, yt = 0), ta = e, Nl = t, hl = l, Lc = i, Hc = u, q0 = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Xd(Eu, function() {
        return e1(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = O.T, O.T = null, u = X.p, X.p = 2, r = Bt, Bt |= 4;
        try {
          Nd(t, e, l);
        } finally {
          Bt = r, X.p = u, O.T = n;
        }
      }
      Ft = 1, k0(), P0(), $0();
    }
  }
  function k0() {
    if (Ft === 1) {
      Ft = 0;
      var t = Nl, e = ta, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = O.T, O.T = null;
        var n = X.p;
        X.p = 2;
        var u = Bt;
        Bt |= 4;
        try {
          D0(e, t);
          var i = $c, r = Ls(t.containerInfo), y = i.focusedElem, E = i.selectionRange;
          if (r !== y && y && y.ownerDocument && xs(
            y.ownerDocument.documentElement,
            y
          )) {
            if (E !== null && Bf(y)) {
              var U = E.start, Y = E.end;
              if (Y === void 0 && (Y = U), "selectionStart" in y)
                y.selectionStart = U, y.selectionEnd = Math.min(
                  Y,
                  y.value.length
                );
              else {
                var q = y.ownerDocument || document, z = q && q.defaultView || window;
                if (z.getSelection) {
                  var R = z.getSelection(), W = y.textContent.length, nt = Math.min(E.start, W), Mt = E.end === void 0 ? nt : Math.min(E.end, W);
                  !R.extend && nt > Mt && (r = Mt, Mt = nt, nt = r);
                  var T = Ys(
                    y,
                    nt
                  ), p = Ys(
                    y,
                    Mt
                  );
                  if (T && p && (R.rangeCount !== 1 || R.anchorNode !== T.node || R.anchorOffset !== T.offset || R.focusNode !== p.node || R.focusOffset !== p.offset)) {
                    var C = q.createRange();
                    C.setStart(T.node, T.offset), R.removeAllRanges(), nt > Mt ? (R.addRange(C), R.extend(p.node, p.offset)) : (C.setEnd(p.node, p.offset), R.addRange(C));
                  }
                }
              }
            }
            for (q = [], R = y; R = R.parentNode; )
              R.nodeType === 1 && q.push({
                element: R,
                left: R.scrollLeft,
                top: R.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < q.length; y++) {
              var L = q[y];
              L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
            }
          }
          Mi = !!Pc, $c = Pc = null;
        } finally {
          Bt = u, X.p = n, O.T = l;
        }
      }
      t.current = e, Ft = 2;
    }
  }
  function P0() {
    if (Ft === 2) {
      Ft = 0;
      var t = Nl, e = ta, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = O.T, O.T = null;
        var n = X.p;
        X.p = 2;
        var u = Bt;
        Bt |= 4;
        try {
          C0(t, e.alternate, e);
        } finally {
          Bt = u, X.p = n, O.T = l;
        }
      }
      Ft = 3;
    }
  }
  function $0() {
    if (Ft === 4 || Ft === 3) {
      Ft = 0, vu();
      var t = Nl, e = ta, l = hl, n = q0;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Ft = 5 : (Ft = 0, ta = Nl = null, t1(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (Rl = null), af(l), e = e.stateNode, ve && typeof ve.onCommitFiberRoot == "function")
        try {
          ve.onCommitFiberRoot(
            Aa,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = O.T, u = X.p, X.p = 2, O.T = null;
        try {
          for (var i = t.onRecoverableError, r = 0; r < n.length; r++) {
            var y = n[r];
            i(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          O.T = e, X.p = u;
        }
      }
      (hl & 3) !== 0 && mi(), We(t), u = t.pendingLanes, (l & 261930) !== 0 && (u & 42) !== 0 ? t === qc ? Ja++ : (Ja = 0, qc = t) : Ja = 0, _a(0);
    }
  }
  function t1(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, za(e)));
  }
  function mi() {
    return k0(), P0(), $0(), e1();
  }
  function e1() {
    if (Ft !== 5) return !1;
    var t = Nl, e = Lc;
    Lc = 0;
    var l = af(hl), n = O.T, u = X.p;
    try {
      X.p = 32 > l ? 32 : l, O.T = null, l = Hc, Hc = null;
      var i = Nl, r = hl;
      if (Ft = 0, ta = Nl = null, hl = 0, (Bt & 6) !== 0) throw Error(c(331));
      var y = Bt;
      if (Bt |= 4, x0(i.current), R0(
        i,
        i.current,
        r,
        l
      ), Bt = y, _a(0, !1), ve && typeof ve.onPostCommitFiberRoot == "function")
        try {
          ve.onPostCommitFiberRoot(Aa, i);
        } catch {
        }
      return !0;
    } finally {
      X.p = u, O.T = n, t1(t, e);
    }
  }
  function l1(t, e, l) {
    e = Qe(l, e), e = mc(t.stateNode, e, 2), t = Ul(t, e, 2), t !== null && (ya(t, 2), We(t));
  }
  function Ct(t, e, l) {
    if (t.tag === 3)
      l1(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          l1(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Rl === null || !Rl.has(n))) {
            t = Qe(l, t), l = n0(2), n = Ul(e, l, 2), n !== null && (a0(
              l,
              n,
              e,
              t
            ), ya(n, 2), We(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function Zc(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new Ld();
      var u = /* @__PURE__ */ new Set();
      n.set(e, u);
    } else
      u = n.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), n.set(e, u));
    u.has(l) || (Nc = !0, u.add(l), t = Zd.bind(null, t, e, l), e.then(t, t));
  }
  function Zd(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Dt === t && (yt & l) === l && (Ht === 4 || Ht === 3 && (yt & 62914560) === yt && 300 > Pt() - ri ? (Bt & 2) === 0 && ea(t, 0) : Yc |= l, $n === yt && ($n = 0)), We(t);
  }
  function n1(t, e) {
    e === 0 && (e = ko()), t = tn(t, e), t !== null && (ya(t, e), We(t));
  }
  function Vd(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), n1(t, l);
  }
  function jd(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode, u = t.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    n !== null && n.delete(e), n1(t, l);
  }
  function Xd(t, e) {
    return Ke(t, e);
  }
  var vi = null, na = null, Vc = !1, Ei = !1, jc = !1, xl = 0;
  function We(t) {
    t !== na && t.next === null && (na === null ? vi = na = t : na = na.next = t), Ei = !0, Vc || (Vc = !0, Jd());
  }
  function _a(t, e) {
    if (!jc && Ei) {
      jc = !0;
      do
        for (var l = !1, n = vi; n !== null; ) {
          if (t !== 0) {
            var u = n.pendingLanes;
            if (u === 0) var i = 0;
            else {
              var r = n.suspendedLanes, y = n.pingedLanes;
              i = (1 << 31 - Ee(42 | t) + 1) - 1, i &= u & ~(r & ~y), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, f1(n, i));
          } else
            i = yt, i = wu(
              n,
              n === Dt ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || da(n, i) || (l = !0, f1(n, i));
          n = n.next;
        }
      while (l);
      jc = !1;
    }
  }
  function Kd() {
    a1();
  }
  function a1() {
    Ei = Vc = !1;
    var t = 0;
    xl !== 0 && ny() && (t = xl);
    for (var e = Pt(), l = null, n = vi; n !== null; ) {
      var u = n.next, i = u1(n, e);
      i === 0 ? (n.next = null, l === null ? vi = u : l.next = u, u === null && (na = l)) : (l = n, (t !== 0 || (i & 3) !== 0) && (Ei = !0)), n = u;
    }
    Ft !== 0 && Ft !== 5 || _a(t), xl !== 0 && (xl = 0);
  }
  function u1(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, u = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var r = 31 - Ee(i), y = 1 << r, E = u[r];
      E === -1 ? ((y & l) === 0 || (y & n) !== 0) && (u[r] = E2(y, e)) : E <= e && (t.expiredLanes |= y), i &= ~y;
    }
    if (e = Dt, l = yt, l = wu(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (Tt === 2 || Tt === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && ml(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || da(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && ml(n), af(l)) {
        case 2:
        case 8:
          l = Fo;
          break;
        case 32:
          l = Eu;
          break;
        case 268435456:
          l = Wo;
          break;
        default:
          l = Eu;
      }
      return n = i1.bind(null, t), l = Ke(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && ml(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function i1(t, e) {
    if (Ft !== 0 && Ft !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (mi() && t.callbackNode !== l)
      return null;
    var n = yt;
    return n = wu(
      t,
      t === Dt ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (I0(t, n, e), u1(t, Pt()), t.callbackNode != null && t.callbackNode === l ? i1.bind(null, t) : null);
  }
  function f1(t, e) {
    if (mi()) return null;
    I0(t, e, !0);
  }
  function Jd() {
    uy(function() {
      (Bt & 6) !== 0 ? Ke(
        _o,
        Kd
      ) : a1();
    });
  }
  function Xc() {
    if (xl === 0) {
      var t = Zn;
      t === 0 && (t = Su, Su <<= 1, (Su & 261888) === 0 && (Su = 256)), xl = t;
    }
    return xl;
  }
  function c1(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Uu("" + t);
  }
  function o1(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function _d(t, e, l, n, u) {
    if (e === "submit" && l && l.stateNode === u) {
      var i = c1(
        (u[ce] || null).action
      ), r = n.submitter;
      r && (e = (e = r[ce] || null) ? c1(e.formAction) : r.getAttribute("formAction"), e !== null && (i = e, r = null));
      var y = new Du(
        "action",
        "action",
        null,
        n,
        u
      );
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (xl !== 0) {
                  var E = r ? o1(u, r) : new FormData(u);
                  rc(
                    l,
                    {
                      pending: !0,
                      data: E,
                      method: u.method,
                      action: i
                    },
                    null,
                    E
                  );
                }
              } else
                typeof i == "function" && (y.preventDefault(), E = r ? o1(u, r) : new FormData(u), rc(
                  l,
                  {
                    pending: !0,
                    data: E,
                    method: u.method,
                    action: i
                  },
                  i,
                  E
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Kc = 0; Kc < zf.length; Kc++) {
    var Jc = zf[Kc], Fd = Jc.toLowerCase(), Wd = Jc[0].toUpperCase() + Jc.slice(1);
    qe(
      Fd,
      "on" + Wd
    );
  }
  qe(Gs, "onAnimationEnd"), qe(Is, "onAnimationIteration"), qe(Zs, "onAnimationStart"), qe("dblclick", "onDoubleClick"), qe("focusin", "onFocus"), qe("focusout", "onBlur"), qe(Ad, "onTransitionRun"), qe(dd, "onTransitionStart"), qe(yd, "onTransitionCancel"), qe(Vs, "onTransitionEnd"), zn("onMouseEnter", ["mouseout", "mouseover"]), zn("onMouseLeave", ["mouseout", "mouseover"]), zn("onPointerEnter", ["pointerout", "pointerover"]), zn("onPointerLeave", ["pointerout", "pointerover"]), Wl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Wl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Wl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Wl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Wl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Wl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Fa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), kd = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fa)
  );
  function s1(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l], u = n.event;
      n = n.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var r = n.length - 1; 0 <= r; r--) {
            var y = n[r], E = y.instance, U = y.currentTarget;
            if (y = y.listener, E !== i && u.isPropagationStopped())
              break t;
            i = y, u.currentTarget = U;
            try {
              i(u);
            } catch (Y) {
              Nu(Y);
            }
            u.currentTarget = null, i = E;
          }
        else
          for (r = 0; r < n.length; r++) {
            if (y = n[r], E = y.instance, U = y.currentTarget, y = y.listener, E !== i && u.isPropagationStopped())
              break t;
            i = y, u.currentTarget = U;
            try {
              i(u);
            } catch (Y) {
              Nu(Y);
            }
            u.currentTarget = null, i = E;
          }
      }
    }
  }
  function dt(t, e) {
    var l = e[uf];
    l === void 0 && (l = e[uf] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (r1(e, t, 2, !1), l.add(n));
  }
  function _c(t, e, l) {
    var n = 0;
    e && (n |= 4), r1(
      l,
      t,
      n,
      e
    );
  }
  var Si = "_reactListening" + Math.random().toString(36).slice(2);
  function Fc(t) {
    if (!t[Si]) {
      t[Si] = !0, as.forEach(function(l) {
        l !== "selectionchange" && (kd.has(l) || _c(l, !1, t), _c(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Si] || (e[Si] = !0, _c("selectionchange", !1, e));
    }
  }
  function r1(t, e, l, n) {
    switch (G1(e)) {
      case 2:
        var u = Ty;
        break;
      case 8:
        u = Cy;
        break;
      default:
        u = so;
    }
    l = u.bind(
      null,
      e,
      l,
      t
    ), u = void 0, !hf || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), n ? u !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, l, !0) : u !== void 0 ? t.addEventListener(e, l, {
      passive: u
    }) : t.addEventListener(e, l, !1);
  }
  function Wc(t, e, l, n, u) {
    var i = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (; ; ) {
        if (n === null) return;
        var r = n.tag;
        if (r === 3 || r === 4) {
          var y = n.stateNode.containerInfo;
          if (y === u) break;
          if (r === 4)
            for (r = n.return; r !== null; ) {
              var E = r.tag;
              if ((E === 3 || E === 4) && r.stateNode.containerInfo === u)
                return;
              r = r.return;
            }
          for (; y !== null; ) {
            if (r = Tn(y), r === null) return;
            if (E = r.tag, E === 5 || E === 6 || E === 26 || E === 27) {
              n = i = r;
              continue t;
            }
            y = y.parentNode;
          }
        }
        n = n.return;
      }
    gs(function() {
      var U = i, Y = df(l), q = [];
      t: {
        var z = js.get(t);
        if (z !== void 0) {
          var R = Du, W = t;
          switch (t) {
            case "keypress":
              if (Mu(l) === 0) break t;
            case "keydown":
            case "keyup":
              R = j2;
              break;
            case "focusin":
              W = "focus", R = Ef;
              break;
            case "focusout":
              W = "blur", R = Ef;
              break;
            case "beforeblur":
            case "afterblur":
              R = Ef;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              R = Es;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = Q2;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = J2;
              break;
            case Gs:
            case Is:
            case Zs:
              R = Y2;
              break;
            case Vs:
              R = F2;
              break;
            case "scroll":
            case "scrollend":
              R = O2;
              break;
            case "wheel":
              R = k2;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = L2;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = bs;
              break;
            case "toggle":
            case "beforetoggle":
              R = $2;
          }
          var nt = (e & 4) !== 0, Mt = !nt && (t === "scroll" || t === "scrollend"), T = nt ? z !== null ? z + "Capture" : null : z;
          nt = [];
          for (var p = U, C; p !== null; ) {
            var L = p;
            if (C = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || C === null || T === null || (L = ma(p, T), L != null && nt.push(
              Wa(p, L, C)
            )), Mt) break;
            p = p.return;
          }
          0 < nt.length && (z = new R(
            z,
            W,
            null,
            l,
            Y
          ), q.push({ event: z, listeners: nt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (z = t === "mouseover" || t === "pointerover", R = t === "mouseout" || t === "pointerout", z && l !== Af && (W = l.relatedTarget || l.fromElement) && (Tn(W) || W[Bn]))
            break t;
          if ((R || z) && (z = Y.window === Y ? Y : (z = Y.ownerDocument) ? z.defaultView || z.parentWindow : window, R ? (W = l.relatedTarget || l.toElement, R = U, W = W ? Tn(W) : null, W !== null && (Mt = A(W), nt = W.tag, W !== Mt || nt !== 5 && nt !== 27 && nt !== 6) && (W = null)) : (R = null, W = U), R !== W)) {
            if (nt = Es, L = "onMouseLeave", T = "onMouseEnter", p = "mouse", (t === "pointerout" || t === "pointerover") && (nt = bs, L = "onPointerLeave", T = "onPointerEnter", p = "pointer"), Mt = R == null ? z : ga(R), C = W == null ? z : ga(W), z = new nt(
              L,
              p + "leave",
              R,
              l,
              Y
            ), z.target = Mt, z.relatedTarget = C, L = null, Tn(Y) === U && (nt = new nt(
              T,
              p + "enter",
              W,
              l,
              Y
            ), nt.target = C, nt.relatedTarget = Mt, L = nt), Mt = L, R && W)
              e: {
                for (nt = Pd, T = R, p = W, C = 0, L = T; L; L = nt(L))
                  C++;
                L = 0;
                for (var et = p; et; et = nt(et))
                  L++;
                for (; 0 < C - L; )
                  T = nt(T), C--;
                for (; 0 < L - C; )
                  p = nt(p), L--;
                for (; C--; ) {
                  if (T === p || p !== null && T === p.alternate) {
                    nt = T;
                    break e;
                  }
                  T = nt(T), p = nt(p);
                }
                nt = null;
              }
            else nt = null;
            R !== null && A1(
              q,
              z,
              R,
              nt,
              !1
            ), W !== null && Mt !== null && A1(
              q,
              Mt,
              W,
              nt,
              !0
            );
          }
        }
        t: {
          if (z = U ? ga(U) : window, R = z.nodeName && z.nodeName.toLowerCase(), R === "select" || R === "input" && z.type === "file")
            var bt = Ms;
          else if (Us(z))
            if (Os)
              bt = od;
            else {
              bt = fd;
              var P = id;
            }
          else
            R = z.nodeName, !R || R.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? U && rf(U.elementType) && (bt = Ms) : bt = cd;
          if (bt && (bt = bt(t, U))) {
            zs(
              q,
              bt,
              l,
              Y
            );
            break t;
          }
          P && P(t, z, U), t === "focusout" && U && z.type === "number" && U.memoizedProps.value != null && sf(z, "number", z.value);
        }
        switch (P = U ? ga(U) : window, t) {
          case "focusin":
            (Us(P) || P.contentEditable === "true") && (Nn = P, Tf = U, Ta = null);
            break;
          case "focusout":
            Ta = Tf = Nn = null;
            break;
          case "mousedown":
            Cf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Cf = !1, Hs(q, l, Y);
            break;
          case "selectionchange":
            if (rd) break;
          case "keydown":
          case "keyup":
            Hs(q, l, Y);
        }
        var st;
        if (bf)
          t: {
            switch (t) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break t;
              case "compositionend":
                ht = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break t;
            }
            ht = void 0;
          }
        else
          Rn ? Ts(t, l) && (ht = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ht = "onCompositionStart");
        ht && (ps && l.locale !== "ko" && (Rn || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && Rn && (st = ms()) : (Sl = Y, gf = "value" in Sl ? Sl.value : Sl.textContent, Rn = !0)), P = bi(U, ht), 0 < P.length && (ht = new Ss(
          ht,
          t,
          null,
          l,
          Y
        ), q.push({ event: ht, listeners: P }), st ? ht.data = st : (st = Cs(l), st !== null && (ht.data = st)))), (st = ed ? ld(t, l) : nd(t, l)) && (ht = bi(U, "onBeforeInput"), 0 < ht.length && (P = new Ss(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          Y
        ), q.push({
          event: P,
          listeners: ht
        }), P.data = st)), _d(
          q,
          t,
          U,
          l,
          Y
        );
      }
      s1(q, e);
    });
  }
  function Wa(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function bi(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var u = t, i = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || i === null || (u = ma(t, l), u != null && n.unshift(
        Wa(t, u, i)
      ), u = ma(t, e), u != null && n.push(
        Wa(t, u, i)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function Pd(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function A1(t, e, l, n, u) {
    for (var i = e._reactName, r = []; l !== null && l !== n; ) {
      var y = l, E = y.alternate, U = y.stateNode;
      if (y = y.tag, E !== null && E === n) break;
      y !== 5 && y !== 26 && y !== 27 || U === null || (E = U, u ? (U = ma(l, i), U != null && r.unshift(
        Wa(l, U, E)
      )) : u || (U = ma(l, i), U != null && r.push(
        Wa(l, U, E)
      ))), l = l.return;
    }
    r.length !== 0 && t.push({ event: e, listeners: r });
  }
  var $d = /\r\n?/g, ty = /\u0000|\uFFFD/g;
  function d1(t) {
    return (typeof t == "string" ? t : "" + t).replace($d, `
`).replace(ty, "");
  }
  function y1(t, e) {
    return e = d1(e), d1(t) === e;
  }
  function zt(t, e, l, n, u, i) {
    switch (l) {
      case "children":
        typeof n == "string" ? e === "body" || e === "textarea" && n === "" || On(t, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && On(t, "" + n);
        break;
      case "className":
        Tu(t, "class", n);
        break;
      case "tabIndex":
        Tu(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Tu(t, l, n);
        break;
      case "style":
        ys(t, n, i);
        break;
      case "data":
        if (e !== "object") {
          Tu(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = Uu("" + n), t.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (e !== "input" && zt(t, e, "name", u.name, u, null), zt(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), zt(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), zt(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (zt(t, e, "encType", u.encType, u, null), zt(t, e, "method", u.method, u, null), zt(t, e, "target", u.target, u, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = Uu("" + n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = tl);
        break;
      case "onScroll":
        n != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && dt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(c(61));
          if (l = n.__html, l != null) {
            if (u.children != null) throw Error(c(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = Uu("" + n), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "" + n) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0 ? t.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? t.removeAttribute(l) : t.setAttribute(l, n);
        break;
      case "popover":
        dt("beforetoggle", t), dt("toggle", t), Bu(t, "popover", n);
        break;
      case "xlinkActuate":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Bu(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = z2.get(l) || l, Bu(t, l, n));
    }
  }
  function kc(t, e, l, n, u, i) {
    switch (l) {
      case "style":
        ys(t, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(c(61));
          if (l = n.__html, l != null) {
            if (u.children != null) throw Error(c(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? On(t, n) : (typeof n == "number" || typeof n == "bigint") && On(t, "" + n);
        break;
      case "onScroll":
        n != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && dt("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = tl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!us.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (u = l.endsWith("Capture"), e = l.slice(2, u ? l.length - 7 : void 0), i = t[ce] || null, i = i != null ? i[l] : null, typeof i == "function" && t.removeEventListener(e, i, u), typeof n == "function")) {
              typeof i != "function" && i !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, n, u);
              break t;
            }
            l in t ? t[l] = n : n === !0 ? t.setAttribute(l, "") : Bu(t, l, n);
          }
    }
  }
  function ne(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        dt("error", t), dt("load", t);
        var n = !1, u = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var r = l[i];
            if (r != null)
              switch (i) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, e));
                default:
                  zt(t, e, i, r, l, null);
              }
          }
        u && zt(t, e, "srcSet", l.srcSet, l, null), n && zt(t, e, "src", l.src, l, null);
        return;
      case "input":
        dt("invalid", t);
        var y = i = r = u = null, E = null, U = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var Y = l[n];
            if (Y != null)
              switch (n) {
                case "name":
                  u = Y;
                  break;
                case "type":
                  r = Y;
                  break;
                case "checked":
                  E = Y;
                  break;
                case "defaultChecked":
                  U = Y;
                  break;
                case "value":
                  i = Y;
                  break;
                case "defaultValue":
                  y = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(c(137, e));
                  break;
                default:
                  zt(t, e, n, Y, l, null);
              }
          }
        ss(
          t,
          i,
          y,
          E,
          U,
          r,
          u,
          !1
        );
        return;
      case "select":
        dt("invalid", t), n = r = i = null;
        for (u in l)
          if (l.hasOwnProperty(u) && (y = l[u], y != null))
            switch (u) {
              case "value":
                i = y;
                break;
              case "defaultValue":
                r = y;
                break;
              case "multiple":
                n = y;
              default:
                zt(t, e, u, y, l, null);
            }
        e = i, l = r, t.multiple = !!n, e != null ? Mn(t, !!n, e, !1) : l != null && Mn(t, !!n, l, !0);
        return;
      case "textarea":
        dt("invalid", t), i = u = n = null;
        for (r in l)
          if (l.hasOwnProperty(r) && (y = l[r], y != null))
            switch (r) {
              case "value":
                n = y;
                break;
              case "defaultValue":
                u = y;
                break;
              case "children":
                i = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(c(91));
                break;
              default:
                zt(t, e, r, y, l, null);
            }
        As(t, n, u, i);
        return;
      case "option":
        for (E in l)
          if (l.hasOwnProperty(E) && (n = l[E], n != null))
            switch (E) {
              case "selected":
                t.selected = n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                zt(t, e, E, n, l, null);
            }
        return;
      case "dialog":
        dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
        break;
      case "iframe":
      case "object":
        dt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Fa.length; n++)
          dt(Fa[n], t);
        break;
      case "image":
        dt("error", t), dt("load", t);
        break;
      case "details":
        dt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        dt("error", t), dt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (U in l)
          if (l.hasOwnProperty(U) && (n = l[U], n != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                zt(t, e, U, n, l, null);
            }
        return;
      default:
        if (rf(e)) {
          for (Y in l)
            l.hasOwnProperty(Y) && (n = l[Y], n !== void 0 && kc(
              t,
              e,
              Y,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (y in l)
      l.hasOwnProperty(y) && (n = l[y], n != null && zt(t, e, y, n, l, null));
  }
  function ey(t, e, l, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, i = null, r = null, y = null, E = null, U = null, Y = null;
        for (R in l) {
          var q = l[R];
          if (l.hasOwnProperty(R) && q != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = q;
              default:
                n.hasOwnProperty(R) || zt(t, e, R, null, n, q);
            }
        }
        for (var z in n) {
          var R = n[z];
          if (q = l[z], n.hasOwnProperty(z) && (R != null || q != null))
            switch (z) {
              case "type":
                i = R;
                break;
              case "name":
                u = R;
                break;
              case "checked":
                U = R;
                break;
              case "defaultChecked":
                Y = R;
                break;
              case "value":
                r = R;
                break;
              case "defaultValue":
                y = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(c(137, e));
                break;
              default:
                R !== q && zt(
                  t,
                  e,
                  z,
                  R,
                  n,
                  q
                );
            }
        }
        of(
          t,
          r,
          y,
          E,
          U,
          Y,
          i,
          u
        );
        return;
      case "select":
        R = r = y = z = null;
        for (i in l)
          if (E = l[i], l.hasOwnProperty(i) && E != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                R = E;
              default:
                n.hasOwnProperty(i) || zt(
                  t,
                  e,
                  i,
                  null,
                  n,
                  E
                );
            }
        for (u in n)
          if (i = n[u], E = l[u], n.hasOwnProperty(u) && (i != null || E != null))
            switch (u) {
              case "value":
                z = i;
                break;
              case "defaultValue":
                y = i;
                break;
              case "multiple":
                r = i;
              default:
                i !== E && zt(
                  t,
                  e,
                  u,
                  i,
                  n,
                  E
                );
            }
        e = y, l = r, n = R, z != null ? Mn(t, !!l, z, !1) : !!n != !!l && (e != null ? Mn(t, !!l, e, !0) : Mn(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        R = z = null;
        for (y in l)
          if (u = l[y], l.hasOwnProperty(y) && u != null && !n.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                zt(t, e, y, null, n, u);
            }
        for (r in n)
          if (u = n[r], i = l[r], n.hasOwnProperty(r) && (u != null || i != null))
            switch (r) {
              case "value":
                z = u;
                break;
              case "defaultValue":
                R = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(c(91));
                break;
              default:
                u !== i && zt(t, e, r, u, n, i);
            }
        rs(t, z, R);
        return;
      case "option":
        for (var W in l)
          if (z = l[W], l.hasOwnProperty(W) && z != null && !n.hasOwnProperty(W))
            switch (W) {
              case "selected":
                t.selected = !1;
                break;
              default:
                zt(
                  t,
                  e,
                  W,
                  null,
                  n,
                  z
                );
            }
        for (E in n)
          if (z = n[E], R = l[E], n.hasOwnProperty(E) && z !== R && (z != null || R != null))
            switch (E) {
              case "selected":
                t.selected = z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                zt(
                  t,
                  e,
                  E,
                  z,
                  n,
                  R
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var nt in l)
          z = l[nt], l.hasOwnProperty(nt) && z != null && !n.hasOwnProperty(nt) && zt(t, e, nt, null, n, z);
        for (U in n)
          if (z = n[U], R = l[U], n.hasOwnProperty(U) && z !== R && (z != null || R != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(c(137, e));
                break;
              default:
                zt(
                  t,
                  e,
                  U,
                  z,
                  n,
                  R
                );
            }
        return;
      default:
        if (rf(e)) {
          for (var Mt in l)
            z = l[Mt], l.hasOwnProperty(Mt) && z !== void 0 && !n.hasOwnProperty(Mt) && kc(
              t,
              e,
              Mt,
              void 0,
              n,
              z
            );
          for (Y in n)
            z = n[Y], R = l[Y], !n.hasOwnProperty(Y) || z === R || z === void 0 && R === void 0 || kc(
              t,
              e,
              Y,
              z,
              n,
              R
            );
          return;
        }
    }
    for (var T in l)
      z = l[T], l.hasOwnProperty(T) && z != null && !n.hasOwnProperty(T) && zt(t, e, T, null, n, z);
    for (q in n)
      z = n[q], R = l[q], !n.hasOwnProperty(q) || z === R || z == null && R == null || zt(t, e, q, z, n, R);
  }
  function h1(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function ly() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var u = l[n], i = u.transferSize, r = u.initiatorType, y = u.duration;
        if (i && y && h1(r)) {
          for (r = 0, y = u.responseEnd, n += 1; n < l.length; n++) {
            var E = l[n], U = E.startTime;
            if (U > y) break;
            var Y = E.transferSize, q = E.initiatorType;
            Y && h1(q) && (E = E.responseEnd, r += Y * (E < y ? 1 : (y - U) / (E - U)));
          }
          if (--n, e += 8 * (i + r) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Pc = null, $c = null;
  function pi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function g1(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function m1(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function to(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var eo = null;
  function ny() {
    var t = window.event;
    return t && t.type === "popstate" ? t === eo ? !1 : (eo = t, !0) : (eo = null, !1);
  }
  var v1 = typeof setTimeout == "function" ? setTimeout : void 0, ay = typeof clearTimeout == "function" ? clearTimeout : void 0, E1 = typeof Promise == "function" ? Promise : void 0, uy = typeof queueMicrotask == "function" ? queueMicrotask : typeof E1 < "u" ? function(t) {
    return E1.resolve(null).then(t).catch(iy);
  } : v1;
  function iy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ll(t) {
    return t === "head";
  }
  function S1(t, e) {
    var l = e, n = 0;
    do {
      var u = l.nextSibling;
      if (t.removeChild(l), u && u.nodeType === 8)
        if (l = u.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(u), fa(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          ka(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, ka(l);
          for (var i = l.firstChild; i; ) {
            var r = i.nextSibling, y = i.nodeName;
            i[ha] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = r;
          }
        } else
          l === "body" && ka(t.ownerDocument.body);
      l = u;
    } while (l);
    fa(e);
  }
  function b1(t, e) {
    var l = t;
    t = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8)
        if (l = n.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = n;
    } while (l);
  }
  function lo(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          lo(l), ff(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function fy(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var u = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (n) {
        if (!t[ha])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = Le(t.nextSibling), t === null) break;
    }
    return null;
  }
  function cy(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Le(t.nextSibling), t === null)) return null;
    return t;
  }
  function p1(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Le(t.nextSibling), t === null)) return null;
    return t;
  }
  function no(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function ao(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function oy(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var n = function() {
        e(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), t._reactRetry = n;
    }
  }
  function Le(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var uo = null;
  function w1(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return Le(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function B1(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function T1(t, e, l) {
    switch (e = pi(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(c(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(c(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(c(454));
        return t;
      default:
        throw Error(c(451));
    }
  }
  function ka(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    ff(t);
  }
  var He = /* @__PURE__ */ new Map(), C1 = /* @__PURE__ */ new Set();
  function wi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var gl = X.d;
  X.d = {
    f: sy,
    r: ry,
    D: Ay,
    C: dy,
    L: yy,
    m: hy,
    X: my,
    S: gy,
    M: vy
  };
  function sy() {
    var t = gl.f(), e = yi();
    return t || e;
  }
  function ry(t) {
    var e = Cn(t);
    e !== null && e.tag === 5 && e.type === "form" ? Vr(e) : gl.r(t);
  }
  var aa = typeof document > "u" ? null : document;
  function U1(t, e, l) {
    var n = aa;
    if (n && typeof e == "string" && e) {
      var u = Oe(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof l == "string" && (u += '[crossorigin="' + l + '"]'), C1.has(u) || (C1.add(u), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(u) === null && (e = n.createElement("link"), ne(e, "link", t), Wt(e), n.head.appendChild(e)));
    }
  }
  function Ay(t) {
    gl.D(t), U1("dns-prefetch", t, null);
  }
  function dy(t, e) {
    gl.C(t, e), U1("preconnect", t, e);
  }
  function yy(t, e, l) {
    gl.L(t, e, l);
    var n = aa;
    if (n && t && e) {
      var u = 'link[rel="preload"][as="' + Oe(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (u += '[imagesrcset="' + Oe(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (u += '[imagesizes="' + Oe(
        l.imageSizes
      ) + '"]')) : u += '[href="' + Oe(t) + '"]';
      var i = u;
      switch (e) {
        case "style":
          i = ua(t);
          break;
        case "script":
          i = ia(t);
      }
      He.has(i) || (t = v(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), He.set(i, t), n.querySelector(u) !== null || e === "style" && n.querySelector(Pa(i)) || e === "script" && n.querySelector($a(i)) || (e = n.createElement("link"), ne(e, "link", t), Wt(e), n.head.appendChild(e)));
    }
  }
  function hy(t, e) {
    gl.m(t, e);
    var l = aa;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + Oe(n) + '"][href="' + Oe(t) + '"]', i = u;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = ia(t);
      }
      if (!He.has(i) && (t = v({ rel: "modulepreload", href: t }, e), He.set(i, t), l.querySelector(u) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector($a(i)))
              return;
        }
        n = l.createElement("link"), ne(n, "link", t), Wt(n), l.head.appendChild(n);
      }
    }
  }
  function gy(t, e, l) {
    gl.S(t, e, l);
    var n = aa;
    if (n && t) {
      var u = Un(n).hoistableStyles, i = ua(t);
      e = e || "default";
      var r = u.get(i);
      if (!r) {
        var y = { loading: 0, preload: null };
        if (r = n.querySelector(
          Pa(i)
        ))
          y.loading = 5;
        else {
          t = v(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = He.get(i)) && io(t, l);
          var E = r = n.createElement("link");
          Wt(E), ne(E, "link", t), E._p = new Promise(function(U, Y) {
            E.onload = U, E.onerror = Y;
          }), E.addEventListener("load", function() {
            y.loading |= 1;
          }), E.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, Bi(r, e, n);
        }
        r = {
          type: "stylesheet",
          instance: r,
          count: 1,
          state: y
        }, u.set(i, r);
      }
    }
  }
  function my(t, e) {
    gl.X(t, e);
    var l = aa;
    if (l && t) {
      var n = Un(l).hoistableScripts, u = ia(t), i = n.get(u);
      i || (i = l.querySelector($a(u)), i || (t = v({ src: t, async: !0 }, e), (e = He.get(u)) && fo(t, e), i = l.createElement("script"), Wt(i), ne(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(u, i));
    }
  }
  function vy(t, e) {
    gl.M(t, e);
    var l = aa;
    if (l && t) {
      var n = Un(l).hoistableScripts, u = ia(t), i = n.get(u);
      i || (i = l.querySelector($a(u)), i || (t = v({ src: t, async: !0, type: "module" }, e), (e = He.get(u)) && fo(t, e), i = l.createElement("script"), Wt(i), ne(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(u, i));
    }
  }
  function z1(t, e, l, n) {
    var u = (u = ct.current) ? wi(u) : null;
    if (!u) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = ua(l.href), l = Un(
          u
        ).hoistableStyles, n = l.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = ua(l.href);
          var i = Un(
            u
          ).hoistableStyles, r = i.get(t);
          if (r || (u = u.ownerDocument || u, r = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, r), (i = u.querySelector(
            Pa(t)
          )) && !i._p && (r.instance = i, r.state.loading = 5), He.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, He.set(t, l), i || Ey(
            u,
            t,
            l,
            r.state
          ))), e && n === null)
            throw Error(c(528, ""));
          return r;
        }
        if (e && n !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ia(l), l = Un(
          u
        ).hoistableScripts, n = l.get(e), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, t));
    }
  }
  function ua(t) {
    return 'href="' + Oe(t) + '"';
  }
  function Pa(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function M1(t) {
    return v({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Ey(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = t.createElement("link"), n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    }), ne(e, "link", l), Wt(e), t.head.appendChild(e));
  }
  function ia(t) {
    return '[src="' + Oe(t) + '"]';
  }
  function $a(t) {
    return "script[async]" + t;
  }
  function O1(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + Oe(l.href) + '"]'
          );
          if (n)
            return e.instance = n, Wt(n), n;
          var u = v({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), Wt(n), ne(n, "style", u), Bi(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          u = ua(l.href);
          var i = t.querySelector(
            Pa(u)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, Wt(i), i;
          n = M1(l), (u = He.get(u)) && io(n, u), i = (t.ownerDocument || t).createElement("link"), Wt(i);
          var r = i;
          return r._p = new Promise(function(y, E) {
            r.onload = y, r.onerror = E;
          }), ne(i, "link", n), e.state.loading |= 4, Bi(i, l.precedence, t), e.instance = i;
        case "script":
          return i = ia(l.src), (u = t.querySelector(
            $a(i)
          )) ? (e.instance = u, Wt(u), u) : (n = l, (u = He.get(i)) && (n = v({}, l), fo(n, u)), t = t.ownerDocument || t, u = t.createElement("script"), Wt(u), ne(u, "link", n), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, Bi(n, l.precedence, t));
    return e.instance;
  }
  function Bi(t, e, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = n.length ? n[n.length - 1] : null, i = u, r = 0; r < n.length; r++) {
      var y = n[r];
      if (y.dataset.precedence === e) i = y;
      else if (i !== u) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function io(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function fo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Ti = null;
  function D1(t, e, l) {
    if (Ti === null) {
      var n = /* @__PURE__ */ new Map(), u = Ti = /* @__PURE__ */ new Map();
      u.set(l, n);
    } else
      u = Ti, n = u.get(l), n || (n = /* @__PURE__ */ new Map(), u.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), u = 0; u < l.length; u++) {
      var i = l[u];
      if (!(i[ha] || i[$t] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var r = i.getAttribute(e) || "";
        r = t + r;
        var y = n.get(r);
        y ? y.push(i) : n.set(r, [i]);
      }
    }
    return n;
  }
  function Q1(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Sy(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function R1(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function by(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var u = ua(n.href), i = e.querySelector(
          Pa(u)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Ci.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, Wt(i);
          return;
        }
        i = e.ownerDocument || e, n = M1(n), (u = He.get(u)) && io(n, u), i = i.createElement("link"), Wt(i);
        var r = i;
        r._p = new Promise(function(y, E) {
          r.onload = y, r.onerror = E;
        }), ne(i, "link", n), l.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Ci.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var co = 0;
  function py(t, e) {
    return t.stylesheets && t.count === 0 && zi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && zi(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && co === 0 && (co = 62500 * ly());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && zi(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > co ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(u);
      };
    } : null;
  }
  function Ci() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) zi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Ui = null;
  function zi(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ui = /* @__PURE__ */ new Map(), e.forEach(wy, t), Ui = null, Ci.call(t));
  }
  function wy(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Ui.get(t);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Ui.set(t, l);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < u.length; i++) {
          var r = u[i];
          (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") && (l.set(r.dataset.precedence, r), n = r);
        }
        n && l.set(null, n);
      }
      u = e.instance, r = u.getAttribute("data-precedence"), i = l.get(r) || n, i === n && l.set(null, u), l.set(r, u), this.count++, n = Ci.bind(this), u.addEventListener("load", n), u.addEventListener("error", n), i ? i.parentNode.insertBefore(u, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var tu = {
    $$typeof: G,
    Provider: null,
    Consumer: null,
    _currentValue: tt,
    _currentValue2: tt,
    _threadCount: 0
  };
  function By(t, e, l, n, u, i, r, y, E) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = lf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lf(0), this.hiddenUpdates = lf(null), this.identifierPrefix = n, this.onUncaughtError = u, this.onCaughtError = i, this.onRecoverableError = r, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function N1(t, e, l, n, u, i, r, y, E, U, Y, q) {
    return t = new By(
      t,
      e,
      l,
      r,
      E,
      U,
      Y,
      q,
      y
    ), e = 1, i === !0 && (e |= 24), i = be(3, null, null, e), t.current = i, i.stateNode = t, e = If(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, Xf(i), t;
  }
  function Y1(t) {
    return t ? (t = Ln, t) : Ln;
  }
  function x1(t, e, l, n, u, i) {
    u = Y1(u), n.context === null ? n.context = u : n.pendingContext = u, n = Cl(e), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Ul(t, n, e), l !== null && (ye(l, t, e), Qa(l, t, e));
  }
  function L1(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function oo(t, e) {
    L1(t, e), (t = t.alternate) && L1(t, e);
  }
  function H1(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = tn(t, 67108864);
      e !== null && ye(e, t, 67108864), oo(t, 67108864);
    }
  }
  function q1(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ce();
      e = nf(e);
      var l = tn(t, e);
      l !== null && ye(l, t, e), oo(t, e);
    }
  }
  var Mi = !0;
  function Ty(t, e, l, n) {
    var u = O.T;
    O.T = null;
    var i = X.p;
    try {
      X.p = 2, so(t, e, l, n);
    } finally {
      X.p = i, O.T = u;
    }
  }
  function Cy(t, e, l, n) {
    var u = O.T;
    O.T = null;
    var i = X.p;
    try {
      X.p = 8, so(t, e, l, n);
    } finally {
      X.p = i, O.T = u;
    }
  }
  function so(t, e, l, n) {
    if (Mi) {
      var u = ro(n);
      if (u === null)
        Wc(
          t,
          e,
          n,
          Oi,
          l
        ), I1(t, n);
      else if (zy(
        u,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (I1(t, n), e & 4 && -1 < Uy.indexOf(t)) {
        for (; u !== null; ) {
          var i = Cn(u);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var r = Fl(i.pendingLanes);
                  if (r !== 0) {
                    var y = i;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; r; ) {
                      var E = 1 << 31 - Ee(r);
                      y.entanglements[1] |= E, r &= ~E;
                    }
                    We(i), (Bt & 6) === 0 && (Ai = Pt() + 500, _a(0));
                  }
                }
                break;
              case 31:
              case 13:
                y = tn(i, 2), y !== null && ye(y, i, 2), yi(), oo(i, 2);
            }
          if (i = ro(n), i === null && Wc(
            t,
            e,
            n,
            Oi,
            l
          ), i === u) break;
          u = i;
        }
        u !== null && n.stopPropagation();
      } else
        Wc(
          t,
          e,
          n,
          null,
          l
        );
    }
  }
  function ro(t) {
    return t = df(t), Ao(t);
  }
  var Oi = null;
  function Ao(t) {
    if (Oi = null, t = Tn(t), t !== null) {
      var e = A(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = h(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Oi = t, null;
  }
  function G1(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (wn()) {
          case _o:
            return 2;
          case Fo:
            return 8;
          case Eu:
          case d2:
            return 32;
          case Wo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var yo = !1, Hl = null, ql = null, Gl = null, eu = /* @__PURE__ */ new Map(), lu = /* @__PURE__ */ new Map(), Il = [], Uy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function I1(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Hl = null;
        break;
      case "dragenter":
      case "dragleave":
        ql = null;
        break;
      case "mouseover":
      case "mouseout":
        Gl = null;
        break;
      case "pointerover":
      case "pointerout":
        eu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        lu.delete(e.pointerId);
    }
  }
  function nu(t, e, l, n, u, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [u]
    }, e !== null && (e = Cn(e), e !== null && H1(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function zy(t, e, l, n, u) {
    switch (e) {
      case "focusin":
        return Hl = nu(
          Hl,
          t,
          e,
          l,
          n,
          u
        ), !0;
      case "dragenter":
        return ql = nu(
          ql,
          t,
          e,
          l,
          n,
          u
        ), !0;
      case "mouseover":
        return Gl = nu(
          Gl,
          t,
          e,
          l,
          n,
          u
        ), !0;
      case "pointerover":
        var i = u.pointerId;
        return eu.set(
          i,
          nu(
            eu.get(i) || null,
            t,
            e,
            l,
            n,
            u
          )
        ), !0;
      case "gotpointercapture":
        return i = u.pointerId, lu.set(
          i,
          nu(
            lu.get(i) || null,
            t,
            e,
            l,
            n,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Z1(t) {
    var e = Tn(t.target);
    if (e !== null) {
      var l = A(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = d(l), e !== null) {
            t.blockedOn = e, ls(t.priority, function() {
              q1(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = h(l), e !== null) {
            t.blockedOn = e, ls(t.priority, function() {
              q1(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Di(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = ro(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        Af = n, l.target.dispatchEvent(n), Af = null;
      } else
        return e = Cn(l), e !== null && H1(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function V1(t, e, l) {
    Di(t) && l.delete(e);
  }
  function My() {
    yo = !1, Hl !== null && Di(Hl) && (Hl = null), ql !== null && Di(ql) && (ql = null), Gl !== null && Di(Gl) && (Gl = null), eu.forEach(V1), lu.forEach(V1);
  }
  function Qi(t, e) {
    t.blockedOn === e && (t.blockedOn = null, yo || (yo = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      My
    )));
  }
  var Ri = null;
  function j1(t) {
    Ri !== t && (Ri = t, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Ri === t && (Ri = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], u = t[e + 2];
          if (typeof n != "function") {
            if (Ao(n || l) === null)
              continue;
            break;
          }
          var i = Cn(l);
          i !== null && (t.splice(e, 3), e -= 3, rc(
            i,
            {
              pending: !0,
              data: u,
              method: l.method,
              action: n
            },
            n,
            u
          ));
        }
      }
    ));
  }
  function fa(t) {
    function e(E) {
      return Qi(E, t);
    }
    Hl !== null && Qi(Hl, t), ql !== null && Qi(ql, t), Gl !== null && Qi(Gl, t), eu.forEach(e), lu.forEach(e);
    for (var l = 0; l < Il.length; l++) {
      var n = Il[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < Il.length && (l = Il[0], l.blockedOn === null); )
      Z1(l), l.blockedOn === null && Il.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var u = l[n], i = l[n + 1], r = u[ce] || null;
        if (typeof i == "function")
          r || j1(l);
        else if (r) {
          var y = null;
          if (i && i.hasAttribute("formAction")) {
            if (u = i, r = i[ce] || null)
              y = r.formAction;
            else if (Ao(u) !== null) continue;
          } else y = r.action;
          typeof y == "function" ? l[n + 1] = y : (l.splice(n, 3), n -= 3), j1(l);
        }
      }
  }
  function X1() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(r) {
            return u = r;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      u !== null && (u(), u = null), n || setTimeout(l, 20);
    }
    function l() {
      if (!n && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        n = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), u !== null && (u(), u = null);
      };
    }
  }
  function ho(t) {
    this._internalRoot = t;
  }
  Ni.prototype.render = ho.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(c(409));
    var l = e.current, n = Ce();
    x1(l, n, t, e, null, null);
  }, Ni.prototype.unmount = ho.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      x1(t.current, 2, null, t, null, null), yi(), e[Bn] = null;
    }
  };
  function Ni(t) {
    this._internalRoot = t;
  }
  Ni.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = es();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Il.length && e !== 0 && e < Il[l].priority; l++) ;
      Il.splice(l, 0, t), l === 0 && Z1(t);
    }
  };
  var K1 = f.version;
  if (K1 !== "19.2.7")
    throw Error(
      c(
        527,
        K1,
        "19.2.7"
      )
    );
  X.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = g(e), t = t !== null ? S(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Oy = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yi.isDisabled && Yi.supportsFiber)
      try {
        Aa = Yi.inject(
          Oy
        ), ve = Yi;
      } catch {
      }
  }
  return uu.createRoot = function(t, e) {
    if (!s(t)) throw Error(c(299));
    var l = !1, n = "", u = $r, i = t0, r = e0;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (r = e.onRecoverableError)), e = N1(
      t,
      1,
      !1,
      null,
      null,
      l,
      n,
      null,
      u,
      i,
      r,
      X1
    ), t[Bn] = e.current, Fc(t), new ho(e);
  }, uu.hydrateRoot = function(t, e, l) {
    if (!s(t)) throw Error(c(299));
    var n = !1, u = "", i = $r, r = t0, y = e0, E = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (r = l.onCaughtError), l.onRecoverableError !== void 0 && (y = l.onRecoverableError), l.formState !== void 0 && (E = l.formState)), e = N1(
      t,
      1,
      !0,
      e,
      l ?? null,
      n,
      u,
      E,
      i,
      r,
      y,
      X1
    ), e.context = Y1(null), l = e.current, n = Ce(), n = nf(n), u = Cl(n), u.callback = null, Ul(l, u, n), l = n, e.current.lanes = l, ya(e, l), We(e), t[Bn] = e.current, Fc(t), new Ni(e);
  }, uu.version = "19.2.7", uu;
}
var lA;
function Gy() {
  if (lA) return vo.exports;
  lA = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (f) {
        console.error(f);
      }
  }
  return a(), vo.exports = qy(), vo.exports;
}
var Iy = Gy();
const nA = [
  "BOOLEAN",
  "INT32",
  "INT64",
  "INT96",
  // deprecated
  "FLOAT",
  "DOUBLE",
  "BYTE_ARRAY",
  "FIXED_LEN_BYTE_ARRAY"
], hn = [
  "PLAIN",
  "GROUP_VAR_INT",
  // deprecated
  "PLAIN_DICTIONARY",
  "RLE",
  "BIT_PACKED",
  // deprecated
  "DELTA_BINARY_PACKED",
  "DELTA_LENGTH_BYTE_ARRAY",
  "DELTA_BYTE_ARRAY",
  "RLE_DICTIONARY",
  "BYTE_STREAM_SPLIT"
], Zy = [
  "REQUIRED",
  "OPTIONAL",
  "REPEATED"
], Vy = [
  "UTF8",
  "MAP",
  "MAP_KEY_VALUE",
  "LIST",
  "ENUM",
  "DECIMAL",
  "DATE",
  "TIME_MILLIS",
  "TIME_MICROS",
  "TIMESTAMP_MILLIS",
  "TIMESTAMP_MICROS",
  "UINT_8",
  "UINT_16",
  "UINT_32",
  "UINT_64",
  "INT_8",
  "INT_16",
  "INT_32",
  "INT_64",
  "JSON",
  "BSON",
  "INTERVAL"
], jy = [
  "UNCOMPRESSED",
  "SNAPPY",
  "GZIP",
  "LZO",
  "BROTLI",
  "LZ4",
  "ZSTD",
  "LZ4_RAW"
], NA = [
  "DATA_PAGE",
  "INDEX_PAGE",
  "DICTIONARY_PAGE",
  "DATA_PAGE_V2"
], Xy = [
  "SPHERICAL",
  "VINCENTY",
  "THOMAS",
  "ANDOYER",
  "KARNEY"
];
function zo(a) {
  const f = xi(a);
  if (f.type === 1)
    return { type: "Point", coordinates: Mo(a, f) };
  if (f.type === 2)
    return { type: "LineString", coordinates: Oo(a, f) };
  if (f.type === 3)
    return { type: "Polygon", coordinates: aA(a, f) };
  if (f.type === 4) {
    const o = [];
    for (let c = 0; c < f.count; c++)
      o.push(Mo(a, xi(a)));
    return { type: "MultiPoint", coordinates: o };
  } else if (f.type === 5) {
    const o = [];
    for (let c = 0; c < f.count; c++)
      o.push(Oo(a, xi(a)));
    return { type: "MultiLineString", coordinates: o };
  } else if (f.type === 6) {
    const o = [];
    for (let c = 0; c < f.count; c++)
      o.push(aA(a, xi(a)));
    return { type: "MultiPolygon", coordinates: o };
  } else if (f.type === 7) {
    const o = [];
    for (let c = 0; c < f.count; c++)
      o.push(zo(a));
    return { type: "GeometryCollection", geometries: o };
  } else
    throw new Error(`Unsupported geometry type: ${f.type}`);
}
function xi(a) {
  const { view: f } = a, o = f.getUint8(a.offset++) === 1, c = f.getUint32(a.offset, o);
  a.offset += 4;
  const s = c % 1e3, A = Math.floor(c / 1e3);
  let d = 0;
  s > 1 && s <= 7 && (d = f.getUint32(a.offset, o), a.offset += 4);
  let h = 2;
  return A && h++, A === 3 && h++, { littleEndian: o, type: s, dim: h, count: d };
}
function Mo(a, f) {
  const o = [];
  for (let c = 0; c < f.dim; c++) {
    const s = a.view.getFloat64(a.offset, f.littleEndian);
    a.offset += 8, o.push(s);
  }
  return o;
}
function Oo(a, f) {
  const o = [];
  for (let c = 0; c < f.count; c++)
    o.push(Mo(a, f));
  return o;
}
function aA(a, f) {
  const { view: o } = a, c = [];
  for (let s = 0; s < f.count; s++) {
    const A = o.getUint32(a.offset, f.littleEndian);
    a.offset += 4, c.push(Oo(a, { ...f, count: A }));
  }
  return c;
}
const YA = new TextDecoder(), Pi = {
  timestampFromMilliseconds(a) {
    return new Date(Number(a));
  },
  timestampFromMicroseconds(a) {
    return new Date(Number(a / 1000n));
  },
  timestampFromNanoseconds(a) {
    return new Date(Number(a / 1000000n));
  },
  dateFromDays(a) {
    return new Date(a * 864e5);
  },
  stringFromBytes(a) {
    return a && YA.decode(a);
  },
  geometryFromBytes(a) {
    return a && zo({ view: new DataView(a.buffer, a.byteOffset, a.byteLength), offset: 0 });
  },
  geographyFromBytes(a) {
    return a && zo({ view: new DataView(a.buffer, a.byteOffset, a.byteLength), offset: 0 });
  },
  uuidFromBytes(a) {
    if (!a) return;
    const f = Array.from(a, (o) => o.toString(16).padStart(2, "0")).join("");
    return f.slice(0, 8) + "-" + f.slice(8, 12) + "-" + f.slice(12, 16) + "-" + f.slice(16, 20) + "-" + f.slice(20, 32);
  }
};
function uA(a, f, o, c) {
  if (f && o.endsWith("_DICTIONARY")) {
    let s = a;
    a instanceof Uint8Array && !(f instanceof Uint8Array) && (s = new f.constructor(a.length));
    for (let A = 0; A < a.length; A++)
      s[A] = f[a[A]];
    return s;
  } else
    return xA(a, c);
}
function xA(a, f) {
  const { element: o, parsers: c, utf8: s = !0, schemaPath: A } = f, { type: d, converted_type: h, logical_type: m } = o, g = o.repetition_type !== "REQUIRED";
  if (A?.some((v) => v.element.logical_type?.type === "VARIANT") && d === "BYTE_ARRAY" && h !== "UTF8" && m?.type !== "STRING")
    return a;
  if (h === "DECIMAL") {
    const b = 10 ** -(o.scale || 0), Q = new Array(a.length);
    for (let D = 0; D < Q.length; D++)
      a[D] instanceof Uint8Array ? Q[D] = LA(a[D]) * b : Q[D] = Number(a[D]) * b;
    return Q;
  }
  if (!h && d === "INT96")
    return Array.from(a).map((v) => c.timestampFromNanoseconds(Ky(v)));
  if (h === "DATE")
    return Array.from(a).map((v) => c.dateFromDays(v));
  if (h === "TIMESTAMP_MILLIS")
    return Array.from(a).map((v) => c.timestampFromMilliseconds(v));
  if (h === "TIMESTAMP_MICROS")
    return Array.from(a).map((v) => c.timestampFromMicroseconds(v));
  if (h === "JSON")
    return a.map((v) => JSON.parse(YA.decode(v)));
  if (h === "BSON")
    throw new Error("parquet bson not supported");
  if (h === "INTERVAL")
    throw new Error("parquet interval not supported");
  if (m?.type === "GEOMETRY")
    return a.map((v) => c.geometryFromBytes(v));
  if (m?.type === "GEOGRAPHY")
    return a.map((v) => c.geographyFromBytes(v));
  if (m?.type === "UUID")
    return a.map((v) => c.uuidFromBytes(v));
  if (h === "UTF8" || m?.type === "STRING" || s && d === "BYTE_ARRAY")
    return a.map((v) => c.stringFromBytes(v));
  if (h === "UINT_64" || m?.type === "INTEGER" && m.bitWidth === 64 && !m.isSigned) {
    if (a instanceof BigInt64Array) return new BigUint64Array(a.buffer, a.byteOffset, a.length);
    const v = g ? new Array(a.length) : new BigUint64Array(a.length);
    for (let b = 0; b < v.length; b++) v[b] = a[b];
    return v;
  }
  if (h === "UINT_32" || m?.type === "INTEGER" && m.bitWidth === 32 && !m.isSigned) {
    if (a instanceof Int32Array) return new Uint32Array(a.buffer, a.byteOffset, a.length);
    const v = g ? new Array(a.length) : new Uint32Array(a.length);
    for (let b = 0; b < v.length; b++)
      v[b] = a[b] < 0 ? 4294967296 + a[b] : a[b];
    return v;
  }
  if (m?.type === "FLOAT16")
    return Array.from(a).map(HA);
  if (m?.type === "TIMESTAMP") {
    const { unit: v } = m;
    let b = c.timestampFromMilliseconds;
    v === "MICROS" && (b = c.timestampFromMicroseconds), v === "NANOS" && (b = c.timestampFromNanoseconds);
    const Q = new Array(a.length);
    for (let D = 0; D < Q.length; D++)
      Q[D] = b(a[D]);
    return Q;
  }
  return a;
}
function LA(a) {
  if (!a.length) return 0;
  let f = 0n;
  for (const c of a)
    f = f * 256n + BigInt(c);
  const o = a.length * 8;
  return f >= 2n ** BigInt(o - 1) && (f -= 2n ** BigInt(o)), Number(f);
}
function Ky(a) {
  const f = (a >> 64n) - 2440588n, o = a & 0xffffffffffffffffn;
  return f * 86400000000000n + o;
}
function HA(a) {
  if (!a) return;
  const f = a[1] << 8 | a[0], o = f >> 15 ? -1 : 1, c = f >> 10 & 31, s = f & 1023;
  return c === 0 ? o * 2 ** -14 * (s / 1024) : c === 31 ? s ? NaN : o * (1 / 0) : o * 2 ** (c - 15) * (1 + s / 1024);
}
function qA(a, f, o) {
  const c = a[f], s = [];
  let A = 1;
  if (c.num_children)
    for (; s.length < c.num_children; ) {
      const d = a[f + A], h = qA(a, f + A, [...o, d.name]);
      A += h.count, s.push(h);
    }
  return { count: A, element: c, children: s, path: o };
}
function GA(a, f) {
  let o = qA(a, 0, []);
  const c = [o];
  for (const s of f) {
    const A = o.children.find((d) => d.element.name === s);
    if (!A) throw new Error(`parquet schema element not found: ${f}`);
    c.push(A), o = A;
  }
  return c;
}
function IA(a) {
  const f = [];
  function o(c) {
    if (c.children.length)
      for (const s of c.children)
        o(s);
    else
      f.push(c.path.join("."));
  }
  return o(a), f;
}
function ZA(a) {
  let f = 0;
  for (const { element: o } of a)
    o.repetition_type === "REPEATED" && f++;
  return f;
}
function Vo(a) {
  let f = 0;
  for (const { element: o } of a.slice(1))
    o.repetition_type !== "REQUIRED" && f++;
  return f;
}
function Jy(a) {
  if (!a || a.element.converted_type !== "LIST" || a.children.length > 1) return !1;
  const f = a.children[0];
  return !(f.children.length > 1 || f.element.repetition_type !== "REPEATED");
}
function _y(a) {
  if (!a || a.element.converted_type !== "MAP" || a.children.length > 1) return !1;
  const f = a.children[0];
  return !(f.children.length !== 2 || f.element.repetition_type !== "REPEATED" || f.children.find((s) => s.element.name === "key")?.element.repetition_type === "REPEATED" || f.children.find((s) => s.element.name === "value")?.element.repetition_type === "REPEATED");
}
function VA(a) {
  if (a.length !== 2) return !1;
  const [, f] = a;
  return !(f.element.repetition_type === "REPEATED" || f.children.length);
}
const Fy = 0, iA = 1, fA = 2, cA = 3, Wy = 4, ky = 5, Py = 6, $y = 7, th = 8, eh = 9, lh = 12;
function hu(a) {
  const f = {};
  let o = 0;
  for (; a.offset < a.view.byteLength; ) {
    const c = a.view.getUint8(a.offset++), s = c & 15;
    if (s === Fy) break;
    const A = c >> 4;
    o = A ? o + A : jA(a), f[`field_${o}`] = Do(a, s);
  }
  return f;
}
function Do(a, f) {
  switch (f) {
    case iA:
      return !0;
    case fA:
      return !1;
    case cA:
      return a.view.getInt8(a.offset++);
    case Wy:
    case ky:
      return jA(a);
    case Py:
      return Qo(a);
    case $y: {
      const o = a.view.getFloat64(a.offset, !0);
      return a.offset += 8, o;
    }
    case th: {
      const o = vn(a), c = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, o);
      return a.offset += o, c;
    }
    case eh: {
      const o = a.view.getUint8(a.offset++), c = o & 15;
      let s = o >> 4;
      s === 15 && (s = vn(a));
      const A = c === iA || c === fA, d = new Array(s);
      for (let h = 0; h < s; h++)
        d[h] = A ? Do(a, cA) === 1 : Do(a, c);
      return d;
    }
    case lh:
      return hu(a);
    default:
      throw new Error(`thrift unhandled type: ${f}`);
  }
}
function vn(a) {
  let f = 0, o = 0;
  for (; ; ) {
    const c = a.view.getUint8(a.offset++);
    if (f |= (c & 127) << o, !(c & 128))
      return f;
    o += 7;
  }
}
function nh(a) {
  let f = 0n, o = 0n;
  for (; ; ) {
    const c = a.view.getUint8(a.offset++);
    if (f |= BigInt(c & 127) << o, !(c & 128))
      return f;
    o += 7n;
  }
}
function jA(a) {
  const f = vn(a);
  return f >>> 1 ^ -(f & 1);
}
function Qo(a) {
  const f = nh(a);
  return f >> 1n ^ -(f & 1n);
}
function ah(a, f) {
  const o = /* @__PURE__ */ new Map(), c = f?.find(({ key: A }) => A === "geo")?.value, s = (c && JSON.parse(c)?.columns) ?? {};
  for (const [A, d] of Object.entries(s)) {
    if (d.encoding !== "WKB") continue;
    const h = d.edges === "spherical" ? "GEOGRAPHY" : "GEOMETRY", m = d.crs?.id ?? d.crs?.ids?.[0], g = m ? `${m.authority}:${m.code.toString()}` : void 0;
    o.set(A, { type: h, crs: g });
  }
  for (let A = 1; A < a.length; A++) {
    const { logical_type: d, name: h, num_children: m, type: g } = a[A];
    if (m) {
      A += m;
      continue;
    }
    g === "BYTE_ARRAY" && !d && (a[A].logical_type = o.get(h));
  }
}
const XA = 1 << 19, uh = new TextDecoder();
function ke(a) {
  return a && uh.decode(a);
}
async function ih(a, { parsers: f, initialFetchSize: o = XA, geoparquet: c = !0 } = {}) {
  if (!a || !(a.byteLength >= 0)) throw new Error("parquet expected AsyncBuffer");
  const s = Math.max(0, a.byteLength - o), A = await a.slice(s, a.byteLength), d = new DataView(A);
  if (d.getUint32(A.byteLength - 4, !0) !== 827474256)
    throw new Error("parquet file invalid (footer != PAR1)");
  const h = d.getUint32(A.byteLength - 8, !0);
  if (h > a.byteLength - 8)
    throw new Error(`parquet metadata length ${h} exceeds available buffer ${a.byteLength - 8}`);
  if (h + 8 > o) {
    const m = a.byteLength - h - 8, g = await a.slice(m, s), S = new ArrayBuffer(h + 8), v = new Uint8Array(S);
    return v.set(new Uint8Array(g)), v.set(new Uint8Array(A), s - m), oA(S, { parsers: f, geoparquet: c });
  } else
    return oA(A, { parsers: f, geoparquet: c });
}
function oA(a, { parsers: f, geoparquet: o = !0 } = {}) {
  if (!(a instanceof ArrayBuffer)) throw new Error("parquet expected ArrayBuffer");
  const c = new DataView(a);
  if (f = { ...Pi, ...f }, c.byteLength < 8)
    throw new Error("parquet file is too short");
  if (c.getUint32(c.byteLength - 4, !0) !== 827474256)
    throw new Error("parquet file invalid (footer != PAR1)");
  const s = c.byteLength - 8, A = c.getUint32(s, !0);
  if (A > c.byteLength - 8)
    throw new Error(`parquet metadata length ${A} exceeds available buffer ${c.byteLength - 8}`);
  const d = s - A, m = hu({ view: c, offset: d }), g = m.field_1, S = m.field_2.map((B) => ({
    type: nA[B.field_1],
    type_length: B.field_2,
    repetition_type: Zy[B.field_3],
    name: ke(B.field_4),
    num_children: B.field_5,
    converted_type: Vy[B.field_6],
    scale: B.field_7,
    precision: B.field_8,
    field_id: B.field_9,
    logical_type: fh(B.field_10)
  })), v = S.filter((B) => B.type), b = m.field_3, Q = m.field_4.map((B) => ({
    columns: B.field_1.map((M, V) => ({
      file_path: ke(M.field_1),
      file_offset: M.field_2,
      meta_data: M.field_3 && {
        type: nA[M.field_3.field_1],
        encodings: M.field_3.field_2?.map((G) => hn[G]),
        path_in_schema: M.field_3.field_3.map(ke),
        codec: jy[M.field_3.field_4],
        num_values: M.field_3.field_5,
        total_uncompressed_size: M.field_3.field_6,
        total_compressed_size: M.field_3.field_7,
        key_value_metadata: M.field_3.field_8?.map((G) => ({
          key: ke(G.field_1),
          value: ke(G.field_2)
        })),
        data_page_offset: M.field_3.field_9,
        index_page_offset: M.field_3.field_10,
        dictionary_page_offset: M.field_3.field_11,
        statistics: ch(M.field_3.field_12, v[V], f),
        encoding_stats: M.field_3.field_13?.map((G) => ({
          page_type: NA[G.field_1],
          encoding: hn[G.field_2],
          count: G.field_3
        })),
        bloom_filter_offset: M.field_3.field_14,
        bloom_filter_length: M.field_3.field_15,
        size_statistics: M.field_3.field_16 && {
          unencoded_byte_array_data_bytes: M.field_3.field_16.field_1,
          repetition_level_histogram: M.field_3.field_16.field_2,
          definition_level_histogram: M.field_3.field_16.field_3
        },
        geospatial_statistics: M.field_3.field_17 && {
          bbox: M.field_3.field_17.field_1 && {
            xmin: M.field_3.field_17.field_1.field_1,
            xmax: M.field_3.field_17.field_1.field_2,
            ymin: M.field_3.field_17.field_1.field_3,
            ymax: M.field_3.field_17.field_1.field_4,
            zmin: M.field_3.field_17.field_1.field_5,
            zmax: M.field_3.field_17.field_1.field_6,
            mmin: M.field_3.field_17.field_1.field_7,
            mmax: M.field_3.field_17.field_1.field_8
          },
          geospatial_types: M.field_3.field_17.field_2
        }
      },
      offset_index_offset: M.field_4,
      offset_index_length: M.field_5,
      column_index_offset: M.field_6,
      column_index_length: M.field_7,
      crypto_metadata: M.field_8,
      encrypted_column_metadata: M.field_9
    })),
    total_byte_size: B.field_2,
    num_rows: B.field_3,
    sorting_columns: B.field_4?.map((M) => ({
      column_idx: M.field_1,
      descending: M.field_2,
      nulls_first: M.field_3
    })),
    file_offset: B.field_5,
    total_compressed_size: B.field_6,
    ordinal: B.field_7
  })), D = m.field_5?.map((B) => ({
    key: ke(B.field_1),
    value: ke(B.field_2)
  })), N = ke(m.field_6);
  return o && ah(S, D), {
    version: g,
    schema: S,
    num_rows: b,
    row_groups: Q,
    key_value_metadata: D,
    created_by: N,
    metadata_length: A
  };
}
function Au({ schema: a }) {
  return GA(a, [])[0];
}
function fh(a) {
  return a?.field_1 ? { type: "STRING" } : a?.field_2 ? { type: "MAP" } : a?.field_3 ? { type: "LIST" } : a?.field_4 ? { type: "ENUM" } : a?.field_5 ? {
    type: "DECIMAL",
    scale: a.field_5.field_1,
    precision: a.field_5.field_2
  } : a?.field_6 ? { type: "DATE" } : a?.field_7 ? {
    type: "TIME",
    isAdjustedToUTC: a.field_7.field_1,
    unit: sA(a.field_7.field_2)
  } : a?.field_8 ? {
    type: "TIMESTAMP",
    isAdjustedToUTC: a.field_8.field_1,
    unit: sA(a.field_8.field_2)
  } : a?.field_10 ? {
    type: "INTEGER",
    bitWidth: a.field_10.field_1,
    isSigned: a.field_10.field_2
  } : a?.field_11 ? { type: "NULL" } : a?.field_12 ? { type: "JSON" } : a?.field_13 ? { type: "BSON" } : a?.field_14 ? { type: "UUID" } : a?.field_15 ? { type: "FLOAT16" } : a?.field_16 ? {
    type: "VARIANT",
    specification_version: a.field_16.field_1
  } : a?.field_17 ? {
    type: "GEOMETRY",
    crs: ke(a.field_17.field_1)
  } : a?.field_18 ? {
    type: "GEOGRAPHY",
    crs: ke(a.field_18.field_1),
    algorithm: Xy[a.field_18.field_2]
  } : a;
}
function sA(a) {
  if (a.field_1) return "MILLIS";
  if (a.field_2) return "MICROS";
  if (a.field_3) return "NANOS";
  throw new Error("parquet time unit required");
}
function ch(a, f, o) {
  return a && {
    max: Li(a.field_1, f, o),
    min: Li(a.field_2, f, o),
    null_count: a.field_3,
    distinct_count: a.field_4,
    max_value: Li(a.field_5, f, o),
    min_value: Li(a.field_6, f, o),
    is_max_value_exact: a.field_7,
    is_min_value_exact: a.field_8
  };
}
function Li(a, f, o) {
  const { type: c, converted_type: s, logical_type: A } = f;
  if (a === void 0) return a;
  if (c === "BOOLEAN") return a[0] === 1;
  if (c === "BYTE_ARRAY") return o.stringFromBytes(a);
  const d = new DataView(a.buffer, a.byteOffset, a.byteLength);
  return c === "FLOAT" && d.byteLength === 4 ? d.getFloat32(0, !0) : c === "DOUBLE" && d.byteLength === 8 ? d.getFloat64(0, !0) : c === "INT32" && s === "DATE" ? o.dateFromDays(d.getInt32(0, !0)) : c === "INT64" && s === "TIMESTAMP_MILLIS" ? o.timestampFromMilliseconds(d.getBigInt64(0, !0)) : c === "INT64" && s === "TIMESTAMP_MICROS" ? o.timestampFromMicroseconds(d.getBigInt64(0, !0)) : c === "INT64" && A?.type === "TIMESTAMP" && A?.unit === "NANOS" ? o.timestampFromNanoseconds(d.getBigInt64(0, !0)) : c === "INT64" && A?.type === "TIMESTAMP" && A?.unit === "MICROS" ? o.timestampFromMicroseconds(d.getBigInt64(0, !0)) : c === "INT64" && A?.type === "TIMESTAMP" ? o.timestampFromMilliseconds(d.getBigInt64(0, !0)) : c === "INT32" && d.byteLength === 4 ? d.getInt32(0, !0) : c === "INT64" && d.byteLength === 8 ? d.getBigInt64(0, !0) : s === "DECIMAL" ? LA(a) * 10 ** -(f.scale || 0) : A?.type === "FLOAT16" ? HA(a) : a;
}
function oh(a) {
  const f = hu(a);
  return {
    // @ts-ignore
    page_locations: f.field_1.map((o) => ({
      offset: o.field_1,
      compressed_page_size: o.field_2,
      first_row_index: o.field_3
    })),
    unencoded_byte_array_data_bytes: f.field_2
  };
}
const ae = 0xffffffffffffffffn, gn = 0x9e3779b185ebca87n, iu = 0xc2b2ae3d27d4eb4fn, rA = 0x165667b19e3779f9n, KA = 0x85ebca77c2b2ae63n, AA = 0x27d4eb2f165667c5n;
function Xl(a, f) {
  return (a << f | a >> 64n - f) & ae;
}
function ca(a, f) {
  return a = a + f * iu & ae, a = Xl(a, 31n), a * gn & ae;
}
function Hi(a, f) {
  return a ^= ca(0n, f), a * gn + KA & ae;
}
function Vl(a, f = 0n) {
  const o = new DataView(a.buffer, a.byteOffset, a.byteLength), c = a.byteLength;
  let s = 0, A;
  if (c >= 32) {
    let d = f + gn + iu & ae, h = f + iu & ae, m = f, g = f - gn & ae;
    for (; s + 32 <= c; )
      d = ca(d, o.getBigUint64(s, !0)), s += 8, h = ca(h, o.getBigUint64(s, !0)), s += 8, m = ca(m, o.getBigUint64(s, !0)), s += 8, g = ca(g, o.getBigUint64(s, !0)), s += 8;
    A = Xl(d, 1n) + Xl(h, 7n) + Xl(m, 12n) + Xl(g, 18n) & ae, A = Hi(A, d), A = Hi(A, h), A = Hi(A, m), A = Hi(A, g);
  } else
    A = f + AA & ae;
  for (A = A + BigInt(c) & ae; s + 8 <= c; )
    A ^= ca(0n, o.getBigUint64(s, !0)), A = Xl(A, 27n) * gn + KA & ae, s += 8;
  for (s + 4 <= c && (A ^= BigInt(o.getUint32(s, !0)) * gn & ae, A = Xl(A, 23n) * iu + rA & ae, s += 4); s < c; )
    A ^= BigInt(o.getUint8(s)) * AA & ae, A = Xl(A, 11n) * gn & ae, s += 1;
  return A ^= A >> 33n, A = A * iu & ae, A ^= A >> 29n, A = A * rA & ae, A ^= A >> 32n, A;
}
const sh = new TextEncoder(), rh = new Uint32Array([
  1203114875,
  1150766481,
  2284105051,
  2729912477,
  1884591559,
  770785867,
  2667333959,
  1550580529
]);
function Ah(a, f) {
  return Number((a >> 32n) * BigInt(f) >> 32n);
}
function dh(a) {
  const f = new Uint32Array(8), o = Number(a & 0xffffffffn) | 0;
  for (let c = 0; c < 8; c++)
    f[c] = 1 << (Math.imul(o, rh[c]) >>> 27);
  return f;
}
function dA(a, f) {
  const o = Ah(f, a.length >> 3) << 3, c = dh(f);
  for (let s = 0; s < 8; s++)
    if ((a[o + s] & c[s]) === 0) return !1;
  return !0;
}
function yh(a) {
  const f = hu(a), o = f.field_1;
  if (typeof o != "number" || o <= 0 || o % 32 !== 0 || !f.field_2?.field_1 || !f.field_3?.field_1 || !f.field_4?.field_1) return;
  const { view: c, offset: s } = a;
  if (s + o > c.byteLength)
    throw new Error(`parquet bloom filter truncated: need ${o} bytes, have ${c.byteLength - s}`);
  const A = new Uint32Array(o >> 2);
  for (let d = 0; d < A.length; d++)
    A[d] = c.getUint32(s + d * 4, !0);
  return a.offset = s + o, { numBytes: o, blocks: A };
}
function yA(a, f) {
  if (a == null) return;
  const { type: o, converted_type: c, logical_type: s } = f;
  if (o === "BOOLEAN")
    return typeof a != "boolean" ? void 0 : Vl(new Uint8Array([a ? 1 : 0]));
  if (o === "FLOAT") {
    if (typeof a != "number") return;
    const A = new ArrayBuffer(4);
    return new DataView(A).setFloat32(0, a, !0), Vl(new Uint8Array(A));
  }
  if (o === "DOUBLE") {
    if (typeof a != "number") return;
    const A = new ArrayBuffer(8);
    return new DataView(A).setFloat64(0, a, !0), Vl(new Uint8Array(A));
  }
  if (o === "INT32") {
    if (c === "DATE" || c === "DECIMAL" || c === "TIME_MILLIS" || s?.type === "DATE" || s?.type === "TIME" || s?.type === "DECIMAL" || typeof a != "number" || !Number.isInteger(a)) return;
    const A = new ArrayBuffer(4);
    return new DataView(A).setInt32(0, a | 0, !0), Vl(new Uint8Array(A));
  }
  if (o === "INT64") {
    if (c === "TIMESTAMP_MILLIS" || c === "TIMESTAMP_MICROS" || c === "TIME_MICROS" || c === "DECIMAL" || s?.type === "TIMESTAMP" || s?.type === "TIME" || s?.type === "DECIMAL") return;
    let A;
    if (typeof a == "bigint") A = a;
    else if (typeof a == "number" && Number.isSafeInteger(a)) A = BigInt(a);
    else return;
    const d = new ArrayBuffer(8);
    return new DataView(d).setBigUint64(0, BigInt.asUintN(64, A), !0), Vl(new Uint8Array(d));
  }
  if (o === "BYTE_ARRAY")
    return c === "JSON" || c === "BSON" || c === "DECIMAL" || s?.type === "JSON" || s?.type === "BSON" || s?.type === "VARIANT" || s?.type === "GEOMETRY" || s?.type === "GEOGRAPHY" ? void 0 : typeof a == "string" ? Vl(sh.encode(a)) : a instanceof Uint8Array ? Vl(a) : void 0;
  if (o === "FIXED_LEN_BYTE_ARRAY")
    return c === "DECIMAL" || c === "INTERVAL" || s?.type === "DECIMAL" || s?.type === "UUID" || s?.type === "FLOAT16" || s?.type === "GEOMETRY" || s?.type === "GEOGRAPHY" ? void 0 : a instanceof Uint8Array ? Vl(a) : void 0;
}
function hh(a) {
  const f = /* @__PURE__ */ new Set();
  return Ro(a, f), f;
}
function Ro(a, f) {
  if (a) {
    if ("$and" in a && Array.isArray(a.$and)) {
      for (const o of a.$and) Ro(o, f);
      return;
    }
    if ("$or" in a && Array.isArray(a.$or)) {
      for (const o of a.$or) Ro(o, f);
      return;
    }
    if (!("$nor" in a))
      for (const [o, c] of Object.entries(a))
        o.startsWith("$") || (typeof c == "object" && c !== null && !Array.isArray(c) ? ("$eq" in c || "$in" in c) && f.add(o) : f.add(o));
  }
}
function JA(a, f) {
  for (let c = 0; c < f.length; c += 1e4)
    a.push(...f.slice(c, c + 1e4));
}
function Jl(a, f, o = !0) {
  if (o ? a === f : a == f) return !0;
  if (!a || !f || typeof a != "object" || typeof f != "object") return !1;
  if (a instanceof Uint8Array && f instanceof Uint8Array) {
    if (a.length !== f.length) return !1;
    for (let s = 0; s < a.length; s++)
      if (a[s] !== f[s]) return !1;
    return !0;
  }
  if (Array.isArray(a) && Array.isArray(f)) {
    if (a.length !== f.length) return !1;
    for (let s = 0; s < a.length; s++)
      if (!Jl(a[s], f[s], o)) return !1;
    return !0;
  }
  const c = Object.keys(a);
  if (c.length !== Object.keys(f).length) return !1;
  for (const s of c)
    if (!Jl(a[s], f[s], o)) return !1;
  return !0;
}
async function hA(a, f = {}, o = globalThis.fetch) {
  const c = new AbortController(), s = new Headers(f.headers);
  s.set("Range", "bytes=0-0");
  const A = await o(a, {
    ...f,
    headers: s,
    signal: c.signal
  });
  if (!A.ok) throw new Error(`fetch with range failed ${A.status}`);
  if (A.status === 206) {
    const d = A.headers.get("Content-Range");
    if (!d) throw new Error("missing content-range header");
    const h = d.match(/bytes \d+-\d+\/(\d+)/);
    if (!h) throw new Error(`invalid content-range header: ${d}`);
    return parseInt(h[1]);
  }
  if (A.status === 200) {
    const d = A.headers.get("Content-Length");
    if (c.abort(), d) return parseInt(d);
  }
  throw new Error("server does not support range requests and missing content-length");
}
async function gh(a, f, o) {
  const c = o ?? globalThis.fetch, s = await c(a, { ...f, method: "HEAD" });
  if (s.status === 403)
    return hA(a, f, c);
  if (!s.ok) throw new Error(`fetch head failed ${s.status}`);
  const A = s.headers.get("Content-Length");
  return A ? parseInt(A) : hA(a, f, c);
}
async function mh({ url: a, byteLength: f, requestInit: o, fetch: c }) {
  if (!a) throw new Error("missing url");
  const s = c ?? globalThis.fetch;
  f ?? (f = await gh(a, o, s));
  let A;
  const d = o || {};
  return {
    byteLength: f,
    async slice(h, m) {
      if (A)
        return A.then((b) => b.slice(h, m));
      const g = new Headers(d.headers), S = m === void 0 ? "" : m - 1;
      g.set("Range", `bytes=${h}-${S}`);
      const v = await s(a, { ...d, headers: g });
      if (!v.ok || !v.body) throw new Error(`fetch failed ${v.status}`);
      if (v.status === 200)
        return A = v.arrayBuffer(), A.then((b) => b.slice(h, m));
      if (v.status === 206)
        return v.arrayBuffer();
      throw new Error(`fetch received unexpected status code ${v.status}`);
    }
  };
}
function vh({ byteLength: a, slice: f }, { minSize: o = XA } = {}) {
  if (a < o) {
    const s = f(0, a);
    return {
      byteLength: a,
      async slice(A, d) {
        return (await s).slice(A, d);
      }
    };
  }
  const c = /* @__PURE__ */ new Map();
  return {
    byteLength: a,
    /**
     * @param {number} start
     * @param {number} [end]
     * @returns {Awaitable<ArrayBuffer>}
     */
    slice(s, A) {
      const d = Eh(s, A, a), h = c.get(d);
      if (h) return h;
      const m = f(s, A);
      return c.set(d, m), m;
    }
  };
}
function Eh(a, f, o) {
  if (a < 0) {
    if (f !== void 0) throw new Error(`invalid suffix range [${a}, ${f}]`);
    return o === void 0 ? `${a},` : `${o + a},${o}`;
  } else if (f !== void 0) {
    if (a > f) throw new Error(`invalid empty range [${a}, ${f}]`);
    return `${a},${f}`;
  } else return o === void 0 ? `${a},` : `${a},${o}`;
}
function _A(a) {
  if (!a) return [];
  if (a.length === 1) return a[0];
  const f = [];
  for (const o of a)
    JA(f, o);
  return f;
}
function Vi(a) {
  if (!a) return [];
  const f = [];
  return "$and" in a && Array.isArray(a.$and) ? f.push(...a.$and.flatMap(Vi)) : "$or" in a && Array.isArray(a.$or) ? f.push(...a.$or.flatMap(Vi)) : "$nor" in a && Array.isArray(a.$nor) ? f.push(...a.$nor.flatMap(Vi)) : f.push(...Object.keys(a).map((o) => o.split(".")[0])), [...new Set(f)];
}
function fu(a, f, o = !0) {
  return "$and" in f && Array.isArray(f.$and) ? f.$and.every((c) => fu(a, c, o)) : "$or" in f && Array.isArray(f.$or) ? f.$or.some((c) => fu(a, c, o)) : "$nor" in f && Array.isArray(f.$nor) ? !f.$nor.some((c) => fu(a, c, o)) : Object.entries(f).every(([c, s]) => {
    const A = Sh(a, c);
    return typeof s != "object" || s === null || Array.isArray(s) ? Jl(A, s, o) : Object.entries(s || {}).every(([d, h]) => d === "$gt" ? A > h : d === "$gte" ? A >= h : d === "$lt" ? A < h : d === "$lte" ? A <= h : d === "$eq" ? Jl(A, h, o) : d === "$ne" ? !Jl(A, h, o) : d === "$in" ? Array.isArray(h) && h.includes(A) : d === "$nin" ? Array.isArray(h) && !h.includes(A) : d === "$not" ? !fu({ [c]: A }, { [c]: h }, o) : !0);
  });
}
function Ji({ rowGroup: a, physicalColumns: f, filter: o, strict: c = !0, bloomFilters: s, schemaElements: A }) {
  if (!o) return !1;
  if ("$and" in o && Array.isArray(o.$and))
    return o.$and.some((d) => Ji({ rowGroup: a, physicalColumns: f, filter: d, strict: c, bloomFilters: s, schemaElements: A }));
  if ("$or" in o && Array.isArray(o.$or))
    return o.$or.every((d) => Ji({ rowGroup: a, physicalColumns: f, filter: d, strict: c, bloomFilters: s, schemaElements: A }));
  if ("$nor" in o && Array.isArray(o.$nor))
    return !1;
  for (const [d, h] of Object.entries(o)) {
    const m = f.indexOf(d);
    if (m === -1) continue;
    const g = a.columns[m].meta_data?.statistics, { min: S, max: v, min_value: b, max_value: Q } = g || {}, D = b !== void 0 ? b : S, N = Q !== void 0 ? Q : v, B = D !== void 0 && N !== void 0, M = s?.[d], V = A?.[d];
    for (const [G, K] of Object.entries(h || {})) {
      if (B && (G === "$gt" && N <= K || G === "$gte" && N < K || G === "$lt" && D >= K || G === "$lte" && D > K || G === "$eq" && (K < D || K > N) || G === "$ne" && Jl(D, N, c) && Jl(D, K, c) || G === "$in" && Array.isArray(K) && K.every((_) => _ < D || _ > N) || G === "$nin" && Array.isArray(K) && Jl(D, N, c) && K.includes(D)))
        return !0;
      if (M && V) {
        if (G === "$eq") {
          const _ = yA(K, V);
          if (_ !== void 0 && !dA(M.blocks, _)) return !0;
        }
        if (G === "$in" && Array.isArray(K) && K.length > 0) {
          let _ = !0;
          for (const Z of K) {
            const I = yA(Z, V);
            if (I === void 0 || dA(M.blocks, I)) {
              _ = !1;
              break;
            }
          }
          if (_) return !0;
        }
      }
    }
  }
  return !1;
}
function Sh(a, f) {
  let o = a;
  for (const c of f.split("."))
    o = o?.[c];
  return o;
}
const bh = 1 << 21;
function ph({ metadata: a, rowStart: f = 0, rowEnd: o = 1 / 0, columns: c, filter: s, filterStrict: A = !0, useOffsetIndex: d = !1, bloomFiltersByGroup: h, schemaElements: m }) {
  if (!a) throw new Error("parquetPlan requires metadata");
  const g = [], S = [], v = [], b = IA(Au(a));
  let Q = 0, D = 0;
  for (const N of a.row_groups) {
    const B = Number(N.num_rows), M = Q + B, V = h?.[D];
    if (B > 0 && M > f && Q < o && !Ji({ rowGroup: N, physicalColumns: b, filter: s, strict: A, bloomFilters: V, schemaElements: m })) {
      const G = [];
      for (const I of N.columns) {
        const $ = I.meta_data;
        if (I.file_path) throw new Error("parquet file_path not supported");
        if (!$) throw new Error("parquet column metadata is undefined");
        if (!c || c.includes($.path_in_schema[0])) {
          const rt = $.dictionary_page_offset || $.data_page_offset, Et = Number(rt), St = Number(rt + $.total_compressed_size);
          if (d && I.offset_index_offset && I.offset_index_length && (f > Q || o < M)) {
            const it = Number(I.offset_index_offset);
            G.push({
              columnMetadata: $,
              offsetIndex: {
                startByte: it,
                endByte: it + I.offset_index_length
              },
              range: { startByte: Et, endByte: St }
            });
          } else
            G.push({
              columnMetadata: $,
              range: { startByte: Et, endByte: St }
            });
        }
      }
      const K = Math.max(f - Q, 0), _ = Math.min(o - Q, B);
      g.push({ chunks: G, rowGroup: N, groupStart: Q, groupRows: B, selectStart: K, selectEnd: _ });
      let Z;
      for (const I of G)
        if ("offsetIndex" in I)
          v.push(I.offsetIndex);
        else {
          const { range: $ } = I;
          c ? S.push($) : Z && $.endByte - Z.startByte <= bh ? Z.endByte = $.endByte : (Z && S.push(Z), Z = { ...$ });
        }
      Z && S.push(Z);
    }
    Q = M, D++;
  }
  return isFinite(o) || (o = Q), S.push(...v), { metadata: a, rowStart: f, rowEnd: o, columns: c, fetches: S, groups: g };
}
async function wh({ file: a, metadata: f, filter: o, filterStrict: c = !0 }) {
  const s = f.row_groups.map(() => (
    /** @type {Record<string, BloomFilter>} */
    {}
  )), A = hh(o);
  if (A.size === 0) return s;
  const d = IA(Au(f)), h = [];
  return f.row_groups.forEach((m, g) => {
    if (!Ji({ rowGroup: m, physicalColumns: d, filter: o, strict: c }))
      for (const S of A) {
        const v = d.indexOf(S);
        if (v === -1) continue;
        const b = m.columns[v]?.meta_data;
        if (!b?.bloom_filter_offset || !b.bloom_filter_length) continue;
        const Q = Number(b.bloom_filter_offset), D = Q + b.bloom_filter_length;
        h.push((async () => {
          const N = await a.slice(Q, D), B = yh({ view: new DataView(N), offset: 0 });
          B && (s[g][S] = B);
        })());
      }
  }), h.length && await Promise.all(h), s;
}
function Bh(a, { fetches: f }) {
  const o = f.map(({ startByte: c, endByte: s }) => a.slice(c, s));
  return {
    byteLength: a.byteLength,
    slice(c, s = a.byteLength) {
      const A = f.findIndex(({ startByte: d, endByte: h }) => d <= c && s <= h);
      if (A < 0)
        return a.slice(c, s);
      if (f[A].startByte !== c || f[A].endByte !== s) {
        const d = c - f[A].startByte, h = s - f[A].startByte;
        return o[A] instanceof Promise ? o[A].then((m) => m.slice(d, h)) : o[A].slice(d, h);
      } else
        return o[A];
    }
  };
}
const jo = new TextDecoder(), gA = /* @__PURE__ */ new WeakMap();
function FA(a, f = Pi) {
  if (Array.isArray(a))
    return a.map((o) => FA(o, f));
  if (typeof a != "object") return a;
  if ("metadata" in a) {
    const o = Th(a.metadata), c = a.typed_value && ji(a.typed_value, o, f), s = a.value && du(_i(a.value), o, f);
    return c && s ? { ...s, ...c } : c ?? s;
  }
  return a;
}
function ji(a, f, o) {
  if (a instanceof Date) return a;
  if (a && typeof a == "object" && !Array.isArray(a) && !(a instanceof Uint8Array)) {
    if ("typed_value" in a && a.typed_value !== null && a.typed_value !== void 0)
      return ji(a.typed_value, f, o);
    if ("value" in a && a.value instanceof Uint8Array)
      return du(_i(a.value), f, o);
    if ("typed_value" in a || "value" in a)
      return null;
    const c = {};
    for (const [s, A] of Object.entries(a))
      f.dictionary.includes(s) && (c[s] = ji(A, f, o));
    return c;
  }
  return a instanceof Uint8Array ? du(_i(a), f, o) : Array.isArray(a) ? a.map((c) => ji(c, f, o)) : a;
}
function _i(a) {
  return { view: new DataView(a.buffer, a.byteOffset, a.byteLength), offset: 0 };
}
function Th(a) {
  let f = gA.get(a.buffer);
  f || (f = /* @__PURE__ */ new Map(), gA.set(a.buffer, f));
  const o = `${a.byteOffset}:${a.byteLength}`, c = f.get(o);
  if (c) return c;
  const s = _i(a), A = s.view.getUint8(s.offset++), d = A & 15;
  if (d !== 1) throw new Error(`parquet unsupported variant metadata version: ${d}`);
  const h = (A >> 4 & 1) === 1, m = (A >> 6 & 3) + 1, g = En(s, m), S = new Array(g + 1);
  for (let D = 0; D < S.length; D++)
    S[D] = En(s, m);
  const v = s.offset, b = new Array(g);
  for (let D = 0; D < g; D++) {
    const N = S[D], B = S[D + 1], M = new Uint8Array(a.buffer, a.byteOffset + v + N, B - N);
    b[D] = jo.decode(M);
  }
  const Q = { dictionary: b, sorted: h };
  return f.set(o, Q), Q;
}
function En(a, f) {
  let o = 0;
  for (let c = 0; c < f; c++)
    o |= a.view.getUint8(a.offset + c) << c * 8;
  return a.offset += f, o;
}
function du(a, f, o) {
  const c = a.view.getUint8(a.offset++), s = c & 3, A = c >> 2;
  if (s === 0) return Ch(a, A, o);
  if (s === 2) return Uh(a, A, f, o);
  if (s === 3) return zh(a, A, f, o);
  const d = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, A);
  return a.offset += A, jo.decode(d);
}
function Ch(a, f, o) {
  switch (f) {
    case 0:
      return null;
    case 1:
      return !0;
    case 2:
      return !1;
    case 3: {
      const c = a.view.getInt8(a.offset);
      return a.offset += 1, c;
    }
    case 4: {
      const c = a.view.getInt16(a.offset, !0);
      return a.offset += 2, c;
    }
    case 5: {
      const c = a.view.getInt32(a.offset, !0);
      return a.offset += 4, c;
    }
    case 6: {
      const c = a.view.getBigInt64(a.offset, !0);
      return a.offset += 8, c;
    }
    case 7: {
      const c = a.view.getFloat64(a.offset, !0);
      return a.offset += 8, c;
    }
    case 8:
      return po(a, 4);
    case 9:
      return po(a, 8);
    case 10:
      return po(a, 16);
    case 11: {
      const c = a.view.getInt32(a.offset, !0);
      return a.offset += 4, o.dateFromDays(c);
    }
    case 12:
    // timestamp_micros (utc)
    case 13: {
      const c = a.view.getBigInt64(a.offset, !0);
      return a.offset += 8, o.timestampFromMicroseconds(c);
    }
    case 14: {
      const c = a.view.getFloat32(a.offset, !0);
      return a.offset += 4, c;
    }
    case 15:
      return mA(a);
    case 16: {
      const c = mA(a);
      return jo.decode(c);
    }
    case 17: {
      const c = a.view.getBigInt64(a.offset, !0);
      return a.offset += 8, c;
    }
    case 18:
    // timestamp_nanos (utc)
    case 19: {
      const c = a.view.getBigInt64(a.offset, !0);
      return a.offset += 8, o.timestampFromNanoseconds(c);
    }
    case 20: {
      const c = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, 16);
      a.offset += 16;
      const s = Array.from(c, (A) => A.toString(16).padStart(2, "0")).join("");
      return `${s.slice(0, 8)}-${s.slice(8, 12)}-${s.slice(12, 16)}-${s.slice(16, 20)}-${s.slice(20)}`;
    }
    default:
      throw new Error(`parquet unsupported variant primitive type: ${f}`);
  }
}
function Uh(a, f, o, c) {
  const s = (f & 3) + 1, A = (f >> 2 & 3) + 1, h = f >> 4 & 1 ? En(a, 4) : a.view.getUint8(a.offset++), m = new Array(h);
  for (let v = 0; v < h; v++)
    m[v] = En(a, A);
  const g = new Array(h + 1);
  for (let v = 0; v < g.length; v++)
    g[v] = En(a, s);
  const S = {};
  for (let v = 0; v < h; v++) {
    const b = o.dictionary[m[v]], Q = {
      view: a.view,
      offset: a.offset + g[v]
    };
    S[b] = du(Q, o, c);
  }
  return a.offset += g[g.length - 1], S;
}
function zh(a, f, o, c) {
  const s = f & 3, A = f >> 2 & 1, d = s + 1, h = En(a, A ? 4 : 1), m = new Array(h + 1);
  for (let v = 0; v < m.length; v++)
    m[v] = En(a, d);
  const g = a.offset, S = new Array(h);
  for (let v = 0; v < h; v++) {
    const b = {
      view: a.view,
      offset: g + m[v]
    };
    S[v] = du(b, o, c);
  }
  return a.offset = g + m[m.length - 1], S;
}
function po(a, f) {
  const o = a.view.getUint8(a.offset);
  a.offset += 1;
  let c;
  if (f === 4)
    c = BigInt(a.view.getInt32(a.offset, !0)), a.offset += 4;
  else if (f === 8)
    c = a.view.getBigInt64(a.offset, !0), a.offset += 8;
  else {
    const s = a.view.getBigUint64(a.offset, !0);
    c = a.view.getBigInt64(a.offset + 8, !0) << 64n | s, a.offset += 16;
  }
  return Number(c) * 10 ** -o;
}
function mA(a) {
  const f = a.view.getUint32(a.offset, !0);
  a.offset += 4;
  const o = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f, o;
}
function vA(a, f, o, c, s) {
  const A = Vo(s);
  if (!f?.length && !o.length) {
    if (!A || !c.length) return c;
    f = new Array(c.length).fill(A);
  }
  const d = f?.length || o.length, h = s.map(({ element: D }) => D.repetition_type);
  let m = 0;
  const g = [a];
  let S = a, v = 0, b = 0, Q = 0;
  if (o[0])
    for (; v < h.length - 2 && Q < o[0]; )
      v++, h[v] !== "REQUIRED" && (S = S.at(-1), g.push(S), b++), h[v] === "REPEATED" && Q++;
  for (let D = 0; D < d; D++) {
    const N = f?.length ? f[D] : A, B = o[D];
    for (; v && (B < Q || h[v] !== "REPEATED"); )
      h[v] !== "REQUIRED" && (g.pop(), b--), h[v] === "REPEATED" && Q--, v--;
    for (S = g.at(-1); (v < h.length - 2 || h[v + 1] === "REPEATED") && (b < N || h[v + 1] === "REQUIRED"); ) {
      if (v++, h[v] !== "REQUIRED") {
        const M = [];
        S.push(M), S = M, g.push(M), b++;
      }
      h[v] === "REPEATED" && Q++;
    }
    N === A ? S.push(c[m++]) : v === h.length - 2 ? S.push(null) : S.push([]);
  }
  if (!a.length)
    for (let D = 0; D < A; D++) {
      const N = [];
      S.push(N), S = N;
    }
  return a;
}
function cu(a, f, o, c = 0) {
  const s = f.path.join("."), A = f.element.repetition_type === "OPTIONAL", d = A ? c + 1 : c;
  if (Jy(f)) {
    let h = f.children[0], m = d;
    h.children.length === 1 && (h = h.children[0], m++), cu(a, h, o, m);
    const g = h.path.join("."), S = a.get(g);
    if (!S) throw new Error("parquet list column missing values");
    A && Xi(S, c), a.set(s, S), a.delete(g);
    return;
  }
  if (_y(f)) {
    const h = f.children[0].element.name;
    cu(a, f.children[0].children[0], o, d + 1), cu(a, f.children[0].children[1], o, d + 1);
    const m = a.get(`${s}.${h}.key`), g = a.get(`${s}.${h}.value`);
    if (!m) throw new Error("parquet map column missing keys");
    if (!g) throw new Error("parquet map column missing values");
    if (m.length !== g.length)
      throw new Error("parquet map column key/value length mismatch");
    const S = WA(m, g, d);
    A && Xi(S, c), a.delete(`${s}.${h}.key`), a.delete(`${s}.${h}.value`), a.set(s, S);
    return;
  }
  if (f.children.length) {
    const h = f.element.repetition_type === "REQUIRED" ? c : c + 1, m = {};
    for (const S of f.children) {
      cu(a, S, o, h);
      const v = a.get(S.path.join("."));
      if (!v) throw new Error("parquet struct missing child data");
      m[S.element.name] = v;
    }
    for (const S of f.children)
      a.delete(S.path.join("."));
    let g = kA(m, h);
    f.element.logical_type?.type === "VARIANT" && (g = FA(g, o)), A && Xi(g, c), a.set(s, g);
  }
}
function Xi(a, f) {
  for (let o = 0; o < a.length; o++)
    f ? Xi(a[o], f - 1) : a[o] = a[o][0];
}
function WA(a, f, o) {
  const c = [];
  for (let s = 0; s < a.length; s++)
    if (o)
      c.push(WA(a[s], f[s], o - 1));
    else if (a[s]) {
      const A = {};
      for (let d = 0; d < a[s].length; d++) {
        const h = f[s][d];
        A[a[s][d]] = h === void 0 ? null : h;
      }
      c.push(A);
    } else
      c.push(void 0);
  return c;
}
function kA(a, f) {
  const o = Object.keys(a), c = a[o[0]]?.length, s = [];
  for (let A = 0; A < c; A++) {
    const d = {};
    for (const h of o) {
      if (a[h].length !== c) throw new Error("parquet struct parsing error");
      d[h] = a[h][A];
    }
    f ? s.push(kA(d, f - 1)) : s.push(d);
  }
  return s;
}
function yu(a, f, o) {
  const c = o instanceof Int32Array, s = vn(a), A = vn(a);
  vn(a);
  let d = Qo(a), h = 0;
  o[h++] = c ? Number(d) : d;
  const m = s / A;
  for (; h < f; ) {
    const g = Qo(a), S = new Uint8Array(A);
    for (let v = 0; v < A; v++)
      S[v] = a.view.getUint8(a.offset++);
    for (let v = 0; v < A && h < f; v++) {
      const b = BigInt(S[v]);
      if (b) {
        let Q = 0n, D = m;
        const N = (1n << b) - 1n;
        for (; D && h < f; ) {
          let B = BigInt(a.view.getUint8(a.offset)) >> Q & N;
          for (Q += b; Q >= 8; )
            Q -= 8n, a.offset++, Q && (B |= BigInt(a.view.getUint8(a.offset)) << b - Q & N);
          const M = g + B;
          d += M, o[h++] = c ? Number(d) : d, D--;
        }
        D && (a.offset += Math.ceil((D * Number(b) + Number(Q)) / 8));
      } else
        for (let Q = 0; Q < m && h < f; Q++)
          d += g, o[h++] = c ? Number(d) : d;
    }
  }
}
function PA(a, f, o) {
  const c = new Int32Array(f);
  yu(a, f, c);
  for (let s = 0; s < f; s++)
    o[s] = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, c[s]), a.offset += c[s];
}
function Mh(a, f, o) {
  const c = new Int32Array(f);
  yu(a, f, c);
  const s = new Int32Array(f);
  yu(a, f, s);
  for (let A = 0; A < f; A++) {
    const d = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, s[A]);
    c[A] ? (o[A] = new Uint8Array(c[A] + s[A]), o[A].set(o[A - 1].subarray(0, c[A])), o[A].set(d, c[A])) : o[A] = d, a.offset += s[A];
  }
}
function _l(a, f, o, c) {
  c === void 0 && (c = a.view.getUint32(a.offset, !0), a.offset += 4);
  const s = a.offset;
  let A = 0;
  for (; A < o.length; ) {
    const d = vn(a);
    if (d & 1)
      A = Dh(a, d, f, o, A);
    else {
      const h = d >>> 1;
      Oh(a, h, f, o, A), A += h;
    }
  }
  a.offset = s + c;
}
function Oh(a, f, o, c, s) {
  const A = o + 7 >> 3;
  let d = 0;
  for (let h = 0; h < A; h++)
    d |= a.view.getUint8(a.offset++) << (h << 3);
  for (let h = 0; h < f; h++)
    c[s + h] = d;
}
function Dh(a, f, o, c, s) {
  let A = f >> 1 << 3;
  const d = (1 << o) - 1;
  let h = 0;
  if (a.offset < a.view.byteLength)
    h = a.view.getUint8(a.offset++);
  else if (d)
    throw new Error(`parquet bitpack offset ${a.offset} out of range`);
  let m = 8, g = 0;
  for (; A; )
    g > 8 ? (g -= 8, m -= 8, h >>>= 8) : m - g < o ? (h |= a.view.getUint8(a.offset) << m, a.offset++, m += 8) : (s < c.length && (c[s++] = h >> g & d), A--, g += o);
  return s;
}
function $A(a, f, o, c) {
  const s = Qh(o, c), A = new Uint8Array(f * s);
  for (let d = 0; d < s; d++)
    for (let h = 0; h < f; h++)
      A[h * s + d] = a.view.getUint8(a.offset++);
  if (o === "FLOAT") return new Float32Array(A.buffer);
  if (o === "DOUBLE") return new Float64Array(A.buffer);
  if (o === "INT32") return new Int32Array(A.buffer);
  if (o === "INT64") return new BigInt64Array(A.buffer);
  if (o === "FIXED_LEN_BYTE_ARRAY") {
    const d = new Array(f);
    for (let h = 0; h < f; h++)
      d[h] = A.subarray(h * s, (h + 1) * s);
    return d;
  }
  throw new Error(`parquet byte_stream_split unsupported type: ${o}`);
}
function Qh(a, f) {
  switch (a) {
    case "INT32":
    case "FLOAT":
      return 4;
    case "INT64":
    case "DOUBLE":
      return 8;
    case "FIXED_LEN_BYTE_ARRAY":
      if (!f) throw new Error("parquet byteWidth missing type_length");
      return f;
    default:
      throw new Error(`parquet unsupported type: ${a}`);
  }
}
function Xo(a, f, o, c) {
  if (o === 0) return [];
  if (f === "BOOLEAN")
    return Rh(a, o);
  if (f === "INT32")
    return Nh(a, o);
  if (f === "INT64")
    return Yh(a, o);
  if (f === "INT96")
    return xh(a, o);
  if (f === "FLOAT")
    return Lh(a, o);
  if (f === "DOUBLE")
    return Hh(a, o);
  if (f === "BYTE_ARRAY")
    return qh(a, o);
  if (f === "FIXED_LEN_BYTE_ARRAY") {
    if (!c) throw new Error("parquet missing fixed length");
    return Gh(a, o, c);
  } else
    throw new Error(`parquet unhandled type: ${f}`);
}
function Rh(a, f) {
  const o = new Array(f);
  for (let c = 0; c < f; c++) {
    const s = a.offset + (c / 8 | 0), A = c % 8, d = a.view.getUint8(s);
    o[c] = (d & 1 << A) !== 0;
  }
  return a.offset += Math.ceil(f / 8), o;
}
function Nh(a, f) {
  const o = (a.view.byteOffset + a.offset) % 4 ? new Int32Array($i(a.view.buffer, a.view.byteOffset + a.offset, f * 4)) : new Int32Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f * 4, o;
}
function Yh(a, f) {
  const o = (a.view.byteOffset + a.offset) % 8 ? new BigInt64Array($i(a.view.buffer, a.view.byteOffset + a.offset, f * 8)) : new BigInt64Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f * 8, o;
}
function xh(a, f) {
  const o = new Array(f);
  for (let c = 0; c < f; c++) {
    const s = a.view.getBigInt64(a.offset + c * 12, !0), A = a.view.getInt32(a.offset + c * 12 + 8, !0);
    o[c] = BigInt(A) << 64n | s;
  }
  return a.offset += f * 12, o;
}
function Lh(a, f) {
  const o = (a.view.byteOffset + a.offset) % 4 ? new Float32Array($i(a.view.buffer, a.view.byteOffset + a.offset, f * 4)) : new Float32Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f * 4, o;
}
function Hh(a, f) {
  const o = (a.view.byteOffset + a.offset) % 8 ? new Float64Array($i(a.view.buffer, a.view.byteOffset + a.offset, f * 8)) : new Float64Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f * 8, o;
}
function qh(a, f) {
  const o = new Array(f);
  for (let c = 0; c < f; c++) {
    const s = a.view.getUint32(a.offset, !0);
    a.offset += 4, o[c] = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, s), a.offset += s;
  }
  return o;
}
function Gh(a, f, o) {
  const c = new Array(f);
  for (let s = 0; s < f; s++)
    c[s] = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, o), a.offset += o;
  return c;
}
function $i(a, f, o) {
  const c = new ArrayBuffer(o);
  return new Uint8Array(c).set(new Uint8Array(a, f, o)), c;
}
const Ih = [0, 255, 65535, 16777215, 4294967295];
function EA(a, f, o, c, s) {
  for (let A = 0; A < s; A++)
    o[c + A] = a[f + A];
}
function Zh(a, f) {
  const o = a.byteLength, c = f.byteLength;
  let s = 0, A = 0;
  for (; s < o; ) {
    const d = a[s];
    if (s++, d < 128)
      break;
  }
  if (c && s >= o)
    throw new Error("invalid snappy length header");
  for (; s < o; ) {
    const d = a[s];
    let h = 0;
    if (s++, s >= o)
      throw new Error("missing eof marker");
    if ((d & 3) === 0) {
      let m = (d >>> 2) + 1;
      if (m > 60) {
        if (s + 3 >= o)
          throw new Error("snappy error literal pos + 3 >= inputLength");
        const g = m - 60;
        m = a[s] + (a[s + 1] << 8) + (a[s + 2] << 16) + (a[s + 3] << 24), m = (m & Ih[g]) + 1, s += g;
      }
      if (s + m > o)
        throw new Error("snappy error literal exceeds input length");
      EA(a, s, f, A, m), s += m, A += m;
    } else {
      let m = 0;
      switch (d & 3) {
        case 1:
          h = (d >>> 2 & 7) + 4, m = a[s] + (d >>> 5 << 8), s++;
          break;
        case 2:
          if (o <= s + 1)
            throw new Error("snappy error end of input");
          h = (d >>> 2) + 1, m = a[s] + (a[s + 1] << 8), s += 2;
          break;
        case 3:
          if (o <= s + 3)
            throw new Error("snappy error end of input");
          h = (d >>> 2) + 1, m = a[s] + (a[s + 1] << 8) + (a[s + 2] << 16) + (a[s + 3] << 24), s += 4;
          break;
      }
      if (m === 0 || isNaN(m))
        throw new Error(`invalid offset ${m} pos ${s} inputLength ${o}`);
      if (m > A)
        throw new Error("cannot copy from before start of buffer");
      EA(f, A - m, f, A, h), A += h;
    }
  }
  if (A !== c) throw new Error("premature end of input");
}
function Vh(a, f, { type: o, element: c, schemaPath: s }) {
  const A = new DataView(a.buffer, a.byteOffset, a.byteLength), d = { view: A, offset: 0 };
  let h;
  const m = jh(d, f, s), { definitionLevels: g, numNulls: S } = Xh(d, f, s), v = f.num_values - S;
  if (f.encoding === "PLAIN")
    h = Xo(d, o, v, c.type_length);
  else if (f.encoding === "PLAIN_DICTIONARY" || f.encoding === "RLE_DICTIONARY" || f.encoding === "RLE") {
    const b = o === "BOOLEAN" ? 1 : A.getUint8(d.offset++);
    b ? (h = new Array(v), o === "BOOLEAN" ? (_l(d, b, h), h = h.map((Q) => !!Q)) : _l(d, b, h, A.byteLength - d.offset)) : h = new Uint8Array(v);
  } else if (f.encoding === "BYTE_STREAM_SPLIT")
    h = $A(d, v, o, c.type_length);
  else if (f.encoding === "DELTA_BINARY_PACKED")
    h = o === "INT32" ? new Int32Array(v) : new BigInt64Array(v), yu(d, v, h);
  else if (f.encoding === "DELTA_LENGTH_BYTE_ARRAY")
    h = new Array(v), PA(d, v, h);
  else
    throw new Error(`parquet unsupported encoding: ${f.encoding}`);
  return { definitionLevels: g, repetitionLevels: m, dataPage: h };
}
function jh(a, f, o) {
  if (o.length > 1) {
    const c = ZA(o);
    if (c) {
      const s = new Array(f.num_values);
      return _l(a, tf(c), s), s;
    }
  }
  return [];
}
function Xh(a, f, o) {
  const c = Vo(o);
  if (!c) return { definitionLevels: [], numNulls: 0 };
  const s = new Array(f.num_values);
  _l(a, tf(c), s);
  let A = f.num_values;
  for (const d of s)
    d === c && A--;
  return A === 0 && (s.length = 0), { definitionLevels: s, numNulls: A };
}
function No(a, f, o, c) {
  let s;
  const A = c?.[o];
  if (o === "UNCOMPRESSED")
    s = a;
  else if (A)
    s = A(a, f);
  else if (o === "SNAPPY")
    s = new Uint8Array(f), Zh(a, s);
  else
    throw new Error(`parquet unsupported compression codec: ${o}`);
  if (s?.length !== f)
    throw new Error(`parquet decompressed page length ${s?.length} does not match header ${f}`);
  return s;
}
function Kh(a, f, o) {
  const s = { view: new DataView(a.buffer, a.byteOffset, a.byteLength), offset: 0 }, { type: A, element: d, schemaPath: h, codec: m, compressors: g } = o, S = f.data_page_header_v2;
  if (!S) throw new Error("parquet data page header v2 is undefined");
  const v = Jh(s, S, h);
  s.offset = S.repetition_levels_byte_length;
  const b = _h(s, S, h), Q = f.uncompressed_page_size - S.definition_levels_byte_length - S.repetition_levels_byte_length;
  let D = a.subarray(s.offset);
  S.is_compressed !== !1 && (D = No(D, Q, m, g));
  const N = new DataView(D.buffer, D.byteOffset, D.byteLength), B = { view: N, offset: 0 };
  let M;
  const V = S.num_values - S.num_nulls;
  if (S.encoding === "PLAIN")
    M = Xo(B, A, V, d.type_length);
  else if (S.encoding === "RLE")
    M = new Array(V), _l(B, 1, M), M = M.map((G) => !!G);
  else if (S.encoding === "PLAIN_DICTIONARY" || S.encoding === "RLE_DICTIONARY") {
    const G = N.getUint8(B.offset++);
    M = new Array(V), _l(B, G, M, Q - 1);
  } else if (S.encoding === "DELTA_BINARY_PACKED")
    M = A === "INT32" ? new Int32Array(V) : new BigInt64Array(V), yu(B, V, M);
  else if (S.encoding === "DELTA_LENGTH_BYTE_ARRAY")
    M = new Array(V), PA(B, V, M);
  else if (S.encoding === "DELTA_BYTE_ARRAY")
    M = new Array(V), Mh(B, V, M);
  else if (S.encoding === "BYTE_STREAM_SPLIT")
    M = $A(B, V, A, d.type_length);
  else
    throw new Error(`parquet unsupported encoding: ${S.encoding}`);
  return { definitionLevels: b, repetitionLevels: v, dataPage: M };
}
function Jh(a, f, o) {
  const c = ZA(o);
  if (!c) return [];
  const s = new Array(f.num_values);
  return _l(a, tf(c), s, f.repetition_levels_byte_length), s;
}
function _h(a, f, o) {
  const c = Vo(o);
  if (c) {
    const s = new Array(f.num_values);
    return _l(a, tf(c), s, f.definition_levels_byte_length), s;
  }
}
function tf(a) {
  return 32 - Math.clz32(a);
}
function SA(a, { groupStart: f, selectStart: o, selectEnd: c }, s, A) {
  const { pathInSchema: d, schemaPath: h } = s, m = VA(h), g = [];
  let S, v, b = 0, Q = 0;
  const D = A && (() => {
    v && A({
      pathInSchema: d,
      columnData: v,
      rowStart: f + b - v.length,
      rowEnd: f + b
    });
  });
  for (; (m ? b < c : a.offset < a.view.byteLength - 1) && !(a.offset >= a.view.byteLength - 1); ) {
    const N = Fh(a);
    if (N.type === "DICTIONARY_PAGE") {
      const { data: B } = bA(a, N, s, S, void 0, 0);
      B && (S = xA(B, s));
    } else {
      const B = v?.length || 0, M = bA(a, N, s, S, v, o - b);
      M.skipped ? (g.length || (Q += M.skipped), b += M.skipped) : M.data && v === M.data ? b += M.data.length - B : M.data && M.data.length && (D?.(), g.push(M.data), b += M.data.length, v = M.data);
    }
  }
  return D?.(), { data: g, skipped: Q };
}
function bA(a, f, o, c, s, A) {
  const { type: d, element: h, schemaPath: m, codec: g, compressors: S } = o, v = new Uint8Array(
    a.view.buffer,
    a.view.byteOffset + a.offset,
    f.compressed_page_size
  );
  if (a.offset += f.compressed_page_size, f.type === "DATA_PAGE") {
    const b = f.data_page_header;
    if (!b) throw new Error("parquet data page header is undefined");
    if (A > b.num_values && VA(m))
      return { skipped: b.num_values };
    const Q = No(v, Number(f.uncompressed_page_size), g, S), { definitionLevels: D, repetitionLevels: N, dataPage: B } = Vh(Q, b, o), M = uA(B, c, b.encoding, o), V = Array.isArray(s) ? s : [];
    return { skipped: 0, data: vA(V, D, N, M, m) };
  } else if (f.type === "DATA_PAGE_V2") {
    const b = f.data_page_header_v2;
    if (!b) throw new Error("parquet data page header v2 is undefined");
    if (A > b.num_rows)
      return { skipped: b.num_values };
    const { definitionLevels: Q, repetitionLevels: D, dataPage: N } = Kh(v, f, o), B = uA(N, c, b.encoding, o), M = Array.isArray(s) ? s : [];
    return { skipped: 0, data: vA(M, Q, D, B, m) };
  } else if (f.type === "DICTIONARY_PAGE") {
    const b = f.dictionary_page_header;
    if (!b) throw new Error("parquet dictionary page header is undefined");
    const Q = No(
      v,
      Number(f.uncompressed_page_size),
      g,
      S
    ), D = { view: new DataView(Q.buffer, Q.byteOffset, Q.byteLength), offset: 0 };
    return { skipped: 0, data: Xo(D, d, b.num_values, h.type_length) };
  } else
    throw new Error(`parquet unsupported page type: ${f.type}`);
}
function Fh(a) {
  const f = hu(a), o = NA[f.field_1], c = f.field_2, s = f.field_3, A = f.field_4, d = f.field_5 && {
    num_values: f.field_5.field_1,
    encoding: hn[f.field_5.field_2],
    definition_level_encoding: hn[f.field_5.field_3],
    repetition_level_encoding: hn[f.field_5.field_4],
    statistics: f.field_5.field_5 && {
      max: f.field_5.field_5.field_1,
      min: f.field_5.field_5.field_2,
      null_count: f.field_5.field_5.field_3,
      distinct_count: f.field_5.field_5.field_4,
      max_value: f.field_5.field_5.field_5,
      min_value: f.field_5.field_5.field_6
    }
  }, h = f.field_6, m = f.field_7 && {
    num_values: f.field_7.field_1,
    encoding: hn[f.field_7.field_2],
    is_sorted: f.field_7.field_3
  }, g = f.field_8 && {
    num_values: f.field_8.field_1,
    num_nulls: f.field_8.field_2,
    num_rows: f.field_8.field_3,
    encoding: hn[f.field_8.field_4],
    definition_levels_byte_length: f.field_8.field_5,
    repetition_levels_byte_length: f.field_8.field_6,
    is_compressed: f.field_8.field_7 === void 0 ? !0 : f.field_8.field_7,
    // default true
    statistics: f.field_8.field_8
  };
  return {
    type: o,
    uncompressed_page_size: c,
    compressed_page_size: s,
    crc: A,
    data_page_header: d,
    index_page_header: h,
    dictionary_page_header: m,
    data_page_header_v2: g
  };
}
function Wh(a, { metadata: f }, o) {
  const c = [];
  for (const s of o.chunks) {
    const { data_page_offset: A, dictionary_page_offset: d, path_in_schema: h } = s.columnMetadata, m = GA(f.schema, h), g = {
      pathInSchema: h,
      element: m[m.length - 1].element,
      schemaPath: m,
      parsers: { ...Pi, ...a.parsers },
      ...a,
      ...s.columnMetadata
    };
    let { startByte: S, endByte: v } = s.range;
    if (!("offsetIndex" in s)) {
      c.push({
        pathInSchema: h,
        data: Promise.resolve(a.file.slice(S, v)).then((b) => {
          const Q = { view: new DataView(b), offset: 0 };
          return SA(Q, o, g, a.onPage);
        })
      });
      continue;
    }
    c.push({
      pathInSchema: h,
      // fetch offset index
      data: Promise.resolve(a.file.slice(s.offsetIndex.startByte, s.offsetIndex.endByte)).then(async (b) => {
        const { selectStart: Q, selectEnd: D } = o, N = oh({ view: new DataView(b), offset: 0 }).page_locations;
        let B = -1;
        const M = d || A < N[0].offset;
        for (let I = 0; I < N.length; I++) {
          const $ = N[I], rt = Number($.first_row_index), Et = I + 1 < N.length ? Number(N[I + 1].first_row_index) : o.groupRows;
          B < 0 && !M && Et > Q && (S = Number($.offset), B = rt), rt < D && (v = Number($.offset) + $.compressed_page_size);
        }
        B < 0 && (B = 0);
        const V = await a.file.slice(S, v), G = { view: new DataView(V), offset: 0 }, K = B ? {
          ...o,
          groupStart: o.groupStart + B,
          selectStart: o.selectStart - B,
          selectEnd: o.selectEnd - B
        } : o, { data: _, skipped: Z } = SA(G, K, g, a.onPage);
        return {
          data: _,
          skipped: B + Z
        };
      })
    });
  }
  return { groupStart: o.groupStart, groupRows: o.groupRows, asyncColumns: c };
}
async function pA({ asyncColumns: a }, f, o, c, s) {
  const A = await Promise.all(a.map(
    (v) => v.data.then(({ skipped: b, data: Q }) => ({ skipped: b, data: _A(Q) }))
  )), d = o - f;
  if (s === "object") {
    const v = Array(d);
    for (let b = 0; b < d; b++) {
      const Q = {};
      for (let D = 0; D < a.length; D++) {
        const { data: N, skipped: B } = A[D];
        Q[a[D].pathInSchema[0]] = N[f + b - B];
      }
      v[b] = Q;
    }
    return v;
  }
  const h = a.map((v) => v.pathInSchema[0]).filter((v) => !c || c.includes(v)), m = c ?? h, g = m.map((v) => a.findIndex((b) => b.pathInSchema[0] === v)), S = Array(d);
  for (let v = 0; v < d; v++) {
    const b = Array(a.length);
    for (let Q = 0; Q < m.length; Q++) {
      const D = g[Q];
      if (D < 0) throw new Error(`parquet column not found: ${m[Q]}`);
      const { data: N, skipped: B } = A[D];
      b[Q] = N[f + v - B];
    }
    S[v] = b;
  }
  return S;
}
function kh(a, f, o) {
  const { asyncColumns: c } = a;
  o = { ...Pi, ...o };
  const s = [];
  for (const A of f.children)
    if (A.children.length) {
      const d = c.filter((h) => h.pathInSchema[0] === A.element.name);
      if (!d.length) continue;
      s.push({
        pathInSchema: A.path,
        data: (async () => {
          const h = await Promise.all(d.map((v) => v.data)), m = /* @__PURE__ */ new Map();
          let g = 1 / 0;
          for (let v = 0; v < d.length; v++) {
            const b = _A(h[v].data);
            m.set(d[v].pathInSchema.join("."), b), g = Math.min(g, b.length);
          }
          for (const [v, b] of m)
            b.length > g && m.set(v, b.slice(0, g));
          cu(m, A, o);
          const S = m.get(A.element.name);
          if (!S) throw new Error("parquet column data not assembled");
          return { data: [S], skipped: 0 };
        })()
      });
    } else {
      const d = c.find((h) => h.pathInSchema[0] === A.element.name);
      d && s.push(d);
    }
  return { ...a, asyncColumns: s };
}
async function Ph(a) {
  a.metadata ?? (a.metadata = await ih(a.file, a));
  const { rowStart: f = 0, rowEnd: o, columns: c, onChunk: s, onComplete: A, rowFormat: d, filter: h, filterStrict: m = !0 } = a;
  if (h && d !== "object")
    throw new Error('parquet filter requires rowFormat: "object"');
  const g = Vi(h);
  if (g.length) {
    const B = Au(a.metadata).children.map((V) => V.element.name), M = g.filter((V) => !B.includes(V));
    if (M.length)
      throw new Error(`parquet filter columns not found: ${M.join(", ")}`);
  }
  let S = c, v = !1;
  if (c && h) {
    const B = g.filter((M) => !c.includes(M));
    B.length && (S = [...c, ...B], v = !0);
  }
  let b = S !== c ? { ...a, columns: S } : a;
  b = await tg(b);
  const Q = $h(b);
  if (!A && !s) {
    await wo(Q);
    return;
  }
  const D = Au(a.metadata), N = Q.map((B) => kh(B, D, a.parsers));
  if (s)
    for (const B of N)
      for (const M of B.asyncColumns)
        M.data.then(({ data: V, skipped: G }) => {
          let K = B.groupStart + G;
          for (const _ of V)
            s({
              columnName: M.pathInSchema[0],
              columnData: _,
              rowStart: K,
              rowEnd: K + _.length
            }), K += _.length;
        }, () => {
        });
  if (A) {
    await wo(N);
    const B = [];
    for (const M of N) {
      const V = Math.max(f - M.groupStart, 0), G = Math.min((o ?? 1 / 0) - M.groupStart, M.groupRows), K = d === "object" ? await pA(M, V, G, S, "object") : await pA(M, V, G, c, "array");
      if (h) {
        for (
          const _ of
          /** @type {Record<string, any>[]} */
          K
        )
          if (fu(_, h, m)) {
            if (v && c)
              for (const Z of g)
                c.includes(Z) || delete _[Z];
            B.push(_);
          }
      } else
        JA(B, K);
    }
    A(B);
  } else
    await wo(N);
}
async function wo(a) {
  const f = a.flatMap((s) => s.asyncColumns.map((A) => A.data)), c = (await Promise.allSettled(f)).find((s) => s.status === "rejected");
  if (c) throw c.reason;
}
function $h(a) {
  if (!a.metadata) throw new Error("parquet requires metadata");
  const f = ph(a);
  return a.file = Bh(a.file, f), f.groups.map((o) => Wh(a, f, o));
}
async function tg(a) {
  if (!a.useBloomFilters || !a.filter || !a.metadata) return a;
  const f = Au(a.metadata), o = {};
  for (const s of f.children) o[s.element.name] = s.element;
  const c = await wh({
    file: a.file,
    metadata: a.metadata,
    filter: a.filter,
    filterStrict: a.filterStrict
  });
  return (
    /** @type {BaseParquetReadOptions} */
    { ...a, bloomFiltersByGroup: c, schemaElements: o }
  );
}
function eg(a) {
  return new Promise((f, o) => {
    Ph({
      ...a,
      rowFormat: "object",
      // force object output
      onComplete: f
    }).catch(o);
  });
}
var lg = ArrayBuffer, Zt = Uint8Array, Fi = Uint16Array, ng = Int16Array, ef = Int32Array, Bo = function(a, f, o) {
  if (Zt.prototype.slice)
    return Zt.prototype.slice.call(a, f, o);
  (f == null || f < 0) && (f = 0), (o == null || o > a.length) && (o = a.length);
  var c = new Zt(o - f);
  return c.set(a.subarray(f, o)), c;
}, su = function(a, f, o, c) {
  if (Zt.prototype.fill)
    return Zt.prototype.fill.call(a, f, o, c);
  for ((o == null || o < 0) && (o = 0), (c == null || c > a.length) && (c = a.length); o < c; ++o)
    a[o] = f;
  return a;
}, ag = function(a, f, o, c) {
  if (Zt.prototype.copyWithin)
    return Zt.prototype.copyWithin.call(a, f, o, c);
  for ((o == null || o < 0) && (o = 0), (c == null || c > a.length) && (c = a.length); o < c; )
    a[f++] = a[o++];
}, ug = [
  "invalid zstd data",
  "window size too large (>2046MB)",
  "invalid block type",
  "FSE accuracy too high",
  "match distance too far back",
  "unexpected EOF"
], _t = function(a, f, o) {
  var c = new Error(f || ug[a]);
  if (c.code = a, Error.captureStackTrace && Error.captureStackTrace(c, _t), !o)
    throw c;
  return c;
}, wA = function(a, f, o) {
  for (var c = 0, s = 0; c < o; ++c)
    s |= a[f++] << (c << 3);
  return s;
}, ig = function(a, f) {
  return (a[f] | a[f + 1] << 8 | a[f + 2] << 16 | a[f + 3] << 24) >>> 0;
}, fg = function(a, f) {
  var o = a[0] | a[1] << 8 | a[2] << 16;
  if (o == 3126568 && a[3] == 253) {
    var c = a[4], s = c >> 5 & 1, A = c >> 2 & 1, d = c & 3, h = c >> 6;
    c & 8 && _t(0);
    var m = 6 - s, g = d == 3 ? 4 : d, S = wA(a, m, g);
    m += g;
    var v = h ? 1 << h : s, b = wA(a, m, v) + (h == 1 && 256), Q = b;
    if (!s) {
      var D = 1 << 10 + (a[5] >> 3);
      Q = D + (D >> 3) * (a[5] & 7);
    }
    Q > 2145386496 && _t(1);
    var N = new Zt((f == 1 ? b || Q : f ? 0 : Q) + 12);
    return N[0] = 1, N[4] = 4, N[8] = 8, {
      b: m + v,
      y: 0,
      l: 0,
      d: S,
      w: f && f != 1 ? f : N.subarray(12),
      e: Q,
      o: new ef(N.buffer, 0, 3),
      u: b,
      c: A,
      m: Math.min(131072, Q)
    };
  } else if ((o >> 4 | a[3] << 20) == 25481893)
    return ig(a, 4) + 8;
  _t(0);
}, Sn = function(a) {
  for (var f = 0; 1 << f <= a; ++f)
    ;
  return f - 1;
}, gu = function(a, f, o) {
  var c = (f << 3) + 4, s = (a[f] & 15) + 5;
  s > o && _t(3);
  for (var A = 1 << s, d = A, h = -1, m = -1, g = -1, S = A, v = new lg(512 + (A << 2)), b = new ng(v, 0, 256), Q = new Fi(v, 0, 256), D = new Fi(v, 512, A), N = 512 + (A << 1), B = new Zt(v, N, A), M = new Zt(v, N + A); h < 255 && d > 0; ) {
    var V = Sn(d + 1), G = c >> 3, K = (1 << V + 1) - 1, _ = (a[G] | a[G + 1] << 8 | a[G + 2] << 16) >> (c & 7) & K, Z = (1 << V) - 1, I = K - d - 1, $ = _ & Z;
    if ($ < I ? (c += V, _ = $) : (c += V + 1, _ > Z && (_ -= I)), b[++h] = --_, _ == -1 ? (d += _, B[--S] = h) : d -= _, !_)
      do {
        var rt = c >> 3;
        m = (a[rt] | a[rt + 1] << 8) >> (c & 7) & 3, c += 2, h += m;
      } while (m == 3);
  }
  (h > 255 || d) && _t(0);
  for (var Et = 0, St = (A >> 1) + (A >> 3) + 3, it = A - 1, Ot = 0; Ot <= h; ++Ot) {
    var ut = b[Ot];
    if (ut < 1) {
      Q[Ot] = -ut;
      continue;
    }
    for (g = 0; g < ut; ++g) {
      B[Et] = Ot;
      do
        Et = Et + St & it;
      while (Et >= S);
    }
  }
  for (Et && _t(0), g = 0; g < A; ++g) {
    var lt = Q[B[g]]++, O = M[g] = s - Sn(lt);
    D[g] = (lt << O) - A;
  }
  return [c + 7 >> 3, {
    b: s,
    s: B,
    n: M,
    t: D
  }];
}, cg = function(a, f) {
  var o = 0, c = -1, s = new Zt(292), A = a[f], d = s.subarray(0, 256), h = s.subarray(256, 268), m = new Fi(s.buffer, 268);
  if (A < 128) {
    var g = gu(a, f + 1, 6), S = g[0], v = g[1];
    f += A;
    var b = S << 3, Q = a[f];
    Q || _t(0);
    for (var D = 0, N = 0, B = v.b, M = B, V = (++f << 3) - 8 + Sn(Q); V -= B, !(V < b); ) {
      var G = V >> 3;
      if (D += (a[G] | a[G + 1] << 8) >> (V & 7) & (1 << B) - 1, d[++c] = v.s[D], V -= M, V < b)
        break;
      G = V >> 3, N += (a[G] | a[G + 1] << 8) >> (V & 7) & (1 << M) - 1, d[++c] = v.s[N], B = v.n[D], D = v.t[D], M = v.n[N], N = v.t[N];
    }
    ++c > 255 && _t(0);
  } else {
    for (c = A - 127; o < c; o += 2) {
      var K = a[++f];
      d[o] = K >> 4, d[o + 1] = K & 15;
    }
    ++f;
  }
  var _ = 0;
  for (o = 0; o < c; ++o) {
    var Z = d[o];
    Z > 11 && _t(0), _ += Z && 1 << Z - 1;
  }
  var I = Sn(_) + 1, $ = 1 << I, rt = $ - _;
  for (rt & rt - 1 && _t(0), d[c++] = Sn(rt) + 1, o = 0; o < c; ++o) {
    var Z = d[o];
    ++h[d[o] = Z && I + 1 - Z];
  }
  var Et = new Zt($ << 1), St = Et.subarray(0, $), it = Et.subarray($);
  for (m[I] = 0, o = I; o > 0; --o) {
    var Ot = m[o];
    su(it, o, Ot, m[o - 1] = Ot + h[o] * (1 << I - o));
  }
  for (m[0] != $ && _t(0), o = 0; o < c; ++o) {
    var ut = d[o];
    if (ut) {
      var lt = m[ut];
      su(St, o, lt, m[ut] = lt + (1 << I - ut));
    }
  }
  return [f, {
    n: it,
    b: I,
    s: St
  }];
}, og = gu(/* @__PURE__ */ new Zt([
  81,
  16,
  99,
  140,
  49,
  198,
  24,
  99,
  12,
  33,
  196,
  24,
  99,
  102,
  102,
  134,
  70,
  146,
  4
]), 0, 6)[1], sg = gu(/* @__PURE__ */ new Zt([
  33,
  20,
  196,
  24,
  99,
  140,
  33,
  132,
  16,
  66,
  8,
  33,
  132,
  16,
  66,
  8,
  33,
  68,
  68,
  68,
  68,
  68,
  68,
  68,
  68,
  36,
  9
]), 0, 6)[1], rg = gu(/* @__PURE__ */ new Zt([
  32,
  132,
  16,
  66,
  102,
  70,
  68,
  68,
  68,
  68,
  36,
  73,
  2
]), 0, 5)[1], t2 = function(a, f) {
  for (var o = a.length, c = new ef(o), s = 0; s < o; ++s)
    c[s] = f, f += 1 << a[s];
  return c;
}, Yo = /* @__PURE__ */ new Zt((/* @__PURE__ */ new ef([
  0,
  0,
  0,
  0,
  16843009,
  50528770,
  134678020,
  202050057,
  269422093
])).buffer, 0, 36), Ag = /* @__PURE__ */ t2(Yo, 0), xo = /* @__PURE__ */ new Zt((/* @__PURE__ */ new ef([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  16843009,
  50528770,
  117769220,
  185207048,
  252579084,
  16
])).buffer, 0, 53), dg = /* @__PURE__ */ t2(xo, 3), ou = function(a, f, o) {
  var c = a.length, s = f.length, A = a[c - 1], d = (1 << o.b) - 1, h = -o.b;
  A || _t(0);
  for (var m = 0, g = o.b, S = (c << 3) - 8 + Sn(A) - g, v = -1; S > h && v < s; ) {
    var b = S >> 3, Q = (a[b] | a[b + 1] << 8 | a[b + 2] << 16) >> (S & 7);
    m = (m << g | Q) & d, f[++v] = o.s[m], S -= g = o.n[m];
  }
  (S != h || v + 1 != s) && _t(0);
}, yg = function(a, f, o) {
  var c = 6, s = f.length, A = s + 3 >> 2, d = A << 1, h = A + d;
  ou(a.subarray(c, c += a[0] | a[1] << 8), f.subarray(0, A), o), ou(a.subarray(c, c += a[2] | a[3] << 8), f.subarray(A, d), o), ou(a.subarray(c, c += a[4] | a[5] << 8), f.subarray(d, h), o), ou(a.subarray(c), f.subarray(h), o);
}, hg = function(a, f, o) {
  var c, s = f.b, A = a[s], d = A >> 1 & 3;
  f.l = A & 1;
  var h = A >> 3 | a[s + 1] << 5 | a[s + 2] << 13, m = (s += 3) + h;
  if (d == 1)
    return s >= a.length ? void 0 : (f.b = s + 1, o ? (su(o, a[s], f.y, f.y += h), o) : su(new Zt(h), a[s]));
  if (!(m > a.length)) {
    if (d == 0)
      return f.b = m, o ? (o.set(a.subarray(s, m), f.y), f.y += h, o) : Bo(a, s, m);
    if (d == 2) {
      var g = a[s], S = g & 3, v = g >> 2 & 3, b = g >> 4, Q = 0, D = 0;
      S < 2 ? v & 1 ? b |= a[++s] << 4 | (v & 2 && a[++s] << 12) : b = g >> 3 : (D = v, v < 2 ? (b |= (a[++s] & 63) << 4, Q = a[s] >> 6 | a[++s] << 2) : v == 2 ? (b |= a[++s] << 4 | (a[++s] & 3) << 12, Q = a[s] >> 2 | a[++s] << 6) : (b |= a[++s] << 4 | (a[++s] & 63) << 12, Q = a[s] >> 6 | a[++s] << 2 | a[++s] << 10)), ++s;
      var N = o ? o.subarray(f.y, f.y + f.m) : new Zt(f.m), B = N.length - b;
      if (S == 0)
        N.set(a.subarray(s, s += b), B);
      else if (S == 1)
        su(N, a[s++], B);
      else {
        var M = f.h;
        if (S == 2) {
          var V = cg(a, s);
          Q += s - (s = V[0]), f.h = M = V[1];
        } else M || _t(0);
        (D ? yg : ou)(a.subarray(s, s += Q), N.subarray(B), M);
      }
      var G = a[s++];
      if (G) {
        G == 255 ? G = (a[s++] | a[s++] << 8) + 32512 : G > 127 && (G = G - 128 << 8 | a[s++]);
        var K = a[s++];
        K & 3 && _t(0);
        for (var _ = [sg, rg, og], Z = 2; Z > -1; --Z) {
          var I = K >> (Z << 1) + 2 & 3;
          if (I == 1) {
            var $ = new Zt([0, 0, a[s++]]);
            _[Z] = {
              s: $.subarray(2, 3),
              n: $.subarray(0, 1),
              t: new Fi($.buffer, 0, 1),
              b: 0
            };
          } else I == 2 ? (c = gu(a, s, 9 - (Z & 1)), s = c[0], _[Z] = c[1]) : I == 3 && (f.t || _t(0), _[Z] = f.t[Z]);
        }
        var rt = f.t = _, Et = rt[0], St = rt[1], it = rt[2], Ot = a[m - 1];
        Ot || _t(0);
        var ut = (m << 3) - 8 + Sn(Ot) - it.b, lt = ut >> 3, O = 0, X = (a[lt] | a[lt + 1] << 8) >> (ut & 7) & (1 << it.b) - 1;
        lt = (ut -= St.b) >> 3;
        var tt = (a[lt] | a[lt + 1] << 8) >> (ut & 7) & (1 << St.b) - 1;
        lt = (ut -= Et.b) >> 3;
        var gt = (a[lt] | a[lt + 1] << 8) >> (ut & 7) & (1 << Et.b) - 1;
        for (++G; --G; ) {
          var vt = it.s[X], w = it.n[X], H = Et.s[gt], j = Et.n[gt], F = St.s[tt], at = St.n[tt];
          lt = (ut -= F) >> 3;
          var ct = 1 << F, J = ct + ((a[lt] | a[lt + 1] << 8 | a[lt + 2] << 16 | a[lt + 3] << 24) >>> (ut & 7) & ct - 1);
          lt = (ut -= xo[H]) >> 3;
          var Qt = dg[H] + ((a[lt] | a[lt + 1] << 8 | a[lt + 2] << 16) >> (ut & 7) & (1 << xo[H]) - 1);
          lt = (ut -= Yo[vt]) >> 3;
          var wt = Ag[vt] + ((a[lt] | a[lt + 1] << 8 | a[lt + 2] << 16) >> (ut & 7) & (1 << Yo[vt]) - 1);
          if (lt = (ut -= w) >> 3, X = it.t[X] + ((a[lt] | a[lt + 1] << 8) >> (ut & 7) & (1 << w) - 1), lt = (ut -= j) >> 3, gt = Et.t[gt] + ((a[lt] | a[lt + 1] << 8) >> (ut & 7) & (1 << j) - 1), lt = (ut -= at) >> 3, tt = St.t[tt] + ((a[lt] | a[lt + 1] << 8) >> (ut & 7) & (1 << at) - 1), J > 3)
            f.o[2] = f.o[1], f.o[1] = f.o[0], f.o[0] = J -= 3;
          else {
            var Ue = J - (wt != 0);
            Ue ? (J = Ue == 3 ? f.o[0] - 1 : f.o[Ue], Ue > 1 && (f.o[2] = f.o[1]), f.o[1] = f.o[0], f.o[0] = J) : J = f.o[0];
          }
          for (var Z = 0; Z < wt; ++Z)
            N[O + Z] = N[B + Z];
          O += wt, B += wt;
          var ge = O - J;
          if (ge < 0) {
            var ze = -ge, bn = f.e + ge;
            ze > Qt && (ze = Qt);
            for (var Z = 0; Z < ze; ++Z)
              N[O + Z] = f.w[bn + Z];
            O += ze, Qt -= ze, ge = 0;
          }
          for (var Z = 0; Z < Qt; ++Z)
            N[O + Z] = N[ge + Z];
          O += Qt;
        }
        if (O != B)
          for (; B < N.length; )
            N[O++] = N[B++];
        else
          O = N.length;
        o ? f.y += O : N = Bo(N, 0, O);
      } else if (o) {
        if (f.y += b, B)
          for (var Z = 0; Z < b; ++Z)
            N[Z] = N[B + Z];
      } else B && (N = Bo(N, B));
      return f.b = m, N;
    }
    _t(2);
  }
}, gg = function(a, f) {
  if (a.length == 1)
    return a[0];
  for (var o = new Zt(f), c = 0, s = 0; c < a.length; ++c) {
    var A = a[c];
    o.set(A, s), s += A.length;
  }
  return o;
};
function mg(a, f) {
  for (var o = [], c = +!f, s = 0, A = 0; a.length; ) {
    var d = fg(a, c || f);
    if (typeof d == "object") {
      for (c ? (f = null, d.w.length == d.u && (o.push(f = d.w), A += d.u)) : (o.push(f), d.e = 0); !d.l; ) {
        var h = hg(a, d, f);
        h || _t(5), f ? d.e = d.y : (o.push(h), A += h.length, ag(d.w, 0, h.length), d.w.set(h, d.w.length - h.length));
      }
      s = d.b + d.c * 4;
    } else
      s = d;
    a = a.subarray(s);
  }
  return gg(o, A);
}
function vg() {
  const a = Eg();
  return (f, o) => {
    const { memory: c, uncompress: s } = a.exports, A = 68e3, d = A + f.byteLength, h = A + f.byteLength + o;
    if (c.buffer.byteLength < h) {
      const v = c.buffer.byteLength / 65536, Q = Math.ceil(h / 65536) - v;
      c.grow(Q);
    }
    const m = new Uint8Array(c.buffer);
    m.set(f, A);
    const g = s(A, f.byteLength, d);
    if (g === -1) throw new Error("invalid snappy length header");
    if (g === -2) throw new Error("missing eof marker");
    if (g === -3) throw new Error("premature end of input");
    if (g) throw new Error(`failed to uncompress data ${g}`);
    return m.slice(d, d + o);
  };
}
function Eg() {
  const a = atob(Sg), f = new Uint8Array(a.length);
  for (let c = 0; c < a.length; c += 1)
    f[c] = a.charCodeAt(c);
  const o = new WebAssembly.Module(f);
  return new WebAssembly.Instance(o);
}
const Sg = "AGFzbQEAAAABEANgAABgA39/fwF/YAF/AX8DBgUAAQEBAgUDAQACBj8KfwFBoIwEC38AQYAIC38AQaAMC38AQaAMC38AQaCMBAt/AEGACAt/AEGgjAQLfwBBgIAIC38AQQALfwBBAQsHwQEOBm1lbW9yeQIAEV9fd2FzbV9jYWxsX2N0b3JzAAAGbWVtY3B5AAEHbWVtbW92ZQACCnVuY29tcHJlc3MAAwxfX2Rzb19oYW5kbGUDAQpfX2RhdGFfZW5kAwILX19zdGFja19sb3cDAwxfX3N0YWNrX2hpZ2gDBA1fX2dsb2JhbF9iYXNlAwULX19oZWFwX2Jhc2UDBgpfX2hlYXBfZW5kAwcNX19tZW1vcnlfYmFzZQMIDF9fdGFibGVfYmFzZQMJCuASBQIAC8sBAQN/AkAgAkUNAAJAAkAgAkEHcSIDDQAgACEEIAIhBQwBCyAAIQQgAiEFA0AgBCABLQAAOgAAIARBAWohBCABQQFqIQEgBUF/aiEFIANBf2oiAw0ACwsgAkEISQ0AA0AgBCABLQAAOgAAIAQgAS0AAToAASAEIAEtAAI6AAIgBCABLQADOgADIAQgAS0ABDoABCAEIAEtAAU6AAUgBCABLQAGOgAGIAQgAS0ABzoAByAEQQhqIQQgAUEIaiEBIAVBeGoiBQ0ACwsgAAugAwEEfwJAIAAgAUYNAAJAAkAgACABSQ0AIAEgAmoiAyAASw0BCyACRQ0BAkACQCACQQdxIgMNACAAIQQgAiEFDAELIAAhBCACIQUDQCAEIAEtAAA6AAAgBEEBaiEEIAFBAWohASAFQX9qIQUgA0F/aiIDDQALCyACQQhJDQEDQCAEIAEtAAA6AAAgBCABLQABOgABIAQgAS0AAjoAAiAEIAEtAAM6AAMgBCABLQAEOgAEIAQgAS0ABToABSAEIAEtAAY6AAYgBCABLQAHOgAHIARBCGohBCABQQhqIQEgBUF4aiIFDQAMAgsLIAJFDQACQAJAIAJBA3EiBA0AIAAgAmohBiACIQUMAQsgAiEFA0AgBUF/aiIFIABqIgYgBSABaiIDLQAAOgAAIARBf2oiBA0ACwsgAkEESQ0AIAZBfGohASADQXxqIQQDQCABQQNqIARBA2otAAA6AAAgAUECaiAEQQJqLQAAOgAAIAFBAWogBEEBai0AADoAACABIAQtAAA6AAAgAUF8aiEBIARBfGohBCAFQXxqIgUNAAsLIAALswoBCX8jgICAgABBIGsiAySAgICAACADQQlqQgA3AAAgA0IANwIEIAMgA0EYajYCAEF/IQQCQCABRQ0AIAMgAUF/aiIFNgIcIAMgAEEBajYCGCAALAAAIgZB/wBxIQcCQCAGQX9KDQAgBUUNASADIAFBfmoiBTYCHCADIABBAmo2AhggACwAASIGQf8AcUEHdCAHciEHQX8hBCAGQX9KDQAgBUUNASADIAFBfWoiBTYCHCADIABBA2o2AhggACwAAiIGQf8AcUEOdCAHciEHQX8hBCAGQX9KDQAgBUUNASADIAFBfGoiBTYCHCADIABBBGo2AhggACwAAyIGQf8AcUEVdCAHciEHQX8hBCAGQX9KDQAgBUUNASADIAFBe2o2AhwgAyAAQQVqNgIYIAAsAAQiAUEASA0BIAFBHHQgB3IhBwsgAiAHaiEIAkACQCADEISAgIAADQAgAiEADAELIAMoAgQhASACIQADQAJAIAMoAgggAWtBBEoNACADIAE2AgQgAxCEgICAAEUNAiADKAIEIQELIAFBAWohBQJAAkAgAS0AACIGQQNxDQAgCCAAayEJIAMoAggiCiAFayEEIAZBAnYiC0EBaiEHAkAgBkE/Sw0AIARBEEkNACAJQRBIDQAgACABKAIBNgIAIAAgASgCBTYCBCAAIAEoAgk2AgggACABKAINNgIMIAAgB2ohACADKAIIIAUgB2oiAWtBBEoNAyADIAE2AgQgAxCEgICAAEUNBAwCCwJAAkAgBkHwAU8NACAFIQYMAQsgCiAFIAtBRWoiAWoiBmshBCABQQJ0QYCIgIAAaigCACAFKAIAcUEBaiEHCwJAIAcgBE0NAANAIAggAGsgBEkNBSAAIAYgBBCBgICAACEAIAMoAgAiASABKAIAIgkgAygCDCIFaiIGNgIAIAFBBGoiASABKAIAIgogBWsiATYCACADIAE2AgwgACAEaiEAIAFFDQUgAyAJIApqNgIIIAcgBGshByABIQQgByABSw0ACyAIIABrIQkLIAkgB0kNAyAAIAYgBxCBgICAACAHaiEAIAMoAgggBiAHaiIBa0EESg0CIAMgATYCBCADEISAgIAADQEMAwsgACACayAGQQF0QaCIgIAAai8BACIBQQt2IgpBAnRBgIiAgABq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", mn = 4096, bg = 2 * mn + 32, e2 = 2 * mn - 1, pg = new Uint32Array([
  0,
  1,
  3,
  7,
  15,
  31,
  63,
  127,
  255,
  511,
  1023,
  2047,
  4095,
  8191,
  16383,
  32767,
  65535,
  131071,
  262143,
  524287,
  1048575,
  2097151,
  4194303,
  8388607,
  16777215
]);
function Ve(a) {
  this.buf_ = new Uint8Array(bg), this.input_ = a, this.buf_ptr_ = 0, this.val_ = 0, this.pos_ = 0, this.reset();
}
Ve.READ_SIZE = mn;
Ve.IBUF_MASK = e2;
Ve.prototype.reset = function() {
  this.buf_ptr_ = 0, this.val_ = 0, this.pos_ = 0, this.bit_pos_ = 0, this.bit_end_pos_ = 0, this.eos_ = 0, this.readMoreInput();
  for (let a = 0; a < 4; a++)
    this.val_ |= this.buf_[this.pos_] << 8 * a, this.pos_++;
  return this.bit_end_pos_ > 0;
};
Ve.prototype.readMoreInput = function() {
  if (!(this.bit_end_pos_ > 256)) if (this.eos_) {
    if (this.bit_pos_ > this.bit_end_pos_)
      throw new Error("Unexpected end of input " + this.bit_pos_ + " " + this.bit_end_pos_);
  } else {
    const a = this.buf_ptr_, f = this.input_.read(this.buf_, a, mn);
    if (f < 0)
      throw new Error("Unexpected end of input");
    if (f < mn) {
      this.eos_ = 1;
      for (let o = 0; o < 32; o++)
        this.buf_[a + f + o] = 0;
    }
    if (a === 0) {
      for (let o = 0; o < 32; o++)
        this.buf_[(mn << 1) + o] = this.buf_[o];
      this.buf_ptr_ = mn;
    } else
      this.buf_ptr_ = 0;
    this.bit_end_pos_ += f << 3;
  }
};
Ve.prototype.fillBitWindow = function() {
  for (; this.bit_pos_ >= 8; )
    this.val_ >>>= 8, this.val_ |= this.buf_[this.pos_ & e2] << 24, this.pos_++, this.bit_pos_ = this.bit_pos_ - 8 >>> 0, this.bit_end_pos_ = this.bit_end_pos_ - 8 >>> 0;
};
Ve.prototype.readBits = function(a) {
  32 - this.bit_pos_ < a && this.fillBitWindow();
  const f = this.val_ >>> this.bit_pos_ & pg[a];
  return this.bit_pos_ += a, f;
};
const wg = 8, Lo = 8, Bg = 255, Ho = 18, Tg = new Uint8Array([
  1,
  2,
  3,
  4,
  0,
  5,
  17,
  6,
  16,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15
]), Cg = new Uint16Array([
  256,
  402,
  436,
  468,
  500,
  534,
  566,
  598,
  630,
  662,
  694,
  726,
  758,
  790,
  822,
  854,
  886,
  920,
  952,
  984,
  1016,
  1048,
  1080
]);
function Yt(a, f) {
  this.bits = a, this.value = f;
}
const BA = 16, oa = 15;
function TA(a, f) {
  let o = 1 << f - 1;
  for (; a & o; )
    o >>= 1;
  return (a & o - 1) + o;
}
function CA(a, f, o, c, s) {
  do
    c -= o, a[f + c] = new Yt(s.bits, s.value);
  while (c > 0);
}
function Ug(a, f, o) {
  let c = 1 << f - o;
  for (; f < oa && (c -= a[f], !(c <= 0)); )
    ++f, c <<= 1;
  return f - o;
}
function l2(a, f, o, c, s) {
  const A = f, d = new Int32Array(oa + 1), h = new Int32Array(oa + 1), m = new Int32Array(s);
  for (let B = 0; B < s; B++)
    d[c[B]]++;
  h[1] = 0;
  for (let B = 1; B < oa; B++)
    h[B + 1] = h[B] + d[B];
  for (let B = 0; B < s; B++)
    c[B] !== 0 && (m[h[c[B]]++] = B);
  let g = o, S = 1 << g, v = S;
  if (h[oa] === 1) {
    for (let B = 0; B < v; ++B)
      a[f + B] = new Yt(0, m[0] & 65535);
    return v;
  }
  let b = 0, Q = 0;
  for (let B = 1, M = 2; B <= o; ++B, M <<= 1)
    for (; d[B] > 0; --d[B]) {
      const V = new Yt(B & 255, m[Q++] & 65535);
      CA(a, f + b, M, S, V), b = TA(b, B);
    }
  const D = v - 1;
  let N = -1;
  for (let B = o + 1, M = 2; B <= oa; ++B, M <<= 1)
    for (; d[B] > 0; --d[B]) {
      (b & D) !== N && (f += S, g = Ug(d, B, o), S = 1 << g, v += S, N = b & D, a[A + N] = new Yt(g + o & 255, f - A - N & 65535));
      const V = new Yt(B - o & 255, m[Q++] & 65535);
      CA(a, f + (b >> o), M, S, V), b = TA(b, B);
    }
  return v;
}
function Wi(a, f, o, c) {
  const s = new Uint8Array(a);
  c.readMoreInput();
  const A = c.readBits(2);
  if (A === 1) {
    let h = a - 1, m = 0;
    const g = new Int32Array(4), S = c.readBits(2) + 1;
    for (; h; )
      h >>= 1, m++;
    for (let v = 0; v < S; v++)
      g[v] = c.readBits(m) % a, s[g[v]] = 2;
    switch (s[g[0]] = 1, S) {
      case 1:
        break;
      case 3:
        if (g[0] === g[1] || g[0] === g[2] || g[1] === g[2])
          throw new Error("[ReadHuffmanCode] invalid symbols");
        break;
      case 2:
        if (g[0] === g[1])
          throw new Error("[ReadHuffmanCode] invalid symbols");
        s[g[1]] = 1;
        break;
      case 4:
        if (g[0] === g[1] || g[0] === g[2] || g[0] === g[3] || g[1] === g[2] || g[1] === g[3] || g[2] === g[3])
          throw new Error("[ReadHuffmanCode] invalid symbols");
        c.readBits(1) ? (s[g[2]] = 3, s[g[3]] = 3) : s[g[0]] = 2;
        break;
    }
  } else {
    const h = new Uint8Array(Ho);
    let m = 32, g = 0;
    const S = [
      new Yt(2, 0),
      new Yt(2, 4),
      new Yt(2, 3),
      new Yt(3, 2),
      new Yt(2, 0),
      new Yt(2, 4),
      new Yt(2, 3),
      new Yt(4, 1),
      new Yt(2, 0),
      new Yt(2, 4),
      new Yt(2, 3),
      new Yt(3, 2),
      new Yt(2, 0),
      new Yt(2, 4),
      new Yt(2, 3),
      new Yt(4, 5)
    ];
    for (let v = A; v < Ho && m > 0; v++) {
      const b = Tg[v];
      let Q = 0;
      c.fillBitWindow(), Q += c.val_ >>> c.bit_pos_ & 15, c.bit_pos_ += S[Q].bits;
      const D = S[Q].value;
      h[b] = D, D !== 0 && (m -= 32 >> D, g++);
    }
    if (!(g === 1 || m === 0))
      throw new Error("[ReadHuffmanCode] invalid num_codes or space");
    zg(h, a, s, c);
  }
  const d = l2(f, o, Lo, s, a);
  if (!d) throw new Error("brotli BuildHuffmanTable failed");
  return d;
}
function sa(a, f, o) {
  o.fillBitWindow(), f += o.val_ >>> o.bit_pos_ & Bg;
  const c = a[f].bits - Lo;
  return c > 0 && (o.bit_pos_ += Lo, f += a[f].value, f += o.val_ >>> o.bit_pos_ & (1 << c) - 1), o.bit_pos_ += a[f].bits, a[f].value;
}
function zg(a, f, o, c) {
  let s = 0, A = wg, d = 0, h = 0, m = 32768;
  const g = [];
  for (let S = 0; S < 32; S++)
    g.push(new Yt(0, 0));
  for (l2(g, 0, 5, a, Ho); s < f && m > 0; ) {
    let S = 0;
    c.readMoreInput(), c.fillBitWindow(), S += c.val_ >>> c.bit_pos_ & 31, c.bit_pos_ += g[S].bits;
    const v = g[S].value & 255;
    if (v < BA)
      d = 0, o[s++] = v, v !== 0 && (A = v, m -= 32768 >> v);
    else {
      const b = v - 14;
      let Q = 0;
      v === BA && (Q = A), h !== Q && (d = 0, h = Q);
      const D = d;
      d > 0 && (d -= 2, d <<= b), d += c.readBits(b) + 3;
      const N = d - D;
      if (s + N > f)
        throw new Error("[ReadHuffmanCodeLengths] symbol + repeat_delta > num_symbols");
      for (let B = 0; B < N; B++)
        o[s + B] = h;
      s += N, h !== 0 && (m -= N << 15 - h);
    }
  }
  if (m !== 0)
    throw new Error("[ReadHuffmanCodeLengths] space = " + m);
  for (; s < f; s++)
    o[s] = 0;
}
function yn(a, f) {
  this.alphabet_size = a, this.num_htrees = f, this.codes = new Array(f + f * Cg[a + 31 >>> 5]), this.htrees = new Uint32Array(f);
}
yn.prototype.decode = function(a) {
  let f = 0;
  for (let o = 0; o < this.num_htrees; o++)
    this.htrees[o] = f, f += Wi(this.alphabet_size, this.codes, f, a);
};
function Ko([a, f]) {
  return { offset: a, nbits: f };
}
const Mg = [
  [1, 2],
  [5, 2],
  [9, 2],
  [13, 2],
  [17, 3],
  [25, 3],
  [33, 3],
  [41, 3],
  [49, 4],
  [65, 4],
  [81, 4],
  [97, 4],
  [113, 5],
  [145, 5],
  [177, 5],
  [209, 5],
  [241, 6],
  [305, 6],
  [369, 7],
  [497, 8],
  [753, 9],
  [1265, 10],
  [2289, 11],
  [4337, 12],
  [8433, 13],
  [16625, 24]
].map(Ko), Og = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 1],
  [8, 1],
  [10, 2],
  [14, 2],
  [18, 3],
  [26, 3],
  [34, 4],
  [50, 4],
  [66, 5],
  [98, 5],
  [130, 6],
  [194, 7],
  [322, 8],
  [578, 9],
  [1090, 10],
  [2114, 12],
  [6210, 14],
  [22594, 24]
].map(Ko), Dg = [
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 0],
  [7, 0],
  [8, 0],
  [9, 0],
  [10, 1],
  [12, 1],
  [14, 2],
  [18, 2],
  [22, 3],
  [30, 3],
  [38, 4],
  [54, 4],
  [70, 5],
  [102, 5],
  [134, 6],
  [198, 7],
  [326, 8],
  [582, 9],
  [1094, 10],
  [2118, 24]
].map(Ko), Qg = [
  0,
  0,
  8,
  8,
  0,
  16,
  8,
  16,
  16
], Rg = [
  0,
  8,
  0,
  8,
  16,
  0,
  16,
  8,
  16
], Kl = 1080, n2 = new Uint8Array([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), a2 = new Uint8Array([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
function u2(a, f) {
  const o = new Uint16Array(31);
  for (let s = 0; s < 31; s++)
    o[s] = f += 1 << a[s - 1];
  const c = new Int32Array(o[30]);
  for (let s = 1; s < 30; s++)
    for (let A = o[s]; A < o[s + 1]; ++A)
      c[A] = A - o[s] << 5 | s;
  return { base: o, rev: c };
}
const { base: i2, rev: Ng } = u2(n2, 2);
i2[28] = 258;
Ng[258] = 28;
const { base: Yg } = u2(a2, 0), f2 = new Uint16Array(32768);
for (let a = 0; a < 32768; a++) {
  let f = (a & 43690) >> 1 | (a & 21845) << 1;
  f = (f & 52428) >> 2 | (f & 13107) << 2, f = (f & 61680) >> 4 | (f & 3855) << 4, f2[a] = ((f & 65280) >> 8 | (f & 255) << 8) >> 1;
}
function ru(a, f, o) {
  const c = new Uint16Array(f);
  for (let d = 0; d < a.length; d++)
    a[d] && ++c[a[d] - 1];
  const s = new Uint16Array(f);
  for (let d = 1; d < f; d++)
    s[d] = s[d - 1] + c[d - 1] << 1;
  let A;
  {
    A = new Uint16Array(1 << f);
    const d = 15 - f;
    for (let h = 0; h < a.length; h++)
      if (a[h]) {
        const m = h << 4 | a[h], g = f - a[h];
        let S = s[a[h] - 1]++ << g;
        for (const v = S | (1 << g) - 1; S <= v; S++)
          A[f2[S] >> d] = m;
      }
  }
  return A;
}
const mu = new Uint8Array(288);
for (let a = 0; a < 144; a++) mu[a] = 8;
for (let a = 144; a < 256; a++) mu[a] = 9;
for (let a = 256; a < 280; a++) mu[a] = 7;
for (let a = 280; a < 288; a++) mu[a] = 8;
const c2 = new Uint8Array(32);
for (let a = 0; a < 32; a++) c2[a] = 5;
const xg = /* @__PURE__ */ ru(mu, 9), Lg = /* @__PURE__ */ ru(c2, 5);
function To(a, f, o, c, s, A, d) {
  const h = o * 2, m = o, g = sa(f, o * Kl, d);
  let S;
  g === 0 ? S = s[h + (A[m] & 1)] : g === 1 ? S = s[h + (A[m] - 1 & 1)] + 1 : S = g - 2, S >= a && (S -= a), c[o] = S, s[h + (A[m] & 1)] = S, A[m]++;
}
function Hg(a) {
  const f = {
    meta_block_length: 0,
    input_end: 0,
    is_uncompressed: 0,
    is_metadata: !1
  };
  if (f.input_end = a.readBits(1), f.input_end && a.readBits(1))
    return f;
  const o = a.readBits(2) + 4;
  if (o === 7) {
    if (f.is_metadata = !0, a.readBits(1) !== 0)
      throw new Error("Invalid reserved bit");
    const c = a.readBits(2);
    if (c === 0)
      return f;
    for (let s = 0; s < c; s++) {
      const A = a.readBits(8);
      if (s + 1 === c && c > 1 && A === 0)
        throw new Error("Invalid size byte");
      f.meta_block_length |= A << s * 8;
    }
  } else
    for (let c = 0; c < o; c++) {
      const s = a.readBits(4);
      if (c + 1 === o && o > 4 && s === 0)
        throw new Error("Invalid size nibble");
      f.meta_block_length |= s << c * 4;
    }
  return f.meta_block_length++, !f.input_end && !f.is_metadata && (f.is_uncompressed = a.readBits(1)), f;
}
function qg(a, f, o, c, s, A) {
  const d = s + 1;
  let h = o & s, m = A.pos_ & Ve.IBUF_MASK;
  if (f < 8 || A.bit_pos_ + (f << 3) < A.bit_end_pos_) {
    for (; f-- > 0; )
      A.readMoreInput(), c[h++] = A.readBits(8), h === d && (a.write(c, d), h = 0);
    return;
  }
  if (A.bit_end_pos_ < 32)
    throw new Error("copyUncompressedBlockToOutput: br.bit_end_pos_ < 32");
  for (; A.bit_pos_ < 32; )
    c[h] = A.val_ >>> A.bit_pos_, A.bit_pos_ += 8, h++, f--;
  let g = A.bit_end_pos_ - A.bit_pos_ >> 3;
  if (m + g > Ve.IBUF_MASK) {
    const S = Ve.IBUF_MASK + 1 - m;
    for (let v = 0; v < S; v++)
      c[h + v] = A.buf_[m + v];
    g -= S, h += S, f -= S, m = 0;
  }
  for (let S = 0; S < g; S++)
    c[h + S] = A.buf_[m + S];
  if (h += g, f -= g, h >= d) {
    a.write(c, d), h -= d;
    for (let S = 0; S < h; S++)
      c[S] = c[d + S];
  }
  for (; h + f >= d; ) {
    if (g = d - h, A.input_.read(c, h, g) < g)
      throw new Error("copyUncompressedBlockToOutput: not enough bytes");
    a.write(c, d), f -= g, h = 0;
  }
  if (A.input_.read(c, h, f) < f)
    throw new Error("copyUncompressedBlockToOutput: not enough bytes");
  A.reset();
}
function o2(a) {
  if (a.readBits(1)) {
    const f = a.readBits(3);
    return f === 0 ? 1 : a.readBits(f) + (1 << f);
  }
  return 0;
}
function Gg(a) {
  if (a.readBits(1) === 0) return 16;
  let f = a.readBits(3);
  return f > 0 ? 17 + f : (f = a.readBits(3), f > 0 ? 8 + f : 17);
}
function Ig(a) {
  const f = a.bit_pos_ + 7 & -8;
  return !a.readBits(f - a.bit_pos_);
}
function qi(a, f, o) {
  const c = sa(a, f, o), { offset: s, nbits: A } = Mg[c];
  return s + o.readBits(A);
}
const UA = new Uint8Array([
  /* CONTEXT_UTF8, last byte. */
  /* ASCII range. */
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  4,
  0,
  0,
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  8,
  12,
  16,
  12,
  12,
  20,
  12,
  16,
  24,
  28,
  12,
  12,
  32,
  12,
  36,
  12,
  44,
  44,
  44,
  44,
  44,
  44,
  44,
  44,
  44,
  44,
  32,
  32,
  24,
  40,
  28,
  12,
  12,
  48,
  52,
  52,
  52,
  48,
  52,
  52,
  52,
  48,
  52,
  52,
  52,
  52,
  52,
  48,
  52,
  52,
  52,
  52,
  52,
  48,
  52,
  52,
  52,
  52,
  52,
  24,
  12,
  28,
  12,
  12,
  12,
  56,
  60,
  60,
  60,
  56,
  60,
  60,
  60,
  56,
  60,
  60,
  60,
  60,
  60,
  56,
  60,
  60,
  60,
  60,
  60,
  56,
  60,
  60,
  60,
  60,
  60,
  24,
  12,
  28,
  12,
  0,
  /* UTF8 continuation byte range. */
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  /* UTF8 lead byte range. */
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  2,
  3,
  /* CONTEXT_UTF8 second last byte. */
  /* ASCII range. */
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  1,
  1,
  1,
  1,
  0,
  /* UTF8 continuation byte range. */
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  /* UTF8 lead byte range. */
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  /* CONTEXT_SIGNED, second last byte. */
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  7,
  /* CONTEXT_SIGNED, last byte, same as the above values shifted by 3 bits. */
  0,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  48,
  48,
  48,
  48,
  48,
  48,
  48,
  48,
  48,
  48,
  48,
  48,
  48,
  48,
  48,
  56,
  /* CONTEXT_LSB6, last byte. */
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  /* CONTEXT_MSB6, last byte. */
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  6,
  6,
  6,
  6,
  7,
  7,
  7,
  7,
  8,
  8,
  8,
  8,
  9,
  9,
  9,
  9,
  10,
  10,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  14,
  14,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  25,
  25,
  25,
  25,
  26,
  26,
  26,
  26,
  27,
  27,
  27,
  27,
  28,
  28,
  28,
  28,
  29,
  29,
  29,
  29,
  30,
  30,
  30,
  30,
  31,
  31,
  31,
  31,
  32,
  32,
  32,
  32,
  33,
  33,
  33,
  33,
  34,
  34,
  34,
  34,
  35,
  35,
  35,
  35,
  36,
  36,
  36,
  36,
  37,
  37,
  37,
  37,
  38,
  38,
  38,
  38,
  39,
  39,
  39,
  39,
  40,
  40,
  40,
  40,
  41,
  41,
  41,
  41,
  42,
  42,
  42,
  42,
  43,
  43,
  43,
  43,
  44,
  44,
  44,
  44,
  45,
  45,
  45,
  45,
  46,
  46,
  46,
  46,
  47,
  47,
  47,
  47,
  48,
  48,
  48,
  48,
  49,
  49,
  49,
  49,
  50,
  50,
  50,
  50,
  51,
  51,
  51,
  51,
  52,
  52,
  52,
  52,
  53,
  53,
  53,
  53,
  54,
  54,
  54,
  54,
  55,
  55,
  55,
  55,
  56,
  56,
  56,
  56,
  57,
  57,
  57,
  57,
  58,
  58,
  58,
  58,
  59,
  59,
  59,
  59,
  60,
  60,
  60,
  60,
  61,
  61,
  61,
  61,
  62,
  62,
  62,
  62,
  63,
  63,
  63,
  63,
  /* CONTEXT_{M,L}SB6, second last byte, */
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]), Gi = new Uint16Array([
  /* CONTEXT_LSB6 */
  1024,
  1536,
  /* CONTEXT_MSB6 */
  1280,
  1536,
  /* CONTEXT_UTF8 */
  0,
  256,
  /* CONTEXT_SIGNED */
  768,
  512
]);
function zA(a, f) {
  let o = 0;
  f.readMoreInput();
  const c = o2(f) + 1, s = new Uint8Array(a);
  if (c <= 1)
    return [c, s];
  f.readBits(1) && (o = f.readBits(4) + 1);
  const d = [];
  for (let h = 0; h < Kl; h++)
    d[h] = new Yt(0, 0);
  Wi(c + o, d, 0, f);
  for (let h = 0; h < a; ) {
    f.readMoreInput();
    const m = sa(d, 0, f);
    if (m === 0)
      s[h] = 0, h++;
    else if (m <= o) {
      let g = 1 + (1 << m) + f.readBits(m);
      for (; --g; ) {
        if (h >= a)
          throw new Error("[DecodeContextMap] i >= context_map_size");
        s[h] = 0, h++;
      }
    } else
      s[h] = m - o, h++;
  }
  return f.readBits(1) && Vg(s, a), [c, s];
}
function Zg(a, f) {
  const o = a[f];
  for (let c = f; c; c--) a[c] = a[c - 1];
  a[0] = o;
}
function Vg(a, f) {
  const o = new Uint8Array(256);
  for (let c = 0; c < 256; c++)
    o[c] = c;
  for (let c = 0; c < f; c++) {
    const s = a[c];
    a[c] = o[s], s && Zg(o, s);
  }
}
function s2(a) {
  this.buffer = a, this.pos = 0;
}
s2.prototype.read = function(a, f, o) {
  this.pos + o > this.buffer.length && (o = this.buffer.length - this.pos);
  for (let c = 0; c < o; c++)
    a[f + c] = this.buffer[this.pos + c];
  return this.pos += o, o;
};
function r2(a) {
  this.buffer = a, this.pos = 0;
}
r2.prototype.write = function(a, f) {
  if (this.pos + f > this.buffer.length) throw new Error("brotli output buffer is not large enough");
  return this.buffer.set(a.subarray(0, f), this.pos), this.pos += f, f;
};
const jg = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
function Ze(a, f, o) {
  const c = f / 8 | 0;
  return (a[c] | a[c + 1] << 8) >> (f & 7) & o;
}
function Co(a, f) {
  const o = f / 8 | 0;
  return (a[o] | a[o + 1] << 8 | a[o + 2] << 16) >> (f & 7);
}
function Xg(a) {
  return (a + 7) / 8 | 0;
}
function Kg(a, f) {
  if (a[f++] !== 31 || a[f++] !== 139 || a[f++] !== 8) return 0;
  const o = a[f++];
  f += 6, o & 4 && (f += (a[f + 10] | a[f + 11] << 8) + 2);
  for (let c = (o >> 3 & 1) + (o >> 4 & 1); c > 0; c -= +!a[f++]) ;
  return f + (o & 2);
}
function Jo(a, f, o = 0, c = 0) {
  let s = f ?? new Uint8Array(1024);
  if (!(a.length - o)) return s;
  const A = Kg(a, o);
  if (A === a.length - 8) return s;
  if (A > a.length - 8) throw new Error("unexpected EOF");
  let d = A * 8, h = 0, m = 0, g = 0, S, v;
  const b = a.length * 8;
  function Q(D) {
    if (!f && D > s.length) {
      const N = s;
      s = new Uint8Array(Math.max(N.length * 2, D)), s.set(N);
    }
  }
  do {
    if (!S) {
      h = Ze(a, d, 1);
      const M = Ze(a, d + 1, 3);
      if (d += 3, M)
        if (M === 1)
          S = xg, v = Lg, m = 9, g = 5;
        else if (M === 2) {
          const V = Ze(a, d, 31) + 257, G = Ze(a, d + 10, 15) + 4, K = V + Ze(a, d + 5, 31) + 1;
          d += 14;
          const _ = new Uint8Array(K), Z = new Uint8Array(19);
          for (let it = 0; it < G; ++it)
            Z[jg[it]] = Ze(a, d + it * 3, 7);
          d += G * 3;
          const I = Math.max(...Z), $ = (1 << I) - 1, rt = ru(Z, I);
          for (let it = 0; it < K; ) {
            const Ot = rt[Ze(a, d, $)];
            d += Ot & 15;
            const ut = Ot >> 4;
            if (ut < 16)
              _[it++] = ut;
            else {
              let lt = 0, O = 0;
              for (ut === 16 ? (O = 3 + Ze(a, d, 3), d += 2, lt = _[it - 1]) : ut === 17 ? (O = 3 + Ze(a, d, 7), d += 3) : ut === 18 && (O = 11 + Ze(a, d, 127), d += 7); O--; ) _[it++] = lt;
            }
          }
          const Et = _.subarray(0, V), St = _.subarray(V);
          m = Math.max(...Et), g = Math.max(...St), S = ru(Et, m), v = ru(St, g);
        } else throw new Error("invalid block type");
      else {
        const V = Xg(d) + 4, G = a[V - 4] | a[V - 3] << 8, K = V + G;
        if (K > a.length) throw new Error("unexpected EOF");
        Q(c + G), s.set(a.subarray(V, K), c), c += G, d = K * 8;
        continue;
      }
      if (d > b) throw new Error("unexpected EOF");
    }
    Q(c + 131072);
    const D = (1 << m) - 1, N = (1 << g) - 1;
    let B = d;
    for (; ; B = d) {
      const M = S[Co(a, d) & D], V = M >> 4;
      if (d += M & 15, d > b) throw new Error("unexpected EOF");
      if (!M) throw new Error("invalid length/literal");
      if (V < 256) s[c++] = V;
      else if (V === 256) {
        B = d, S = void 0;
        break;
      } else {
        let G = V - 254;
        if (V > 264) {
          const $ = V - 257, rt = n2[$];
          G = Ze(a, d, (1 << rt) - 1) + i2[$], d += rt;
        }
        if (!v) throw new Error("invalid distance map");
        const K = v[Co(a, d) & N], _ = K >> 4;
        if (!K) throw new Error("invalid distance");
        d += K & 15;
        let Z = Yg[_];
        if (_ > 3) {
          const $ = a2[_];
          Z += Co(a, d) & (1 << $) - 1, d += $;
        }
        if (d > b) throw new Error("unexpected EOF");
        const I = c + G;
        if (c < Z) throw new Error("unexpected dictionary case");
        for (Q(I); c < I; c++) s[c] = s[c - Z];
      }
    }
    d = B, S && (h = 1);
  } while (!h);
  if (c < s.length) {
    const D = Math.ceil(d / 8) + 8;
    Jo(a, s, D, c);
  }
  return f ? s : s.subarray(0, c);
}
const Jg = `
H4sIAAAAAAAAAzy96XIcx7Uu+tuI4DuU2meLxDbRAElNJgYHR0neGrgFyr7bPg5FdlV2dwHVVa3KKoBN
SRHggIHgAFKcBc4zJQIgOGIggYjDF6D+kf8U56K6GxH3Ie73rYRsGRLQnZWVwxq+tXKtlYlf0V40GAZ+
UQe6mBSU2+9GnvZUokw5GozCoGb8RLt+UouqOuxLTRL4/boYaz0Yxf2J3pfUtIqjAR0XIq8W4JdiFFcK
UdRfDVQt8Ad04Ie6rINqOapo43u6EsV81guisJSUdWXA14NFP/SqqoT31kwxDYKyVl6i44pWblnFWhXj
qJLEqa6ouF8VAp1Wo7Dsl8oYpw5U6IV60OgBHYYYj6uMLkRJuRqZJDXaqyhPl9GmrPHeskpCVdGf+WF/
IYhKxt+vC2iP8aFdP/r3QzwTr291/lSOAk+Hnhn0k/IX6B/D8AbRh/FLYYK2ZTWgS+jLaB26KgiqKikP
avw3SE1Fh2nRDypVFSd9kR8mZd8EvklKUYSxam8Q8xzUBt8VTAVzV4GJMJwo9t0y3m8CZZJEK0y3Uivi
mX4/LA36QaDx+aCKvQKeLfqx3oM16w+jQYUO89WwVMH6J5hsECmvhLU3OiiGUaIrqVsuaq5FWIsjt993
ozAKXR1gn8rYE8/X3ifYnzgNdBnrpvrUPj8sRm6QFgI1aAJtTFkFRcM9RF/7o1Bv6uj4D/zHuNigvaCj
WLm6EKTY/zQe1Lq/iL/LIJoS1gmbiP3G2Ms6xJr09+tqUlUGnfrVOIoqn+z9/DPQS7i3VgU9olM80691
tRioEuinH6vjFTGfBOONsecJaLYvrVQTrJaH/jAGfA8KBi1i9LV+rBXWISliX1SaRKCNOO+ChlTQD7qu
DmBNPPRfAa1jR5MkjcNChB/QCTghiCOj0zjYYLDwcRRoPApSTAyWG3ursY+Bl++rlsAalQEV1/BMAloO
DQjGi6Pq30DTblStbcp35LraVY9JsBABdsPHy7A+VfBZvuQXsQaJa8xfSrGq4Q3hu6WkM8Z+YIxJgHka
5aM75eEdDvYv6IvKIWikvxrFmJtJ1n+9rc0DXXa1F3qqURQXOG+s4df53vwg6KYCft1c3df5KfYyVmH/
IPoeVCFoKCAxef/s+FdnVaXBINbbpLH+XxvW/3FQ+UkFewPaM6VImxJ4AltTqmIs77S1OQHoJw39BPvG
fvpBh5VByI99lSBnyNOY4uaO6j4sHcY+iPlGQTEK0acfGFXEt+hZVY0LORCj72IQDRZUoWaqKjTgi/cw
3g/wA9YxoP0EfBcM+v0+ZEJiEhBO7GP6pfYAPDioVX+CvdgNmQO+x5qEBnvYj+2uxWlo+tKgBknWvwn9
lSIVlCACDN6nvZL2ve6c0Yl5H9/l+8xf3sOY/aKzwUQR9hFyAnSYpAW9X5MaQoxDe6DpBNwcYetAXnFl
00fVfS5kQBnrXsA49oOWByIssjK1GDwLmgyqGKOP9XJB/1vwrj7sfaJKpuAnBrQVgPmSfgiwELTbhQUu
YdH+2vvlF16a1L6gfFGBrkUp1j3BEvlhn9q/36VsqmlT9E15cHAwH/sGfRZMNdYDmzAP/K03Y2LbwY8e
xrGlo2NjAXsOKsDY4hCyxCtE+/JF5ccBxoP1Yt9xX4o5a7fsFze8UwWd6QE/+F8bcqCJuBLgWQ/0UIV8
3tjR0cFZerEaLKdgimqUFNPQK4CPyrEuQrIE/bpmEvRRBr2D9yHXdbAJxGhSP8GjwVe9vTmKfOxJ7eNd
e3NYM6180ByH5HsGS9sZqoFaCQyR+FXzxz//+c8YB2SjVwO/m9ZO54dqufoXyO4AfB0MQsHsL2/N/rN9
XYsD4QR5FeRbWrZ9iH6qqSlDkyRYmk4XNPCf7V3tZWi4D7FGkDFJDBnmvPuuA20SYD+hXUBVGETFh4zq
96sJ9h86Cvoh0CXQTBWb8R7WdF3LuhaX9A2ZkMdgugpxjwaDVrDXpdSHnA6wUQavBpMoSqSo0u5XSu/+
8aPNQQpdi36xlJ0gqloJ9FZOKpQSgRenpd1f7doVQj6FWMO/gFgDUiHWfoA6ALyF9XNA/3Gsg1oBOsiA
Vry0X4fKKFdV9SBoo5QGxb2bt2wtg9ZA90kJMgXCH7ovjSGvapsw//XrWztbO3M9FQOh5YN//NgzkC8F
Dc6BHN+76aOt2HpDBsD8gw+wiEXQw/8dumgKUc1AhuTRRW7Pl717CxhPP/autfOHH6C8alg3b8PX/9X6
bao87E29DQq3Df+D0K/imXXAHcneTX/eOuC7kH5ezdOFpAcTgywLQs1xRoN7N32w1YNs0wMq2Lvpw60B
1h90C3JUQRX8E0YDCvxgSjrUzv8dOmOiImRTRSe+yHHTVd4C2ZjGReCAKnRJVxL3QOf6rd+/swH/1RhX
swB6gnyJOzpaOyt+0O+0tfX4cRQC53geeGsQ+2QiP6imiWnvM+3ABrW9mzdv/bR3+xd7N3dsVZ6qYK3w
rs09fRCC6zc666Fik72bN211MB/oWYh6X1UgW7raqz0mSoPPPv1iF/gReCXGGry3tau8qecjrC1EQNef
Qad7O97bWgHW2vreB/8ADWg/dMv/A8wF8uKYV9a3toKuY+xJSUOngrRC4J7Q27rlw398ExW/Wf+v1k7Q
1ka0bSSQiTXihmgwKIAXtr7/wT/+qgbUFryv5fsfWv5jx5b/2LrlvX/06WJx1/+z51PI0vKAD3UH0jbA
F+hj9duUOhT8APqBrkqwdvkC6NADvZaBRSAvgJHCZOuWD/7xyd69e9o2d2wqRtDU6GPXFzudfRA4W99/
7x/bv9z5Px766Gz5oUXv89H+/X9AvxnQTrL+h9ZOYJEErN6pgOZ++KGr/Z/+v/KfQf/0V/7Po0G8JwHN
Kc8zkBYB2HFfZ8sffoDIikLsZR6KoaPj/VasRa0Pot6AqMCxkLNREWvR6mzu6ACNg4exGIB/wKngibjm
Yl+TGihLA1P4UZiHMnOh50p4L3Ri/n2s055yfifkAaCe4KsQfN0PWoGmUSH04T7QiQu6b/Ggc93Ar7ZC
+HyI57AOHTv/ttN8+K+ergR8SQTs/+lPrYPYN4CMqArlEVUTqPxA79723wZ0ErZt/mBvQHkOWv/6q8+c
QhoAl0f9nT+sa/lk17ad4LlWVShAXqtww6Y/fwR8VqZQ6Gr3QVuQJSlxNHCCX9Xft7W809GxuTUE0P/n
pn91/vNfnS2fRSUHeiVZ1/KHP0BflqBTKwXIp9bv1rV0kCawD/3R1v8Pcg1r3bPObG1vd/AgpCLxbWlD
63ctaOpAb67H9KpeqqD/VJL/656PW7Gx36ZRgv+2gMchIX9YB1J4Dz/v4+cD/HyIn4/w8+fNHfLPJvxs
xs8W/KDdZrTbjHab0W4z2m1Guy1otwXttqDdFrTbgnZb0G4L2m1hf/hsE77bhDab0LYDz3Tg2Q5814E2
HWjbgWfQARYDP2iHf4HQ8PMRfj7Ezwf4eR8/7+FnC34242cTftDuI7T7CO0+QruP0O4jtPsI7T5Cu4/Q
7iO0+wjtPkS7D9HuQ7T7EO0+RLsP0e5DtPsQ7T5Euw/R7gO0+wDtPkC7D9DuA7T7AO0+QLsP0O4DtPsA
7d5Hu/fR7n20ex/t3ke799HufbR7H+3eR7v3MeMOzvq9TVv+DLWEyeN/wKxR5dV1WBOJJuiqAsckkReV
gctdCCz1ajYq+BDQr6aUMq+mBnwPesMQcUWQSxEtEvyuXOyt5/dFsN0i4NQQupgWBaQpODYoRd+mr+4T
1YboEzoCUACcAx1UUH18H8k5UqVUVVNAzDACSwJ7Q4YFqU9VByOnFsGeUBCOcdXH+wt4Z8AGQeT5Efgi
5rj8189fP3z9Ej9Lr1/8OvT64a9Dvx769aB89vT1Mj5dwl9zaPUSvz+Rv5ZeP8N3S/hk7tfh15fR9in+
mf31KHo4+vrHX4/+egDfPsLvj/Dfy+zj9ezrq/j3InrCU6+vvb6Fz5++voS2B9Huinz6Av0/fH0eP2fw
c/nXQ/h8Fu97+voC3v/09fzrl/jsBf65gecOvX729sDb8Tc33468HX5zFz/zbw+9PYy/x97MvpnBN3fx
/ZG3o2/H3h5+O4yfQ/iEv4++uffmMX4//OY2nh2VPsbfHsQzo/jsF/R0j79J23H8fhht+d9Db55Ir8No
P/x25M3P+GwcbUbeTMkTw/jmCd7+BNjdJNh4HQWwphOY5bCDsTtAdbT6CTkKxIcxvzXU/rTsAX9AQ7At
fLfow3ImqIyrNHOhooHyYG0BkcFMh0iIPeA/owFq0yo9BobuAgNypBEHc38Qv9Bki60ABjCk5Q47uwqJ
DuyD9+o4hmEcQveqQpQm9AsAWCYBrcFAzP4ENgmkGYxQoMO4JO4FI7Y5qYew2YVZ6qbGhdET0+gLCjRj
CNFggwiVKXolYLcr2jsVvLvmU7PSW2AAv0PaoewerwfagJ4BHAI+gJJ/F4CxE/OAiR3Frq5SQdOQhkYr
+aEq4gnoUj8Blkw1vRn4ArgGqlPvSyJAVyJk9IxP8WyYAMQbU0j9IBHTF0pAA32lXg3M6NG8Dj1DUxP/
xdKVYQrT5WLAmlBrUMdoDOhDV4BHP0WIVRvQQLmmXPT3wbzGgMII6C+m5wXYFDgLOlIFMQzsmBat+TaF
fsaSVHU5ragQWpquC1/8C9DO0PZeARzpwrRxKVqw4sDo5QB2USjGzyBEjaZDx9CbYjx2DRER6wKmD2s+
Tcowk/AsXmew2El5kO4ZTtoD6bnEYgmXM60ksCcoVOKEzpTaDkiGflpwMX1L2FBYqoGqaSKPuMZ31FIx
07lMLhY2webFDkAt6aqaVmkeG1WtBrVPub8F4KpSWoVwpJ+E1IResKaG5rjBBsUQUNhaCsJ+ulpophFw
AxqYFI9VlTyL7klbIb0uIYmGviPt7SWxcuDmY3IARFsIfEBvToSFLSrQL/1KNZWCCLlbBtMPNH0V7Zyg
R2+W8QB3a7DKAhpLKulLYb4mZfooYFeakIMu0E3gRvQn0BnHCWp6RIxbc/lvgGM6WAwla/8gtxl4TodV
X7uE9X5QxEQ1zUpyHvS8X4HJqkgdPoxAwh40BynTZadJPWC/1C0XuM5xVAMqMv0amwcUg/mRLMBgDlcC
YD0py44SXdWiYhEk4UZVzcWEiQUWB3rgTluvHMRCTH8I9EecxERTCrY4phqF2FARMjAxCHd7KTI+I9WB
Vqu1yHVhaupishW43ZRBxQnXACYlGYd+N5PGgDtFvpIEjI3mWqVJ1IndSXSe9leFTAJjTwX/Q8oxeBmm
CnSLJR7Ep3gvzd4QUtCnc8Itf8X+6IqEhIzdMsGPpqfP0M1ovCgtwJKqhW4CbqIVHg1iL3WxRjaA9QKz
mHYpKGEAGwrepbfS7CBf9lJyEXjX+sTTCDsqAM5zdQct8F6KzSr4M6DfBSCXEkEkNQx4CnPrBDX09Bi6
5IyicwKbZzSRK+V4KIPGBlSxhPgzoYvV0MfGb2tkMNjk2HxDXy8Fd0zuDkswoLf0cMtKBN3tlRTyl5vs
7SFzol3oJRGkD2CE722gA7RAjwg9fuylCCPNJ3kHgXh8a8U1/xqMJrR12tthgimPBlqpVk12UcrTWu3c
RWKlLzjn0rqDdAwTceXCvMj1kImB+NUAnRiwhP392pQAPBIM972eOKJjGN/W2MFG0R2ENJ4bU3f4JRjR
g5DQngIBY0GM7qFHRofffN377h+3/LmTWHffNyRqKAIMLewD5fepfXlFq8GAZcp0vTn0HRO8Q56G0Kah
Gsj10AkQiteL3kSQBVYD8j6Ke6l7iDKxgxAK9BObPlUV8RDA7PZBc+CUWFHlYB6bexRsOGAvMCO4KFa5
tvb2v9MFauiHMnQcmz1kYswyKVPnhXRO/MVgAAmYlyQI8EUJl9D9WsTOaKiywVwP1h+MHaeUsVD0f6M+
303JkA91wi1pgflcc75roUeSHnNDtxZJBavtgQa+5WInsfgMC1FMxz9kB4YLYUu/SEKq1H68mSaV+LPp
0zM7yNjgbkg4SnSeExg6lOgIxVrT510hu1CrUZ76RtzbXkrRrPcpU4zB7XSPbPz+ezFUqjmMFZtHt0Qu
onuhqxC39xQxr9jQJ+fpalJ27AkA2NSllOdpgzgvOyFjSiHdVGaQo+JoOyFcunN0X0NlYUafY+ZOPp/v
agd0DUsFTpqHIA49h508VgB5x3EN0gLErovUFSX9Dc9B8hXSBmCIwrfYripPUOSgoKs9iXvo/jEcvKNA
IRRANHUDiLB94BI6Dco8pTFUuC59zY6BEDeAaqG4ho2zAZRKJ7r3DTEEXZ9GsDtJqF9OYoQZyecenQCd
g1QnmJvRG1o7c852wiM8mu7rozu+CpkY0MnT09rpFze0Uch6CsAR8Mro3YRWmD3PXfZps5eqEkqCk9GV
noKKcz15E7vdCSUDBFh3ziU6LIPWapvfE9GXpFUfdFkjDquC6TEJkIb4qg1lRx4CXfP4QAf0D5p215h2
nkB08ogCAiUtFgs+OqVn39D919EPTlOwY9e10KsPTKNT3e1890PnR+IF5JHKd7R/FQ+bXM7XB1mVebzl
xORnglRDz3KupspR1Epn+TYiUJ5WGTDiph7YQGmJDmax0rtps5gfWrGCdHR2VilV6FI0PF8wHfs+6Ojg
qUFO/LgFqo5EYcEqPkQZ0VsAButqp3MZM4JwauPmkaTymEfLHypkEgf2/p93b/vvrvY4Kum4SLf+DvLM
ZjpMechj6EnqAmMmCX3xZjPHAggW9rc633/vBPQM8jQn+GMHRJoDcnJ4bucNcsUp4Dr71Nb/96DxQdVd
9NzHgA41HnvAfiP8xYJVE+qZ7ZSdrc473Y5HzEqvB10tFaijfl2rwLwMeKKWpxvbqRI7g6fDGj2Jhggn
t4nLMUhATg9WpXfvtq/2krYcHzg23OjAlqc7oYUANz/gAwyIKxXyJQRfQsvwAIzQOgqr5F/yTEvUBtzC
Uwk5ajHUlA6dbyG9Lt8pLyro9dxM3+ve1EGF0MnjOie/OV/xeYiWo9sbUAPbs4OYqwBxqDdzpNjk1j/x
l+/pxAb/QROXyeKbNnfkHKpYiL6edS1UEN2eDxBAjscXWHDKzpY/FotFMBEgCxFejvAByhqPtdL7vEl4
ATirGlqHM+whbsUhHlW4XMQcJy2nQ6YNvNbm0dBqeTdIOul5NVvf++gfXTy7bYtTMBpPnhwqSKD1fjEV
qqbbyeU6oQygj7hqm3giAfGvQrrRI0rD7qj7PzbvdiiNYJoXdJdfKTn4yfVsdIp9hr85Oa7f53uj6nae
2OVCPRjUdmJP+t39WrCyHxArk0ne7ymqb3M9+8ttbripA7vZtinX2kkU3s3TQui3NKhRlhg6kzqxel3v
0GMRODz0gLJbJ7vv9NGWIMc73K08OHddyyBxCc8+TEpx4/GoowCm6U/IW+CjnMMzWuBnDI1OEPD3t6DR
NKr4JoItAhnqaTnboWfEVFMaoK9mIzpNXl1PfEhcoIBE0SciMJ6nk6DMFHKGfpSYQ1PorAKRCrhagcqK
1Lfpqyl6VYx59TiIVC31VFHz+IHeEACjhHZmhFElkaGHxQgF84w2UvR2BGmJR2S1iEeT1gGCFSECAF0Y
+lQ5PoUBvZoyHIsCQEs9cdrQeo+AfHVIvAi7ySPDEuzp+NV1wCLO2PXjvsiI20bFRFaAFmk1KtONKmSA
t0FnAJpHUO/KhDzGJzTTnKoCB2oerfniB4IocX1VBLTk8ZEPuIeFrUJSRIUU0yS6jhVILOCfiigSKCfe
j34LNOIwBJABXvTqcSXiJKM+/glc82qhzCZcgxrgv6sqaR8wMtBQXEypSPCiqAT7QPkl4OIBrgsdWAB8
WHzuJZa3gveAtqCvsXd0WYVhBAEGAOVizOAeumANFsenU6oMTRabCKAXK4VVBTO+ehxCcu2P6FgQ35QZ
4JhVNaphpCFBFhiOn0Uu2DmW4yPYSBgLhYjLx+jWMvSShCSa8NV12ny+2ECwnUBGrgxX0ZYMSBuYO+wA
DAOrAXStCZN1FZoYapHd4GnGQtAtBnRLLxpoqBTQ88ZXYyEqCiKZ1rFdwNAHVX9r32EUjSA3KtOpN+Cr
PghfIOhX96lzSPIxbGLQTZ8CeYOeYX6pgBpZB5pmMNCckj0EWI1MkPK4HpuMrgKuG56ghR3TTyiExDAG
lwedA3g5RgUi8aIBYCZDt59RlULEQ1uP7XxFbCu8oEwKqx0AuQ+rC9lPIw7T812FxXg11RfxVdgypYWn
KArABn5sUh1wBJEpiseGHkZut0yQ6wjLnf4o7qqCRRYRlinSbkLdEGif4ReFKKALE6sGIgT44oBeHZB9
cxkHgydga4AY2CMHdJ07jQ54LkXXJyXIfVInmZ18gplQKSkCZvzmir2VgOHRFSULaK2GdcMmBRWgy4gA
UpypNCuAUHxMi9OH7AJlYxIQ+JQlwPNVccaKwaZEqBmfx7jcMtobAOYQPPhY033TR+SoFV2y5l3aqp1e
RC2NjqHwCXpS61QDDRk652qGwxd1UeChTBxrgeEuT6/TKg1fkB4MW8qetAK1hadCmLqUPIQ1oEBYBtW0
AH2JpxgvAzxlSOcVsGCsGCRE55gBn8YuJhTLIWssHidYFVqghGYojlsW9wT2h07HWJcwKj9hnAvYFpYS
xwnejYK0EtLSiiEWaXGLw7BH+/RcAEiXknIR8g1mZ0wXOBYOuA5UDFlLLsYEtHjH0koFK0DLPObqaq9q
nU37YJ55Vcg6tyYqIKGVTxYFhLfSBHoXkgTWHLBEyRPjUhxdRpyEQFI+dnpQzPWqBjFqMl6pBgmZEuvS
kVAEc8eMM0IPrlBSVCwCBoMNMUA6EKFi00KFbgj6AsXJatIqo3+A0QKYS3QTeeLgBTwr86Q6lf7LoNRB
EA1mKj5b82WhT7uJuAWN9faCrCFb3HIscVsVjBAET59dWWgspLLFODFHiHuQGucKfvs2VXTkJZQ5dLAZ
OiC5g5yFxLTwoArjh1lJKxtrFfFwGRYU+sHSf0aZg+kkdEphbSm2K0TwGrJZM2pIe0lUKgVa3NCga54e
k25914UiBRURV1Vq1GSDKklgjcjhdVIUJ3dZsCWjm3I9jGnTHui9mAbCyTWxVcVjwn0HLYC2XAyH0qlk
/ZBG73MZhkIPQIn7ivGUZTGKUPOJuMSth9tgvzA2KAfoJ8Z5RPEAKVN/JStGNgeBkSkJLqiHXczEMHoA
gFs2I+cQ/NEpo5OSeHjIUyQg0CTQWZEgoQYRGlRE0NBb7MJMJrf6ocTbKVLLDnHeRbLL4s+FVPG8QO/i
CSTF4SAdmCXl1irC49jstFRmbJcWsK3pgy/5IcetoJl8vgsKwSUWhwCRswJP/GSE9ox9URx/JOepQj81
MREZDgE159LehBwAv5c9TUkdCy2BY4kBUoiLpMJYwZovnknhNS2ue/OFyBYvpXyw3kQ5OzCM+tIeIYV1
LMEU8gNwLlavRG87z3cLwjt05TEaC6xjPhbZRZ8sLSN6Vl1Zq4J4WYFiY1UFHWD3rC8MwoN0DkiX1DAL
0l4VlmPSZgdRpbytMOSnRI8jFHwKcQxZz/gWgB/03evGfjXBGOicJ5HSqoHI83xyKh1hJHvOsU28CFhH
rAOoEAJBCQ3wJEV7dK5ob4esIRaYDrQynRUqYHwh4wlzDuwbyA2uCWz37+i1wQCL/r5Ijgs+ETrPMzxm
gwvhQQogvgBcw+QDBdRV/kokYSIz4jkG+TyBDPKE/rcLp8P6SJOauIYp30pR0isSTFHSA6kJRUMqcbRW
I4hFnHAHY81vPhcJL1oItE33fK/oAhHzhiPQ3rthwVQ76dQ3Wgxxh6o69LrotnV4Pu7LeU13DswKbCHR
fcBKAxI9QWtoq7O3rB2PHrWSnEuZ7bs+/vQL53OwBPUyHfWu2ANlkcxKTIpP5S0UPInZVcFm616RpeB3
cIOHv93EHguAd8DpvcIX+ZaWL0Nx6miPJkuuZw9wuF8VZ5YpS2QCdg09fClSIpa1FyI2ofgTe0XaeJpO
G7pvg5qzQedL+YIuM+4iIp1gIiAcngNoiQLED0+dxLWbGMJCmZVv7PGTt4UG/veEdJ6it9Wt8QQISk5i
X2HQ72eUHqW90E9PQdcg/drE/0/pVE1EG3rEM6HeHUV0CChGf4pDpOUbiuyceGBFDhuTc9phw+XFGosk
MlUoIf5yH6PROD5sMKSZPyCcGxYlymqndcfSHs2papXaDMyT65HDRcMY137DCGAxwVx6bKFtMGeMVm+D
UgdK5LIRBGM/94iG7SrEGMsglUssp3Til9He99/TLcT553p8q8XAY6pGzs/1MNYI8kSHsD8h11LKEIC4
UNz8ZhM9g9+L+uEa4iM5TcnRc4O3k4g6ORMlukwFm+SMgZ+AyGMelBSxHMlWcTw4cuKV3yZaQA6WjLHH
fZQb3ifWuU9/YPz13t1tH+Xk6NHZLlog7/wd6IYHhX4k/mLgt5CxQTHQZtL336lEqpA+xdcCBAUBnwAF
gQ9g2ZS442RNekmc73wTKyy0qgl6cfFKeg1zPWWRGFwMHuaRv+UIych5aqcsgyfO1y5YCsLd3MO2Nka2
QkL5SQ2TYbQInlepeMOcTXKaERUS+qeJ04wSV9dG59PQpaNEezXhIAc6BPpFDo7zlOjakxOh2jck1vxu
QXR0XGvvc9GYgdGOX9wjmA173a9rrZ0SSyumdUmwmRwvm52CgX9gkO53YB80344+u9qLQuFyspkvCh6W
MwrTJZ5eHtw4HVV8VlEgOgxLTOAYZgBsN8EnnpzHGUbN+OH74oyiUwicRTsgzBMQbVADKhEbAKv3jUxJ
KMEIbyo5Kd5YFO0m6Eti0WkBY5gbhDviXsGBpF327NVyPS3/SWG3t8xthubBTPsIaWqMZe9q51FvsQYc
iy582DNxTY5wu3eIFBVHnKPkhOUbgXE8hlUe5dIAdLGLtZXzlpZesQ6cnXQGuwQmsZz8G/Foe9vovnYY
wRvUvH+fL+d6mAPAcVLgyWm6odmcGolHoJPyn//qlDiEfCmF8RMDHzDSlSPcytNZ7X1JcOHwWCPnQMql
PJHBJsNE4GGYnDVjlQBTisAu0Gg7rCUGgxlSVI6Ee0X7tLT8HVI5USCbWKIDtuJBRlfHRCeJrF6u1fmT
k5Md7ymk5Ag5xzWfi46mxiGSrAoEpEzmMVWuZ0DCDsQGjuUsExoKYIWWYELXWiLYHpsHzRSqgZ5+hj8b
yo1cjxxNm245H5YDYacsvXVYhm9p+TR0HAmT2AM7td9vk0XEOyAHt4vGl7NBp01oabPIHOZI5Ho6xOX6
pUi5NhFPFdIVCIN0y3hGp0PY0ZHgCCPWQasW64/o248ZG5dzHGskSM9twvzQX7v2VbfKkSpzJvyQRjsQ
IwM5jJxrrJOjb6flD+TBHgaH/QGfez0t8m1LQZUZNxRzk0qMtAVPlmDRVmWOJq7i3xIxM7YyN1U/N9qY
Hlp5eboxf2D1lzMry9frB2bweTb5sj52amXxwcrc0Mrcz9nwg2xirjF9vXFypDm9kF2ezCZmVhZv1y8d
z8av188/Wz3/BM1WFhZWFu5mpw80R3/Ons+uvDiwMvdT/ertxqWj2fPbKy8vNQ+caTxerD+6Xr90pPHy
VOOXi/UjQ/i9OXMY3fK9y4c4pF+uNc7cq489X71zbvX6Uz44NFwfR8uZ1fPTqzcuNCbnsuHHK3NHmy9f
1k9eajy5sfJyGY80X2JUz7JL9xoLyytzi2jZfHq4fu5i8+7I6o1T2eSV7Nbx+uN72cgxvn3xUv3Ms+b5
iWxkOJuer5+41zx+Mps7mF1aqD8bwzo07i9gXtnEqWzu0Mri0Mr8WHb7ZTZxtHHmav3JYja51Dgyym9n
z2Z3DtavXKofOVrHs+cerp5frF8awi/1c/PZi4ns2PmVhQf1iZMrS5Mc9sKJ+uST7NZPzeWLWDQsSGPx
auPq7dUDp+tzc/WxiWx+OTs1ng0/W1k8h/6b1+9l00ey4XuNB7IdL37KTl1oLk82rx9rHJzPRhcbR8bq
lw81zjzNpk6uzJ1rnD3WnF5qTl/Pho83n8zXz15sHnyUjV/Lhm9z2OP30C12Njs7gp3Kjv+UTd9onHiI
RVuZG68/fY65rLw8mz1/1FicaODZe0PNmTuNxZHGraXs2ELj4mL28mz90gPs3eqloeadAyuLz+vXXtTP
zNSPHQDZrF4cXj29VD9xG79n08+yxQUMpg4CmDi6emG4ObNYf3w2Wzq68vJ44+U0XlF/emJ16Ej96H2s
Rv3a8+zl6ezI8WxspDG7WD/xI+aYTV5bmQNd3apfOI1VzU6eWL36eGUeMz3ePPRydQjLOIpmoLTG3VMg
ElAmPsdLs1uj2ckxEE926y5GgvFj6RrXzjTuP1uZO432WNLVQ/dWr883Jqfx9tXRY83lC/ULM9mLoezu
0fqh4WzkKVa1efgUaJJ0dfpA48ixbG46G7+PT7Jj50hdCyfZ/9Qd/H9l/lp26WF2eaj+dKJ5d6w+fhYN
QPmNe0exUPXZg/WhE6Ai8Es2dDEbv4pxgkrxFQaAWaNxc3omu3oCRAjKwUJxT1/O1o9ONg9cyG4+rF84
sbK4yN05cDtbeF4/+7B+fLqxdILcOvuy+fLOyuLRxuLxlZcjmAVX7OkB0CpYElwGbuVcZi7XLyw1bi2Q
kBYms+NnsRFgW1AU1rx+5STHP7lUPz8MUsTIs+HnmBc6AZVmY+fBNdjHbO4cKC2bGWlcOwC2It2euJuN
PeOzxxayqwsgD6wtRoX2IKrV0eOcI6h34Vh27lL9wQ1QL6gRXWGRyQULk82hQ82Zs6B2kuLV+eb0FAZM
gjyznC1cqo9huxcaJ2ayG4dW71ysz81kJ49xGe/NghLw1OoQRM1QNv0T927iFDf99IH6tdFsdERed6J5
92Y28hgjxMKKTDuK/rOJ8eaTm1jS+tg5SBgwAmTOyuJNcFzj7gwWJLsNbl3AOnOmZ4ayM9PZKIbxsHFn
ERImWzgDmYNlQXtQI4bUeHGuuQTBchXcB7nXnLlBKsXWXwL/PqZwuHI4WxoD79d/nKqfWWosHm4sjmKO
jalzjckn4BqQRDY+Wb98G3RVv3hw9dxpCs+xh41DU6vn76GT1TPToF6s8+rlK9ncXPPobHNmqnFxKVu4
k80dq1+aJD3cflyfOdNcOtTgGEaadw9zZciJ0yT48/fqh0GfBxqPlrKX9+vnIcYpnVZ/uUBpcw+Ca371
8g3s4+roqezWYch8iJfViydBipB4q6efgd3IKZjU2MjKwi+NI/fJGosTzZO3688hYa5xhNPPsLONu8dB
ciKHn2NSZLrx69Qmp8ab0w8hSah9Fo82n9xbHZ1onHlOUnw5m50+nr04SxUwfhstMWbuxfIvq0NXsx/v
YVW59Q9/giTHRBpnHjdnSKX1a9exI82Z29mJkWziUTbxM7iguXwGYr/5ZGpl/mF28njj7kMRJiOgKDLg
zBPyFMTywpls6r7Iz9PUL/eOZgsToJPm2IP6pUPZ6evsjZv4LJs+tLJ8uT5+qzkEmXNmZXE8u3W/8fP5
bOImRGt96EBj/Bn/fWQ+G/ulOX0Lr8uWh1evL0LmQyNkDyf40rFT2RCplN/+/CP0b3ZsuH70werBm5AP
eC8lIeTnyDDF0UlMbZ6cDv69O4KZrl68Acak3lwexVAbZ2ahU0iokJyjC7LOx/FVfeompDomWL9wtX52
eGXhKOiH+vfaKOZI+T9+vbl0GpyIN4L8sOON60PQFxRlCyNkmcWFxhTo+TS0GxXQyUOQtyQqKJexH7OZ
eby3eQT8PkONPHKM/AtZcelq46fDfPaXo42pI42FuxDm2RWIponVn49l01fI42PPMH0MFVAB42lMLQm/
H81OXM3GJuvnr1FNQAMCEgwdJa4Ad4+N1o+NZsfPkwvOT61OjmSTN0QnCnNBrU9eq0/dagzfBZXWn89m
lx5jjiQ56NPnV4TOr4LIMR7okeYy5vUCCoLMTnl4GpwreoS6hmpl5jBUW/PukWzpPDnl+Amqs4WpbPoY
iKd++Cq/mj7SvDmMBuDQ1YPT1BEQgwt3Vm9eJQq6+LJx+Fnz5QOilPHb7G36IZEMZPt1vPcYGJ+79vAU
xchpSLBLzdvL4ERs4urwj9nCeTwOfbeyeKH+YAkSAOqeUgu7PH2MApbI5Bw0HTTp6o2RbOYFURbme2wR
FAK5wf8vTmTDc1zVyWvZ/ONsAlxwGFyZ3bgCPq1fPgl0RLK8cWVl/ije1TxATVo/O4YdJ23PPwEwg7Ij
xYIgwbYzR4A3oLZWlqfrZ+aziYMrcyfqR05nxx+CQyGNKeVuPGzePUhwMnWBYOzRUuP2leaJ57JQ9zHZ
xuLdxuLUystrwCGU/9CJ964DKUGUEW9ABt66ujo53Lx4on4a6uzS6s0TwBjkx6fPoeVJny9PA9U0rk4R
sl6+jpWvP1psnDvfXD5JhLNwF7OAuofEw7I0x4Bgx0CZxJ+TV4EQyFZnJ1aBoEjbh/EKoseHhyi0H48S
MQLBjt9rPrkKBZGNgE/R1TLAJ6i3fu4l4c3E+eb0PSwOeRYIeeL46p0xoqwXCxS/Q3ebxw5lYHkg5KMX
V16cWj3/COsJIqSWuXS8eXeIgn3iIB4Bs0BIkgexv8uXmzPAUUsr83fA4NyIp0ehGRt3idzA4FwcKLLp
n5oHrzduU+/Uz00BiQFdUAdhhcevgHewm8Cuq6OjnNfJ21BeRCPYu8lpstvYLDRv/dRhootLR6h/b402
b74kqoEgvbSApYPWy6bOg7yx0ZCfFPIjYNhTRE2Xb5AjgB4pD69AsLC3h09AYKBe4aZxYJjmwxv4f/3i
NLiJUmUOZDO+8uIapcHYL/WpY/XJR/Wjt0WPTBI2Dx8nB038TI15/hkV8ePR5r3x5tIS+Aucwh2cvkEY
OXQAvQF4410wGWiVPHkC6d149gi4lMgfGmr0Z7APmB3vgpYB1AG5rl6+z/1aoIalHAbdvoACugn9no1d
W714i4s/NtccP4iFAm7BjtQfXK+fnYPKzh6eoiYd+xE4DZqxfkRGBX48eYIIcPievPcpZMvKy8dQOo2p
M1ANRBrLl1d/ugShhxfVbw6BxrAX2DvoAkyz/uhHbjRk9dxc48xPzdHHHM/JEWJCID3oSkCaW4DEz/DS
5pXj2fxc484EMT9Q1ssbVGSjI8C6lCeArLBxxh7Why7XD4EIT1CPHJ8AF0ATYWrEz7dfgjtowhw7AlFJ
UoQEm4e5dIkE9uIX0Ay2m8bLEUiPwyBFbHf98jJoFSANIguMRnPpwmnMjpBvHJwySRENm+L4KBacanrh
DvfryH3y1NknAKIY3urQNUpO0tj51av3IU+aT+bYDyaIrZycWz1/idIY2uHlLDUdrCrIc+CZ6XmuMJZr
XKyky9chD2kqAj1Oc2tA8AJynmWzw2AcSM7m8hUwKRRQdhx24hIepGnw/G52+zZEBK0YaD0YsJdvW5MW
NAzaI81AmULpQNqPX+Hig6nvjEGjYYPAX6tnLmKjOYWTY8B7EOnZ0AsQGCc7eapx+Sb0MkQTrbCFn6Ge
Vi9QnVGiHlmuHx2GmF09uywct0AUAYsJWhi2yeITcBmEc31+KXt+J5t4DO5eWXwJEoKmAIvBqoL2h6yj
UQbaOHM1OwXz6ia4CfCVNjjo5wWoYr555BFIDvPCvtNUBDdBYsDAPwz6OU5RP3yX2wdNCsG4fJJkA6G0
fL75+CYx2zMA8tHs0lVC5acX67NXYdlRAZ24R+gLow/jvzxFfXrkLq0zkOXQNUgbgha0mV8WW3KhPjHR
XH6YTVyAlUSWX7xKfj8ivHDxfnNmiRDrGCU2cSMsOLz0xCJ10JHjsMppHcw/ARXVLx/E2EADK3MvQb1U
3xeh3Ubql37mHCFvaaTAzr0JCUMsdGQsu3y+ufALdgHzzRZGMGzgdhKe8Avt8UtXm7Py+SHYApcIdw9O
N6ZnAS1op88ehBLMJs5BllIbwlCdnMPKg7WJisdGVn+8CrsGfzauTxNXQ1YvHaVldHkIVkP9CiyFi80Z
IKJpoqDpy80nlyFRCVpunsDc6yfEWoeFNfNjNn0NPAKxQ7h1/2zzl3ONc0v4CoYJJQNGAsH7y0Vq0sPL
jV9u12cmRKRMZbcsR4/gE2qfW/frT26DrYgkJx42DtwERQGjYsr0n8z9DH2UTV+gOwImA5D/5BzV9NiF
xtnbhL54aglm3RiNo6VlAunJKVAg7dCx5Wz2aP3aBMURjESsNshm9Enj5wOkqAOnBYg+EHfKaTBF/fpN
Uuz4YwiTbOJOdusc+Xf4EPA8TQAChgvAbNnkpGjn682fgdJPrP50snH3ANaKy3X3MFRn/dlY88l8NjwL
LsuWLwA40UkFI3TuDvf95HFMtnHxBX0jL4ZgSVGNUrOfF01BSoPEgE1By1EsOPyO3mCtiIl6FTqagJ9o
kz4oohQggctXoaqw1+ACyrFh+iiwOFRGLy407g5hGQH8sCYQoasHxutjj0hFEzfp21m4lT2cJepYvgzz
XCwIMPJBvJqyhZiKLrJsdpYkB3V5+Cq4tT49Toq6fqV+8lL28Gg2C2V6ggba2PPmkxu0lW4+XL0K2EZ3
ED4hnLv8E+XG/COYRZgdRRww1eQ4LeiLp/DJKvj92DCkuvjQntESfDpJCAdD4OikCJxjGAxl2oWZxqUX
jcvYC0CUJ9k9KIhJIkmsz/Ff6Dp4caF+6BrIMrs5SmE4PNs8MkMn2PAwXTQP7mDHVy8CJz/DXIhegEAm
ZmCT4nXQkvQ8wHKBdUkbZIkegxsv0M/Ki/MAvfXzE/SDwVrEpmDjsNFT6HAGlLM6dJAC9sRV7DVAF8Ug
Ojk3CloCtG4sLkPKNe4RBTUWx7BiNDqO3IcdRx/LyUuNowCBk9jxlbnbFHoP55rLl7KRi5zypSOwZBu/
YJ2PwH5pzl4HmWGhOPLbLxuLl/FhdvwADdvlQ83lSUwKhgD0EZ1OLy5k48tsicE/uNl8OpHNw0I5Q2cm
cAKY6+Qp0Q4PKaiBu6aXgBUhc/iWp4eBYMk1156s/jTRuDxE6XTrLp2BF2bqM2dJIRcXKKuPnSOXTR8j
42Czrp6A8KT5A/ELpX/kNORt48wN+jfuHBQP1T1af8uXG4BYk9caT65RPgBbAnsfvEdcNLlEb+ThSVE9
4JGbUFsCmWjjU4NPH6mf+LEO4Dd7ZHX0mEi5SZhvNGzvL6zeOQfwTIvj3OHV+7NE13NH0YbrMALrnvwC
M3xl/sjqhcfZ8BHsPv1RLw6uLExnIwAGRxsn7lPHLd3CvhNDPjwFpQw6oT1+b5Zae/g5um2cWQRoIXp5
TKMV6p5YFED60EvQNh131x9QR8OyuHS0Pjdcv/1T/eSVxoNT9BJfO7C6SFQGyiHZz15tHp3AdhOdzi02
pq+vXnhWn37avLeYjYw3lhebM6cghME42YGfiIhevFiZP0Gjb3qGW/b8duPoUH346Mo8AOdc48QMmfoq
xNEi13z5KdHIFTp7geK4krCUjy1jOm7KMA4dDviM6/Ni35MQydgPfdePEl9XqlE1ir9NtZsyUIUnnl4k
AbOhBGwa1juIlQTOhmFUKcRa4mfDqo6ZhKUYvyohpcb1U095cs4eqTREn9KP8eQTiZqPq7HGe40uvVoI
JY7UDESM5ZDAUsN0klCVVYG5yyU5SGNIrpHQQg6b0Sjfpn7VBj4aia01KiiloXKjONaRTe5kSK8fqzj2
C4w+RG9lGbnmATgPMjhOVSn4axGJjDtlqLlhoN+rqVArxu242gbhSuyohOYWFENwY4mFxXhSxulJbE9U
YcBmMMBoQH6O+coqGQnANRKkG0pVACWRvIbnUIxm5im7p5nPHRV5xiaRnkbiYSJmTvhKgjM5R6yYG1Wq
NnNbG4n24a7FeIEv4Zk8v7WRkLHEfxqP8TeYY+z6qhp5GASztZPI8zlQ/F4IJKiYUQKYa8D6HX7kxr7x
sZvMQ8JOpewBv+siKQSrEmNlJb1KawZGRRJALRHKnpIeVFTk6mEF0FS38eCcK6OMnJUbiVWLGLNk+2c0
KFYqkrhBI1HXBpP1GWXLnBEJozax2v/qMd5Z8DnTlDFuUaC9KNEh9heTfbVgJDqP0bJ+qBjXhPFyZZTL
sKbIfXXd8/dL3Cdj//CUZHsp7v5+UrgfRNhFjpkkH7+6v8/HO149rur9pCpPDbya8nSkB3h2WVXMAq5o
hpAzlJVpQEyXKL667vqBqwp4SCKCJXzVQ594OupTVcxCgmFNQShEIqeNhNHGEi0cFmW1sdfccYb6GknX
5Uwx94IfFFREjgDhkCsNY5iUxDd60esnrxd/nfh1VLLkF14/xM8cs95/PS6fPPr1gOTKP8bvy78O4fOD
0ubpr0fwc0jy6n+ST2bx23PJqV+0mfavf5RnlyULf4q9SY8vfh3Fpy+YrY+/F/lvZvHj2SXJ6n+M1mvf
vz7Dsb2+yvfyO/QnGfySYf/i9YL091j6f8TeZWwvXl9/fe/1Sfz3IZ69a2chzz6Sb/Ekxn1DxvxEPuNb
X8h8Zdb49kf5BG/5dVhmzb5ZY4Atn+Cfl+j5R/vGtbEx1//H30eIZw+s9cA2Q+hx9t8VA+bwxEtZ0yvy
D9d6RN7+UNrYOgasLLAklQOW0DPHaesXLP16AL09+e3W2d9uj/52a/6322Py+9Bvt+bkk7O/3VqST47+
duvMb7ce/nbrZ/n3Pfl2Qhrg/8u/3ZqSp0b5ID9Bm1vy1Lz8e0QenJc2M/yF/15iGza+jd/7FHlaWl7i
//nU8G+3Hvx26478fv63W2Py1ZL8PiGdTMsb7/126+lanxzV7d//jXddkJFc+r2fIXmd9MPfn0rLe/LJ
vd/7RPsjMovp31dgWlpiDI/kkznpbVqeuiOfnJanRuTDB9JgSj55IN3+xAf51T1pc17Wdkh6G3oz//bw
2yNvbvPfb0ffPHxz982NN9NvZt/Mv5nBP3d//xw/T6Wuw8Lb8TezUslhhPUZ0J41GEbQfvbNM7Q7/PbQ
21H8fRefjr0dfntQ6jzMSyWHu/I5W7Biw8/o+SCrO6DfqTf30RPe+/YAPnuO3u7h7bPS8jZHhd+G0eIu
Ws5wtFJbYlwqScy/eYZvx98ewO9Tb36Rt3Jso+j3Jt/45sHaTEbx+2PWosB4Rt7MyJgey7tmMTvOlFUl
HrKWBFrelNoUw+jRjvhnmQlGgKdYo+IpnnqCnyl8MibVKlgN466Mlk/wPbOc1+/PYoQ30fcY5nkXT99c
+3yEb5OxcCZj+Ocgx4uWI2+mudry28/S5zDeePfNdZnduLRh66fcG1mf2bcHWR2Dq8Q1ln2ZkXHclPZY
Z+zdz1xdPDGCzx6gj2EZw8/ckzcP8Nt9rNIIWo7jrcNoz1ksvHmET0Ywh8fccRnPYanSwRW2ozuI9bkn
877LFUZPN4VGWLXjOvdExjG8tneHWNED35LmfsY3HNW9f6/6Y1mZQ/KueaGKGYwP45K3ch3mpbdR6X+U
MwfdzL55zjFIbJjkBjFGkrGnaZCUGeQaFG0EtsA6BjylVYlGlDAlj5U1pLqDRKoVlSn7UdhlY+wl5CSu
Ae5ITq9E0zNdn7rbZgKYOA1DyX6O+DirETCSV2KTmV3DPM5BHUjRReAzN9BpKKUXQs2s9n6iGxXWvBrU
qk3LNxLQN6DcGvpktHmvnRHL0aBTz5fciFhLdnIs88UbCiw/UfalaITNAzBr4cp8C8Nddcx4V0bIsPhA
mZHRgY27zytPch6lsof2BrVEOwu2dJlU7aUuy9zwL4AZhnwync1VoU2e8Ewq0xXQzNwit8y0hTSWOhbM
MmHBkQLARU2ilKV0p2K+pxRui5mYgO8qimnu2oYlGlkCAoKQWAGDKDHODyBHJzWbjyFrzVQyicn3EkCf
EtMUGGlrGJbJeLhAcncJ1kJCd4Yo1wjiMVymjDPMSYK+mFJXldSEgLFMNpdkYx86wyN4u2wn666hb/ul
3sfgWbOWW1FgvKard3GmprzD0llSjhlytUfCpR1gRFv2gaHxiRqQ6DsaCJi7pBuVdC9IgZXuiGfjmqdd
RjYxWZXJI77h/rHuB5aYxRP8hHU2GbxYkoS6gPTBlAEtLY0NdJL6GKxRIfmuLN4IeG2zHIxNyjA2PptF
u7hmJDDsAGOAfckOIWl4fonIvOq7XJ5ttuZKhcYGV14x6DewO23TZKxFpAIQLinSZk+027B4I3GdAI1a
4sYYKcv5pSZxCtpmdpi/WWpNmWwQ1DSTzjzmSDBgjQH+wmMDfgRIiYXE5xylJB0IzXe1p0HPuhYGvbKo
QCB1SSSezw8ZwcfQTabylbSyU2EBNIB6icDXXlXSDMLUvn+nnburJK3775bVGEmbMikHbOSCysEj2tvG
8iFMyaB9A9IocascG+dmg3oZx0dq2JYy6ywp6UTmLqkthkPBX3vsFrtK+NcmyDDPQJJdiOpdzfwBbrCs
tSHVwTLp3iRv+sQKAafbCfWgs8Pug01t8npJISr4wsoeyhBfSjiQScDX5IcdzG4rST2iAgsyMmTTFLTk
kkgsuPZ26jQxTOkJSfMSvx/bOjssJpMM6rXk/qBm7PxAUpx0r2VfyJcqyXNf2S/4CRN+32lr22GFh9TA
YUL1APchSiUKdC3vZS05ZoMVWtWUNqAWOd2dsyH3DgPOpTCHUMinYktyT0AFzCICm9VsYotp28Sagi2S
iBBXdlhhxeK0oc0KIoFVmVpTYoEUhklawSkx/Nr7mNQfQgozC8hjaG1c6fFhuaSeHixrS1LMBPF67Y65
KmGg/jarA2xOkS3wBG4IfT4v0kbXmOeCld/B7MBSVGbJEVX72HI4M4ZAtButCBKSAilq1qUukRkHSLuG
gYmSewXCpwAKavmWFiYL4LUOiMwD7YADtkMyYHN3UOpCSWKJHZab9NFKfxpLLeqcIxnYNo3D0L71pSgz
sxU+syK9nErCox86bAVJoPzY7MAKMp2ZGYYqKMQ2PNuXPKtAWpe2sg5vd85mTzhrSUqM9MeagZkrfsos
kH7MdluFZUjVLk9y4/9l5/651dpMS3GSSCI7u3NUpoHex6hpUkEimQcFRs4OaKn4peM2m35n0+kMazLg
cZb3xdx3gxmK0T4qNwYmQ1fRaBZhBZW1z6+klbIVcpArvhfUIJ8rUoUUVAIFj3Gy7LfEexupbYWpYATa
5lanrPYaKpPUQJ54q9NrcUjMDMVUU5ZEldpXFlZgzUQ3UiZTwKFnvE8JeeftEmyzqGSXR43sGF0iF38V
QZQnjk3nMHuU61vRzNyAtOoMSvkihrtuHdQOy35vEy25lqVhvrHZeiy5hEkrVwQEKyhj36Xohva2OhLK
m1gwVKDWNUkBO1H0E8ZFY4C9VsCzMinWDBIYHZpKJPKFdfLwH984LGjOucdGi6cEW8H61N05UXUgaFYW
GmDMP1MRuA9SubSiuaL78P6KzQeOtU0M2qrFreZhkRzWBWJ4tgIPi0oeVDUuubMtZR6rzTIzOyz4slll
RorAQY+zaJqR1BAMQipgrGupsqY1NHosqZEu641XE8FuDCSOJVnNBm3bNE4WAmOKnLN+PRkPAoRzhzIN
JIcVwhwyxKp5C7C0AlmCKZlWLeKCyWqmNS9JPpJx7K7lIUGTiGvH+sI8G9Tv2BycWIquMU6ftYr0Lgny
hzAWbb+WZLnDQj9ffGZBCFlO6JDKNn5jUyKY0kE6Y0B0rodCPCAslM6oCPBdGyBn/1oamfb+mrI8MvVR
VSrEQQtXzN4yVJxxKtF+ohtuoy9lWZjWqC0zQ8BT3G0VitpYZvkt7X0Z1CoAGt9YIWkTWY0Up8LEAKlC
313LorTpjIzPB1IUH24iwkN2xObHSpGxoFayibBSIgv0Z4vUUPGxG6sULeXnWZWi7FdZsMdnaq2ILsnO
IUxhQSIvTWSrmB3KbEQLGRP5viS8FjAZgTmE2y2eB/rle39wpDDPHgsnoSIprViyHiS2G4QBQW/TE41k
0mlvF3mHGqdIbc9UXAAe3lcAadOrZS5tdpV2WyjNPLKoyCImLB8kpYuorkPmXLJc1oaO1naWku6T6toU
F9aM6E10taxDJhDo0IkKYlRIeaZ1LZ9L5pnDFcNQc44UvbEpywZ6ZTeIvKXlc7CRY3OzjMTyYx+s1Cv6
AslYJANDo8NUyhsy6wIWiqwSCya5PowRgHRj+iwtfaxZLMDZziI5acWWJupJBn1BZhETM2qs7s7ycwq4
PNaOTaNgDRnaY+WYTkQyLdlRcrIEXEKUsmrxuhZnhzXuQOvgSZb0Nxgg3+4oI2/3wT6SWthFtujpYuV7
AAlBDutabL6esWPRdkG2EsyiF9ci4002/UDKi7U4xu5YwdbMsgmnzqCWtLyODluvDfQOIgQMpQSTyh8Q
nj5VuFPwea1CjddbOCxq6nADWRwdf70bK6iETl7XwMrbrLwWljZY4t2JfwFVMXmP9OkzNYSlgPiGbVaU
/A2wDPbnAIiRX6YUMsZlCUIViGp1uv9uhYdUCYOIdUSd2mQVr0tJYi8TkbCYzjbI39gXHVfWO383VxMo
Eo/pLgOcEdOWOwuKgsWwMDdHBglIoxgiA2tKHe4o2pS0PoFH2dlfmZIIyCGZJpLwRjVh0zRsGoizW3Jd
HKIZsm+tSnKT0ocubcWKL3URQ8cvWqMpsQlhHgkIr223UqBgs23axG7ZyoqcYvczLTsv+VO5HowMb01g
gwRarD3SvOT84Dsscuonu+WyAY95T+QL6gFlpD5ergez5DrbNFkASN4Y0MNrMZyC3DKCTVWOSK0KDdS4
1i6ZU/mihQAe9gTqjMVpoNlci9ml5IHYMrS+/ES0fZiKSPqr1FB3RFSahNAPfxal+CRlAbiSZb1Ye9MK
FGewHHG4JNKURTSkMIUByMd4ZelYMlPy3W1Ct+mVmgUOy/hzN6MKt5NICURF/YcX2aTFrkKNm+l8YSHq
HuvssCmvLKdJ9mDiEnR5L9gD/UlNt6C2h5oJEjJyeIJFyyallUyj1NgqCcwZpnYykpVseIUKlon1hGhl
KclrosUOoWOTCDe02UQsMSNyPbR6Er/aa01nW+nA7E3jfgxCCqfqOC8lNDcILmhpKVgalNJ1vIaDeZpr
lR+6v2JdjNiTbPKgVuU9KL6Yxf7vKUQtkuq09Y9pIAwkh2ZGLlIQCQZTwJXy8AIdtJuu+UOMFFPFxHZa
J5dd1patjlQClLpvPMZKIRwqYlBhq+iewvj2SXU7SW9d12KrHOT/sq8SOANyr43YaqwAxzoC3CTeqYA2
Gvi4ra2nNQ+OjTfYjD3Dy1XwAOtA4X9iVu/Xf2MaKAhF0kRB47HbnWvfY31IHrPL6UkSzJdYILhHSmk4
vLXG8cO/snJbWd5MgGlttS7JRu9RjsBg3tsQrpcrReKNzi7r4SnCtiMqI8NE8ScpzaHaNj+2NQ5kKiAb
Wi6fS5mVwOb6mT1rjqWNQFWe49i8wTX3D0vUSiZ9ESzdYktgmI/lJh1nm7Vz+GxFiZ6zlTEAEGsscSc6
QEQz2xtKLyBe37B2HCxz1smPmIQGHJzEO2y1ks9TA2Ri/m7NKxhUFcGm4r2jtsZ6fip5ohuldmZQa6ed
+40Cy8idAlKLYMO2VMoskkVBbta7tfHTUDgOkJg79ol2eEmPTQU32+Qwttbyhz+w4thOGJUaQsjaapIM
l+thajdYRnDPfr0Ndl9ZVTbY0hHfWQaqptJ1q6ixDTbrsWXntr3b/un8J3EicIXYRTQqEoxeEtfphWN1
xZrzjdT7Wy9iBrJMUjmNX9xA2PBpIsN9l5fQdDq5HqlDyxtuQC9fWh+ntkCXV+KI7GHuZlgS9ONEoZT7
FVhRrLmUfOQq65dKoPMHQ1rVrPkZDpA8hVHDEjcM3/EKEJBwzoFF3J3zmLIdVe0bEsyBFGAzZA2Mf46C
1SnBzSpwaby3doqksMmCChiCcn5A1L/4DqFet1nvK2vz6jRW1ockR9pglSAgJhpcm5ioGSPOv2JNBJFU
Xyn6ZG0M2k12WqxIkxXL0yJ76tiCK5KPiV4+k5IHznZq2KhIbSjuxZAXx1ANglL66aTsTyQ5eb1NjMw5
tpRN96CVptTyX/mlzhaZH8thcIbbsFEbHTdOpX4N6xrkeujHRL9ScNOwmB2NbBoG6e+GprFZwQ7YkC4K
wYrdTss6KXqZRFJk4Ctrse+xfuHdFmvsoaOApXmkdMXf/JiktVaQYYd1a+2xaNTmwndWCRVY60LR5fmZ
WKuOrWNitoUATGHN6nfnK+va2WWtcmt+GNdSOTYdlGKhGB0oYvW02UI0X1g8KLmgAJm/V4dQLCdkS3IY
3rJEcCLFgoxIvkKN+lbqdsf96BP0CYKsAXzSFcjv0Lmy8owXRmHjWlp6oSid9VIFeb2tumH6dY0Fw0X3
BwFT1NFSKta2dtI7qQcdW63HkVrZEKaxwwRmKaXQuTbaTvG9Qh9JnrexCbAOvRE6KPZar8puLUnbA6KE
tdRDMmV6YKGWEvqXgGRdqZlAde6wShS1p9mZ9lMq2jJBG8Ug9pNBK/J4CxE2QDmSYpzbmisnSZVvBifa
qhMtUnYoqNlaNLFrDQcyOnsXXBf22uME+jvxooDlnJNa0doWFPIANdraVSalo0n3ihXplC1dfyUlTkKp
H2CSbQHdKUqUjXg9aF4J9s315AWGel4kOKtoF4T1V9GG/hCVlHdajbfDuo5tzRvTapUNhrAG03gjHFGC
FV30yX1qDc2iX0w0L8FxeBlbXkp35uVagtAr2nLysNVYSgg8FUi+dgny2+12PsfL82JkQ/pZZFy1BUCU
I3WtWX8NS8AK9hQC4v9yCmK2xLzZzKH1TDXvsFaCw+AWwfqxVCVZK3LECgqJaKdE6gEHUeoVY7pa0Nnn
4qzYxMMu+ntgQULpbbfuYaL+SB5giNGA5VupEA/wLDXsPF6zApFhazo4UmhEe59Zv/cnUhDKkRufarw4
CH/VxNsEaSoFMyRqiBCDlehzPUZGUOJVP6DB7ZKV3cqqddjs2NZe+hjKmGdn2AAHmiZl7TXP1iMwLA7s
gFisS49lNrnF1I1YCSV2jqVIKQCAR6G5vMhNZSHLrK0vxfRZmaaYWg+UY4te9OxmuTdTo7YXONWHzfS+
tsceHK64FCIe8tgzRUecAa5OBVw4n1t72ubzt2gaE2FS0OJbgyzYwfpo/j4SEbV9xXf/2CH/I+HF9Et5
gKaOLTTmiLYFYgGxyAoCmzrdUl+Y50Cs2mH2WFDKewyIIxN5bzEV5/SA3LlUsrWYoAPExmdsFCxZqeKt
1+q8GPKYppdONIq40VzyB6tw2NJnbbwlhv4CFZJZbGY9ltIhGmvNQ2tuaBWnUWunFA62jEetbaUNT1Op
jmKfdflsySPD8qv4sZ5Z8LpDYbdD0Lax1aec7akYmms1jPZaqwDsK/Rd1axaUYo8VqXbq0qkz23CVFup
tiBYvpIKLaB0hmDJDZQQSLb0wbufsSBQEA5qhyyxw57H/TWFVDcVa6/QtUJdJScTDiS+4Vgg4mjASdXw
9RuF+GBNRWwdtIiGZDla1iehtUGrcA0mQFUQhtryVrZqmNnOGg+x1P/hATj5HqLZ0iAvz3RYfj6G3o53
WzdTH0+vYX2KLs/nrXlMaBKy3I3Dq1NsaSLWwwHfh/KfxMYk5hw5vokd1gimBMXrwkhuKBOqgwypVUCB
YhDwdgsdd9iyEIQHQL8Wj+fa/9PpeuefO8RIc7ojcY44tF3BR3K1m+dY9EuzxfxbvRjHGhcQhnhgUA4H
XWOrn/HaSpZO4Y2QFICYP5duzUcq0s1xbKm4H8Rrt8EWEiyz2Foh2jdoVZ2dmMdabfvBY44XwTSJrXM8
74iCHhzM57CfBTGIS1LxPdrKdcNa5x1xnFl3kfn+++9+6Bz0BQJERVML7fLwnNRITVJNDyeJnVVX9sYq
FUHqGFvAzhoqXWCnXkClbdYLbs3cvLUGkx3WGhSCzDl/9wOAj4pJYcUWeOdYit0q+FJbNy9XAmywxRAd
W3fQSJ2YqBiyJpoKdtiTbNayC5TcVYAFkdsAglqbdfG02SKLXe2B39PSknfEvQjGIxVD/NLRv2vNJy51
vpwBX4mtVmW1ygCkR89enAaCnmNxxrmWGwkKWK8vDSgIy2T6qN9WT9zYbYlow1rhNPGzAgFLkXfWasby
fS6VS5z/4j2rXm2tGhSL97Mz8aV72+WKVyPV+7vaCeqIbWw9RwJ4SOGyXyHV0IwoYBvFjsuzzj9Lg8Pe
5LWOnFYSmby959ET50OVxdKSmqWvrb4QdO0ze9KrHGGFT3RcEB6N/X5Qsq2HmF8r9yjF/9aOvqu8BBLs
JJ602LHy06GPEyYd0AXveKRTFEwSW0wkZ+OOw1OPCu8u9WORtNBxfvJfFvkDC0ehH9l6jc5aecA1PWFL
EtI1Sm9orpUXqW0QZ0DAw21KFFtVbW3QG/fYqAEsI+8YdOgT7845Vp/5oTgDuuwxhq1s87eerv/dDpFI
FxBPpC1YNyzIGgPeihKWO1aUeafbWY+/6Q6Va2vjBCtha8Fs3RarApAcpTDm7lp3EauLcbZyCthmKwZu
BClRb7D6Mr6jygSr7Qi4ciFLqdEZVxJ9a523UhWfYmbtLNJqPEydtbh3WAvTFq8yPdZslZWg1w/YsxDY
knqORFZgKmIV5Ktma875i2NvjklATjzqYsl2bKqtt2ikyD5GxjtE6MbwSDeEFYIS0Hl3jorInkkxzmO7
KsCeCe352JqYEXcDz2ATOYLbZgS+2kp0htznx2Rd+glpdoN+PmHF4SjcvOa5dF2iC1sk1GE5fh6dWpjW
KrfobahSmqF765MFm/01DWpYxj85OSJcHnDS7Qq0RqcT6FEsYbr6HLntdP2f1kMdWkTs2BpqVDYcjq2z
Z3i5MneFZ95qrRCo02VJimBLDiHZcgNLtoERSC4wMcC0vBI678i5mlxgIiU68Xut3fJvoSTIB4qBG/6p
vfNCLhsB9LPwYHN1n7Oluq9PbjPJy61IjrIVVPMwVIhYLD23dYtPrpP0SdUkBWPztk9HVKTTbWu3bqSt
w5vpbGFAW2CKTjIGIPE6TEcZW7PUkwKCsa3N3+JQCUdSZZWIumjphfoxpMfXoduDS051Zc8PBy2sGCyL
F5ZnXeDiQtzD+z6tL8exJ8TdoqSAIFLa9to34j9TskXONq/ix+Lu3ae9Tlv91vncxijtIV1vdChJYj8i
luIRYiwKFvzO0ondObn2hIWg7GEw0a+SmYiQFfQrwlhuPXCwWBUif96L5bCmGXgyTQzkkinW0G1RiggC
v0D2RGKk2UJpRogvpMMM7F8hbOLBii8g0fPFqb2bh7MwXsUzt8EWz6Q/sopubJyHQ2KgUqA1wSNXnjsb
dy3MgMWsfi8m10ZDDVsFKxm6uWZrT5p2q0Z3xBEGrBxb75FXMHBiiZiDIiCwD1o0Xet3jB2DjBOAFVhT
j5dVQaPtlv/lLE/n5IoH5TDJI6oZIimHd8XwEo3QHgbHFSvB0oJcwRBriWUjFANFWpjWI8GPmJiWG3a/
sEcGfmjLAUeyGH9nSdb15gt7rCpFJlUoxwm0A0Q7QmYRtNlyvTUiK7keVzSercv5HWE/KwFKDVXwoESG
5K3v35FKYRvk3qZcT8oa+rkep5cOZTotBkQFQPtCW0F/Yv8IfVnwGMIGk7anco5jjyPoMgFZbcjt/PLz
HZENOBQ+Z1yEmDnOf9mwDVtTkIfIEk8UUf0OWgjdaWFa4q0JapEhYQUGFX0ezOohHhbPl6We9aJFocGl
vq+3nSFcsG+jxJYKk1ph1i7eXBJfTHWHDSHJr9WhtmVfJVihzANYnjsy6JCyzpVeRLfxpMKxIVyMHTA0
FcpSzJDxWZwAZIONhesuWD8fDSlozO5uh26VLkuuLVJulGdZclQrzLhWfDQvGD0KqdihPvPWh8gzLFo2
oN9iFNsCsY6tVYhpyz1jkZWRtuhfnnJQSEwitHZYb72xlYA5aMyGRAqOJsrCjlpxz70jCZNOfMzInv9h
YVmUkbQL+CclDBl6IjDNHlt9U7DwADiYVz18asG6LQG+UTlyhsPHsRRfSP0/R24A0TFvfWfZbHatfq+L
OxiJ33yDLWJsUYWIGsy1zTLgHql7KUsrsCLmVlkr6Rtb/3qjxFlI2KkfeRvpc7fnt9avJoGDcri+FuPJ
2pUErrVtNhAlkXPDWr/FGqKC17WQm7AriqFXURimLFoa7LABjuLsZ0KRUGsUC5Cg1waLiuYb8aEby31l
tkRem41rNl+6PCrjZQ000iwHOPR84YGd1uug6dQjYjFlnqvxnraAJ3eBdTPhz24/kZgVBlgNUE7Y0FJR
KGvFDY0luhZrpOV9mo7Qg9b0snrzG+Xw0jGAoX6WvLehUBuJqDGxbyyBymVhvH+EK7DRRttBwcrCFITx
KnKHHNSn1IF37BmfQz4TNWGIjW0NZcfSmRE0EddskXTj2EOiPTZ+CUKGW2djyL2i3HrIg3VyhxzD+yGj
9ABUqKDpMbMucV5nxMViiV9YPvZgWmKCgkBu2HOULd7p2IrfeXZNDfaZElzBI+E0+QQLCCoQ67pQ4/Ga
tXp4Gub5Uji6IGFMNTF9AmX1mJFal4khj5VIHvS+hrEupub3utJO99e9fKbXHpPZsphGzmhBjrICeUoL
vM+etG/kdZA8h02lXqSwUxBY8NRu5co339i6rJ+oGCLPa5c7l6yME0xJ7ypjvRhwwTLzQIf9NWye+poZ
cJ6WA811LdsSVv5VcoSd2nu1aht5T3RAYwt/5XrWqmDKbYuOAlynNxzUw4WVCvbYvLWAbRECDquiOt+1
2Pgj3gfNSW8UZqT2oneUltrfef+05o67SmjiE9ZapiSSoIW1upLfWaJlHB19HkWJTeWC8I5yzA8jq9i3
MyBpkLE4ScwcR16yhZUVXcoBVOi45tpH8deGkS5d1E4E1qxL65s2GyVWtp49lsPEW2h9yh2MmgcIvI6N
/t1EbBlqbdpLcophfBtcVrQqYXtaBLiKbHnOLnG+Q17H3P9ohz0yECvHD20N0LXgcVGfAN6wbgcA9m11
fOcHXqLFEzaHHcmNOirg0VnI8F/KwfYk5bWPLGbLg/BesF5F4n95DNjmdCmnHNvrFqCsnS++3OvYcvob
ZU8UhF/s2Jr5dNMnVsOKKbmuxSr7fNlyh4yQp2A+j2dyZM5cT1QAfmL5Yp5oRzmqh6Ivih1rtIvBWjDE
pJq7H4olT9kM0lcsIp/ov/I2Lx3/D33v7ziEU1hthiBI+C/ltGNslB5GSqDxFxuMavMl1tS1U/Dl7kpR
sN05LIbMKBG7+itJt9hoK0A7toC2Y+NRBuUeWFAn/SbKqVqfVWQFfJvdwE4bemSLqTu2KrKNr9CDVauL
5YImR8qeY9LKkXiKDb4otzXHQqc9+9bh/hqDk8QxQXlF8vnOHgtxlKpawzDIV/TsiFedPvsWuWiNOlB8
6f877ejYskOJz9BREunwhz/YaFXhTEjSrt4dX326Z+9XNoDFVltvl6DzaN/22qfehtw+SQA1GwftMSfG
YoQoiw64zJbldyxANc7XdOjK2WFZSTly7JFscaHG8to8ULMHHdaw9dptIX57PVc4EAXEKHgDT/mUZdiC
Pb7/1B7Di8e4FPHAHgO1bOTYOLIu67NQnSwL3dVuy6Abia9SiUUONgUg1o6tAS783V5WjtjsVRtd+wn1
UTc9ZFxn5kUDCfxNSchf9z//1bmhmNra5Ka9R9zhdL1Bo35q10X4oesdewBkHBsSsl37fRJZBSX46ppn
w/YlI1unEKj9kNElpf0AJgqEI/62jjdFU0v1aWY/4P2JvQSmwtRgN6q+ul6S2yhhcjBIWi5Uidwk5RVU
qYQIswuSvzRQ9i4HJrWbf2fEK559vrrP+AnXV8Z+p2wOVWTT8Vmlnem+Nu5Cha8W8FykmPvtMUuYsboV
DKLASx+p2WxKfGRvkoI93Cc2kWDicrSWby5ZRV7EcuolxojKpRtMJecVfrydkTh/wIarcpzRqwVexRyJ
7oiMTW2KbJKQvcJJsk5iFqDntU5+hAHxlqSK5LhHNmPcaOsMkmu1mPeCpYppfepXs1EiYTq8MsrzS5Fc
SeHJPqAzcQ34SllnHFaC2VOllA782BYAMGu1BfiXr8XM54VETOSC8Hs1laS8SCnkvUzMOucNSBS9fVFR
9IqSbCuet/E7JRFyENKS4W6wYAyGxuj9V49DCZtKJF8WA7RJ+fbKA8Nbf1xWL3BdtoTtg6nHcnGX3J/L
qERe6hO/uk5bJ/bXKhOYytq+M0t/CjgPdBMqu+RSlAFj4e1CPu+2qjBznBLn1UIoV4RFciFYhdeEYVmV
VASQeH/GWsht2RV7bTNtMZ7W8zCdfxPkMy4LPKmAo9bSkHhpppwA8qSLThe5ozjmHaL2loDfb7LR+2za
jXjksR90olJKcqsSOdn3GIJTW0tENGtTDtYS6cz+Nol22LqWdgOcUGTujbbJCwnvx2LaPSuuJyLfbMqI
WcvW8Yhf+aAE7sp8fcnbov+JjkdGkZGemVnFUHQbR6YCGvdEnzboSMdruVxAj0YS6GjLgzoCXt9MrL+W
uyPCjup0LZfOSDIBgUZYk3QlVTASXSk5ejzXHbC3ccOYV/sZOyYRFIwvtMf04vXEiwesbHO61s6SaYAz
NoPHDwxES6KSiMK1pByvILcHsR79oFgaa/smnjY68sxadtJna/tsvTvMm7T5bXLrNd8PecsYiQo4kIEz
vycWWIUd1ORgnRk0crtrTLZQVAZFLvcAs1m0uG8lKlRuppEY+4RpRv8/W2/aJNd5XgnKu1Hd6H1fr1Pt
ZmFcqALk6Qk3qlAOECRFyNxCgKye8fQoblXeqrpEVmZ13kwASUkRAEhwEynKtkjJMm2KIkhCEAGCAAEC
IAl+gP2d/GQw5os7goSoiZnfMPOcc57nvW+yRwuqKpd73/uuz3LOedA2iFUgTqdk7CrKRPK4IFuuZAUp
0p+c3dn0bSuiEr1D0VChzEYsmGJdpVA6y1sojWIvMM5I/ilG1+YpDHz7vm07rBwIfx9mEau0DlnichPj
D6gponOw+jEPiMW3uRnsRgQB7MojZBExH/lc9syen5sQvmVDqNoGVXeveCCIbc4irqEcCrwK1UbAfB5j
6neJcpiU9XAV1WMVquJ8I6oMzBkgI5091TjQvLsxaIiaAGAH7QfIFW5YubWFc2DDSZ2qDbO8ZJvSmGEy
EQY6he/SPW2iZl04CdFj8BPC1NfsQxWJp+vS5QccGzHm1ZGQYnbf9XrnSt1fcMJZrENNN/KLZIx4u229
4LCxCXDM+h4BIuLdUHS0i4fEclCRt9VVds39vk4AGOACY42T/roH+JYdjd/dUwTxdMRy7EDwYwEdjP1D
VQGGiKyT/4lKWuujDXGfbZ4zjEggKvdR8GoRthBRd3XCcvGQt8dCtU+yMOla5fsq5ydjFRsofICeRORY
63/Qw0CLHdbFvLUVO1JAplMIIY2ixRMmbZwq1KgiT1Q16U0AAMF6Va7R9jkg8rbAlTMvdYStg/Ojy8ro
RHRpn/4PgjfNOwppdXnJDM6lETgw3I9E9apQ0JmhNrYWFG9H3bJ4oT37vdZ5sMycS904QbtBMBNRSkEm
MI6bA+znwRtHQMBO0UrJsc4yrDG4QqK+1uXXxZspCqcq3uf7hjSGVkc8rFm1Q/savB7YzR7om3GOb0P7
3CxEcqVQ2q8vupMqE1jXMQbfc3Q8cJY0uBued2IEcr/4auz/4sl0nbbdIK+D/WCltn0P+RVUBavWhbWq
gV4ilBtQBaZ//ZyZMKFj8+4hGWo9AkbsfixtX2p12dzqqj7KwrLzvBvSS2aKwiFrjVevmwTzzRHkXdXq
wvoXChXgUOzztsrMA7X9y+6GZ9S8sflmxoEQeAzXL9MFtpFhyXb+DzumWTwYdOs0R7kt3CfqRqE6Up3l
TqH6S8Ws1h1qNuJ+HpWd4fk9XEW40jqrLnV+YBBq7pOLzrODyY26f7QasK6BCgFKw9w+bOVONlbtkD3F
F0VVaqhSwJiU7b96nnEPmawlZ4445gAgKp7D9JPs51Kv5rwmrcmGjnW7SbxD4Gq1WlJkb1nzD/FFwUKF
cqh2IICLc8+B0sWmSh+OVuFh2r0dR7aH68/OY0cKdHr1I5xhHkYsdrjb6GSrrurmzMxwsdnCYfXjTZRz
73NeuIpA47B5hhOwJ+GcBNvHI4oTnMU47x8ed8l4dAr2PNLQuE7hC1gcd1TcI0i+A7epNDdJhd5Y2m1E
egbPT9RAKnlOzRcKi3ZrglUKUR9Wq50y/3Z2CjFXHRhFEiG2P4fuuZMg9iOBUpXcRe4ztiCdlQzFKRqG
Mn96kz3FHcwB3iEw0B182tqrwmGfJRYNnDJyNwqdq2uTe8yHwZnPILCNULB4HAXdOH22T1QDAf5HOD++
DkJzuRnEruE3XB1D+8DqxPUDEKjgyl7rVcdgV+53O7lXHh1yPqm9y6o7yQpXHO8io8xiPZnTimm87HIW
5qZvAgrTd6GIgnW8cAKIn9gseFBgwQ1gyVlg3xmOxutOTNrb6XAe2h9HsTsTl8GNtsuKYLZ+lPXsFL6P
drG7NqL9cV/8j6gWXW8tgi1/lz1bx710+A6oUy08W6fA3MIMErIFtEizwFX1kfsehguhW9d5aEhFH9SN
wxpntrmmiAtx2OFhq8P2WYSUsL+BrkobmLkHVmxkiFIsFK6DLTh6ezuC79ztIBm3ExtVz+wU1dDZ4V2P
cU42t4D+hmgJonhw2MBP8fNlidX8cMAI2Nu4iMg86p4hxlIovrQ3xFO0fXSW5x2ArH0PKiC1mHDj3jqO
qHlPQ3n7u05hL5w829wt/iOqHGEeNg/6Pt9xkLyWG+taDhEXdcWTpnQ7iBxJa+BdbjfRQbUHmC9Edp8Q
0dBbc5hSYSbZRm1ei2t0FGQMrdTw9OHHTZgtxfoYaj9ENgxBU+1iYCny+QvHHjcOFC6cR1bt/L3f+0//
eefuDpgT8CXdeR8WodXByo17dnkGYQQfCXPZBUGanc5BYgjA+tGxPgXduPa8t2mDoDjYLsy3dHx/m/fz
outU5WYdjEbzR2dm9hGggBpI2McYPFqCCMDqoJvwmp1lRJdwLrnADIDbI2w0D9vkRhCNoGx7Dgexz0Oc
hFxO28exjzpbsRFZcmabyDuYF1Lb8Wj84mggZMbSAnHUy4PDPcQDSie/IR5HVvcup5q6AkLzVZ+3rn3R
LWaP2ka3UcwXej7YIdjHaE/ViWw9dImVwudT4QSLjgtWFK6vgiAN7cNFlyRYdHJWoCG0r5W9OZ9/gaCf
F3WiY94FKTfLHt4DSmDVdneg3qBNMdqw+WgP0qVD01T/Eaa33c58OsLyWLzW7s/VxvZLGMXBpIGmKdis
sjtw6ksHcQyzc3pLng53LuHSkidRvgHJmK3mWy4d0rh4REzLwpmdBctu92HfK8+5tKL4ZM/pUIVvuIWz
5p2/3CwpllqEzoIrsYAWaHu8QFmwq+Tf9yY7XIxiVB4jtQI0ELzv7Z5xzYkGu/z45tlGtZkPDQp3VDW/
ts+Y2YT6qhPbNa0L64ZetdnRazbJJ0BoDoa97h1AN/W6YGr4cO0NeRz3tze3ji0C9L2zcF62i/40/jzd
I6XsdTs3NrdYBVnxAaR5SKoSfTy2yV28D+e30NFLTqjcH/EdBFDW6mMzvlD8eCuWfMN3mYyG+THA5iUH
UxRuWLl5U5Bibvs20z+QNnA1mOAiMhOGeSTdn/VguwvWYd9xGaXCet5sgmXZQcjjqv4eFg3tI5FLFZdA
UzUtG9+35lW18wBrk1r/T+AUxPt2747rJe1glqRuClf1aNhPNk4uPYB5Yz5KH06vbfY2I4UN2oudDjbi
wyUyvsgCQR+lcQ2VzvJ6uakbirZcIFuC9ebzqUBSnehX7EKMK23t2b11rJj3DzhbpXGs8Zd65SMT7Kx9
xNmsg9i/5L9wG+jQ2rHzXECtpQV3N/39PV9a8ECfa4cV7rcWymx3Che88XS07RQOI3MRmZlZlYLbMati
cDs2zLgZNYfr2u3G4WDz5k/6f/Xo6OZ7w8M3X6+gAAdlN4ZIb/60T5SYmZUexPfa3aiZzkh400dkGROc
dlg98HEceLQ/1kW5Plip4SB5GL/xADeq6MGwKrEP4fxEyGZ886d2fdrb+P6ECqnqhsHWzetwy22tNwPo
hsq+wLnLfQJx0x7CDqyR2Ec8CsHoEaLe9C8Q2YAWrcfL0JBRba3zhEJDe+vmJfoZ5pmaMcWIfFNu3vwp
DN8jjJbYxgD1oS7lSrfoqJGwWg6dhDnYAmENzBDc156HSQuEQX2Be7Kh4fegpXvz0rBrrskjyKIMHikj
MSIALquI2sBK4QftK3t24gD8pJSJtmMbJ4/7srImPud/l540aLz/SmrH1kcGJf6wNlLT2J4Lf1AXVXkI
+PHQnIlkhdmFRJ4A1zFAmL1EJ/brEnFJ3M9THLZXr1JRt7RW91gBu+b7a4iy4HVG4GHXhL/BUFEjggHH
HdmbZqVkeKsKRS75YeXQ4zEDRWnwNzxLzT8YeA/fvHQECQPF30aD0c2frsLAsPcfhlAya8pb+5WOKuG6
juE+IQGCBoidCvKC9d7Nc0gSHGH/SMfOv4d5xMwO4q4DzGeKc6A6ckXqKfYE/GLz8+Ylc2AGiPSw30gv
QlF4rDL4V1LntR2J/cTxsH4abKn/mUeocX/auwOQKY/YdVANEtcDWKVeqYceFyxp13BdESBblpqm9qmb
5xCI7N68BBql62Ng3TGjAk3qm+cGSH2vQvPGVi72XbN7YC+bg4D+WUEkBspOgJ2TvG/nYanxh9+FfmQx
8+F6KXr2gMYZZhfjnUAfajw8k3POnIMj1BmmDNgjkJGGZNSI8W6y/5RoAjrl5jmoA1Mpu+LyXR/b54/g
a9YuW6ZQPA5138aeyc6GR5ifuflWifwI4M6egFK8reJJwMqonl9sRJm0dWmLF3BpPQcgR9J/FuW38lyX
zQP1T+nquxc+vPzRCSjZ4udHJz96JukA20/87WrC7334vD6XlHuhxws1XeoMf3TKP3eN14S2sK5zVfeB
8i0/79ez/+v9C1Qafsuug9ZctU/wb3yWir03qMd7zVrymKsQvy9NY6oC37D26Oc13Omj42iz/YX7S//4
Pb3/0XfZ9if9/lehDuyqyW+7BrBUey+4zu8Ftv0t3pO6w/YNKAI/B0Vf/MWnPgnFZbs2Wo7ne5fXwPcv
83v2XN4+a48+Qw1ltJ/tQPvwChWQcZ/vfPQ4++k7GA22AvrBb1u7pZx8mVd7m8+pfrpovz/p/fUex+eq
PdsFV2x+lCrIF+xbVCu2327wiS/4uHznw3eoz/xd6hVfwjhR9fiS9981b/VJqku/b5/R92/4817wn5g9
x9mjV+1anBd87RnMG84jKUVTs9nae5U6sI9JD/bWWaizfnyKurBSjP0pX79ARdTHqH77hp32T0vd9tZP
pK4LCwBarlSLvfzxCdd8bVVo8c2n7d0n7ZW3ocFq70tLV5qzr/PbT0Jn9tYr9u7P7Irnqbir/5+jeiyu
8hg1ep+EVuutK7eu33rH2szrugLwo3wH98dV36QC8GP2qTPe/kdvvU11WWgFn4LGrivRvg5dXbTL3nsN
Gr1oqf18h8qy0Iulmq7aj1Zbi6Xi+5a1/JQ/7wko2H58ktq8p3i9i67K+1Mo5NrPN12x9mn2KNRwpXH8
UyjJ4rtU28U330B/2GdfoUbxU64g/Drvfc566Br74Yr99bbf45J95zH1J3R8+e03qb37unRv7W4/DR1e
qvNekWYyx/SE7u9avWft/RO3rvC66L3z7FuMyxlv3+t6n+rE0DGmTi/1d9Hnp2QV2mi94v37JjWbX/cx
fRzPQ/3msxyZU9QfPo/fNC5f8P/8kv/3l/2/v+r//cIv/fKv/Oqv/fpv/Mav/9qv/sov/9IXfnPbzN/5
u9v/3t//+39v+9/9OzPbfvMf/MN/9I//yT/9Z//8n/+zf/pP/vE/+of/4F/8y3/1r//Nv/13//7f/7t/
+2/+9b/6l//i/7X/xD3w+y/Zz1/2//+S//9X+F786b/9pv/3C2zUr1hTfu0Lv/6F34i4lqKsYKBEhlzl
ExQr3twEA2hih0/dQ5SF4kow3O86dNfCMWowEVJmjgJomuB7otJBNdpo2dnVUDEvCkut8Bg3T87degSv
AZIddsJhNj+DMedlSnPAiO8Uztax83qstAyTloDoDTyspbBF3ZvIn5Nmbw8xocpFKCCbD4YgNME8x1zE
L410haEGOxqOmegH6IUZ/E5korbA1AdNCCByNcNzyK6sZh4g2EuMFCb4RHUMgA4o/CKmzUyaPJftM0Rn
4/tIaVB46856wLzR5NsBvIz0W0NMGxzofe5YNoGkaLpwZBHLbkqqxIza5KgrDZgFQ5yVGRPELQDSb45t
jxFZV8NaWpDWJ6QLFXu02zCpaa21EbNmIP2LV3ApQaceqbpxiy4l6/rgjdmzEFM32jCfuW9T5wFPphXz
a9ayZnbHIux3Ps5mva7xKvswalZDos9cRimmUNS1IZsG0nxwP49UQrLB/UcwBYlHpA6QGJwonlinSDl0
J232IDatHHXdbFKrBp+pWGXdzLV9veoYQ/flliJv3QCiNMRtIzTl6mg2kdbWEKtEckth9mUyWPG+wMX2
y0IEGkHvYfLB0bZ7OysxyszcHYXMH3kz9hlAOW++XtbNvTaxJ0cHA+TvSnncDsRpbIFQ4GeGbAbc/i6z
ZeF7gyJHFEN3v7kfJNNAMw4Xbu50nA8Cf2tjXHB5xkPs4VqG3hFABhVlxQpGhUB7p5u3pqr2jgWuEHPY
Al1VmYqZgDw0ZNlgcD2/UPYkfkvZQMcBON2is+Cg/Kp7dyyrLTCgDvRHsyinwqDyuO98UrsXmzyjNKU1
4wGbLMQOVky8Qr5aSnpVd3R0UECxoREpZiSsIJnrLnXcWSaHvF+ClqM8Z/dOIpbJih4qRT9iQhA0efgM
CBJThxTcwnia5m44Uyt2gyUHSy5Hoty+24yJ0A0+6qII4XadL1c+E+AKMf1rbpJdnHn3TRKvmgBGzdd9
YgkofyYM0P7Ynx28NG4CZUM5F4j/VYF3akiMwHD2BSgHYXZdQpucNZLdJVV+BfBmpmsmLgnXm4DdyTGN
BPGikAIOUVJ6TXLZtm/Yvk7dFHyBs7xmxsquLB1OSDJgtSFES60nPCoAhVsbA0hRVpvWeVtVgIMaopoA
o9gR8WZI8vHKSshRT2pzsIpUHEn/nH7HRtoumrFnBT26jjS+0pBNOgP8XqAP1l3OKGsz2B0roVNuG7dt
cYpiepa6G/CqJvLnM824UcbdMxjFrmarHuLk6kUufGazhmyHeWrKkluPuboG4slgzdoEkoSZNd4DXg9T
ra2C7LjLMGPvFcipi02fO7aLalG9VgNGAAQeUOLUSOlDPSZIK2Mc/V/xYGFBpD0lHTz82i176zhpNzYD
4NQAk0JxZ2HD+xVzI+OhwFpYBpF9URpdeBinpBHYp8zTbEBFBE2TwSDx/B2MSq5uFIEW6e6MvOg91coQ
qoZFJHCLyCTuIeQBm50tQOa6cfiCQQdLpodIxd6OZuYqlFxLHUD7HDBXyB6CusExpxrfi874A/wTWeNA
2RSbBCjYUUL4DsVZ19Y02SIyuc1D7NTx4HE8b3PWxdJIsC1BUhxYtx/dGARO0QNDjXgqNZx0pSqZixQK
EhPgCPa0rtR+a0ACPCA77wItsy5lByQIMhfWQqwzSi4mzBM+wfBTZOG6EAWmwbEztsiqjzECEL7nc8Mh
bsAoLEt0KpLmhWvLVt0HPBxcxGm1tAZwAyyrA44ALIpBf6U3HppdN2Z2mQ9Yb0kLpKEWWXG/9R9ZNOXK
QGaGq/s6vxCw9QpdAPNCktK2a/UhfkCUX/cI1SibrWMO/F/1jbFrRunejtkzHUfYsUSFRG2LAEd6lYvB
MNBijaf7qu5BoPfwhGW3y4TUbMyRwkP0Fakt1EJyoxTa0fYc2N4PxvYO7SLrFhbNGlHdLVTdug7tGjZf
QVgdjwfdAxJVtH1BW8vTqc6Js9YC8IzAkj3KSg3xEEJB1mGrHaUiNXQ4ji26kONGBfF7KDARLjoeRvat
igRf146Jsi/dBt+akLurgQNlFQK0R0xkWxF3Oaxn4nsvCytA8MgMMwlYmolOSBoxT8JmNSJ2gZ3vKN75
2E6X1ojGg1QGVjcEoSA/3lBYigL5NYj34AfZEVQEaoaoHAie8MSCQQ6LrxSwVF1YjPuuAWjr9DCFNjqF
y9dFsquSPAs1pTcrKk8Fbmmygp0TqY6ycO1zjg5mJXaA/mh5aeGBwfCoHbIwmYku4jDZFue4Wngnw9lA
UsCeBzJ74hrAEGcayUomdIvoBj9u5r1aAjZ8eTdDm1hHOHBAUGiUzWUgl1FcSsjVS7ATDOYVwXRKVVaw
xctTyz6zrz0CiBRCeT6HAu6rhzh3bZKR5wZeplQpjlQgnKODKxdrqEfUevHMFk4wicZC9qLHLa6LShzD
wVGqQ3F3By1LEhM23wJ/22wOepBMqRpi8G0Poy1KSxzymmRYEny+YdYy6XLUW6h8Q6M0+hZ2YaqNAo9A
AhFZW4LwikEGBRAm9THK3FtwnX6Yl8Jr2sXujnOZAmqY+Czv12iKbtKJeEjg8rJHkXSMP/bMVVho5qhC
dHgIk0b4CElbAS7zW3+0nxqQnWVHYRx0cFnhKgu2VVY4r+1b88UBaigh16ZOE+FhhBSsoITzwkAJFEVQ
YuOi2L3JznBQZbPR+B+5MI6N/07BbNbcyEauEJ2wXo32k01Krx/jtbSgxOIyKVCbTnauJckpi7qR0gBN
R2CBaapxv++PqHKI9J5gSXV19Ou1G29m/+lJpcdgZwSelmoff2ib3iNj20tnJeDQm9Amgzut9B38OuEx
od5zxLa1Aop6RzRtvl4frrcwW2VdEFwiSbWJrI6jIIpY83HSRx7aAWSwD6XVXI6YQOMpQ3WkISidPcn7
ONuddh2lebviXMEeq1wvcDlSogdoj+ERDkn2lGRXblJOUNpsSObCgXEPdh07bClMwdOcNjb2KYTs2TD0
iiRyMWsxpofC7BG9ATlFbMKYPX3b99eBGPKEum0OW+CAARNJNXdKAvfE/JQyuF3w23Guo8VdiPdpKmLf
KJ1i6aoqkHdXEryQrifkNOzT3PTLwjXAe9jHGsolMTQzWHvQJ23h0ke2lunf1arjtImDw8zcHtc54SsN
zRKvhkI9DGras3CAzaVvBhZTVGqq9K3rXl7SCYlbJiTNH9xcF6CGWnOQ7IL9De3JSvVn+PVIkuMkH5Wb
Wyiwwb0Xg/LlIWV510t6SSA2q/oGBEm6RQnWIEZs0KcELgYO3/o6fDRngNMWFR750Abt82FUigICCcRk
QOUdQttIh82+tT9sv3iurotWV1iLFSX7lwLZ6Mi27TPuxq0CIaejJEAJyyWJ+vZ7UUSJB8eZAgeyRhtp
Z0DYXXIRUlITqaBQe2dgXUfTFIemNIexM4ptDhWAIamOzdfCU3APyPb5dTLQRhV1ALBEwVDUIYlNHRd3
rfS5AIB0lv1ehI4rrFdJ9NGWMAtacE8A2oAuML1Ks3KRB4YNu38DEmA1VDvEHLCZSoQfNNqaGosZSXs9
+0zAFBRDo4CEh+koIFOagcE4E6MQlJg4Agccuul2QagwHkY1A6xpkEOi4IBZuZA3A8i9DOjMktkRPWg8
qIWb0NFDANc2mZkZly52Lb3RQLQcBK+cN9EsB4MoLGGHdtcsFTXe4lgg9YdhYkVb2N2lA/d6pPz6tgMl
rKNeY4vmrqtU7beRXVmp0AW+bwRLpDmKqIjZhf2IVASVdg+19FYQ35A0un3DBeyL3TCoEBRcdkurN5GG
LeYkdn4c2wHgLoLRRpYxmxpxl0JaVdCyqWxfQa82ERqyPWu4b10AaYV9pCC/tWGWWnBJbM6uA2UUJIy5
NbPdGGKiwQDrI3BKSxCh4jaItcMadhIsgMVIg+FwBTKAGdGIKMJuwYYf0Z456RzZAx5kiS+dgwiam01C
Jhcs4DjEAzxtloxGYHnkCk6gQWtBBAC3CZ+oeyjsVYjqcauMQdkrNQtAinH0w8hxyVSorTSE+iemgd3C
o0QRo54kUO4qt0yIGHqIyDqq2ye/HQNH9awiqH4x3F8ixx7XKYu2CpnibO4dD4aSkQI6BuKGNsGLSDdA
zYQQrRnZdaPusuyNgtLXRMnOmG2x6tYFlE/BK48g2AgidyizIGMAB1uc2QGSWlpy5YZl8bOtDYHT6QfQ
ejlOm10UuOD27hy9OQa+wWDmIU6vxgxyyuWqehd2LSdUzjEeLZlGQaeLiMHucdnr3mQ/j087KXBBye+C
3Y4+wvTjUYu3aH4LIkgzzJUxoMPTpOFGuD08etQskRviYtMb1f22VMabFAuG1JWt8tmIi22icEEzGJVb
QcMsCx+xu5AcwBUlH83T00tSqGCLNRGqyt/CcUQyugwquxm2p05Bc8NsElh56A3Hs9aJUdS4+MPqIGKe
RZCDSmojiGoEJSCblCXZ8Kwb4ZBL1zStR1yswMYVAb6PdVFIjcZmiODxjmukuctYOPZdTgC0cHsE2Pe6
UOZ8t5JdXQXqvFAwAbuEXYe1cJYWnHHinaoZDmGSihw8tMGWvr7PQhH3Hrr/PspCwHed7HHt7v0bCA76
DsnDhEpkyOCFO1DsDPSqH/Tm+gZ/D5QbUmvKOJuIjQO5ei2SFD3Qtqq/fnlsx9hofKT+60t/9Yz9iYLZ
f/Ws//K31x7726s/+NurP7n9g1dvv/jGZ2f/UoC9T8/9QIg9++X/ef7F/+vyuf/7hbc/uXr9k3ePf3Lt
yc/Ov/zz8z9Arfo3vv/Z+Qv44pnvfvazFz599vjtF5/99OmXP/2zM59c/5PPTnz/5+//8e0nP/j0xQuf
XH/9kw/e+uTa937x6JlPn7j+86ee/PnpG7e/+yefvfzM7ddetBc/+977t3/83mcf/PknV4/fPvfq7e+/
+cm7P/z0/F/84uwzn7154uc/PvHp69//9I9/+Ml7P7r9/IXbz57/9Pqf3r7y5GdvX/vs+KlPn/7LT0+9
8en505+dP/PZ+eufPnP99jtvffripU+vnrz9J+duf/+GtefTZ37wyfU37JVPT7/+6bnXfv79lz678vTt
v3jV/v25Pc73HsfFP3j59ok3rc0BJ2xs7t08Zz7DAKYbJnK5UgK2jQzJmCC4augYsG4CCZp91RPMCbYW
8rY2w92psSU9JsJr5eZ15HTJPhdaiJXaqRIg7wbBWKEHHX5adwdhvA2PhJOVkIQAXgHUR5kUgqH6MGbJ
Tde53MIZEy6yqT3ANRAzmtC71THhd+I63zxX1ps3X4Z9ESjZchjwqiFzLkBagm7Pm5oZd/Ona2Dpo0SW
Y7IEIhOZVrcgTg4z9eUeatU7/9w2XQdQNR4xq0vb/pGqKBvnbA8aB2VF1VrreWvMzZdXR+KVEBjpfVg7
ksxeQS+zV7Fw2NR4Ckd5E65GGF/Zc94LlRfsBWghULUSXnoJFac+6hn2H7HmV49EANm8/B5nSxkwvsbN
MkyBIZCVfSDxXmYmA5BcYsTQZk6SrdK/FWjBJmCS0fODJopqn2RJ7A+85DaKjp9kYWwVBb/Kf1/lu5f5
1gV+7ImoRK4i5Sf+9vSf+1v4/Bv89zVW7L4W11FV8mv88HNxneNshm76GptxJr5+ultDqWKw2ngJcDTp
wt++epL1y8/wM+f5+2n+/jN+/QKLo1/li6ejSRejbLnu/njc4kJUDb8Sb1lLXuArF3k7Nen5uJeKlL/B
eurHvan45Ud8imd4R/XYxahQ/gILnD8Vdcpf4/9Oq846r6BOuBL1zk/xuz/gTc/FXX4Q5d7Vkxeyeu0a
uKeiSDwHzvvZOuqElznHWy95b+MBv8NC7M9HJ5yKe/0gCrefZm+kausvRUed5IfVnu/FTc9Hj6nlN2LQ
7c+no0r9j+Je34su0gVVEv4Dvqjevsi+0nx4IwZaj6O5eiN69Tg74Q027wxbq68/EQ17HK97XXnNZ81V
jc5TbO25KGN/IZ7iRZ8q3s/n/bnw7ln++2I84Ktxr+Ns/7Woaq9G/jj+1IdP8JG1gk7zxTRbTkfzXmOb
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
+y++LtIcOB5PrcLur8W9XuSTnkS9eG//1agFf7V95DRv/Qrsf3z+xayvLscKusrLnon+POMF7ts2q69+
GCXUL7bP5b16nO15Ij7P5uHKp9nmC+zJk+yli+3Y+Tq6EaXkH8/2jcvx+pl2DqvfMMfeiK9ci8/rM1dj
nV5j807zk5pvmv8vRZ+cjkG5EnNAbb7iDda4t3M19eETsd6f5NWuRJ+8lu0Px7NnzPYcf6LoUtw3tecC
q9WnfYb3xdXOZ/Mnzc/jMUsv8y0WsvfxeiGbY6dizrzKm6a1prXwwvT+eZzf0lo7z2f/IK6j+a9N/vnp
Pf9afOa1bM5oYl/M9oGfRZ+8ETv5ad+j8JXz0bAf8InS9S/ECnqv7Qe89Xi8dTZG/EyMAluibmnX+wtT
e0U7uLHWfJ5f9odN+4P/qbHQ3HuG1+e08V36QnvG+fOmfj7FP6/yM29EI5/zZ/TPXI0Bupg94xPx7wu8
wmW+/k52Vl7w72Lf0Hn3ahp3qkVDF/tpKiS/TT3pR5Pq86Vb74Ri88cnoC798Sm+foWKyK1Ws5SUT926
SDXvpAOeFJZfzzSW37QrvAldcOhphzI4Xp3SEH9Myti438cn/V7hAVNVmrrXev0NtMnVpi+46jh+P4fP
+jXPfXySV1J73qLudVzzdXvvFBSp7TpX/fNQ6H6cn4K+9ROhUU4V6VeSNvlbt37Cp4DW+Jnsvk9Sn5tt
c4VzKVJfomq3FL+hzX0Kz88+DWXst6hv/rj0xqVdTR3xS9Sf1uuPUsX8rPfb43zKM1KsvnUWz4/r8NUr
1Et/mq9Dxfws+iB9lxrdrtd9ht94068v3XK1B9d+x5/xvM2Dp29d4hXfSnrdP8v+vUwFbe/zVuvcZkbb
J+ehh+7j/oara7fa8U/E62lMoe99DXMvxiKe8dZraI36wa7qiuPWX49TuTzUvWNcMPPe8vnzpv32JK+M
+X/d/oJO+mW2IObGGSq+n/W2XcXrjCsi8ge3vS0nisj/3gxmJm1wx55SUmN9PPToZb99h3LTEVam+DDY
eIPN2R1MhkivZQIUDyJ7KqK1Wg9Xx5secZzPscE5Jr9Z+hwSs81tZ2JWwHlAB8Fztq2eUu1y1p1U5D20
NMlAP4KSuvP2TyeERIdKtYd8IsJh9yO/s7oxhuyJyBae+d3L5F9kZhhkjzDs1hBlrT2hkWEgvrgWIHQy
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`;
let Ii;
function _g() {
  if (!Ii) {
    Ii = new Uint8Array(122784);
    const a = atob(Jg), f = new Uint8Array(a.length);
    for (let o = 0; o < a.length; o++)
      f[o] = a.charCodeAt(o);
    Jo(f, Ii);
  }
  return Ii;
}
const k = 0, MA = 1, Fg = 2, Wg = 3, kg = 4, Pg = 5, $g = 6, tm = 7, em = 8, A2 = 9, It = 10, Jt = 11, qo = 12, lm = 13, nm = 14, am = 15, um = 16, im = 17, fm = 18, cm = 20;
function x(a, f, o) {
  this.prefix = new Uint8Array(a.length), this.transform = f, this.suffix = new Uint8Array(o.length);
  for (let c = 0; c < a.length; c++) this.prefix[c] = a.charCodeAt(c);
  for (let c = 0; c < o.length; c++) this.suffix[c] = o.charCodeAt(c);
}
const Ki = [
  new x("", k, ""),
  new x("", k, " "),
  new x(" ", k, " "),
  new x("", qo, ""),
  new x("", It, " "),
  new x("", k, " the "),
  new x(" ", k, ""),
  new x("s ", k, " "),
  new x("", k, " of "),
  new x("", It, ""),
  new x("", k, " and "),
  new x("", lm, ""),
  new x("", MA, ""),
  new x(", ", k, " "),
  new x("", k, ", "),
  new x(" ", It, " "),
  new x("", k, " in "),
  new x("", k, " to "),
  new x("e ", k, " "),
  new x("", k, '"'),
  new x("", k, "."),
  new x("", k, '">'),
  new x("", k, `
`),
  new x("", Wg, ""),
  new x("", k, "]"),
  new x("", k, " for "),
  new x("", nm, ""),
  new x("", Fg, ""),
  new x("", k, " a "),
  new x("", k, " that "),
  new x(" ", It, ""),
  new x("", k, ". "),
  new x(".", k, ""),
  new x(" ", k, ", "),
  new x("", am, ""),
  new x("", k, " with "),
  new x("", k, "'"),
  new x("", k, " from "),
  new x("", k, " by "),
  new x("", um, ""),
  new x("", im, ""),
  new x(" the ", k, ""),
  new x("", kg, ""),
  new x("", k, ". The "),
  new x("", Jt, ""),
  new x("", k, " on "),
  new x("", k, " as "),
  new x("", k, " is "),
  new x("", tm, ""),
  new x("", MA, "ing "),
  new x("", k, `
	`),
  new x("", k, ":"),
  new x(" ", k, ". "),
  new x("", k, "ed "),
  new x("", cm, ""),
  new x("", fm, ""),
  new x("", $g, ""),
  new x("", k, "("),
  new x("", It, ", "),
  new x("", em, ""),
  new x("", k, " at "),
  new x("", k, "ly "),
  new x(" the ", k, " of "),
  new x("", Pg, ""),
  new x("", A2, ""),
  new x(" ", It, ", "),
  new x("", It, '"'),
  new x(".", k, "("),
  new x("", Jt, " "),
  new x("", It, '">'),
  new x("", k, '="'),
  new x(" ", k, "."),
  new x(".com/", k, ""),
  new x(" the ", k, " of the "),
  new x("", It, "'"),
  new x("", k, ". This "),
  new x("", k, ","),
  new x(".", k, " "),
  new x("", It, "("),
  new x("", It, "."),
  new x("", k, " not "),
  new x(" ", k, '="'),
  new x("", k, "er "),
  new x(" ", Jt, " "),
  new x("", k, "al "),
  new x(" ", Jt, ""),
  new x("", k, "='"),
  new x("", Jt, '"'),
  new x("", It, ". "),
  new x(" ", k, "("),
  new x("", k, "ful "),
  new x(" ", It, ". "),
  new x("", k, "ive "),
  new x("", k, "less "),
  new x("", Jt, "'"),
  new x("", k, "est "),
  new x(" ", It, "."),
  new x("", Jt, '">'),
  new x(" ", k, "='"),
  new x("", It, ","),
  new x("", k, "ize "),
  new x("", Jt, "."),
  new x("Â ", k, ""),
  new x(" ", k, ","),
  new x("", It, '="'),
  new x("", Jt, '="'),
  new x("", k, "ous "),
  new x("", Jt, ", "),
  new x("", It, "='"),
  new x(" ", It, ","),
  new x(" ", Jt, '="'),
  new x(" ", Jt, ", "),
  new x("", Jt, ","),
  new x("", Jt, "("),
  new x("", Jt, ". "),
  new x(" ", Jt, "."),
  new x("", Jt, "='"),
  new x(" ", Jt, ". "),
  new x(" ", It, '="'),
  new x(" ", Jt, "='"),
  new x(" ", It, "='")
], om = Ki.length;
function OA(a, f) {
  return a[f] < 192 ? (a[f] >= 97 && a[f] <= 122 && (a[f] ^= 32), 1) : a[f] < 224 ? (a[f + 1] ^= 32, 2) : (a[f + 2] ^= 5, 3);
}
function sm(a, f, o, c, s) {
  const A = _g(), { prefix: d } = Ki[s], { suffix: h } = Ki[s], m = Ki[s].transform;
  let g = m < qo ? 0 : m - (qo - 1);
  const S = f;
  g > c && (g = c);
  let v = 0;
  for (; v < d.length; )
    a[f++] = d[v++];
  o += g, c -= g, m <= A2 && (c -= m);
  for (let D = 0; D < c; D++)
    a[f++] = A[o + D];
  let b = f - c;
  if (m === It)
    OA(a, b);
  else if (m === Jt)
    for (; c > 0; ) {
      const D = OA(a, b);
      b += D, c -= D;
    }
  let Q = 0;
  for (; Q < h.length; )
    a[f++] = h[Q++];
  return f - S;
}
const rm = 256, Am = 704, dm = 26, DA = 6, QA = 2, Go = 16, ym = new Uint8Array([
  3,
  2,
  1,
  0,
  3,
  3,
  3,
  3,
  3,
  3,
  2,
  2,
  2,
  2,
  2,
  2
]), hm = new Int8Array([
  0,
  0,
  0,
  0,
  -1,
  1,
  -2,
  2,
  -3,
  3,
  -1,
  1,
  -2,
  2,
  -3,
  3
]), gm = new Uint32Array([
  0,
  0,
  0,
  0,
  0,
  4096,
  9216,
  21504,
  35840,
  44032,
  53248,
  63488,
  74752,
  87040,
  93696,
  100864,
  104704,
  106752,
  108928,
  113536,
  115968,
  118528,
  119872,
  121280,
  122016
]), mm = new Uint8Array([
  0,
  0,
  0,
  0,
  10,
  10,
  11,
  11,
  10,
  10,
  10,
  10,
  10,
  9,
  9,
  8,
  7,
  7,
  8,
  7,
  7,
  6,
  6,
  5,
  5
]), vm = 4, RA = 24;
function Em(a, f) {
  const o = new Uint8Array(f), c = new s2(a), s = new r2(o);
  return Sm(c, s), o;
}
function Sm(a, f) {
  let o = 0, c = 0, s = 0, A = 0;
  const d = [16, 15, 11, 4];
  let h = 0, m = 0, g = 0;
  const S = [new yn(0, 0), new yn(0, 0), new yn(0, 0)], v = 128 + Ve.READ_SIZE, b = new Ve(a);
  s = Gg(b);
  const Q = (1 << s) - 16, D = 1 << s, N = D - 1, B = new Uint8Array(D + v + RA), M = D, V = [], G = [];
  for (let K = 0; K < 3 * Kl; K++)
    V[K] = new Yt(0, 0), G[K] = new Yt(0, 0);
  for (; !c; ) {
    let K = 0;
    const _ = [1 << 28, 1 << 28, 1 << 28], Z = [0], I = [1, 1, 1], $ = [0, 1, 0, 1, 0, 1], rt = [0];
    let Et = 0;
    for (let J = 0; J < 3; J++)
      S[J].codes = [], S[J].htrees = new Uint32Array();
    b.readMoreInput();
    const St = Hg(b);
    if (K = St.meta_block_length, o + K > f.buffer.length) {
      const J = new Uint8Array(o + K);
      J.set(f.buffer), f.buffer = J;
    }
    if (c = St.input_end, St.is_metadata) {
      for (Ig(b); K > 0; --K)
        b.readMoreInput(), b.readBits(8);
      continue;
    }
    if (K === 0) continue;
    if (St.is_uncompressed) {
      b.bit_pos_ = b.bit_pos_ + 7 & -8, qg(f, K, o, B, N, b), o += K;
      continue;
    }
    for (let J = 0; J < 3; J++)
      I[J] = o2(b) + 1, I[J] >= 2 && (Wi(I[J] + 2, V, J * Kl, b), Wi(dm, G, J * Kl, b), _[J] = qi(G, J * Kl, b), rt[J] = 1);
    b.readMoreInput();
    const it = b.readBits(2), Ot = Go + (b.readBits(4) << it), ut = (1 << it) - 1, lt = Ot + (48 << it), O = new Uint8Array(I[0]);
    for (let J = 0; J < I[0]; J++)
      b.readMoreInput(), O[J] = b.readBits(2) << 1;
    const [X, tt] = zA(I[0] << DA, b), [gt, vt] = zA(I[2] << QA, b);
    S[0] = new yn(rm, X), S[1] = new yn(Am, I[1]), S[2] = new yn(lt, gt);
    for (let J = 0; J < 3; ++J)
      S[J].decode(b);
    let w = 0, H = 0, j = O[Z[0]], F = Gi[j], at = Gi[j + 1], ct = S[1].htrees[0];
    for (; K > 0; ) {
      let J;
      b.readMoreInput(), _[1] === 0 && (To(
        I[1],
        V,
        1,
        Z,
        $,
        rt,
        b
      ), _[1] = qi(G, Kl, b), ct = S[1].htrees[Z[1]]), _[1]--;
      const Qt = sa(S[1].codes, ct, b);
      let wt = Qt >> 6;
      wt >= 2 ? (wt -= 2, J = -1) : J = 0;
      const Ue = Qg[wt] + (Qt >> 3 & 7), ge = Og[Ue], ze = ge.offset + b.readBits(ge.nbits), bn = Rg[wt] + (Qt & 7), je = Dg[bn], fe = je.offset + b.readBits(je.nbits);
      m = B[o - 1 & N], g = B[o - 2 & N];
      for (let me = 0; me < ze; me++) {
        b.readMoreInput(), _[0] === 0 && (To(
          I[0],
          V,
          0,
          Z,
          $,
          rt,
          b
        ), _[0] = qi(G, 0, b), Et = Z[0] << DA, w = Et, j = O[Z[0]], F = Gi[j], at = Gi[j + 1]);
        const Xe = UA[F + m] | UA[at + g], Ke = tt[w + Xe];
        _[0]--, g = m, m = sa(S[0].codes, S[0].htrees[Ke], b), B[o & N] = m, (o & N) === N && f.write(B, D), o++;
      }
      if (K -= ze, K <= 0) break;
      if (J < 0) {
        b.readMoreInput(), _[2] === 0 && (To(
          I[2],
          V,
          2,
          Z,
          $,
          rt,
          b
        ), _[2] = qi(G, 2 * Kl, b), H = Z[2] << QA), _[2]--;
        const me = (fe > 4 ? 3 : fe - 2) & 255, Xe = vt[H + me];
        if (J = sa(S[2].codes, S[2].htrees[Xe], b), J >= Ot) {
          J -= Ot;
          const Ke = J & ut;
          J >>= it;
          const ml = (J >> 1) + 1, ra = (2 + (J & 1) << ml) - 4;
          J = Ot + (ra + b.readBits(ml) << it) + Ke;
        }
      }
      const Pe = bm(J, d, h);
      if (Pe < 0) throw new Error("[BrotliDecompress] invalid distance");
      o < Q && A !== Q ? A = o : A = Q;
      let pn = o & N;
      if (Pe > A)
        if (fe >= vm && fe <= RA) {
          let me = gm[fe];
          const Xe = Pe - A - 1, Ke = mm[fe], ml = (1 << Ke) - 1, ra = Xe & ml, vu = Xe >> Ke;
          if (me += ra * fe, vu < om) {
            const Pt = sm(B, pn, me, fe, vu);
            if (pn += Pt, o += Pt, K -= Pt, pn >= M) {
              f.write(B, D);
              for (let wn = 0; wn < pn - M; wn++)
                B[wn] = B[M + wn];
            }
          } else
            throw new Error("Invalid backward reference");
        } else
          throw new Error("Invalid backward reference");
      else {
        if (J > 0 && (d[h & 3] = Pe, h++), fe > K)
          throw new Error("Invalid backward reference");
        for (let me = 0; me < fe; me++)
          B[o & N] = B[o - Pe & N], (o & N) === N && f.write(B, D), o++, K--;
      }
      m = B[o - 1 & N], g = B[o - 2 & N];
    }
    o &= 1073741823;
  }
  f.write(B, o & N);
}
function bm(a, f, o) {
  return a < Go ? (o += ym[a], o &= 3, f[o] + hm[a]) : a - Go + 1;
}
function pm(a, f) {
  const o = new Uint8Array(f);
  try {
    let c = 0, s = 0;
    for (; c < a.length - 8; ) {
      const A = a[c++] << 24 | a[c++] << 16 | a[c++] << 8 | a[c++], d = a[c++] << 24 | a[c++] << 16 | a[c++] << 8 | a[c++];
      if (a.length - c < d) throw new Error("lz4 not hadoop");
      if (o.length < A) throw new Error("lz4 not hadoop");
      if (Io(a.subarray(c, c + d), o, s) !== A) throw new Error("lz4 not hadoop");
      if (c += d, s += A, c === a.length) return o;
    }
    if (c < a.length) throw new Error("lz4 not hadoop");
  } catch (c) {
    if (c instanceof Error && c.message !== "lz4 not hadoop") throw c;
    Io(a, o, 0);
  }
  return o;
}
function wm(a, f) {
  const o = new Uint8Array(f);
  return Io(a, o, 0), o;
}
function Io(a, f, o) {
  let c = o;
  for (let s = 0; s < a.length; ) {
    const A = a[s++];
    let d = A >> 4;
    if (d) {
      let b = d + 240;
      for (; b === 255; ) d += b = a[s++];
      if (f.set(a.subarray(s, s + d), c), c += d, s += d, s >= a.length) return c - o;
    }
    const h = a[s++] | a[s++] << 8;
    if (!h || h > c)
      throw new Error(`lz4 offset out of range ${h}`);
    let m = (A & 15) + 4, g = m + 240;
    for (; g === 255; ) m += g = a[s++];
    let S = c - h;
    const v = c + m;
    for (; c < v; ) f[c++] = f[S++];
  }
  return c - o;
}
const Bm = {
  SNAPPY: vg(),
  // loads wasm
  GZIP: (a, f) => Jo(a, new Uint8Array(f)),
  BROTLI: Em,
  ZSTD: (a) => mg(a),
  LZ4: pm,
  LZ4_RAW: wm
}, Uo = 200;
function Tm(a) {
  return a == null ? "" : a instanceof Date ? a.toISOString() : typeof a == "bigint" ? a.toString() : typeof a == "object" ? JSON.stringify(a) : String(a);
}
const jl = {
  message: { padding: "1em", fontFamily: "Segoe UI, sans-serif", fontSize: 13, color: "#605e5c" },
  error: {
    margin: "1em",
    padding: "12px 16px",
    fontFamily: "Segoe UI, sans-serif",
    fontSize: 13,
    color: "#a4262c",
    background: "#fde7e9",
    border: "1px solid #f3d6d8",
    borderRadius: 4,
    whiteSpace: "pre-wrap"
  },
  wrap: { padding: "1em", fontFamily: "Segoe UI, sans-serif", overflowX: "auto" },
  caption: { marginBottom: 8, fontSize: 12, color: "#605e5c" },
  table: { minWidth: "100%", borderCollapse: "collapse", fontSize: 13 },
  th: {
    borderBottom: "2px solid #d2d0ce",
    background: "#faf9f8",
    padding: "6px 12px",
    textAlign: "left",
    fontWeight: 600,
    color: "#323130",
    whiteSpace: "nowrap"
  },
  td: { borderBottom: "1px solid #edebe9", padding: "5px 12px", color: "#323130" }
};
function Cm({ filePath: a, fetchFile: f }) {
  const [o, c] = Zi.useState(null), [s, A] = Zi.useState(null);
  if (Zi.useEffect(() => {
    let h = !1;
    if (c(null), A(null), !a) {
      A("Set a parquet file path in the web part properties.");
      return;
    }
    return (async () => {
      const m = vh(
        await mh({ url: a, fetch: f })
      );
      return eg({ file: m, compressors: Bm, rowEnd: Uo });
    })().then((m) => {
      h || c(m);
    }).catch((m) => {
      h || A(m instanceof Error ? m.message : String(m));
    }), () => {
      h = !0;
    };
  }, [a, f]), s)
    return /* @__PURE__ */ he.jsx("div", { style: jl.error, children: s });
  if (!o)
    return /* @__PURE__ */ he.jsxs("div", { style: jl.message, children: [
      "Loading ",
      a,
      "…"
    ] });
  if (o.length === 0)
    return /* @__PURE__ */ he.jsxs("div", { style: jl.message, children: [
      "No rows in ",
      a,
      "."
    ] });
  const d = Object.keys(o[0]);
  return /* @__PURE__ */ he.jsxs("div", { style: jl.wrap, children: [
    /* @__PURE__ */ he.jsxs("div", { style: jl.caption, children: [
      a,
      " — showing ",
      o.length,
      " row",
      o.length === 1 ? "" : "s",
      o.length === Uo ? ` (first ${Uo})` : ""
    ] }),
    /* @__PURE__ */ he.jsxs("table", { style: jl.table, children: [
      /* @__PURE__ */ he.jsx("thead", { children: /* @__PURE__ */ he.jsx("tr", { children: d.map((h) => /* @__PURE__ */ he.jsx("th", { style: jl.th, children: h }, h)) }) }),
      /* @__PURE__ */ he.jsx("tbody", { children: o.map((h, m) => /* @__PURE__ */ he.jsx("tr", { style: m % 2 ? { background: "#faf9f8" } : void 0, children: d.map((g) => /* @__PURE__ */ he.jsx("td", { style: jl.td, children: Tm(h[g]) }, g)) }, m)) })
    ] })
  ] });
}
const ki = /* @__PURE__ */ new WeakMap();
function Um(a, f) {
  let o = ki.get(a);
  o || (o = Iy.createRoot(a), ki.set(a, o)), o.render(
    /* @__PURE__ */ he.jsx(Zi.StrictMode, { children: /* @__PURE__ */ he.jsx(Cm, { ...f }) })
  );
}
function zm(a) {
  const f = ki.get(a);
  f && (f.unmount(), ki.delete(a));
}
export {
  Um as mount,
  zm as unmount
};

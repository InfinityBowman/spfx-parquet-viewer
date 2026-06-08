var go = { exports: {} }, ai = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _1;
function qh() {
  if (_1) return ai;
  _1 = 1;
  var a = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function o(c, r, A) {
    var d = null;
    if (A !== void 0 && (d = "" + A), r.key !== void 0 && (d = "" + r.key), "key" in r) {
      A = {};
      for (var y in r)
        y !== "key" && (A[y] = r[y]);
    } else A = r;
    return r = A.ref, {
      $$typeof: a,
      type: c,
      key: d,
      ref: r !== void 0 ? r : null,
      props: A
    };
  }
  return ai.Fragment = f, ai.jsx = o, ai.jsxs = o, ai;
}
var F1;
function Yh() {
  return F1 || (F1 = 1, go.exports = qh()), go.exports;
}
var ut = Yh(), mo = { exports: {} }, ct = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1;
function Lh() {
  if (W1) return ct;
  W1 = 1;
  var a = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), d = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.activity"), b = Symbol.iterator;
  function N(w) {
    return w === null || typeof w != "object" ? null : (w = b && w[b] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var O = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, R = Object.assign, B = {};
  function M(w, L, V) {
    this.props = w, this.context = L, this.refs = B, this.updater = V || O;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(w, L) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, L, "setState");
  }, M.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = M.prototype;
  function G(w, L, V) {
    this.props = w, this.context = L, this.refs = B, this.updater = V || O;
  }
  var K = G.prototype = new Z();
  K.constructor = G, R(K, M.prototype), K.isPureReactComponent = !0;
  var _ = Array.isArray;
  function j() {
  }
  var I = { H: null, A: null, T: null, S: null }, $ = Object.prototype.hasOwnProperty;
  function At(w, L, V) {
    var F = V.ref;
    return {
      $$typeof: a,
      type: w,
      key: L,
      ref: F !== void 0 ? F : null,
      props: V
    };
  }
  function Et(w, L) {
    return At(w.type, L, w.props);
  }
  function bt(w) {
    return typeof w == "object" && w !== null && w.$$typeof === a;
  }
  function ft(w) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(V) {
      return L[V];
    });
  }
  var Ot = /\/+/g;
  function it(w, L) {
    return typeof w == "object" && w !== null && w.key != null ? ft("" + w.key) : L.toString(36);
  }
  function nt(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(j, j) : (w.status = "pending", w.then(
          function(L) {
            w.status === "pending" && (w.status = "fulfilled", w.value = L);
          },
          function(L) {
            w.status === "pending" && (w.status = "rejected", w.reason = L);
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
  function D(w, L, V, F, at) {
    var ot = typeof w;
    (ot === "undefined" || ot === "boolean") && (w = null);
    var J = !1;
    if (w === null) J = !0;
    else
      switch (ot) {
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
            case p:
              return J = w._init, D(
                J(w._payload),
                L,
                V,
                F,
                at
              );
          }
      }
    if (J)
      return at = at(w), J = F === "" ? "." + it(w, 0) : F, _(at) ? (V = "", J != null && (V = J.replace(Ot, "$&/") + "/"), D(at, L, V, "", function(Ue) {
        return Ue;
      })) : at != null && (bt(at) && (at = Et(
        at,
        V + (at.key == null || w && w.key === at.key ? "" : ("" + at.key).replace(
          Ot,
          "$&/"
        ) + "/") + J
      )), L.push(at)), 1;
    J = 0;
    var xt = F === "" ? "." : F + ":";
    if (_(w))
      for (var Bt = 0; Bt < w.length; Bt++)
        F = w[Bt], ot = xt + it(F, Bt), J += D(
          F,
          L,
          V,
          ot,
          at
        );
    else if (Bt = N(w), typeof Bt == "function")
      for (w = Bt.call(w), Bt = 0; !(F = w.next()).done; )
        F = F.value, ot = xt + it(F, Bt++), J += D(
          F,
          L,
          V,
          ot,
          at
        );
    else if (ot === "object") {
      if (typeof w.then == "function")
        return D(
          nt(w),
          L,
          V,
          F,
          at
        );
      throw L = String(w), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return J;
  }
  function X(w, L, V) {
    if (w == null) return w;
    var F = [], at = 0;
    return D(w, F, "", "", function(ot) {
      return L.call(V, ot, at++);
    }), F;
  }
  function tt(w) {
    if (w._status === -1) {
      var L = w._result;
      L = L(), L.then(
        function(V) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = V);
        },
        function(V) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = V);
        }
      ), w._status === -1 && (w._status = 0, w._result = L);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var mt = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
        error: w
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  }, pt = {
    map: X,
    forEach: function(w, L, V) {
      X(
        w,
        function() {
          L.apply(this, arguments);
        },
        V
      );
    },
    count: function(w) {
      var L = 0;
      return X(w, function() {
        L++;
      }), L;
    },
    toArray: function(w) {
      return X(w, function(L) {
        return L;
      }) || [];
    },
    only: function(w) {
      if (!bt(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  };
  return ct.Activity = m, ct.Children = pt, ct.Component = M, ct.Fragment = o, ct.Profiler = r, ct.PureComponent = G, ct.StrictMode = c, ct.Suspense = v, ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, ct.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return I.H.useMemoCache(w);
    }
  }, ct.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, ct.cacheSignal = function() {
    return null;
  }, ct.cloneElement = function(w, L, V) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var F = R({}, w.props), at = w.key;
    if (L != null)
      for (ot in L.key !== void 0 && (at = "" + L.key), L)
        !$.call(L, ot) || ot === "key" || ot === "__self" || ot === "__source" || ot === "ref" && L.ref === void 0 || (F[ot] = L[ot]);
    var ot = arguments.length - 2;
    if (ot === 1) F.children = V;
    else if (1 < ot) {
      for (var J = Array(ot), xt = 0; xt < ot; xt++)
        J[xt] = arguments[xt + 2];
      F.children = J;
    }
    return At(w.type, at, F);
  }, ct.createContext = function(w) {
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
  }, ct.createElement = function(w, L, V) {
    var F, at = {}, ot = null;
    if (L != null)
      for (F in L.key !== void 0 && (ot = "" + L.key), L)
        $.call(L, F) && F !== "key" && F !== "__self" && F !== "__source" && (at[F] = L[F]);
    var J = arguments.length - 2;
    if (J === 1) at.children = V;
    else if (1 < J) {
      for (var xt = Array(J), Bt = 0; Bt < J; Bt++)
        xt[Bt] = arguments[Bt + 2];
      at.children = xt;
    }
    if (w && w.defaultProps)
      for (F in J = w.defaultProps, J)
        at[F] === void 0 && (at[F] = J[F]);
    return At(w, ot, at);
  }, ct.createRef = function() {
    return { current: null };
  }, ct.forwardRef = function(w) {
    return { $$typeof: y, render: w };
  }, ct.isValidElement = bt, ct.lazy = function(w) {
    return {
      $$typeof: p,
      _payload: { _status: -1, _result: w },
      _init: tt
    };
  }, ct.memo = function(w, L) {
    return {
      $$typeof: g,
      type: w,
      compare: L === void 0 ? null : L
    };
  }, ct.startTransition = function(w) {
    var L = I.T, V = {};
    I.T = V;
    try {
      var F = w(), at = I.S;
      at !== null && at(V, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(j, mt);
    } catch (ot) {
      mt(ot);
    } finally {
      L !== null && V.types !== null && (L.types = V.types), I.T = L;
    }
  }, ct.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, ct.use = function(w) {
    return I.H.use(w);
  }, ct.useActionState = function(w, L, V) {
    return I.H.useActionState(w, L, V);
  }, ct.useCallback = function(w, L) {
    return I.H.useCallback(w, L);
  }, ct.useContext = function(w) {
    return I.H.useContext(w);
  }, ct.useDebugValue = function() {
  }, ct.useDeferredValue = function(w, L) {
    return I.H.useDeferredValue(w, L);
  }, ct.useEffect = function(w, L) {
    return I.H.useEffect(w, L);
  }, ct.useEffectEvent = function(w) {
    return I.H.useEffectEvent(w);
  }, ct.useId = function() {
    return I.H.useId();
  }, ct.useImperativeHandle = function(w, L, V) {
    return I.H.useImperativeHandle(w, L, V);
  }, ct.useInsertionEffect = function(w, L) {
    return I.H.useInsertionEffect(w, L);
  }, ct.useLayoutEffect = function(w, L) {
    return I.H.useLayoutEffect(w, L);
  }, ct.useMemo = function(w, L) {
    return I.H.useMemo(w, L);
  }, ct.useOptimistic = function(w, L) {
    return I.H.useOptimistic(w, L);
  }, ct.useReducer = function(w, L, V) {
    return I.H.useReducer(w, L, V);
  }, ct.useRef = function(w) {
    return I.H.useRef(w);
  }, ct.useState = function(w) {
    return I.H.useState(w);
  }, ct.useSyncExternalStore = function(w, L, V) {
    return I.H.useSyncExternalStore(
      w,
      L,
      V
    );
  }, ct.useTransition = function() {
    return I.H.useTransition();
  }, ct.version = "19.2.7", ct;
}
var k1;
function Zo() {
  return k1 || (k1 = 1, mo.exports = Lh()), mo.exports;
}
var hl = Zo(), vo = { exports: {} }, ii = {}, po = { exports: {} }, Eo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var P1;
function Hh() {
  return P1 || (P1 = 1, (function(a) {
    function f(D, X) {
      var tt = D.length;
      D.push(X);
      t: for (; 0 < tt; ) {
        var mt = tt - 1 >>> 1, pt = D[mt];
        if (0 < r(pt, X))
          D[mt] = X, D[tt] = pt, tt = mt;
        else break t;
      }
    }
    function o(D) {
      return D.length === 0 ? null : D[0];
    }
    function c(D) {
      if (D.length === 0) return null;
      var X = D[0], tt = D.pop();
      if (tt !== X) {
        D[0] = tt;
        t: for (var mt = 0, pt = D.length, w = pt >>> 1; mt < w; ) {
          var L = 2 * (mt + 1) - 1, V = D[L], F = L + 1, at = D[F];
          if (0 > r(V, tt))
            F < pt && 0 > r(at, V) ? (D[mt] = at, D[F] = tt, mt = F) : (D[mt] = V, D[L] = tt, mt = L);
          else if (F < pt && 0 > r(at, tt))
            D[mt] = at, D[F] = tt, mt = F;
          else break t;
        }
      }
      return X;
    }
    function r(D, X) {
      var tt = D.sortIndex - X.sortIndex;
      return tt !== 0 ? tt : D.id - X.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var A = performance;
      a.unstable_now = function() {
        return A.now();
      };
    } else {
      var d = Date, y = d.now();
      a.unstable_now = function() {
        return d.now() - y;
      };
    }
    var v = [], g = [], p = 1, m = null, b = 3, N = !1, O = !1, R = !1, B = !1, M = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
    function K(D) {
      for (var X = o(g); X !== null; ) {
        if (X.callback === null) c(g);
        else if (X.startTime <= D)
          c(g), X.sortIndex = X.expirationTime, f(v, X);
        else break;
        X = o(g);
      }
    }
    function _(D) {
      if (R = !1, K(D), !O)
        if (o(v) !== null)
          O = !0, j || (j = !0, ft());
        else {
          var X = o(g);
          X !== null && nt(_, X.startTime - D);
        }
    }
    var j = !1, I = -1, $ = 5, At = -1;
    function Et() {
      return B ? !0 : !(a.unstable_now() - At < $);
    }
    function bt() {
      if (B = !1, j) {
        var D = a.unstable_now();
        At = D;
        var X = !0;
        try {
          t: {
            O = !1, R && (R = !1, Z(I), I = -1), N = !0;
            var tt = b;
            try {
              e: {
                for (K(D), m = o(v); m !== null && !(m.expirationTime > D && Et()); ) {
                  var mt = m.callback;
                  if (typeof mt == "function") {
                    m.callback = null, b = m.priorityLevel;
                    var pt = mt(
                      m.expirationTime <= D
                    );
                    if (D = a.unstable_now(), typeof pt == "function") {
                      m.callback = pt, K(D), X = !0;
                      break e;
                    }
                    m === o(v) && c(v), K(D);
                  } else c(v);
                  m = o(v);
                }
                if (m !== null) X = !0;
                else {
                  var w = o(g);
                  w !== null && nt(
                    _,
                    w.startTime - D
                  ), X = !1;
                }
              }
              break t;
            } finally {
              m = null, b = tt, N = !1;
            }
            X = void 0;
          }
        } finally {
          X ? ft() : j = !1;
        }
      }
    }
    var ft;
    if (typeof G == "function")
      ft = function() {
        G(bt);
      };
    else if (typeof MessageChannel < "u") {
      var Ot = new MessageChannel(), it = Ot.port2;
      Ot.port1.onmessage = bt, ft = function() {
        it.postMessage(null);
      };
    } else
      ft = function() {
        M(bt, 0);
      };
    function nt(D, X) {
      I = M(function() {
        D(a.unstable_now());
      }, X);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, a.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : $ = 0 < D ? Math.floor(1e3 / D) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, a.unstable_next = function(D) {
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
        return D();
      } finally {
        b = tt;
      }
    }, a.unstable_requestPaint = function() {
      B = !0;
    }, a.unstable_runWithPriority = function(D, X) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var tt = b;
      b = D;
      try {
        return X();
      } finally {
        b = tt;
      }
    }, a.unstable_scheduleCallback = function(D, X, tt) {
      var mt = a.unstable_now();
      switch (typeof tt == "object" && tt !== null ? (tt = tt.delay, tt = typeof tt == "number" && 0 < tt ? mt + tt : mt) : tt = mt, D) {
        case 1:
          var pt = -1;
          break;
        case 2:
          pt = 250;
          break;
        case 5:
          pt = 1073741823;
          break;
        case 4:
          pt = 1e4;
          break;
        default:
          pt = 5e3;
      }
      return pt = tt + pt, D = {
        id: p++,
        callback: X,
        priorityLevel: D,
        startTime: tt,
        expirationTime: pt,
        sortIndex: -1
      }, tt > mt ? (D.sortIndex = tt, f(g, D), o(v) === null && D === o(g) && (R ? (Z(I), I = -1) : R = !0, nt(_, tt - mt))) : (D.sortIndex = pt, f(v, D), O || N || (O = !0, j || (j = !0, ft()))), D;
    }, a.unstable_shouldYield = Et, a.unstable_wrapCallback = function(D) {
      var X = b;
      return function() {
        var tt = b;
        b = X;
        try {
          return D.apply(this, arguments);
        } finally {
          b = tt;
        }
      };
    };
  })(Eo)), Eo;
}
var $1;
function Gh() {
  return $1 || ($1 = 1, po.exports = Hh()), po.exports;
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
var tA;
function Ih() {
  if (tA) return ue;
  tA = 1;
  var a = Zo();
  function f(v) {
    var g = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        g += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return "Minified React error #" + v + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, r = Symbol.for("react.portal");
  function A(v, g, p) {
    var m = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: m == null ? null : "" + m,
      children: v,
      containerInfo: g,
      implementation: p
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(v, g) {
    if (v === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, ue.createPortal = function(v, g) {
    var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(f(299));
    return A(v, g, null, p);
  }, ue.flushSync = function(v) {
    var g = d.T, p = c.p;
    try {
      if (d.T = null, c.p = 2, v) return v();
    } finally {
      d.T = g, c.p = p, c.d.f();
    }
  }, ue.preconnect = function(v, g) {
    typeof v == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, c.d.C(v, g));
  }, ue.prefetchDNS = function(v) {
    typeof v == "string" && c.d.D(v);
  }, ue.preinit = function(v, g) {
    if (typeof v == "string" && g && typeof g.as == "string") {
      var p = g.as, m = y(p, g.crossOrigin), b = typeof g.integrity == "string" ? g.integrity : void 0, N = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      p === "style" ? c.d.S(
        v,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: m,
          integrity: b,
          fetchPriority: N
        }
      ) : p === "script" && c.d.X(v, {
        crossOrigin: m,
        integrity: b,
        fetchPriority: N,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, ue.preinitModule = function(v, g) {
    if (typeof v == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var p = y(
            g.as,
            g.crossOrigin
          );
          c.d.M(v, {
            crossOrigin: p,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && c.d.M(v);
  }, ue.preload = function(v, g) {
    if (typeof v == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var p = g.as, m = y(p, g.crossOrigin);
      c.d.L(v, p, {
        crossOrigin: m,
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
  }, ue.preloadModule = function(v, g) {
    if (typeof v == "string")
      if (g) {
        var p = y(g.as, g.crossOrigin);
        c.d.m(v, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: p,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else c.d.m(v);
  }, ue.requestFormReset = function(v) {
    c.d.r(v);
  }, ue.unstable_batchedUpdates = function(v, g) {
    return v(g);
  }, ue.useFormState = function(v, g, p) {
    return d.H.useFormState(v, g, p);
  }, ue.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, ue.version = "19.2.7", ue;
}
var eA;
function jh() {
  if (eA) return bo.exports;
  eA = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (f) {
        console.error(f);
      }
  }
  return a(), bo.exports = Ih(), bo.exports;
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
var nA;
function Zh() {
  if (nA) return ii;
  nA = 1;
  var a = Gh(), f = Zo(), o = jh();
  function c(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function A(t) {
    var e = t, n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (A(t) !== t)
      throw Error(c(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (e = A(t), e === null) throw Error(c(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var i = n.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        if (l = i.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (u = i.child; u; ) {
          if (u === n) return v(i), t;
          if (u === l) return v(i), e;
          u = u.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== l.return) n = i, l = u;
      else {
        for (var s = !1, h = i.child; h; ) {
          if (h === n) {
            s = !0, n = i, l = u;
            break;
          }
          if (h === l) {
            s = !0, l = i, n = u;
            break;
          }
          h = h.sibling;
        }
        if (!s) {
          for (h = u.child; h; ) {
            if (h === n) {
              s = !0, n = u, l = i;
              break;
            }
            if (h === l) {
              s = !0, l = u, n = i;
              break;
            }
            h = h.sibling;
          }
          if (!s) throw Error(c(189));
        }
      }
      if (n.alternate !== l) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? t : e;
  }
  function p(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = p(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var m = Object.assign, b = Symbol.for("react.element"), N = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), G = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), At = Symbol.for("react.activity"), Et = Symbol.for("react.memo_cache_sentinel"), bt = Symbol.iterator;
  function ft(t) {
    return t === null || typeof t != "object" ? null : (t = bt && t[bt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Ot = Symbol.for("react.client.reference");
  function it(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Ot ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case R:
        return "Fragment";
      case M:
        return "Profiler";
      case B:
        return "StrictMode";
      case _:
        return "Suspense";
      case j:
        return "SuspenseList";
      case At:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case O:
          return "Portal";
        case G:
          return t.displayName || "Context";
        case Z:
          return (t._context.displayName || "Context") + ".Consumer";
        case K:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case I:
          return e = t.displayName || null, e !== null ? e : it(t.type) || "Memo";
        case $:
          e = t._payload, t = t._init;
          try {
            return it(t(e));
          } catch {
          }
      }
    return null;
  }
  var nt = Array.isArray, D = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, tt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, mt = [], pt = -1;
  function w(t) {
    return { current: t };
  }
  function L(t) {
    0 > pt || (t.current = mt[pt], mt[pt] = null, pt--);
  }
  function V(t, e) {
    pt++, mt[pt] = t.current, t.current = e;
  }
  var F = w(null), at = w(null), ot = w(null), J = w(null);
  function xt(t, e) {
    switch (V(ot, e), V(at, t), V(F, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? m1(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = m1(e), t = v1(e, t);
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
    L(F), V(F, t);
  }
  function Bt() {
    L(F), L(at), L(ot);
  }
  function Ue(t) {
    t.memoizedState !== null && V(J, t);
    var e = F.current, n = v1(e, t.type);
    e !== n && (V(at, t), V(F, n));
  }
  function ge(t) {
    at.current === t && (L(F), L(at)), J.current === t && (L(J), ti._currentValue = tt);
  }
  var ze, bl;
  function Ve(t) {
    if (ze === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ze = e && e[1] || "", bl = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ze + t + bl;
  }
  var ce = !1;
  function Pe(t, e) {
    if (!t || ce) return "";
    ce = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var H = function() {
                throw Error();
              };
              if (Object.defineProperty(H.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(H, []);
                } catch (x) {
                  var z = x;
                }
                Reflect.construct(t, [], H);
              } else {
                try {
                  H.call();
                } catch (x) {
                  z = x;
                }
                t.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                z = x;
              }
              (H = t()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (x) {
            if (x && z && typeof x.stack == "string")
              return [x.stack, z.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      i && i.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = l.DetermineComponentFrameRoot(), s = u[0], h = u[1];
      if (s && h) {
        var E = s.split(`
`), U = h.split(`
`);
        for (i = l = 0; l < E.length && !E[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; i < U.length && !U[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (l === E.length || i === U.length)
          for (l = E.length - 1, i = U.length - 1; 1 <= l && 0 <= i && E[l] !== U[i]; )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (E[l] !== U[i]) {
            if (l !== 1 || i !== 1)
              do
                if (l--, i--, 0 > i || E[l] !== U[i]) {
                  var Q = `
` + E[l].replace(" at new ", " at ");
                  return t.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", t.displayName)), Q;
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      ce = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Ve(n) : "";
  }
  function Sl(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ve(t.type);
      case 16:
        return Ve("Lazy");
      case 13:
        return t.child !== e && e !== null ? Ve("Suspense Fallback") : Ve("Suspense");
      case 19:
        return Ve("SuspenseList");
      case 0:
      case 15:
        return Pe(t.type, !1);
      case 11:
        return Pe(t.type.render, !1);
      case 1:
        return Pe(t.type, !0);
      case 31:
        return Ve("Activity");
      default:
        return "";
    }
  }
  function me(t) {
    try {
      var e = "", n = null;
      do
        e += Sl(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Xe = Object.prototype.hasOwnProperty, Ke = a.unstable_scheduleCallback, vn = a.unstable_cancelCallback, sa = a.unstable_shouldYield, vi = a.unstable_requestPaint, $t = a.unstable_now, wl = a.unstable_getCurrentPriorityLevel, Fo = a.unstable_ImmediatePriority, Wo = a.unstable_UserBlockingPriority, pi = a.unstable_NormalPriority, m2 = a.unstable_LowPriority, ko = a.unstable_IdlePriority, v2 = a.log, p2 = a.unstable_setDisableYieldValue, Aa = null, ve = null;
  function pn(t) {
    if (typeof v2 == "function" && p2(t), ve && typeof ve.setStrictMode == "function")
      try {
        ve.setStrictMode(Aa, t);
      } catch {
      }
  }
  var pe = Math.clz32 ? Math.clz32 : S2, E2 = Math.log, b2 = Math.LN2;
  function S2(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (E2(t) / b2 | 0) | 0;
  }
  var Ei = 256, bi = 262144, Si = 4194304;
  function Fn(t) {
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
  function wi(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var i = 0, u = t.suspendedLanes, s = t.pingedLanes;
    t = t.warmLanes;
    var h = l & 134217727;
    return h !== 0 ? (l = h & ~u, l !== 0 ? i = Fn(l) : (s &= h, s !== 0 ? i = Fn(s) : n || (n = h & ~t, n !== 0 && (i = Fn(n))))) : (h = l & ~u, h !== 0 ? i = Fn(h) : s !== 0 ? i = Fn(s) : n || (n = l & ~t, n !== 0 && (i = Fn(n)))), i === 0 ? 0 : e !== 0 && e !== i && (e & u) === 0 && (u = i & -i, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : i;
  }
  function da(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function w2(t, e) {
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
  function Po() {
    var t = Si;
    return Si <<= 1, (Si & 62914560) === 0 && (Si = 4194304), t;
  }
  function nf(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function ha(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function B2(t, e, n, l, i, u) {
    var s = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var h = t.entanglements, E = t.expirationTimes, U = t.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
      var Q = 31 - pe(n), H = 1 << Q;
      h[Q] = 0, E[Q] = -1;
      var z = U[Q];
      if (z !== null)
        for (U[Q] = null, Q = 0; Q < z.length; Q++) {
          var x = z[Q];
          x !== null && (x.lane &= -536870913);
        }
      n &= ~H;
    }
    l !== 0 && $o(t, l, 0), u !== 0 && i === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(s & ~e));
  }
  function $o(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - pe(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 261930;
  }
  function tr(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var l = 31 - pe(n), i = 1 << l;
      i & e | t[l] & e && (t[l] |= e), n &= ~i;
    }
  }
  function er(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : lf(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function lf(t) {
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
  function nr() {
    var t = X.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : I1(t.type));
  }
  function lr(t, e) {
    var n = X.p;
    try {
      return X.p = t, e();
    } finally {
      X.p = n;
    }
  }
  var En = Math.random().toString(36).slice(2), te = "__reactFiber$" + En, oe = "__reactProps$" + En, Bl = "__reactContainer$" + En, uf = "__reactEvents$" + En, T2 = "__reactListeners$" + En, C2 = "__reactHandles$" + En, ar = "__reactResources$" + En, ya = "__reactMarker$" + En;
  function ff(t) {
    delete t[te], delete t[oe], delete t[uf], delete t[T2], delete t[C2];
  }
  function Tl(t) {
    var e = t[te];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[Bl] || n[te]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = T1(t); t !== null; ) {
            if (n = t[te]) return n;
            t = T1(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Cl(t) {
    if (t = t[te] || t[Bl]) {
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
  function Ul(t) {
    var e = t[ar];
    return e || (e = t[ar] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function kt(t) {
    t[ya] = !0;
  }
  var ir = /* @__PURE__ */ new Set(), ur = {};
  function Wn(t, e) {
    zl(t, e), zl(t + "Capture", e);
  }
  function zl(t, e) {
    for (ur[t] = e, t = 0; t < e.length; t++)
      ir.add(e[t]);
  }
  var U2 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), fr = {}, cr = {};
  function z2(t) {
    return Xe.call(cr, t) ? !0 : Xe.call(fr, t) ? !1 : U2.test(t) ? cr[t] = !0 : (fr[t] = !0, !1);
  }
  function Bi(t, e, n) {
    if (z2(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Ti(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function $e(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
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
  function or(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function M2(t, e, n) {
    var l = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var i = l.get, u = l.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(s) {
          n = "" + s, u.call(this, s);
        }
      }), Object.defineProperty(t, e, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(s) {
          n = "" + s;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function cf(t) {
    if (!t._valueTracker) {
      var e = or(t) ? "checked" : "value";
      t._valueTracker = M2(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function rr(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), l = "";
    return t && (l = or(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== n ? (e.setValue(t), !0) : !1;
  }
  function Ci(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var D2 = /[\n"\\]/g;
  function De(t) {
    return t.replace(
      D2,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function of(t, e, n, l, i, u, s, h) {
    t.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"), e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Me(e)) : t.value !== "" + Me(e) && (t.value = "" + Me(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"), e != null ? rf(t, s, Me(e)) : n != null ? rf(t, s, Me(n)) : l != null && t.removeAttribute("value"), i == null && u != null && (t.defaultChecked = !!u), i != null && (t.checked = i && typeof i != "function" && typeof i != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.name = "" + Me(h) : t.removeAttribute("name");
  }
  function sr(t, e, n, l, i, u, s, h) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        cf(t);
        return;
      }
      n = n != null ? "" + Me(n) : "", e = e != null ? "" + Me(e) : n, h || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? i, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = h ? t.checked : !!l, t.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.name = s), cf(t);
  }
  function rf(t, e, n) {
    e === "number" && Ci(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function Ml(t, e, n, l) {
    if (t = t.options, e) {
      e = {};
      for (var i = 0; i < n.length; i++)
        e["$" + n[i]] = !0;
      for (n = 0; n < t.length; n++)
        i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Me(n), e = null, i = 0; i < t.length; i++) {
        if (t[i].value === n) {
          t[i].selected = !0, l && (t[i].defaultSelected = !0);
          return;
        }
        e !== null || t[i].disabled || (e = t[i]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ar(t, e, n) {
    if (e != null && (e = "" + Me(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Me(n) : "";
  }
  function dr(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(c(92));
        if (nt(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), e = n;
    }
    n = Me(e), t.defaultValue = n, l = t.textContent, l === n && l !== "" && l !== null && (t.value = l), cf(t);
  }
  function Dl(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var O2 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function hr(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || O2.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function yr(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(c(62));
    if (t = t.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var i in e)
        l = e[i], e.hasOwnProperty(i) && n[i] !== l && hr(t, i, l);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && hr(t, u, e[u]);
  }
  function sf(t) {
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
  var N2 = /* @__PURE__ */ new Map([
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
  ]), x2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ui(t) {
    return x2.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function tn() {
  }
  var Af = null;
  function df(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Ol = null, Nl = null;
  function gr(t) {
    var e = Cl(t);
    if (e && (t = e.stateNode)) {
      var n = t[oe] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (of(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + De(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var i = l[oe] || null;
                if (!i) throw Error(c(90));
                of(
                  l,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              l = n[e], l.form === t.form && rr(l);
          }
          break t;
        case "textarea":
          Ar(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Ml(t, !!n.multiple, e, !1);
      }
    }
  }
  var hf = !1;
  function mr(t, e, n) {
    if (hf) return t(e, n);
    hf = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (hf = !1, (Ol !== null || Nl !== null) && (hu(), Ol && (e = Ol, t = Nl, Nl = Ol = null, gr(e), t)))
        for (e = 0; e < t.length; e++) gr(t[e]);
    }
  }
  function ma(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[oe] || null;
    if (l === null) return null;
    n = l[e];
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
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        c(231, e, typeof n)
      );
    return n;
  }
  var en = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), yf = !1;
  if (en)
    try {
      var va = {};
      Object.defineProperty(va, "passive", {
        get: function() {
          yf = !0;
        }
      }), window.addEventListener("test", va, va), window.removeEventListener("test", va, va);
    } catch {
      yf = !1;
    }
  var bn = null, gf = null, zi = null;
  function vr() {
    if (zi) return zi;
    var t, e = gf, n = e.length, l, i = "value" in bn ? bn.value : bn.textContent, u = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++) ;
    var s = n - t;
    for (l = 1; l <= s && e[n - l] === i[u - l]; l++) ;
    return zi = i.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Mi(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Di() {
    return !0;
  }
  function pr() {
    return !1;
  }
  function re(t) {
    function e(n, l, i, u, s) {
      this._reactName = n, this._targetInst = i, this.type = l, this.nativeEvent = u, this.target = s, this.currentTarget = null;
      for (var h in t)
        t.hasOwnProperty(h) && (n = t[h], this[h] = n ? n(u) : u[h]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Di : pr, this.isPropagationStopped = pr, this;
    }
    return m(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Di);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Di);
      },
      persist: function() {
      },
      isPersistent: Di
    }), e;
  }
  var kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Oi = re(kn), pa = m({}, kn, { view: 0, detail: 0 }), R2 = re(pa), mf, vf, Ea, Ni = m({}, pa, {
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
    getModifierState: Ef,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ea && (Ea && t.type === "mousemove" ? (mf = t.screenX - Ea.screenX, vf = t.screenY - Ea.screenY) : vf = mf = 0, Ea = t), mf);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : vf;
    }
  }), Er = re(Ni), Q2 = m({}, Ni, { dataTransfer: 0 }), q2 = re(Q2), Y2 = m({}, pa, { relatedTarget: 0 }), pf = re(Y2), L2 = m({}, kn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), H2 = re(L2), G2 = m({}, kn, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), I2 = re(G2), j2 = m({}, kn, { data: 0 }), br = re(j2), Z2 = {
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
  }, V2 = {
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
  }, X2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function K2(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = X2[t]) ? !!e[t] : !1;
  }
  function Ef() {
    return K2;
  }
  var J2 = m({}, pa, {
    key: function(t) {
      if (t.key) {
        var e = Z2[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Mi(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? V2[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ef,
    charCode: function(t) {
      return t.type === "keypress" ? Mi(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Mi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), _2 = re(J2), F2 = m({}, Ni, {
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
  }), Sr = re(F2), W2 = m({}, pa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ef
  }), k2 = re(W2), P2 = m({}, kn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $2 = re(P2), td = m({}, Ni, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ed = re(td), nd = m({}, kn, {
    newState: 0,
    oldState: 0
  }), ld = re(nd), ad = [9, 13, 27, 32], bf = en && "CompositionEvent" in window, ba = null;
  en && "documentMode" in document && (ba = document.documentMode);
  var id = en && "TextEvent" in window && !ba, wr = en && (!bf || ba && 8 < ba && 11 >= ba), Br = " ", Tr = !1;
  function Cr(t, e) {
    switch (t) {
      case "keyup":
        return ad.indexOf(e.keyCode) !== -1;
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
  function Ur(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var xl = !1;
  function ud(t, e) {
    switch (t) {
      case "compositionend":
        return Ur(e);
      case "keypress":
        return e.which !== 32 ? null : (Tr = !0, Br);
      case "textInput":
        return t = e.data, t === Br && Tr ? null : t;
      default:
        return null;
    }
  }
  function fd(t, e) {
    if (xl)
      return t === "compositionend" || !bf && Cr(t, e) ? (t = vr(), zi = gf = bn = null, xl = !1, t) : null;
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
        return wr && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var cd = {
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
  function zr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!cd[t.type] : e === "textarea";
  }
  function Mr(t, e, n, l) {
    Ol ? Nl ? Nl.push(l) : Nl = [l] : Ol = l, e = bu(e, "onChange"), 0 < e.length && (n = new Oi(
      "onChange",
      "change",
      null,
      n,
      l
    ), t.push({ event: n, listeners: e }));
  }
  var Sa = null, wa = null;
  function od(t) {
    s1(t, 0);
  }
  function xi(t) {
    var e = ga(t);
    if (rr(e)) return t;
  }
  function Dr(t, e) {
    if (t === "change") return e;
  }
  var Or = !1;
  if (en) {
    var Sf;
    if (en) {
      var wf = "oninput" in document;
      if (!wf) {
        var Nr = document.createElement("div");
        Nr.setAttribute("oninput", "return;"), wf = typeof Nr.oninput == "function";
      }
      Sf = wf;
    } else Sf = !1;
    Or = Sf && (!document.documentMode || 9 < document.documentMode);
  }
  function xr() {
    Sa && (Sa.detachEvent("onpropertychange", Rr), wa = Sa = null);
  }
  function Rr(t) {
    if (t.propertyName === "value" && xi(wa)) {
      var e = [];
      Mr(
        e,
        wa,
        t,
        df(t)
      ), mr(od, e);
    }
  }
  function rd(t, e, n) {
    t === "focusin" ? (xr(), Sa = e, wa = n, Sa.attachEvent("onpropertychange", Rr)) : t === "focusout" && xr();
  }
  function sd(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return xi(wa);
  }
  function Ad(t, e) {
    if (t === "click") return xi(e);
  }
  function dd(t, e) {
    if (t === "input" || t === "change")
      return xi(e);
  }
  function hd(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ee = typeof Object.is == "function" ? Object.is : hd;
  function Ba(t, e) {
    if (Ee(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var i = n[l];
      if (!Xe.call(e, i) || !Ee(t[i], e[i]))
        return !1;
    }
    return !0;
  }
  function Qr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function qr(t, e) {
    var n = Qr(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = t + n.textContent.length, t <= e && l >= e)
          return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Qr(n);
    }
  }
  function Yr(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Yr(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Lr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Ci(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Ci(t.document);
    }
    return e;
  }
  function Bf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var yd = en && "documentMode" in document && 11 >= document.documentMode, Rl = null, Tf = null, Ta = null, Cf = !1;
  function Hr(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Cf || Rl == null || Rl !== Ci(l) || (l = Rl, "selectionStart" in l && Bf(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ta && Ba(Ta, l) || (Ta = l, l = bu(Tf, "onSelect"), 0 < l.length && (e = new Oi(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: l }), e.target = Rl)));
  }
  function Pn(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Ql = {
    animationend: Pn("Animation", "AnimationEnd"),
    animationiteration: Pn("Animation", "AnimationIteration"),
    animationstart: Pn("Animation", "AnimationStart"),
    transitionrun: Pn("Transition", "TransitionRun"),
    transitionstart: Pn("Transition", "TransitionStart"),
    transitioncancel: Pn("Transition", "TransitionCancel"),
    transitionend: Pn("Transition", "TransitionEnd")
  }, Uf = {}, Gr = {};
  en && (Gr = document.createElement("div").style, "AnimationEvent" in window || (delete Ql.animationend.animation, delete Ql.animationiteration.animation, delete Ql.animationstart.animation), "TransitionEvent" in window || delete Ql.transitionend.transition);
  function $n(t) {
    if (Uf[t]) return Uf[t];
    if (!Ql[t]) return t;
    var e = Ql[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Gr)
        return Uf[t] = e[n];
    return t;
  }
  var Ir = $n("animationend"), jr = $n("animationiteration"), Zr = $n("animationstart"), gd = $n("transitionrun"), md = $n("transitionstart"), vd = $n("transitioncancel"), Vr = $n("transitionend"), Xr = /* @__PURE__ */ new Map(), zf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  zf.push("scrollEnd");
  function He(t, e) {
    Xr.set(t, e), Wn(e, [t]);
  }
  var Ri = typeof reportError == "function" ? reportError : function(t) {
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
  }, Oe = [], ql = 0, Mf = 0;
  function Qi() {
    for (var t = ql, e = Mf = ql = 0; e < t; ) {
      var n = Oe[e];
      Oe[e++] = null;
      var l = Oe[e];
      Oe[e++] = null;
      var i = Oe[e];
      Oe[e++] = null;
      var u = Oe[e];
      if (Oe[e++] = null, l !== null && i !== null) {
        var s = l.pending;
        s === null ? i.next = i : (i.next = s.next, s.next = i), l.pending = i;
      }
      u !== 0 && Kr(n, i, u);
    }
  }
  function qi(t, e, n, l) {
    Oe[ql++] = t, Oe[ql++] = e, Oe[ql++] = n, Oe[ql++] = l, Mf |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function Df(t, e, n, l) {
    return qi(t, e, n, l), Yi(t);
  }
  function tl(t, e) {
    return qi(t, null, null, e), Yi(t);
  }
  function Kr(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var i = !1, u = t.return; u !== null; )
      u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (i = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, i && e !== null && (i = 31 - pe(n), t = u.hiddenUpdates, l = t[i], l === null ? t[i] = [e] : l.push(e), e.lane = n | 536870912), u) : null;
  }
  function Yi(t) {
    if (50 < Ja)
      throw Ja = 0, Hc = null, Error(c(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Yl = {};
  function pd(t, e, n, l) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function be(t, e, n, l) {
    return new pd(t, e, n, l);
  }
  function Of(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function nn(t, e) {
    var n = t.alternate;
    return n === null ? (n = be(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Jr(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Li(t, e, n, l, i, u) {
    var s = 0;
    if (l = t, typeof t == "function") Of(t) && (s = 1);
    else if (typeof t == "string")
      s = Bh(
        t,
        n,
        F.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case At:
          return t = be(31, n, e, i), t.elementType = At, t.lanes = u, t;
        case R:
          return el(n.children, i, u, e);
        case B:
          s = 8, i |= 24;
          break;
        case M:
          return t = be(12, n, e, i | 2), t.elementType = M, t.lanes = u, t;
        case _:
          return t = be(13, n, e, i), t.elementType = _, t.lanes = u, t;
        case j:
          return t = be(19, n, e, i), t.elementType = j, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case G:
                s = 10;
                break t;
              case Z:
                s = 9;
                break t;
              case K:
                s = 11;
                break t;
              case I:
                s = 14;
                break t;
              case $:
                s = 16, l = null;
                break t;
            }
          s = 29, n = Error(
            c(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = be(s, n, e, i), e.elementType = t, e.type = l, e.lanes = u, e;
  }
  function el(t, e, n, l) {
    return t = be(7, t, l, e), t.lanes = n, t;
  }
  function Nf(t, e, n) {
    return t = be(6, t, null, e), t.lanes = n, t;
  }
  function _r(t) {
    var e = be(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function xf(t, e, n) {
    return e = be(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Fr = /* @__PURE__ */ new WeakMap();
  function Ne(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Fr.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: me(e)
      }, Fr.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: me(e)
    };
  }
  var Ll = [], Hl = 0, Hi = null, Ca = 0, xe = [], Re = 0, Sn = null, Je = 1, _e = "";
  function ln(t, e) {
    Ll[Hl++] = Ca, Ll[Hl++] = Hi, Hi = t, Ca = e;
  }
  function Wr(t, e, n) {
    xe[Re++] = Je, xe[Re++] = _e, xe[Re++] = Sn, Sn = t;
    var l = Je;
    t = _e;
    var i = 32 - pe(l) - 1;
    l &= ~(1 << i), n += 1;
    var u = 32 - pe(e) + i;
    if (30 < u) {
      var s = i - i % 5;
      u = (l & (1 << s) - 1).toString(32), l >>= s, i -= s, Je = 1 << 32 - pe(e) + i | n << i | l, _e = u + t;
    } else
      Je = 1 << u | n << i | l, _e = t;
  }
  function Rf(t) {
    t.return !== null && (ln(t, 1), Wr(t, 1, 0));
  }
  function Qf(t) {
    for (; t === Hi; )
      Hi = Ll[--Hl], Ll[Hl] = null, Ca = Ll[--Hl], Ll[Hl] = null;
    for (; t === Sn; )
      Sn = xe[--Re], xe[Re] = null, _e = xe[--Re], xe[Re] = null, Je = xe[--Re], xe[Re] = null;
  }
  function kr(t, e) {
    xe[Re++] = Je, xe[Re++] = _e, xe[Re++] = Sn, Je = e.id, _e = e.overflow, Sn = t;
  }
  var ee = null, Rt = null, vt = !1, wn = null, Qe = !1, qf = Error(c(519));
  function Bn(t) {
    var e = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ua(Ne(e, t)), qf;
  }
  function Pr(t) {
    var e = t.stateNode, n = t.type, l = t.memoizedProps;
    switch (e[te] = t, e[oe] = l, n) {
      case "dialog":
        ht("cancel", e), ht("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ht("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Fa.length; n++)
          ht(Fa[n], e);
        break;
      case "source":
        ht("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ht("error", e), ht("load", e);
        break;
      case "details":
        ht("toggle", e);
        break;
      case "input":
        ht("invalid", e), sr(
          e,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        ht("invalid", e);
        break;
      case "textarea":
        ht("invalid", e), dr(e, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === !0 || y1(e.textContent, n) ? (l.popover != null && (ht("beforetoggle", e), ht("toggle", e)), l.onScroll != null && ht("scroll", e), l.onScrollEnd != null && ht("scrollend", e), l.onClick != null && (e.onclick = tn), e = !0) : e = !1, e || Bn(t, !0);
  }
  function $r(t) {
    for (ee = t.return; ee; )
      switch (ee.tag) {
        case 5:
        case 31:
        case 13:
          Qe = !1;
          return;
        case 27:
        case 3:
          Qe = !0;
          return;
        default:
          ee = ee.return;
      }
  }
  function Gl(t) {
    if (t !== ee) return !1;
    if (!vt) return $r(t), vt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || to(t.type, t.memoizedProps)), n = !n), n && Rt && Bn(t), $r(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Rt = B1(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Rt = B1(t);
    } else
      e === 27 ? (e = Rt, Ln(t.type) ? (t = io, io = null, Rt = t) : Rt = e) : Rt = ee ? Ye(t.stateNode.nextSibling) : null;
    return !0;
  }
  function nl() {
    Rt = ee = null, vt = !1;
  }
  function Yf() {
    var t = wn;
    return t !== null && (he === null ? he = t : he.push.apply(
      he,
      t
    ), wn = null), t;
  }
  function Ua(t) {
    wn === null ? wn = [t] : wn.push(t);
  }
  var Lf = w(null), ll = null, an = null;
  function Tn(t, e, n) {
    V(Lf, e._currentValue), e._currentValue = n;
  }
  function un(t) {
    t._currentValue = Lf.current, L(Lf);
  }
  function Hf(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Gf(t, e, n, l) {
    var i = t.child;
    for (i !== null && (i.return = t); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var s = i.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var h = u;
          u = i;
          for (var E = 0; E < e.length; E++)
            if (h.context === e[E]) {
              u.lanes |= n, h = u.alternate, h !== null && (h.lanes |= n), Hf(
                u.return,
                n,
                t
              ), l || (s = null);
              break t;
            }
          u = h.next;
        }
      } else if (i.tag === 18) {
        if (s = i.return, s === null) throw Error(c(341));
        s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), Hf(s, n, t), s = null;
      } else s = i.child;
      if (s !== null) s.return = i;
      else
        for (s = i; s !== null; ) {
          if (s === t) {
            s = null;
            break;
          }
          if (i = s.sibling, i !== null) {
            i.return = s.return, s = i;
            break;
          }
          s = s.return;
        }
      i = s;
    }
  }
  function Il(t, e, n, l) {
    t = null;
    for (var i = e, u = !1; i !== null; ) {
      if (!u) {
        if ((i.flags & 524288) !== 0) u = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var s = i.alternate;
        if (s === null) throw Error(c(387));
        if (s = s.memoizedProps, s !== null) {
          var h = i.type;
          Ee(i.pendingProps.value, s.value) || (t !== null ? t.push(h) : t = [h]);
        }
      } else if (i === J.current) {
        if (s = i.alternate, s === null) throw Error(c(387));
        s.memoizedState.memoizedState !== i.memoizedState.memoizedState && (t !== null ? t.push(ti) : t = [ti]);
      }
      i = i.return;
    }
    t !== null && Gf(
      e,
      t,
      n,
      l
    ), e.flags |= 262144;
  }
  function Gi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ee(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function al(t) {
    ll = t, an = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ne(t) {
    return ts(ll, t);
  }
  function Ii(t, e) {
    return ll === null && al(t), ts(t, e);
  }
  function ts(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, an === null) {
      if (t === null) throw Error(c(308));
      an = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else an = an.next = e;
    return n;
  }
  var Ed = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        t.push(l);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, bd = a.unstable_scheduleCallback, Sd = a.unstable_NormalPriority, Vt = {
    $$typeof: G,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function If() {
    return {
      controller: new Ed(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function za(t) {
    t.refCount--, t.refCount === 0 && bd(Sd, function() {
      t.controller.abort();
    });
  }
  var Ma = null, jf = 0, jl = 0, Zl = null;
  function wd(t, e) {
    if (Ma === null) {
      var n = Ma = [];
      jf = 0, jl = Xc(), Zl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return jf++, e.then(es, es), e;
  }
  function es() {
    if (--jf === 0 && Ma !== null) {
      Zl !== null && (Zl.status = "fulfilled");
      var t = Ma;
      Ma = null, jl = 0, Zl = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Bd(t, e) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(i) {
        n.push(i);
      }
    };
    return t.then(
      function() {
        l.status = "fulfilled", l.value = e;
        for (var i = 0; i < n.length; i++) (0, n[i])(e);
      },
      function(i) {
        for (l.status = "rejected", l.reason = i, i = 0; i < n.length; i++)
          (0, n[i])(void 0);
      }
    ), l;
  }
  var ns = D.S;
  D.S = function(t, e) {
    H0 = $t(), typeof e == "object" && e !== null && typeof e.then == "function" && wd(t, e), ns !== null && ns(t, e);
  };
  var il = w(null);
  function Zf() {
    var t = il.current;
    return t !== null ? t : Nt.pooledCache;
  }
  function ji(t, e) {
    e === null ? V(il, il.current) : V(il, e.pool);
  }
  function ls() {
    var t = Zf();
    return t === null ? null : { parent: Vt._currentValue, pool: t };
  }
  var Vl = Error(c(460)), Vf = Error(c(474)), Zi = Error(c(542)), Vi = { then: function() {
  } };
  function as(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function is(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(tn, tn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, fs(t), t;
      default:
        if (typeof e.status == "string") e.then(tn, tn);
        else {
          if (t = Nt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(c(482));
          t = e, t.status = "pending", t.then(
            function(l) {
              if (e.status === "pending") {
                var i = e;
                i.status = "fulfilled", i.value = l;
              }
            },
            function(l) {
              if (e.status === "pending") {
                var i = e;
                i.status = "rejected", i.reason = l;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, fs(t), t;
        }
        throw fl = e, Vl;
    }
  }
  function ul(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (fl = n, Vl) : n;
    }
  }
  var fl = null;
  function us() {
    if (fl === null) throw Error(c(459));
    var t = fl;
    return fl = null, t;
  }
  function fs(t) {
    if (t === Vl || t === Zi)
      throw Error(c(483));
  }
  var Xl = null, Da = 0;
  function Xi(t) {
    var e = Da;
    return Da += 1, Xl === null && (Xl = []), is(Xl, t, e);
  }
  function Oa(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ki(t, e) {
    throw e.$$typeof === b ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(
      c(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function cs(t) {
    function e(T, S) {
      if (t) {
        var C = T.deletions;
        C === null ? (T.deletions = [S], T.flags |= 16) : C.push(S);
      }
    }
    function n(T, S) {
      if (!t) return null;
      for (; S !== null; )
        e(T, S), S = S.sibling;
      return null;
    }
    function l(T) {
      for (var S = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? S.set(T.key, T) : S.set(T.index, T), T = T.sibling;
      return S;
    }
    function i(T, S) {
      return T = nn(T, S), T.index = 0, T.sibling = null, T;
    }
    function u(T, S, C) {
      return T.index = C, t ? (C = T.alternate, C !== null ? (C = C.index, C < S ? (T.flags |= 67108866, S) : C) : (T.flags |= 67108866, S)) : (T.flags |= 1048576, S);
    }
    function s(T) {
      return t && T.alternate === null && (T.flags |= 67108866), T;
    }
    function h(T, S, C, Y) {
      return S === null || S.tag !== 6 ? (S = Nf(C, T.mode, Y), S.return = T, S) : (S = i(S, C), S.return = T, S);
    }
    function E(T, S, C, Y) {
      var et = C.type;
      return et === R ? Q(
        T,
        S,
        C.props.children,
        Y,
        C.key
      ) : S !== null && (S.elementType === et || typeof et == "object" && et !== null && et.$$typeof === $ && ul(et) === S.type) ? (S = i(S, C.props), Oa(S, C), S.return = T, S) : (S = Li(
        C.type,
        C.key,
        C.props,
        null,
        T.mode,
        Y
      ), Oa(S, C), S.return = T, S);
    }
    function U(T, S, C, Y) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== C.containerInfo || S.stateNode.implementation !== C.implementation ? (S = xf(C, T.mode, Y), S.return = T, S) : (S = i(S, C.children || []), S.return = T, S);
    }
    function Q(T, S, C, Y, et) {
      return S === null || S.tag !== 7 ? (S = el(
        C,
        T.mode,
        Y,
        et
      ), S.return = T, S) : (S = i(S, C), S.return = T, S);
    }
    function H(T, S, C) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return S = Nf(
          "" + S,
          T.mode,
          C
        ), S.return = T, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case N:
            return C = Li(
              S.type,
              S.key,
              S.props,
              null,
              T.mode,
              C
            ), Oa(C, S), C.return = T, C;
          case O:
            return S = xf(
              S,
              T.mode,
              C
            ), S.return = T, S;
          case $:
            return S = ul(S), H(T, S, C);
        }
        if (nt(S) || ft(S))
          return S = el(
            S,
            T.mode,
            C,
            null
          ), S.return = T, S;
        if (typeof S.then == "function")
          return H(T, Xi(S), C);
        if (S.$$typeof === G)
          return H(
            T,
            Ii(T, S),
            C
          );
        Ki(T, S);
      }
      return null;
    }
    function z(T, S, C, Y) {
      var et = S !== null ? S.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return et !== null ? null : h(T, S, "" + C, Y);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case N:
            return C.key === et ? E(T, S, C, Y) : null;
          case O:
            return C.key === et ? U(T, S, C, Y) : null;
          case $:
            return C = ul(C), z(T, S, C, Y);
        }
        if (nt(C) || ft(C))
          return et !== null ? null : Q(T, S, C, Y, null);
        if (typeof C.then == "function")
          return z(
            T,
            S,
            Xi(C),
            Y
          );
        if (C.$$typeof === G)
          return z(
            T,
            S,
            Ii(T, C),
            Y
          );
        Ki(T, C);
      }
      return null;
    }
    function x(T, S, C, Y, et) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
        return T = T.get(C) || null, h(S, T, "" + Y, et);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case N:
            return T = T.get(
              Y.key === null ? C : Y.key
            ) || null, E(S, T, Y, et);
          case O:
            return T = T.get(
              Y.key === null ? C : Y.key
            ) || null, U(S, T, Y, et);
          case $:
            return Y = ul(Y), x(
              T,
              S,
              C,
              Y,
              et
            );
        }
        if (nt(Y) || ft(Y))
          return T = T.get(C) || null, Q(S, T, Y, et, null);
        if (typeof Y.then == "function")
          return x(
            T,
            S,
            C,
            Xi(Y),
            et
          );
        if (Y.$$typeof === G)
          return x(
            T,
            S,
            C,
            Ii(S, Y),
            et
          );
        Ki(S, Y);
      }
      return null;
    }
    function W(T, S, C, Y) {
      for (var et = null, St = null, P = S, st = S = 0, gt = null; P !== null && st < C.length; st++) {
        P.index > st ? (gt = P, P = null) : gt = P.sibling;
        var wt = z(
          T,
          P,
          C[st],
          Y
        );
        if (wt === null) {
          P === null && (P = gt);
          break;
        }
        t && P && wt.alternate === null && e(T, P), S = u(wt, S, st), St === null ? et = wt : St.sibling = wt, St = wt, P = gt;
      }
      if (st === C.length)
        return n(T, P), vt && ln(T, st), et;
      if (P === null) {
        for (; st < C.length; st++)
          P = H(T, C[st], Y), P !== null && (S = u(
            P,
            S,
            st
          ), St === null ? et = P : St.sibling = P, St = P);
        return vt && ln(T, st), et;
      }
      for (P = l(P); st < C.length; st++)
        gt = x(
          P,
          T,
          st,
          C[st],
          Y
        ), gt !== null && (t && gt.alternate !== null && P.delete(
          gt.key === null ? st : gt.key
        ), S = u(
          gt,
          S,
          st
        ), St === null ? et = gt : St.sibling = gt, St = gt);
      return t && P.forEach(function(Zn) {
        return e(T, Zn);
      }), vt && ln(T, st), et;
    }
    function lt(T, S, C, Y) {
      if (C == null) throw Error(c(151));
      for (var et = null, St = null, P = S, st = S = 0, gt = null, wt = C.next(); P !== null && !wt.done; st++, wt = C.next()) {
        P.index > st ? (gt = P, P = null) : gt = P.sibling;
        var Zn = z(T, P, wt.value, Y);
        if (Zn === null) {
          P === null && (P = gt);
          break;
        }
        t && P && Zn.alternate === null && e(T, P), S = u(Zn, S, st), St === null ? et = Zn : St.sibling = Zn, St = Zn, P = gt;
      }
      if (wt.done)
        return n(T, P), vt && ln(T, st), et;
      if (P === null) {
        for (; !wt.done; st++, wt = C.next())
          wt = H(T, wt.value, Y), wt !== null && (S = u(wt, S, st), St === null ? et = wt : St.sibling = wt, St = wt);
        return vt && ln(T, st), et;
      }
      for (P = l(P); !wt.done; st++, wt = C.next())
        wt = x(P, T, st, wt.value, Y), wt !== null && (t && wt.alternate !== null && P.delete(wt.key === null ? st : wt.key), S = u(wt, S, st), St === null ? et = wt : St.sibling = wt, St = wt);
      return t && P.forEach(function(Qh) {
        return e(T, Qh);
      }), vt && ln(T, st), et;
    }
    function Dt(T, S, C, Y) {
      if (typeof C == "object" && C !== null && C.type === R && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case N:
            t: {
              for (var et = C.key; S !== null; ) {
                if (S.key === et) {
                  if (et = C.type, et === R) {
                    if (S.tag === 7) {
                      n(
                        T,
                        S.sibling
                      ), Y = i(
                        S,
                        C.props.children
                      ), Y.return = T, T = Y;
                      break t;
                    }
                  } else if (S.elementType === et || typeof et == "object" && et !== null && et.$$typeof === $ && ul(et) === S.type) {
                    n(
                      T,
                      S.sibling
                    ), Y = i(S, C.props), Oa(Y, C), Y.return = T, T = Y;
                    break t;
                  }
                  n(T, S);
                  break;
                } else e(T, S);
                S = S.sibling;
              }
              C.type === R ? (Y = el(
                C.props.children,
                T.mode,
                Y,
                C.key
              ), Y.return = T, T = Y) : (Y = Li(
                C.type,
                C.key,
                C.props,
                null,
                T.mode,
                Y
              ), Oa(Y, C), Y.return = T, T = Y);
            }
            return s(T);
          case O:
            t: {
              for (et = C.key; S !== null; ) {
                if (S.key === et)
                  if (S.tag === 4 && S.stateNode.containerInfo === C.containerInfo && S.stateNode.implementation === C.implementation) {
                    n(
                      T,
                      S.sibling
                    ), Y = i(S, C.children || []), Y.return = T, T = Y;
                    break t;
                  } else {
                    n(T, S);
                    break;
                  }
                else e(T, S);
                S = S.sibling;
              }
              Y = xf(C, T.mode, Y), Y.return = T, T = Y;
            }
            return s(T);
          case $:
            return C = ul(C), Dt(
              T,
              S,
              C,
              Y
            );
        }
        if (nt(C))
          return W(
            T,
            S,
            C,
            Y
          );
        if (ft(C)) {
          if (et = ft(C), typeof et != "function") throw Error(c(150));
          return C = et.call(C), lt(
            T,
            S,
            C,
            Y
          );
        }
        if (typeof C.then == "function")
          return Dt(
            T,
            S,
            Xi(C),
            Y
          );
        if (C.$$typeof === G)
          return Dt(
            T,
            S,
            Ii(T, C),
            Y
          );
        Ki(T, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, S !== null && S.tag === 6 ? (n(T, S.sibling), Y = i(S, C), Y.return = T, T = Y) : (n(T, S), Y = Nf(C, T.mode, Y), Y.return = T, T = Y), s(T)) : n(T, S);
    }
    return function(T, S, C, Y) {
      try {
        Da = 0;
        var et = Dt(
          T,
          S,
          C,
          Y
        );
        return Xl = null, et;
      } catch (P) {
        if (P === Vl || P === Zi) throw P;
        var St = be(29, P, null, T.mode);
        return St.lanes = Y, St.return = T, St;
      } finally {
      }
    };
  }
  var cl = cs(!0), os = cs(!1), Cn = !1;
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
  function Un(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function zn(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Tt & 2) !== 0) {
      var i = l.pending;
      return i === null ? e.next = e : (e.next = i.next, i.next = e), l.pending = e, e = Yi(t), Kr(t, null, n), e;
    }
    return qi(t, l, e, n), Yi(t);
  }
  function Na(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, tr(t, n);
    }
  }
  function Jf(t, e) {
    var n = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var i = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? i = u = s : u = u.next = s, n = n.next;
        } while (n !== null);
        u === null ? i = u = e : u = u.next = e;
      } else i = u = e;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var _f = !1;
  function xa() {
    if (_f) {
      var t = Zl;
      if (t !== null) throw t;
    }
  }
  function Ra(t, e, n, l) {
    _f = !1;
    var i = t.updateQueue;
    Cn = !1;
    var u = i.firstBaseUpdate, s = i.lastBaseUpdate, h = i.shared.pending;
    if (h !== null) {
      i.shared.pending = null;
      var E = h, U = E.next;
      E.next = null, s === null ? u = U : s.next = U, s = E;
      var Q = t.alternate;
      Q !== null && (Q = Q.updateQueue, h = Q.lastBaseUpdate, h !== s && (h === null ? Q.firstBaseUpdate = U : h.next = U, Q.lastBaseUpdate = E));
    }
    if (u !== null) {
      var H = i.baseState;
      s = 0, Q = U = E = null, h = u;
      do {
        var z = h.lane & -536870913, x = z !== h.lane;
        if (x ? (yt & z) === z : (l & z) === z) {
          z !== 0 && z === jl && (_f = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          t: {
            var W = t, lt = h;
            z = e;
            var Dt = n;
            switch (lt.tag) {
              case 1:
                if (W = lt.payload, typeof W == "function") {
                  H = W.call(Dt, H, z);
                  break t;
                }
                H = W;
                break t;
              case 3:
                W.flags = W.flags & -65537 | 128;
              case 0:
                if (W = lt.payload, z = typeof W == "function" ? W.call(Dt, H, z) : W, z == null) break t;
                H = m({}, H, z);
                break t;
              case 2:
                Cn = !0;
            }
          }
          z = h.callback, z !== null && (t.flags |= 64, x && (t.flags |= 8192), x = i.callbacks, x === null ? i.callbacks = [z] : x.push(z));
        } else
          x = {
            lane: z,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, Q === null ? (U = Q = x, E = H) : Q = Q.next = x, s |= z;
        if (h = h.next, h === null) {
          if (h = i.shared.pending, h === null)
            break;
          x = h, h = x.next, x.next = null, i.lastBaseUpdate = x, i.shared.pending = null;
        }
      } while (!0);
      Q === null && (E = H), i.baseState = E, i.firstBaseUpdate = U, i.lastBaseUpdate = Q, u === null && (i.shared.lanes = 0), xn |= s, t.lanes = s, t.memoizedState = H;
    }
  }
  function rs(t, e) {
    if (typeof t != "function")
      throw Error(c(191, t));
    t.call(e);
  }
  function ss(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        rs(n[t], e);
  }
  var Kl = w(null), Ji = w(0);
  function As(t, e) {
    t = yn, V(Ji, t), V(Kl, e), yn = t | e.baseLanes;
  }
  function Ff() {
    V(Ji, yn), V(Kl, Kl.current);
  }
  function Wf() {
    yn = Ji.current, L(Kl), L(Ji);
  }
  var Se = w(null), qe = null;
  function Mn(t) {
    var e = t.alternate;
    V(Gt, Gt.current & 1), V(Se, t), qe === null && (e === null || Kl.current !== null || e.memoizedState !== null) && (qe = t);
  }
  function kf(t) {
    V(Gt, Gt.current), V(Se, t), qe === null && (qe = t);
  }
  function ds(t) {
    t.tag === 22 ? (V(Gt, Gt.current), V(Se, t), qe === null && (qe = t)) : Dn();
  }
  function Dn() {
    V(Gt, Gt.current), V(Se, Se.current);
  }
  function we(t) {
    L(Se), qe === t && (qe = null), L(Gt);
  }
  var Gt = w(0);
  function _i(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || lo(n) || ao(n)))
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
  var fn = 0, rt = null, zt = null, Xt = null, Fi = !1, Jl = !1, ol = !1, Wi = 0, Qa = 0, _l = null, Td = 0;
  function Lt() {
    throw Error(c(321));
  }
  function Pf(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Ee(t[n], e[n])) return !1;
    return !0;
  }
  function $f(t, e, n, l, i, u) {
    return fn = u, rt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, D.H = t === null || t.memoizedState === null ? Ws : hc, ol = !1, u = n(l, i), ol = !1, Jl && (u = ys(
      e,
      n,
      l,
      i
    )), hs(t), u;
  }
  function hs(t) {
    D.H = La;
    var e = zt !== null && zt.next !== null;
    if (fn = 0, Xt = zt = rt = null, Fi = !1, Qa = 0, _l = null, e) throw Error(c(300));
    t === null || Kt || (t = t.dependencies, t !== null && Gi(t) && (Kt = !0));
  }
  function ys(t, e, n, l) {
    rt = t;
    var i = 0;
    do {
      if (Jl && (_l = null), Qa = 0, Jl = !1, 25 <= i) throw Error(c(301));
      if (i += 1, Xt = zt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      D.H = ks, u = e(n, l);
    } while (Jl);
    return u;
  }
  function Cd() {
    var t = D.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? qa(e) : e, t = t.useState()[0], (zt !== null ? zt.memoizedState : null) !== t && (rt.flags |= 1024), e;
  }
  function tc() {
    var t = Wi !== 0;
    return Wi = 0, t;
  }
  function ec(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function nc(t) {
    if (Fi) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Fi = !1;
    }
    fn = 0, Xt = zt = rt = null, Jl = !1, Qa = Wi = 0, _l = null;
  }
  function fe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Xt === null ? rt.memoizedState = Xt = t : Xt = Xt.next = t, Xt;
  }
  function It() {
    if (zt === null) {
      var t = rt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = zt.next;
    var e = Xt === null ? rt.memoizedState : Xt.next;
    if (e !== null)
      Xt = e, zt = t;
    else {
      if (t === null)
        throw rt.alternate === null ? Error(c(467)) : Error(c(310));
      zt = t, t = {
        memoizedState: zt.memoizedState,
        baseState: zt.baseState,
        baseQueue: zt.baseQueue,
        queue: zt.queue,
        next: null
      }, Xt === null ? rt.memoizedState = Xt = t : Xt = Xt.next = t;
    }
    return Xt;
  }
  function ki() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function qa(t) {
    var e = Qa;
    return Qa += 1, _l === null && (_l = []), t = is(_l, t, e), e = rt, (Xt === null ? e.memoizedState : Xt.next) === null && (e = e.alternate, D.H = e === null || e.memoizedState === null ? Ws : hc), t;
  }
  function Pi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return qa(t);
      if (t.$$typeof === G) return ne(t);
    }
    throw Error(c(438, String(t)));
  }
  function lc(t) {
    var e = null, n = rt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var l = rt.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = ki(), rt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++)
        n[l] = Et;
    return e.index++, n;
  }
  function cn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function $i(t) {
    var e = It();
    return ac(e, zt, t);
  }
  function ac(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var i = t.baseQueue, u = l.pending;
    if (u !== null) {
      if (i !== null) {
        var s = i.next;
        i.next = u.next, u.next = s;
      }
      e.baseQueue = i = u, l.pending = null;
    }
    if (u = t.baseState, i === null) t.memoizedState = u;
    else {
      e = i.next;
      var h = s = null, E = null, U = e, Q = !1;
      do {
        var H = U.lane & -536870913;
        if (H !== U.lane ? (yt & H) === H : (fn & H) === H) {
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
            }), H === jl && (Q = !0);
          else if ((fn & z) === z) {
            U = U.next, z === jl && (Q = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: U.revertLane,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, E === null ? (h = E = H, s = u) : E = E.next = H, rt.lanes |= z, xn |= z;
          H = U.action, ol && n(u, H), u = U.hasEagerState ? U.eagerState : n(u, H);
        } else
          z = {
            lane: H,
            revertLane: U.revertLane,
            gesture: U.gesture,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          }, E === null ? (h = E = z, s = u) : E = E.next = z, rt.lanes |= H, xn |= H;
        U = U.next;
      } while (U !== null && U !== e);
      if (E === null ? s = u : E.next = h, !Ee(u, t.memoizedState) && (Kt = !0, Q && (n = Zl, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = s, t.baseQueue = E, l.lastRenderedState = u;
    }
    return i === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function ic(t) {
    var e = It(), n = e.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch, i = n.pending, u = e.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = i = i.next;
      do
        u = t(u, s.action), s = s.next;
      while (s !== i);
      Ee(u, e.memoizedState) || (Kt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, l];
  }
  function gs(t, e, n) {
    var l = rt, i = It(), u = vt;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = e();
    var s = !Ee(
      (zt || i).memoizedState,
      n
    );
    if (s && (i.memoizedState = n, Kt = !0), i = i.queue, cc(ps.bind(null, l, i, t), [
      t
    ]), i.getSnapshot !== e || s || Xt !== null && Xt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Fl(
        9,
        { destroy: void 0 },
        vs.bind(
          null,
          l,
          i,
          n,
          e
        ),
        null
      ), Nt === null) throw Error(c(349));
      u || (fn & 127) !== 0 || ms(l, e, n);
    }
    return n;
  }
  function ms(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = rt.updateQueue, e === null ? (e = ki(), rt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function vs(t, e, n, l) {
    e.value = n, e.getSnapshot = l, Es(e) && bs(t);
  }
  function ps(t, e, n) {
    return n(function() {
      Es(e) && bs(t);
    });
  }
  function Es(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ee(t, n);
    } catch {
      return !0;
    }
  }
  function bs(t) {
    var e = tl(t, 2);
    e !== null && ye(e, t, 2);
  }
  function uc(t) {
    var e = fe();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), ol) {
        pn(!0);
        try {
          n();
        } finally {
          pn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cn,
      lastRenderedState: t
    }, e;
  }
  function Ss(t, e, n, l) {
    return t.baseState = n, ac(
      t,
      zt,
      typeof l == "function" ? l : cn
    );
  }
  function Ud(t, e, n, l, i) {
    if (nu(t)) throw Error(c(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: i,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(s) {
          u.listeners.push(s);
        }
      };
      D.T !== null ? n(!0) : u.isTransition = !1, l(u), n = e.pending, n === null ? (u.next = e.pending = u, ws(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function ws(t, e) {
    var n = e.action, l = e.payload, i = t.state;
    if (e.isTransition) {
      var u = D.T, s = {};
      D.T = s;
      try {
        var h = n(i, l), E = D.S;
        E !== null && E(s, h), Bs(t, e, h);
      } catch (U) {
        fc(t, e, U);
      } finally {
        u !== null && s.types !== null && (u.types = s.types), D.T = u;
      }
    } else
      try {
        u = n(i, l), Bs(t, e, u);
      } catch (U) {
        fc(t, e, U);
      }
  }
  function Bs(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Ts(t, e, l);
      },
      function(l) {
        return fc(t, e, l);
      }
    ) : Ts(t, e, n);
  }
  function Ts(t, e, n) {
    e.status = "fulfilled", e.value = n, Cs(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, ws(t, n)));
  }
  function fc(t, e, n) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = n, Cs(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function Cs(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Us(t, e) {
    return e;
  }
  function zs(t, e) {
    if (vt) {
      var n = Nt.formState;
      if (n !== null) {
        t: {
          var l = rt;
          if (vt) {
            if (Rt) {
              e: {
                for (var i = Rt, u = Qe; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break e;
                  }
                  if (i = Ye(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break e;
                  }
                }
                u = i.data, i = u === "F!" || u === "F" ? i : null;
              }
              if (i) {
                Rt = Ye(
                  i.nextSibling
                ), l = i.data === "F!";
                break t;
              }
            }
            Bn(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return n = fe(), n.memoizedState = n.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Us,
      lastRenderedState: e
    }, n.queue = l, n = Js.bind(
      null,
      rt,
      l
    ), l.dispatch = n, l = uc(!1), u = dc.bind(
      null,
      rt,
      !1,
      l.queue
    ), l = fe(), i = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = i, n = Ud.bind(
      null,
      rt,
      i,
      u,
      n
    ), i.dispatch = n, l.memoizedState = t, [e, n, !1];
  }
  function Ms(t) {
    var e = It();
    return Ds(e, zt, t);
  }
  function Ds(t, e, n) {
    if (e = ac(
      t,
      e,
      Us
    )[0], t = $i(cn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = qa(e);
      } catch (s) {
        throw s === Vl ? Zi : s;
      }
    else l = e;
    e = It();
    var i = e.queue, u = i.dispatch;
    return n !== e.memoizedState && (rt.flags |= 2048, Fl(
      9,
      { destroy: void 0 },
      zd.bind(null, i, n),
      null
    )), [l, u, t];
  }
  function zd(t, e) {
    t.action = e;
  }
  function Os(t) {
    var e = It(), n = zt;
    if (n !== null)
      return Ds(e, n, t);
    It(), e = e.memoizedState, n = It();
    var l = n.queue.dispatch;
    return n.memoizedState = t, [e, l, !1];
  }
  function Fl(t, e, n, l) {
    return t = { tag: t, create: n, deps: l, inst: e, next: null }, e = rt.updateQueue, e === null && (e = ki(), rt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (l = n.next, n.next = t, t.next = l, e.lastEffect = t), t;
  }
  function Ns() {
    return It().memoizedState;
  }
  function tu(t, e, n, l) {
    var i = fe();
    rt.flags |= t, i.memoizedState = Fl(
      1 | e,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function eu(t, e, n, l) {
    var i = It();
    l = l === void 0 ? null : l;
    var u = i.memoizedState.inst;
    zt !== null && l !== null && Pf(l, zt.memoizedState.deps) ? i.memoizedState = Fl(e, u, n, l) : (rt.flags |= t, i.memoizedState = Fl(
      1 | e,
      u,
      n,
      l
    ));
  }
  function xs(t, e) {
    tu(8390656, 8, t, e);
  }
  function cc(t, e) {
    eu(2048, 8, t, e);
  }
  function Md(t) {
    rt.flags |= 4;
    var e = rt.updateQueue;
    if (e === null)
      e = ki(), rt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Rs(t) {
    var e = It().memoizedState;
    return Md({ ref: e, nextImpl: t }), function() {
      if ((Tt & 2) !== 0) throw Error(c(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Qs(t, e) {
    return eu(4, 2, t, e);
  }
  function qs(t, e) {
    return eu(4, 4, t, e);
  }
  function Ys(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Ls(t, e, n) {
    n = n != null ? n.concat([t]) : null, eu(4, 4, Ys.bind(null, e, t), n);
  }
  function oc() {
  }
  function Hs(t, e) {
    var n = It();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && Pf(e, l[1]) ? l[0] : (n.memoizedState = [t, e], t);
  }
  function Gs(t, e) {
    var n = It();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && Pf(e, l[1]))
      return l[0];
    if (l = t(), ol) {
      pn(!0);
      try {
        t();
      } finally {
        pn(!1);
      }
    }
    return n.memoizedState = [l, e], l;
  }
  function rc(t, e, n) {
    return n === void 0 || (fn & 1073741824) !== 0 && (yt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = I0(), rt.lanes |= t, xn |= t, n);
  }
  function Is(t, e, n, l) {
    return Ee(n, e) ? n : Kl.current !== null ? (t = rc(t, n, l), Ee(t, e) || (Kt = !0), t) : (fn & 42) === 0 || (fn & 1073741824) !== 0 && (yt & 261930) === 0 ? (Kt = !0, t.memoizedState = n) : (t = I0(), rt.lanes |= t, xn |= t, e);
  }
  function js(t, e, n, l, i) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var s = D.T, h = {};
    D.T = h, dc(t, !1, e, n);
    try {
      var E = i(), U = D.S;
      if (U !== null && U(h, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var Q = Bd(
          E,
          l
        );
        Ya(
          t,
          e,
          Q,
          Ce(t)
        );
      } else
        Ya(
          t,
          e,
          l,
          Ce(t)
        );
    } catch (H) {
      Ya(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: H },
        Ce()
      );
    } finally {
      X.p = u, s !== null && h.types !== null && (s.types = h.types), D.T = s;
    }
  }
  function Dd() {
  }
  function sc(t, e, n, l) {
    if (t.tag !== 5) throw Error(c(476));
    var i = Zs(t).queue;
    js(
      t,
      i,
      e,
      tt,
      n === null ? Dd : function() {
        return Vs(t), n(l);
      }
    );
  }
  function Zs(t) {
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
        lastRenderedReducer: cn,
        lastRenderedState: tt
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Vs(t) {
    var e = Zs(t);
    e.next === null && (e = t.alternate.memoizedState), Ya(
      t,
      e.next.queue,
      {},
      Ce()
    );
  }
  function Ac() {
    return ne(ti);
  }
  function Xs() {
    return It().memoizedState;
  }
  function Ks() {
    return It().memoizedState;
  }
  function Od(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ce();
          t = Un(n);
          var l = zn(e, t, n);
          l !== null && (ye(l, e, n), Na(l, e, n)), e = { cache: If() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Nd(t, e, n) {
    var l = Ce();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nu(t) ? _s(e, n) : (n = Df(t, e, n, l), n !== null && (ye(n, t, l), Fs(n, e, l)));
  }
  function Js(t, e, n) {
    var l = Ce();
    Ya(t, e, n, l);
  }
  function Ya(t, e, n, l) {
    var i = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nu(t)) _s(e, i);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var s = e.lastRenderedState, h = u(s, n);
          if (i.hasEagerState = !0, i.eagerState = h, Ee(h, s))
            return qi(t, e, i, 0), Nt === null && Qi(), !1;
        } catch {
        } finally {
        }
      if (n = Df(t, e, i, l), n !== null)
        return ye(n, t, l), Fs(n, e, l), !0;
    }
    return !1;
  }
  function dc(t, e, n, l) {
    if (l = {
      lane: 2,
      revertLane: Xc(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nu(t)) {
      if (e) throw Error(c(479));
    } else
      e = Df(
        t,
        n,
        l,
        2
      ), e !== null && ye(e, t, 2);
  }
  function nu(t) {
    var e = t.alternate;
    return t === rt || e !== null && e === rt;
  }
  function _s(t, e) {
    Jl = Fi = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Fs(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, tr(t, n);
    }
  }
  var La = {
    readContext: ne,
    use: Pi,
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
  La.useEffectEvent = Lt;
  var Ws = {
    readContext: ne,
    use: Pi,
    useCallback: function(t, e) {
      return fe().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ne,
    useEffect: xs,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, tu(
        4194308,
        4,
        Ys.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return tu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      tu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = fe();
      e = e === void 0 ? null : e;
      var l = t();
      if (ol) {
        pn(!0);
        try {
          t();
        } finally {
          pn(!1);
        }
      }
      return n.memoizedState = [l, e], l;
    },
    useReducer: function(t, e, n) {
      var l = fe();
      if (n !== void 0) {
        var i = n(e);
        if (ol) {
          pn(!0);
          try {
            n(e);
          } finally {
            pn(!1);
          }
        }
      } else i = e;
      return l.memoizedState = l.baseState = i, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: i
      }, l.queue = t, t = t.dispatch = Nd.bind(
        null,
        rt,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = fe();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = uc(t);
      var e = t.queue, n = Js.bind(null, rt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: oc,
    useDeferredValue: function(t, e) {
      var n = fe();
      return rc(n, t, e);
    },
    useTransition: function() {
      var t = uc(!1);
      return t = js.bind(
        null,
        rt,
        t.queue,
        !0,
        !1
      ), fe().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var l = rt, i = fe();
      if (vt) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = e(), Nt === null)
          throw Error(c(349));
        (yt & 127) !== 0 || ms(l, e, n);
      }
      i.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return i.queue = u, xs(ps.bind(null, l, u, t), [
        t
      ]), l.flags |= 2048, Fl(
        9,
        { destroy: void 0 },
        vs.bind(
          null,
          l,
          u,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = fe(), e = Nt.identifierPrefix;
      if (vt) {
        var n = _e, l = Je;
        n = (l & ~(1 << 32 - pe(l) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Wi++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = Td++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Ac,
    useFormState: zs,
    useActionState: zs,
    useOptimistic: function(t) {
      var e = fe();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = dc.bind(
        null,
        rt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: lc,
    useCacheRefresh: function() {
      return fe().memoizedState = Od.bind(
        null,
        rt
      );
    },
    useEffectEvent: function(t) {
      var e = fe(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Tt & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, hc = {
    readContext: ne,
    use: Pi,
    useCallback: Hs,
    useContext: ne,
    useEffect: cc,
    useImperativeHandle: Ls,
    useInsertionEffect: Qs,
    useLayoutEffect: qs,
    useMemo: Gs,
    useReducer: $i,
    useRef: Ns,
    useState: function() {
      return $i(cn);
    },
    useDebugValue: oc,
    useDeferredValue: function(t, e) {
      var n = It();
      return Is(
        n,
        zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = $i(cn)[0], e = It().memoizedState;
      return [
        typeof t == "boolean" ? t : qa(t),
        e
      ];
    },
    useSyncExternalStore: gs,
    useId: Xs,
    useHostTransitionStatus: Ac,
    useFormState: Ms,
    useActionState: Ms,
    useOptimistic: function(t, e) {
      var n = It();
      return Ss(n, zt, t, e);
    },
    useMemoCache: lc,
    useCacheRefresh: Ks
  };
  hc.useEffectEvent = Rs;
  var ks = {
    readContext: ne,
    use: Pi,
    useCallback: Hs,
    useContext: ne,
    useEffect: cc,
    useImperativeHandle: Ls,
    useInsertionEffect: Qs,
    useLayoutEffect: qs,
    useMemo: Gs,
    useReducer: ic,
    useRef: Ns,
    useState: function() {
      return ic(cn);
    },
    useDebugValue: oc,
    useDeferredValue: function(t, e) {
      var n = It();
      return zt === null ? rc(n, t, e) : Is(
        n,
        zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ic(cn)[0], e = It().memoizedState;
      return [
        typeof t == "boolean" ? t : qa(t),
        e
      ];
    },
    useSyncExternalStore: gs,
    useId: Xs,
    useHostTransitionStatus: Ac,
    useFormState: Os,
    useActionState: Os,
    useOptimistic: function(t, e) {
      var n = It();
      return zt !== null ? Ss(n, zt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: lc,
    useCacheRefresh: Ks
  };
  ks.useEffectEvent = Rs;
  function yc(t, e, n, l) {
    e = t.memoizedState, n = n(l, e), n = n == null ? e : m({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var gc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var l = Ce(), i = Un(l);
      i.payload = e, n != null && (i.callback = n), e = zn(t, i, l), e !== null && (ye(e, t, l), Na(e, t, l));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var l = Ce(), i = Un(l);
      i.tag = 1, i.payload = e, n != null && (i.callback = n), e = zn(t, i, l), e !== null && (ye(e, t, l), Na(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Ce(), l = Un(n);
      l.tag = 2, e != null && (l.callback = e), e = zn(t, l, n), e !== null && (ye(e, t, n), Na(e, t, n));
    }
  };
  function Ps(t, e, n, l, i, u, s) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, u, s) : e.prototype && e.prototype.isPureReactComponent ? !Ba(n, l) || !Ba(i, u) : !0;
  }
  function $s(t, e, n, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l), e.state !== t && gc.enqueueReplaceState(e, e.state, null);
  }
  function rl(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e)
        l !== "ref" && (n[l] = e[l]);
    }
    if (t = t.defaultProps) {
      n === e && (n = m({}, n));
      for (var i in t)
        n[i] === void 0 && (n[i] = t[i]);
    }
    return n;
  }
  function t0(t) {
    Ri(t);
  }
  function e0(t) {
    console.error(t);
  }
  function n0(t) {
    Ri(t);
  }
  function lu(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function l0(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function mc(t, e, n) {
    return n = Un(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      lu(t, e);
    }, n;
  }
  function a0(t) {
    return t = Un(t), t.tag = 3, t;
  }
  function i0(t, e, n, l) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = l.value;
      t.payload = function() {
        return i(u);
      }, t.callback = function() {
        l0(e, n, l);
      };
    }
    var s = n.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
      l0(e, n, l), typeof i != "function" && (Rn === null ? Rn = /* @__PURE__ */ new Set([this]) : Rn.add(this));
      var h = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function xd(t, e, n, l, i) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = n.alternate, e !== null && Il(
        e,
        n,
        i,
        !0
      ), n = Se.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return qe === null ? yu() : n.alternate === null && Ht === 0 && (Ht = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, l === Vi ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), jc(t, l, i)), !1;
          case 22:
            return n.flags |= 65536, l === Vi ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), jc(t, l, i)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return jc(t, l, i), yu(), !1;
    }
    if (vt)
      return e = Se.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = i, l !== qf && (t = Error(c(422), { cause: l }), Ua(Ne(t, n)))) : (l !== qf && (e = Error(c(423), {
        cause: l
      }), Ua(
        Ne(e, n)
      )), t = t.current.alternate, t.flags |= 65536, i &= -i, t.lanes |= i, l = Ne(l, n), i = mc(
        t.stateNode,
        l,
        i
      ), Jf(t, i), Ht !== 4 && (Ht = 2)), !1;
    var u = Error(c(520), { cause: l });
    if (u = Ne(u, n), Ka === null ? Ka = [u] : Ka.push(u), Ht !== 4 && (Ht = 2), e === null) return !0;
    l = Ne(l, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = i & -i, n.lanes |= t, t = mc(n.stateNode, l, t), Jf(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Rn === null || !Rn.has(u))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = a0(i), i0(
              i,
              t,
              n,
              l
            ), Jf(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var vc = Error(c(461)), Kt = !1;
  function le(t, e, n, l) {
    e.child = t === null ? os(e, null, n, l) : cl(
      e,
      t.child,
      n,
      l
    );
  }
  function u0(t, e, n, l, i) {
    n = n.render;
    var u = e.ref;
    if ("ref" in l) {
      var s = {};
      for (var h in l)
        h !== "ref" && (s[h] = l[h]);
    } else s = l;
    return al(e), l = $f(
      t,
      e,
      n,
      s,
      u,
      i
    ), h = tc(), t !== null && !Kt ? (ec(t, e, i), on(t, e, i)) : (vt && h && Rf(e), e.flags |= 1, le(t, e, l, i), e.child);
  }
  function f0(t, e, n, l, i) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !Of(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, c0(
        t,
        e,
        u,
        l,
        i
      )) : (t = Li(
        n.type,
        null,
        l,
        e,
        e.mode,
        i
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !Cc(t, i)) {
      var s = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ba, n(s, l) && t.ref === e.ref)
        return on(t, e, i);
    }
    return e.flags |= 1, t = nn(u, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function c0(t, e, n, l, i) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ba(u, l) && t.ref === e.ref)
        if (Kt = !1, e.pendingProps = l = u, Cc(t, i))
          (t.flags & 131072) !== 0 && (Kt = !0);
        else
          return e.lanes = t.lanes, on(t, e, i);
    }
    return pc(
      t,
      e,
      n,
      l,
      i
    );
  }
  function o0(t, e, n, l) {
    var i = l.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, t !== null) {
          for (l = e.child = t.child, i = 0; l !== null; )
            i = i | l.lanes | l.childLanes, l = l.sibling;
          l = i & ~u;
        } else l = 0, e.child = null;
        return r0(
          t,
          e,
          u,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && ji(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? As(e, u) : Ff(), ds(e);
      else
        return l = e.lanes = 536870912, r0(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          l
        );
    } else
      u !== null ? (ji(e, u.cachePool), As(e, u), Dn(), e.memoizedState = null) : (t !== null && ji(e, null), Ff(), Dn());
    return le(t, e, i, n), e.child;
  }
  function Ha(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function r0(t, e, n, l, i) {
    var u = Zf();
    return u = u === null ? null : { parent: Vt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && ji(e, null), Ff(), ds(e), t !== null && Il(t, e, l, !0), e.childLanes = i, null;
  }
  function au(t, e) {
    return e = uu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function s0(t, e, n) {
    return cl(e, t.child, null, n), t = au(e, e.pendingProps), t.flags |= 2, we(e), e.memoizedState = null, t;
  }
  function Rd(t, e, n) {
    var l = e.pendingProps, i = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (vt) {
        if (l.mode === "hidden")
          return t = au(e, l), e.lanes = 536870912, Ha(null, t);
        if (kf(e), (t = Rt) ? (t = w1(
          t,
          Qe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Sn !== null ? { id: Je, overflow: _e } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = _r(t), n.return = e, e.child = n, ee = e, Rt = null)) : t = null, t === null) throw Bn(e);
        return e.lanes = 536870912, null;
      }
      return au(e, l);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var s = u.dehydrated;
      if (kf(e), i)
        if (e.flags & 256)
          e.flags &= -257, e = s0(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(c(558));
      else if (Kt || Il(t, e, n, !1), i = (n & t.childLanes) !== 0, Kt || i) {
        if (l = Nt, l !== null && (s = er(l, n), s !== 0 && s !== u.retryLane))
          throw u.retryLane = s, tl(t, s), ye(l, t, s), vc;
        yu(), e = s0(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, Rt = Ye(s.nextSibling), ee = e, vt = !0, wn = null, Qe = !1, t !== null && kr(e, t), e = au(e, l), e.flags |= 4096;
      return e;
    }
    return t = nn(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function iu(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function pc(t, e, n, l, i) {
    return al(e), n = $f(
      t,
      e,
      n,
      l,
      void 0,
      i
    ), l = tc(), t !== null && !Kt ? (ec(t, e, i), on(t, e, i)) : (vt && l && Rf(e), e.flags |= 1, le(t, e, n, i), e.child);
  }
  function A0(t, e, n, l, i, u) {
    return al(e), e.updateQueue = null, n = ys(
      e,
      l,
      n,
      i
    ), hs(t), l = tc(), t !== null && !Kt ? (ec(t, e, u), on(t, e, u)) : (vt && l && Rf(e), e.flags |= 1, le(t, e, n, u), e.child);
  }
  function d0(t, e, n, l, i) {
    if (al(e), e.stateNode === null) {
      var u = Yl, s = n.contextType;
      typeof s == "object" && s !== null && (u = ne(s)), u = new n(l, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = gc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = l, u.state = e.memoizedState, u.refs = {}, Xf(e), s = n.contextType, u.context = typeof s == "object" && s !== null ? ne(s) : Yl, u.state = e.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (yc(
        e,
        n,
        s,
        l
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && gc.enqueueReplaceState(u, u.state, null), Ra(e, l, u, i), xa(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      u = e.stateNode;
      var h = e.memoizedProps, E = rl(n, h);
      u.props = E;
      var U = u.context, Q = n.contextType;
      s = Yl, typeof Q == "object" && Q !== null && (s = ne(Q));
      var H = n.getDerivedStateFromProps;
      Q = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", h = e.pendingProps !== h, Q || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h || U !== s) && $s(
        e,
        u,
        l,
        s
      ), Cn = !1;
      var z = e.memoizedState;
      u.state = z, Ra(e, l, u, i), xa(), U = e.memoizedState, h || z !== U || Cn ? (typeof H == "function" && (yc(
        e,
        n,
        H,
        l
      ), U = e.memoizedState), (E = Cn || Ps(
        e,
        n,
        E,
        l,
        z,
        U,
        s
      )) ? (Q || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = U), u.props = l, u.state = U, u.context = s, l = E) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      u = e.stateNode, Kf(t, e), s = e.memoizedProps, Q = rl(n, s), u.props = Q, H = e.pendingProps, z = u.context, U = n.contextType, E = Yl, typeof U == "object" && U !== null && (E = ne(U)), h = n.getDerivedStateFromProps, (U = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== H || z !== E) && $s(
        e,
        u,
        l,
        E
      ), Cn = !1, z = e.memoizedState, u.state = z, Ra(e, l, u, i), xa();
      var x = e.memoizedState;
      s !== H || z !== x || Cn || t !== null && t.dependencies !== null && Gi(t.dependencies) ? (typeof h == "function" && (yc(
        e,
        n,
        h,
        l
      ), x = e.memoizedState), (Q = Cn || Ps(
        e,
        n,
        Q,
        l,
        z,
        x,
        E
      ) || t !== null && t.dependencies !== null && Gi(t.dependencies)) ? (U || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, x, E), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        x,
        E
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = x), u.props = l, u.state = x, u.context = E, l = Q) : (typeof u.componentDidUpdate != "function" || s === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return u = l, iu(t, e), l = (e.flags & 128) !== 0, u || l ? (u = e.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && l ? (e.child = cl(
      e,
      t.child,
      null,
      i
    ), e.child = cl(
      e,
      null,
      n,
      i
    )) : le(t, e, n, i), e.memoizedState = u.state, t = e.child) : t = on(
      t,
      e,
      i
    ), t;
  }
  function h0(t, e, n, l) {
    return nl(), e.flags |= 256, le(t, e, n, l), e.child;
  }
  var Ec = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function bc(t) {
    return { baseLanes: t, cachePool: ls() };
  }
  function Sc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Te), t;
  }
  function y0(t, e, n) {
    var l = e.pendingProps, i = !1, u = (e.flags & 128) !== 0, s;
    if ((s = u) || (s = t !== null && t.memoizedState === null ? !1 : (Gt.current & 2) !== 0), s && (i = !0, e.flags &= -129), s = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (vt) {
        if (i ? Mn(e) : Dn(), (t = Rt) ? (t = w1(
          t,
          Qe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Sn !== null ? { id: Je, overflow: _e } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = _r(t), n.return = e, e.child = n, ee = e, Rt = null)) : t = null, t === null) throw Bn(e);
        return ao(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var h = l.children;
      return l = l.fallback, i ? (Dn(), i = e.mode, h = uu(
        { mode: "hidden", children: h },
        i
      ), l = el(
        l,
        i,
        n,
        null
      ), h.return = e, l.return = e, h.sibling = l, e.child = h, l = e.child, l.memoizedState = bc(n), l.childLanes = Sc(
        t,
        s,
        n
      ), e.memoizedState = Ec, Ha(null, l)) : (Mn(e), wc(e, h));
    }
    var E = t.memoizedState;
    if (E !== null && (h = E.dehydrated, h !== null)) {
      if (u)
        e.flags & 256 ? (Mn(e), e.flags &= -257, e = Bc(
          t,
          e,
          n
        )) : e.memoizedState !== null ? (Dn(), e.child = t.child, e.flags |= 128, e = null) : (Dn(), h = l.fallback, i = e.mode, l = uu(
          { mode: "visible", children: l.children },
          i
        ), h = el(
          h,
          i,
          n,
          null
        ), h.flags |= 2, l.return = e, h.return = e, l.sibling = h, e.child = l, cl(
          e,
          t.child,
          null,
          n
        ), l = e.child, l.memoizedState = bc(n), l.childLanes = Sc(
          t,
          s,
          n
        ), e.memoizedState = Ec, e = Ha(null, l));
      else if (Mn(e), ao(h)) {
        if (s = h.nextSibling && h.nextSibling.dataset, s) var U = s.dgst;
        s = U, l = Error(c(419)), l.stack = "", l.digest = s, Ua({ value: l, source: null, stack: null }), e = Bc(
          t,
          e,
          n
        );
      } else if (Kt || Il(t, e, n, !1), s = (n & t.childLanes) !== 0, Kt || s) {
        if (s = Nt, s !== null && (l = er(s, n), l !== 0 && l !== E.retryLane))
          throw E.retryLane = l, tl(t, l), ye(s, t, l), vc;
        lo(h) || yu(), e = Bc(
          t,
          e,
          n
        );
      } else
        lo(h) ? (e.flags |= 192, e.child = t.child, e = null) : (t = E.treeContext, Rt = Ye(
          h.nextSibling
        ), ee = e, vt = !0, wn = null, Qe = !1, t !== null && kr(e, t), e = wc(
          e,
          l.children
        ), e.flags |= 4096);
      return e;
    }
    return i ? (Dn(), h = l.fallback, i = e.mode, E = t.child, U = E.sibling, l = nn(E, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = E.subtreeFlags & 65011712, U !== null ? h = nn(
      U,
      h
    ) : (h = el(
      h,
      i,
      n,
      null
    ), h.flags |= 2), h.return = e, l.return = e, l.sibling = h, e.child = l, Ha(null, l), l = e.child, h = t.child.memoizedState, h === null ? h = bc(n) : (i = h.cachePool, i !== null ? (E = Vt._currentValue, i = i.parent !== E ? { parent: E, pool: E } : i) : i = ls(), h = {
      baseLanes: h.baseLanes | n,
      cachePool: i
    }), l.memoizedState = h, l.childLanes = Sc(
      t,
      s,
      n
    ), e.memoizedState = Ec, Ha(t.child, l)) : (Mn(e), n = t.child, t = n.sibling, n = nn(n, {
      mode: "visible",
      children: l.children
    }), n.return = e, n.sibling = null, t !== null && (s = e.deletions, s === null ? (e.deletions = [t], e.flags |= 16) : s.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function wc(t, e) {
    return e = uu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function uu(t, e) {
    return t = be(22, t, null, e), t.lanes = 0, t;
  }
  function Bc(t, e, n) {
    return cl(e, t.child, null, n), t = wc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function g0(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Hf(t.return, e, n);
  }
  function Tc(t, e, n, l, i, u) {
    var s = t.memoizedState;
    s === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: i,
      treeForkCount: u
    } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = l, s.tail = n, s.tailMode = i, s.treeForkCount = u);
  }
  function m0(t, e, n) {
    var l = e.pendingProps, i = l.revealOrder, u = l.tail;
    l = l.children;
    var s = Gt.current, h = (s & 2) !== 0;
    if (h ? (s = s & 1 | 2, e.flags |= 128) : s &= 1, V(Gt, s), le(t, e, l, n), l = vt ? Ca : 0, !h && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && g0(t, n, e);
        else if (t.tag === 19)
          g0(t, n, e);
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
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          t = n.alternate, t !== null && _i(t) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), Tc(
          e,
          !1,
          i,
          n,
          u,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (t = i.alternate, t !== null && _i(t) === null) {
            e.child = i;
            break;
          }
          t = i.sibling, i.sibling = n, n = i, i = t;
        }
        Tc(
          e,
          !0,
          n,
          null,
          u,
          l
        );
        break;
      case "together":
        Tc(
          e,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function on(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), xn |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (Il(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(c(153));
    if (e.child !== null) {
      for (t = e.child, n = nn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = nn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Cc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Gi(t)));
  }
  function Qd(t, e, n) {
    switch (e.tag) {
      case 3:
        xt(e, e.stateNode.containerInfo), Tn(e, Vt, t.memoizedState.cache), nl();
        break;
      case 27:
      case 5:
        Ue(e);
        break;
      case 4:
        xt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Tn(
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
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Mn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? y0(t, e, n) : (Mn(e), t = on(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        Mn(e);
        break;
      case 19:
        var i = (t.flags & 128) !== 0;
        if (l = (n & e.childLanes) !== 0, l || (Il(
          t,
          e,
          n,
          !1
        ), l = (n & e.childLanes) !== 0), i) {
          if (l)
            return m0(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), V(Gt, Gt.current), l) break;
        return null;
      case 22:
        return e.lanes = 0, o0(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        Tn(e, Vt, t.memoizedState.cache);
    }
    return on(t, e, n);
  }
  function v0(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Kt = !0;
      else {
        if (!Cc(t, n) && (e.flags & 128) === 0)
          return Kt = !1, Qd(
            t,
            e,
            n
          );
        Kt = (t.flags & 131072) !== 0;
      }
    else
      Kt = !1, vt && (e.flags & 1048576) !== 0 && Wr(e, Ca, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (t = ul(e.elementType), e.type = t, typeof t == "function")
            Of(t) ? (l = rl(t, l), e.tag = 1, e = d0(
              null,
              e,
              t,
              l,
              n
            )) : (e.tag = 0, e = pc(
              null,
              e,
              t,
              l,
              n
            ));
          else {
            if (t != null) {
              var i = t.$$typeof;
              if (i === K) {
                e.tag = 11, e = u0(
                  null,
                  e,
                  t,
                  l,
                  n
                );
                break t;
              } else if (i === I) {
                e.tag = 14, e = f0(
                  null,
                  e,
                  t,
                  l,
                  n
                );
                break t;
              }
            }
            throw e = it(t) || t, Error(c(306, e, ""));
          }
        }
        return e;
      case 0:
        return pc(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return l = e.type, i = rl(
          l,
          e.pendingProps
        ), d0(
          t,
          e,
          l,
          i,
          n
        );
      case 3:
        t: {
          if (xt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(c(387));
          l = e.pendingProps;
          var u = e.memoizedState;
          i = u.element, Kf(t, e), Ra(e, l, null, n);
          var s = e.memoizedState;
          if (l = s.cache, Tn(e, Vt, l), l !== u.cache && Gf(
            e,
            [Vt],
            n,
            !0
          ), xa(), l = s.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: s.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = h0(
                t,
                e,
                l,
                n
              );
              break t;
            } else if (l !== i) {
              i = Ne(
                Error(c(424)),
                e
              ), Ua(i), e = h0(
                t,
                e,
                l,
                n
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
              for (Rt = Ye(t.firstChild), ee = e, vt = !0, wn = null, Qe = !0, n = os(
                e,
                null,
                l,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (nl(), l === i) {
              e = on(
                t,
                e,
                n
              );
              break t;
            }
            le(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return iu(t, e), t === null ? (n = M1(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : vt || (n = e.type, t = e.pendingProps, l = Su(
          ot.current
        ).createElement(n), l[te] = e, l[oe] = t, ae(l, n, t), kt(l), e.stateNode = l) : e.memoizedState = M1(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ue(e), t === null && vt && (l = e.stateNode = C1(
          e.type,
          e.pendingProps,
          ot.current
        ), ee = e, Qe = !0, i = Rt, Ln(e.type) ? (io = i, Rt = Ye(l.firstChild)) : Rt = i), le(
          t,
          e,
          e.pendingProps.children,
          n
        ), iu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && vt && ((i = l = Rt) && (l = sh(
          l,
          e.type,
          e.pendingProps,
          Qe
        ), l !== null ? (e.stateNode = l, ee = e, Rt = Ye(l.firstChild), Qe = !1, i = !0) : i = !1), i || Bn(e)), Ue(e), i = e.type, u = e.pendingProps, s = t !== null ? t.memoizedProps : null, l = u.children, to(i, u) ? l = null : s !== null && to(i, s) && (e.flags |= 32), e.memoizedState !== null && (i = $f(
          t,
          e,
          Cd,
          null,
          null,
          n
        ), ti._currentValue = i), iu(t, e), le(t, e, l, n), e.child;
      case 6:
        return t === null && vt && ((t = n = Rt) && (n = Ah(
          n,
          e.pendingProps,
          Qe
        ), n !== null ? (e.stateNode = n, ee = e, Rt = null, t = !0) : t = !1), t || Bn(e)), null;
      case 13:
        return y0(t, e, n);
      case 4:
        return xt(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = cl(
          e,
          null,
          l,
          n
        ) : le(t, e, l, n), e.child;
      case 11:
        return u0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return le(
          t,
          e,
          e.pendingProps,
          n
        ), e.child;
      case 8:
        return le(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return le(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return l = e.pendingProps, Tn(e, e.type, l.value), le(t, e, l.children, n), e.child;
      case 9:
        return i = e.type._context, l = e.pendingProps.children, al(e), i = ne(i), l = l(i), e.flags |= 1, le(t, e, l, n), e.child;
      case 14:
        return f0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return c0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return m0(t, e, n);
      case 31:
        return Rd(t, e, n);
      case 22:
        return o0(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return al(e), l = ne(Vt), t === null ? (i = Zf(), i === null && (i = Nt, u = If(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= n), i = u), e.memoizedState = { parent: l, cache: i }, Xf(e), Tn(e, Vt, i)) : ((t.lanes & n) !== 0 && (Kf(t, e), Ra(e, null, null, n), xa()), i = t.memoizedState, u = e.memoizedState, i.parent !== l ? (i = { parent: l, cache: l }, e.memoizedState = i, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = i), Tn(e, Vt, l)) : (l = u.cache, Tn(e, Vt, l), l !== i.cache && Gf(
          e,
          [Vt],
          n,
          !0
        ))), le(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(c(156, e.tag));
  }
  function rn(t) {
    t.flags |= 4;
  }
  function Uc(t, e, n, l, i) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (i & 335544128) === i)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (X0()) t.flags |= 8192;
        else
          throw fl = Vi, Vf;
    } else t.flags &= -16777217;
  }
  function p0(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !R1(e))
      if (X0()) t.flags |= 8192;
      else
        throw fl = Vi, Vf;
  }
  function fu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Po() : 536870912, t.lanes |= e, $l |= e);
  }
  function Ga(t, e) {
    if (!vt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
  }
  function Qt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, l = 0;
    if (e)
      for (var i = t.child; i !== null; )
        n |= i.lanes | i.childLanes, l |= i.subtreeFlags & 65011712, l |= i.flags & 65011712, i.return = t, i = i.sibling;
    else
      for (i = t.child; i !== null; )
        n |= i.lanes | i.childLanes, l |= i.subtreeFlags, l |= i.flags, i.return = t, i = i.sibling;
    return t.subtreeFlags |= l, t.childLanes = n, e;
  }
  function qd(t, e, n) {
    var l = e.pendingProps;
    switch (Qf(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qt(e), null;
      case 1:
        return Qt(e), null;
      case 3:
        return n = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), un(Vt), Bt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Gl(e) ? rn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Yf())), Qt(e), null;
      case 26:
        var i = e.type, u = e.memoizedState;
        return t === null ? (rn(e), u !== null ? (Qt(e), p0(e, u)) : (Qt(e), Uc(
          e,
          i,
          null,
          l,
          n
        ))) : u ? u !== t.memoizedState ? (rn(e), Qt(e), p0(e, u)) : (Qt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && rn(e), Qt(e), Uc(
          e,
          i,
          t,
          l,
          n
        )), null;
      case 27:
        if (ge(e), n = ot.current, i = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && rn(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Qt(e), null;
          }
          t = F.current, Gl(e) ? Pr(e) : (t = C1(i, l, n), e.stateNode = t, rn(e));
        }
        return Qt(e), null;
      case 5:
        if (ge(e), i = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && rn(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Qt(e), null;
          }
          if (u = F.current, Gl(e))
            Pr(e);
          else {
            var s = Su(
              ot.current
            );
            switch (u) {
              case 1:
                u = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  i
                );
                break;
              case 2:
                u = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  i
                );
                break;
              default:
                switch (i) {
                  case "svg":
                    u = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      i
                    );
                    break;
                  case "math":
                    u = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    u = s.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof l.is == "string" ? s.createElement("select", {
                      is: l.is
                    }) : s.createElement("select"), l.multiple ? u.multiple = !0 : l.size && (u.size = l.size);
                    break;
                  default:
                    u = typeof l.is == "string" ? s.createElement(i, { is: l.is }) : s.createElement(i);
                }
            }
            u[te] = e, u[oe] = l;
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                u.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e)
                  break t;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            e.stateNode = u;
            t: switch (ae(u, i, l), i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && rn(e);
          }
        }
        return Qt(e), Uc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && rn(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(c(166));
          if (t = ot.current, Gl(e)) {
            if (t = e.stateNode, n = e.memoizedProps, l = null, i = ee, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            t[te] = e, t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || y1(t.nodeValue, n)), t || Bn(e, !0);
          } else
            t = Su(t).createTextNode(
              l
            ), t[te] = e, e.stateNode = t;
        }
        return Qt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (l = Gl(e), n !== null) {
            if (t === null) {
              if (!l) throw Error(c(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
              t[te] = e;
            } else
              nl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Qt(e), t = !1;
          } else
            n = Yf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (we(e), e) : (we(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Qt(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (i = Gl(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!i) throw Error(c(318));
              if (i = e.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(c(317));
              i[te] = e;
            } else
              nl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Qt(e), i = !1;
          } else
            i = Yf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return e.flags & 256 ? (we(e), e) : (we(e), null);
        }
        return we(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = l !== null, t = t !== null && t.memoizedState !== null, n && (l = e.child, i = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (i = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== i && (l.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), fu(e, e.updateQueue), Qt(e), null);
      case 4:
        return Bt(), t === null && Fc(e.stateNode.containerInfo), Qt(e), null;
      case 10:
        return un(e.type), Qt(e), null;
      case 19:
        if (L(Gt), l = e.memoizedState, l === null) return Qt(e), null;
        if (i = (e.flags & 128) !== 0, u = l.rendering, u === null)
          if (i) Ga(l, !1);
          else {
            if (Ht !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = _i(t), u !== null) {
                  for (e.flags |= 128, Ga(l, !1), t = u.updateQueue, e.updateQueue = t, fu(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Jr(n, t), n = n.sibling;
                  return V(
                    Gt,
                    Gt.current & 1 | 2
                  ), vt && ln(e, l.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null && $t() > Au && (e.flags |= 128, i = !0, Ga(l, !1), e.lanes = 4194304);
          }
        else {
          if (!i)
            if (t = _i(u), t !== null) {
              if (e.flags |= 128, i = !0, t = t.updateQueue, e.updateQueue = t, fu(e, t), Ga(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !vt)
                return Qt(e), null;
            } else
              2 * $t() - l.renderingStartTime > Au && n !== 536870912 && (e.flags |= 128, i = !0, Ga(l, !1), e.lanes = 4194304);
          l.isBackwards ? (u.sibling = e.child, e.child = u) : (t = l.last, t !== null ? t.sibling = u : e.child = u, l.last = u);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = $t(), t.sibling = null, n = Gt.current, V(
          Gt,
          i ? n & 1 | 2 : n & 1
        ), vt && ln(e, l.treeForkCount), t) : (Qt(e), null);
      case 22:
      case 23:
        return we(e), Wf(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Qt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Qt(e), n = e.updateQueue, n !== null && fu(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== n && (e.flags |= 2048), t !== null && L(il), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), un(Vt), Qt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, e.tag));
  }
  function Yd(t, e) {
    switch (Qf(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return un(Vt), Bt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return ge(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (we(e), e.alternate === null)
            throw Error(c(340));
          nl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (we(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(c(340));
          nl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return L(Gt), null;
      case 4:
        return Bt(), null;
      case 10:
        return un(e.type), null;
      case 22:
      case 23:
        return we(e), Wf(), t !== null && L(il), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return un(Vt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function E0(t, e) {
    switch (Qf(e), e.tag) {
      case 3:
        un(Vt), Bt();
        break;
      case 26:
      case 27:
      case 5:
        ge(e);
        break;
      case 4:
        Bt();
        break;
      case 31:
        e.memoizedState !== null && we(e);
        break;
      case 13:
        we(e);
        break;
      case 19:
        L(Gt);
        break;
      case 10:
        un(e.type);
        break;
      case 22:
      case 23:
        we(e), Wf(), t !== null && L(il);
        break;
      case 24:
        un(Vt);
    }
  }
  function Ia(t, e) {
    try {
      var n = e.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        n = i;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var u = n.create, s = n.inst;
            l = u(), s.destroy = l;
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (h) {
      Ut(e, e.return, h);
    }
  }
  function On(t, e, n) {
    try {
      var l = e.updateQueue, i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            var s = l.inst, h = s.destroy;
            if (h !== void 0) {
              s.destroy = void 0, i = e;
              var E = n, U = h;
              try {
                U();
              } catch (Q) {
                Ut(
                  i,
                  E,
                  Q
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (Q) {
      Ut(e, e.return, Q);
    }
  }
  function b0(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        ss(e, n);
      } catch (l) {
        Ut(t, t.return, l);
      }
    }
  }
  function S0(t, e, n) {
    n.props = rl(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ut(t, e, l);
    }
  }
  function ja(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(l) : n.current = l;
      }
    } catch (i) {
      Ut(t, e, i);
    }
  }
  function Fe(t, e) {
    var n = t.ref, l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (i) {
          Ut(t, e, i);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          Ut(t, e, i);
        }
      else n.current = null;
  }
  function w0(t) {
    var e = t.type, n = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (i) {
      Ut(t, t.return, i);
    }
  }
  function zc(t, e, n) {
    try {
      var l = t.stateNode;
      ih(l, t.type, n, e), l[oe] = e;
    } catch (i) {
      Ut(t, t.return, i);
    }
  }
  function B0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ln(t.type) || t.tag === 4;
  }
  function Mc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || B0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ln(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Dc(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = tn));
    else if (l !== 4 && (l === 27 && Ln(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
      for (Dc(t, e, n), t = t.sibling; t !== null; )
        Dc(t, e, n), t = t.sibling;
  }
  function cu(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (l !== 4 && (l === 27 && Ln(t.type) && (n = t.stateNode), t = t.child, t !== null))
      for (cu(t, e, n), t = t.sibling; t !== null; )
        cu(t, e, n), t = t.sibling;
  }
  function T0(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var l = t.type, i = e.attributes; i.length; )
        e.removeAttributeNode(i[0]);
      ae(e, l, n), e[te] = t, e[oe] = n;
    } catch (u) {
      Ut(t, t.return, u);
    }
  }
  var sn = !1, Jt = !1, Oc = !1, C0 = typeof WeakSet == "function" ? WeakSet : Set, Pt = null;
  function Ld(t, e) {
    if (t = t.containerInfo, Pc = Mu, t = Lr(t), Bf(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var i = l.anchorOffset, u = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break t;
            }
            var s = 0, h = -1, E = -1, U = 0, Q = 0, H = t, z = null;
            e: for (; ; ) {
              for (var x; H !== n || i !== 0 && H.nodeType !== 3 || (h = s + i), H !== u || l !== 0 && H.nodeType !== 3 || (E = s + l), H.nodeType === 3 && (s += H.nodeValue.length), (x = H.firstChild) !== null; )
                z = H, H = x;
              for (; ; ) {
                if (H === t) break e;
                if (z === n && ++U === i && (h = s), z === u && ++Q === l && (E = s), (x = H.nextSibling) !== null) break;
                H = z, z = H.parentNode;
              }
              H = x;
            }
            n = h === -1 || E === -1 ? null : { start: h, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for ($c = { focusedElem: t, selectionRange: n }, Mu = !1, Pt = e; Pt !== null; )
      if (e = Pt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, Pt = t;
      else
        for (; Pt !== null; ) {
          switch (e = Pt, u = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (n = 0; n < t.length; n++)
                  i = t[n], i.ref.impl = i.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, n = e, i = u.memoizedProps, u = u.memoizedState, l = n.stateNode;
                try {
                  var W = rl(
                    n.type,
                    i
                  );
                  t = l.getSnapshotBeforeUpdate(
                    W,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = t;
                } catch (lt) {
                  Ut(
                    n,
                    n.return,
                    lt
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                  no(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      no(t);
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
            t.return = e.return, Pt = t;
            break;
          }
          Pt = e.return;
        }
  }
  function U0(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        dn(t, n), l & 4 && Ia(5, n);
        break;
      case 1:
        if (dn(t, n), l & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (s) {
              Ut(n, n.return, s);
            }
          else {
            var i = rl(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                i,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (s) {
              Ut(
                n,
                n.return,
                s
              );
            }
          }
        l & 64 && b0(n), l & 512 && ja(n, n.return);
        break;
      case 3:
        if (dn(t, n), l & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            ss(t, e);
          } catch (s) {
            Ut(n, n.return, s);
          }
        }
        break;
      case 27:
        e === null && l & 4 && T0(n);
      case 26:
      case 5:
        dn(t, n), e === null && l & 4 && w0(n), l & 512 && ja(n, n.return);
        break;
      case 12:
        dn(t, n);
        break;
      case 31:
        dn(t, n), l & 4 && D0(t, n);
        break;
      case 13:
        dn(t, n), l & 4 && O0(t, n), l & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = Jd.bind(
          null,
          n
        ), dh(t, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || sn, !l) {
          e = e !== null && e.memoizedState !== null || Jt, i = sn;
          var u = Jt;
          sn = l, (Jt = e) && !u ? hn(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : dn(t, n), sn = i, Jt = u;
        }
        break;
      case 30:
        break;
      default:
        dn(t, n);
    }
  }
  function z0(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, z0(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ff(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Yt = null, se = !1;
  function An(t, e, n) {
    for (n = n.child; n !== null; )
      M0(t, e, n), n = n.sibling;
  }
  function M0(t, e, n) {
    if (ve && typeof ve.onCommitFiberUnmount == "function")
      try {
        ve.onCommitFiberUnmount(Aa, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Jt || Fe(n, e), An(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Jt || Fe(n, e);
        var l = Yt, i = se;
        Ln(n.type) && (Yt = n.stateNode, se = !1), An(
          t,
          e,
          n
        ), ka(n.stateNode), Yt = l, se = i;
        break;
      case 5:
        Jt || Fe(n, e);
      case 6:
        if (l = Yt, i = se, Yt = null, An(
          t,
          e,
          n
        ), Yt = l, se = i, Yt !== null)
          if (se)
            try {
              (Yt.nodeType === 9 ? Yt.body : Yt.nodeName === "HTML" ? Yt.ownerDocument.body : Yt).removeChild(n.stateNode);
            } catch (u) {
              Ut(
                n,
                e,
                u
              );
            }
          else
            try {
              Yt.removeChild(n.stateNode);
            } catch (u) {
              Ut(
                n,
                e,
                u
              );
            }
        break;
      case 18:
        Yt !== null && (se ? (t = Yt, b1(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), fa(t)) : b1(Yt, n.stateNode));
        break;
      case 4:
        l = Yt, i = se, Yt = n.stateNode.containerInfo, se = !0, An(
          t,
          e,
          n
        ), Yt = l, se = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        On(2, n, e), Jt || On(4, n, e), An(
          t,
          e,
          n
        );
        break;
      case 1:
        Jt || (Fe(n, e), l = n.stateNode, typeof l.componentWillUnmount == "function" && S0(
          n,
          e,
          l
        )), An(
          t,
          e,
          n
        );
        break;
      case 21:
        An(
          t,
          e,
          n
        );
        break;
      case 22:
        Jt = (l = Jt) || n.memoizedState !== null, An(
          t,
          e,
          n
        ), Jt = l;
        break;
      default:
        An(
          t,
          e,
          n
        );
    }
  }
  function D0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        fa(t);
      } catch (n) {
        Ut(e, e.return, n);
      }
    }
  }
  function O0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        fa(t);
      } catch (n) {
        Ut(e, e.return, n);
      }
  }
  function Hd(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new C0()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new C0()), e;
      default:
        throw Error(c(435, t.tag));
    }
  }
  function ou(t, e) {
    var n = Hd(t);
    e.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var i = _d.bind(null, t, l);
        l.then(i, i);
      }
    });
  }
  function Ae(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var i = n[l], u = t, s = e, h = s;
        t: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (Ln(h.type)) {
                Yt = h.stateNode, se = !1;
                break t;
              }
              break;
            case 5:
              Yt = h.stateNode, se = !1;
              break t;
            case 3:
            case 4:
              Yt = h.stateNode.containerInfo, se = !0;
              break t;
          }
          h = h.return;
        }
        if (Yt === null) throw Error(c(160));
        M0(u, s, i), Yt = null, se = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        N0(e, t), e = e.sibling;
  }
  var Ge = null;
  function N0(t, e) {
    var n = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ae(e, t), de(t), l & 4 && (On(3, t, t.return), Ia(3, t), On(5, t, t.return));
        break;
      case 1:
        Ae(e, t), de(t), l & 512 && (Jt || n === null || Fe(n, n.return)), l & 64 && sn && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var i = Ge;
        if (Ae(e, t), de(t), l & 512 && (Jt || n === null || Fe(n, n.return)), l & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (l = t.memoizedState, n === null)
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  l = t.type, n = t.memoizedProps, i = i.ownerDocument || i;
                  e: switch (l) {
                    case "title":
                      u = i.getElementsByTagName("title")[0], (!u || u[ya] || u[te] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(l), i.head.insertBefore(
                        u,
                        i.querySelector("head > title")
                      )), ae(u, l, n), u[te] = t, kt(u), l = u;
                      break t;
                    case "link":
                      var s = N1(
                        "link",
                        "href",
                        i
                      ).get(l + (n.href || ""));
                      if (s) {
                        for (var h = 0; h < s.length; h++)
                          if (u = s[h], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            s.splice(h, 1);
                            break e;
                          }
                      }
                      u = i.createElement(l), ae(u, l, n), i.head.appendChild(u);
                      break;
                    case "meta":
                      if (s = N1(
                        "meta",
                        "content",
                        i
                      ).get(l + (n.content || ""))) {
                        for (h = 0; h < s.length; h++)
                          if (u = s[h], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            s.splice(h, 1);
                            break e;
                          }
                      }
                      u = i.createElement(l), ae(u, l, n), i.head.appendChild(u);
                      break;
                    default:
                      throw Error(c(468, l));
                  }
                  u[te] = t, kt(u), l = u;
                }
                t.stateNode = l;
              } else
                x1(
                  i,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = O1(
                i,
                l,
                t.memoizedProps
              );
          else
            u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, l === null ? x1(
              i,
              t.type,
              t.stateNode
            ) : O1(
              i,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && zc(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Ae(e, t), de(t), l & 512 && (Jt || n === null || Fe(n, n.return)), n !== null && l & 4 && zc(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Ae(e, t), de(t), l & 512 && (Jt || n === null || Fe(n, n.return)), t.flags & 32) {
          i = t.stateNode;
          try {
            Dl(i, "");
          } catch (W) {
            Ut(t, t.return, W);
          }
        }
        l & 4 && t.stateNode != null && (i = t.memoizedProps, zc(
          t,
          i,
          n !== null ? n.memoizedProps : i
        )), l & 1024 && (Oc = !0);
        break;
      case 6:
        if (Ae(e, t), de(t), l & 4) {
          if (t.stateNode === null)
            throw Error(c(162));
          l = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = l;
          } catch (W) {
            Ut(t, t.return, W);
          }
        }
        break;
      case 3:
        if (Tu = null, i = Ge, Ge = wu(e.containerInfo), Ae(e, t), Ge = i, de(t), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            fa(e.containerInfo);
          } catch (W) {
            Ut(t, t.return, W);
          }
        Oc && (Oc = !1, x0(t));
        break;
      case 4:
        l = Ge, Ge = wu(
          t.stateNode.containerInfo
        ), Ae(e, t), de(t), Ge = l;
        break;
      case 12:
        Ae(e, t), de(t);
        break;
      case 31:
        Ae(e, t), de(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ou(t, l)));
        break;
      case 13:
        Ae(e, t), de(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (su = $t()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ou(t, l)));
        break;
      case 22:
        i = t.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null, U = sn, Q = Jt;
        if (sn = U || i, Jt = Q || E, Ae(e, t), Jt = Q, sn = U, de(t), l & 8192)
          t: for (e = t.stateNode, e._visibility = i ? e._visibility & -2 : e._visibility | 1, i && (n === null || E || sn || Jt || sl(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                E = n = e;
                try {
                  if (u = E.stateNode, i)
                    s = u.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    h = E.stateNode;
                    var H = E.memoizedProps.style, z = H != null && H.hasOwnProperty("display") ? H.display : null;
                    h.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (W) {
                  Ut(E, E.return, W);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                E = e;
                try {
                  E.stateNode.nodeValue = i ? "" : E.memoizedProps;
                } catch (W) {
                  Ut(E, E.return, W);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                E = e;
                try {
                  var x = E.stateNode;
                  i ? S1(x, !0) : S1(E.stateNode, !1);
                } catch (W) {
                  Ut(E, E.return, W);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), e = e.return;
            }
            n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
          }
        l & 4 && (l = t.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, ou(t, n))));
        break;
      case 19:
        Ae(e, t), de(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ou(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ae(e, t), de(t);
    }
  }
  function de(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (B0(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode, u = Mc(t);
            cu(t, u, i);
            break;
          case 5:
            var s = n.stateNode;
            n.flags & 32 && (Dl(s, ""), n.flags &= -33);
            var h = Mc(t);
            cu(t, h, s);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo, U = Mc(t);
            Dc(
              t,
              U,
              E
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (Q) {
        Ut(t, t.return, Q);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function x0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        x0(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function dn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        U0(t, e.alternate, e), e = e.sibling;
  }
  function sl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          On(4, e, e.return), sl(e);
          break;
        case 1:
          Fe(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && S0(
            e,
            e.return,
            n
          ), sl(e);
          break;
        case 27:
          ka(e.stateNode);
        case 26:
        case 5:
          Fe(e, e.return), sl(e);
          break;
        case 22:
          e.memoizedState === null && sl(e);
          break;
        case 30:
          sl(e);
          break;
        default:
          sl(e);
      }
      t = t.sibling;
    }
  }
  function hn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, i = t, u = e, s = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          hn(
            i,
            u,
            n
          ), Ia(4, u);
          break;
        case 1:
          if (hn(
            i,
            u,
            n
          ), l = u, i = l.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (U) {
              Ut(l, l.return, U);
            }
          if (l = u, i = l.updateQueue, i !== null) {
            var h = l.stateNode;
            try {
              var E = i.shared.hiddenCallbacks;
              if (E !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < E.length; i++)
                  rs(E[i], h);
            } catch (U) {
              Ut(l, l.return, U);
            }
          }
          n && s & 64 && b0(u), ja(u, u.return);
          break;
        case 27:
          T0(u);
        case 26:
        case 5:
          hn(
            i,
            u,
            n
          ), n && l === null && s & 4 && w0(u), ja(u, u.return);
          break;
        case 12:
          hn(
            i,
            u,
            n
          );
          break;
        case 31:
          hn(
            i,
            u,
            n
          ), n && s & 4 && D0(i, u);
          break;
        case 13:
          hn(
            i,
            u,
            n
          ), n && s & 4 && O0(i, u);
          break;
        case 22:
          u.memoizedState === null && hn(
            i,
            u,
            n
          ), ja(u, u.return);
          break;
        case 30:
          break;
        default:
          hn(
            i,
            u,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Nc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && za(n));
  }
  function xc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && za(t));
  }
  function Ie(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        R0(
          t,
          e,
          n,
          l
        ), e = e.sibling;
  }
  function R0(t, e, n, l) {
    var i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ie(
          t,
          e,
          n,
          l
        ), i & 2048 && Ia(9, e);
        break;
      case 1:
        Ie(
          t,
          e,
          n,
          l
        );
        break;
      case 3:
        Ie(
          t,
          e,
          n,
          l
        ), i & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && za(t)));
        break;
      case 12:
        if (i & 2048) {
          Ie(
            t,
            e,
            n,
            l
          ), t = e.stateNode;
          try {
            var u = e.memoizedProps, s = u.id, h = u.onPostCommit;
            typeof h == "function" && h(
              s,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (E) {
            Ut(e, e.return, E);
          }
        } else
          Ie(
            t,
            e,
            n,
            l
          );
        break;
      case 31:
        Ie(
          t,
          e,
          n,
          l
        );
        break;
      case 13:
        Ie(
          t,
          e,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, s = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Ie(
          t,
          e,
          n,
          l
        ) : Za(t, e) : u._visibility & 2 ? Ie(
          t,
          e,
          n,
          l
        ) : (u._visibility |= 2, Wl(
          t,
          e,
          n,
          l,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && Nc(s, e);
        break;
      case 24:
        Ie(
          t,
          e,
          n,
          l
        ), i & 2048 && xc(e.alternate, e);
        break;
      default:
        Ie(
          t,
          e,
          n,
          l
        );
    }
  }
  function Wl(t, e, n, l, i) {
    for (i = i && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, s = e, h = n, E = l, U = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Wl(
            u,
            s,
            h,
            E,
            i
          ), Ia(8, s);
          break;
        case 23:
          break;
        case 22:
          var Q = s.stateNode;
          s.memoizedState !== null ? Q._visibility & 2 ? Wl(
            u,
            s,
            h,
            E,
            i
          ) : Za(
            u,
            s
          ) : (Q._visibility |= 2, Wl(
            u,
            s,
            h,
            E,
            i
          )), i && U & 2048 && Nc(
            s.alternate,
            s
          );
          break;
        case 24:
          Wl(
            u,
            s,
            h,
            E,
            i
          ), i && U & 2048 && xc(s.alternate, s);
          break;
        default:
          Wl(
            u,
            s,
            h,
            E,
            i
          );
      }
      e = e.sibling;
    }
  }
  function Za(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, l = e, i = l.flags;
        switch (l.tag) {
          case 22:
            Za(n, l), i & 2048 && Nc(
              l.alternate,
              l
            );
            break;
          case 24:
            Za(n, l), i & 2048 && xc(l.alternate, l);
            break;
          default:
            Za(n, l);
        }
        e = e.sibling;
      }
  }
  var Va = 8192;
  function kl(t, e, n) {
    if (t.subtreeFlags & Va)
      for (t = t.child; t !== null; )
        Q0(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Q0(t, e, n) {
    switch (t.tag) {
      case 26:
        kl(
          t,
          e,
          n
        ), t.flags & Va && t.memoizedState !== null && Th(
          n,
          Ge,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        kl(
          t,
          e,
          n
        );
        break;
      case 3:
      case 4:
        var l = Ge;
        Ge = wu(t.stateNode.containerInfo), kl(
          t,
          e,
          n
        ), Ge = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Va, Va = 16777216, kl(
          t,
          e,
          n
        ), Va = l) : kl(
          t,
          e,
          n
        ));
        break;
      default:
        kl(
          t,
          e,
          n
        );
    }
  }
  function q0(t) {
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
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          Pt = l, L0(
            l,
            t
          );
        }
      q0(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Y0(t), t = t.sibling;
  }
  function Y0(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Xa(t), t.flags & 2048 && On(9, t, t.return);
        break;
      case 3:
        Xa(t);
        break;
      case 12:
        Xa(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ru(t)) : Xa(t);
        break;
      default:
        Xa(t);
    }
  }
  function ru(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          Pt = l, L0(
            l,
            t
          );
        }
      q0(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          On(8, e, e.return), ru(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, ru(e));
          break;
        default:
          ru(e);
      }
      t = t.sibling;
    }
  }
  function L0(t, e) {
    for (; Pt !== null; ) {
      var n = Pt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          On(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          za(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, Pt = l;
      else
        t: for (n = t; Pt !== null; ) {
          l = Pt;
          var i = l.sibling, u = l.return;
          if (z0(l), l === n) {
            Pt = null;
            break t;
          }
          if (i !== null) {
            i.return = u, Pt = i;
            break t;
          }
          Pt = u;
        }
    }
  }
  var Gd = {
    getCacheForType: function(t) {
      var e = ne(Vt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return ne(Vt).controller.signal;
    }
  }, Id = typeof WeakMap == "function" ? WeakMap : Map, Tt = 0, Nt = null, dt = null, yt = 0, Ct = 0, Be = null, Nn = !1, Pl = !1, Rc = !1, yn = 0, Ht = 0, xn = 0, Al = 0, Qc = 0, Te = 0, $l = 0, Ka = null, he = null, qc = !1, su = 0, H0 = 0, Au = 1 / 0, du = null, Rn = null, Wt = 0, Qn = null, ta = null, gn = 0, Yc = 0, Lc = null, G0 = null, Ja = 0, Hc = null;
  function Ce() {
    return (Tt & 2) !== 0 && yt !== 0 ? yt & -yt : D.T !== null ? Xc() : nr();
  }
  function I0() {
    if (Te === 0)
      if ((yt & 536870912) === 0 || vt) {
        var t = bi;
        bi <<= 1, (bi & 3932160) === 0 && (bi = 262144), Te = t;
      } else Te = 536870912;
    return t = Se.current, t !== null && (t.flags |= 32), Te;
  }
  function ye(t, e, n) {
    (t === Nt && (Ct === 2 || Ct === 9) || t.cancelPendingCommit !== null) && (ea(t, 0), qn(
      t,
      yt,
      Te,
      !1
    )), ha(t, n), ((Tt & 2) === 0 || t !== Nt) && (t === Nt && ((Tt & 2) === 0 && (Al |= n), Ht === 4 && qn(
      t,
      yt,
      Te,
      !1
    )), We(t));
  }
  function j0(t, e, n) {
    if ((Tt & 6) !== 0) throw Error(c(327));
    var l = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || da(t, e), i = l ? Vd(t, e) : Ic(t, e, !0), u = l;
    do {
      if (i === 0) {
        Pl && !l && qn(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !jd(n)) {
          i = Ic(t, e, !1), u = !1;
          continue;
        }
        if (i === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var s = 0;
          else
            s = t.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            e = s;
            t: {
              var h = t;
              i = Ka;
              var E = h.current.memoizedState.isDehydrated;
              if (E && (ea(h, s).flags |= 256), s = Ic(
                h,
                s,
                !1
              ), s !== 2) {
                if (Rc && !E) {
                  h.errorRecoveryDisabledLanes |= u, Al |= u, i = 4;
                  break t;
                }
                u = he, he = i, u !== null && (he === null ? he = u : he.push.apply(
                  he,
                  u
                ));
              }
              i = s;
            }
            if (u = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          ea(t, 0), qn(t, e, 0, !0);
          break;
        }
        t: {
          switch (l = t, u = i, u) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              qn(
                l,
                e,
                Te,
                !Nn
              );
              break t;
            case 2:
              he = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((e & 62914560) === e && (i = su + 300 - $t(), 10 < i)) {
            if (qn(
              l,
              e,
              Te,
              !Nn
            ), wi(l, 0, !0) !== 0) break t;
            gn = e, l.timeoutHandle = p1(
              Z0.bind(
                null,
                l,
                n,
                he,
                du,
                qc,
                e,
                Te,
                Al,
                $l,
                Nn,
                u,
                "Throttled",
                -0,
                0
              ),
              i
            );
            break t;
          }
          Z0(
            l,
            n,
            he,
            du,
            qc,
            e,
            Te,
            Al,
            $l,
            Nn,
            u,
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
  function Z0(t, e, n, l, i, u, s, h, E, U, Q, H, z, x) {
    if (t.timeoutHandle = -1, H = e.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: tn
      }, Q0(
        e,
        u,
        H
      );
      var W = (u & 62914560) === u ? su - $t() : (u & 4194048) === u ? H0 - $t() : 0;
      if (W = Ch(
        H,
        W
      ), W !== null) {
        gn = u, t.cancelPendingCommit = W(
          k0.bind(
            null,
            t,
            e,
            u,
            n,
            l,
            i,
            s,
            h,
            E,
            Q,
            H,
            null,
            z,
            x
          )
        ), qn(t, u, s, !U);
        return;
      }
    }
    k0(
      t,
      e,
      u,
      n,
      l,
      i,
      s,
      h,
      E
    );
  }
  function jd(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var i = n[l], u = i.getSnapshot;
          i = i.value;
          try {
            if (!Ee(u(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
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
  function qn(t, e, n, l) {
    e &= ~Qc, e &= ~Al, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var i = e; 0 < i; ) {
      var u = 31 - pe(i), s = 1 << u;
      l[u] = -1, i &= ~s;
    }
    n !== 0 && $o(t, n, e);
  }
  function hu() {
    return (Tt & 6) === 0 ? (_a(0), !1) : !0;
  }
  function Gc() {
    if (dt !== null) {
      if (Ct === 0)
        var t = dt.return;
      else
        t = dt, an = ll = null, nc(t), Xl = null, Da = 0, t = dt;
      for (; t !== null; )
        E0(t.alternate, t), t = t.return;
      dt = null;
    }
  }
  function ea(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, ch(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), gn = 0, Gc(), Nt = t, dt = n = nn(t.current, null), yt = e, Ct = 0, Be = null, Nn = !1, Pl = da(t, e), Rc = !1, $l = Te = Qc = Al = xn = Ht = 0, he = Ka = null, qc = !1, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var i = 31 - pe(l), u = 1 << i;
        e |= t[i], l &= ~u;
      }
    return yn = e, Qi(), n;
  }
  function V0(t, e) {
    rt = null, D.H = La, e === Vl || e === Zi ? (e = us(), Ct = 3) : e === Vf ? (e = us(), Ct = 4) : Ct = e === vc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Be = e, dt === null && (Ht = 1, lu(
      t,
      Ne(e, t.current)
    ));
  }
  function X0() {
    var t = Se.current;
    return t === null ? !0 : (yt & 4194048) === yt ? qe === null : (yt & 62914560) === yt || (yt & 536870912) !== 0 ? t === qe : !1;
  }
  function K0() {
    var t = D.H;
    return D.H = La, t === null ? La : t;
  }
  function J0() {
    var t = D.A;
    return D.A = Gd, t;
  }
  function yu() {
    Ht = 4, Nn || (yt & 4194048) !== yt && Se.current !== null || (Pl = !0), (xn & 134217727) === 0 && (Al & 134217727) === 0 || Nt === null || qn(
      Nt,
      yt,
      Te,
      !1
    );
  }
  function Ic(t, e, n) {
    var l = Tt;
    Tt |= 2;
    var i = K0(), u = J0();
    (Nt !== t || yt !== e) && (du = null, ea(t, e)), e = !1;
    var s = Ht;
    t: do
      try {
        if (Ct !== 0 && dt !== null) {
          var h = dt, E = Be;
          switch (Ct) {
            case 8:
              Gc(), s = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Se.current === null && (e = !0);
              var U = Ct;
              if (Ct = 0, Be = null, na(t, h, E, U), n && Pl) {
                s = 0;
                break t;
              }
              break;
            default:
              U = Ct, Ct = 0, Be = null, na(t, h, E, U);
          }
        }
        Zd(), s = Ht;
        break;
      } catch (Q) {
        V0(t, Q);
      }
    while (!0);
    return e && t.shellSuspendCounter++, an = ll = null, Tt = l, D.H = i, D.A = u, dt === null && (Nt = null, yt = 0, Qi()), s;
  }
  function Zd() {
    for (; dt !== null; ) _0(dt);
  }
  function Vd(t, e) {
    var n = Tt;
    Tt |= 2;
    var l = K0(), i = J0();
    Nt !== t || yt !== e ? (du = null, Au = $t() + 500, ea(t, e)) : Pl = da(
      t,
      e
    );
    t: do
      try {
        if (Ct !== 0 && dt !== null) {
          e = dt;
          var u = Be;
          e: switch (Ct) {
            case 1:
              Ct = 0, Be = null, na(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (as(u)) {
                Ct = 0, Be = null, F0(e);
                break;
              }
              e = function() {
                Ct !== 2 && Ct !== 9 || Nt !== t || (Ct = 7), We(t);
              }, u.then(e, e);
              break t;
            case 3:
              Ct = 7;
              break t;
            case 4:
              Ct = 5;
              break t;
            case 7:
              as(u) ? (Ct = 0, Be = null, F0(e)) : (Ct = 0, Be = null, na(t, e, u, 7));
              break;
            case 5:
              var s = null;
              switch (dt.tag) {
                case 26:
                  s = dt.memoizedState;
                case 5:
                case 27:
                  var h = dt;
                  if (s ? R1(s) : h.stateNode.complete) {
                    Ct = 0, Be = null;
                    var E = h.sibling;
                    if (E !== null) dt = E;
                    else {
                      var U = h.return;
                      U !== null ? (dt = U, gu(U)) : dt = null;
                    }
                    break e;
                  }
              }
              Ct = 0, Be = null, na(t, e, u, 5);
              break;
            case 6:
              Ct = 0, Be = null, na(t, e, u, 6);
              break;
            case 8:
              Gc(), Ht = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        Xd();
        break;
      } catch (Q) {
        V0(t, Q);
      }
    while (!0);
    return an = ll = null, D.H = l, D.A = i, Tt = n, dt !== null ? 0 : (Nt = null, yt = 0, Qi(), Ht);
  }
  function Xd() {
    for (; dt !== null && !sa(); )
      _0(dt);
  }
  function _0(t) {
    var e = v0(t.alternate, t, yn);
    t.memoizedProps = t.pendingProps, e === null ? gu(t) : dt = e;
  }
  function F0(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = A0(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          yt
        );
        break;
      case 11:
        e = A0(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          yt
        );
        break;
      case 5:
        nc(e);
      default:
        E0(n, e), e = dt = Jr(e, yn), e = v0(n, e, yn);
    }
    t.memoizedProps = t.pendingProps, e === null ? gu(t) : dt = e;
  }
  function na(t, e, n, l) {
    an = ll = null, nc(e), Xl = null, Da = 0;
    var i = e.return;
    try {
      if (xd(
        t,
        i,
        e,
        n,
        yt
      )) {
        Ht = 1, lu(
          t,
          Ne(n, t.current)
        ), dt = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw dt = i, u;
      Ht = 1, lu(
        t,
        Ne(n, t.current)
      ), dt = null;
      return;
    }
    e.flags & 32768 ? (vt || l === 1 ? t = !0 : Pl || (yt & 536870912) !== 0 ? t = !1 : (Nn = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Se.current, l !== null && l.tag === 13 && (l.flags |= 16384))), W0(e, t)) : gu(e);
  }
  function gu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        W0(
          e,
          Nn
        );
        return;
      }
      t = e.return;
      var n = qd(
        e.alternate,
        e,
        yn
      );
      if (n !== null) {
        dt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        dt = e;
        return;
      }
      dt = e = t;
    } while (e !== null);
    Ht === 0 && (Ht = 5);
  }
  function W0(t, e) {
    do {
      var n = Yd(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, dt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        dt = t;
        return;
      }
      dt = t = n;
    } while (t !== null);
    Ht = 6, dt = null;
  }
  function k0(t, e, n, l, i, u, s, h, E) {
    t.cancelPendingCommit = null;
    do
      mu();
    while (Wt !== 0);
    if ((Tt & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      if (u = e.lanes | e.childLanes, u |= Mf, B2(
        t,
        n,
        u,
        s,
        h,
        E
      ), t === Nt && (dt = Nt = null, yt = 0), ta = e, Qn = t, gn = n, Yc = u, Lc = i, G0 = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Fd(pi, function() {
        return n1(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = D.T, D.T = null, i = X.p, X.p = 2, s = Tt, Tt |= 4;
        try {
          Ld(t, e, n);
        } finally {
          Tt = s, X.p = i, D.T = l;
        }
      }
      Wt = 1, P0(), $0(), t1();
    }
  }
  function P0() {
    if (Wt === 1) {
      Wt = 0;
      var t = Qn, e = ta, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = D.T, D.T = null;
        var l = X.p;
        X.p = 2;
        var i = Tt;
        Tt |= 4;
        try {
          N0(e, t);
          var u = $c, s = Lr(t.containerInfo), h = u.focusedElem, E = u.selectionRange;
          if (s !== h && h && h.ownerDocument && Yr(
            h.ownerDocument.documentElement,
            h
          )) {
            if (E !== null && Bf(h)) {
              var U = E.start, Q = E.end;
              if (Q === void 0 && (Q = U), "selectionStart" in h)
                h.selectionStart = U, h.selectionEnd = Math.min(
                  Q,
                  h.value.length
                );
              else {
                var H = h.ownerDocument || document, z = H && H.defaultView || window;
                if (z.getSelection) {
                  var x = z.getSelection(), W = h.textContent.length, lt = Math.min(E.start, W), Dt = E.end === void 0 ? lt : Math.min(E.end, W);
                  !x.extend && lt > Dt && (s = Dt, Dt = lt, lt = s);
                  var T = qr(
                    h,
                    lt
                  ), S = qr(
                    h,
                    Dt
                  );
                  if (T && S && (x.rangeCount !== 1 || x.anchorNode !== T.node || x.anchorOffset !== T.offset || x.focusNode !== S.node || x.focusOffset !== S.offset)) {
                    var C = H.createRange();
                    C.setStart(T.node, T.offset), x.removeAllRanges(), lt > Dt ? (x.addRange(C), x.extend(S.node, S.offset)) : (C.setEnd(S.node, S.offset), x.addRange(C));
                  }
                }
              }
            }
            for (H = [], x = h; x = x.parentNode; )
              x.nodeType === 1 && H.push({
                element: x,
                left: x.scrollLeft,
                top: x.scrollTop
              });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < H.length; h++) {
              var Y = H[h];
              Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top;
            }
          }
          Mu = !!Pc, $c = Pc = null;
        } finally {
          Tt = i, X.p = l, D.T = n;
        }
      }
      t.current = e, Wt = 2;
    }
  }
  function $0() {
    if (Wt === 2) {
      Wt = 0;
      var t = Qn, e = ta, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = D.T, D.T = null;
        var l = X.p;
        X.p = 2;
        var i = Tt;
        Tt |= 4;
        try {
          U0(t, e.alternate, e);
        } finally {
          Tt = i, X.p = l, D.T = n;
        }
      }
      Wt = 3;
    }
  }
  function t1() {
    if (Wt === 4 || Wt === 3) {
      Wt = 0, vi();
      var t = Qn, e = ta, n = gn, l = G0;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Wt = 5 : (Wt = 0, ta = Qn = null, e1(t, t.pendingLanes));
      var i = t.pendingLanes;
      if (i === 0 && (Rn = null), af(n), e = e.stateNode, ve && typeof ve.onCommitFiberRoot == "function")
        try {
          ve.onCommitFiberRoot(
            Aa,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        e = D.T, i = X.p, X.p = 2, D.T = null;
        try {
          for (var u = t.onRecoverableError, s = 0; s < l.length; s++) {
            var h = l[s];
            u(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          D.T = e, X.p = i;
        }
      }
      (gn & 3) !== 0 && mu(), We(t), i = t.pendingLanes, (n & 261930) !== 0 && (i & 42) !== 0 ? t === Hc ? Ja++ : (Ja = 0, Hc = t) : Ja = 0, _a(0);
    }
  }
  function e1(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, za(e)));
  }
  function mu() {
    return P0(), $0(), t1(), n1();
  }
  function n1() {
    if (Wt !== 5) return !1;
    var t = Qn, e = Yc;
    Yc = 0;
    var n = af(gn), l = D.T, i = X.p;
    try {
      X.p = 32 > n ? 32 : n, D.T = null, n = Lc, Lc = null;
      var u = Qn, s = gn;
      if (Wt = 0, ta = Qn = null, gn = 0, (Tt & 6) !== 0) throw Error(c(331));
      var h = Tt;
      if (Tt |= 4, Y0(u.current), R0(
        u,
        u.current,
        s,
        n
      ), Tt = h, _a(0, !1), ve && typeof ve.onPostCommitFiberRoot == "function")
        try {
          ve.onPostCommitFiberRoot(Aa, u);
        } catch {
        }
      return !0;
    } finally {
      X.p = i, D.T = l, e1(t, e);
    }
  }
  function l1(t, e, n) {
    e = Ne(n, e), e = mc(t.stateNode, e, 2), t = zn(t, e, 2), t !== null && (ha(t, 2), We(t));
  }
  function Ut(t, e, n) {
    if (t.tag === 3)
      l1(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          l1(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Rn === null || !Rn.has(l))) {
            t = Ne(n, t), n = a0(2), l = zn(e, n, 2), l !== null && (i0(
              n,
              l,
              e,
              t
            ), ha(l, 2), We(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function jc(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Id();
      var i = /* @__PURE__ */ new Set();
      l.set(e, i);
    } else
      i = l.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), l.set(e, i));
    i.has(n) || (Rc = !0, i.add(n), t = Kd.bind(null, t, e, n), e.then(t, t));
  }
  function Kd(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Nt === t && (yt & n) === n && (Ht === 4 || Ht === 3 && (yt & 62914560) === yt && 300 > $t() - su ? (Tt & 2) === 0 && ea(t, 0) : Qc |= n, $l === yt && ($l = 0)), We(t);
  }
  function a1(t, e) {
    e === 0 && (e = Po()), t = tl(t, e), t !== null && (ha(t, e), We(t));
  }
  function Jd(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), a1(t, n);
  }
  function _d(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode, i = t.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    l !== null && l.delete(e), a1(t, n);
  }
  function Fd(t, e) {
    return Ke(t, e);
  }
  var vu = null, la = null, Zc = !1, pu = !1, Vc = !1, Yn = 0;
  function We(t) {
    t !== la && t.next === null && (la === null ? vu = la = t : la = la.next = t), pu = !0, Zc || (Zc = !0, kd());
  }
  function _a(t, e) {
    if (!Vc && pu) {
      Vc = !0;
      do
        for (var n = !1, l = vu; l !== null; ) {
          if (t !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var s = l.suspendedLanes, h = l.pingedLanes;
              u = (1 << 31 - pe(42 | t) + 1) - 1, u &= i & ~(s & ~h), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, c1(l, u));
          } else
            u = yt, u = wi(
              l,
              l === Nt ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || da(l, u) || (n = !0, c1(l, u));
          l = l.next;
        }
      while (n);
      Vc = !1;
    }
  }
  function Wd() {
    i1();
  }
  function i1() {
    pu = Zc = !1;
    var t = 0;
    Yn !== 0 && fh() && (t = Yn);
    for (var e = $t(), n = null, l = vu; l !== null; ) {
      var i = l.next, u = u1(l, e);
      u === 0 ? (l.next = null, n === null ? vu = i : n.next = i, i === null && (la = n)) : (n = l, (t !== 0 || (u & 3) !== 0) && (pu = !0)), l = i;
    }
    Wt !== 0 && Wt !== 5 || _a(t), Yn !== 0 && (Yn = 0);
  }
  function u1(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, i = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var s = 31 - pe(u), h = 1 << s, E = i[s];
      E === -1 ? ((h & n) === 0 || (h & l) !== 0) && (i[s] = w2(h, e)) : E <= e && (t.expiredLanes |= h), u &= ~h;
    }
    if (e = Nt, n = yt, n = wi(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, n === 0 || t === e && (Ct === 2 || Ct === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && vn(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || da(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (l !== null && vn(l), af(n)) {
        case 2:
        case 8:
          n = Wo;
          break;
        case 32:
          n = pi;
          break;
        case 268435456:
          n = ko;
          break;
        default:
          n = pi;
      }
      return l = f1.bind(null, t), n = Ke(n, l), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return l !== null && l !== null && vn(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function f1(t, e) {
    if (Wt !== 0 && Wt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (mu() && t.callbackNode !== n)
      return null;
    var l = yt;
    return l = wi(
      t,
      t === Nt ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (j0(t, l, e), u1(t, $t()), t.callbackNode != null && t.callbackNode === n ? f1.bind(null, t) : null);
  }
  function c1(t, e) {
    if (mu()) return null;
    j0(t, e, !0);
  }
  function kd() {
    oh(function() {
      (Tt & 6) !== 0 ? Ke(
        Fo,
        Wd
      ) : i1();
    });
  }
  function Xc() {
    if (Yn === 0) {
      var t = jl;
      t === 0 && (t = Ei, Ei <<= 1, (Ei & 261888) === 0 && (Ei = 256)), Yn = t;
    }
    return Yn;
  }
  function o1(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ui("" + t);
  }
  function r1(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function Pd(t, e, n, l, i) {
    if (e === "submit" && n && n.stateNode === i) {
      var u = o1(
        (i[oe] || null).action
      ), s = l.submitter;
      s && (e = (e = s[oe] || null) ? o1(e.formAction) : s.getAttribute("formAction"), e !== null && (u = e, s = null));
      var h = new Oi(
        "action",
        "action",
        null,
        l,
        i
      );
      t.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Yn !== 0) {
                  var E = s ? r1(i, s) : new FormData(i);
                  sc(
                    n,
                    {
                      pending: !0,
                      data: E,
                      method: i.method,
                      action: u
                    },
                    null,
                    E
                  );
                }
              } else
                typeof u == "function" && (h.preventDefault(), E = s ? r1(i, s) : new FormData(i), sc(
                  n,
                  {
                    pending: !0,
                    data: E,
                    method: i.method,
                    action: u
                  },
                  u,
                  E
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var Kc = 0; Kc < zf.length; Kc++) {
    var Jc = zf[Kc], $d = Jc.toLowerCase(), th = Jc[0].toUpperCase() + Jc.slice(1);
    He(
      $d,
      "on" + th
    );
  }
  He(Ir, "onAnimationEnd"), He(jr, "onAnimationIteration"), He(Zr, "onAnimationStart"), He("dblclick", "onDoubleClick"), He("focusin", "onFocus"), He("focusout", "onBlur"), He(gd, "onTransitionRun"), He(md, "onTransitionStart"), He(vd, "onTransitionCancel"), He(Vr, "onTransitionEnd"), zl("onMouseEnter", ["mouseout", "mouseover"]), zl("onMouseLeave", ["mouseout", "mouseover"]), zl("onPointerEnter", ["pointerout", "pointerover"]), zl("onPointerLeave", ["pointerout", "pointerover"]), Wn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Wn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Wn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Wn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Wn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Wn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Fa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), eh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fa)
  );
  function s1(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n], i = l.event;
      l = l.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var s = l.length - 1; 0 <= s; s--) {
            var h = l[s], E = h.instance, U = h.currentTarget;
            if (h = h.listener, E !== u && i.isPropagationStopped())
              break t;
            u = h, i.currentTarget = U;
            try {
              u(i);
            } catch (Q) {
              Ri(Q);
            }
            i.currentTarget = null, u = E;
          }
        else
          for (s = 0; s < l.length; s++) {
            if (h = l[s], E = h.instance, U = h.currentTarget, h = h.listener, E !== u && i.isPropagationStopped())
              break t;
            u = h, i.currentTarget = U;
            try {
              u(i);
            } catch (Q) {
              Ri(Q);
            }
            i.currentTarget = null, u = E;
          }
      }
    }
  }
  function ht(t, e) {
    var n = e[uf];
    n === void 0 && (n = e[uf] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    n.has(l) || (A1(e, t, 2, !1), n.add(l));
  }
  function _c(t, e, n) {
    var l = 0;
    e && (l |= 4), A1(
      n,
      t,
      l,
      e
    );
  }
  var Eu = "_reactListening" + Math.random().toString(36).slice(2);
  function Fc(t) {
    if (!t[Eu]) {
      t[Eu] = !0, ir.forEach(function(n) {
        n !== "selectionchange" && (eh.has(n) || _c(n, !1, t), _c(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Eu] || (e[Eu] = !0, _c("selectionchange", !1, e));
    }
  }
  function A1(t, e, n, l) {
    switch (I1(e)) {
      case 2:
        var i = Mh;
        break;
      case 8:
        i = Dh;
        break;
      default:
        i = ro;
    }
    n = i.bind(
      null,
      e,
      n,
      t
    ), i = void 0, !yf || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), l ? i !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: i
    }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
      passive: i
    }) : t.addEventListener(e, n, !1);
  }
  function Wc(t, e, n, l, i) {
    var u = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (; ; ) {
        if (l === null) return;
        var s = l.tag;
        if (s === 3 || s === 4) {
          var h = l.stateNode.containerInfo;
          if (h === i) break;
          if (s === 4)
            for (s = l.return; s !== null; ) {
              var E = s.tag;
              if ((E === 3 || E === 4) && s.stateNode.containerInfo === i)
                return;
              s = s.return;
            }
          for (; h !== null; ) {
            if (s = Tl(h), s === null) return;
            if (E = s.tag, E === 5 || E === 6 || E === 26 || E === 27) {
              l = u = s;
              continue t;
            }
            h = h.parentNode;
          }
        }
        l = l.return;
      }
    mr(function() {
      var U = u, Q = df(n), H = [];
      t: {
        var z = Xr.get(t);
        if (z !== void 0) {
          var x = Oi, W = t;
          switch (t) {
            case "keypress":
              if (Mi(n) === 0) break t;
            case "keydown":
            case "keyup":
              x = _2;
              break;
            case "focusin":
              W = "focus", x = pf;
              break;
            case "focusout":
              W = "blur", x = pf;
              break;
            case "beforeblur":
            case "afterblur":
              x = pf;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = Er;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = q2;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = k2;
              break;
            case Ir:
            case jr:
            case Zr:
              x = H2;
              break;
            case Vr:
              x = $2;
              break;
            case "scroll":
            case "scrollend":
              x = R2;
              break;
            case "wheel":
              x = ed;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = I2;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = Sr;
              break;
            case "toggle":
            case "beforetoggle":
              x = ld;
          }
          var lt = (e & 4) !== 0, Dt = !lt && (t === "scroll" || t === "scrollend"), T = lt ? z !== null ? z + "Capture" : null : z;
          lt = [];
          for (var S = U, C; S !== null; ) {
            var Y = S;
            if (C = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || C === null || T === null || (Y = ma(S, T), Y != null && lt.push(
              Wa(S, Y, C)
            )), Dt) break;
            S = S.return;
          }
          0 < lt.length && (z = new x(
            z,
            W,
            null,
            n,
            Q
          ), H.push({ event: z, listeners: lt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (z = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout", z && n !== Af && (W = n.relatedTarget || n.fromElement) && (Tl(W) || W[Bl]))
            break t;
          if ((x || z) && (z = Q.window === Q ? Q : (z = Q.ownerDocument) ? z.defaultView || z.parentWindow : window, x ? (W = n.relatedTarget || n.toElement, x = U, W = W ? Tl(W) : null, W !== null && (Dt = A(W), lt = W.tag, W !== Dt || lt !== 5 && lt !== 27 && lt !== 6) && (W = null)) : (x = null, W = U), x !== W)) {
            if (lt = Er, Y = "onMouseLeave", T = "onMouseEnter", S = "mouse", (t === "pointerout" || t === "pointerover") && (lt = Sr, Y = "onPointerLeave", T = "onPointerEnter", S = "pointer"), Dt = x == null ? z : ga(x), C = W == null ? z : ga(W), z = new lt(
              Y,
              S + "leave",
              x,
              n,
              Q
            ), z.target = Dt, z.relatedTarget = C, Y = null, Tl(Q) === U && (lt = new lt(
              T,
              S + "enter",
              W,
              n,
              Q
            ), lt.target = C, lt.relatedTarget = Dt, Y = lt), Dt = Y, x && W)
              e: {
                for (lt = nh, T = x, S = W, C = 0, Y = T; Y; Y = lt(Y))
                  C++;
                Y = 0;
                for (var et = S; et; et = lt(et))
                  Y++;
                for (; 0 < C - Y; )
                  T = lt(T), C--;
                for (; 0 < Y - C; )
                  S = lt(S), Y--;
                for (; C--; ) {
                  if (T === S || S !== null && T === S.alternate) {
                    lt = T;
                    break e;
                  }
                  T = lt(T), S = lt(S);
                }
                lt = null;
              }
            else lt = null;
            x !== null && d1(
              H,
              z,
              x,
              lt,
              !1
            ), W !== null && Dt !== null && d1(
              H,
              Dt,
              W,
              lt,
              !0
            );
          }
        }
        t: {
          if (z = U ? ga(U) : window, x = z.nodeName && z.nodeName.toLowerCase(), x === "select" || x === "input" && z.type === "file")
            var St = Dr;
          else if (zr(z))
            if (Or)
              St = dd;
            else {
              St = sd;
              var P = rd;
            }
          else
            x = z.nodeName, !x || x.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? U && sf(U.elementType) && (St = Dr) : St = Ad;
          if (St && (St = St(t, U))) {
            Mr(
              H,
              St,
              n,
              Q
            );
            break t;
          }
          P && P(t, z, U), t === "focusout" && U && z.type === "number" && U.memoizedProps.value != null && rf(z, "number", z.value);
        }
        switch (P = U ? ga(U) : window, t) {
          case "focusin":
            (zr(P) || P.contentEditable === "true") && (Rl = P, Tf = U, Ta = null);
            break;
          case "focusout":
            Ta = Tf = Rl = null;
            break;
          case "mousedown":
            Cf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Cf = !1, Hr(H, n, Q);
            break;
          case "selectionchange":
            if (yd) break;
          case "keydown":
          case "keyup":
            Hr(H, n, Q);
        }
        var st;
        if (bf)
          t: {
            switch (t) {
              case "compositionstart":
                var gt = "onCompositionStart";
                break t;
              case "compositionend":
                gt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                gt = "onCompositionUpdate";
                break t;
            }
            gt = void 0;
          }
        else
          xl ? Cr(t, n) && (gt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (gt = "onCompositionStart");
        gt && (wr && n.locale !== "ko" && (xl || gt !== "onCompositionStart" ? gt === "onCompositionEnd" && xl && (st = vr()) : (bn = Q, gf = "value" in bn ? bn.value : bn.textContent, xl = !0)), P = bu(U, gt), 0 < P.length && (gt = new br(
          gt,
          t,
          null,
          n,
          Q
        ), H.push({ event: gt, listeners: P }), st ? gt.data = st : (st = Ur(n), st !== null && (gt.data = st)))), (st = id ? ud(t, n) : fd(t, n)) && (gt = bu(U, "onBeforeInput"), 0 < gt.length && (P = new br(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          Q
        ), H.push({
          event: P,
          listeners: gt
        }), P.data = st)), Pd(
          H,
          t,
          U,
          n,
          Q
        );
      }
      s1(H, e);
    });
  }
  function Wa(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function bu(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var i = t, u = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = ma(t, n), i != null && l.unshift(
        Wa(t, i, u)
      ), i = ma(t, e), i != null && l.push(
        Wa(t, i, u)
      )), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function nh(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function d1(t, e, n, l, i) {
    for (var u = e._reactName, s = []; n !== null && n !== l; ) {
      var h = n, E = h.alternate, U = h.stateNode;
      if (h = h.tag, E !== null && E === l) break;
      h !== 5 && h !== 26 && h !== 27 || U === null || (E = U, i ? (U = ma(n, u), U != null && s.unshift(
        Wa(n, U, E)
      )) : i || (U = ma(n, u), U != null && s.push(
        Wa(n, U, E)
      ))), n = n.return;
    }
    s.length !== 0 && t.push({ event: e, listeners: s });
  }
  var lh = /\r\n?/g, ah = /\u0000|\uFFFD/g;
  function h1(t) {
    return (typeof t == "string" ? t : "" + t).replace(lh, `
`).replace(ah, "");
  }
  function y1(t, e) {
    return e = h1(e), h1(t) === e;
  }
  function Mt(t, e, n, l, i, u) {
    switch (n) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Dl(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Dl(t, "" + l);
        break;
      case "className":
        Ti(t, "class", l);
        break;
      case "tabIndex":
        Ti(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ti(t, n, l);
        break;
      case "style":
        yr(t, l, u);
        break;
      case "data":
        if (e !== "object") {
          Ti(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Ui("" + l), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (e !== "input" && Mt(t, e, "name", i.name, i, null), Mt(
            t,
            e,
            "formEncType",
            i.formEncType,
            i,
            null
          ), Mt(
            t,
            e,
            "formMethod",
            i.formMethod,
            i,
            null
          ), Mt(
            t,
            e,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (Mt(t, e, "encType", i.encType, i, null), Mt(t, e, "method", i.method, i, null), Mt(t, e, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Ui("" + l), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = tn);
        break;
      case "onScroll":
        l != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ht("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (i.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Ui("" + l), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
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
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "" + l) : t.removeAttribute(n);
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
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? t.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(n) : t.setAttribute(n, l);
        break;
      case "popover":
        ht("beforetoggle", t), ht("toggle", t), Bi(t, "popover", l);
        break;
      case "xlinkActuate":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Bi(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = N2.get(n) || n, Bi(t, n, l));
    }
  }
  function kc(t, e, n, l, i, u) {
    switch (n) {
      case "style":
        yr(t, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (i.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Dl(t, l) : (typeof l == "number" || typeof l == "bigint") && Dl(t, "" + l);
        break;
      case "onScroll":
        l != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ht("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = tn);
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
        if (!ur.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), e = n.slice(2, i ? n.length - 7 : void 0), u = t[oe] || null, u = u != null ? u[n] : null, typeof u == "function" && t.removeEventListener(e, u, i), typeof l == "function")) {
              typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, l, i);
              break t;
            }
            n in t ? t[n] = l : l === !0 ? t.setAttribute(n, "") : Bi(t, n, l);
          }
    }
  }
  function ae(t, e, n) {
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
        ht("error", t), ht("load", t);
        var l = !1, i = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var s = n[u];
            if (s != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, e));
                default:
                  Mt(t, e, u, s, n, null);
              }
          }
        i && Mt(t, e, "srcSet", n.srcSet, n, null), l && Mt(t, e, "src", n.src, n, null);
        return;
      case "input":
        ht("invalid", t);
        var h = u = s = i = null, E = null, U = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var Q = n[l];
            if (Q != null)
              switch (l) {
                case "name":
                  i = Q;
                  break;
                case "type":
                  s = Q;
                  break;
                case "checked":
                  E = Q;
                  break;
                case "defaultChecked":
                  U = Q;
                  break;
                case "value":
                  u = Q;
                  break;
                case "defaultValue":
                  h = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(c(137, e));
                  break;
                default:
                  Mt(t, e, l, Q, n, null);
              }
          }
        sr(
          t,
          u,
          h,
          E,
          U,
          s,
          i,
          !1
        );
        return;
      case "select":
        ht("invalid", t), l = s = u = null;
        for (i in n)
          if (n.hasOwnProperty(i) && (h = n[i], h != null))
            switch (i) {
              case "value":
                u = h;
                break;
              case "defaultValue":
                s = h;
                break;
              case "multiple":
                l = h;
              default:
                Mt(t, e, i, h, n, null);
            }
        e = u, n = s, t.multiple = !!l, e != null ? Ml(t, !!l, e, !1) : n != null && Ml(t, !!l, n, !0);
        return;
      case "textarea":
        ht("invalid", t), u = i = l = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (h = n[s], h != null))
            switch (s) {
              case "value":
                l = h;
                break;
              case "defaultValue":
                i = h;
                break;
              case "children":
                u = h;
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(c(91));
                break;
              default:
                Mt(t, e, s, h, n, null);
            }
        dr(t, l, i, u);
        return;
      case "option":
        for (E in n)
          if (n.hasOwnProperty(E) && (l = n[E], l != null))
            switch (E) {
              case "selected":
                t.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Mt(t, e, E, l, n, null);
            }
        return;
      case "dialog":
        ht("beforetoggle", t), ht("toggle", t), ht("cancel", t), ht("close", t);
        break;
      case "iframe":
      case "object":
        ht("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Fa.length; l++)
          ht(Fa[l], t);
        break;
      case "image":
        ht("error", t), ht("load", t);
        break;
      case "details":
        ht("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ht("error", t), ht("load", t);
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
        for (U in n)
          if (n.hasOwnProperty(U) && (l = n[U], l != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                Mt(t, e, U, l, n, null);
            }
        return;
      default:
        if (sf(e)) {
          for (Q in n)
            n.hasOwnProperty(Q) && (l = n[Q], l !== void 0 && kc(
              t,
              e,
              Q,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (h in n)
      n.hasOwnProperty(h) && (l = n[h], l != null && Mt(t, e, h, l, n, null));
  }
  function ih(t, e, n, l) {
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
        var i = null, u = null, s = null, h = null, E = null, U = null, Q = null;
        for (x in n) {
          var H = n[x];
          if (n.hasOwnProperty(x) && H != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = H;
              default:
                l.hasOwnProperty(x) || Mt(t, e, x, null, l, H);
            }
        }
        for (var z in l) {
          var x = l[z];
          if (H = n[z], l.hasOwnProperty(z) && (x != null || H != null))
            switch (z) {
              case "type":
                u = x;
                break;
              case "name":
                i = x;
                break;
              case "checked":
                U = x;
                break;
              case "defaultChecked":
                Q = x;
                break;
              case "value":
                s = x;
                break;
              case "defaultValue":
                h = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(c(137, e));
                break;
              default:
                x !== H && Mt(
                  t,
                  e,
                  z,
                  x,
                  l,
                  H
                );
            }
        }
        of(
          t,
          s,
          h,
          E,
          U,
          Q,
          u,
          i
        );
        return;
      case "select":
        x = s = h = z = null;
        for (u in n)
          if (E = n[u], n.hasOwnProperty(u) && E != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                x = E;
              default:
                l.hasOwnProperty(u) || Mt(
                  t,
                  e,
                  u,
                  null,
                  l,
                  E
                );
            }
        for (i in l)
          if (u = l[i], E = n[i], l.hasOwnProperty(i) && (u != null || E != null))
            switch (i) {
              case "value":
                z = u;
                break;
              case "defaultValue":
                h = u;
                break;
              case "multiple":
                s = u;
              default:
                u !== E && Mt(
                  t,
                  e,
                  i,
                  u,
                  l,
                  E
                );
            }
        e = h, n = s, l = x, z != null ? Ml(t, !!n, z, !1) : !!l != !!n && (e != null ? Ml(t, !!n, e, !0) : Ml(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        x = z = null;
        for (h in n)
          if (i = n[h], n.hasOwnProperty(h) && i != null && !l.hasOwnProperty(h))
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                Mt(t, e, h, null, l, i);
            }
        for (s in l)
          if (i = l[s], u = n[s], l.hasOwnProperty(s) && (i != null || u != null))
            switch (s) {
              case "value":
                z = i;
                break;
              case "defaultValue":
                x = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(c(91));
                break;
              default:
                i !== u && Mt(t, e, s, i, l, u);
            }
        Ar(t, z, x);
        return;
      case "option":
        for (var W in n)
          if (z = n[W], n.hasOwnProperty(W) && z != null && !l.hasOwnProperty(W))
            switch (W) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Mt(
                  t,
                  e,
                  W,
                  null,
                  l,
                  z
                );
            }
        for (E in l)
          if (z = l[E], x = n[E], l.hasOwnProperty(E) && z !== x && (z != null || x != null))
            switch (E) {
              case "selected":
                t.selected = z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                Mt(
                  t,
                  e,
                  E,
                  z,
                  l,
                  x
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
        for (var lt in n)
          z = n[lt], n.hasOwnProperty(lt) && z != null && !l.hasOwnProperty(lt) && Mt(t, e, lt, null, l, z);
        for (U in l)
          if (z = l[U], x = n[U], l.hasOwnProperty(U) && z !== x && (z != null || x != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(c(137, e));
                break;
              default:
                Mt(
                  t,
                  e,
                  U,
                  z,
                  l,
                  x
                );
            }
        return;
      default:
        if (sf(e)) {
          for (var Dt in n)
            z = n[Dt], n.hasOwnProperty(Dt) && z !== void 0 && !l.hasOwnProperty(Dt) && kc(
              t,
              e,
              Dt,
              void 0,
              l,
              z
            );
          for (Q in l)
            z = l[Q], x = n[Q], !l.hasOwnProperty(Q) || z === x || z === void 0 && x === void 0 || kc(
              t,
              e,
              Q,
              z,
              l,
              x
            );
          return;
        }
    }
    for (var T in n)
      z = n[T], n.hasOwnProperty(T) && z != null && !l.hasOwnProperty(T) && Mt(t, e, T, null, l, z);
    for (H in l)
      z = l[H], x = n[H], !l.hasOwnProperty(H) || z === x || z == null && x == null || Mt(t, e, H, z, l, x);
  }
  function g1(t) {
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
  function uh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var i = n[l], u = i.transferSize, s = i.initiatorType, h = i.duration;
        if (u && h && g1(s)) {
          for (s = 0, h = i.responseEnd, l += 1; l < n.length; l++) {
            var E = n[l], U = E.startTime;
            if (U > h) break;
            var Q = E.transferSize, H = E.initiatorType;
            Q && g1(H) && (E = E.responseEnd, s += Q * (E < h ? 1 : (h - U) / (E - U)));
          }
          if (--l, e += 8 * (u + s) / (i.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Pc = null, $c = null;
  function Su(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function m1(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function v1(t, e) {
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
  function fh() {
    var t = window.event;
    return t && t.type === "popstate" ? t === eo ? !1 : (eo = t, !0) : (eo = null, !1);
  }
  var p1 = typeof setTimeout == "function" ? setTimeout : void 0, ch = typeof clearTimeout == "function" ? clearTimeout : void 0, E1 = typeof Promise == "function" ? Promise : void 0, oh = typeof queueMicrotask == "function" ? queueMicrotask : typeof E1 < "u" ? function(t) {
    return E1.resolve(null).then(t).catch(rh);
  } : p1;
  function rh(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ln(t) {
    return t === "head";
  }
  function b1(t, e) {
    var n = e, l = 0;
    do {
      var i = n.nextSibling;
      if (t.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$" || n === "/&") {
          if (l === 0) {
            t.removeChild(i), fa(e);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          ka(t.ownerDocument.documentElement);
        else if (n === "head") {
          n = t.ownerDocument.head, ka(n);
          for (var u = n.firstChild; u; ) {
            var s = u.nextSibling, h = u.nodeName;
            u[ya] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = s;
          }
        } else
          n === "body" && ka(t.ownerDocument.body);
      n = i;
    } while (n);
    fa(e);
  }
  function S1(t, e) {
    var n = t;
    t = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = l;
    } while (n);
  }
  function no(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          no(n), ff(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function sh(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var i = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[ya])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== i.rel || t.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || t.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || t.getAttribute("title") !== (i.title == null ? null : i.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (i.src == null ? null : i.src) || t.getAttribute("type") !== (i.type == null ? null : i.type) || t.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Ye(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Ah(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ye(t.nextSibling), t === null)) return null;
    return t;
  }
  function w1(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ye(t.nextSibling), t === null)) return null;
    return t;
  }
  function lo(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function ao(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function dh(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var l = function() {
        e(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function Ye(t) {
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
  var io = null;
  function B1(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Ye(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function T1(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function C1(t, e, n) {
    switch (e = Su(n), t) {
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
  var Le = /* @__PURE__ */ new Map(), U1 = /* @__PURE__ */ new Set();
  function wu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var mn = X.d;
  X.d = {
    f: hh,
    r: yh,
    D: gh,
    C: mh,
    L: vh,
    m: ph,
    X: bh,
    S: Eh,
    M: Sh
  };
  function hh() {
    var t = mn.f(), e = hu();
    return t || e;
  }
  function yh(t) {
    var e = Cl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Vs(e) : mn.r(t);
  }
  var aa = typeof document > "u" ? null : document;
  function z1(t, e, n) {
    var l = aa;
    if (l && typeof e == "string" && e) {
      var i = De(e);
      i = 'link[rel="' + t + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), U1.has(i) || (U1.add(i), t = { rel: t, crossOrigin: n, href: e }, l.querySelector(i) === null && (e = l.createElement("link"), ae(e, "link", t), kt(e), l.head.appendChild(e)));
    }
  }
  function gh(t) {
    mn.D(t), z1("dns-prefetch", t, null);
  }
  function mh(t, e) {
    mn.C(t, e), z1("preconnect", t, e);
  }
  function vh(t, e, n) {
    mn.L(t, e, n);
    var l = aa;
    if (l && t && e) {
      var i = 'link[rel="preload"][as="' + De(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + De(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + De(
        n.imageSizes
      ) + '"]')) : i += '[href="' + De(t) + '"]';
      var u = i;
      switch (e) {
        case "style":
          u = ia(t);
          break;
        case "script":
          u = ua(t);
      }
      Le.has(u) || (t = m(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), Le.set(u, t), l.querySelector(i) !== null || e === "style" && l.querySelector(Pa(u)) || e === "script" && l.querySelector($a(u)) || (e = l.createElement("link"), ae(e, "link", t), kt(e), l.head.appendChild(e)));
    }
  }
  function ph(t, e) {
    mn.m(t, e);
    var n = aa;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", i = 'link[rel="modulepreload"][as="' + De(l) + '"][href="' + De(t) + '"]', u = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ua(t);
      }
      if (!Le.has(u) && (t = m({ rel: "modulepreload", href: t }, e), Le.set(u, t), n.querySelector(i) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector($a(u)))
              return;
        }
        l = n.createElement("link"), ae(l, "link", t), kt(l), n.head.appendChild(l);
      }
    }
  }
  function Eh(t, e, n) {
    mn.S(t, e, n);
    var l = aa;
    if (l && t) {
      var i = Ul(l).hoistableStyles, u = ia(t);
      e = e || "default";
      var s = i.get(u);
      if (!s) {
        var h = { loading: 0, preload: null };
        if (s = l.querySelector(
          Pa(u)
        ))
          h.loading = 5;
        else {
          t = m(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = Le.get(u)) && uo(t, n);
          var E = s = l.createElement("link");
          kt(E), ae(E, "link", t), E._p = new Promise(function(U, Q) {
            E.onload = U, E.onerror = Q;
          }), E.addEventListener("load", function() {
            h.loading |= 1;
          }), E.addEventListener("error", function() {
            h.loading |= 2;
          }), h.loading |= 4, Bu(s, e, l);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: h
        }, i.set(u, s);
      }
    }
  }
  function bh(t, e) {
    mn.X(t, e);
    var n = aa;
    if (n && t) {
      var l = Ul(n).hoistableScripts, i = ua(t), u = l.get(i);
      u || (u = n.querySelector($a(i)), u || (t = m({ src: t, async: !0 }, e), (e = Le.get(i)) && fo(t, e), u = n.createElement("script"), kt(u), ae(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(i, u));
    }
  }
  function Sh(t, e) {
    mn.M(t, e);
    var n = aa;
    if (n && t) {
      var l = Ul(n).hoistableScripts, i = ua(t), u = l.get(i);
      u || (u = n.querySelector($a(i)), u || (t = m({ src: t, async: !0, type: "module" }, e), (e = Le.get(i)) && fo(t, e), u = n.createElement("script"), kt(u), ae(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(i, u));
    }
  }
  function M1(t, e, n, l) {
    var i = (i = ot.current) ? wu(i) : null;
    if (!i) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ia(n.href), n = Ul(
          i
        ).hoistableStyles, l = n.get(e), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = ia(n.href);
          var u = Ul(
            i
          ).hoistableStyles, s = u.get(t);
          if (s || (i = i.ownerDocument || i, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, s), (u = i.querySelector(
            Pa(t)
          )) && !u._p && (s.instance = u, s.state.loading = 5), Le.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Le.set(t, n), u || wh(
            i,
            t,
            n,
            s.state
          ))), e && l === null)
            throw Error(c(528, ""));
          return s;
        }
        if (e && l !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ua(n), n = Ul(
          i
        ).hoistableScripts, l = n.get(e), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, t));
    }
  }
  function ia(t) {
    return 'href="' + De(t) + '"';
  }
  function Pa(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function D1(t) {
    return m({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function wh(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), ae(e, "link", n), kt(e), t.head.appendChild(e));
  }
  function ua(t) {
    return '[src="' + De(t) + '"]';
  }
  function $a(t) {
    return "script[async]" + t;
  }
  function O1(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + De(n.href) + '"]'
          );
          if (l)
            return e.instance = l, kt(l), l;
          var i = m({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), kt(l), ae(l, "style", i), Bu(l, n.precedence, t), e.instance = l;
        case "stylesheet":
          i = ia(n.href);
          var u = t.querySelector(
            Pa(i)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, kt(u), u;
          l = D1(n), (i = Le.get(i)) && uo(l, i), u = (t.ownerDocument || t).createElement("link"), kt(u);
          var s = u;
          return s._p = new Promise(function(h, E) {
            s.onload = h, s.onerror = E;
          }), ae(u, "link", l), e.state.loading |= 4, Bu(u, n.precedence, t), e.instance = u;
        case "script":
          return u = ua(n.src), (i = t.querySelector(
            $a(u)
          )) ? (e.instance = i, kt(i), i) : (l = n, (i = Le.get(u)) && (l = m({}, n), fo(l, i)), t = t.ownerDocument || t, i = t.createElement("script"), kt(i), ae(i, "link", l), t.head.appendChild(i), e.instance = i);
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, Bu(l, n.precedence, t));
    return e.instance;
  }
  function Bu(t, e, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = l.length ? l[l.length - 1] : null, u = i, s = 0; s < l.length; s++) {
      var h = l[s];
      if (h.dataset.precedence === e) u = h;
      else if (u !== i) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function uo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function fo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Tu = null;
  function N1(t, e, n) {
    if (Tu === null) {
      var l = /* @__PURE__ */ new Map(), i = Tu = /* @__PURE__ */ new Map();
      i.set(n, l);
    } else
      i = Tu, l = i.get(n), l || (l = /* @__PURE__ */ new Map(), i.set(n, l));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), i = 0; i < n.length; i++) {
      var u = n[i];
      if (!(u[ya] || u[te] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = u.getAttribute(e) || "";
        s = t + s;
        var h = l.get(s);
        h ? h.push(u) : l.set(s, [u]);
      }
    }
    return l;
  }
  function x1(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Bh(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
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
  function Th(t, e, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var i = ia(l.href), u = e.querySelector(
          Pa(i)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Cu.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, kt(u);
          return;
        }
        u = e.ownerDocument || e, l = D1(l), (i = Le.get(i)) && uo(l, i), u = u.createElement("link"), kt(u);
        var s = u;
        s._p = new Promise(function(h, E) {
          s.onload = h, s.onerror = E;
        }), ae(u, "link", l), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = Cu.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var co = 0;
  function Ch(t, e) {
    return t.stylesheets && t.count === 0 && zu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (t.stylesheets && zu(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && co === 0 && (co = 62500 * uh());
      var i = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && zu(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > co ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(i);
      };
    } : null;
  }
  function Cu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) zu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Uu = null;
  function zu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Uu = /* @__PURE__ */ new Map(), e.forEach(Uh, t), Uu = null, Cu.call(t));
  }
  function Uh(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Uu.get(t);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Uu.set(t, n);
        for (var i = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < i.length; u++) {
          var s = i[u];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (n.set(s.dataset.precedence, s), l = s);
        }
        l && n.set(null, l);
      }
      i = e.instance, s = i.getAttribute("data-precedence"), u = n.get(s) || l, u === l && n.set(null, i), n.set(s, i), this.count++, l = Cu.bind(this), i.addEventListener("load", l), i.addEventListener("error", l), u ? u.parentNode.insertBefore(i, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(i, t.firstChild)), e.state.loading |= 4;
    }
  }
  var ti = {
    $$typeof: G,
    Provider: null,
    Consumer: null,
    _currentValue: tt,
    _currentValue2: tt,
    _threadCount: 0
  };
  function zh(t, e, n, l, i, u, s, h, E) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = nf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nf(0), this.hiddenUpdates = nf(null), this.identifierPrefix = l, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Q1(t, e, n, l, i, u, s, h, E, U, Q, H) {
    return t = new zh(
      t,
      e,
      n,
      s,
      E,
      U,
      Q,
      H,
      h
    ), e = 1, u === !0 && (e |= 24), u = be(3, null, null, e), t.current = u, u.stateNode = t, e = If(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: e
    }, Xf(u), t;
  }
  function q1(t) {
    return t ? (t = Yl, t) : Yl;
  }
  function Y1(t, e, n, l, i, u) {
    i = q1(i), l.context === null ? l.context = i : l.pendingContext = i, l = Un(e), l.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = zn(t, l, e), n !== null && (ye(n, t, e), Na(n, t, e));
  }
  function L1(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function oo(t, e) {
    L1(t, e), (t = t.alternate) && L1(t, e);
  }
  function H1(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = tl(t, 67108864);
      e !== null && ye(e, t, 67108864), oo(t, 67108864);
    }
  }
  function G1(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ce();
      e = lf(e);
      var n = tl(t, e);
      n !== null && ye(n, t, e), oo(t, e);
    }
  }
  var Mu = !0;
  function Mh(t, e, n, l) {
    var i = D.T;
    D.T = null;
    var u = X.p;
    try {
      X.p = 2, ro(t, e, n, l);
    } finally {
      X.p = u, D.T = i;
    }
  }
  function Dh(t, e, n, l) {
    var i = D.T;
    D.T = null;
    var u = X.p;
    try {
      X.p = 8, ro(t, e, n, l);
    } finally {
      X.p = u, D.T = i;
    }
  }
  function ro(t, e, n, l) {
    if (Mu) {
      var i = so(l);
      if (i === null)
        Wc(
          t,
          e,
          l,
          Du,
          n
        ), j1(t, l);
      else if (Nh(
        i,
        t,
        e,
        n,
        l
      ))
        l.stopPropagation();
      else if (j1(t, l), e & 4 && -1 < Oh.indexOf(t)) {
        for (; i !== null; ) {
          var u = Cl(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var s = Fn(u.pendingLanes);
                  if (s !== 0) {
                    var h = u;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; s; ) {
                      var E = 1 << 31 - pe(s);
                      h.entanglements[1] |= E, s &= ~E;
                    }
                    We(u), (Tt & 6) === 0 && (Au = $t() + 500, _a(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = tl(u, 2), h !== null && ye(h, u, 2), hu(), oo(u, 2);
            }
          if (u = so(l), u === null && Wc(
            t,
            e,
            l,
            Du,
            n
          ), u === i) break;
          i = u;
        }
        i !== null && l.stopPropagation();
      } else
        Wc(
          t,
          e,
          l,
          null,
          n
        );
    }
  }
  function so(t) {
    return t = df(t), Ao(t);
  }
  var Du = null;
  function Ao(t) {
    if (Du = null, t = Tl(t), t !== null) {
      var e = A(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = y(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Du = t, null;
  }
  function I1(t) {
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
        switch (wl()) {
          case Fo:
            return 2;
          case Wo:
            return 8;
          case pi:
          case m2:
            return 32;
          case ko:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ho = !1, Hn = null, Gn = null, In = null, ei = /* @__PURE__ */ new Map(), ni = /* @__PURE__ */ new Map(), jn = [], Oh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function j1(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Gn = null;
        break;
      case "mouseover":
      case "mouseout":
        In = null;
        break;
      case "pointerover":
      case "pointerout":
        ei.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ni.delete(e.pointerId);
    }
  }
  function li(t, e, n, l, i, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [i]
    }, e !== null && (e = Cl(e), e !== null && H1(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t);
  }
  function Nh(t, e, n, l, i) {
    switch (e) {
      case "focusin":
        return Hn = li(
          Hn,
          t,
          e,
          n,
          l,
          i
        ), !0;
      case "dragenter":
        return Gn = li(
          Gn,
          t,
          e,
          n,
          l,
          i
        ), !0;
      case "mouseover":
        return In = li(
          In,
          t,
          e,
          n,
          l,
          i
        ), !0;
      case "pointerover":
        var u = i.pointerId;
        return ei.set(
          u,
          li(
            ei.get(u) || null,
            t,
            e,
            n,
            l,
            i
          )
        ), !0;
      case "gotpointercapture":
        return u = i.pointerId, ni.set(
          u,
          li(
            ni.get(u) || null,
            t,
            e,
            n,
            l,
            i
          )
        ), !0;
    }
    return !1;
  }
  function Z1(t) {
    var e = Tl(t.target);
    if (e !== null) {
      var n = A(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, lr(t.priority, function() {
              G1(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = y(n), e !== null) {
            t.blockedOn = e, lr(t.priority, function() {
              G1(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ou(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = so(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Af = l, n.target.dispatchEvent(l), Af = null;
      } else
        return e = Cl(n), e !== null && H1(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function V1(t, e, n) {
    Ou(t) && n.delete(e);
  }
  function xh() {
    ho = !1, Hn !== null && Ou(Hn) && (Hn = null), Gn !== null && Ou(Gn) && (Gn = null), In !== null && Ou(In) && (In = null), ei.forEach(V1), ni.forEach(V1);
  }
  function Nu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, ho || (ho = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      xh
    )));
  }
  var xu = null;
  function X1(t) {
    xu !== t && (xu = t, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        xu === t && (xu = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], l = t[e + 1], i = t[e + 2];
          if (typeof l != "function") {
            if (Ao(l || n) === null)
              continue;
            break;
          }
          var u = Cl(n);
          u !== null && (t.splice(e, 3), e -= 3, sc(
            u,
            {
              pending: !0,
              data: i,
              method: n.method,
              action: l
            },
            l,
            i
          ));
        }
      }
    ));
  }
  function fa(t) {
    function e(E) {
      return Nu(E, t);
    }
    Hn !== null && Nu(Hn, t), Gn !== null && Nu(Gn, t), In !== null && Nu(In, t), ei.forEach(e), ni.forEach(e);
    for (var n = 0; n < jn.length; n++) {
      var l = jn[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < jn.length && (n = jn[0], n.blockedOn === null); )
      Z1(n), n.blockedOn === null && jn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var i = n[l], u = n[l + 1], s = i[oe] || null;
        if (typeof u == "function")
          s || X1(n);
        else if (s) {
          var h = null;
          if (u && u.hasAttribute("formAction")) {
            if (i = u, s = u[oe] || null)
              h = s.formAction;
            else if (Ao(i) !== null) continue;
          } else h = s.action;
          typeof h == "function" ? n[l + 1] = h : (n.splice(l, 3), l -= 3), X1(n);
        }
      }
  }
  function K1() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(s) {
            return i = s;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      i !== null && (i(), i = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, i = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), i !== null && (i(), i = null);
      };
    }
  }
  function yo(t) {
    this._internalRoot = t;
  }
  Ru.prototype.render = yo.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(c(409));
    var n = e.current, l = Ce();
    Y1(n, l, t, e, null, null);
  }, Ru.prototype.unmount = yo.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Y1(t.current, 2, null, t, null, null), hu(), e[Bl] = null;
    }
  };
  function Ru(t) {
    this._internalRoot = t;
  }
  Ru.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = nr();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < jn.length && e !== 0 && e < jn[n].priority; n++) ;
      jn.splice(n, 0, t), n === 0 && Z1(t);
    }
  };
  var J1 = f.version;
  if (J1 !== "19.2.7")
    throw Error(
      c(
        527,
        J1,
        "19.2.7"
      )
    );
  X.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = g(e), t = t !== null ? p(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Rh = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qu.isDisabled && Qu.supportsFiber)
      try {
        Aa = Qu.inject(
          Rh
        ), ve = Qu;
      } catch {
      }
  }
  return ii.createRoot = function(t, e) {
    if (!r(t)) throw Error(c(299));
    var n = !1, l = "", i = t0, u = e0, s = n0;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (i = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError)), e = Q1(
      t,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      i,
      u,
      s,
      K1
    ), t[Bl] = e.current, Fc(t), new yo(e);
  }, ii.hydrateRoot = function(t, e, n) {
    if (!r(t)) throw Error(c(299));
    var l = !1, i = "", u = t0, s = e0, h = n0, E = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (h = n.onRecoverableError), n.formState !== void 0 && (E = n.formState)), e = Q1(
      t,
      1,
      !0,
      e,
      n ?? null,
      l,
      i,
      E,
      u,
      s,
      h,
      K1
    ), e.context = q1(null), n = e.current, l = Ce(), l = lf(l), i = Un(l), i.callback = null, zn(n, i, l), n = l, e.current.lanes = n, ha(e, n), We(e), t[Bl] = e.current, Fc(t), new Ru(e);
  }, ii.version = "19.2.7", ii;
}
var lA;
function Vh() {
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
  return a(), vo.exports = Zh(), vo.exports;
}
var Xh = Vh();
const aA = [
  "BOOLEAN",
  "INT32",
  "INT64",
  "INT96",
  // deprecated
  "FLOAT",
  "DOUBLE",
  "BYTE_ARRAY",
  "FIXED_LEN_BYTE_ARRAY"
], yl = [
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
], Kh = [
  "REQUIRED",
  "OPTIONAL",
  "REPEATED"
], Jh = [
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
], _h = [
  "UNCOMPRESSED",
  "SNAPPY",
  "GZIP",
  "LZO",
  "BROTLI",
  "LZ4",
  "ZSTD",
  "LZ4_RAW"
], LA = [
  "DATA_PAGE",
  "INDEX_PAGE",
  "DICTIONARY_PAGE",
  "DATA_PAGE_V2"
], Fh = [
  "SPHERICAL",
  "VINCENTY",
  "THOMAS",
  "ANDOYER",
  "KARNEY"
];
function Uo(a) {
  const f = qu(a);
  if (f.type === 1)
    return { type: "Point", coordinates: zo(a, f) };
  if (f.type === 2)
    return { type: "LineString", coordinates: Mo(a, f) };
  if (f.type === 3)
    return { type: "Polygon", coordinates: iA(a, f) };
  if (f.type === 4) {
    const o = [];
    for (let c = 0; c < f.count; c++)
      o.push(zo(a, qu(a)));
    return { type: "MultiPoint", coordinates: o };
  } else if (f.type === 5) {
    const o = [];
    for (let c = 0; c < f.count; c++)
      o.push(Mo(a, qu(a)));
    return { type: "MultiLineString", coordinates: o };
  } else if (f.type === 6) {
    const o = [];
    for (let c = 0; c < f.count; c++)
      o.push(iA(a, qu(a)));
    return { type: "MultiPolygon", coordinates: o };
  } else if (f.type === 7) {
    const o = [];
    for (let c = 0; c < f.count; c++)
      o.push(Uo(a));
    return { type: "GeometryCollection", geometries: o };
  } else
    throw new Error(`Unsupported geometry type: ${f.type}`);
}
function qu(a) {
  const { view: f } = a, o = f.getUint8(a.offset++) === 1, c = f.getUint32(a.offset, o);
  a.offset += 4;
  const r = c % 1e3, A = Math.floor(c / 1e3);
  let d = 0;
  r > 1 && r <= 7 && (d = f.getUint32(a.offset, o), a.offset += 4);
  let y = 2;
  return A && y++, A === 3 && y++, { littleEndian: o, type: r, dim: y, count: d };
}
function zo(a, f) {
  const o = [];
  for (let c = 0; c < f.dim; c++) {
    const r = a.view.getFloat64(a.offset, f.littleEndian);
    a.offset += 8, o.push(r);
  }
  return o;
}
function Mo(a, f) {
  const o = [];
  for (let c = 0; c < f.count; c++)
    o.push(zo(a, f));
  return o;
}
function iA(a, f) {
  const { view: o } = a, c = [];
  for (let r = 0; r < f.count; r++) {
    const A = o.getUint32(a.offset, f.littleEndian);
    a.offset += 4, c.push(Mo(a, { ...f, count: A }));
  }
  return c;
}
const HA = new TextDecoder(), Pu = {
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
    return a && HA.decode(a);
  },
  geometryFromBytes(a) {
    return a && Uo({ view: new DataView(a.buffer, a.byteOffset, a.byteLength), offset: 0 });
  },
  geographyFromBytes(a) {
    return a && Uo({ view: new DataView(a.buffer, a.byteOffset, a.byteLength), offset: 0 });
  },
  uuidFromBytes(a) {
    if (!a) return;
    const f = Array.from(a, (o) => o.toString(16).padStart(2, "0")).join("");
    return f.slice(0, 8) + "-" + f.slice(8, 12) + "-" + f.slice(12, 16) + "-" + f.slice(16, 20) + "-" + f.slice(20, 32);
  }
};
function uA(a, f, o, c) {
  if (f && o.endsWith("_DICTIONARY")) {
    let r = a;
    a instanceof Uint8Array && !(f instanceof Uint8Array) && (r = new f.constructor(a.length));
    for (let A = 0; A < a.length; A++)
      r[A] = f[a[A]];
    return r;
  } else
    return GA(a, c);
}
function GA(a, f) {
  const { element: o, parsers: c, utf8: r = !0, schemaPath: A } = f, { type: d, converted_type: y, logical_type: v } = o, g = o.repetition_type !== "REQUIRED";
  if (A?.some((m) => m.element.logical_type?.type === "VARIANT") && d === "BYTE_ARRAY" && y !== "UTF8" && v?.type !== "STRING")
    return a;
  if (y === "DECIMAL") {
    const b = 10 ** -(o.scale || 0), N = new Array(a.length);
    for (let O = 0; O < N.length; O++)
      a[O] instanceof Uint8Array ? N[O] = IA(a[O]) * b : N[O] = Number(a[O]) * b;
    return N;
  }
  if (!y && d === "INT96")
    return Array.from(a).map((m) => c.timestampFromNanoseconds(Wh(m)));
  if (y === "DATE")
    return Array.from(a).map((m) => c.dateFromDays(m));
  if (y === "TIMESTAMP_MILLIS")
    return Array.from(a).map((m) => c.timestampFromMilliseconds(m));
  if (y === "TIMESTAMP_MICROS")
    return Array.from(a).map((m) => c.timestampFromMicroseconds(m));
  if (y === "JSON")
    return a.map((m) => JSON.parse(HA.decode(m)));
  if (y === "BSON")
    throw new Error("parquet bson not supported");
  if (y === "INTERVAL")
    throw new Error("parquet interval not supported");
  if (v?.type === "GEOMETRY")
    return a.map((m) => c.geometryFromBytes(m));
  if (v?.type === "GEOGRAPHY")
    return a.map((m) => c.geographyFromBytes(m));
  if (v?.type === "UUID")
    return a.map((m) => c.uuidFromBytes(m));
  if (y === "UTF8" || v?.type === "STRING" || r && d === "BYTE_ARRAY")
    return a.map((m) => c.stringFromBytes(m));
  if (y === "UINT_64" || v?.type === "INTEGER" && v.bitWidth === 64 && !v.isSigned) {
    if (a instanceof BigInt64Array) return new BigUint64Array(a.buffer, a.byteOffset, a.length);
    const m = g ? new Array(a.length) : new BigUint64Array(a.length);
    for (let b = 0; b < m.length; b++) m[b] = a[b];
    return m;
  }
  if (y === "UINT_32" || v?.type === "INTEGER" && v.bitWidth === 32 && !v.isSigned) {
    if (a instanceof Int32Array) return new Uint32Array(a.buffer, a.byteOffset, a.length);
    const m = g ? new Array(a.length) : new Uint32Array(a.length);
    for (let b = 0; b < m.length; b++)
      m[b] = a[b] < 0 ? 4294967296 + a[b] : a[b];
    return m;
  }
  if (v?.type === "FLOAT16")
    return Array.from(a).map(jA);
  if (v?.type === "TIMESTAMP") {
    const { unit: m } = v;
    let b = c.timestampFromMilliseconds;
    m === "MICROS" && (b = c.timestampFromMicroseconds), m === "NANOS" && (b = c.timestampFromNanoseconds);
    const N = new Array(a.length);
    for (let O = 0; O < N.length; O++)
      N[O] = b(a[O]);
    return N;
  }
  return a;
}
function IA(a) {
  if (!a.length) return 0;
  let f = 0n;
  for (const c of a)
    f = f * 256n + BigInt(c);
  const o = a.length * 8;
  return f >= 2n ** BigInt(o - 1) && (f -= 2n ** BigInt(o)), Number(f);
}
function Wh(a) {
  const f = (a >> 64n) - 2440588n, o = a & 0xffffffffffffffffn;
  return f * 86400000000000n + o;
}
function jA(a) {
  if (!a) return;
  const f = a[1] << 8 | a[0], o = f >> 15 ? -1 : 1, c = f >> 10 & 31, r = f & 1023;
  return c === 0 ? o * 2 ** -14 * (r / 1024) : c === 31 ? r ? NaN : o * (1 / 0) : o * 2 ** (c - 15) * (1 + r / 1024);
}
function ZA(a, f, o) {
  const c = a[f], r = [];
  let A = 1;
  if (c.num_children)
    for (; r.length < c.num_children; ) {
      const d = a[f + A], y = ZA(a, f + A, [...o, d.name]);
      A += y.count, r.push(y);
    }
  return { count: A, element: c, children: r, path: o };
}
function VA(a, f) {
  let o = ZA(a, 0, []);
  const c = [o];
  for (const r of f) {
    const A = o.children.find((d) => d.element.name === r);
    if (!A) throw new Error(`parquet schema element not found: ${f}`);
    c.push(A), o = A;
  }
  return c;
}
function XA(a) {
  const f = [];
  function o(c) {
    if (c.children.length)
      for (const r of c.children)
        o(r);
    else
      f.push(c.path.join("."));
  }
  return o(a), f;
}
function KA(a) {
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
function kh(a) {
  if (!a || a.element.converted_type !== "LIST" || a.children.length > 1) return !1;
  const f = a.children[0];
  return !(f.children.length > 1 || f.element.repetition_type !== "REPEATED");
}
function Ph(a) {
  if (!a || a.element.converted_type !== "MAP" || a.children.length > 1) return !1;
  const f = a.children[0];
  return !(f.children.length !== 2 || f.element.repetition_type !== "REPEATED" || f.children.find((r) => r.element.name === "key")?.element.repetition_type === "REPEATED" || f.children.find((r) => r.element.name === "value")?.element.repetition_type === "REPEATED");
}
function JA(a) {
  if (a.length !== 2) return !1;
  const [, f] = a;
  return !(f.element.repetition_type === "REPEATED" || f.children.length);
}
const $h = 0, fA = 1, cA = 2, oA = 3, ty = 4, ey = 5, ny = 6, ly = 7, ay = 8, iy = 9, uy = 12;
function yi(a) {
  const f = {};
  let o = 0;
  for (; a.offset < a.view.byteLength; ) {
    const c = a.view.getUint8(a.offset++), r = c & 15;
    if (r === $h) break;
    const A = c >> 4;
    o = A ? o + A : _A(a), f[`field_${o}`] = Do(a, r);
  }
  return f;
}
function Do(a, f) {
  switch (f) {
    case fA:
      return !0;
    case cA:
      return !1;
    case oA:
      return a.view.getInt8(a.offset++);
    case ty:
    case ey:
      return _A(a);
    case ny:
      return Oo(a);
    case ly: {
      const o = a.view.getFloat64(a.offset, !0);
      return a.offset += 8, o;
    }
    case ay: {
      const o = vl(a), c = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, o);
      return a.offset += o, c;
    }
    case iy: {
      const o = a.view.getUint8(a.offset++), c = o & 15;
      let r = o >> 4;
      r === 15 && (r = vl(a));
      const A = c === fA || c === cA, d = new Array(r);
      for (let y = 0; y < r; y++)
        d[y] = A ? Do(a, oA) === 1 : Do(a, c);
      return d;
    }
    case uy:
      return yi(a);
    default:
      throw new Error(`thrift unhandled type: ${f}`);
  }
}
function vl(a) {
  let f = 0, o = 0;
  for (; ; ) {
    const c = a.view.getUint8(a.offset++);
    if (f |= (c & 127) << o, !(c & 128))
      return f;
    o += 7;
  }
}
function fy(a) {
  let f = 0n, o = 0n;
  for (; ; ) {
    const c = a.view.getUint8(a.offset++);
    if (f |= BigInt(c & 127) << o, !(c & 128))
      return f;
    o += 7n;
  }
}
function _A(a) {
  const f = vl(a);
  return f >>> 1 ^ -(f & 1);
}
function Oo(a) {
  const f = fy(a);
  return f >> 1n ^ -(f & 1n);
}
function cy(a, f) {
  const o = /* @__PURE__ */ new Map(), c = f?.find(({ key: A }) => A === "geo")?.value, r = (c && JSON.parse(c)?.columns) ?? {};
  for (const [A, d] of Object.entries(r)) {
    if (d.encoding !== "WKB") continue;
    const y = d.edges === "spherical" ? "GEOGRAPHY" : "GEOMETRY", v = d.crs?.id ?? d.crs?.ids?.[0], g = v ? `${v.authority}:${v.code.toString()}` : void 0;
    o.set(A, { type: y, crs: g });
  }
  for (let A = 1; A < a.length; A++) {
    const { logical_type: d, name: y, num_children: v, type: g } = a[A];
    if (v) {
      A += v;
      continue;
    }
    g === "BYTE_ARRAY" && !d && (a[A].logical_type = o.get(y));
  }
}
const FA = 1 << 19, oy = new TextDecoder();
function ke(a) {
  return a && oy.decode(a);
}
async function ry(a, { parsers: f, initialFetchSize: o = FA, geoparquet: c = !0 } = {}) {
  if (!a || !(a.byteLength >= 0)) throw new Error("parquet expected AsyncBuffer");
  const r = Math.max(0, a.byteLength - o), A = await a.slice(r, a.byteLength), d = new DataView(A);
  if (d.getUint32(A.byteLength - 4, !0) !== 827474256)
    throw new Error("parquet file invalid (footer != PAR1)");
  const y = d.getUint32(A.byteLength - 8, !0);
  if (y > a.byteLength - 8)
    throw new Error(`parquet metadata length ${y} exceeds available buffer ${a.byteLength - 8}`);
  if (y + 8 > o) {
    const v = a.byteLength - y - 8, g = await a.slice(v, r), p = new ArrayBuffer(y + 8), m = new Uint8Array(p);
    return m.set(new Uint8Array(g)), m.set(new Uint8Array(A), r - v), rA(p, { parsers: f, geoparquet: c });
  } else
    return rA(A, { parsers: f, geoparquet: c });
}
function rA(a, { parsers: f, geoparquet: o = !0 } = {}) {
  if (!(a instanceof ArrayBuffer)) throw new Error("parquet expected ArrayBuffer");
  const c = new DataView(a);
  if (f = { ...Pu, ...f }, c.byteLength < 8)
    throw new Error("parquet file is too short");
  if (c.getUint32(c.byteLength - 4, !0) !== 827474256)
    throw new Error("parquet file invalid (footer != PAR1)");
  const r = c.byteLength - 8, A = c.getUint32(r, !0);
  if (A > c.byteLength - 8)
    throw new Error(`parquet metadata length ${A} exceeds available buffer ${c.byteLength - 8}`);
  const d = r - A, v = yi({ view: c, offset: d }), g = v.field_1, p = v.field_2.map((B) => ({
    type: aA[B.field_1],
    type_length: B.field_2,
    repetition_type: Kh[B.field_3],
    name: ke(B.field_4),
    num_children: B.field_5,
    converted_type: Jh[B.field_6],
    scale: B.field_7,
    precision: B.field_8,
    field_id: B.field_9,
    logical_type: sy(B.field_10)
  })), m = p.filter((B) => B.type), b = v.field_3, N = v.field_4.map((B) => ({
    columns: B.field_1.map((M, Z) => ({
      file_path: ke(M.field_1),
      file_offset: M.field_2,
      meta_data: M.field_3 && {
        type: aA[M.field_3.field_1],
        encodings: M.field_3.field_2?.map((G) => yl[G]),
        path_in_schema: M.field_3.field_3.map(ke),
        codec: _h[M.field_3.field_4],
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
        statistics: Ay(M.field_3.field_12, m[Z], f),
        encoding_stats: M.field_3.field_13?.map((G) => ({
          page_type: LA[G.field_1],
          encoding: yl[G.field_2],
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
  })), O = v.field_5?.map((B) => ({
    key: ke(B.field_1),
    value: ke(B.field_2)
  })), R = ke(v.field_6);
  return o && cy(p, O), {
    version: g,
    schema: p,
    num_rows: b,
    row_groups: N,
    key_value_metadata: O,
    created_by: R,
    metadata_length: A
  };
}
function Ai({ schema: a }) {
  return VA(a, [])[0];
}
function sy(a) {
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
    algorithm: Fh[a.field_18.field_2]
  } : a;
}
function sA(a) {
  if (a.field_1) return "MILLIS";
  if (a.field_2) return "MICROS";
  if (a.field_3) return "NANOS";
  throw new Error("parquet time unit required");
}
function Ay(a, f, o) {
  return a && {
    max: Yu(a.field_1, f, o),
    min: Yu(a.field_2, f, o),
    null_count: a.field_3,
    distinct_count: a.field_4,
    max_value: Yu(a.field_5, f, o),
    min_value: Yu(a.field_6, f, o),
    is_max_value_exact: a.field_7,
    is_min_value_exact: a.field_8
  };
}
function Yu(a, f, o) {
  const { type: c, converted_type: r, logical_type: A } = f;
  if (a === void 0) return a;
  if (c === "BOOLEAN") return a[0] === 1;
  if (c === "BYTE_ARRAY") return o.stringFromBytes(a);
  const d = new DataView(a.buffer, a.byteOffset, a.byteLength);
  return c === "FLOAT" && d.byteLength === 4 ? d.getFloat32(0, !0) : c === "DOUBLE" && d.byteLength === 8 ? d.getFloat64(0, !0) : c === "INT32" && r === "DATE" ? o.dateFromDays(d.getInt32(0, !0)) : c === "INT64" && r === "TIMESTAMP_MILLIS" ? o.timestampFromMilliseconds(d.getBigInt64(0, !0)) : c === "INT64" && r === "TIMESTAMP_MICROS" ? o.timestampFromMicroseconds(d.getBigInt64(0, !0)) : c === "INT64" && A?.type === "TIMESTAMP" && A?.unit === "NANOS" ? o.timestampFromNanoseconds(d.getBigInt64(0, !0)) : c === "INT64" && A?.type === "TIMESTAMP" && A?.unit === "MICROS" ? o.timestampFromMicroseconds(d.getBigInt64(0, !0)) : c === "INT64" && A?.type === "TIMESTAMP" ? o.timestampFromMilliseconds(d.getBigInt64(0, !0)) : c === "INT32" && d.byteLength === 4 ? d.getInt32(0, !0) : c === "INT64" && d.byteLength === 8 ? d.getBigInt64(0, !0) : r === "DECIMAL" ? IA(a) * 10 ** -(f.scale || 0) : A?.type === "FLOAT16" ? jA(a) : a;
}
function dy(a) {
  const f = yi(a);
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
const ie = 0xffffffffffffffffn, gl = 0x9e3779b185ebca87n, ui = 0xc2b2ae3d27d4eb4fn, AA = 0x165667b19e3779f9n, WA = 0x85ebca77c2b2ae63n, dA = 0x27d4eb2f165667c5n;
function Xn(a, f) {
  return (a << f | a >> 64n - f) & ie;
}
function ca(a, f) {
  return a = a + f * ui & ie, a = Xn(a, 31n), a * gl & ie;
}
function Lu(a, f) {
  return a ^= ca(0n, f), a * gl + WA & ie;
}
function Vn(a, f = 0n) {
  const o = new DataView(a.buffer, a.byteOffset, a.byteLength), c = a.byteLength;
  let r = 0, A;
  if (c >= 32) {
    let d = f + gl + ui & ie, y = f + ui & ie, v = f, g = f - gl & ie;
    for (; r + 32 <= c; )
      d = ca(d, o.getBigUint64(r, !0)), r += 8, y = ca(y, o.getBigUint64(r, !0)), r += 8, v = ca(v, o.getBigUint64(r, !0)), r += 8, g = ca(g, o.getBigUint64(r, !0)), r += 8;
    A = Xn(d, 1n) + Xn(y, 7n) + Xn(v, 12n) + Xn(g, 18n) & ie, A = Lu(A, d), A = Lu(A, y), A = Lu(A, v), A = Lu(A, g);
  } else
    A = f + dA & ie;
  for (A = A + BigInt(c) & ie; r + 8 <= c; )
    A ^= ca(0n, o.getBigUint64(r, !0)), A = Xn(A, 27n) * gl + WA & ie, r += 8;
  for (r + 4 <= c && (A ^= BigInt(o.getUint32(r, !0)) * gl & ie, A = Xn(A, 23n) * ui + AA & ie, r += 4); r < c; )
    A ^= BigInt(o.getUint8(r)) * dA & ie, A = Xn(A, 11n) * gl & ie, r += 1;
  return A ^= A >> 33n, A = A * ui & ie, A ^= A >> 29n, A = A * AA & ie, A ^= A >> 32n, A;
}
const hy = new TextEncoder(), yy = new Uint32Array([
  1203114875,
  1150766481,
  2284105051,
  2729912477,
  1884591559,
  770785867,
  2667333959,
  1550580529
]);
function gy(a, f) {
  return Number((a >> 32n) * BigInt(f) >> 32n);
}
function my(a) {
  const f = new Uint32Array(8), o = Number(a & 0xffffffffn) | 0;
  for (let c = 0; c < 8; c++)
    f[c] = 1 << (Math.imul(o, yy[c]) >>> 27);
  return f;
}
function hA(a, f) {
  const o = gy(f, a.length >> 3) << 3, c = my(f);
  for (let r = 0; r < 8; r++)
    if ((a[o + r] & c[r]) === 0) return !1;
  return !0;
}
function vy(a) {
  const f = yi(a), o = f.field_1;
  if (typeof o != "number" || o <= 0 || o % 32 !== 0 || !f.field_2?.field_1 || !f.field_3?.field_1 || !f.field_4?.field_1) return;
  const { view: c, offset: r } = a;
  if (r + o > c.byteLength)
    throw new Error(`parquet bloom filter truncated: need ${o} bytes, have ${c.byteLength - r}`);
  const A = new Uint32Array(o >> 2);
  for (let d = 0; d < A.length; d++)
    A[d] = c.getUint32(r + d * 4, !0);
  return a.offset = r + o, { numBytes: o, blocks: A };
}
function yA(a, f) {
  if (a == null) return;
  const { type: o, converted_type: c, logical_type: r } = f;
  if (o === "BOOLEAN")
    return typeof a != "boolean" ? void 0 : Vn(new Uint8Array([a ? 1 : 0]));
  if (o === "FLOAT") {
    if (typeof a != "number") return;
    const A = new ArrayBuffer(4);
    return new DataView(A).setFloat32(0, a, !0), Vn(new Uint8Array(A));
  }
  if (o === "DOUBLE") {
    if (typeof a != "number") return;
    const A = new ArrayBuffer(8);
    return new DataView(A).setFloat64(0, a, !0), Vn(new Uint8Array(A));
  }
  if (o === "INT32") {
    if (c === "DATE" || c === "DECIMAL" || c === "TIME_MILLIS" || r?.type === "DATE" || r?.type === "TIME" || r?.type === "DECIMAL" || typeof a != "number" || !Number.isInteger(a)) return;
    const A = new ArrayBuffer(4);
    return new DataView(A).setInt32(0, a | 0, !0), Vn(new Uint8Array(A));
  }
  if (o === "INT64") {
    if (c === "TIMESTAMP_MILLIS" || c === "TIMESTAMP_MICROS" || c === "TIME_MICROS" || c === "DECIMAL" || r?.type === "TIMESTAMP" || r?.type === "TIME" || r?.type === "DECIMAL") return;
    let A;
    if (typeof a == "bigint") A = a;
    else if (typeof a == "number" && Number.isSafeInteger(a)) A = BigInt(a);
    else return;
    const d = new ArrayBuffer(8);
    return new DataView(d).setBigUint64(0, BigInt.asUintN(64, A), !0), Vn(new Uint8Array(d));
  }
  if (o === "BYTE_ARRAY")
    return c === "JSON" || c === "BSON" || c === "DECIMAL" || r?.type === "JSON" || r?.type === "BSON" || r?.type === "VARIANT" || r?.type === "GEOMETRY" || r?.type === "GEOGRAPHY" ? void 0 : typeof a == "string" ? Vn(hy.encode(a)) : a instanceof Uint8Array ? Vn(a) : void 0;
  if (o === "FIXED_LEN_BYTE_ARRAY")
    return c === "DECIMAL" || c === "INTERVAL" || r?.type === "DECIMAL" || r?.type === "UUID" || r?.type === "FLOAT16" || r?.type === "GEOMETRY" || r?.type === "GEOGRAPHY" ? void 0 : a instanceof Uint8Array ? Vn(a) : void 0;
}
function py(a) {
  const f = /* @__PURE__ */ new Set();
  return No(a, f), f;
}
function No(a, f) {
  if (a) {
    if ("$and" in a && Array.isArray(a.$and)) {
      for (const o of a.$and) No(o, f);
      return;
    }
    if ("$or" in a && Array.isArray(a.$or)) {
      for (const o of a.$or) No(o, f);
      return;
    }
    if (!("$nor" in a))
      for (const [o, c] of Object.entries(a))
        o.startsWith("$") || (typeof c == "object" && c !== null && !Array.isArray(c) ? ("$eq" in c || "$in" in c) && f.add(o) : f.add(o));
  }
}
function kA(a, f) {
  for (let c = 0; c < f.length; c += 1e4)
    a.push(...f.slice(c, c + 1e4));
}
function Jn(a, f, o = !0) {
  if (o ? a === f : a == f) return !0;
  if (!a || !f || typeof a != "object" || typeof f != "object") return !1;
  if (a instanceof Uint8Array && f instanceof Uint8Array) {
    if (a.length !== f.length) return !1;
    for (let r = 0; r < a.length; r++)
      if (a[r] !== f[r]) return !1;
    return !0;
  }
  if (Array.isArray(a) && Array.isArray(f)) {
    if (a.length !== f.length) return !1;
    for (let r = 0; r < a.length; r++)
      if (!Jn(a[r], f[r], o)) return !1;
    return !0;
  }
  const c = Object.keys(a);
  if (c.length !== Object.keys(f).length) return !1;
  for (const r of c)
    if (!Jn(a[r], f[r], o)) return !1;
  return !0;
}
async function gA(a, f = {}, o = globalThis.fetch) {
  const c = new AbortController(), r = new Headers(f.headers);
  r.set("Range", "bytes=0-0");
  const A = await o(a, {
    ...f,
    headers: r,
    signal: c.signal
  });
  if (!A.ok) throw new Error(`fetch with range failed ${A.status}`);
  if (A.status === 206) {
    const d = A.headers.get("Content-Range");
    if (!d) throw new Error("missing content-range header");
    const y = d.match(/bytes \d+-\d+\/(\d+)/);
    if (!y) throw new Error(`invalid content-range header: ${d}`);
    return parseInt(y[1]);
  }
  if (A.status === 200) {
    const d = A.headers.get("Content-Length");
    if (c.abort(), d) return parseInt(d);
  }
  throw new Error("server does not support range requests and missing content-length");
}
async function Ey(a, f, o) {
  const c = o ?? globalThis.fetch, r = await c(a, { ...f, method: "HEAD" });
  if (r.status === 403)
    return gA(a, f, c);
  if (!r.ok) throw new Error(`fetch head failed ${r.status}`);
  const A = r.headers.get("Content-Length");
  return A ? parseInt(A) : gA(a, f, c);
}
async function by({ url: a, byteLength: f, requestInit: o, fetch: c }) {
  if (!a) throw new Error("missing url");
  const r = c ?? globalThis.fetch;
  f ?? (f = await Ey(a, o, r));
  let A;
  const d = o || {};
  return {
    byteLength: f,
    async slice(y, v) {
      if (A)
        return A.then((b) => b.slice(y, v));
      const g = new Headers(d.headers), p = v === void 0 ? "" : v - 1;
      g.set("Range", `bytes=${y}-${p}`);
      const m = await r(a, { ...d, headers: g });
      if (!m.ok || !m.body) throw new Error(`fetch failed ${m.status}`);
      if (m.status === 200)
        return A = m.arrayBuffer(), A.then((b) => b.slice(y, v));
      if (m.status === 206)
        return m.arrayBuffer();
      throw new Error(`fetch received unexpected status code ${m.status}`);
    }
  };
}
function Sy({ byteLength: a, slice: f }, { minSize: o = FA } = {}) {
  if (a < o) {
    const r = f(0, a);
    return {
      byteLength: a,
      async slice(A, d) {
        return (await r).slice(A, d);
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
    slice(r, A) {
      const d = wy(r, A, a), y = c.get(d);
      if (y) return y;
      const v = f(r, A);
      return c.set(d, v), v;
    }
  };
}
function wy(a, f, o) {
  if (a < 0) {
    if (f !== void 0) throw new Error(`invalid suffix range [${a}, ${f}]`);
    return o === void 0 ? `${a},` : `${o + a},${o}`;
  } else if (f !== void 0) {
    if (a > f) throw new Error(`invalid empty range [${a}, ${f}]`);
    return `${a},${f}`;
  } else return o === void 0 ? `${a},` : `${a},${o}`;
}
function PA(a) {
  if (!a) return [];
  if (a.length === 1) return a[0];
  const f = [];
  for (const o of a)
    kA(f, o);
  return f;
}
function ju(a) {
  if (!a) return [];
  const f = [];
  return "$and" in a && Array.isArray(a.$and) ? f.push(...a.$and.flatMap(ju)) : "$or" in a && Array.isArray(a.$or) ? f.push(...a.$or.flatMap(ju)) : "$nor" in a && Array.isArray(a.$nor) ? f.push(...a.$nor.flatMap(ju)) : f.push(...Object.keys(a).map((o) => o.split(".")[0])), [...new Set(f)];
}
function fi(a, f, o = !0) {
  return "$and" in f && Array.isArray(f.$and) ? f.$and.every((c) => fi(a, c, o)) : "$or" in f && Array.isArray(f.$or) ? f.$or.some((c) => fi(a, c, o)) : "$nor" in f && Array.isArray(f.$nor) ? !f.$nor.some((c) => fi(a, c, o)) : Object.entries(f).every(([c, r]) => {
    const A = By(a, c);
    return typeof r != "object" || r === null || Array.isArray(r) ? Jn(A, r, o) : Object.entries(r || {}).every(([d, y]) => d === "$gt" ? A > y : d === "$gte" ? A >= y : d === "$lt" ? A < y : d === "$lte" ? A <= y : d === "$eq" ? Jn(A, y, o) : d === "$ne" ? !Jn(A, y, o) : d === "$in" ? Array.isArray(y) && y.includes(A) : d === "$nin" ? Array.isArray(y) && !y.includes(A) : d === "$not" ? !fi({ [c]: A }, { [c]: y }, o) : !0);
  });
}
function Ju({ rowGroup: a, physicalColumns: f, filter: o, strict: c = !0, bloomFilters: r, schemaElements: A }) {
  if (!o) return !1;
  if ("$and" in o && Array.isArray(o.$and))
    return o.$and.some((d) => Ju({ rowGroup: a, physicalColumns: f, filter: d, strict: c, bloomFilters: r, schemaElements: A }));
  if ("$or" in o && Array.isArray(o.$or))
    return o.$or.every((d) => Ju({ rowGroup: a, physicalColumns: f, filter: d, strict: c, bloomFilters: r, schemaElements: A }));
  if ("$nor" in o && Array.isArray(o.$nor))
    return !1;
  for (const [d, y] of Object.entries(o)) {
    const v = f.indexOf(d);
    if (v === -1) continue;
    const g = a.columns[v].meta_data?.statistics, { min: p, max: m, min_value: b, max_value: N } = g || {}, O = b !== void 0 ? b : p, R = N !== void 0 ? N : m, B = O !== void 0 && R !== void 0, M = r?.[d], Z = A?.[d];
    for (const [G, K] of Object.entries(y || {})) {
      if (B && (G === "$gt" && R <= K || G === "$gte" && R < K || G === "$lt" && O >= K || G === "$lte" && O > K || G === "$eq" && (K < O || K > R) || G === "$ne" && Jn(O, R, c) && Jn(O, K, c) || G === "$in" && Array.isArray(K) && K.every((_) => _ < O || _ > R) || G === "$nin" && Array.isArray(K) && Jn(O, R, c) && K.includes(O)))
        return !0;
      if (M && Z) {
        if (G === "$eq") {
          const _ = yA(K, Z);
          if (_ !== void 0 && !hA(M.blocks, _)) return !0;
        }
        if (G === "$in" && Array.isArray(K) && K.length > 0) {
          let _ = !0;
          for (const j of K) {
            const I = yA(j, Z);
            if (I === void 0 || hA(M.blocks, I)) {
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
function By(a, f) {
  let o = a;
  for (const c of f.split("."))
    o = o?.[c];
  return o;
}
const Ty = 1 << 21;
function Cy({ metadata: a, rowStart: f = 0, rowEnd: o = 1 / 0, columns: c, filter: r, filterStrict: A = !0, useOffsetIndex: d = !1, bloomFiltersByGroup: y, schemaElements: v }) {
  if (!a) throw new Error("parquetPlan requires metadata");
  const g = [], p = [], m = [], b = XA(Ai(a));
  let N = 0, O = 0;
  for (const R of a.row_groups) {
    const B = Number(R.num_rows), M = N + B, Z = y?.[O];
    if (B > 0 && M > f && N < o && !Ju({ rowGroup: R, physicalColumns: b, filter: r, strict: A, bloomFilters: Z, schemaElements: v })) {
      const G = [];
      for (const I of R.columns) {
        const $ = I.meta_data;
        if (I.file_path) throw new Error("parquet file_path not supported");
        if (!$) throw new Error("parquet column metadata is undefined");
        if (!c || c.includes($.path_in_schema[0])) {
          const At = $.dictionary_page_offset || $.data_page_offset, Et = Number(At), bt = Number(At + $.total_compressed_size);
          if (d && I.offset_index_offset && I.offset_index_length && (f > N || o < M)) {
            const ft = Number(I.offset_index_offset);
            G.push({
              columnMetadata: $,
              offsetIndex: {
                startByte: ft,
                endByte: ft + I.offset_index_length
              },
              range: { startByte: Et, endByte: bt }
            });
          } else
            G.push({
              columnMetadata: $,
              range: { startByte: Et, endByte: bt }
            });
        }
      }
      const K = Math.max(f - N, 0), _ = Math.min(o - N, B);
      g.push({ chunks: G, rowGroup: R, groupStart: N, groupRows: B, selectStart: K, selectEnd: _ });
      let j;
      for (const I of G)
        if ("offsetIndex" in I)
          m.push(I.offsetIndex);
        else {
          const { range: $ } = I;
          c ? p.push($) : j && $.endByte - j.startByte <= Ty ? j.endByte = $.endByte : (j && p.push(j), j = { ...$ });
        }
      j && p.push(j);
    }
    N = M, O++;
  }
  return isFinite(o) || (o = N), p.push(...m), { metadata: a, rowStart: f, rowEnd: o, columns: c, fetches: p, groups: g };
}
async function Uy({ file: a, metadata: f, filter: o, filterStrict: c = !0 }) {
  const r = f.row_groups.map(() => (
    /** @type {Record<string, BloomFilter>} */
    {}
  )), A = py(o);
  if (A.size === 0) return r;
  const d = XA(Ai(f)), y = [];
  return f.row_groups.forEach((v, g) => {
    if (!Ju({ rowGroup: v, physicalColumns: d, filter: o, strict: c }))
      for (const p of A) {
        const m = d.indexOf(p);
        if (m === -1) continue;
        const b = v.columns[m]?.meta_data;
        if (!b?.bloom_filter_offset || !b.bloom_filter_length) continue;
        const N = Number(b.bloom_filter_offset), O = N + b.bloom_filter_length;
        y.push((async () => {
          const R = await a.slice(N, O), B = vy({ view: new DataView(R), offset: 0 });
          B && (r[g][p] = B);
        })());
      }
  }), y.length && await Promise.all(y), r;
}
function zy(a, { fetches: f }) {
  const o = f.map(({ startByte: c, endByte: r }) => a.slice(c, r));
  return {
    byteLength: a.byteLength,
    slice(c, r = a.byteLength) {
      const A = f.findIndex(({ startByte: d, endByte: y }) => d <= c && r <= y);
      if (A < 0)
        return a.slice(c, r);
      if (f[A].startByte !== c || f[A].endByte !== r) {
        const d = c - f[A].startByte, y = r - f[A].startByte;
        return o[A] instanceof Promise ? o[A].then((v) => v.slice(d, y)) : o[A].slice(d, y);
      } else
        return o[A];
    }
  };
}
const Xo = new TextDecoder(), mA = /* @__PURE__ */ new WeakMap();
function $A(a, f = Pu) {
  if (Array.isArray(a))
    return a.map((o) => $A(o, f));
  if (typeof a != "object") return a;
  if ("metadata" in a) {
    const o = My(a.metadata), c = a.typed_value && Zu(a.typed_value, o, f), r = a.value && di(_u(a.value), o, f);
    return c && r ? { ...r, ...c } : c ?? r;
  }
  return a;
}
function Zu(a, f, o) {
  if (a instanceof Date) return a;
  if (a && typeof a == "object" && !Array.isArray(a) && !(a instanceof Uint8Array)) {
    if ("typed_value" in a && a.typed_value !== null && a.typed_value !== void 0)
      return Zu(a.typed_value, f, o);
    if ("value" in a && a.value instanceof Uint8Array)
      return di(_u(a.value), f, o);
    if ("typed_value" in a || "value" in a)
      return null;
    const c = {};
    for (const [r, A] of Object.entries(a))
      f.dictionary.includes(r) && (c[r] = Zu(A, f, o));
    return c;
  }
  return a instanceof Uint8Array ? di(_u(a), f, o) : Array.isArray(a) ? a.map((c) => Zu(c, f, o)) : a;
}
function _u(a) {
  return { view: new DataView(a.buffer, a.byteOffset, a.byteLength), offset: 0 };
}
function My(a) {
  let f = mA.get(a.buffer);
  f || (f = /* @__PURE__ */ new Map(), mA.set(a.buffer, f));
  const o = `${a.byteOffset}:${a.byteLength}`, c = f.get(o);
  if (c) return c;
  const r = _u(a), A = r.view.getUint8(r.offset++), d = A & 15;
  if (d !== 1) throw new Error(`parquet unsupported variant metadata version: ${d}`);
  const y = (A >> 4 & 1) === 1, v = (A >> 6 & 3) + 1, g = pl(r, v), p = new Array(g + 1);
  for (let O = 0; O < p.length; O++)
    p[O] = pl(r, v);
  const m = r.offset, b = new Array(g);
  for (let O = 0; O < g; O++) {
    const R = p[O], B = p[O + 1], M = new Uint8Array(a.buffer, a.byteOffset + m + R, B - R);
    b[O] = Xo.decode(M);
  }
  const N = { dictionary: b, sorted: y };
  return f.set(o, N), N;
}
function pl(a, f) {
  let o = 0;
  for (let c = 0; c < f; c++)
    o |= a.view.getUint8(a.offset + c) << c * 8;
  return a.offset += f, o;
}
function di(a, f, o) {
  const c = a.view.getUint8(a.offset++), r = c & 3, A = c >> 2;
  if (r === 0) return Dy(a, A, o);
  if (r === 2) return Oy(a, A, f, o);
  if (r === 3) return Ny(a, A, f, o);
  const d = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, A);
  return a.offset += A, Xo.decode(d);
}
function Dy(a, f, o) {
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
      return So(a, 4);
    case 9:
      return So(a, 8);
    case 10:
      return So(a, 16);
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
      return vA(a);
    case 16: {
      const c = vA(a);
      return Xo.decode(c);
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
      const r = Array.from(c, (A) => A.toString(16).padStart(2, "0")).join("");
      return `${r.slice(0, 8)}-${r.slice(8, 12)}-${r.slice(12, 16)}-${r.slice(16, 20)}-${r.slice(20)}`;
    }
    default:
      throw new Error(`parquet unsupported variant primitive type: ${f}`);
  }
}
function Oy(a, f, o, c) {
  const r = (f & 3) + 1, A = (f >> 2 & 3) + 1, y = f >> 4 & 1 ? pl(a, 4) : a.view.getUint8(a.offset++), v = new Array(y);
  for (let m = 0; m < y; m++)
    v[m] = pl(a, A);
  const g = new Array(y + 1);
  for (let m = 0; m < g.length; m++)
    g[m] = pl(a, r);
  const p = {};
  for (let m = 0; m < y; m++) {
    const b = o.dictionary[v[m]], N = {
      view: a.view,
      offset: a.offset + g[m]
    };
    p[b] = di(N, o, c);
  }
  return a.offset += g[g.length - 1], p;
}
function Ny(a, f, o, c) {
  const r = f & 3, A = f >> 2 & 1, d = r + 1, y = pl(a, A ? 4 : 1), v = new Array(y + 1);
  for (let m = 0; m < v.length; m++)
    v[m] = pl(a, d);
  const g = a.offset, p = new Array(y);
  for (let m = 0; m < y; m++) {
    const b = {
      view: a.view,
      offset: g + v[m]
    };
    p[m] = di(b, o, c);
  }
  return a.offset = g + v[v.length - 1], p;
}
function So(a, f) {
  const o = a.view.getUint8(a.offset);
  a.offset += 1;
  let c;
  if (f === 4)
    c = BigInt(a.view.getInt32(a.offset, !0)), a.offset += 4;
  else if (f === 8)
    c = a.view.getBigInt64(a.offset, !0), a.offset += 8;
  else {
    const r = a.view.getBigUint64(a.offset, !0);
    c = a.view.getBigInt64(a.offset + 8, !0) << 64n | r, a.offset += 16;
  }
  return Number(c) * 10 ** -o;
}
function vA(a) {
  const f = a.view.getUint32(a.offset, !0);
  a.offset += 4;
  const o = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f, o;
}
function pA(a, f, o, c, r) {
  const A = Vo(r);
  if (!f?.length && !o.length) {
    if (!A || !c.length) return c;
    f = new Array(c.length).fill(A);
  }
  const d = f?.length || o.length, y = r.map(({ element: O }) => O.repetition_type);
  let v = 0;
  const g = [a];
  let p = a, m = 0, b = 0, N = 0;
  if (o[0])
    for (; m < y.length - 2 && N < o[0]; )
      m++, y[m] !== "REQUIRED" && (p = p.at(-1), g.push(p), b++), y[m] === "REPEATED" && N++;
  for (let O = 0; O < d; O++) {
    const R = f?.length ? f[O] : A, B = o[O];
    for (; m && (B < N || y[m] !== "REPEATED"); )
      y[m] !== "REQUIRED" && (g.pop(), b--), y[m] === "REPEATED" && N--, m--;
    for (p = g.at(-1); (m < y.length - 2 || y[m + 1] === "REPEATED") && (b < R || y[m + 1] === "REQUIRED"); ) {
      if (m++, y[m] !== "REQUIRED") {
        const M = [];
        p.push(M), p = M, g.push(M), b++;
      }
      y[m] === "REPEATED" && N++;
    }
    R === A ? p.push(c[v++]) : m === y.length - 2 ? p.push(null) : p.push([]);
  }
  if (!a.length)
    for (let O = 0; O < A; O++) {
      const R = [];
      p.push(R), p = R;
    }
  return a;
}
function ci(a, f, o, c = 0) {
  const r = f.path.join("."), A = f.element.repetition_type === "OPTIONAL", d = A ? c + 1 : c;
  if (kh(f)) {
    let y = f.children[0], v = d;
    y.children.length === 1 && (y = y.children[0], v++), ci(a, y, o, v);
    const g = y.path.join("."), p = a.get(g);
    if (!p) throw new Error("parquet list column missing values");
    A && Vu(p, c), a.set(r, p), a.delete(g);
    return;
  }
  if (Ph(f)) {
    const y = f.children[0].element.name;
    ci(a, f.children[0].children[0], o, d + 1), ci(a, f.children[0].children[1], o, d + 1);
    const v = a.get(`${r}.${y}.key`), g = a.get(`${r}.${y}.value`);
    if (!v) throw new Error("parquet map column missing keys");
    if (!g) throw new Error("parquet map column missing values");
    if (v.length !== g.length)
      throw new Error("parquet map column key/value length mismatch");
    const p = t2(v, g, d);
    A && Vu(p, c), a.delete(`${r}.${y}.key`), a.delete(`${r}.${y}.value`), a.set(r, p);
    return;
  }
  if (f.children.length) {
    const y = f.element.repetition_type === "REQUIRED" ? c : c + 1, v = {};
    for (const p of f.children) {
      ci(a, p, o, y);
      const m = a.get(p.path.join("."));
      if (!m) throw new Error("parquet struct missing child data");
      v[p.element.name] = m;
    }
    for (const p of f.children)
      a.delete(p.path.join("."));
    let g = e2(v, y);
    f.element.logical_type?.type === "VARIANT" && (g = $A(g, o)), A && Vu(g, c), a.set(r, g);
  }
}
function Vu(a, f) {
  for (let o = 0; o < a.length; o++)
    f ? Vu(a[o], f - 1) : a[o] = a[o][0];
}
function t2(a, f, o) {
  const c = [];
  for (let r = 0; r < a.length; r++)
    if (o)
      c.push(t2(a[r], f[r], o - 1));
    else if (a[r]) {
      const A = {};
      for (let d = 0; d < a[r].length; d++) {
        const y = f[r][d];
        A[a[r][d]] = y === void 0 ? null : y;
      }
      c.push(A);
    } else
      c.push(void 0);
  return c;
}
function e2(a, f) {
  const o = Object.keys(a), c = a[o[0]]?.length, r = [];
  for (let A = 0; A < c; A++) {
    const d = {};
    for (const y of o) {
      if (a[y].length !== c) throw new Error("parquet struct parsing error");
      d[y] = a[y][A];
    }
    f ? r.push(e2(d, f - 1)) : r.push(d);
  }
  return r;
}
function hi(a, f, o) {
  const c = o instanceof Int32Array, r = vl(a), A = vl(a);
  vl(a);
  let d = Oo(a), y = 0;
  o[y++] = c ? Number(d) : d;
  const v = r / A;
  for (; y < f; ) {
    const g = Oo(a), p = new Uint8Array(A);
    for (let m = 0; m < A; m++)
      p[m] = a.view.getUint8(a.offset++);
    for (let m = 0; m < A && y < f; m++) {
      const b = BigInt(p[m]);
      if (b) {
        let N = 0n, O = v;
        const R = (1n << b) - 1n;
        for (; O && y < f; ) {
          let B = BigInt(a.view.getUint8(a.offset)) >> N & R;
          for (N += b; N >= 8; )
            N -= 8n, a.offset++, N && (B |= BigInt(a.view.getUint8(a.offset)) << b - N & R);
          const M = g + B;
          d += M, o[y++] = c ? Number(d) : d, O--;
        }
        O && (a.offset += Math.ceil((O * Number(b) + Number(N)) / 8));
      } else
        for (let N = 0; N < v && y < f; N++)
          d += g, o[y++] = c ? Number(d) : d;
    }
  }
}
function n2(a, f, o) {
  const c = new Int32Array(f);
  hi(a, f, c);
  for (let r = 0; r < f; r++)
    o[r] = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, c[r]), a.offset += c[r];
}
function xy(a, f, o) {
  const c = new Int32Array(f);
  hi(a, f, c);
  const r = new Int32Array(f);
  hi(a, f, r);
  for (let A = 0; A < f; A++) {
    const d = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, r[A]);
    c[A] ? (o[A] = new Uint8Array(c[A] + r[A]), o[A].set(o[A - 1].subarray(0, c[A])), o[A].set(d, c[A])) : o[A] = d, a.offset += r[A];
  }
}
function _n(a, f, o, c) {
  c === void 0 && (c = a.view.getUint32(a.offset, !0), a.offset += 4);
  const r = a.offset;
  let A = 0;
  for (; A < o.length; ) {
    const d = vl(a);
    if (d & 1)
      A = Qy(a, d, f, o, A);
    else {
      const y = d >>> 1;
      Ry(a, y, f, o, A), A += y;
    }
  }
  a.offset = r + c;
}
function Ry(a, f, o, c, r) {
  const A = o + 7 >> 3;
  let d = 0;
  for (let y = 0; y < A; y++)
    d |= a.view.getUint8(a.offset++) << (y << 3);
  for (let y = 0; y < f; y++)
    c[r + y] = d;
}
function Qy(a, f, o, c, r) {
  let A = f >> 1 << 3;
  const d = (1 << o) - 1;
  let y = 0;
  if (a.offset < a.view.byteLength)
    y = a.view.getUint8(a.offset++);
  else if (d)
    throw new Error(`parquet bitpack offset ${a.offset} out of range`);
  let v = 8, g = 0;
  for (; A; )
    g > 8 ? (g -= 8, v -= 8, y >>>= 8) : v - g < o ? (y |= a.view.getUint8(a.offset) << v, a.offset++, v += 8) : (r < c.length && (c[r++] = y >> g & d), A--, g += o);
  return r;
}
function l2(a, f, o, c) {
  const r = qy(o, c), A = new Uint8Array(f * r);
  for (let d = 0; d < r; d++)
    for (let y = 0; y < f; y++)
      A[y * r + d] = a.view.getUint8(a.offset++);
  if (o === "FLOAT") return new Float32Array(A.buffer);
  if (o === "DOUBLE") return new Float64Array(A.buffer);
  if (o === "INT32") return new Int32Array(A.buffer);
  if (o === "INT64") return new BigInt64Array(A.buffer);
  if (o === "FIXED_LEN_BYTE_ARRAY") {
    const d = new Array(f);
    for (let y = 0; y < f; y++)
      d[y] = A.subarray(y * r, (y + 1) * r);
    return d;
  }
  throw new Error(`parquet byte_stream_split unsupported type: ${o}`);
}
function qy(a, f) {
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
function Ko(a, f, o, c) {
  if (o === 0) return [];
  if (f === "BOOLEAN")
    return Yy(a, o);
  if (f === "INT32")
    return Ly(a, o);
  if (f === "INT64")
    return Hy(a, o);
  if (f === "INT96")
    return Gy(a, o);
  if (f === "FLOAT")
    return Iy(a, o);
  if (f === "DOUBLE")
    return jy(a, o);
  if (f === "BYTE_ARRAY")
    return Zy(a, o);
  if (f === "FIXED_LEN_BYTE_ARRAY") {
    if (!c) throw new Error("parquet missing fixed length");
    return Vy(a, o, c);
  } else
    throw new Error(`parquet unhandled type: ${f}`);
}
function Yy(a, f) {
  const o = new Array(f);
  for (let c = 0; c < f; c++) {
    const r = a.offset + (c / 8 | 0), A = c % 8, d = a.view.getUint8(r);
    o[c] = (d & 1 << A) !== 0;
  }
  return a.offset += Math.ceil(f / 8), o;
}
function Ly(a, f) {
  const o = (a.view.byteOffset + a.offset) % 4 ? new Int32Array($u(a.view.buffer, a.view.byteOffset + a.offset, f * 4)) : new Int32Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f * 4, o;
}
function Hy(a, f) {
  const o = (a.view.byteOffset + a.offset) % 8 ? new BigInt64Array($u(a.view.buffer, a.view.byteOffset + a.offset, f * 8)) : new BigInt64Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f * 8, o;
}
function Gy(a, f) {
  const o = new Array(f);
  for (let c = 0; c < f; c++) {
    const r = a.view.getBigInt64(a.offset + c * 12, !0), A = a.view.getInt32(a.offset + c * 12 + 8, !0);
    o[c] = BigInt(A) << 64n | r;
  }
  return a.offset += f * 12, o;
}
function Iy(a, f) {
  const o = (a.view.byteOffset + a.offset) % 4 ? new Float32Array($u(a.view.buffer, a.view.byteOffset + a.offset, f * 4)) : new Float32Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f * 4, o;
}
function jy(a, f) {
  const o = (a.view.byteOffset + a.offset) % 8 ? new Float64Array($u(a.view.buffer, a.view.byteOffset + a.offset, f * 8)) : new Float64Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f * 8, o;
}
function Zy(a, f) {
  const o = new Array(f);
  for (let c = 0; c < f; c++) {
    const r = a.view.getUint32(a.offset, !0);
    a.offset += 4, o[c] = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, r), a.offset += r;
  }
  return o;
}
function Vy(a, f, o) {
  const c = new Array(f);
  for (let r = 0; r < f; r++)
    c[r] = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, o), a.offset += o;
  return c;
}
function $u(a, f, o) {
  const c = new ArrayBuffer(o);
  return new Uint8Array(c).set(new Uint8Array(a, f, o)), c;
}
const Xy = [0, 255, 65535, 16777215, 4294967295];
function EA(a, f, o, c, r) {
  for (let A = 0; A < r; A++)
    o[c + A] = a[f + A];
}
function Ky(a, f) {
  const o = a.byteLength, c = f.byteLength;
  let r = 0, A = 0;
  for (; r < o; ) {
    const d = a[r];
    if (r++, d < 128)
      break;
  }
  if (c && r >= o)
    throw new Error("invalid snappy length header");
  for (; r < o; ) {
    const d = a[r];
    let y = 0;
    if (r++, r >= o)
      throw new Error("missing eof marker");
    if ((d & 3) === 0) {
      let v = (d >>> 2) + 1;
      if (v > 60) {
        if (r + 3 >= o)
          throw new Error("snappy error literal pos + 3 >= inputLength");
        const g = v - 60;
        v = a[r] + (a[r + 1] << 8) + (a[r + 2] << 16) + (a[r + 3] << 24), v = (v & Xy[g]) + 1, r += g;
      }
      if (r + v > o)
        throw new Error("snappy error literal exceeds input length");
      EA(a, r, f, A, v), r += v, A += v;
    } else {
      let v = 0;
      switch (d & 3) {
        case 1:
          y = (d >>> 2 & 7) + 4, v = a[r] + (d >>> 5 << 8), r++;
          break;
        case 2:
          if (o <= r + 1)
            throw new Error("snappy error end of input");
          y = (d >>> 2) + 1, v = a[r] + (a[r + 1] << 8), r += 2;
          break;
        case 3:
          if (o <= r + 3)
            throw new Error("snappy error end of input");
          y = (d >>> 2) + 1, v = a[r] + (a[r + 1] << 8) + (a[r + 2] << 16) + (a[r + 3] << 24), r += 4;
          break;
      }
      if (v === 0 || isNaN(v))
        throw new Error(`invalid offset ${v} pos ${r} inputLength ${o}`);
      if (v > A)
        throw new Error("cannot copy from before start of buffer");
      EA(f, A - v, f, A, y), A += y;
    }
  }
  if (A !== c) throw new Error("premature end of input");
}
function Jy(a, f, { type: o, element: c, schemaPath: r }) {
  const A = new DataView(a.buffer, a.byteOffset, a.byteLength), d = { view: A, offset: 0 };
  let y;
  const v = _y(d, f, r), { definitionLevels: g, numNulls: p } = Fy(d, f, r), m = f.num_values - p;
  if (f.encoding === "PLAIN")
    y = Ko(d, o, m, c.type_length);
  else if (f.encoding === "PLAIN_DICTIONARY" || f.encoding === "RLE_DICTIONARY" || f.encoding === "RLE") {
    const b = o === "BOOLEAN" ? 1 : A.getUint8(d.offset++);
    b ? (y = new Array(m), o === "BOOLEAN" ? (_n(d, b, y), y = y.map((N) => !!N)) : _n(d, b, y, A.byteLength - d.offset)) : y = new Uint8Array(m);
  } else if (f.encoding === "BYTE_STREAM_SPLIT")
    y = l2(d, m, o, c.type_length);
  else if (f.encoding === "DELTA_BINARY_PACKED")
    y = o === "INT32" ? new Int32Array(m) : new BigInt64Array(m), hi(d, m, y);
  else if (f.encoding === "DELTA_LENGTH_BYTE_ARRAY")
    y = new Array(m), n2(d, m, y);
  else
    throw new Error(`parquet unsupported encoding: ${f.encoding}`);
  return { definitionLevels: g, repetitionLevels: v, dataPage: y };
}
function _y(a, f, o) {
  if (o.length > 1) {
    const c = KA(o);
    if (c) {
      const r = new Array(f.num_values);
      return _n(a, tf(c), r), r;
    }
  }
  return [];
}
function Fy(a, f, o) {
  const c = Vo(o);
  if (!c) return { definitionLevels: [], numNulls: 0 };
  const r = new Array(f.num_values);
  _n(a, tf(c), r);
  let A = f.num_values;
  for (const d of r)
    d === c && A--;
  return A === 0 && (r.length = 0), { definitionLevels: r, numNulls: A };
}
function xo(a, f, o, c) {
  let r;
  const A = c?.[o];
  if (o === "UNCOMPRESSED")
    r = a;
  else if (A)
    r = A(a, f);
  else if (o === "SNAPPY")
    r = new Uint8Array(f), Ky(a, r);
  else
    throw new Error(`parquet unsupported compression codec: ${o}`);
  if (r?.length !== f)
    throw new Error(`parquet decompressed page length ${r?.length} does not match header ${f}`);
  return r;
}
function Wy(a, f, o) {
  const r = { view: new DataView(a.buffer, a.byteOffset, a.byteLength), offset: 0 }, { type: A, element: d, schemaPath: y, codec: v, compressors: g } = o, p = f.data_page_header_v2;
  if (!p) throw new Error("parquet data page header v2 is undefined");
  const m = ky(r, p, y);
  r.offset = p.repetition_levels_byte_length;
  const b = Py(r, p, y), N = f.uncompressed_page_size - p.definition_levels_byte_length - p.repetition_levels_byte_length;
  let O = a.subarray(r.offset);
  p.is_compressed !== !1 && (O = xo(O, N, v, g));
  const R = new DataView(O.buffer, O.byteOffset, O.byteLength), B = { view: R, offset: 0 };
  let M;
  const Z = p.num_values - p.num_nulls;
  if (p.encoding === "PLAIN")
    M = Ko(B, A, Z, d.type_length);
  else if (p.encoding === "RLE")
    M = new Array(Z), _n(B, 1, M), M = M.map((G) => !!G);
  else if (p.encoding === "PLAIN_DICTIONARY" || p.encoding === "RLE_DICTIONARY") {
    const G = R.getUint8(B.offset++);
    M = new Array(Z), _n(B, G, M, N - 1);
  } else if (p.encoding === "DELTA_BINARY_PACKED")
    M = A === "INT32" ? new Int32Array(Z) : new BigInt64Array(Z), hi(B, Z, M);
  else if (p.encoding === "DELTA_LENGTH_BYTE_ARRAY")
    M = new Array(Z), n2(B, Z, M);
  else if (p.encoding === "DELTA_BYTE_ARRAY")
    M = new Array(Z), xy(B, Z, M);
  else if (p.encoding === "BYTE_STREAM_SPLIT")
    M = l2(B, Z, A, d.type_length);
  else
    throw new Error(`parquet unsupported encoding: ${p.encoding}`);
  return { definitionLevels: b, repetitionLevels: m, dataPage: M };
}
function ky(a, f, o) {
  const c = KA(o);
  if (!c) return [];
  const r = new Array(f.num_values);
  return _n(a, tf(c), r, f.repetition_levels_byte_length), r;
}
function Py(a, f, o) {
  const c = Vo(o);
  if (c) {
    const r = new Array(f.num_values);
    return _n(a, tf(c), r, f.definition_levels_byte_length), r;
  }
}
function tf(a) {
  return 32 - Math.clz32(a);
}
function bA(a, { groupStart: f, selectStart: o, selectEnd: c }, r, A) {
  const { pathInSchema: d, schemaPath: y } = r, v = JA(y), g = [];
  let p, m, b = 0, N = 0;
  const O = A && (() => {
    m && A({
      pathInSchema: d,
      columnData: m,
      rowStart: f + b - m.length,
      rowEnd: f + b
    });
  });
  for (; (v ? b < c : a.offset < a.view.byteLength - 1) && !(a.offset >= a.view.byteLength - 1); ) {
    const R = $y(a);
    if (R.type === "DICTIONARY_PAGE") {
      const { data: B } = SA(a, R, r, p, void 0, 0);
      B && (p = GA(B, r));
    } else {
      const B = m?.length || 0, M = SA(a, R, r, p, m, o - b);
      M.skipped ? (g.length || (N += M.skipped), b += M.skipped) : M.data && m === M.data ? b += M.data.length - B : M.data && M.data.length && (O?.(), g.push(M.data), b += M.data.length, m = M.data);
    }
  }
  return O?.(), { data: g, skipped: N };
}
function SA(a, f, o, c, r, A) {
  const { type: d, element: y, schemaPath: v, codec: g, compressors: p } = o, m = new Uint8Array(
    a.view.buffer,
    a.view.byteOffset + a.offset,
    f.compressed_page_size
  );
  if (a.offset += f.compressed_page_size, f.type === "DATA_PAGE") {
    const b = f.data_page_header;
    if (!b) throw new Error("parquet data page header is undefined");
    if (A > b.num_values && JA(v))
      return { skipped: b.num_values };
    const N = xo(m, Number(f.uncompressed_page_size), g, p), { definitionLevels: O, repetitionLevels: R, dataPage: B } = Jy(N, b, o), M = uA(B, c, b.encoding, o), Z = Array.isArray(r) ? r : [];
    return { skipped: 0, data: pA(Z, O, R, M, v) };
  } else if (f.type === "DATA_PAGE_V2") {
    const b = f.data_page_header_v2;
    if (!b) throw new Error("parquet data page header v2 is undefined");
    if (A > b.num_rows)
      return { skipped: b.num_values };
    const { definitionLevels: N, repetitionLevels: O, dataPage: R } = Wy(m, f, o), B = uA(R, c, b.encoding, o), M = Array.isArray(r) ? r : [];
    return { skipped: 0, data: pA(M, N, O, B, v) };
  } else if (f.type === "DICTIONARY_PAGE") {
    const b = f.dictionary_page_header;
    if (!b) throw new Error("parquet dictionary page header is undefined");
    const N = xo(
      m,
      Number(f.uncompressed_page_size),
      g,
      p
    ), O = { view: new DataView(N.buffer, N.byteOffset, N.byteLength), offset: 0 };
    return { skipped: 0, data: Ko(O, d, b.num_values, y.type_length) };
  } else
    throw new Error(`parquet unsupported page type: ${f.type}`);
}
function $y(a) {
  const f = yi(a), o = LA[f.field_1], c = f.field_2, r = f.field_3, A = f.field_4, d = f.field_5 && {
    num_values: f.field_5.field_1,
    encoding: yl[f.field_5.field_2],
    definition_level_encoding: yl[f.field_5.field_3],
    repetition_level_encoding: yl[f.field_5.field_4],
    statistics: f.field_5.field_5 && {
      max: f.field_5.field_5.field_1,
      min: f.field_5.field_5.field_2,
      null_count: f.field_5.field_5.field_3,
      distinct_count: f.field_5.field_5.field_4,
      max_value: f.field_5.field_5.field_5,
      min_value: f.field_5.field_5.field_6
    }
  }, y = f.field_6, v = f.field_7 && {
    num_values: f.field_7.field_1,
    encoding: yl[f.field_7.field_2],
    is_sorted: f.field_7.field_3
  }, g = f.field_8 && {
    num_values: f.field_8.field_1,
    num_nulls: f.field_8.field_2,
    num_rows: f.field_8.field_3,
    encoding: yl[f.field_8.field_4],
    definition_levels_byte_length: f.field_8.field_5,
    repetition_levels_byte_length: f.field_8.field_6,
    is_compressed: f.field_8.field_7 === void 0 ? !0 : f.field_8.field_7,
    // default true
    statistics: f.field_8.field_8
  };
  return {
    type: o,
    uncompressed_page_size: c,
    compressed_page_size: r,
    crc: A,
    data_page_header: d,
    index_page_header: y,
    dictionary_page_header: v,
    data_page_header_v2: g
  };
}
function tg(a, { metadata: f }, o) {
  const c = [];
  for (const r of o.chunks) {
    const { data_page_offset: A, dictionary_page_offset: d, path_in_schema: y } = r.columnMetadata, v = VA(f.schema, y), g = {
      pathInSchema: y,
      element: v[v.length - 1].element,
      schemaPath: v,
      parsers: { ...Pu, ...a.parsers },
      ...a,
      ...r.columnMetadata
    };
    let { startByte: p, endByte: m } = r.range;
    if (!("offsetIndex" in r)) {
      c.push({
        pathInSchema: y,
        data: Promise.resolve(a.file.slice(p, m)).then((b) => {
          const N = { view: new DataView(b), offset: 0 };
          return bA(N, o, g, a.onPage);
        })
      });
      continue;
    }
    c.push({
      pathInSchema: y,
      // fetch offset index
      data: Promise.resolve(a.file.slice(r.offsetIndex.startByte, r.offsetIndex.endByte)).then(async (b) => {
        const { selectStart: N, selectEnd: O } = o, R = dy({ view: new DataView(b), offset: 0 }).page_locations;
        let B = -1;
        const M = d || A < R[0].offset;
        for (let I = 0; I < R.length; I++) {
          const $ = R[I], At = Number($.first_row_index), Et = I + 1 < R.length ? Number(R[I + 1].first_row_index) : o.groupRows;
          B < 0 && !M && Et > N && (p = Number($.offset), B = At), At < O && (m = Number($.offset) + $.compressed_page_size);
        }
        B < 0 && (B = 0);
        const Z = await a.file.slice(p, m), G = { view: new DataView(Z), offset: 0 }, K = B ? {
          ...o,
          groupStart: o.groupStart + B,
          selectStart: o.selectStart - B,
          selectEnd: o.selectEnd - B
        } : o, { data: _, skipped: j } = bA(G, K, g, a.onPage);
        return {
          data: _,
          skipped: B + j
        };
      })
    });
  }
  return { groupStart: o.groupStart, groupRows: o.groupRows, asyncColumns: c };
}
async function wA({ asyncColumns: a }, f, o, c, r) {
  const A = await Promise.all(a.map(
    (m) => m.data.then(({ skipped: b, data: N }) => ({ skipped: b, data: PA(N) }))
  )), d = o - f;
  if (r === "object") {
    const m = Array(d);
    for (let b = 0; b < d; b++) {
      const N = {};
      for (let O = 0; O < a.length; O++) {
        const { data: R, skipped: B } = A[O];
        N[a[O].pathInSchema[0]] = R[f + b - B];
      }
      m[b] = N;
    }
    return m;
  }
  const y = a.map((m) => m.pathInSchema[0]).filter((m) => !c || c.includes(m)), v = c ?? y, g = v.map((m) => a.findIndex((b) => b.pathInSchema[0] === m)), p = Array(d);
  for (let m = 0; m < d; m++) {
    const b = Array(a.length);
    for (let N = 0; N < v.length; N++) {
      const O = g[N];
      if (O < 0) throw new Error(`parquet column not found: ${v[N]}`);
      const { data: R, skipped: B } = A[O];
      b[N] = R[f + m - B];
    }
    p[m] = b;
  }
  return p;
}
function eg(a, f, o) {
  const { asyncColumns: c } = a;
  o = { ...Pu, ...o };
  const r = [];
  for (const A of f.children)
    if (A.children.length) {
      const d = c.filter((y) => y.pathInSchema[0] === A.element.name);
      if (!d.length) continue;
      r.push({
        pathInSchema: A.path,
        data: (async () => {
          const y = await Promise.all(d.map((m) => m.data)), v = /* @__PURE__ */ new Map();
          let g = 1 / 0;
          for (let m = 0; m < d.length; m++) {
            const b = PA(y[m].data);
            v.set(d[m].pathInSchema.join("."), b), g = Math.min(g, b.length);
          }
          for (const [m, b] of v)
            b.length > g && v.set(m, b.slice(0, g));
          ci(v, A, o);
          const p = v.get(A.element.name);
          if (!p) throw new Error("parquet column data not assembled");
          return { data: [p], skipped: 0 };
        })()
      });
    } else {
      const d = c.find((y) => y.pathInSchema[0] === A.element.name);
      d && r.push(d);
    }
  return { ...a, asyncColumns: r };
}
async function ng(a) {
  a.metadata ?? (a.metadata = await ry(a.file, a));
  const { rowStart: f = 0, rowEnd: o, columns: c, onChunk: r, onComplete: A, rowFormat: d, filter: y, filterStrict: v = !0 } = a;
  if (y && d !== "object")
    throw new Error('parquet filter requires rowFormat: "object"');
  const g = ju(y);
  if (g.length) {
    const B = Ai(a.metadata).children.map((Z) => Z.element.name), M = g.filter((Z) => !B.includes(Z));
    if (M.length)
      throw new Error(`parquet filter columns not found: ${M.join(", ")}`);
  }
  let p = c, m = !1;
  if (c && y) {
    const B = g.filter((M) => !c.includes(M));
    B.length && (p = [...c, ...B], m = !0);
  }
  let b = p !== c ? { ...a, columns: p } : a;
  b = await ag(b);
  const N = lg(b);
  if (!A && !r) {
    await wo(N);
    return;
  }
  const O = Ai(a.metadata), R = N.map((B) => eg(B, O, a.parsers));
  if (r)
    for (const B of R)
      for (const M of B.asyncColumns)
        M.data.then(({ data: Z, skipped: G }) => {
          let K = B.groupStart + G;
          for (const _ of Z)
            r({
              columnName: M.pathInSchema[0],
              columnData: _,
              rowStart: K,
              rowEnd: K + _.length
            }), K += _.length;
        }, () => {
        });
  if (A) {
    await wo(R);
    const B = [];
    for (const M of R) {
      const Z = Math.max(f - M.groupStart, 0), G = Math.min((o ?? 1 / 0) - M.groupStart, M.groupRows), K = d === "object" ? await wA(M, Z, G, p, "object") : await wA(M, Z, G, c, "array");
      if (y) {
        for (
          const _ of
          /** @type {Record<string, any>[]} */
          K
        )
          if (fi(_, y, v)) {
            if (m && c)
              for (const j of g)
                c.includes(j) || delete _[j];
            B.push(_);
          }
      } else
        kA(B, K);
    }
    A(B);
  } else
    await wo(R);
}
async function wo(a) {
  const f = a.flatMap((r) => r.asyncColumns.map((A) => A.data)), c = (await Promise.allSettled(f)).find((r) => r.status === "rejected");
  if (c) throw c.reason;
}
function lg(a) {
  if (!a.metadata) throw new Error("parquet requires metadata");
  const f = Cy(a);
  return a.file = zy(a.file, f), f.groups.map((o) => tg(a, f, o));
}
async function ag(a) {
  if (!a.useBloomFilters || !a.filter || !a.metadata) return a;
  const f = Ai(a.metadata), o = {};
  for (const r of f.children) o[r.element.name] = r.element;
  const c = await Uy({
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
function ig(a) {
  return new Promise((f, o) => {
    ng({
      ...a,
      rowFormat: "object",
      // force object output
      onComplete: f
    }).catch(o);
  });
}
var ug = ArrayBuffer, Zt = Uint8Array, Fu = Uint16Array, fg = Int16Array, ef = Int32Array, Bo = function(a, f, o) {
  if (Zt.prototype.slice)
    return Zt.prototype.slice.call(a, f, o);
  (f == null || f < 0) && (f = 0), (o == null || o > a.length) && (o = a.length);
  var c = new Zt(o - f);
  return c.set(a.subarray(f, o)), c;
}, ri = function(a, f, o, c) {
  if (Zt.prototype.fill)
    return Zt.prototype.fill.call(a, f, o, c);
  for ((o == null || o < 0) && (o = 0), (c == null || c > a.length) && (c = a.length); o < c; ++o)
    a[o] = f;
  return a;
}, cg = function(a, f, o, c) {
  if (Zt.prototype.copyWithin)
    return Zt.prototype.copyWithin.call(a, f, o, c);
  for ((o == null || o < 0) && (o = 0), (c == null || c > a.length) && (c = a.length); o < c; )
    a[f++] = a[o++];
}, og = [
  "invalid zstd data",
  "window size too large (>2046MB)",
  "invalid block type",
  "FSE accuracy too high",
  "match distance too far back",
  "unexpected EOF"
], Ft = function(a, f, o) {
  var c = new Error(f || og[a]);
  if (c.code = a, Error.captureStackTrace && Error.captureStackTrace(c, Ft), !o)
    throw c;
  return c;
}, BA = function(a, f, o) {
  for (var c = 0, r = 0; c < o; ++c)
    r |= a[f++] << (c << 3);
  return r;
}, rg = function(a, f) {
  return (a[f] | a[f + 1] << 8 | a[f + 2] << 16 | a[f + 3] << 24) >>> 0;
}, sg = function(a, f) {
  var o = a[0] | a[1] << 8 | a[2] << 16;
  if (o == 3126568 && a[3] == 253) {
    var c = a[4], r = c >> 5 & 1, A = c >> 2 & 1, d = c & 3, y = c >> 6;
    c & 8 && Ft(0);
    var v = 6 - r, g = d == 3 ? 4 : d, p = BA(a, v, g);
    v += g;
    var m = y ? 1 << y : r, b = BA(a, v, m) + (y == 1 && 256), N = b;
    if (!r) {
      var O = 1 << 10 + (a[5] >> 3);
      N = O + (O >> 3) * (a[5] & 7);
    }
    N > 2145386496 && Ft(1);
    var R = new Zt((f == 1 ? b || N : f ? 0 : N) + 12);
    return R[0] = 1, R[4] = 4, R[8] = 8, {
      b: v + m,
      y: 0,
      l: 0,
      d: p,
      w: f && f != 1 ? f : R.subarray(12),
      e: N,
      o: new ef(R.buffer, 0, 3),
      u: b,
      c: A,
      m: Math.min(131072, N)
    };
  } else if ((o >> 4 | a[3] << 20) == 25481893)
    return rg(a, 4) + 8;
  Ft(0);
}, El = function(a) {
  for (var f = 0; 1 << f <= a; ++f)
    ;
  return f - 1;
}, gi = function(a, f, o) {
  var c = (f << 3) + 4, r = (a[f] & 15) + 5;
  r > o && Ft(3);
  for (var A = 1 << r, d = A, y = -1, v = -1, g = -1, p = A, m = new ug(512 + (A << 2)), b = new fg(m, 0, 256), N = new Fu(m, 0, 256), O = new Fu(m, 512, A), R = 512 + (A << 1), B = new Zt(m, R, A), M = new Zt(m, R + A); y < 255 && d > 0; ) {
    var Z = El(d + 1), G = c >> 3, K = (1 << Z + 1) - 1, _ = (a[G] | a[G + 1] << 8 | a[G + 2] << 16) >> (c & 7) & K, j = (1 << Z) - 1, I = K - d - 1, $ = _ & j;
    if ($ < I ? (c += Z, _ = $) : (c += Z + 1, _ > j && (_ -= I)), b[++y] = --_, _ == -1 ? (d += _, B[--p] = y) : d -= _, !_)
      do {
        var At = c >> 3;
        v = (a[At] | a[At + 1] << 8) >> (c & 7) & 3, c += 2, y += v;
      } while (v == 3);
  }
  (y > 255 || d) && Ft(0);
  for (var Et = 0, bt = (A >> 1) + (A >> 3) + 3, ft = A - 1, Ot = 0; Ot <= y; ++Ot) {
    var it = b[Ot];
    if (it < 1) {
      N[Ot] = -it;
      continue;
    }
    for (g = 0; g < it; ++g) {
      B[Et] = Ot;
      do
        Et = Et + bt & ft;
      while (Et >= p);
    }
  }
  for (Et && Ft(0), g = 0; g < A; ++g) {
    var nt = N[B[g]]++, D = M[g] = r - El(nt);
    O[g] = (nt << D) - A;
  }
  return [c + 7 >> 3, {
    b: r,
    s: B,
    n: M,
    t: O
  }];
}, Ag = function(a, f) {
  var o = 0, c = -1, r = new Zt(292), A = a[f], d = r.subarray(0, 256), y = r.subarray(256, 268), v = new Fu(r.buffer, 268);
  if (A < 128) {
    var g = gi(a, f + 1, 6), p = g[0], m = g[1];
    f += A;
    var b = p << 3, N = a[f];
    N || Ft(0);
    for (var O = 0, R = 0, B = m.b, M = B, Z = (++f << 3) - 8 + El(N); Z -= B, !(Z < b); ) {
      var G = Z >> 3;
      if (O += (a[G] | a[G + 1] << 8) >> (Z & 7) & (1 << B) - 1, d[++c] = m.s[O], Z -= M, Z < b)
        break;
      G = Z >> 3, R += (a[G] | a[G + 1] << 8) >> (Z & 7) & (1 << M) - 1, d[++c] = m.s[R], B = m.n[O], O = m.t[O], M = m.n[R], R = m.t[R];
    }
    ++c > 255 && Ft(0);
  } else {
    for (c = A - 127; o < c; o += 2) {
      var K = a[++f];
      d[o] = K >> 4, d[o + 1] = K & 15;
    }
    ++f;
  }
  var _ = 0;
  for (o = 0; o < c; ++o) {
    var j = d[o];
    j > 11 && Ft(0), _ += j && 1 << j - 1;
  }
  var I = El(_) + 1, $ = 1 << I, At = $ - _;
  for (At & At - 1 && Ft(0), d[c++] = El(At) + 1, o = 0; o < c; ++o) {
    var j = d[o];
    ++y[d[o] = j && I + 1 - j];
  }
  var Et = new Zt($ << 1), bt = Et.subarray(0, $), ft = Et.subarray($);
  for (v[I] = 0, o = I; o > 0; --o) {
    var Ot = v[o];
    ri(ft, o, Ot, v[o - 1] = Ot + y[o] * (1 << I - o));
  }
  for (v[0] != $ && Ft(0), o = 0; o < c; ++o) {
    var it = d[o];
    if (it) {
      var nt = v[it];
      ri(bt, o, nt, v[it] = nt + (1 << I - it));
    }
  }
  return [f, {
    n: ft,
    b: I,
    s: bt
  }];
}, dg = gi(/* @__PURE__ */ new Zt([
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
]), 0, 6)[1], hg = gi(/* @__PURE__ */ new Zt([
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
]), 0, 6)[1], yg = gi(/* @__PURE__ */ new Zt([
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
]), 0, 5)[1], a2 = function(a, f) {
  for (var o = a.length, c = new ef(o), r = 0; r < o; ++r)
    c[r] = f, f += 1 << a[r];
  return c;
}, Ro = /* @__PURE__ */ new Zt((/* @__PURE__ */ new ef([
  0,
  0,
  0,
  0,
  16843009,
  50528770,
  134678020,
  202050057,
  269422093
])).buffer, 0, 36), gg = /* @__PURE__ */ a2(Ro, 0), Qo = /* @__PURE__ */ new Zt((/* @__PURE__ */ new ef([
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
])).buffer, 0, 53), mg = /* @__PURE__ */ a2(Qo, 3), oi = function(a, f, o) {
  var c = a.length, r = f.length, A = a[c - 1], d = (1 << o.b) - 1, y = -o.b;
  A || Ft(0);
  for (var v = 0, g = o.b, p = (c << 3) - 8 + El(A) - g, m = -1; p > y && m < r; ) {
    var b = p >> 3, N = (a[b] | a[b + 1] << 8 | a[b + 2] << 16) >> (p & 7);
    v = (v << g | N) & d, f[++m] = o.s[v], p -= g = o.n[v];
  }
  (p != y || m + 1 != r) && Ft(0);
}, vg = function(a, f, o) {
  var c = 6, r = f.length, A = r + 3 >> 2, d = A << 1, y = A + d;
  oi(a.subarray(c, c += a[0] | a[1] << 8), f.subarray(0, A), o), oi(a.subarray(c, c += a[2] | a[3] << 8), f.subarray(A, d), o), oi(a.subarray(c, c += a[4] | a[5] << 8), f.subarray(d, y), o), oi(a.subarray(c), f.subarray(y), o);
}, pg = function(a, f, o) {
  var c, r = f.b, A = a[r], d = A >> 1 & 3;
  f.l = A & 1;
  var y = A >> 3 | a[r + 1] << 5 | a[r + 2] << 13, v = (r += 3) + y;
  if (d == 1)
    return r >= a.length ? void 0 : (f.b = r + 1, o ? (ri(o, a[r], f.y, f.y += y), o) : ri(new Zt(y), a[r]));
  if (!(v > a.length)) {
    if (d == 0)
      return f.b = v, o ? (o.set(a.subarray(r, v), f.y), f.y += y, o) : Bo(a, r, v);
    if (d == 2) {
      var g = a[r], p = g & 3, m = g >> 2 & 3, b = g >> 4, N = 0, O = 0;
      p < 2 ? m & 1 ? b |= a[++r] << 4 | (m & 2 && a[++r] << 12) : b = g >> 3 : (O = m, m < 2 ? (b |= (a[++r] & 63) << 4, N = a[r] >> 6 | a[++r] << 2) : m == 2 ? (b |= a[++r] << 4 | (a[++r] & 3) << 12, N = a[r] >> 2 | a[++r] << 6) : (b |= a[++r] << 4 | (a[++r] & 63) << 12, N = a[r] >> 6 | a[++r] << 2 | a[++r] << 10)), ++r;
      var R = o ? o.subarray(f.y, f.y + f.m) : new Zt(f.m), B = R.length - b;
      if (p == 0)
        R.set(a.subarray(r, r += b), B);
      else if (p == 1)
        ri(R, a[r++], B);
      else {
        var M = f.h;
        if (p == 2) {
          var Z = Ag(a, r);
          N += r - (r = Z[0]), f.h = M = Z[1];
        } else M || Ft(0);
        (O ? vg : oi)(a.subarray(r, r += N), R.subarray(B), M);
      }
      var G = a[r++];
      if (G) {
        G == 255 ? G = (a[r++] | a[r++] << 8) + 32512 : G > 127 && (G = G - 128 << 8 | a[r++]);
        var K = a[r++];
        K & 3 && Ft(0);
        for (var _ = [hg, yg, dg], j = 2; j > -1; --j) {
          var I = K >> (j << 1) + 2 & 3;
          if (I == 1) {
            var $ = new Zt([0, 0, a[r++]]);
            _[j] = {
              s: $.subarray(2, 3),
              n: $.subarray(0, 1),
              t: new Fu($.buffer, 0, 1),
              b: 0
            };
          } else I == 2 ? (c = gi(a, r, 9 - (j & 1)), r = c[0], _[j] = c[1]) : I == 3 && (f.t || Ft(0), _[j] = f.t[j]);
        }
        var At = f.t = _, Et = At[0], bt = At[1], ft = At[2], Ot = a[v - 1];
        Ot || Ft(0);
        var it = (v << 3) - 8 + El(Ot) - ft.b, nt = it >> 3, D = 0, X = (a[nt] | a[nt + 1] << 8) >> (it & 7) & (1 << ft.b) - 1;
        nt = (it -= bt.b) >> 3;
        var tt = (a[nt] | a[nt + 1] << 8) >> (it & 7) & (1 << bt.b) - 1;
        nt = (it -= Et.b) >> 3;
        var mt = (a[nt] | a[nt + 1] << 8) >> (it & 7) & (1 << Et.b) - 1;
        for (++G; --G; ) {
          var pt = ft.s[X], w = ft.n[X], L = Et.s[mt], V = Et.n[mt], F = bt.s[tt], at = bt.n[tt];
          nt = (it -= F) >> 3;
          var ot = 1 << F, J = ot + ((a[nt] | a[nt + 1] << 8 | a[nt + 2] << 16 | a[nt + 3] << 24) >>> (it & 7) & ot - 1);
          nt = (it -= Qo[L]) >> 3;
          var xt = mg[L] + ((a[nt] | a[nt + 1] << 8 | a[nt + 2] << 16) >> (it & 7) & (1 << Qo[L]) - 1);
          nt = (it -= Ro[pt]) >> 3;
          var Bt = gg[pt] + ((a[nt] | a[nt + 1] << 8 | a[nt + 2] << 16) >> (it & 7) & (1 << Ro[pt]) - 1);
          if (nt = (it -= w) >> 3, X = ft.t[X] + ((a[nt] | a[nt + 1] << 8) >> (it & 7) & (1 << w) - 1), nt = (it -= V) >> 3, mt = Et.t[mt] + ((a[nt] | a[nt + 1] << 8) >> (it & 7) & (1 << V) - 1), nt = (it -= at) >> 3, tt = bt.t[tt] + ((a[nt] | a[nt + 1] << 8) >> (it & 7) & (1 << at) - 1), J > 3)
            f.o[2] = f.o[1], f.o[1] = f.o[0], f.o[0] = J -= 3;
          else {
            var Ue = J - (Bt != 0);
            Ue ? (J = Ue == 3 ? f.o[0] - 1 : f.o[Ue], Ue > 1 && (f.o[2] = f.o[1]), f.o[1] = f.o[0], f.o[0] = J) : J = f.o[0];
          }
          for (var j = 0; j < Bt; ++j)
            R[D + j] = R[B + j];
          D += Bt, B += Bt;
          var ge = D - J;
          if (ge < 0) {
            var ze = -ge, bl = f.e + ge;
            ze > xt && (ze = xt);
            for (var j = 0; j < ze; ++j)
              R[D + j] = f.w[bl + j];
            D += ze, xt -= ze, ge = 0;
          }
          for (var j = 0; j < xt; ++j)
            R[D + j] = R[ge + j];
          D += xt;
        }
        if (D != B)
          for (; B < R.length; )
            R[D++] = R[B++];
        else
          D = R.length;
        o ? f.y += D : R = Bo(R, 0, D);
      } else if (o) {
        if (f.y += b, B)
          for (var j = 0; j < b; ++j)
            R[j] = R[B + j];
      } else B && (R = Bo(R, B));
      return f.b = v, R;
    }
    Ft(2);
  }
}, Eg = function(a, f) {
  if (a.length == 1)
    return a[0];
  for (var o = new Zt(f), c = 0, r = 0; c < a.length; ++c) {
    var A = a[c];
    o.set(A, r), r += A.length;
  }
  return o;
};
function bg(a, f) {
  for (var o = [], c = +!f, r = 0, A = 0; a.length; ) {
    var d = sg(a, c || f);
    if (typeof d == "object") {
      for (c ? (f = null, d.w.length == d.u && (o.push(f = d.w), A += d.u)) : (o.push(f), d.e = 0); !d.l; ) {
        var y = pg(a, d, f);
        y || Ft(5), f ? d.e = d.y : (o.push(y), A += y.length, cg(d.w, 0, y.length), d.w.set(y, d.w.length - y.length));
      }
      r = d.b + d.c * 4;
    } else
      r = d;
    a = a.subarray(r);
  }
  return Eg(o, A);
}
function Sg() {
  const a = wg();
  return (f, o) => {
    const { memory: c, uncompress: r } = a.exports, A = 68e3, d = A + f.byteLength, y = A + f.byteLength + o;
    if (c.buffer.byteLength < y) {
      const m = c.buffer.byteLength / 65536, N = Math.ceil(y / 65536) - m;
      c.grow(N);
    }
    const v = new Uint8Array(c.buffer);
    v.set(f, A);
    const g = r(A, f.byteLength, d);
    if (g === -1) throw new Error("invalid snappy length header");
    if (g === -2) throw new Error("missing eof marker");
    if (g === -3) throw new Error("premature end of input");
    if (g) throw new Error(`failed to uncompress data ${g}`);
    return v.slice(d, d + o);
  };
}
function wg() {
  const a = atob(Bg), f = new Uint8Array(a.length);
  for (let c = 0; c < a.length; c += 1)
    f[c] = a.charCodeAt(c);
  const o = new WebAssembly.Module(f);
  return new WebAssembly.Instance(o);
}
const Bg = "AGFzbQEAAAABEANgAABgA39/fwF/YAF/AX8DBgUAAQEBAgUDAQACBj8KfwFBoIwEC38AQYAIC38AQaAMC38AQaAMC38AQaCMBAt/AEGACAt/AEGgjAQLfwBBgIAIC38AQQALfwBBAQsHwQEOBm1lbW9yeQIAEV9fd2FzbV9jYWxsX2N0b3JzAAAGbWVtY3B5AAEHbWVtbW92ZQACCnVuY29tcHJlc3MAAwxfX2Rzb19oYW5kbGUDAQpfX2RhdGFfZW5kAwILX19zdGFja19sb3cDAwxfX3N0YWNrX2hpZ2gDBA1fX2dsb2JhbF9iYXNlAwULX19oZWFwX2Jhc2UDBgpfX2hlYXBfZW5kAwcNX19tZW1vcnlfYmFzZQMIDF9fdGFibGVfYmFzZQMJCuASBQIAC8sBAQN/AkAgAkUNAAJAAkAgAkEHcSIDDQAgACEEIAIhBQwBCyAAIQQgAiEFA0AgBCABLQAAOgAAIARBAWohBCABQQFqIQEgBUF/aiEFIANBf2oiAw0ACwsgAkEISQ0AA0AgBCABLQAAOgAAIAQgAS0AAToAASAEIAEtAAI6AAIgBCABLQADOgADIAQgAS0ABDoABCAEIAEtAAU6AAUgBCABLQAGOgAGIAQgAS0ABzoAByAEQQhqIQQgAUEIaiEBIAVBeGoiBQ0ACwsgAAugAwEEfwJAIAAgAUYNAAJAAkAgACABSQ0AIAEgAmoiAyAASw0BCyACRQ0BAkACQCACQQdxIgMNACAAIQQgAiEFDAELIAAhBCACIQUDQCAEIAEtAAA6AAAgBEEBaiEEIAFBAWohASAFQX9qIQUgA0F/aiIDDQALCyACQQhJDQEDQCAEIAEtAAA6AAAgBCABLQABOgABIAQgAS0AAjoAAiAEIAEtAAM6AAMgBCABLQAEOgAEIAQgAS0ABToABSAEIAEtAAY6AAYgBCABLQAHOgAHIARBCGohBCABQQhqIQEgBUF4aiIFDQAMAgsLIAJFDQACQAJAIAJBA3EiBA0AIAAgAmohBiACIQUMAQsgAiEFA0AgBUF/aiIFIABqIgYgBSABaiIDLQAAOgAAIARBf2oiBA0ACwsgAkEESQ0AIAZBfGohASADQXxqIQQDQCABQQNqIARBA2otAAA6AAAgAUECaiAEQQJqLQAAOgAAIAFBAWogBEEBai0AADoAACABIAQtAAA6AAAgAUF8aiEBIARBfGohBCAFQXxqIgUNAAsLIAALswoBCX8jgICAgABBIGsiAySAgICAACADQQlqQgA3AAAgA0IANwIEIAMgA0EYajYCAEF/IQQCQCABRQ0AIAMgAUF/aiIFNgIcIAMgAEEBajYCGCAALAAAIgZB/wBxIQcCQCAGQX9KDQAgBUUNASADIAFBfmoiBTYCHCADIABBAmo2AhggACwAASIGQf8AcUEHdCAHciEHQX8hBCAGQX9KDQAgBUUNASADIAFBfWoiBTYCHCADIABBA2o2AhggACwAAiIGQf8AcUEOdCAHciEHQX8hBCAGQX9KDQAgBUUNASADIAFBfGoiBTYCHCADIABBBGo2AhggACwAAyIGQf8AcUEVdCAHciEHQX8hBCAGQX9KDQAgBUUNASADIAFBe2o2AhwgAyAAQQVqNgIYIAAsAAQiAUEASA0BIAFBHHQgB3IhBwsgAiAHaiEIAkACQCADEISAgIAADQAgAiEADAELIAMoAgQhASACIQADQAJAIAMoAgggAWtBBEoNACADIAE2AgQgAxCEgICAAEUNAiADKAIEIQELIAFBAWohBQJAAkAgAS0AACIGQQNxDQAgCCAAayEJIAMoAggiCiAFayEEIAZBAnYiC0EBaiEHAkAgBkE/Sw0AIARBEEkNACAJQRBIDQAgACABKAIBNgIAIAAgASgCBTYCBCAAIAEoAgk2AgggACABKAINNgIMIAAgB2ohACADKAIIIAUgB2oiAWtBBEoNAyADIAE2AgQgAxCEgICAAEUNBAwCCwJAAkAgBkHwAU8NACAFIQYMAQsgCiAFIAtBRWoiAWoiBmshBCABQQJ0QYCIgIAAaigCACAFKAIAcUEBaiEHCwJAIAcgBE0NAANAIAggAGsgBEkNBSAAIAYgBBCBgICAACEAIAMoAgAiASABKAIAIgkgAygCDCIFaiIGNgIAIAFBBGoiASABKAIAIgogBWsiATYCACADIAE2AgwgACAEaiEAIAFFDQUgAyAJIApqNgIIIAcgBGshByABIQQgByABSw0ACyAIIABrIQkLIAkgB0kNAyAAIAYgBxCBgICAACAHaiEAIAMoAgggBiAHaiIBa0EESg0CIAMgATYCBCADEISAgIAADQEMAwsgACACayAGQQF0QaCIgIAAai8BACIBQQt2IgpBAnRBgIiAgABq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", ml = 4096, Tg = 2 * ml + 32, i2 = 2 * ml - 1, Cg = new Uint32Array([
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
function Ze(a) {
  this.buf_ = new Uint8Array(Tg), this.input_ = a, this.buf_ptr_ = 0, this.val_ = 0, this.pos_ = 0, this.reset();
}
Ze.READ_SIZE = ml;
Ze.IBUF_MASK = i2;
Ze.prototype.reset = function() {
  this.buf_ptr_ = 0, this.val_ = 0, this.pos_ = 0, this.bit_pos_ = 0, this.bit_end_pos_ = 0, this.eos_ = 0, this.readMoreInput();
  for (let a = 0; a < 4; a++)
    this.val_ |= this.buf_[this.pos_] << 8 * a, this.pos_++;
  return this.bit_end_pos_ > 0;
};
Ze.prototype.readMoreInput = function() {
  if (!(this.bit_end_pos_ > 256)) if (this.eos_) {
    if (this.bit_pos_ > this.bit_end_pos_)
      throw new Error("Unexpected end of input " + this.bit_pos_ + " " + this.bit_end_pos_);
  } else {
    const a = this.buf_ptr_, f = this.input_.read(this.buf_, a, ml);
    if (f < 0)
      throw new Error("Unexpected end of input");
    if (f < ml) {
      this.eos_ = 1;
      for (let o = 0; o < 32; o++)
        this.buf_[a + f + o] = 0;
    }
    if (a === 0) {
      for (let o = 0; o < 32; o++)
        this.buf_[(ml << 1) + o] = this.buf_[o];
      this.buf_ptr_ = ml;
    } else
      this.buf_ptr_ = 0;
    this.bit_end_pos_ += f << 3;
  }
};
Ze.prototype.fillBitWindow = function() {
  for (; this.bit_pos_ >= 8; )
    this.val_ >>>= 8, this.val_ |= this.buf_[this.pos_ & i2] << 24, this.pos_++, this.bit_pos_ = this.bit_pos_ - 8 >>> 0, this.bit_end_pos_ = this.bit_end_pos_ - 8 >>> 0;
};
Ze.prototype.readBits = function(a) {
  32 - this.bit_pos_ < a && this.fillBitWindow();
  const f = this.val_ >>> this.bit_pos_ & Cg[a];
  return this.bit_pos_ += a, f;
};
const Ug = 8, qo = 8, zg = 255, Yo = 18, Mg = new Uint8Array([
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
]), Dg = new Uint16Array([
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
function qt(a, f) {
  this.bits = a, this.value = f;
}
const TA = 16, oa = 15;
function CA(a, f) {
  let o = 1 << f - 1;
  for (; a & o; )
    o >>= 1;
  return (a & o - 1) + o;
}
function UA(a, f, o, c, r) {
  do
    c -= o, a[f + c] = new qt(r.bits, r.value);
  while (c > 0);
}
function Og(a, f, o) {
  let c = 1 << f - o;
  for (; f < oa && (c -= a[f], !(c <= 0)); )
    ++f, c <<= 1;
  return f - o;
}
function u2(a, f, o, c, r) {
  const A = f, d = new Int32Array(oa + 1), y = new Int32Array(oa + 1), v = new Int32Array(r);
  for (let B = 0; B < r; B++)
    d[c[B]]++;
  y[1] = 0;
  for (let B = 1; B < oa; B++)
    y[B + 1] = y[B] + d[B];
  for (let B = 0; B < r; B++)
    c[B] !== 0 && (v[y[c[B]]++] = B);
  let g = o, p = 1 << g, m = p;
  if (y[oa] === 1) {
    for (let B = 0; B < m; ++B)
      a[f + B] = new qt(0, v[0] & 65535);
    return m;
  }
  let b = 0, N = 0;
  for (let B = 1, M = 2; B <= o; ++B, M <<= 1)
    for (; d[B] > 0; --d[B]) {
      const Z = new qt(B & 255, v[N++] & 65535);
      UA(a, f + b, M, p, Z), b = CA(b, B);
    }
  const O = m - 1;
  let R = -1;
  for (let B = o + 1, M = 2; B <= oa; ++B, M <<= 1)
    for (; d[B] > 0; --d[B]) {
      (b & O) !== R && (f += p, g = Og(d, B, o), p = 1 << g, m += p, R = b & O, a[A + R] = new qt(g + o & 255, f - A - R & 65535));
      const Z = new qt(B - o & 255, v[N++] & 65535);
      UA(a, f + (b >> o), M, p, Z), b = CA(b, B);
    }
  return m;
}
function Wu(a, f, o, c) {
  const r = new Uint8Array(a);
  c.readMoreInput();
  const A = c.readBits(2);
  if (A === 1) {
    let y = a - 1, v = 0;
    const g = new Int32Array(4), p = c.readBits(2) + 1;
    for (; y; )
      y >>= 1, v++;
    for (let m = 0; m < p; m++)
      g[m] = c.readBits(v) % a, r[g[m]] = 2;
    switch (r[g[0]] = 1, p) {
      case 1:
        break;
      case 3:
        if (g[0] === g[1] || g[0] === g[2] || g[1] === g[2])
          throw new Error("[ReadHuffmanCode] invalid symbols");
        break;
      case 2:
        if (g[0] === g[1])
          throw new Error("[ReadHuffmanCode] invalid symbols");
        r[g[1]] = 1;
        break;
      case 4:
        if (g[0] === g[1] || g[0] === g[2] || g[0] === g[3] || g[1] === g[2] || g[1] === g[3] || g[2] === g[3])
          throw new Error("[ReadHuffmanCode] invalid symbols");
        c.readBits(1) ? (r[g[2]] = 3, r[g[3]] = 3) : r[g[0]] = 2;
        break;
    }
  } else {
    const y = new Uint8Array(Yo);
    let v = 32, g = 0;
    const p = [
      new qt(2, 0),
      new qt(2, 4),
      new qt(2, 3),
      new qt(3, 2),
      new qt(2, 0),
      new qt(2, 4),
      new qt(2, 3),
      new qt(4, 1),
      new qt(2, 0),
      new qt(2, 4),
      new qt(2, 3),
      new qt(3, 2),
      new qt(2, 0),
      new qt(2, 4),
      new qt(2, 3),
      new qt(4, 5)
    ];
    for (let m = A; m < Yo && v > 0; m++) {
      const b = Mg[m];
      let N = 0;
      c.fillBitWindow(), N += c.val_ >>> c.bit_pos_ & 15, c.bit_pos_ += p[N].bits;
      const O = p[N].value;
      y[b] = O, O !== 0 && (v -= 32 >> O, g++);
    }
    if (!(g === 1 || v === 0))
      throw new Error("[ReadHuffmanCode] invalid num_codes or space");
    Ng(y, a, r, c);
  }
  const d = u2(f, o, qo, r, a);
  if (!d) throw new Error("brotli BuildHuffmanTable failed");
  return d;
}
function ra(a, f, o) {
  o.fillBitWindow(), f += o.val_ >>> o.bit_pos_ & zg;
  const c = a[f].bits - qo;
  return c > 0 && (o.bit_pos_ += qo, f += a[f].value, f += o.val_ >>> o.bit_pos_ & (1 << c) - 1), o.bit_pos_ += a[f].bits, a[f].value;
}
function Ng(a, f, o, c) {
  let r = 0, A = Ug, d = 0, y = 0, v = 32768;
  const g = [];
  for (let p = 0; p < 32; p++)
    g.push(new qt(0, 0));
  for (u2(g, 0, 5, a, Yo); r < f && v > 0; ) {
    let p = 0;
    c.readMoreInput(), c.fillBitWindow(), p += c.val_ >>> c.bit_pos_ & 31, c.bit_pos_ += g[p].bits;
    const m = g[p].value & 255;
    if (m < TA)
      d = 0, o[r++] = m, m !== 0 && (A = m, v -= 32768 >> m);
    else {
      const b = m - 14;
      let N = 0;
      m === TA && (N = A), y !== N && (d = 0, y = N);
      const O = d;
      d > 0 && (d -= 2, d <<= b), d += c.readBits(b) + 3;
      const R = d - O;
      if (r + R > f)
        throw new Error("[ReadHuffmanCodeLengths] symbol + repeat_delta > num_symbols");
      for (let B = 0; B < R; B++)
        o[r + B] = y;
      r += R, y !== 0 && (v -= R << 15 - y);
    }
  }
  if (v !== 0)
    throw new Error("[ReadHuffmanCodeLengths] space = " + v);
  for (; r < f; r++)
    o[r] = 0;
}
function dl(a, f) {
  this.alphabet_size = a, this.num_htrees = f, this.codes = new Array(f + f * Dg[a + 31 >>> 5]), this.htrees = new Uint32Array(f);
}
dl.prototype.decode = function(a) {
  let f = 0;
  for (let o = 0; o < this.num_htrees; o++)
    this.htrees[o] = f, f += Wu(this.alphabet_size, this.codes, f, a);
};
function Jo([a, f]) {
  return { offset: a, nbits: f };
}
const xg = [
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
].map(Jo), Rg = [
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
].map(Jo), Qg = [
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
].map(Jo), qg = [
  0,
  0,
  8,
  8,
  0,
  16,
  8,
  16,
  16
], Yg = [
  0,
  8,
  0,
  8,
  16,
  0,
  16,
  8,
  16
], Kn = 1080, f2 = new Uint8Array([
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
]), c2 = new Uint8Array([
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
function o2(a, f) {
  const o = new Uint16Array(31);
  for (let r = 0; r < 31; r++)
    o[r] = f += 1 << a[r - 1];
  const c = new Int32Array(o[30]);
  for (let r = 1; r < 30; r++)
    for (let A = o[r]; A < o[r + 1]; ++A)
      c[A] = A - o[r] << 5 | r;
  return { base: o, rev: c };
}
const { base: r2, rev: Lg } = o2(f2, 2);
r2[28] = 258;
Lg[258] = 28;
const { base: Hg } = o2(c2, 0), s2 = new Uint16Array(32768);
for (let a = 0; a < 32768; a++) {
  let f = (a & 43690) >> 1 | (a & 21845) << 1;
  f = (f & 52428) >> 2 | (f & 13107) << 2, f = (f & 61680) >> 4 | (f & 3855) << 4, s2[a] = ((f & 65280) >> 8 | (f & 255) << 8) >> 1;
}
function si(a, f, o) {
  const c = new Uint16Array(f);
  for (let d = 0; d < a.length; d++)
    a[d] && ++c[a[d] - 1];
  const r = new Uint16Array(f);
  for (let d = 1; d < f; d++)
    r[d] = r[d - 1] + c[d - 1] << 1;
  let A;
  {
    A = new Uint16Array(1 << f);
    const d = 15 - f;
    for (let y = 0; y < a.length; y++)
      if (a[y]) {
        const v = y << 4 | a[y], g = f - a[y];
        let p = r[a[y] - 1]++ << g;
        for (const m = p | (1 << g) - 1; p <= m; p++)
          A[s2[p] >> d] = v;
      }
  }
  return A;
}
const mi = new Uint8Array(288);
for (let a = 0; a < 144; a++) mi[a] = 8;
for (let a = 144; a < 256; a++) mi[a] = 9;
for (let a = 256; a < 280; a++) mi[a] = 7;
for (let a = 280; a < 288; a++) mi[a] = 8;
const A2 = new Uint8Array(32);
for (let a = 0; a < 32; a++) A2[a] = 5;
const Gg = /* @__PURE__ */ si(mi, 9), Ig = /* @__PURE__ */ si(A2, 5);
function To(a, f, o, c, r, A, d) {
  const y = o * 2, v = o, g = ra(f, o * Kn, d);
  let p;
  g === 0 ? p = r[y + (A[v] & 1)] : g === 1 ? p = r[y + (A[v] - 1 & 1)] + 1 : p = g - 2, p >= a && (p -= a), c[o] = p, r[y + (A[v] & 1)] = p, A[v]++;
}
function jg(a) {
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
    for (let r = 0; r < c; r++) {
      const A = a.readBits(8);
      if (r + 1 === c && c > 1 && A === 0)
        throw new Error("Invalid size byte");
      f.meta_block_length |= A << r * 8;
    }
  } else
    for (let c = 0; c < o; c++) {
      const r = a.readBits(4);
      if (c + 1 === o && o > 4 && r === 0)
        throw new Error("Invalid size nibble");
      f.meta_block_length |= r << c * 4;
    }
  return f.meta_block_length++, !f.input_end && !f.is_metadata && (f.is_uncompressed = a.readBits(1)), f;
}
function Zg(a, f, o, c, r, A) {
  const d = r + 1;
  let y = o & r, v = A.pos_ & Ze.IBUF_MASK;
  if (f < 8 || A.bit_pos_ + (f << 3) < A.bit_end_pos_) {
    for (; f-- > 0; )
      A.readMoreInput(), c[y++] = A.readBits(8), y === d && (a.write(c, d), y = 0);
    return;
  }
  if (A.bit_end_pos_ < 32)
    throw new Error("copyUncompressedBlockToOutput: br.bit_end_pos_ < 32");
  for (; A.bit_pos_ < 32; )
    c[y] = A.val_ >>> A.bit_pos_, A.bit_pos_ += 8, y++, f--;
  let g = A.bit_end_pos_ - A.bit_pos_ >> 3;
  if (v + g > Ze.IBUF_MASK) {
    const p = Ze.IBUF_MASK + 1 - v;
    for (let m = 0; m < p; m++)
      c[y + m] = A.buf_[v + m];
    g -= p, y += p, f -= p, v = 0;
  }
  for (let p = 0; p < g; p++)
    c[y + p] = A.buf_[v + p];
  if (y += g, f -= g, y >= d) {
    a.write(c, d), y -= d;
    for (let p = 0; p < y; p++)
      c[p] = c[d + p];
  }
  for (; y + f >= d; ) {
    if (g = d - y, A.input_.read(c, y, g) < g)
      throw new Error("copyUncompressedBlockToOutput: not enough bytes");
    a.write(c, d), f -= g, y = 0;
  }
  if (A.input_.read(c, y, f) < f)
    throw new Error("copyUncompressedBlockToOutput: not enough bytes");
  A.reset();
}
function d2(a) {
  if (a.readBits(1)) {
    const f = a.readBits(3);
    return f === 0 ? 1 : a.readBits(f) + (1 << f);
  }
  return 0;
}
function Vg(a) {
  if (a.readBits(1) === 0) return 16;
  let f = a.readBits(3);
  return f > 0 ? 17 + f : (f = a.readBits(3), f > 0 ? 8 + f : 17);
}
function Xg(a) {
  const f = a.bit_pos_ + 7 & -8;
  return !a.readBits(f - a.bit_pos_);
}
function Hu(a, f, o) {
  const c = ra(a, f, o), { offset: r, nbits: A } = xg[c];
  return r + o.readBits(A);
}
const zA = new Uint8Array([
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
]), Gu = new Uint16Array([
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
function MA(a, f) {
  let o = 0;
  f.readMoreInput();
  const c = d2(f) + 1, r = new Uint8Array(a);
  if (c <= 1)
    return [c, r];
  f.readBits(1) && (o = f.readBits(4) + 1);
  const d = [];
  for (let y = 0; y < Kn; y++)
    d[y] = new qt(0, 0);
  Wu(c + o, d, 0, f);
  for (let y = 0; y < a; ) {
    f.readMoreInput();
    const v = ra(d, 0, f);
    if (v === 0)
      r[y] = 0, y++;
    else if (v <= o) {
      let g = 1 + (1 << v) + f.readBits(v);
      for (; --g; ) {
        if (y >= a)
          throw new Error("[DecodeContextMap] i >= context_map_size");
        r[y] = 0, y++;
      }
    } else
      r[y] = v - o, y++;
  }
  return f.readBits(1) && Jg(r, a), [c, r];
}
function Kg(a, f) {
  const o = a[f];
  for (let c = f; c; c--) a[c] = a[c - 1];
  a[0] = o;
}
function Jg(a, f) {
  const o = new Uint8Array(256);
  for (let c = 0; c < 256; c++)
    o[c] = c;
  for (let c = 0; c < f; c++) {
    const r = a[c];
    a[c] = o[r], r && Kg(o, r);
  }
}
function h2(a) {
  this.buffer = a, this.pos = 0;
}
h2.prototype.read = function(a, f, o) {
  this.pos + o > this.buffer.length && (o = this.buffer.length - this.pos);
  for (let c = 0; c < o; c++)
    a[f + c] = this.buffer[this.pos + c];
  return this.pos += o, o;
};
function y2(a) {
  this.buffer = a, this.pos = 0;
}
y2.prototype.write = function(a, f) {
  if (this.pos + f > this.buffer.length) throw new Error("brotli output buffer is not large enough");
  return this.buffer.set(a.subarray(0, f), this.pos), this.pos += f, f;
};
const _g = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
function je(a, f, o) {
  const c = f / 8 | 0;
  return (a[c] | a[c + 1] << 8) >> (f & 7) & o;
}
function Co(a, f) {
  const o = f / 8 | 0;
  return (a[o] | a[o + 1] << 8 | a[o + 2] << 16) >> (f & 7);
}
function Fg(a) {
  return (a + 7) / 8 | 0;
}
function Wg(a, f) {
  if (a[f++] !== 31 || a[f++] !== 139 || a[f++] !== 8) return 0;
  const o = a[f++];
  f += 6, o & 4 && (f += (a[f + 10] | a[f + 11] << 8) + 2);
  for (let c = (o >> 3 & 1) + (o >> 4 & 1); c > 0; c -= +!a[f++]) ;
  return f + (o & 2);
}
function _o(a, f, o = 0, c = 0) {
  let r = f ?? new Uint8Array(1024);
  if (!(a.length - o)) return r;
  const A = Wg(a, o);
  if (A === a.length - 8) return r;
  if (A > a.length - 8) throw new Error("unexpected EOF");
  let d = A * 8, y = 0, v = 0, g = 0, p, m;
  const b = a.length * 8;
  function N(O) {
    if (!f && O > r.length) {
      const R = r;
      r = new Uint8Array(Math.max(R.length * 2, O)), r.set(R);
    }
  }
  do {
    if (!p) {
      y = je(a, d, 1);
      const M = je(a, d + 1, 3);
      if (d += 3, M)
        if (M === 1)
          p = Gg, m = Ig, v = 9, g = 5;
        else if (M === 2) {
          const Z = je(a, d, 31) + 257, G = je(a, d + 10, 15) + 4, K = Z + je(a, d + 5, 31) + 1;
          d += 14;
          const _ = new Uint8Array(K), j = new Uint8Array(19);
          for (let ft = 0; ft < G; ++ft)
            j[_g[ft]] = je(a, d + ft * 3, 7);
          d += G * 3;
          const I = Math.max(...j), $ = (1 << I) - 1, At = si(j, I);
          for (let ft = 0; ft < K; ) {
            const Ot = At[je(a, d, $)];
            d += Ot & 15;
            const it = Ot >> 4;
            if (it < 16)
              _[ft++] = it;
            else {
              let nt = 0, D = 0;
              for (it === 16 ? (D = 3 + je(a, d, 3), d += 2, nt = _[ft - 1]) : it === 17 ? (D = 3 + je(a, d, 7), d += 3) : it === 18 && (D = 11 + je(a, d, 127), d += 7); D--; ) _[ft++] = nt;
            }
          }
          const Et = _.subarray(0, Z), bt = _.subarray(Z);
          v = Math.max(...Et), g = Math.max(...bt), p = si(Et, v), m = si(bt, g);
        } else throw new Error("invalid block type");
      else {
        const Z = Fg(d) + 4, G = a[Z - 4] | a[Z - 3] << 8, K = Z + G;
        if (K > a.length) throw new Error("unexpected EOF");
        N(c + G), r.set(a.subarray(Z, K), c), c += G, d = K * 8;
        continue;
      }
      if (d > b) throw new Error("unexpected EOF");
    }
    N(c + 131072);
    const O = (1 << v) - 1, R = (1 << g) - 1;
    let B = d;
    for (; ; B = d) {
      const M = p[Co(a, d) & O], Z = M >> 4;
      if (d += M & 15, d > b) throw new Error("unexpected EOF");
      if (!M) throw new Error("invalid length/literal");
      if (Z < 256) r[c++] = Z;
      else if (Z === 256) {
        B = d, p = void 0;
        break;
      } else {
        let G = Z - 254;
        if (Z > 264) {
          const $ = Z - 257, At = f2[$];
          G = je(a, d, (1 << At) - 1) + r2[$], d += At;
        }
        if (!m) throw new Error("invalid distance map");
        const K = m[Co(a, d) & R], _ = K >> 4;
        if (!K) throw new Error("invalid distance");
        d += K & 15;
        let j = Hg[_];
        if (_ > 3) {
          const $ = c2[_];
          j += Co(a, d) & (1 << $) - 1, d += $;
        }
        if (d > b) throw new Error("unexpected EOF");
        const I = c + G;
        if (c < j) throw new Error("unexpected dictionary case");
        for (N(I); c < I; c++) r[c] = r[c - j];
      }
    }
    d = B, p && (y = 1);
  } while (!y);
  if (c < r.length) {
    const O = Math.ceil(d / 8) + 8;
    _o(a, r, O, c);
  }
  return f ? r : r.subarray(0, c);
}
const kg = `
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
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
let Iu;
function Pg() {
  if (!Iu) {
    Iu = new Uint8Array(122784);
    const a = atob(kg), f = new Uint8Array(a.length);
    for (let o = 0; o < a.length; o++)
      f[o] = a.charCodeAt(o);
    _o(f, Iu);
  }
  return Iu;
}
const k = 0, DA = 1, $g = 2, tm = 3, em = 4, nm = 5, lm = 6, am = 7, im = 8, g2 = 9, jt = 10, _t = 11, Lo = 12, um = 13, fm = 14, cm = 15, om = 16, rm = 17, sm = 18, Am = 20;
function q(a, f, o) {
  this.prefix = new Uint8Array(a.length), this.transform = f, this.suffix = new Uint8Array(o.length);
  for (let c = 0; c < a.length; c++) this.prefix[c] = a.charCodeAt(c);
  for (let c = 0; c < o.length; c++) this.suffix[c] = o.charCodeAt(c);
}
const Xu = [
  new q("", k, ""),
  new q("", k, " "),
  new q(" ", k, " "),
  new q("", Lo, ""),
  new q("", jt, " "),
  new q("", k, " the "),
  new q(" ", k, ""),
  new q("s ", k, " "),
  new q("", k, " of "),
  new q("", jt, ""),
  new q("", k, " and "),
  new q("", um, ""),
  new q("", DA, ""),
  new q(", ", k, " "),
  new q("", k, ", "),
  new q(" ", jt, " "),
  new q("", k, " in "),
  new q("", k, " to "),
  new q("e ", k, " "),
  new q("", k, '"'),
  new q("", k, "."),
  new q("", k, '">'),
  new q("", k, `
`),
  new q("", tm, ""),
  new q("", k, "]"),
  new q("", k, " for "),
  new q("", fm, ""),
  new q("", $g, ""),
  new q("", k, " a "),
  new q("", k, " that "),
  new q(" ", jt, ""),
  new q("", k, ". "),
  new q(".", k, ""),
  new q(" ", k, ", "),
  new q("", cm, ""),
  new q("", k, " with "),
  new q("", k, "'"),
  new q("", k, " from "),
  new q("", k, " by "),
  new q("", om, ""),
  new q("", rm, ""),
  new q(" the ", k, ""),
  new q("", em, ""),
  new q("", k, ". The "),
  new q("", _t, ""),
  new q("", k, " on "),
  new q("", k, " as "),
  new q("", k, " is "),
  new q("", am, ""),
  new q("", DA, "ing "),
  new q("", k, `
	`),
  new q("", k, ":"),
  new q(" ", k, ". "),
  new q("", k, "ed "),
  new q("", Am, ""),
  new q("", sm, ""),
  new q("", lm, ""),
  new q("", k, "("),
  new q("", jt, ", "),
  new q("", im, ""),
  new q("", k, " at "),
  new q("", k, "ly "),
  new q(" the ", k, " of "),
  new q("", nm, ""),
  new q("", g2, ""),
  new q(" ", jt, ", "),
  new q("", jt, '"'),
  new q(".", k, "("),
  new q("", _t, " "),
  new q("", jt, '">'),
  new q("", k, '="'),
  new q(" ", k, "."),
  new q(".com/", k, ""),
  new q(" the ", k, " of the "),
  new q("", jt, "'"),
  new q("", k, ". This "),
  new q("", k, ","),
  new q(".", k, " "),
  new q("", jt, "("),
  new q("", jt, "."),
  new q("", k, " not "),
  new q(" ", k, '="'),
  new q("", k, "er "),
  new q(" ", _t, " "),
  new q("", k, "al "),
  new q(" ", _t, ""),
  new q("", k, "='"),
  new q("", _t, '"'),
  new q("", jt, ". "),
  new q(" ", k, "("),
  new q("", k, "ful "),
  new q(" ", jt, ". "),
  new q("", k, "ive "),
  new q("", k, "less "),
  new q("", _t, "'"),
  new q("", k, "est "),
  new q(" ", jt, "."),
  new q("", _t, '">'),
  new q(" ", k, "='"),
  new q("", jt, ","),
  new q("", k, "ize "),
  new q("", _t, "."),
  new q("Â ", k, ""),
  new q(" ", k, ","),
  new q("", jt, '="'),
  new q("", _t, '="'),
  new q("", k, "ous "),
  new q("", _t, ", "),
  new q("", jt, "='"),
  new q(" ", jt, ","),
  new q(" ", _t, '="'),
  new q(" ", _t, ", "),
  new q("", _t, ","),
  new q("", _t, "("),
  new q("", _t, ". "),
  new q(" ", _t, "."),
  new q("", _t, "='"),
  new q(" ", _t, ". "),
  new q(" ", jt, '="'),
  new q(" ", _t, "='"),
  new q(" ", jt, "='")
], dm = Xu.length;
function OA(a, f) {
  return a[f] < 192 ? (a[f] >= 97 && a[f] <= 122 && (a[f] ^= 32), 1) : a[f] < 224 ? (a[f + 1] ^= 32, 2) : (a[f + 2] ^= 5, 3);
}
function hm(a, f, o, c, r) {
  const A = Pg(), { prefix: d } = Xu[r], { suffix: y } = Xu[r], v = Xu[r].transform;
  let g = v < Lo ? 0 : v - (Lo - 1);
  const p = f;
  g > c && (g = c);
  let m = 0;
  for (; m < d.length; )
    a[f++] = d[m++];
  o += g, c -= g, v <= g2 && (c -= v);
  for (let O = 0; O < c; O++)
    a[f++] = A[o + O];
  let b = f - c;
  if (v === jt)
    OA(a, b);
  else if (v === _t)
    for (; c > 0; ) {
      const O = OA(a, b);
      b += O, c -= O;
    }
  let N = 0;
  for (; N < y.length; )
    a[f++] = y[N++];
  return f - p;
}
const ym = 256, gm = 704, mm = 26, NA = 6, xA = 2, Ho = 16, vm = new Uint8Array([
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
]), pm = new Int8Array([
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
]), Em = new Uint32Array([
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
]), bm = new Uint8Array([
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
]), Sm = 4, RA = 24;
function wm(a, f) {
  const o = new Uint8Array(f), c = new h2(a), r = new y2(o);
  return Bm(c, r), o;
}
function Bm(a, f) {
  let o = 0, c = 0, r = 0, A = 0;
  const d = [16, 15, 11, 4];
  let y = 0, v = 0, g = 0;
  const p = [new dl(0, 0), new dl(0, 0), new dl(0, 0)], m = 128 + Ze.READ_SIZE, b = new Ze(a);
  r = Vg(b);
  const N = (1 << r) - 16, O = 1 << r, R = O - 1, B = new Uint8Array(O + m + RA), M = O, Z = [], G = [];
  for (let K = 0; K < 3 * Kn; K++)
    Z[K] = new qt(0, 0), G[K] = new qt(0, 0);
  for (; !c; ) {
    let K = 0;
    const _ = [1 << 28, 1 << 28, 1 << 28], j = [0], I = [1, 1, 1], $ = [0, 1, 0, 1, 0, 1], At = [0];
    let Et = 0;
    for (let J = 0; J < 3; J++)
      p[J].codes = [], p[J].htrees = new Uint32Array();
    b.readMoreInput();
    const bt = jg(b);
    if (K = bt.meta_block_length, o + K > f.buffer.length) {
      const J = new Uint8Array(o + K);
      J.set(f.buffer), f.buffer = J;
    }
    if (c = bt.input_end, bt.is_metadata) {
      for (Xg(b); K > 0; --K)
        b.readMoreInput(), b.readBits(8);
      continue;
    }
    if (K === 0) continue;
    if (bt.is_uncompressed) {
      b.bit_pos_ = b.bit_pos_ + 7 & -8, Zg(f, K, o, B, R, b), o += K;
      continue;
    }
    for (let J = 0; J < 3; J++)
      I[J] = d2(b) + 1, I[J] >= 2 && (Wu(I[J] + 2, Z, J * Kn, b), Wu(mm, G, J * Kn, b), _[J] = Hu(G, J * Kn, b), At[J] = 1);
    b.readMoreInput();
    const ft = b.readBits(2), Ot = Ho + (b.readBits(4) << ft), it = (1 << ft) - 1, nt = Ot + (48 << ft), D = new Uint8Array(I[0]);
    for (let J = 0; J < I[0]; J++)
      b.readMoreInput(), D[J] = b.readBits(2) << 1;
    const [X, tt] = MA(I[0] << NA, b), [mt, pt] = MA(I[2] << xA, b);
    p[0] = new dl(ym, X), p[1] = new dl(gm, I[1]), p[2] = new dl(nt, mt);
    for (let J = 0; J < 3; ++J)
      p[J].decode(b);
    let w = 0, L = 0, V = D[j[0]], F = Gu[V], at = Gu[V + 1], ot = p[1].htrees[0];
    for (; K > 0; ) {
      let J;
      b.readMoreInput(), _[1] === 0 && (To(
        I[1],
        Z,
        1,
        j,
        $,
        At,
        b
      ), _[1] = Hu(G, Kn, b), ot = p[1].htrees[j[1]]), _[1]--;
      const xt = ra(p[1].codes, ot, b);
      let Bt = xt >> 6;
      Bt >= 2 ? (Bt -= 2, J = -1) : J = 0;
      const Ue = qg[Bt] + (xt >> 3 & 7), ge = Rg[Ue], ze = ge.offset + b.readBits(ge.nbits), bl = Yg[Bt] + (xt & 7), Ve = Qg[bl], ce = Ve.offset + b.readBits(Ve.nbits);
      v = B[o - 1 & R], g = B[o - 2 & R];
      for (let me = 0; me < ze; me++) {
        b.readMoreInput(), _[0] === 0 && (To(
          I[0],
          Z,
          0,
          j,
          $,
          At,
          b
        ), _[0] = Hu(G, 0, b), Et = j[0] << NA, w = Et, V = D[j[0]], F = Gu[V], at = Gu[V + 1]);
        const Xe = zA[F + v] | zA[at + g], Ke = tt[w + Xe];
        _[0]--, g = v, v = ra(p[0].codes, p[0].htrees[Ke], b), B[o & R] = v, (o & R) === R && f.write(B, O), o++;
      }
      if (K -= ze, K <= 0) break;
      if (J < 0) {
        b.readMoreInput(), _[2] === 0 && (To(
          I[2],
          Z,
          2,
          j,
          $,
          At,
          b
        ), _[2] = Hu(G, 2 * Kn, b), L = j[2] << xA), _[2]--;
        const me = (ce > 4 ? 3 : ce - 2) & 255, Xe = pt[L + me];
        if (J = ra(p[2].codes, p[2].htrees[Xe], b), J >= Ot) {
          J -= Ot;
          const Ke = J & it;
          J >>= ft;
          const vn = (J >> 1) + 1, sa = (2 + (J & 1) << vn) - 4;
          J = Ot + (sa + b.readBits(vn) << ft) + Ke;
        }
      }
      const Pe = Tm(J, d, y);
      if (Pe < 0) throw new Error("[BrotliDecompress] invalid distance");
      o < N && A !== N ? A = o : A = N;
      let Sl = o & R;
      if (Pe > A)
        if (ce >= Sm && ce <= RA) {
          let me = Em[ce];
          const Xe = Pe - A - 1, Ke = bm[ce], vn = (1 << Ke) - 1, sa = Xe & vn, vi = Xe >> Ke;
          if (me += sa * ce, vi < dm) {
            const $t = hm(B, Sl, me, ce, vi);
            if (Sl += $t, o += $t, K -= $t, Sl >= M) {
              f.write(B, O);
              for (let wl = 0; wl < Sl - M; wl++)
                B[wl] = B[M + wl];
            }
          } else
            throw new Error("Invalid backward reference");
        } else
          throw new Error("Invalid backward reference");
      else {
        if (J > 0 && (d[y & 3] = Pe, y++), ce > K)
          throw new Error("Invalid backward reference");
        for (let me = 0; me < ce; me++)
          B[o & R] = B[o - Pe & R], (o & R) === R && f.write(B, O), o++, K--;
      }
      v = B[o - 1 & R], g = B[o - 2 & R];
    }
    o &= 1073741823;
  }
  f.write(B, o & R);
}
function Tm(a, f, o) {
  return a < Ho ? (o += vm[a], o &= 3, f[o] + pm[a]) : a - Ho + 1;
}
function Cm(a, f) {
  const o = new Uint8Array(f);
  try {
    let c = 0, r = 0;
    for (; c < a.length - 8; ) {
      const A = a[c++] << 24 | a[c++] << 16 | a[c++] << 8 | a[c++], d = a[c++] << 24 | a[c++] << 16 | a[c++] << 8 | a[c++];
      if (a.length - c < d) throw new Error("lz4 not hadoop");
      if (o.length < A) throw new Error("lz4 not hadoop");
      if (Go(a.subarray(c, c + d), o, r) !== A) throw new Error("lz4 not hadoop");
      if (c += d, r += A, c === a.length) return o;
    }
    if (c < a.length) throw new Error("lz4 not hadoop");
  } catch (c) {
    if (c instanceof Error && c.message !== "lz4 not hadoop") throw c;
    Go(a, o, 0);
  }
  return o;
}
function Um(a, f) {
  const o = new Uint8Array(f);
  return Go(a, o, 0), o;
}
function Go(a, f, o) {
  let c = o;
  for (let r = 0; r < a.length; ) {
    const A = a[r++];
    let d = A >> 4;
    if (d) {
      let b = d + 240;
      for (; b === 255; ) d += b = a[r++];
      if (f.set(a.subarray(r, r + d), c), c += d, r += d, r >= a.length) return c - o;
    }
    const y = a[r++] | a[r++] << 8;
    if (!y || y > c)
      throw new Error(`lz4 offset out of range ${y}`);
    let v = (A & 15) + 4, g = v + 240;
    for (; g === 255; ) v += g = a[r++];
    let p = c - y;
    const m = c + v;
    for (; c < m; ) f[c++] = f[p++];
  }
  return c - o;
}
const zm = {
  SNAPPY: Sg(),
  // loads wasm
  GZIP: (a, f) => _o(a, new Uint8Array(f)),
  BROTLI: wm,
  ZSTD: (a) => bg(a),
  LZ4: Cm,
  LZ4_RAW: Um
}, QA = 200, qA = 16, Mm = 24, YA = "pqv-styles", Dm = `
.pqv-root {
  --ink: #1b1b1f;
  --muted: #6b6b76;
  --faint: #9aa0a6;
  --line: #ececef;
  --line-strong: #dcdce1;
  --zebra: #fafafb;
  --hover: #eef6f4;
  --accent: #0f766e;
  --accent-soft: #e6f4f1;
  --radius: 12px;
  color: var(--ink);
  font-family: "Segoe UI Variable Text", "Segoe UI", system-ui, -apple-system, sans-serif;
  font-size: 13px;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
}
.pqv-mono {
  font-family: ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, monospace;
  font-variant-numeric: tabular-nums;
  font-size: 12.5px;
}

.pqv-card {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: 0 1px 2px rgba(20, 20, 30, .04), 0 8px 24px -12px rgba(20, 20, 30, .12);
  overflow: hidden;
}
.pqv-accentbar { height: 3px; background: linear-gradient(90deg, var(--accent), #2dd4bf); }

.pqv-toolbar {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 14px 18px; border-bottom: 1px solid var(--line);
}
.pqv-title { display: flex; flex-direction: column; min-width: 0; }
.pqv-name {
  font-size: 15px; font-weight: 650; letter-spacing: -.01em;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.pqv-path {
  font-size: 11.5px; color: var(--faint); margin-top: 1px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.pqv-chips { display: flex; gap: 8px; flex: none; }
.pqv-chip {
  display: inline-flex; align-items: baseline; gap: 5px;
  padding: 4px 10px; border-radius: 999px; background: #f4f4f6;
  font-size: 11.5px; color: var(--muted); white-space: nowrap;
}
.pqv-chip b { font-size: 13px; font-weight: 650; color: var(--ink); font-variant-numeric: tabular-nums; }
.pqv-chip--accent { background: var(--accent-soft); color: var(--accent); }
.pqv-chip--accent b { color: var(--accent); }

.pqv-scroll { overflow: auto; max-height: 72vh; }
.pqv-table { width: 100%; border-collapse: separate; border-spacing: 0; }
.pqv-table th, .pqv-table td {
  padding: 9px 16px; text-align: left; border-bottom: 1px solid var(--line);
  white-space: nowrap;
}
.pqv-table th {
  position: sticky; top: 0; z-index: 1; background: #fff;
  font-size: 10.5px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
  color: var(--muted); border-bottom: 1px solid var(--line-strong);
  user-select: none;
}
.pqv-table th .pqv-idx { color: var(--faint); margin-left: 6px; font-weight: 500; letter-spacing: 0; text-transform: none; }
.pqv-num { text-align: right; }
.pqv-table tbody tr { transition: background .08s ease; }
.pqv-table tbody tr:nth-child(even) { background: var(--zebra); }
.pqv-table tbody tr:hover { background: var(--hover); }
.pqv-table tbody tr:last-child td { border-bottom: none; }
.pqv-null { color: var(--faint); }

.pqv-pill {
  display: inline-block; padding: 2px 9px; border-radius: 999px;
  font-size: 11.5px; font-weight: 550; line-height: 1.5;
}
.pqv-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; }
.pqv-dot { width: 7px; height: 7px; border-radius: 50%; flex: none; }

/* states */
.pqv-state { padding: 28px 18px; color: var(--muted); }
.pqv-error {
  border-left: 3px solid #c0362c; background: #fdf3f2; color: #8a2a22;
  padding: 14px 18px; border-radius: 8px; white-space: pre-wrap;
}
.pqv-error b { display: block; margin-bottom: 3px; color: #6f221c; }
.pqv-skel-row { display: flex; gap: 16px; padding: 9px 16px; border-bottom: 1px solid var(--line); }
.pqv-skel {
  height: 11px; border-radius: 6px; flex: 1;
  background: linear-gradient(90deg, #eee 25%, #f6f6f7 37%, #eee 63%);
  background-size: 400% 100%; animation: pqv-shimmer 1.3s ease infinite;
}
@keyframes pqv-shimmer { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }
@media (prefers-reduced-motion: reduce) { .pqv-skel { animation: none; } }
`;
function Om() {
  hl.useEffect(() => {
    if (document.getElementById(YA)) return;
    const a = document.createElement("style");
    a.id = YA, a.textContent = Dm, document.head.appendChild(a);
  }, []);
}
const Nm = /(price|total|amount|cost|revenue|sales|value|paid|balance|fee)/i, Io = new Intl.NumberFormat("en-US"), xm = new Intl.NumberFormat("en-US", { maximumFractionDigits: 4 }), Rm = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }), Qm = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" });
function qm(a, f) {
  for (const o of a) {
    const c = o[f];
    if (c != null) return c;
  }
}
function Ym(a, f) {
  return f.map((o) => {
    const c = qm(a, o);
    let r = "text";
    if (typeof c == "boolean") r = "boolean";
    else if (c instanceof Date) r = "date";
    else if (typeof c == "bigint" || typeof c == "number")
      r = Nm.test(o) ? "currency" : "number";
    else if (typeof c == "string") {
      const A = /* @__PURE__ */ new Set();
      let d = !1, y = 0;
      for (const v of a) {
        const g = v[o];
        if (typeof g == "string" && (y = Math.max(y, g.length), A.size <= qA && A.add(g), A.size > qA || y > Mm)) {
          d = !0;
          break;
        }
      }
      r = d ? "text" : "category";
    }
    return { key: o, kind: r, numeric: r === "number" || r === "currency" };
  });
}
function Lm(a) {
  let f = 0;
  for (let o = 0; o < a.length; o++) f = (f * 31 + a.charCodeAt(o)) % 360;
  return { background: `hsl(${f} 62% 95%)`, color: `hsl(${f} 42% 32%)`, boxShadow: `inset 0 0 0 1px hsl(${f} 50% 88%)` };
}
function Hm(a, f) {
  if (a == null) return /* @__PURE__ */ ut.jsx("span", { className: "pqv-null", children: "—" });
  switch (f) {
    case "boolean": {
      const o = a === !0;
      return /* @__PURE__ */ ut.jsxs("span", { className: "pqv-badge", children: [
        /* @__PURE__ */ ut.jsx("span", { className: "pqv-dot", style: { background: o ? "#16a34a" : "#c4c4cc" } }),
        /* @__PURE__ */ ut.jsx("span", { style: { color: o ? "#15803d" : "#8a8a93" }, children: o ? "Yes" : "No" })
      ] });
    }
    case "date":
      return a instanceof Date ? Qm.format(a) : String(a);
    case "currency": {
      const o = typeof a == "bigint" ? Number(a) : a;
      return Rm.format(o);
    }
    case "number": {
      const o = typeof a == "bigint" ? Number(a) : a;
      return Number.isInteger(o) ? Io.format(o) : xm.format(o);
    }
    case "category":
      return /* @__PURE__ */ ut.jsx("span", { className: "pqv-pill", style: Lm(String(a)), children: String(a) });
    default:
      return typeof a == "object" ? JSON.stringify(a) : String(a);
  }
}
function Ku(a) {
  const f = a.split(/[?#]/)[0].replace(/\/+$/, "");
  return decodeURIComponent(f.split("/").pop() || a);
}
function jo({ name: a, path: f, children: o }) {
  return /* @__PURE__ */ ut.jsx("div", { className: "pqv-root", children: /* @__PURE__ */ ut.jsxs("div", { className: "pqv-card", children: [
    /* @__PURE__ */ ut.jsx("div", { className: "pqv-accentbar" }),
    a && /* @__PURE__ */ ut.jsx("div", { className: "pqv-toolbar", children: /* @__PURE__ */ ut.jsxs("div", { className: "pqv-title", children: [
      /* @__PURE__ */ ut.jsx("span", { className: "pqv-name", children: a }),
      f && /* @__PURE__ */ ut.jsx("span", { className: "pqv-path", children: f })
    ] }) }),
    o
  ] }) });
}
function Gm({ filePath: a }) {
  return /* @__PURE__ */ ut.jsx(jo, { name: Ku(a), path: a, children: /* @__PURE__ */ ut.jsx("div", { children: Array.from({ length: 8 }).map((f, o) => /* @__PURE__ */ ut.jsx("div", { className: "pqv-skel-row", children: Array.from({ length: 5 }).map((c, r) => /* @__PURE__ */ ut.jsx("div", { className: "pqv-skel", style: { maxWidth: r === 0 ? 48 : void 0, opacity: 1 - o * 0.09 } }, r)) }, o)) }) });
}
function Im({ filePath: a, fetchFile: f }) {
  Om();
  const [o, c] = hl.useState(null), [r, A] = hl.useState(null);
  hl.useEffect(() => {
    let g = !1;
    if (c(null), A(null), !a) {
      A("Set a parquet file path in the web part properties.");
      return;
    }
    return (async () => {
      const p = Sy(
        await by({ url: a, fetch: f })
      );
      return ig({ file: p, compressors: zm, rowEnd: QA });
    })().then((p) => {
      g || c(p);
    }).catch((p) => {
      g || A(p instanceof Error ? p.message : String(p));
    }), () => {
      g = !0;
    };
  }, [a, f]);
  const d = hl.useMemo(() => o && o.length ? Object.keys(o[0]) : [], [o]), y = hl.useMemo(() => o && o.length ? Ym(o, d) : [], [o, d]);
  if (r)
    return /* @__PURE__ */ ut.jsx(jo, { name: a ? Ku(a) : "Parquet viewer", path: a || void 0, children: /* @__PURE__ */ ut.jsx("div", { className: "pqv-state", children: /* @__PURE__ */ ut.jsxs("div", { className: "pqv-error", children: [
      /* @__PURE__ */ ut.jsx("b", { children: "Couldn’t load this file" }),
      r
    ] }) }) });
  if (!o) return /* @__PURE__ */ ut.jsx(Gm, { filePath: a });
  if (o.length === 0)
    return /* @__PURE__ */ ut.jsx(jo, { name: Ku(a), path: a, children: /* @__PURE__ */ ut.jsx("div", { className: "pqv-state", children: "This file has no rows." }) });
  const v = o.length === QA;
  return /* @__PURE__ */ ut.jsx("div", { className: "pqv-root", children: /* @__PURE__ */ ut.jsxs("div", { className: "pqv-card", children: [
    /* @__PURE__ */ ut.jsx("div", { className: "pqv-accentbar" }),
    /* @__PURE__ */ ut.jsxs("div", { className: "pqv-toolbar", children: [
      /* @__PURE__ */ ut.jsxs("div", { className: "pqv-title", children: [
        /* @__PURE__ */ ut.jsx("span", { className: "pqv-name", children: Ku(a) }),
        /* @__PURE__ */ ut.jsx("span", { className: "pqv-path", children: a })
      ] }),
      /* @__PURE__ */ ut.jsxs("div", { className: "pqv-chips", children: [
        /* @__PURE__ */ ut.jsxs("span", { className: "pqv-chip", children: [
          /* @__PURE__ */ ut.jsx("b", { children: Io.format(d.length) }),
          " columns"
        ] }),
        /* @__PURE__ */ ut.jsxs("span", { className: "pqv-chip pqv-chip--accent", children: [
          /* @__PURE__ */ ut.jsx("b", { children: Io.format(o.length) }),
          " ",
          v ? "rows · preview" : "rows"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ ut.jsx("div", { className: "pqv-scroll", children: /* @__PURE__ */ ut.jsxs("table", { className: "pqv-table", children: [
      /* @__PURE__ */ ut.jsx("thead", { children: /* @__PURE__ */ ut.jsx("tr", { children: y.map((g) => /* @__PURE__ */ ut.jsx("th", { className: g.numeric ? "pqv-num" : void 0, children: g.key }, g.key)) }) }),
      /* @__PURE__ */ ut.jsx("tbody", { children: o.map((g, p) => /* @__PURE__ */ ut.jsx("tr", { children: y.map((m) => /* @__PURE__ */ ut.jsx("td", { className: `${m.numeric ? "pqv-num " : ""}${m.numeric ? "pqv-mono" : ""}`.trim(), children: Hm(g[m.key], m.kind) }, m.key)) }, p)) })
    ] }) })
  ] }) });
}
const ku = /* @__PURE__ */ new WeakMap();
function jm(a, f) {
  let o = ku.get(a);
  o || (o = Xh.createRoot(a), ku.set(a, o)), o.render(
    /* @__PURE__ */ ut.jsx(hl.StrictMode, { children: /* @__PURE__ */ ut.jsx(Im, { ...f }) })
  );
}
function Zm(a) {
  const f = ku.get(a);
  f && (f.unmount(), ku.delete(a));
}
export {
  jm as mount,
  Zm as unmount
};

var gr = { exports: {} }, ai = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _d;
function qh() {
  if (_d) return ai;
  _d = 1;
  var a = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function r(c, o, d) {
    var A = null;
    if (d !== void 0 && (A = "" + d), o.key !== void 0 && (A = "" + o.key), "key" in o) {
      d = {};
      for (var g in o)
        g !== "key" && (d[g] = o[g]);
    } else d = o;
    return o = d.ref, {
      $$typeof: a,
      type: c,
      key: A,
      ref: o !== void 0 ? o : null,
      props: d
    };
  }
  return ai.Fragment = f, ai.jsx = r, ai.jsxs = r, ai;
}
var Fd;
function Gh() {
  return Fd || (Fd = 1, gr.exports = qh()), gr.exports;
}
var rt = Gh(), yr = { exports: {} }, ft = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;
function Ih() {
  if (kd) return ft;
  kd = 1;
  var a = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), A = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.activity"), w = Symbol.iterator;
  function O(S) {
    return S === null || typeof S != "object" ? null : (S = w && S[w] || S["@@iterator"], typeof S == "function" ? S : null);
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
  }, R = Object.assign, B = {};
  function z(S, H, V) {
    this.props = S, this.context = H, this.refs = B, this.updater = V || D;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(S, H) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, H, "setState");
  }, z.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = z.prototype;
  function G(S, H, V) {
    this.props = S, this.context = H, this.refs = B, this.updater = V || D;
  }
  var K = G.prototype = new Z();
  K.constructor = G, R(K, z.prototype), K.isPureReactComponent = !0;
  var _ = Array.isArray;
  function j() {
  }
  var I = { H: null, A: null, T: null, S: null }, $ = Object.prototype.hasOwnProperty;
  function dt(S, H, V) {
    var F = V.ref;
    return {
      $$typeof: a,
      type: S,
      key: H,
      ref: F !== void 0 ? F : null,
      props: V
    };
  }
  function bt(S, H) {
    return dt(S.type, H, S.props);
  }
  function wt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }
  function ut(S) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(V) {
      return H[V];
    });
  }
  var Dt = /\/+/g;
  function it(S, H) {
    return typeof S == "object" && S !== null && S.key != null ? ut("" + S.key) : H.toString(36);
  }
  function nt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(j, j) : (S.status = "pending", S.then(
          function(H) {
            S.status === "pending" && (S.status = "fulfilled", S.value = H);
          },
          function(H) {
            S.status === "pending" && (S.status = "rejected", S.reason = H);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function M(S, H, V, F, at) {
    var ct = typeof S;
    (ct === "undefined" || ct === "boolean") && (S = null);
    var J = !1;
    if (S === null) J = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          J = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case a:
            case f:
              J = !0;
              break;
            case p:
              return J = S._init, M(
                J(S._payload),
                H,
                V,
                F,
                at
              );
          }
      }
    if (J)
      return at = at(S), J = F === "" ? "." + it(S, 0) : F, _(at) ? (V = "", J != null && (V = J.replace(Dt, "$&/") + "/"), M(at, H, V, "", function(Ce) {
        return Ce;
      })) : at != null && (wt(at) && (at = bt(
        at,
        V + (at.key == null || S && S.key === at.key ? "" : ("" + at.key).replace(
          Dt,
          "$&/"
        ) + "/") + J
      )), H.push(at)), 1;
    J = 0;
    var Nt = F === "" ? "." : F + ":";
    if (_(S))
      for (var Bt = 0; Bt < S.length; Bt++)
        F = S[Bt], ct = Nt + it(F, Bt), J += M(
          F,
          H,
          V,
          ct,
          at
        );
    else if (Bt = O(S), typeof Bt == "function")
      for (S = Bt.call(S), Bt = 0; !(F = S.next()).done; )
        F = F.value, ct = Nt + it(F, Bt++), J += M(
          F,
          H,
          V,
          ct,
          at
        );
    else if (ct === "object") {
      if (typeof S.then == "function")
        return M(
          nt(S),
          H,
          V,
          F,
          at
        );
      throw H = String(S), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return J;
  }
  function X(S, H, V) {
    if (S == null) return S;
    var F = [], at = 0;
    return M(S, F, "", "", function(ct) {
      return H.call(V, ct, at++);
    }), F;
  }
  function tt(S) {
    if (S._status === -1) {
      var H = S._result;
      H = H(), H.then(
        function(V) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = V);
        },
        function(V) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = V);
        }
      ), S._status === -1 && (S._status = 0, S._result = H);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var mt = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, pt = {
    map: X,
    forEach: function(S, H, V) {
      X(
        S,
        function() {
          H.apply(this, arguments);
        },
        V
      );
    },
    count: function(S) {
      var H = 0;
      return X(S, function() {
        H++;
      }), H;
    },
    toArray: function(S) {
      return X(S, function(H) {
        return H;
      }) || [];
    },
    only: function(S) {
      if (!wt(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return ft.Activity = m, ft.Children = pt, ft.Component = z, ft.Fragment = r, ft.Profiler = o, ft.PureComponent = G, ft.StrictMode = c, ft.Suspense = v, ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, ft.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return I.H.useMemoCache(S);
    }
  }, ft.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, ft.cacheSignal = function() {
    return null;
  }, ft.cloneElement = function(S, H, V) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var F = R({}, S.props), at = S.key;
    if (H != null)
      for (ct in H.key !== void 0 && (at = "" + H.key), H)
        !$.call(H, ct) || ct === "key" || ct === "__self" || ct === "__source" || ct === "ref" && H.ref === void 0 || (F[ct] = H[ct]);
    var ct = arguments.length - 2;
    if (ct === 1) F.children = V;
    else if (1 < ct) {
      for (var J = Array(ct), Nt = 0; Nt < ct; Nt++)
        J[Nt] = arguments[Nt + 2];
      F.children = J;
    }
    return dt(S.type, at, F);
  }, ft.createContext = function(S) {
    return S = {
      $$typeof: A,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: d,
      _context: S
    }, S;
  }, ft.createElement = function(S, H, V) {
    var F, at = {}, ct = null;
    if (H != null)
      for (F in H.key !== void 0 && (ct = "" + H.key), H)
        $.call(H, F) && F !== "key" && F !== "__self" && F !== "__source" && (at[F] = H[F]);
    var J = arguments.length - 2;
    if (J === 1) at.children = V;
    else if (1 < J) {
      for (var Nt = Array(J), Bt = 0; Bt < J; Bt++)
        Nt[Bt] = arguments[Bt + 2];
      at.children = Nt;
    }
    if (S && S.defaultProps)
      for (F in J = S.defaultProps, J)
        at[F] === void 0 && (at[F] = J[F]);
    return dt(S, ct, at);
  }, ft.createRef = function() {
    return { current: null };
  }, ft.forwardRef = function(S) {
    return { $$typeof: g, render: S };
  }, ft.isValidElement = wt, ft.lazy = function(S) {
    return {
      $$typeof: p,
      _payload: { _status: -1, _result: S },
      _init: tt
    };
  }, ft.memo = function(S, H) {
    return {
      $$typeof: y,
      type: S,
      compare: H === void 0 ? null : H
    };
  }, ft.startTransition = function(S) {
    var H = I.T, V = {};
    I.T = V;
    try {
      var F = S(), at = I.S;
      at !== null && at(V, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(j, mt);
    } catch (ct) {
      mt(ct);
    } finally {
      H !== null && V.types !== null && (H.types = V.types), I.T = H;
    }
  }, ft.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, ft.use = function(S) {
    return I.H.use(S);
  }, ft.useActionState = function(S, H, V) {
    return I.H.useActionState(S, H, V);
  }, ft.useCallback = function(S, H) {
    return I.H.useCallback(S, H);
  }, ft.useContext = function(S) {
    return I.H.useContext(S);
  }, ft.useDebugValue = function() {
  }, ft.useDeferredValue = function(S, H) {
    return I.H.useDeferredValue(S, H);
  }, ft.useEffect = function(S, H) {
    return I.H.useEffect(S, H);
  }, ft.useEffectEvent = function(S) {
    return I.H.useEffectEvent(S);
  }, ft.useId = function() {
    return I.H.useId();
  }, ft.useImperativeHandle = function(S, H, V) {
    return I.H.useImperativeHandle(S, H, V);
  }, ft.useInsertionEffect = function(S, H) {
    return I.H.useInsertionEffect(S, H);
  }, ft.useLayoutEffect = function(S, H) {
    return I.H.useLayoutEffect(S, H);
  }, ft.useMemo = function(S, H) {
    return I.H.useMemo(S, H);
  }, ft.useOptimistic = function(S, H) {
    return I.H.useOptimistic(S, H);
  }, ft.useReducer = function(S, H, V) {
    return I.H.useReducer(S, H, V);
  }, ft.useRef = function(S) {
    return I.H.useRef(S);
  }, ft.useState = function(S) {
    return I.H.useState(S);
  }, ft.useSyncExternalStore = function(S, H, V) {
    return I.H.useSyncExternalStore(
      S,
      H,
      V
    );
  }, ft.useTransition = function() {
    return I.H.useTransition();
  }, ft.version = "19.2.7", ft;
}
var Wd;
function jr() {
  return Wd || (Wd = 1, yr.exports = Ih()), yr.exports;
}
var hl = jr(), mr = { exports: {} }, ii = {}, vr = { exports: {} }, pr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pd;
function jh() {
  return Pd || (Pd = 1, (function(a) {
    function f(M, X) {
      var tt = M.length;
      M.push(X);
      t: for (; 0 < tt; ) {
        var mt = tt - 1 >>> 1, pt = M[mt];
        if (0 < o(pt, X))
          M[mt] = X, M[tt] = pt, tt = mt;
        else break t;
      }
    }
    function r(M) {
      return M.length === 0 ? null : M[0];
    }
    function c(M) {
      if (M.length === 0) return null;
      var X = M[0], tt = M.pop();
      if (tt !== X) {
        M[0] = tt;
        t: for (var mt = 0, pt = M.length, S = pt >>> 1; mt < S; ) {
          var H = 2 * (mt + 1) - 1, V = M[H], F = H + 1, at = M[F];
          if (0 > o(V, tt))
            F < pt && 0 > o(at, V) ? (M[mt] = at, M[F] = tt, mt = F) : (M[mt] = V, M[H] = tt, mt = H);
          else if (F < pt && 0 > o(at, tt))
            M[mt] = at, M[F] = tt, mt = F;
          else break t;
        }
      }
      return X;
    }
    function o(M, X) {
      var tt = M.sortIndex - X.sortIndex;
      return tt !== 0 ? tt : M.id - X.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      a.unstable_now = function() {
        return d.now();
      };
    } else {
      var A = Date, g = A.now();
      a.unstable_now = function() {
        return A.now() - g;
      };
    }
    var v = [], y = [], p = 1, m = null, w = 3, O = !1, D = !1, R = !1, B = !1, z = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
    function K(M) {
      for (var X = r(y); X !== null; ) {
        if (X.callback === null) c(y);
        else if (X.startTime <= M)
          c(y), X.sortIndex = X.expirationTime, f(v, X);
        else break;
        X = r(y);
      }
    }
    function _(M) {
      if (R = !1, K(M), !D)
        if (r(v) !== null)
          D = !0, j || (j = !0, ut());
        else {
          var X = r(y);
          X !== null && nt(_, X.startTime - M);
        }
    }
    var j = !1, I = -1, $ = 5, dt = -1;
    function bt() {
      return B ? !0 : !(a.unstable_now() - dt < $);
    }
    function wt() {
      if (B = !1, j) {
        var M = a.unstable_now();
        dt = M;
        var X = !0;
        try {
          t: {
            D = !1, R && (R = !1, Z(I), I = -1), O = !0;
            var tt = w;
            try {
              e: {
                for (K(M), m = r(v); m !== null && !(m.expirationTime > M && bt()); ) {
                  var mt = m.callback;
                  if (typeof mt == "function") {
                    m.callback = null, w = m.priorityLevel;
                    var pt = mt(
                      m.expirationTime <= M
                    );
                    if (M = a.unstable_now(), typeof pt == "function") {
                      m.callback = pt, K(M), X = !0;
                      break e;
                    }
                    m === r(v) && c(v), K(M);
                  } else c(v);
                  m = r(v);
                }
                if (m !== null) X = !0;
                else {
                  var S = r(y);
                  S !== null && nt(
                    _,
                    S.startTime - M
                  ), X = !1;
                }
              }
              break t;
            } finally {
              m = null, w = tt, O = !1;
            }
            X = void 0;
          }
        } finally {
          X ? ut() : j = !1;
        }
      }
    }
    var ut;
    if (typeof G == "function")
      ut = function() {
        G(wt);
      };
    else if (typeof MessageChannel < "u") {
      var Dt = new MessageChannel(), it = Dt.port2;
      Dt.port1.onmessage = wt, ut = function() {
        it.postMessage(null);
      };
    } else
      ut = function() {
        z(wt, 0);
      };
    function nt(M, X) {
      I = z(function() {
        M(a.unstable_now());
      }, X);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, a.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : $ = 0 < M ? Math.floor(1e3 / M) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, a.unstable_next = function(M) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = w;
      }
      var tt = w;
      w = X;
      try {
        return M();
      } finally {
        w = tt;
      }
    }, a.unstable_requestPaint = function() {
      B = !0;
    }, a.unstable_runWithPriority = function(M, X) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var tt = w;
      w = M;
      try {
        return X();
      } finally {
        w = tt;
      }
    }, a.unstable_scheduleCallback = function(M, X, tt) {
      var mt = a.unstable_now();
      switch (typeof tt == "object" && tt !== null ? (tt = tt.delay, tt = typeof tt == "number" && 0 < tt ? mt + tt : mt) : tt = mt, M) {
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
      return pt = tt + pt, M = {
        id: p++,
        callback: X,
        priorityLevel: M,
        startTime: tt,
        expirationTime: pt,
        sortIndex: -1
      }, tt > mt ? (M.sortIndex = tt, f(y, M), r(v) === null && M === r(y) && (R ? (Z(I), I = -1) : R = !0, nt(_, tt - mt))) : (M.sortIndex = pt, f(v, M), D || O || (D = !0, j || (j = !0, ut()))), M;
    }, a.unstable_shouldYield = bt, a.unstable_wrapCallback = function(M) {
      var X = w;
      return function() {
        var tt = w;
        w = X;
        try {
          return M.apply(this, arguments);
        } finally {
          w = tt;
        }
      };
    };
  })(pr)), pr;
}
var $d;
function Zh() {
  return $d || ($d = 1, vr.exports = jh()), vr.exports;
}
var br = { exports: {} }, ue = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t1;
function Vh() {
  if (t1) return ue;
  t1 = 1;
  var a = jr();
  function f(v) {
    var y = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        y += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return "Minified React error #" + v + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var c = {
    d: {
      f: r,
      r: function() {
        throw Error(f(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, o = Symbol.for("react.portal");
  function d(v, y, p) {
    var m = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: m == null ? null : "" + m,
      children: v,
      containerInfo: y,
      implementation: p
    };
  }
  var A = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(v, y) {
    if (v === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, ue.createPortal = function(v, y) {
    var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(f(299));
    return d(v, y, null, p);
  }, ue.flushSync = function(v) {
    var y = A.T, p = c.p;
    try {
      if (A.T = null, c.p = 2, v) return v();
    } finally {
      A.T = y, c.p = p, c.d.f();
    }
  }, ue.preconnect = function(v, y) {
    typeof v == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, c.d.C(v, y));
  }, ue.prefetchDNS = function(v) {
    typeof v == "string" && c.d.D(v);
  }, ue.preinit = function(v, y) {
    if (typeof v == "string" && y && typeof y.as == "string") {
      var p = y.as, m = g(p, y.crossOrigin), w = typeof y.integrity == "string" ? y.integrity : void 0, O = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      p === "style" ? c.d.S(
        v,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: m,
          integrity: w,
          fetchPriority: O
        }
      ) : p === "script" && c.d.X(v, {
        crossOrigin: m,
        integrity: w,
        fetchPriority: O,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, ue.preinitModule = function(v, y) {
    if (typeof v == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var p = g(
            y.as,
            y.crossOrigin
          );
          c.d.M(v, {
            crossOrigin: p,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && c.d.M(v);
  }, ue.preload = function(v, y) {
    if (typeof v == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var p = y.as, m = g(p, y.crossOrigin);
      c.d.L(v, p, {
        crossOrigin: m,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, ue.preloadModule = function(v, y) {
    if (typeof v == "string")
      if (y) {
        var p = g(y.as, y.crossOrigin);
        c.d.m(v, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: p,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else c.d.m(v);
  }, ue.requestFormReset = function(v) {
    c.d.r(v);
  }, ue.unstable_batchedUpdates = function(v, y) {
    return v(y);
  }, ue.useFormState = function(v, y, p) {
    return A.H.useFormState(v, y, p);
  }, ue.useFormStatus = function() {
    return A.H.useHostTransitionStatus();
  }, ue.version = "19.2.7", ue;
}
var e1;
function Xh() {
  if (e1) return br.exports;
  e1 = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (f) {
        console.error(f);
      }
  }
  return a(), br.exports = Vh(), br.exports;
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
var n1;
function Kh() {
  if (n1) return ii;
  n1 = 1;
  var a = Zh(), f = jr(), r = Xh();
  function c(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function d(t) {
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
  function A(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (d(t) !== t)
      throw Error(c(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (e = d(t), e === null) throw Error(c(188));
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
  var m = Object.assign, w = Symbol.for("react.element"), O = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), G = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), dt = Symbol.for("react.activity"), bt = Symbol.for("react.memo_cache_sentinel"), wt = Symbol.iterator;
  function ut(t) {
    return t === null || typeof t != "object" ? null : (t = wt && t[wt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Dt = Symbol.for("react.client.reference");
  function it(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Dt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case R:
        return "Fragment";
      case z:
        return "Profiler";
      case B:
        return "StrictMode";
      case _:
        return "Suspense";
      case j:
        return "SuspenseList";
      case dt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case D:
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
  var nt = Array.isArray, M = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, tt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, mt = [], pt = -1;
  function S(t) {
    return { current: t };
  }
  function H(t) {
    0 > pt || (t.current = mt[pt], mt[pt] = null, pt--);
  }
  function V(t, e) {
    pt++, mt[pt] = t.current, t.current = e;
  }
  var F = S(null), at = S(null), ct = S(null), J = S(null);
  function Nt(t, e) {
    switch (V(ct, e), V(at, t), V(F, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? md(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = md(e), t = vd(e, t);
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
    H(F), V(F, t);
  }
  function Bt() {
    H(F), H(at), H(ct);
  }
  function Ce(t) {
    t.memoizedState !== null && V(J, t);
    var e = F.current, n = vd(e, t.type);
    e !== n && (V(at, t), V(F, n));
  }
  function ye(t) {
    at.current === t && (H(F), H(at)), J.current === t && (H(J), ti._currentValue = tt);
  }
  var Ue, wl;
  function Ve(t) {
    if (Ue === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Ue = e && e[1] || "", wl = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ue + t + wl;
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
                } catch (N) {
                  var U = N;
                }
                Reflect.construct(t, [], q);
              } else {
                try {
                  q.call();
                } catch (N) {
                  U = N;
                }
                t.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                U = N;
              }
              (q = t()) && typeof q.catch == "function" && q.catch(function() {
              });
            }
          } catch (N) {
            if (N && U && typeof N.stack == "string")
              return [N.stack, U.stack];
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
        var b = s.split(`
`), C = h.split(`
`);
        for (i = l = 0; l < b.length && !b[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; i < C.length && !C[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (l === b.length || i === C.length)
          for (l = b.length - 1, i = C.length - 1; 1 <= l && 0 <= i && b[l] !== C[i]; )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (b[l] !== C[i]) {
            if (l !== 1 || i !== 1)
              do
                if (l--, i--, 0 > i || b[l] !== C[i]) {
                  var Q = `
` + b[l].replace(" at new ", " at ");
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
  function El(t, e) {
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
        e += El(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Xe = Object.prototype.hasOwnProperty, Ke = a.unstable_scheduleCallback, vn = a.unstable_cancelCallback, sa = a.unstable_shouldYield, vi = a.unstable_requestPaint, $t = a.unstable_now, Sl = a.unstable_getCurrentPriorityLevel, _r = a.unstable_ImmediatePriority, Fr = a.unstable_UserBlockingPriority, pi = a.unstable_NormalPriority, bA = a.unstable_LowPriority, kr = a.unstable_IdlePriority, wA = a.log, EA = a.unstable_setDisableYieldValue, da = null, ve = null;
  function pn(t) {
    if (typeof wA == "function" && EA(t), ve && typeof ve.setStrictMode == "function")
      try {
        ve.setStrictMode(da, t);
      } catch {
      }
  }
  var pe = Math.clz32 ? Math.clz32 : TA, SA = Math.log, BA = Math.LN2;
  function TA(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (SA(t) / BA | 0) | 0;
  }
  var bi = 256, wi = 262144, Ei = 4194304;
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
  function Si(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var i = 0, u = t.suspendedLanes, s = t.pingedLanes;
    t = t.warmLanes;
    var h = l & 134217727;
    return h !== 0 ? (l = h & ~u, l !== 0 ? i = Fn(l) : (s &= h, s !== 0 ? i = Fn(s) : n || (n = h & ~t, n !== 0 && (i = Fn(n))))) : (h = l & ~u, h !== 0 ? i = Fn(h) : s !== 0 ? i = Fn(s) : n || (n = l & ~t, n !== 0 && (i = Fn(n)))), i === 0 ? 0 : e !== 0 && e !== i && (e & u) === 0 && (u = i & -i, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : i;
  }
  function Aa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function xA(t, e) {
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
  function Wr() {
    var t = Ei;
    return Ei <<= 1, (Ei & 62914560) === 0 && (Ei = 4194304), t;
  }
  function nf(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function ha(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function CA(t, e, n, l, i, u) {
    var s = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var h = t.entanglements, b = t.expirationTimes, C = t.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
      var Q = 31 - pe(n), q = 1 << Q;
      h[Q] = 0, b[Q] = -1;
      var U = C[Q];
      if (U !== null)
        for (C[Q] = null, Q = 0; Q < U.length; Q++) {
          var N = U[Q];
          N !== null && (N.lane &= -536870913);
        }
      n &= ~q;
    }
    l !== 0 && Pr(t, l, 0), u !== 0 && i === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(s & ~e));
  }
  function Pr(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - pe(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 261930;
  }
  function $r(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var l = 31 - pe(n), i = 1 << l;
      i & e | t[l] & e && (t[l] |= e), n &= ~i;
    }
  }
  function to(t, e) {
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
  function eo() {
    var t = X.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Id(t.type));
  }
  function no(t, e) {
    var n = X.p;
    try {
      return X.p = t, e();
    } finally {
      X.p = n;
    }
  }
  var bn = Math.random().toString(36).slice(2), te = "__reactFiber$" + bn, re = "__reactProps$" + bn, Bl = "__reactContainer$" + bn, uf = "__reactEvents$" + bn, UA = "__reactListeners$" + bn, zA = "__reactHandles$" + bn, lo = "__reactResources$" + bn, ga = "__reactMarker$" + bn;
  function ff(t) {
    delete t[te], delete t[re], delete t[uf], delete t[UA], delete t[zA];
  }
  function Tl(t) {
    var e = t[te];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[Bl] || n[te]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Td(t); t !== null; ) {
            if (n = t[te]) return n;
            t = Td(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function xl(t) {
    if (t = t[te] || t[Bl]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ya(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(c(33));
  }
  function Cl(t) {
    var e = t[lo];
    return e || (e = t[lo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Wt(t) {
    t[ga] = !0;
  }
  var ao = /* @__PURE__ */ new Set(), io = {};
  function kn(t, e) {
    Ul(t, e), Ul(t + "Capture", e);
  }
  function Ul(t, e) {
    for (io[t] = e, t = 0; t < e.length; t++)
      ao.add(e[t]);
  }
  var MA = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), uo = {}, fo = {};
  function DA(t) {
    return Xe.call(fo, t) ? !0 : Xe.call(uo, t) ? !1 : MA.test(t) ? fo[t] = !0 : (uo[t] = !0, !1);
  }
  function Bi(t, e, n) {
    if (DA(e))
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
  function ze(t) {
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
  function co(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function OA(t, e, n) {
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
      var e = co(t) ? "checked" : "value";
      t._valueTracker = OA(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function ro(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), l = "";
    return t && (l = co(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== n ? (e.setValue(t), !0) : !1;
  }
  function xi(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var NA = /[\n"\\]/g;
  function Me(t) {
    return t.replace(
      NA,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function rf(t, e, n, l, i, u, s, h) {
    t.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"), e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ze(e)) : t.value !== "" + ze(e) && (t.value = "" + ze(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"), e != null ? of(t, s, ze(e)) : n != null ? of(t, s, ze(n)) : l != null && t.removeAttribute("value"), i == null && u != null && (t.defaultChecked = !!u), i != null && (t.checked = i && typeof i != "function" && typeof i != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.name = "" + ze(h) : t.removeAttribute("name");
  }
  function oo(t, e, n, l, i, u, s, h) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        cf(t);
        return;
      }
      n = n != null ? "" + ze(n) : "", e = e != null ? "" + ze(e) : n, h || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? i, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = h ? t.checked : !!l, t.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.name = s), cf(t);
  }
  function of(t, e, n) {
    e === "number" && xi(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function zl(t, e, n, l) {
    if (t = t.options, e) {
      e = {};
      for (var i = 0; i < n.length; i++)
        e["$" + n[i]] = !0;
      for (n = 0; n < t.length; n++)
        i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + ze(n), e = null, i = 0; i < t.length; i++) {
        if (t[i].value === n) {
          t[i].selected = !0, l && (t[i].defaultSelected = !0);
          return;
        }
        e !== null || t[i].disabled || (e = t[i]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function so(t, e, n) {
    if (e != null && (e = "" + ze(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + ze(n) : "";
  }
  function Ao(t, e, n, l) {
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
    n = ze(e), t.defaultValue = n, l = t.textContent, l === n && l !== "" && l !== null && (t.value = l), cf(t);
  }
  function Ml(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var RA = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ho(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || RA.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function go(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(c(62));
    if (t = t.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var i in e)
        l = e[i], e.hasOwnProperty(i) && n[i] !== l && ho(t, i, l);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && ho(t, u, e[u]);
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
  var QA = /* @__PURE__ */ new Map([
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
  ]), YA = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ci(t) {
    return YA.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function tn() {
  }
  var df = null;
  function Af(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Dl = null, Ol = null;
  function yo(t) {
    var e = xl(t);
    if (e && (t = e.stateNode)) {
      var n = t[re] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (rf(
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
              'input[name="' + Me(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var i = l[re] || null;
                if (!i) throw Error(c(90));
                rf(
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
              l = n[e], l.form === t.form && ro(l);
          }
          break t;
        case "textarea":
          so(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && zl(t, !!n.multiple, e, !1);
      }
    }
  }
  var hf = !1;
  function mo(t, e, n) {
    if (hf) return t(e, n);
    hf = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (hf = !1, (Dl !== null || Ol !== null) && (hu(), Dl && (e = Dl, t = Ol, Ol = Dl = null, yo(e), t)))
        for (e = 0; e < t.length; e++) yo(t[e]);
    }
  }
  function ma(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[re] || null;
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
  var en = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), gf = !1;
  if (en)
    try {
      var va = {};
      Object.defineProperty(va, "passive", {
        get: function() {
          gf = !0;
        }
      }), window.addEventListener("test", va, va), window.removeEventListener("test", va, va);
    } catch {
      gf = !1;
    }
  var wn = null, yf = null, Ui = null;
  function vo() {
    if (Ui) return Ui;
    var t, e = yf, n = e.length, l, i = "value" in wn ? wn.value : wn.textContent, u = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++) ;
    var s = n - t;
    for (l = 1; l <= s && e[n - l] === i[u - l]; l++) ;
    return Ui = i.slice(t, 1 < l ? 1 - l : void 0);
  }
  function zi(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Mi() {
    return !0;
  }
  function po() {
    return !1;
  }
  function oe(t) {
    function e(n, l, i, u, s) {
      this._reactName = n, this._targetInst = i, this.type = l, this.nativeEvent = u, this.target = s, this.currentTarget = null;
      for (var h in t)
        t.hasOwnProperty(h) && (n = t[h], this[h] = n ? n(u) : u[h]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Mi : po, this.isPropagationStopped = po, this;
    }
    return m(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Mi);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Mi);
      },
      persist: function() {
      },
      isPersistent: Mi
    }), e;
  }
  var Wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Di = oe(Wn), pa = m({}, Wn, { view: 0, detail: 0 }), LA = oe(pa), mf, vf, ba, Oi = m({}, pa, {
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
    getModifierState: bf,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ba && (ba && t.type === "mousemove" ? (mf = t.screenX - ba.screenX, vf = t.screenY - ba.screenY) : vf = mf = 0, ba = t), mf);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : vf;
    }
  }), bo = oe(Oi), HA = m({}, Oi, { dataTransfer: 0 }), qA = oe(HA), GA = m({}, pa, { relatedTarget: 0 }), pf = oe(GA), IA = m({}, Wn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jA = oe(IA), ZA = m({}, Wn, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), VA = oe(ZA), XA = m({}, Wn, { data: 0 }), wo = oe(XA), KA = {
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
  }, JA = {
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
  }, _A = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function FA(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = _A[t]) ? !!e[t] : !1;
  }
  function bf() {
    return FA;
  }
  var kA = m({}, pa, {
    key: function(t) {
      if (t.key) {
        var e = KA[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = zi(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? JA[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bf,
    charCode: function(t) {
      return t.type === "keypress" ? zi(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? zi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), WA = oe(kA), PA = m({}, Oi, {
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
  }), Eo = oe(PA), $A = m({}, pa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bf
  }), t2 = oe($A), e2 = m({}, Wn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), n2 = oe(e2), l2 = m({}, Oi, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), a2 = oe(l2), i2 = m({}, Wn, {
    newState: 0,
    oldState: 0
  }), u2 = oe(i2), f2 = [9, 13, 27, 32], wf = en && "CompositionEvent" in window, wa = null;
  en && "documentMode" in document && (wa = document.documentMode);
  var c2 = en && "TextEvent" in window && !wa, So = en && (!wf || wa && 8 < wa && 11 >= wa), Bo = " ", To = !1;
  function xo(t, e) {
    switch (t) {
      case "keyup":
        return f2.indexOf(e.keyCode) !== -1;
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
  function Co(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Nl = !1;
  function r2(t, e) {
    switch (t) {
      case "compositionend":
        return Co(e);
      case "keypress":
        return e.which !== 32 ? null : (To = !0, Bo);
      case "textInput":
        return t = e.data, t === Bo && To ? null : t;
      default:
        return null;
    }
  }
  function o2(t, e) {
    if (Nl)
      return t === "compositionend" || !wf && xo(t, e) ? (t = vo(), Ui = yf = wn = null, Nl = !1, t) : null;
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
        return So && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var s2 = {
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
  function Uo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!s2[t.type] : e === "textarea";
  }
  function zo(t, e, n, l) {
    Dl ? Ol ? Ol.push(l) : Ol = [l] : Dl = l, e = wu(e, "onChange"), 0 < e.length && (n = new Di(
      "onChange",
      "change",
      null,
      n,
      l
    ), t.push({ event: n, listeners: e }));
  }
  var Ea = null, Sa = null;
  function d2(t) {
    sd(t, 0);
  }
  function Ni(t) {
    var e = ya(t);
    if (ro(e)) return t;
  }
  function Mo(t, e) {
    if (t === "change") return e;
  }
  var Do = !1;
  if (en) {
    var Ef;
    if (en) {
      var Sf = "oninput" in document;
      if (!Sf) {
        var Oo = document.createElement("div");
        Oo.setAttribute("oninput", "return;"), Sf = typeof Oo.oninput == "function";
      }
      Ef = Sf;
    } else Ef = !1;
    Do = Ef && (!document.documentMode || 9 < document.documentMode);
  }
  function No() {
    Ea && (Ea.detachEvent("onpropertychange", Ro), Sa = Ea = null);
  }
  function Ro(t) {
    if (t.propertyName === "value" && Ni(Sa)) {
      var e = [];
      zo(
        e,
        Sa,
        t,
        Af(t)
      ), mo(d2, e);
    }
  }
  function A2(t, e, n) {
    t === "focusin" ? (No(), Ea = e, Sa = n, Ea.attachEvent("onpropertychange", Ro)) : t === "focusout" && No();
  }
  function h2(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ni(Sa);
  }
  function g2(t, e) {
    if (t === "click") return Ni(e);
  }
  function y2(t, e) {
    if (t === "input" || t === "change")
      return Ni(e);
  }
  function m2(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var be = typeof Object.is == "function" ? Object.is : m2;
  function Ba(t, e) {
    if (be(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var i = n[l];
      if (!Xe.call(e, i) || !be(t[i], e[i]))
        return !1;
    }
    return !0;
  }
  function Qo(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Yo(t, e) {
    var n = Qo(t);
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
      n = Qo(n);
    }
  }
  function Lo(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Lo(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Ho(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = xi(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = xi(t.document);
    }
    return e;
  }
  function Bf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var v2 = en && "documentMode" in document && 11 >= document.documentMode, Rl = null, Tf = null, Ta = null, xf = !1;
  function qo(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    xf || Rl == null || Rl !== xi(l) || (l = Rl, "selectionStart" in l && Bf(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ta && Ba(Ta, l) || (Ta = l, l = wu(Tf, "onSelect"), 0 < l.length && (e = new Di(
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
  }, Cf = {}, Go = {};
  en && (Go = document.createElement("div").style, "AnimationEvent" in window || (delete Ql.animationend.animation, delete Ql.animationiteration.animation, delete Ql.animationstart.animation), "TransitionEvent" in window || delete Ql.transitionend.transition);
  function $n(t) {
    if (Cf[t]) return Cf[t];
    if (!Ql[t]) return t;
    var e = Ql[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Go)
        return Cf[t] = e[n];
    return t;
  }
  var Io = $n("animationend"), jo = $n("animationiteration"), Zo = $n("animationstart"), p2 = $n("transitionrun"), b2 = $n("transitionstart"), w2 = $n("transitioncancel"), Vo = $n("transitionend"), Xo = /* @__PURE__ */ new Map(), Uf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Uf.push("scrollEnd");
  function qe(t, e) {
    Xo.set(t, e), kn(e, [t]);
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
  }, De = [], Yl = 0, zf = 0;
  function Qi() {
    for (var t = Yl, e = zf = Yl = 0; e < t; ) {
      var n = De[e];
      De[e++] = null;
      var l = De[e];
      De[e++] = null;
      var i = De[e];
      De[e++] = null;
      var u = De[e];
      if (De[e++] = null, l !== null && i !== null) {
        var s = l.pending;
        s === null ? i.next = i : (i.next = s.next, s.next = i), l.pending = i;
      }
      u !== 0 && Ko(n, i, u);
    }
  }
  function Yi(t, e, n, l) {
    De[Yl++] = t, De[Yl++] = e, De[Yl++] = n, De[Yl++] = l, zf |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function Mf(t, e, n, l) {
    return Yi(t, e, n, l), Li(t);
  }
  function tl(t, e) {
    return Yi(t, null, null, e), Li(t);
  }
  function Ko(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var i = !1, u = t.return; u !== null; )
      u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (i = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, i && e !== null && (i = 31 - pe(n), t = u.hiddenUpdates, l = t[i], l === null ? t[i] = [e] : l.push(e), e.lane = n | 536870912), u) : null;
  }
  function Li(t) {
    if (50 < Ja)
      throw Ja = 0, qc = null, Error(c(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ll = {};
  function E2(t, e, n, l) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function we(t, e, n, l) {
    return new E2(t, e, n, l);
  }
  function Df(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function nn(t, e) {
    var n = t.alternate;
    return n === null ? (n = we(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Jo(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Hi(t, e, n, l, i, u) {
    var s = 0;
    if (l = t, typeof t == "function") Df(t) && (s = 1);
    else if (typeof t == "string")
      s = Ch(
        t,
        n,
        F.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case dt:
          return t = we(31, n, e, i), t.elementType = dt, t.lanes = u, t;
        case R:
          return el(n.children, i, u, e);
        case B:
          s = 8, i |= 24;
          break;
        case z:
          return t = we(12, n, e, i | 2), t.elementType = z, t.lanes = u, t;
        case _:
          return t = we(13, n, e, i), t.elementType = _, t.lanes = u, t;
        case j:
          return t = we(19, n, e, i), t.elementType = j, t.lanes = u, t;
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
    return e = we(s, n, e, i), e.elementType = t, e.type = l, e.lanes = u, e;
  }
  function el(t, e, n, l) {
    return t = we(7, t, l, e), t.lanes = n, t;
  }
  function Of(t, e, n) {
    return t = we(6, t, null, e), t.lanes = n, t;
  }
  function _o(t) {
    var e = we(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Nf(t, e, n) {
    return e = we(
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
  var Fo = /* @__PURE__ */ new WeakMap();
  function Oe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Fo.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: me(e)
      }, Fo.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: me(e)
    };
  }
  var Hl = [], ql = 0, qi = null, xa = 0, Ne = [], Re = 0, En = null, Je = 1, _e = "";
  function ln(t, e) {
    Hl[ql++] = xa, Hl[ql++] = qi, qi = t, xa = e;
  }
  function ko(t, e, n) {
    Ne[Re++] = Je, Ne[Re++] = _e, Ne[Re++] = En, En = t;
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
    t.return !== null && (ln(t, 1), ko(t, 1, 0));
  }
  function Qf(t) {
    for (; t === qi; )
      qi = Hl[--ql], Hl[ql] = null, xa = Hl[--ql], Hl[ql] = null;
    for (; t === En; )
      En = Ne[--Re], Ne[Re] = null, _e = Ne[--Re], Ne[Re] = null, Je = Ne[--Re], Ne[Re] = null;
  }
  function Wo(t, e) {
    Ne[Re++] = Je, Ne[Re++] = _e, Ne[Re++] = En, Je = e.id, _e = e.overflow, En = t;
  }
  var ee = null, Rt = null, vt = !1, Sn = null, Qe = !1, Yf = Error(c(519));
  function Bn(t) {
    var e = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ca(Oe(e, t)), Yf;
  }
  function Po(t) {
    var e = t.stateNode, n = t.type, l = t.memoizedProps;
    switch (e[te] = t, e[re] = l, n) {
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
        ht("invalid", e), oo(
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
        ht("invalid", e), Ao(e, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === !0 || gd(e.textContent, n) ? (l.popover != null && (ht("beforetoggle", e), ht("toggle", e)), l.onScroll != null && ht("scroll", e), l.onScrollEnd != null && ht("scrollend", e), l.onClick != null && (e.onclick = tn), e = !0) : e = !1, e || Bn(t, !0);
  }
  function $o(t) {
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
    if (!vt) return $o(t), vt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || tr(t.type, t.memoizedProps)), n = !n), n && Rt && Bn(t), $o(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Rt = Bd(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Rt = Bd(t);
    } else
      e === 27 ? (e = Rt, Hn(t.type) ? (t = ir, ir = null, Rt = t) : Rt = e) : Rt = ee ? Le(t.stateNode.nextSibling) : null;
    return !0;
  }
  function nl() {
    Rt = ee = null, vt = !1;
  }
  function Lf() {
    var t = Sn;
    return t !== null && (he === null ? he = t : he.push.apply(
      he,
      t
    ), Sn = null), t;
  }
  function Ca(t) {
    Sn === null ? Sn = [t] : Sn.push(t);
  }
  var Hf = S(null), ll = null, an = null;
  function Tn(t, e, n) {
    V(Hf, e._currentValue), e._currentValue = n;
  }
  function un(t) {
    t._currentValue = Hf.current, H(Hf);
  }
  function qf(t, e, n) {
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
          for (var b = 0; b < e.length; b++)
            if (h.context === e[b]) {
              u.lanes |= n, h = u.alternate, h !== null && (h.lanes |= n), qf(
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
        s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), qf(s, n, t), s = null;
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
          be(i.pendingProps.value, s.value) || (t !== null ? t.push(h) : t = [h]);
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
      if (!be(
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
  var S2 = typeof AbortController < "u" ? AbortController : function() {
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
  }, B2 = a.unstable_scheduleCallback, T2 = a.unstable_NormalPriority, Vt = {
    $$typeof: G,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function If() {
    return {
      controller: new S2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ua(t) {
    t.refCount--, t.refCount === 0 && B2(T2, function() {
      t.controller.abort();
    });
  }
  var za = null, jf = 0, jl = 0, Zl = null;
  function x2(t, e) {
    if (za === null) {
      var n = za = [];
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
    if (--jf === 0 && za !== null) {
      Zl !== null && (Zl.status = "fulfilled");
      var t = za;
      za = null, jl = 0, Zl = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function C2(t, e) {
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
  var ns = M.S;
  M.S = function(t, e) {
    q0 = $t(), typeof e == "object" && e !== null && typeof e.then == "function" && x2(t, e), ns !== null && ns(t, e);
  };
  var il = S(null);
  function Zf() {
    var t = il.current;
    return t !== null ? t : Ot.pooledCache;
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
          if (t = Ot, t !== null && 100 < t.shellSuspendCounter)
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
  var Xl = null, Ma = 0;
  function Xi(t) {
    var e = Ma;
    return Ma += 1, Xl === null && (Xl = []), is(Xl, t, e);
  }
  function Da(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ki(t, e) {
    throw e.$$typeof === w ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(
      c(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function cs(t) {
    function e(T, E) {
      if (t) {
        var x = T.deletions;
        x === null ? (T.deletions = [E], T.flags |= 16) : x.push(E);
      }
    }
    function n(T, E) {
      if (!t) return null;
      for (; E !== null; )
        e(T, E), E = E.sibling;
      return null;
    }
    function l(T) {
      for (var E = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? E.set(T.key, T) : E.set(T.index, T), T = T.sibling;
      return E;
    }
    function i(T, E) {
      return T = nn(T, E), T.index = 0, T.sibling = null, T;
    }
    function u(T, E, x) {
      return T.index = x, t ? (x = T.alternate, x !== null ? (x = x.index, x < E ? (T.flags |= 67108866, E) : x) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
    }
    function s(T) {
      return t && T.alternate === null && (T.flags |= 67108866), T;
    }
    function h(T, E, x, L) {
      return E === null || E.tag !== 6 ? (E = Of(x, T.mode, L), E.return = T, E) : (E = i(E, x), E.return = T, E);
    }
    function b(T, E, x, L) {
      var et = x.type;
      return et === R ? Q(
        T,
        E,
        x.props.children,
        L,
        x.key
      ) : E !== null && (E.elementType === et || typeof et == "object" && et !== null && et.$$typeof === $ && ul(et) === E.type) ? (E = i(E, x.props), Da(E, x), E.return = T, E) : (E = Hi(
        x.type,
        x.key,
        x.props,
        null,
        T.mode,
        L
      ), Da(E, x), E.return = T, E);
    }
    function C(T, E, x, L) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== x.containerInfo || E.stateNode.implementation !== x.implementation ? (E = Nf(x, T.mode, L), E.return = T, E) : (E = i(E, x.children || []), E.return = T, E);
    }
    function Q(T, E, x, L, et) {
      return E === null || E.tag !== 7 ? (E = el(
        x,
        T.mode,
        L,
        et
      ), E.return = T, E) : (E = i(E, x), E.return = T, E);
    }
    function q(T, E, x) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Of(
          "" + E,
          T.mode,
          x
        ), E.return = T, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case O:
            return x = Hi(
              E.type,
              E.key,
              E.props,
              null,
              T.mode,
              x
            ), Da(x, E), x.return = T, x;
          case D:
            return E = Nf(
              E,
              T.mode,
              x
            ), E.return = T, E;
          case $:
            return E = ul(E), q(T, E, x);
        }
        if (nt(E) || ut(E))
          return E = el(
            E,
            T.mode,
            x,
            null
          ), E.return = T, E;
        if (typeof E.then == "function")
          return q(T, Xi(E), x);
        if (E.$$typeof === G)
          return q(
            T,
            Ii(T, E),
            x
          );
        Ki(T, E);
      }
      return null;
    }
    function U(T, E, x, L) {
      var et = E !== null ? E.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return et !== null ? null : h(T, E, "" + x, L);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case O:
            return x.key === et ? b(T, E, x, L) : null;
          case D:
            return x.key === et ? C(T, E, x, L) : null;
          case $:
            return x = ul(x), U(T, E, x, L);
        }
        if (nt(x) || ut(x))
          return et !== null ? null : Q(T, E, x, L, null);
        if (typeof x.then == "function")
          return U(
            T,
            E,
            Xi(x),
            L
          );
        if (x.$$typeof === G)
          return U(
            T,
            E,
            Ii(T, x),
            L
          );
        Ki(T, x);
      }
      return null;
    }
    function N(T, E, x, L, et) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return T = T.get(x) || null, h(E, T, "" + L, et);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case O:
            return T = T.get(
              L.key === null ? x : L.key
            ) || null, b(E, T, L, et);
          case D:
            return T = T.get(
              L.key === null ? x : L.key
            ) || null, C(E, T, L, et);
          case $:
            return L = ul(L), N(
              T,
              E,
              x,
              L,
              et
            );
        }
        if (nt(L) || ut(L))
          return T = T.get(x) || null, Q(E, T, L, et, null);
        if (typeof L.then == "function")
          return N(
            T,
            E,
            x,
            Xi(L),
            et
          );
        if (L.$$typeof === G)
          return N(
            T,
            E,
            x,
            Ii(E, L),
            et
          );
        Ki(E, L);
      }
      return null;
    }
    function k(T, E, x, L) {
      for (var et = null, Et = null, P = E, st = E = 0, yt = null; P !== null && st < x.length; st++) {
        P.index > st ? (yt = P, P = null) : yt = P.sibling;
        var St = U(
          T,
          P,
          x[st],
          L
        );
        if (St === null) {
          P === null && (P = yt);
          break;
        }
        t && P && St.alternate === null && e(T, P), E = u(St, E, st), Et === null ? et = St : Et.sibling = St, Et = St, P = yt;
      }
      if (st === x.length)
        return n(T, P), vt && ln(T, st), et;
      if (P === null) {
        for (; st < x.length; st++)
          P = q(T, x[st], L), P !== null && (E = u(
            P,
            E,
            st
          ), Et === null ? et = P : Et.sibling = P, Et = P);
        return vt && ln(T, st), et;
      }
      for (P = l(P); st < x.length; st++)
        yt = N(
          P,
          T,
          st,
          x[st],
          L
        ), yt !== null && (t && yt.alternate !== null && P.delete(
          yt.key === null ? st : yt.key
        ), E = u(
          yt,
          E,
          st
        ), Et === null ? et = yt : Et.sibling = yt, Et = yt);
      return t && P.forEach(function(Zn) {
        return e(T, Zn);
      }), vt && ln(T, st), et;
    }
    function lt(T, E, x, L) {
      if (x == null) throw Error(c(151));
      for (var et = null, Et = null, P = E, st = E = 0, yt = null, St = x.next(); P !== null && !St.done; st++, St = x.next()) {
        P.index > st ? (yt = P, P = null) : yt = P.sibling;
        var Zn = U(T, P, St.value, L);
        if (Zn === null) {
          P === null && (P = yt);
          break;
        }
        t && P && Zn.alternate === null && e(T, P), E = u(Zn, E, st), Et === null ? et = Zn : Et.sibling = Zn, Et = Zn, P = yt;
      }
      if (St.done)
        return n(T, P), vt && ln(T, st), et;
      if (P === null) {
        for (; !St.done; st++, St = x.next())
          St = q(T, St.value, L), St !== null && (E = u(St, E, st), Et === null ? et = St : Et.sibling = St, Et = St);
        return vt && ln(T, st), et;
      }
      for (P = l(P); !St.done; st++, St = x.next())
        St = N(P, T, st, St.value, L), St !== null && (t && St.alternate !== null && P.delete(St.key === null ? st : St.key), E = u(St, E, st), Et === null ? et = St : Et.sibling = St, Et = St);
      return t && P.forEach(function(Hh) {
        return e(T, Hh);
      }), vt && ln(T, st), et;
    }
    function Mt(T, E, x, L) {
      if (typeof x == "object" && x !== null && x.type === R && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case O:
            t: {
              for (var et = x.key; E !== null; ) {
                if (E.key === et) {
                  if (et = x.type, et === R) {
                    if (E.tag === 7) {
                      n(
                        T,
                        E.sibling
                      ), L = i(
                        E,
                        x.props.children
                      ), L.return = T, T = L;
                      break t;
                    }
                  } else if (E.elementType === et || typeof et == "object" && et !== null && et.$$typeof === $ && ul(et) === E.type) {
                    n(
                      T,
                      E.sibling
                    ), L = i(E, x.props), Da(L, x), L.return = T, T = L;
                    break t;
                  }
                  n(T, E);
                  break;
                } else e(T, E);
                E = E.sibling;
              }
              x.type === R ? (L = el(
                x.props.children,
                T.mode,
                L,
                x.key
              ), L.return = T, T = L) : (L = Hi(
                x.type,
                x.key,
                x.props,
                null,
                T.mode,
                L
              ), Da(L, x), L.return = T, T = L);
            }
            return s(T);
          case D:
            t: {
              for (et = x.key; E !== null; ) {
                if (E.key === et)
                  if (E.tag === 4 && E.stateNode.containerInfo === x.containerInfo && E.stateNode.implementation === x.implementation) {
                    n(
                      T,
                      E.sibling
                    ), L = i(E, x.children || []), L.return = T, T = L;
                    break t;
                  } else {
                    n(T, E);
                    break;
                  }
                else e(T, E);
                E = E.sibling;
              }
              L = Nf(x, T.mode, L), L.return = T, T = L;
            }
            return s(T);
          case $:
            return x = ul(x), Mt(
              T,
              E,
              x,
              L
            );
        }
        if (nt(x))
          return k(
            T,
            E,
            x,
            L
          );
        if (ut(x)) {
          if (et = ut(x), typeof et != "function") throw Error(c(150));
          return x = et.call(x), lt(
            T,
            E,
            x,
            L
          );
        }
        if (typeof x.then == "function")
          return Mt(
            T,
            E,
            Xi(x),
            L
          );
        if (x.$$typeof === G)
          return Mt(
            T,
            E,
            Ii(T, x),
            L
          );
        Ki(T, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, E !== null && E.tag === 6 ? (n(T, E.sibling), L = i(E, x), L.return = T, T = L) : (n(T, E), L = Of(x, T.mode, L), L.return = T, T = L), s(T)) : n(T, E);
    }
    return function(T, E, x, L) {
      try {
        Ma = 0;
        var et = Mt(
          T,
          E,
          x,
          L
        );
        return Xl = null, et;
      } catch (P) {
        if (P === Vl || P === Zi) throw P;
        var Et = we(29, P, null, T.mode);
        return Et.lanes = L, Et.return = T, Et;
      } finally {
      }
    };
  }
  var cl = cs(!0), rs = cs(!1), xn = !1;
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
  function Cn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Un(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Tt & 2) !== 0) {
      var i = l.pending;
      return i === null ? e.next = e : (e.next = i.next, i.next = e), l.pending = e, e = Li(t), Ko(t, null, n), e;
    }
    return Yi(t, l, e, n), Li(t);
  }
  function Oa(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, $r(t, n);
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
  function Na() {
    if (_f) {
      var t = Zl;
      if (t !== null) throw t;
    }
  }
  function Ra(t, e, n, l) {
    _f = !1;
    var i = t.updateQueue;
    xn = !1;
    var u = i.firstBaseUpdate, s = i.lastBaseUpdate, h = i.shared.pending;
    if (h !== null) {
      i.shared.pending = null;
      var b = h, C = b.next;
      b.next = null, s === null ? u = C : s.next = C, s = b;
      var Q = t.alternate;
      Q !== null && (Q = Q.updateQueue, h = Q.lastBaseUpdate, h !== s && (h === null ? Q.firstBaseUpdate = C : h.next = C, Q.lastBaseUpdate = b));
    }
    if (u !== null) {
      var q = i.baseState;
      s = 0, Q = C = b = null, h = u;
      do {
        var U = h.lane & -536870913, N = U !== h.lane;
        if (N ? (gt & U) === U : (l & U) === U) {
          U !== 0 && U === jl && (_f = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          t: {
            var k = t, lt = h;
            U = e;
            var Mt = n;
            switch (lt.tag) {
              case 1:
                if (k = lt.payload, typeof k == "function") {
                  q = k.call(Mt, q, U);
                  break t;
                }
                q = k;
                break t;
              case 3:
                k.flags = k.flags & -65537 | 128;
              case 0:
                if (k = lt.payload, U = typeof k == "function" ? k.call(Mt, q, U) : k, U == null) break t;
                q = m({}, q, U);
                break t;
              case 2:
                xn = !0;
            }
          }
          U = h.callback, U !== null && (t.flags |= 64, N && (t.flags |= 8192), N = i.callbacks, N === null ? i.callbacks = [U] : N.push(U));
        } else
          N = {
            lane: U,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, Q === null ? (C = Q = N, b = q) : Q = Q.next = N, s |= U;
        if (h = h.next, h === null) {
          if (h = i.shared.pending, h === null)
            break;
          N = h, h = N.next, N.next = null, i.lastBaseUpdate = N, i.shared.pending = null;
        }
      } while (!0);
      Q === null && (b = q), i.baseState = b, i.firstBaseUpdate = C, i.lastBaseUpdate = Q, u === null && (i.shared.lanes = 0), Nn |= s, t.lanes = s, t.memoizedState = q;
    }
  }
  function os(t, e) {
    if (typeof t != "function")
      throw Error(c(191, t));
    t.call(e);
  }
  function ss(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        os(n[t], e);
  }
  var Kl = S(null), Ji = S(0);
  function ds(t, e) {
    t = gn, V(Ji, t), V(Kl, e), gn = t | e.baseLanes;
  }
  function Ff() {
    V(Ji, gn), V(Kl, Kl.current);
  }
  function kf() {
    gn = Ji.current, H(Kl), H(Ji);
  }
  var Ee = S(null), Ye = null;
  function zn(t) {
    var e = t.alternate;
    V(Gt, Gt.current & 1), V(Ee, t), Ye === null && (e === null || Kl.current !== null || e.memoizedState !== null) && (Ye = t);
  }
  function Wf(t) {
    V(Gt, Gt.current), V(Ee, t), Ye === null && (Ye = t);
  }
  function As(t) {
    t.tag === 22 ? (V(Gt, Gt.current), V(Ee, t), Ye === null && (Ye = t)) : Mn();
  }
  function Mn() {
    V(Gt, Gt.current), V(Ee, Ee.current);
  }
  function Se(t) {
    H(Ee), Ye === t && (Ye = null), H(Gt);
  }
  var Gt = S(0);
  function _i(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || lr(n) || ar(n)))
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
  var fn = 0, ot = null, Ut = null, Xt = null, Fi = !1, Jl = !1, rl = !1, ki = 0, Qa = 0, _l = null, U2 = 0;
  function Ht() {
    throw Error(c(321));
  }
  function Pf(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!be(t[n], e[n])) return !1;
    return !0;
  }
  function $f(t, e, n, l, i, u) {
    return fn = u, ot = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = t === null || t.memoizedState === null ? ks : hc, rl = !1, u = n(l, i), rl = !1, Jl && (u = gs(
      e,
      n,
      l,
      i
    )), hs(t), u;
  }
  function hs(t) {
    M.H = Ha;
    var e = Ut !== null && Ut.next !== null;
    if (fn = 0, Xt = Ut = ot = null, Fi = !1, Qa = 0, _l = null, e) throw Error(c(300));
    t === null || Kt || (t = t.dependencies, t !== null && Gi(t) && (Kt = !0));
  }
  function gs(t, e, n, l) {
    ot = t;
    var i = 0;
    do {
      if (Jl && (_l = null), Qa = 0, Jl = !1, 25 <= i) throw Error(c(301));
      if (i += 1, Xt = Ut = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      M.H = Ws, u = e(n, l);
    } while (Jl);
    return u;
  }
  function z2() {
    var t = M.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Ya(e) : e, t = t.useState()[0], (Ut !== null ? Ut.memoizedState : null) !== t && (ot.flags |= 1024), e;
  }
  function tc() {
    var t = ki !== 0;
    return ki = 0, t;
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
    fn = 0, Xt = Ut = ot = null, Jl = !1, Qa = ki = 0, _l = null;
  }
  function fe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Xt === null ? ot.memoizedState = Xt = t : Xt = Xt.next = t, Xt;
  }
  function It() {
    if (Ut === null) {
      var t = ot.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ut.next;
    var e = Xt === null ? ot.memoizedState : Xt.next;
    if (e !== null)
      Xt = e, Ut = t;
    else {
      if (t === null)
        throw ot.alternate === null ? Error(c(467)) : Error(c(310));
      Ut = t, t = {
        memoizedState: Ut.memoizedState,
        baseState: Ut.baseState,
        baseQueue: Ut.baseQueue,
        queue: Ut.queue,
        next: null
      }, Xt === null ? ot.memoizedState = Xt = t : Xt = Xt.next = t;
    }
    return Xt;
  }
  function Wi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ya(t) {
    var e = Qa;
    return Qa += 1, _l === null && (_l = []), t = is(_l, t, e), e = ot, (Xt === null ? e.memoizedState : Xt.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? ks : hc), t;
  }
  function Pi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ya(t);
      if (t.$$typeof === G) return ne(t);
    }
    throw Error(c(438, String(t)));
  }
  function lc(t) {
    var e = null, n = ot.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var l = ot.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Wi(), ot.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++)
        n[l] = bt;
    return e.index++, n;
  }
  function cn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function $i(t) {
    var e = It();
    return ac(e, Ut, t);
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
      var h = s = null, b = null, C = e, Q = !1;
      do {
        var q = C.lane & -536870913;
        if (q !== C.lane ? (gt & q) === q : (fn & q) === q) {
          var U = C.revertLane;
          if (U === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), q === jl && (Q = !0);
          else if ((fn & U) === U) {
            C = C.next, U === jl && (Q = !0);
            continue;
          } else
            q = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, b === null ? (h = b = q, s = u) : b = b.next = q, ot.lanes |= U, Nn |= U;
          q = C.action, rl && n(u, q), u = C.hasEagerState ? C.eagerState : n(u, q);
        } else
          U = {
            lane: q,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, b === null ? (h = b = U, s = u) : b = b.next = U, ot.lanes |= q, Nn |= q;
        C = C.next;
      } while (C !== null && C !== e);
      if (b === null ? s = u : b.next = h, !be(u, t.memoizedState) && (Kt = !0, Q && (n = Zl, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = s, t.baseQueue = b, l.lastRenderedState = u;
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
      be(u, e.memoizedState) || (Kt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, l];
  }
  function ys(t, e, n) {
    var l = ot, i = It(), u = vt;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = e();
    var s = !be(
      (Ut || i).memoizedState,
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
      ), Ot === null) throw Error(c(349));
      u || (fn & 127) !== 0 || ms(l, e, n);
    }
    return n;
  }
  function ms(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = ot.updateQueue, e === null ? (e = Wi(), ot.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function vs(t, e, n, l) {
    e.value = n, e.getSnapshot = l, bs(e) && ws(t);
  }
  function ps(t, e, n) {
    return n(function() {
      bs(e) && ws(t);
    });
  }
  function bs(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !be(t, n);
    } catch {
      return !0;
    }
  }
  function ws(t) {
    var e = tl(t, 2);
    e !== null && ge(e, t, 2);
  }
  function uc(t) {
    var e = fe();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), rl) {
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
  function Es(t, e, n, l) {
    return t.baseState = n, ac(
      t,
      Ut,
      typeof l == "function" ? l : cn
    );
  }
  function M2(t, e, n, l, i) {
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
      M.T !== null ? n(!0) : u.isTransition = !1, l(u), n = e.pending, n === null ? (u.next = e.pending = u, Ss(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function Ss(t, e) {
    var n = e.action, l = e.payload, i = t.state;
    if (e.isTransition) {
      var u = M.T, s = {};
      M.T = s;
      try {
        var h = n(i, l), b = M.S;
        b !== null && b(s, h), Bs(t, e, h);
      } catch (C) {
        fc(t, e, C);
      } finally {
        u !== null && s.types !== null && (u.types = s.types), M.T = u;
      }
    } else
      try {
        u = n(i, l), Bs(t, e, u);
      } catch (C) {
        fc(t, e, C);
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
    e.status = "fulfilled", e.value = n, xs(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Ss(t, n)));
  }
  function fc(t, e, n) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = n, xs(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function xs(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Cs(t, e) {
    return e;
  }
  function Us(t, e) {
    if (vt) {
      var n = Ot.formState;
      if (n !== null) {
        t: {
          var l = ot;
          if (vt) {
            if (Rt) {
              e: {
                for (var i = Rt, u = Qe; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break e;
                  }
                  if (i = Le(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break e;
                  }
                }
                u = i.data, i = u === "F!" || u === "F" ? i : null;
              }
              if (i) {
                Rt = Le(
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
      lastRenderedReducer: Cs,
      lastRenderedState: e
    }, n.queue = l, n = Js.bind(
      null,
      ot,
      l
    ), l.dispatch = n, l = uc(!1), u = Ac.bind(
      null,
      ot,
      !1,
      l.queue
    ), l = fe(), i = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = i, n = M2.bind(
      null,
      ot,
      i,
      u,
      n
    ), i.dispatch = n, l.memoizedState = t, [e, n, !1];
  }
  function zs(t) {
    var e = It();
    return Ms(e, Ut, t);
  }
  function Ms(t, e, n) {
    if (e = ac(
      t,
      e,
      Cs
    )[0], t = $i(cn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = Ya(e);
      } catch (s) {
        throw s === Vl ? Zi : s;
      }
    else l = e;
    e = It();
    var i = e.queue, u = i.dispatch;
    return n !== e.memoizedState && (ot.flags |= 2048, Fl(
      9,
      { destroy: void 0 },
      D2.bind(null, i, n),
      null
    )), [l, u, t];
  }
  function D2(t, e) {
    t.action = e;
  }
  function Ds(t) {
    var e = It(), n = Ut;
    if (n !== null)
      return Ms(e, n, t);
    It(), e = e.memoizedState, n = It();
    var l = n.queue.dispatch;
    return n.memoizedState = t, [e, l, !1];
  }
  function Fl(t, e, n, l) {
    return t = { tag: t, create: n, deps: l, inst: e, next: null }, e = ot.updateQueue, e === null && (e = Wi(), ot.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (l = n.next, n.next = t, t.next = l, e.lastEffect = t), t;
  }
  function Os() {
    return It().memoizedState;
  }
  function tu(t, e, n, l) {
    var i = fe();
    ot.flags |= t, i.memoizedState = Fl(
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
    Ut !== null && l !== null && Pf(l, Ut.memoizedState.deps) ? i.memoizedState = Fl(e, u, n, l) : (ot.flags |= t, i.memoizedState = Fl(
      1 | e,
      u,
      n,
      l
    ));
  }
  function Ns(t, e) {
    tu(8390656, 8, t, e);
  }
  function cc(t, e) {
    eu(2048, 8, t, e);
  }
  function O2(t) {
    ot.flags |= 4;
    var e = ot.updateQueue;
    if (e === null)
      e = Wi(), ot.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Rs(t) {
    var e = It().memoizedState;
    return O2({ ref: e, nextImpl: t }), function() {
      if ((Tt & 2) !== 0) throw Error(c(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Qs(t, e) {
    return eu(4, 2, t, e);
  }
  function Ys(t, e) {
    return eu(4, 4, t, e);
  }
  function Ls(t, e) {
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
  function Hs(t, e, n) {
    n = n != null ? n.concat([t]) : null, eu(4, 4, Ls.bind(null, e, t), n);
  }
  function rc() {
  }
  function qs(t, e) {
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
    if (l = t(), rl) {
      pn(!0);
      try {
        t();
      } finally {
        pn(!1);
      }
    }
    return n.memoizedState = [l, e], l;
  }
  function oc(t, e, n) {
    return n === void 0 || (fn & 1073741824) !== 0 && (gt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = I0(), ot.lanes |= t, Nn |= t, n);
  }
  function Is(t, e, n, l) {
    return be(n, e) ? n : Kl.current !== null ? (t = oc(t, n, l), be(t, e) || (Kt = !0), t) : (fn & 42) === 0 || (fn & 1073741824) !== 0 && (gt & 261930) === 0 ? (Kt = !0, t.memoizedState = n) : (t = I0(), ot.lanes |= t, Nn |= t, e);
  }
  function js(t, e, n, l, i) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var s = M.T, h = {};
    M.T = h, Ac(t, !1, e, n);
    try {
      var b = i(), C = M.S;
      if (C !== null && C(h, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var Q = C2(
          b,
          l
        );
        La(
          t,
          e,
          Q,
          xe(t)
        );
      } else
        La(
          t,
          e,
          l,
          xe(t)
        );
    } catch (q) {
      La(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: q },
        xe()
      );
    } finally {
      X.p = u, s !== null && h.types !== null && (s.types = h.types), M.T = s;
    }
  }
  function N2() {
  }
  function sc(t, e, n, l) {
    if (t.tag !== 5) throw Error(c(476));
    var i = Zs(t).queue;
    js(
      t,
      i,
      e,
      tt,
      n === null ? N2 : function() {
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
    e.next === null && (e = t.alternate.memoizedState), La(
      t,
      e.next.queue,
      {},
      xe()
    );
  }
  function dc() {
    return ne(ti);
  }
  function Xs() {
    return It().memoizedState;
  }
  function Ks() {
    return It().memoizedState;
  }
  function R2(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = xe();
          t = Cn(n);
          var l = Un(e, t, n);
          l !== null && (ge(l, e, n), Oa(l, e, n)), e = { cache: If() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Q2(t, e, n) {
    var l = xe();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nu(t) ? _s(e, n) : (n = Mf(t, e, n, l), n !== null && (ge(n, t, l), Fs(n, e, l)));
  }
  function Js(t, e, n) {
    var l = xe();
    La(t, e, n, l);
  }
  function La(t, e, n, l) {
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
          if (i.hasEagerState = !0, i.eagerState = h, be(h, s))
            return Yi(t, e, i, 0), Ot === null && Qi(), !1;
        } catch {
        } finally {
        }
      if (n = Mf(t, e, i, l), n !== null)
        return ge(n, t, l), Fs(n, e, l), !0;
    }
    return !1;
  }
  function Ac(t, e, n, l) {
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
      e = Mf(
        t,
        n,
        l,
        2
      ), e !== null && ge(e, t, 2);
  }
  function nu(t) {
    var e = t.alternate;
    return t === ot || e !== null && e === ot;
  }
  function _s(t, e) {
    Jl = Fi = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Fs(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, $r(t, n);
    }
  }
  var Ha = {
    readContext: ne,
    use: Pi,
    useCallback: Ht,
    useContext: Ht,
    useEffect: Ht,
    useImperativeHandle: Ht,
    useLayoutEffect: Ht,
    useInsertionEffect: Ht,
    useMemo: Ht,
    useReducer: Ht,
    useRef: Ht,
    useState: Ht,
    useDebugValue: Ht,
    useDeferredValue: Ht,
    useTransition: Ht,
    useSyncExternalStore: Ht,
    useId: Ht,
    useHostTransitionStatus: Ht,
    useFormState: Ht,
    useActionState: Ht,
    useOptimistic: Ht,
    useMemoCache: Ht,
    useCacheRefresh: Ht
  };
  Ha.useEffectEvent = Ht;
  var ks = {
    readContext: ne,
    use: Pi,
    useCallback: function(t, e) {
      return fe().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ne,
    useEffect: Ns,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, tu(
        4194308,
        4,
        Ls.bind(null, e, t),
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
      if (rl) {
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
        if (rl) {
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
      }, l.queue = t, t = t.dispatch = Q2.bind(
        null,
        ot,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = fe();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = uc(t);
      var e = t.queue, n = Js.bind(null, ot, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: rc,
    useDeferredValue: function(t, e) {
      var n = fe();
      return oc(n, t, e);
    },
    useTransition: function() {
      var t = uc(!1);
      return t = js.bind(
        null,
        ot,
        t.queue,
        !0,
        !1
      ), fe().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var l = ot, i = fe();
      if (vt) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = e(), Ot === null)
          throw Error(c(349));
        (gt & 127) !== 0 || ms(l, e, n);
      }
      i.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return i.queue = u, Ns(ps.bind(null, l, u, t), [
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
      var t = fe(), e = Ot.identifierPrefix;
      if (vt) {
        var n = _e, l = Je;
        n = (l & ~(1 << 32 - pe(l) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = ki++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = U2++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: dc,
    useFormState: Us,
    useActionState: Us,
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
      return e.queue = n, e = Ac.bind(
        null,
        ot,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: lc,
    useCacheRefresh: function() {
      return fe().memoizedState = R2.bind(
        null,
        ot
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
    useCallback: qs,
    useContext: ne,
    useEffect: cc,
    useImperativeHandle: Hs,
    useInsertionEffect: Qs,
    useLayoutEffect: Ys,
    useMemo: Gs,
    useReducer: $i,
    useRef: Os,
    useState: function() {
      return $i(cn);
    },
    useDebugValue: rc,
    useDeferredValue: function(t, e) {
      var n = It();
      return Is(
        n,
        Ut.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = $i(cn)[0], e = It().memoizedState;
      return [
        typeof t == "boolean" ? t : Ya(t),
        e
      ];
    },
    useSyncExternalStore: ys,
    useId: Xs,
    useHostTransitionStatus: dc,
    useFormState: zs,
    useActionState: zs,
    useOptimistic: function(t, e) {
      var n = It();
      return Es(n, Ut, t, e);
    },
    useMemoCache: lc,
    useCacheRefresh: Ks
  };
  hc.useEffectEvent = Rs;
  var Ws = {
    readContext: ne,
    use: Pi,
    useCallback: qs,
    useContext: ne,
    useEffect: cc,
    useImperativeHandle: Hs,
    useInsertionEffect: Qs,
    useLayoutEffect: Ys,
    useMemo: Gs,
    useReducer: ic,
    useRef: Os,
    useState: function() {
      return ic(cn);
    },
    useDebugValue: rc,
    useDeferredValue: function(t, e) {
      var n = It();
      return Ut === null ? oc(n, t, e) : Is(
        n,
        Ut.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ic(cn)[0], e = It().memoizedState;
      return [
        typeof t == "boolean" ? t : Ya(t),
        e
      ];
    },
    useSyncExternalStore: ys,
    useId: Xs,
    useHostTransitionStatus: dc,
    useFormState: Ds,
    useActionState: Ds,
    useOptimistic: function(t, e) {
      var n = It();
      return Ut !== null ? Es(n, Ut, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: lc,
    useCacheRefresh: Ks
  };
  Ws.useEffectEvent = Rs;
  function gc(t, e, n, l) {
    e = t.memoizedState, n = n(l, e), n = n == null ? e : m({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var yc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var l = xe(), i = Cn(l);
      i.payload = e, n != null && (i.callback = n), e = Un(t, i, l), e !== null && (ge(e, t, l), Oa(e, t, l));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var l = xe(), i = Cn(l);
      i.tag = 1, i.payload = e, n != null && (i.callback = n), e = Un(t, i, l), e !== null && (ge(e, t, l), Oa(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = xe(), l = Cn(n);
      l.tag = 2, e != null && (l.callback = e), e = Un(t, l, n), e !== null && (ge(e, t, n), Oa(e, t, n));
    }
  };
  function Ps(t, e, n, l, i, u, s) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, u, s) : e.prototype && e.prototype.isPureReactComponent ? !Ba(n, l) || !Ba(i, u) : !0;
  }
  function $s(t, e, n, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l), e.state !== t && yc.enqueueReplaceState(e, e.state, null);
  }
  function ol(t, e) {
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
    return n = Cn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      lu(t, e);
    }, n;
  }
  function a0(t) {
    return t = Cn(t), t.tag = 3, t;
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
  function Y2(t, e, n, l, i) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = n.alternate, e !== null && Il(
        e,
        n,
        i,
        !0
      ), n = Ee.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Ye === null ? gu() : n.alternate === null && qt === 0 && (qt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, l === Vi ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), jc(t, l, i)), !1;
          case 22:
            return n.flags |= 65536, l === Vi ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), jc(t, l, i)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return jc(t, l, i), gu(), !1;
    }
    if (vt)
      return e = Ee.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = i, l !== Yf && (t = Error(c(422), { cause: l }), Ca(Oe(t, n)))) : (l !== Yf && (e = Error(c(423), {
        cause: l
      }), Ca(
        Oe(e, n)
      )), t = t.current.alternate, t.flags |= 65536, i &= -i, t.lanes |= i, l = Oe(l, n), i = mc(
        t.stateNode,
        l,
        i
      ), Jf(t, i), qt !== 4 && (qt = 2)), !1;
    var u = Error(c(520), { cause: l });
    if (u = Oe(u, n), Ka === null ? Ka = [u] : Ka.push(u), qt !== 4 && (qt = 2), e === null) return !0;
    l = Oe(l, n), n = e;
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
    e.child = t === null ? rs(e, null, n, l) : cl(
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
    ), h = tc(), t !== null && !Kt ? (ec(t, e, i), rn(t, e, i)) : (vt && h && Rf(e), e.flags |= 1, le(t, e, l, i), e.child);
  }
  function f0(t, e, n, l, i) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !Df(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, c0(
        t,
        e,
        u,
        l,
        i
      )) : (t = Hi(
        n.type,
        null,
        l,
        e,
        e.mode,
        i
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !xc(t, i)) {
      var s = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ba, n(s, l) && t.ref === e.ref)
        return rn(t, e, i);
    }
    return e.flags |= 1, t = nn(u, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function c0(t, e, n, l, i) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ba(u, l) && t.ref === e.ref)
        if (Kt = !1, e.pendingProps = l = u, xc(t, i))
          (t.flags & 131072) !== 0 && (Kt = !0);
        else
          return e.lanes = t.lanes, rn(t, e, i);
    }
    return pc(
      t,
      e,
      n,
      l,
      i
    );
  }
  function r0(t, e, n, l) {
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
        return o0(
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
        ), u !== null ? ds(e, u) : Ff(), As(e);
      else
        return l = e.lanes = 536870912, o0(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          l
        );
    } else
      u !== null ? (ji(e, u.cachePool), ds(e, u), Mn(), e.memoizedState = null) : (t !== null && ji(e, null), Ff(), Mn());
    return le(t, e, i, n), e.child;
  }
  function qa(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function o0(t, e, n, l, i) {
    var u = Zf();
    return u = u === null ? null : { parent: Vt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && ji(e, null), Ff(), As(e), t !== null && Il(t, e, l, !0), e.childLanes = i, null;
  }
  function au(t, e) {
    return e = uu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function s0(t, e, n) {
    return cl(e, t.child, null, n), t = au(e, e.pendingProps), t.flags |= 2, Se(e), e.memoizedState = null, t;
  }
  function L2(t, e, n) {
    var l = e.pendingProps, i = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (vt) {
        if (l.mode === "hidden")
          return t = au(e, l), e.lanes = 536870912, qa(null, t);
        if (Wf(e), (t = Rt) ? (t = Sd(
          t,
          Qe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: En !== null ? { id: Je, overflow: _e } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = _o(t), n.return = e, e.child = n, ee = e, Rt = null)) : t = null, t === null) throw Bn(e);
        return e.lanes = 536870912, null;
      }
      return au(e, l);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var s = u.dehydrated;
      if (Wf(e), i)
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
        if (l = Ot, l !== null && (s = to(l, n), s !== 0 && s !== u.retryLane))
          throw u.retryLane = s, tl(t, s), ge(l, t, s), vc;
        gu(), e = s0(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, Rt = Le(s.nextSibling), ee = e, vt = !0, Sn = null, Qe = !1, t !== null && Wo(e, t), e = au(e, l), e.flags |= 4096;
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
    ), l = tc(), t !== null && !Kt ? (ec(t, e, i), rn(t, e, i)) : (vt && l && Rf(e), e.flags |= 1, le(t, e, n, i), e.child);
  }
  function d0(t, e, n, l, i, u) {
    return al(e), e.updateQueue = null, n = gs(
      e,
      l,
      n,
      i
    ), hs(t), l = tc(), t !== null && !Kt ? (ec(t, e, u), rn(t, e, u)) : (vt && l && Rf(e), e.flags |= 1, le(t, e, n, u), e.child);
  }
  function A0(t, e, n, l, i) {
    if (al(e), e.stateNode === null) {
      var u = Ll, s = n.contextType;
      typeof s == "object" && s !== null && (u = ne(s)), u = new n(l, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = yc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = l, u.state = e.memoizedState, u.refs = {}, Xf(e), s = n.contextType, u.context = typeof s == "object" && s !== null ? ne(s) : Ll, u.state = e.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (gc(
        e,
        n,
        s,
        l
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && yc.enqueueReplaceState(u, u.state, null), Ra(e, l, u, i), Na(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      u = e.stateNode;
      var h = e.memoizedProps, b = ol(n, h);
      u.props = b;
      var C = u.context, Q = n.contextType;
      s = Ll, typeof Q == "object" && Q !== null && (s = ne(Q));
      var q = n.getDerivedStateFromProps;
      Q = typeof q == "function" || typeof u.getSnapshotBeforeUpdate == "function", h = e.pendingProps !== h, Q || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h || C !== s) && $s(
        e,
        u,
        l,
        s
      ), xn = !1;
      var U = e.memoizedState;
      u.state = U, Ra(e, l, u, i), Na(), C = e.memoizedState, h || U !== C || xn ? (typeof q == "function" && (gc(
        e,
        n,
        q,
        l
      ), C = e.memoizedState), (b = xn || Ps(
        e,
        n,
        b,
        l,
        U,
        C,
        s
      )) ? (Q || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = C), u.props = l, u.state = C, u.context = s, l = b) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      u = e.stateNode, Kf(t, e), s = e.memoizedProps, Q = ol(n, s), u.props = Q, q = e.pendingProps, U = u.context, C = n.contextType, b = Ll, typeof C == "object" && C !== null && (b = ne(C)), h = n.getDerivedStateFromProps, (C = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== q || U !== b) && $s(
        e,
        u,
        l,
        b
      ), xn = !1, U = e.memoizedState, u.state = U, Ra(e, l, u, i), Na();
      var N = e.memoizedState;
      s !== q || U !== N || xn || t !== null && t.dependencies !== null && Gi(t.dependencies) ? (typeof h == "function" && (gc(
        e,
        n,
        h,
        l
      ), N = e.memoizedState), (Q = xn || Ps(
        e,
        n,
        Q,
        l,
        U,
        N,
        b
      ) || t !== null && t.dependencies !== null && Gi(t.dependencies)) ? (C || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, N, b), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        N,
        b
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === t.memoizedProps && U === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && U === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = N), u.props = l, u.state = N, u.context = b, l = Q) : (typeof u.componentDidUpdate != "function" || s === t.memoizedProps && U === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && U === t.memoizedState || (e.flags |= 1024), l = !1);
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
    )) : le(t, e, n, i), e.memoizedState = u.state, t = e.child) : t = rn(
      t,
      e,
      i
    ), t;
  }
  function h0(t, e, n, l) {
    return nl(), e.flags |= 256, le(t, e, n, l), e.child;
  }
  var bc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function wc(t) {
    return { baseLanes: t, cachePool: ls() };
  }
  function Ec(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Te), t;
  }
  function g0(t, e, n) {
    var l = e.pendingProps, i = !1, u = (e.flags & 128) !== 0, s;
    if ((s = u) || (s = t !== null && t.memoizedState === null ? !1 : (Gt.current & 2) !== 0), s && (i = !0, e.flags &= -129), s = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (vt) {
        if (i ? zn(e) : Mn(), (t = Rt) ? (t = Sd(
          t,
          Qe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: En !== null ? { id: Je, overflow: _e } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = _o(t), n.return = e, e.child = n, ee = e, Rt = null)) : t = null, t === null) throw Bn(e);
        return ar(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var h = l.children;
      return l = l.fallback, i ? (Mn(), i = e.mode, h = uu(
        { mode: "hidden", children: h },
        i
      ), l = el(
        l,
        i,
        n,
        null
      ), h.return = e, l.return = e, h.sibling = l, e.child = h, l = e.child, l.memoizedState = wc(n), l.childLanes = Ec(
        t,
        s,
        n
      ), e.memoizedState = bc, qa(null, l)) : (zn(e), Sc(e, h));
    }
    var b = t.memoizedState;
    if (b !== null && (h = b.dehydrated, h !== null)) {
      if (u)
        e.flags & 256 ? (zn(e), e.flags &= -257, e = Bc(
          t,
          e,
          n
        )) : e.memoizedState !== null ? (Mn(), e.child = t.child, e.flags |= 128, e = null) : (Mn(), h = l.fallback, i = e.mode, l = uu(
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
        ), l = e.child, l.memoizedState = wc(n), l.childLanes = Ec(
          t,
          s,
          n
        ), e.memoizedState = bc, e = qa(null, l));
      else if (zn(e), ar(h)) {
        if (s = h.nextSibling && h.nextSibling.dataset, s) var C = s.dgst;
        s = C, l = Error(c(419)), l.stack = "", l.digest = s, Ca({ value: l, source: null, stack: null }), e = Bc(
          t,
          e,
          n
        );
      } else if (Kt || Il(t, e, n, !1), s = (n & t.childLanes) !== 0, Kt || s) {
        if (s = Ot, s !== null && (l = to(s, n), l !== 0 && l !== b.retryLane))
          throw b.retryLane = l, tl(t, l), ge(s, t, l), vc;
        lr(h) || gu(), e = Bc(
          t,
          e,
          n
        );
      } else
        lr(h) ? (e.flags |= 192, e.child = t.child, e = null) : (t = b.treeContext, Rt = Le(
          h.nextSibling
        ), ee = e, vt = !0, Sn = null, Qe = !1, t !== null && Wo(e, t), e = Sc(
          e,
          l.children
        ), e.flags |= 4096);
      return e;
    }
    return i ? (Mn(), h = l.fallback, i = e.mode, b = t.child, C = b.sibling, l = nn(b, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = b.subtreeFlags & 65011712, C !== null ? h = nn(
      C,
      h
    ) : (h = el(
      h,
      i,
      n,
      null
    ), h.flags |= 2), h.return = e, l.return = e, l.sibling = h, e.child = l, qa(null, l), l = e.child, h = t.child.memoizedState, h === null ? h = wc(n) : (i = h.cachePool, i !== null ? (b = Vt._currentValue, i = i.parent !== b ? { parent: b, pool: b } : i) : i = ls(), h = {
      baseLanes: h.baseLanes | n,
      cachePool: i
    }), l.memoizedState = h, l.childLanes = Ec(
      t,
      s,
      n
    ), e.memoizedState = bc, qa(t.child, l)) : (zn(e), n = t.child, t = n.sibling, n = nn(n, {
      mode: "visible",
      children: l.children
    }), n.return = e, n.sibling = null, t !== null && (s = e.deletions, s === null ? (e.deletions = [t], e.flags |= 16) : s.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Sc(t, e) {
    return e = uu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function uu(t, e) {
    return t = we(22, t, null, e), t.lanes = 0, t;
  }
  function Bc(t, e, n) {
    return cl(e, t.child, null, n), t = Sc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function y0(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), qf(t.return, e, n);
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
    if (h ? (s = s & 1 | 2, e.flags |= 128) : s &= 1, V(Gt, s), le(t, e, l, n), l = vt ? xa : 0, !h && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && y0(t, n, e);
        else if (t.tag === 19)
          y0(t, n, e);
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
  function rn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Nn |= e.lanes, (n & e.childLanes) === 0)
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
  function xc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Gi(t)));
  }
  function H2(t, e, n) {
    switch (e.tag) {
      case 3:
        Nt(e, e.stateNode.containerInfo), Tn(e, Vt, t.memoizedState.cache), nl();
        break;
      case 27:
      case 5:
        Ce(e);
        break;
      case 4:
        Nt(e, e.stateNode.containerInfo);
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
          return e.flags |= 128, Wf(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (zn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? g0(t, e, n) : (zn(e), t = rn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        zn(e);
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
        return e.lanes = 0, r0(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        Tn(e, Vt, t.memoizedState.cache);
    }
    return rn(t, e, n);
  }
  function v0(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Kt = !0;
      else {
        if (!xc(t, n) && (e.flags & 128) === 0)
          return Kt = !1, H2(
            t,
            e,
            n
          );
        Kt = (t.flags & 131072) !== 0;
      }
    else
      Kt = !1, vt && (e.flags & 1048576) !== 0 && ko(e, xa, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (t = ul(e.elementType), e.type = t, typeof t == "function")
            Df(t) ? (l = ol(t, l), e.tag = 1, e = A0(
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
        return l = e.type, i = ol(
          l,
          e.pendingProps
        ), A0(
          t,
          e,
          l,
          i,
          n
        );
      case 3:
        t: {
          if (Nt(
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
          ), Na(), l = s.element, u.isDehydrated)
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
              i = Oe(
                Error(c(424)),
                e
              ), Ca(i), e = h0(
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
              for (Rt = Le(t.firstChild), ee = e, vt = !0, Sn = null, Qe = !0, n = rs(
                e,
                null,
                l,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (nl(), l === i) {
              e = rn(
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
        return iu(t, e), t === null ? (n = zd(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : vt || (n = e.type, t = e.pendingProps, l = Eu(
          ct.current
        ).createElement(n), l[te] = e, l[re] = t, ae(l, n, t), Wt(l), e.stateNode = l) : e.memoizedState = zd(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ce(e), t === null && vt && (l = e.stateNode = xd(
          e.type,
          e.pendingProps,
          ct.current
        ), ee = e, Qe = !0, i = Rt, Hn(e.type) ? (ir = i, Rt = Le(l.firstChild)) : Rt = i), le(
          t,
          e,
          e.pendingProps.children,
          n
        ), iu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && vt && ((i = l = Rt) && (l = hh(
          l,
          e.type,
          e.pendingProps,
          Qe
        ), l !== null ? (e.stateNode = l, ee = e, Rt = Le(l.firstChild), Qe = !1, i = !0) : i = !1), i || Bn(e)), Ce(e), i = e.type, u = e.pendingProps, s = t !== null ? t.memoizedProps : null, l = u.children, tr(i, u) ? l = null : s !== null && tr(i, s) && (e.flags |= 32), e.memoizedState !== null && (i = $f(
          t,
          e,
          z2,
          null,
          null,
          n
        ), ti._currentValue = i), iu(t, e), le(t, e, l, n), e.child;
      case 6:
        return t === null && vt && ((t = n = Rt) && (n = gh(
          n,
          e.pendingProps,
          Qe
        ), n !== null ? (e.stateNode = n, ee = e, Rt = null, t = !0) : t = !1), t || Bn(e)), null;
      case 13:
        return g0(t, e, n);
      case 4:
        return Nt(
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
        return L2(t, e, n);
      case 22:
        return r0(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return al(e), l = ne(Vt), t === null ? (i = Zf(), i === null && (i = Ot, u = If(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= n), i = u), e.memoizedState = { parent: l, cache: i }, Xf(e), Tn(e, Vt, i)) : ((t.lanes & n) !== 0 && (Kf(t, e), Ra(e, null, null, n), Na()), i = t.memoizedState, u = e.memoizedState, i.parent !== l ? (i = { parent: l, cache: l }, e.memoizedState = i, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = i), Tn(e, Vt, l)) : (l = u.cache, Tn(e, Vt, l), l !== i.cache && Gf(
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
  function on(t) {
    t.flags |= 4;
  }
  function Cc(t, e, n, l, i) {
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
    else if (t.flags |= 16777216, !Rd(e))
      if (X0()) t.flags |= 8192;
      else
        throw fl = Vi, Vf;
  }
  function fu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Wr() : 536870912, t.lanes |= e, $l |= e);
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
  function q2(t, e, n) {
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
        return n = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), un(Vt), Bt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Gl(e) ? on(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Lf())), Qt(e), null;
      case 26:
        var i = e.type, u = e.memoizedState;
        return t === null ? (on(e), u !== null ? (Qt(e), p0(e, u)) : (Qt(e), Cc(
          e,
          i,
          null,
          l,
          n
        ))) : u ? u !== t.memoizedState ? (on(e), Qt(e), p0(e, u)) : (Qt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && on(e), Qt(e), Cc(
          e,
          i,
          t,
          l,
          n
        )), null;
      case 27:
        if (ye(e), n = ct.current, i = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && on(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Qt(e), null;
          }
          t = F.current, Gl(e) ? Po(e) : (t = xd(i, l, n), e.stateNode = t, on(e));
        }
        return Qt(e), null;
      case 5:
        if (ye(e), i = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && on(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Qt(e), null;
          }
          if (u = F.current, Gl(e))
            Po(e);
          else {
            var s = Eu(
              ct.current
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
            u[te] = e, u[re] = l;
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
            l && on(e);
          }
        }
        return Qt(e), Cc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && on(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(c(166));
          if (t = ct.current, Gl(e)) {
            if (t = e.stateNode, n = e.memoizedProps, l = null, i = ee, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            t[te] = e, t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || gd(t.nodeValue, n)), t || Bn(e, !0);
          } else
            t = Eu(t).createTextNode(
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
            n = Lf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (Se(e), e) : (Se(e), null);
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
            i = Lf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return e.flags & 256 ? (Se(e), e) : (Se(e), null);
        }
        return Se(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = l !== null, t = t !== null && t.memoizedState !== null, n && (l = e.child, i = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (i = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== i && (l.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), fu(e, e.updateQueue), Qt(e), null);
      case 4:
        return Bt(), t === null && Fc(e.stateNode.containerInfo), Qt(e), null;
      case 10:
        return un(e.type), Qt(e), null;
      case 19:
        if (H(Gt), l = e.memoizedState, l === null) return Qt(e), null;
        if (i = (e.flags & 128) !== 0, u = l.rendering, u === null)
          if (i) Ga(l, !1);
          else {
            if (qt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = _i(t), u !== null) {
                  for (e.flags |= 128, Ga(l, !1), t = u.updateQueue, e.updateQueue = t, fu(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Jo(n, t), n = n.sibling;
                  return V(
                    Gt,
                    Gt.current & 1 | 2
                  ), vt && ln(e, l.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null && $t() > du && (e.flags |= 128, i = !0, Ga(l, !1), e.lanes = 4194304);
          }
        else {
          if (!i)
            if (t = _i(u), t !== null) {
              if (e.flags |= 128, i = !0, t = t.updateQueue, e.updateQueue = t, fu(e, t), Ga(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !vt)
                return Qt(e), null;
            } else
              2 * $t() - l.renderingStartTime > du && n !== 536870912 && (e.flags |= 128, i = !0, Ga(l, !1), e.lanes = 4194304);
          l.isBackwards ? (u.sibling = e.child, e.child = u) : (t = l.last, t !== null ? t.sibling = u : e.child = u, l.last = u);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = $t(), t.sibling = null, n = Gt.current, V(
          Gt,
          i ? n & 1 | 2 : n & 1
        ), vt && ln(e, l.treeForkCount), t) : (Qt(e), null);
      case 22:
      case 23:
        return Se(e), kf(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Qt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Qt(e), n = e.updateQueue, n !== null && fu(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== n && (e.flags |= 2048), t !== null && H(il), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), un(Vt), Qt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, e.tag));
  }
  function G2(t, e) {
    switch (Qf(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return un(Vt), Bt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return ye(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Se(e), e.alternate === null)
            throw Error(c(340));
          nl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Se(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(c(340));
          nl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return H(Gt), null;
      case 4:
        return Bt(), null;
      case 10:
        return un(e.type), null;
      case 22:
      case 23:
        return Se(e), kf(), t !== null && H(il), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return un(Vt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function b0(t, e) {
    switch (Qf(e), e.tag) {
      case 3:
        un(Vt), Bt();
        break;
      case 26:
      case 27:
      case 5:
        ye(e);
        break;
      case 4:
        Bt();
        break;
      case 31:
        e.memoizedState !== null && Se(e);
        break;
      case 13:
        Se(e);
        break;
      case 19:
        H(Gt);
        break;
      case 10:
        un(e.type);
        break;
      case 22:
      case 23:
        Se(e), kf(), t !== null && H(il);
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
      Ct(e, e.return, h);
    }
  }
  function Dn(t, e, n) {
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
              var b = n, C = h;
              try {
                C();
              } catch (Q) {
                Ct(
                  i,
                  b,
                  Q
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (Q) {
      Ct(e, e.return, Q);
    }
  }
  function w0(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        ss(e, n);
      } catch (l) {
        Ct(t, t.return, l);
      }
    }
  }
  function E0(t, e, n) {
    n.props = ol(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ct(t, e, l);
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
      Ct(t, e, i);
    }
  }
  function Fe(t, e) {
    var n = t.ref, l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (i) {
          Ct(t, e, i);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          Ct(t, e, i);
        }
      else n.current = null;
  }
  function S0(t) {
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
      Ct(t, t.return, i);
    }
  }
  function Uc(t, e, n) {
    try {
      var l = t.stateNode;
      ch(l, t.type, n, e), l[re] = e;
    } catch (i) {
      Ct(t, t.return, i);
    }
  }
  function B0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Hn(t.type) || t.tag === 4;
  }
  function zc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || B0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Hn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Mc(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = tn));
    else if (l !== 4 && (l === 27 && Hn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
      for (Mc(t, e, n), t = t.sibling; t !== null; )
        Mc(t, e, n), t = t.sibling;
  }
  function cu(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (l !== 4 && (l === 27 && Hn(t.type) && (n = t.stateNode), t = t.child, t !== null))
      for (cu(t, e, n), t = t.sibling; t !== null; )
        cu(t, e, n), t = t.sibling;
  }
  function T0(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var l = t.type, i = e.attributes; i.length; )
        e.removeAttributeNode(i[0]);
      ae(e, l, n), e[te] = t, e[re] = n;
    } catch (u) {
      Ct(t, t.return, u);
    }
  }
  var sn = !1, Jt = !1, Dc = !1, x0 = typeof WeakSet == "function" ? WeakSet : Set, Pt = null;
  function I2(t, e) {
    if (t = t.containerInfo, Pc = zu, t = Ho(t), Bf(t)) {
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
            var s = 0, h = -1, b = -1, C = 0, Q = 0, q = t, U = null;
            e: for (; ; ) {
              for (var N; q !== n || i !== 0 && q.nodeType !== 3 || (h = s + i), q !== u || l !== 0 && q.nodeType !== 3 || (b = s + l), q.nodeType === 3 && (s += q.nodeValue.length), (N = q.firstChild) !== null; )
                U = q, q = N;
              for (; ; ) {
                if (q === t) break e;
                if (U === n && ++C === i && (h = s), U === u && ++Q === l && (b = s), (N = q.nextSibling) !== null) break;
                q = U, U = q.parentNode;
              }
              q = N;
            }
            n = h === -1 || b === -1 ? null : { start: h, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for ($c = { focusedElem: t, selectionRange: n }, zu = !1, Pt = e; Pt !== null; )
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
                  var k = ol(
                    n.type,
                    i
                  );
                  t = l.getSnapshotBeforeUpdate(
                    k,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = t;
                } catch (lt) {
                  Ct(
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
                  nr(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      nr(t);
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
  function C0(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        An(t, n), l & 4 && Ia(5, n);
        break;
      case 1:
        if (An(t, n), l & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (s) {
              Ct(n, n.return, s);
            }
          else {
            var i = ol(
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
              Ct(
                n,
                n.return,
                s
              );
            }
          }
        l & 64 && w0(n), l & 512 && ja(n, n.return);
        break;
      case 3:
        if (An(t, n), l & 64 && (t = n.updateQueue, t !== null)) {
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
            Ct(n, n.return, s);
          }
        }
        break;
      case 27:
        e === null && l & 4 && T0(n);
      case 26:
      case 5:
        An(t, n), e === null && l & 4 && S0(n), l & 512 && ja(n, n.return);
        break;
      case 12:
        An(t, n);
        break;
      case 31:
        An(t, n), l & 4 && M0(t, n);
        break;
      case 13:
        An(t, n), l & 4 && D0(t, n), l & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = k2.bind(
          null,
          n
        ), yh(t, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || sn, !l) {
          e = e !== null && e.memoizedState !== null || Jt, i = sn;
          var u = Jt;
          sn = l, (Jt = e) && !u ? hn(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : An(t, n), sn = i, Jt = u;
        }
        break;
      case 30:
        break;
      default:
        An(t, n);
    }
  }
  function U0(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, U0(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ff(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Lt = null, se = !1;
  function dn(t, e, n) {
    for (n = n.child; n !== null; )
      z0(t, e, n), n = n.sibling;
  }
  function z0(t, e, n) {
    if (ve && typeof ve.onCommitFiberUnmount == "function")
      try {
        ve.onCommitFiberUnmount(da, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Jt || Fe(n, e), dn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Jt || Fe(n, e);
        var l = Lt, i = se;
        Hn(n.type) && (Lt = n.stateNode, se = !1), dn(
          t,
          e,
          n
        ), Wa(n.stateNode), Lt = l, se = i;
        break;
      case 5:
        Jt || Fe(n, e);
      case 6:
        if (l = Lt, i = se, Lt = null, dn(
          t,
          e,
          n
        ), Lt = l, se = i, Lt !== null)
          if (se)
            try {
              (Lt.nodeType === 9 ? Lt.body : Lt.nodeName === "HTML" ? Lt.ownerDocument.body : Lt).removeChild(n.stateNode);
            } catch (u) {
              Ct(
                n,
                e,
                u
              );
            }
          else
            try {
              Lt.removeChild(n.stateNode);
            } catch (u) {
              Ct(
                n,
                e,
                u
              );
            }
        break;
      case 18:
        Lt !== null && (se ? (t = Lt, wd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), fa(t)) : wd(Lt, n.stateNode));
        break;
      case 4:
        l = Lt, i = se, Lt = n.stateNode.containerInfo, se = !0, dn(
          t,
          e,
          n
        ), Lt = l, se = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Dn(2, n, e), Jt || Dn(4, n, e), dn(
          t,
          e,
          n
        );
        break;
      case 1:
        Jt || (Fe(n, e), l = n.stateNode, typeof l.componentWillUnmount == "function" && E0(
          n,
          e,
          l
        )), dn(
          t,
          e,
          n
        );
        break;
      case 21:
        dn(
          t,
          e,
          n
        );
        break;
      case 22:
        Jt = (l = Jt) || n.memoizedState !== null, dn(
          t,
          e,
          n
        ), Jt = l;
        break;
      default:
        dn(
          t,
          e,
          n
        );
    }
  }
  function M0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        fa(t);
      } catch (n) {
        Ct(e, e.return, n);
      }
    }
  }
  function D0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        fa(t);
      } catch (n) {
        Ct(e, e.return, n);
      }
  }
  function j2(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new x0()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new x0()), e;
      default:
        throw Error(c(435, t.tag));
    }
  }
  function ru(t, e) {
    var n = j2(t);
    e.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var i = W2.bind(null, t, l);
        l.then(i, i);
      }
    });
  }
  function de(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var i = n[l], u = t, s = e, h = s;
        t: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (Hn(h.type)) {
                Lt = h.stateNode, se = !1;
                break t;
              }
              break;
            case 5:
              Lt = h.stateNode, se = !1;
              break t;
            case 3:
            case 4:
              Lt = h.stateNode.containerInfo, se = !0;
              break t;
          }
          h = h.return;
        }
        if (Lt === null) throw Error(c(160));
        z0(u, s, i), Lt = null, se = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        O0(e, t), e = e.sibling;
  }
  var Ge = null;
  function O0(t, e) {
    var n = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        de(e, t), Ae(t), l & 4 && (Dn(3, t, t.return), Ia(3, t), Dn(5, t, t.return));
        break;
      case 1:
        de(e, t), Ae(t), l & 512 && (Jt || n === null || Fe(n, n.return)), l & 64 && sn && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var i = Ge;
        if (de(e, t), Ae(t), l & 512 && (Jt || n === null || Fe(n, n.return)), l & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (l = t.memoizedState, n === null)
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  l = t.type, n = t.memoizedProps, i = i.ownerDocument || i;
                  e: switch (l) {
                    case "title":
                      u = i.getElementsByTagName("title")[0], (!u || u[ga] || u[te] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(l), i.head.insertBefore(
                        u,
                        i.querySelector("head > title")
                      )), ae(u, l, n), u[te] = t, Wt(u), l = u;
                      break t;
                    case "link":
                      var s = Od(
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
                      if (s = Od(
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
                  u[te] = t, Wt(u), l = u;
                }
                t.stateNode = l;
              } else
                Nd(
                  i,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Dd(
                i,
                l,
                t.memoizedProps
              );
          else
            u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, l === null ? Nd(
              i,
              t.type,
              t.stateNode
            ) : Dd(
              i,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && Uc(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        de(e, t), Ae(t), l & 512 && (Jt || n === null || Fe(n, n.return)), n !== null && l & 4 && Uc(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (de(e, t), Ae(t), l & 512 && (Jt || n === null || Fe(n, n.return)), t.flags & 32) {
          i = t.stateNode;
          try {
            Ml(i, "");
          } catch (k) {
            Ct(t, t.return, k);
          }
        }
        l & 4 && t.stateNode != null && (i = t.memoizedProps, Uc(
          t,
          i,
          n !== null ? n.memoizedProps : i
        )), l & 1024 && (Dc = !0);
        break;
      case 6:
        if (de(e, t), Ae(t), l & 4) {
          if (t.stateNode === null)
            throw Error(c(162));
          l = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = l;
          } catch (k) {
            Ct(t, t.return, k);
          }
        }
        break;
      case 3:
        if (Tu = null, i = Ge, Ge = Su(e.containerInfo), de(e, t), Ge = i, Ae(t), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            fa(e.containerInfo);
          } catch (k) {
            Ct(t, t.return, k);
          }
        Dc && (Dc = !1, N0(t));
        break;
      case 4:
        l = Ge, Ge = Su(
          t.stateNode.containerInfo
        ), de(e, t), Ae(t), Ge = l;
        break;
      case 12:
        de(e, t), Ae(t);
        break;
      case 31:
        de(e, t), Ae(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ru(t, l)));
        break;
      case 13:
        de(e, t), Ae(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (su = $t()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ru(t, l)));
        break;
      case 22:
        i = t.memoizedState !== null;
        var b = n !== null && n.memoizedState !== null, C = sn, Q = Jt;
        if (sn = C || i, Jt = Q || b, de(e, t), Jt = Q, sn = C, Ae(t), l & 8192)
          t: for (e = t.stateNode, e._visibility = i ? e._visibility & -2 : e._visibility | 1, i && (n === null || b || sn || Jt || sl(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                b = n = e;
                try {
                  if (u = b.stateNode, i)
                    s = u.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    h = b.stateNode;
                    var q = b.memoizedProps.style, U = q != null && q.hasOwnProperty("display") ? q.display : null;
                    h.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (k) {
                  Ct(b, b.return, k);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                b = e;
                try {
                  b.stateNode.nodeValue = i ? "" : b.memoizedProps;
                } catch (k) {
                  Ct(b, b.return, k);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                b = e;
                try {
                  var N = b.stateNode;
                  i ? Ed(N, !0) : Ed(b.stateNode, !1);
                } catch (k) {
                  Ct(b, b.return, k);
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
        l & 4 && (l = t.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, ru(t, n))));
        break;
      case 19:
        de(e, t), Ae(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ru(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        de(e, t), Ae(t);
    }
  }
  function Ae(t) {
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
            var i = n.stateNode, u = zc(t);
            cu(t, u, i);
            break;
          case 5:
            var s = n.stateNode;
            n.flags & 32 && (Ml(s, ""), n.flags &= -33);
            var h = zc(t);
            cu(t, h, s);
            break;
          case 3:
          case 4:
            var b = n.stateNode.containerInfo, C = zc(t);
            Mc(
              t,
              C,
              b
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (Q) {
        Ct(t, t.return, Q);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function N0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        N0(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function An(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        C0(t, e.alternate, e), e = e.sibling;
  }
  function sl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Dn(4, e, e.return), sl(e);
          break;
        case 1:
          Fe(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && E0(
            e,
            e.return,
            n
          ), sl(e);
          break;
        case 27:
          Wa(e.stateNode);
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
            } catch (C) {
              Ct(l, l.return, C);
            }
          if (l = u, i = l.updateQueue, i !== null) {
            var h = l.stateNode;
            try {
              var b = i.shared.hiddenCallbacks;
              if (b !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < b.length; i++)
                  os(b[i], h);
            } catch (C) {
              Ct(l, l.return, C);
            }
          }
          n && s & 64 && w0(u), ja(u, u.return);
          break;
        case 27:
          T0(u);
        case 26:
        case 5:
          hn(
            i,
            u,
            n
          ), n && l === null && s & 4 && S0(u), ja(u, u.return);
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
          ), n && s & 4 && M0(i, u);
          break;
        case 13:
          hn(
            i,
            u,
            n
          ), n && s & 4 && D0(i, u);
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
  function Oc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Ua(n));
  }
  function Nc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ua(t));
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
        ), i & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ua(t)));
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
          } catch (b) {
            Ct(e, e.return, b);
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
        ) : (u._visibility |= 2, kl(
          t,
          e,
          n,
          l,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && Oc(s, e);
        break;
      case 24:
        Ie(
          t,
          e,
          n,
          l
        ), i & 2048 && Nc(e.alternate, e);
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
  function kl(t, e, n, l, i) {
    for (i = i && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, s = e, h = n, b = l, C = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          kl(
            u,
            s,
            h,
            b,
            i
          ), Ia(8, s);
          break;
        case 23:
          break;
        case 22:
          var Q = s.stateNode;
          s.memoizedState !== null ? Q._visibility & 2 ? kl(
            u,
            s,
            h,
            b,
            i
          ) : Za(
            u,
            s
          ) : (Q._visibility |= 2, kl(
            u,
            s,
            h,
            b,
            i
          )), i && C & 2048 && Oc(
            s.alternate,
            s
          );
          break;
        case 24:
          kl(
            u,
            s,
            h,
            b,
            i
          ), i && C & 2048 && Nc(s.alternate, s);
          break;
        default:
          kl(
            u,
            s,
            h,
            b,
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
            Za(n, l), i & 2048 && Oc(
              l.alternate,
              l
            );
            break;
          case 24:
            Za(n, l), i & 2048 && Nc(l.alternate, l);
            break;
          default:
            Za(n, l);
        }
        e = e.sibling;
      }
  }
  var Va = 8192;
  function Wl(t, e, n) {
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
        Wl(
          t,
          e,
          n
        ), t.flags & Va && t.memoizedState !== null && Uh(
          n,
          Ge,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Wl(
          t,
          e,
          n
        );
        break;
      case 3:
      case 4:
        var l = Ge;
        Ge = Su(t.stateNode.containerInfo), Wl(
          t,
          e,
          n
        ), Ge = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Va, Va = 16777216, Wl(
          t,
          e,
          n
        ), Va = l) : Wl(
          t,
          e,
          n
        ));
        break;
      default:
        Wl(
          t,
          e,
          n
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
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          Pt = l, H0(
            l,
            t
          );
        }
      Y0(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        L0(t), t = t.sibling;
  }
  function L0(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Xa(t), t.flags & 2048 && Dn(9, t, t.return);
        break;
      case 3:
        Xa(t);
        break;
      case 12:
        Xa(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ou(t)) : Xa(t);
        break;
      default:
        Xa(t);
    }
  }
  function ou(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          Pt = l, H0(
            l,
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
          Dn(8, e, e.return), ou(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, ou(e));
          break;
        default:
          ou(e);
      }
      t = t.sibling;
    }
  }
  function H0(t, e) {
    for (; Pt !== null; ) {
      var n = Pt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Dn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ua(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, Pt = l;
      else
        t: for (n = t; Pt !== null; ) {
          l = Pt;
          var i = l.sibling, u = l.return;
          if (U0(l), l === n) {
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
  var Z2 = {
    getCacheForType: function(t) {
      var e = ne(Vt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return ne(Vt).controller.signal;
    }
  }, V2 = typeof WeakMap == "function" ? WeakMap : Map, Tt = 0, Ot = null, At = null, gt = 0, xt = 0, Be = null, On = !1, Pl = !1, Rc = !1, gn = 0, qt = 0, Nn = 0, dl = 0, Qc = 0, Te = 0, $l = 0, Ka = null, he = null, Yc = !1, su = 0, q0 = 0, du = 1 / 0, Au = null, Rn = null, kt = 0, Qn = null, ta = null, yn = 0, Lc = 0, Hc = null, G0 = null, Ja = 0, qc = null;
  function xe() {
    return (Tt & 2) !== 0 && gt !== 0 ? gt & -gt : M.T !== null ? Xc() : eo();
  }
  function I0() {
    if (Te === 0)
      if ((gt & 536870912) === 0 || vt) {
        var t = wi;
        wi <<= 1, (wi & 3932160) === 0 && (wi = 262144), Te = t;
      } else Te = 536870912;
    return t = Ee.current, t !== null && (t.flags |= 32), Te;
  }
  function ge(t, e, n) {
    (t === Ot && (xt === 2 || xt === 9) || t.cancelPendingCommit !== null) && (ea(t, 0), Yn(
      t,
      gt,
      Te,
      !1
    )), ha(t, n), ((Tt & 2) === 0 || t !== Ot) && (t === Ot && ((Tt & 2) === 0 && (dl |= n), qt === 4 && Yn(
      t,
      gt,
      Te,
      !1
    )), ke(t));
  }
  function j0(t, e, n) {
    if ((Tt & 6) !== 0) throw Error(c(327));
    var l = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Aa(t, e), i = l ? J2(t, e) : Ic(t, e, !0), u = l;
    do {
      if (i === 0) {
        Pl && !l && Yn(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !X2(n)) {
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
              var b = h.current.memoizedState.isDehydrated;
              if (b && (ea(h, s).flags |= 256), s = Ic(
                h,
                s,
                !1
              ), s !== 2) {
                if (Rc && !b) {
                  h.errorRecoveryDisabledLanes |= u, dl |= u, i = 4;
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
          ea(t, 0), Yn(t, e, 0, !0);
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
              Yn(
                l,
                e,
                Te,
                !On
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
            if (Yn(
              l,
              e,
              Te,
              !On
            ), Si(l, 0, !0) !== 0) break t;
            yn = e, l.timeoutHandle = pd(
              Z0.bind(
                null,
                l,
                n,
                he,
                Au,
                Yc,
                e,
                Te,
                dl,
                $l,
                On,
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
            Au,
            Yc,
            e,
            Te,
            dl,
            $l,
            On,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ke(t);
  }
  function Z0(t, e, n, l, i, u, s, h, b, C, Q, q, U, N) {
    if (t.timeoutHandle = -1, q = e.subtreeFlags, q & 8192 || (q & 16785408) === 16785408) {
      q = {
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
        q
      );
      var k = (u & 62914560) === u ? su - $t() : (u & 4194048) === u ? q0 - $t() : 0;
      if (k = zh(
        q,
        k
      ), k !== null) {
        yn = u, t.cancelPendingCommit = k(
          W0.bind(
            null,
            t,
            e,
            u,
            n,
            l,
            i,
            s,
            h,
            b,
            Q,
            q,
            null,
            U,
            N
          )
        ), Yn(t, u, s, !C);
        return;
      }
    }
    W0(
      t,
      e,
      u,
      n,
      l,
      i,
      s,
      h,
      b
    );
  }
  function X2(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var i = n[l], u = i.getSnapshot;
          i = i.value;
          try {
            if (!be(u(), i)) return !1;
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
  function Yn(t, e, n, l) {
    e &= ~Qc, e &= ~dl, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var i = e; 0 < i; ) {
      var u = 31 - pe(i), s = 1 << u;
      l[u] = -1, i &= ~s;
    }
    n !== 0 && Pr(t, n, e);
  }
  function hu() {
    return (Tt & 6) === 0 ? (_a(0), !1) : !0;
  }
  function Gc() {
    if (At !== null) {
      if (xt === 0)
        var t = At.return;
      else
        t = At, an = ll = null, nc(t), Xl = null, Ma = 0, t = At;
      for (; t !== null; )
        b0(t.alternate, t), t = t.return;
      At = null;
    }
  }
  function ea(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, sh(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), yn = 0, Gc(), Ot = t, At = n = nn(t.current, null), gt = e, xt = 0, Be = null, On = !1, Pl = Aa(t, e), Rc = !1, $l = Te = Qc = dl = Nn = qt = 0, he = Ka = null, Yc = !1, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var i = 31 - pe(l), u = 1 << i;
        e |= t[i], l &= ~u;
      }
    return gn = e, Qi(), n;
  }
  function V0(t, e) {
    ot = null, M.H = Ha, e === Vl || e === Zi ? (e = us(), xt = 3) : e === Vf ? (e = us(), xt = 4) : xt = e === vc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Be = e, At === null && (qt = 1, lu(
      t,
      Oe(e, t.current)
    ));
  }
  function X0() {
    var t = Ee.current;
    return t === null ? !0 : (gt & 4194048) === gt ? Ye === null : (gt & 62914560) === gt || (gt & 536870912) !== 0 ? t === Ye : !1;
  }
  function K0() {
    var t = M.H;
    return M.H = Ha, t === null ? Ha : t;
  }
  function J0() {
    var t = M.A;
    return M.A = Z2, t;
  }
  function gu() {
    qt = 4, On || (gt & 4194048) !== gt && Ee.current !== null || (Pl = !0), (Nn & 134217727) === 0 && (dl & 134217727) === 0 || Ot === null || Yn(
      Ot,
      gt,
      Te,
      !1
    );
  }
  function Ic(t, e, n) {
    var l = Tt;
    Tt |= 2;
    var i = K0(), u = J0();
    (Ot !== t || gt !== e) && (Au = null, ea(t, e)), e = !1;
    var s = qt;
    t: do
      try {
        if (xt !== 0 && At !== null) {
          var h = At, b = Be;
          switch (xt) {
            case 8:
              Gc(), s = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ee.current === null && (e = !0);
              var C = xt;
              if (xt = 0, Be = null, na(t, h, b, C), n && Pl) {
                s = 0;
                break t;
              }
              break;
            default:
              C = xt, xt = 0, Be = null, na(t, h, b, C);
          }
        }
        K2(), s = qt;
        break;
      } catch (Q) {
        V0(t, Q);
      }
    while (!0);
    return e && t.shellSuspendCounter++, an = ll = null, Tt = l, M.H = i, M.A = u, At === null && (Ot = null, gt = 0, Qi()), s;
  }
  function K2() {
    for (; At !== null; ) _0(At);
  }
  function J2(t, e) {
    var n = Tt;
    Tt |= 2;
    var l = K0(), i = J0();
    Ot !== t || gt !== e ? (Au = null, du = $t() + 500, ea(t, e)) : Pl = Aa(
      t,
      e
    );
    t: do
      try {
        if (xt !== 0 && At !== null) {
          e = At;
          var u = Be;
          e: switch (xt) {
            case 1:
              xt = 0, Be = null, na(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (as(u)) {
                xt = 0, Be = null, F0(e);
                break;
              }
              e = function() {
                xt !== 2 && xt !== 9 || Ot !== t || (xt = 7), ke(t);
              }, u.then(e, e);
              break t;
            case 3:
              xt = 7;
              break t;
            case 4:
              xt = 5;
              break t;
            case 7:
              as(u) ? (xt = 0, Be = null, F0(e)) : (xt = 0, Be = null, na(t, e, u, 7));
              break;
            case 5:
              var s = null;
              switch (At.tag) {
                case 26:
                  s = At.memoizedState;
                case 5:
                case 27:
                  var h = At;
                  if (s ? Rd(s) : h.stateNode.complete) {
                    xt = 0, Be = null;
                    var b = h.sibling;
                    if (b !== null) At = b;
                    else {
                      var C = h.return;
                      C !== null ? (At = C, yu(C)) : At = null;
                    }
                    break e;
                  }
              }
              xt = 0, Be = null, na(t, e, u, 5);
              break;
            case 6:
              xt = 0, Be = null, na(t, e, u, 6);
              break;
            case 8:
              Gc(), qt = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        _2();
        break;
      } catch (Q) {
        V0(t, Q);
      }
    while (!0);
    return an = ll = null, M.H = l, M.A = i, Tt = n, At !== null ? 0 : (Ot = null, gt = 0, Qi(), qt);
  }
  function _2() {
    for (; At !== null && !sa(); )
      _0(At);
  }
  function _0(t) {
    var e = v0(t.alternate, t, gn);
    t.memoizedProps = t.pendingProps, e === null ? yu(t) : At = e;
  }
  function F0(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = d0(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          gt
        );
        break;
      case 11:
        e = d0(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          gt
        );
        break;
      case 5:
        nc(e);
      default:
        b0(n, e), e = At = Jo(e, gn), e = v0(n, e, gn);
    }
    t.memoizedProps = t.pendingProps, e === null ? yu(t) : At = e;
  }
  function na(t, e, n, l) {
    an = ll = null, nc(e), Xl = null, Ma = 0;
    var i = e.return;
    try {
      if (Y2(
        t,
        i,
        e,
        n,
        gt
      )) {
        qt = 1, lu(
          t,
          Oe(n, t.current)
        ), At = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw At = i, u;
      qt = 1, lu(
        t,
        Oe(n, t.current)
      ), At = null;
      return;
    }
    e.flags & 32768 ? (vt || l === 1 ? t = !0 : Pl || (gt & 536870912) !== 0 ? t = !1 : (On = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ee.current, l !== null && l.tag === 13 && (l.flags |= 16384))), k0(e, t)) : yu(e);
  }
  function yu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        k0(
          e,
          On
        );
        return;
      }
      t = e.return;
      var n = q2(
        e.alternate,
        e,
        gn
      );
      if (n !== null) {
        At = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        At = e;
        return;
      }
      At = e = t;
    } while (e !== null);
    qt === 0 && (qt = 5);
  }
  function k0(t, e) {
    do {
      var n = G2(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, At = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        At = t;
        return;
      }
      At = t = n;
    } while (t !== null);
    qt = 6, At = null;
  }
  function W0(t, e, n, l, i, u, s, h, b) {
    t.cancelPendingCommit = null;
    do
      mu();
    while (kt !== 0);
    if ((Tt & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      if (u = e.lanes | e.childLanes, u |= zf, CA(
        t,
        n,
        u,
        s,
        h,
        b
      ), t === Ot && (At = Ot = null, gt = 0), ta = e, Qn = t, yn = n, Lc = u, Hc = i, G0 = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, P2(pi, function() {
        return nd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null, i = X.p, X.p = 2, s = Tt, Tt |= 4;
        try {
          I2(t, e, n);
        } finally {
          Tt = s, X.p = i, M.T = l;
        }
      }
      kt = 1, P0(), $0(), td();
    }
  }
  function P0() {
    if (kt === 1) {
      kt = 0;
      var t = Qn, e = ta, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = M.T, M.T = null;
        var l = X.p;
        X.p = 2;
        var i = Tt;
        Tt |= 4;
        try {
          O0(e, t);
          var u = $c, s = Ho(t.containerInfo), h = u.focusedElem, b = u.selectionRange;
          if (s !== h && h && h.ownerDocument && Lo(
            h.ownerDocument.documentElement,
            h
          )) {
            if (b !== null && Bf(h)) {
              var C = b.start, Q = b.end;
              if (Q === void 0 && (Q = C), "selectionStart" in h)
                h.selectionStart = C, h.selectionEnd = Math.min(
                  Q,
                  h.value.length
                );
              else {
                var q = h.ownerDocument || document, U = q && q.defaultView || window;
                if (U.getSelection) {
                  var N = U.getSelection(), k = h.textContent.length, lt = Math.min(b.start, k), Mt = b.end === void 0 ? lt : Math.min(b.end, k);
                  !N.extend && lt > Mt && (s = Mt, Mt = lt, lt = s);
                  var T = Yo(
                    h,
                    lt
                  ), E = Yo(
                    h,
                    Mt
                  );
                  if (T && E && (N.rangeCount !== 1 || N.anchorNode !== T.node || N.anchorOffset !== T.offset || N.focusNode !== E.node || N.focusOffset !== E.offset)) {
                    var x = q.createRange();
                    x.setStart(T.node, T.offset), N.removeAllRanges(), lt > Mt ? (N.addRange(x), N.extend(E.node, E.offset)) : (x.setEnd(E.node, E.offset), N.addRange(x));
                  }
                }
              }
            }
            for (q = [], N = h; N = N.parentNode; )
              N.nodeType === 1 && q.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < q.length; h++) {
              var L = q[h];
              L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
            }
          }
          zu = !!Pc, $c = Pc = null;
        } finally {
          Tt = i, X.p = l, M.T = n;
        }
      }
      t.current = e, kt = 2;
    }
  }
  function $0() {
    if (kt === 2) {
      kt = 0;
      var t = Qn, e = ta, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = M.T, M.T = null;
        var l = X.p;
        X.p = 2;
        var i = Tt;
        Tt |= 4;
        try {
          C0(t, e.alternate, e);
        } finally {
          Tt = i, X.p = l, M.T = n;
        }
      }
      kt = 3;
    }
  }
  function td() {
    if (kt === 4 || kt === 3) {
      kt = 0, vi();
      var t = Qn, e = ta, n = yn, l = G0;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? kt = 5 : (kt = 0, ta = Qn = null, ed(t, t.pendingLanes));
      var i = t.pendingLanes;
      if (i === 0 && (Rn = null), af(n), e = e.stateNode, ve && typeof ve.onCommitFiberRoot == "function")
        try {
          ve.onCommitFiberRoot(
            da,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        e = M.T, i = X.p, X.p = 2, M.T = null;
        try {
          for (var u = t.onRecoverableError, s = 0; s < l.length; s++) {
            var h = l[s];
            u(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          M.T = e, X.p = i;
        }
      }
      (yn & 3) !== 0 && mu(), ke(t), i = t.pendingLanes, (n & 261930) !== 0 && (i & 42) !== 0 ? t === qc ? Ja++ : (Ja = 0, qc = t) : Ja = 0, _a(0);
    }
  }
  function ed(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ua(e)));
  }
  function mu() {
    return P0(), $0(), td(), nd();
  }
  function nd() {
    if (kt !== 5) return !1;
    var t = Qn, e = Lc;
    Lc = 0;
    var n = af(yn), l = M.T, i = X.p;
    try {
      X.p = 32 > n ? 32 : n, M.T = null, n = Hc, Hc = null;
      var u = Qn, s = yn;
      if (kt = 0, ta = Qn = null, yn = 0, (Tt & 6) !== 0) throw Error(c(331));
      var h = Tt;
      if (Tt |= 4, L0(u.current), R0(
        u,
        u.current,
        s,
        n
      ), Tt = h, _a(0, !1), ve && typeof ve.onPostCommitFiberRoot == "function")
        try {
          ve.onPostCommitFiberRoot(da, u);
        } catch {
        }
      return !0;
    } finally {
      X.p = i, M.T = l, ed(t, e);
    }
  }
  function ld(t, e, n) {
    e = Oe(n, e), e = mc(t.stateNode, e, 2), t = Un(t, e, 2), t !== null && (ha(t, 2), ke(t));
  }
  function Ct(t, e, n) {
    if (t.tag === 3)
      ld(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          ld(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Rn === null || !Rn.has(l))) {
            t = Oe(n, t), n = a0(2), l = Un(e, n, 2), l !== null && (i0(
              n,
              l,
              e,
              t
            ), ha(l, 2), ke(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function jc(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new V2();
      var i = /* @__PURE__ */ new Set();
      l.set(e, i);
    } else
      i = l.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), l.set(e, i));
    i.has(n) || (Rc = !0, i.add(n), t = F2.bind(null, t, e, n), e.then(t, t));
  }
  function F2(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Ot === t && (gt & n) === n && (qt === 4 || qt === 3 && (gt & 62914560) === gt && 300 > $t() - su ? (Tt & 2) === 0 && ea(t, 0) : Qc |= n, $l === gt && ($l = 0)), ke(t);
  }
  function ad(t, e) {
    e === 0 && (e = Wr()), t = tl(t, e), t !== null && (ha(t, e), ke(t));
  }
  function k2(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), ad(t, n);
  }
  function W2(t, e) {
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
    l !== null && l.delete(e), ad(t, n);
  }
  function P2(t, e) {
    return Ke(t, e);
  }
  var vu = null, la = null, Zc = !1, pu = !1, Vc = !1, Ln = 0;
  function ke(t) {
    t !== la && t.next === null && (la === null ? vu = la = t : la = la.next = t), pu = !0, Zc || (Zc = !0, th());
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
            u !== 0 && (n = !0, cd(l, u));
          } else
            u = gt, u = Si(
              l,
              l === Ot ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || Aa(l, u) || (n = !0, cd(l, u));
          l = l.next;
        }
      while (n);
      Vc = !1;
    }
  }
  function $2() {
    id();
  }
  function id() {
    pu = Zc = !1;
    var t = 0;
    Ln !== 0 && oh() && (t = Ln);
    for (var e = $t(), n = null, l = vu; l !== null; ) {
      var i = l.next, u = ud(l, e);
      u === 0 ? (l.next = null, n === null ? vu = i : n.next = i, i === null && (la = n)) : (n = l, (t !== 0 || (u & 3) !== 0) && (pu = !0)), l = i;
    }
    kt !== 0 && kt !== 5 || _a(t), Ln !== 0 && (Ln = 0);
  }
  function ud(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, i = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var s = 31 - pe(u), h = 1 << s, b = i[s];
      b === -1 ? ((h & n) === 0 || (h & l) !== 0) && (i[s] = xA(h, e)) : b <= e && (t.expiredLanes |= h), u &= ~h;
    }
    if (e = Ot, n = gt, n = Si(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, n === 0 || t === e && (xt === 2 || xt === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && vn(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Aa(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (l !== null && vn(l), af(n)) {
        case 2:
        case 8:
          n = Fr;
          break;
        case 32:
          n = pi;
          break;
        case 268435456:
          n = kr;
          break;
        default:
          n = pi;
      }
      return l = fd.bind(null, t), n = Ke(n, l), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return l !== null && l !== null && vn(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function fd(t, e) {
    if (kt !== 0 && kt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (mu() && t.callbackNode !== n)
      return null;
    var l = gt;
    return l = Si(
      t,
      t === Ot ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (j0(t, l, e), ud(t, $t()), t.callbackNode != null && t.callbackNode === n ? fd.bind(null, t) : null);
  }
  function cd(t, e) {
    if (mu()) return null;
    j0(t, e, !0);
  }
  function th() {
    dh(function() {
      (Tt & 6) !== 0 ? Ke(
        _r,
        $2
      ) : id();
    });
  }
  function Xc() {
    if (Ln === 0) {
      var t = jl;
      t === 0 && (t = bi, bi <<= 1, (bi & 261888) === 0 && (bi = 256)), Ln = t;
    }
    return Ln;
  }
  function rd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ci("" + t);
  }
  function od(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function eh(t, e, n, l, i) {
    if (e === "submit" && n && n.stateNode === i) {
      var u = rd(
        (i[re] || null).action
      ), s = l.submitter;
      s && (e = (e = s[re] || null) ? rd(e.formAction) : s.getAttribute("formAction"), e !== null && (u = e, s = null));
      var h = new Di(
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
                if (Ln !== 0) {
                  var b = s ? od(i, s) : new FormData(i);
                  sc(
                    n,
                    {
                      pending: !0,
                      data: b,
                      method: i.method,
                      action: u
                    },
                    null,
                    b
                  );
                }
              } else
                typeof u == "function" && (h.preventDefault(), b = s ? od(i, s) : new FormData(i), sc(
                  n,
                  {
                    pending: !0,
                    data: b,
                    method: i.method,
                    action: u
                  },
                  u,
                  b
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var Kc = 0; Kc < Uf.length; Kc++) {
    var Jc = Uf[Kc], nh = Jc.toLowerCase(), lh = Jc[0].toUpperCase() + Jc.slice(1);
    qe(
      nh,
      "on" + lh
    );
  }
  qe(Io, "onAnimationEnd"), qe(jo, "onAnimationIteration"), qe(Zo, "onAnimationStart"), qe("dblclick", "onDoubleClick"), qe("focusin", "onFocus"), qe("focusout", "onBlur"), qe(p2, "onTransitionRun"), qe(b2, "onTransitionStart"), qe(w2, "onTransitionCancel"), qe(Vo, "onTransitionEnd"), Ul("onMouseEnter", ["mouseout", "mouseover"]), Ul("onMouseLeave", ["mouseout", "mouseover"]), Ul("onPointerEnter", ["pointerout", "pointerover"]), Ul("onPointerLeave", ["pointerout", "pointerover"]), kn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), kn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), kn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), kn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), kn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), kn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Fa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ah = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fa)
  );
  function sd(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n], i = l.event;
      l = l.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var s = l.length - 1; 0 <= s; s--) {
            var h = l[s], b = h.instance, C = h.currentTarget;
            if (h = h.listener, b !== u && i.isPropagationStopped())
              break t;
            u = h, i.currentTarget = C;
            try {
              u(i);
            } catch (Q) {
              Ri(Q);
            }
            i.currentTarget = null, u = b;
          }
        else
          for (s = 0; s < l.length; s++) {
            if (h = l[s], b = h.instance, C = h.currentTarget, h = h.listener, b !== u && i.isPropagationStopped())
              break t;
            u = h, i.currentTarget = C;
            try {
              u(i);
            } catch (Q) {
              Ri(Q);
            }
            i.currentTarget = null, u = b;
          }
      }
    }
  }
  function ht(t, e) {
    var n = e[uf];
    n === void 0 && (n = e[uf] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    n.has(l) || (dd(e, t, 2, !1), n.add(l));
  }
  function _c(t, e, n) {
    var l = 0;
    e && (l |= 4), dd(
      n,
      t,
      l,
      e
    );
  }
  var bu = "_reactListening" + Math.random().toString(36).slice(2);
  function Fc(t) {
    if (!t[bu]) {
      t[bu] = !0, ao.forEach(function(n) {
        n !== "selectionchange" && (ah.has(n) || _c(n, !1, t), _c(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[bu] || (e[bu] = !0, _c("selectionchange", !1, e));
    }
  }
  function dd(t, e, n, l) {
    switch (Id(e)) {
      case 2:
        var i = Oh;
        break;
      case 8:
        i = Nh;
        break;
      default:
        i = or;
    }
    n = i.bind(
      null,
      e,
      n,
      t
    ), i = void 0, !gf || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), l ? i !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: i
    }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
      passive: i
    }) : t.addEventListener(e, n, !1);
  }
  function kc(t, e, n, l, i) {
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
              var b = s.tag;
              if ((b === 3 || b === 4) && s.stateNode.containerInfo === i)
                return;
              s = s.return;
            }
          for (; h !== null; ) {
            if (s = Tl(h), s === null) return;
            if (b = s.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              l = u = s;
              continue t;
            }
            h = h.parentNode;
          }
        }
        l = l.return;
      }
    mo(function() {
      var C = u, Q = Af(n), q = [];
      t: {
        var U = Xo.get(t);
        if (U !== void 0) {
          var N = Di, k = t;
          switch (t) {
            case "keypress":
              if (zi(n) === 0) break t;
            case "keydown":
            case "keyup":
              N = WA;
              break;
            case "focusin":
              k = "focus", N = pf;
              break;
            case "focusout":
              k = "blur", N = pf;
              break;
            case "beforeblur":
            case "afterblur":
              N = pf;
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
              N = bo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = qA;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = t2;
              break;
            case Io:
            case jo:
            case Zo:
              N = jA;
              break;
            case Vo:
              N = n2;
              break;
            case "scroll":
            case "scrollend":
              N = LA;
              break;
            case "wheel":
              N = a2;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = VA;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Eo;
              break;
            case "toggle":
            case "beforetoggle":
              N = u2;
          }
          var lt = (e & 4) !== 0, Mt = !lt && (t === "scroll" || t === "scrollend"), T = lt ? U !== null ? U + "Capture" : null : U;
          lt = [];
          for (var E = C, x; E !== null; ) {
            var L = E;
            if (x = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || x === null || T === null || (L = ma(E, T), L != null && lt.push(
              ka(E, L, x)
            )), Mt) break;
            E = E.return;
          }
          0 < lt.length && (U = new N(
            U,
            k,
            null,
            n,
            Q
          ), q.push({ event: U, listeners: lt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (U = t === "mouseover" || t === "pointerover", N = t === "mouseout" || t === "pointerout", U && n !== df && (k = n.relatedTarget || n.fromElement) && (Tl(k) || k[Bl]))
            break t;
          if ((N || U) && (U = Q.window === Q ? Q : (U = Q.ownerDocument) ? U.defaultView || U.parentWindow : window, N ? (k = n.relatedTarget || n.toElement, N = C, k = k ? Tl(k) : null, k !== null && (Mt = d(k), lt = k.tag, k !== Mt || lt !== 5 && lt !== 27 && lt !== 6) && (k = null)) : (N = null, k = C), N !== k)) {
            if (lt = bo, L = "onMouseLeave", T = "onMouseEnter", E = "mouse", (t === "pointerout" || t === "pointerover") && (lt = Eo, L = "onPointerLeave", T = "onPointerEnter", E = "pointer"), Mt = N == null ? U : ya(N), x = k == null ? U : ya(k), U = new lt(
              L,
              E + "leave",
              N,
              n,
              Q
            ), U.target = Mt, U.relatedTarget = x, L = null, Tl(Q) === C && (lt = new lt(
              T,
              E + "enter",
              k,
              n,
              Q
            ), lt.target = x, lt.relatedTarget = Mt, L = lt), Mt = L, N && k)
              e: {
                for (lt = ih, T = N, E = k, x = 0, L = T; L; L = lt(L))
                  x++;
                L = 0;
                for (var et = E; et; et = lt(et))
                  L++;
                for (; 0 < x - L; )
                  T = lt(T), x--;
                for (; 0 < L - x; )
                  E = lt(E), L--;
                for (; x--; ) {
                  if (T === E || E !== null && T === E.alternate) {
                    lt = T;
                    break e;
                  }
                  T = lt(T), E = lt(E);
                }
                lt = null;
              }
            else lt = null;
            N !== null && Ad(
              q,
              U,
              N,
              lt,
              !1
            ), k !== null && Mt !== null && Ad(
              q,
              Mt,
              k,
              lt,
              !0
            );
          }
        }
        t: {
          if (U = C ? ya(C) : window, N = U.nodeName && U.nodeName.toLowerCase(), N === "select" || N === "input" && U.type === "file")
            var Et = Mo;
          else if (Uo(U))
            if (Do)
              Et = y2;
            else {
              Et = h2;
              var P = A2;
            }
          else
            N = U.nodeName, !N || N.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? C && sf(C.elementType) && (Et = Mo) : Et = g2;
          if (Et && (Et = Et(t, C))) {
            zo(
              q,
              Et,
              n,
              Q
            );
            break t;
          }
          P && P(t, U, C), t === "focusout" && C && U.type === "number" && C.memoizedProps.value != null && of(U, "number", U.value);
        }
        switch (P = C ? ya(C) : window, t) {
          case "focusin":
            (Uo(P) || P.contentEditable === "true") && (Rl = P, Tf = C, Ta = null);
            break;
          case "focusout":
            Ta = Tf = Rl = null;
            break;
          case "mousedown":
            xf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xf = !1, qo(q, n, Q);
            break;
          case "selectionchange":
            if (v2) break;
          case "keydown":
          case "keyup":
            qo(q, n, Q);
        }
        var st;
        if (wf)
          t: {
            switch (t) {
              case "compositionstart":
                var yt = "onCompositionStart";
                break t;
              case "compositionend":
                yt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                yt = "onCompositionUpdate";
                break t;
            }
            yt = void 0;
          }
        else
          Nl ? xo(t, n) && (yt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (yt = "onCompositionStart");
        yt && (So && n.locale !== "ko" && (Nl || yt !== "onCompositionStart" ? yt === "onCompositionEnd" && Nl && (st = vo()) : (wn = Q, yf = "value" in wn ? wn.value : wn.textContent, Nl = !0)), P = wu(C, yt), 0 < P.length && (yt = new wo(
          yt,
          t,
          null,
          n,
          Q
        ), q.push({ event: yt, listeners: P }), st ? yt.data = st : (st = Co(n), st !== null && (yt.data = st)))), (st = c2 ? r2(t, n) : o2(t, n)) && (yt = wu(C, "onBeforeInput"), 0 < yt.length && (P = new wo(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          Q
        ), q.push({
          event: P,
          listeners: yt
        }), P.data = st)), eh(
          q,
          t,
          C,
          n,
          Q
        );
      }
      sd(q, e);
    });
  }
  function ka(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function wu(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var i = t, u = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = ma(t, n), i != null && l.unshift(
        ka(t, i, u)
      ), i = ma(t, e), i != null && l.push(
        ka(t, i, u)
      )), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function ih(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Ad(t, e, n, l, i) {
    for (var u = e._reactName, s = []; n !== null && n !== l; ) {
      var h = n, b = h.alternate, C = h.stateNode;
      if (h = h.tag, b !== null && b === l) break;
      h !== 5 && h !== 26 && h !== 27 || C === null || (b = C, i ? (C = ma(n, u), C != null && s.unshift(
        ka(n, C, b)
      )) : i || (C = ma(n, u), C != null && s.push(
        ka(n, C, b)
      ))), n = n.return;
    }
    s.length !== 0 && t.push({ event: e, listeners: s });
  }
  var uh = /\r\n?/g, fh = /\u0000|\uFFFD/g;
  function hd(t) {
    return (typeof t == "string" ? t : "" + t).replace(uh, `
`).replace(fh, "");
  }
  function gd(t, e) {
    return e = hd(e), hd(t) === e;
  }
  function zt(t, e, n, l, i, u) {
    switch (n) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Ml(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Ml(t, "" + l);
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
        go(t, l, u);
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
        l = Ci("" + l), t.setAttribute(n, l);
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
          typeof u == "function" && (n === "formAction" ? (e !== "input" && zt(t, e, "name", i.name, i, null), zt(
            t,
            e,
            "formEncType",
            i.formEncType,
            i,
            null
          ), zt(
            t,
            e,
            "formMethod",
            i.formMethod,
            i,
            null
          ), zt(
            t,
            e,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (zt(t, e, "encType", i.encType, i, null), zt(t, e, "method", i.method, i, null), zt(t, e, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Ci("" + l), t.setAttribute(n, l);
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
        n = Ci("" + l), t.setAttributeNS(
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
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = QA.get(n) || n, Bi(t, n, l));
    }
  }
  function Wc(t, e, n, l, i, u) {
    switch (n) {
      case "style":
        go(t, l, u);
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
        typeof l == "string" ? Ml(t, l) : (typeof l == "number" || typeof l == "bigint") && Ml(t, "" + l);
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
        if (!io.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), e = n.slice(2, i ? n.length - 7 : void 0), u = t[re] || null, u = u != null ? u[n] : null, typeof u == "function" && t.removeEventListener(e, u, i), typeof l == "function")) {
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
                  zt(t, e, u, s, n, null);
              }
          }
        i && zt(t, e, "srcSet", n.srcSet, n, null), l && zt(t, e, "src", n.src, n, null);
        return;
      case "input":
        ht("invalid", t);
        var h = u = s = i = null, b = null, C = null;
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
                  b = Q;
                  break;
                case "defaultChecked":
                  C = Q;
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
                  zt(t, e, l, Q, n, null);
              }
          }
        oo(
          t,
          u,
          h,
          b,
          C,
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
                zt(t, e, i, h, n, null);
            }
        e = u, n = s, t.multiple = !!l, e != null ? zl(t, !!l, e, !1) : n != null && zl(t, !!l, n, !0);
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
                zt(t, e, s, h, n, null);
            }
        Ao(t, l, i, u);
        return;
      case "option":
        for (b in n)
          if (n.hasOwnProperty(b) && (l = n[b], l != null))
            switch (b) {
              case "selected":
                t.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                zt(t, e, b, l, n, null);
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
        for (C in n)
          if (n.hasOwnProperty(C) && (l = n[C], l != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                zt(t, e, C, l, n, null);
            }
        return;
      default:
        if (sf(e)) {
          for (Q in n)
            n.hasOwnProperty(Q) && (l = n[Q], l !== void 0 && Wc(
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
      n.hasOwnProperty(h) && (l = n[h], l != null && zt(t, e, h, l, n, null));
  }
  function ch(t, e, n, l) {
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
        var i = null, u = null, s = null, h = null, b = null, C = null, Q = null;
        for (N in n) {
          var q = n[N];
          if (n.hasOwnProperty(N) && q != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = q;
              default:
                l.hasOwnProperty(N) || zt(t, e, N, null, l, q);
            }
        }
        for (var U in l) {
          var N = l[U];
          if (q = n[U], l.hasOwnProperty(U) && (N != null || q != null))
            switch (U) {
              case "type":
                u = N;
                break;
              case "name":
                i = N;
                break;
              case "checked":
                C = N;
                break;
              case "defaultChecked":
                Q = N;
                break;
              case "value":
                s = N;
                break;
              case "defaultValue":
                h = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(c(137, e));
                break;
              default:
                N !== q && zt(
                  t,
                  e,
                  U,
                  N,
                  l,
                  q
                );
            }
        }
        rf(
          t,
          s,
          h,
          b,
          C,
          Q,
          u,
          i
        );
        return;
      case "select":
        N = s = h = U = null;
        for (u in n)
          if (b = n[u], n.hasOwnProperty(u) && b != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                N = b;
              default:
                l.hasOwnProperty(u) || zt(
                  t,
                  e,
                  u,
                  null,
                  l,
                  b
                );
            }
        for (i in l)
          if (u = l[i], b = n[i], l.hasOwnProperty(i) && (u != null || b != null))
            switch (i) {
              case "value":
                U = u;
                break;
              case "defaultValue":
                h = u;
                break;
              case "multiple":
                s = u;
              default:
                u !== b && zt(
                  t,
                  e,
                  i,
                  u,
                  l,
                  b
                );
            }
        e = h, n = s, l = N, U != null ? zl(t, !!n, U, !1) : !!l != !!n && (e != null ? zl(t, !!n, e, !0) : zl(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        N = U = null;
        for (h in n)
          if (i = n[h], n.hasOwnProperty(h) && i != null && !l.hasOwnProperty(h))
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                zt(t, e, h, null, l, i);
            }
        for (s in l)
          if (i = l[s], u = n[s], l.hasOwnProperty(s) && (i != null || u != null))
            switch (s) {
              case "value":
                U = i;
                break;
              case "defaultValue":
                N = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(c(91));
                break;
              default:
                i !== u && zt(t, e, s, i, l, u);
            }
        so(t, U, N);
        return;
      case "option":
        for (var k in n)
          if (U = n[k], n.hasOwnProperty(k) && U != null && !l.hasOwnProperty(k))
            switch (k) {
              case "selected":
                t.selected = !1;
                break;
              default:
                zt(
                  t,
                  e,
                  k,
                  null,
                  l,
                  U
                );
            }
        for (b in l)
          if (U = l[b], N = n[b], l.hasOwnProperty(b) && U !== N && (U != null || N != null))
            switch (b) {
              case "selected":
                t.selected = U && typeof U != "function" && typeof U != "symbol";
                break;
              default:
                zt(
                  t,
                  e,
                  b,
                  U,
                  l,
                  N
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
          U = n[lt], n.hasOwnProperty(lt) && U != null && !l.hasOwnProperty(lt) && zt(t, e, lt, null, l, U);
        for (C in l)
          if (U = l[C], N = n[C], l.hasOwnProperty(C) && U !== N && (U != null || N != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(c(137, e));
                break;
              default:
                zt(
                  t,
                  e,
                  C,
                  U,
                  l,
                  N
                );
            }
        return;
      default:
        if (sf(e)) {
          for (var Mt in n)
            U = n[Mt], n.hasOwnProperty(Mt) && U !== void 0 && !l.hasOwnProperty(Mt) && Wc(
              t,
              e,
              Mt,
              void 0,
              l,
              U
            );
          for (Q in l)
            U = l[Q], N = n[Q], !l.hasOwnProperty(Q) || U === N || U === void 0 && N === void 0 || Wc(
              t,
              e,
              Q,
              U,
              l,
              N
            );
          return;
        }
    }
    for (var T in n)
      U = n[T], n.hasOwnProperty(T) && U != null && !l.hasOwnProperty(T) && zt(t, e, T, null, l, U);
    for (q in l)
      U = l[q], N = n[q], !l.hasOwnProperty(q) || U === N || U == null && N == null || zt(t, e, q, U, l, N);
  }
  function yd(t) {
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
  function rh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var i = n[l], u = i.transferSize, s = i.initiatorType, h = i.duration;
        if (u && h && yd(s)) {
          for (s = 0, h = i.responseEnd, l += 1; l < n.length; l++) {
            var b = n[l], C = b.startTime;
            if (C > h) break;
            var Q = b.transferSize, q = b.initiatorType;
            Q && yd(q) && (b = b.responseEnd, s += Q * (b < h ? 1 : (h - C) / (b - C)));
          }
          if (--l, e += 8 * (u + s) / (i.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Pc = null, $c = null;
  function Eu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function md(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function vd(t, e) {
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
  function tr(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var er = null;
  function oh() {
    var t = window.event;
    return t && t.type === "popstate" ? t === er ? !1 : (er = t, !0) : (er = null, !1);
  }
  var pd = typeof setTimeout == "function" ? setTimeout : void 0, sh = typeof clearTimeout == "function" ? clearTimeout : void 0, bd = typeof Promise == "function" ? Promise : void 0, dh = typeof queueMicrotask == "function" ? queueMicrotask : typeof bd < "u" ? function(t) {
    return bd.resolve(null).then(t).catch(Ah);
  } : pd;
  function Ah(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Hn(t) {
    return t === "head";
  }
  function wd(t, e) {
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
          Wa(t.ownerDocument.documentElement);
        else if (n === "head") {
          n = t.ownerDocument.head, Wa(n);
          for (var u = n.firstChild; u; ) {
            var s = u.nextSibling, h = u.nodeName;
            u[ga] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = s;
          }
        } else
          n === "body" && Wa(t.ownerDocument.body);
      n = i;
    } while (n);
    fa(e);
  }
  function Ed(t, e) {
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
  function nr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          nr(n), ff(n);
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
  function hh(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var i = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[ga])
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
      if (t = Le(t.nextSibling), t === null) break;
    }
    return null;
  }
  function gh(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Le(t.nextSibling), t === null)) return null;
    return t;
  }
  function Sd(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Le(t.nextSibling), t === null)) return null;
    return t;
  }
  function lr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function ar(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function yh(t, e) {
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
  var ir = null;
  function Bd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Le(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Td(t) {
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
  function xd(t, e, n) {
    switch (e = Eu(n), t) {
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
  function Wa(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    ff(t);
  }
  var He = /* @__PURE__ */ new Map(), Cd = /* @__PURE__ */ new Set();
  function Su(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var mn = X.d;
  X.d = {
    f: mh,
    r: vh,
    D: ph,
    C: bh,
    L: wh,
    m: Eh,
    X: Bh,
    S: Sh,
    M: Th
  };
  function mh() {
    var t = mn.f(), e = hu();
    return t || e;
  }
  function vh(t) {
    var e = xl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Vs(e) : mn.r(t);
  }
  var aa = typeof document > "u" ? null : document;
  function Ud(t, e, n) {
    var l = aa;
    if (l && typeof e == "string" && e) {
      var i = Me(e);
      i = 'link[rel="' + t + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), Cd.has(i) || (Cd.add(i), t = { rel: t, crossOrigin: n, href: e }, l.querySelector(i) === null && (e = l.createElement("link"), ae(e, "link", t), Wt(e), l.head.appendChild(e)));
    }
  }
  function ph(t) {
    mn.D(t), Ud("dns-prefetch", t, null);
  }
  function bh(t, e) {
    mn.C(t, e), Ud("preconnect", t, e);
  }
  function wh(t, e, n) {
    mn.L(t, e, n);
    var l = aa;
    if (l && t && e) {
      var i = 'link[rel="preload"][as="' + Me(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Me(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Me(
        n.imageSizes
      ) + '"]')) : i += '[href="' + Me(t) + '"]';
      var u = i;
      switch (e) {
        case "style":
          u = ia(t);
          break;
        case "script":
          u = ua(t);
      }
      He.has(u) || (t = m(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), He.set(u, t), l.querySelector(i) !== null || e === "style" && l.querySelector(Pa(u)) || e === "script" && l.querySelector($a(u)) || (e = l.createElement("link"), ae(e, "link", t), Wt(e), l.head.appendChild(e)));
    }
  }
  function Eh(t, e) {
    mn.m(t, e);
    var n = aa;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", i = 'link[rel="modulepreload"][as="' + Me(l) + '"][href="' + Me(t) + '"]', u = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ua(t);
      }
      if (!He.has(u) && (t = m({ rel: "modulepreload", href: t }, e), He.set(u, t), n.querySelector(i) === null)) {
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
        l = n.createElement("link"), ae(l, "link", t), Wt(l), n.head.appendChild(l);
      }
    }
  }
  function Sh(t, e, n) {
    mn.S(t, e, n);
    var l = aa;
    if (l && t) {
      var i = Cl(l).hoistableStyles, u = ia(t);
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
          ), (n = He.get(u)) && ur(t, n);
          var b = s = l.createElement("link");
          Wt(b), ae(b, "link", t), b._p = new Promise(function(C, Q) {
            b.onload = C, b.onerror = Q;
          }), b.addEventListener("load", function() {
            h.loading |= 1;
          }), b.addEventListener("error", function() {
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
  function Bh(t, e) {
    mn.X(t, e);
    var n = aa;
    if (n && t) {
      var l = Cl(n).hoistableScripts, i = ua(t), u = l.get(i);
      u || (u = n.querySelector($a(i)), u || (t = m({ src: t, async: !0 }, e), (e = He.get(i)) && fr(t, e), u = n.createElement("script"), Wt(u), ae(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(i, u));
    }
  }
  function Th(t, e) {
    mn.M(t, e);
    var n = aa;
    if (n && t) {
      var l = Cl(n).hoistableScripts, i = ua(t), u = l.get(i);
      u || (u = n.querySelector($a(i)), u || (t = m({ src: t, async: !0, type: "module" }, e), (e = He.get(i)) && fr(t, e), u = n.createElement("script"), Wt(u), ae(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(i, u));
    }
  }
  function zd(t, e, n, l) {
    var i = (i = ct.current) ? Su(i) : null;
    if (!i) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ia(n.href), n = Cl(
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
          var u = Cl(
            i
          ).hoistableStyles, s = u.get(t);
          if (s || (i = i.ownerDocument || i, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, s), (u = i.querySelector(
            Pa(t)
          )) && !u._p && (s.instance = u, s.state.loading = 5), He.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, He.set(t, n), u || xh(
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
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ua(n), n = Cl(
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
    return 'href="' + Me(t) + '"';
  }
  function Pa(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Md(t) {
    return m({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function xh(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), ae(e, "link", n), Wt(e), t.head.appendChild(e));
  }
  function ua(t) {
    return '[src="' + Me(t) + '"]';
  }
  function $a(t) {
    return "script[async]" + t;
  }
  function Dd(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + Me(n.href) + '"]'
          );
          if (l)
            return e.instance = l, Wt(l), l;
          var i = m({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), Wt(l), ae(l, "style", i), Bu(l, n.precedence, t), e.instance = l;
        case "stylesheet":
          i = ia(n.href);
          var u = t.querySelector(
            Pa(i)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, Wt(u), u;
          l = Md(n), (i = He.get(i)) && ur(l, i), u = (t.ownerDocument || t).createElement("link"), Wt(u);
          var s = u;
          return s._p = new Promise(function(h, b) {
            s.onload = h, s.onerror = b;
          }), ae(u, "link", l), e.state.loading |= 4, Bu(u, n.precedence, t), e.instance = u;
        case "script":
          return u = ua(n.src), (i = t.querySelector(
            $a(u)
          )) ? (e.instance = i, Wt(i), i) : (l = n, (i = He.get(u)) && (l = m({}, n), fr(l, i)), t = t.ownerDocument || t, i = t.createElement("script"), Wt(i), ae(i, "link", l), t.head.appendChild(i), e.instance = i);
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
  function ur(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function fr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Tu = null;
  function Od(t, e, n) {
    if (Tu === null) {
      var l = /* @__PURE__ */ new Map(), i = Tu = /* @__PURE__ */ new Map();
      i.set(n, l);
    } else
      i = Tu, l = i.get(n), l || (l = /* @__PURE__ */ new Map(), i.set(n, l));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), i = 0; i < n.length; i++) {
      var u = n[i];
      if (!(u[ga] || u[te] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = u.getAttribute(e) || "";
        s = t + s;
        var h = l.get(s);
        h ? h.push(u) : l.set(s, [u]);
      }
    }
    return l;
  }
  function Nd(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Ch(t, e, n) {
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
  function Rd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Uh(t, e, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var i = ia(l.href), u = e.querySelector(
          Pa(i)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = xu.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, Wt(u);
          return;
        }
        u = e.ownerDocument || e, l = Md(l), (i = He.get(i)) && ur(l, i), u = u.createElement("link"), Wt(u);
        var s = u;
        s._p = new Promise(function(h, b) {
          s.onload = h, s.onerror = b;
        }), ae(u, "link", l), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = xu.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var cr = 0;
  function zh(t, e) {
    return t.stylesheets && t.count === 0 && Uu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (t.stylesheets && Uu(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && cr === 0 && (cr = 62500 * rh());
      var i = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Uu(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > cr ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(i);
      };
    } : null;
  }
  function xu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Uu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Cu = null;
  function Uu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Cu = /* @__PURE__ */ new Map(), e.forEach(Mh, t), Cu = null, xu.call(t));
  }
  function Mh(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Cu.get(t);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Cu.set(t, n);
        for (var i = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < i.length; u++) {
          var s = i[u];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (n.set(s.dataset.precedence, s), l = s);
        }
        l && n.set(null, l);
      }
      i = e.instance, s = i.getAttribute("data-precedence"), u = n.get(s) || l, u === l && n.set(null, i), n.set(s, i), this.count++, l = xu.bind(this), i.addEventListener("load", l), i.addEventListener("error", l), u ? u.parentNode.insertBefore(i, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(i, t.firstChild)), e.state.loading |= 4;
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
  function Dh(t, e, n, l, i, u, s, h, b) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = nf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nf(0), this.hiddenUpdates = nf(null), this.identifierPrefix = l, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Qd(t, e, n, l, i, u, s, h, b, C, Q, q) {
    return t = new Dh(
      t,
      e,
      n,
      s,
      b,
      C,
      Q,
      q,
      h
    ), e = 1, u === !0 && (e |= 24), u = we(3, null, null, e), t.current = u, u.stateNode = t, e = If(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: e
    }, Xf(u), t;
  }
  function Yd(t) {
    return t ? (t = Ll, t) : Ll;
  }
  function Ld(t, e, n, l, i, u) {
    i = Yd(i), l.context === null ? l.context = i : l.pendingContext = i, l = Cn(e), l.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = Un(t, l, e), n !== null && (ge(n, t, e), Oa(n, t, e));
  }
  function Hd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function rr(t, e) {
    Hd(t, e), (t = t.alternate) && Hd(t, e);
  }
  function qd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = tl(t, 67108864);
      e !== null && ge(e, t, 67108864), rr(t, 67108864);
    }
  }
  function Gd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = xe();
      e = lf(e);
      var n = tl(t, e);
      n !== null && ge(n, t, e), rr(t, e);
    }
  }
  var zu = !0;
  function Oh(t, e, n, l) {
    var i = M.T;
    M.T = null;
    var u = X.p;
    try {
      X.p = 2, or(t, e, n, l);
    } finally {
      X.p = u, M.T = i;
    }
  }
  function Nh(t, e, n, l) {
    var i = M.T;
    M.T = null;
    var u = X.p;
    try {
      X.p = 8, or(t, e, n, l);
    } finally {
      X.p = u, M.T = i;
    }
  }
  function or(t, e, n, l) {
    if (zu) {
      var i = sr(l);
      if (i === null)
        kc(
          t,
          e,
          l,
          Mu,
          n
        ), jd(t, l);
      else if (Qh(
        i,
        t,
        e,
        n,
        l
      ))
        l.stopPropagation();
      else if (jd(t, l), e & 4 && -1 < Rh.indexOf(t)) {
        for (; i !== null; ) {
          var u = xl(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var s = Fn(u.pendingLanes);
                  if (s !== 0) {
                    var h = u;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; s; ) {
                      var b = 1 << 31 - pe(s);
                      h.entanglements[1] |= b, s &= ~b;
                    }
                    ke(u), (Tt & 6) === 0 && (du = $t() + 500, _a(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = tl(u, 2), h !== null && ge(h, u, 2), hu(), rr(u, 2);
            }
          if (u = sr(l), u === null && kc(
            t,
            e,
            l,
            Mu,
            n
          ), u === i) break;
          i = u;
        }
        i !== null && l.stopPropagation();
      } else
        kc(
          t,
          e,
          l,
          null,
          n
        );
    }
  }
  function sr(t) {
    return t = Af(t), dr(t);
  }
  var Mu = null;
  function dr(t) {
    if (Mu = null, t = Tl(t), t !== null) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = A(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = g(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Mu = t, null;
  }
  function Id(t) {
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
        switch (Sl()) {
          case _r:
            return 2;
          case Fr:
            return 8;
          case pi:
          case bA:
            return 32;
          case kr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ar = !1, qn = null, Gn = null, In = null, ei = /* @__PURE__ */ new Map(), ni = /* @__PURE__ */ new Map(), jn = [], Rh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function jd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        qn = null;
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
    }, e !== null && (e = xl(e), e !== null && qd(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t);
  }
  function Qh(t, e, n, l, i) {
    switch (e) {
      case "focusin":
        return qn = li(
          qn,
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
  function Zd(t) {
    var e = Tl(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = A(n), e !== null) {
            t.blockedOn = e, no(t.priority, function() {
              Gd(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = g(n), e !== null) {
            t.blockedOn = e, no(t.priority, function() {
              Gd(n);
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
  function Du(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = sr(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        df = l, n.target.dispatchEvent(l), df = null;
      } else
        return e = xl(n), e !== null && qd(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function Vd(t, e, n) {
    Du(t) && n.delete(e);
  }
  function Yh() {
    Ar = !1, qn !== null && Du(qn) && (qn = null), Gn !== null && Du(Gn) && (Gn = null), In !== null && Du(In) && (In = null), ei.forEach(Vd), ni.forEach(Vd);
  }
  function Ou(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Ar || (Ar = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      Yh
    )));
  }
  var Nu = null;
  function Xd(t) {
    Nu !== t && (Nu = t, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Nu === t && (Nu = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], l = t[e + 1], i = t[e + 2];
          if (typeof l != "function") {
            if (dr(l || n) === null)
              continue;
            break;
          }
          var u = xl(n);
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
    function e(b) {
      return Ou(b, t);
    }
    qn !== null && Ou(qn, t), Gn !== null && Ou(Gn, t), In !== null && Ou(In, t), ei.forEach(e), ni.forEach(e);
    for (var n = 0; n < jn.length; n++) {
      var l = jn[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < jn.length && (n = jn[0], n.blockedOn === null); )
      Zd(n), n.blockedOn === null && jn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var i = n[l], u = n[l + 1], s = i[re] || null;
        if (typeof u == "function")
          s || Xd(n);
        else if (s) {
          var h = null;
          if (u && u.hasAttribute("formAction")) {
            if (i = u, s = u[re] || null)
              h = s.formAction;
            else if (dr(i) !== null) continue;
          } else h = s.action;
          typeof h == "function" ? n[l + 1] = h : (n.splice(l, 3), l -= 3), Xd(n);
        }
      }
  }
  function Kd() {
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
  function hr(t) {
    this._internalRoot = t;
  }
  Ru.prototype.render = hr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(c(409));
    var n = e.current, l = xe();
    Ld(n, l, t, e, null, null);
  }, Ru.prototype.unmount = hr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Ld(t.current, 2, null, t, null, null), hu(), e[Bl] = null;
    }
  };
  function Ru(t) {
    this._internalRoot = t;
  }
  Ru.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = eo();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < jn.length && e !== 0 && e < jn[n].priority; n++) ;
      jn.splice(n, 0, t), n === 0 && Zd(t);
    }
  };
  var Jd = f.version;
  if (Jd !== "19.2.7")
    throw Error(
      c(
        527,
        Jd,
        "19.2.7"
      )
    );
  X.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = y(e), t = t !== null ? p(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Lh = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qu.isDisabled && Qu.supportsFiber)
      try {
        da = Qu.inject(
          Lh
        ), ve = Qu;
      } catch {
      }
  }
  return ii.createRoot = function(t, e) {
    if (!o(t)) throw Error(c(299));
    var n = !1, l = "", i = t0, u = e0, s = n0;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (i = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError)), e = Qd(
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
      Kd
    ), t[Bl] = e.current, Fc(t), new hr(e);
  }, ii.hydrateRoot = function(t, e, n) {
    if (!o(t)) throw Error(c(299));
    var l = !1, i = "", u = t0, s = e0, h = n0, b = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (h = n.onRecoverableError), n.formState !== void 0 && (b = n.formState)), e = Qd(
      t,
      1,
      !0,
      e,
      n ?? null,
      l,
      i,
      b,
      u,
      s,
      h,
      Kd
    ), e.context = Yd(null), n = e.current, l = xe(), l = lf(l), i = Cn(l), i.callback = null, Un(n, i, l), n = l, e.current.lanes = n, ha(e, n), ke(e), t[Bl] = e.current, Fc(t), new Ru(e);
  }, ii.version = "19.2.7", ii;
}
var l1;
function Jh() {
  if (l1) return mr.exports;
  l1 = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (f) {
        console.error(f);
      }
  }
  return a(), mr.exports = Kh(), mr.exports;
}
var _h = Jh();
const a1 = [
  "BOOLEAN",
  "INT32",
  "INT64",
  "INT96",
  // deprecated
  "FLOAT",
  "DOUBLE",
  "BYTE_ARRAY",
  "FIXED_LEN_BYTE_ARRAY"
], gl = [
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
], Fh = [
  "REQUIRED",
  "OPTIONAL",
  "REPEATED"
], kh = [
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
], Wh = [
  "UNCOMPRESSED",
  "SNAPPY",
  "GZIP",
  "LZO",
  "BROTLI",
  "LZ4",
  "ZSTD",
  "LZ4_RAW"
], H1 = [
  "DATA_PAGE",
  "INDEX_PAGE",
  "DICTIONARY_PAGE",
  "DATA_PAGE_V2"
], Ph = [
  "SPHERICAL",
  "VINCENTY",
  "THOMAS",
  "ANDOYER",
  "KARNEY"
];
function xr(a) {
  const f = Yu(a);
  if (f.type === 1)
    return { type: "Point", coordinates: Cr(a, f) };
  if (f.type === 2)
    return { type: "LineString", coordinates: Ur(a, f) };
  if (f.type === 3)
    return { type: "Polygon", coordinates: i1(a, f) };
  if (f.type === 4) {
    const r = [];
    for (let c = 0; c < f.count; c++)
      r.push(Cr(a, Yu(a)));
    return { type: "MultiPoint", coordinates: r };
  } else if (f.type === 5) {
    const r = [];
    for (let c = 0; c < f.count; c++)
      r.push(Ur(a, Yu(a)));
    return { type: "MultiLineString", coordinates: r };
  } else if (f.type === 6) {
    const r = [];
    for (let c = 0; c < f.count; c++)
      r.push(i1(a, Yu(a)));
    return { type: "MultiPolygon", coordinates: r };
  } else if (f.type === 7) {
    const r = [];
    for (let c = 0; c < f.count; c++)
      r.push(xr(a));
    return { type: "GeometryCollection", geometries: r };
  } else
    throw new Error(`Unsupported geometry type: ${f.type}`);
}
function Yu(a) {
  const { view: f } = a, r = f.getUint8(a.offset++) === 1, c = f.getUint32(a.offset, r);
  a.offset += 4;
  const o = c % 1e3, d = Math.floor(c / 1e3);
  let A = 0;
  o > 1 && o <= 7 && (A = f.getUint32(a.offset, r), a.offset += 4);
  let g = 2;
  return d && g++, d === 3 && g++, { littleEndian: r, type: o, dim: g, count: A };
}
function Cr(a, f) {
  const r = [];
  for (let c = 0; c < f.dim; c++) {
    const o = a.view.getFloat64(a.offset, f.littleEndian);
    a.offset += 8, r.push(o);
  }
  return r;
}
function Ur(a, f) {
  const r = [];
  for (let c = 0; c < f.count; c++)
    r.push(Cr(a, f));
  return r;
}
function i1(a, f) {
  const { view: r } = a, c = [];
  for (let o = 0; o < f.count; o++) {
    const d = r.getUint32(a.offset, f.littleEndian);
    a.offset += 4, c.push(Ur(a, { ...f, count: d }));
  }
  return c;
}
const q1 = new TextDecoder(), Pu = {
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
    return a && q1.decode(a);
  },
  geometryFromBytes(a) {
    return a && xr({ view: new DataView(a.buffer, a.byteOffset, a.byteLength), offset: 0 });
  },
  geographyFromBytes(a) {
    return a && xr({ view: new DataView(a.buffer, a.byteOffset, a.byteLength), offset: 0 });
  },
  uuidFromBytes(a) {
    if (!a) return;
    const f = Array.from(a, (r) => r.toString(16).padStart(2, "0")).join("");
    return f.slice(0, 8) + "-" + f.slice(8, 12) + "-" + f.slice(12, 16) + "-" + f.slice(16, 20) + "-" + f.slice(20, 32);
  }
};
function u1(a, f, r, c) {
  if (f && r.endsWith("_DICTIONARY")) {
    let o = a;
    a instanceof Uint8Array && !(f instanceof Uint8Array) && (o = new f.constructor(a.length));
    for (let d = 0; d < a.length; d++)
      o[d] = f[a[d]];
    return o;
  } else
    return G1(a, c);
}
function G1(a, f) {
  const { element: r, parsers: c, utf8: o = !0, schemaPath: d } = f, { type: A, converted_type: g, logical_type: v } = r, y = r.repetition_type !== "REQUIRED";
  if (d?.some((m) => m.element.logical_type?.type === "VARIANT") && A === "BYTE_ARRAY" && g !== "UTF8" && v?.type !== "STRING")
    return a;
  if (g === "DECIMAL") {
    const w = 10 ** -(r.scale || 0), O = new Array(a.length);
    for (let D = 0; D < O.length; D++)
      a[D] instanceof Uint8Array ? O[D] = I1(a[D]) * w : O[D] = Number(a[D]) * w;
    return O;
  }
  if (!g && A === "INT96")
    return Array.from(a).map((m) => c.timestampFromNanoseconds($h(m)));
  if (g === "DATE")
    return Array.from(a).map((m) => c.dateFromDays(m));
  if (g === "TIMESTAMP_MILLIS")
    return Array.from(a).map((m) => c.timestampFromMilliseconds(m));
  if (g === "TIMESTAMP_MICROS")
    return Array.from(a).map((m) => c.timestampFromMicroseconds(m));
  if (g === "JSON")
    return a.map((m) => JSON.parse(q1.decode(m)));
  if (g === "BSON")
    throw new Error("parquet bson not supported");
  if (g === "INTERVAL")
    throw new Error("parquet interval not supported");
  if (v?.type === "GEOMETRY")
    return a.map((m) => c.geometryFromBytes(m));
  if (v?.type === "GEOGRAPHY")
    return a.map((m) => c.geographyFromBytes(m));
  if (v?.type === "UUID")
    return a.map((m) => c.uuidFromBytes(m));
  if (g === "UTF8" || v?.type === "STRING" || o && A === "BYTE_ARRAY")
    return a.map((m) => c.stringFromBytes(m));
  if (g === "UINT_64" || v?.type === "INTEGER" && v.bitWidth === 64 && !v.isSigned) {
    if (a instanceof BigInt64Array) return new BigUint64Array(a.buffer, a.byteOffset, a.length);
    const m = y ? new Array(a.length) : new BigUint64Array(a.length);
    for (let w = 0; w < m.length; w++) m[w] = a[w];
    return m;
  }
  if (g === "UINT_32" || v?.type === "INTEGER" && v.bitWidth === 32 && !v.isSigned) {
    if (a instanceof Int32Array) return new Uint32Array(a.buffer, a.byteOffset, a.length);
    const m = y ? new Array(a.length) : new Uint32Array(a.length);
    for (let w = 0; w < m.length; w++)
      m[w] = a[w] < 0 ? 4294967296 + a[w] : a[w];
    return m;
  }
  if (v?.type === "FLOAT16")
    return Array.from(a).map(j1);
  if (v?.type === "TIMESTAMP") {
    const { unit: m } = v;
    let w = c.timestampFromMilliseconds;
    m === "MICROS" && (w = c.timestampFromMicroseconds), m === "NANOS" && (w = c.timestampFromNanoseconds);
    const O = new Array(a.length);
    for (let D = 0; D < O.length; D++)
      O[D] = w(a[D]);
    return O;
  }
  return a;
}
function I1(a) {
  if (!a.length) return 0;
  let f = 0n;
  for (const c of a)
    f = f * 256n + BigInt(c);
  const r = a.length * 8;
  return f >= 2n ** BigInt(r - 1) && (f -= 2n ** BigInt(r)), Number(f);
}
function $h(a) {
  const f = (a >> 64n) - 2440588n, r = a & 0xffffffffffffffffn;
  return f * 86400000000000n + r;
}
function j1(a) {
  if (!a) return;
  const f = a[1] << 8 | a[0], r = f >> 15 ? -1 : 1, c = f >> 10 & 31, o = f & 1023;
  return c === 0 ? r * 2 ** -14 * (o / 1024) : c === 31 ? o ? NaN : r * (1 / 0) : r * 2 ** (c - 15) * (1 + o / 1024);
}
function Z1(a, f, r) {
  const c = a[f], o = [];
  let d = 1;
  if (c.num_children)
    for (; o.length < c.num_children; ) {
      const A = a[f + d], g = Z1(a, f + d, [...r, A.name]);
      d += g.count, o.push(g);
    }
  return { count: d, element: c, children: o, path: r };
}
function V1(a, f) {
  let r = Z1(a, 0, []);
  const c = [r];
  for (const o of f) {
    const d = r.children.find((A) => A.element.name === o);
    if (!d) throw new Error(`parquet schema element not found: ${f}`);
    c.push(d), r = d;
  }
  return c;
}
function X1(a) {
  const f = [];
  function r(c) {
    if (c.children.length)
      for (const o of c.children)
        r(o);
    else
      f.push(c.path.join("."));
  }
  return r(a), f;
}
function K1(a) {
  let f = 0;
  for (const { element: r } of a)
    r.repetition_type === "REPEATED" && f++;
  return f;
}
function Zr(a) {
  let f = 0;
  for (const { element: r } of a.slice(1))
    r.repetition_type !== "REQUIRED" && f++;
  return f;
}
function tg(a) {
  if (!a || a.element.converted_type !== "LIST" || a.children.length > 1) return !1;
  const f = a.children[0];
  return !(f.children.length > 1 || f.element.repetition_type !== "REPEATED");
}
function eg(a) {
  if (!a || a.element.converted_type !== "MAP" || a.children.length > 1) return !1;
  const f = a.children[0];
  return !(f.children.length !== 2 || f.element.repetition_type !== "REPEATED" || f.children.find((o) => o.element.name === "key")?.element.repetition_type === "REPEATED" || f.children.find((o) => o.element.name === "value")?.element.repetition_type === "REPEATED");
}
function J1(a) {
  if (a.length !== 2) return !1;
  const [, f] = a;
  return !(f.element.repetition_type === "REPEATED" || f.children.length);
}
const ng = 0, f1 = 1, c1 = 2, r1 = 3, lg = 4, ag = 5, ig = 6, ug = 7, fg = 8, cg = 9, rg = 12;
function gi(a) {
  const f = {};
  let r = 0;
  for (; a.offset < a.view.byteLength; ) {
    const c = a.view.getUint8(a.offset++), o = c & 15;
    if (o === ng) break;
    const d = c >> 4;
    r = d ? r + d : _1(a), f[`field_${r}`] = zr(a, o);
  }
  return f;
}
function zr(a, f) {
  switch (f) {
    case f1:
      return !0;
    case c1:
      return !1;
    case r1:
      return a.view.getInt8(a.offset++);
    case lg:
    case ag:
      return _1(a);
    case ig:
      return Mr(a);
    case ug: {
      const r = a.view.getFloat64(a.offset, !0);
      return a.offset += 8, r;
    }
    case fg: {
      const r = vl(a), c = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, r);
      return a.offset += r, c;
    }
    case cg: {
      const r = a.view.getUint8(a.offset++), c = r & 15;
      let o = r >> 4;
      o === 15 && (o = vl(a));
      const d = c === f1 || c === c1, A = new Array(o);
      for (let g = 0; g < o; g++)
        A[g] = d ? zr(a, r1) === 1 : zr(a, c);
      return A;
    }
    case rg:
      return gi(a);
    default:
      throw new Error(`thrift unhandled type: ${f}`);
  }
}
function vl(a) {
  let f = 0, r = 0;
  for (; ; ) {
    const c = a.view.getUint8(a.offset++);
    if (f |= (c & 127) << r, !(c & 128))
      return f;
    r += 7;
  }
}
function og(a) {
  let f = 0n, r = 0n;
  for (; ; ) {
    const c = a.view.getUint8(a.offset++);
    if (f |= BigInt(c & 127) << r, !(c & 128))
      return f;
    r += 7n;
  }
}
function _1(a) {
  const f = vl(a);
  return f >>> 1 ^ -(f & 1);
}
function Mr(a) {
  const f = og(a);
  return f >> 1n ^ -(f & 1n);
}
function sg(a, f) {
  const r = /* @__PURE__ */ new Map(), c = f?.find(({ key: d }) => d === "geo")?.value, o = (c && JSON.parse(c)?.columns) ?? {};
  for (const [d, A] of Object.entries(o)) {
    if (A.encoding !== "WKB") continue;
    const g = A.edges === "spherical" ? "GEOGRAPHY" : "GEOMETRY", v = A.crs?.id ?? A.crs?.ids?.[0], y = v ? `${v.authority}:${v.code.toString()}` : void 0;
    r.set(d, { type: g, crs: y });
  }
  for (let d = 1; d < a.length; d++) {
    const { logical_type: A, name: g, num_children: v, type: y } = a[d];
    if (v) {
      d += v;
      continue;
    }
    y === "BYTE_ARRAY" && !A && (a[d].logical_type = r.get(g));
  }
}
const F1 = 1 << 19, dg = new TextDecoder();
function We(a) {
  return a && dg.decode(a);
}
async function Ag(a, { parsers: f, initialFetchSize: r = F1, geoparquet: c = !0 } = {}) {
  if (!a || !(a.byteLength >= 0)) throw new Error("parquet expected AsyncBuffer");
  const o = Math.max(0, a.byteLength - r), d = await a.slice(o, a.byteLength), A = new DataView(d);
  if (A.getUint32(d.byteLength - 4, !0) !== 827474256)
    throw new Error("parquet file invalid (footer != PAR1)");
  const g = A.getUint32(d.byteLength - 8, !0);
  if (g > a.byteLength - 8)
    throw new Error(`parquet metadata length ${g} exceeds available buffer ${a.byteLength - 8}`);
  if (g + 8 > r) {
    const v = a.byteLength - g - 8, y = await a.slice(v, o), p = new ArrayBuffer(g + 8), m = new Uint8Array(p);
    return m.set(new Uint8Array(y)), m.set(new Uint8Array(d), o - v), o1(p, { parsers: f, geoparquet: c });
  } else
    return o1(d, { parsers: f, geoparquet: c });
}
function o1(a, { parsers: f, geoparquet: r = !0 } = {}) {
  if (!(a instanceof ArrayBuffer)) throw new Error("parquet expected ArrayBuffer");
  const c = new DataView(a);
  if (f = { ...Pu, ...f }, c.byteLength < 8)
    throw new Error("parquet file is too short");
  if (c.getUint32(c.byteLength - 4, !0) !== 827474256)
    throw new Error("parquet file invalid (footer != PAR1)");
  const o = c.byteLength - 8, d = c.getUint32(o, !0);
  if (d > c.byteLength - 8)
    throw new Error(`parquet metadata length ${d} exceeds available buffer ${c.byteLength - 8}`);
  const A = o - d, v = gi({ view: c, offset: A }), y = v.field_1, p = v.field_2.map((B) => ({
    type: a1[B.field_1],
    type_length: B.field_2,
    repetition_type: Fh[B.field_3],
    name: We(B.field_4),
    num_children: B.field_5,
    converted_type: kh[B.field_6],
    scale: B.field_7,
    precision: B.field_8,
    field_id: B.field_9,
    logical_type: hg(B.field_10)
  })), m = p.filter((B) => B.type), w = v.field_3, O = v.field_4.map((B) => ({
    columns: B.field_1.map((z, Z) => ({
      file_path: We(z.field_1),
      file_offset: z.field_2,
      meta_data: z.field_3 && {
        type: a1[z.field_3.field_1],
        encodings: z.field_3.field_2?.map((G) => gl[G]),
        path_in_schema: z.field_3.field_3.map(We),
        codec: Wh[z.field_3.field_4],
        num_values: z.field_3.field_5,
        total_uncompressed_size: z.field_3.field_6,
        total_compressed_size: z.field_3.field_7,
        key_value_metadata: z.field_3.field_8?.map((G) => ({
          key: We(G.field_1),
          value: We(G.field_2)
        })),
        data_page_offset: z.field_3.field_9,
        index_page_offset: z.field_3.field_10,
        dictionary_page_offset: z.field_3.field_11,
        statistics: gg(z.field_3.field_12, m[Z], f),
        encoding_stats: z.field_3.field_13?.map((G) => ({
          page_type: H1[G.field_1],
          encoding: gl[G.field_2],
          count: G.field_3
        })),
        bloom_filter_offset: z.field_3.field_14,
        bloom_filter_length: z.field_3.field_15,
        size_statistics: z.field_3.field_16 && {
          unencoded_byte_array_data_bytes: z.field_3.field_16.field_1,
          repetition_level_histogram: z.field_3.field_16.field_2,
          definition_level_histogram: z.field_3.field_16.field_3
        },
        geospatial_statistics: z.field_3.field_17 && {
          bbox: z.field_3.field_17.field_1 && {
            xmin: z.field_3.field_17.field_1.field_1,
            xmax: z.field_3.field_17.field_1.field_2,
            ymin: z.field_3.field_17.field_1.field_3,
            ymax: z.field_3.field_17.field_1.field_4,
            zmin: z.field_3.field_17.field_1.field_5,
            zmax: z.field_3.field_17.field_1.field_6,
            mmin: z.field_3.field_17.field_1.field_7,
            mmax: z.field_3.field_17.field_1.field_8
          },
          geospatial_types: z.field_3.field_17.field_2
        }
      },
      offset_index_offset: z.field_4,
      offset_index_length: z.field_5,
      column_index_offset: z.field_6,
      column_index_length: z.field_7,
      crypto_metadata: z.field_8,
      encrypted_column_metadata: z.field_9
    })),
    total_byte_size: B.field_2,
    num_rows: B.field_3,
    sorting_columns: B.field_4?.map((z) => ({
      column_idx: z.field_1,
      descending: z.field_2,
      nulls_first: z.field_3
    })),
    file_offset: B.field_5,
    total_compressed_size: B.field_6,
    ordinal: B.field_7
  })), D = v.field_5?.map((B) => ({
    key: We(B.field_1),
    value: We(B.field_2)
  })), R = We(v.field_6);
  return r && sg(p, D), {
    version: y,
    schema: p,
    num_rows: w,
    row_groups: O,
    key_value_metadata: D,
    created_by: R,
    metadata_length: d
  };
}
function di({ schema: a }) {
  return V1(a, [])[0];
}
function hg(a) {
  return a?.field_1 ? { type: "STRING" } : a?.field_2 ? { type: "MAP" } : a?.field_3 ? { type: "LIST" } : a?.field_4 ? { type: "ENUM" } : a?.field_5 ? {
    type: "DECIMAL",
    scale: a.field_5.field_1,
    precision: a.field_5.field_2
  } : a?.field_6 ? { type: "DATE" } : a?.field_7 ? {
    type: "TIME",
    isAdjustedToUTC: a.field_7.field_1,
    unit: s1(a.field_7.field_2)
  } : a?.field_8 ? {
    type: "TIMESTAMP",
    isAdjustedToUTC: a.field_8.field_1,
    unit: s1(a.field_8.field_2)
  } : a?.field_10 ? {
    type: "INTEGER",
    bitWidth: a.field_10.field_1,
    isSigned: a.field_10.field_2
  } : a?.field_11 ? { type: "NULL" } : a?.field_12 ? { type: "JSON" } : a?.field_13 ? { type: "BSON" } : a?.field_14 ? { type: "UUID" } : a?.field_15 ? { type: "FLOAT16" } : a?.field_16 ? {
    type: "VARIANT",
    specification_version: a.field_16.field_1
  } : a?.field_17 ? {
    type: "GEOMETRY",
    crs: We(a.field_17.field_1)
  } : a?.field_18 ? {
    type: "GEOGRAPHY",
    crs: We(a.field_18.field_1),
    algorithm: Ph[a.field_18.field_2]
  } : a;
}
function s1(a) {
  if (a.field_1) return "MILLIS";
  if (a.field_2) return "MICROS";
  if (a.field_3) return "NANOS";
  throw new Error("parquet time unit required");
}
function gg(a, f, r) {
  return a && {
    max: Lu(a.field_1, f, r),
    min: Lu(a.field_2, f, r),
    null_count: a.field_3,
    distinct_count: a.field_4,
    max_value: Lu(a.field_5, f, r),
    min_value: Lu(a.field_6, f, r),
    is_max_value_exact: a.field_7,
    is_min_value_exact: a.field_8
  };
}
function Lu(a, f, r) {
  const { type: c, converted_type: o, logical_type: d } = f;
  if (a === void 0) return a;
  if (c === "BOOLEAN") return a[0] === 1;
  if (c === "BYTE_ARRAY") return r.stringFromBytes(a);
  const A = new DataView(a.buffer, a.byteOffset, a.byteLength);
  return c === "FLOAT" && A.byteLength === 4 ? A.getFloat32(0, !0) : c === "DOUBLE" && A.byteLength === 8 ? A.getFloat64(0, !0) : c === "INT32" && o === "DATE" ? r.dateFromDays(A.getInt32(0, !0)) : c === "INT64" && o === "TIMESTAMP_MILLIS" ? r.timestampFromMilliseconds(A.getBigInt64(0, !0)) : c === "INT64" && o === "TIMESTAMP_MICROS" ? r.timestampFromMicroseconds(A.getBigInt64(0, !0)) : c === "INT64" && d?.type === "TIMESTAMP" && d?.unit === "NANOS" ? r.timestampFromNanoseconds(A.getBigInt64(0, !0)) : c === "INT64" && d?.type === "TIMESTAMP" && d?.unit === "MICROS" ? r.timestampFromMicroseconds(A.getBigInt64(0, !0)) : c === "INT64" && d?.type === "TIMESTAMP" ? r.timestampFromMilliseconds(A.getBigInt64(0, !0)) : c === "INT32" && A.byteLength === 4 ? A.getInt32(0, !0) : c === "INT64" && A.byteLength === 8 ? A.getBigInt64(0, !0) : o === "DECIMAL" ? I1(a) * 10 ** -(f.scale || 0) : d?.type === "FLOAT16" ? j1(a) : a;
}
function yg(a) {
  const f = gi(a);
  return {
    // @ts-ignore
    page_locations: f.field_1.map((r) => ({
      offset: r.field_1,
      compressed_page_size: r.field_2,
      first_row_index: r.field_3
    })),
    unencoded_byte_array_data_bytes: f.field_2
  };
}
const ie = 0xffffffffffffffffn, yl = 0x9e3779b185ebca87n, ui = 0xc2b2ae3d27d4eb4fn, d1 = 0x165667b19e3779f9n, k1 = 0x85ebca77c2b2ae63n, A1 = 0x27d4eb2f165667c5n;
function Xn(a, f) {
  return (a << f | a >> 64n - f) & ie;
}
function ca(a, f) {
  return a = a + f * ui & ie, a = Xn(a, 31n), a * yl & ie;
}
function Hu(a, f) {
  return a ^= ca(0n, f), a * yl + k1 & ie;
}
function Vn(a, f = 0n) {
  const r = new DataView(a.buffer, a.byteOffset, a.byteLength), c = a.byteLength;
  let o = 0, d;
  if (c >= 32) {
    let A = f + yl + ui & ie, g = f + ui & ie, v = f, y = f - yl & ie;
    for (; o + 32 <= c; )
      A = ca(A, r.getBigUint64(o, !0)), o += 8, g = ca(g, r.getBigUint64(o, !0)), o += 8, v = ca(v, r.getBigUint64(o, !0)), o += 8, y = ca(y, r.getBigUint64(o, !0)), o += 8;
    d = Xn(A, 1n) + Xn(g, 7n) + Xn(v, 12n) + Xn(y, 18n) & ie, d = Hu(d, A), d = Hu(d, g), d = Hu(d, v), d = Hu(d, y);
  } else
    d = f + A1 & ie;
  for (d = d + BigInt(c) & ie; o + 8 <= c; )
    d ^= ca(0n, r.getBigUint64(o, !0)), d = Xn(d, 27n) * yl + k1 & ie, o += 8;
  for (o + 4 <= c && (d ^= BigInt(r.getUint32(o, !0)) * yl & ie, d = Xn(d, 23n) * ui + d1 & ie, o += 4); o < c; )
    d ^= BigInt(r.getUint8(o)) * A1 & ie, d = Xn(d, 11n) * yl & ie, o += 1;
  return d ^= d >> 33n, d = d * ui & ie, d ^= d >> 29n, d = d * d1 & ie, d ^= d >> 32n, d;
}
const mg = new TextEncoder(), vg = new Uint32Array([
  1203114875,
  1150766481,
  2284105051,
  2729912477,
  1884591559,
  770785867,
  2667333959,
  1550580529
]);
function pg(a, f) {
  return Number((a >> 32n) * BigInt(f) >> 32n);
}
function bg(a) {
  const f = new Uint32Array(8), r = Number(a & 0xffffffffn) | 0;
  for (let c = 0; c < 8; c++)
    f[c] = 1 << (Math.imul(r, vg[c]) >>> 27);
  return f;
}
function h1(a, f) {
  const r = pg(f, a.length >> 3) << 3, c = bg(f);
  for (let o = 0; o < 8; o++)
    if ((a[r + o] & c[o]) === 0) return !1;
  return !0;
}
function wg(a) {
  const f = gi(a), r = f.field_1;
  if (typeof r != "number" || r <= 0 || r % 32 !== 0 || !f.field_2?.field_1 || !f.field_3?.field_1 || !f.field_4?.field_1) return;
  const { view: c, offset: o } = a;
  if (o + r > c.byteLength)
    throw new Error(`parquet bloom filter truncated: need ${r} bytes, have ${c.byteLength - o}`);
  const d = new Uint32Array(r >> 2);
  for (let A = 0; A < d.length; A++)
    d[A] = c.getUint32(o + A * 4, !0);
  return a.offset = o + r, { numBytes: r, blocks: d };
}
function g1(a, f) {
  if (a == null) return;
  const { type: r, converted_type: c, logical_type: o } = f;
  if (r === "BOOLEAN")
    return typeof a != "boolean" ? void 0 : Vn(new Uint8Array([a ? 1 : 0]));
  if (r === "FLOAT") {
    if (typeof a != "number") return;
    const d = new ArrayBuffer(4);
    return new DataView(d).setFloat32(0, a, !0), Vn(new Uint8Array(d));
  }
  if (r === "DOUBLE") {
    if (typeof a != "number") return;
    const d = new ArrayBuffer(8);
    return new DataView(d).setFloat64(0, a, !0), Vn(new Uint8Array(d));
  }
  if (r === "INT32") {
    if (c === "DATE" || c === "DECIMAL" || c === "TIME_MILLIS" || o?.type === "DATE" || o?.type === "TIME" || o?.type === "DECIMAL" || typeof a != "number" || !Number.isInteger(a)) return;
    const d = new ArrayBuffer(4);
    return new DataView(d).setInt32(0, a | 0, !0), Vn(new Uint8Array(d));
  }
  if (r === "INT64") {
    if (c === "TIMESTAMP_MILLIS" || c === "TIMESTAMP_MICROS" || c === "TIME_MICROS" || c === "DECIMAL" || o?.type === "TIMESTAMP" || o?.type === "TIME" || o?.type === "DECIMAL") return;
    let d;
    if (typeof a == "bigint") d = a;
    else if (typeof a == "number" && Number.isSafeInteger(a)) d = BigInt(a);
    else return;
    const A = new ArrayBuffer(8);
    return new DataView(A).setBigUint64(0, BigInt.asUintN(64, d), !0), Vn(new Uint8Array(A));
  }
  if (r === "BYTE_ARRAY")
    return c === "JSON" || c === "BSON" || c === "DECIMAL" || o?.type === "JSON" || o?.type === "BSON" || o?.type === "VARIANT" || o?.type === "GEOMETRY" || o?.type === "GEOGRAPHY" ? void 0 : typeof a == "string" ? Vn(mg.encode(a)) : a instanceof Uint8Array ? Vn(a) : void 0;
  if (r === "FIXED_LEN_BYTE_ARRAY")
    return c === "DECIMAL" || c === "INTERVAL" || o?.type === "DECIMAL" || o?.type === "UUID" || o?.type === "FLOAT16" || o?.type === "GEOMETRY" || o?.type === "GEOGRAPHY" ? void 0 : a instanceof Uint8Array ? Vn(a) : void 0;
}
function Eg(a) {
  const f = /* @__PURE__ */ new Set();
  return Dr(a, f), f;
}
function Dr(a, f) {
  if (a) {
    if ("$and" in a && Array.isArray(a.$and)) {
      for (const r of a.$and) Dr(r, f);
      return;
    }
    if ("$or" in a && Array.isArray(a.$or)) {
      for (const r of a.$or) Dr(r, f);
      return;
    }
    if (!("$nor" in a))
      for (const [r, c] of Object.entries(a))
        r.startsWith("$") || (typeof c == "object" && c !== null && !Array.isArray(c) ? ("$eq" in c || "$in" in c) && f.add(r) : f.add(r));
  }
}
function W1(a, f) {
  for (let c = 0; c < f.length; c += 1e4)
    a.push(...f.slice(c, c + 1e4));
}
function Jn(a, f, r = !0) {
  if (r ? a === f : a == f) return !0;
  if (!a || !f || typeof a != "object" || typeof f != "object") return !1;
  if (a instanceof Uint8Array && f instanceof Uint8Array) {
    if (a.length !== f.length) return !1;
    for (let o = 0; o < a.length; o++)
      if (a[o] !== f[o]) return !1;
    return !0;
  }
  if (Array.isArray(a) && Array.isArray(f)) {
    if (a.length !== f.length) return !1;
    for (let o = 0; o < a.length; o++)
      if (!Jn(a[o], f[o], r)) return !1;
    return !0;
  }
  const c = Object.keys(a);
  if (c.length !== Object.keys(f).length) return !1;
  for (const o of c)
    if (!Jn(a[o], f[o], r)) return !1;
  return !0;
}
async function y1(a, f = {}, r = globalThis.fetch) {
  const c = new AbortController(), o = new Headers(f.headers);
  o.set("Range", "bytes=0-0");
  const d = await r(a, {
    ...f,
    headers: o,
    signal: c.signal
  });
  if (!d.ok) throw new Error(`fetch with range failed ${d.status}`);
  if (d.status === 206) {
    const A = d.headers.get("Content-Range");
    if (!A) throw new Error("missing content-range header");
    const g = A.match(/bytes \d+-\d+\/(\d+)/);
    if (!g) throw new Error(`invalid content-range header: ${A}`);
    return parseInt(g[1]);
  }
  if (d.status === 200) {
    const A = d.headers.get("Content-Length");
    if (c.abort(), A) return parseInt(A);
  }
  throw new Error("server does not support range requests and missing content-length");
}
async function Sg(a, f, r) {
  const c = r ?? globalThis.fetch, o = await c(a, { ...f, method: "HEAD" });
  if (o.status === 403)
    return y1(a, f, c);
  if (!o.ok) throw new Error(`fetch head failed ${o.status}`);
  const d = o.headers.get("Content-Length");
  return d ? parseInt(d) : y1(a, f, c);
}
async function Bg({ url: a, byteLength: f, requestInit: r, fetch: c }) {
  if (!a) throw new Error("missing url");
  const o = c ?? globalThis.fetch;
  f ?? (f = await Sg(a, r, o));
  let d;
  const A = r || {};
  return {
    byteLength: f,
    async slice(g, v) {
      if (d)
        return d.then((w) => w.slice(g, v));
      const y = new Headers(A.headers), p = v === void 0 ? "" : v - 1;
      y.set("Range", `bytes=${g}-${p}`);
      const m = await o(a, { ...A, headers: y });
      if (!m.ok || !m.body) throw new Error(`fetch failed ${m.status}`);
      if (m.status === 200)
        return d = m.arrayBuffer(), d.then((w) => w.slice(g, v));
      if (m.status === 206)
        return m.arrayBuffer();
      throw new Error(`fetch received unexpected status code ${m.status}`);
    }
  };
}
function Tg({ byteLength: a, slice: f }, { minSize: r = F1 } = {}) {
  if (a < r) {
    const o = f(0, a);
    return {
      byteLength: a,
      async slice(d, A) {
        return (await o).slice(d, A);
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
    slice(o, d) {
      const A = xg(o, d, a), g = c.get(A);
      if (g) return g;
      const v = f(o, d);
      return c.set(A, v), v;
    }
  };
}
function xg(a, f, r) {
  if (a < 0) {
    if (f !== void 0) throw new Error(`invalid suffix range [${a}, ${f}]`);
    return r === void 0 ? `${a},` : `${r + a},${r}`;
  } else if (f !== void 0) {
    if (a > f) throw new Error(`invalid empty range [${a}, ${f}]`);
    return `${a},${f}`;
  } else return r === void 0 ? `${a},` : `${a},${r}`;
}
function P1(a) {
  if (!a) return [];
  if (a.length === 1) return a[0];
  const f = [];
  for (const r of a)
    W1(f, r);
  return f;
}
function ju(a) {
  if (!a) return [];
  const f = [];
  return "$and" in a && Array.isArray(a.$and) ? f.push(...a.$and.flatMap(ju)) : "$or" in a && Array.isArray(a.$or) ? f.push(...a.$or.flatMap(ju)) : "$nor" in a && Array.isArray(a.$nor) ? f.push(...a.$nor.flatMap(ju)) : f.push(...Object.keys(a).map((r) => r.split(".")[0])), [...new Set(f)];
}
function fi(a, f, r = !0) {
  return "$and" in f && Array.isArray(f.$and) ? f.$and.every((c) => fi(a, c, r)) : "$or" in f && Array.isArray(f.$or) ? f.$or.some((c) => fi(a, c, r)) : "$nor" in f && Array.isArray(f.$nor) ? !f.$nor.some((c) => fi(a, c, r)) : Object.entries(f).every(([c, o]) => {
    const d = Cg(a, c);
    return typeof o != "object" || o === null || Array.isArray(o) ? Jn(d, o, r) : Object.entries(o || {}).every(([A, g]) => A === "$gt" ? d > g : A === "$gte" ? d >= g : A === "$lt" ? d < g : A === "$lte" ? d <= g : A === "$eq" ? Jn(d, g, r) : A === "$ne" ? !Jn(d, g, r) : A === "$in" ? Array.isArray(g) && g.includes(d) : A === "$nin" ? Array.isArray(g) && !g.includes(d) : A === "$not" ? !fi({ [c]: d }, { [c]: g }, r) : !0);
  });
}
function Ju({ rowGroup: a, physicalColumns: f, filter: r, strict: c = !0, bloomFilters: o, schemaElements: d }) {
  if (!r) return !1;
  if ("$and" in r && Array.isArray(r.$and))
    return r.$and.some((A) => Ju({ rowGroup: a, physicalColumns: f, filter: A, strict: c, bloomFilters: o, schemaElements: d }));
  if ("$or" in r && Array.isArray(r.$or))
    return r.$or.every((A) => Ju({ rowGroup: a, physicalColumns: f, filter: A, strict: c, bloomFilters: o, schemaElements: d }));
  if ("$nor" in r && Array.isArray(r.$nor))
    return !1;
  for (const [A, g] of Object.entries(r)) {
    const v = f.indexOf(A);
    if (v === -1) continue;
    const y = a.columns[v].meta_data?.statistics, { min: p, max: m, min_value: w, max_value: O } = y || {}, D = w !== void 0 ? w : p, R = O !== void 0 ? O : m, B = D !== void 0 && R !== void 0, z = o?.[A], Z = d?.[A];
    for (const [G, K] of Object.entries(g || {})) {
      if (B && (G === "$gt" && R <= K || G === "$gte" && R < K || G === "$lt" && D >= K || G === "$lte" && D > K || G === "$eq" && (K < D || K > R) || G === "$ne" && Jn(D, R, c) && Jn(D, K, c) || G === "$in" && Array.isArray(K) && K.every((_) => _ < D || _ > R) || G === "$nin" && Array.isArray(K) && Jn(D, R, c) && K.includes(D)))
        return !0;
      if (z && Z) {
        if (G === "$eq") {
          const _ = g1(K, Z);
          if (_ !== void 0 && !h1(z.blocks, _)) return !0;
        }
        if (G === "$in" && Array.isArray(K) && K.length > 0) {
          let _ = !0;
          for (const j of K) {
            const I = g1(j, Z);
            if (I === void 0 || h1(z.blocks, I)) {
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
function Cg(a, f) {
  let r = a;
  for (const c of f.split("."))
    r = r?.[c];
  return r;
}
const Ug = 1 << 21;
function zg({ metadata: a, rowStart: f = 0, rowEnd: r = 1 / 0, columns: c, filter: o, filterStrict: d = !0, useOffsetIndex: A = !1, bloomFiltersByGroup: g, schemaElements: v }) {
  if (!a) throw new Error("parquetPlan requires metadata");
  const y = [], p = [], m = [], w = X1(di(a));
  let O = 0, D = 0;
  for (const R of a.row_groups) {
    const B = Number(R.num_rows), z = O + B, Z = g?.[D];
    if (B > 0 && z > f && O < r && !Ju({ rowGroup: R, physicalColumns: w, filter: o, strict: d, bloomFilters: Z, schemaElements: v })) {
      const G = [];
      for (const I of R.columns) {
        const $ = I.meta_data;
        if (I.file_path) throw new Error("parquet file_path not supported");
        if (!$) throw new Error("parquet column metadata is undefined");
        if (!c || c.includes($.path_in_schema[0])) {
          const dt = $.dictionary_page_offset || $.data_page_offset, bt = Number(dt), wt = Number(dt + $.total_compressed_size);
          if (A && I.offset_index_offset && I.offset_index_length && (f > O || r < z)) {
            const ut = Number(I.offset_index_offset);
            G.push({
              columnMetadata: $,
              offsetIndex: {
                startByte: ut,
                endByte: ut + I.offset_index_length
              },
              range: { startByte: bt, endByte: wt }
            });
          } else
            G.push({
              columnMetadata: $,
              range: { startByte: bt, endByte: wt }
            });
        }
      }
      const K = Math.max(f - O, 0), _ = Math.min(r - O, B);
      y.push({ chunks: G, rowGroup: R, groupStart: O, groupRows: B, selectStart: K, selectEnd: _ });
      let j;
      for (const I of G)
        if ("offsetIndex" in I)
          m.push(I.offsetIndex);
        else {
          const { range: $ } = I;
          c ? p.push($) : j && $.endByte - j.startByte <= Ug ? j.endByte = $.endByte : (j && p.push(j), j = { ...$ });
        }
      j && p.push(j);
    }
    O = z, D++;
  }
  return isFinite(r) || (r = O), p.push(...m), { metadata: a, rowStart: f, rowEnd: r, columns: c, fetches: p, groups: y };
}
async function Mg({ file: a, metadata: f, filter: r, filterStrict: c = !0 }) {
  const o = f.row_groups.map(() => (
    /** @type {Record<string, BloomFilter>} */
    {}
  )), d = Eg(r);
  if (d.size === 0) return o;
  const A = X1(di(f)), g = [];
  return f.row_groups.forEach((v, y) => {
    if (!Ju({ rowGroup: v, physicalColumns: A, filter: r, strict: c }))
      for (const p of d) {
        const m = A.indexOf(p);
        if (m === -1) continue;
        const w = v.columns[m]?.meta_data;
        if (!w?.bloom_filter_offset || !w.bloom_filter_length) continue;
        const O = Number(w.bloom_filter_offset), D = O + w.bloom_filter_length;
        g.push((async () => {
          const R = await a.slice(O, D), B = wg({ view: new DataView(R), offset: 0 });
          B && (o[y][p] = B);
        })());
      }
  }), g.length && await Promise.all(g), o;
}
function Dg(a, { fetches: f }) {
  const r = f.map(({ startByte: c, endByte: o }) => a.slice(c, o));
  return {
    byteLength: a.byteLength,
    slice(c, o = a.byteLength) {
      const d = f.findIndex(({ startByte: A, endByte: g }) => A <= c && o <= g);
      if (d < 0)
        return a.slice(c, o);
      if (f[d].startByte !== c || f[d].endByte !== o) {
        const A = c - f[d].startByte, g = o - f[d].startByte;
        return r[d] instanceof Promise ? r[d].then((v) => v.slice(A, g)) : r[d].slice(A, g);
      } else
        return r[d];
    }
  };
}
const Vr = new TextDecoder(), m1 = /* @__PURE__ */ new WeakMap();
function $1(a, f = Pu) {
  if (Array.isArray(a))
    return a.map((r) => $1(r, f));
  if (typeof a != "object") return a;
  if ("metadata" in a) {
    const r = Og(a.metadata), c = a.typed_value && Zu(a.typed_value, r, f), o = a.value && Ai(_u(a.value), r, f);
    return c && o ? { ...o, ...c } : c ?? o;
  }
  return a;
}
function Zu(a, f, r) {
  if (a instanceof Date) return a;
  if (a && typeof a == "object" && !Array.isArray(a) && !(a instanceof Uint8Array)) {
    if ("typed_value" in a && a.typed_value !== null && a.typed_value !== void 0)
      return Zu(a.typed_value, f, r);
    if ("value" in a && a.value instanceof Uint8Array)
      return Ai(_u(a.value), f, r);
    if ("typed_value" in a || "value" in a)
      return null;
    const c = {};
    for (const [o, d] of Object.entries(a))
      f.dictionary.includes(o) && (c[o] = Zu(d, f, r));
    return c;
  }
  return a instanceof Uint8Array ? Ai(_u(a), f, r) : Array.isArray(a) ? a.map((c) => Zu(c, f, r)) : a;
}
function _u(a) {
  return { view: new DataView(a.buffer, a.byteOffset, a.byteLength), offset: 0 };
}
function Og(a) {
  let f = m1.get(a.buffer);
  f || (f = /* @__PURE__ */ new Map(), m1.set(a.buffer, f));
  const r = `${a.byteOffset}:${a.byteLength}`, c = f.get(r);
  if (c) return c;
  const o = _u(a), d = o.view.getUint8(o.offset++), A = d & 15;
  if (A !== 1) throw new Error(`parquet unsupported variant metadata version: ${A}`);
  const g = (d >> 4 & 1) === 1, v = (d >> 6 & 3) + 1, y = pl(o, v), p = new Array(y + 1);
  for (let D = 0; D < p.length; D++)
    p[D] = pl(o, v);
  const m = o.offset, w = new Array(y);
  for (let D = 0; D < y; D++) {
    const R = p[D], B = p[D + 1], z = new Uint8Array(a.buffer, a.byteOffset + m + R, B - R);
    w[D] = Vr.decode(z);
  }
  const O = { dictionary: w, sorted: g };
  return f.set(r, O), O;
}
function pl(a, f) {
  let r = 0;
  for (let c = 0; c < f; c++)
    r |= a.view.getUint8(a.offset + c) << c * 8;
  return a.offset += f, r;
}
function Ai(a, f, r) {
  const c = a.view.getUint8(a.offset++), o = c & 3, d = c >> 2;
  if (o === 0) return Ng(a, d, r);
  if (o === 2) return Rg(a, d, f, r);
  if (o === 3) return Qg(a, d, f, r);
  const A = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, d);
  return a.offset += d, Vr.decode(A);
}
function Ng(a, f, r) {
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
      return wr(a, 4);
    case 9:
      return wr(a, 8);
    case 10:
      return wr(a, 16);
    case 11: {
      const c = a.view.getInt32(a.offset, !0);
      return a.offset += 4, r.dateFromDays(c);
    }
    case 12:
    // timestamp_micros (utc)
    case 13: {
      const c = a.view.getBigInt64(a.offset, !0);
      return a.offset += 8, r.timestampFromMicroseconds(c);
    }
    case 14: {
      const c = a.view.getFloat32(a.offset, !0);
      return a.offset += 4, c;
    }
    case 15:
      return v1(a);
    case 16: {
      const c = v1(a);
      return Vr.decode(c);
    }
    case 17: {
      const c = a.view.getBigInt64(a.offset, !0);
      return a.offset += 8, c;
    }
    case 18:
    // timestamp_nanos (utc)
    case 19: {
      const c = a.view.getBigInt64(a.offset, !0);
      return a.offset += 8, r.timestampFromNanoseconds(c);
    }
    case 20: {
      const c = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, 16);
      a.offset += 16;
      const o = Array.from(c, (d) => d.toString(16).padStart(2, "0")).join("");
      return `${o.slice(0, 8)}-${o.slice(8, 12)}-${o.slice(12, 16)}-${o.slice(16, 20)}-${o.slice(20)}`;
    }
    default:
      throw new Error(`parquet unsupported variant primitive type: ${f}`);
  }
}
function Rg(a, f, r, c) {
  const o = (f & 3) + 1, d = (f >> 2 & 3) + 1, g = f >> 4 & 1 ? pl(a, 4) : a.view.getUint8(a.offset++), v = new Array(g);
  for (let m = 0; m < g; m++)
    v[m] = pl(a, d);
  const y = new Array(g + 1);
  for (let m = 0; m < y.length; m++)
    y[m] = pl(a, o);
  const p = {};
  for (let m = 0; m < g; m++) {
    const w = r.dictionary[v[m]], O = {
      view: a.view,
      offset: a.offset + y[m]
    };
    p[w] = Ai(O, r, c);
  }
  return a.offset += y[y.length - 1], p;
}
function Qg(a, f, r, c) {
  const o = f & 3, d = f >> 2 & 1, A = o + 1, g = pl(a, d ? 4 : 1), v = new Array(g + 1);
  for (let m = 0; m < v.length; m++)
    v[m] = pl(a, A);
  const y = a.offset, p = new Array(g);
  for (let m = 0; m < g; m++) {
    const w = {
      view: a.view,
      offset: y + v[m]
    };
    p[m] = Ai(w, r, c);
  }
  return a.offset = y + v[v.length - 1], p;
}
function wr(a, f) {
  const r = a.view.getUint8(a.offset);
  a.offset += 1;
  let c;
  if (f === 4)
    c = BigInt(a.view.getInt32(a.offset, !0)), a.offset += 4;
  else if (f === 8)
    c = a.view.getBigInt64(a.offset, !0), a.offset += 8;
  else {
    const o = a.view.getBigUint64(a.offset, !0);
    c = a.view.getBigInt64(a.offset + 8, !0) << 64n | o, a.offset += 16;
  }
  return Number(c) * 10 ** -r;
}
function v1(a) {
  const f = a.view.getUint32(a.offset, !0);
  a.offset += 4;
  const r = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f, r;
}
function p1(a, f, r, c, o) {
  const d = Zr(o);
  if (!f?.length && !r.length) {
    if (!d || !c.length) return c;
    f = new Array(c.length).fill(d);
  }
  const A = f?.length || r.length, g = o.map(({ element: D }) => D.repetition_type);
  let v = 0;
  const y = [a];
  let p = a, m = 0, w = 0, O = 0;
  if (r[0])
    for (; m < g.length - 2 && O < r[0]; )
      m++, g[m] !== "REQUIRED" && (p = p.at(-1), y.push(p), w++), g[m] === "REPEATED" && O++;
  for (let D = 0; D < A; D++) {
    const R = f?.length ? f[D] : d, B = r[D];
    for (; m && (B < O || g[m] !== "REPEATED"); )
      g[m] !== "REQUIRED" && (y.pop(), w--), g[m] === "REPEATED" && O--, m--;
    for (p = y.at(-1); (m < g.length - 2 || g[m + 1] === "REPEATED") && (w < R || g[m + 1] === "REQUIRED"); ) {
      if (m++, g[m] !== "REQUIRED") {
        const z = [];
        p.push(z), p = z, y.push(z), w++;
      }
      g[m] === "REPEATED" && O++;
    }
    R === d ? p.push(c[v++]) : m === g.length - 2 ? p.push(null) : p.push([]);
  }
  if (!a.length)
    for (let D = 0; D < d; D++) {
      const R = [];
      p.push(R), p = R;
    }
  return a;
}
function ci(a, f, r, c = 0) {
  const o = f.path.join("."), d = f.element.repetition_type === "OPTIONAL", A = d ? c + 1 : c;
  if (tg(f)) {
    let g = f.children[0], v = A;
    g.children.length === 1 && (g = g.children[0], v++), ci(a, g, r, v);
    const y = g.path.join("."), p = a.get(y);
    if (!p) throw new Error("parquet list column missing values");
    d && Vu(p, c), a.set(o, p), a.delete(y);
    return;
  }
  if (eg(f)) {
    const g = f.children[0].element.name;
    ci(a, f.children[0].children[0], r, A + 1), ci(a, f.children[0].children[1], r, A + 1);
    const v = a.get(`${o}.${g}.key`), y = a.get(`${o}.${g}.value`);
    if (!v) throw new Error("parquet map column missing keys");
    if (!y) throw new Error("parquet map column missing values");
    if (v.length !== y.length)
      throw new Error("parquet map column key/value length mismatch");
    const p = tA(v, y, A);
    d && Vu(p, c), a.delete(`${o}.${g}.key`), a.delete(`${o}.${g}.value`), a.set(o, p);
    return;
  }
  if (f.children.length) {
    const g = f.element.repetition_type === "REQUIRED" ? c : c + 1, v = {};
    for (const p of f.children) {
      ci(a, p, r, g);
      const m = a.get(p.path.join("."));
      if (!m) throw new Error("parquet struct missing child data");
      v[p.element.name] = m;
    }
    for (const p of f.children)
      a.delete(p.path.join("."));
    let y = eA(v, g);
    f.element.logical_type?.type === "VARIANT" && (y = $1(y, r)), d && Vu(y, c), a.set(o, y);
  }
}
function Vu(a, f) {
  for (let r = 0; r < a.length; r++)
    f ? Vu(a[r], f - 1) : a[r] = a[r][0];
}
function tA(a, f, r) {
  const c = [];
  for (let o = 0; o < a.length; o++)
    if (r)
      c.push(tA(a[o], f[o], r - 1));
    else if (a[o]) {
      const d = {};
      for (let A = 0; A < a[o].length; A++) {
        const g = f[o][A];
        d[a[o][A]] = g === void 0 ? null : g;
      }
      c.push(d);
    } else
      c.push(void 0);
  return c;
}
function eA(a, f) {
  const r = Object.keys(a), c = a[r[0]]?.length, o = [];
  for (let d = 0; d < c; d++) {
    const A = {};
    for (const g of r) {
      if (a[g].length !== c) throw new Error("parquet struct parsing error");
      A[g] = a[g][d];
    }
    f ? o.push(eA(A, f - 1)) : o.push(A);
  }
  return o;
}
function hi(a, f, r) {
  const c = r instanceof Int32Array, o = vl(a), d = vl(a);
  vl(a);
  let A = Mr(a), g = 0;
  r[g++] = c ? Number(A) : A;
  const v = o / d;
  for (; g < f; ) {
    const y = Mr(a), p = new Uint8Array(d);
    for (let m = 0; m < d; m++)
      p[m] = a.view.getUint8(a.offset++);
    for (let m = 0; m < d && g < f; m++) {
      const w = BigInt(p[m]);
      if (w) {
        let O = 0n, D = v;
        const R = (1n << w) - 1n;
        for (; D && g < f; ) {
          let B = BigInt(a.view.getUint8(a.offset)) >> O & R;
          for (O += w; O >= 8; )
            O -= 8n, a.offset++, O && (B |= BigInt(a.view.getUint8(a.offset)) << w - O & R);
          const z = y + B;
          A += z, r[g++] = c ? Number(A) : A, D--;
        }
        D && (a.offset += Math.ceil((D * Number(w) + Number(O)) / 8));
      } else
        for (let O = 0; O < v && g < f; O++)
          A += y, r[g++] = c ? Number(A) : A;
    }
  }
}
function nA(a, f, r) {
  const c = new Int32Array(f);
  hi(a, f, c);
  for (let o = 0; o < f; o++)
    r[o] = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, c[o]), a.offset += c[o];
}
function Yg(a, f, r) {
  const c = new Int32Array(f);
  hi(a, f, c);
  const o = new Int32Array(f);
  hi(a, f, o);
  for (let d = 0; d < f; d++) {
    const A = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, o[d]);
    c[d] ? (r[d] = new Uint8Array(c[d] + o[d]), r[d].set(r[d - 1].subarray(0, c[d])), r[d].set(A, c[d])) : r[d] = A, a.offset += o[d];
  }
}
function _n(a, f, r, c) {
  c === void 0 && (c = a.view.getUint32(a.offset, !0), a.offset += 4);
  const o = a.offset;
  let d = 0;
  for (; d < r.length; ) {
    const A = vl(a);
    if (A & 1)
      d = Hg(a, A, f, r, d);
    else {
      const g = A >>> 1;
      Lg(a, g, f, r, d), d += g;
    }
  }
  a.offset = o + c;
}
function Lg(a, f, r, c, o) {
  const d = r + 7 >> 3;
  let A = 0;
  for (let g = 0; g < d; g++)
    A |= a.view.getUint8(a.offset++) << (g << 3);
  for (let g = 0; g < f; g++)
    c[o + g] = A;
}
function Hg(a, f, r, c, o) {
  let d = f >> 1 << 3;
  const A = (1 << r) - 1;
  let g = 0;
  if (a.offset < a.view.byteLength)
    g = a.view.getUint8(a.offset++);
  else if (A)
    throw new Error(`parquet bitpack offset ${a.offset} out of range`);
  let v = 8, y = 0;
  for (; d; )
    y > 8 ? (y -= 8, v -= 8, g >>>= 8) : v - y < r ? (g |= a.view.getUint8(a.offset) << v, a.offset++, v += 8) : (o < c.length && (c[o++] = g >> y & A), d--, y += r);
  return o;
}
function lA(a, f, r, c) {
  const o = qg(r, c), d = new Uint8Array(f * o);
  for (let A = 0; A < o; A++)
    for (let g = 0; g < f; g++)
      d[g * o + A] = a.view.getUint8(a.offset++);
  if (r === "FLOAT") return new Float32Array(d.buffer);
  if (r === "DOUBLE") return new Float64Array(d.buffer);
  if (r === "INT32") return new Int32Array(d.buffer);
  if (r === "INT64") return new BigInt64Array(d.buffer);
  if (r === "FIXED_LEN_BYTE_ARRAY") {
    const A = new Array(f);
    for (let g = 0; g < f; g++)
      A[g] = d.subarray(g * o, (g + 1) * o);
    return A;
  }
  throw new Error(`parquet byte_stream_split unsupported type: ${r}`);
}
function qg(a, f) {
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
function Xr(a, f, r, c) {
  if (r === 0) return [];
  if (f === "BOOLEAN")
    return Gg(a, r);
  if (f === "INT32")
    return Ig(a, r);
  if (f === "INT64")
    return jg(a, r);
  if (f === "INT96")
    return Zg(a, r);
  if (f === "FLOAT")
    return Vg(a, r);
  if (f === "DOUBLE")
    return Xg(a, r);
  if (f === "BYTE_ARRAY")
    return Kg(a, r);
  if (f === "FIXED_LEN_BYTE_ARRAY") {
    if (!c) throw new Error("parquet missing fixed length");
    return Jg(a, r, c);
  } else
    throw new Error(`parquet unhandled type: ${f}`);
}
function Gg(a, f) {
  const r = new Array(f);
  for (let c = 0; c < f; c++) {
    const o = a.offset + (c / 8 | 0), d = c % 8, A = a.view.getUint8(o);
    r[c] = (A & 1 << d) !== 0;
  }
  return a.offset += Math.ceil(f / 8), r;
}
function Ig(a, f) {
  const r = (a.view.byteOffset + a.offset) % 4 ? new Int32Array($u(a.view.buffer, a.view.byteOffset + a.offset, f * 4)) : new Int32Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f * 4, r;
}
function jg(a, f) {
  const r = (a.view.byteOffset + a.offset) % 8 ? new BigInt64Array($u(a.view.buffer, a.view.byteOffset + a.offset, f * 8)) : new BigInt64Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f * 8, r;
}
function Zg(a, f) {
  const r = new Array(f);
  for (let c = 0; c < f; c++) {
    const o = a.view.getBigInt64(a.offset + c * 12, !0), d = a.view.getInt32(a.offset + c * 12 + 8, !0);
    r[c] = BigInt(d) << 64n | o;
  }
  return a.offset += f * 12, r;
}
function Vg(a, f) {
  const r = (a.view.byteOffset + a.offset) % 4 ? new Float32Array($u(a.view.buffer, a.view.byteOffset + a.offset, f * 4)) : new Float32Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f * 4, r;
}
function Xg(a, f) {
  const r = (a.view.byteOffset + a.offset) % 8 ? new Float64Array($u(a.view.buffer, a.view.byteOffset + a.offset, f * 8)) : new Float64Array(a.view.buffer, a.view.byteOffset + a.offset, f);
  return a.offset += f * 8, r;
}
function Kg(a, f) {
  const r = new Array(f);
  for (let c = 0; c < f; c++) {
    const o = a.view.getUint32(a.offset, !0);
    a.offset += 4, r[c] = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, o), a.offset += o;
  }
  return r;
}
function Jg(a, f, r) {
  const c = new Array(f);
  for (let o = 0; o < f; o++)
    c[o] = new Uint8Array(a.view.buffer, a.view.byteOffset + a.offset, r), a.offset += r;
  return c;
}
function $u(a, f, r) {
  const c = new ArrayBuffer(r);
  return new Uint8Array(c).set(new Uint8Array(a, f, r)), c;
}
const _g = [0, 255, 65535, 16777215, 4294967295];
function b1(a, f, r, c, o) {
  for (let d = 0; d < o; d++)
    r[c + d] = a[f + d];
}
function Fg(a, f) {
  const r = a.byteLength, c = f.byteLength;
  let o = 0, d = 0;
  for (; o < r; ) {
    const A = a[o];
    if (o++, A < 128)
      break;
  }
  if (c && o >= r)
    throw new Error("invalid snappy length header");
  for (; o < r; ) {
    const A = a[o];
    let g = 0;
    if (o++, o >= r)
      throw new Error("missing eof marker");
    if ((A & 3) === 0) {
      let v = (A >>> 2) + 1;
      if (v > 60) {
        if (o + 3 >= r)
          throw new Error("snappy error literal pos + 3 >= inputLength");
        const y = v - 60;
        v = a[o] + (a[o + 1] << 8) + (a[o + 2] << 16) + (a[o + 3] << 24), v = (v & _g[y]) + 1, o += y;
      }
      if (o + v > r)
        throw new Error("snappy error literal exceeds input length");
      b1(a, o, f, d, v), o += v, d += v;
    } else {
      let v = 0;
      switch (A & 3) {
        case 1:
          g = (A >>> 2 & 7) + 4, v = a[o] + (A >>> 5 << 8), o++;
          break;
        case 2:
          if (r <= o + 1)
            throw new Error("snappy error end of input");
          g = (A >>> 2) + 1, v = a[o] + (a[o + 1] << 8), o += 2;
          break;
        case 3:
          if (r <= o + 3)
            throw new Error("snappy error end of input");
          g = (A >>> 2) + 1, v = a[o] + (a[o + 1] << 8) + (a[o + 2] << 16) + (a[o + 3] << 24), o += 4;
          break;
      }
      if (v === 0 || isNaN(v))
        throw new Error(`invalid offset ${v} pos ${o} inputLength ${r}`);
      if (v > d)
        throw new Error("cannot copy from before start of buffer");
      b1(f, d - v, f, d, g), d += g;
    }
  }
  if (d !== c) throw new Error("premature end of input");
}
function kg(a, f, { type: r, element: c, schemaPath: o }) {
  const d = new DataView(a.buffer, a.byteOffset, a.byteLength), A = { view: d, offset: 0 };
  let g;
  const v = Wg(A, f, o), { definitionLevels: y, numNulls: p } = Pg(A, f, o), m = f.num_values - p;
  if (f.encoding === "PLAIN")
    g = Xr(A, r, m, c.type_length);
  else if (f.encoding === "PLAIN_DICTIONARY" || f.encoding === "RLE_DICTIONARY" || f.encoding === "RLE") {
    const w = r === "BOOLEAN" ? 1 : d.getUint8(A.offset++);
    w ? (g = new Array(m), r === "BOOLEAN" ? (_n(A, w, g), g = g.map((O) => !!O)) : _n(A, w, g, d.byteLength - A.offset)) : g = new Uint8Array(m);
  } else if (f.encoding === "BYTE_STREAM_SPLIT")
    g = lA(A, m, r, c.type_length);
  else if (f.encoding === "DELTA_BINARY_PACKED")
    g = r === "INT32" ? new Int32Array(m) : new BigInt64Array(m), hi(A, m, g);
  else if (f.encoding === "DELTA_LENGTH_BYTE_ARRAY")
    g = new Array(m), nA(A, m, g);
  else
    throw new Error(`parquet unsupported encoding: ${f.encoding}`);
  return { definitionLevels: y, repetitionLevels: v, dataPage: g };
}
function Wg(a, f, r) {
  if (r.length > 1) {
    const c = K1(r);
    if (c) {
      const o = new Array(f.num_values);
      return _n(a, tf(c), o), o;
    }
  }
  return [];
}
function Pg(a, f, r) {
  const c = Zr(r);
  if (!c) return { definitionLevels: [], numNulls: 0 };
  const o = new Array(f.num_values);
  _n(a, tf(c), o);
  let d = f.num_values;
  for (const A of o)
    A === c && d--;
  return d === 0 && (o.length = 0), { definitionLevels: o, numNulls: d };
}
function Or(a, f, r, c) {
  let o;
  const d = c?.[r];
  if (r === "UNCOMPRESSED")
    o = a;
  else if (d)
    o = d(a, f);
  else if (r === "SNAPPY")
    o = new Uint8Array(f), Fg(a, o);
  else
    throw new Error(`parquet unsupported compression codec: ${r}`);
  if (o?.length !== f)
    throw new Error(`parquet decompressed page length ${o?.length} does not match header ${f}`);
  return o;
}
function $g(a, f, r) {
  const o = { view: new DataView(a.buffer, a.byteOffset, a.byteLength), offset: 0 }, { type: d, element: A, schemaPath: g, codec: v, compressors: y } = r, p = f.data_page_header_v2;
  if (!p) throw new Error("parquet data page header v2 is undefined");
  const m = ty(o, p, g);
  o.offset = p.repetition_levels_byte_length;
  const w = ey(o, p, g), O = f.uncompressed_page_size - p.definition_levels_byte_length - p.repetition_levels_byte_length;
  let D = a.subarray(o.offset);
  p.is_compressed !== !1 && (D = Or(D, O, v, y));
  const R = new DataView(D.buffer, D.byteOffset, D.byteLength), B = { view: R, offset: 0 };
  let z;
  const Z = p.num_values - p.num_nulls;
  if (p.encoding === "PLAIN")
    z = Xr(B, d, Z, A.type_length);
  else if (p.encoding === "RLE")
    z = new Array(Z), _n(B, 1, z), z = z.map((G) => !!G);
  else if (p.encoding === "PLAIN_DICTIONARY" || p.encoding === "RLE_DICTIONARY") {
    const G = R.getUint8(B.offset++);
    z = new Array(Z), _n(B, G, z, O - 1);
  } else if (p.encoding === "DELTA_BINARY_PACKED")
    z = d === "INT32" ? new Int32Array(Z) : new BigInt64Array(Z), hi(B, Z, z);
  else if (p.encoding === "DELTA_LENGTH_BYTE_ARRAY")
    z = new Array(Z), nA(B, Z, z);
  else if (p.encoding === "DELTA_BYTE_ARRAY")
    z = new Array(Z), Yg(B, Z, z);
  else if (p.encoding === "BYTE_STREAM_SPLIT")
    z = lA(B, Z, d, A.type_length);
  else
    throw new Error(`parquet unsupported encoding: ${p.encoding}`);
  return { definitionLevels: w, repetitionLevels: m, dataPage: z };
}
function ty(a, f, r) {
  const c = K1(r);
  if (!c) return [];
  const o = new Array(f.num_values);
  return _n(a, tf(c), o, f.repetition_levels_byte_length), o;
}
function ey(a, f, r) {
  const c = Zr(r);
  if (c) {
    const o = new Array(f.num_values);
    return _n(a, tf(c), o, f.definition_levels_byte_length), o;
  }
}
function tf(a) {
  return 32 - Math.clz32(a);
}
function w1(a, { groupStart: f, selectStart: r, selectEnd: c }, o, d) {
  const { pathInSchema: A, schemaPath: g } = o, v = J1(g), y = [];
  let p, m, w = 0, O = 0;
  const D = d && (() => {
    m && d({
      pathInSchema: A,
      columnData: m,
      rowStart: f + w - m.length,
      rowEnd: f + w
    });
  });
  for (; (v ? w < c : a.offset < a.view.byteLength - 1) && !(a.offset >= a.view.byteLength - 1); ) {
    const R = ny(a);
    if (R.type === "DICTIONARY_PAGE") {
      const { data: B } = E1(a, R, o, p, void 0, 0);
      B && (p = G1(B, o));
    } else {
      const B = m?.length || 0, z = E1(a, R, o, p, m, r - w);
      z.skipped ? (y.length || (O += z.skipped), w += z.skipped) : z.data && m === z.data ? w += z.data.length - B : z.data && z.data.length && (D?.(), y.push(z.data), w += z.data.length, m = z.data);
    }
  }
  return D?.(), { data: y, skipped: O };
}
function E1(a, f, r, c, o, d) {
  const { type: A, element: g, schemaPath: v, codec: y, compressors: p } = r, m = new Uint8Array(
    a.view.buffer,
    a.view.byteOffset + a.offset,
    f.compressed_page_size
  );
  if (a.offset += f.compressed_page_size, f.type === "DATA_PAGE") {
    const w = f.data_page_header;
    if (!w) throw new Error("parquet data page header is undefined");
    if (d > w.num_values && J1(v))
      return { skipped: w.num_values };
    const O = Or(m, Number(f.uncompressed_page_size), y, p), { definitionLevels: D, repetitionLevels: R, dataPage: B } = kg(O, w, r), z = u1(B, c, w.encoding, r), Z = Array.isArray(o) ? o : [];
    return { skipped: 0, data: p1(Z, D, R, z, v) };
  } else if (f.type === "DATA_PAGE_V2") {
    const w = f.data_page_header_v2;
    if (!w) throw new Error("parquet data page header v2 is undefined");
    if (d > w.num_rows)
      return { skipped: w.num_values };
    const { definitionLevels: O, repetitionLevels: D, dataPage: R } = $g(m, f, r), B = u1(R, c, w.encoding, r), z = Array.isArray(o) ? o : [];
    return { skipped: 0, data: p1(z, O, D, B, v) };
  } else if (f.type === "DICTIONARY_PAGE") {
    const w = f.dictionary_page_header;
    if (!w) throw new Error("parquet dictionary page header is undefined");
    const O = Or(
      m,
      Number(f.uncompressed_page_size),
      y,
      p
    ), D = { view: new DataView(O.buffer, O.byteOffset, O.byteLength), offset: 0 };
    return { skipped: 0, data: Xr(D, A, w.num_values, g.type_length) };
  } else
    throw new Error(`parquet unsupported page type: ${f.type}`);
}
function ny(a) {
  const f = gi(a), r = H1[f.field_1], c = f.field_2, o = f.field_3, d = f.field_4, A = f.field_5 && {
    num_values: f.field_5.field_1,
    encoding: gl[f.field_5.field_2],
    definition_level_encoding: gl[f.field_5.field_3],
    repetition_level_encoding: gl[f.field_5.field_4],
    statistics: f.field_5.field_5 && {
      max: f.field_5.field_5.field_1,
      min: f.field_5.field_5.field_2,
      null_count: f.field_5.field_5.field_3,
      distinct_count: f.field_5.field_5.field_4,
      max_value: f.field_5.field_5.field_5,
      min_value: f.field_5.field_5.field_6
    }
  }, g = f.field_6, v = f.field_7 && {
    num_values: f.field_7.field_1,
    encoding: gl[f.field_7.field_2],
    is_sorted: f.field_7.field_3
  }, y = f.field_8 && {
    num_values: f.field_8.field_1,
    num_nulls: f.field_8.field_2,
    num_rows: f.field_8.field_3,
    encoding: gl[f.field_8.field_4],
    definition_levels_byte_length: f.field_8.field_5,
    repetition_levels_byte_length: f.field_8.field_6,
    is_compressed: f.field_8.field_7 === void 0 ? !0 : f.field_8.field_7,
    // default true
    statistics: f.field_8.field_8
  };
  return {
    type: r,
    uncompressed_page_size: c,
    compressed_page_size: o,
    crc: d,
    data_page_header: A,
    index_page_header: g,
    dictionary_page_header: v,
    data_page_header_v2: y
  };
}
function ly(a, { metadata: f }, r) {
  const c = [];
  for (const o of r.chunks) {
    const { data_page_offset: d, dictionary_page_offset: A, path_in_schema: g } = o.columnMetadata, v = V1(f.schema, g), y = {
      pathInSchema: g,
      element: v[v.length - 1].element,
      schemaPath: v,
      parsers: { ...Pu, ...a.parsers },
      ...a,
      ...o.columnMetadata
    };
    let { startByte: p, endByte: m } = o.range;
    if (!("offsetIndex" in o)) {
      c.push({
        pathInSchema: g,
        data: Promise.resolve(a.file.slice(p, m)).then((w) => {
          const O = { view: new DataView(w), offset: 0 };
          return w1(O, r, y, a.onPage);
        })
      });
      continue;
    }
    c.push({
      pathInSchema: g,
      // fetch offset index
      data: Promise.resolve(a.file.slice(o.offsetIndex.startByte, o.offsetIndex.endByte)).then(async (w) => {
        const { selectStart: O, selectEnd: D } = r, R = yg({ view: new DataView(w), offset: 0 }).page_locations;
        let B = -1;
        const z = A || d < R[0].offset;
        for (let I = 0; I < R.length; I++) {
          const $ = R[I], dt = Number($.first_row_index), bt = I + 1 < R.length ? Number(R[I + 1].first_row_index) : r.groupRows;
          B < 0 && !z && bt > O && (p = Number($.offset), B = dt), dt < D && (m = Number($.offset) + $.compressed_page_size);
        }
        B < 0 && (B = 0);
        const Z = await a.file.slice(p, m), G = { view: new DataView(Z), offset: 0 }, K = B ? {
          ...r,
          groupStart: r.groupStart + B,
          selectStart: r.selectStart - B,
          selectEnd: r.selectEnd - B
        } : r, { data: _, skipped: j } = w1(G, K, y, a.onPage);
        return {
          data: _,
          skipped: B + j
        };
      })
    });
  }
  return { groupStart: r.groupStart, groupRows: r.groupRows, asyncColumns: c };
}
async function S1({ asyncColumns: a }, f, r, c, o) {
  const d = await Promise.all(a.map(
    (m) => m.data.then(({ skipped: w, data: O }) => ({ skipped: w, data: P1(O) }))
  )), A = r - f;
  if (o === "object") {
    const m = Array(A);
    for (let w = 0; w < A; w++) {
      const O = {};
      for (let D = 0; D < a.length; D++) {
        const { data: R, skipped: B } = d[D];
        O[a[D].pathInSchema[0]] = R[f + w - B];
      }
      m[w] = O;
    }
    return m;
  }
  const g = a.map((m) => m.pathInSchema[0]).filter((m) => !c || c.includes(m)), v = c ?? g, y = v.map((m) => a.findIndex((w) => w.pathInSchema[0] === m)), p = Array(A);
  for (let m = 0; m < A; m++) {
    const w = Array(a.length);
    for (let O = 0; O < v.length; O++) {
      const D = y[O];
      if (D < 0) throw new Error(`parquet column not found: ${v[O]}`);
      const { data: R, skipped: B } = d[D];
      w[O] = R[f + m - B];
    }
    p[m] = w;
  }
  return p;
}
function ay(a, f, r) {
  const { asyncColumns: c } = a;
  r = { ...Pu, ...r };
  const o = [];
  for (const d of f.children)
    if (d.children.length) {
      const A = c.filter((g) => g.pathInSchema[0] === d.element.name);
      if (!A.length) continue;
      o.push({
        pathInSchema: d.path,
        data: (async () => {
          const g = await Promise.all(A.map((m) => m.data)), v = /* @__PURE__ */ new Map();
          let y = 1 / 0;
          for (let m = 0; m < A.length; m++) {
            const w = P1(g[m].data);
            v.set(A[m].pathInSchema.join("."), w), y = Math.min(y, w.length);
          }
          for (const [m, w] of v)
            w.length > y && v.set(m, w.slice(0, y));
          ci(v, d, r);
          const p = v.get(d.element.name);
          if (!p) throw new Error("parquet column data not assembled");
          return { data: [p], skipped: 0 };
        })()
      });
    } else {
      const A = c.find((g) => g.pathInSchema[0] === d.element.name);
      A && o.push(A);
    }
  return { ...a, asyncColumns: o };
}
async function iy(a) {
  a.metadata ?? (a.metadata = await Ag(a.file, a));
  const { rowStart: f = 0, rowEnd: r, columns: c, onChunk: o, onComplete: d, rowFormat: A, filter: g, filterStrict: v = !0 } = a;
  if (g && A !== "object")
    throw new Error('parquet filter requires rowFormat: "object"');
  const y = ju(g);
  if (y.length) {
    const B = di(a.metadata).children.map((Z) => Z.element.name), z = y.filter((Z) => !B.includes(Z));
    if (z.length)
      throw new Error(`parquet filter columns not found: ${z.join(", ")}`);
  }
  let p = c, m = !1;
  if (c && g) {
    const B = y.filter((z) => !c.includes(z));
    B.length && (p = [...c, ...B], m = !0);
  }
  let w = p !== c ? { ...a, columns: p } : a;
  w = await fy(w);
  const O = uy(w);
  if (!d && !o) {
    await Er(O);
    return;
  }
  const D = di(a.metadata), R = O.map((B) => ay(B, D, a.parsers));
  if (o)
    for (const B of R)
      for (const z of B.asyncColumns)
        z.data.then(({ data: Z, skipped: G }) => {
          let K = B.groupStart + G;
          for (const _ of Z)
            o({
              columnName: z.pathInSchema[0],
              columnData: _,
              rowStart: K,
              rowEnd: K + _.length
            }), K += _.length;
        }, () => {
        });
  if (d) {
    await Er(R);
    const B = [];
    for (const z of R) {
      const Z = Math.max(f - z.groupStart, 0), G = Math.min((r ?? 1 / 0) - z.groupStart, z.groupRows), K = A === "object" ? await S1(z, Z, G, p, "object") : await S1(z, Z, G, c, "array");
      if (g) {
        for (
          const _ of
          /** @type {Record<string, any>[]} */
          K
        )
          if (fi(_, g, v)) {
            if (m && c)
              for (const j of y)
                c.includes(j) || delete _[j];
            B.push(_);
          }
      } else
        W1(B, K);
    }
    d(B);
  } else
    await Er(R);
}
async function Er(a) {
  const f = a.flatMap((o) => o.asyncColumns.map((d) => d.data)), c = (await Promise.allSettled(f)).find((o) => o.status === "rejected");
  if (c) throw c.reason;
}
function uy(a) {
  if (!a.metadata) throw new Error("parquet requires metadata");
  const f = zg(a);
  return a.file = Dg(a.file, f), f.groups.map((r) => ly(a, f, r));
}
async function fy(a) {
  if (!a.useBloomFilters || !a.filter || !a.metadata) return a;
  const f = di(a.metadata), r = {};
  for (const o of f.children) r[o.element.name] = o.element;
  const c = await Mg({
    file: a.file,
    metadata: a.metadata,
    filter: a.filter,
    filterStrict: a.filterStrict
  });
  return (
    /** @type {BaseParquetReadOptions} */
    { ...a, bloomFiltersByGroup: c, schemaElements: r }
  );
}
function cy(a) {
  return new Promise((f, r) => {
    iy({
      ...a,
      rowFormat: "object",
      // force object output
      onComplete: f
    }).catch(r);
  });
}
var ry = ArrayBuffer, Zt = Uint8Array, Fu = Uint16Array, oy = Int16Array, ef = Int32Array, Sr = function(a, f, r) {
  if (Zt.prototype.slice)
    return Zt.prototype.slice.call(a, f, r);
  (f == null || f < 0) && (f = 0), (r == null || r > a.length) && (r = a.length);
  var c = new Zt(r - f);
  return c.set(a.subarray(f, r)), c;
}, oi = function(a, f, r, c) {
  if (Zt.prototype.fill)
    return Zt.prototype.fill.call(a, f, r, c);
  for ((r == null || r < 0) && (r = 0), (c == null || c > a.length) && (c = a.length); r < c; ++r)
    a[r] = f;
  return a;
}, sy = function(a, f, r, c) {
  if (Zt.prototype.copyWithin)
    return Zt.prototype.copyWithin.call(a, f, r, c);
  for ((r == null || r < 0) && (r = 0), (c == null || c > a.length) && (c = a.length); r < c; )
    a[f++] = a[r++];
}, dy = [
  "invalid zstd data",
  "window size too large (>2046MB)",
  "invalid block type",
  "FSE accuracy too high",
  "match distance too far back",
  "unexpected EOF"
], Ft = function(a, f, r) {
  var c = new Error(f || dy[a]);
  if (c.code = a, Error.captureStackTrace && Error.captureStackTrace(c, Ft), !r)
    throw c;
  return c;
}, B1 = function(a, f, r) {
  for (var c = 0, o = 0; c < r; ++c)
    o |= a[f++] << (c << 3);
  return o;
}, Ay = function(a, f) {
  return (a[f] | a[f + 1] << 8 | a[f + 2] << 16 | a[f + 3] << 24) >>> 0;
}, hy = function(a, f) {
  var r = a[0] | a[1] << 8 | a[2] << 16;
  if (r == 3126568 && a[3] == 253) {
    var c = a[4], o = c >> 5 & 1, d = c >> 2 & 1, A = c & 3, g = c >> 6;
    c & 8 && Ft(0);
    var v = 6 - o, y = A == 3 ? 4 : A, p = B1(a, v, y);
    v += y;
    var m = g ? 1 << g : o, w = B1(a, v, m) + (g == 1 && 256), O = w;
    if (!o) {
      var D = 1 << 10 + (a[5] >> 3);
      O = D + (D >> 3) * (a[5] & 7);
    }
    O > 2145386496 && Ft(1);
    var R = new Zt((f == 1 ? w || O : f ? 0 : O) + 12);
    return R[0] = 1, R[4] = 4, R[8] = 8, {
      b: v + m,
      y: 0,
      l: 0,
      d: p,
      w: f && f != 1 ? f : R.subarray(12),
      e: O,
      o: new ef(R.buffer, 0, 3),
      u: w,
      c: d,
      m: Math.min(131072, O)
    };
  } else if ((r >> 4 | a[3] << 20) == 25481893)
    return Ay(a, 4) + 8;
  Ft(0);
}, bl = function(a) {
  for (var f = 0; 1 << f <= a; ++f)
    ;
  return f - 1;
}, yi = function(a, f, r) {
  var c = (f << 3) + 4, o = (a[f] & 15) + 5;
  o > r && Ft(3);
  for (var d = 1 << o, A = d, g = -1, v = -1, y = -1, p = d, m = new ry(512 + (d << 2)), w = new oy(m, 0, 256), O = new Fu(m, 0, 256), D = new Fu(m, 512, d), R = 512 + (d << 1), B = new Zt(m, R, d), z = new Zt(m, R + d); g < 255 && A > 0; ) {
    var Z = bl(A + 1), G = c >> 3, K = (1 << Z + 1) - 1, _ = (a[G] | a[G + 1] << 8 | a[G + 2] << 16) >> (c & 7) & K, j = (1 << Z) - 1, I = K - A - 1, $ = _ & j;
    if ($ < I ? (c += Z, _ = $) : (c += Z + 1, _ > j && (_ -= I)), w[++g] = --_, _ == -1 ? (A += _, B[--p] = g) : A -= _, !_)
      do {
        var dt = c >> 3;
        v = (a[dt] | a[dt + 1] << 8) >> (c & 7) & 3, c += 2, g += v;
      } while (v == 3);
  }
  (g > 255 || A) && Ft(0);
  for (var bt = 0, wt = (d >> 1) + (d >> 3) + 3, ut = d - 1, Dt = 0; Dt <= g; ++Dt) {
    var it = w[Dt];
    if (it < 1) {
      O[Dt] = -it;
      continue;
    }
    for (y = 0; y < it; ++y) {
      B[bt] = Dt;
      do
        bt = bt + wt & ut;
      while (bt >= p);
    }
  }
  for (bt && Ft(0), y = 0; y < d; ++y) {
    var nt = O[B[y]]++, M = z[y] = o - bl(nt);
    D[y] = (nt << M) - d;
  }
  return [c + 7 >> 3, {
    b: o,
    s: B,
    n: z,
    t: D
  }];
}, gy = function(a, f) {
  var r = 0, c = -1, o = new Zt(292), d = a[f], A = o.subarray(0, 256), g = o.subarray(256, 268), v = new Fu(o.buffer, 268);
  if (d < 128) {
    var y = yi(a, f + 1, 6), p = y[0], m = y[1];
    f += d;
    var w = p << 3, O = a[f];
    O || Ft(0);
    for (var D = 0, R = 0, B = m.b, z = B, Z = (++f << 3) - 8 + bl(O); Z -= B, !(Z < w); ) {
      var G = Z >> 3;
      if (D += (a[G] | a[G + 1] << 8) >> (Z & 7) & (1 << B) - 1, A[++c] = m.s[D], Z -= z, Z < w)
        break;
      G = Z >> 3, R += (a[G] | a[G + 1] << 8) >> (Z & 7) & (1 << z) - 1, A[++c] = m.s[R], B = m.n[D], D = m.t[D], z = m.n[R], R = m.t[R];
    }
    ++c > 255 && Ft(0);
  } else {
    for (c = d - 127; r < c; r += 2) {
      var K = a[++f];
      A[r] = K >> 4, A[r + 1] = K & 15;
    }
    ++f;
  }
  var _ = 0;
  for (r = 0; r < c; ++r) {
    var j = A[r];
    j > 11 && Ft(0), _ += j && 1 << j - 1;
  }
  var I = bl(_) + 1, $ = 1 << I, dt = $ - _;
  for (dt & dt - 1 && Ft(0), A[c++] = bl(dt) + 1, r = 0; r < c; ++r) {
    var j = A[r];
    ++g[A[r] = j && I + 1 - j];
  }
  var bt = new Zt($ << 1), wt = bt.subarray(0, $), ut = bt.subarray($);
  for (v[I] = 0, r = I; r > 0; --r) {
    var Dt = v[r];
    oi(ut, r, Dt, v[r - 1] = Dt + g[r] * (1 << I - r));
  }
  for (v[0] != $ && Ft(0), r = 0; r < c; ++r) {
    var it = A[r];
    if (it) {
      var nt = v[it];
      oi(wt, r, nt, v[it] = nt + (1 << I - it));
    }
  }
  return [f, {
    n: ut,
    b: I,
    s: wt
  }];
}, yy = yi(/* @__PURE__ */ new Zt([
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
]), 0, 6)[1], my = yi(/* @__PURE__ */ new Zt([
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
]), 0, 6)[1], vy = yi(/* @__PURE__ */ new Zt([
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
]), 0, 5)[1], aA = function(a, f) {
  for (var r = a.length, c = new ef(r), o = 0; o < r; ++o)
    c[o] = f, f += 1 << a[o];
  return c;
}, Nr = /* @__PURE__ */ new Zt((/* @__PURE__ */ new ef([
  0,
  0,
  0,
  0,
  16843009,
  50528770,
  134678020,
  202050057,
  269422093
])).buffer, 0, 36), py = /* @__PURE__ */ aA(Nr, 0), Rr = /* @__PURE__ */ new Zt((/* @__PURE__ */ new ef([
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
])).buffer, 0, 53), by = /* @__PURE__ */ aA(Rr, 3), ri = function(a, f, r) {
  var c = a.length, o = f.length, d = a[c - 1], A = (1 << r.b) - 1, g = -r.b;
  d || Ft(0);
  for (var v = 0, y = r.b, p = (c << 3) - 8 + bl(d) - y, m = -1; p > g && m < o; ) {
    var w = p >> 3, O = (a[w] | a[w + 1] << 8 | a[w + 2] << 16) >> (p & 7);
    v = (v << y | O) & A, f[++m] = r.s[v], p -= y = r.n[v];
  }
  (p != g || m + 1 != o) && Ft(0);
}, wy = function(a, f, r) {
  var c = 6, o = f.length, d = o + 3 >> 2, A = d << 1, g = d + A;
  ri(a.subarray(c, c += a[0] | a[1] << 8), f.subarray(0, d), r), ri(a.subarray(c, c += a[2] | a[3] << 8), f.subarray(d, A), r), ri(a.subarray(c, c += a[4] | a[5] << 8), f.subarray(A, g), r), ri(a.subarray(c), f.subarray(g), r);
}, Ey = function(a, f, r) {
  var c, o = f.b, d = a[o], A = d >> 1 & 3;
  f.l = d & 1;
  var g = d >> 3 | a[o + 1] << 5 | a[o + 2] << 13, v = (o += 3) + g;
  if (A == 1)
    return o >= a.length ? void 0 : (f.b = o + 1, r ? (oi(r, a[o], f.y, f.y += g), r) : oi(new Zt(g), a[o]));
  if (!(v > a.length)) {
    if (A == 0)
      return f.b = v, r ? (r.set(a.subarray(o, v), f.y), f.y += g, r) : Sr(a, o, v);
    if (A == 2) {
      var y = a[o], p = y & 3, m = y >> 2 & 3, w = y >> 4, O = 0, D = 0;
      p < 2 ? m & 1 ? w |= a[++o] << 4 | (m & 2 && a[++o] << 12) : w = y >> 3 : (D = m, m < 2 ? (w |= (a[++o] & 63) << 4, O = a[o] >> 6 | a[++o] << 2) : m == 2 ? (w |= a[++o] << 4 | (a[++o] & 3) << 12, O = a[o] >> 2 | a[++o] << 6) : (w |= a[++o] << 4 | (a[++o] & 63) << 12, O = a[o] >> 6 | a[++o] << 2 | a[++o] << 10)), ++o;
      var R = r ? r.subarray(f.y, f.y + f.m) : new Zt(f.m), B = R.length - w;
      if (p == 0)
        R.set(a.subarray(o, o += w), B);
      else if (p == 1)
        oi(R, a[o++], B);
      else {
        var z = f.h;
        if (p == 2) {
          var Z = gy(a, o);
          O += o - (o = Z[0]), f.h = z = Z[1];
        } else z || Ft(0);
        (D ? wy : ri)(a.subarray(o, o += O), R.subarray(B), z);
      }
      var G = a[o++];
      if (G) {
        G == 255 ? G = (a[o++] | a[o++] << 8) + 32512 : G > 127 && (G = G - 128 << 8 | a[o++]);
        var K = a[o++];
        K & 3 && Ft(0);
        for (var _ = [my, vy, yy], j = 2; j > -1; --j) {
          var I = K >> (j << 1) + 2 & 3;
          if (I == 1) {
            var $ = new Zt([0, 0, a[o++]]);
            _[j] = {
              s: $.subarray(2, 3),
              n: $.subarray(0, 1),
              t: new Fu($.buffer, 0, 1),
              b: 0
            };
          } else I == 2 ? (c = yi(a, o, 9 - (j & 1)), o = c[0], _[j] = c[1]) : I == 3 && (f.t || Ft(0), _[j] = f.t[j]);
        }
        var dt = f.t = _, bt = dt[0], wt = dt[1], ut = dt[2], Dt = a[v - 1];
        Dt || Ft(0);
        var it = (v << 3) - 8 + bl(Dt) - ut.b, nt = it >> 3, M = 0, X = (a[nt] | a[nt + 1] << 8) >> (it & 7) & (1 << ut.b) - 1;
        nt = (it -= wt.b) >> 3;
        var tt = (a[nt] | a[nt + 1] << 8) >> (it & 7) & (1 << wt.b) - 1;
        nt = (it -= bt.b) >> 3;
        var mt = (a[nt] | a[nt + 1] << 8) >> (it & 7) & (1 << bt.b) - 1;
        for (++G; --G; ) {
          var pt = ut.s[X], S = ut.n[X], H = bt.s[mt], V = bt.n[mt], F = wt.s[tt], at = wt.n[tt];
          nt = (it -= F) >> 3;
          var ct = 1 << F, J = ct + ((a[nt] | a[nt + 1] << 8 | a[nt + 2] << 16 | a[nt + 3] << 24) >>> (it & 7) & ct - 1);
          nt = (it -= Rr[H]) >> 3;
          var Nt = by[H] + ((a[nt] | a[nt + 1] << 8 | a[nt + 2] << 16) >> (it & 7) & (1 << Rr[H]) - 1);
          nt = (it -= Nr[pt]) >> 3;
          var Bt = py[pt] + ((a[nt] | a[nt + 1] << 8 | a[nt + 2] << 16) >> (it & 7) & (1 << Nr[pt]) - 1);
          if (nt = (it -= S) >> 3, X = ut.t[X] + ((a[nt] | a[nt + 1] << 8) >> (it & 7) & (1 << S) - 1), nt = (it -= V) >> 3, mt = bt.t[mt] + ((a[nt] | a[nt + 1] << 8) >> (it & 7) & (1 << V) - 1), nt = (it -= at) >> 3, tt = wt.t[tt] + ((a[nt] | a[nt + 1] << 8) >> (it & 7) & (1 << at) - 1), J > 3)
            f.o[2] = f.o[1], f.o[1] = f.o[0], f.o[0] = J -= 3;
          else {
            var Ce = J - (Bt != 0);
            Ce ? (J = Ce == 3 ? f.o[0] - 1 : f.o[Ce], Ce > 1 && (f.o[2] = f.o[1]), f.o[1] = f.o[0], f.o[0] = J) : J = f.o[0];
          }
          for (var j = 0; j < Bt; ++j)
            R[M + j] = R[B + j];
          M += Bt, B += Bt;
          var ye = M - J;
          if (ye < 0) {
            var Ue = -ye, wl = f.e + ye;
            Ue > Nt && (Ue = Nt);
            for (var j = 0; j < Ue; ++j)
              R[M + j] = f.w[wl + j];
            M += Ue, Nt -= Ue, ye = 0;
          }
          for (var j = 0; j < Nt; ++j)
            R[M + j] = R[ye + j];
          M += Nt;
        }
        if (M != B)
          for (; B < R.length; )
            R[M++] = R[B++];
        else
          M = R.length;
        r ? f.y += M : R = Sr(R, 0, M);
      } else if (r) {
        if (f.y += w, B)
          for (var j = 0; j < w; ++j)
            R[j] = R[B + j];
      } else B && (R = Sr(R, B));
      return f.b = v, R;
    }
    Ft(2);
  }
}, Sy = function(a, f) {
  if (a.length == 1)
    return a[0];
  for (var r = new Zt(f), c = 0, o = 0; c < a.length; ++c) {
    var d = a[c];
    r.set(d, o), o += d.length;
  }
  return r;
};
function By(a, f) {
  for (var r = [], c = +!f, o = 0, d = 0; a.length; ) {
    var A = hy(a, c || f);
    if (typeof A == "object") {
      for (c ? (f = null, A.w.length == A.u && (r.push(f = A.w), d += A.u)) : (r.push(f), A.e = 0); !A.l; ) {
        var g = Ey(a, A, f);
        g || Ft(5), f ? A.e = A.y : (r.push(g), d += g.length, sy(A.w, 0, g.length), A.w.set(g, A.w.length - g.length));
      }
      o = A.b + A.c * 4;
    } else
      o = A;
    a = a.subarray(o);
  }
  return Sy(r, d);
}
function Ty() {
  const a = xy();
  return (f, r) => {
    const { memory: c, uncompress: o } = a.exports, d = 68e3, A = d + f.byteLength, g = d + f.byteLength + r;
    if (c.buffer.byteLength < g) {
      const m = c.buffer.byteLength / 65536, O = Math.ceil(g / 65536) - m;
      c.grow(O);
    }
    const v = new Uint8Array(c.buffer);
    v.set(f, d);
    const y = o(d, f.byteLength, A);
    if (y === -1) throw new Error("invalid snappy length header");
    if (y === -2) throw new Error("missing eof marker");
    if (y === -3) throw new Error("premature end of input");
    if (y) throw new Error(`failed to uncompress data ${y}`);
    return v.slice(A, A + r);
  };
}
function xy() {
  const a = atob(Cy), f = new Uint8Array(a.length);
  for (let c = 0; c < a.length; c += 1)
    f[c] = a.charCodeAt(c);
  const r = new WebAssembly.Module(f);
  return new WebAssembly.Instance(r);
}
const Cy = "AGFzbQEAAAABEANgAABgA39/fwF/YAF/AX8DBgUAAQEBAgUDAQACBj8KfwFBoIwEC38AQYAIC38AQaAMC38AQaAMC38AQaCMBAt/AEGACAt/AEGgjAQLfwBBgIAIC38AQQALfwBBAQsHwQEOBm1lbW9yeQIAEV9fd2FzbV9jYWxsX2N0b3JzAAAGbWVtY3B5AAEHbWVtbW92ZQACCnVuY29tcHJlc3MAAwxfX2Rzb19oYW5kbGUDAQpfX2RhdGFfZW5kAwILX19zdGFja19sb3cDAwxfX3N0YWNrX2hpZ2gDBA1fX2dsb2JhbF9iYXNlAwULX19oZWFwX2Jhc2UDBgpfX2hlYXBfZW5kAwcNX19tZW1vcnlfYmFzZQMIDF9fdGFibGVfYmFzZQMJCuASBQIAC8sBAQN/AkAgAkUNAAJAAkAgAkEHcSIDDQAgACEEIAIhBQwBCyAAIQQgAiEFA0AgBCABLQAAOgAAIARBAWohBCABQQFqIQEgBUF/aiEFIANBf2oiAw0ACwsgAkEISQ0AA0AgBCABLQAAOgAAIAQgAS0AAToAASAEIAEtAAI6AAIgBCABLQADOgADIAQgAS0ABDoABCAEIAEtAAU6AAUgBCABLQAGOgAGIAQgAS0ABzoAByAEQQhqIQQgAUEIaiEBIAVBeGoiBQ0ACwsgAAugAwEEfwJAIAAgAUYNAAJAAkAgACABSQ0AIAEgAmoiAyAASw0BCyACRQ0BAkACQCACQQdxIgMNACAAIQQgAiEFDAELIAAhBCACIQUDQCAEIAEtAAA6AAAgBEEBaiEEIAFBAWohASAFQX9qIQUgA0F/aiIDDQALCyACQQhJDQEDQCAEIAEtAAA6AAAgBCABLQABOgABIAQgAS0AAjoAAiAEIAEtAAM6AAMgBCABLQAEOgAEIAQgAS0ABToABSAEIAEtAAY6AAYgBCABLQAHOgAHIARBCGohBCABQQhqIQEgBUF4aiIFDQAMAgsLIAJFDQACQAJAIAJBA3EiBA0AIAAgAmohBiACIQUMAQsgAiEFA0AgBUF/aiIFIABqIgYgBSABaiIDLQAAOgAAIARBf2oiBA0ACwsgAkEESQ0AIAZBfGohASADQXxqIQQDQCABQQNqIARBA2otAAA6AAAgAUECaiAEQQJqLQAAOgAAIAFBAWogBEEBai0AADoAACABIAQtAAA6AAAgAUF8aiEBIARBfGohBCAFQXxqIgUNAAsLIAALswoBCX8jgICAgABBIGsiAySAgICAACADQQlqQgA3AAAgA0IANwIEIAMgA0EYajYCAEF/IQQCQCABRQ0AIAMgAUF/aiIFNgIcIAMgAEEBajYCGCAALAAAIgZB/wBxIQcCQCAGQX9KDQAgBUUNASADIAFBfmoiBTYCHCADIABBAmo2AhggACwAASIGQf8AcUEHdCAHciEHQX8hBCAGQX9KDQAgBUUNASADIAFBfWoiBTYCHCADIABBA2o2AhggACwAAiIGQf8AcUEOdCAHciEHQX8hBCAGQX9KDQAgBUUNASADIAFBfGoiBTYCHCADIABBBGo2AhggACwAAyIGQf8AcUEVdCAHciEHQX8hBCAGQX9KDQAgBUUNASADIAFBe2o2AhwgAyAAQQVqNgIYIAAsAAQiAUEASA0BIAFBHHQgB3IhBwsgAiAHaiEIAkACQCADEISAgIAADQAgAiEADAELIAMoAgQhASACIQADQAJAIAMoAgggAWtBBEoNACADIAE2AgQgAxCEgICAAEUNAiADKAIEIQELIAFBAWohBQJAAkAgAS0AACIGQQNxDQAgCCAAayEJIAMoAggiCiAFayEEIAZBAnYiC0EBaiEHAkAgBkE/Sw0AIARBEEkNACAJQRBIDQAgACABKAIBNgIAIAAgASgCBTYCBCAAIAEoAgk2AgggACABKAINNgIMIAAgB2ohACADKAIIIAUgB2oiAWtBBEoNAyADIAE2AgQgAxCEgICAAEUNBAwCCwJAAkAgBkHwAU8NACAFIQYMAQsgCiAFIAtBRWoiAWoiBmshBCABQQJ0QYCIgIAAaigCACAFKAIAcUEBaiEHCwJAIAcgBE0NAANAIAggAGsgBEkNBSAAIAYgBBCBgICAACEAIAMoAgAiASABKAIAIgkgAygCDCIFaiIGNgIAIAFBBGoiASABKAIAIgogBWsiATYCACADIAE2AgwgACAEaiEAIAFFDQUgAyAJIApqNgIIIAcgBGshByABIQQgByABSw0ACyAIIABrIQkLIAkgB0kNAyAAIAYgBxCBgICAACAHaiEAIAMoAgggBiAHaiIBa0EESg0CIAMgATYCBCADEISAgIAADQEMAwsgACACayAGQQF0QaCIgIAAai8BACIBQQt2IgpBAnRBgIiAgABq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", ml = 4096, Uy = 2 * ml + 32, iA = 2 * ml - 1, zy = new Uint32Array([
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
  this.buf_ = new Uint8Array(Uy), this.input_ = a, this.buf_ptr_ = 0, this.val_ = 0, this.pos_ = 0, this.reset();
}
Ze.READ_SIZE = ml;
Ze.IBUF_MASK = iA;
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
      for (let r = 0; r < 32; r++)
        this.buf_[a + f + r] = 0;
    }
    if (a === 0) {
      for (let r = 0; r < 32; r++)
        this.buf_[(ml << 1) + r] = this.buf_[r];
      this.buf_ptr_ = ml;
    } else
      this.buf_ptr_ = 0;
    this.bit_end_pos_ += f << 3;
  }
};
Ze.prototype.fillBitWindow = function() {
  for (; this.bit_pos_ >= 8; )
    this.val_ >>>= 8, this.val_ |= this.buf_[this.pos_ & iA] << 24, this.pos_++, this.bit_pos_ = this.bit_pos_ - 8 >>> 0, this.bit_end_pos_ = this.bit_end_pos_ - 8 >>> 0;
};
Ze.prototype.readBits = function(a) {
  32 - this.bit_pos_ < a && this.fillBitWindow();
  const f = this.val_ >>> this.bit_pos_ & zy[a];
  return this.bit_pos_ += a, f;
};
const My = 8, Qr = 8, Dy = 255, Yr = 18, Oy = new Uint8Array([
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
]), Ny = new Uint16Array([
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
const T1 = 16, ra = 15;
function x1(a, f) {
  let r = 1 << f - 1;
  for (; a & r; )
    r >>= 1;
  return (a & r - 1) + r;
}
function C1(a, f, r, c, o) {
  do
    c -= r, a[f + c] = new Yt(o.bits, o.value);
  while (c > 0);
}
function Ry(a, f, r) {
  let c = 1 << f - r;
  for (; f < ra && (c -= a[f], !(c <= 0)); )
    ++f, c <<= 1;
  return f - r;
}
function uA(a, f, r, c, o) {
  const d = f, A = new Int32Array(ra + 1), g = new Int32Array(ra + 1), v = new Int32Array(o);
  for (let B = 0; B < o; B++)
    A[c[B]]++;
  g[1] = 0;
  for (let B = 1; B < ra; B++)
    g[B + 1] = g[B] + A[B];
  for (let B = 0; B < o; B++)
    c[B] !== 0 && (v[g[c[B]]++] = B);
  let y = r, p = 1 << y, m = p;
  if (g[ra] === 1) {
    for (let B = 0; B < m; ++B)
      a[f + B] = new Yt(0, v[0] & 65535);
    return m;
  }
  let w = 0, O = 0;
  for (let B = 1, z = 2; B <= r; ++B, z <<= 1)
    for (; A[B] > 0; --A[B]) {
      const Z = new Yt(B & 255, v[O++] & 65535);
      C1(a, f + w, z, p, Z), w = x1(w, B);
    }
  const D = m - 1;
  let R = -1;
  for (let B = r + 1, z = 2; B <= ra; ++B, z <<= 1)
    for (; A[B] > 0; --A[B]) {
      (w & D) !== R && (f += p, y = Ry(A, B, r), p = 1 << y, m += p, R = w & D, a[d + R] = new Yt(y + r & 255, f - d - R & 65535));
      const Z = new Yt(B - r & 255, v[O++] & 65535);
      C1(a, f + (w >> r), z, p, Z), w = x1(w, B);
    }
  return m;
}
function ku(a, f, r, c) {
  const o = new Uint8Array(a);
  c.readMoreInput();
  const d = c.readBits(2);
  if (d === 1) {
    let g = a - 1, v = 0;
    const y = new Int32Array(4), p = c.readBits(2) + 1;
    for (; g; )
      g >>= 1, v++;
    for (let m = 0; m < p; m++)
      y[m] = c.readBits(v) % a, o[y[m]] = 2;
    switch (o[y[0]] = 1, p) {
      case 1:
        break;
      case 3:
        if (y[0] === y[1] || y[0] === y[2] || y[1] === y[2])
          throw new Error("[ReadHuffmanCode] invalid symbols");
        break;
      case 2:
        if (y[0] === y[1])
          throw new Error("[ReadHuffmanCode] invalid symbols");
        o[y[1]] = 1;
        break;
      case 4:
        if (y[0] === y[1] || y[0] === y[2] || y[0] === y[3] || y[1] === y[2] || y[1] === y[3] || y[2] === y[3])
          throw new Error("[ReadHuffmanCode] invalid symbols");
        c.readBits(1) ? (o[y[2]] = 3, o[y[3]] = 3) : o[y[0]] = 2;
        break;
    }
  } else {
    const g = new Uint8Array(Yr);
    let v = 32, y = 0;
    const p = [
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
    for (let m = d; m < Yr && v > 0; m++) {
      const w = Oy[m];
      let O = 0;
      c.fillBitWindow(), O += c.val_ >>> c.bit_pos_ & 15, c.bit_pos_ += p[O].bits;
      const D = p[O].value;
      g[w] = D, D !== 0 && (v -= 32 >> D, y++);
    }
    if (!(y === 1 || v === 0))
      throw new Error("[ReadHuffmanCode] invalid num_codes or space");
    Qy(g, a, o, c);
  }
  const A = uA(f, r, Qr, o, a);
  if (!A) throw new Error("brotli BuildHuffmanTable failed");
  return A;
}
function oa(a, f, r) {
  r.fillBitWindow(), f += r.val_ >>> r.bit_pos_ & Dy;
  const c = a[f].bits - Qr;
  return c > 0 && (r.bit_pos_ += Qr, f += a[f].value, f += r.val_ >>> r.bit_pos_ & (1 << c) - 1), r.bit_pos_ += a[f].bits, a[f].value;
}
function Qy(a, f, r, c) {
  let o = 0, d = My, A = 0, g = 0, v = 32768;
  const y = [];
  for (let p = 0; p < 32; p++)
    y.push(new Yt(0, 0));
  for (uA(y, 0, 5, a, Yr); o < f && v > 0; ) {
    let p = 0;
    c.readMoreInput(), c.fillBitWindow(), p += c.val_ >>> c.bit_pos_ & 31, c.bit_pos_ += y[p].bits;
    const m = y[p].value & 255;
    if (m < T1)
      A = 0, r[o++] = m, m !== 0 && (d = m, v -= 32768 >> m);
    else {
      const w = m - 14;
      let O = 0;
      m === T1 && (O = d), g !== O && (A = 0, g = O);
      const D = A;
      A > 0 && (A -= 2, A <<= w), A += c.readBits(w) + 3;
      const R = A - D;
      if (o + R > f)
        throw new Error("[ReadHuffmanCodeLengths] symbol + repeat_delta > num_symbols");
      for (let B = 0; B < R; B++)
        r[o + B] = g;
      o += R, g !== 0 && (v -= R << 15 - g);
    }
  }
  if (v !== 0)
    throw new Error("[ReadHuffmanCodeLengths] space = " + v);
  for (; o < f; o++)
    r[o] = 0;
}
function Al(a, f) {
  this.alphabet_size = a, this.num_htrees = f, this.codes = new Array(f + f * Ny[a + 31 >>> 5]), this.htrees = new Uint32Array(f);
}
Al.prototype.decode = function(a) {
  let f = 0;
  for (let r = 0; r < this.num_htrees; r++)
    this.htrees[r] = f, f += ku(this.alphabet_size, this.codes, f, a);
};
function Kr([a, f]) {
  return { offset: a, nbits: f };
}
const Yy = [
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
].map(Kr), Ly = [
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
].map(Kr), Hy = [
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
].map(Kr), qy = [
  0,
  0,
  8,
  8,
  0,
  16,
  8,
  16,
  16
], Gy = [
  0,
  8,
  0,
  8,
  16,
  0,
  16,
  8,
  16
], Kn = 1080, fA = new Uint8Array([
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
]), cA = new Uint8Array([
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
function rA(a, f) {
  const r = new Uint16Array(31);
  for (let o = 0; o < 31; o++)
    r[o] = f += 1 << a[o - 1];
  const c = new Int32Array(r[30]);
  for (let o = 1; o < 30; o++)
    for (let d = r[o]; d < r[o + 1]; ++d)
      c[d] = d - r[o] << 5 | o;
  return { base: r, rev: c };
}
const { base: oA, rev: Iy } = rA(fA, 2);
oA[28] = 258;
Iy[258] = 28;
const { base: jy } = rA(cA, 0), sA = new Uint16Array(32768);
for (let a = 0; a < 32768; a++) {
  let f = (a & 43690) >> 1 | (a & 21845) << 1;
  f = (f & 52428) >> 2 | (f & 13107) << 2, f = (f & 61680) >> 4 | (f & 3855) << 4, sA[a] = ((f & 65280) >> 8 | (f & 255) << 8) >> 1;
}
function si(a, f, r) {
  const c = new Uint16Array(f);
  for (let A = 0; A < a.length; A++)
    a[A] && ++c[a[A] - 1];
  const o = new Uint16Array(f);
  for (let A = 1; A < f; A++)
    o[A] = o[A - 1] + c[A - 1] << 1;
  let d;
  {
    d = new Uint16Array(1 << f);
    const A = 15 - f;
    for (let g = 0; g < a.length; g++)
      if (a[g]) {
        const v = g << 4 | a[g], y = f - a[g];
        let p = o[a[g] - 1]++ << y;
        for (const m = p | (1 << y) - 1; p <= m; p++)
          d[sA[p] >> A] = v;
      }
  }
  return d;
}
const mi = new Uint8Array(288);
for (let a = 0; a < 144; a++) mi[a] = 8;
for (let a = 144; a < 256; a++) mi[a] = 9;
for (let a = 256; a < 280; a++) mi[a] = 7;
for (let a = 280; a < 288; a++) mi[a] = 8;
const dA = new Uint8Array(32);
for (let a = 0; a < 32; a++) dA[a] = 5;
const Zy = /* @__PURE__ */ si(mi, 9), Vy = /* @__PURE__ */ si(dA, 5);
function Br(a, f, r, c, o, d, A) {
  const g = r * 2, v = r, y = oa(f, r * Kn, A);
  let p;
  y === 0 ? p = o[g + (d[v] & 1)] : y === 1 ? p = o[g + (d[v] - 1 & 1)] + 1 : p = y - 2, p >= a && (p -= a), c[r] = p, o[g + (d[v] & 1)] = p, d[v]++;
}
function Xy(a) {
  const f = {
    meta_block_length: 0,
    input_end: 0,
    is_uncompressed: 0,
    is_metadata: !1
  };
  if (f.input_end = a.readBits(1), f.input_end && a.readBits(1))
    return f;
  const r = a.readBits(2) + 4;
  if (r === 7) {
    if (f.is_metadata = !0, a.readBits(1) !== 0)
      throw new Error("Invalid reserved bit");
    const c = a.readBits(2);
    if (c === 0)
      return f;
    for (let o = 0; o < c; o++) {
      const d = a.readBits(8);
      if (o + 1 === c && c > 1 && d === 0)
        throw new Error("Invalid size byte");
      f.meta_block_length |= d << o * 8;
    }
  } else
    for (let c = 0; c < r; c++) {
      const o = a.readBits(4);
      if (c + 1 === r && r > 4 && o === 0)
        throw new Error("Invalid size nibble");
      f.meta_block_length |= o << c * 4;
    }
  return f.meta_block_length++, !f.input_end && !f.is_metadata && (f.is_uncompressed = a.readBits(1)), f;
}
function Ky(a, f, r, c, o, d) {
  const A = o + 1;
  let g = r & o, v = d.pos_ & Ze.IBUF_MASK;
  if (f < 8 || d.bit_pos_ + (f << 3) < d.bit_end_pos_) {
    for (; f-- > 0; )
      d.readMoreInput(), c[g++] = d.readBits(8), g === A && (a.write(c, A), g = 0);
    return;
  }
  if (d.bit_end_pos_ < 32)
    throw new Error("copyUncompressedBlockToOutput: br.bit_end_pos_ < 32");
  for (; d.bit_pos_ < 32; )
    c[g] = d.val_ >>> d.bit_pos_, d.bit_pos_ += 8, g++, f--;
  let y = d.bit_end_pos_ - d.bit_pos_ >> 3;
  if (v + y > Ze.IBUF_MASK) {
    const p = Ze.IBUF_MASK + 1 - v;
    for (let m = 0; m < p; m++)
      c[g + m] = d.buf_[v + m];
    y -= p, g += p, f -= p, v = 0;
  }
  for (let p = 0; p < y; p++)
    c[g + p] = d.buf_[v + p];
  if (g += y, f -= y, g >= A) {
    a.write(c, A), g -= A;
    for (let p = 0; p < g; p++)
      c[p] = c[A + p];
  }
  for (; g + f >= A; ) {
    if (y = A - g, d.input_.read(c, g, y) < y)
      throw new Error("copyUncompressedBlockToOutput: not enough bytes");
    a.write(c, A), f -= y, g = 0;
  }
  if (d.input_.read(c, g, f) < f)
    throw new Error("copyUncompressedBlockToOutput: not enough bytes");
  d.reset();
}
function AA(a) {
  if (a.readBits(1)) {
    const f = a.readBits(3);
    return f === 0 ? 1 : a.readBits(f) + (1 << f);
  }
  return 0;
}
function Jy(a) {
  if (a.readBits(1) === 0) return 16;
  let f = a.readBits(3);
  return f > 0 ? 17 + f : (f = a.readBits(3), f > 0 ? 8 + f : 17);
}
function _y(a) {
  const f = a.bit_pos_ + 7 & -8;
  return !a.readBits(f - a.bit_pos_);
}
function qu(a, f, r) {
  const c = oa(a, f, r), { offset: o, nbits: d } = Yy[c];
  return o + r.readBits(d);
}
const U1 = new Uint8Array([
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
function z1(a, f) {
  let r = 0;
  f.readMoreInput();
  const c = AA(f) + 1, o = new Uint8Array(a);
  if (c <= 1)
    return [c, o];
  f.readBits(1) && (r = f.readBits(4) + 1);
  const A = [];
  for (let g = 0; g < Kn; g++)
    A[g] = new Yt(0, 0);
  ku(c + r, A, 0, f);
  for (let g = 0; g < a; ) {
    f.readMoreInput();
    const v = oa(A, 0, f);
    if (v === 0)
      o[g] = 0, g++;
    else if (v <= r) {
      let y = 1 + (1 << v) + f.readBits(v);
      for (; --y; ) {
        if (g >= a)
          throw new Error("[DecodeContextMap] i >= context_map_size");
        o[g] = 0, g++;
      }
    } else
      o[g] = v - r, g++;
  }
  return f.readBits(1) && ky(o, a), [c, o];
}
function Fy(a, f) {
  const r = a[f];
  for (let c = f; c; c--) a[c] = a[c - 1];
  a[0] = r;
}
function ky(a, f) {
  const r = new Uint8Array(256);
  for (let c = 0; c < 256; c++)
    r[c] = c;
  for (let c = 0; c < f; c++) {
    const o = a[c];
    a[c] = r[o], o && Fy(r, o);
  }
}
function hA(a) {
  this.buffer = a, this.pos = 0;
}
hA.prototype.read = function(a, f, r) {
  this.pos + r > this.buffer.length && (r = this.buffer.length - this.pos);
  for (let c = 0; c < r; c++)
    a[f + c] = this.buffer[this.pos + c];
  return this.pos += r, r;
};
function gA(a) {
  this.buffer = a, this.pos = 0;
}
gA.prototype.write = function(a, f) {
  if (this.pos + f > this.buffer.length) throw new Error("brotli output buffer is not large enough");
  return this.buffer.set(a.subarray(0, f), this.pos), this.pos += f, f;
};
const Wy = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
function je(a, f, r) {
  const c = f / 8 | 0;
  return (a[c] | a[c + 1] << 8) >> (f & 7) & r;
}
function Tr(a, f) {
  const r = f / 8 | 0;
  return (a[r] | a[r + 1] << 8 | a[r + 2] << 16) >> (f & 7);
}
function Py(a) {
  return (a + 7) / 8 | 0;
}
function $y(a, f) {
  if (a[f++] !== 31 || a[f++] !== 139 || a[f++] !== 8) return 0;
  const r = a[f++];
  f += 6, r & 4 && (f += (a[f + 10] | a[f + 11] << 8) + 2);
  for (let c = (r >> 3 & 1) + (r >> 4 & 1); c > 0; c -= +!a[f++]) ;
  return f + (r & 2);
}
function Jr(a, f, r = 0, c = 0) {
  let o = f ?? new Uint8Array(1024);
  if (!(a.length - r)) return o;
  const d = $y(a, r);
  if (d === a.length - 8) return o;
  if (d > a.length - 8) throw new Error("unexpected EOF");
  let A = d * 8, g = 0, v = 0, y = 0, p, m;
  const w = a.length * 8;
  function O(D) {
    if (!f && D > o.length) {
      const R = o;
      o = new Uint8Array(Math.max(R.length * 2, D)), o.set(R);
    }
  }
  do {
    if (!p) {
      g = je(a, A, 1);
      const z = je(a, A + 1, 3);
      if (A += 3, z)
        if (z === 1)
          p = Zy, m = Vy, v = 9, y = 5;
        else if (z === 2) {
          const Z = je(a, A, 31) + 257, G = je(a, A + 10, 15) + 4, K = Z + je(a, A + 5, 31) + 1;
          A += 14;
          const _ = new Uint8Array(K), j = new Uint8Array(19);
          for (let ut = 0; ut < G; ++ut)
            j[Wy[ut]] = je(a, A + ut * 3, 7);
          A += G * 3;
          const I = Math.max(...j), $ = (1 << I) - 1, dt = si(j, I);
          for (let ut = 0; ut < K; ) {
            const Dt = dt[je(a, A, $)];
            A += Dt & 15;
            const it = Dt >> 4;
            if (it < 16)
              _[ut++] = it;
            else {
              let nt = 0, M = 0;
              for (it === 16 ? (M = 3 + je(a, A, 3), A += 2, nt = _[ut - 1]) : it === 17 ? (M = 3 + je(a, A, 7), A += 3) : it === 18 && (M = 11 + je(a, A, 127), A += 7); M--; ) _[ut++] = nt;
            }
          }
          const bt = _.subarray(0, Z), wt = _.subarray(Z);
          v = Math.max(...bt), y = Math.max(...wt), p = si(bt, v), m = si(wt, y);
        } else throw new Error("invalid block type");
      else {
        const Z = Py(A) + 4, G = a[Z - 4] | a[Z - 3] << 8, K = Z + G;
        if (K > a.length) throw new Error("unexpected EOF");
        O(c + G), o.set(a.subarray(Z, K), c), c += G, A = K * 8;
        continue;
      }
      if (A > w) throw new Error("unexpected EOF");
    }
    O(c + 131072);
    const D = (1 << v) - 1, R = (1 << y) - 1;
    let B = A;
    for (; ; B = A) {
      const z = p[Tr(a, A) & D], Z = z >> 4;
      if (A += z & 15, A > w) throw new Error("unexpected EOF");
      if (!z) throw new Error("invalid length/literal");
      if (Z < 256) o[c++] = Z;
      else if (Z === 256) {
        B = A, p = void 0;
        break;
      } else {
        let G = Z - 254;
        if (Z > 264) {
          const $ = Z - 257, dt = fA[$];
          G = je(a, A, (1 << dt) - 1) + oA[$], A += dt;
        }
        if (!m) throw new Error("invalid distance map");
        const K = m[Tr(a, A) & R], _ = K >> 4;
        if (!K) throw new Error("invalid distance");
        A += K & 15;
        let j = jy[_];
        if (_ > 3) {
          const $ = cA[_];
          j += Tr(a, A) & (1 << $) - 1, A += $;
        }
        if (A > w) throw new Error("unexpected EOF");
        const I = c + G;
        if (c < j) throw new Error("unexpected dictionary case");
        for (O(I); c < I; c++) o[c] = o[c - j];
      }
    }
    A = B, p && (g = 1);
  } while (!g);
  if (c < o.length) {
    const D = Math.ceil(A / 8) + 8;
    Jr(a, o, D, c);
  }
  return f ? o : o.subarray(0, c);
}
const tm = `
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
function em() {
  if (!Iu) {
    Iu = new Uint8Array(122784);
    const a = atob(tm), f = new Uint8Array(a.length);
    for (let r = 0; r < a.length; r++)
      f[r] = a.charCodeAt(r);
    Jr(f, Iu);
  }
  return Iu;
}
const W = 0, M1 = 1, nm = 2, lm = 3, am = 4, im = 5, um = 6, fm = 7, cm = 8, yA = 9, jt = 10, _t = 11, Lr = 12, rm = 13, om = 14, sm = 15, dm = 16, Am = 17, hm = 18, gm = 20;
function Y(a, f, r) {
  this.prefix = new Uint8Array(a.length), this.transform = f, this.suffix = new Uint8Array(r.length);
  for (let c = 0; c < a.length; c++) this.prefix[c] = a.charCodeAt(c);
  for (let c = 0; c < r.length; c++) this.suffix[c] = r.charCodeAt(c);
}
const Xu = [
  new Y("", W, ""),
  new Y("", W, " "),
  new Y(" ", W, " "),
  new Y("", Lr, ""),
  new Y("", jt, " "),
  new Y("", W, " the "),
  new Y(" ", W, ""),
  new Y("s ", W, " "),
  new Y("", W, " of "),
  new Y("", jt, ""),
  new Y("", W, " and "),
  new Y("", rm, ""),
  new Y("", M1, ""),
  new Y(", ", W, " "),
  new Y("", W, ", "),
  new Y(" ", jt, " "),
  new Y("", W, " in "),
  new Y("", W, " to "),
  new Y("e ", W, " "),
  new Y("", W, '"'),
  new Y("", W, "."),
  new Y("", W, '">'),
  new Y("", W, `
`),
  new Y("", lm, ""),
  new Y("", W, "]"),
  new Y("", W, " for "),
  new Y("", om, ""),
  new Y("", nm, ""),
  new Y("", W, " a "),
  new Y("", W, " that "),
  new Y(" ", jt, ""),
  new Y("", W, ". "),
  new Y(".", W, ""),
  new Y(" ", W, ", "),
  new Y("", sm, ""),
  new Y("", W, " with "),
  new Y("", W, "'"),
  new Y("", W, " from "),
  new Y("", W, " by "),
  new Y("", dm, ""),
  new Y("", Am, ""),
  new Y(" the ", W, ""),
  new Y("", am, ""),
  new Y("", W, ". The "),
  new Y("", _t, ""),
  new Y("", W, " on "),
  new Y("", W, " as "),
  new Y("", W, " is "),
  new Y("", fm, ""),
  new Y("", M1, "ing "),
  new Y("", W, `
	`),
  new Y("", W, ":"),
  new Y(" ", W, ". "),
  new Y("", W, "ed "),
  new Y("", gm, ""),
  new Y("", hm, ""),
  new Y("", um, ""),
  new Y("", W, "("),
  new Y("", jt, ", "),
  new Y("", cm, ""),
  new Y("", W, " at "),
  new Y("", W, "ly "),
  new Y(" the ", W, " of "),
  new Y("", im, ""),
  new Y("", yA, ""),
  new Y(" ", jt, ", "),
  new Y("", jt, '"'),
  new Y(".", W, "("),
  new Y("", _t, " "),
  new Y("", jt, '">'),
  new Y("", W, '="'),
  new Y(" ", W, "."),
  new Y(".com/", W, ""),
  new Y(" the ", W, " of the "),
  new Y("", jt, "'"),
  new Y("", W, ". This "),
  new Y("", W, ","),
  new Y(".", W, " "),
  new Y("", jt, "("),
  new Y("", jt, "."),
  new Y("", W, " not "),
  new Y(" ", W, '="'),
  new Y("", W, "er "),
  new Y(" ", _t, " "),
  new Y("", W, "al "),
  new Y(" ", _t, ""),
  new Y("", W, "='"),
  new Y("", _t, '"'),
  new Y("", jt, ". "),
  new Y(" ", W, "("),
  new Y("", W, "ful "),
  new Y(" ", jt, ". "),
  new Y("", W, "ive "),
  new Y("", W, "less "),
  new Y("", _t, "'"),
  new Y("", W, "est "),
  new Y(" ", jt, "."),
  new Y("", _t, '">'),
  new Y(" ", W, "='"),
  new Y("", jt, ","),
  new Y("", W, "ize "),
  new Y("", _t, "."),
  new Y("Â ", W, ""),
  new Y(" ", W, ","),
  new Y("", jt, '="'),
  new Y("", _t, '="'),
  new Y("", W, "ous "),
  new Y("", _t, ", "),
  new Y("", jt, "='"),
  new Y(" ", jt, ","),
  new Y(" ", _t, '="'),
  new Y(" ", _t, ", "),
  new Y("", _t, ","),
  new Y("", _t, "("),
  new Y("", _t, ". "),
  new Y(" ", _t, "."),
  new Y("", _t, "='"),
  new Y(" ", _t, ". "),
  new Y(" ", jt, '="'),
  new Y(" ", _t, "='"),
  new Y(" ", jt, "='")
], ym = Xu.length;
function D1(a, f) {
  return a[f] < 192 ? (a[f] >= 97 && a[f] <= 122 && (a[f] ^= 32), 1) : a[f] < 224 ? (a[f + 1] ^= 32, 2) : (a[f + 2] ^= 5, 3);
}
function mm(a, f, r, c, o) {
  const d = em(), { prefix: A } = Xu[o], { suffix: g } = Xu[o], v = Xu[o].transform;
  let y = v < Lr ? 0 : v - (Lr - 1);
  const p = f;
  y > c && (y = c);
  let m = 0;
  for (; m < A.length; )
    a[f++] = A[m++];
  r += y, c -= y, v <= yA && (c -= v);
  for (let D = 0; D < c; D++)
    a[f++] = d[r + D];
  let w = f - c;
  if (v === jt)
    D1(a, w);
  else if (v === _t)
    for (; c > 0; ) {
      const D = D1(a, w);
      w += D, c -= D;
    }
  let O = 0;
  for (; O < g.length; )
    a[f++] = g[O++];
  return f - p;
}
const vm = 256, pm = 704, bm = 26, O1 = 6, N1 = 2, Hr = 16, wm = new Uint8Array([
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
]), Em = new Int8Array([
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
]), Sm = new Uint32Array([
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
]), Bm = new Uint8Array([
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
]), Tm = 4, R1 = 24;
function xm(a, f) {
  const r = new Uint8Array(f), c = new hA(a), o = new gA(r);
  return Cm(c, o), r;
}
function Cm(a, f) {
  let r = 0, c = 0, o = 0, d = 0;
  const A = [16, 15, 11, 4];
  let g = 0, v = 0, y = 0;
  const p = [new Al(0, 0), new Al(0, 0), new Al(0, 0)], m = 128 + Ze.READ_SIZE, w = new Ze(a);
  o = Jy(w);
  const O = (1 << o) - 16, D = 1 << o, R = D - 1, B = new Uint8Array(D + m + R1), z = D, Z = [], G = [];
  for (let K = 0; K < 3 * Kn; K++)
    Z[K] = new Yt(0, 0), G[K] = new Yt(0, 0);
  for (; !c; ) {
    let K = 0;
    const _ = [1 << 28, 1 << 28, 1 << 28], j = [0], I = [1, 1, 1], $ = [0, 1, 0, 1, 0, 1], dt = [0];
    let bt = 0;
    for (let J = 0; J < 3; J++)
      p[J].codes = [], p[J].htrees = new Uint32Array();
    w.readMoreInput();
    const wt = Xy(w);
    if (K = wt.meta_block_length, r + K > f.buffer.length) {
      const J = new Uint8Array(r + K);
      J.set(f.buffer), f.buffer = J;
    }
    if (c = wt.input_end, wt.is_metadata) {
      for (_y(w); K > 0; --K)
        w.readMoreInput(), w.readBits(8);
      continue;
    }
    if (K === 0) continue;
    if (wt.is_uncompressed) {
      w.bit_pos_ = w.bit_pos_ + 7 & -8, Ky(f, K, r, B, R, w), r += K;
      continue;
    }
    for (let J = 0; J < 3; J++)
      I[J] = AA(w) + 1, I[J] >= 2 && (ku(I[J] + 2, Z, J * Kn, w), ku(bm, G, J * Kn, w), _[J] = qu(G, J * Kn, w), dt[J] = 1);
    w.readMoreInput();
    const ut = w.readBits(2), Dt = Hr + (w.readBits(4) << ut), it = (1 << ut) - 1, nt = Dt + (48 << ut), M = new Uint8Array(I[0]);
    for (let J = 0; J < I[0]; J++)
      w.readMoreInput(), M[J] = w.readBits(2) << 1;
    const [X, tt] = z1(I[0] << O1, w), [mt, pt] = z1(I[2] << N1, w);
    p[0] = new Al(vm, X), p[1] = new Al(pm, I[1]), p[2] = new Al(nt, mt);
    for (let J = 0; J < 3; ++J)
      p[J].decode(w);
    let S = 0, H = 0, V = M[j[0]], F = Gu[V], at = Gu[V + 1], ct = p[1].htrees[0];
    for (; K > 0; ) {
      let J;
      w.readMoreInput(), _[1] === 0 && (Br(
        I[1],
        Z,
        1,
        j,
        $,
        dt,
        w
      ), _[1] = qu(G, Kn, w), ct = p[1].htrees[j[1]]), _[1]--;
      const Nt = oa(p[1].codes, ct, w);
      let Bt = Nt >> 6;
      Bt >= 2 ? (Bt -= 2, J = -1) : J = 0;
      const Ce = qy[Bt] + (Nt >> 3 & 7), ye = Ly[Ce], Ue = ye.offset + w.readBits(ye.nbits), wl = Gy[Bt] + (Nt & 7), Ve = Hy[wl], ce = Ve.offset + w.readBits(Ve.nbits);
      v = B[r - 1 & R], y = B[r - 2 & R];
      for (let me = 0; me < Ue; me++) {
        w.readMoreInput(), _[0] === 0 && (Br(
          I[0],
          Z,
          0,
          j,
          $,
          dt,
          w
        ), _[0] = qu(G, 0, w), bt = j[0] << O1, S = bt, V = M[j[0]], F = Gu[V], at = Gu[V + 1]);
        const Xe = U1[F + v] | U1[at + y], Ke = tt[S + Xe];
        _[0]--, y = v, v = oa(p[0].codes, p[0].htrees[Ke], w), B[r & R] = v, (r & R) === R && f.write(B, D), r++;
      }
      if (K -= Ue, K <= 0) break;
      if (J < 0) {
        w.readMoreInput(), _[2] === 0 && (Br(
          I[2],
          Z,
          2,
          j,
          $,
          dt,
          w
        ), _[2] = qu(G, 2 * Kn, w), H = j[2] << N1), _[2]--;
        const me = (ce > 4 ? 3 : ce - 2) & 255, Xe = pt[H + me];
        if (J = oa(p[2].codes, p[2].htrees[Xe], w), J >= Dt) {
          J -= Dt;
          const Ke = J & it;
          J >>= ut;
          const vn = (J >> 1) + 1, sa = (2 + (J & 1) << vn) - 4;
          J = Dt + (sa + w.readBits(vn) << ut) + Ke;
        }
      }
      const Pe = Um(J, A, g);
      if (Pe < 0) throw new Error("[BrotliDecompress] invalid distance");
      r < O && d !== O ? d = r : d = O;
      let El = r & R;
      if (Pe > d)
        if (ce >= Tm && ce <= R1) {
          let me = Sm[ce];
          const Xe = Pe - d - 1, Ke = Bm[ce], vn = (1 << Ke) - 1, sa = Xe & vn, vi = Xe >> Ke;
          if (me += sa * ce, vi < ym) {
            const $t = mm(B, El, me, ce, vi);
            if (El += $t, r += $t, K -= $t, El >= z) {
              f.write(B, D);
              for (let Sl = 0; Sl < El - z; Sl++)
                B[Sl] = B[z + Sl];
            }
          } else
            throw new Error("Invalid backward reference");
        } else
          throw new Error("Invalid backward reference");
      else {
        if (J > 0 && (A[g & 3] = Pe, g++), ce > K)
          throw new Error("Invalid backward reference");
        for (let me = 0; me < ce; me++)
          B[r & R] = B[r - Pe & R], (r & R) === R && f.write(B, D), r++, K--;
      }
      v = B[r - 1 & R], y = B[r - 2 & R];
    }
    r &= 1073741823;
  }
  f.write(B, r & R);
}
function Um(a, f, r) {
  return a < Hr ? (r += wm[a], r &= 3, f[r] + Em[a]) : a - Hr + 1;
}
function zm(a, f) {
  const r = new Uint8Array(f);
  try {
    let c = 0, o = 0;
    for (; c < a.length - 8; ) {
      const d = a[c++] << 24 | a[c++] << 16 | a[c++] << 8 | a[c++], A = a[c++] << 24 | a[c++] << 16 | a[c++] << 8 | a[c++];
      if (a.length - c < A) throw new Error("lz4 not hadoop");
      if (r.length < d) throw new Error("lz4 not hadoop");
      if (qr(a.subarray(c, c + A), r, o) !== d) throw new Error("lz4 not hadoop");
      if (c += A, o += d, c === a.length) return r;
    }
    if (c < a.length) throw new Error("lz4 not hadoop");
  } catch (c) {
    if (c instanceof Error && c.message !== "lz4 not hadoop") throw c;
    qr(a, r, 0);
  }
  return r;
}
function Mm(a, f) {
  const r = new Uint8Array(f);
  return qr(a, r, 0), r;
}
function qr(a, f, r) {
  let c = r;
  for (let o = 0; o < a.length; ) {
    const d = a[o++];
    let A = d >> 4;
    if (A) {
      let w = A + 240;
      for (; w === 255; ) A += w = a[o++];
      if (f.set(a.subarray(o, o + A), c), c += A, o += A, o >= a.length) return c - r;
    }
    const g = a[o++] | a[o++] << 8;
    if (!g || g > c)
      throw new Error(`lz4 offset out of range ${g}`);
    let v = (d & 15) + 4, y = v + 240;
    for (; y === 255; ) v += y = a[o++];
    let p = c - g;
    const m = c + v;
    for (; c < m; ) f[c++] = f[p++];
  }
  return c - r;
}
const Dm = {
  SNAPPY: Ty(),
  // loads wasm
  GZIP: (a, f) => Jr(a, new Uint8Array(f)),
  BROTLI: xm,
  ZSTD: (a) => By(a),
  LZ4: zm,
  LZ4_RAW: Mm
}, Om = '/*! tailwindcss v4.3.0 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-teal-50:oklch(98.4% .014 180.72);--color-teal-400:oklch(77.7% .152 181.912);--color-teal-700:oklch(51.1% .096 186.391);--color-neutral-50:oklch(98.5% 0 0);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-300:oklch(87% 0 0);--color-neutral-400:oklch(70.8% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-800:oklch(26.9% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-white:#fff;--spacing:.25rem;--font-weight-medium:500;--font-weight-semibold:600;--tracking-tight:-.025em;--leading-snug:1.375;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--animate-pulse:pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.static{position:static}.sticky{position:sticky}.top-0{top:calc(var(--spacing) * 0)}.z-10{z-index:10}.mt-px{margin-top:1px}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.block{display:block}.flex{display:flex}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.h-\\[3px\\]{height:3px}.h-\\[7px\\]{height:7px}.h-\\[11px\\]{height:11px}.max-h-\\[72vh\\]{max-height:72vh}.w-\\[7px\\]{width:7px}.w-full{width:100%}.max-w-12{max-width:calc(var(--spacing) * 12)}.min-w-0{min-width:calc(var(--spacing) * 0)}.flex-1{flex:1}.shrink-0{flex-shrink:0}.border-separate{border-collapse:separate}.border-spacing-0{--tw-border-spacing-x:calc(var(--spacing) * 0);--tw-border-spacing-y:calc(var(--spacing) * 0);border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y)}.animate-pulse{animation:var(--animate-pulse)}.flex-col{flex-direction:column}.items-baseline{align-items:baseline}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-4{gap:calc(var(--spacing) * 4)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l-\\[3px\\]{border-left-style:var(--tw-border-style);border-left-width:3px}.border-neutral-100{border-color:var(--color-neutral-100)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-neutral-300{border-color:var(--color-neutral-300)}.border-red-700{border-color:var(--color-red-700)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-200{background-color:var(--color-neutral-200)}.bg-red-50{background-color:var(--color-red-50)}.bg-teal-50{background-color:var(--color-teal-50)}.bg-white{background-color:var(--color-white)}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-teal-700{--tw-gradient-from:var(--color-teal-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-teal-400{--tw-gradient-to:var(--color-teal-400);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-\\[18px\\]{padding-inline:18px}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}.py-7{padding-block:calc(var(--spacing) * 7)}.py-\\[9px\\]{padding-block:9px}.text-left{text-align:left}.text-right{text-align:right}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.text-\\[10\\.5px\\]{font-size:10.5px}.text-\\[11\\.5px\\]{font-size:11.5px}.text-\\[12\\.5px\\]{font-size:12.5px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[15px\\]{font-size:15px}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.06em\\]{--tw-tracking:.06em;letter-spacing:.06em}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.text-neutral-400{color:var(--color-neutral-400)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-800{color:var(--color-neutral-800)}.text-neutral-900{color:var(--color-neutral-900)}.text-red-800{color:var(--color-red-800)}.text-red-900{color:var(--color-red-900)}.text-teal-700{color:var(--color-teal-700)}.uppercase{text-transform:uppercase}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.shadow-\\[0_1px_2px_rgba\\(20\\,20\\,30\\,0\\.04\\)\\,0_10px_30px_-15px_rgba\\(20\\,20\\,30\\,0\\.15\\)\\]{--tw-shadow:0 1px 2px var(--tw-shadow-color,#14141e0a), 0 10px 30px -15px var(--tw-shadow-color,#14141e26);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.select-none{-webkit-user-select:none;user-select:none}.even\\:bg-neutral-50\\/70:nth-child(2n){background-color:#fafafab3}@supports (color:color-mix(in lab,red,red)){.even\\:bg-neutral-50\\/70:nth-child(2n){background-color:color-mix(in oklab,var(--color-neutral-50) 70%,transparent)}}@media(hover:hover){.hover\\:bg-teal-50:hover{background-color:var(--color-teal-50)}}.last\\:\\[\\&\\>td\\]\\:border-b-0:last-child>td{border-bottom-style:var(--tw-border-style);border-bottom-width:0}}@property --tw-border-spacing-x{syntax:"<length>";inherits:false;initial-value:0}@property --tw-border-spacing-y{syntax:"<length>";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@keyframes pulse{50%{opacity:.5}}', Q1 = 200, Y1 = 16, Nm = 24, L1 = "pqv-tw";
function Rm() {
  hl.useEffect(() => {
    if (document.getElementById(L1)) return;
    const a = document.createElement("style");
    a.id = L1, a.textContent = Om, document.head.appendChild(a);
  }, []);
}
const Qm = /(price|total|amount|cost|revenue|sales|value|paid|balance|fee)/i, Gr = new Intl.NumberFormat("en-US"), Ym = new Intl.NumberFormat("en-US", { maximumFractionDigits: 4 }), Lm = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }), Hm = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" });
function qm(a, f) {
  for (const r of a) {
    const c = r[f];
    if (c != null) return c;
  }
}
function Gm(a, f) {
  return f.map((r) => {
    const c = qm(a, r);
    let o = "text";
    if (typeof c == "boolean") o = "boolean";
    else if (c instanceof Date) o = "date";
    else if (typeof c == "bigint" || typeof c == "number")
      o = Qm.test(r) ? "currency" : "number";
    else if (typeof c == "string") {
      const d = /* @__PURE__ */ new Set();
      let A = !1, g = 0;
      for (const v of a) {
        const y = v[r];
        if (typeof y == "string" && (g = Math.max(g, y.length), d.size <= Y1 && d.add(y), d.size > Y1 || g > Nm)) {
          A = !0;
          break;
        }
      }
      o = A ? "text" : "category";
    }
    return { key: r, kind: o, numeric: o === "number" || o === "currency" };
  });
}
function Im(a) {
  let f = 0;
  for (let r = 0; r < a.length; r++) f = (f * 31 + a.charCodeAt(r)) % 360;
  return { background: `hsl(${f} 62% 95%)`, color: `hsl(${f} 42% 32%)`, boxShadow: `inset 0 0 0 1px hsl(${f} 50% 88%)` };
}
function jm(a, f) {
  if (a == null) return /* @__PURE__ */ rt.jsx("span", { className: "text-neutral-400", children: "—" });
  switch (f) {
    case "boolean": {
      const r = a === !0;
      return /* @__PURE__ */ rt.jsxs("span", { className: "inline-flex items-center gap-1.5 text-[12px]", children: [
        /* @__PURE__ */ rt.jsx("span", { className: "inline-block h-[7px] w-[7px] shrink-0 rounded-full", style: { background: r ? "#16a34a" : "#c4c4cc" } }),
        /* @__PURE__ */ rt.jsx("span", { style: { color: r ? "#15803d" : "#8a8a93" }, children: r ? "Yes" : "No" })
      ] });
    }
    case "date":
      return a instanceof Date ? Hm.format(a) : String(a);
    case "currency": {
      const r = typeof a == "bigint" ? Number(a) : a;
      return Lm.format(r);
    }
    case "number": {
      const r = typeof a == "bigint" ? Number(a) : a;
      return Number.isInteger(r) ? Gr.format(r) : Ym.format(r);
    }
    case "category":
      return /* @__PURE__ */ rt.jsx("span", { className: "inline-block rounded-full px-2.5 py-0.5 text-[11.5px] font-medium", style: Im(String(a)), children: String(a) });
    default:
      return typeof a == "object" ? JSON.stringify(a) : String(a);
  }
}
function Ku(a) {
  const f = a.split(/[?#]/)[0].replace(/\/+$/, "");
  return decodeURIComponent(f.split("/").pop() || a);
}
const mA = "pqv-root font-sans text-[13px] leading-snug text-neutral-900 antialiased", vA = "rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-[0_1px_2px_rgba(20,20,30,0.04),0_10px_30px_-15px_rgba(20,20,30,0.15)]";
function pA({ name: a, path: f, children: r }) {
  return /* @__PURE__ */ rt.jsxs("div", { className: "flex items-center justify-between gap-4 border-b border-neutral-200 px-[18px] py-3.5", children: [
    /* @__PURE__ */ rt.jsxs("div", { className: "flex min-w-0 flex-col", children: [
      /* @__PURE__ */ rt.jsx("span", { className: "truncate text-[15px] font-semibold tracking-tight text-neutral-900", children: a }),
      f && /* @__PURE__ */ rt.jsx("span", { className: "mt-px truncate text-[11.5px] text-neutral-400", children: f })
    ] }),
    r && /* @__PURE__ */ rt.jsx("div", { className: "flex shrink-0 gap-2", children: r })
  ] });
}
function Ir({ name: a, path: f, children: r }) {
  return /* @__PURE__ */ rt.jsx("div", { className: mA, children: /* @__PURE__ */ rt.jsxs("div", { className: vA, children: [
    /* @__PURE__ */ rt.jsx("div", { className: "h-[3px] bg-gradient-to-r from-teal-700 to-teal-400" }),
    a && /* @__PURE__ */ rt.jsx(pA, { name: a, path: f }),
    r
  ] }) });
}
function Zm({ filePath: a }) {
  return /* @__PURE__ */ rt.jsx(Ir, { name: Ku(a), path: a, children: /* @__PURE__ */ rt.jsx("div", { children: Array.from({ length: 8 }).map((f, r) => /* @__PURE__ */ rt.jsx("div", { className: "flex gap-4 border-b border-neutral-100 px-4 py-[9px]", children: Array.from({ length: 5 }).map((c, o) => /* @__PURE__ */ rt.jsx(
    "div",
    {
      className: `h-[11px] flex-1 animate-pulse rounded-md bg-neutral-200 ${o === 0 ? "max-w-12" : ""}`,
      style: { opacity: 1 - r * 0.09 }
    },
    o
  )) }, r)) }) });
}
function Vm({ filePath: a, fetchFile: f }) {
  Rm();
  const [r, c] = hl.useState(null), [o, d] = hl.useState(null);
  hl.useEffect(() => {
    let y = !1;
    if (c(null), d(null), !a) {
      d("Set a parquet file path in the web part properties.");
      return;
    }
    return (async () => {
      const p = Tg(
        await Bg({ url: a, fetch: f })
      );
      return cy({ file: p, compressors: Dm, rowEnd: Q1 });
    })().then((p) => {
      y || c(p);
    }).catch((p) => {
      y || d(p instanceof Error ? p.message : String(p));
    }), () => {
      y = !0;
    };
  }, [a, f]);
  const A = hl.useMemo(() => r && r.length ? Object.keys(r[0]) : [], [r]), g = hl.useMemo(() => r && r.length ? Gm(r, A) : [], [r, A]);
  if (o)
    return /* @__PURE__ */ rt.jsx(Ir, { name: a ? Ku(a) : "Parquet viewer", path: a || void 0, children: /* @__PURE__ */ rt.jsx("div", { className: "px-[18px] py-7", children: /* @__PURE__ */ rt.jsxs("div", { className: "whitespace-pre-wrap rounded-lg border-l-[3px] border-red-700 bg-red-50 px-[18px] py-3.5 text-[13px] text-red-800", children: [
      /* @__PURE__ */ rt.jsx("b", { className: "mb-1 block font-semibold text-red-900", children: "Couldn’t load this file" }),
      o
    ] }) }) });
  if (!r) return /* @__PURE__ */ rt.jsx(Zm, { filePath: a });
  if (r.length === 0)
    return /* @__PURE__ */ rt.jsx(Ir, { name: Ku(a), path: a, children: /* @__PURE__ */ rt.jsx("div", { className: "px-[18px] py-7 text-[13px] text-neutral-500", children: "This file has no rows." }) });
  const v = r.length === Q1;
  return /* @__PURE__ */ rt.jsx("div", { className: mA, children: /* @__PURE__ */ rt.jsxs("div", { className: vA, children: [
    /* @__PURE__ */ rt.jsx("div", { className: "h-[3px] bg-gradient-to-r from-teal-700 to-teal-400" }),
    /* @__PURE__ */ rt.jsxs(pA, { name: Ku(a), path: a, children: [
      /* @__PURE__ */ rt.jsxs("span", { className: "inline-flex items-baseline gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-[11.5px] whitespace-nowrap text-neutral-500", children: [
        /* @__PURE__ */ rt.jsx("b", { className: "text-[13px] font-semibold tabular-nums text-neutral-900", children: Gr.format(A.length) }),
        " columns"
      ] }),
      /* @__PURE__ */ rt.jsxs("span", { className: "inline-flex items-baseline gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-[11.5px] whitespace-nowrap text-teal-700", children: [
        /* @__PURE__ */ rt.jsx("b", { className: "text-[13px] font-semibold tabular-nums text-teal-700", children: Gr.format(r.length) }),
        " ",
        v ? "rows · preview" : "rows"
      ] })
    ] }),
    /* @__PURE__ */ rt.jsx("div", { className: "max-h-[72vh] overflow-auto", children: /* @__PURE__ */ rt.jsxs("table", { className: "w-full border-separate border-spacing-0", children: [
      /* @__PURE__ */ rt.jsx("thead", { children: /* @__PURE__ */ rt.jsx("tr", { children: g.map((y) => /* @__PURE__ */ rt.jsx(
        "th",
        {
          className: `sticky top-0 z-10 select-none border-b border-neutral-300 bg-white px-4 py-[9px] text-[10.5px] font-semibold tracking-[0.06em] whitespace-nowrap text-neutral-500 uppercase ${y.numeric ? "text-right" : "text-left"}`,
          children: y.key
        },
        y.key
      )) }) }),
      /* @__PURE__ */ rt.jsx("tbody", { children: r.map((y, p) => /* @__PURE__ */ rt.jsx("tr", { className: "transition-colors even:bg-neutral-50/70 hover:bg-teal-50 last:[&>td]:border-b-0", children: g.map((m) => /* @__PURE__ */ rt.jsx(
        "td",
        {
          className: `border-b border-neutral-100 px-4 py-[9px] whitespace-nowrap ${m.numeric ? "text-right font-mono text-[12.5px] tabular-nums text-neutral-800" : "text-left text-neutral-800"}`,
          children: jm(y[m.key], m.kind)
        },
        m.key
      )) }, p)) })
    ] }) })
  ] }) });
}
const Wu = /* @__PURE__ */ new WeakMap();
function Xm(a, f) {
  let r = Wu.get(a);
  r || (r = _h.createRoot(a), Wu.set(a, r)), r.render(
    /* @__PURE__ */ rt.jsx(hl.StrictMode, { children: /* @__PURE__ */ rt.jsx(Vm, { ...f }) })
  );
}
function Km(a) {
  const f = Wu.get(a);
  f && (f.unmount(), Wu.delete(a));
}
export {
  Xm as mount,
  Km as unmount
};

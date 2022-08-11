// lib/index.js
var H_ = Object.create;
var zh = Object.defineProperty;
var V_ = Object.getOwnPropertyDescriptor;
var W_ = Object.getOwnPropertyNames;
var U_ = Object.getPrototypeOf;
var j_ = Object.prototype.hasOwnProperty;
var sr = (e2, t) => () => (t || e2((t = { exports: {} }).exports, t), t.exports);
var $_ = (e2, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of W_(t))
      !j_.call(e2, o) && o !== r && zh(e2, o, { get: () => t[o], enumerable: !(n = V_(t, o)) || n.enumerable });
  return e2;
};
var N = (e2, t, r) => (r = e2 != null ? H_(U_(e2)) : {}, $_(t || !e2 || !e2.__esModule ? zh(r, "default", { value: e2, enumerable: true }) : r, e2));
var mf = sr((BI, Vh) => {
  "use strict";
  var Hh = Object.getOwnPropertySymbols, K_ = Object.prototype.hasOwnProperty, G_ = Object.prototype.propertyIsEnumerable;
  function q_(e2) {
    if (e2 == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e2);
  }
  function Y_() {
    try {
      if (!Object.assign)
        return false;
      var e2 = new String("abc");
      if (e2[5] = "de", Object.getOwnPropertyNames(e2)[0] === "5")
        return false;
      for (var t = {}, r = 0; r < 10; r++)
        t["_" + String.fromCharCode(r)] = r;
      var n = Object.getOwnPropertyNames(t).map(function(i) {
        return t[i];
      });
      if (n.join("") !== "0123456789")
        return false;
      var o = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(i) {
        o[i] = i;
      }), Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return false;
    }
  }
  Vh.exports = Y_() ? Object.assign : function(e2, t) {
    for (var r, n = q_(e2), o, i = 1; i < arguments.length; i++) {
      r = Object(arguments[i]);
      for (var a in r)
        K_.call(r, a) && (n[a] = r[a]);
      if (Hh) {
        o = Hh(r);
        for (var s = 0; s < o.length; s++)
          G_.call(r, o[s]) && (n[o[s]] = r[o[s]]);
      }
    }
    return n;
  };
});
var nv = sr((oe) => {
  "use strict";
  var vf = mf(), si = 60103, jh = 60106;
  oe.Fragment = 60107;
  oe.StrictMode = 60108;
  oe.Profiler = 60114;
  var $h = 60109, Kh = 60110, Gh = 60112;
  oe.Suspense = 60113;
  var qh = 60115, Yh = 60116;
  typeof Symbol == "function" && Symbol.for && (hr = Symbol.for, si = hr("react.element"), jh = hr("react.portal"), oe.Fragment = hr("react.fragment"), oe.StrictMode = hr("react.strict_mode"), oe.Profiler = hr("react.profiler"), $h = hr("react.provider"), Kh = hr("react.context"), Gh = hr("react.forward_ref"), oe.Suspense = hr("react.suspense"), qh = hr("react.memo"), Yh = hr("react.lazy"));
  var hr, Wh = typeof Symbol == "function" && Symbol.iterator;
  function Q_(e2) {
    return e2 === null || typeof e2 != "object" ? null : (e2 = Wh && e2[Wh] || e2["@@iterator"], typeof e2 == "function" ? e2 : null);
  }
  function Da(e2) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e2, r = 1; r < arguments.length; r++)
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e2 + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Qh = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Xh = {};
  function ui(e2, t, r) {
    this.props = e2, this.context = t, this.refs = Xh, this.updater = r || Qh;
  }
  ui.prototype.isReactComponent = {};
  ui.prototype.setState = function(e2, t) {
    if (typeof e2 != "object" && typeof e2 != "function" && e2 != null)
      throw Error(Da(85));
    this.updater.enqueueSetState(this, e2, t, "setState");
  };
  ui.prototype.forceUpdate = function(e2) {
    this.updater.enqueueForceUpdate(this, e2, "forceUpdate");
  };
  function Zh() {
  }
  Zh.prototype = ui.prototype;
  function gf(e2, t, r) {
    this.props = e2, this.context = t, this.refs = Xh, this.updater = r || Qh;
  }
  var yf = gf.prototype = new Zh();
  yf.constructor = gf;
  vf(yf, ui.prototype);
  yf.isPureReactComponent = true;
  var Ef = { current: null }, Jh = Object.prototype.hasOwnProperty, ev = { key: true, ref: true, __self: true, __source: true };
  function tv(e2, t, r) {
    var n, o = {}, i = null, a = null;
    if (t != null)
      for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
        Jh.call(t, n) && !ev.hasOwnProperty(n) && (o[n] = t[n]);
    var s = arguments.length - 2;
    if (s === 1)
      o.children = r;
    else if (1 < s) {
      for (var u = Array(s), l = 0; l < s; l++)
        u[l] = arguments[l + 2];
      o.children = u;
    }
    if (e2 && e2.defaultProps)
      for (n in s = e2.defaultProps, s)
        o[n] === void 0 && (o[n] = s[n]);
    return { $$typeof: si, type: e2, key: i, ref: a, props: o, _owner: Ef.current };
  }
  function X_(e2, t) {
    return { $$typeof: si, type: e2.type, key: t, ref: e2.ref, props: e2.props, _owner: e2._owner };
  }
  function Cf(e2) {
    return typeof e2 == "object" && e2 !== null && e2.$$typeof === si;
  }
  function Z_(e2) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e2.replace(/[=:]/g, function(r) {
      return t[r];
    });
  }
  var Uh = /\/+/g;
  function hf(e2, t) {
    return typeof e2 == "object" && e2 !== null && e2.key != null ? Z_("" + e2.key) : t.toString(36);
  }
  function fu(e2, t, r, n, o) {
    var i = typeof e2;
    (i === "undefined" || i === "boolean") && (e2 = null);
    var a = false;
    if (e2 === null)
      a = true;
    else
      switch (i) {
        case "string":
        case "number":
          a = true;
          break;
        case "object":
          switch (e2.$$typeof) {
            case si:
            case jh:
              a = true;
          }
      }
    if (a)
      return a = e2, o = o(a), e2 = n === "" ? "." + hf(a, 0) : n, Array.isArray(o) ? (r = "", e2 != null && (r = e2.replace(Uh, "$&/") + "/"), fu(o, t, r, "", function(l) {
        return l;
      })) : o != null && (Cf(o) && (o = X_(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Uh, "$&/") + "/") + e2)), t.push(o)), 1;
    if (a = 0, n = n === "" ? "." : n + ":", Array.isArray(e2))
      for (var s = 0; s < e2.length; s++) {
        i = e2[s];
        var u = n + hf(i, s);
        a += fu(i, t, r, u, o);
      }
    else if (u = Q_(e2), typeof u == "function")
      for (e2 = u.call(e2), s = 0; !(i = e2.next()).done; )
        i = i.value, u = n + hf(i, s++), a += fu(i, t, r, u, o);
    else if (i === "object")
      throw t = "" + e2, Error(Da(31, t === "[object Object]" ? "object with keys {" + Object.keys(e2).join(", ") + "}" : t));
    return a;
  }
  function cu(e2, t, r) {
    if (e2 == null)
      return e2;
    var n = [], o = 0;
    return fu(e2, n, "", "", function(i) {
      return t.call(r, i, o++);
    }), n;
  }
  function J_(e2) {
    if (e2._status === -1) {
      var t = e2._result;
      t = t(), e2._status = 0, e2._result = t, t.then(function(r) {
        e2._status === 0 && (r = r.default, e2._status = 1, e2._result = r);
      }, function(r) {
        e2._status === 0 && (e2._status = 2, e2._result = r);
      });
    }
    if (e2._status === 1)
      return e2._result;
    throw e2._result;
  }
  var rv = { current: null };
  function pn() {
    var e2 = rv.current;
    if (e2 === null)
      throw Error(Da(321));
    return e2;
  }
  var eF = { ReactCurrentDispatcher: rv, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: Ef, IsSomeRendererActing: { current: false }, assign: vf };
  oe.Children = { map: cu, forEach: function(e2, t, r) {
    cu(e2, function() {
      t.apply(this, arguments);
    }, r);
  }, count: function(e2) {
    var t = 0;
    return cu(e2, function() {
      t++;
    }), t;
  }, toArray: function(e2) {
    return cu(e2, function(t) {
      return t;
    }) || [];
  }, only: function(e2) {
    if (!Cf(e2))
      throw Error(Da(143));
    return e2;
  } };
  oe.Component = ui;
  oe.PureComponent = gf;
  oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eF;
  oe.cloneElement = function(e2, t, r) {
    if (e2 == null)
      throw Error(Da(267, e2));
    var n = vf({}, e2.props), o = e2.key, i = e2.ref, a = e2._owner;
    if (t != null) {
      if (t.ref !== void 0 && (i = t.ref, a = Ef.current), t.key !== void 0 && (o = "" + t.key), e2.type && e2.type.defaultProps)
        var s = e2.type.defaultProps;
      for (u in t)
        Jh.call(t, u) && !ev.hasOwnProperty(u) && (n[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1)
      n.children = r;
    else if (1 < u) {
      s = Array(u);
      for (var l = 0; l < u; l++)
        s[l] = arguments[l + 2];
      n.children = s;
    }
    return { $$typeof: si, type: e2.type, key: o, ref: i, props: n, _owner: a };
  };
  oe.createContext = function(e2, t) {
    return t === void 0 && (t = null), e2 = { $$typeof: Kh, _calculateChangedBits: t, _currentValue: e2, _currentValue2: e2, _threadCount: 0, Provider: null, Consumer: null }, e2.Provider = { $$typeof: $h, _context: e2 }, e2.Consumer = e2;
  };
  oe.createElement = tv;
  oe.createFactory = function(e2) {
    var t = tv.bind(null, e2);
    return t.type = e2, t;
  };
  oe.createRef = function() {
    return { current: null };
  };
  oe.forwardRef = function(e2) {
    return { $$typeof: Gh, render: e2 };
  };
  oe.isValidElement = Cf;
  oe.lazy = function(e2) {
    return { $$typeof: Yh, _payload: { _status: -1, _result: e2 }, _init: J_ };
  };
  oe.memo = function(e2, t) {
    return { $$typeof: qh, type: e2, compare: t === void 0 ? null : t };
  };
  oe.useCallback = function(e2, t) {
    return pn().useCallback(e2, t);
  };
  oe.useContext = function(e2, t) {
    return pn().useContext(e2, t);
  };
  oe.useDebugValue = function() {
  };
  oe.useEffect = function(e2, t) {
    return pn().useEffect(e2, t);
  };
  oe.useImperativeHandle = function(e2, t, r) {
    return pn().useImperativeHandle(e2, t, r);
  };
  oe.useLayoutEffect = function(e2, t) {
    return pn().useLayoutEffect(e2, t);
  };
  oe.useMemo = function(e2, t) {
    return pn().useMemo(e2, t);
  };
  oe.useReducer = function(e2, t, r) {
    return pn().useReducer(e2, t, r);
  };
  oe.useRef = function(e2) {
    return pn().useRef(e2);
  };
  oe.useState = function(e2) {
    return pn().useState(e2);
  };
  oe.version = "17.0.2";
});
var L = sr((LI, ov) => {
  "use strict";
  ov.exports = nv();
});
var cv = sr((ue) => {
  "use strict";
  var ci, Ra, hu, kf;
  typeof performance == "object" && typeof performance.now == "function" ? (iv = performance, ue.unstable_now = function() {
    return iv.now();
  }) : (Sf = Date, av = Sf.now(), ue.unstable_now = function() {
    return Sf.now() - av;
  });
  var iv, Sf, av;
  typeof window > "u" || typeof MessageChannel != "function" ? (li = null, _f = null, Ff = function() {
    if (li !== null)
      try {
        var e2 = ue.unstable_now();
        li(true, e2), li = null;
      } catch (t) {
        throw setTimeout(Ff, 0), t;
      }
  }, ci = function(e2) {
    li !== null ? setTimeout(ci, 0, e2) : (li = e2, setTimeout(Ff, 0));
  }, Ra = function(e2, t) {
    _f = setTimeout(e2, t);
  }, hu = function() {
    clearTimeout(_f);
  }, ue.unstable_shouldYield = function() {
    return false;
  }, kf = ue.unstable_forceFrameRate = function() {
  }) : (sv = window.setTimeout, uv = window.clearTimeout, typeof console < "u" && (lv = window.cancelAnimationFrame, typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof lv != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")), Ta = false, Ia = null, du = -1, xf = 5, bf = 0, ue.unstable_shouldYield = function() {
    return ue.unstable_now() >= bf;
  }, kf = function() {
  }, ue.unstable_forceFrameRate = function(e2) {
    0 > e2 || 125 < e2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xf = 0 < e2 ? Math.floor(1e3 / e2) : 5;
  }, wf = new MessageChannel(), pu = wf.port2, wf.port1.onmessage = function() {
    if (Ia !== null) {
      var e2 = ue.unstable_now();
      bf = e2 + xf;
      try {
        Ia(true, e2) ? pu.postMessage(null) : (Ta = false, Ia = null);
      } catch (t) {
        throw pu.postMessage(null), t;
      }
    } else
      Ta = false;
  }, ci = function(e2) {
    Ia = e2, Ta || (Ta = true, pu.postMessage(null));
  }, Ra = function(e2, t) {
    du = sv(function() {
      e2(ue.unstable_now());
    }, t);
  }, hu = function() {
    uv(du), du = -1;
  });
  var li, _f, Ff, sv, uv, lv, Ta, Ia, du, xf, bf, wf, pu;
  function Df(e2, t) {
    var r = e2.length;
    e2.push(t);
    e:
      for (; ; ) {
        var n = r - 1 >>> 1, o = e2[n];
        if (o !== void 0 && 0 < mu(o, t))
          e2[n] = t, e2[r] = o, r = n;
        else
          break e;
      }
  }
  function Tr(e2) {
    return e2 = e2[0], e2 === void 0 ? null : e2;
  }
  function vu(e2) {
    var t = e2[0];
    if (t !== void 0) {
      var r = e2.pop();
      if (r !== t) {
        e2[0] = r;
        e:
          for (var n = 0, o = e2.length; n < o; ) {
            var i = 2 * (n + 1) - 1, a = e2[i], s = i + 1, u = e2[s];
            if (a !== void 0 && 0 > mu(a, r))
              u !== void 0 && 0 > mu(u, a) ? (e2[n] = u, e2[s] = r, n = s) : (e2[n] = a, e2[i] = r, n = i);
            else if (u !== void 0 && 0 > mu(u, r))
              e2[n] = u, e2[s] = r, n = s;
            else
              break e;
          }
      }
      return t;
    }
    return null;
  }
  function mu(e2, t) {
    var r = e2.sortIndex - t.sortIndex;
    return r !== 0 ? r : e2.id - t.id;
  }
  var Gr = [], Nn = [], tF = 1, vr = null, gt = 3, gu = false, Io = false, Aa = false;
  function Tf(e2) {
    for (var t = Tr(Nn); t !== null; ) {
      if (t.callback === null)
        vu(Nn);
      else if (t.startTime <= e2)
        vu(Nn), t.sortIndex = t.expirationTime, Df(Gr, t);
      else
        break;
      t = Tr(Nn);
    }
  }
  function If(e2) {
    if (Aa = false, Tf(e2), !Io)
      if (Tr(Gr) !== null)
        Io = true, ci(Rf);
      else {
        var t = Tr(Nn);
        t !== null && Ra(If, t.startTime - e2);
      }
  }
  function Rf(e2, t) {
    Io = false, Aa && (Aa = false, hu()), gu = true;
    var r = gt;
    try {
      for (Tf(t), vr = Tr(Gr); vr !== null && (!(vr.expirationTime > t) || e2 && !ue.unstable_shouldYield()); ) {
        var n = vr.callback;
        if (typeof n == "function") {
          vr.callback = null, gt = vr.priorityLevel;
          var o = n(vr.expirationTime <= t);
          t = ue.unstable_now(), typeof o == "function" ? vr.callback = o : vr === Tr(Gr) && vu(Gr), Tf(t);
        } else
          vu(Gr);
        vr = Tr(Gr);
      }
      if (vr !== null)
        var i = true;
      else {
        var a = Tr(Nn);
        a !== null && Ra(If, a.startTime - t), i = false;
      }
      return i;
    } finally {
      vr = null, gt = r, gu = false;
    }
  }
  var rF = kf;
  ue.unstable_IdlePriority = 5;
  ue.unstable_ImmediatePriority = 1;
  ue.unstable_LowPriority = 4;
  ue.unstable_NormalPriority = 3;
  ue.unstable_Profiling = null;
  ue.unstable_UserBlockingPriority = 2;
  ue.unstable_cancelCallback = function(e2) {
    e2.callback = null;
  };
  ue.unstable_continueExecution = function() {
    Io || gu || (Io = true, ci(Rf));
  };
  ue.unstable_getCurrentPriorityLevel = function() {
    return gt;
  };
  ue.unstable_getFirstCallbackNode = function() {
    return Tr(Gr);
  };
  ue.unstable_next = function(e2) {
    switch (gt) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = gt;
    }
    var r = gt;
    gt = t;
    try {
      return e2();
    } finally {
      gt = r;
    }
  };
  ue.unstable_pauseExecution = function() {
  };
  ue.unstable_requestPaint = rF;
  ue.unstable_runWithPriority = function(e2, t) {
    switch (e2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e2 = 3;
    }
    var r = gt;
    gt = e2;
    try {
      return t();
    } finally {
      gt = r;
    }
  };
  ue.unstable_scheduleCallback = function(e2, t, r) {
    var n = ue.unstable_now();
    switch (typeof r == "object" && r !== null ? (r = r.delay, r = typeof r == "number" && 0 < r ? n + r : n) : r = n, e2) {
      case 1:
        var o = -1;
        break;
      case 2:
        o = 250;
        break;
      case 5:
        o = 1073741823;
        break;
      case 4:
        o = 1e4;
        break;
      default:
        o = 5e3;
    }
    return o = r + o, e2 = { id: tF++, callback: t, priorityLevel: e2, startTime: r, expirationTime: o, sortIndex: -1 }, r > n ? (e2.sortIndex = r, Df(Nn, e2), Tr(Gr) === null && e2 === Tr(Nn) && (Aa ? hu() : Aa = true, Ra(If, r - n))) : (e2.sortIndex = o, Df(Gr, e2), Io || gu || (Io = true, ci(Rf))), e2;
  };
  ue.unstable_wrapCallback = function(e2) {
    var t = gt;
    return function() {
      var r = gt;
      gt = t;
      try {
        return e2.apply(this, arguments);
      } finally {
        gt = r;
      }
    };
  };
});
var dv = sr((zI, fv) => {
  "use strict";
  fv.exports = cv();
});
var Zy = sr((_r) => {
  "use strict";
  var cl = L(), Ae = mf(), it = dv();
  function D(e2) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e2, r = 1; r < arguments.length; r++)
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e2 + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (!cl)
    throw Error(D(227));
  var bg = /* @__PURE__ */ new Set(), us = {};
  function Vo(e2, t) {
    Ri(e2, t), Ri(e2 + "Capture", t);
  }
  function Ri(e2, t) {
    for (us[e2] = t, e2 = 0; e2 < t.length; e2++)
      bg.add(t[e2]);
  }
  var En = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nF = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pv = Object.prototype.hasOwnProperty, mv = {}, hv = {};
  function oF(e2) {
    return pv.call(hv, e2) ? true : pv.call(mv, e2) ? false : nF.test(e2) ? hv[e2] = true : (mv[e2] = true, false);
  }
  function iF(e2, t, r, n) {
    if (r !== null && r.type === 0)
      return false;
    switch (typeof t) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return n ? false : r !== null ? !r.acceptsBooleans : (e2 = e2.toLowerCase().slice(0, 5), e2 !== "data-" && e2 !== "aria-");
      default:
        return false;
    }
  }
  function aF(e2, t, r, n) {
    if (t === null || typeof t > "u" || iF(e2, t, r, n))
      return true;
    if (n)
      return false;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === false;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return false;
  }
  function Tt(e2, t, r, n, o, i, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e2, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
  }
  var pt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e2) {
    pt[e2] = new Tt(e2, 0, false, e2, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e2) {
    var t = e2[0];
    pt[t] = new Tt(t, 1, false, e2[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e2) {
    pt[e2] = new Tt(e2, 2, false, e2.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e2) {
    pt[e2] = new Tt(e2, 2, false, e2, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e2) {
    pt[e2] = new Tt(e2, 3, false, e2.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(e2) {
    pt[e2] = new Tt(e2, 3, true, e2, null, false, false);
  });
  ["capture", "download"].forEach(function(e2) {
    pt[e2] = new Tt(e2, 4, false, e2, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(e2) {
    pt[e2] = new Tt(e2, 6, false, e2, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(e2) {
    pt[e2] = new Tt(e2, 5, false, e2.toLowerCase(), null, false, false);
  });
  var Hd = /[\-:]([a-z])/g;
  function Vd(e2) {
    return e2[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e2) {
    var t = e2.replace(Hd, Vd);
    pt[t] = new Tt(t, 1, false, e2, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e2) {
    var t = e2.replace(Hd, Vd);
    pt[t] = new Tt(t, 1, false, e2, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(e2) {
    var t = e2.replace(Hd, Vd);
    pt[t] = new Tt(t, 1, false, e2, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(e2) {
    pt[e2] = new Tt(e2, 1, false, e2.toLowerCase(), null, false, false);
  });
  pt.xlinkHref = new Tt("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(e2) {
    pt[e2] = new Tt(e2, 1, false, e2.toLowerCase(), null, true, true);
  });
  function Wd(e2, t, r, n) {
    var o = pt.hasOwnProperty(t) ? pt[t] : null, i = o !== null ? o.type === 0 : n ? false : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N");
    i || (aF(t, r, o, n) && (r = null), n || o === null ? oF(t) && (r === null ? e2.removeAttribute(t) : e2.setAttribute(t, "" + r)) : o.mustUseProperty ? e2[o.propertyName] = r === null ? o.type === 3 ? false : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e2.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === true ? "" : "" + r, n ? e2.setAttributeNS(n, t, r) : e2.setAttribute(t, r))));
  }
  var Wo = cl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $a = 60103, Ao = 60106, On = 60107, Ud = 60108, Qa = 60114, jd = 60109, $d = 60110, fl = 60112, Xa = 60113, Vu = 60120, dl = 60115, Kd = 60116, Gd = 60121, qd = 60128, wg = 60129, Yd = 60130, ed = 60131;
  typeof Symbol == "function" && Symbol.for && (et = Symbol.for, $a = et("react.element"), Ao = et("react.portal"), On = et("react.fragment"), Ud = et("react.strict_mode"), Qa = et("react.profiler"), jd = et("react.provider"), $d = et("react.context"), fl = et("react.forward_ref"), Xa = et("react.suspense"), Vu = et("react.suspense_list"), dl = et("react.memo"), Kd = et("react.lazy"), Gd = et("react.block"), et("react.scope"), qd = et("react.opaque.id"), wg = et("react.debug_trace_mode"), Yd = et("react.offscreen"), ed = et("react.legacy_hidden"));
  var et, vv = typeof Symbol == "function" && Symbol.iterator;
  function Pa(e2) {
    return e2 === null || typeof e2 != "object" ? null : (e2 = vv && e2[vv] || e2["@@iterator"], typeof e2 == "function" ? e2 : null);
  }
  var Af;
  function Ka(e2) {
    if (Af === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        Af = t && t[1] || "";
      }
    return `
` + Af + e2;
  }
  var Pf = false;
  function yu(e2, t) {
    if (!e2 || Pf)
      return "";
    Pf = true;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var n = u;
          }
          Reflect.construct(e2, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            n = u;
          }
          e2.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          n = u;
        }
        e2();
      }
    } catch (u) {
      if (u && n && typeof u.stack == "string") {
        for (var o = u.stack.split(`
`), i = n.stack.split(`
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s]; )
          s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (o[a] !== i[s]) {
            if (a !== 1 || s !== 1)
              do
                if (a--, s--, 0 > s || o[a] !== i[s])
                  return `
` + o[a].replace(" at new ", " at ");
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      Pf = false, Error.prepareStackTrace = r;
    }
    return (e2 = e2 ? e2.displayName || e2.name : "") ? Ka(e2) : "";
  }
  function sF(e2) {
    switch (e2.tag) {
      case 5:
        return Ka(e2.type);
      case 16:
        return Ka("Lazy");
      case 13:
        return Ka("Suspense");
      case 19:
        return Ka("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e2 = yu(e2.type, false), e2;
      case 11:
        return e2 = yu(e2.type.render, false), e2;
      case 22:
        return e2 = yu(e2.type._render, false), e2;
      case 1:
        return e2 = yu(e2.type, true), e2;
      default:
        return "";
    }
  }
  function Si(e2) {
    if (e2 == null)
      return null;
    if (typeof e2 == "function")
      return e2.displayName || e2.name || null;
    if (typeof e2 == "string")
      return e2;
    switch (e2) {
      case On:
        return "Fragment";
      case Ao:
        return "Portal";
      case Qa:
        return "Profiler";
      case Ud:
        return "StrictMode";
      case Xa:
        return "Suspense";
      case Vu:
        return "SuspenseList";
    }
    if (typeof e2 == "object")
      switch (e2.$$typeof) {
        case $d:
          return (e2.displayName || "Context") + ".Consumer";
        case jd:
          return (e2._context.displayName || "Context") + ".Provider";
        case fl:
          var t = e2.render;
          return t = t.displayName || t.name || "", e2.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case dl:
          return Si(e2.type);
        case Gd:
          return Si(e2._render);
        case Kd:
          t = e2._payload, e2 = e2._init;
          try {
            return Si(e2(t));
          } catch {
          }
      }
    return null;
  }
  function Qn(e2) {
    switch (typeof e2) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return e2;
      default:
        return "";
    }
  }
  function kg(e2) {
    var t = e2.type;
    return (e2 = e2.nodeName) && e2.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function uF(e2) {
    var t = kg(e2) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e2.constructor.prototype, t), n = "" + e2[t];
    if (!e2.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var o = r.get, i = r.set;
      return Object.defineProperty(e2, t, { configurable: true, get: function() {
        return o.call(this);
      }, set: function(a) {
        n = "" + a, i.call(this, a);
      } }), Object.defineProperty(e2, t, { enumerable: r.enumerable }), { getValue: function() {
        return n;
      }, setValue: function(a) {
        n = "" + a;
      }, stopTracking: function() {
        e2._valueTracker = null, delete e2[t];
      } };
    }
  }
  function Eu(e2) {
    e2._valueTracker || (e2._valueTracker = uF(e2));
  }
  function Dg(e2) {
    if (!e2)
      return false;
    var t = e2._valueTracker;
    if (!t)
      return true;
    var r = t.getValue(), n = "";
    return e2 && (n = kg(e2) ? e2.checked ? "true" : "false" : e2.value), e2 = n, e2 !== r ? (t.setValue(e2), true) : false;
  }
  function Wu(e2) {
    if (e2 = e2 || (typeof document < "u" ? document : void 0), typeof e2 > "u")
      return null;
    try {
      return e2.activeElement || e2.body;
    } catch {
      return e2.body;
    }
  }
  function td(e2, t) {
    var r = t.checked;
    return Ae({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e2._wrapperState.initialChecked });
  }
  function gv(e2, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
    r = Qn(t.value != null ? t.value : r), e2._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Tg(e2, t) {
    t = t.checked, t != null && Wd(e2, "checked", t, false);
  }
  function rd(e2, t) {
    Tg(e2, t);
    var r = Qn(t.value), n = t.type;
    if (r != null)
      n === "number" ? (r === 0 && e2.value === "" || e2.value != r) && (e2.value = "" + r) : e2.value !== "" + r && (e2.value = "" + r);
    else if (n === "submit" || n === "reset") {
      e2.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? nd(e2, t.type, r) : t.hasOwnProperty("defaultValue") && nd(e2, t.type, Qn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e2.defaultChecked = !!t.defaultChecked);
  }
  function yv(e2, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var n = t.type;
      if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e2._wrapperState.initialValue, r || t === e2.value || (e2.value = t), e2.defaultValue = t;
    }
    r = e2.name, r !== "" && (e2.name = ""), e2.defaultChecked = !!e2._wrapperState.initialChecked, r !== "" && (e2.name = r);
  }
  function nd(e2, t, r) {
    (t !== "number" || Wu(e2.ownerDocument) !== e2) && (r == null ? e2.defaultValue = "" + e2._wrapperState.initialValue : e2.defaultValue !== "" + r && (e2.defaultValue = "" + r));
  }
  function lF(e2) {
    var t = "";
    return cl.Children.forEach(e2, function(r) {
      r != null && (t += r);
    }), t;
  }
  function od(e2, t) {
    return e2 = Ae({ children: void 0 }, t), (t = lF(t.children)) && (e2.children = t), e2;
  }
  function _i(e2, t, r, n) {
    if (e2 = e2.options, t) {
      t = {};
      for (var o = 0; o < r.length; o++)
        t["$" + r[o]] = true;
      for (r = 0; r < e2.length; r++)
        o = t.hasOwnProperty("$" + e2[r].value), e2[r].selected !== o && (e2[r].selected = o), o && n && (e2[r].defaultSelected = true);
    } else {
      for (r = "" + Qn(r), t = null, o = 0; o < e2.length; o++) {
        if (e2[o].value === r) {
          e2[o].selected = true, n && (e2[o].defaultSelected = true);
          return;
        }
        t !== null || e2[o].disabled || (t = e2[o]);
      }
      t !== null && (t.selected = true);
    }
  }
  function id(e2, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(D(91));
    return Ae({}, t, { value: void 0, defaultValue: void 0, children: "" + e2._wrapperState.initialValue });
  }
  function Ev(e2, t) {
    var r = t.value;
    if (r == null) {
      if (r = t.children, t = t.defaultValue, r != null) {
        if (t != null)
          throw Error(D(92));
        if (Array.isArray(r)) {
          if (!(1 >= r.length))
            throw Error(D(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), r = t;
    }
    e2._wrapperState = { initialValue: Qn(r) };
  }
  function Ig(e2, t) {
    var r = Qn(t.value), n = Qn(t.defaultValue);
    r != null && (r = "" + r, r !== e2.value && (e2.value = r), t.defaultValue == null && e2.defaultValue !== r && (e2.defaultValue = r)), n != null && (e2.defaultValue = "" + n);
  }
  function Cv(e2) {
    var t = e2.textContent;
    t === e2._wrapperState.initialValue && t !== "" && t !== null && (e2.value = t);
  }
  var ad = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function Rg(e2) {
    switch (e2) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sd(e2, t) {
    return e2 == null || e2 === "http://www.w3.org/1999/xhtml" ? Rg(t) : e2 === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e2;
  }
  var Cu, Ag = function(e2) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e2(t, r, n, o);
      });
    } : e2;
  }(function(e2, t) {
    if (e2.namespaceURI !== ad.svg || "innerHTML" in e2)
      e2.innerHTML = t;
    else {
      for (Cu = Cu || document.createElement("div"), Cu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Cu.firstChild; e2.firstChild; )
        e2.removeChild(e2.firstChild);
      for (; t.firstChild; )
        e2.appendChild(t.firstChild);
    }
  });
  function ls(e2, t) {
    if (t) {
      var r = e2.firstChild;
      if (r && r === e2.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e2.textContent = t;
  }
  var Za = { animationIterationCount: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, cF = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Za).forEach(function(e2) {
    cF.forEach(function(t) {
      t = t + e2.charAt(0).toUpperCase() + e2.substring(1), Za[t] = Za[e2];
    });
  });
  function Pg(e2, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Za.hasOwnProperty(e2) && Za[e2] ? ("" + t).trim() : t + "px";
  }
  function Mg(e2, t) {
    e2 = e2.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = r.indexOf("--") === 0, o = Pg(r, t[r], n);
        r === "float" && (r = "cssFloat"), n ? e2.setProperty(r, o) : e2[r] = o;
      }
  }
  var fF = Ae({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ud(e2, t) {
    if (t) {
      if (fF[e2] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(D(137, e2));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw Error(D(60));
        if (!(typeof t.dangerouslySetInnerHTML == "object" && "__html" in t.dangerouslySetInnerHTML))
          throw Error(D(61));
      }
      if (t.style != null && typeof t.style != "object")
        throw Error(D(62));
    }
  }
  function ld(e2, t) {
    if (e2.indexOf("-") === -1)
      return typeof t.is == "string";
    switch (e2) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  function Qd(e2) {
    return e2 = e2.target || e2.srcElement || window, e2.correspondingUseElement && (e2 = e2.correspondingUseElement), e2.nodeType === 3 ? e2.parentNode : e2;
  }
  var cd = null, Fi = null, xi = null;
  function Sv(e2) {
    if (e2 = Fs(e2)) {
      if (typeof cd != "function")
        throw Error(D(280));
      var t = e2.stateNode;
      t && (t = yl(t), cd(e2.stateNode, e2.type, t));
    }
  }
  function Bg(e2) {
    Fi ? xi ? xi.push(e2) : xi = [e2] : Fi = e2;
  }
  function Ng() {
    if (Fi) {
      var e2 = Fi, t = xi;
      if (xi = Fi = null, Sv(e2), t)
        for (e2 = 0; e2 < t.length; e2++)
          Sv(t[e2]);
    }
  }
  function Xd(e2, t) {
    return e2(t);
  }
  function Lg(e2, t, r, n, o) {
    return e2(t, r, n, o);
  }
  function Zd() {
  }
  var Og = Xd, Po = false, Mf = false;
  function Jd() {
    (Fi !== null || xi !== null) && (Zd(), Ng());
  }
  function dF(e2, t, r) {
    if (Mf)
      return e2(t, r);
    Mf = true;
    try {
      return Og(e2, t, r);
    } finally {
      Mf = false, Jd();
    }
  }
  function cs(e2, t) {
    var r = e2.stateNode;
    if (r === null)
      return null;
    var n = yl(r);
    if (n === null)
      return null;
    r = n[t];
    e:
      switch (t) {
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
          (n = !n.disabled) || (e2 = e2.type, n = !(e2 === "button" || e2 === "input" || e2 === "select" || e2 === "textarea")), e2 = !n;
          break e;
        default:
          e2 = false;
      }
    if (e2)
      return null;
    if (r && typeof r != "function")
      throw Error(D(231, t, typeof r));
    return r;
  }
  var fd = false;
  if (En)
    try {
      fi = {}, Object.defineProperty(fi, "passive", { get: function() {
        fd = true;
      } }), window.addEventListener("test", fi, fi), window.removeEventListener("test", fi, fi);
    } catch {
      fd = false;
    }
  var fi;
  function pF(e2, t, r, n, o, i, a, s, u) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, l);
    } catch (c) {
      this.onError(c);
    }
  }
  var Ja = false, Uu = null, ju = false, dd = null, mF = { onError: function(e2) {
    Ja = true, Uu = e2;
  } };
  function hF(e2, t, r, n, o, i, a, s, u) {
    Ja = false, Uu = null, pF.apply(mF, arguments);
  }
  function vF(e2, t, r, n, o, i, a, s, u) {
    if (hF.apply(this, arguments), Ja) {
      if (Ja) {
        var l = Uu;
        Ja = false, Uu = null;
      } else
        throw Error(D(198));
      ju || (ju = true, dd = l);
    }
  }
  function Uo(e2) {
    var t = e2, r = e2;
    if (e2.alternate)
      for (; t.return; )
        t = t.return;
    else {
      e2 = t;
      do
        t = e2, (t.flags & 1026) !== 0 && (r = t.return), e2 = t.return;
      while (e2);
    }
    return t.tag === 3 ? r : null;
  }
  function zg(e2) {
    if (e2.tag === 13) {
      var t = e2.memoizedState;
      if (t === null && (e2 = e2.alternate, e2 !== null && (t = e2.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function _v(e2) {
    if (Uo(e2) !== e2)
      throw Error(D(188));
  }
  function gF(e2) {
    var t = e2.alternate;
    if (!t) {
      if (t = Uo(e2), t === null)
        throw Error(D(188));
      return t !== e2 ? null : e2;
    }
    for (var r = e2, n = t; ; ) {
      var o = r.return;
      if (o === null)
        break;
      var i = o.alternate;
      if (i === null) {
        if (n = o.return, n !== null) {
          r = n;
          continue;
        }
        break;
      }
      if (o.child === i.child) {
        for (i = o.child; i; ) {
          if (i === r)
            return _v(o), e2;
          if (i === n)
            return _v(o), t;
          i = i.sibling;
        }
        throw Error(D(188));
      }
      if (r.return !== n.return)
        r = o, n = i;
      else {
        for (var a = false, s = o.child; s; ) {
          if (s === r) {
            a = true, r = o, n = i;
            break;
          }
          if (s === n) {
            a = true, n = o, r = i;
            break;
          }
          s = s.sibling;
        }
        if (!a) {
          for (s = i.child; s; ) {
            if (s === r) {
              a = true, r = i, n = o;
              break;
            }
            if (s === n) {
              a = true, n = i, r = o;
              break;
            }
            s = s.sibling;
          }
          if (!a)
            throw Error(D(189));
        }
      }
      if (r.alternate !== n)
        throw Error(D(190));
    }
    if (r.tag !== 3)
      throw Error(D(188));
    return r.stateNode.current === r ? e2 : t;
  }
  function Hg(e2) {
    if (e2 = gF(e2), !e2)
      return null;
    for (var t = e2; ; ) {
      if (t.tag === 5 || t.tag === 6)
        return t;
      if (t.child)
        t.child.return = t, t = t.child;
      else {
        if (t === e2)
          break;
        for (; !t.sibling; ) {
          if (!t.return || t.return === e2)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return null;
  }
  function Fv(e2, t) {
    for (var r = e2.alternate; t !== null; ) {
      if (t === e2 || t === r)
        return true;
      t = t.return;
    }
    return false;
  }
  var Vg, ep, Wg, Ug, pd = false, qr = [], Wn = null, Un = null, jn = null, fs = /* @__PURE__ */ new Map(), ds = /* @__PURE__ */ new Map(), Ma = [], xv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function md(e2, t, r, n, o) {
    return { blockedOn: e2, domEventName: t, eventSystemFlags: r | 16, nativeEvent: o, targetContainers: [n] };
  }
  function bv(e2, t) {
    switch (e2) {
      case "focusin":
      case "focusout":
        Wn = null;
        break;
      case "dragenter":
      case "dragleave":
        Un = null;
        break;
      case "mouseover":
      case "mouseout":
        jn = null;
        break;
      case "pointerover":
      case "pointerout":
        fs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ds.delete(t.pointerId);
    }
  }
  function Ba(e2, t, r, n, o, i) {
    return e2 === null || e2.nativeEvent !== i ? (e2 = md(t, r, n, o, i), t !== null && (t = Fs(t), t !== null && ep(t)), e2) : (e2.eventSystemFlags |= n, t = e2.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e2);
  }
  function yF(e2, t, r, n, o) {
    switch (t) {
      case "focusin":
        return Wn = Ba(Wn, e2, t, r, n, o), true;
      case "dragenter":
        return Un = Ba(Un, e2, t, r, n, o), true;
      case "mouseover":
        return jn = Ba(jn, e2, t, r, n, o), true;
      case "pointerover":
        var i = o.pointerId;
        return fs.set(i, Ba(fs.get(i) || null, e2, t, r, n, o)), true;
      case "gotpointercapture":
        return i = o.pointerId, ds.set(i, Ba(ds.get(i) || null, e2, t, r, n, o)), true;
    }
    return false;
  }
  function EF(e2) {
    var t = Mo(e2.target);
    if (t !== null) {
      var r = Uo(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = zg(r), t !== null) {
            e2.blockedOn = t, Ug(e2.lanePriority, function() {
              it.unstable_runWithPriority(e2.priority, function() {
                Wg(r);
              });
            });
            return;
          }
        } else if (t === 3 && r.stateNode.hydrate) {
          e2.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e2.blockedOn = null;
  }
  function Ru(e2) {
    if (e2.blockedOn !== null)
      return false;
    for (var t = e2.targetContainers; 0 < t.length; ) {
      var r = op(e2.domEventName, e2.eventSystemFlags, t[0], e2.nativeEvent);
      if (r !== null)
        return t = Fs(r), t !== null && ep(t), e2.blockedOn = r, false;
      t.shift();
    }
    return true;
  }
  function wv(e2, t, r) {
    Ru(e2) && r.delete(t);
  }
  function CF() {
    for (pd = false; 0 < qr.length; ) {
      var e2 = qr[0];
      if (e2.blockedOn !== null) {
        e2 = Fs(e2.blockedOn), e2 !== null && Vg(e2);
        break;
      }
      for (var t = e2.targetContainers; 0 < t.length; ) {
        var r = op(e2.domEventName, e2.eventSystemFlags, t[0], e2.nativeEvent);
        if (r !== null) {
          e2.blockedOn = r;
          break;
        }
        t.shift();
      }
      e2.blockedOn === null && qr.shift();
    }
    Wn !== null && Ru(Wn) && (Wn = null), Un !== null && Ru(Un) && (Un = null), jn !== null && Ru(jn) && (jn = null), fs.forEach(wv), ds.forEach(wv);
  }
  function Na(e2, t) {
    e2.blockedOn === t && (e2.blockedOn = null, pd || (pd = true, it.unstable_scheduleCallback(it.unstable_NormalPriority, CF)));
  }
  function jg(e2) {
    function t(o) {
      return Na(o, e2);
    }
    if (0 < qr.length) {
      Na(qr[0], e2);
      for (var r = 1; r < qr.length; r++) {
        var n = qr[r];
        n.blockedOn === e2 && (n.blockedOn = null);
      }
    }
    for (Wn !== null && Na(Wn, e2), Un !== null && Na(Un, e2), jn !== null && Na(jn, e2), fs.forEach(t), ds.forEach(t), r = 0; r < Ma.length; r++)
      n = Ma[r], n.blockedOn === e2 && (n.blockedOn = null);
    for (; 0 < Ma.length && (r = Ma[0], r.blockedOn === null); )
      EF(r), r.blockedOn === null && Ma.shift();
  }
  function Su(e2, t) {
    var r = {};
    return r[e2.toLowerCase()] = t.toLowerCase(), r["Webkit" + e2] = "webkit" + t, r["Moz" + e2] = "moz" + t, r;
  }
  var hi = { animationend: Su("Animation", "AnimationEnd"), animationiteration: Su("Animation", "AnimationIteration"), animationstart: Su("Animation", "AnimationStart"), transitionend: Su("Transition", "TransitionEnd") }, Bf = {}, $g = {};
  En && ($g = document.createElement("div").style, "AnimationEvent" in window || (delete hi.animationend.animation, delete hi.animationiteration.animation, delete hi.animationstart.animation), "TransitionEvent" in window || delete hi.transitionend.transition);
  function pl(e2) {
    if (Bf[e2])
      return Bf[e2];
    if (!hi[e2])
      return e2;
    var t = hi[e2], r;
    for (r in t)
      if (t.hasOwnProperty(r) && r in $g)
        return Bf[e2] = t[r];
    return e2;
  }
  var Kg = pl("animationend"), Gg = pl("animationiteration"), qg = pl("animationstart"), Yg = pl("transitionend"), Qg = /* @__PURE__ */ new Map(), tp = /* @__PURE__ */ new Map(), SF = ["abort", "abort", Kg, "animationEnd", Gg, "animationIteration", qg, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Yg, "transitionEnd", "waiting", "waiting"];
  function rp(e2, t) {
    for (var r = 0; r < e2.length; r += 2) {
      var n = e2[r], o = e2[r + 1];
      o = "on" + (o[0].toUpperCase() + o.slice(1)), tp.set(n, t), Qg.set(n, o), Vo(o, [n]);
    }
  }
  var _F = it.unstable_now;
  _F();
  var xe = 8;
  function pi(e2) {
    if ((1 & e2) !== 0)
      return xe = 15, 1;
    if ((2 & e2) !== 0)
      return xe = 14, 2;
    if ((4 & e2) !== 0)
      return xe = 13, 4;
    var t = 24 & e2;
    return t !== 0 ? (xe = 12, t) : (e2 & 32) !== 0 ? (xe = 11, 32) : (t = 192 & e2, t !== 0 ? (xe = 10, t) : (e2 & 256) !== 0 ? (xe = 9, 256) : (t = 3584 & e2, t !== 0 ? (xe = 8, t) : (e2 & 4096) !== 0 ? (xe = 7, 4096) : (t = 4186112 & e2, t !== 0 ? (xe = 6, t) : (t = 62914560 & e2, t !== 0 ? (xe = 5, t) : e2 & 67108864 ? (xe = 4, 67108864) : (e2 & 134217728) !== 0 ? (xe = 3, 134217728) : (t = 805306368 & e2, t !== 0 ? (xe = 2, t) : (1073741824 & e2) !== 0 ? (xe = 1, 1073741824) : (xe = 8, e2))))));
  }
  function FF(e2) {
    switch (e2) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function xF(e2) {
    switch (e2) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error(D(358, e2));
    }
  }
  function ps(e2, t) {
    var r = e2.pendingLanes;
    if (r === 0)
      return xe = 0;
    var n = 0, o = 0, i = e2.expiredLanes, a = e2.suspendedLanes, s = e2.pingedLanes;
    if (i !== 0)
      n = i, o = xe = 15;
    else if (i = r & 134217727, i !== 0) {
      var u = i & ~a;
      u !== 0 ? (n = pi(u), o = xe) : (s &= i, s !== 0 && (n = pi(s), o = xe));
    } else
      i = r & ~a, i !== 0 ? (n = pi(i), o = xe) : s !== 0 && (n = pi(s), o = xe);
    if (n === 0)
      return 0;
    if (n = 31 - Xn(n), n = r & ((0 > n ? 0 : 1 << n) << 1) - 1, t !== 0 && t !== n && (t & a) === 0) {
      if (pi(t), o <= xe)
        return t;
      xe = o;
    }
    if (t = e2.entangledLanes, t !== 0)
      for (e2 = e2.entanglements, t &= n; 0 < t; )
        r = 31 - Xn(t), o = 1 << r, n |= e2[r], t &= ~o;
    return n;
  }
  function Xg(e2) {
    return e2 = e2.pendingLanes & -1073741825, e2 !== 0 ? e2 : e2 & 1073741824 ? 1073741824 : 0;
  }
  function $u(e2, t) {
    switch (e2) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return e2 = mi(24 & ~t), e2 === 0 ? $u(10, t) : e2;
      case 10:
        return e2 = mi(192 & ~t), e2 === 0 ? $u(8, t) : e2;
      case 8:
        return e2 = mi(3584 & ~t), e2 === 0 && (e2 = mi(4186112 & ~t), e2 === 0 && (e2 = 512)), e2;
      case 2:
        return t = mi(805306368 & ~t), t === 0 && (t = 268435456), t;
    }
    throw Error(D(358, e2));
  }
  function mi(e2) {
    return e2 & -e2;
  }
  function Nf(e2) {
    for (var t = [], r = 0; 31 > r; r++)
      t.push(e2);
    return t;
  }
  function ml(e2, t, r) {
    e2.pendingLanes |= t;
    var n = t - 1;
    e2.suspendedLanes &= n, e2.pingedLanes &= n, e2 = e2.eventTimes, t = 31 - Xn(t), e2[t] = r;
  }
  var Xn = Math.clz32 ? Math.clz32 : kF, bF = Math.log, wF = Math.LN2;
  function kF(e2) {
    return e2 === 0 ? 32 : 31 - (bF(e2) / wF | 0) | 0;
  }
  var DF = it.unstable_UserBlockingPriority, TF = it.unstable_runWithPriority, Au = true;
  function IF(e2, t, r, n) {
    Po || Zd();
    var o = np, i = Po;
    Po = true;
    try {
      Lg(o, e2, t, r, n);
    } finally {
      (Po = i) || Jd();
    }
  }
  function RF(e2, t, r, n) {
    TF(DF, np.bind(null, e2, t, r, n));
  }
  function np(e2, t, r, n) {
    if (Au) {
      var o;
      if ((o = (t & 4) === 0) && 0 < qr.length && -1 < xv.indexOf(e2))
        e2 = md(null, e2, t, r, n), qr.push(e2);
      else {
        var i = op(e2, t, r, n);
        if (i === null)
          o && bv(e2, n);
        else {
          if (o) {
            if (-1 < xv.indexOf(e2)) {
              e2 = md(i, e2, t, r, n), qr.push(e2);
              return;
            }
            if (yF(i, e2, t, r, n))
              return;
            bv(e2, n);
          }
          cy(e2, t, n, null, r);
        }
      }
    }
  }
  function op(e2, t, r, n) {
    var o = Qd(n);
    if (o = Mo(o), o !== null) {
      var i = Uo(o);
      if (i === null)
        o = null;
      else {
        var a = i.tag;
        if (a === 13) {
          if (o = zg(i), o !== null)
            return o;
          o = null;
        } else if (a === 3) {
          if (i.stateNode.hydrate)
            return i.tag === 3 ? i.stateNode.containerInfo : null;
          o = null;
        } else
          i !== o && (o = null);
      }
    }
    return cy(e2, t, n, o, r), null;
  }
  var zn = null, ip = null, Pu = null;
  function Zg() {
    if (Pu)
      return Pu;
    var e2, t = ip, r = t.length, n, o = "value" in zn ? zn.value : zn.textContent, i = o.length;
    for (e2 = 0; e2 < r && t[e2] === o[e2]; e2++)
      ;
    var a = r - e2;
    for (n = 1; n <= a && t[r - n] === o[i - n]; n++)
      ;
    return Pu = o.slice(e2, 1 < n ? 1 - n : void 0);
  }
  function Mu(e2) {
    var t = e2.keyCode;
    return "charCode" in e2 ? (e2 = e2.charCode, e2 === 0 && t === 13 && (e2 = 13)) : e2 = t, e2 === 10 && (e2 = 13), 32 <= e2 || e2 === 13 ? e2 : 0;
  }
  function _u() {
    return true;
  }
  function kv() {
    return false;
  }
  function lr(e2) {
    function t(r, n, o, i, a) {
      this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
      for (var s in e2)
        e2.hasOwnProperty(s) && (r = e2[s], this[s] = r ? r(i) : i[s]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? _u : kv, this.isPropagationStopped = kv, this;
    }
    return Ae(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var r = this.nativeEvent;
      r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = false), this.isDefaultPrevented = _u);
    }, stopPropagation: function() {
      var r = this.nativeEvent;
      r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = true), this.isPropagationStopped = _u);
    }, persist: function() {
    }, isPersistent: _u }), t;
  }
  var Bi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e2) {
    return e2.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ap = lr(Bi), _s = Ae({}, Bi, { view: 0, detail: 0 }), AF = lr(_s), Lf, Of, La, hl = Ae({}, _s, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sp, button: 0, buttons: 0, relatedTarget: function(e2) {
    return e2.relatedTarget === void 0 ? e2.fromElement === e2.srcElement ? e2.toElement : e2.fromElement : e2.relatedTarget;
  }, movementX: function(e2) {
    return "movementX" in e2 ? e2.movementX : (e2 !== La && (La && e2.type === "mousemove" ? (Lf = e2.screenX - La.screenX, Of = e2.screenY - La.screenY) : Of = Lf = 0, La = e2), Lf);
  }, movementY: function(e2) {
    return "movementY" in e2 ? e2.movementY : Of;
  } }), Dv = lr(hl), PF = Ae({}, hl, { dataTransfer: 0 }), MF = lr(PF), BF = Ae({}, _s, { relatedTarget: 0 }), zf = lr(BF), NF = Ae({}, Bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), LF = lr(NF), OF = Ae({}, Bi, { clipboardData: function(e2) {
    return "clipboardData" in e2 ? e2.clipboardData : window.clipboardData;
  } }), zF = lr(OF), HF = Ae({}, Bi, { data: 0 }), Tv = lr(HF), VF = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, WF = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, UF = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function jF(e2) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e2) : (e2 = UF[e2]) ? !!t[e2] : false;
  }
  function sp() {
    return jF;
  }
  var $F = Ae({}, _s, { key: function(e2) {
    if (e2.key) {
      var t = VF[e2.key] || e2.key;
      if (t !== "Unidentified")
        return t;
    }
    return e2.type === "keypress" ? (e2 = Mu(e2), e2 === 13 ? "Enter" : String.fromCharCode(e2)) : e2.type === "keydown" || e2.type === "keyup" ? WF[e2.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sp, charCode: function(e2) {
    return e2.type === "keypress" ? Mu(e2) : 0;
  }, keyCode: function(e2) {
    return e2.type === "keydown" || e2.type === "keyup" ? e2.keyCode : 0;
  }, which: function(e2) {
    return e2.type === "keypress" ? Mu(e2) : e2.type === "keydown" || e2.type === "keyup" ? e2.keyCode : 0;
  } }), KF = lr($F), GF = Ae({}, hl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Iv = lr(GF), qF = Ae({}, _s, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sp }), YF = lr(qF), QF = Ae({}, Bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), XF = lr(QF), ZF = Ae({}, hl, { deltaX: function(e2) {
    return "deltaX" in e2 ? e2.deltaX : "wheelDeltaX" in e2 ? -e2.wheelDeltaX : 0;
  }, deltaY: function(e2) {
    return "deltaY" in e2 ? e2.deltaY : "wheelDeltaY" in e2 ? -e2.wheelDeltaY : "wheelDelta" in e2 ? -e2.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), JF = lr(ZF), ex = [9, 13, 27, 32], up = En && "CompositionEvent" in window, es = null;
  En && "documentMode" in document && (es = document.documentMode);
  var tx = En && "TextEvent" in window && !es, Jg = En && (!up || es && 8 < es && 11 >= es), Rv = String.fromCharCode(32), Av = false;
  function ey(e2, t) {
    switch (e2) {
      case "keyup":
        return ex.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function ty(e2) {
    return e2 = e2.detail, typeof e2 == "object" && "data" in e2 ? e2.data : null;
  }
  var vi = false;
  function rx(e2, t) {
    switch (e2) {
      case "compositionend":
        return ty(t);
      case "keypress":
        return t.which !== 32 ? null : (Av = true, Rv);
      case "textInput":
        return e2 = t.data, e2 === Rv && Av ? null : e2;
      default:
        return null;
    }
  }
  function nx(e2, t) {
    if (vi)
      return e2 === "compositionend" || !up && ey(e2, t) ? (e2 = Zg(), Pu = ip = zn = null, vi = false, e2) : null;
    switch (e2) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Jg && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ox = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Pv(e2) {
    var t = e2 && e2.nodeName && e2.nodeName.toLowerCase();
    return t === "input" ? !!ox[e2.type] : t === "textarea";
  }
  function ry(e2, t, r, n) {
    Bg(n), t = Ku(t, "onChange"), 0 < t.length && (r = new ap("onChange", "change", null, r, n), e2.push({ event: r, listeners: t }));
  }
  var ts = null, ms = null;
  function ix(e2) {
    sy(e2, 0);
  }
  function vl(e2) {
    var t = yi(e2);
    if (Dg(t))
      return e2;
  }
  function ax(e2, t) {
    if (e2 === "change")
      return t;
  }
  var ny = false;
  En && (En ? (xu = "oninput" in document, xu || (Hf = document.createElement("div"), Hf.setAttribute("oninput", "return;"), xu = typeof Hf.oninput == "function"), Fu = xu) : Fu = false, ny = Fu && (!document.documentMode || 9 < document.documentMode));
  var Fu, xu, Hf;
  function Mv() {
    ts && (ts.detachEvent("onpropertychange", oy), ms = ts = null);
  }
  function oy(e2) {
    if (e2.propertyName === "value" && vl(ms)) {
      var t = [];
      if (ry(t, ms, e2, Qd(e2)), e2 = ix, Po)
        e2(t);
      else {
        Po = true;
        try {
          Xd(e2, t);
        } finally {
          Po = false, Jd();
        }
      }
    }
  }
  function sx(e2, t, r) {
    e2 === "focusin" ? (Mv(), ts = t, ms = r, ts.attachEvent("onpropertychange", oy)) : e2 === "focusout" && Mv();
  }
  function ux(e2) {
    if (e2 === "selectionchange" || e2 === "keyup" || e2 === "keydown")
      return vl(ms);
  }
  function lx(e2, t) {
    if (e2 === "click")
      return vl(t);
  }
  function cx(e2, t) {
    if (e2 === "input" || e2 === "change")
      return vl(t);
  }
  function fx(e2, t) {
    return e2 === t && (e2 !== 0 || 1 / e2 === 1 / t) || e2 !== e2 && t !== t;
  }
  var gr = typeof Object.is == "function" ? Object.is : fx, dx = Object.prototype.hasOwnProperty;
  function hs(e2, t) {
    if (gr(e2, t))
      return true;
    if (typeof e2 != "object" || e2 === null || typeof t != "object" || t === null)
      return false;
    var r = Object.keys(e2), n = Object.keys(t);
    if (r.length !== n.length)
      return false;
    for (n = 0; n < r.length; n++)
      if (!dx.call(t, r[n]) || !gr(e2[r[n]], t[r[n]]))
        return false;
    return true;
  }
  function Bv(e2) {
    for (; e2 && e2.firstChild; )
      e2 = e2.firstChild;
    return e2;
  }
  function Nv(e2, t) {
    var r = Bv(e2);
    e2 = 0;
    for (var n; r; ) {
      if (r.nodeType === 3) {
        if (n = e2 + r.textContent.length, e2 <= t && n >= t)
          return { node: r, offset: t - e2 };
        e2 = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Bv(r);
    }
  }
  function iy(e2, t) {
    return e2 && t ? e2 === t ? true : e2 && e2.nodeType === 3 ? false : t && t.nodeType === 3 ? iy(e2, t.parentNode) : "contains" in e2 ? e2.contains(t) : e2.compareDocumentPosition ? !!(e2.compareDocumentPosition(t) & 16) : false : false;
  }
  function Lv() {
    for (var e2 = window, t = Wu(); t instanceof e2.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = false;
      }
      if (r)
        e2 = t.contentWindow;
      else
        break;
      t = Wu(e2.document);
    }
    return t;
  }
  function hd(e2) {
    var t = e2 && e2.nodeName && e2.nodeName.toLowerCase();
    return t && (t === "input" && (e2.type === "text" || e2.type === "search" || e2.type === "tel" || e2.type === "url" || e2.type === "password") || t === "textarea" || e2.contentEditable === "true");
  }
  var px = En && "documentMode" in document && 11 >= document.documentMode, gi = null, vd = null, rs = null, gd = false;
  function Ov(e2, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    gd || gi == null || gi !== Wu(n) || (n = gi, "selectionStart" in n && hd(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), rs && hs(rs, n) || (rs = n, n = Ku(vd, "onSelect"), 0 < n.length && (t = new ap("onSelect", "select", null, t, r), e2.push({ event: t, listeners: n }), t.target = gi)));
  }
  rp("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
  rp("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
  rp(SF, 2);
  for (Vf = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), bu = 0; bu < Vf.length; bu++)
    tp.set(Vf[bu], 0);
  var Vf, bu;
  Ri("onMouseEnter", ["mouseout", "mouseover"]);
  Ri("onMouseLeave", ["mouseout", "mouseover"]);
  Ri("onPointerEnter", ["pointerout", "pointerover"]);
  Ri("onPointerLeave", ["pointerout", "pointerover"]);
  Vo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Vo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Vo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Vo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Vo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Vo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ga = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ga));
  function zv(e2, t, r) {
    var n = e2.type || "unknown-event";
    e2.currentTarget = r, vF(n, t, void 0, e2), e2.currentTarget = null;
  }
  function sy(e2, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e2.length; r++) {
      var n = e2[r], o = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var a = n.length - 1; 0 <= a; a--) {
            var s = n[a], u = s.instance, l = s.currentTarget;
            if (s = s.listener, u !== i && o.isPropagationStopped())
              break e;
            zv(o, s, l), i = u;
          }
        else
          for (a = 0; a < n.length; a++) {
            if (s = n[a], u = s.instance, l = s.currentTarget, s = s.listener, u !== i && o.isPropagationStopped())
              break e;
            zv(o, s, l), i = u;
          }
      }
    }
    if (ju)
      throw e2 = dd, ju = false, dd = null, e2;
  }
  function Te(e2, t) {
    var r = dy(t), n = e2 + "__bubble";
    r.has(n) || (ly(t, e2, 2, false), r.add(n));
  }
  var Hv = "_reactListening" + Math.random().toString(36).slice(2);
  function uy(e2) {
    e2[Hv] || (e2[Hv] = true, bg.forEach(function(t) {
      ay.has(t) || Vv(t, false, e2, null), Vv(t, true, e2, null);
    }));
  }
  function Vv(e2, t, r, n) {
    var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, i = r;
    if (e2 === "selectionchange" && r.nodeType !== 9 && (i = r.ownerDocument), n !== null && !t && ay.has(e2)) {
      if (e2 !== "scroll")
        return;
      o |= 2, i = n;
    }
    var a = dy(i), s = e2 + "__" + (t ? "capture" : "bubble");
    a.has(s) || (t && (o |= 4), ly(i, e2, o, t), a.add(s));
  }
  function ly(e2, t, r, n) {
    var o = tp.get(t);
    switch (o === void 0 ? 2 : o) {
      case 0:
        o = IF;
        break;
      case 1:
        o = RF;
        break;
      default:
        o = np;
    }
    r = o.bind(null, t, r, e2), o = void 0, !fd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), n ? o !== void 0 ? e2.addEventListener(t, r, { capture: true, passive: o }) : e2.addEventListener(t, r, true) : o !== void 0 ? e2.addEventListener(t, r, { passive: o }) : e2.addEventListener(t, r, false);
  }
  function cy(e2, t, r, n, o) {
    var i = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e:
        for (; ; ) {
          if (n === null)
            return;
          var a = n.tag;
          if (a === 3 || a === 4) {
            var s = n.stateNode.containerInfo;
            if (s === o || s.nodeType === 8 && s.parentNode === o)
              break;
            if (a === 4)
              for (a = n.return; a !== null; ) {
                var u = a.tag;
                if ((u === 3 || u === 4) && (u = a.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o))
                  return;
                a = a.return;
              }
            for (; s !== null; ) {
              if (a = Mo(s), a === null)
                return;
              if (u = a.tag, u === 5 || u === 6) {
                n = i = a;
                continue e;
              }
              s = s.parentNode;
            }
          }
          n = n.return;
        }
    dF(function() {
      var l = i, c = Qd(r), d = [];
      e: {
        var p = Qg.get(e2);
        if (p !== void 0) {
          var v = ap, g = e2;
          switch (e2) {
            case "keypress":
              if (Mu(r) === 0)
                break e;
            case "keydown":
            case "keyup":
              v = KF;
              break;
            case "focusin":
              g = "focus", v = zf;
              break;
            case "focusout":
              g = "blur", v = zf;
              break;
            case "beforeblur":
            case "afterblur":
              v = zf;
              break;
            case "click":
              if (r.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              v = Dv;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = MF;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = YF;
              break;
            case Kg:
            case Gg:
            case qg:
              v = LF;
              break;
            case Yg:
              v = XF;
              break;
            case "scroll":
              v = AF;
              break;
            case "wheel":
              v = JF;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = zF;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = Iv;
          }
          var y = (t & 4) !== 0, f = !y && e2 === "scroll", m = y ? p !== null ? p + "Capture" : null : p;
          y = [];
          for (var h = l, E; h !== null; ) {
            E = h;
            var C = E.stateNode;
            if (E.tag === 5 && C !== null && (E = C, m !== null && (C = cs(h, m), C != null && y.push(vs(h, C, E)))), f)
              break;
            h = h.return;
          }
          0 < y.length && (p = new v(p, g, null, r, c), d.push({ event: p, listeners: y }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (p = e2 === "mouseover" || e2 === "pointerover", v = e2 === "mouseout" || e2 === "pointerout", p && (t & 16) === 0 && (g = r.relatedTarget || r.fromElement) && (Mo(g) || g[Ni]))
            break e;
          if ((v || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (g = r.relatedTarget || r.toElement, v = l, g = g ? Mo(g) : null, g !== null && (f = Uo(g), g !== f || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = l), v !== g)) {
            if (y = Dv, C = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e2 === "pointerout" || e2 === "pointerover") && (y = Iv, C = "onPointerLeave", m = "onPointerEnter", h = "pointer"), f = v == null ? p : yi(v), E = g == null ? p : yi(g), p = new y(C, h + "leave", v, r, c), p.target = f, p.relatedTarget = E, C = null, Mo(c) === l && (y = new y(m, h + "enter", g, r, c), y.target = E, y.relatedTarget = f, C = y), f = C, v && g)
              t: {
                for (y = v, m = g, h = 0, E = y; E; E = di(E))
                  h++;
                for (E = 0, C = m; C; C = di(C))
                  E++;
                for (; 0 < h - E; )
                  y = di(y), h--;
                for (; 0 < E - h; )
                  m = di(m), E--;
                for (; h--; ) {
                  if (y === m || m !== null && y === m.alternate)
                    break t;
                  y = di(y), m = di(m);
                }
                y = null;
              }
            else
              y = null;
            v !== null && Wv(d, p, v, y, false), g !== null && f !== null && Wv(d, f, g, y, true);
          }
        }
        e: {
          if (p = l ? yi(l) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file")
            var x = ax;
          else if (Pv(p))
            if (ny)
              x = cx;
            else {
              x = ux;
              var S = sx;
            }
          else
            (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = lx);
          if (x && (x = x(e2, l))) {
            ry(d, x, r, c);
            break e;
          }
          S && S(e2, p, l), e2 === "focusout" && (S = p._wrapperState) && S.controlled && p.type === "number" && nd(p, "number", p.value);
        }
        switch (S = l ? yi(l) : window, e2) {
          case "focusin":
            (Pv(S) || S.contentEditable === "true") && (gi = S, vd = l, rs = null);
            break;
          case "focusout":
            rs = vd = gi = null;
            break;
          case "mousedown":
            gd = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gd = false, Ov(d, r, c);
            break;
          case "selectionchange":
            if (px)
              break;
          case "keydown":
          case "keyup":
            Ov(d, r, c);
        }
        var F;
        if (up)
          e: {
            switch (e2) {
              case "compositionstart":
                var w = "onCompositionStart";
                break e;
              case "compositionend":
                w = "onCompositionEnd";
                break e;
              case "compositionupdate":
                w = "onCompositionUpdate";
                break e;
            }
            w = void 0;
          }
        else
          vi ? ey(e2, r) && (w = "onCompositionEnd") : e2 === "keydown" && r.keyCode === 229 && (w = "onCompositionStart");
        w && (Jg && r.locale !== "ko" && (vi || w !== "onCompositionStart" ? w === "onCompositionEnd" && vi && (F = Zg()) : (zn = c, ip = "value" in zn ? zn.value : zn.textContent, vi = true)), S = Ku(l, w), 0 < S.length && (w = new Tv(w, e2, null, r, c), d.push({ event: w, listeners: S }), F ? w.data = F : (F = ty(r), F !== null && (w.data = F)))), (F = tx ? rx(e2, r) : nx(e2, r)) && (l = Ku(l, "onBeforeInput"), 0 < l.length && (c = new Tv("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: l }), c.data = F));
      }
      sy(d, t);
    });
  }
  function vs(e2, t, r) {
    return { instance: e2, listener: t, currentTarget: r };
  }
  function Ku(e2, t) {
    for (var r = t + "Capture", n = []; e2 !== null; ) {
      var o = e2, i = o.stateNode;
      o.tag === 5 && i !== null && (o = i, i = cs(e2, r), i != null && n.unshift(vs(e2, i, o)), i = cs(e2, t), i != null && n.push(vs(e2, i, o))), e2 = e2.return;
    }
    return n;
  }
  function di(e2) {
    if (e2 === null)
      return null;
    do
      e2 = e2.return;
    while (e2 && e2.tag !== 5);
    return e2 || null;
  }
  function Wv(e2, t, r, n, o) {
    for (var i = t._reactName, a = []; r !== null && r !== n; ) {
      var s = r, u = s.alternate, l = s.stateNode;
      if (u !== null && u === n)
        break;
      s.tag === 5 && l !== null && (s = l, o ? (u = cs(r, i), u != null && a.unshift(vs(r, u, s))) : o || (u = cs(r, i), u != null && a.push(vs(r, u, s)))), r = r.return;
    }
    a.length !== 0 && e2.push({ event: t, listeners: a });
  }
  function Gu() {
  }
  var Wf = null, Uf = null;
  function fy(e2, t) {
    switch (e2) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!t.autoFocus;
    }
    return false;
  }
  function yd(e2, t) {
    return e2 === "textarea" || e2 === "option" || e2 === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Uv = typeof setTimeout == "function" ? setTimeout : void 0, mx = typeof clearTimeout == "function" ? clearTimeout : void 0;
  function lp(e2) {
    e2.nodeType === 1 ? e2.textContent = "" : e2.nodeType === 9 && (e2 = e2.body, e2 != null && (e2.textContent = ""));
  }
  function bi(e2) {
    for (; e2 != null; e2 = e2.nextSibling) {
      var t = e2.nodeType;
      if (t === 1 || t === 3)
        break;
    }
    return e2;
  }
  function jv(e2) {
    e2 = e2.previousSibling;
    for (var t = 0; e2; ) {
      if (e2.nodeType === 8) {
        var r = e2.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0)
            return e2;
          t--;
        } else
          r === "/$" && t++;
      }
      e2 = e2.previousSibling;
    }
    return null;
  }
  var jf = 0;
  function hx(e2) {
    return { $$typeof: qd, toString: e2, valueOf: e2 };
  }
  var gl = Math.random().toString(36).slice(2), Hn = "__reactFiber$" + gl, qu = "__reactProps$" + gl, Ni = "__reactContainer$" + gl, $v = "__reactEvents$" + gl;
  function Mo(e2) {
    var t = e2[Hn];
    if (t)
      return t;
    for (var r = e2.parentNode; r; ) {
      if (t = r[Ni] || r[Hn]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
          for (e2 = jv(e2); e2 !== null; ) {
            if (r = e2[Hn])
              return r;
            e2 = jv(e2);
          }
        return t;
      }
      e2 = r, r = e2.parentNode;
    }
    return null;
  }
  function Fs(e2) {
    return e2 = e2[Hn] || e2[Ni], !e2 || e2.tag !== 5 && e2.tag !== 6 && e2.tag !== 13 && e2.tag !== 3 ? null : e2;
  }
  function yi(e2) {
    if (e2.tag === 5 || e2.tag === 6)
      return e2.stateNode;
    throw Error(D(33));
  }
  function yl(e2) {
    return e2[qu] || null;
  }
  function dy(e2) {
    var t = e2[$v];
    return t === void 0 && (t = e2[$v] = /* @__PURE__ */ new Set()), t;
  }
  var Ed = [], Ei = -1;
  function to(e2) {
    return { current: e2 };
  }
  function Ie(e2) {
    0 > Ei || (e2.current = Ed[Ei], Ed[Ei] = null, Ei--);
  }
  function Ue(e2, t) {
    Ei++, Ed[Ei] = e2.current, e2.current = t;
  }
  var Zn = {}, St = to(Zn), qt = to(false), Oo = Zn;
  function Ai(e2, t) {
    var r = e2.type.contextTypes;
    if (!r)
      return Zn;
    var n = e2.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
      return n.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in r)
      o[i] = t[i];
    return n && (e2 = e2.stateNode, e2.__reactInternalMemoizedUnmaskedChildContext = t, e2.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Yt(e2) {
    return e2 = e2.childContextTypes, e2 != null;
  }
  function Yu() {
    Ie(qt), Ie(St);
  }
  function Kv(e2, t, r) {
    if (St.current !== Zn)
      throw Error(D(168));
    Ue(St, t), Ue(qt, r);
  }
  function py(e2, t, r) {
    var n = e2.stateNode;
    if (e2 = t.childContextTypes, typeof n.getChildContext != "function")
      return r;
    n = n.getChildContext();
    for (var o in n)
      if (!(o in e2))
        throw Error(D(108, Si(t) || "Unknown", o));
    return Ae({}, r, n);
  }
  function Bu(e2) {
    return e2 = (e2 = e2.stateNode) && e2.__reactInternalMemoizedMergedChildContext || Zn, Oo = St.current, Ue(St, e2), Ue(qt, qt.current), true;
  }
  function Gv(e2, t, r) {
    var n = e2.stateNode;
    if (!n)
      throw Error(D(169));
    r ? (e2 = py(e2, t, Oo), n.__reactInternalMemoizedMergedChildContext = e2, Ie(qt), Ie(St), Ue(St, e2)) : Ie(qt), Ue(qt, r);
  }
  var cp = null, Lo = null, vx = it.unstable_runWithPriority, fp = it.unstable_scheduleCallback, Cd = it.unstable_cancelCallback, gx = it.unstable_shouldYield, qv = it.unstable_requestPaint, Sd = it.unstable_now, yx = it.unstable_getCurrentPriorityLevel, El = it.unstable_ImmediatePriority, my = it.unstable_UserBlockingPriority, hy = it.unstable_NormalPriority, vy = it.unstable_LowPriority, gy = it.unstable_IdlePriority, $f = {}, Ex = qv !== void 0 ? qv : function() {
  }, mn = null, Nu = null, Kf = false, Yv = Sd(), Et = 1e4 > Yv ? Sd : function() {
    return Sd() - Yv;
  };
  function Pi() {
    switch (yx()) {
      case El:
        return 99;
      case my:
        return 98;
      case hy:
        return 97;
      case vy:
        return 96;
      case gy:
        return 95;
      default:
        throw Error(D(332));
    }
  }
  function yy(e2) {
    switch (e2) {
      case 99:
        return El;
      case 98:
        return my;
      case 97:
        return hy;
      case 96:
        return vy;
      case 95:
        return gy;
      default:
        throw Error(D(332));
    }
  }
  function zo(e2, t) {
    return e2 = yy(e2), vx(e2, t);
  }
  function gs(e2, t, r) {
    return e2 = yy(e2), fp(e2, t, r);
  }
  function Jr() {
    if (Nu !== null) {
      var e2 = Nu;
      Nu = null, Cd(e2);
    }
    Ey();
  }
  function Ey() {
    if (!Kf && mn !== null) {
      Kf = true;
      var e2 = 0;
      try {
        var t = mn;
        zo(99, function() {
          for (; e2 < t.length; e2++) {
            var r = t[e2];
            do
              r = r(true);
            while (r !== null);
          }
        }), mn = null;
      } catch (r) {
        throw mn !== null && (mn = mn.slice(e2 + 1)), fp(El, Jr), r;
      } finally {
        Kf = false;
      }
    }
  }
  var Cx = Wo.ReactCurrentBatchConfig;
  function Ir(e2, t) {
    if (e2 && e2.defaultProps) {
      t = Ae({}, t), e2 = e2.defaultProps;
      for (var r in e2)
        t[r] === void 0 && (t[r] = e2[r]);
      return t;
    }
    return t;
  }
  var Qu = to(null), Xu = null, Ci = null, Zu = null;
  function dp() {
    Zu = Ci = Xu = null;
  }
  function pp(e2) {
    var t = Qu.current;
    Ie(Qu), e2.type._context._currentValue = t;
  }
  function Cy(e2, t) {
    for (; e2 !== null; ) {
      var r = e2.alternate;
      if ((e2.childLanes & t) === t) {
        if (r === null || (r.childLanes & t) === t)
          break;
        r.childLanes |= t;
      } else
        e2.childLanes |= t, r !== null && (r.childLanes |= t);
      e2 = e2.return;
    }
  }
  function wi(e2, t) {
    Xu = e2, Zu = Ci = null, e2 = e2.dependencies, e2 !== null && e2.firstContext !== null && ((e2.lanes & t) !== 0 && (Rr = true), e2.firstContext = null);
  }
  function Cr(e2, t) {
    if (Zu !== e2 && t !== false && t !== 0)
      if ((typeof t != "number" || t === 1073741823) && (Zu = e2, t = 1073741823), t = { context: e2, observedBits: t, next: null }, Ci === null) {
        if (Xu === null)
          throw Error(D(308));
        Ci = t, Xu.dependencies = { lanes: 0, firstContext: t, responders: null };
      } else
        Ci = Ci.next = t;
    return e2._currentValue;
  }
  var Ln = false;
  function mp(e2) {
    e2.updateQueue = { baseState: e2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
  }
  function Sy(e2, t) {
    e2 = e2.updateQueue, t.updateQueue === e2 && (t.updateQueue = { baseState: e2.baseState, firstBaseUpdate: e2.firstBaseUpdate, lastBaseUpdate: e2.lastBaseUpdate, shared: e2.shared, effects: e2.effects });
  }
  function $n(e2, t) {
    return { eventTime: e2, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Kn(e2, t) {
    if (e2 = e2.updateQueue, e2 !== null) {
      e2 = e2.shared;
      var r = e2.pending;
      r === null ? t.next = t : (t.next = r.next, r.next = t), e2.pending = t;
    }
  }
  function Qv(e2, t) {
    var r = e2.updateQueue, n = e2.alternate;
    if (n !== null && (n = n.updateQueue, r === n)) {
      var o = null, i = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var a = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
          i === null ? o = i = a : i = i.next = a, r = r.next;
        } while (r !== null);
        i === null ? o = i = t : i = i.next = t;
      } else
        o = i = t;
      r = { baseState: n.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: n.shared, effects: n.effects }, e2.updateQueue = r;
      return;
    }
    e2 = r.lastBaseUpdate, e2 === null ? r.firstBaseUpdate = t : e2.next = t, r.lastBaseUpdate = t;
  }
  function ys(e2, t, r, n) {
    var o = e2.updateQueue;
    Ln = false;
    var i = o.firstBaseUpdate, a = o.lastBaseUpdate, s = o.shared.pending;
    if (s !== null) {
      o.shared.pending = null;
      var u = s, l = u.next;
      u.next = null, a === null ? i = l : a.next = l, a = u;
      var c = e2.alternate;
      if (c !== null) {
        c = c.updateQueue;
        var d = c.lastBaseUpdate;
        d !== a && (d === null ? c.firstBaseUpdate = l : d.next = l, c.lastBaseUpdate = u);
      }
    }
    if (i !== null) {
      d = o.baseState, a = 0, c = l = u = null;
      do {
        s = i.lane;
        var p = i.eventTime;
        if ((n & s) === s) {
          c !== null && (c = c.next = { eventTime: p, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
          e: {
            var v = e2, g = i;
            switch (s = t, p = r, g.tag) {
              case 1:
                if (v = g.payload, typeof v == "function") {
                  d = v.call(p, d, s);
                  break e;
                }
                d = v;
                break e;
              case 3:
                v.flags = v.flags & -4097 | 64;
              case 0:
                if (v = g.payload, s = typeof v == "function" ? v.call(p, d, s) : v, s == null)
                  break e;
                d = Ae({}, d, s);
                break e;
              case 2:
                Ln = true;
            }
          }
          i.callback !== null && (e2.flags |= 32, s = o.effects, s === null ? o.effects = [i] : s.push(i));
        } else
          p = { eventTime: p, lane: s, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, c === null ? (l = c = p, u = d) : c = c.next = p, a |= s;
        if (i = i.next, i === null) {
          if (s = o.shared.pending, s === null)
            break;
          i = s.next, s.next = null, o.lastBaseUpdate = s, o.shared.pending = null;
        }
      } while (1);
      c === null && (u = d), o.baseState = u, o.firstBaseUpdate = l, o.lastBaseUpdate = c, bs |= a, e2.lanes = a, e2.memoizedState = d;
    }
  }
  function Xv(e2, t, r) {
    if (e2 = t.effects, t.effects = null, e2 !== null)
      for (t = 0; t < e2.length; t++) {
        var n = e2[t], o = n.callback;
        if (o !== null) {
          if (n.callback = null, n = r, typeof o != "function")
            throw Error(D(191, o));
          o.call(n);
        }
      }
  }
  var _y = new cl.Component().refs;
  function Ju(e2, t, r, n) {
    t = e2.memoizedState, r = r(n, t), r = r == null ? t : Ae({}, t, r), e2.memoizedState = r, e2.lanes === 0 && (e2.updateQueue.baseState = r);
  }
  var Cl = { isMounted: function(e2) {
    return (e2 = e2._reactInternals) ? Uo(e2) === e2 : false;
  }, enqueueSetState: function(e2, t, r) {
    e2 = e2._reactInternals;
    var n = ur(), o = Gn(e2), i = $n(n, o);
    i.payload = t, r != null && (i.callback = r), Kn(e2, i), qn(e2, o, n);
  }, enqueueReplaceState: function(e2, t, r) {
    e2 = e2._reactInternals;
    var n = ur(), o = Gn(e2), i = $n(n, o);
    i.tag = 1, i.payload = t, r != null && (i.callback = r), Kn(e2, i), qn(e2, o, n);
  }, enqueueForceUpdate: function(e2, t) {
    e2 = e2._reactInternals;
    var r = ur(), n = Gn(e2), o = $n(r, n);
    o.tag = 2, t != null && (o.callback = t), Kn(e2, o), qn(e2, n, r);
  } };
  function Zv(e2, t, r, n, o, i, a) {
    return e2 = e2.stateNode, typeof e2.shouldComponentUpdate == "function" ? e2.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !hs(r, n) || !hs(o, i) : true;
  }
  function Fy(e2, t, r) {
    var n = false, o = Zn, i = t.contextType;
    return typeof i == "object" && i !== null ? i = Cr(i) : (o = Yt(t) ? Oo : St.current, n = t.contextTypes, i = (n = n != null) ? Ai(e2, o) : Zn), t = new t(r, i), e2.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Cl, e2.stateNode = t, t._reactInternals = e2, n && (e2 = e2.stateNode, e2.__reactInternalMemoizedUnmaskedChildContext = o, e2.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Jv(e2, t, r, n) {
    e2 = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e2 && Cl.enqueueReplaceState(t, t.state, null);
  }
  function _d(e2, t, r, n) {
    var o = e2.stateNode;
    o.props = r, o.state = e2.memoizedState, o.refs = _y, mp(e2);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Cr(i) : (i = Yt(t) ? Oo : St.current, o.context = Ai(e2, i)), ys(e2, r, o, n), o.state = e2.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ju(e2, t, i, r), o.state = e2.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Cl.enqueueReplaceState(o, o.state, null), ys(e2, r, o, n), o.state = e2.memoizedState), typeof o.componentDidMount == "function" && (e2.flags |= 4);
  }
  var wu = Array.isArray;
  function Oa(e2, t, r) {
    if (e2 = r.ref, e2 !== null && typeof e2 != "function" && typeof e2 != "object") {
      if (r._owner) {
        if (r = r._owner, r) {
          if (r.tag !== 1)
            throw Error(D(309));
          var n = r.stateNode;
        }
        if (!n)
          throw Error(D(147, e2));
        var o = "" + e2;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
          var a = n.refs;
          a === _y && (a = n.refs = {}), i === null ? delete a[o] : a[o] = i;
        }, t._stringRef = o, t);
      }
      if (typeof e2 != "string")
        throw Error(D(284));
      if (!r._owner)
        throw Error(D(290, e2));
    }
    return e2;
  }
  function ku(e2, t) {
    if (e2.type !== "textarea")
      throw Error(D(31, Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t));
  }
  function xy(e2) {
    function t(f, m) {
      if (e2) {
        var h = f.lastEffect;
        h !== null ? (h.nextEffect = m, f.lastEffect = m) : f.firstEffect = f.lastEffect = m, m.nextEffect = null, m.flags = 8;
      }
    }
    function r(f, m) {
      if (!e2)
        return null;
      for (; m !== null; )
        t(f, m), m = m.sibling;
      return null;
    }
    function n(f, m) {
      for (f = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? f.set(m.key, m) : f.set(m.index, m), m = m.sibling;
      return f;
    }
    function o(f, m) {
      return f = eo(f, m), f.index = 0, f.sibling = null, f;
    }
    function i(f, m, h) {
      return f.index = h, e2 ? (h = f.alternate, h !== null ? (h = h.index, h < m ? (f.flags = 2, m) : h) : (f.flags = 2, m)) : m;
    }
    function a(f) {
      return e2 && f.alternate === null && (f.flags = 2), f;
    }
    function s(f, m, h, E) {
      return m === null || m.tag !== 6 ? (m = Xf(h, f.mode, E), m.return = f, m) : (m = o(m, h), m.return = f, m);
    }
    function u(f, m, h, E) {
      return m !== null && m.elementType === h.type ? (E = o(m, h.props), E.ref = Oa(f, m, h), E.return = f, E) : (E = Hu(h.type, h.key, h.props, null, f.mode, E), E.ref = Oa(f, m, h), E.return = f, E);
    }
    function l(f, m, h, E) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== h.containerInfo || m.stateNode.implementation !== h.implementation ? (m = Zf(h, f.mode, E), m.return = f, m) : (m = o(m, h.children || []), m.return = f, m);
    }
    function c(f, m, h, E, C) {
      return m === null || m.tag !== 7 ? (m = Ii(h, f.mode, E, C), m.return = f, m) : (m = o(m, h), m.return = f, m);
    }
    function d(f, m, h) {
      if (typeof m == "string" || typeof m == "number")
        return m = Xf("" + m, f.mode, h), m.return = f, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case $a:
            return h = Hu(m.type, m.key, m.props, null, f.mode, h), h.ref = Oa(f, null, m), h.return = f, h;
          case Ao:
            return m = Zf(m, f.mode, h), m.return = f, m;
        }
        if (wu(m) || Pa(m))
          return m = Ii(m, f.mode, h, null), m.return = f, m;
        ku(f, m);
      }
      return null;
    }
    function p(f, m, h, E) {
      var C = m !== null ? m.key : null;
      if (typeof h == "string" || typeof h == "number")
        return C !== null ? null : s(f, m, "" + h, E);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case $a:
            return h.key === C ? h.type === On ? c(f, m, h.props.children, E, C) : u(f, m, h, E) : null;
          case Ao:
            return h.key === C ? l(f, m, h, E) : null;
        }
        if (wu(h) || Pa(h))
          return C !== null ? null : c(f, m, h, E, null);
        ku(f, h);
      }
      return null;
    }
    function v(f, m, h, E, C) {
      if (typeof E == "string" || typeof E == "number")
        return f = f.get(h) || null, s(m, f, "" + E, C);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case $a:
            return f = f.get(E.key === null ? h : E.key) || null, E.type === On ? c(m, f, E.props.children, C, E.key) : u(m, f, E, C);
          case Ao:
            return f = f.get(E.key === null ? h : E.key) || null, l(m, f, E, C);
        }
        if (wu(E) || Pa(E))
          return f = f.get(h) || null, c(m, f, E, C, null);
        ku(m, E);
      }
      return null;
    }
    function g(f, m, h, E) {
      for (var C = null, x = null, S = m, F = m = 0, w = null; S !== null && F < h.length; F++) {
        S.index > F ? (w = S, S = null) : w = S.sibling;
        var k = p(f, S, h[F], E);
        if (k === null) {
          S === null && (S = w);
          break;
        }
        e2 && S && k.alternate === null && t(f, S), m = i(k, m, F), x === null ? C = k : x.sibling = k, x = k, S = w;
      }
      if (F === h.length)
        return r(f, S), C;
      if (S === null) {
        for (; F < h.length; F++)
          S = d(f, h[F], E), S !== null && (m = i(S, m, F), x === null ? C = S : x.sibling = S, x = S);
        return C;
      }
      for (S = n(f, S); F < h.length; F++)
        w = v(S, f, F, h[F], E), w !== null && (e2 && w.alternate !== null && S.delete(w.key === null ? F : w.key), m = i(w, m, F), x === null ? C = w : x.sibling = w, x = w);
      return e2 && S.forEach(function(V) {
        return t(f, V);
      }), C;
    }
    function y(f, m, h, E) {
      var C = Pa(h);
      if (typeof C != "function")
        throw Error(D(150));
      if (h = C.call(h), h == null)
        throw Error(D(151));
      for (var x = C = null, S = m, F = m = 0, w = null, k = h.next(); S !== null && !k.done; F++, k = h.next()) {
        S.index > F ? (w = S, S = null) : w = S.sibling;
        var V = p(f, S, k.value, E);
        if (V === null) {
          S === null && (S = w);
          break;
        }
        e2 && S && V.alternate === null && t(f, S), m = i(V, m, F), x === null ? C = V : x.sibling = V, x = V, S = w;
      }
      if (k.done)
        return r(f, S), C;
      if (S === null) {
        for (; !k.done; F++, k = h.next())
          k = d(f, k.value, E), k !== null && (m = i(k, m, F), x === null ? C = k : x.sibling = k, x = k);
        return C;
      }
      for (S = n(f, S); !k.done; F++, k = h.next())
        k = v(S, f, F, k.value, E), k !== null && (e2 && k.alternate !== null && S.delete(k.key === null ? F : k.key), m = i(k, m, F), x === null ? C = k : x.sibling = k, x = k);
      return e2 && S.forEach(function(re) {
        return t(f, re);
      }), C;
    }
    return function(f, m, h, E) {
      var C = typeof h == "object" && h !== null && h.type === On && h.key === null;
      C && (h = h.props.children);
      var x = typeof h == "object" && h !== null;
      if (x)
        switch (h.$$typeof) {
          case $a:
            e: {
              for (x = h.key, C = m; C !== null; ) {
                if (C.key === x) {
                  switch (C.tag) {
                    case 7:
                      if (h.type === On) {
                        r(f, C.sibling), m = o(C, h.props.children), m.return = f, f = m;
                        break e;
                      }
                      break;
                    default:
                      if (C.elementType === h.type) {
                        r(f, C.sibling), m = o(C, h.props), m.ref = Oa(f, C, h), m.return = f, f = m;
                        break e;
                      }
                  }
                  r(f, C);
                  break;
                } else
                  t(f, C);
                C = C.sibling;
              }
              h.type === On ? (m = Ii(h.props.children, f.mode, E, h.key), m.return = f, f = m) : (E = Hu(h.type, h.key, h.props, null, f.mode, E), E.ref = Oa(f, m, h), E.return = f, f = E);
            }
            return a(f);
          case Ao:
            e: {
              for (C = h.key; m !== null; ) {
                if (m.key === C)
                  if (m.tag === 4 && m.stateNode.containerInfo === h.containerInfo && m.stateNode.implementation === h.implementation) {
                    r(f, m.sibling), m = o(m, h.children || []), m.return = f, f = m;
                    break e;
                  } else {
                    r(f, m);
                    break;
                  }
                else
                  t(f, m);
                m = m.sibling;
              }
              m = Zf(h, f.mode, E), m.return = f, f = m;
            }
            return a(f);
        }
      if (typeof h == "string" || typeof h == "number")
        return h = "" + h, m !== null && m.tag === 6 ? (r(f, m.sibling), m = o(m, h), m.return = f, f = m) : (r(f, m), m = Xf(h, f.mode, E), m.return = f, f = m), a(f);
      if (wu(h))
        return g(f, m, h, E);
      if (Pa(h))
        return y(f, m, h, E);
      if (x && ku(f, h), typeof h > "u" && !C)
        switch (f.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(D(152, Si(f.type) || "Component"));
        }
      return r(f, m);
    };
  }
  var el = xy(true), by = xy(false), xs = {}, Xr = to(xs), Es = to(xs), Cs = to(xs);
  function Bo(e2) {
    if (e2 === xs)
      throw Error(D(174));
    return e2;
  }
  function Fd(e2, t) {
    switch (Ue(Cs, t), Ue(Es, e2), Ue(Xr, xs), e2 = t.nodeType, e2) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : sd(null, "");
        break;
      default:
        e2 = e2 === 8 ? t.parentNode : t, t = e2.namespaceURI || null, e2 = e2.tagName, t = sd(t, e2);
    }
    Ie(Xr), Ue(Xr, t);
  }
  function Mi() {
    Ie(Xr), Ie(Es), Ie(Cs);
  }
  function eg(e2) {
    Bo(Cs.current);
    var t = Bo(Xr.current), r = sd(t, e2.type);
    t !== r && (Ue(Es, e2), Ue(Xr, r));
  }
  function hp(e2) {
    Es.current === e2 && (Ie(Xr), Ie(Es));
  }
  var We = to(0);
  function tl(e2) {
    for (var t = e2; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!"))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 64) !== 0)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e2)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e2)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var vn = null, Vn = null, Zr = false;
  function wy(e2, t) {
    var r = yr(5, null, null, 0);
    r.elementType = "DELETED", r.type = "DELETED", r.stateNode = t, r.return = e2, r.flags = 8, e2.lastEffect !== null ? (e2.lastEffect.nextEffect = r, e2.lastEffect = r) : e2.firstEffect = e2.lastEffect = r;
  }
  function tg(e2, t) {
    switch (e2.tag) {
      case 5:
        var r = e2.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e2.stateNode = t, true) : false;
      case 6:
        return t = e2.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e2.stateNode = t, true) : false;
      case 13:
        return false;
      default:
        return false;
    }
  }
  function xd(e2) {
    if (Zr) {
      var t = Vn;
      if (t) {
        var r = t;
        if (!tg(e2, t)) {
          if (t = bi(r.nextSibling), !t || !tg(e2, t)) {
            e2.flags = e2.flags & -1025 | 2, Zr = false, vn = e2;
            return;
          }
          wy(vn, r);
        }
        vn = e2, Vn = bi(t.firstChild);
      } else
        e2.flags = e2.flags & -1025 | 2, Zr = false, vn = e2;
    }
  }
  function rg(e2) {
    for (e2 = e2.return; e2 !== null && e2.tag !== 5 && e2.tag !== 3 && e2.tag !== 13; )
      e2 = e2.return;
    vn = e2;
  }
  function Du(e2) {
    if (e2 !== vn)
      return false;
    if (!Zr)
      return rg(e2), Zr = true, false;
    var t = e2.type;
    if (e2.tag !== 5 || t !== "head" && t !== "body" && !yd(t, e2.memoizedProps))
      for (t = Vn; t; )
        wy(e2, t), t = bi(t.nextSibling);
    if (rg(e2), e2.tag === 13) {
      if (e2 = e2.memoizedState, e2 = e2 !== null ? e2.dehydrated : null, !e2)
        throw Error(D(317));
      e: {
        for (e2 = e2.nextSibling, t = 0; e2; ) {
          if (e2.nodeType === 8) {
            var r = e2.data;
            if (r === "/$") {
              if (t === 0) {
                Vn = bi(e2.nextSibling);
                break e;
              }
              t--;
            } else
              r !== "$" && r !== "$!" && r !== "$?" || t++;
          }
          e2 = e2.nextSibling;
        }
        Vn = null;
      }
    } else
      Vn = vn ? bi(e2.stateNode.nextSibling) : null;
    return true;
  }
  function Gf() {
    Vn = vn = null, Zr = false;
  }
  var ki = [];
  function vp() {
    for (var e2 = 0; e2 < ki.length; e2++)
      ki[e2]._workInProgressVersionPrimary = null;
    ki.length = 0;
  }
  var ns = Wo.ReactCurrentDispatcher, Er = Wo.ReactCurrentBatchConfig, Ss = 0, Ke = null, yt = null, ft = null, rl = false, os = false;
  function Kt() {
    throw Error(D(321));
  }
  function gp(e2, t) {
    if (t === null)
      return false;
    for (var r = 0; r < t.length && r < e2.length; r++)
      if (!gr(e2[r], t[r]))
        return false;
    return true;
  }
  function yp(e2, t, r, n, o, i) {
    if (Ss = i, Ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ns.current = e2 === null || e2.memoizedState === null ? _x : Fx, e2 = r(n, o), os) {
      i = 0;
      do {
        if (os = false, !(25 > i))
          throw Error(D(301));
        i += 1, ft = yt = null, t.updateQueue = null, ns.current = xx, e2 = r(n, o);
      } while (os);
    }
    if (ns.current = al, t = yt !== null && yt.next !== null, Ss = 0, ft = yt = Ke = null, rl = false, t)
      throw Error(D(300));
    return e2;
  }
  function No() {
    var e2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ft === null ? Ke.memoizedState = ft = e2 : ft = ft.next = e2, ft;
  }
  function jo() {
    if (yt === null) {
      var e2 = Ke.alternate;
      e2 = e2 !== null ? e2.memoizedState : null;
    } else
      e2 = yt.next;
    var t = ft === null ? Ke.memoizedState : ft.next;
    if (t !== null)
      ft = t, yt = e2;
    else {
      if (e2 === null)
        throw Error(D(310));
      yt = e2, e2 = { memoizedState: yt.memoizedState, baseState: yt.baseState, baseQueue: yt.baseQueue, queue: yt.queue, next: null }, ft === null ? Ke.memoizedState = ft = e2 : ft = ft.next = e2;
    }
    return ft;
  }
  function Yr(e2, t) {
    return typeof t == "function" ? t(e2) : t;
  }
  function za(e2) {
    var t = jo(), r = t.queue;
    if (r === null)
      throw Error(D(311));
    r.lastRenderedReducer = e2;
    var n = yt, o = n.baseQueue, i = r.pending;
    if (i !== null) {
      if (o !== null) {
        var a = o.next;
        o.next = i.next, i.next = a;
      }
      n.baseQueue = o = i, r.pending = null;
    }
    if (o !== null) {
      o = o.next, n = n.baseState;
      var s = a = i = null, u = o;
      do {
        var l = u.lane;
        if ((Ss & l) === l)
          s !== null && (s = s.next = { lane: 0, action: u.action, eagerReducer: u.eagerReducer, eagerState: u.eagerState, next: null }), n = u.eagerReducer === e2 ? u.eagerState : e2(n, u.action);
        else {
          var c = { lane: l, action: u.action, eagerReducer: u.eagerReducer, eagerState: u.eagerState, next: null };
          s === null ? (a = s = c, i = n) : s = s.next = c, Ke.lanes |= l, bs |= l;
        }
        u = u.next;
      } while (u !== null && u !== o);
      s === null ? i = n : s.next = a, gr(n, t.memoizedState) || (Rr = true), t.memoizedState = n, t.baseState = i, t.baseQueue = s, r.lastRenderedState = n;
    }
    return [t.memoizedState, r.dispatch];
  }
  function Ha(e2) {
    var t = jo(), r = t.queue;
    if (r === null)
      throw Error(D(311));
    r.lastRenderedReducer = e2;
    var n = r.dispatch, o = r.pending, i = t.memoizedState;
    if (o !== null) {
      r.pending = null;
      var a = o = o.next;
      do
        i = e2(i, a.action), a = a.next;
      while (a !== o);
      gr(i, t.memoizedState) || (Rr = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
    }
    return [i, n];
  }
  function ng(e2, t, r) {
    var n = t._getVersion;
    n = n(t._source);
    var o = t._workInProgressVersionPrimary;
    if (o !== null ? e2 = o === n : (e2 = e2.mutableReadLanes, (e2 = (Ss & e2) === e2) && (t._workInProgressVersionPrimary = n, ki.push(t))), e2)
      return r(t._source);
    throw ki.push(t), Error(D(350));
  }
  function ky(e2, t, r, n) {
    var o = Dt;
    if (o === null)
      throw Error(D(349));
    var i = t._getVersion, a = i(t._source), s = ns.current, u = s.useState(function() {
      return ng(o, t, r);
    }), l = u[1], c = u[0];
    u = ft;
    var d = e2.memoizedState, p = d.refs, v = p.getSnapshot, g = d.source;
    d = d.subscribe;
    var y = Ke;
    return e2.memoizedState = { refs: p, source: t, subscribe: n }, s.useEffect(function() {
      p.getSnapshot = r, p.setSnapshot = l;
      var f = i(t._source);
      if (!gr(a, f)) {
        f = r(t._source), gr(c, f) || (l(f), f = Gn(y), o.mutableReadLanes |= f & o.pendingLanes), f = o.mutableReadLanes, o.entangledLanes |= f;
        for (var m = o.entanglements, h = f; 0 < h; ) {
          var E = 31 - Xn(h), C = 1 << E;
          m[E] |= f, h &= ~C;
        }
      }
    }, [r, t, n]), s.useEffect(function() {
      return n(t._source, function() {
        var f = p.getSnapshot, m = p.setSnapshot;
        try {
          m(f(t._source));
          var h = Gn(y);
          o.mutableReadLanes |= h & o.pendingLanes;
        } catch (E) {
          m(function() {
            throw E;
          });
        }
      });
    }, [t, n]), gr(v, r) && gr(g, t) && gr(d, n) || (e2 = { pending: null, dispatch: null, lastRenderedReducer: Yr, lastRenderedState: c }, e2.dispatch = l = Sp.bind(null, Ke, e2), u.queue = e2, u.baseQueue = null, c = ng(o, t, r), u.memoizedState = u.baseState = c), c;
  }
  function Dy(e2, t, r) {
    var n = jo();
    return ky(n, e2, t, r);
  }
  function Va(e2) {
    var t = No();
    return typeof e2 == "function" && (e2 = e2()), t.memoizedState = t.baseState = e2, e2 = t.queue = { pending: null, dispatch: null, lastRenderedReducer: Yr, lastRenderedState: e2 }, e2 = e2.dispatch = Sp.bind(null, Ke, e2), [t.memoizedState, e2];
  }
  function nl(e2, t, r, n) {
    return e2 = { tag: e2, create: t, destroy: r, deps: n, next: null }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null }, Ke.updateQueue = t, t.lastEffect = e2.next = e2) : (r = t.lastEffect, r === null ? t.lastEffect = e2.next = e2 : (n = r.next, r.next = e2, e2.next = n, t.lastEffect = e2)), e2;
  }
  function og(e2) {
    var t = No();
    return e2 = { current: e2 }, t.memoizedState = e2;
  }
  function ol() {
    return jo().memoizedState;
  }
  function bd(e2, t, r, n) {
    var o = No();
    Ke.flags |= e2, o.memoizedState = nl(1 | t, r, void 0, n === void 0 ? null : n);
  }
  function Ep(e2, t, r, n) {
    var o = jo();
    n = n === void 0 ? null : n;
    var i = void 0;
    if (yt !== null) {
      var a = yt.memoizedState;
      if (i = a.destroy, n !== null && gp(n, a.deps)) {
        nl(t, r, i, n);
        return;
      }
    }
    Ke.flags |= e2, o.memoizedState = nl(1 | t, r, i, n);
  }
  function ig(e2, t) {
    return bd(516, 4, e2, t);
  }
  function il(e2, t) {
    return Ep(516, 4, e2, t);
  }
  function Ty(e2, t) {
    return Ep(4, 2, e2, t);
  }
  function Iy(e2, t) {
    if (typeof t == "function")
      return e2 = e2(), t(e2), function() {
        t(null);
      };
    if (t != null)
      return e2 = e2(), t.current = e2, function() {
        t.current = null;
      };
  }
  function Ry(e2, t, r) {
    return r = r != null ? r.concat([e2]) : null, Ep(4, 2, Iy.bind(null, t, e2), r);
  }
  function Cp() {
  }
  function Ay(e2, t) {
    var r = jo();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && gp(t, n[1]) ? n[0] : (r.memoizedState = [e2, t], e2);
  }
  function Py(e2, t) {
    var r = jo();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && gp(t, n[1]) ? n[0] : (e2 = e2(), r.memoizedState = [e2, t], e2);
  }
  function Sx(e2, t) {
    var r = Pi();
    zo(98 > r ? 98 : r, function() {
      e2(true);
    }), zo(97 < r ? 97 : r, function() {
      var n = Er.transition;
      Er.transition = 1;
      try {
        e2(false), t();
      } finally {
        Er.transition = n;
      }
    });
  }
  function Sp(e2, t, r) {
    var n = ur(), o = Gn(e2), i = { lane: o, action: r, eagerReducer: null, eagerState: null, next: null }, a = t.pending;
    if (a === null ? i.next = i : (i.next = a.next, a.next = i), t.pending = i, a = e2.alternate, e2 === Ke || a !== null && a === Ke)
      os = rl = true;
    else {
      if (e2.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null))
        try {
          var s = t.lastRenderedState, u = a(s, r);
          if (i.eagerReducer = a, i.eagerState = u, gr(u, s))
            return;
        } catch {
        } finally {
        }
      qn(e2, o, n);
    }
  }
  var al = { readContext: Cr, useCallback: Kt, useContext: Kt, useEffect: Kt, useImperativeHandle: Kt, useLayoutEffect: Kt, useMemo: Kt, useReducer: Kt, useRef: Kt, useState: Kt, useDebugValue: Kt, useDeferredValue: Kt, useTransition: Kt, useMutableSource: Kt, useOpaqueIdentifier: Kt, unstable_isNewReconciler: false }, _x = { readContext: Cr, useCallback: function(e2, t) {
    return No().memoizedState = [e2, t === void 0 ? null : t], e2;
  }, useContext: Cr, useEffect: ig, useImperativeHandle: function(e2, t, r) {
    return r = r != null ? r.concat([e2]) : null, bd(4, 2, Iy.bind(null, t, e2), r);
  }, useLayoutEffect: function(e2, t) {
    return bd(4, 2, e2, t);
  }, useMemo: function(e2, t) {
    var r = No();
    return t = t === void 0 ? null : t, e2 = e2(), r.memoizedState = [e2, t], e2;
  }, useReducer: function(e2, t, r) {
    var n = No();
    return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e2 = n.queue = { pending: null, dispatch: null, lastRenderedReducer: e2, lastRenderedState: t }, e2 = e2.dispatch = Sp.bind(null, Ke, e2), [n.memoizedState, e2];
  }, useRef: og, useState: Va, useDebugValue: Cp, useDeferredValue: function(e2) {
    var t = Va(e2), r = t[0], n = t[1];
    return ig(function() {
      var o = Er.transition;
      Er.transition = 1;
      try {
        n(e2);
      } finally {
        Er.transition = o;
      }
    }, [e2]), r;
  }, useTransition: function() {
    var e2 = Va(false), t = e2[0];
    return e2 = Sx.bind(null, e2[1]), og(e2), [e2, t];
  }, useMutableSource: function(e2, t, r) {
    var n = No();
    return n.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e2, subscribe: r }, ky(n, e2, t, r);
  }, useOpaqueIdentifier: function() {
    if (Zr) {
      var e2 = false, t = hx(function() {
        throw e2 || (e2 = true, r("r:" + (jf++).toString(36))), Error(D(355));
      }), r = Va(t)[1];
      return (Ke.mode & 2) === 0 && (Ke.flags |= 516, nl(5, function() {
        r("r:" + (jf++).toString(36));
      }, void 0, null)), t;
    }
    return t = "r:" + (jf++).toString(36), Va(t), t;
  }, unstable_isNewReconciler: false }, Fx = { readContext: Cr, useCallback: Ay, useContext: Cr, useEffect: il, useImperativeHandle: Ry, useLayoutEffect: Ty, useMemo: Py, useReducer: za, useRef: ol, useState: function() {
    return za(Yr);
  }, useDebugValue: Cp, useDeferredValue: function(e2) {
    var t = za(Yr), r = t[0], n = t[1];
    return il(function() {
      var o = Er.transition;
      Er.transition = 1;
      try {
        n(e2);
      } finally {
        Er.transition = o;
      }
    }, [e2]), r;
  }, useTransition: function() {
    var e2 = za(Yr)[0];
    return [ol().current, e2];
  }, useMutableSource: Dy, useOpaqueIdentifier: function() {
    return za(Yr)[0];
  }, unstable_isNewReconciler: false }, xx = { readContext: Cr, useCallback: Ay, useContext: Cr, useEffect: il, useImperativeHandle: Ry, useLayoutEffect: Ty, useMemo: Py, useReducer: Ha, useRef: ol, useState: function() {
    return Ha(Yr);
  }, useDebugValue: Cp, useDeferredValue: function(e2) {
    var t = Ha(Yr), r = t[0], n = t[1];
    return il(function() {
      var o = Er.transition;
      Er.transition = 1;
      try {
        n(e2);
      } finally {
        Er.transition = o;
      }
    }, [e2]), r;
  }, useTransition: function() {
    var e2 = Ha(Yr)[0];
    return [ol().current, e2];
  }, useMutableSource: Dy, useOpaqueIdentifier: function() {
    return Ha(Yr)[0];
  }, unstable_isNewReconciler: false }, bx = Wo.ReactCurrentOwner, Rr = false;
  function Gt(e2, t, r, n) {
    t.child = e2 === null ? by(t, null, r, n) : el(t, e2.child, r, n);
  }
  function ag(e2, t, r, n, o) {
    r = r.render;
    var i = t.ref;
    return wi(t, o), n = yp(e2, t, r, n, i, o), e2 !== null && !Rr ? (t.updateQueue = e2.updateQueue, t.flags &= -517, e2.lanes &= ~o, gn(e2, t, o)) : (t.flags |= 1, Gt(e2, t, n, o), t.child);
  }
  function sg(e2, t, r, n, o, i) {
    if (e2 === null) {
      var a = r.type;
      return typeof a == "function" && !kp(a) && a.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = a, My(e2, t, a, n, o, i)) : (e2 = Hu(r.type, null, n, t, t.mode, i), e2.ref = t.ref, e2.return = t, t.child = e2);
    }
    return a = e2.child, (o & i) === 0 && (o = a.memoizedProps, r = r.compare, r = r !== null ? r : hs, r(o, n) && e2.ref === t.ref) ? gn(e2, t, i) : (t.flags |= 1, e2 = eo(a, n), e2.ref = t.ref, e2.return = t, t.child = e2);
  }
  function My(e2, t, r, n, o, i) {
    if (e2 !== null && hs(e2.memoizedProps, n) && e2.ref === t.ref)
      if (Rr = false, (i & o) !== 0)
        (e2.flags & 16384) !== 0 && (Rr = true);
      else
        return t.lanes = e2.lanes, gn(e2, t, i);
    return wd(e2, t, r, n, i);
  }
  function qf(e2, t, r) {
    var n = t.pendingProps, o = n.children, i = e2 !== null ? e2.memoizedState : null;
    if (n.mode === "hidden" || n.mode === "unstable-defer-without-hiding")
      if ((t.mode & 4) === 0)
        t.memoizedState = { baseLanes: 0 }, Iu(t, r);
      else if ((r & 1073741824) !== 0)
        t.memoizedState = { baseLanes: 0 }, Iu(t, i !== null ? i.baseLanes : r);
      else
        return e2 = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e2 }, Iu(t, e2), null;
    else
      i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, Iu(t, n);
    return Gt(e2, t, o, r), t.child;
  }
  function By(e2, t) {
    var r = t.ref;
    (e2 === null && r !== null || e2 !== null && e2.ref !== r) && (t.flags |= 128);
  }
  function wd(e2, t, r, n, o) {
    var i = Yt(r) ? Oo : St.current;
    return i = Ai(t, i), wi(t, o), r = yp(e2, t, r, n, i, o), e2 !== null && !Rr ? (t.updateQueue = e2.updateQueue, t.flags &= -517, e2.lanes &= ~o, gn(e2, t, o)) : (t.flags |= 1, Gt(e2, t, r, o), t.child);
  }
  function ug(e2, t, r, n, o) {
    if (Yt(r)) {
      var i = true;
      Bu(t);
    } else
      i = false;
    if (wi(t, o), t.stateNode === null)
      e2 !== null && (e2.alternate = null, t.alternate = null, t.flags |= 2), Fy(t, r, n), _d(t, r, n, o), n = true;
    else if (e2 === null) {
      var a = t.stateNode, s = t.memoizedProps;
      a.props = s;
      var u = a.context, l = r.contextType;
      typeof l == "object" && l !== null ? l = Cr(l) : (l = Yt(r) ? Oo : St.current, l = Ai(t, l));
      var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
      d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || u !== l) && Jv(t, a, n, l), Ln = false;
      var p = t.memoizedState;
      a.state = p, ys(t, n, a, o), u = t.memoizedState, s !== n || p !== u || qt.current || Ln ? (typeof c == "function" && (Ju(t, r, c, n), u = t.memoizedState), (s = Ln || Zv(t, r, s, n, p, u, l)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4)) : (typeof a.componentDidMount == "function" && (t.flags |= 4), t.memoizedProps = n, t.memoizedState = u), a.props = n, a.state = u, a.context = l, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4), n = false);
    } else {
      a = t.stateNode, Sy(e2, t), s = t.memoizedProps, l = t.type === t.elementType ? s : Ir(t.type, s), a.props = l, d = t.pendingProps, p = a.context, u = r.contextType, typeof u == "object" && u !== null ? u = Cr(u) : (u = Yt(r) ? Oo : St.current, u = Ai(t, u));
      var v = r.getDerivedStateFromProps;
      (c = typeof v == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || p !== u) && Jv(t, a, n, u), Ln = false, p = t.memoizedState, a.state = p, ys(t, n, a, o);
      var g = t.memoizedState;
      s !== d || p !== g || qt.current || Ln ? (typeof v == "function" && (Ju(t, r, v, n), g = t.memoizedState), (l = Ln || Zv(t, r, l, n, p, g, u)) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, g, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, g, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 256)) : (typeof a.componentDidUpdate != "function" || s === e2.memoizedProps && p === e2.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e2.memoizedProps && p === e2.memoizedState || (t.flags |= 256), t.memoizedProps = n, t.memoizedState = g), a.props = n, a.state = g, a.context = u, n = l) : (typeof a.componentDidUpdate != "function" || s === e2.memoizedProps && p === e2.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e2.memoizedProps && p === e2.memoizedState || (t.flags |= 256), n = false);
    }
    return kd(e2, t, r, n, i, o);
  }
  function kd(e2, t, r, n, o, i) {
    By(e2, t);
    var a = (t.flags & 64) !== 0;
    if (!n && !a)
      return o && Gv(t, r, false), gn(e2, t, i);
    n = t.stateNode, bx.current = t;
    var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1, e2 !== null && a ? (t.child = el(t, e2.child, null, i), t.child = el(t, null, s, i)) : Gt(e2, t, s, i), t.memoizedState = n.state, o && Gv(t, r, true), t.child;
  }
  function lg(e2) {
    var t = e2.stateNode;
    t.pendingContext ? Kv(e2, t.pendingContext, t.pendingContext !== t.context) : t.context && Kv(e2, t.context, false), Fd(e2, t.containerInfo);
  }
  var Tu = { dehydrated: null, retryLane: 0 };
  function cg(e2, t, r) {
    var n = t.pendingProps, o = We.current, i = false, a;
    return (a = (t.flags & 64) !== 0) || (a = e2 !== null && e2.memoizedState === null ? false : (o & 2) !== 0), a ? (i = true, t.flags &= -65) : e2 !== null && e2.memoizedState === null || n.fallback === void 0 || n.unstable_avoidThisFallback === true || (o |= 1), Ue(We, o & 1), e2 === null ? (n.fallback !== void 0 && xd(t), e2 = n.children, o = n.fallback, i ? (e2 = fg(t, e2, o, r), t.child.memoizedState = { baseLanes: r }, t.memoizedState = Tu, e2) : typeof n.unstable_expectedLoadTime == "number" ? (e2 = fg(t, e2, o, r), t.child.memoizedState = { baseLanes: r }, t.memoizedState = Tu, t.lanes = 33554432, e2) : (r = Dp({ mode: "visible", children: e2 }, t.mode, r, null), r.return = t, t.child = r)) : e2.memoizedState !== null ? i ? (n = pg(e2, t, n.children, n.fallback, r), i = t.child, o = e2.child.memoizedState, i.memoizedState = o === null ? { baseLanes: r } : { baseLanes: o.baseLanes | r }, i.childLanes = e2.childLanes & ~r, t.memoizedState = Tu, n) : (r = dg(e2, t, n.children, r), t.memoizedState = null, r) : i ? (n = pg(e2, t, n.children, n.fallback, r), i = t.child, o = e2.child.memoizedState, i.memoizedState = o === null ? { baseLanes: r } : { baseLanes: o.baseLanes | r }, i.childLanes = e2.childLanes & ~r, t.memoizedState = Tu, n) : (r = dg(e2, t, n.children, r), t.memoizedState = null, r);
  }
  function fg(e2, t, r, n) {
    var o = e2.mode, i = e2.child;
    return t = { mode: "hidden", children: t }, (o & 2) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = t) : i = Dp(t, o, 0, null), r = Ii(r, o, n, null), i.return = e2, r.return = e2, i.sibling = r, e2.child = i, r;
  }
  function dg(e2, t, r, n) {
    var o = e2.child;
    return e2 = o.sibling, r = eo(o, { mode: "visible", children: r }), (t.mode & 2) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e2 !== null && (e2.nextEffect = null, e2.flags = 8, t.firstEffect = t.lastEffect = e2), t.child = r;
  }
  function pg(e2, t, r, n, o) {
    var i = t.mode, a = e2.child;
    e2 = a.sibling;
    var s = { mode: "hidden", children: r };
    return (i & 2) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = s, a = r.lastEffect, a !== null ? (t.firstEffect = r.firstEffect, t.lastEffect = a, a.nextEffect = null) : t.firstEffect = t.lastEffect = null) : r = eo(a, s), e2 !== null ? n = eo(e2, n) : (n = Ii(n, i, o, null), n.flags |= 2), n.return = t, r.return = t, r.sibling = n, t.child = r, n;
  }
  function mg(e2, t) {
    e2.lanes |= t;
    var r = e2.alternate;
    r !== null && (r.lanes |= t), Cy(e2.return, t);
  }
  function Yf(e2, t, r, n, o, i) {
    var a = e2.memoizedState;
    a === null ? e2.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: o, lastEffect: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = n, a.tail = r, a.tailMode = o, a.lastEffect = i);
  }
  function hg(e2, t, r) {
    var n = t.pendingProps, o = n.revealOrder, i = n.tail;
    if (Gt(e2, t, n.children, r), n = We.current, (n & 2) !== 0)
      n = n & 1 | 2, t.flags |= 64;
    else {
      if (e2 !== null && (e2.flags & 64) !== 0)
        e:
          for (e2 = t.child; e2 !== null; ) {
            if (e2.tag === 13)
              e2.memoizedState !== null && mg(e2, r);
            else if (e2.tag === 19)
              mg(e2, r);
            else if (e2.child !== null) {
              e2.child.return = e2, e2 = e2.child;
              continue;
            }
            if (e2 === t)
              break e;
            for (; e2.sibling === null; ) {
              if (e2.return === null || e2.return === t)
                break e;
              e2 = e2.return;
            }
            e2.sibling.return = e2.return, e2 = e2.sibling;
          }
      n &= 1;
    }
    if (Ue(We, n), (t.mode & 2) === 0)
      t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (r = t.child, o = null; r !== null; )
            e2 = r.alternate, e2 !== null && tl(e2) === null && (o = r), r = r.sibling;
          r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), Yf(t, false, o, r, i, t.lastEffect);
          break;
        case "backwards":
          for (r = null, o = t.child, t.child = null; o !== null; ) {
            if (e2 = o.alternate, e2 !== null && tl(e2) === null) {
              t.child = o;
              break;
            }
            e2 = o.sibling, o.sibling = r, r = o, o = e2;
          }
          Yf(t, true, r, null, i, t.lastEffect);
          break;
        case "together":
          Yf(t, false, null, null, void 0, t.lastEffect);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function gn(e2, t, r) {
    if (e2 !== null && (t.dependencies = e2.dependencies), bs |= t.lanes, (r & t.childLanes) !== 0) {
      if (e2 !== null && t.child !== e2.child)
        throw Error(D(153));
      if (t.child !== null) {
        for (e2 = t.child, r = eo(e2, e2.pendingProps), t.child = r, r.return = t; e2.sibling !== null; )
          e2 = e2.sibling, r = r.sibling = eo(e2, e2.pendingProps), r.return = t;
        r.sibling = null;
      }
      return t.child;
    }
    return null;
  }
  var Ny, Dd, Ly, Oy;
  Ny = function(e2, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6)
        e2.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === t)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t)
          return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  };
  Dd = function() {
  };
  Ly = function(e2, t, r, n) {
    var o = e2.memoizedProps;
    if (o !== n) {
      e2 = t.stateNode, Bo(Xr.current);
      var i = null;
      switch (r) {
        case "input":
          o = td(e2, o), n = td(e2, n), i = [];
          break;
        case "option":
          o = od(e2, o), n = od(e2, n), i = [];
          break;
        case "select":
          o = Ae({}, o, { value: void 0 }), n = Ae({}, n, { value: void 0 }), i = [];
          break;
        case "textarea":
          o = id(e2, o), n = id(e2, n), i = [];
          break;
        default:
          typeof o.onClick != "function" && typeof n.onClick == "function" && (e2.onclick = Gu);
      }
      ud(r, n);
      var a;
      r = null;
      for (l in o)
        if (!n.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null)
          if (l === "style") {
            var s = o[l];
            for (a in s)
              s.hasOwnProperty(a) && (r || (r = {}), r[a] = "");
          } else
            l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (us.hasOwnProperty(l) ? i || (i = []) : (i = i || []).push(l, null));
      for (l in n) {
        var u = n[l];
        if (s = o?.[l], n.hasOwnProperty(l) && u !== s && (u != null || s != null))
          if (l === "style")
            if (s) {
              for (a in s)
                !s.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
              for (a in u)
                u.hasOwnProperty(a) && s[a] !== u[a] && (r || (r = {}), r[a] = u[a]);
            } else
              r || (i || (i = []), i.push(l, r)), r = u;
          else
            l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (i = i || []).push(l, u)) : l === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(l, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (us.hasOwnProperty(l) ? (u != null && l === "onScroll" && Te("scroll", e2), i || s === u || (i = [])) : typeof u == "object" && u !== null && u.$$typeof === qd ? u.toString() : (i = i || []).push(l, u));
      }
      r && (i = i || []).push("style", r);
      var l = i;
      (t.updateQueue = l) && (t.flags |= 4);
    }
  };
  Oy = function(e2, t, r, n) {
    r !== n && (t.flags |= 4);
  };
  function Wa(e2, t) {
    if (!Zr)
      switch (e2.tailMode) {
        case "hidden":
          t = e2.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), t = t.sibling;
          r === null ? e2.tail = null : r.sibling = null;
          break;
        case "collapsed":
          r = e2.tail;
          for (var n = null; r !== null; )
            r.alternate !== null && (n = r), r = r.sibling;
          n === null ? t || e2.tail === null ? e2.tail = null : e2.tail.sibling = null : n.sibling = null;
      }
  }
  function wx(e2, t, r) {
    var n = t.pendingProps;
    switch (t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return Yt(t.type) && Yu(), null;
      case 3:
        return Mi(), Ie(qt), Ie(St), vp(), n = t.stateNode, n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e2 === null || e2.child === null) && (Du(t) ? t.flags |= 4 : n.hydrate || (t.flags |= 256)), Dd(t), null;
      case 5:
        hp(t);
        var o = Bo(Cs.current);
        if (r = t.type, e2 !== null && t.stateNode != null)
          Ly(e2, t, r, n, o), e2.ref !== t.ref && (t.flags |= 128);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(D(166));
            return null;
          }
          if (e2 = Bo(Xr.current), Du(t)) {
            n = t.stateNode, r = t.type;
            var i = t.memoizedProps;
            switch (n[Hn] = t, n[qu] = i, r) {
              case "dialog":
                Te("cancel", n), Te("close", n);
                break;
              case "iframe":
              case "object":
              case "embed":
                Te("load", n);
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < Ga.length; e2++)
                  Te(Ga[e2], n);
                break;
              case "source":
                Te("error", n);
                break;
              case "img":
              case "image":
              case "link":
                Te("error", n), Te("load", n);
                break;
              case "details":
                Te("toggle", n);
                break;
              case "input":
                gv(n, i), Te("invalid", n);
                break;
              case "select":
                n._wrapperState = { wasMultiple: !!i.multiple }, Te("invalid", n);
                break;
              case "textarea":
                Ev(n, i), Te("invalid", n);
            }
            ud(r, i), e2 = null;
            for (var a in i)
              i.hasOwnProperty(a) && (o = i[a], a === "children" ? typeof o == "string" ? n.textContent !== o && (e2 = ["children", o]) : typeof o == "number" && n.textContent !== "" + o && (e2 = ["children", "" + o]) : us.hasOwnProperty(a) && o != null && a === "onScroll" && Te("scroll", n));
            switch (r) {
              case "input":
                Eu(n), yv(n, i, true);
                break;
              case "textarea":
                Eu(n), Cv(n);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (n.onclick = Gu);
            }
            n = e2, t.updateQueue = n, n !== null && (t.flags |= 4);
          } else {
            switch (a = o.nodeType === 9 ? o : o.ownerDocument, e2 === ad.html && (e2 = Rg(r)), e2 === ad.html ? r === "script" ? (e2 = a.createElement("div"), e2.innerHTML = "<script><\/script>", e2 = e2.removeChild(e2.firstChild)) : typeof n.is == "string" ? e2 = a.createElement(r, { is: n.is }) : (e2 = a.createElement(r), r === "select" && (a = e2, n.multiple ? a.multiple = true : n.size && (a.size = n.size))) : e2 = a.createElementNS(e2, r), e2[Hn] = t, e2[qu] = n, Ny(e2, t, false, false), t.stateNode = e2, a = ld(r, n), r) {
              case "dialog":
                Te("cancel", e2), Te("close", e2), o = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                Te("load", e2), o = n;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ga.length; o++)
                  Te(Ga[o], e2);
                o = n;
                break;
              case "source":
                Te("error", e2), o = n;
                break;
              case "img":
              case "image":
              case "link":
                Te("error", e2), Te("load", e2), o = n;
                break;
              case "details":
                Te("toggle", e2), o = n;
                break;
              case "input":
                gv(e2, n), o = td(e2, n), Te("invalid", e2);
                break;
              case "option":
                o = od(e2, n);
                break;
              case "select":
                e2._wrapperState = { wasMultiple: !!n.multiple }, o = Ae({}, n, { value: void 0 }), Te("invalid", e2);
                break;
              case "textarea":
                Ev(e2, n), o = id(e2, n), Te("invalid", e2);
                break;
              default:
                o = n;
            }
            ud(r, o);
            var s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style" ? Mg(e2, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ag(e2, u)) : i === "children" ? typeof u == "string" ? (r !== "textarea" || u !== "") && ls(e2, u) : typeof u == "number" && ls(e2, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (us.hasOwnProperty(i) ? u != null && i === "onScroll" && Te("scroll", e2) : u != null && Wd(e2, i, u, a));
              }
            switch (r) {
              case "input":
                Eu(e2), yv(e2, n, false);
                break;
              case "textarea":
                Eu(e2), Cv(e2);
                break;
              case "option":
                n.value != null && e2.setAttribute("value", "" + Qn(n.value));
                break;
              case "select":
                e2.multiple = !!n.multiple, i = n.value, i != null ? _i(e2, !!n.multiple, i, false) : n.defaultValue != null && _i(e2, !!n.multiple, n.defaultValue, true);
                break;
              default:
                typeof o.onClick == "function" && (e2.onclick = Gu);
            }
            fy(r, n) && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 128);
        }
        return null;
      case 6:
        if (e2 && t.stateNode != null)
          Oy(e2, t, e2.memoizedProps, n);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(D(166));
          r = Bo(Cs.current), Bo(Xr.current), Du(t) ? (n = t.stateNode, r = t.memoizedProps, n[Hn] = t, n.nodeValue !== r && (t.flags |= 4)) : (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Hn] = t, t.stateNode = n);
        }
        return null;
      case 13:
        return Ie(We), n = t.memoizedState, (t.flags & 64) !== 0 ? (t.lanes = r, t) : (n = n !== null, r = false, e2 === null ? t.memoizedProps.fallback !== void 0 && Du(t) : r = e2.memoizedState !== null, n && !r && (t.mode & 2) !== 0 && (e2 === null && t.memoizedProps.unstable_avoidThisFallback !== true || (We.current & 1) !== 0 ? dt === 0 && (dt = 3) : ((dt === 0 || dt === 3) && (dt = 4), Dt === null || (bs & 134217727) === 0 && (Oi & 134217727) === 0 || Di(Dt, Ct))), (n || r) && (t.flags |= 4), null);
      case 4:
        return Mi(), Dd(t), e2 === null && uy(t.stateNode.containerInfo), null;
      case 10:
        return pp(t), null;
      case 17:
        return Yt(t.type) && Yu(), null;
      case 19:
        if (Ie(We), n = t.memoizedState, n === null)
          return null;
        if (i = (t.flags & 64) !== 0, a = n.rendering, a === null)
          if (i)
            Wa(n, false);
          else {
            if (dt !== 0 || e2 !== null && (e2.flags & 64) !== 0)
              for (e2 = t.child; e2 !== null; ) {
                if (a = tl(e2), a !== null) {
                  for (t.flags |= 64, Wa(n, false), i = a.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), n.lastEffect === null && (t.firstEffect = null), t.lastEffect = n.lastEffect, n = r, r = t.child; r !== null; )
                    i = r, e2 = n, i.flags &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e2, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e2 = a.dependencies, i.dependencies = e2 === null ? null : { lanes: e2.lanes, firstContext: e2.firstContext }), r = r.sibling;
                  return Ue(We, We.current & 1 | 2), t.child;
                }
                e2 = e2.sibling;
              }
            n.tail !== null && Et() > Md && (t.flags |= 64, i = true, Wa(n, false), t.lanes = 33554432);
          }
        else {
          if (!i)
            if (e2 = tl(a), e2 !== null) {
              if (t.flags |= 64, i = true, r = e2.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Wa(n, true), n.tail === null && n.tailMode === "hidden" && !a.alternate && !Zr)
                return t = t.lastEffect = n.lastEffect, t !== null && (t.nextEffect = null), null;
            } else
              2 * Et() - n.renderingStartTime > Md && r !== 1073741824 && (t.flags |= 64, i = true, Wa(n, false), t.lanes = 33554432);
          n.isBackwards ? (a.sibling = t.child, t.child = a) : (r = n.last, r !== null ? r.sibling = a : t.child = a, n.last = a);
        }
        return n.tail !== null ? (r = n.tail, n.rendering = r, n.tail = r.sibling, n.lastEffect = t.lastEffect, n.renderingStartTime = Et(), r.sibling = null, t = We.current, Ue(We, i ? t & 1 | 2 : t & 1), r) : null;
      case 23:
      case 24:
        return wp(), e2 !== null && e2.memoizedState !== null != (t.memoizedState !== null) && n.mode !== "unstable-defer-without-hiding" && (t.flags |= 4), null;
    }
    throw Error(D(156, t.tag));
  }
  function kx(e2) {
    switch (e2.tag) {
      case 1:
        Yt(e2.type) && Yu();
        var t = e2.flags;
        return t & 4096 ? (e2.flags = t & -4097 | 64, e2) : null;
      case 3:
        if (Mi(), Ie(qt), Ie(St), vp(), t = e2.flags, (t & 64) !== 0)
          throw Error(D(285));
        return e2.flags = t & -4097 | 64, e2;
      case 5:
        return hp(e2), null;
      case 13:
        return Ie(We), t = e2.flags, t & 4096 ? (e2.flags = t & -4097 | 64, e2) : null;
      case 19:
        return Ie(We), null;
      case 4:
        return Mi(), null;
      case 10:
        return pp(e2), null;
      case 23:
      case 24:
        return wp(), null;
      default:
        return null;
    }
  }
  function _p(e2, t) {
    try {
      var r = "", n = t;
      do
        r += sF(n), n = n.return;
      while (n);
      var o = r;
    } catch (i) {
      o = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e2, source: t, stack: o };
  }
  function Td(e2, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  var Dx = typeof WeakMap == "function" ? WeakMap : Map;
  function zy(e2, t, r) {
    r = $n(-1, r), r.tag = 3, r.payload = { element: null };
    var n = t.value;
    return r.callback = function() {
      ul || (ul = true, Bd = n), Td(e2, t);
    }, r;
  }
  function Hy(e2, t, r) {
    r = $n(-1, r), r.tag = 3;
    var n = e2.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var o = t.value;
      r.payload = function() {
        return Td(e2, t), n(o);
      };
    }
    var i = e2.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
      typeof n != "function" && (Qr === null ? Qr = /* @__PURE__ */ new Set([this]) : Qr.add(this), Td(e2, t));
      var a = t.stack;
      this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
    }), r;
  }
  var Tx = typeof WeakSet == "function" ? WeakSet : Set;
  function vg(e2) {
    var t = e2.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          Yn(e2, r);
        }
      else
        t.current = null;
  }
  function Ix(e2, t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (t.flags & 256 && e2 !== null) {
          var r = e2.memoizedProps, n = e2.memoizedState;
          e2 = t.stateNode, t = e2.getSnapshotBeforeUpdate(t.elementType === t.type ? r : Ir(t.type, r), n), e2.__reactInternalSnapshotBeforeUpdate = t;
        }
        return;
      case 3:
        t.flags & 256 && lp(t.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(D(163));
  }
  function Rx(e2, t, r) {
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        if (t = r.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
          e2 = t = t.next;
          do {
            if ((e2.tag & 3) === 3) {
              var n = e2.create;
              e2.destroy = n();
            }
            e2 = e2.next;
          } while (e2 !== t);
        }
        if (t = r.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
          e2 = t = t.next;
          do {
            var o = e2;
            n = o.next, o = o.tag, (o & 4) !== 0 && (o & 1) !== 0 && (Yy(r, e2), zx(r, e2)), e2 = n;
          } while (e2 !== t);
        }
        return;
      case 1:
        e2 = r.stateNode, r.flags & 4 && (t === null ? e2.componentDidMount() : (n = r.elementType === r.type ? t.memoizedProps : Ir(r.type, t.memoizedProps), e2.componentDidUpdate(n, t.memoizedState, e2.__reactInternalSnapshotBeforeUpdate))), t = r.updateQueue, t !== null && Xv(r, t, e2);
        return;
      case 3:
        if (t = r.updateQueue, t !== null) {
          if (e2 = null, r.child !== null)
            switch (r.child.tag) {
              case 5:
                e2 = r.child.stateNode;
                break;
              case 1:
                e2 = r.child.stateNode;
            }
          Xv(r, t, e2);
        }
        return;
      case 5:
        e2 = r.stateNode, t === null && r.flags & 4 && fy(r.type, r.memoizedProps) && e2.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        r.memoizedState === null && (r = r.alternate, r !== null && (r = r.memoizedState, r !== null && (r = r.dehydrated, r !== null && jg(r))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(D(163));
  }
  function gg(e2, t) {
    for (var r = e2; ; ) {
      if (r.tag === 5) {
        var n = r.stateNode;
        if (t)
          n = n.style, typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none";
        else {
          n = r.stateNode;
          var o = r.memoizedProps.style;
          o = o != null && o.hasOwnProperty("display") ? o.display : null, n.style.display = Pg("display", o);
        }
      } else if (r.tag === 6)
        r.stateNode.nodeValue = t ? "" : r.memoizedProps;
      else if ((r.tag !== 23 && r.tag !== 24 || r.memoizedState === null || r === e2) && r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === e2)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e2)
          return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }
  function yg(e2, t) {
    if (Lo && typeof Lo.onCommitFiberUnmount == "function")
      try {
        Lo.onCommitFiberUnmount(cp, t);
      } catch {
      }
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (e2 = t.updateQueue, e2 !== null && (e2 = e2.lastEffect, e2 !== null)) {
          var r = e2 = e2.next;
          do {
            var n = r, o = n.destroy;
            if (n = n.tag, o !== void 0)
              if ((n & 4) !== 0)
                Yy(t, r);
              else {
                n = t;
                try {
                  o();
                } catch (i) {
                  Yn(n, i);
                }
              }
            r = r.next;
          } while (r !== e2);
        }
        break;
      case 1:
        if (vg(t), e2 = t.stateNode, typeof e2.componentWillUnmount == "function")
          try {
            e2.props = t.memoizedProps, e2.state = t.memoizedState, e2.componentWillUnmount();
          } catch (i) {
            Yn(t, i);
          }
        break;
      case 5:
        vg(t);
        break;
      case 4:
        Vy(e2, t);
    }
  }
  function Eg(e2) {
    e2.alternate = null, e2.child = null, e2.dependencies = null, e2.firstEffect = null, e2.lastEffect = null, e2.memoizedProps = null, e2.memoizedState = null, e2.pendingProps = null, e2.return = null, e2.updateQueue = null;
  }
  function Cg(e2) {
    return e2.tag === 5 || e2.tag === 3 || e2.tag === 4;
  }
  function Sg(e2) {
    e: {
      for (var t = e2.return; t !== null; ) {
        if (Cg(t))
          break e;
        t = t.return;
      }
      throw Error(D(160));
    }
    var r = t;
    switch (t = r.stateNode, r.tag) {
      case 5:
        var n = false;
        break;
      case 3:
        t = t.containerInfo, n = true;
        break;
      case 4:
        t = t.containerInfo, n = true;
        break;
      default:
        throw Error(D(161));
    }
    r.flags & 16 && (ls(t, ""), r.flags &= -17);
    e:
      t:
        for (r = e2; ; ) {
          for (; r.sibling === null; ) {
            if (r.return === null || Cg(r.return)) {
              r = null;
              break e;
            }
            r = r.return;
          }
          for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
            if (r.flags & 2 || r.child === null || r.tag === 4)
              continue t;
            r.child.return = r, r = r.child;
          }
          if (!(r.flags & 2)) {
            r = r.stateNode;
            break e;
          }
        }
    n ? Id(e2, r, t) : Rd(e2, r, t);
  }
  function Id(e2, t, r) {
    var n = e2.tag, o = n === 5 || n === 6;
    if (o)
      e2 = o ? e2.stateNode : e2.stateNode.instance, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e2, t) : r.insertBefore(e2, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e2, r)) : (t = r, t.appendChild(e2)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Gu));
    else if (n !== 4 && (e2 = e2.child, e2 !== null))
      for (Id(e2, t, r), e2 = e2.sibling; e2 !== null; )
        Id(e2, t, r), e2 = e2.sibling;
  }
  function Rd(e2, t, r) {
    var n = e2.tag, o = n === 5 || n === 6;
    if (o)
      e2 = o ? e2.stateNode : e2.stateNode.instance, t ? r.insertBefore(e2, t) : r.appendChild(e2);
    else if (n !== 4 && (e2 = e2.child, e2 !== null))
      for (Rd(e2, t, r), e2 = e2.sibling; e2 !== null; )
        Rd(e2, t, r), e2 = e2.sibling;
  }
  function Vy(e2, t) {
    for (var r = t, n = false, o, i; ; ) {
      if (!n) {
        n = r.return;
        e:
          for (; ; ) {
            if (n === null)
              throw Error(D(160));
            switch (o = n.stateNode, n.tag) {
              case 5:
                i = false;
                break e;
              case 3:
                o = o.containerInfo, i = true;
                break e;
              case 4:
                o = o.containerInfo, i = true;
                break e;
            }
            n = n.return;
          }
        n = true;
      }
      if (r.tag === 5 || r.tag === 6) {
        e:
          for (var a = e2, s = r, u = s; ; )
            if (yg(a, u), u.child !== null && u.tag !== 4)
              u.child.return = u, u = u.child;
            else {
              if (u === s)
                break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === s)
                  break e;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
        i ? (a = o, s = r.stateNode, a.nodeType === 8 ? a.parentNode.removeChild(s) : a.removeChild(s)) : o.removeChild(r.stateNode);
      } else if (r.tag === 4) {
        if (r.child !== null) {
          o = r.stateNode.containerInfo, i = true, r.child.return = r, r = r.child;
          continue;
        }
      } else if (yg(e2, r), r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === t)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t)
          return;
        r = r.return, r.tag === 4 && (n = false);
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }
  function Qf(e2, t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
          var n = r = r.next;
          do
            (n.tag & 3) === 3 && (e2 = n.destroy, n.destroy = void 0, e2 !== void 0 && e2()), n = n.next;
          while (n !== r);
        }
        return;
      case 1:
        return;
      case 5:
        if (r = t.stateNode, r != null) {
          n = t.memoizedProps;
          var o = e2 !== null ? e2.memoizedProps : n;
          e2 = t.type;
          var i = t.updateQueue;
          if (t.updateQueue = null, i !== null) {
            for (r[qu] = n, e2 === "input" && n.type === "radio" && n.name != null && Tg(r, n), ld(e2, o), t = ld(e2, n), o = 0; o < i.length; o += 2) {
              var a = i[o], s = i[o + 1];
              a === "style" ? Mg(r, s) : a === "dangerouslySetInnerHTML" ? Ag(r, s) : a === "children" ? ls(r, s) : Wd(r, a, s, t);
            }
            switch (e2) {
              case "input":
                rd(r, n);
                break;
              case "textarea":
                Ig(r, n);
                break;
              case "select":
                e2 = r._wrapperState.wasMultiple, r._wrapperState.wasMultiple = !!n.multiple, i = n.value, i != null ? _i(r, !!n.multiple, i, false) : e2 !== !!n.multiple && (n.defaultValue != null ? _i(r, !!n.multiple, n.defaultValue, true) : _i(r, !!n.multiple, n.multiple ? [] : "", false));
            }
          }
        }
        return;
      case 6:
        if (t.stateNode === null)
          throw Error(D(162));
        t.stateNode.nodeValue = t.memoizedProps;
        return;
      case 3:
        r = t.stateNode, r.hydrate && (r.hydrate = false, jg(r.containerInfo));
        return;
      case 12:
        return;
      case 13:
        t.memoizedState !== null && (bp = Et(), gg(t.child, true)), _g(t);
        return;
      case 19:
        _g(t);
        return;
      case 17:
        return;
      case 23:
      case 24:
        gg(t, t.memoizedState !== null);
        return;
    }
    throw Error(D(163));
  }
  function _g(e2) {
    var t = e2.updateQueue;
    if (t !== null) {
      e2.updateQueue = null;
      var r = e2.stateNode;
      r === null && (r = e2.stateNode = new Tx()), t.forEach(function(n) {
        var o = Wx.bind(null, e2, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
    }
  }
  function Ax(e2, t) {
    return e2 !== null && (e2 = e2.memoizedState, e2 === null || e2.dehydrated !== null) ? (t = t.memoizedState, t !== null && t.dehydrated === null) : false;
  }
  var Px = Math.ceil, sl = Wo.ReactCurrentDispatcher, Fp = Wo.ReactCurrentOwner, j = 0, Dt = null, tt = null, Ct = 0, Ho = 0, Ad = to(0), dt = 0, Sl = null, Li = 0, bs = 0, Oi = 0, xp = 0, Pd = null, bp = 0, Md = 1 / 0;
  function zi() {
    Md = Et() + 500;
  }
  var M = null, ul = false, Bd = null, Qr = null, Jn = false, is = null, qa = 90, Nd = [], Ld = [], yn = null, as = 0, Od = null, Lu = -1, hn = 0, Ou = 0, ss = null, zu = false;
  function ur() {
    return (j & 48) !== 0 ? Et() : Lu !== -1 ? Lu : Lu = Et();
  }
  function Gn(e2) {
    if (e2 = e2.mode, (e2 & 2) === 0)
      return 1;
    if ((e2 & 4) === 0)
      return Pi() === 99 ? 1 : 2;
    if (hn === 0 && (hn = Li), Cx.transition !== 0) {
      Ou !== 0 && (Ou = Pd !== null ? Pd.pendingLanes : 0), e2 = hn;
      var t = 4186112 & ~Ou;
      return t &= -t, t === 0 && (e2 = 4186112 & ~e2, t = e2 & -e2, t === 0 && (t = 8192)), t;
    }
    return e2 = Pi(), (j & 4) !== 0 && e2 === 98 ? e2 = $u(12, hn) : (e2 = FF(e2), e2 = $u(e2, hn)), e2;
  }
  function qn(e2, t, r) {
    if (50 < as)
      throw as = 0, Od = null, Error(D(185));
    if (e2 = _l(e2, t), e2 === null)
      return null;
    ml(e2, t, r), e2 === Dt && (Oi |= t, dt === 4 && Di(e2, Ct));
    var n = Pi();
    t === 1 ? (j & 8) !== 0 && (j & 48) === 0 ? zd(e2) : (Sr(e2, r), j === 0 && (zi(), Jr())) : ((j & 4) === 0 || n !== 98 && n !== 99 || (yn === null ? yn = /* @__PURE__ */ new Set([e2]) : yn.add(e2)), Sr(e2, r)), Pd = e2;
  }
  function _l(e2, t) {
    e2.lanes |= t;
    var r = e2.alternate;
    for (r !== null && (r.lanes |= t), r = e2, e2 = e2.return; e2 !== null; )
      e2.childLanes |= t, r = e2.alternate, r !== null && (r.childLanes |= t), r = e2, e2 = e2.return;
    return r.tag === 3 ? r.stateNode : null;
  }
  function Sr(e2, t) {
    for (var r = e2.callbackNode, n = e2.suspendedLanes, o = e2.pingedLanes, i = e2.expirationTimes, a = e2.pendingLanes; 0 < a; ) {
      var s = 31 - Xn(a), u = 1 << s, l = i[s];
      if (l === -1) {
        if ((u & n) === 0 || (u & o) !== 0) {
          l = t, pi(u);
          var c = xe;
          i[s] = 10 <= c ? l + 250 : 6 <= c ? l + 5e3 : -1;
        }
      } else
        l <= t && (e2.expiredLanes |= u);
      a &= ~u;
    }
    if (n = ps(e2, e2 === Dt ? Ct : 0), t = xe, n === 0)
      r !== null && (r !== $f && Cd(r), e2.callbackNode = null, e2.callbackPriority = 0);
    else {
      if (r !== null) {
        if (e2.callbackPriority === t)
          return;
        r !== $f && Cd(r);
      }
      t === 15 ? (r = zd.bind(null, e2), mn === null ? (mn = [r], Nu = fp(El, Ey)) : mn.push(r), r = $f) : t === 14 ? r = gs(99, zd.bind(null, e2)) : (r = xF(t), r = gs(r, Wy.bind(null, e2))), e2.callbackPriority = t, e2.callbackNode = r;
    }
  }
  function Wy(e2) {
    if (Lu = -1, Ou = hn = 0, (j & 48) !== 0)
      throw Error(D(327));
    var t = e2.callbackNode;
    if (ro() && e2.callbackNode !== t)
      return null;
    var r = ps(e2, e2 === Dt ? Ct : 0);
    if (r === 0)
      return null;
    var n = r, o = j;
    j |= 16;
    var i = Ky();
    (Dt !== e2 || Ct !== n) && (zi(), Ti(e2, n));
    do
      try {
        Nx();
        break;
      } catch (s) {
        $y(e2, s);
      }
    while (1);
    if (dp(), sl.current = i, j = o, tt !== null ? n = 0 : (Dt = null, Ct = 0, n = dt), (Li & Oi) !== 0)
      Ti(e2, 0);
    else if (n !== 0) {
      if (n === 2 && (j |= 64, e2.hydrate && (e2.hydrate = false, lp(e2.containerInfo)), r = Xg(e2), r !== 0 && (n = Ya(e2, r))), n === 1)
        throw t = Sl, Ti(e2, 0), Di(e2, r), Sr(e2, Et()), t;
      switch (e2.finishedWork = e2.current.alternate, e2.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          Ro(e2);
          break;
        case 3:
          if (Di(e2, r), (r & 62914560) === r && (n = bp + 500 - Et(), 10 < n)) {
            if (ps(e2, 0) !== 0)
              break;
            if (o = e2.suspendedLanes, (o & r) !== r) {
              ur(), e2.pingedLanes |= e2.suspendedLanes & o;
              break;
            }
            e2.timeoutHandle = Uv(Ro.bind(null, e2), n);
            break;
          }
          Ro(e2);
          break;
        case 4:
          if (Di(e2, r), (r & 4186112) === r)
            break;
          for (n = e2.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Xn(r);
            i = 1 << a, a = n[a], a > o && (o = a), r &= ~i;
          }
          if (r = o, r = Et() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Px(r / 1960)) - r, 10 < r) {
            e2.timeoutHandle = Uv(Ro.bind(null, e2), r);
            break;
          }
          Ro(e2);
          break;
        case 5:
          Ro(e2);
          break;
        default:
          throw Error(D(329));
      }
    }
    return Sr(e2, Et()), e2.callbackNode === t ? Wy.bind(null, e2) : null;
  }
  function Di(e2, t) {
    for (t &= ~xp, t &= ~Oi, e2.suspendedLanes |= t, e2.pingedLanes &= ~t, e2 = e2.expirationTimes; 0 < t; ) {
      var r = 31 - Xn(t), n = 1 << r;
      e2[r] = -1, t &= ~n;
    }
  }
  function zd(e2) {
    if ((j & 48) !== 0)
      throw Error(D(327));
    if (ro(), e2 === Dt && (e2.expiredLanes & Ct) !== 0) {
      var t = Ct, r = Ya(e2, t);
      (Li & Oi) !== 0 && (t = ps(e2, t), r = Ya(e2, t));
    } else
      t = ps(e2, 0), r = Ya(e2, t);
    if (e2.tag !== 0 && r === 2 && (j |= 64, e2.hydrate && (e2.hydrate = false, lp(e2.containerInfo)), t = Xg(e2), t !== 0 && (r = Ya(e2, t))), r === 1)
      throw r = Sl, Ti(e2, 0), Di(e2, t), Sr(e2, Et()), r;
    return e2.finishedWork = e2.current.alternate, e2.finishedLanes = t, Ro(e2), Sr(e2, Et()), null;
  }
  function Mx() {
    if (yn !== null) {
      var e2 = yn;
      yn = null, e2.forEach(function(t) {
        t.expiredLanes |= 24 & t.pendingLanes, Sr(t, Et());
      });
    }
    Jr();
  }
  function Uy(e2, t) {
    var r = j;
    j |= 1;
    try {
      return e2(t);
    } finally {
      j = r, j === 0 && (zi(), Jr());
    }
  }
  function jy(e2, t) {
    var r = j;
    j &= -2, j |= 8;
    try {
      return e2(t);
    } finally {
      j = r, j === 0 && (zi(), Jr());
    }
  }
  function Iu(e2, t) {
    Ue(Ad, Ho), Ho |= t, Li |= t;
  }
  function wp() {
    Ho = Ad.current, Ie(Ad);
  }
  function Ti(e2, t) {
    e2.finishedWork = null, e2.finishedLanes = 0;
    var r = e2.timeoutHandle;
    if (r !== -1 && (e2.timeoutHandle = -1, mx(r)), tt !== null)
      for (r = tt.return; r !== null; ) {
        var n = r;
        switch (n.tag) {
          case 1:
            n = n.type.childContextTypes, n != null && Yu();
            break;
          case 3:
            Mi(), Ie(qt), Ie(St), vp();
            break;
          case 5:
            hp(n);
            break;
          case 4:
            Mi();
            break;
          case 13:
            Ie(We);
            break;
          case 19:
            Ie(We);
            break;
          case 10:
            pp(n);
            break;
          case 23:
          case 24:
            wp();
        }
        r = r.return;
      }
    Dt = e2, tt = eo(e2.current, null), Ct = Ho = Li = t, dt = 0, Sl = null, xp = Oi = bs = 0;
  }
  function $y(e2, t) {
    do {
      var r = tt;
      try {
        if (dp(), ns.current = al, rl) {
          for (var n = Ke.memoizedState; n !== null; ) {
            var o = n.queue;
            o !== null && (o.pending = null), n = n.next;
          }
          rl = false;
        }
        if (Ss = 0, ft = yt = Ke = null, os = false, Fp.current = null, r === null || r.return === null) {
          dt = 1, Sl = t, tt = null;
          break;
        }
        e: {
          var i = e2, a = r.return, s = r, u = t;
          if (t = Ct, s.flags |= 2048, s.firstEffect = s.lastEffect = null, u !== null && typeof u == "object" && typeof u.then == "function") {
            var l = u;
            if ((s.mode & 2) === 0) {
              var c = s.alternate;
              c ? (s.updateQueue = c.updateQueue, s.memoizedState = c.memoizedState, s.lanes = c.lanes) : (s.updateQueue = null, s.memoizedState = null);
            }
            var d = (We.current & 1) !== 0, p = a;
            do {
              var v;
              if (v = p.tag === 13) {
                var g = p.memoizedState;
                if (g !== null)
                  v = g.dehydrated !== null;
                else {
                  var y = p.memoizedProps;
                  v = y.fallback === void 0 ? false : y.unstable_avoidThisFallback !== true ? true : !d;
                }
              }
              if (v) {
                var f = p.updateQueue;
                if (f === null) {
                  var m = /* @__PURE__ */ new Set();
                  m.add(l), p.updateQueue = m;
                } else
                  f.add(l);
                if ((p.mode & 2) === 0) {
                  if (p.flags |= 64, s.flags |= 16384, s.flags &= -2981, s.tag === 1)
                    if (s.alternate === null)
                      s.tag = 17;
                    else {
                      var h = $n(-1, 1);
                      h.tag = 2, Kn(s, h);
                    }
                  s.lanes |= 1;
                  break e;
                }
                u = void 0, s = t;
                var E = i.pingCache;
                if (E === null ? (E = i.pingCache = new Dx(), u = /* @__PURE__ */ new Set(), E.set(l, u)) : (u = E.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), E.set(l, u))), !u.has(s)) {
                  u.add(s);
                  var C = Vx.bind(null, i, l, s);
                  l.then(C, C);
                }
                p.flags |= 4096, p.lanes = t;
                break e;
              }
              p = p.return;
            } while (p !== null);
            u = Error((Si(s.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
          }
          dt !== 5 && (dt = 2), u = _p(u, s), p = a;
          do {
            switch (p.tag) {
              case 3:
                i = u, p.flags |= 4096, t &= -t, p.lanes |= t;
                var x = zy(p, i, t);
                Qv(p, x);
                break e;
              case 1:
                i = u;
                var S = p.type, F = p.stateNode;
                if ((p.flags & 64) === 0 && (typeof S.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && (Qr === null || !Qr.has(F)))) {
                  p.flags |= 4096, t &= -t, p.lanes |= t;
                  var w = Hy(p, i, t);
                  Qv(p, w);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        qy(r);
      } catch (k) {
        t = k, tt === r && r !== null && (tt = r = r.return);
        continue;
      }
      break;
    } while (1);
  }
  function Ky() {
    var e2 = sl.current;
    return sl.current = al, e2 === null ? al : e2;
  }
  function Ya(e2, t) {
    var r = j;
    j |= 16;
    var n = Ky();
    Dt === e2 && Ct === t || Ti(e2, t);
    do
      try {
        Bx();
        break;
      } catch (o) {
        $y(e2, o);
      }
    while (1);
    if (dp(), j = r, sl.current = n, tt !== null)
      throw Error(D(261));
    return Dt = null, Ct = 0, dt;
  }
  function Bx() {
    for (; tt !== null; )
      Gy(tt);
  }
  function Nx() {
    for (; tt !== null && !gx(); )
      Gy(tt);
  }
  function Gy(e2) {
    var t = Qy(e2.alternate, e2, Ho);
    e2.memoizedProps = e2.pendingProps, t === null ? qy(e2) : tt = t, Fp.current = null;
  }
  function qy(e2) {
    var t = e2;
    do {
      var r = t.alternate;
      if (e2 = t.return, (t.flags & 2048) === 0) {
        if (r = wx(r, t, Ho), r !== null) {
          tt = r;
          return;
        }
        if (r = t, r.tag !== 24 && r.tag !== 23 || r.memoizedState === null || (Ho & 1073741824) !== 0 || (r.mode & 4) === 0) {
          for (var n = 0, o = r.child; o !== null; )
            n |= o.lanes | o.childLanes, o = o.sibling;
          r.childLanes = n;
        }
        e2 !== null && (e2.flags & 2048) === 0 && (e2.firstEffect === null && (e2.firstEffect = t.firstEffect), t.lastEffect !== null && (e2.lastEffect !== null && (e2.lastEffect.nextEffect = t.firstEffect), e2.lastEffect = t.lastEffect), 1 < t.flags && (e2.lastEffect !== null ? e2.lastEffect.nextEffect = t : e2.firstEffect = t, e2.lastEffect = t));
      } else {
        if (r = kx(t), r !== null) {
          r.flags &= 2047, tt = r;
          return;
        }
        e2 !== null && (e2.firstEffect = e2.lastEffect = null, e2.flags |= 2048);
      }
      if (t = t.sibling, t !== null) {
        tt = t;
        return;
      }
      tt = t = e2;
    } while (t !== null);
    dt === 0 && (dt = 5);
  }
  function Ro(e2) {
    var t = Pi();
    return zo(99, Lx.bind(null, e2, t)), null;
  }
  function Lx(e2, t) {
    do
      ro();
    while (is !== null);
    if ((j & 48) !== 0)
      throw Error(D(327));
    var r = e2.finishedWork;
    if (r === null)
      return null;
    if (e2.finishedWork = null, e2.finishedLanes = 0, r === e2.current)
      throw Error(D(177));
    e2.callbackNode = null;
    var n = r.lanes | r.childLanes, o = n, i = e2.pendingLanes & ~o;
    e2.pendingLanes = o, e2.suspendedLanes = 0, e2.pingedLanes = 0, e2.expiredLanes &= o, e2.mutableReadLanes &= o, e2.entangledLanes &= o, o = e2.entanglements;
    for (var a = e2.eventTimes, s = e2.expirationTimes; 0 < i; ) {
      var u = 31 - Xn(i), l = 1 << u;
      o[u] = 0, a[u] = -1, s[u] = -1, i &= ~l;
    }
    if (yn !== null && (n & 24) === 0 && yn.has(e2) && yn.delete(e2), e2 === Dt && (tt = Dt = null, Ct = 0), 1 < r.flags ? r.lastEffect !== null ? (r.lastEffect.nextEffect = r, n = r.firstEffect) : n = r : n = r.firstEffect, n !== null) {
      if (o = j, j |= 32, Fp.current = null, Wf = Au, a = Lv(), hd(a)) {
        if ("selectionStart" in a)
          s = { start: a.selectionStart, end: a.selectionEnd };
        else
          e:
            if (s = (s = a.ownerDocument) && s.defaultView || window, (l = s.getSelection && s.getSelection()) && l.rangeCount !== 0) {
              s = l.anchorNode, i = l.anchorOffset, u = l.focusNode, l = l.focusOffset;
              try {
                s.nodeType, u.nodeType;
              } catch {
                s = null;
                break e;
              }
              var c = 0, d = -1, p = -1, v = 0, g = 0, y = a, f = null;
              t:
                for (; ; ) {
                  for (var m; y !== s || i !== 0 && y.nodeType !== 3 || (d = c + i), y !== u || l !== 0 && y.nodeType !== 3 || (p = c + l), y.nodeType === 3 && (c += y.nodeValue.length), (m = y.firstChild) !== null; )
                    f = y, y = m;
                  for (; ; ) {
                    if (y === a)
                      break t;
                    if (f === s && ++v === i && (d = c), f === u && ++g === l && (p = c), (m = y.nextSibling) !== null)
                      break;
                    y = f, f = y.parentNode;
                  }
                  y = m;
                }
              s = d === -1 || p === -1 ? null : { start: d, end: p };
            } else
              s = null;
        s = s || { start: 0, end: 0 };
      } else
        s = null;
      Uf = { focusedElem: a, selectionRange: s }, Au = false, ss = null, zu = false, M = n;
      do
        try {
          Ox();
        } catch (k) {
          if (M === null)
            throw Error(D(330));
          Yn(M, k), M = M.nextEffect;
        }
      while (M !== null);
      ss = null, M = n;
      do
        try {
          for (a = e2; M !== null; ) {
            var h = M.flags;
            if (h & 16 && ls(M.stateNode, ""), h & 128) {
              var E = M.alternate;
              if (E !== null) {
                var C = E.ref;
                C !== null && (typeof C == "function" ? C(null) : C.current = null);
              }
            }
            switch (h & 1038) {
              case 2:
                Sg(M), M.flags &= -3;
                break;
              case 6:
                Sg(M), M.flags &= -3, Qf(M.alternate, M);
                break;
              case 1024:
                M.flags &= -1025;
                break;
              case 1028:
                M.flags &= -1025, Qf(M.alternate, M);
                break;
              case 4:
                Qf(M.alternate, M);
                break;
              case 8:
                s = M, Vy(a, s);
                var x = s.alternate;
                Eg(s), x !== null && Eg(x);
            }
            M = M.nextEffect;
          }
        } catch (k) {
          if (M === null)
            throw Error(D(330));
          Yn(M, k), M = M.nextEffect;
        }
      while (M !== null);
      if (C = Uf, E = Lv(), h = C.focusedElem, a = C.selectionRange, E !== h && h && h.ownerDocument && iy(h.ownerDocument.documentElement, h)) {
        for (a !== null && hd(h) && (E = a.start, C = a.end, C === void 0 && (C = E), "selectionStart" in h ? (h.selectionStart = E, h.selectionEnd = Math.min(C, h.value.length)) : (C = (E = h.ownerDocument || document) && E.defaultView || window, C.getSelection && (C = C.getSelection(), s = h.textContent.length, x = Math.min(a.start, s), a = a.end === void 0 ? x : Math.min(a.end, s), !C.extend && x > a && (s = a, a = x, x = s), s = Nv(h, x), i = Nv(h, a), s && i && (C.rangeCount !== 1 || C.anchorNode !== s.node || C.anchorOffset !== s.offset || C.focusNode !== i.node || C.focusOffset !== i.offset) && (E = E.createRange(), E.setStart(s.node, s.offset), C.removeAllRanges(), x > a ? (C.addRange(E), C.extend(i.node, i.offset)) : (E.setEnd(i.node, i.offset), C.addRange(E)))))), E = [], C = h; C = C.parentNode; )
          C.nodeType === 1 && E.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
        for (typeof h.focus == "function" && h.focus(), h = 0; h < E.length; h++)
          C = E[h], C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
      }
      Au = !!Wf, Uf = Wf = null, e2.current = r, M = n;
      do
        try {
          for (h = e2; M !== null; ) {
            var S = M.flags;
            if (S & 36 && Rx(h, M.alternate, M), S & 128) {
              E = void 0;
              var F = M.ref;
              if (F !== null) {
                var w = M.stateNode;
                switch (M.tag) {
                  case 5:
                    E = w;
                    break;
                  default:
                    E = w;
                }
                typeof F == "function" ? F(E) : F.current = E;
              }
            }
            M = M.nextEffect;
          }
        } catch (k) {
          if (M === null)
            throw Error(D(330));
          Yn(M, k), M = M.nextEffect;
        }
      while (M !== null);
      M = null, Ex(), j = o;
    } else
      e2.current = r;
    if (Jn)
      Jn = false, is = e2, qa = t;
    else
      for (M = n; M !== null; )
        t = M.nextEffect, M.nextEffect = null, M.flags & 8 && (S = M, S.sibling = null, S.stateNode = null), M = t;
    if (n = e2.pendingLanes, n === 0 && (Qr = null), n === 1 ? e2 === Od ? as++ : (as = 0, Od = e2) : as = 0, r = r.stateNode, Lo && typeof Lo.onCommitFiberRoot == "function")
      try {
        Lo.onCommitFiberRoot(cp, r, void 0, (r.current.flags & 64) === 64);
      } catch {
      }
    if (Sr(e2, Et()), ul)
      throw ul = false, e2 = Bd, Bd = null, e2;
    return (j & 8) !== 0 || Jr(), null;
  }
  function Ox() {
    for (; M !== null; ) {
      var e2 = M.alternate;
      zu || ss === null || ((M.flags & 8) !== 0 ? Fv(M, ss) && (zu = true) : M.tag === 13 && Ax(e2, M) && Fv(M, ss) && (zu = true));
      var t = M.flags;
      (t & 256) !== 0 && Ix(e2, M), (t & 512) === 0 || Jn || (Jn = true, gs(97, function() {
        return ro(), null;
      })), M = M.nextEffect;
    }
  }
  function ro() {
    if (qa !== 90) {
      var e2 = 97 < qa ? 97 : qa;
      return qa = 90, zo(e2, Hx);
    }
    return false;
  }
  function zx(e2, t) {
    Nd.push(t, e2), Jn || (Jn = true, gs(97, function() {
      return ro(), null;
    }));
  }
  function Yy(e2, t) {
    Ld.push(t, e2), Jn || (Jn = true, gs(97, function() {
      return ro(), null;
    }));
  }
  function Hx() {
    if (is === null)
      return false;
    var e2 = is;
    if (is = null, (j & 48) !== 0)
      throw Error(D(331));
    var t = j;
    j |= 32;
    var r = Ld;
    Ld = [];
    for (var n = 0; n < r.length; n += 2) {
      var o = r[n], i = r[n + 1], a = o.destroy;
      if (o.destroy = void 0, typeof a == "function")
        try {
          a();
        } catch (u) {
          if (i === null)
            throw Error(D(330));
          Yn(i, u);
        }
    }
    for (r = Nd, Nd = [], n = 0; n < r.length; n += 2) {
      o = r[n], i = r[n + 1];
      try {
        var s = o.create;
        o.destroy = s();
      } catch (u) {
        if (i === null)
          throw Error(D(330));
        Yn(i, u);
      }
    }
    for (s = e2.current.firstEffect; s !== null; )
      e2 = s.nextEffect, s.nextEffect = null, s.flags & 8 && (s.sibling = null, s.stateNode = null), s = e2;
    return j = t, Jr(), true;
  }
  function Fg(e2, t, r) {
    t = _p(r, t), t = zy(e2, t, 1), Kn(e2, t), t = ur(), e2 = _l(e2, 1), e2 !== null && (ml(e2, 1, t), Sr(e2, t));
  }
  function Yn(e2, t) {
    if (e2.tag === 3)
      Fg(e2, e2, t);
    else
      for (var r = e2.return; r !== null; ) {
        if (r.tag === 3) {
          Fg(r, e2, t);
          break;
        } else if (r.tag === 1) {
          var n = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Qr === null || !Qr.has(n))) {
            e2 = _p(t, e2);
            var o = Hy(r, e2, 1);
            if (Kn(r, o), o = ur(), r = _l(r, 1), r !== null)
              ml(r, 1, o), Sr(r, o);
            else if (typeof n.componentDidCatch == "function" && (Qr === null || !Qr.has(n)))
              try {
                n.componentDidCatch(t, e2);
              } catch {
              }
            break;
          }
        }
        r = r.return;
      }
  }
  function Vx(e2, t, r) {
    var n = e2.pingCache;
    n !== null && n.delete(t), t = ur(), e2.pingedLanes |= e2.suspendedLanes & r, Dt === e2 && (Ct & r) === r && (dt === 4 || dt === 3 && (Ct & 62914560) === Ct && 500 > Et() - bp ? Ti(e2, 0) : xp |= r), Sr(e2, t);
  }
  function Wx(e2, t) {
    var r = e2.stateNode;
    r !== null && r.delete(t), t = 0, t === 0 && (t = e2.mode, (t & 2) === 0 ? t = 1 : (t & 4) === 0 ? t = Pi() === 99 ? 1 : 2 : (hn === 0 && (hn = Li), t = mi(62914560 & ~hn), t === 0 && (t = 4194304))), r = ur(), e2 = _l(e2, t), e2 !== null && (ml(e2, t, r), Sr(e2, r));
  }
  var Qy;
  Qy = function(e2, t, r) {
    var n = t.lanes;
    if (e2 !== null)
      if (e2.memoizedProps !== t.pendingProps || qt.current)
        Rr = true;
      else if ((r & n) !== 0)
        Rr = (e2.flags & 16384) !== 0;
      else {
        switch (Rr = false, t.tag) {
          case 3:
            lg(t), Gf();
            break;
          case 5:
            eg(t);
            break;
          case 1:
            Yt(t.type) && Bu(t);
            break;
          case 4:
            Fd(t, t.stateNode.containerInfo);
            break;
          case 10:
            n = t.memoizedProps.value;
            var o = t.type._context;
            Ue(Qu, o._currentValue), o._currentValue = n;
            break;
          case 13:
            if (t.memoizedState !== null)
              return (r & t.child.childLanes) !== 0 ? cg(e2, t, r) : (Ue(We, We.current & 1), t = gn(e2, t, r), t !== null ? t.sibling : null);
            Ue(We, We.current & 1);
            break;
          case 19:
            if (n = (r & t.childLanes) !== 0, (e2.flags & 64) !== 0) {
              if (n)
                return hg(e2, t, r);
              t.flags |= 64;
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ue(We, We.current), n)
              break;
            return null;
          case 23:
          case 24:
            return t.lanes = 0, qf(e2, t, r);
        }
        return gn(e2, t, r);
      }
    else
      Rr = false;
    switch (t.lanes = 0, t.tag) {
      case 2:
        if (n = t.type, e2 !== null && (e2.alternate = null, t.alternate = null, t.flags |= 2), e2 = t.pendingProps, o = Ai(t, St.current), wi(t, r), o = yp(null, t, n, e2, o, r), t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) {
          if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Yt(n)) {
            var i = true;
            Bu(t);
          } else
            i = false;
          t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, mp(t);
          var a = n.getDerivedStateFromProps;
          typeof a == "function" && Ju(t, n, a, e2), o.updater = Cl, t.stateNode = o, o._reactInternals = t, _d(t, n, e2, r), t = kd(null, t, n, true, i, r);
        } else
          t.tag = 0, Gt(null, t, o, r), t = t.child;
        return t;
      case 16:
        o = t.elementType;
        e: {
          switch (e2 !== null && (e2.alternate = null, t.alternate = null, t.flags |= 2), e2 = t.pendingProps, i = o._init, o = i(o._payload), t.type = o, i = t.tag = jx(o), e2 = Ir(o, e2), i) {
            case 0:
              t = wd(null, t, o, e2, r);
              break e;
            case 1:
              t = ug(null, t, o, e2, r);
              break e;
            case 11:
              t = ag(null, t, o, e2, r);
              break e;
            case 14:
              t = sg(null, t, o, Ir(o.type, e2), n, r);
              break e;
          }
          throw Error(D(306, o, ""));
        }
        return t;
      case 0:
        return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Ir(n, o), wd(e2, t, n, o, r);
      case 1:
        return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Ir(n, o), ug(e2, t, n, o, r);
      case 3:
        if (lg(t), n = t.updateQueue, e2 === null || n === null)
          throw Error(D(282));
        if (n = t.pendingProps, o = t.memoizedState, o = o !== null ? o.element : null, Sy(e2, t), ys(t, n, null, r), n = t.memoizedState.element, n === o)
          Gf(), t = gn(e2, t, r);
        else {
          if (o = t.stateNode, (i = o.hydrate) && (Vn = bi(t.stateNode.containerInfo.firstChild), vn = t, i = Zr = true), i) {
            if (e2 = o.mutableSourceEagerHydrationData, e2 != null)
              for (o = 0; o < e2.length; o += 2)
                i = e2[o], i._workInProgressVersionPrimary = e2[o + 1], ki.push(i);
            for (r = by(t, null, n, r), t.child = r; r; )
              r.flags = r.flags & -3 | 1024, r = r.sibling;
          } else
            Gt(e2, t, n, r), Gf();
          t = t.child;
        }
        return t;
      case 5:
        return eg(t), e2 === null && xd(t), n = t.type, o = t.pendingProps, i = e2 !== null ? e2.memoizedProps : null, a = o.children, yd(n, o) ? a = null : i !== null && yd(n, i) && (t.flags |= 16), By(e2, t), Gt(e2, t, a, r), t.child;
      case 6:
        return e2 === null && xd(t), null;
      case 13:
        return cg(e2, t, r);
      case 4:
        return Fd(t, t.stateNode.containerInfo), n = t.pendingProps, e2 === null ? t.child = el(t, null, n, r) : Gt(e2, t, n, r), t.child;
      case 11:
        return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Ir(n, o), ag(e2, t, n, o, r);
      case 7:
        return Gt(e2, t, t.pendingProps, r), t.child;
      case 8:
        return Gt(e2, t, t.pendingProps.children, r), t.child;
      case 12:
        return Gt(e2, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          n = t.type._context, o = t.pendingProps, a = t.memoizedProps, i = o.value;
          var s = t.type._context;
          if (Ue(Qu, s._currentValue), s._currentValue = i, a !== null)
            if (s = a.value, i = gr(s, i) ? 0 : (typeof n._calculateChangedBits == "function" ? n._calculateChangedBits(s, i) : 1073741823) | 0, i === 0) {
              if (a.children === o.children && !qt.current) {
                t = gn(e2, t, r);
                break e;
              }
            } else
              for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                var u = s.dependencies;
                if (u !== null) {
                  a = s.child;
                  for (var l = u.firstContext; l !== null; ) {
                    if (l.context === n && (l.observedBits & i) !== 0) {
                      s.tag === 1 && (l = $n(-1, r & -r), l.tag = 2, Kn(s, l)), s.lanes |= r, l = s.alternate, l !== null && (l.lanes |= r), Cy(s.return, r), u.lanes |= r;
                      break;
                    }
                    l = l.next;
                  }
                } else
                  a = s.tag === 10 && s.type === t.type ? null : s.child;
                if (a !== null)
                  a.return = s;
                else
                  for (a = s; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (s = a.sibling, s !== null) {
                      s.return = a.return, a = s;
                      break;
                    }
                    a = a.return;
                  }
                s = a;
              }
          Gt(e2, t, o.children, r), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, i = t.pendingProps, n = i.children, wi(t, r), o = Cr(o, i.unstable_observedBits), n = n(o), t.flags |= 1, Gt(e2, t, n, r), t.child;
      case 14:
        return o = t.type, i = Ir(o, t.pendingProps), i = Ir(o.type, i), sg(e2, t, o, i, n, r);
      case 15:
        return My(e2, t, t.type, t.pendingProps, n, r);
      case 17:
        return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Ir(n, o), e2 !== null && (e2.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, Yt(n) ? (e2 = true, Bu(t)) : e2 = false, wi(t, r), Fy(t, n, o), _d(t, n, o, r), kd(null, t, n, true, e2, r);
      case 19:
        return hg(e2, t, r);
      case 23:
        return qf(e2, t, r);
      case 24:
        return qf(e2, t, r);
    }
    throw Error(D(156, t.tag));
  };
  function Ux(e2, t, r, n) {
    this.tag = e2, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function yr(e2, t, r, n) {
    return new Ux(e2, t, r, n);
  }
  function kp(e2) {
    return e2 = e2.prototype, !(!e2 || !e2.isReactComponent);
  }
  function jx(e2) {
    if (typeof e2 == "function")
      return kp(e2) ? 1 : 0;
    if (e2 != null) {
      if (e2 = e2.$$typeof, e2 === fl)
        return 11;
      if (e2 === dl)
        return 14;
    }
    return 2;
  }
  function eo(e2, t) {
    var r = e2.alternate;
    return r === null ? (r = yr(e2.tag, t, e2.key, e2.mode), r.elementType = e2.elementType, r.type = e2.type, r.stateNode = e2.stateNode, r.alternate = e2, e2.alternate = r) : (r.pendingProps = t, r.type = e2.type, r.flags = 0, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null), r.childLanes = e2.childLanes, r.lanes = e2.lanes, r.child = e2.child, r.memoizedProps = e2.memoizedProps, r.memoizedState = e2.memoizedState, r.updateQueue = e2.updateQueue, t = e2.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e2.sibling, r.index = e2.index, r.ref = e2.ref, r;
  }
  function Hu(e2, t, r, n, o, i) {
    var a = 2;
    if (n = e2, typeof e2 == "function")
      kp(e2) && (a = 1);
    else if (typeof e2 == "string")
      a = 5;
    else
      e:
        switch (e2) {
          case On:
            return Ii(r.children, o, i, t);
          case wg:
            a = 8, o |= 16;
            break;
          case Ud:
            a = 8, o |= 1;
            break;
          case Qa:
            return e2 = yr(12, r, t, o | 8), e2.elementType = Qa, e2.type = Qa, e2.lanes = i, e2;
          case Xa:
            return e2 = yr(13, r, t, o), e2.type = Xa, e2.elementType = Xa, e2.lanes = i, e2;
          case Vu:
            return e2 = yr(19, r, t, o), e2.elementType = Vu, e2.lanes = i, e2;
          case Yd:
            return Dp(r, o, i, t);
          case ed:
            return e2 = yr(24, r, t, o), e2.elementType = ed, e2.lanes = i, e2;
          default:
            if (typeof e2 == "object" && e2 !== null)
              switch (e2.$$typeof) {
                case jd:
                  a = 10;
                  break e;
                case $d:
                  a = 9;
                  break e;
                case fl:
                  a = 11;
                  break e;
                case dl:
                  a = 14;
                  break e;
                case Kd:
                  a = 16, n = null;
                  break e;
                case Gd:
                  a = 22;
                  break e;
              }
            throw Error(D(130, e2 == null ? e2 : typeof e2, ""));
        }
    return t = yr(a, r, t, o), t.elementType = e2, t.type = n, t.lanes = i, t;
  }
  function Ii(e2, t, r, n) {
    return e2 = yr(7, e2, n, t), e2.lanes = r, e2;
  }
  function Dp(e2, t, r, n) {
    return e2 = yr(23, e2, n, t), e2.elementType = Yd, e2.lanes = r, e2;
  }
  function Xf(e2, t, r) {
    return e2 = yr(6, e2, null, t), e2.lanes = r, e2;
  }
  function Zf(e2, t, r) {
    return t = yr(4, e2.children !== null ? e2.children : [], e2.key, t), t.lanes = r, t.stateNode = { containerInfo: e2.containerInfo, pendingChildren: null, implementation: e2.implementation }, t;
  }
  function $x(e2, t, r) {
    this.tag = t, this.containerInfo = e2, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = r, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Nf(0), this.expirationTimes = Nf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nf(0), this.mutableSourceEagerHydrationData = null;
  }
  function Kx(e2, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ao, key: n == null ? null : "" + n, children: e2, containerInfo: t, implementation: r };
  }
  function ll(e2, t, r, n) {
    var o = t.current, i = ur(), a = Gn(o);
    e:
      if (r) {
        r = r._reactInternals;
        t: {
          if (Uo(r) !== r || r.tag !== 1)
            throw Error(D(170));
          var s = r;
          do {
            switch (s.tag) {
              case 3:
                s = s.stateNode.context;
                break t;
              case 1:
                if (Yt(s.type)) {
                  s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            s = s.return;
          } while (s !== null);
          throw Error(D(171));
        }
        if (r.tag === 1) {
          var u = r.type;
          if (Yt(u)) {
            r = py(r, u, s);
            break e;
          }
        }
        r = s;
      } else
        r = Zn;
    return t.context === null ? t.context = r : t.pendingContext = r, t = $n(i, a), t.payload = { element: e2 }, n = n === void 0 ? null : n, n !== null && (t.callback = n), Kn(o, t), qn(o, a, i), a;
  }
  function Jf(e2) {
    if (e2 = e2.current, !e2.child)
      return null;
    switch (e2.child.tag) {
      case 5:
        return e2.child.stateNode;
      default:
        return e2.child.stateNode;
    }
  }
  function xg(e2, t) {
    if (e2 = e2.memoizedState, e2 !== null && e2.dehydrated !== null) {
      var r = e2.retryLane;
      e2.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Tp(e2, t) {
    xg(e2, t), (e2 = e2.alternate) && xg(e2, t);
  }
  function Gx() {
    return null;
  }
  function Ip(e2, t, r) {
    var n = r != null && r.hydrationOptions != null && r.hydrationOptions.mutableSources || null;
    if (r = new $x(e2, t, r != null && r.hydrate === true), t = yr(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), r.current = t, t.stateNode = r, mp(t), e2[Ni] = r.current, uy(e2.nodeType === 8 ? e2.parentNode : e2), n)
      for (e2 = 0; e2 < n.length; e2++) {
        t = n[e2];
        var o = t._getVersion;
        o = o(t._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [t, o] : r.mutableSourceEagerHydrationData.push(t, o);
      }
    this._internalRoot = r;
  }
  Ip.prototype.render = function(e2) {
    ll(e2, this._internalRoot, null, null);
  };
  Ip.prototype.unmount = function() {
    var e2 = this._internalRoot, t = e2.containerInfo;
    ll(null, e2, null, function() {
      t[Ni] = null;
    });
  };
  function ws(e2) {
    return !(!e2 || e2.nodeType !== 1 && e2.nodeType !== 9 && e2.nodeType !== 11 && (e2.nodeType !== 8 || e2.nodeValue !== " react-mount-point-unstable "));
  }
  function qx(e2, t) {
    if (t || (t = e2 ? e2.nodeType === 9 ? e2.documentElement : e2.firstChild : null, t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t)
      for (var r; r = e2.lastChild; )
        e2.removeChild(r);
    return new Ip(e2, 0, t ? { hydrate: true } : void 0);
  }
  function Fl(e2, t, r, n, o) {
    var i = r._reactRootContainer;
    if (i) {
      var a = i._internalRoot;
      if (typeof o == "function") {
        var s = o;
        o = function() {
          var l = Jf(a);
          s.call(l);
        };
      }
      ll(t, a, e2, o);
    } else {
      if (i = r._reactRootContainer = qx(r, n), a = i._internalRoot, typeof o == "function") {
        var u = o;
        o = function() {
          var l = Jf(a);
          u.call(l);
        };
      }
      jy(function() {
        ll(t, a, e2, o);
      });
    }
    return Jf(a);
  }
  Vg = function(e2) {
    if (e2.tag === 13) {
      var t = ur();
      qn(e2, 4, t), Tp(e2, 4);
    }
  };
  ep = function(e2) {
    if (e2.tag === 13) {
      var t = ur();
      qn(e2, 67108864, t), Tp(e2, 67108864);
    }
  };
  Wg = function(e2) {
    if (e2.tag === 13) {
      var t = ur(), r = Gn(e2);
      qn(e2, r, t), Tp(e2, r);
    }
  };
  Ug = function(e2, t) {
    return t();
  };
  cd = function(e2, t, r) {
    switch (t) {
      case "input":
        if (rd(e2, r), t = r.name, r.type === "radio" && t != null) {
          for (r = e2; r.parentNode; )
            r = r.parentNode;
          for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
            var n = r[t];
            if (n !== e2 && n.form === e2.form) {
              var o = yl(n);
              if (!o)
                throw Error(D(90));
              Dg(n), rd(n, o);
            }
          }
        }
        break;
      case "textarea":
        Ig(e2, r);
        break;
      case "select":
        t = r.value, t != null && _i(e2, !!r.multiple, t, false);
    }
  };
  Xd = Uy;
  Lg = function(e2, t, r, n, o) {
    var i = j;
    j |= 4;
    try {
      return zo(98, e2.bind(null, t, r, n, o));
    } finally {
      j = i, j === 0 && (zi(), Jr());
    }
  };
  Zd = function() {
    (j & 49) === 0 && (Mx(), ro());
  };
  Og = function(e2, t) {
    var r = j;
    j |= 2;
    try {
      return e2(t);
    } finally {
      j = r, j === 0 && (zi(), Jr());
    }
  };
  function Xy(e2, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ws(t))
      throw Error(D(200));
    return Kx(e2, t, null, r);
  }
  var Yx = { Events: [Fs, yi, yl, Bg, Ng, ro, { current: false }] }, Ua = { findFiberByHostInstance: Mo, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, Qx = { bundleType: Ua.bundleType, version: Ua.version, rendererPackageName: Ua.rendererPackageName, rendererConfig: Ua.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Wo.ReactCurrentDispatcher, findHostInstanceByFiber: function(e2) {
    return e2 = Hg(e2), e2 === null ? null : e2.stateNode;
  }, findFiberByHostInstance: Ua.findFiberByHostInstance || Gx, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (ja = __REACT_DEVTOOLS_GLOBAL_HOOK__, !ja.isDisabled && ja.supportsFiber))
    try {
      cp = ja.inject(Qx), Lo = ja;
    } catch {
    }
  var ja;
  _r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yx;
  _r.createPortal = Xy;
  _r.findDOMNode = function(e2) {
    if (e2 == null)
      return null;
    if (e2.nodeType === 1)
      return e2;
    var t = e2._reactInternals;
    if (t === void 0)
      throw typeof e2.render == "function" ? Error(D(188)) : Error(D(268, Object.keys(e2)));
    return e2 = Hg(t), e2 = e2 === null ? null : e2.stateNode, e2;
  };
  _r.flushSync = function(e2, t) {
    var r = j;
    if ((r & 48) !== 0)
      return e2(t);
    j |= 1;
    try {
      if (e2)
        return zo(99, e2.bind(null, t));
    } finally {
      j = r, Jr();
    }
  };
  _r.hydrate = function(e2, t, r) {
    if (!ws(t))
      throw Error(D(200));
    return Fl(null, e2, t, true, r);
  };
  _r.render = function(e2, t, r) {
    if (!ws(t))
      throw Error(D(200));
    return Fl(null, e2, t, false, r);
  };
  _r.unmountComponentAtNode = function(e2) {
    if (!ws(e2))
      throw Error(D(40));
    return e2._reactRootContainer ? (jy(function() {
      Fl(null, null, e2, false, function() {
        e2._reactRootContainer = null, e2[Ni] = null;
      });
    }), true) : false;
  };
  _r.unstable_batchedUpdates = Uy;
  _r.unstable_createPortal = function(e2, t) {
    return Xy(e2, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  };
  _r.unstable_renderSubtreeIntoContainer = function(e2, t, r, n) {
    if (!ws(r))
      throw Error(D(200));
    if (e2 == null || e2._reactInternals === void 0)
      throw Error(D(38));
    return Fl(e2, t, r, false, n);
  };
  _r.version = "17.0.2";
});
var Rp = sr((VI, e0) => {
  "use strict";
  function Jy() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jy);
      } catch (e2) {
        console.error(e2);
      }
  }
  Jy(), e0.exports = Zy();
});
var R0 = sr((he) => {
  "use strict";
  var st = typeof Symbol == "function" && Symbol.for, zp = st ? Symbol.for("react.element") : 60103, Hp = st ? Symbol.for("react.portal") : 60106, Ll = st ? Symbol.for("react.fragment") : 60107, Ol = st ? Symbol.for("react.strict_mode") : 60108, zl = st ? Symbol.for("react.profiler") : 60114, Hl = st ? Symbol.for("react.provider") : 60109, Vl = st ? Symbol.for("react.context") : 60110, Vp = st ? Symbol.for("react.async_mode") : 60111, Wl = st ? Symbol.for("react.concurrent_mode") : 60111, Ul = st ? Symbol.for("react.forward_ref") : 60112, jl = st ? Symbol.for("react.suspense") : 60113, Eb = st ? Symbol.for("react.suspense_list") : 60120, $l = st ? Symbol.for("react.memo") : 60115, Kl = st ? Symbol.for("react.lazy") : 60116, Cb = st ? Symbol.for("react.block") : 60121, Sb = st ? Symbol.for("react.fundamental") : 60117, _b = st ? Symbol.for("react.responder") : 60118, Fb = st ? Symbol.for("react.scope") : 60119;
  function cr(e2) {
    if (typeof e2 == "object" && e2 !== null) {
      var t = e2.$$typeof;
      switch (t) {
        case zp:
          switch (e2 = e2.type, e2) {
            case Vp:
            case Wl:
            case Ll:
            case zl:
            case Ol:
            case jl:
              return e2;
            default:
              switch (e2 = e2 && e2.$$typeof, e2) {
                case Vl:
                case Ul:
                case Kl:
                case $l:
                case Hl:
                  return e2;
                default:
                  return t;
              }
          }
        case Hp:
          return t;
      }
    }
  }
  function I0(e2) {
    return cr(e2) === Wl;
  }
  he.AsyncMode = Vp;
  he.ConcurrentMode = Wl;
  he.ContextConsumer = Vl;
  he.ContextProvider = Hl;
  he.Element = zp;
  he.ForwardRef = Ul;
  he.Fragment = Ll;
  he.Lazy = Kl;
  he.Memo = $l;
  he.Portal = Hp;
  he.Profiler = zl;
  he.StrictMode = Ol;
  he.Suspense = jl;
  he.isAsyncMode = function(e2) {
    return I0(e2) || cr(e2) === Vp;
  };
  he.isConcurrentMode = I0;
  he.isContextConsumer = function(e2) {
    return cr(e2) === Vl;
  };
  he.isContextProvider = function(e2) {
    return cr(e2) === Hl;
  };
  he.isElement = function(e2) {
    return typeof e2 == "object" && e2 !== null && e2.$$typeof === zp;
  };
  he.isForwardRef = function(e2) {
    return cr(e2) === Ul;
  };
  he.isFragment = function(e2) {
    return cr(e2) === Ll;
  };
  he.isLazy = function(e2) {
    return cr(e2) === Kl;
  };
  he.isMemo = function(e2) {
    return cr(e2) === $l;
  };
  he.isPortal = function(e2) {
    return cr(e2) === Hp;
  };
  he.isProfiler = function(e2) {
    return cr(e2) === zl;
  };
  he.isStrictMode = function(e2) {
    return cr(e2) === Ol;
  };
  he.isSuspense = function(e2) {
    return cr(e2) === jl;
  };
  he.isValidElementType = function(e2) {
    return typeof e2 == "string" || typeof e2 == "function" || e2 === Ll || e2 === Wl || e2 === zl || e2 === Ol || e2 === jl || e2 === Eb || typeof e2 == "object" && e2 !== null && (e2.$$typeof === Kl || e2.$$typeof === $l || e2.$$typeof === Hl || e2.$$typeof === Vl || e2.$$typeof === Ul || e2.$$typeof === Sb || e2.$$typeof === _b || e2.$$typeof === Fb || e2.$$typeof === Cb);
  };
  he.typeOf = cr;
});
var Wp = sr((RR, A0) => {
  "use strict";
  A0.exports = R0();
});
var $p = sr((AR, O0) => {
  "use strict";
  var Up = Wp(), xb = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, bb = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, wb = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, N0 = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, jp = {};
  jp[Up.ForwardRef] = wb;
  jp[Up.Memo] = N0;
  function P0(e2) {
    return Up.isMemo(e2) ? N0 : jp[e2.$$typeof] || xb;
  }
  var kb = Object.defineProperty, Db = Object.getOwnPropertyNames, M0 = Object.getOwnPropertySymbols, Tb = Object.getOwnPropertyDescriptor, Ib = Object.getPrototypeOf, B0 = Object.prototype;
  function L0(e2, t, r) {
    if (typeof t != "string") {
      if (B0) {
        var n = Ib(t);
        n && n !== B0 && L0(e2, n, r);
      }
      var o = Db(t);
      M0 && (o = o.concat(M0(t)));
      for (var i = P0(e2), a = P0(t), s = 0; s < o.length; ++s) {
        var u = o[s];
        if (!bb[u] && !(r && r[u]) && !(a && a[u]) && !(i && i[u])) {
          var l = Tb(t, u);
          try {
            kb(e2, u, l);
          } catch {
          }
        }
      }
    }
    return e2;
  }
  O0.exports = L0;
});
var Q0 = sr((yA, Y0) => {
  Y0.exports = function(t, r, n, o) {
    var i = n ? n.call(o, t, r) : void 0;
    if (i !== void 0)
      return !!i;
    if (t === r)
      return true;
    if (typeof t != "object" || !t || typeof r != "object" || !r)
      return false;
    var a = Object.keys(t), s = Object.keys(r);
    if (a.length !== s.length)
      return false;
    for (var u = Object.prototype.hasOwnProperty.bind(r), l = 0; l < a.length; l++) {
      var c = a[l];
      if (!u(c))
        return false;
      var d = t[c], p = r[c];
      if (i = n ? n.call(o, d, p, c) : void 0, i === false || i === void 0 && d !== p)
        return false;
    }
    return true;
  };
});
var WE = sr((UA, uc) => {
  var _E, FE, xE, bE, wE, kE, DE, TE, IE, ac, cm, RE, AE, PE, Zi, ME, BE, NE, LE, OE, zE, HE, VE, sc;
  (function(e2) {
    var t = typeof window == "object" ? window : typeof self == "object" ? self : typeof this == "object" ? this : {};
    typeof define == "function" && define.amd ? define("tslib", ["exports"], function(n) {
      e2(r(t, r(n)));
    }) : typeof uc == "object" && typeof uc.exports == "object" ? e2(r(t, r(uc.exports))) : e2(r(t));
    function r(n, o) {
      return n !== t && (typeof Object.create == "function" ? Object.defineProperty(n, "__esModule", { value: true }) : n.__esModule = true), function(i, a) {
        return n[i] = o ? o(i, a) : a;
      };
    }
  })(function(e2) {
    var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var i in o)
        Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
    };
    _E = function(n, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      t(n, o);
      function i() {
        this.constructor = n;
      }
      n.prototype = o === null ? Object.create(o) : (i.prototype = o.prototype, new i());
    }, FE = Object.assign || function(n) {
      for (var o, i = 1, a = arguments.length; i < a; i++) {
        o = arguments[i];
        for (var s in o)
          Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
      }
      return n;
    }, xE = function(n, o) {
      var i = {};
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && o.indexOf(a) < 0 && (i[a] = n[a]);
      if (n != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, a = Object.getOwnPropertySymbols(n); s < a.length; s++)
          o.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[s]) && (i[a[s]] = n[a[s]]);
      return i;
    }, bE = function(n, o, i, a) {
      var s = arguments.length, u = s < 3 ? o : a === null ? a = Object.getOwnPropertyDescriptor(o, i) : a, l;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        u = Reflect.decorate(n, o, i, a);
      else
        for (var c = n.length - 1; c >= 0; c--)
          (l = n[c]) && (u = (s < 3 ? l(u) : s > 3 ? l(o, i, u) : l(o, i)) || u);
      return s > 3 && u && Object.defineProperty(o, i, u), u;
    }, wE = function(n, o) {
      return function(i, a) {
        o(i, a, n);
      };
    }, kE = function(n, o) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(n, o);
    }, DE = function(n, o, i, a) {
      function s(u) {
        return u instanceof i ? u : new i(function(l) {
          l(u);
        });
      }
      return new (i || (i = Promise))(function(u, l) {
        function c(v) {
          try {
            p(a.next(v));
          } catch (g) {
            l(g);
          }
        }
        function d(v) {
          try {
            p(a.throw(v));
          } catch (g) {
            l(g);
          }
        }
        function p(v) {
          v.done ? u(v.value) : s(v.value).then(c, d);
        }
        p((a = a.apply(n, o || [])).next());
      });
    }, TE = function(n, o) {
      var i = { label: 0, sent: function() {
        if (u[0] & 1)
          throw u[1];
        return u[1];
      }, trys: [], ops: [] }, a, s, u, l;
      return l = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
        return this;
      }), l;
      function c(p) {
        return function(v) {
          return d([p, v]);
        };
      }
      function d(p) {
        if (a)
          throw new TypeError("Generator is already executing.");
        for (; i; )
          try {
            if (a = 1, s && (u = p[0] & 2 ? s.return : p[0] ? s.throw || ((u = s.return) && u.call(s), 0) : s.next) && !(u = u.call(s, p[1])).done)
              return u;
            switch (s = 0, u && (p = [p[0] & 2, u.value]), p[0]) {
              case 0:
              case 1:
                u = p;
                break;
              case 4:
                return i.label++, { value: p[1], done: false };
              case 5:
                i.label++, s = p[1], p = [0];
                continue;
              case 7:
                p = i.ops.pop(), i.trys.pop();
                continue;
              default:
                if (u = i.trys, !(u = u.length > 0 && u[u.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                  i = 0;
                  continue;
                }
                if (p[0] === 3 && (!u || p[1] > u[0] && p[1] < u[3])) {
                  i.label = p[1];
                  break;
                }
                if (p[0] === 6 && i.label < u[1]) {
                  i.label = u[1], u = p;
                  break;
                }
                if (u && i.label < u[2]) {
                  i.label = u[2], i.ops.push(p);
                  break;
                }
                u[2] && i.ops.pop(), i.trys.pop();
                continue;
            }
            p = o.call(n, i);
          } catch (v) {
            p = [6, v], s = 0;
          } finally {
            a = u = 0;
          }
        if (p[0] & 5)
          throw p[1];
        return { value: p[0] ? p[1] : void 0, done: true };
      }
    }, IE = function(n, o) {
      for (var i in n)
        i !== "default" && !Object.prototype.hasOwnProperty.call(o, i) && sc(o, n, i);
    }, sc = Object.create ? function(n, o, i, a) {
      a === void 0 && (a = i), Object.defineProperty(n, a, { enumerable: true, get: function() {
        return o[i];
      } });
    } : function(n, o, i, a) {
      a === void 0 && (a = i), n[a] = o[i];
    }, ac = function(n) {
      var o = typeof Symbol == "function" && Symbol.iterator, i = o && n[o], a = 0;
      if (i)
        return i.call(n);
      if (n && typeof n.length == "number")
        return { next: function() {
          return n && a >= n.length && (n = void 0), { value: n && n[a++], done: !n };
        } };
      throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, cm = function(n, o) {
      var i = typeof Symbol == "function" && n[Symbol.iterator];
      if (!i)
        return n;
      var a = i.call(n), s, u = [], l;
      try {
        for (; (o === void 0 || o-- > 0) && !(s = a.next()).done; )
          u.push(s.value);
      } catch (c) {
        l = { error: c };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (l)
            throw l.error;
        }
      }
      return u;
    }, RE = function() {
      for (var n = [], o = 0; o < arguments.length; o++)
        n = n.concat(cm(arguments[o]));
      return n;
    }, AE = function() {
      for (var n = 0, o = 0, i = arguments.length; o < i; o++)
        n += arguments[o].length;
      for (var a = Array(n), s = 0, o = 0; o < i; o++)
        for (var u = arguments[o], l = 0, c = u.length; l < c; l++, s++)
          a[s] = u[l];
      return a;
    }, PE = function(n, o, i) {
      if (i || arguments.length === 2)
        for (var a = 0, s = o.length, u; a < s; a++)
          (u || !(a in o)) && (u || (u = Array.prototype.slice.call(o, 0, a)), u[a] = o[a]);
      return n.concat(u || Array.prototype.slice.call(o));
    }, Zi = function(n) {
      return this instanceof Zi ? (this.v = n, this) : new Zi(n);
    }, ME = function(n, o, i) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var a = i.apply(n, o || []), s, u = [];
      return s = {}, l("next"), l("throw"), l("return"), s[Symbol.asyncIterator] = function() {
        return this;
      }, s;
      function l(y) {
        a[y] && (s[y] = function(f) {
          return new Promise(function(m, h) {
            u.push([y, f, m, h]) > 1 || c(y, f);
          });
        });
      }
      function c(y, f) {
        try {
          d(a[y](f));
        } catch (m) {
          g(u[0][3], m);
        }
      }
      function d(y) {
        y.value instanceof Zi ? Promise.resolve(y.value.v).then(p, v) : g(u[0][2], y);
      }
      function p(y) {
        c("next", y);
      }
      function v(y) {
        c("throw", y);
      }
      function g(y, f) {
        y(f), u.shift(), u.length && c(u[0][0], u[0][1]);
      }
    }, BE = function(n) {
      var o, i;
      return o = {}, a("next"), a("throw", function(s) {
        throw s;
      }), a("return"), o[Symbol.iterator] = function() {
        return this;
      }, o;
      function a(s, u) {
        o[s] = n[s] ? function(l) {
          return (i = !i) ? { value: Zi(n[s](l)), done: s === "return" } : u ? u(l) : l;
        } : u;
      }
    }, NE = function(n) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var o = n[Symbol.asyncIterator], i;
      return o ? o.call(n) : (n = typeof ac == "function" ? ac(n) : n[Symbol.iterator](), i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function a(u) {
        i[u] = n[u] && function(l) {
          return new Promise(function(c, d) {
            l = n[u](l), s(c, d, l.done, l.value);
          });
        };
      }
      function s(u, l, c, d) {
        Promise.resolve(d).then(function(p) {
          u({ value: p, done: c });
        }, l);
      }
    }, LE = function(n, o) {
      return Object.defineProperty ? Object.defineProperty(n, "raw", { value: o }) : n.raw = o, n;
    };
    var r = Object.create ? function(n, o) {
      Object.defineProperty(n, "default", { enumerable: true, value: o });
    } : function(n, o) {
      n.default = o;
    };
    OE = function(n) {
      if (n && n.__esModule)
        return n;
      var o = {};
      if (n != null)
        for (var i in n)
          i !== "default" && Object.prototype.hasOwnProperty.call(n, i) && sc(o, n, i);
      return r(o, n), o;
    }, zE = function(n) {
      return n && n.__esModule ? n : { default: n };
    }, HE = function(n, o, i, a) {
      if (i === "a" && !a)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof o == "function" ? n !== o || !a : !o.has(n))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return i === "m" ? a : i === "a" ? a.call(n) : a ? a.value : o.get(n);
    }, VE = function(n, o, i, a, s) {
      if (a === "m")
        throw new TypeError("Private method is not writable");
      if (a === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof o == "function" ? n !== o || !s : !o.has(n))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return a === "a" ? s.call(n, i) : s ? s.value = i : o.set(n, i), i;
    }, e2("__extends", _E), e2("__assign", FE), e2("__rest", xE), e2("__decorate", bE), e2("__param", wE), e2("__metadata", kE), e2("__awaiter", DE), e2("__generator", TE), e2("__exportStar", IE), e2("__createBinding", sc), e2("__values", ac), e2("__read", cm), e2("__spread", RE), e2("__spreadArrays", AE), e2("__spreadArray", PE), e2("__await", Zi), e2("__asyncGenerator", ME), e2("__asyncDelegator", BE), e2("__asyncValues", NE), e2("__makeTemplateObject", LE), e2("__importStar", OE), e2("__importDefault", zE), e2("__classPrivateFieldGet", HE), e2("__classPrivateFieldSet", VE);
  });
});
var p1 = sr((yO, Wc) => {
  (function() {
    "use strict";
    var e2 = {}.hasOwnProperty;
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) {
        var o = arguments[n];
        if (!!o) {
          var i = typeof o;
          if (i === "string" || i === "number")
            r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var a = t.apply(null, o);
              a && r.push(a);
            }
          } else if (i === "object")
            if (o.toString === Object.prototype.toString)
              for (var s in o)
                e2.call(o, s) && o[s] && r.push(s);
            else
              r.push(o.toString());
        }
      }
      return r.join(" ");
    }
    typeof Wc < "u" && Wc.exports ? (t.default = t, Wc.exports = t) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
      return t;
    }) : window.classNames = t;
  })();
});
var E_ = N(L());
var C_ = N(Rp());
var I = N(L());
var no = N(L());
var xl;
var bl;
function t0() {
  return !xl && typeof document < "u" && (xl = Xx(), window.requestAnimationFrame(() => {
    xl = void 0;
  })), xl;
}
function Xx() {
  let e2 = document.createElement("style");
  e2.setAttribute("data-ms", "1");
  let t = document.head;
  return e2.type = "text/css", bl && bl.nextElementSibling ? t.insertBefore(e2, bl.nextElementSibling) : t.appendChild(e2), bl = e2, e2;
}
var r0 = "&";
function n0(e2) {
  let t = {}, r = 0, n = r0;
  for (; e2.length > 0 && r > -1; ) {
    r = e2.search(/{|;|}/);
    let o = e2.slice(0, r).trim();
    switch (e2[r]) {
      case ";":
        let i = o.split(":"), a = i[0].trim(), s = i[1].trim();
        t[n] = t[n] || {}, t[n][a] = s;
        break;
      case "{":
        let u = o.slice(0, o.length);
        n = u.indexOf("&") === -1 ? n + u : u;
        break;
      case "}":
        n = r0;
        break;
    }
    e2 = e2.substring(r + 1);
  }
  return t;
}
var kl = {};
function o0(e2) {
  let t = [], r = n0(e2);
  for (let n in r) {
    let o = r[n];
    for (let i in o) {
      let a = o[i];
      t.push(Zx(n, i, a) || Jx(n, i, a));
    }
  }
  return t.join(" ");
}
function Zx(e2, t, r) {
  let n = kl[e2] = kl[e2] || {};
  return (n[t] = n[t] || {})[r];
}
function Jx(e2, t, r) {
  let n = kl[e2][t][r] = tb();
  return eb(e2.replace(/&/g, "." + n), t, r), n;
}
function eb(e2, t, r) {
  let n = t0(), o = `${e2}{${t}:${r};}`, i = n.sheet;
  i.insertRule(o, i.rules.length);
}
var Ap = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wl = Ap.length;
var i0 = 0;
function tb() {
  let e2 = "", t = i0++;
  if (t < wl)
    return Ap[t % wl];
  for (; t > 0; )
    e2 = Ap[t % wl] + e2, t = Math.floor(t / wl);
  return e2;
}
document.getRules = () => {
  let e2 = [];
  e2.push('<style data-ms="1">');
  let t = Array.from(document.querySelectorAll("style[data-ms]"));
  for (let r of t) {
    let o = r.sheet.rules;
    for (let i of o)
      e2.push(i.cssText);
  }
  return e2.push("</style>"), e2.push('<script data-ms-hydrate="1">'), e2.push(JSON.stringify({ rules: kl, counter: i0 })), e2.push("<\/script>"), e2.join(`
`);
};
var Dl = N(L());
var Pp = Dl.createContext({ default: {} });
var a0 = (e2) => Dl.createElement(Pp.Provider, { value: e2.theme }, e2.children);
var rb = ["div", "button", "h1", "h2", "h3", "a"];
var Tl = (e2, t = {}) => function() {
  let r = arguments, n = e2.__styles, o = /* @__PURE__ */ new Map();
  e2 = e2.__component || e2;
  let i = function(s) {
    let { as: u, className: l, ...c } = s, d = u || e2, p = no.useContext(Pp), v = { ...t.state ? t.state(c) : c, theme: p };
    v.className = nb(o, v, n, r), delete v.theme;
    let g = no.useRef(v);
    return no.useEffect(() => {
      let y = Object.entries(v).reduce((f, [m, h]) => (g.current[m] !== h && (f[m] = [g.current[m], h]), f), {});
      g.current = c;
    }), no.createElement(d, { ...v });
  };
  return i.displayName = t.displayName, i.__component = e2, i.__styles = r, i;
};
function nb(e2, t, ...r) {
  let n = [];
  for (let o of r)
    if (o)
      for (let i = 1; i < o.length; i++) {
        let a = o[i];
        n.push(typeof a == "function" ? a(t) : a);
      }
  for (let o = 0; o < n.length; o++) {
    let i = ob(n[o]);
    e2.has(i) || e2.set(i, /* @__PURE__ */ new Map()), e2 = e2.get(i);
  }
  if (!e2.__retVal) {
    let o = [];
    for (let i of r)
      if (i) {
        let a = i[0];
        for (let s = 0; s < a.length; s++)
          if (o.push(a[s]), s < a.length - 1) {
            let u = n.shift();
            u !== void 0 && o.push(u);
          }
      }
    e2.__retVal = o0(o.join(""));
  }
  return e2.__retVal;
}
function ob(e2) {
  switch (e2) {
    case void 0:
      return "__undefined__";
    case null:
      return "__null__";
    default:
      return e2;
  }
}
rb.forEach((e2) => Tl[e2] = Tl(e2));
function $o() {
  return $o = Object.assign || function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, $o.apply(this, arguments);
}
var dA = N(L());
function ib(e2) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e2(r)), t[r];
  };
}
var Il = ib;
var ab = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var sb = Il(function(e2) {
  return ab.test(e2) || e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && e2.charCodeAt(2) < 91;
});
var s0 = sb;
var io = N(L());
var As = N(L());
function ub(e2) {
  if (e2.sheet)
    return e2.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e2)
      return document.styleSheets[t];
}
function lb(e2) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e2.key), e2.nonce !== void 0 && t.setAttribute("nonce", e2.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Mp = function() {
  function e2(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? true : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e2.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(lb(this));
    var o = this.tags[this.tags.length - 1];
    if (false)
      var i;
    if (this.isSpeedy) {
      var a = ub(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e2;
}();
var at = "-ms-";
var Hi = "-moz-";
var ie = "-webkit-";
var Rl = "comm";
var Vi = "rule";
var Wi = "decl";
var u0 = "@import";
var l0 = "@keyframes";
var c0 = Math.abs;
var Ko = String.fromCharCode;
function f0(e2, t) {
  return (((t << 2 ^ mt(e2, 0)) << 2 ^ mt(e2, 1)) << 2 ^ mt(e2, 2)) << 2 ^ mt(e2, 3);
}
function Al(e2) {
  return e2.trim();
}
function d0(e2, t) {
  return (e2 = t.exec(e2)) ? e2[0] : e2;
}
function ae(e2, t, r) {
  return e2.replace(t, r);
}
function Bp(e2, t) {
  return e2.indexOf(t);
}
function mt(e2, t) {
  return e2.charCodeAt(t) | 0;
}
function oo(e2, t, r) {
  return e2.slice(t, r);
}
function It(e2) {
  return e2.length;
}
function Ui(e2) {
  return e2.length;
}
function ji(e2, t) {
  return t.push(e2), e2;
}
function p0(e2, t) {
  return e2.map(t).join("");
}
var Pl = 1;
var $i = 1;
var m0 = 0;
var Rt = 0;
var Qe = 0;
var Gi = "";
function ks(e2, t, r, n, o, i, a) {
  return { value: e2, root: t, parent: r, type: n, props: o, children: i, line: Pl, column: $i, length: a, return: "" };
}
function qi(e2, t, r) {
  return ks(e2, t.root, t.parent, r, t.props, t.children, 0);
}
function h0() {
  return Qe;
}
function v0() {
  return Qe = Rt > 0 ? mt(Gi, --Rt) : 0, $i--, Qe === 10 && ($i = 1, Pl--), Qe;
}
function At() {
  return Qe = Rt < m0 ? mt(Gi, Rt++) : 0, $i++, Qe === 10 && ($i = 1, Pl++), Qe;
}
function Fr() {
  return mt(Gi, Rt);
}
function Ds() {
  return Rt;
}
function Yi(e2, t) {
  return oo(Gi, e2, t);
}
function Ki(e2) {
  switch (e2) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ml(e2) {
  return Pl = $i = 1, m0 = It(Gi = e2), Rt = 0, [];
}
function Bl(e2) {
  return Gi = "", e2;
}
function Ts(e2) {
  return Al(Yi(Rt - 1, Np(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
}
function g0(e2) {
  for (; (Qe = Fr()) && Qe < 33; )
    At();
  return Ki(e2) > 2 || Ki(Qe) > 3 ? "" : " ";
}
function y0(e2, t) {
  for (; --t && At() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return Yi(e2, Ds() + (t < 6 && Fr() == 32 && At() == 32));
}
function Np(e2) {
  for (; At(); )
    switch (Qe) {
      case e2:
        return Rt;
      case 34:
      case 39:
        return Np(e2 === 34 || e2 === 39 ? e2 : Qe);
      case 40:
        e2 === 41 && Np(e2);
        break;
      case 92:
        At();
        break;
    }
  return Rt;
}
function E0(e2, t) {
  for (; At() && e2 + Qe !== 47 + 10; )
    if (e2 + Qe === 42 + 42 && Fr() === 47)
      break;
  return "/*" + Yi(t, Rt - 1) + "*" + Ko(e2 === 47 ? e2 : At());
}
function C0(e2) {
  for (; !Ki(Fr()); )
    At();
  return Yi(e2, Rt);
}
function F0(e2) {
  return Bl(Nl("", null, null, null, [""], e2 = Ml(e2), 0, [0], e2));
}
function Nl(e2, t, r, n, o, i, a, s, u) {
  for (var l = 0, c = 0, d = a, p = 0, v = 0, g = 0, y = 1, f = 1, m = 1, h = 0, E = "", C = o, x = i, S = n, F = E; f; )
    switch (g = h, h = At()) {
      case 34:
      case 39:
      case 91:
      case 40:
        F += Ts(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        F += g0(g);
        break;
      case 92:
        F += y0(Ds() - 1, 7);
        continue;
      case 47:
        switch (Fr()) {
          case 42:
          case 47:
            ji(cb(E0(At(), Ds()), t, r), u);
            break;
          default:
            F += "/";
        }
        break;
      case 123 * y:
        s[l++] = It(F) * m;
      case 125 * y:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            f = 0;
          case 59 + c:
            v > 0 && It(F) - d && ji(v > 32 ? _0(F + ";", n, r, d - 1) : _0(ae(F, " ", "") + ";", n, r, d - 2), u);
            break;
          case 59:
            F += ";";
          default:
            if (ji(S = S0(F, t, r, l, c, o, s, E, C = [], x = [], d), i), h === 123)
              if (c === 0)
                Nl(F, t, S, S, C, i, d, s, x);
              else
                switch (p) {
                  case 100:
                  case 109:
                  case 115:
                    Nl(e2, S, S, n && ji(S0(e2, S, S, 0, 0, o, s, E, o, C = [], d), x), o, x, d, s, n ? C : x);
                    break;
                  default:
                    Nl(F, S, S, S, [""], x, d, s, x);
                }
        }
        l = c = v = 0, y = m = 1, E = F = "", d = a;
        break;
      case 58:
        d = 1 + It(F), v = g;
      default:
        if (y < 1) {
          if (h == 123)
            --y;
          else if (h == 125 && y++ == 0 && v0() == 125)
            continue;
        }
        switch (F += Ko(h), h * y) {
          case 38:
            m = c > 0 ? 1 : (F += "\f", -1);
            break;
          case 44:
            s[l++] = (It(F) - 1) * m, m = 1;
            break;
          case 64:
            Fr() === 45 && (F += Ts(At())), p = Fr(), c = It(E = F += C0(Ds())), h++;
            break;
          case 45:
            g === 45 && It(F) == 2 && (y = 0);
        }
    }
  return i;
}
function S0(e2, t, r, n, o, i, a, s, u, l, c) {
  for (var d = o - 1, p = o === 0 ? i : [""], v = Ui(p), g = 0, y = 0, f = 0; g < n; ++g)
    for (var m = 0, h = oo(e2, d + 1, d = c0(y = a[g])), E = e2; m < v; ++m)
      (E = Al(y > 0 ? p[m] + " " + h : ae(h, /&\f/g, p[m]))) && (u[f++] = E);
  return ks(e2, t, r, o === 0 ? Vi : s, u, l, c);
}
function cb(e2, t, r) {
  return ks(e2, t, r, Rl, Ko(h0()), oo(e2, 2, -2), 0);
}
function _0(e2, t, r, n) {
  return ks(e2, t, r, Wi, oo(e2, 0, n), oo(e2, n + 1, -1), n);
}
function Lp(e2, t) {
  switch (f0(e2, t)) {
    case 5103:
      return ie + "print-" + e2 + e2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ie + e2 + e2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ie + e2 + Hi + e2 + at + e2 + e2;
    case 6828:
    case 4268:
      return ie + e2 + at + e2 + e2;
    case 6165:
      return ie + e2 + at + "flex-" + e2 + e2;
    case 5187:
      return ie + e2 + ae(e2, /(\w+).+(:[^]+)/, ie + "box-$1$2" + at + "flex-$1$2") + e2;
    case 5443:
      return ie + e2 + at + "flex-item-" + ae(e2, /flex-|-self/, "") + e2;
    case 4675:
      return ie + e2 + at + "flex-line-pack" + ae(e2, /align-content|flex-|-self/, "") + e2;
    case 5548:
      return ie + e2 + at + ae(e2, "shrink", "negative") + e2;
    case 5292:
      return ie + e2 + at + ae(e2, "basis", "preferred-size") + e2;
    case 6060:
      return ie + "box-" + ae(e2, "-grow", "") + ie + e2 + at + ae(e2, "grow", "positive") + e2;
    case 4554:
      return ie + ae(e2, /([^-])(transform)/g, "$1" + ie + "$2") + e2;
    case 6187:
      return ae(ae(ae(e2, /(zoom-|grab)/, ie + "$1"), /(image-set)/, ie + "$1"), e2, "") + e2;
    case 5495:
    case 3959:
      return ae(e2, /(image-set\([^]*)/, ie + "$1$`$1");
    case 4968:
      return ae(ae(e2, /(.+:)(flex-)?(.*)/, ie + "box-pack:$3" + at + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ie + e2 + e2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ae(e2, /(.+)-inline(.+)/, ie + "$1$2") + e2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (It(e2) - 1 - t > 6)
        switch (mt(e2, t + 1)) {
          case 109:
            if (mt(e2, t + 4) !== 45)
              break;
          case 102:
            return ae(e2, /(.+:)(.+)-([^]+)/, "$1" + ie + "$2-$3$1" + Hi + (mt(e2, t + 3) == 108 ? "$3" : "$2-$3")) + e2;
          case 115:
            return ~Bp(e2, "stretch") ? Lp(ae(e2, "stretch", "fill-available"), t) + e2 : e2;
        }
      break;
    case 4949:
      if (mt(e2, t + 1) !== 115)
        break;
    case 6444:
      switch (mt(e2, It(e2) - 3 - (~Bp(e2, "!important") && 10))) {
        case 107:
          return ae(e2, ":", ":" + ie) + e2;
        case 101:
          return ae(e2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ie + (mt(e2, 14) === 45 ? "inline-" : "") + "box$3$1" + ie + "$2$3$1" + at + "$2box$3") + e2;
      }
      break;
    case 5936:
      switch (mt(e2, t + 11)) {
        case 114:
          return ie + e2 + at + ae(e2, /[svh]\w+-[tblr]{2}/, "tb") + e2;
        case 108:
          return ie + e2 + at + ae(e2, /[svh]\w+-[tblr]{2}/, "tb-rl") + e2;
        case 45:
          return ie + e2 + at + ae(e2, /[svh]\w+-[tblr]{2}/, "lr") + e2;
      }
      return ie + e2 + at + e2 + e2;
  }
  return e2;
}
function Go(e2, t) {
  for (var r = "", n = Ui(e2), o = 0; o < n; o++)
    r += t(e2[o], o, e2, t) || "";
  return r;
}
function x0(e2, t, r, n) {
  switch (e2.type) {
    case u0:
    case Wi:
      return e2.return = e2.return || e2.value;
    case Rl:
      return "";
    case Vi:
      e2.value = e2.props.join(",");
  }
  return It(r = Go(e2.children, n)) ? e2.return = e2.value + "{" + r + "}" : "";
}
function b0(e2) {
  var t = Ui(e2);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e2[s](r, n, o, i) || "";
    return a;
  };
}
function w0(e2) {
  return function(t) {
    t.root || (t = t.return) && e2(t);
  };
}
function k0(e2, t, r, n) {
  if (!e2.return)
    switch (e2.type) {
      case Wi:
        e2.return = Lp(e2.value, e2.length);
        break;
      case l0:
        return Go([qi(ae(e2.value, "@", "@" + ie), e2, "")], n);
      case Vi:
        if (e2.length)
          return p0(e2.props, function(o) {
            switch (d0(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Go([qi(ae(o, /:(read-\w+)/, ":" + Hi + "$1"), e2, "")], n);
              case "::placeholder":
                return Go([qi(ae(o, /:(plac\w+)/, ":" + ie + "input-$1"), e2, ""), qi(ae(o, /:(plac\w+)/, ":" + Hi + "$1"), e2, ""), qi(ae(o, /:(plac\w+)/, at + "input-$1"), e2, "")], n);
            }
            return "";
          });
    }
}
var fb = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
var Op = fb;
var db = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Fr(), o === 38 && i === 12 && (r[n] = 1), !Ki(i); )
    At();
  return Yi(t, Rt);
};
var pb = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Ki(o)) {
      case 0:
        o === 38 && Fr() === 12 && (r[n] = 1), t[n] += db(Rt - 1, r, n);
        break;
      case 2:
        t[n] += Ts(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Fr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Ko(o);
    }
  while (o = At());
  return t;
};
var mb = function(t, r) {
  return Bl(pb(Ml(t), r));
};
var D0 = /* @__PURE__ */ new WeakMap();
var hb = function(t) {
  if (!(t.type !== "rule" || !t.parent || !t.length)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !D0.get(n)) && !o) {
      D0.set(t, true);
      for (var i = [], a = mb(r, i), s = n.props, u = 0, l = 0; u < a.length; u++)
        for (var c = 0; c < s.length; c++, l++)
          t.props[l] = i[u] ? a[u].replace(/&\f/g, s[c]) : s[c] + " " + a[u];
    }
  }
};
var vb = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
var gb = [k0];
var yb = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var f = y.getAttribute("data-emotion");
      f.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || gb, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(y) {
    for (var f = y.getAttribute("data-emotion").split(" "), m = 1; m < f.length; m++)
      i[f[m]] = true;
    s.push(y);
  });
  var u, l = [hb, vb];
  {
    var c, d = [x0, w0(function(y) {
      c.insert(y);
    })], p = b0(l.concat(o, d)), v = function(f) {
      return Go(F0(f), p);
    };
    u = function(f, m, h, E) {
      c = h, v(f ? f + "{" + m.styles + "}" : m.styles), E && (g.inserted[m.name] = true);
    };
  }
  var g = { key: r, sheet: new Mp({ key: r, container: a, nonce: t.nonce, speedy: t.speedy, prepend: t.prepend, insertionPoint: t.insertionPoint }), nonce: t.nonce, inserted: i, registered: {}, insert: u };
  return g.sheet.hydrate(s), g;
};
var T0 = yb;
var Ar = N(L());
var Rb = true;
function Gl(e2, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e2[o] !== void 0 ? t.push(e2[o] + ";") : n += o + " ";
  }), n;
}
var ql = function(t, r, n) {
  var o = t.key + "-" + r.name;
  if ((n === false || Rb === false) && t.registered[o] === void 0 && (t.registered[o] = r.styles), t.inserted[r.name] === void 0) {
    var i = r;
    do {
      var a = t.insert(r === i ? "." + o : "", i, t.sheet, true);
      i = i.next;
    } while (i !== void 0);
  }
};
function Ab(e2) {
  for (var t = 0, r, n = 0, o = e2.length; o >= 4; ++n, o -= 4)
    r = e2.charCodeAt(n) & 255 | (e2.charCodeAt(++n) & 255) << 8 | (e2.charCodeAt(++n) & 255) << 16 | (e2.charCodeAt(++n) & 255) << 24, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= r >>> 24, t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e2.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e2.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e2.charCodeAt(n) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var z0 = Ab;
var Pb = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
var Yl = Pb;
var Mb = /[A-Z]|^ms/g;
var Bb = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var U0 = function(t) {
  return t.charCodeAt(1) === 45;
};
var H0 = function(t) {
  return t != null && typeof t != "boolean";
};
var Kp = Il(function(e2) {
  return U0(e2) ? e2 : e2.replace(Mb, "-$&").toLowerCase();
});
var V0 = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Bb, function(n, o, i) {
          return en = { name: o, styles: i, next: en }, o;
        });
  }
  return Yl[t] !== 1 && !U0(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Is(e2, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return en = { name: r.name, styles: r.styles, next: en }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            en = { name: n.name, styles: n.styles, next: en }, n = n.next;
        var o = r.styles + ";";
        return o;
      }
      return Nb(e2, t, r);
    }
    case "function": {
      if (e2 !== void 0) {
        var i = en, a = r(e2);
        return en = i, Is(e2, t, a);
      }
      break;
    }
    case "string":
      if (false)
        var s, u;
      break;
  }
  if (t == null)
    return r;
  var l = t[r];
  return l !== void 0 ? l : r;
}
function Nb(e2, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Is(e2, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : H0(a) && (n += Kp(i) + ":" + V0(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          H0(a[s]) && (n += Kp(i) + ":" + V0(i, a[s]) + ";");
      else {
        var u = Is(e2, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Kp(i) + ":" + u + ";";
            break;
          }
          default:
            n += i + "{" + u + "}";
        }
      }
    }
  return n;
}
var W0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var en;
var Ql = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = true, i = "";
  en = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = false, i += Is(n, r, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Is(n, r, t[s]), o && (i += a[s]);
  var u;
  W0.lastIndex = 0;
  for (var l = "", c; (c = W0.exec(i)) !== null; )
    l += "-" + c[1];
  var d = z0(i) + l;
  return { name: d, styles: i, next: en };
};
var $R = {}.hasOwnProperty;
var j0 = (0, Ar.createContext)(typeof HTMLElement < "u" ? T0({ key: "css" }) : null);
var Lb = j0.Provider;
var Gp = function(t) {
  return (0, Ar.forwardRef)(function(r, n) {
    var o = (0, Ar.useContext)(j0);
    return t(r, o, n);
  });
};
var Rs = (0, Ar.createContext)({});
var Ob = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    return n;
  }
  return $o({}, t, r);
};
var zb = Op(function(e2) {
  return Op(function(t) {
    return Ob(e2, t);
  });
});
var qp = function(t) {
  var r = (0, Ar.useContext)(Rs);
  return t.theme !== r && (r = zb(r)(t.theme)), (0, Ar.createElement)(Rs.Provider, { value: r }, t.children);
};
var JR = N($p());
var Hb = s0;
var Vb = function(t) {
  return t !== "theme";
};
var $0 = function(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96 ? Hb : Vb;
};
var K0 = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
};
var Wb = function() {
  return null;
};
var Ub = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = K0(t, r, n), u = s || $0(o), l = !u("as");
  return function() {
    var c = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var p = c.length, v = 1; v < p; v++)
        d.push(c[v], c[0][v]);
    }
    var g = Gp(function(y, f, m) {
      var h = l && y.as || o, E = "", C = [], x = y;
      if (y.theme == null) {
        x = {};
        for (var S in y)
          x[S] = y[S];
        x.theme = (0, io.useContext)(Rs);
      }
      typeof y.className == "string" ? E = Gl(f.registered, C, y.className) : y.className != null && (E = y.className + " ");
      var F = Ql(d.concat(C), f.registered, x), w = ql(f, F, typeof h == "string");
      E += f.key + "-" + F.name, a !== void 0 && (E += " " + a);
      var k = l && s === void 0 ? $0(h) : u, V = {};
      for (var re in y)
        l && re === "as" || k(re) && (V[re] = y[re]);
      V.className = E, V.ref = m;
      var fe = (0, io.createElement)(h, V), De = (0, io.createElement)(Wb, null);
      return (0, io.createElement)(io.Fragment, null, De, fe);
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", { value: function() {
      return "." + a;
    } }), g.withComponent = function(y, f) {
      return e(y, $o({}, r, f, { shouldForwardProp: K0(g, f, true) })).apply(void 0, d);
    }, g;
  };
};
var G0 = Ub;
var jb = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
var Yp = G0.bind();
jb.forEach(function(e2) {
  Yp[e2] = Yp(e2);
});
var q0 = Yp;
var nc = N(Wp());
var Se = N(L());
var aE = N(Q0());
function $b(e2) {
  function t(P, A, B, W, b) {
    for (var Z = 0, T = 0, Ce = 0, te = 0, J, K, Je = 0, nt = 0, X, ot = X = J = 0, ne = 0, Ve = 0, jt = 0, Ye = 0, ai = B.length, Mn = ai - 1, or, U = "", Ne = "", ba = "", wa = "", $r; ne < ai; ) {
      if (K = B.charCodeAt(ne), ne === Mn && T + te + Ce + Z !== 0 && (T !== 0 && (K = T === 47 ? 10 : 47), te = Ce = Z = 0, ai++, Mn++), T + te + Ce + Z === 0) {
        if (ne === Mn && (0 < Ve && (U = U.replace(p, "")), 0 < U.trim().length)) {
          switch (K) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += B.charAt(ne);
          }
          K = 59;
        }
        switch (K) {
          case 123:
            for (U = U.trim(), J = U.charCodeAt(0), X = 1, Ye = ++ne; ne < ai; ) {
              switch (K = B.charCodeAt(ne)) {
                case 123:
                  X++;
                  break;
                case 125:
                  X--;
                  break;
                case 47:
                  switch (K = B.charCodeAt(ne + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ot = ne + 1; ot < Mn; ++ot)
                          switch (B.charCodeAt(ot)) {
                            case 47:
                              if (K === 42 && B.charCodeAt(ot - 1) === 42 && ne + 2 !== ot) {
                                ne = ot + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (K === 47) {
                                ne = ot + 1;
                                break e;
                              }
                          }
                        ne = ot;
                      }
                  }
                  break;
                case 91:
                  K++;
                case 40:
                  K++;
                case 34:
                case 39:
                  for (; ne++ < Mn && B.charCodeAt(ne) !== K; )
                    ;
              }
              if (X === 0)
                break;
              ne++;
            }
            switch (X = B.substring(Ye, ne), J === 0 && (J = (U = U.replace(d, "").trim()).charCodeAt(0)), J) {
              case 64:
                switch (0 < Ve && (U = U.replace(p, "")), K = U.charCodeAt(1), K) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ve = A;
                    break;
                  default:
                    Ve = wt;
                }
                if (X = t(A, Ve, X, K, b + 1), Ye = X.length, 0 < Be && (Ve = r(wt, U, jt), $r = s(3, X, Ve, A, De, fe, Ye, K, b, W), U = Ve.join(""), $r !== void 0 && (Ye = (X = $r.trim()).length) === 0 && (K = 0, X = "")), 0 < Ye)
                  switch (K) {
                    case 115:
                      U = U.replace(S, a);
                    case 100:
                    case 109:
                    case 45:
                      X = U + "{" + X + "}";
                      break;
                    case 107:
                      U = U.replace(h, "$1 $2"), X = U + "{" + X + "}", X = de === 1 || de === 2 && i("@" + X, 3) ? "@-webkit-" + X + "@" + X : "@" + X;
                      break;
                    default:
                      X = U + X, W === 112 && (X = (Ne += X, ""));
                  }
                else
                  X = "";
                break;
              default:
                X = t(A, r(A, U, jt), X, W, b + 1);
            }
            ba += X, X = jt = Ve = ot = J = 0, U = "", K = B.charCodeAt(++ne);
            break;
          case 125:
          case 59:
            if (U = (0 < Ve ? U.replace(p, "") : U).trim(), 1 < (Ye = U.length))
              switch (ot === 0 && (J = U.charCodeAt(0), J === 45 || 96 < J && 123 > J) && (Ye = (U = U.replace(" ", ":")).length), 0 < Be && ($r = s(1, U, A, P, De, fe, Ne.length, W, b, W)) !== void 0 && (Ye = (U = $r.trim()).length) === 0 && (U = "\0\0"), J = U.charCodeAt(0), K = U.charCodeAt(1), J) {
                case 0:
                  break;
                case 64:
                  if (K === 105 || K === 99) {
                    wa += U + B.charAt(ne);
                    break;
                  }
                default:
                  U.charCodeAt(Ye - 1) !== 58 && (Ne += o(U, J, K, U.charCodeAt(2)));
              }
            jt = Ve = ot = J = 0, U = "", K = B.charCodeAt(++ne);
        }
      }
      switch (K) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + J === 0 && W !== 107 && 0 < U.length && (Ve = 1, U += "\0"), 0 < Be * Ut && s(0, U, A, P, De, fe, Ne.length, W, b, W), fe = 1, De++;
          break;
        case 59:
        case 125:
          if (T + te + Ce + Z === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, or = B.charAt(ne), K) {
            case 9:
            case 32:
              if (te + Z + T === 0)
                switch (Je) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    or = "";
                    break;
                  default:
                    K !== 32 && (or = " ");
                }
              break;
            case 0:
              or = "\\0";
              break;
            case 12:
              or = "\\f";
              break;
            case 11:
              or = "\\v";
              break;
            case 38:
              te + T + Z === 0 && (Ve = jt = 1, or = "\f" + or);
              break;
            case 108:
              if (te + T + Z + ze === 0 && 0 < ot)
                switch (ne - ot) {
                  case 2:
                    Je === 112 && B.charCodeAt(ne - 3) === 58 && (ze = Je);
                  case 8:
                    nt === 111 && (ze = nt);
                }
              break;
            case 58:
              te + T + Z === 0 && (ot = ne);
              break;
            case 44:
              T + Ce + te + Z === 0 && (Ve = 1, or += "\r");
              break;
            case 34:
            case 39:
              T === 0 && (te = te === K ? 0 : te === 0 ? K : te);
              break;
            case 91:
              te + T + Ce === 0 && Z++;
              break;
            case 93:
              te + T + Ce === 0 && Z--;
              break;
            case 41:
              te + T + Z === 0 && Ce--;
              break;
            case 40:
              if (te + T + Z === 0) {
                if (J === 0)
                  switch (2 * Je + 3 * nt) {
                    case 533:
                      break;
                    default:
                      J = 1;
                  }
                Ce++;
              }
              break;
            case 64:
              T + Ce + te + Z + ot + X === 0 && (X = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + Z + Ce))
                switch (T) {
                  case 0:
                    switch (2 * K + 3 * B.charCodeAt(ne + 1)) {
                      case 235:
                        T = 47;
                        break;
                      case 220:
                        Ye = ne, T = 42;
                    }
                    break;
                  case 42:
                    K === 47 && Je === 42 && Ye + 2 !== ne && (B.charCodeAt(Ye + 2) === 33 && (Ne += B.substring(Ye, ne + 1)), or = "", T = 0);
                }
          }
          T === 0 && (U += or);
      }
      nt = Je, Je = K, ne++;
    }
    if (Ye = Ne.length, 0 < Ye) {
      if (Ve = A, 0 < Be && ($r = s(2, Ne, Ve, P, De, fe, Ye, W, b, W), $r !== void 0 && (Ne = $r).length === 0))
        return wa + Ne + ba;
      if (Ne = Ve.join(",") + "{" + Ne + "}", de * ze !== 0) {
        switch (de !== 2 || i(Ne, 2) || (ze = 0), ze) {
          case 111:
            Ne = Ne.replace(C, ":-moz-$1") + Ne;
            break;
          case 112:
            Ne = Ne.replace(E, "::-webkit-input-$1") + Ne.replace(E, "::-moz-$1") + Ne.replace(E, ":-ms-input-$1") + Ne;
        }
        ze = 0;
      }
    }
    return wa + Ne + ba;
  }
  function r(P, A, B) {
    var W = A.trim().split(f);
    A = W;
    var b = W.length, Z = P.length;
    switch (Z) {
      case 0:
      case 1:
        var T = 0;
        for (P = Z === 0 ? "" : P[0] + " "; T < b; ++T)
          A[T] = n(P, A[T], B).trim();
        break;
      default:
        var Ce = T = 0;
        for (A = []; T < b; ++T)
          for (var te = 0; te < Z; ++te)
            A[Ce++] = n(P[te] + " ", W[T], B).trim();
    }
    return A;
  }
  function n(P, A, B) {
    var W = A.charCodeAt(0);
    switch (33 > W && (W = (A = A.trim()).charCodeAt(0)), W) {
      case 38:
        return A.replace(m, "$1" + P.trim());
      case 58:
        return P.trim() + A.replace(m, "$1" + P.trim());
      default:
        if (0 < 1 * B && 0 < A.indexOf("\f"))
          return A.replace(m, (P.charCodeAt(0) === 58 ? "" : "$1") + P.trim());
    }
    return P + A;
  }
  function o(P, A, B, W) {
    var b = P + ";", Z = 2 * A + 3 * B + 4 * W;
    if (Z === 944) {
      P = b.indexOf(":", 9) + 1;
      var T = b.substring(P, b.length - 1).trim();
      return T = b.substring(0, P).trim() + T + ";", de === 1 || de === 2 && i(T, 1) ? "-webkit-" + T + T : T;
    }
    if (de === 0 || de === 2 && !i(b, 1))
      return b;
    switch (Z) {
      case 1015:
        return b.charCodeAt(10) === 97 ? "-webkit-" + b + b : b;
      case 951:
        return b.charCodeAt(3) === 116 ? "-webkit-" + b + b : b;
      case 963:
        return b.charCodeAt(5) === 110 ? "-webkit-" + b + b : b;
      case 1009:
        if (b.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + b + b;
      case 978:
        return "-webkit-" + b + "-moz-" + b + b;
      case 1019:
      case 983:
        return "-webkit-" + b + "-moz-" + b + "-ms-" + b + b;
      case 883:
        if (b.charCodeAt(8) === 45)
          return "-webkit-" + b + b;
        if (0 < b.indexOf("image-set(", 11))
          return b.replace(re, "$1-webkit-$2") + b;
        break;
      case 932:
        if (b.charCodeAt(4) === 45)
          switch (b.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + b.replace("-grow", "") + "-webkit-" + b + "-ms-" + b.replace("grow", "positive") + b;
            case 115:
              return "-webkit-" + b + "-ms-" + b.replace("shrink", "negative") + b;
            case 98:
              return "-webkit-" + b + "-ms-" + b.replace("basis", "preferred-size") + b;
          }
        return "-webkit-" + b + "-ms-" + b + b;
      case 964:
        return "-webkit-" + b + "-ms-flex-" + b + b;
      case 1023:
        if (b.charCodeAt(8) !== 99)
          break;
        return T = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + T + "-webkit-" + b + "-ms-flex-pack" + T + b;
      case 1005:
        return g.test(b) ? b.replace(v, ":-webkit-") + b.replace(v, ":-moz-") + b : b;
      case 1e3:
        switch (T = b.substring(13).trim(), A = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt(A)) {
          case 226:
            T = b.replace(x, "tb");
            break;
          case 232:
            T = b.replace(x, "tb-rl");
            break;
          case 220:
            T = b.replace(x, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + T + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (A = (b = P).length - 10, T = (b.charCodeAt(A) === 33 ? b.substring(0, A) : b).substring(P.indexOf(":", 7) + 1).trim(), Z = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
          case 203:
            if (111 > T.charCodeAt(8))
              break;
          case 115:
            b = b.replace(T, "-webkit-" + T) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(T, "-webkit-" + (102 < Z ? "inline-" : "") + "box") + ";" + b.replace(T, "-webkit-" + T) + ";" + b.replace(T, "-ms-" + T + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45)
          switch (b.charCodeAt(6)) {
            case 105:
              return T = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + T + "-ms-flex-" + T + b;
            case 115:
              return "-webkit-" + b + "-ms-flex-item-" + b.replace(w, "") + b;
            default:
              return "-webkit-" + b + "-ms-flex-line-pack" + b.replace("align-content", "").replace(w, "") + b;
          }
        break;
      case 973:
      case 989:
        if (b.charCodeAt(3) !== 45 || b.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (V.test(P) === true)
          return (T = P.substring(P.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(P.replace("stretch", "fill-available"), A, B, W).replace(":fill-available", ":stretch") : b.replace(T, "-webkit-" + T) + b.replace(T, "-moz-" + T.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, B + W === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10))
          return b.substring(0, b.indexOf(";", 27) + 1).replace(y, "$1-webkit-$2") + b;
    }
    return b;
  }
  function i(P, A) {
    var B = P.indexOf(A === 1 ? ":" : "{"), W = P.substring(0, A !== 3 ? B : 10);
    return B = P.substring(B + 1, P.length - 1), nr(A !== 2 ? W : W.replace(k, "$1"), B, A);
  }
  function a(P, A) {
    var B = o(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return B !== A + ";" ? B.replace(F, " or ($1)").substring(4) : "(" + A + ")";
  }
  function s(P, A, B, W, b, Z, T, Ce, te, J) {
    for (var K = 0, Je = A, nt; K < Be; ++K)
      switch (nt = He[K].call(c, P, Je, B, W, b, Z, T, Ce, te, J)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          Je = nt;
      }
    if (Je !== A)
      return Je;
  }
  function u(P) {
    switch (P) {
      case void 0:
      case null:
        Be = He.length = 0;
        break;
      default:
        if (typeof P == "function")
          He[Be++] = P;
        else if (typeof P == "object")
          for (var A = 0, B = P.length; A < B; ++A)
            u(P[A]);
        else
          Ut = !!P | 0;
    }
    return u;
  }
  function l(P) {
    return P = P.prefix, P !== void 0 && (nr = null, P ? typeof P != "function" ? de = 1 : (de = 2, nr = P) : de = 0), l;
  }
  function c(P, A) {
    var B = P;
    if (33 > B.charCodeAt(0) && (B = B.trim()), Fe = B, B = [Fe], 0 < Be) {
      var W = s(-1, A, B, B, De, fe, 0, 0, 0, 0);
      W !== void 0 && typeof W == "string" && (A = W);
    }
    var b = t(wt, B, A, 0, 0);
    return 0 < Be && (W = s(-2, b, B, B, De, fe, b.length, 0, 0, 0), W !== void 0 && (b = W)), Fe = "", ze = 0, fe = De = 1, b;
  }
  var d = /^\0+/g, p = /[\0\r\f]/g, v = /: */g, g = /zoo|gra/, y = /([,: ])(transform)/g, f = /,\r+?/g, m = /([\t\r\n ])*\f?&/g, h = /@(k\w+)\s*(\S*)\s*/, E = /::(place)/g, C = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, S = /\(\s*(.*)\s*\)/g, F = /([\s\S]*?);/g, w = /-self|flex-/g, k = /[^]*?(:[rp][el]a[\w-]+)[^]*/, V = /stretch|:\s*\w+\-(?:conte|avail)/, re = /([^-])(image-set\()/, fe = 1, De = 1, ze = 0, de = 1, wt = [], He = [], Be = 0, nr = null, Ut = 0, Fe = "";
  return c.use = u, c.set = l, e2 !== void 0 && l(e2), c;
}
var X0 = $b;
function Kb(e2) {
  var t = {};
  return function(r) {
    return t[r] === void 0 && (t[r] = e2(r)), t[r];
  };
}
var Z0 = Kb;
var Gb = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var qb = Z0(function(e2) {
  return Gb.test(e2) || e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && e2.charCodeAt(2) < 91;
});
var Qp = qb;
var sE = N($p());
function Pr() {
  return (Pr = Object.assign || function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }).apply(this, arguments);
}
var J0 = function(e2, t) {
  for (var r = [e2[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e2[n + 1]);
  return r;
};
var Jp = function(e2) {
  return e2 !== null && typeof e2 == "object" && (e2.toString ? e2.toString() : Object.prototype.toString.call(e2)) === "[object Object]" && !(0, nc.typeOf)(e2);
};
var ec = Object.freeze([]);
var ao = Object.freeze({});
function Xi(e2) {
  return typeof e2 == "function";
}
function eE(e2) {
  return e2.displayName || e2.name || "Component";
}
function im(e2) {
  return e2 && typeof e2.styledComponentId == "string";
}
var so = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var am = typeof window < "u" && "HTMLElement" in window;
var Yb = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : false);
function Mr(e2) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e2 + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Qb = function() {
  function e2(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e2.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++)
      n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, a = i; r >= a; )
        (a <<= 1) < 0 && Mr(16, "" + r);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(o), this.length = a;
      for (var s = i; s < a; s++)
        this.groupSizes[s] = 0;
    }
    for (var u = this.indexOfGroup(r + 1), l = 0, c = n.length; l < c; l++)
      this.tag.insertRule(u, n[l]) && (this.groupSizes[r]++, u++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), i = o + n;
      this.groupSizes[r] = 0;
      for (var a = o; a < i; a++)
        this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var o = this.groupSizes[r], i = this.indexOfGroup(r), a = i + o, s = i; s < a; s++)
      n += this.tag.getRule(s) + `/*!sc*/
`;
    return n;
  }, e2;
}();
var Jl = /* @__PURE__ */ new Map();
var tc = /* @__PURE__ */ new Map();
var Ps = 1;
var Xl = function(e2) {
  if (Jl.has(e2))
    return Jl.get(e2);
  for (; tc.has(Ps); )
    Ps++;
  var t = Ps++;
  return Jl.set(e2, t), tc.set(t, e2), t;
};
var Xb = function(e2) {
  return tc.get(e2);
};
var Zb = function(e2, t) {
  t >= Ps && (Ps = t + 1), Jl.set(e2, t), tc.set(t, e2);
};
var Jb = "style[" + so + '][data-styled-version="5.3.3"]';
var ew = new RegExp("^" + so + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
var tw = function(e2, t, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++)
    (n = o[i]) && e2.registerName(t, n);
};
var rw = function(e2, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, i = r.length; o < i; o++) {
    var a = r[o].trim();
    if (a) {
      var s = a.match(ew);
      if (s) {
        var u = 0 | parseInt(s[1], 10), l = s[2];
        u !== 0 && (Zb(l, u), tw(e2, l, s[3]), e2.getTag().insertRules(u, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
};
var em = function() {
  return typeof window < "u" && window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null;
};
var uE = function(e2) {
  var t = document.head, r = e2 || t, n = document.createElement("style"), o = function(s) {
    for (var u = s.childNodes, l = u.length; l >= 0; l--) {
      var c = u[l];
      if (c && c.nodeType === 1 && c.hasAttribute(so))
        return c;
    }
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(so, "active"), n.setAttribute("data-styled-version", "5.3.3");
  var a = em();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
};
var nw = function() {
  function e2(r) {
    var n = this.element = uE(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, a = 0, s = i.length; a < s; a++) {
        var u = i[a];
        if (u.ownerNode === o)
          return u;
      }
      Mr(17);
    }(n), this.length = 0;
  }
  var t = e2.prototype;
  return t.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, true;
    } catch {
      return false;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e2;
}();
var ow = function() {
  function e2(r) {
    var n = this.element = uE(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e2.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(n), i = this.nodes[r];
      return this.element.insertBefore(o, i || null), this.length++, true;
    }
    return false;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e2;
}();
var iw = function() {
  function e2(r) {
    this.rules = [], this.length = 0;
  }
  var t = e2.prototype;
  return t.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, true);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e2;
}();
var tE = am;
var aw = { isServer: !am, useCSSOMInjection: !Yb };
var Ms = function() {
  function e2(r, n, o) {
    r === void 0 && (r = ao), n === void 0 && (n = {}), this.options = Pr({}, aw, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && am && tE && (tE = false, function(i) {
      for (var a = document.querySelectorAll(Jb), s = 0, u = a.length; s < u; s++) {
        var l = a[s];
        l && l.getAttribute(so) !== "active" && (rw(i, l), l.parentNode && l.parentNode.removeChild(l));
      }
    }(this));
  }
  e2.registerId = function(r) {
    return Xl(r);
  };
  var t = e2.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = true), new e2(Pr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, i = n.useCSSOMInjection, a = n.target, r = o ? new iw(a) : i ? new nw(a) : new ow(a), new Qb(r)));
    var r, n, o, i, a;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Xl(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(Xl(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Xl(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, i = "", a = 0; a < o; a++) {
        var s = Xb(a);
        if (s !== void 0) {
          var u = r.names.get(s), l = n.getGroup(a);
          if (u && l && u.size) {
            var c = so + ".g" + a + '[id="' + s + '"]', d = "";
            u !== void 0 && u.forEach(function(p) {
              p.length > 0 && (d += p + ",");
            }), i += "" + l + c + '{content:"' + d + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e2;
}();
var sw = /(a)(d)/gi;
var rE = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function tm(e2) {
  var t, r = "";
  for (t = Math.abs(e2); t > 52; t = t / 52 | 0)
    r = rE(t % 52) + r;
  return (rE(t % 52) + r).replace(sw, "$1-$2");
}
var Qi = function(e2, t) {
  for (var r = t.length; r; )
    e2 = 33 * e2 ^ t.charCodeAt(--r);
  return e2;
};
var lE = function(e2) {
  return Qi(5381, e2);
};
function cE(e2) {
  for (var t = 0; t < e2.length; t += 1) {
    var r = e2[t];
    if (Xi(r) && !im(r))
      return false;
  }
  return true;
}
var uw = lE("5.3.3");
var lw = function() {
  function e2(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && cE(t), this.componentId = r, this.baseHash = Qi(uw, r), this.baseStyle = n, Ms.registerId(r);
  }
  return e2.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var a = qo(this.rules, t, r, n).join(""), s = tm(Qi(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(o, s)) {
          var u = n(a, "." + s, void 0, o);
          r.insertRules(o, s, u);
        }
        i.push(s), this.staticRulesId = s;
      }
    else {
      for (var l = this.rules.length, c = Qi(this.baseHash, n.hash), d = "", p = 0; p < l; p++) {
        var v = this.rules[p];
        if (typeof v == "string")
          d += v;
        else if (v) {
          var g = qo(v, t, r, n), y = Array.isArray(g) ? g.join("") : g;
          c = Qi(c, y + p), d += y;
        }
      }
      if (d) {
        var f = tm(c >>> 0);
        if (!r.hasNameForId(o, f)) {
          var m = n(d, "." + f, void 0, o);
          r.insertRules(o, f, m);
        }
        i.push(f);
      }
    }
    return i.join(" ");
  }, e2;
}();
var cw = /^\s*\/\/.*$/gm;
var fw = [":", "[", ".", "#"];
function fE(e2) {
  var t, r, n, o, i = e2 === void 0 ? ao : e2, a = i.options, s = a === void 0 ? ao : a, u = i.plugins, l = u === void 0 ? ec : u, c = new X0(s), d = [], p = function(y) {
    function f(m) {
      if (m)
        try {
          y(m + "}");
        } catch {
        }
    }
    return function(m, h, E, C, x, S, F, w, k, V) {
      switch (m) {
        case 1:
          if (k === 0 && h.charCodeAt(0) === 64)
            return y(h + ";"), "";
          break;
        case 2:
          if (w === 0)
            return h + "/*|*/";
          break;
        case 3:
          switch (w) {
            case 102:
            case 112:
              return y(E[0] + h), "";
            default:
              return h + (V === 0 ? "/*|*/" : "");
          }
        case -2:
          h.split("/*|*/}").forEach(f);
      }
    };
  }(function(y) {
    d.push(y);
  }), v = function(y, f, m) {
    return f === 0 && fw.indexOf(m[r.length]) !== -1 || m.match(o) ? y : "." + t;
  };
  function g(y, f, m, h) {
    h === void 0 && (h = "&");
    var E = y.replace(cw, ""), C = f && m ? m + " " + f + " { " + E + " }" : E;
    return t = h, r = f, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), c(m || !f ? "" : f, C);
  }
  return c.use([].concat(l, [function(y, f, m) {
    y === 2 && m.length && m[0].lastIndexOf(r) > 0 && (m[0] = m[0].replace(n, v));
  }, p, function(y) {
    if (y === -2) {
      var f = d;
      return d = [], f;
    }
  }])), g.hash = l.length ? l.reduce(function(y, f) {
    return f.name || Mr(15), Qi(y, f.name);
  }, 5381).toString() : "", g;
}
var sm = Se.default.createContext();
var DA = sm.Consumer;
var um = Se.default.createContext();
var dw = (um.Consumer, new Ms());
var rm = fE();
function dE() {
  return (0, Se.useContext)(sm) || dw;
}
function pw() {
  return (0, Se.useContext)(um) || rm;
}
function mw(e2) {
  var t = (0, Se.useState)(e2.stylisPlugins), r = t[0], n = t[1], o = dE(), i = (0, Se.useMemo)(function() {
    var s = o;
    return e2.sheet ? s = e2.sheet : e2.target && (s = s.reconstructWithOptions({ target: e2.target }, false)), e2.disableCSSOMInjection && (s = s.reconstructWithOptions({ useCSSOMInjection: false })), s;
  }, [e2.disableCSSOMInjection, e2.sheet, e2.target]), a = (0, Se.useMemo)(function() {
    return fE({ options: { prefix: !e2.disableVendorPrefixes }, plugins: r });
  }, [e2.disableVendorPrefixes, r]);
  return (0, Se.useEffect)(function() {
    (0, aE.default)(r, e2.stylisPlugins) || n(e2.stylisPlugins);
  }, [e2.stylisPlugins]), Se.default.createElement(sm.Provider, { value: i }, Se.default.createElement(um.Provider, { value: a }, e2.children));
}
var hw = function() {
  function e2(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = rm);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return Mr(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e2.prototype.getName = function(t) {
    return t === void 0 && (t = rm), this.name + t.hash;
  }, e2;
}();
var vw = /([A-Z])/;
var gw = /([A-Z])/g;
var yw = /^ms-/;
var Ew = function(e2) {
  return "-" + e2.toLowerCase();
};
function nE(e2) {
  return vw.test(e2) ? e2.replace(gw, Ew).replace(yw, "-ms-") : e2;
}
var oE = function(e2) {
  return e2 == null || e2 === false || e2 === "";
};
function qo(e2, t, r, n) {
  if (Array.isArray(e2)) {
    for (var o, i = [], a = 0, s = e2.length; a < s; a += 1)
      (o = qo(e2[a], t, r, n)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (oE(e2))
    return "";
  if (im(e2))
    return "." + e2.styledComponentId;
  if (Xi(e2)) {
    if (typeof (l = e2) != "function" || l.prototype && l.prototype.isReactComponent || !t)
      return e2;
    var u = e2(t);
    return qo(u, t, r, n);
  }
  var l;
  return e2 instanceof hw ? r ? (e2.inject(r, n), e2.getName(n)) : e2 : Jp(e2) ? function c(d, p) {
    var v, g, y = [];
    for (var f in d)
      d.hasOwnProperty(f) && !oE(d[f]) && (Array.isArray(d[f]) && d[f].isCss || Xi(d[f]) ? y.push(nE(f) + ":", d[f], ";") : Jp(d[f]) ? y.push.apply(y, c(d[f], f)) : y.push(nE(f) + ": " + (v = f, (g = d[f]) == null || typeof g == "boolean" || g === "" ? "" : typeof g != "number" || g === 0 || v in Yl ? String(g).trim() : g + "px") + ";"));
    return p ? [p + " {"].concat(y, ["}"]) : y;
  }(e2) : e2.toString();
}
var iE = function(e2) {
  return Array.isArray(e2) && (e2.isCss = true), e2;
};
function Cw(e2) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return Xi(e2) || Jp(e2) ? iE(qo(J0(ec, [e2].concat(r)))) : r.length === 0 && e2.length === 1 && typeof e2[0] == "string" ? e2 : iE(qo(J0(e2, r)));
}
var Sw = function(e2, t, r) {
  return r === void 0 && (r = ao), e2.theme !== r.theme && e2.theme || t || r.theme;
};
var _w = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var Fw = /(^-|-$)/g;
function Xp(e2) {
  return e2.replace(_w, "-").replace(Fw, "");
}
var xw = function(e2) {
  return tm(lE(e2) >>> 0);
};
function Zl(e2) {
  return typeof e2 == "string" && true;
}
var nm = function(e2) {
  return typeof e2 == "function" || typeof e2 == "object" && e2 !== null && !Array.isArray(e2);
};
var bw = function(e2) {
  return e2 !== "__proto__" && e2 !== "constructor" && e2 !== "prototype";
};
function ww(e2, t, r) {
  var n = e2[r];
  nm(t) && nm(n) ? pE(n, t) : e2[r] = t;
}
function pE(e2) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var o = 0, i = r; o < i.length; o++) {
    var a = i[o];
    if (nm(a))
      for (var s in a)
        bw(s) && ww(e2, a[s], s);
  }
  return e2;
}
var rc = Se.default.createContext();
var TA = rc.Consumer;
function mE(e2) {
  var t = (0, Se.useContext)(rc), r = (0, Se.useMemo)(function() {
    return function(n, o) {
      if (!n)
        return Mr(14);
      if (Xi(n)) {
        var i = n(o);
        return i;
      }
      return Array.isArray(n) || typeof n != "object" ? Mr(8) : o ? Pr({}, o, {}, n) : n;
    }(e2.theme, t);
  }, [e2.theme, t]);
  return e2.children ? Se.default.createElement(rc.Provider, { value: r }, e2.children) : null;
}
var Zp = {};
function hE(e2, t, r) {
  var n = im(e2), o = !Zl(e2), i = t.attrs, a = i === void 0 ? ec : i, s = t.componentId, u = s === void 0 ? function(h, E) {
    var C = typeof h != "string" ? "sc" : Xp(h);
    Zp[C] = (Zp[C] || 0) + 1;
    var x = C + "-" + xw("5.3.3" + C + Zp[C]);
    return E ? E + "-" + x : x;
  }(t.displayName, t.parentComponentId) : s, l = t.displayName, c = l === void 0 ? function(h) {
    return Zl(h) ? "styled." + h : "Styled(" + eE(h) + ")";
  }(e2) : l, d = t.displayName && t.componentId ? Xp(t.displayName) + "-" + t.componentId : t.componentId || u, p = n && e2.attrs ? Array.prototype.concat(e2.attrs, a).filter(Boolean) : a, v = t.shouldForwardProp;
  n && e2.shouldForwardProp && (v = t.shouldForwardProp ? function(h, E, C) {
    return e2.shouldForwardProp(h, E, C) && t.shouldForwardProp(h, E, C);
  } : e2.shouldForwardProp);
  var g, y = new lw(r, d, n ? e2.componentStyle : void 0), f = y.isStatic && a.length === 0, m = function(h, E) {
    return function(C, x, S, F) {
      var w = C.attrs, k = C.componentStyle, V = C.defaultProps, re = C.foldedComponentIds, fe = C.shouldForwardProp, De = C.styledComponentId, ze = C.target, de = function(W, b, Z) {
        W === void 0 && (W = ao);
        var T = Pr({}, b, { theme: W }), Ce = {};
        return Z.forEach(function(te) {
          var J, K, Je, nt = te;
          for (J in Xi(nt) && (nt = nt(T)), nt)
            T[J] = Ce[J] = J === "className" ? (K = Ce[J], Je = nt[J], K && Je ? K + " " + Je : K || Je) : nt[J];
        }), [T, Ce];
      }(Sw(x, (0, Se.useContext)(rc), V) || ao, x, w), wt = de[0], He = de[1], Be = function(W, b, Z, T) {
        var Ce = dE(), te = pw(), J = b ? W.generateAndInjectStyles(ao, Ce, te) : W.generateAndInjectStyles(Z, Ce, te);
        return J;
      }(k, F, wt, void 0), nr = S, Ut = He.$as || x.$as || He.as || x.as || ze, Fe = Zl(Ut), P = He !== x ? Pr({}, x, {}, He) : x, A = {};
      for (var B in P)
        B[0] !== "$" && B !== "as" && (B === "forwardedAs" ? A.as = P[B] : (fe ? fe(B, Qp, Ut) : !Fe || Qp(B)) && (A[B] = P[B]));
      return x.style && He.style !== x.style && (A.style = Pr({}, x.style, {}, He.style)), A.className = Array.prototype.concat(re, De, Be !== De ? Be : null, x.className, He.className).filter(Boolean).join(" "), A.ref = nr, (0, Se.createElement)(Ut, A);
    }(g, h, E, f);
  };
  return m.displayName = c, (g = Se.default.forwardRef(m)).attrs = p, g.componentStyle = y, g.displayName = c, g.shouldForwardProp = v, g.foldedComponentIds = n ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : ec, g.styledComponentId = d, g.target = n ? e2.target : e2, g.withComponent = function(h) {
    var E = t.componentId, C = function(S, F) {
      if (S == null)
        return {};
      var w, k, V = {}, re = Object.keys(S);
      for (k = 0; k < re.length; k++)
        w = re[k], F.indexOf(w) >= 0 || (V[w] = S[w]);
      return V;
    }(t, ["componentId"]), x = E && E + "-" + (Zl(h) ? h : Xp(eE(h)));
    return hE(h, Pr({}, C, { attrs: p, componentId: x }), r);
  }, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(h) {
    this._foldedDefaultProps = n ? pE({}, e2.defaultProps, h) : h;
  } }), g.toString = function() {
    return "." + g.styledComponentId;
  }, o && (0, sE.default)(g, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), g;
}
var om = function(e2) {
  return function t(r, n, o) {
    if (o === void 0 && (o = ao), !(0, nc.isValidElementType)(n))
      return Mr(1, String(n));
    var i = function() {
      return r(n, o, Cw.apply(void 0, arguments));
    };
    return i.withConfig = function(a) {
      return t(r, n, Pr({}, o, {}, a));
    }, i.attrs = function(a) {
      return t(r, n, Pr({}, o, { attrs: Array.prototype.concat(o.attrs, a).filter(Boolean) }));
    }, i;
  }(hE, e2);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e2) {
  om[e2] = om(e2);
});
var IA = function() {
  function e2(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = cE(r), Ms.registerId(this.componentId + 1);
  }
  var t = e2.prototype;
  return t.createStyles = function(r, n, o, i) {
    var a = i(qo(this.rules, n, o, i).join(""), ""), s = this.componentId + r;
    o.insertRules(s, s, a);
  }, t.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, t.renderStyles = function(r, n, o, i) {
    r > 2 && Ms.registerId(this.componentId + r), this.removeStyles(r, o), this.createStyles(r, n, o, i);
  }, e2;
}();
var RA = function() {
  function e2() {
    var r = this;
    this._emitSheetCSS = function() {
      var n = r.instance.toString();
      if (!n)
        return "";
      var o = em();
      return "<style " + [o && 'nonce="' + o + '"', so + '="true"', 'data-styled-version="5.3.3"'].filter(Boolean).join(" ") + ">" + n + "</style>";
    }, this.getStyleTags = function() {
      return r.sealed ? Mr(2) : r._emitSheetCSS();
    }, this.getStyleElement = function() {
      var n;
      if (r.sealed)
        return Mr(2);
      var o = ((n = {})[so] = "", n["data-styled-version"] = "5.3.3", n.dangerouslySetInnerHTML = { __html: r.instance.toString() }, n), i = em();
      return i && (o.nonce = i), [Se.default.createElement("style", Pr({}, o, { key: "sc-0-0" }))];
    }, this.seal = function() {
      r.sealed = true;
    }, this.instance = new Ms({ isServer: true }), this.sealed = false;
  }
  var t = e2.prototype;
  return t.collectStyles = function(r) {
    return this.sealed ? Mr(2) : Se.default.createElement(mw, { sheet: this.instance }, r);
  }, t.interleaveWithNodeStream = function(r) {
    return Mr(3);
  }, e2;
}();
var vE = om;
var oc = { StyleMethod: "merge-styles 2 proto", styled: Tl, ThemeProvider: a0 };
switch (document.location.search) {
  case "?emotion":
    oc = { StyleMethod: "emotion", styled: q0, ThemeProvider: qp };
    break;
  case "?styled-components":
    oc = { StyleMethod: "styled-components", styled: vE, ThemeProvider: mE };
    break;
}
var Yo = "--main-bg";
var tn = "--main-border";
var xr = "--main-bg-hover";
var rn = "--main-bg-pressed";
var uo = "--main-border-focused";
var lo = "--main-subtext";
var Cn = "--main-text";
var co = "--main-icon";
var Bs = `
  transition: background-color .1s linear;
  background-color: var(${Yo});
  color: var(${Cn});
`;
var kw = `
  ${Yo}: white;
  ${xr}: #EEE;
  ${rn}: #CCC;
  ${uo}: black;
  ${lo}: #888;
  ${Cn}: #333;
  ${co}: rgb(16, 110, 190);
  ${tn}: #eaeaea;
  ${Bs}
`;
var Dw = `
  ${Yo}: #0078d4;
  ${xr}: #2b88d8;
  ${rn}: #71afe5;
  ${uo}: #c7e0f4;
  ${lo}: #888;
  ${Cn}: #fff;
  ${co}: #ff;
  ${tn}: #eaeaea;
  ${Bs}
`;
var lm = `
  ${Yo}: #484644;
  ${xr}: #323130;
  ${rn}: #222120;
  ${uo}: white;
  ${lo}: #aaa;
  ${Cn}: white;
  ${co}: white;
  ${tn}: #585654;
  ${Bs}
`;
var yE = `
  ${Yo}: #383634;
  ${xr}: #222120;
  ${rn}: #121110;
  ${uo}: white;
  ${lo}: #aaa;
  ${Cn}: white;
  ${co}: white;
  ${tn}: #585654;
  ${Bs}
`;
var Tw = `
  ${Yo}: rgb(244,244,244);  
  ${xr}: rgb(234, 234, 234);
  ${rn}: rgb(218, 218, 218);
  ${uo}: black;
  ${lo}: #666;
  ${Cn}: black;
  ${co}: rgb(16, 110, 190);
  ${tn}: rgb(244,244,244);
  ${Bs}
`;
var EE = { default: kw, strong: Dw, neutral: Tw, dark: lm };
var CE = { default: lm, strong: yE, neutral: lm, dark: yE };
var Uc = N(L());
var SE = {};
var ic = void 0;
try {
  ic = window;
} catch {
}
function nn(e2, t) {
  if (typeof ic < "u") {
    var r = ic.__packages__ = ic.__packages__ || {};
    if (!r[e2] || !SE[e2]) {
      SE[e2] = t;
      var n = r[e2] = r[e2] || [];
      n.push(t);
    }
  }
}
nn("@fluentui/set-version", "6.0.0");
var UE = N(WE(), 1);
var { __extends: _e, __assign: _, __rest: on, __decorate: lc, __param: jA, __metadata: $A, __awaiter: KA, __generator: GA, __exportStar: qA, __createBinding: YA, __values: QA, __read: XA, __spread: ZA, __spreadArrays: Pt, __spreadArray: JA, __await: eP, __asyncGenerator: tP, __asyncDelegator: rP, __asyncValues: nP, __makeTemplateObject: oP, __importStar: iP, __importDefault: aP, __classPrivateFieldGet: sP, __classPrivateFieldSet: uP } = UE.default;
var ea = { none: 0, insertNode: 1, appendChild: 2 };
var jE = "__stylesheet__";
var Iw = typeof navigator < "u" && /rv:11.0/.test(navigator.userAgent);
var ta = {};
try {
  ta = window || {};
} catch {
}
var Ji;
var je = function() {
  function e2(t, r) {
    var n, o, i, a, s, u;
    this._rules = [], this._preservedRules = [], this._counter = 0, this._keyToClassName = {}, this._onInsertRuleCallbacks = [], this._onResetCallbacks = [], this._classNameToArgs = {}, this._config = _({ injectionMode: typeof document > "u" ? ea.none : ea.insertNode, defaultPrefix: "css", namespace: void 0, cspSettings: void 0 }, t), this._classNameToArgs = (n = r?.classNameToArgs) !== null && n !== void 0 ? n : this._classNameToArgs, this._counter = (o = r?.counter) !== null && o !== void 0 ? o : this._counter, this._keyToClassName = (a = (i = this._config.classNameCache) !== null && i !== void 0 ? i : r?.keyToClassName) !== null && a !== void 0 ? a : this._keyToClassName, this._preservedRules = (s = r?.preservedRules) !== null && s !== void 0 ? s : this._preservedRules, this._rules = (u = r?.rules) !== null && u !== void 0 ? u : this._rules;
  }
  return e2.getInstance = function() {
    if (Ji = ta[jE], !Ji || Ji._lastStyleElement && Ji._lastStyleElement.ownerDocument !== document) {
      var t = ta?.FabricConfig || {}, r = new e2(t.mergeStyles, t.serializedStylesheet);
      Ji = r, ta[jE] = r;
    }
    return Ji;
  }, e2.prototype.serialize = function() {
    return JSON.stringify({ classNameToArgs: this._classNameToArgs, counter: this._counter, keyToClassName: this._keyToClassName, preservedRules: this._preservedRules, rules: this._rules });
  }, e2.prototype.setConfig = function(t) {
    this._config = _(_({}, this._config), t);
  }, e2.prototype.onReset = function(t) {
    var r = this;
    return this._onResetCallbacks.push(t), function() {
      r._onResetCallbacks = r._onResetCallbacks.filter(function(n) {
        return n !== t;
      });
    };
  }, e2.prototype.onInsertRule = function(t) {
    var r = this;
    return this._onInsertRuleCallbacks.push(t), function() {
      r._onInsertRuleCallbacks = r._onInsertRuleCallbacks.filter(function(n) {
        return n !== t;
      });
    };
  }, e2.prototype.getClassName = function(t) {
    var r = this._config.namespace, n = t || this._config.defaultPrefix;
    return (r ? r + "-" : "") + n + "-" + this._counter++;
  }, e2.prototype.cacheClassName = function(t, r, n, o) {
    this._keyToClassName[r] = t, this._classNameToArgs[t] = { args: n, rules: o };
  }, e2.prototype.classNameFromKey = function(t) {
    return this._keyToClassName[t];
  }, e2.prototype.getClassNameCache = function() {
    return this._keyToClassName;
  }, e2.prototype.argsFromClassName = function(t) {
    var r = this._classNameToArgs[t];
    return r && r.args;
  }, e2.prototype.insertedRulesFromClassName = function(t) {
    var r = this._classNameToArgs[t];
    return r && r.rules;
  }, e2.prototype.insertRule = function(t, r) {
    var n = this._config.injectionMode, o = n !== ea.none ? this._getStyleElement() : void 0;
    if (r && this._preservedRules.push(t), o)
      switch (n) {
        case ea.insertNode:
          var i = o.sheet;
          try {
            i.insertRule(t, i.cssRules.length);
          } catch {
          }
          break;
        case ea.appendChild:
          o.appendChild(document.createTextNode(t));
          break;
      }
    else
      this._rules.push(t);
    this._config.onInsertRule && this._config.onInsertRule(t), this._onInsertRuleCallbacks.forEach(function(a) {
      return a();
    });
  }, e2.prototype.getRules = function(t) {
    return (t ? this._preservedRules.join("") : "") + this._rules.join("");
  }, e2.prototype.reset = function() {
    this._rules = [], this._counter = 0, this._classNameToArgs = {}, this._keyToClassName = {}, this._onResetCallbacks.forEach(function(t) {
      return t();
    });
  }, e2.prototype.resetKeys = function() {
    this._keyToClassName = {};
  }, e2.prototype._getStyleElement = function() {
    var t = this;
    return !this._styleElement && typeof document < "u" && (this._styleElement = this._createStyleElement(), Iw || window.requestAnimationFrame(function() {
      t._styleElement = void 0;
    })), this._styleElement;
  }, e2.prototype._createStyleElement = function() {
    var t = document.head, r = document.createElement("style"), n = null;
    r.setAttribute("data-merge-styles", "true");
    var o = this._config.cspSettings;
    if (o && o.nonce && r.setAttribute("nonce", o.nonce), this._lastStyleElement)
      n = this._lastStyleElement.nextElementSibling;
    else {
      var i = this._findPlaceholderStyleTag();
      i ? n = i.nextElementSibling : n = t.childNodes[0];
    }
    return t.insertBefore(r, t.contains(n) ? n : null), this._lastStyleElement = r, r;
  }, e2.prototype._findPlaceholderStyleTag = function() {
    var t = document.head;
    return t ? t.querySelector("style[data-merge-styles]") : null;
  }, e2;
}();
function cc() {
  for (var e2 = [], t = 0; t < arguments.length; t++)
    e2[t] = arguments[t];
  var r = [], n = [], o = je.getInstance();
  function i(a) {
    for (var s = 0, u = a; s < u.length; s++) {
      var l = u[s];
      if (l)
        if (typeof l == "string")
          if (l.indexOf(" ") >= 0)
            i(l.split(" "));
          else {
            var c = o.argsFromClassName(l);
            c ? i(c) : r.indexOf(l) === -1 && r.push(l);
          }
        else
          Array.isArray(l) ? i(l) : typeof l == "object" && n.push(l);
    }
  }
  return i(e2), { classes: r, objects: n };
}
function fc(e2) {
  ra !== e2 && (ra = e2);
}
function $E() {
  return ra === void 0 && (ra = typeof document < "u" && !!document.documentElement && document.documentElement.getAttribute("dir") === "rtl"), ra;
}
var ra;
ra = $E();
function fo() {
  return { rtl: $E() };
}
var KE = {};
function GE(e2, t) {
  var r = e2[t];
  r.charAt(0) !== "-" && (e2[t] = KE[r] = KE[r] || r.replace(/([A-Z])/g, "-$1").toLowerCase());
}
var dc;
function qE() {
  var e2;
  if (!dc) {
    var t = typeof document < "u" ? document : void 0, r = typeof navigator < "u" ? navigator : void 0, n = (e2 = r?.userAgent) === null || e2 === void 0 ? void 0 : e2.toLowerCase();
    t ? dc = { isWebkit: !!(t && "WebkitAppearance" in t.documentElement.style), isMoz: !!(n && n.indexOf("firefox") > -1), isOpera: !!(n && n.indexOf("opera") > -1), isMs: !!(r && (/rv:11.0/i.test(r.userAgent) || /Edge\/\d./i.test(navigator.userAgent))) } : dc = { isWebkit: true, isMoz: true, isOpera: true, isMs: true };
  }
  return dc;
}
var YE = { "user-select": 1 };
function QE(e2, t) {
  var r = qE(), n = e2[t];
  if (YE[n]) {
    var o = e2[t + 1];
    YE[n] && (r.isWebkit && e2.push("-webkit-" + n, o), r.isMoz && e2.push("-moz-" + n, o), r.isMs && e2.push("-ms-" + n, o), r.isOpera && e2.push("-o-" + n, o));
  }
}
var Rw = ["column-count", "font-weight", "flex", "flex-grow", "flex-shrink", "fill-opacity", "opacity", "order", "z-index", "zoom"];
function XE(e2, t) {
  var r = e2[t], n = e2[t + 1];
  if (typeof n == "number") {
    var o = Rw.indexOf(r) > -1, i = r.indexOf("--") > -1, a = o || i ? "" : "px";
    e2[t + 1] = "" + n + a;
  }
}
var pc;
var po = "left";
var mo = "right";
var Aw = "@noflip";
var ZE = (pc = {}, pc[po] = mo, pc[mo] = po, pc);
var JE = { "w-resize": "e-resize", "sw-resize": "se-resize", "nw-resize": "ne-resize" };
function eC(e2, t, r) {
  if (e2.rtl) {
    var n = t[r];
    if (!n)
      return;
    var o = t[r + 1];
    if (typeof o == "string" && o.indexOf(Aw) >= 0)
      t[r + 1] = o.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, "");
    else if (n.indexOf(po) >= 0)
      t[r] = n.replace(po, mo);
    else if (n.indexOf(mo) >= 0)
      t[r] = n.replace(mo, po);
    else if (String(o).indexOf(po) >= 0)
      t[r + 1] = o.replace(po, mo);
    else if (String(o).indexOf(mo) >= 0)
      t[r + 1] = o.replace(mo, po);
    else if (ZE[n])
      t[r] = ZE[n];
    else if (JE[o])
      t[r + 1] = JE[o];
    else
      switch (n) {
        case "margin":
        case "padding":
          t[r + 1] = Mw(o);
          break;
        case "box-shadow":
          t[r + 1] = Pw(o, 0);
          break;
      }
  }
}
function Pw(e2, t) {
  var r = e2.split(" "), n = parseInt(r[t], 10);
  return r[0] = r[0].replace(String(n), String(n * -1)), r.join(" ");
}
function Mw(e2) {
  if (typeof e2 == "string") {
    var t = e2.split(" ");
    if (t.length === 4)
      return t[0] + " " + t[3] + " " + t[2] + " " + t[1];
  }
  return e2;
}
function tC(e2) {
  for (var t = [], r = 0, n = 0, o = 0; o < e2.length; o++)
    switch (e2[o]) {
      case "(":
        n++;
        break;
      case ")":
        n && n--;
        break;
      case "	":
      case " ":
        n || (o > r && t.push(e2.substring(r, o)), r = o + 1);
        break;
    }
  return r < e2.length && t.push(e2.substring(r)), t;
}
var Bw = "displayName";
function Nw(e2) {
  var t = e2 && e2["&"];
  return t ? t.displayName : void 0;
}
var oC = /\:global\((.+?)\)/g;
function Lw(e2) {
  if (!oC.test(e2))
    return e2;
  for (var t = [], r = /\:global\((.+?)\)/g, n = null; n = r.exec(e2); )
    n[1].indexOf(",") > -1 && t.push([n.index, n.index + n[0].length, n[1].split(",").map(function(o) {
      return ":global(" + o.trim() + ")";
    }).join(", ")]);
  return t.reverse().reduce(function(o, i) {
    var a = i[0], s = i[1], u = i[2], l = o.slice(0, a), c = o.slice(s);
    return l + u + c;
  }, e2);
}
function rC(e2, t) {
  return e2.indexOf(":global(") >= 0 ? e2.replace(oC, "$1") : e2.indexOf(":") === 0 ? t + e2 : e2.indexOf("&") < 0 ? t + " " + e2 : e2;
}
function nC(e2, t, r, n) {
  t === void 0 && (t = { __order: [] }), r.indexOf("@") === 0 ? (r = r + "{" + e2, na([n], t, r)) : r.indexOf(",") > -1 ? Lw(r).split(",").map(function(o) {
    return o.trim();
  }).forEach(function(o) {
    return na([n], t, rC(o, e2));
  }) : na([n], t, rC(r, e2));
}
function na(e2, t, r) {
  t === void 0 && (t = { __order: [] }), r === void 0 && (r = "&");
  var n = je.getInstance(), o = t[r];
  o || (o = {}, t[r] = o, t.__order.push(r));
  for (var i = 0, a = e2; i < a.length; i++) {
    var s = a[i];
    if (typeof s == "string") {
      var u = n.argsFromClassName(s);
      u && na(u, t, r);
    } else if (Array.isArray(s))
      na(s, t, r);
    else
      for (var l in s)
        if (s.hasOwnProperty(l)) {
          var c = s[l];
          if (l === "selectors") {
            var d = s.selectors;
            for (var p in d)
              d.hasOwnProperty(p) && nC(r, t, p, d[p]);
          } else
            typeof c == "object" ? c !== null && nC(r, t, l, c) : c !== void 0 && (l === "margin" || l === "padding" ? Ow(o, l, c) : o[l] = c);
        }
  }
  return t;
}
function Ow(e2, t, r) {
  var n = typeof r == "string" ? tC(r) : [r];
  n.length === 0 && n.push(r), n[n.length - 1] === "!important" && (n = n.slice(0, -1).map(function(o) {
    return o + " !important";
  })), e2[t + "Top"] = n[0], e2[t + "Right"] = n[1] || n[0], e2[t + "Bottom"] = n[2] || n[0], e2[t + "Left"] = n[3] || n[1] || n[0];
}
function zw(e2, t) {
  for (var r = [e2.rtl ? "rtl" : "ltr"], n = false, o = 0, i = t.__order; o < i.length; o++) {
    var a = i[o];
    r.push(a);
    var s = t[a];
    for (var u in s)
      s.hasOwnProperty(u) && s[u] !== void 0 && (n = true, r.push(u, s[u]));
  }
  return n ? r.join("") : void 0;
}
function iC(e2, t) {
  return t <= 0 ? "" : t === 1 ? e2 : e2 + iC(e2, t - 1);
}
function Ns(e2, t) {
  if (!t)
    return "";
  var r = [];
  for (var n in t)
    t.hasOwnProperty(n) && n !== Bw && t[n] !== void 0 && r.push(n, t[n]);
  for (var o = 0; o < r.length; o += 2)
    GE(r, o), XE(r, o), eC(e2, r, o), QE(r, o);
  for (var o = 1; o < r.length; o += 4)
    r.splice(o, 1, ":", r[o], ";");
  return r.join("");
}
function fm(e2) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = na(t), o = zw(e2, n);
  if (o) {
    var i = je.getInstance(), a = { className: i.classNameFromKey(o), key: o, args: t };
    if (!a.className) {
      a.className = i.getClassName(Nw(n));
      for (var s = [], u = 0, l = n.__order; u < l.length; u++) {
        var c = l[u];
        s.push(c, Ns(e2, n[c]));
      }
      a.rulesToInsert = s;
    }
    return a;
  }
}
function dm(e2, t) {
  t === void 0 && (t = 1);
  var r = je.getInstance(), n = e2.className, o = e2.key, i = e2.args, a = e2.rulesToInsert;
  if (a) {
    for (var s = 0; s < a.length; s += 2) {
      var u = a[s + 1];
      if (u) {
        var l = a[s];
        l = l.replace(/&/g, iC("." + e2.className, t));
        var c = l + "{" + u + "}" + (l.indexOf("@") === 0 ? "}" : "");
        r.insertRule(c);
      }
    }
    r.cacheClassName(n, o, i, a);
  }
}
function aC(e2) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = fm.apply(void 0, Pt([e2], t));
  return n ? (dm(n, e2.specificityMultiplier), n.className) : "";
}
function _t() {
  for (var e2 = [], t = 0; t < arguments.length; t++)
    e2[t] = arguments[t];
  return sC(e2, fo());
}
function sC(e2, t) {
  var r = e2 instanceof Array ? e2 : [e2], n = cc(r), o = n.classes, i = n.objects;
  return i.length && o.push(aC(t || {}, i)), o.join(" ");
}
function Mt() {
  for (var e2 = [], t = 0; t < arguments.length; t++)
    e2[t] = arguments[t];
  if (e2 && e2.length === 1 && e2[0] && !e2[0].subComponentStyles)
    return e2[0];
  for (var r = {}, n = {}, o = 0, i = e2; o < i.length; o++) {
    var a = i[o];
    if (a) {
      for (var s in a)
        if (a.hasOwnProperty(s)) {
          if (s === "subComponentStyles" && a.subComponentStyles !== void 0) {
            var u = a.subComponentStyles;
            for (var l in u)
              u.hasOwnProperty(l) && (n.hasOwnProperty(l) ? n[l].push(u[l]) : n[l] = [u[l]]);
            continue;
          }
          var c = r[s], d = a[s];
          c === void 0 ? r[s] = d : r[s] = Pt(Array.isArray(c) ? c : [c], Array.isArray(d) ? d : [d]);
        }
    }
  }
  if (Object.keys(n).length > 0) {
    r.subComponentStyles = {};
    var p = r.subComponentStyles, v = function(g) {
      if (n.hasOwnProperty(g)) {
        var y = n[g];
        p[g] = function(f) {
          return Mt.apply(void 0, y.map(function(m) {
            return typeof m == "function" ? m(f) : m;
          }));
        };
      }
    };
    for (var l in n)
      v(l);
  }
  return r;
}
function Br() {
  for (var e2 = [], t = 0; t < arguments.length; t++)
    e2[t] = arguments[t];
  return mc(e2, fo());
}
function mc(e2, t) {
  var r = { subComponentStyles: {} }, n = e2[0];
  if (!n && e2.length <= 1)
    return { subComponentStyles: {} };
  var o = Mt.apply(void 0, e2), i = [];
  for (var a in o)
    if (o.hasOwnProperty(a)) {
      if (a === "subComponentStyles") {
        r.subComponentStyles = o.subComponentStyles || {};
        continue;
      }
      var s = o[a], u = cc(s), l = u.classes, c = u.objects;
      if (c?.length) {
        var d = fm(t || {}, { displayName: a }, c);
        d && (i.push(d), r[a] = l.concat([d.className]).join(" "));
      } else
        r[a] = l.join(" ");
    }
  for (var p = 0, v = i; p < v.length; p++) {
    var d = v[p];
    d && dm(d, t?.specificityMultiplier);
  }
  return r;
}
function oa(e2) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  for (var n = [], o = 0, i = t; o < i.length; o++) {
    var a = i[o];
    a && n.push(typeof a == "function" ? a(e2) : a);
  }
  return n.length === 1 ? n[0] : n.length ? Mt.apply(void 0, n) : {};
}
function ia(e2) {
  var t = je.getInstance(), r = Ns(fo(), e2), n = t.classNameFromKey(r);
  if (!n) {
    var o = t.getClassName();
    t.insertRule("@font-face{" + r + "}", true), t.cacheClassName(o, r, [], ["font-face", r]);
  }
}
function Bt(e2) {
  var t = je.getInstance(), r = [];
  for (var n in e2)
    e2.hasOwnProperty(n) && r.push(n, "{", Ns(fo(), e2[n]), "}");
  var o = r.join(""), i = t.classNameFromKey(o);
  if (i)
    return i;
  var a = t.getClassName();
  return t.insertRule("@keyframes " + a + "{" + o + "}", true), t.cacheClassName(a, o, [], ["keyframes", o]), a;
}
nn("@fluentui/merge-styles", "8.2.1");
function pm(e2) {
  var t = {}, r = function(o) {
    if (e2.hasOwnProperty(o)) {
      var i;
      Object.defineProperty(t, o, { get: function() {
        return i === void 0 && (i = _t(e2[o]).toString()), i;
      }, enumerable: true, configurable: true });
    }
  };
  for (var n in e2)
    r(n);
  return t;
}
var hc = false;
var mm = void 0;
try {
  mm = window;
} catch {
}
function q(e2) {
  if (!(hc || typeof mm > "u")) {
    var t = e2;
    return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : mm;
  }
}
var ho = function() {
  function e2(t, r) {
    this._timeoutIds = null, this._immediateIds = null, this._intervalIds = null, this._animationFrameIds = null, this._isDisposed = false, this._parent = t || null, this._onErrorHandler = r, this._noop = function() {
    };
  }
  return e2.prototype.dispose = function() {
    var t;
    if (this._isDisposed = true, this._parent = null, this._timeoutIds) {
      for (t in this._timeoutIds)
        this._timeoutIds.hasOwnProperty(t) && this.clearTimeout(parseInt(t, 10));
      this._timeoutIds = null;
    }
    if (this._immediateIds) {
      for (t in this._immediateIds)
        this._immediateIds.hasOwnProperty(t) && this.clearImmediate(parseInt(t, 10));
      this._immediateIds = null;
    }
    if (this._intervalIds) {
      for (t in this._intervalIds)
        this._intervalIds.hasOwnProperty(t) && this.clearInterval(parseInt(t, 10));
      this._intervalIds = null;
    }
    if (this._animationFrameIds) {
      for (t in this._animationFrameIds)
        this._animationFrameIds.hasOwnProperty(t) && this.cancelAnimationFrame(parseInt(t, 10));
      this._animationFrameIds = null;
    }
  }, e2.prototype.setTimeout = function(t, r) {
    var n = this, o = 0;
    return this._isDisposed || (this._timeoutIds || (this._timeoutIds = {}), o = setTimeout(function() {
      try {
        n._timeoutIds && delete n._timeoutIds[o], t.apply(n._parent);
      } catch (i) {
        n._logError(i);
      }
    }, r), this._timeoutIds[o] = true), o;
  }, e2.prototype.clearTimeout = function(t) {
    this._timeoutIds && this._timeoutIds[t] && (clearTimeout(t), delete this._timeoutIds[t]);
  }, e2.prototype.setImmediate = function(t, r) {
    var n = this, o = 0, i = q(r);
    if (!this._isDisposed) {
      this._immediateIds || (this._immediateIds = {});
      var a = function() {
        try {
          n._immediateIds && delete n._immediateIds[o], t.apply(n._parent);
        } catch (s) {
          n._logError(s);
        }
      };
      o = i.setTimeout(a, 0), this._immediateIds[o] = true;
    }
    return o;
  }, e2.prototype.clearImmediate = function(t, r) {
    var n = q(r);
    this._immediateIds && this._immediateIds[t] && (n.clearTimeout(t), delete this._immediateIds[t]);
  }, e2.prototype.setInterval = function(t, r) {
    var n = this, o = 0;
    return this._isDisposed || (this._intervalIds || (this._intervalIds = {}), o = setInterval(function() {
      try {
        t.apply(n._parent);
      } catch (i) {
        n._logError(i);
      }
    }, r), this._intervalIds[o] = true), o;
  }, e2.prototype.clearInterval = function(t) {
    this._intervalIds && this._intervalIds[t] && (clearInterval(t), delete this._intervalIds[t]);
  }, e2.prototype.throttle = function(t, r, n) {
    var o = this;
    if (this._isDisposed)
      return this._noop;
    var i = r || 0, a = true, s = true, u = 0, l, c, d = null;
    n && typeof n.leading == "boolean" && (a = n.leading), n && typeof n.trailing == "boolean" && (s = n.trailing);
    var p = function(g) {
      var y = Date.now(), f = y - u, m = a ? i - f : i;
      return f >= i && (!g || a) ? (u = y, d && (o.clearTimeout(d), d = null), l = t.apply(o._parent, c)) : d === null && s && (d = o.setTimeout(p, m)), l;
    }, v = function() {
      for (var g = [], y = 0; y < arguments.length; y++)
        g[y] = arguments[y];
      return c = g, p(true);
    };
    return v;
  }, e2.prototype.debounce = function(t, r, n) {
    var o = this;
    if (this._isDisposed) {
      var i = function() {
      };
      return i.cancel = function() {
      }, i.flush = function() {
        return null;
      }, i.pending = function() {
        return false;
      }, i;
    }
    var a = r || 0, s = false, u = true, l = null, c = 0, d = Date.now(), p, v, g = null;
    n && typeof n.leading == "boolean" && (s = n.leading), n && typeof n.trailing == "boolean" && (u = n.trailing), n && typeof n.maxWait == "number" && !isNaN(n.maxWait) && (l = n.maxWait);
    var y = function(S) {
      g && (o.clearTimeout(g), g = null), d = S;
    }, f = function(S) {
      y(S), p = t.apply(o._parent, v);
    }, m = function(S) {
      var F = Date.now(), w = false;
      S && (s && F - c >= a && (w = true), c = F);
      var k = F - c, V = a - k, re = F - d, fe = false;
      return l !== null && (re >= l && g ? fe = true : V = Math.min(V, l - re)), k >= a || fe || w ? f(F) : (g === null || !S) && u && (g = o.setTimeout(m, V)), p;
    }, h = function() {
      return !!g;
    }, E = function() {
      h() && y(Date.now());
    }, C = function() {
      return h() && f(Date.now()), p;
    }, x = function() {
      for (var S = [], F = 0; F < arguments.length; F++)
        S[F] = arguments[F];
      return v = S, m(true);
    };
    return x.cancel = E, x.flush = C, x.pending = h, x;
  }, e2.prototype.requestAnimationFrame = function(t, r) {
    var n = this, o = 0, i = q(r);
    if (!this._isDisposed) {
      this._animationFrameIds || (this._animationFrameIds = {});
      var a = function() {
        try {
          n._animationFrameIds && delete n._animationFrameIds[o], t.apply(n._parent);
        } catch (s) {
          n._logError(s);
        }
      };
      o = i.requestAnimationFrame ? i.requestAnimationFrame(a) : i.setTimeout(a, 0), this._animationFrameIds[o] = true;
    }
    return o;
  }, e2.prototype.cancelAnimationFrame = function(t, r) {
    var n = q(r);
    this._animationFrameIds && this._animationFrameIds[t] && (n.cancelAnimationFrame ? n.cancelAnimationFrame(t) : n.clearTimeout(t), delete this._animationFrameIds[t]);
  }, e2.prototype._logError = function(t) {
    this._onErrorHandler && this._onErrorHandler(t);
  }, e2;
}();
function Qo(e2, t) {
  for (var r in e2)
    if (e2.hasOwnProperty(r) && (!t.hasOwnProperty(r) || t[r] !== e2[r]))
      return false;
  for (var r in t)
    if (t.hasOwnProperty(r) && !e2.hasOwnProperty(r))
      return false;
  return true;
}
function Nr(e2) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return uC.apply(this, [null, e2].concat(t));
}
function uC(e2, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  t = t || {};
  for (var o = 0, i = r; o < i.length; o++) {
    var a = i[o];
    if (a)
      for (var s in a)
        a.hasOwnProperty(s) && (!e2 || e2(s)) && (t[s] = a[s]);
  }
  return t;
}
var fr = function() {
  function e2(t) {
    this._id = e2._uniqueId++, this._parent = t, this._eventRecords = [];
  }
  return e2.raise = function(t, r, n, o) {
    var i;
    if (e2._isElement(t)) {
      if (typeof document < "u" && document.createEvent) {
        var a = document.createEvent("HTMLEvents");
        a.initEvent(r, o || false, true), Nr(a, n), i = t.dispatchEvent(a);
      } else if (typeof document < "u" && document.createEventObject) {
        var s = document.createEventObject(n);
        t.fireEvent("on" + r, s);
      }
    } else
      for (; t && i !== false; ) {
        var u = t.__events__, l = u ? u[r] : null;
        if (l) {
          for (var c in l)
            if (l.hasOwnProperty(c))
              for (var d = l[c], p = 0; i !== false && p < d.length; p++) {
                var v = d[p];
                v.objectCallback && (i = v.objectCallback.call(v.parent, n));
              }
        }
        t = o ? t.parent : null;
      }
    return i;
  }, e2.isObserved = function(t, r) {
    var n = t && t.__events__;
    return !!n && !!n[r];
  }, e2.isDeclared = function(t, r) {
    var n = t && t.__declaredEvents;
    return !!n && !!n[r];
  }, e2.stopPropagation = function(t) {
    t.stopPropagation ? t.stopPropagation() : t.cancelBubble = true;
  }, e2._isElement = function(t) {
    return !!t && (!!t.addEventListener || typeof HTMLElement < "u" && t instanceof HTMLElement);
  }, e2.prototype.dispose = function() {
    this._isDisposed || (this._isDisposed = true, this.off(), this._parent = null);
  }, e2.prototype.onAll = function(t, r, n) {
    for (var o in r)
      r.hasOwnProperty(o) && this.on(t, o, r[o], n);
  }, e2.prototype.on = function(t, r, n, o) {
    var i = this;
    if (r.indexOf(",") > -1)
      for (var a = r.split(/[ ,]+/), s = 0; s < a.length; s++)
        this.on(t, a[s], n, o);
    else {
      var u = this._parent, l = { target: t, eventName: r, parent: u, callback: n, options: o }, a = t.__events__ = t.__events__ || {};
      if (a[r] = a[r] || { count: 0 }, a[r][this._id] = a[r][this._id] || [], a[r][this._id].push(l), a[r].count++, e2._isElement(t)) {
        var c = function() {
          for (var v = [], g = 0; g < arguments.length; g++)
            v[g] = arguments[g];
          if (!i._isDisposed) {
            var y;
            try {
              if (y = n.apply(u, v), y === false && v[0]) {
                var f = v[0];
                f.preventDefault && f.preventDefault(), f.stopPropagation && f.stopPropagation(), f.cancelBubble = true;
              }
            } catch {
            }
            return y;
          }
        };
        l.elementCallback = c, t.addEventListener ? t.addEventListener(r, c, o) : t.attachEvent && t.attachEvent("on" + r, c);
      } else {
        var d = function() {
          for (var v = [], g = 0; g < arguments.length; g++)
            v[g] = arguments[g];
          if (!i._isDisposed)
            return n.apply(u, v);
        };
        l.objectCallback = d;
      }
      this._eventRecords.push(l);
    }
  }, e2.prototype.off = function(t, r, n, o) {
    for (var i = 0; i < this._eventRecords.length; i++) {
      var a = this._eventRecords[i];
      if ((!t || t === a.target) && (!r || r === a.eventName) && (!n || n === a.callback) && (typeof o != "boolean" || o === a.options)) {
        var s = a.target.__events__, u = s[a.eventName], l = u ? u[this._id] : null;
        l && (l.length === 1 || !n ? (u.count -= l.length, delete s[a.eventName][this._id]) : (u.count--, l.splice(l.indexOf(a), 1)), u.count || delete s[a.eventName]), a.elementCallback && (a.target.removeEventListener ? a.target.removeEventListener(a.eventName, a.elementCallback, a.options) : a.target.detachEvent && a.target.detachEvent("on" + a.eventName, a.elementCallback)), this._eventRecords.splice(i--, 1);
      }
    }
  }, e2.prototype.raise = function(t, r, n) {
    return e2.raise(this._parent, t, r, n);
  }, e2.prototype.declare = function(t) {
    var r = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
    if (typeof t == "string")
      r[t] = true;
    else
      for (var n = 0; n < t.length; n++)
        r[t[n]] = true;
  }, e2._uniqueId = 0, e2;
}();
function Ge(e2) {
  if (!(hc || typeof document > "u")) {
    var t = e2;
    return t && t.ownerDocument ? t.ownerDocument : document;
  }
}
var hm;
var b2 = _t({ overflow: "hidden !important" });
var lC = "data-is-scrollable";
function cC() {
  if (hm === void 0) {
    var e2 = document.createElement("div");
    e2.style.setProperty("width", "100px"), e2.style.setProperty("height", "100px"), e2.style.setProperty("overflow", "scroll"), e2.style.setProperty("position", "absolute"), e2.style.setProperty("top", "-9999px"), document.body.appendChild(e2), hm = e2.offsetWidth - e2.clientWidth, document.body.removeChild(e2);
  }
  return hm;
}
function fC(e2) {
  for (var t = e2, r = Ge(e2); t && t !== r.body; ) {
    if (t.getAttribute(lC) === "true")
      return t;
    t = t.parentElement;
  }
  for (t = e2; t && t !== r.body; ) {
    if (t.getAttribute(lC) !== "false") {
      var n = getComputedStyle(t), o = n ? n.getPropertyValue("overflow-y") : "";
      if (o && (o === "scroll" || o === "auto"))
        return t;
    }
    t = t.parentElement;
  }
  return (!t || t === r.body) && (t = q(e2)), t;
}
var pC = N(L());
function vm(e2) {
  console && console.warn && console.warn(e2);
}
function vc(e2, t, r, n, o) {
  if (o === true && false)
    for (var i, a; i < a.length; i++)
      var s;
}
function dC(e2, t, r) {
  if (false) {
    for (var n in r)
      if (t && t[n] !== void 0)
        var o;
  }
}
function gc(e2, t, r) {
  if (false) {
    for (var n in r)
      if (t && n in t)
        var o, i;
  }
}
var L2 = function(e2) {
  _e(t, e2);
  function t(r, n) {
    var o = e2.call(this, r, n) || this;
    return Vw(o, t.prototype, ["componentDidMount", "shouldComponentUpdate", "getSnapshotBeforeUpdate", "render", "componentDidUpdate", "componentWillUnmount"]), o;
  }
  return t.prototype.componentDidUpdate = function(r, n) {
    this._updateComponentRef(r, this.props);
  }, t.prototype.componentDidMount = function() {
    this._setComponentRef(this.props.componentRef, this);
  }, t.prototype.componentWillUnmount = function() {
    if (this._setComponentRef(this.props.componentRef, null), this.__disposables) {
      for (var r = 0, n = this._disposables.length; r < n; r++) {
        var o = this.__disposables[r];
        o.dispose && o.dispose();
      }
      this.__disposables = null;
    }
  }, Object.defineProperty(t.prototype, "className", { get: function() {
    if (!this.__className) {
      var r = /function (.{1,})\(/, n = r.exec(this.constructor.toString());
      this.__className = n && n.length > 1 ? n[1] : "";
    }
    return this.__className;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "_disposables", { get: function() {
    return this.__disposables || (this.__disposables = []), this.__disposables;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "_async", { get: function() {
    return this.__async || (this.__async = new ho(this), this._disposables.push(this.__async)), this.__async;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "_events", { get: function() {
    return this.__events || (this.__events = new fr(this), this._disposables.push(this.__events)), this.__events;
  }, enumerable: false, configurable: true }), t.prototype._resolveRef = function(r) {
    var n = this;
    return this.__resolves || (this.__resolves = {}), this.__resolves[r] || (this.__resolves[r] = function(o) {
      return n[r] = o;
    }), this.__resolves[r];
  }, t.prototype._updateComponentRef = function(r, n) {
    n === void 0 && (n = {}), r && n && r.componentRef !== n.componentRef && (this._setComponentRef(r.componentRef, null), this._setComponentRef(n.componentRef, this));
  }, t.prototype._warnDeprecations = function(r) {
    gc(this.className, this.props, r);
  }, t.prototype._warnMutuallyExclusive = function(r) {
    dC(this.className, this.props, r);
  }, t.prototype._warnConditionallyRequiredProps = function(r, n, o) {
    vc(this.className, this.props, r, n, o);
  }, t.prototype._setComponentRef = function(r, n) {
    !this._skipComponentRefResolution && r && (typeof r == "function" && r(n), typeof r == "object" && (r.current = n));
  }, t;
}(pC.Component);
function Vw(e2, t, r) {
  for (var n = 0, o = r.length; n < o; n++)
    Ww(e2, t, r[n]);
}
function Ww(e2, t, r) {
  var n = e2[r], o = t[r];
  (n || o) && (e2[r] = function() {
    for (var i = [], a = 0; a < arguments.length; a++)
      i[a] = arguments[a];
    var s;
    return o && (s = o.apply(this, i)), n !== o && (s = n.apply(this, i)), s;
  });
}
function aa() {
  return null;
}
var gm = "__globalSettings__";
var Em = "__callbacks__";
var Uw = 0;
var yc = function() {
  function e2() {
  }
  return e2.getValue = function(t, r) {
    var n = ym();
    return n[t] === void 0 && (n[t] = typeof r == "function" ? r() : r), n[t];
  }, e2.setValue = function(t, r) {
    var n = ym(), o = n[Em], i = n[t];
    if (r !== i) {
      n[t] = r;
      var a = { oldValue: i, value: r, key: t };
      for (var s in o)
        o.hasOwnProperty(s) && o[s](a);
    }
    return r;
  }, e2.addChangeListener = function(t) {
    var r = t.__id__, n = mC();
    r || (r = t.__id__ = String(Uw++)), n[r] = t;
  }, e2.removeChangeListener = function(t) {
    var r = mC();
    delete r[t.__id__];
  }, e2;
}();
function ym() {
  var e2, t = q(), r = t || {};
  return r[gm] || (r[gm] = (e2 = {}, e2[Em] = {}, e2)), r[gm];
}
function mC() {
  var e2 = ym();
  return e2[Em];
}
var H = { backspace: 8, tab: 9, enter: 13, shift: 16, ctrl: 17, alt: 18, pauseBreak: 19, capslock: 20, escape: 27, space: 32, pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40, insert: 45, del: 46, zero: 48, one: 49, two: 50, three: 51, four: 52, five: 53, six: 54, seven: 55, eight: 56, nine: 57, colon: 58, a: 65, b: 66, c: 67, d: 68, e: 69, f: 70, g: 71, h: 72, i: 73, j: 74, k: 75, l: 76, m: 77, n: 78, o: 79, p: 80, q: 81, r: 82, s: 83, t: 84, u: 85, v: 86, w: 87, x: 88, y: 89, z: 90, leftWindow: 91, rightWindow: 92, select: 93, zero_numpad: 96, one_numpad: 97, two_numpad: 98, three_numpad: 99, four_numpad: 100, five_numpad: 101, six_numpad: 102, seven_numpad: 103, eight_numpad: 104, nine_numpad: 105, multiply: 106, add: 107, subtract: 109, decimalPoint: 110, divide: 111, f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123, numlock: 144, scrollLock: 145, semicolon: 186, equalSign: 187, comma: 188, dash: 189, period: 190, forwardSlash: 191, graveAccent: 192, openBracket: 219, backSlash: 220, closeBracket: 221, singleQuote: 222 };
var Lr = function() {
  function e2(t, r, n, o) {
    t === void 0 && (t = 0), r === void 0 && (r = 0), n === void 0 && (n = 0), o === void 0 && (o = 0), this.top = n, this.bottom = o, this.left = t, this.right = r;
  }
  return Object.defineProperty(e2.prototype, "width", { get: function() {
    return this.right - this.left;
  }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "height", { get: function() {
    return this.bottom - this.top;
  }, enumerable: false, configurable: true }), e2.prototype.equals = function(t) {
    return parseFloat(this.top.toFixed(4)) === parseFloat(t.top.toFixed(4)) && parseFloat(this.bottom.toFixed(4)) === parseFloat(t.bottom.toFixed(4)) && parseFloat(this.left.toFixed(4)) === parseFloat(t.left.toFixed(4)) && parseFloat(this.right.toFixed(4)) === parseFloat(t.right.toFixed(4));
  }, e2;
}();
function hC(e2) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.length < 2 ? t[0] : function() {
    for (var n = [], o = 0; o < arguments.length; o++)
      n[o] = arguments[o];
    t.forEach(function(i) {
      return i && i.apply(e2, n);
    });
  };
}
function an() {
  for (var e2 = [], t = 0; t < arguments.length; t++)
    e2[t] = arguments[t];
  var r = e2.filter(function(n) {
    return n;
  }).join(" ").trim();
  return r === "" ? void 0 : r;
}
function vC(e2, t, r) {
  var n = e2.slice();
  return n.splice(t, 0, r), n;
}
function gC(e2, t) {
  if (e2.length !== t.length)
    return false;
  for (var r = 0; r < e2.length; r++)
    if (e2[r] !== t[r])
      return false;
  return true;
}
function Ec(e2) {
  var t = null;
  try {
    var r = q();
    t = r ? r.sessionStorage.getItem(e2) : null;
  } catch {
  }
  return t;
}
function Cm(e2, t) {
  var r;
  try {
    (r = q()) === null || r === void 0 || r.sessionStorage.setItem(e2, t);
  } catch {
  }
}
var yC = "isRTL";
var Sn;
function Xe(e2) {
  if (e2 === void 0 && (e2 = {}), e2.rtl !== void 0)
    return e2.rtl;
  if (Sn === void 0) {
    var t = Ec(yC);
    t !== null && (Sn = t === "1", $w(Sn));
    var r = Ge();
    Sn === void 0 && r && (Sn = (r.body && r.body.getAttribute("dir") || r.documentElement.getAttribute("dir")) === "rtl", fc(Sn));
  }
  return !!Sn;
}
function $w(e2, t) {
  t === void 0 && (t = false);
  var r = Ge();
  r && r.documentElement.setAttribute("dir", e2 ? "rtl" : "ltr"), t && Cm(yC, e2 ? "1" : "0"), Sn = e2, fc(Sn);
}
function EC(e2) {
  return e2 && !!e2._virtual;
}
function CC(e2) {
  var t;
  return e2 && EC(e2) && (t = e2._virtual.parent), t;
}
function Nt(e2, t) {
  return t === void 0 && (t = true), e2 && (t && CC(e2) || e2.parentNode && e2.parentNode);
}
function sn(e2, t, r) {
  r === void 0 && (r = true);
  var n = false;
  if (e2 && t)
    if (r)
      if (e2 === t)
        n = true;
      else
        for (n = false; t; ) {
          var o = Nt(t);
          if (o === e2) {
            n = true;
            break;
          }
          t = o;
        }
    else
      e2.contains && (n = e2.contains(t));
  return n;
}
function Ls(e2, t) {
  return !e2 || e2 === document.body ? null : t(e2) ? e2 : Ls(Nt(e2), t);
}
function Sm(e2, t) {
  var r = Ls(e2, function(n) {
    return n.hasAttribute(t);
  });
  return r && r.getAttribute(t);
}
var Os = "data-portal-element";
function _m(e2) {
  e2.setAttribute(Os, "true");
}
function zs(e2, t) {
  var r = Ls(e2, function(n) {
    return t === n || n.hasAttribute(Os);
  });
  return r !== null && r.hasAttribute(Os);
}
function Fm(e2, t) {
  var r = e2, n = t;
  r._virtual || (r._virtual = { children: [] });
  var o = r._virtual.parent;
  if (o && o !== t) {
    var i = o._virtual.children.indexOf(r);
    i > -1 && o._virtual.children.splice(i, 1);
  }
  r._virtual.parent = n || void 0, n && (n._virtual || (n._virtual = { children: [] }), n._virtual.children.push(r));
}
var Kw = "data-is-focusable";
var Gw = "data-is-visible";
var qw = "data-focuszone-id";
var Yw = "data-is-sub-focuszone";
function SC(e2, t, r) {
  return Xt(e2, t, true, false, false, r);
}
function _C(e2, t, r) {
  return Qt(e2, t, true, false, true, r);
}
function FC(e2) {
  var t = Xt(e2, e2, true, false, false, true);
  return t ? (Qw(t), true) : false;
}
function Qt(e2, t, r, n, o, i, a, s) {
  if (!t || !a && t === e2)
    return null;
  var u = xm(t);
  if (o && u && (i || !(un(t) || Cc(t)))) {
    var l = Qt(e2, t.lastElementChild, true, true, true, i, a, s);
    if (l) {
      if (s && Or(l, true) || !s)
        return l;
      var c = Qt(e2, l.previousElementSibling, true, true, true, i, a, s);
      if (c)
        return c;
      for (var d = l.parentElement; d && d !== t; ) {
        var p = Qt(e2, d.previousElementSibling, true, true, true, i, a, s);
        if (p)
          return p;
        d = d.parentElement;
      }
    }
  }
  if (r && u && Or(t, s))
    return t;
  var v = Qt(e2, t.previousElementSibling, true, true, true, i, a, s);
  return v || (n ? null : Qt(e2, t.parentElement, true, false, false, i, a, s));
}
function Xt(e2, t, r, n, o, i, a, s) {
  if (!t || t === e2 && o && !a)
    return null;
  var u = xm(t);
  if (r && u && Or(t, s))
    return t;
  if (!o && u && (i || !(un(t) || Cc(t)))) {
    var l = Xt(e2, t.firstElementChild, true, true, false, i, a, s);
    if (l)
      return l;
  }
  if (t === e2)
    return null;
  var c = Xt(e2, t.nextElementSibling, true, true, false, i, a, s);
  return c || (n ? null : Xt(e2, t.parentElement, false, false, true, i, a, s));
}
function xm(e2) {
  if (!e2 || !e2.getAttribute)
    return false;
  var t = e2.getAttribute(Gw);
  return t != null ? t === "true" : e2.offsetHeight !== 0 || e2.offsetParent !== null || e2.isVisible === true;
}
function Or(e2, t) {
  if (!e2 || e2.disabled)
    return false;
  var r = 0, n = null;
  e2 && e2.getAttribute && (n = e2.getAttribute("tabIndex"), n && (r = parseInt(n, 10)));
  var o = e2.getAttribute ? e2.getAttribute(Kw) : null, i = n !== null && r >= 0, a = !!e2 && o !== "false" && (e2.tagName === "A" || e2.tagName === "BUTTON" || e2.tagName === "INPUT" || e2.tagName === "TEXTAREA" || e2.tagName === "SELECT" || o === "true" || i);
  return t ? r !== -1 && a : a;
}
function un(e2) {
  return !!(e2 && e2.getAttribute && !!e2.getAttribute(qw));
}
function Cc(e2) {
  return !!(e2 && e2.getAttribute && e2.getAttribute(Yw) === "true");
}
function xC(e2) {
  var t = Ge(e2), r = t && t.activeElement;
  return !!(r && sn(e2, r));
}
function Sc(e2, t) {
  return Sm(e2, t) !== "true";
}
var sa = void 0;
function Qw(e2) {
  if (e2) {
    if (sa) {
      sa = e2;
      return;
    }
    sa = e2;
    var t = q(e2);
    t && t.requestAnimationFrame(function() {
      sa && sa.focus(), sa = void 0;
    });
  }
}
function bC(e2, t) {
  for (var r = e2, n = 0, o = t; n < o.length; n++) {
    var i = o[n], a = r.children[Math.min(i, r.children.length - 1)];
    if (!a)
      break;
    r = a;
  }
  return r = Or(r) && xm(r) ? r : Xt(e2, r, true) || Qt(e2, r), r;
}
function wC(e2, t) {
  for (var r = []; t && e2 && t !== e2; ) {
    var n = Nt(t, true);
    if (n === null)
      return [];
    r.unshift(Array.prototype.indexOf.call(n.children, t)), t = n;
  }
  return r;
}
function vo(e2, t, r, n) {
  return e2.addEventListener(t, r, n), function() {
    return e2.removeEventListener(t, r, n);
  };
}
function kC(e2) {
  var t = Xw("MouseEvents");
  t.initEvent("click", true, true), e2.dispatchEvent(t);
}
function Xw(e2) {
  var t;
  return typeof Event == "function" ? t = new Event(e2) : (t = document.createEvent("Event"), t.initEvent(e2, true, true)), t;
}
var Zw = 50;
var Jw = 5;
var Fc = 0;
var bm = je.getInstance();
bm && bm.onReset && bm.onReset(function() {
  return Fc++;
});
var _c = "__retval__";
function Lt(e2) {
  e2 === void 0 && (e2 = {});
  var t = /* @__PURE__ */ new Map(), r = 0, n = 0, o = Fc, i = function(a, s) {
    var u;
    if (s === void 0 && (s = {}), e2.useStaticStyles && typeof a == "function" && a.__noStyleOverride__)
      return a(s);
    n++;
    var l = t, c = s.theme, d = c && c.rtl !== void 0 ? c.rtl : Xe(), p = e2.disableCaching;
    if (o !== Fc && (o = Fc, t = /* @__PURE__ */ new Map(), r = 0), e2.disableCaching || (l = DC(t, a), l = DC(l, s)), (p || !l[_c]) && (a === void 0 ? l[_c] = {} : l[_c] = mc([typeof a == "function" ? a(s) : a], { rtl: !!d, specificityMultiplier: e2.useStaticStyles ? Jw : void 0 }), p || r++), r > (e2.cacheSize || Zw)) {
      var v = q();
      !((u = v?.FabricConfig) === null || u === void 0) && u.enableClassNameCacheFullWarning && (console.warn("Styles are being recalculated too frequently. Cache miss rate is " + r + "/" + n + "."), console.trace()), t.clear(), r = 0, e2.disableCaching = true;
    }
    return l[_c];
  };
  return i;
}
function wm(e2, t) {
  return t = ek(t), e2.has(t) || e2.set(t, /* @__PURE__ */ new Map()), e2.get(t);
}
function DC(e2, t) {
  if (typeof t == "function") {
    var r = t.__cachedInputs__;
    if (r)
      for (var n = 0, o = t.__cachedInputs__; n < o.length; n++) {
        var i = o[n];
        e2 = wm(e2, i);
      }
    else
      e2 = wm(e2, t);
  } else if (typeof t == "object")
    for (var a in t)
      t.hasOwnProperty(a) && (e2 = wm(e2, t[a]));
  return e2;
}
function ek(e2) {
  switch (e2) {
    case void 0:
      return "__undefined__";
    case null:
      return "__null__";
    default:
      return e2;
  }
}
var TC = false;
var xc = 0;
var tk = { empty: true };
var km = {};
var Dm = typeof WeakMap > "u" ? null : WeakMap;
function rk() {
  xc++;
}
function ee(e2, t, r) {
  if (t === void 0 && (t = 100), r === void 0 && (r = false), !Dm)
    return e2;
  if (!TC) {
    var n = je.getInstance();
    n && n.onReset && je.getInstance().onReset(rk), TC = true;
  }
  var o, i = 0, a = xc;
  return function() {
    for (var u = [], l = 0; l < arguments.length; l++)
      u[l] = arguments[l];
    var c = o;
    (o === void 0 || a !== xc || t > 0 && i > t) && (o = IC(), i = 0, a = xc), c = o;
    for (var d = 0; d < u.length; d++) {
      var p = nk(u[d]);
      c.map.has(p) || c.map.set(p, IC()), c = c.map.get(p);
    }
    return c.hasOwnProperty("value") || (c.value = e2.apply(void 0, u), i++), r && (c.value === null || c.value === void 0) && (c.value = e2.apply(void 0, u)), c.value;
  };
}
function nk(e2) {
  if (e2) {
    if (typeof e2 == "object" || typeof e2 == "function")
      return e2;
    km[e2] || (km[e2] = { val: e2 });
  } else
    return tk;
  return km[e2];
}
function IC() {
  return { map: Dm ? new Dm() : null };
}
function Ot() {
  for (var e2 = [], t = 0; t < arguments.length; t++)
    e2[t] = arguments[t];
  for (var r = [], n = 0, o = e2; n < o.length; n++) {
    var i = o[n];
    if (i)
      if (typeof i == "string")
        r.push(i);
      else if (i.hasOwnProperty("toString") && typeof i.toString == "function")
        r.push(i.toString());
      else
        for (var a in i)
          i[a] && r.push(a);
  }
  return r.join(" ");
}
var ok = "customizations";
var ik = { settings: {}, scopedSettings: {}, inCustomizerContext: false };
var go = yc.getValue(ok, { settings: {}, scopedSettings: {}, inCustomizerContext: false });
var bc = [];
var zt = function() {
  function e2() {
  }
  return e2.reset = function() {
    go.settings = {}, go.scopedSettings = {};
  }, e2.applySettings = function(t) {
    go.settings = _(_({}, go.settings), t), e2._raiseChange();
  }, e2.applyScopedSettings = function(t, r) {
    go.scopedSettings[t] = _(_({}, go.scopedSettings[t]), r), e2._raiseChange();
  }, e2.getSettings = function(t, r, n) {
    n === void 0 && (n = ik);
    for (var o = {}, i = r && n.scopedSettings[r] || {}, a = r && go.scopedSettings[r] || {}, s = 0, u = t; s < u.length; s++) {
      var l = u[s];
      o[l] = i[l] || n.settings[l] || a[l] || go.settings[l];
    }
    return o;
  }, e2.applyBatchedUpdates = function(t, r) {
    e2._suppressUpdates = true;
    try {
      t();
    } catch {
    }
    e2._suppressUpdates = false, r || e2._raiseChange();
  }, e2.observe = function(t) {
    bc.push(t);
  }, e2.unobserve = function(t) {
    bc = bc.filter(function(r) {
      return r !== t;
    });
  }, e2._raiseChange = function() {
    e2._suppressUpdates || bc.forEach(function(t) {
      return t();
    });
  }, e2;
}();
var Hs = N(L());
var RC = N(L());
var Xo = RC.createContext({ customizations: { inCustomizerContext: false, settings: {}, scopedSettings: {} } });
function AC(e2, t) {
  e2 === void 0 && (e2 = {});
  var r = MC(t) ? t : ak(t);
  return r(e2);
}
function PC(e2, t) {
  e2 === void 0 && (e2 = {});
  var r = MC(t) ? t : sk(t);
  return r(e2);
}
function MC(e2) {
  return typeof e2 == "function";
}
function ak(e2) {
  return function(t) {
    return e2 ? _(_({}, t), e2) : t;
  };
}
function sk(e2) {
  return e2 === void 0 && (e2 = {}), function(t) {
    var r = _({}, t);
    for (var n in e2)
      e2.hasOwnProperty(n) && (r[n] = _(_({}, t[n]), e2[n]));
    return r;
  };
}
function BC(e2, t) {
  var r = (t || {}).customizations, n = r === void 0 ? { settings: {}, scopedSettings: {} } : r;
  return { customizations: { settings: AC(n.settings, e2.settings), scopedSettings: PC(n.scopedSettings, e2.scopedSettings), inCustomizerContext: true } };
}
var NC = function(e2) {
  _e(t, e2);
  function t() {
    var r = e2 !== null && e2.apply(this, arguments) || this;
    return r._onCustomizationChange = function() {
      return r.forceUpdate();
    }, r;
  }
  return t.prototype.componentDidMount = function() {
    zt.observe(this._onCustomizationChange);
  }, t.prototype.componentWillUnmount = function() {
    zt.unobserve(this._onCustomizationChange);
  }, t.prototype.render = function() {
    var r = this, n = this.props.contextTransform;
    return Hs.createElement(Xo.Consumer, null, function(o) {
      var i = BC(r.props, o);
      return n && (i = n(i)), Hs.createElement(Xo.Provider, { value: i }, r.props.children);
    });
  }, t;
}(Hs.Component);
var ua = N(L());
function LC(e2, t) {
  for (var r in e2)
    e2.hasOwnProperty(r) && (t[r] = e2[r]);
  return t;
}
function wc(e2, t, r) {
  return function(o) {
    var i, a = (i = function(s) {
      _e(u, s);
      function u(l) {
        var c = s.call(this, l) || this;
        return c._styleCache = {}, c._onSettingChanged = c._onSettingChanged.bind(c), c;
      }
      return u.prototype.componentDidMount = function() {
        zt.observe(this._onSettingChanged);
      }, u.prototype.componentWillUnmount = function() {
        zt.unobserve(this._onSettingChanged);
      }, u.prototype.render = function() {
        var l = this;
        return ua.createElement(Xo.Consumer, null, function(c) {
          var d = zt.getSettings(t, e2, c.customizations), p = l.props;
          if (d.styles && typeof d.styles == "function" && (d.styles = d.styles(_(_({}, d), p))), r && d.styles) {
            if (l._styleCache.default !== d.styles || l._styleCache.component !== p.styles) {
              var v = Mt(d.styles, p.styles);
              l._styleCache.default = d.styles, l._styleCache.component = p.styles, l._styleCache.merged = v;
            }
            return ua.createElement(o, _({}, d, p, { styles: l._styleCache.merged }));
          }
          return ua.createElement(o, _({}, d, p));
        });
      }, u.prototype._onSettingChanged = function() {
        this.forceUpdate();
      }, u;
    }(ua.Component), i.displayName = "Customized" + e2, i);
    return LC(o, a);
  };
}
var la = N(L());
function OC(e2, t) {
  var r = uk(), n = la.useContext(Xo).customizations, o = n.inCustomizerContext;
  return la.useEffect(function() {
    return o || zt.observe(r), function() {
      o || zt.unobserve(r);
    };
  }, [o]), zt.getSettings(e2, t, n);
}
function uk() {
  var e2 = la.useState(0), t = e2[1];
  return function() {
    return t(function(r) {
      return ++r;
    });
  };
}
function zC(e2, t) {
  for (var r in t)
    t.hasOwnProperty(r) && (e2[r] = hC(e2, e2[r], t[r]));
}
var kc = "__currentId__";
var lk = "id__";
var Dc = q() || {};
Dc[kc] === void 0 && (Dc[kc] = 0);
var HC = false;
function Ft(e2) {
  if (!HC) {
    var t = je.getInstance();
    t && t.onReset && t.onReset(ck), HC = true;
  }
  var r = Dc[kc]++;
  return (e2 === void 0 ? lk : e2) + r;
}
function ck(e2) {
  e2 === void 0 && (e2 = 0), Dc[kc] = e2;
}
var $e = function() {
  for (var e2 = [], t = 0; t < arguments.length; t++)
    e2[t] = arguments[t];
  for (var r = {}, n = 0, o = e2; n < o.length; n++)
    for (var i = o[n], a = Array.isArray(i) ? i : Object.keys(i), s = 0, u = a; s < u.length; s++) {
      var l = u[s];
      r[l] = 1;
    }
  return r;
};
var fk = $e(["onCopy", "onCut", "onPaste", "onCompositionEnd", "onCompositionStart", "onCompositionUpdate", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onInput", "onSubmit", "onLoad", "onError", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyUp", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onClick", "onClickCapture", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onMouseUpCapture", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onPointerCancel", "onPointerDown", "onPointerEnter", "onPointerLeave", "onPointerMove", "onPointerOut", "onPointerOver", "onPointerUp", "onGotPointerCapture", "onLostPointerCapture"]);
var dk = $e(["accessKey", "children", "className", "contentEditable", "dir", "draggable", "hidden", "htmlFor", "id", "lang", "ref", "role", "style", "tabIndex", "title", "translate", "spellCheck", "name"]);
var Pe = $e(dk, fk);
var mB = $e(Pe, ["form"]);
var pk = $e(Pe, ["height", "loop", "muted", "preload", "src", "width"]);
var hB = $e(pk, ["poster"]);
var vB = $e(Pe, ["start"]);
var gB = $e(Pe, ["value"]);
var Tc = $e(Pe, ["download", "href", "hrefLang", "media", "rel", "target", "type"]);
var ln = $e(Pe, ["autoFocus", "disabled", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "type", "value"]);
var yB = $e(ln, ["accept", "alt", "autoCapitalize", "autoComplete", "checked", "dirname", "form", "height", "inputMode", "list", "max", "maxLength", "min", "minLength", "multiple", "pattern", "placeholder", "readOnly", "required", "src", "step", "size", "type", "value", "width"]);
var EB = $e(ln, ["autoCapitalize", "cols", "dirname", "form", "maxLength", "minLength", "placeholder", "readOnly", "required", "rows", "wrap"]);
var CB = $e(ln, ["form", "multiple", "required"]);
var SB = $e(Pe, ["selected", "value"]);
var _B = $e(Pe, ["cellPadding", "cellSpacing"]);
var FB = $e(Pe, ["rowSpan", "scope"]);
var xB = $e(Pe, ["colSpan", "headers", "rowSpan", "scope"]);
var bB = $e(Pe, ["span"]);
var wB = $e(Pe, ["span"]);
var kB = $e(Pe, ["acceptCharset", "action", "encType", "encType", "method", "noValidate", "target"]);
var DB = $e(Pe, ["allow", "allowFullScreen", "allowPaymentRequest", "allowTransparency", "csp", "height", "importance", "referrerPolicy", "sandbox", "src", "srcDoc", "width"]);
var VC = $e(Pe, ["alt", "crossOrigin", "height", "src", "srcSet", "useMap", "width"]);
var yo = Pe;
function ve(e2, t, r) {
  for (var n = Array.isArray(t), o = {}, i = Object.keys(e2), a = 0, s = i; a < s.length; a++) {
    var u = s[a], l = !n && t[u] || n && t.indexOf(u) >= 0 || u.indexOf("data-") === 0 || u.indexOf("aria-") === 0;
    l && (!r || r?.indexOf(u) === -1) && (o[u] = e2[u]);
  }
  return o;
}
function Eo(e2) {
  zC(e2, { componentDidMount: mk, componentDidUpdate: hk, componentWillUnmount: vk });
}
function mk() {
  Ic(this.props.componentRef, this);
}
function hk(e2) {
  e2.componentRef !== this.props.componentRef && (Ic(e2.componentRef, null), Ic(this.props.componentRef, this));
}
function vk() {
  Ic(this.props.componentRef, null);
}
function Ic(e2, t) {
  e2 && (typeof e2 == "object" ? e2.current = t : typeof e2 == "function" && e2(t));
}
var zr;
var gk = (zr = {}, zr[H.up] = 1, zr[H.down] = 1, zr[H.left] = 1, zr[H.right] = 1, zr[H.home] = 1, zr[H.end] = 1, zr[H.tab] = 1, zr[H.pageUp] = 1, zr[H.pageDown] = 1, zr);
function WC(e2) {
  return !!gk[e2];
}
var rt = "ms-Fabric--isFocusVisible";
var UC = "ms-Fabric--isFocusHidden";
function _n(e2, t) {
  var r = t ? q(t) : q();
  if (r) {
    var n = r.document.body.classList;
    n.add(e2 ? rt : UC), n.remove(e2 ? UC : rt);
  }
}
var YC = N(L());
var jC = /* @__PURE__ */ new WeakMap();
function $C(e2, t) {
  var r, n = jC.get(e2);
  return n ? r = n + t : r = 1, jC.set(e2, r), r;
}
function Tm(e2) {
  YC.useEffect(function() {
    var t, r = q(e2?.current);
    if (!(!r || ((t = r.FabricConfig) === null || t === void 0 ? void 0 : t.disableFocusRects) === true)) {
      var n = $C(r, 1);
      return n <= 1 && (r.addEventListener("mousedown", KC, true), r.addEventListener("pointerdown", GC, true), r.addEventListener("keydown", qC, true)), function() {
        var o;
        !r || ((o = r.FabricConfig) === null || o === void 0 ? void 0 : o.disableFocusRects) === true || (n = $C(r, -1), n === 0 && (r.removeEventListener("mousedown", KC, true), r.removeEventListener("pointerdown", GC, true), r.removeEventListener("keydown", qC, true)));
      };
    }
  }, [e2]);
}
var QC = function(e2) {
  return Tm(e2.rootRef), null;
};
function KC(e2) {
  _n(false, e2.target);
}
function GC(e2) {
  e2.pointerType !== "mouse" && _n(false, e2.target);
}
function qC(e2) {
  WC(e2.which) && _n(true, e2.target);
}
function XC(e2) {
  var t = null;
  try {
    var r = q();
    t = r ? r.localStorage.getItem(e2) : null;
  } catch {
  }
  return t;
}
var Zo;
var ZC = "language";
function JC(e2) {
  if (e2 === void 0 && (e2 = "sessionStorage"), Zo === void 0) {
    var t = Ge(), r = e2 === "localStorage" ? XC(ZC) : e2 === "sessionStorage" ? Ec(ZC) : void 0;
    r && (Zo = r), Zo === void 0 && t && (Zo = t.documentElement.getAttribute("lang")), Zo === void 0 && (Zo = "en");
  }
  return Zo;
}
function Im(e2) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  for (var n = 0, o = t; n < o.length; n++) {
    var i = o[n];
    e1(e2 || {}, i);
  }
  return e2;
}
function e1(e2, t, r) {
  r === void 0 && (r = []), r.push(t);
  for (var n in t)
    if (t.hasOwnProperty(n) && n !== "__proto__" && n !== "constructor" && n !== "prototype") {
      var o = t[n];
      if (typeof o == "object" && o !== null && !Array.isArray(o)) {
        var i = r.indexOf(o) > -1;
        e2[n] = i ? o : e1(e2[n] || {}, o, r);
      } else
        e2[n] = o;
    }
  return r.pop(), e2;
}
var Rm = function() {
  return !window || !window.navigator || !window.navigator.userAgent ? false : /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
};
var Am;
function Pm(e2) {
  var t;
  if (typeof Am > "u" || e2) {
    var r = q(), n = (t = r?.navigator) === null || t === void 0 ? void 0 : t.userAgent;
    Am = !!n && n.indexOf("Macintosh") !== -1;
  }
  return !!Am;
}
var Co = N(L());
var Ek = ["theme", "styles"];
function xt(e2, t, r, n, o) {
  n = n || { scope: "", fields: void 0 };
  var i = n.scope, a = n.fields, s = a === void 0 ? Ek : a, u = Co.forwardRef(function(c, d) {
    var p = Co.useRef(), v = OC(s, i), g = v.styles, y = v.dir, f = on(v, ["styles", "dir"]), m = r ? r(c) : void 0, h = p.current && p.current.__cachedInputs__ || [];
    if (!p.current || g !== h[1] || c.styles !== h[2]) {
      var E = function(C) {
        return oa(C, t, g, c.styles);
      };
      E.__cachedInputs__ = [t, g, c.styles], E.__noStyleOverride__ = !g && !c.styles, p.current = E;
    }
    return Co.createElement(e2, _({ ref: d }, f, m, c, { styles: p.current }));
  });
  u.displayName = "Styled" + (e2.displayName || e2.name);
  var l = o ? Co.memo(u) : u;
  return u.displayName && (l.displayName = u.displayName), l;
}
function Rc(e2, t) {
  for (var r = _({}, t), n = 0, o = Object.keys(e2); n < o.length; n++) {
    var i = o[n];
    r[i] === void 0 && (r[i] = e2[i]);
  }
  return r;
}
var Ck = function(e2) {
  return function(t) {
    for (var r = 0, n = e2.refs; r < n.length; r++) {
      var o = n[r];
      typeof o == "function" ? o(t) : o && (o.current = t);
    }
  };
};
var Vs = function(e2) {
  var t = { refs: [] };
  return function() {
    for (var r = [], n = 0; n < arguments.length; n++)
      r[n] = arguments[n];
    return (!t.resolver || !gC(t.refs, r)) && (t.resolver = Ck(t)), t.refs = r, t.resolver;
  };
};
nn("@fluentui/utilities", "8.3.6");
var Sk = "icons";
var dr = yc.getValue(Sk, { __options: { disableWarnings: false, warnOnMissingIcons: true }, __remapped: {} });
var Mm = je.getInstance();
Mm && Mm.onReset && Mm.onReset(function() {
  for (var e2 in dr)
    dr.hasOwnProperty(e2) && !!dr[e2].subset && (dr[e2].subset.className = void 0);
});
var Ac = function(e2) {
  return e2.toLowerCase();
};
function Y(e2, t) {
  var r = _(_({}, e2), { isRegistered: false, className: void 0 }), n = e2.icons;
  t = t ? _(_({}, dr.__options), t) : dr.__options;
  for (var o in n)
    if (n.hasOwnProperty(o)) {
      var i = n[o], a = Ac(o);
      dr[a] ? _k(o) : dr[a] = { code: i, subset: r };
    }
}
function Fn(e2, t) {
  dr.__remapped[Ac(e2)] = Ac(t);
}
function Us(e2) {
  var t = void 0, r = dr.__options;
  if (e2 = e2 ? Ac(e2) : "", e2 = dr.__remapped[e2] || e2, e2)
    if (t = dr[e2], t) {
      var n = t.subset;
      n && n.fontFace && (n.isRegistered || (ia(n.fontFace), n.isRegistered = true), n.className || (n.className = _t(n.style, { fontFamily: n.fontFace.fontFamily, fontWeight: n.fontFace.fontWeight || "normal", fontStyle: n.fontFace.fontStyle || "normal" })));
    } else
      !r.disableWarnings && r.warnOnMissingIcons && vm('The icon "' + e2 + '" was used but not registered. See https://github.com/microsoft/fluentui/wiki/Using-icons for more information.');
  return t;
}
var Ws = [];
var Bm = void 0;
function _k(e2) {
  var t = dr.__options, r = 2e3, n = 10;
  t.disableWarnings || (Ws.push(e2), Bm === void 0 && (Bm = setTimeout(function() {
    vm(`Some icons were re-registered. Applications should only call registerIcons for any given icon once. Redefining what an icon is may have unintended consequences. Duplicates include: 
` + Ws.slice(0, n).join(", ") + (Ws.length > n ? " (+ " + (Ws.length - n) + " more)" : "")), Bm = void 0, Ws = [];
  }, r)));
}
var be = "cubic-bezier(.1,.9,.2,1)";
var br = "cubic-bezier(.1,.25,.75,.9)";
var Pc = "0.167s";
var t1 = "0.267s";
var Ee = "0.367s";
var r1 = "0.467s";
var ut = Bt({ from: { opacity: 0 }, to: { opacity: 1 } });
var lt = Bt({ from: { opacity: 1 }, to: { opacity: 0, visibility: "hidden" } });
var Fk = So(-10);
var xk = So(-20);
var bk = So(-40);
var wk = So(-400);
var kk = So(10);
var Dk = So(20);
var Tk = So(40);
var Ik = So(400);
var Rk = Mc(10);
var Ak = Mc(20);
var Pk = Mc(-10);
var Mk = Mc(-20);
var Bk = _o(10);
var Nk = _o(20);
var Lk = _o(40);
var Ok = _o(400);
var zk = _o(-10);
var Hk = _o(-20);
var Vk = _o(-40);
var Wk = _o(-400);
var Uk = Bc(-10);
var jk = Bc(-20);
var $k = Bc(10);
var Kk = Bc(20);
var Gk = Bt({ from: { transform: "scale3d(.98,.98,1)" }, to: { transform: "scale3d(1,1,1)" } });
var qk = Bt({ from: { transform: "scale3d(1,1,1)" }, to: { transform: "scale3d(.98,.98,1)" } });
var Yk = Bt({ from: { transform: "scale3d(1.03,1.03,1)" }, to: { transform: "scale3d(1,1,1)" } });
var Qk = Bt({ from: { transform: "scale3d(1,1,1)" }, to: { transform: "scale3d(1.03,1.03,1)" } });
var Xk = Bt({ from: { transform: "rotateZ(0deg)" }, to: { transform: "rotateZ(90deg)" } });
var Zk = Bt({ from: { transform: "rotateZ(0deg)" }, to: { transform: "rotateZ(-90deg)" } });
var Nm = { slideRightIn10: Q(ut + "," + Fk, Ee, be), slideRightIn20: Q(ut + "," + xk, Ee, be), slideRightIn40: Q(ut + "," + bk, Ee, be), slideRightIn400: Q(ut + "," + wk, Ee, be), slideLeftIn10: Q(ut + "," + kk, Ee, be), slideLeftIn20: Q(ut + "," + Dk, Ee, be), slideLeftIn40: Q(ut + "," + Tk, Ee, be), slideLeftIn400: Q(ut + "," + Ik, Ee, be), slideUpIn10: Q(ut + "," + Rk, Ee, be), slideUpIn20: Q(ut + "," + Ak, Ee, be), slideDownIn10: Q(ut + "," + Pk, Ee, be), slideDownIn20: Q(ut + "," + Mk, Ee, be), slideRightOut10: Q(lt + "," + Bk, Ee, be), slideRightOut20: Q(lt + "," + Nk, Ee, be), slideRightOut40: Q(lt + "," + Lk, Ee, be), slideRightOut400: Q(lt + "," + Ok, Ee, be), slideLeftOut10: Q(lt + "," + zk, Ee, be), slideLeftOut20: Q(lt + "," + Hk, Ee, be), slideLeftOut40: Q(lt + "," + Vk, Ee, be), slideLeftOut400: Q(lt + "," + Wk, Ee, be), slideUpOut10: Q(lt + "," + Uk, Ee, be), slideUpOut20: Q(lt + "," + jk, Ee, be), slideDownOut10: Q(lt + "," + $k, Ee, be), slideDownOut20: Q(lt + "," + Kk, Ee, be), scaleUpIn100: Q(ut + "," + Gk, Ee, be), scaleDownIn100: Q(ut + "," + Yk, Ee, be), scaleUpOut103: Q(lt + "," + Qk, Pc, br), scaleDownOut98: Q(lt + "," + qk, Pc, br), fadeIn100: Q(ut, Pc, br), fadeIn200: Q(ut, t1, br), fadeIn400: Q(ut, Ee, br), fadeIn500: Q(ut, r1, br), fadeOut100: Q(lt, Pc, br), fadeOut200: Q(lt, t1, br), fadeOut400: Q(lt, Ee, br), fadeOut500: Q(lt, r1, br), rotate90deg: Q(Xk, "0.1s", br), rotateN90deg: Q(Zk, "0.1s", br) };
function Q(e2, t, r) {
  return { animationName: e2, animationDuration: t, animationTimingFunction: r, animationFillMode: "both" };
}
function So(e2) {
  return Bt({ from: { transform: "translate3d(" + e2 + "px,0,0)", pointerEvents: "none" }, to: { transform: "translate3d(0,0,0)", pointerEvents: "auto" } });
}
function Mc(e2) {
  return Bt({ from: { transform: "translate3d(0," + e2 + "px,0)", pointerEvents: "none" }, to: { transform: "translate3d(0,0,0)", pointerEvents: "auto" } });
}
function _o(e2) {
  return Bt({ from: { transform: "translate3d(0,0,0)" }, to: { transform: "translate3d(" + e2 + "px,0,0)" } });
}
function Bc(e2) {
  return Bt({ from: { transform: "translate3d(0,0,0)" }, to: { transform: "translate3d(0," + e2 + "px,0)" } });
}
var Nc = { themeDarker: "#004578", themeDark: "#005a9e", themeDarkAlt: "#106ebe", themePrimary: "#0078d4", themeSecondary: "#2b88d8", themeTertiary: "#71afe5", themeLight: "#c7e0f4", themeLighter: "#deecf9", themeLighterAlt: "#eff6fc", black: "#000000", blackTranslucent40: "rgba(0,0,0,.4)", neutralDark: "#201f1e", neutralPrimary: "#323130", neutralPrimaryAlt: "#3b3a39", neutralSecondary: "#605e5c", neutralSecondaryAlt: "#8a8886", neutralTertiary: "#a19f9d", neutralTertiaryAlt: "#c8c6c4", neutralQuaternary: "#d2d0ce", neutralQuaternaryAlt: "#e1dfdd", neutralLight: "#edebe9", neutralLighter: "#f3f2f1", neutralLighterAlt: "#faf9f8", accent: "#0078d4", white: "#ffffff", whiteTranslucent40: "rgba(255,255,255,.4)", yellowDark: "#d29200", yellow: "#ffb900", yellowLight: "#fff100", orange: "#d83b01", orangeLight: "#ea4300", orangeLighter: "#ff8c00", redDark: "#a4262c", red: "#e81123", magentaDark: "#5c005c", magenta: "#b4009e", magentaLight: "#e3008c", purpleDark: "#32145a", purple: "#5c2d91", purpleLight: "#b4a0ff", blueDark: "#002050", blueMid: "#00188f", blue: "#0078d4", blueLight: "#00bcf2", tealDark: "#004b50", teal: "#008272", tealLight: "#00b294", greenDark: "#004b1c", green: "#107c10", greenLight: "#bad80a" };
var Jo;
(function(e2) {
  e2.depth0 = "0 0 0 0 transparent", e2.depth4 = "0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)", e2.depth8 = "0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)", e2.depth16 = "0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)", e2.depth64 = "0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)";
})(Jo || (Jo = {}));
var Lc = { elevation4: Jo.depth4, elevation8: Jo.depth8, elevation16: Jo.depth16, elevation64: Jo.depth64, roundedCorner2: "2px", roundedCorner4: "4px", roundedCorner6: "6px" };
var we;
(function(e2) {
  e2.Arabic = "Segoe UI Web (Arabic)", e2.Cyrillic = "Segoe UI Web (Cyrillic)", e2.EastEuropean = "Segoe UI Web (East European)", e2.Greek = "Segoe UI Web (Greek)", e2.Hebrew = "Segoe UI Web (Hebrew)", e2.Thai = "Leelawadee UI Web", e2.Vietnamese = "Segoe UI Web (Vietnamese)", e2.WestEuropean = "Segoe UI Web (West European)", e2.Selawik = "Selawik Web", e2.Armenian = "Segoe UI Web (Armenian)", e2.Georgian = "Segoe UI Web (Georgian)";
})(we || (we = {}));
var se;
(function(e2) {
  e2.Arabic = "'" + we.Arabic + "'", e2.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun", e2.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu", e2.Cyrillic = "'" + we.Cyrillic + "'", e2.EastEuropean = "'" + we.EastEuropean + "'", e2.Greek = "'" + we.Greek + "'", e2.Hebrew = "'" + we.Hebrew + "'", e2.Hindi = "'Nirmala UI'", e2.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka", e2.Korean = "'Malgun Gothic', Gulim", e2.Selawik = "'" + we.Selawik + "'", e2.Thai = "'Leelawadee UI Web', 'Kmer UI'", e2.Vietnamese = "'" + we.Vietnamese + "'", e2.WestEuropean = "'" + we.WestEuropean + "'", e2.Armenian = "'" + we.Armenian + "'", e2.Georgian = "'" + we.Georgian + "'";
})(se || (se = {}));
var qe;
(function(e2) {
  e2.size10 = "10px", e2.size12 = "12px", e2.size14 = "14px", e2.size16 = "16px", e2.size18 = "18px", e2.size20 = "20px", e2.size24 = "24px", e2.size28 = "28px", e2.size32 = "32px", e2.size42 = "42px", e2.size68 = "68px", e2.mini = "10px", e2.xSmall = "10px", e2.small = "12px", e2.smallPlus = "12px", e2.medium = "14px", e2.mediumPlus = "16px", e2.icon = "16px", e2.large = "18px", e2.xLarge = "20px", e2.xLargePlus = "24px", e2.xxLarge = "28px", e2.xxLargePlus = "32px", e2.superLarge = "42px", e2.mega = "68px";
})(qe || (qe = {}));
var le;
(function(e2) {
  e2.light = 100, e2.semilight = 300, e2.regular = 400, e2.semibold = 600, e2.bold = 700;
})(le || (le = {}));
var Hr;
(function(e2) {
  e2.xSmall = "10px", e2.small = "12px", e2.medium = "16px", e2.large = "20px";
})(Hr || (Hr = {}));
var Jk = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
var eD = "'Segoe UI', '" + we.WestEuropean + "'";
var Lm = { ar: se.Arabic, bg: se.Cyrillic, cs: se.EastEuropean, el: se.Greek, et: se.EastEuropean, he: se.Hebrew, hi: se.Hindi, hr: se.EastEuropean, hu: se.EastEuropean, ja: se.Japanese, kk: se.EastEuropean, ko: se.Korean, lt: se.EastEuropean, lv: se.EastEuropean, pl: se.EastEuropean, ru: se.Cyrillic, sk: se.EastEuropean, "sr-latn": se.EastEuropean, th: se.Thai, tr: se.EastEuropean, uk: se.Cyrillic, vi: se.Vietnamese, "zh-hans": se.ChineseSimplified, "zh-hant": se.ChineseTraditional, hy: se.Armenian, ka: se.Georgian };
function tD(e2) {
  return e2 + ", " + Jk;
}
function rD(e2) {
  for (var t in Lm)
    if (Lm.hasOwnProperty(t) && e2 && t.indexOf(e2) === 0)
      return Lm[t];
  return eD;
}
function pr(e2, t, r) {
  return { fontFamily: r, MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontSize: e2, fontWeight: t };
}
function Oc(e2) {
  var t = rD(e2), r = tD(t), n = { tiny: pr(qe.mini, le.regular, r), xSmall: pr(qe.xSmall, le.regular, r), small: pr(qe.small, le.regular, r), smallPlus: pr(qe.smallPlus, le.regular, r), medium: pr(qe.medium, le.regular, r), mediumPlus: pr(qe.mediumPlus, le.regular, r), large: pr(qe.large, le.regular, r), xLarge: pr(qe.xLarge, le.semibold, r), xLargePlus: pr(qe.xLargePlus, le.semibold, r), xxLarge: pr(qe.xxLarge, le.semibold, r), xxLargePlus: pr(qe.xxLargePlus, le.semibold, r), superLarge: pr(qe.superLarge, le.semibold, r), mega: pr(qe.mega, le.semibold, r) };
  return n;
}
var nD = "https://static2.sharepointonline.com/files/fabric/assets";
var Om = Oc(JC());
function ei(e2, t, r, n) {
  e2 = "'" + e2 + "'";
  var o = n !== void 0 ? "local('" + n + "')," : "";
  ia({ fontFamily: e2, src: o + ("url('" + t + ".woff2') format('woff2'),") + ("url('" + t + ".woff') format('woff')"), fontWeight: r, fontStyle: "normal", fontDisplay: "swap" });
}
function Vr(e2, t, r, n, o) {
  n === void 0 && (n = "segoeui");
  var i = e2 + "/" + r + "/" + n;
  ei(t, i + "-light", le.light, o && o + " Light"), ei(t, i + "-semilight", le.semilight, o && o + " SemiLight"), ei(t, i + "-regular", le.regular, o), ei(t, i + "-semibold", le.semibold, o && o + " SemiBold"), ei(t, i + "-bold", le.bold, o && o + " Bold");
}
function n1(e2) {
  if (e2) {
    var t = e2 + "/fonts";
    Vr(t, we.Thai, "leelawadeeui-thai", "leelawadeeui"), Vr(t, we.Arabic, "segoeui-arabic"), Vr(t, we.Cyrillic, "segoeui-cyrillic"), Vr(t, we.EastEuropean, "segoeui-easteuropean"), Vr(t, we.Greek, "segoeui-greek"), Vr(t, we.Hebrew, "segoeui-hebrew"), Vr(t, we.Vietnamese, "segoeui-vietnamese"), Vr(t, we.WestEuropean, "segoeui-westeuropean", "segoeui", "Segoe UI"), Vr(t, se.Selawik, "selawik", "selawik"), Vr(t, we.Armenian, "segoeui-armenian"), Vr(t, we.Georgian, "segoeui-georgian"), ei("Leelawadee UI Web", t + "/leelawadeeui-thai/leelawadeeui-semilight", le.light), ei("Leelawadee UI Web", t + "/leelawadeeui-thai/leelawadeeui-bold", le.semibold);
  }
}
function oD() {
  var e2, t, r = (e2 = q()) === null || e2 === void 0 ? void 0 : e2.FabricConfig;
  return (t = r?.fontBaseUrl) !== null && t !== void 0 ? t : nD;
}
n1(oD());
var $ = "@media screen and (-ms-high-contrast: active), (forced-colors: active)";
var iD = 480;
var aD = 640;
var sD = 1024;
var uD = 1366;
var lD = 1920;
var t3 = iD - 1;
var zc = aD - 1;
var r3 = sD - 1;
var n3 = uD - 1;
var o3 = lD - 1;
function Hc(e2, t) {
  var r = typeof e2 == "number" ? " and (min-width: " + e2 + "px)" : "", n = typeof t == "number" ? " and (max-width: " + t + "px)" : "";
  return "@media only screen" + r + n;
}
function Wr() {
  return { forcedColorAdjust: "none", MsHighContrastAdjust: "none" };
}
var Fo;
(function(e2) {
  e2.Nav = 1, e2.ScrollablePane = 1, e2.FocusStyle = 1, e2.Coachmark = 1e3, e2.Layer = 1e6, e2.KeytipLayer = 1000001;
})(Fo || (Fo = {}));
function xn(e2, t, r, n, o, i, a) {
  return typeof t == "number" || !t ? o1(e2, { inset: t, position: r, highContrastStyle: n, borderColor: o, outlineColor: i, isFocusedOnly: a }) : o1(e2, t);
}
function o1(e2, t) {
  var r, n;
  t === void 0 && (t = {});
  var o = t.inset, i = o === void 0 ? 0 : o, a = t.width, s = a === void 0 ? 1 : a, u = t.position, l = u === void 0 ? "relative" : u, c = t.highContrastStyle, d = t.borderColor, p = d === void 0 ? e2.palette.white : d, v = t.outlineColor, g = v === void 0 ? e2.palette.neutralSecondary : v, y = t.isFocusedOnly, f = y === void 0 ? true : y;
  return { outline: "transparent", position: l, selectors: (r = { "::-moz-focus-inner": { border: "0" } }, r["." + rt + " &" + (f ? ":focus" : "") + ":after"] = { content: '""', position: "absolute", left: i + 1, top: i + 1, bottom: i + 1, right: i + 1, border: s + "px solid " + p, outline: s + "px solid " + g, zIndex: Fo.FocusStyle, selectors: (n = {}, n[$] = c, n) }, r) };
}
function i1() {
  return { selectors: { "&::-moz-focus-inner": { border: 0 }, "&": { outline: "transparent" } } };
}
var js = { position: "absolute", width: 1, height: 1, margin: -1, padding: 0, border: 0, overflow: "hidden", whiteSpace: "nowrap" };
var cD = ee(function(e2, t) {
  var r = je.getInstance();
  return t ? Object.keys(e2).reduce(function(n, o) {
    return n[o] = r.getClassName(e2[o]), n;
  }, {}) : e2;
});
function Ht(e2, t, r) {
  return cD(e2, r !== void 0 ? r : t.disableGlobalClassNames);
}
var ca = function() {
  return ca = Object.assign || function(e2) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e2[o] = t[o]);
    }
    return e2;
  }, ca.apply(this, arguments);
};
var $s = window;
var a1 = $s && $s.CSPSettings && $s.CSPSettings.nonce;
var mr = fD();
function fD() {
  var e2 = $s.__themeState__ || { theme: void 0, lastStyleElement: void 0, registeredStyles: [] };
  return e2.runState || (e2 = ca(ca({}, e2), { perf: { count: 0, duration: 0 }, runState: { flushTimer: 0, mode: 0, buffer: [] } })), e2.registeredThemableStyles || (e2 = ca(ca({}, e2), { registeredThemableStyles: [] })), $s.__themeState__ = e2, e2;
}
function dD(e2, t) {
  mr.loadStyles ? mr.loadStyles(l1(e2).styleString, e2) : hD(e2);
}
function u1(e2) {
  mr.theme = e2, mD();
}
function pD(e2) {
  e2 === void 0 && (e2 = 3), (e2 === 3 || e2 === 2) && (s1(mr.registeredStyles), mr.registeredStyles = []), (e2 === 3 || e2 === 1) && (s1(mr.registeredThemableStyles), mr.registeredThemableStyles = []);
}
function s1(e2) {
  e2.forEach(function(t) {
    var r = t && t.styleElement;
    r && r.parentElement && r.parentElement.removeChild(r);
  });
}
function mD() {
  if (mr.theme) {
    for (var e2 = [], t = 0, r = mr.registeredThemableStyles; t < r.length; t++) {
      var n = r[t];
      e2.push(n.themableStyle);
    }
    e2.length > 0 && (pD(1), dD([].concat.apply([], e2)));
  }
}
function l1(e2) {
  var t = mr.theme, r = false, n = (e2 || []).map(function(o) {
    var i = o.theme;
    if (i) {
      r = true;
      var a = t ? t[i] : void 0, s = o.defaultValue || "inherit";
      return t && !a && console && !(i in t) && typeof DEBUG < "u" && DEBUG && console.warn('Theming value not provided for "' + i + '". Falling back to "' + s + '".'), a || s;
    } else
      return o.rawString;
  });
  return { styleString: n.join(""), themable: r };
}
function hD(e2) {
  if (!(typeof document > "u")) {
    var t = document.getElementsByTagName("head")[0], r = document.createElement("style"), n = l1(e2), o = n.styleString, i = n.themable;
    r.setAttribute("data-load-themed-styles", "true"), a1 && r.setAttribute("nonce", a1), r.appendChild(document.createTextNode(o)), mr.perf.count++, t.appendChild(r);
    var a = document.createEvent("HTMLEvents");
    a.initEvent("styleinsert", true, false), a.args = { newStyle: r }, document.dispatchEvent(a);
    var s = { styleElement: r, themableStyle: e2 };
    i ? mr.registeredThemableStyles.push(s) : mr.registeredStyles.push(s);
  }
}
function c1(e2, t, r, n, o) {
  o === void 0 && (o = false);
  var i = _({ primaryButtonBorder: "transparent", errorText: n ? "#F1707B" : "#a4262c", messageText: n ? "#F3F2F1" : "#323130", messageLink: n ? "#6CB8F6" : "#005A9E", messageLinkHovered: n ? "#82C7FF" : "#004578", infoIcon: n ? "#C8C6C4" : "#605e5c", errorIcon: n ? "#F1707B" : "#A80000", blockingIcon: n ? "#442726" : "#FDE7E9", warningIcon: n ? "#C8C6C4" : "#797775", severeWarningIcon: n ? "#FCE100" : "#D83B01", successIcon: n ? "#92C353" : "#107C10", infoBackground: n ? "#323130" : "#f3f2f1", errorBackground: n ? "#442726" : "#FDE7E9", blockingBackground: n ? "#442726" : "#FDE7E9", warningBackground: n ? "#433519" : "#FFF4CE", severeWarningBackground: n ? "#4F2A0F" : "#FED9CC", successBackground: n ? "#393D1B" : "#DFF6DD", warningHighlight: n ? "#fff100" : "#ffb900", successText: n ? "#92c353" : "#107C10" }, r), a = zm(e2, t, i, n);
  return vD(a, o);
}
function zm(e2, t, r, n, o) {
  o === void 0 && (o = false);
  var i = {}, a = e2 || {}, s = a.white, u = a.black, l = a.themePrimary, c = a.themeDark, d = a.themeDarker, p = a.themeDarkAlt, v = a.themeLighter, g = a.neutralLight, y = a.neutralLighter, f = a.neutralDark, m = a.neutralQuaternary, h = a.neutralQuaternaryAlt, E = a.neutralPrimary, C = a.neutralSecondary, x = a.neutralSecondaryAlt, S = a.neutralTertiary, F = a.neutralTertiaryAlt, w = a.neutralLighterAlt, k = a.accent;
  return s && (i.bodyBackground = s, i.bodyFrameBackground = s, i.accentButtonText = s, i.buttonBackground = s, i.primaryButtonText = s, i.primaryButtonTextHovered = s, i.primaryButtonTextPressed = s, i.inputBackground = s, i.inputForegroundChecked = s, i.listBackground = s, i.menuBackground = s, i.cardStandoutBackground = s), u && (i.bodyTextChecked = u, i.buttonTextCheckedHovered = u), l && (i.link = l, i.primaryButtonBackground = l, i.inputBackgroundChecked = l, i.inputIcon = l, i.inputFocusBorderAlt = l, i.menuIcon = l, i.menuHeader = l, i.accentButtonBackground = l), c && (i.primaryButtonBackgroundPressed = c, i.inputBackgroundCheckedHovered = c, i.inputIconHovered = c), d && (i.linkHovered = d), p && (i.primaryButtonBackgroundHovered = p), v && (i.inputPlaceholderBackgroundChecked = v), g && (i.bodyBackgroundChecked = g, i.bodyFrameDivider = g, i.bodyDivider = g, i.variantBorder = g, i.buttonBackgroundCheckedHovered = g, i.buttonBackgroundPressed = g, i.listItemBackgroundChecked = g, i.listHeaderBackgroundPressed = g, i.menuItemBackgroundPressed = g, i.menuItemBackgroundChecked = g), y && (i.bodyBackgroundHovered = y, i.buttonBackgroundHovered = y, i.buttonBackgroundDisabled = y, i.buttonBorderDisabled = y, i.primaryButtonBackgroundDisabled = y, i.disabledBackground = y, i.listItemBackgroundHovered = y, i.listHeaderBackgroundHovered = y, i.menuItemBackgroundHovered = y), m && (i.primaryButtonTextDisabled = m, i.disabledSubtext = m), h && (i.listItemBackgroundCheckedHovered = h), S && (i.disabledBodyText = S, i.variantBorderHovered = r?.variantBorderHovered || S, i.buttonTextDisabled = S, i.inputIconDisabled = S, i.disabledText = S), E && (i.bodyText = E, i.actionLink = E, i.buttonText = E, i.inputBorderHovered = E, i.inputText = E, i.listText = E, i.menuItemText = E), w && (i.bodyStandoutBackground = w, i.defaultStateBackground = w), f && (i.actionLinkHovered = f, i.buttonTextHovered = f, i.buttonTextChecked = f, i.buttonTextPressed = f, i.inputTextHovered = f, i.menuItemTextHovered = f), C && (i.bodySubtext = C, i.focusBorder = C, i.inputBorder = C, i.smallInputBorder = C, i.inputPlaceholderText = C), x && (i.buttonBorder = x), F && (i.disabledBodySubtext = F, i.disabledBorder = F, i.buttonBackgroundChecked = F, i.menuDivider = F), k && (i.accentButtonBackground = k), t?.elevation4 && (i.cardShadow = t.elevation4), !n && t?.elevation8 ? i.cardShadowHovered = t.elevation8 : i.variantBorderHovered && (i.cardShadowHovered = "0 0 1px " + i.variantBorderHovered), i = _(_({}, i), r), i;
}
function vD(e2, t) {
  var r = "";
  return t === true && (r = " /* @deprecated */"), e2.listTextColor = e2.listText + r, e2.menuItemBackgroundChecked += r, e2.warningHighlight += r, e2.warningText = e2.messageText + r, e2.successText += r, e2;
}
function f1(e2, t) {
  var r, n, o;
  t === void 0 && (t = {});
  var i = Im({}, e2, t, { semanticColors: zm(t.palette, t.effects, t.semanticColors, t.isInverted === void 0 ? e2.isInverted : t.isInverted) });
  if (((r = t.palette) === null || r === void 0 ? void 0 : r.themePrimary) && !(!((n = t.palette) === null || n === void 0) && n.accent) && (i.palette.accent = t.palette.themePrimary), t.defaultFontStyle)
    for (var a = 0, s = Object.keys(i.fonts); a < s.length; a++) {
      var u = s[a];
      i.fonts[u] = Im(i.fonts[u], t.defaultFontStyle, (o = t?.fonts) === null || o === void 0 ? void 0 : o[u]);
    }
  return i;
}
var Hm = { s2: "4px", s1: "8px", m: "16px", l1: "20px", l2: "32px" };
function bn(e2, t) {
  e2 === void 0 && (e2 = {}), t === void 0 && (t = false);
  var r = !!e2.isInverted, n = { palette: Nc, effects: Lc, fonts: Om, spacing: Hm, isInverted: r, disableGlobalClassNames: false, semanticColors: c1(Nc, Lc, void 0, r, t), rtl: void 0 };
  return f1(n, e2);
}
var wr = bn({});
var gD = [];
var Vc = "theme";
function Vm() {
  var e2, t, r, n = q();
  !((t = n?.FabricConfig) === null || t === void 0) && t.legacyTheme ? d1(n.FabricConfig.legacyTheme) : zt.getSettings([Vc]).theme || (!((r = n?.FabricConfig) === null || r === void 0) && r.theme && (wr = bn(n.FabricConfig.theme)), zt.applySettings((e2 = {}, e2[Vc] = wr, e2)));
}
Vm();
function Wm(e2) {
  return e2 === void 0 && (e2 = false), e2 === true && (wr = bn({}, e2)), wr;
}
function d1(e2, t) {
  var r;
  return t === void 0 && (t = false), wr = bn(e2, t), u1(_(_(_(_({}, wr.palette), wr.semanticColors), wr.effects), yD(wr))), zt.applySettings((r = {}, r[Vc] = wr, r)), gD.forEach(function(n) {
    try {
      n(wr);
    } catch {
    }
  }), wr;
}
function yD(e2) {
  for (var t = {}, r = 0, n = Object.keys(e2.fonts); r < n.length; r++)
    for (var o = n[r], i = e2.fonts[o], a = 0, s = Object.keys(i); a < s.length; a++) {
      var u = s[a], l = o + u.charAt(0).toUpperCase() + u.slice(1), c = i[u];
      u === "fontSize" && typeof c == "number" && (c = c + "px"), t[l] = c;
    }
  return t;
}
var xo = pm(Nm);
nn("@fluentui/style-utilities", "8.4.2");
Vm();
var m1 = N(p1());
var ke = Uc.memo((e2) => {
  let { iconName: t, ...r } = e2, n = Us(t);
  if (!n)
    throw new Error(`No icon named ${t}`);
  return Uc.createElement("i", { ...r, "data-icon-name": t, className: (0, m1.default)(n.subset && n.subset.className, r.className) }, n.code);
});
var h1 = 'font-family: "SegoeUI-SemiBold-final", "Segoe UI Semibold", "SegoeUI-Regular-final", "Segoe UI", "Segoe UI Web (West European)", Segoe, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Tahoma, Helvetica, Arial, sans-serif;';
var Um = `
  font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
`;
var Ks = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
var ge = N(L());
var ti = N(L());
var Gs;
(function(e2) {
  e2[e2.default = 0] = "default", e2[e2.image = 1] = "image", e2[e2.Default = 1e5] = "Default", e2[e2.Image = 100001] = "Image";
})(Gs || (Gs = {}));
var Ze = N(L());
var Vt;
(function(e2) {
  e2[e2.center = 0] = "center", e2[e2.contain = 1] = "contain", e2[e2.cover = 2] = "cover", e2[e2.none = 3] = "none", e2[e2.centerCover = 4] = "centerCover", e2[e2.centerContain = 5] = "centerContain";
})(Vt || (Vt = {}));
var fa;
(function(e2) {
  e2[e2.landscape = 0] = "landscape", e2[e2.portrait = 1] = "portrait";
})(fa || (fa = {}));
var ht;
(function(e2) {
  e2[e2.notLoaded = 0] = "notLoaded", e2[e2.loaded = 1] = "loaded", e2[e2.error = 2] = "error", e2[e2.errorLoaded = 3] = "errorLoaded";
})(ht || (ht = {}));
var g1 = N(L());
var v1 = N(L());
function da(e2) {
  var t = v1.useRef();
  return t.current === void 0 && (t.current = { value: typeof e2 == "function" ? e2() : e2 }), t.current.value;
}
function wn() {
  var e2 = da(function() {
    return new ho();
  });
  return g1.useEffect(function() {
    return function() {
      return e2.dispose();
    };
  }, [e2]), e2;
}
var y1 = N(L());
function jm(e2, t) {
  var r = y1.useRef(t);
  return r.current || (r.current = Ft(e2)), r.current;
}
var E1 = N(L());
function cn() {
  for (var e2 = [], t = 0; t < arguments.length; t++)
    e2[t] = arguments[t];
  var r = E1.useCallback(function(n) {
    r.current = n;
    for (var o = 0, i = e2; o < i.length; o++) {
      var a = i[o];
      typeof a == "function" ? a(n) : a && (a.current = n);
    }
  }, Pt(e2));
  return r;
}
var jc = N(L());
function bo(e2, t, r, n) {
  var o = jc.useRef(r);
  o.current = r, jc.useEffect(function() {
    var i = e2 && "current" in e2 ? e2.current : e2;
    if (!!i) {
      var a = vo(i, t, function(s) {
        return o.current(s);
      }, n);
      return a;
    }
  }, [e2, t, n]);
}
var $c = N(L());
function Kc(e2) {
  var t = (0, $c.useRef)();
  return (0, $c.useEffect)(function() {
    t.current = e2;
  }), t.current;
}
var $m = N(L());
var pa = N(L());
var C1 = pa.createContext({ window: typeof window == "object" ? window : void 0 });
var ma = function() {
  return pa.useContext(C1).window;
};
var S1 = function() {
  var e2;
  return (e2 = pa.useContext(C1).window) === null || e2 === void 0 ? void 0 : e2.document;
};
function Gc(e2, t) {
  var r = $m.useRef(), n = $m.useRef(null), o = ma();
  if (!e2 || e2 !== r.current || typeof e2 == "string") {
    var i = t?.current;
    if (e2)
      if (typeof e2 == "string") {
        var a = Ge(i);
        n.current = a ? a.querySelector(e2) : null;
      } else
        "stopPropagation" in e2 || "getBoundingClientRect" in e2 ? n.current = e2 : "current" in e2 ? n.current = e2.current : n.current = e2;
    r.current = e2;
  }
  return [n, o];
}
var CD = N(L());
function _1(e2) {
  if (false) {
    var t, r, n, o, i, a, s, u, l, c, d;
    if (!l.current) {
      for (var p, v; p < v.length; p++)
        var g;
      if (i)
        for (var y, f; y < f.length; y++)
          var m;
    }
  }
}
var SD = Lt();
var _D = /\.svg$/i;
var FD = "fabricImage";
function xD(e2, t) {
  var r = e2.onLoadingStateChange, n = e2.onLoad, o = e2.onError, i = e2.src, a = Ze.useState(ht.notLoaded), s = a[0], u = a[1];
  Ze.useLayoutEffect(function() {
    u(ht.notLoaded);
  }, [i]), Ze.useEffect(function() {
    if (s === ht.notLoaded) {
      var d = t.current ? i && t.current.naturalWidth > 0 && t.current.naturalHeight > 0 || t.current.complete && _D.test(i) : false;
      d && u(ht.loaded);
    }
  }), Ze.useEffect(function() {
    r?.(s);
  }, [s]);
  var l = Ze.useCallback(function(d) {
    n?.(d), i && u(ht.loaded);
  }, [i, n]), c = Ze.useCallback(function(d) {
    o?.(d), u(ht.error);
  }, [o]);
  return [s, l, c];
}
var Km = Ze.forwardRef(function(e2, t) {
  var r = Ze.useRef(), n = Ze.useRef(), o = xD(e2, n), i = o[0], a = o[1], s = o[2], u = ve(e2, VC, ["width", "height"]), l = e2.src, c = e2.alt, d = e2.width, p = e2.height, v = e2.shouldFadeIn, g = v === void 0 ? true : v, y = e2.shouldStartVisible, f = e2.className, m = e2.imageFit, h = e2.role, E = e2.maximizeFrame, C = e2.styles, x = e2.theme, S = e2.loading, F = bD(e2, i, n, r), w = SD(C, { theme: x, className: f, width: d, height: p, maximizeFrame: E, shouldFadeIn: g, shouldStartVisible: y, isLoaded: i === ht.loaded || i === ht.notLoaded && e2.shouldStartVisible, isLandscape: F === fa.landscape, isCenter: m === Vt.center, isCenterContain: m === Vt.centerContain, isCenterCover: m === Vt.centerCover, isContain: m === Vt.contain, isCover: m === Vt.cover, isNone: m === Vt.none, isError: i === ht.error, isNotImageFit: m === void 0 });
  return Ze.createElement("div", { className: w.root, style: { width: d, height: p }, ref: r }, Ze.createElement("img", _({}, u, { onLoad: a, onError: s, key: FD + e2.src || "", className: w.image, ref: cn(n, t), src: l, alt: c, role: h, loading: S })));
});
Km.displayName = "ImageBase";
function bD(e2, t, r, n) {
  var o = Ze.useRef(t), i = Ze.useRef();
  return (i === void 0 || o.current === ht.notLoaded && t === ht.loaded) && (i.current = wD(e2, t, r, n)), o.current = t, i.current;
}
function wD(e2, t, r, n) {
  var o = e2.imageFit, i = e2.width, a = e2.height;
  if (e2.coverStyle !== void 0)
    return e2.coverStyle;
  if (t === ht.loaded && (o === Vt.cover || o === Vt.contain || o === Vt.centerContain || o === Vt.centerCover) && r.current && n.current) {
    var s = void 0;
    typeof i == "number" && typeof a == "number" && o !== Vt.centerContain && o !== Vt.centerCover ? s = i / a : s = n.current.clientWidth / n.current.clientHeight;
    var u = r.current.naturalWidth / r.current.naturalHeight;
    if (u > s)
      return fa.landscape;
  }
  return fa.portrait;
}
var kD = { root: "ms-Image", rootMaximizeFrame: "ms-Image--maximizeFrame", image: "ms-Image-image", imageCenter: "ms-Image-image--center", imageContain: "ms-Image-image--contain", imageCover: "ms-Image-image--cover", imageCenterContain: "ms-Image-image--centerContain", imageCenterCover: "ms-Image-image--centerCover", imageNone: "ms-Image-image--none", imageLandscape: "ms-Image-image--landscape", imagePortrait: "ms-Image-image--portrait" };
var F1 = function(e2) {
  var t = e2.className, r = e2.width, n = e2.height, o = e2.maximizeFrame, i = e2.isLoaded, a = e2.shouldFadeIn, s = e2.shouldStartVisible, u = e2.isLandscape, l = e2.isCenter, c = e2.isContain, d = e2.isCover, p = e2.isCenterContain, v = e2.isCenterCover, g = e2.isNone, y = e2.isError, f = e2.isNotImageFit, m = e2.theme, h = Ht(kD, m), E = { position: "absolute", left: "50% /* @noflip */", top: "50%", transform: "translate(-50%,-50%)" }, C = q(), x = C !== void 0 && C.navigator.msMaxTouchPoints === void 0, S = c && u || d && !u ? { width: "100%", height: "auto" } : { width: "auto", height: "100%" };
  return { root: [h.root, m.fonts.medium, { overflow: "hidden" }, o && [h.rootMaximizeFrame, { height: "100%", width: "100%" }], i && a && !s && xo.fadeIn400, (l || c || d || p || v) && { position: "relative" }, t], image: [h.image, { display: "block", opacity: 0 }, i && ["is-loaded", { opacity: 1 }], l && [h.imageCenter, E], c && [h.imageContain, x && { width: "100%", height: "100%", objectFit: "contain" }, !x && S, !x && E], d && [h.imageCover, x && { width: "100%", height: "100%", objectFit: "cover" }, !x && S, !x && E], p && [h.imageCenterContain, u && { maxWidth: "100%" }, !u && { maxHeight: "100%" }, E], v && [h.imageCenterCover, u && { maxHeight: "100%" }, !u && { maxWidth: "100%" }, E], g && [h.imageNone, { width: "auto", height: "auto" }], f && [!!r && !n && { height: "auto", width: "100%" }, !r && !!n && { height: "100%", width: "auto" }, !!r && !!n && { height: "100%", width: "100%" }], u && h.imageLandscape, !u && h.imagePortrait, !i && "is-notLoaded", a && "is-fadeIn", y && "is-error"] };
};
var qs = xt(Km, F1, void 0, { scope: "Image" }, true);
qs.displayName = "Image";
var Yc = N(L());
var kn = Br({ root: { display: "inline-block" }, placeholder: ["ms-Icon-placeHolder", { width: "1em" }], image: ["ms-Icon-imageContainer", { overflow: "hidden" }] });
var qc = "ms-Icon";
var x1 = function(e2) {
  var t = e2.className, r = e2.iconClassName, n = e2.isPlaceholder, o = e2.isImage, i = e2.styles;
  return { root: [n && kn.placeholder, kn.root, o && kn.image, r, t, i && i.root, i && i.imageContainer] };
};
var Gm = ee(function(e2) {
  var t = Us(e2) || { subset: {}, code: void 0 }, r = t.code, n = t.subset;
  return r ? { children: r, iconClassName: n.className, fontFamily: n.fontFace && n.fontFace.fontFamily, mergeImageProps: n.mergeImageProps } : null;
}, void 0, true);
var Qc = function(e2) {
  var t = e2.iconName, r = e2.className, n = e2.style, o = n === void 0 ? {} : n, i = Gm(t) || {}, a = i.iconClassName, s = i.children, u = i.fontFamily, l = i.mergeImageProps, c = ve(e2, Pe), d = e2["aria-label"] || e2.title, p = e2["aria-label"] || e2["aria-labelledby"] || e2.title ? { role: l ? void 0 : "img" } : { "aria-hidden": true }, v = s;
  return l && typeof s == "object" && typeof s.props == "object" && d && (v = Yc.cloneElement(s, { alt: d })), Yc.createElement("i", _({ "data-icon-name": t }, p, c, l ? { title: void 0, "aria-label": void 0 } : {}, { className: Ot(qc, kn.root, a, !t && kn.placeholder, r), style: _({ fontFamily: u }, o) }), v);
};
var a4 = ee(function(e2, t, r) {
  return Qc({ iconName: e2, className: t, "aria-label": r });
});
var DD = Lt({ cacheSize: 100 });
var b1 = function(e2) {
  _e(t, e2);
  function t(r) {
    var n = e2.call(this, r) || this;
    return n._onImageLoadingStateChange = function(o) {
      n.props.imageProps && n.props.imageProps.onLoadingStateChange && n.props.imageProps.onLoadingStateChange(o), o === ht.error && n.setState({ imageLoadError: true });
    }, n.state = { imageLoadError: false }, n;
  }
  return t.prototype.render = function() {
    var r = this.props, n = r.children, o = r.className, i = r.styles, a = r.iconName, s = r.imageErrorAs, u = r.theme, l = typeof a == "string" && a.length === 0, c = !!this.props.imageProps || this.props.iconType === Gs.image || this.props.iconType === Gs.Image, d = Gm(a) || {}, p = d.iconClassName, v = d.children, g = d.mergeImageProps, y = DD(i, { theme: u, className: o, iconClassName: p, isImage: c, isPlaceholder: l }), f = c ? "span" : "i", m = ve(this.props, Pe, ["aria-label"]), h = this.state.imageLoadError, E = _(_({}, this.props.imageProps), { onLoadingStateChange: this._onImageLoadingStateChange }), C = h && s || qs, x = this.props["aria-label"] || this.props.ariaLabel, S = E.alt || x || this.props.title, F = !!(S || this.props["aria-labelledby"] || E["aria-label"] || E["aria-labelledby"]), w = F ? { role: c || g ? void 0 : "img", "aria-label": c || g ? void 0 : S } : { "aria-hidden": true }, k = v;
    return g && v && typeof v == "object" && S && (k = ti.cloneElement(v, { alt: S })), ti.createElement(f, _({ "data-icon-name": a }, w, m, g ? { title: void 0, "aria-label": void 0 } : {}, { className: y.root }), c ? ti.createElement(C, _({}, E)) : n || k);
  }, t;
}(ti.Component);
var ri = xt(b1, x1, void 0, { scope: "Icon" }, true);
ri.displayName = "Icon";
var qm = N(L());
var w1 = function(e2) {
  var t = e2.className, r = e2.imageProps, n = ve(e2, Pe, ["aria-label", "aria-labelledby", "title", "aria-describedby"]), o = r.alt || e2["aria-label"], i = o || e2["aria-labelledby"] || e2.title || r["aria-label"] || r["aria-labelledby"] || r.title, a = { "aria-labelledby": e2["aria-labelledby"], "aria-describedby": e2["aria-describedby"], title: e2.title }, s = i ? {} : { "aria-hidden": true };
  return qm.createElement("div", _({}, s, n, { className: Ot(qc, kn.root, kn.image, t) }), qm.createElement(qs, _({}, a, r, { alt: i ? o : "" })));
};
var Me = { topLeftEdge: 0, topCenter: 1, topRightEdge: 2, topAutoEdge: 3, bottomLeftEdge: 4, bottomCenter: 5, bottomRightEdge: 6, bottomAutoEdge: 7, leftTopEdge: 8, leftCenter: 9, leftBottomEdge: 10, rightTopEdge: 11, rightCenter: 12, rightBottomEdge: 13 };
var bS = N(L());
var z = N(L());
var Wt;
(function(e2) {
  e2[e2.Normal = 0] = "Normal", e2[e2.Divider = 1] = "Divider", e2[e2.Header = 2] = "Header", e2[e2.Section = 3] = "Section";
})(Wt || (Wt = {}));
var va = N(L());
var Ys = { none: 0, all: 1, inputOnly: 2 };
var vt;
(function(e2) {
  e2[e2.vertical = 0] = "vertical", e2[e2.horizontal = 1] = "horizontal", e2[e2.bidirectional = 2] = "bidirectional", e2[e2.domOrder = 3] = "domOrder";
})(vt || (vt = {}));
var Xc = "data-is-focusable";
var TD = "data-disable-click-on-enter";
var Ym = "data-focuszone-id";
var fn = "tabindex";
var Qm = "data-no-vertical-wrap";
var Xm = "data-no-horizontal-wrap";
var Zm = 999999999;
var Qs = -999999999;
var Jm;
var ID = "ms-FocusZone";
function RD() {
  return Jm || (Jm = _t({ selectors: { ":focus": { outline: "none" } } }, ID)), Jm;
}
var Xs = {};
var ha = /* @__PURE__ */ new Set();
var AD = ["text", "number", "password", "email", "tel", "url", "search"];
var ni = false;
var k1 = function(e2) {
  _e(t, e2);
  function t(r) {
    var n, o, i, a, s = e2.call(this, r) || this;
    s._root = va.createRef(), s._mergedRef = Vs(), s._onFocus = function(l) {
      if (!s._portalContainsElement(l.target)) {
        var c = s.props, d = c.onActiveElementChanged, p = c.doNotAllowFocusEventToPropagate, v = c.stopFocusPropagation, g = c.onFocusNotification, y = c.onFocus, f = c.shouldFocusInnerElementWhenReceivedFocus, m = c.defaultTabbableElement, h = s._isImmediateDescendantOfZone(l.target), E;
        if (h)
          E = l.target;
        else
          for (var C = l.target; C && C !== s._root.current; ) {
            if (Or(C) && s._isImmediateDescendantOfZone(C)) {
              E = C;
              break;
            }
            C = Nt(C, ni);
          }
        if (f && l.target === s._root.current) {
          var x = m && typeof m == "function" && m(s._root.current);
          x && Or(x) ? (E = x, x.focus()) : (s.focus(true), s._activeElement && (E = null));
        }
        var S = !s._activeElement;
        E && E !== s._activeElement && ((h || S) && s._setFocusAlignment(E, true, true), s._activeElement = E, S && s._updateTabIndexes()), d && d(s._activeElement, l), (v || p) && l.stopPropagation(), y ? y(l) : g && g();
      }
    }, s._onBlur = function() {
      s._setParkedFocus(false);
    }, s._onMouseDown = function(l) {
      if (!s._portalContainsElement(l.target)) {
        var c = s.props.disabled;
        if (!c) {
          for (var d = l.target, p = []; d && d !== s._root.current; )
            p.push(d), d = Nt(d, ni);
          for (; p.length && (d = p.pop(), d && Or(d) && s._setActiveElement(d, true), !un(d)); )
            ;
        }
      }
    }, s._onKeyDown = function(l, c) {
      if (!s._portalContainsElement(l.target)) {
        var d = s.props, p = d.direction, v = d.disabled, g = d.isInnerZoneKeystroke, y = d.pagingSupportDisabled, f = d.shouldEnterInnerZone;
        if (!v && (s.props.onKeyDown && s.props.onKeyDown(l), !l.isDefaultPrevented() && !(s._getDocument().activeElement === s._root.current && s._isInnerZone))) {
          if ((f && f(l) || g && g(l)) && s._isImmediateDescendantOfZone(l.target)) {
            var m = s._getFirstInnerZone();
            if (m) {
              if (!m.focus(true))
                return;
            } else if (Cc(l.target)) {
              if (!s.focusElement(Xt(l.target, l.target.firstChild, true)))
                return;
            } else
              return;
          } else {
            if (l.altKey)
              return;
            switch (l.which) {
              case H.space:
                if (s._shouldRaiseClicksOnSpace && s._tryInvokeClickForFocusable(l.target))
                  break;
                return;
              case H.left:
                if (p !== vt.vertical && (s._preventDefaultWhenHandled(l), s._moveFocusLeft(c)))
                  break;
                return;
              case H.right:
                if (p !== vt.vertical && (s._preventDefaultWhenHandled(l), s._moveFocusRight(c)))
                  break;
                return;
              case H.up:
                if (p !== vt.horizontal && (s._preventDefaultWhenHandled(l), s._moveFocusUp()))
                  break;
                return;
              case H.down:
                if (p !== vt.horizontal && (s._preventDefaultWhenHandled(l), s._moveFocusDown()))
                  break;
                return;
              case H.pageDown:
                if (!y && s._moveFocusPaging(true))
                  break;
                return;
              case H.pageUp:
                if (!y && s._moveFocusPaging(false))
                  break;
                return;
              case H.tab:
                if (s.props.allowTabKey || s.props.handleTabKey === Ys.all || s.props.handleTabKey === Ys.inputOnly && s._isElementInput(l.target)) {
                  var h = false;
                  if (s._processingTabKey = true, p === vt.vertical || !s._shouldWrapFocus(s._activeElement, Xm))
                    h = l.shiftKey ? s._moveFocusUp() : s._moveFocusDown();
                  else {
                    var E = Xe(c) ? !l.shiftKey : l.shiftKey;
                    h = E ? s._moveFocusLeft(c) : s._moveFocusRight(c);
                  }
                  if (s._processingTabKey = false, h)
                    break;
                  s.props.shouldResetActiveElementWhenTabFromZone && (s._activeElement = null);
                }
                return;
              case H.home:
                if (s._isContentEditableElement(l.target) || s._isElementInput(l.target) && !s._shouldInputLoseFocus(l.target, false))
                  return false;
                var C = s._root.current && s._root.current.firstChild;
                if (s._root.current && C && s.focusElement(Xt(s._root.current, C, true)))
                  break;
                return;
              case H.end:
                if (s._isContentEditableElement(l.target) || s._isElementInput(l.target) && !s._shouldInputLoseFocus(l.target, true))
                  return false;
                var x = s._root.current && s._root.current.lastChild;
                if (s._root.current && s.focusElement(Qt(s._root.current, x, true, true, true)))
                  break;
                return;
              case H.enter:
                if (s._shouldRaiseClicksOnEnter && s._tryInvokeClickForFocusable(l.target))
                  break;
                return;
              default:
                return;
            }
          }
          l.preventDefault(), l.stopPropagation();
        }
      }
    }, s._getHorizontalDistanceFromCenter = function(l, c, d) {
      var p = s._focusAlignment.left || s._focusAlignment.x || 0, v = Math.floor(d.top), g = Math.floor(c.bottom), y = Math.floor(d.bottom), f = Math.floor(c.top), m = l && v > g, h = !l && y < f;
      return m || h ? p >= d.left && p <= d.left + d.width ? 0 : Math.abs(d.left + d.width / 2 - p) : s._shouldWrapFocus(s._activeElement, Qm) ? Zm : Qs;
    }, Eo(s), s._id = Ft("FocusZone"), s._focusAlignment = { left: 0, top: 0 }, s._processingTabKey = false;
    var u = (o = (n = r.shouldRaiseClicks) !== null && n !== void 0 ? n : t.defaultProps.shouldRaiseClicks) !== null && o !== void 0 ? o : true;
    return s._shouldRaiseClicksOnEnter = (i = r.shouldRaiseClicksOnEnter) !== null && i !== void 0 ? i : u, s._shouldRaiseClicksOnSpace = (a = r.shouldRaiseClicksOnSpace) !== null && a !== void 0 ? a : u, s;
  }
  return t.getOuterZones = function() {
    return ha.size;
  }, t._onKeyDownCapture = function(r) {
    r.which === H.tab && ha.forEach(function(n) {
      return n._updateTabIndexes();
    });
  }, t.prototype.componentDidMount = function() {
    var r = this._root.current;
    if (Xs[this._id] = this, r) {
      this._windowElement = q(r);
      for (var n = Nt(r, ni); n && n !== this._getDocument().body && n.nodeType === 1; ) {
        if (un(n)) {
          this._isInnerZone = true;
          break;
        }
        n = Nt(n, ni);
      }
      this._isInnerZone || (ha.add(this), this._windowElement && ha.size === 1 && this._windowElement.addEventListener("keydown", t._onKeyDownCapture, true)), this._root.current && this._root.current.addEventListener("blur", this._onBlur, true), this._updateTabIndexes(), this.props.defaultTabbableElement && typeof this.props.defaultTabbableElement == "string" ? this._activeElement = this._getDocument().querySelector(this.props.defaultTabbableElement) : this.props.defaultActiveElement && (this._activeElement = this._getDocument().querySelector(this.props.defaultActiveElement)), this.props.shouldFocusOnMount && this.focus();
    }
  }, t.prototype.componentDidUpdate = function() {
    var r = this._root.current, n = this._getDocument();
    if (!this.props.preventFocusRestoration && n && this._lastIndexPath && (n.activeElement === n.body || n.activeElement === null || n.activeElement === r)) {
      var o = bC(r, this._lastIndexPath);
      o ? (this._setActiveElement(o, true), o.focus(), this._setParkedFocus(false)) : this._setParkedFocus(true);
    }
  }, t.prototype.componentWillUnmount = function() {
    delete Xs[this._id], this._isInnerZone || (ha.delete(this), this._windowElement && ha.size === 0 && this._windowElement.removeEventListener("keydown", t._onKeyDownCapture, true)), this._root.current && this._root.current.removeEventListener("blur", this._onBlur, true), this._activeElement = null, this._defaultFocusElement = null;
  }, t.prototype.render = function() {
    var r = this, n = this.props, o = n.as, i = n.elementType, a = n.rootProps, s = n.ariaDescribedBy, u = n.ariaLabelledBy, l = n.className, c = ve(this.props, Pe), d = o || i || "div";
    this._evaluateFocusBeforeRender();
    var p = Wm();
    return va.createElement(d, _({ "aria-labelledby": u, "aria-describedby": s }, c, a, { className: Ot(RD(), l), ref: this._mergedRef(this.props.elementRef, this._root), "data-focuszone-id": this._id, onKeyDown: function(v) {
      return r._onKeyDown(v, p);
    }, onFocus: this._onFocus, onMouseDownCapture: this._onMouseDown }), this.props.children);
  }, t.prototype.focus = function(r) {
    if (r === void 0 && (r = false), this._root.current)
      if (!r && this._root.current.getAttribute(Xc) === "true" && this._isInnerZone) {
        var n = this._getOwnerZone(this._root.current);
        if (n !== this._root.current) {
          var o = Xs[n.getAttribute(Ym)];
          return !!o && o.focusElement(this._root.current);
        }
        return false;
      } else {
        if (!r && this._activeElement && sn(this._root.current, this._activeElement) && Or(this._activeElement))
          return this._activeElement.focus(), true;
        var i = this._root.current.firstChild;
        return this.focusElement(Xt(this._root.current, i, true));
      }
    return false;
  }, t.prototype.focusLast = function() {
    if (this._root.current) {
      var r = this._root.current && this._root.current.lastChild;
      return this.focusElement(Qt(this._root.current, r, true, true, true));
    }
    return false;
  }, t.prototype.focusElement = function(r, n) {
    var o = this.props, i = o.onBeforeFocus, a = o.shouldReceiveFocus;
    return a && !a(r) || i && !i(r) ? false : r ? (this._setActiveElement(r, n), this._activeElement && this._activeElement.focus(), true) : false;
  }, t.prototype.setFocusAlignment = function(r) {
    this._focusAlignment = r;
  }, t.prototype._evaluateFocusBeforeRender = function() {
    var r = this._root.current, n = this._getDocument();
    if (n) {
      var o = n.activeElement;
      if (o !== r) {
        var i = sn(r, o, false);
        this._lastIndexPath = i ? wC(r, o) : void 0;
      }
    }
  }, t.prototype._setParkedFocus = function(r) {
    var n = this._root.current;
    n && this._isParked !== r && (this._isParked = r, r ? (this.props.allowFocusRoot || (this._parkedTabIndex = n.getAttribute("tabindex"), n.setAttribute("tabindex", "-1")), n.focus()) : this.props.allowFocusRoot || (this._parkedTabIndex ? (n.setAttribute("tabindex", this._parkedTabIndex), this._parkedTabIndex = void 0) : n.removeAttribute("tabindex")));
  }, t.prototype._setActiveElement = function(r, n) {
    var o = this._activeElement;
    this._activeElement = r, o && (un(o) && this._updateTabIndexes(o), o.tabIndex = -1), this._activeElement && ((!this._focusAlignment || n) && this._setFocusAlignment(r, true, true), this._activeElement.tabIndex = 0);
  }, t.prototype._preventDefaultWhenHandled = function(r) {
    this.props.preventDefaultWhenHandled && r.preventDefault();
  }, t.prototype._tryInvokeClickForFocusable = function(r) {
    if (r === this._root.current)
      return false;
    do {
      if (r.tagName === "BUTTON" || r.tagName === "A" || r.tagName === "INPUT" || r.tagName === "TEXTAREA")
        return false;
      if (this._isImmediateDescendantOfZone(r) && r.getAttribute(Xc) === "true" && r.getAttribute(TD) !== "true")
        return kC(r), true;
      r = Nt(r, ni);
    } while (r !== this._root.current);
    return false;
  }, t.prototype._getFirstInnerZone = function(r) {
    if (r = r || this._activeElement || this._root.current, !r)
      return null;
    if (un(r))
      return Xs[r.getAttribute(Ym)];
    for (var n = r.firstElementChild; n; ) {
      if (un(n))
        return Xs[n.getAttribute(Ym)];
      var o = this._getFirstInnerZone(n);
      if (o)
        return o;
      n = n.nextElementSibling;
    }
    return null;
  }, t.prototype._moveFocus = function(r, n, o, i) {
    i === void 0 && (i = true);
    var a = this._activeElement, s = -1, u = void 0, l = false, c = this.props.direction === vt.bidirectional;
    if (!a || !this._root.current || this._isElementInput(a) && !this._shouldInputLoseFocus(a, r))
      return false;
    var d = c ? a.getBoundingClientRect() : null;
    do
      if (a = r ? Xt(this._root.current, a) : Qt(this._root.current, a), c) {
        if (a) {
          var p = a.getBoundingClientRect(), v = n(d, p);
          if (v === -1 && s === -1) {
            u = a;
            break;
          }
          if (v > -1 && (s === -1 || v < s) && (s = v, u = a), s >= 0 && v < 0)
            break;
        }
      } else {
        u = a;
        break;
      }
    while (a);
    if (u && u !== this._activeElement)
      l = true, this.focusElement(u);
    else if (this.props.isCircularNavigation && i)
      return r ? this.focusElement(Xt(this._root.current, this._root.current.firstElementChild, true)) : this.focusElement(Qt(this._root.current, this._root.current.lastElementChild, true, true, true));
    return l;
  }, t.prototype._moveFocusDown = function() {
    var r = this, n = -1, o = this._focusAlignment.left || this._focusAlignment.x || 0;
    return this._moveFocus(true, function(i, a) {
      var s = -1, u = Math.floor(a.top), l = Math.floor(i.bottom);
      return u < l ? r._shouldWrapFocus(r._activeElement, Qm) ? Zm : Qs : ((n === -1 && u >= l || u === n) && (n = u, o >= a.left && o <= a.left + a.width ? s = 0 : s = Math.abs(a.left + a.width / 2 - o)), s);
    }) ? (this._setFocusAlignment(this._activeElement, false, true), true) : false;
  }, t.prototype._moveFocusUp = function() {
    var r = this, n = -1, o = this._focusAlignment.left || this._focusAlignment.x || 0;
    return this._moveFocus(false, function(i, a) {
      var s = -1, u = Math.floor(a.bottom), l = Math.floor(a.top), c = Math.floor(i.top);
      return u > c ? r._shouldWrapFocus(r._activeElement, Qm) ? Zm : Qs : ((n === -1 && u <= c || l === n) && (n = l, o >= a.left && o <= a.left + a.width ? s = 0 : s = Math.abs(a.left + a.width / 2 - o)), s);
    }) ? (this._setFocusAlignment(this._activeElement, false, true), true) : false;
  }, t.prototype._moveFocusLeft = function(r) {
    var n = this, o = this._shouldWrapFocus(this._activeElement, Xm);
    return this._moveFocus(Xe(r), function(i, a) {
      var s = -1, u;
      return Xe(r) ? u = parseFloat(a.top.toFixed(3)) < parseFloat(i.bottom.toFixed(3)) : u = parseFloat(a.bottom.toFixed(3)) > parseFloat(i.top.toFixed(3)), u && a.right <= i.right && n.props.direction !== vt.vertical ? s = i.right - a.right : o || (s = Qs), s;
    }, void 0, o) ? (this._setFocusAlignment(this._activeElement, true, false), true) : false;
  }, t.prototype._moveFocusRight = function(r) {
    var n = this, o = this._shouldWrapFocus(this._activeElement, Xm);
    return this._moveFocus(!Xe(r), function(i, a) {
      var s = -1, u;
      return Xe(r) ? u = parseFloat(a.bottom.toFixed(3)) > parseFloat(i.top.toFixed(3)) : u = parseFloat(a.top.toFixed(3)) < parseFloat(i.bottom.toFixed(3)), u && a.left >= i.left && n.props.direction !== vt.vertical ? s = a.left - i.left : o || (s = Qs), s;
    }, void 0, o) ? (this._setFocusAlignment(this._activeElement, true, false), true) : false;
  }, t.prototype._moveFocusPaging = function(r, n) {
    n === void 0 && (n = true);
    var o = this._activeElement;
    if (!o || !this._root.current || this._isElementInput(o) && !this._shouldInputLoseFocus(o, r))
      return false;
    var i = fC(o);
    if (!i)
      return false;
    var a = -1, s = void 0, u = -1, l = -1, c = i.clientHeight, d = o.getBoundingClientRect();
    do
      if (o = r ? Xt(this._root.current, o) : Qt(this._root.current, o), o) {
        var p = o.getBoundingClientRect(), v = Math.floor(p.top), g = Math.floor(d.bottom), y = Math.floor(p.bottom), f = Math.floor(d.top), m = this._getHorizontalDistanceFromCenter(r, d, p), h = r && v > g + c, E = !r && y < f - c;
        if (h || E)
          break;
        m > -1 && (r && v > u ? (u = v, a = m, s = o) : !r && y < l ? (l = y, a = m, s = o) : (a === -1 || m <= a) && (a = m, s = o));
      }
    while (o);
    var C = false;
    if (s && s !== this._activeElement)
      C = true, this.focusElement(s), this._setFocusAlignment(s, false, true);
    else if (this.props.isCircularNavigation && n)
      return r ? this.focusElement(Xt(this._root.current, this._root.current.firstElementChild, true)) : this.focusElement(Qt(this._root.current, this._root.current.lastElementChild, true, true, true));
    return C;
  }, t.prototype._setFocusAlignment = function(r, n, o) {
    if (this.props.direction === vt.bidirectional && (!this._focusAlignment || n || o)) {
      var i = r.getBoundingClientRect(), a = i.left + i.width / 2, s = i.top + i.height / 2;
      this._focusAlignment || (this._focusAlignment = { left: a, top: s }), n && (this._focusAlignment.left = a), o && (this._focusAlignment.top = s);
    }
  }, t.prototype._isImmediateDescendantOfZone = function(r) {
    return this._getOwnerZone(r) === this._root.current;
  }, t.prototype._getOwnerZone = function(r) {
    for (var n = Nt(r, ni); n && n !== this._root.current && n !== this._getDocument().body; ) {
      if (un(n))
        return n;
      n = Nt(n, ni);
    }
    return n;
  }, t.prototype._updateTabIndexes = function(r) {
    !this._activeElement && this.props.defaultTabbableElement && typeof this.props.defaultTabbableElement == "function" && (this._activeElement = this.props.defaultTabbableElement(this._root.current)), !r && this._root.current && (this._defaultFocusElement = null, r = this._root.current, this._activeElement && !sn(r, this._activeElement) && (this._activeElement = null)), this._activeElement && !Or(this._activeElement) && (this._activeElement = null);
    for (var n = r && r.children, o = 0; n && o < n.length; o++) {
      var i = n[o];
      un(i) ? i.getAttribute(Xc) === "true" && (!this._isInnerZone && (!this._activeElement && !this._defaultFocusElement || this._activeElement === i) ? (this._defaultFocusElement = i, i.getAttribute(fn) !== "0" && i.setAttribute(fn, "0")) : i.getAttribute(fn) !== "-1" && i.setAttribute(fn, "-1")) : (i.getAttribute && i.getAttribute(Xc) === "false" && i.setAttribute(fn, "-1"), Or(i) ? this.props.disabled ? i.setAttribute(fn, "-1") : !this._isInnerZone && (!this._activeElement && !this._defaultFocusElement || this._activeElement === i) ? (this._defaultFocusElement = i, i.getAttribute(fn) !== "0" && i.setAttribute(fn, "0")) : i.getAttribute(fn) !== "-1" && i.setAttribute(fn, "-1") : i.tagName === "svg" && i.getAttribute("focusable") !== "false" && i.setAttribute("focusable", "false")), this._updateTabIndexes(i);
    }
  }, t.prototype._isContentEditableElement = function(r) {
    return r && r.getAttribute("contenteditable") === "true";
  }, t.prototype._isElementInput = function(r) {
    return !!(r && r.tagName && (r.tagName.toLowerCase() === "input" || r.tagName.toLowerCase() === "textarea"));
  }, t.prototype._shouldInputLoseFocus = function(r, n) {
    if (!this._processingTabKey && r && r.type && AD.indexOf(r.type.toLowerCase()) > -1) {
      var o = r.selectionStart, i = r.selectionEnd, a = o !== i, s = r.value, u = r.readOnly;
      if (a || o > 0 && !n && !u || o !== s.length && n && !u || !!this.props.handleTabKey && !(this.props.shouldInputLoseFocusOnArrowKey && this.props.shouldInputLoseFocusOnArrowKey(r)))
        return false;
    }
    return true;
  }, t.prototype._shouldWrapFocus = function(r, n) {
    return this.props.checkForNoWrap ? Sc(r, n) : true;
  }, t.prototype._portalContainsElement = function(r) {
    return r && !!this._root.current && zs(r, this._root.current);
  }, t.prototype._getDocument = function() {
    return Ge(this._root.current);
  }, t.defaultProps = { isCircularNavigation: false, direction: vt.bidirectional, shouldRaiseClicks: true }, t;
}(va.Component);
function wo(e2) {
  return e2.canCheck ? !!(e2.isChecked || e2.checked) : typeof e2.isChecked == "boolean" ? e2.isChecked : typeof e2.checked == "boolean" ? e2.checked : null;
}
function Zt(e2) {
  return !!(e2.subMenuProps || e2.items);
}
function Jt(e2) {
  return !!(e2.isDisabled || e2.disabled);
}
function Zc(e2) {
  var t = wo(e2), r = t !== null;
  return r ? "menuitemcheckbox" : "menuitem";
}
var eu = N(L());
var ce = N(L());
var O;
(function(e2) {
  e2[e2.top = 1] = "top", e2[e2.bottom = -1] = "bottom", e2[e2.left = 2] = "left", e2[e2.right = -2] = "right";
})(O || (O = {}));
var D1;
(function(e2) {
  e2[e2.top = 0] = "top", e2[e2.bottom = 1] = "bottom", e2[e2.start = 2] = "start", e2[e2.end = 3] = "end";
})(D1 || (D1 = {}));
var bt;
function er(e2, t, r) {
  return { targetEdge: e2, alignmentEdge: t, isAuto: r };
}
var T1 = (bt = {}, bt[Me.topLeftEdge] = er(O.top, O.left), bt[Me.topCenter] = er(O.top), bt[Me.topRightEdge] = er(O.top, O.right), bt[Me.topAutoEdge] = er(O.top, void 0, true), bt[Me.bottomLeftEdge] = er(O.bottom, O.left), bt[Me.bottomCenter] = er(O.bottom), bt[Me.bottomRightEdge] = er(O.bottom, O.right), bt[Me.bottomAutoEdge] = er(O.bottom, void 0, true), bt[Me.leftTopEdge] = er(O.left, O.top), bt[Me.leftCenter] = er(O.left), bt[Me.leftBottomEdge] = er(O.left, O.bottom), bt[Me.rightTopEdge] = er(O.right, O.top), bt[Me.rightCenter] = er(O.right), bt[Me.rightBottomEdge] = er(O.right, O.bottom), bt);
function rh(e2, t) {
  return !(e2.top < t.top || e2.bottom > t.bottom || e2.left < t.left || e2.right > t.right);
}
function Jc(e2, t) {
  var r = [];
  return e2.top < t.top && r.push(O.top), e2.bottom > t.bottom && r.push(O.bottom), e2.left < t.left && r.push(O.left), e2.right > t.right && r.push(O.right), r;
}
function tr(e2, t) {
  return e2[O[t]];
}
function I1(e2, t, r) {
  return e2[O[t]] = r, e2;
}
function Zs(e2, t) {
  var r = ya(t);
  return (tr(e2, r.positiveEdge) + tr(e2, r.negativeEdge)) / 2;
}
function rf(e2, t) {
  return e2 > 0 ? t : t * -1;
}
function th(e2, t) {
  return rf(e2, tr(t, e2));
}
function Dn(e2, t, r) {
  var n = tr(e2, r) - tr(t, r);
  return rf(r, n);
}
function ga(e2, t, r, n) {
  n === void 0 && (n = true);
  var o = tr(e2, t) - r, i = I1(e2, t, r);
  return n && (i = I1(e2, t * -1, tr(e2, t * -1) - o)), i;
}
function Js(e2, t, r, n) {
  return n === void 0 && (n = 0), ga(e2, r, tr(t, r) + rf(r, n));
}
function PD(e2, t, r, n) {
  n === void 0 && (n = 0);
  var o = r * -1, i = rf(o, n);
  return ga(e2, r * -1, tr(t, r) + i);
}
function ef(e2, t, r) {
  var n = th(r, e2);
  return n > th(r, t);
}
function MD(e2, t) {
  for (var r = Jc(e2, t), n = 0, o = 0, i = r; o < i.length; o++) {
    var a = i[o];
    n += Math.pow(Dn(e2, t, a), 2);
  }
  return n;
}
function BD(e2, t, r, n, o) {
  o === void 0 && (o = 0);
  var i = [O.left, O.right, O.bottom, O.top];
  Xe() && (i[0] *= -1, i[1] *= -1);
  for (var a = e2, s = n.targetEdge, u = n.alignmentEdge, l, c = s, d = u, p = 0; p < 4; p++) {
    if (ef(a, r, s))
      return { elementRectangle: a, targetEdge: s, alignmentEdge: u };
    var v = MD(a, r);
    (!l || v < l) && (l = v, c = s, d = u), i.splice(i.indexOf(s), 1), i.length > 0 && (i.indexOf(s * -1) > -1 ? s = s * -1 : (u = s, s = i.slice(-1)[0]), a = tf(e2, t, { targetEdge: s, alignmentEdge: u }, o));
  }
  return a = tf(e2, t, { targetEdge: c, alignmentEdge: d }, o), { elementRectangle: a, targetEdge: c, alignmentEdge: d };
}
function ND(e2, t, r, n) {
  var o = e2.alignmentEdge, i = e2.targetEdge, a = e2.elementRectangle, s = o * -1, u = tf(a, t, { targetEdge: i, alignmentEdge: s }, r, n);
  return { elementRectangle: u, targetEdge: i, alignmentEdge: s };
}
function LD(e2, t, r, n, o, i, a) {
  o === void 0 && (o = 0);
  var s = n.alignmentEdge, u = n.alignTargetEdge, l = { elementRectangle: e2, targetEdge: n.targetEdge, alignmentEdge: s };
  !i && !a && (l = BD(e2, t, r, n, o));
  var c = Jc(l.elementRectangle, r), d = i ? -l.targetEdge : void 0;
  if (c.length > 0)
    if (u)
      if (l.alignmentEdge && c.indexOf(l.alignmentEdge * -1) > -1) {
        var p = ND(l, t, o, a);
        if (rh(p.elementRectangle, r))
          return p;
        l = eh(Jc(p.elementRectangle, r), l, r, d);
      } else
        l = eh(c, l, r, d);
    else
      l = eh(c, l, r, d);
  return l;
}
function eh(e2, t, r, n) {
  for (var o = 0, i = e2; o < i.length; o++) {
    var a = i[o], s = void 0;
    if (n && n === a * -1)
      s = ga(t.elementRectangle, a, tr(r, a), false), t.forcedInBounds = true;
    else {
      s = Js(t.elementRectangle, r, a);
      var u = ef(s, r, a * -1);
      u || (s = ga(s, a * -1, tr(r, a * -1), false), t.forcedInBounds = true);
    }
    t.elementRectangle = s;
  }
  return t;
}
function R1(e2, t, r) {
  var n = ya(t).positiveEdge, o = Zs(e2, t), i = o - tr(e2, n);
  return ga(e2, n, r - i);
}
function tf(e2, t, r, n, o) {
  n === void 0 && (n = 0);
  var i = new Lr(e2.left, e2.right, e2.top, e2.bottom), a = r.alignmentEdge, s = r.targetEdge, u = o ? s : s * -1;
  if (i = o ? Js(i, t, s, n) : PD(i, t, s, n), a)
    i = Js(i, t, a);
  else {
    var l = Zs(t, s);
    i = R1(i, u, l);
  }
  return i;
}
function ya(e2) {
  return e2 === O.top || e2 === O.bottom ? { positiveEdge: O.left, negativeEdge: O.right } : { positiveEdge: O.top, negativeEdge: O.bottom };
}
function A1(e2, t, r) {
  return r && Math.abs(Dn(e2, r, t)) > Math.abs(Dn(e2, r, t * -1)) ? t * -1 : t;
}
function OD(e2, t, r, n, o, i, a, s) {
  var u = {}, l = nh(t), c = i ? r : r * -1, d = o || ya(r).positiveEdge;
  return a || (d = A1(e2, d, n)), u[O[c]] = Dn(e2, l, c), u[O[d]] = Dn(e2, l, d), s && (u[O[c * -1]] = Dn(e2, l, c * -1), u[O[d * -1]] = Dn(e2, l, d * -1)), u;
}
function zD(e2) {
  return Math.sqrt(e2 * e2 * 2);
}
function HD(e2, t, r) {
  if (e2 === void 0 && (e2 = Me.bottomAutoEdge), r)
    return { alignmentEdge: r.alignmentEdge, isAuto: r.isAuto, targetEdge: r.targetEdge };
  var n = _({}, T1[e2]);
  return Xe() ? (n.alignmentEdge && n.alignmentEdge % 2 === 0 && (n.alignmentEdge = n.alignmentEdge * -1), t !== void 0 ? T1[t] : n) : n;
}
function VD(e2, t, r, n, o) {
  return e2.isAuto && (e2.alignmentEdge = P1(e2.targetEdge, t, r)), e2.alignTargetEdge = o, e2;
}
function P1(e2, t, r) {
  var n = Zs(t, e2), o = Zs(r, e2), i = ya(e2), a = i.positiveEdge, s = i.negativeEdge;
  return n <= o ? a : s;
}
function WD(e2, t, r, n, o, i, a) {
  var s = tf(e2, t, n, o, a);
  return rh(s, r) ? { elementRectangle: s, targetEdge: n.targetEdge, alignmentEdge: n.alignmentEdge } : LD(s, t, r, n, o, i, a);
}
function UD(e2, t, r) {
  var n = e2.targetEdge * -1, o = new Lr(0, e2.elementRectangle.width, 0, e2.elementRectangle.height), i = {}, a = A1(e2.elementRectangle, e2.alignmentEdge ? e2.alignmentEdge : ya(n).positiveEdge, r), s = Dn(e2.elementRectangle, e2.targetRectangle, n), u = s > Math.abs(tr(t, n));
  return i[O[n]] = tr(t, n), i[O[a]] = Dn(t, o, a), { elementPosition: _({}, i), closestEdge: P1(e2.targetEdge, t, o), targetEdge: n, hideBeak: !u };
}
function jD(e2, t) {
  var r = t.targetRectangle, n = ya(t.targetEdge), o = n.positiveEdge, i = n.negativeEdge, a = Zs(r, t.targetEdge), s = new Lr(e2 / 2, t.elementRectangle.width - e2 / 2, e2 / 2, t.elementRectangle.height - e2 / 2), u = new Lr(0, e2, 0, e2);
  return u = ga(u, t.targetEdge * -1, -e2 / 2), u = R1(u, t.targetEdge * -1, a - th(o, t.elementRectangle)), ef(u, s, o) ? ef(u, s, i) || (u = Js(u, s, i)) : u = Js(u, s, o), u;
}
function nh(e2) {
  var t = e2.getBoundingClientRect();
  return new Lr(t.left, t.right, t.top, t.bottom);
}
function $D(e2) {
  return new Lr(e2.left, e2.right, e2.top, e2.bottom);
}
function KD(e2, t) {
  var r;
  if (t) {
    if (t.preventDefault) {
      var n = t;
      r = new Lr(n.clientX, n.clientX, n.clientY, n.clientY);
    } else if (t.getBoundingClientRect)
      r = nh(t);
    else {
      var o = t, i = o.left || o.x, a = o.top || o.y, s = o.right || i, u = o.bottom || a;
      r = new Lr(i, s, a, u);
    }
    if (!rh(r, e2))
      for (var l = Jc(r, e2), c = 0, d = l; c < d.length; c++) {
        var p = d[c];
        r[O[p]] = e2[O[p]];
      }
  } else
    r = new Lr(0, 0, 0, 0);
  return r;
}
function GD(e2, t, r, n) {
  var o = e2.gapSpace ? e2.gapSpace : 0, i = KD(r, e2.target), a = VD(HD(e2.directionalHint, e2.directionalHintForRTL, n), i, r, e2.coverTarget, e2.alignTargetEdge), s = WD(nh(t), i, r, a, o, e2.directionalHintFixed, e2.coverTarget);
  return _(_({}, s), { targetRectangle: i });
}
function qD(e2, t, r, n, o) {
  var i = OD(e2.elementRectangle, t, e2.targetEdge, r, e2.alignmentEdge, n, o, e2.forcedInBounds);
  return { elementPosition: i, targetEdge: e2.targetEdge, alignmentEdge: e2.alignmentEdge };
}
function M1(e2, t, r, n, o) {
  var i = e2.isBeakVisible && e2.beakWidth || 0, a = zD(i) / 2 + (e2.gapSpace ? e2.gapSpace : 0), s = e2;
  s.gapSpace = a;
  var u = e2.bounds ? $D(e2.bounds) : new Lr(0, window.innerWidth - cC(), 0, window.innerHeight), l = GD(s, r, u, n), c = jD(i, l), d = UD(l, c, u);
  return _(_({}, qD(l, t, u, e2.coverTarget, o)), { beakPosition: d });
}
function YD(e2, t, r, n) {
  return M1(e2, t, r, n, true);
}
function oh(e2, t, r, n) {
  return M1(e2, t, r, n);
}
function ih(e2, t, r, n) {
  return YD(e2, t, r, n);
}
function QD(e2, t) {
  var r = void 0;
  if (t.getWindowSegments && (r = t.getWindowSegments()), r === void 0 || r.length <= 1)
    return { top: 0, left: 0, right: t.innerWidth, bottom: t.innerHeight, width: t.innerWidth, height: t.innerHeight };
  var n = 0, o = 0;
  if (e2 !== null && !!e2.getBoundingClientRect) {
    var i = e2.getBoundingClientRect();
    n = (i.left + i.right) / 2, o = (i.top + i.bottom) / 2;
  } else
    e2 !== null && (n = e2.left || e2.x, o = e2.top || e2.y);
  for (var a = { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 }, s = 0, u = r; s < u.length; s++) {
    var l = u[s];
    n && l.left <= n && l.right >= n && o && l.top <= o && l.bottom >= o && (a = { top: l.top, left: l.left, right: l.right, bottom: l.bottom, width: l.width, height: l.height });
  }
  return a;
}
function ah(e2, t) {
  return QD(e2, t);
}
var ct = N(L());
function XD(e2, t) {
  var r = wn(), n = ct.useState(false), o = n[0], i = n[1];
  return ct.useEffect(function() {
    return r.requestAnimationFrame(function() {
      var a;
      if (!(e2.style && e2.style.overflowY)) {
        var s = false;
        if (t && t.current && ((a = t.current) === null || a === void 0 ? void 0 : a.firstElementChild)) {
          var u = t.current.clientHeight, l = t.current.firstElementChild.clientHeight;
          u > 0 && l > u && (s = l - u > 1);
        }
        o !== s && i(s);
      }
    }), function() {
      return r.dispose();
    };
  }), o;
}
function ZD(e2) {
  var t = e2.originalElement, r = e2.containsFocus;
  t && r && t !== q() && setTimeout(function() {
    var n;
    (n = t.focus) === null || n === void 0 || n.call(t);
  }, 0);
}
function JD(e2, t) {
  var r = e2.onRestoreFocus, n = r === void 0 ? ZD : r, o = ct.useRef(), i = ct.useRef(false);
  ct.useEffect(function() {
    return o.current = Ge().activeElement, xC(t.current) && (i.current = true), function() {
      var a;
      n?.({ originalElement: o.current, containsFocus: i.current, documentContainsFocus: ((a = Ge()) === null || a === void 0 ? void 0 : a.hasFocus()) || false }), o.current = void 0;
    };
  }, []), bo(t, "focus", ct.useCallback(function() {
    i.current = true;
  }, []), true), bo(t, "blur", ct.useCallback(function(a) {
    t.current && a.relatedTarget && !t.current.contains(a.relatedTarget) && (i.current = false);
  }, []), true);
}
function eT(e2, t) {
  var r = e2["aria-modal"];
  ct.useEffect(function() {
    var n, o = Ge();
    if (r && o && t && t.current) {
      var i = (n = t.current.parentElement) === null || n === void 0 ? void 0 : n.parentElement, a = B1(i, i?.parentElement);
      if (i?.parentElement !== o.body) {
        var s = tT(t.current, o);
        a.concat(B1(s, o.body));
      }
      return a = a.filter(function(u) {
        return u.tagName !== "TEMPLATE" && u.tagName !== "SCRIPT" && u.tagName !== "STYLE" && !u.hasAttribute("aria-hidden");
      }), a.forEach(function(u) {
        return u.setAttribute("aria-hidden", "true");
      }), function() {
        return a.forEach(function(u) {
          return u.removeAttribute("aria-hidden");
        });
      };
    }
  }, [r, t]);
}
function tT(e2, t) {
  for (var r = e2; r && r.parentElement !== t.body; )
    r = r.parentElement;
  return r;
}
var B1 = function(e2, t) {
  return e2 && t ? [].slice.call(t.children).filter(function(r) {
    return r !== e2;
  }) : [];
};
var N1 = ct.forwardRef(function(e2, t) {
  e2 = _({ shouldRestoreFocus: true }, e2);
  var r = ct.useRef(), n = cn(r, t);
  eT(e2, r), JD(e2, r);
  var o = e2.role, i = e2.className, a = e2.ariaLabel, s = e2.ariaLabelledBy, u = e2.ariaDescribedBy, l = e2.style, c = e2.children, d = e2.onDismiss, p = XD(e2, r), v = ct.useCallback(function(y) {
    switch (y.which) {
      case H.escape:
        d && (d(y), y.preventDefault(), y.stopPropagation());
        break;
    }
  }, [d]), g = ma();
  return bo(g, "keydown", v), ct.createElement("div", _({ ref: n }, ve(e2, yo), { className: i, role: o, "aria-label": a, "aria-labelledby": s, "aria-describedby": u, onKeyDown: v, style: _({ overflowY: p ? "scroll" : void 0, outline: "none" }, l) }), c);
});
var Ea;
var rT = "CalloutContentBase";
var nT = (Ea = {}, Ea[O.top] = xo.slideUpIn10, Ea[O.bottom] = xo.slideDownIn10, Ea[O.left] = xo.slideLeftIn10, Ea[O.right] = xo.slideRightIn10, Ea);
var L1 = { top: 0, left: 0 };
var oT = { opacity: 0, filter: "opacity(0)", pointerEvents: "none" };
var O1 = ["role", "aria-roledescription"];
var H1 = { preventDismissOnLostFocus: false, preventDismissOnScroll: false, preventDismissOnResize: false, isBeakVisible: true, beakWidth: 16, gapSpace: 0, minPagePadding: 8, directionalHint: Me.bottomAutoEdge };
var iT = Lt({ disableCaching: true });
function aT(e2, t, r) {
  var n = e2.bounds, o = e2.minPagePadding, i = o === void 0 ? H1.minPagePadding : o, a = e2.target, s = ce.useState(false), u = s[0], l = s[1], c = ce.useRef(), d = ce.useCallback(function() {
    if (!c.current || u) {
      var v = typeof n == "function" ? r ? n(a, r) : void 0 : n;
      !v && r && (v = ah(t.current, r), v = { top: v.top + i, left: v.left + i, right: v.right - i, bottom: v.bottom - i, width: v.width - i * 2, height: v.height - i * 2 }), c.current = v, u && l(false);
    }
    return c.current;
  }, [n, i, a, t, r, u]), p = wn();
  return bo(r, "resize", p.debounce(function() {
    l(true);
  }, 500, { leading: true })), d;
}
function sT(e2, t, r) {
  var n, o = e2.calloutMaxHeight, i = e2.directionalHint, a = e2.directionalHintFixed, s = e2.hidden, u = ce.useState(), l = u[0], c = u[1], d = (n = r?.elementPosition) !== null && n !== void 0 ? n : {}, p = d.top, v = d.bottom;
  return ce.useEffect(function() {
    var g, y = typeof p == "number" && typeof v == "number", f = (g = t()) !== null && g !== void 0 ? g : {}, m = f.top, h = f.bottom;
    !o && !y && !s ? typeof p == "number" && h ? c(h - p) : typeof v == "number" && typeof m == "number" && h && c(h - m - v) : c(o || void 0);
  }, [v, o, i, a, t, s, r, p]), l;
}
function uT(e2, t, r, n, o) {
  var i = ce.useState(), a = i[0], s = i[1], u = ce.useRef(0), l = ce.useRef(), c = wn(), d = e2.hidden, p = e2.target, v = e2.finalHeight, g = e2.onPositioned, y = e2.directionalHint;
  return ce.useEffect(function() {
    if (d)
      s(void 0), u.current = 0;
    else {
      var f = c.requestAnimationFrame(function() {
        if (t.current && r) {
          var m = _(_({}, e2), { target: n.current, bounds: o() }), h = l.current === p ? a : void 0, E = v ? ih(m, t.current, r, h) : oh(m, t.current, r, h);
          !a && E || a && E && !dT(a, E) && u.current < 5 ? (u.current++, s(E)) : u.current > 0 && (u.current = 0, g?.(a));
        }
      }, r);
      return l.current = p, function() {
        c.cancelAnimationFrame(f), l.current = void 0;
      };
    }
  }, [d, y, c, r, t, n, v, o, g, a, e2, p]), a;
}
function lT(e2, t, r) {
  var n = e2.hidden, o = e2.setInitialFocus, i = wn(), a = !!t;
  ce.useEffect(function() {
    if (!n && o && a && r) {
      var s = i.requestAnimationFrame(function() {
        return FC(r);
      }, r);
      return function() {
        return i.cancelAnimationFrame(s);
      };
    }
  }, [n, a, i, r, o]);
}
function cT(e2, t, r, n, o) {
  var i = e2.hidden, a = e2.onDismiss, s = e2.preventDismissOnScroll, u = e2.preventDismissOnResize, l = e2.preventDismissOnLostFocus, c = e2.dismissOnTargetClick, d = e2.shouldDismissOnWindowFocus, p = e2.preventDismissOnEvent, v = ce.useRef(false), g = wn(), y = da([function() {
    v.current = true;
  }, function() {
    v.current = false;
  }]), f = !!t;
  return ce.useEffect(function() {
    var m = function(F) {
      f && !s && C(F);
    }, h = function(F) {
      !u && !(p && p(F)) && a?.(F);
    }, E = function(F) {
      l || C(F);
    }, C = function(F) {
      var w = F.target, k = r.current && !sn(r.current, w);
      if (k && v.current) {
        v.current = false;
        return;
      }
      if (!n.current && k || F.target !== o && k && (!n.current || "stopPropagation" in n.current || c || w !== n.current && !sn(n.current, w))) {
        if (p && p(F))
          return;
        a?.(F);
      }
    }, x = function(F) {
      !d || (p && !p(F) || !p && !l) && !o?.document.hasFocus() && F.relatedTarget === null && a?.(F);
    }, S = new Promise(function(F) {
      g.setTimeout(function() {
        if (!i && o) {
          var w = [vo(o, "scroll", m, true), vo(o, "resize", h, true), vo(o.document.documentElement, "focus", E, true), vo(o.document.documentElement, "click", E, true), vo(o, "blur", x, true)];
          F(function() {
            w.forEach(function(k) {
              return k();
            });
          });
        }
      }, 0);
    });
    return function() {
      S.then(function(F) {
        return F();
      });
    };
  }, [i, g, r, n, o, a, d, c, l, u, s, f, p]), y;
}
var sh = ce.memo(ce.forwardRef(function(e2, t) {
  var r = Rc(H1, e2), n = r.styles, o = r.style, i = r.ariaLabel, a = r.ariaDescribedBy, s = r.ariaLabelledBy, u = r.className, l = r.isBeakVisible, c = r.children, d = r.beakWidth, p = r.calloutWidth, v = r.calloutMaxWidth, g = r.calloutMinWidth, y = r.doNotLayer, f = r.finalHeight, m = r.hideOverflow, h = m === void 0 ? !!f : m, E = r.backgroundColor, C = r.calloutMaxHeight, x = r.onScroll, S = r.shouldRestoreFocus, F = S === void 0 ? true : S, w = r.target, k = r.hidden, V = r.onLayerMounted, re = ce.useRef(null), fe = ce.useState(null), De = fe[0], ze = fe[1], de = ce.useCallback(function(J) {
    ze(J);
  }, []), wt = cn(re, t), He = Gc(r.target, { current: De }), Be = He[0], nr = He[1], Ut = aT(r, Be, nr), Fe = uT(r, re, De, Be, Ut), P = sT(r, Ut, Fe), A = cT(r, Fe, re, Be, nr), B = A[0], W = A[1];
  if (lT(r, Fe, De), ce.useEffect(function() {
    k || V?.();
  }, [k]), !nr)
    return null;
  var b = h, Z = l && !!w, T = iT(n, { theme: r.theme, className: u, overflowYHidden: b, calloutWidth: p, positions: Fe, beakWidth: d, backgroundColor: E, calloutMaxWidth: v, calloutMinWidth: g, doNotLayer: y }), Ce = _(_({ maxHeight: C || "100%" }, o), b && { overflowY: "hidden" }), te = r.hidden ? { visibility: "hidden" } : void 0;
  return ce.createElement("div", { ref: wt, className: T.container, style: te }, ce.createElement("div", _({}, ve(r, yo, O1), { className: Ot(T.root, Fe && Fe.targetEdge && nT[Fe.targetEdge]), style: Fe ? _(_({}, Fe.elementPosition), { maxHeight: P }) : oT, tabIndex: -1, ref: de }), Z && ce.createElement("div", { className: T.beak, style: fT(Fe) }), Z && ce.createElement("div", { className: T.beakCurtain }), ce.createElement(N1, _({}, ve(r, O1), { ariaDescribedBy: a, ariaLabel: i, ariaLabelledBy: s, className: T.calloutMain, onDismiss: r.onDismiss, onMouseDown: B, onMouseUp: W, onRestoreFocus: r.onRestoreFocus, onScroll: x, shouldRestoreFocus: F, style: Ce }), c)));
}), function(e2, t) {
  return !t.shouldUpdateWhenHidden && e2.hidden && t.hidden ? true : Qo(e2, t);
});
function fT(e2) {
  var t, r, n = _(_({}, (t = e2?.beakPosition) === null || t === void 0 ? void 0 : t.elementPosition), { display: !((r = e2?.beakPosition) === null || r === void 0) && r.hideBeak ? "none" : void 0 });
  return !n.top && !n.bottom && !n.left && !n.right && (n.left = L1.left, n.top = L1.top), n;
}
function dT(e2, t) {
  return z1(e2.elementPosition, t.elementPosition) && z1(e2.beakPosition.elementPosition, t.beakPosition.elementPosition);
}
function z1(e2, t) {
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = e2[r], o = t[r];
      if (n !== void 0 && o !== void 0) {
        if (n.toFixed(2) !== o.toFixed(2))
          return false;
      } else
        return false;
    }
  return true;
}
sh.displayName = rT;
function pT(e2) {
  return { height: e2, width: e2 };
}
var mT = { container: "ms-Callout-container", root: "ms-Callout", beak: "ms-Callout-beak", beakCurtain: "ms-Callout-beakCurtain", calloutMain: "ms-Callout-main" };
var V1 = function(e2) {
  var t, r = e2.theme, n = e2.className, o = e2.overflowYHidden, i = e2.calloutWidth, a = e2.beakWidth, s = e2.backgroundColor, u = e2.calloutMaxWidth, l = e2.calloutMinWidth, c = e2.doNotLayer, d = Ht(mT, r), p = r.semanticColors, v = r.effects;
  return { container: [d.container, { position: "relative" }], root: [d.root, r.fonts.medium, { position: "absolute", display: "flex", zIndex: c ? Fo.Layer : void 0, boxSizing: "border-box", borderRadius: v.roundedCorner2, boxShadow: v.elevation16, selectors: (t = {}, t[$] = { borderWidth: 1, borderStyle: "solid", borderColor: "WindowText" }, t) }, i1(), n, !!i && { width: i }, !!u && { maxWidth: u }, !!l && { minWidth: l }], beak: [d.beak, { position: "absolute", backgroundColor: p.menuBackground, boxShadow: "inherit", border: "inherit", boxSizing: "border-box", transform: "rotate(45deg)" }, pT(a), s && { backgroundColor: s }], beakCurtain: [d.beakCurtain, { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, backgroundColor: p.menuBackground, borderRadius: v.roundedCorner2 }], calloutMain: [d.calloutMain, { backgroundColor: p.menuBackground, overflowX: "hidden", overflowY: "auto", position: "relative", width: "100%", borderRadius: v.roundedCorner2 }, o && { overflowY: "hidden" }, s && { backgroundColor: s }] };
};
var W1 = xt(sh, V1, void 0, { scope: "CalloutContent" });
var rr = N(L());
var q1 = N(Rp());
var kr = N(L());
var hT = Lt();
var vT = ee(function(e2, t) {
  return bn(_(_({}, e2), { rtl: t }));
});
var gT = function(e2) {
  var t = e2.theme, r = e2.dir, n = Xe(t) ? "rtl" : "ltr", o = Xe() ? "rtl" : "ltr", i = r || n;
  return { rootDir: i !== n || i !== o ? i : r, needsTheme: i !== n };
};
var uh = kr.forwardRef(function(e2, t) {
  var r = e2.className, n = e2.theme, o = e2.applyTheme, i = e2.applyThemeToBody, a = e2.styles, s = hT(a, { theme: n, applyTheme: o, className: r }), u = kr.useRef(null);
  return ET(i, s, u), Tm(u), kr.createElement(kr.Fragment, null, yT(e2, s, u, t));
});
uh.displayName = "FabricBase";
function yT(e2, t, r, n) {
  var o = t.root, i = e2.as, a = i === void 0 ? "div" : i, s = e2.dir, u = e2.theme, l = ve(e2, yo, ["dir"]), c = gT(e2), d = c.rootDir, p = c.needsTheme, v = kr.createElement(a, _({ dir: d }, l, { className: o, ref: cn(r, n) }));
  return p && (v = kr.createElement(NC, { settings: { theme: vT(u, s === "rtl") } }, v)), v;
}
function ET(e2, t, r) {
  var n = t.bodyThemed;
  return kr.useEffect(function() {
    if (e2) {
      var o = Ge(r.current);
      if (o)
        return o.body.classList.add(n), function() {
          o.body.classList.remove(n);
        };
    }
  }, [n, e2, r]), r;
}
var lh = { fontFamily: "inherit" };
var CT = { root: "ms-Fabric", bodyThemed: "ms-Fabric-bodyThemed" };
var U1 = function(e2) {
  var t = e2.theme, r = e2.className, n = e2.applyTheme, o = Ht(CT, t);
  return { root: [o.root, t.fonts.medium, { color: t.palette.neutralPrimary, selectors: { "& button": lh, "& input": lh, "& textarea": lh } }, n && { color: t.semanticColors.bodyText, backgroundColor: t.semanticColors.bodyBackground }, r], bodyThemed: [{ backgroundColor: t.semanticColors.bodyBackground }] };
};
var j1 = xt(uh, U1, void 0, { scope: "Fabric" });
var ko = {};
var ST;
function $1(e2, t) {
  ko[e2] || (ko[e2] = []), ko[e2].push(t);
}
function K1(e2, t) {
  if (ko[e2]) {
    var r = ko[e2].indexOf(t);
    r >= 0 && (ko[e2].splice(r, 1), ko[e2].length === 0 && delete ko[e2]);
  }
}
function G1() {
  return ST;
}
var _T = Lt();
var ch = rr.forwardRef(function(e2, t) {
  var r = rr.useRef(null), n = cn(r, t), o = rr.useRef(), i = rr.useState(false), a = i[0], s = i[1], u = S1(), l = e2.eventBubblingEnabled, c = e2.styles, d = e2.theme, p = e2.className, v = e2.children, g = e2.hostId, y = e2.onLayerDidMount, f = y === void 0 ? function() {
  } : y, m = e2.onLayerMounted, h = m === void 0 ? function() {
  } : m, E = e2.onLayerWillUnmount, C = e2.insertFirst, x = _T(c, { theme: d, className: p, isNotHost: !g }), S = function() {
    if (!!u) {
      if (g)
        return u.getElementById(g);
      var k = G1();
      return k ? u.querySelector(k) : u.body;
    }
  }, F = function() {
    E?.();
    var k = o.current;
    o.current = void 0, k && k.parentNode && k.parentNode.removeChild(k);
  }, w = function() {
    var k = S();
    if (!(!u || !k)) {
      F();
      var V = u.createElement("div");
      V.className = x.root, _m(V), Fm(V, r.current), C ? k.insertBefore(V, k.firstChild) : k.appendChild(V), o.current = V, s(true);
    }
  };
  return rr.useLayoutEffect(function() {
    return w(), g && $1(g, w), function() {
      F(), g && K1(g, w);
    };
  }, [g]), rr.useEffect(function() {
    o.current && a && (h?.(), f?.(), s(false));
  }, [a, h, f]), rr.createElement("span", { className: "ms-layer", ref: n }, o.current && q1.createPortal(rr.createElement(j1, _({}, !l && xT(), { className: x.content }), v), o.current));
});
ch.displayName = "LayerBase";
var nf;
var FT = function(e2) {
  e2.eventPhase === Event.BUBBLING_PHASE && e2.type !== "mouseenter" && e2.type !== "mouseleave" && e2.type !== "touchstart" && e2.type !== "touchend" && e2.stopPropagation();
};
function xT() {
  return nf || (nf = {}, ["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOver", "onMouseOut", "onMouseUp", "onTouchMove", "onTouchStart", "onTouchCancel", "onTouchEnd", "onKeyDown", "onKeyPress", "onKeyUp", "onFocus", "onBlur", "onChange", "onInput", "onInvalid", "onSubmit"].forEach(function(e2) {
    return nf[e2] = FT;
  })), nf;
}
var bT = { root: "ms-Layer", rootNoHost: "ms-Layer--fixed", content: "ms-Layer-content" };
var Y1 = function(e2) {
  var t = e2.className, r = e2.isNotHost, n = e2.theme, o = Ht(bT, n);
  return { root: [o.root, n.fonts.medium, r && [o.rootNoHost, { position: "fixed", zIndex: Fo.Layer, top: 0, left: 0, bottom: 0, right: 0, visibility: "hidden" }], t], content: [o.content, { visibility: "visible" }] };
};
var Q1 = xt(ch, Y1, void 0, { scope: "Layer", fields: ["hostId", "theme", "styles"] });
var fh = eu.forwardRef(function(e2, t) {
  var r = e2.layerProps, n = e2.doNotLayer, o = on(e2, ["layerProps", "doNotLayer"]), i = eu.createElement(W1, _({}, o, { doNotLayer: n, ref: t }));
  return n ? i : eu.createElement(Q1, _({}, r), i);
});
fh.displayName = "Callout";
var Dr = N(L());
var X1 = function(e2) {
  var t = e2.item, r = e2.classNames, n = t.iconProps;
  return Dr.createElement(ri, _({}, n, { className: r.icon }));
};
var wT = function(e2) {
  var t = e2.item, r = e2.hasIcons;
  return r ? t.onRenderIcon ? t.onRenderIcon(e2, X1) : X1(e2) : null;
};
var kT = function(e2) {
  var t = e2.onCheckmarkClick, r = e2.item, n = e2.classNames, o = wo(r);
  if (t) {
    var i = function(a) {
      return t(r, a);
    };
    return Dr.createElement(ri, { iconName: r.canCheck !== false && o ? "CheckMark" : "", className: n.checkmarkIcon, onClick: i });
  }
  return null;
};
var DT = function(e2) {
  var t = e2.item, r = e2.classNames;
  return t.text || t.name ? Dr.createElement("span", { className: r.label }, t.text || t.name) : null;
};
var TT = function(e2) {
  var t = e2.item, r = e2.classNames;
  return t.secondaryText ? Dr.createElement("span", { className: r.secondaryText }, t.secondaryText) : null;
};
var IT = function(e2) {
  var t = e2.item, r = e2.classNames, n = e2.theme;
  return Zt(t) ? Dr.createElement(ri, _({ iconName: Xe(n) ? "ChevronLeft" : "ChevronRight" }, t.submenuIconProps, { className: r.subMenuIcon })) : null;
};
var Z1 = function(e2) {
  _e(t, e2);
  function t(r) {
    var n = e2.call(this, r) || this;
    return n.openSubMenu = function() {
      var o = n.props, i = o.item, a = o.openSubMenu, s = o.getSubmenuTarget;
      if (s) {
        var u = s();
        Zt(i) && a && u && a(i, u);
      }
    }, n.dismissSubMenu = function() {
      var o = n.props, i = o.item, a = o.dismissSubMenu;
      Zt(i) && a && a();
    }, n.dismissMenu = function(o) {
      var i = n.props.dismissMenu;
      i && i(void 0, o);
    }, Eo(n), n;
  }
  return t.prototype.render = function() {
    var r = this.props, n = r.item, o = r.classNames, i = n.onRenderContent || this._renderLayout;
    return Dr.createElement("div", { className: n.split ? o.linkContentMenu : o.linkContent }, i(this.props, { renderCheckMarkIcon: kT, renderItemIcon: wT, renderItemName: DT, renderSecondaryText: TT, renderSubMenuIcon: IT }));
  }, t.prototype._renderLayout = function(r, n) {
    return Dr.createElement(Dr.Fragment, null, n.renderCheckMarkIcon(r), n.renderItemIcon(r), n.renderItemName(r), n.renderSecondaryText(r), n.renderSubMenuIcon(r));
  }, t;
}(Dr.Component);
var J1 = ee(function(e2) {
  return Br({ wrapper: { display: "inline-flex", height: "100%", alignItems: "center" }, divider: { width: 1, height: "100%", backgroundColor: e2.palette.neutralTertiaryAlt } });
});
var Tn = 36;
var eS = Hc(0, zc);
var tu = ee(function() {
  var e2;
  return { selectors: (e2 = {}, e2[$] = _({ backgroundColor: "Highlight", borderColor: "Highlight", color: "HighlightText" }, Wr()), e2) };
});
var tS = ee(function(e2) {
  var t, r, n, o, i, a, s, u = e2.semanticColors, l = e2.fonts, c = e2.palette, d = u.menuItemBackgroundHovered, p = u.menuItemTextHovered, v = u.menuItemBackgroundPressed, g = u.bodyDivider, y = { item: [l.medium, { color: u.bodyText, position: "relative", boxSizing: "border-box" }], divider: { display: "block", height: "1px", backgroundColor: g, position: "relative" }, root: [xn(e2), l.medium, { color: u.bodyText, backgroundColor: "transparent", border: "none", width: "100%", height: Tn, lineHeight: Tn, display: "block", cursor: "pointer", padding: "0px 8px 0 4px", textAlign: "left" }], rootDisabled: { color: u.disabledBodyText, cursor: "default", pointerEvents: "none", selectors: (t = {}, t[$] = _({ color: "GrayText", opacity: 1 }, Wr()), t) }, rootHovered: _({ backgroundColor: d, color: p, selectors: { ".ms-ContextualMenu-icon": { color: c.themeDarkAlt }, ".ms-ContextualMenu-submenuIcon": { color: c.neutralPrimary } } }, tu()), rootFocused: _({ backgroundColor: c.white }, tu()), rootChecked: _({ selectors: { ".ms-ContextualMenu-checkmarkIcon": { color: c.neutralPrimary } } }, tu()), rootPressed: _({ backgroundColor: v, selectors: { ".ms-ContextualMenu-icon": { color: c.themeDark }, ".ms-ContextualMenu-submenuIcon": { color: c.neutralPrimary } } }, tu()), rootExpanded: _({ backgroundColor: v, color: u.bodyTextChecked }, tu()), linkContent: { whiteSpace: "nowrap", height: "inherit", display: "flex", alignItems: "center", maxWidth: "100%" }, anchorLink: { padding: "0px 8px 0 4px", textRendering: "auto", color: "inherit", letterSpacing: "normal", wordSpacing: "normal", textTransform: "none", textIndent: "0px", textShadow: "none", textDecoration: "none", boxSizing: "border-box" }, label: { margin: "0 4px", verticalAlign: "middle", display: "inline-block", flexGrow: "1", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }, secondaryText: { color: e2.palette.neutralSecondary, paddingLeft: "20px", textAlign: "right" }, icon: { display: "inline-block", minHeight: "1px", maxHeight: Tn, fontSize: Hr.medium, width: Hr.medium, margin: "0 4px", verticalAlign: "middle", flexShrink: "0", selectors: (r = {}, r[eS] = { fontSize: Hr.large, width: Hr.large }, r) }, iconColor: { color: u.menuIcon, selectors: (n = {}, n[$] = { color: "inherit" }, n["$root:hover &"] = { selectors: (o = {}, o[$] = { color: "HighlightText" }, o) }, n["$root:focus &"] = { selectors: (i = {}, i[$] = { color: "HighlightText" }, i) }, n) }, iconDisabled: { color: u.disabledBodyText }, checkmarkIcon: { color: u.bodySubtext, selectors: (a = {}, a[$] = { color: "HighlightText" }, a) }, subMenuIcon: { height: Tn, lineHeight: Tn, color: c.neutralSecondary, textAlign: "center", display: "inline-block", verticalAlign: "middle", flexShrink: "0", fontSize: Hr.small, selectors: (s = { ":hover": { color: c.neutralPrimary }, ":active": { color: c.neutralPrimary } }, s[eS] = { fontSize: Hr.medium }, s[$] = { color: "HighlightText" }, s) }, splitButtonFlexContainer: [xn(e2), { display: "flex", height: Tn, flexWrap: "nowrap", justifyContent: "center", alignItems: "flex-start" }] };
  return Mt(y);
});
var rS = "28px";
var RT = Hc(0, zc);
var nS = ee(function(e2) {
  var t;
  return Br(J1(e2), { wrapper: { position: "absolute", right: 28, selectors: (t = {}, t[RT] = { right: 32 }, t) }, divider: { height: 16, width: 1 } });
});
var AT = { item: "ms-ContextualMenu-item", divider: "ms-ContextualMenu-divider", root: "ms-ContextualMenu-link", isChecked: "is-checked", isExpanded: "is-expanded", isDisabled: "is-disabled", linkContent: "ms-ContextualMenu-linkContent", linkContentMenu: "ms-ContextualMenu-linkContent", icon: "ms-ContextualMenu-icon", iconColor: "ms-ContextualMenu-iconColor", checkmarkIcon: "ms-ContextualMenu-checkmarkIcon", subMenuIcon: "ms-ContextualMenu-submenuIcon", label: "ms-ContextualMenu-itemText", secondaryText: "ms-ContextualMenu-secondaryText", splitMenu: "ms-ContextualMenu-splitMenu", screenReaderText: "ms-ContextualMenu-screenReaderText" };
var PT = ee(function(e2, t, r, n, o, i, a, s, u, l, c, d) {
  var p, v, g, y, f = tS(e2), m = Ht(AT, e2);
  return Br({ item: [m.item, f.item, a], divider: [m.divider, f.divider, s], root: [m.root, f.root, n && [m.isChecked, f.rootChecked], o && f.anchorLink, r && [m.isExpanded, f.rootExpanded], t && [m.isDisabled, f.rootDisabled], !t && !r && [{ selectors: (p = { ":hover": f.rootHovered, ":active": f.rootPressed }, p["." + rt + " &:focus, ." + rt + " &:focus:hover"] = f.rootFocused, p["." + rt + " &:hover"] = { background: "inherit;" }, p) }], d], splitPrimary: [f.root, { width: "calc(100% - " + rS + ")" }, n && ["is-checked", f.rootChecked], (t || c) && ["is-disabled", f.rootDisabled], !(t || c) && !n && [{ selectors: (v = { ":hover": f.rootHovered }, v[":hover ~ ." + m.splitMenu] = f.rootHovered, v[":active"] = f.rootPressed, v["." + rt + " &:focus, ." + rt + " &:focus:hover"] = f.rootFocused, v["." + rt + " &:hover"] = { background: "inherit;" }, v) }]], splitMenu: [m.splitMenu, f.root, { flexBasis: "0", padding: "0 8px", minWidth: rS }, r && ["is-expanded", f.rootExpanded], t && ["is-disabled", f.rootDisabled], !t && !r && [{ selectors: (g = { ":hover": f.rootHovered, ":active": f.rootPressed }, g["." + rt + " &:focus, ." + rt + " &:focus:hover"] = f.rootFocused, g["." + rt + " &:hover"] = { background: "inherit;" }, g) }]], anchorLink: f.anchorLink, linkContent: [m.linkContent, f.linkContent], linkContentMenu: [m.linkContentMenu, f.linkContent, { justifyContent: "center" }], icon: [m.icon, i && f.iconColor, f.icon, u, t && [m.isDisabled, f.iconDisabled]], iconColor: f.iconColor, checkmarkIcon: [m.checkmarkIcon, i && f.checkmarkIcon, f.icon, u], subMenuIcon: [m.subMenuIcon, f.subMenuIcon, l, r && { color: e2.palette.neutralPrimary }, t && [f.iconDisabled]], label: [m.label, f.label], secondaryText: [m.secondaryText, f.secondaryText], splitContainer: [f.splitButtonFlexContainer, !t && !n && [{ selectors: (y = {}, y["." + rt + " &:focus, ." + rt + " &:focus:hover"] = f.rootFocused, y) }]], screenReaderText: [m.screenReaderText, f.screenReaderText, js, { visibility: "hidden" }] });
});
var of = function(e2) {
  var t = e2.theme, r = e2.disabled, n = e2.expanded, o = e2.checked, i = e2.isAnchorLink, a = e2.knownIcon, s = e2.itemClassName, u = e2.dividerClassName, l = e2.iconClassName, c = e2.subMenuClassName, d = e2.primaryDisabled, p = e2.className;
  return PT(t, r, n, o, i, a, s, u, l, c, d, p);
};
var In = xt(Z1, of, void 0, { scope: "ContextualMenuItem" });
var Do = N(L());
var oS = N(L());
var Ca = function(e2) {
  _e(t, e2);
  function t(r) {
    var n = e2.call(this, r) || this;
    return n._onItemMouseEnter = function(o) {
      var i = n.props, a = i.item, s = i.onItemMouseEnter;
      s && s(a, o, o.currentTarget);
    }, n._onItemClick = function(o) {
      var i = n.props, a = i.item, s = i.onItemClickBase;
      s && s(a, o, o.currentTarget);
    }, n._onItemMouseLeave = function(o) {
      var i = n.props, a = i.item, s = i.onItemMouseLeave;
      s && s(a, o);
    }, n._onItemKeyDown = function(o) {
      var i = n.props, a = i.item, s = i.onItemKeyDown;
      s && s(a, o);
    }, n._onItemMouseMove = function(o) {
      var i = n.props, a = i.item, s = i.onItemMouseMove;
      s && s(a, o, o.currentTarget);
    }, n._getSubmenuTarget = function() {
    }, Eo(n), n;
  }
  return t.prototype.shouldComponentUpdate = function(r) {
    return !Qo(r, this.props);
  }, t;
}(oS.Component);
var dh = "ktp";
var af = "-";
var m9 = dh + af;
var ph = "data-ktp-target";
var mh = "data-ktp-execute-target";
var iS = "ktp-layer-id";
var Ur;
(function(e2) {
  e2.KEYTIP_ADDED = "keytipAdded", e2.KEYTIP_REMOVED = "keytipRemoved", e2.KEYTIP_UPDATED = "keytipUpdated", e2.PERSISTED_KEYTIP_ADDED = "persistedKeytipAdded", e2.PERSISTED_KEYTIP_REMOVED = "persistedKeytipRemoved", e2.PERSISTED_KEYTIP_EXECUTE = "persistedKeytipExecute", e2.ENTER_KEYTIP_MODE = "enterKeytipMode", e2.EXIT_KEYTIP_MODE = "exitKeytipMode";
})(Ur || (Ur = {}));
var aS = function() {
  function e2() {
    this.keytips = {}, this.persistedKeytips = {}, this.sequenceMapping = {}, this.inKeytipMode = false, this.shouldEnterKeytipMode = true, this.delayUpdatingKeytipChange = false;
  }
  return e2.getInstance = function() {
    return this._instance;
  }, e2.prototype.init = function(t) {
    this.delayUpdatingKeytipChange = t;
  }, e2.prototype.register = function(t, r) {
    r === void 0 && (r = false);
    var n = t;
    r || (n = this.addParentOverflow(t), this.sequenceMapping[n.keySequences.toString()] = n);
    var o = this._getUniqueKtp(n);
    if (r ? this.persistedKeytips[o.uniqueID] = o : this.keytips[o.uniqueID] = o, this.inKeytipMode || !this.delayUpdatingKeytipChange) {
      var i = r ? Ur.PERSISTED_KEYTIP_ADDED : Ur.KEYTIP_ADDED;
      fr.raise(this, i, { keytip: n, uniqueID: o.uniqueID });
    }
    return o.uniqueID;
  }, e2.prototype.update = function(t, r) {
    var n = this.addParentOverflow(t), o = this._getUniqueKtp(n, r), i = this.keytips[r];
    i && (o.keytip.visible = i.keytip.visible, this.keytips[r] = o, delete this.sequenceMapping[i.keytip.keySequences.toString()], this.sequenceMapping[o.keytip.keySequences.toString()] = o.keytip, (this.inKeytipMode || !this.delayUpdatingKeytipChange) && fr.raise(this, Ur.KEYTIP_UPDATED, { keytip: o.keytip, uniqueID: o.uniqueID }));
  }, e2.prototype.unregister = function(t, r, n) {
    n === void 0 && (n = false), n ? delete this.persistedKeytips[r] : delete this.keytips[r], !n && delete this.sequenceMapping[t.keySequences.toString()];
    var o = n ? Ur.PERSISTED_KEYTIP_REMOVED : Ur.KEYTIP_REMOVED;
    (this.inKeytipMode || !this.delayUpdatingKeytipChange) && fr.raise(this, o, { keytip: t, uniqueID: r });
  }, e2.prototype.enterKeytipMode = function() {
    fr.raise(this, Ur.ENTER_KEYTIP_MODE);
  }, e2.prototype.exitKeytipMode = function() {
    fr.raise(this, Ur.EXIT_KEYTIP_MODE);
  }, e2.prototype.getKeytips = function() {
    var t = this;
    return Object.keys(this.keytips).map(function(r) {
      return t.keytips[r].keytip;
    });
  }, e2.prototype.addParentOverflow = function(t) {
    var r = Pt(t.keySequences);
    if (r.pop(), r.length !== 0) {
      var n = this.sequenceMapping[r.toString()];
      if (n && n.overflowSetSequence)
        return _(_({}, t), { overflowSetSequence: n.overflowSetSequence });
    }
    return t;
  }, e2.prototype.menuExecute = function(t, r) {
    fr.raise(this, Ur.PERSISTED_KEYTIP_EXECUTE, { overflowButtonSequences: t, keytipSequences: r });
  }, e2.prototype._getUniqueKtp = function(t, r) {
    return r === void 0 && (r = Ft()), { keytip: _({}, t), uniqueID: r };
  }, e2._instance = new e2(), e2;
}();
function hh(e2) {
  return e2.reduce(function(t, r) {
    return t + af + r.split("").join(af);
  }, dh);
}
function sS(e2, t) {
  var r = t.length, n = Pt(t).pop(), o = Pt(e2);
  return vC(o, r - 1, n);
}
function uS(e2) {
  var t = " " + iS;
  return e2.length ? t + " " + hh(e2) : t;
}
var ru = N(L());
function lS(e2) {
  var t = ru.useRef(), r = e2.keytipProps ? _({ disabled: e2.disabled }, e2.keytipProps) : void 0, n = da(aS.getInstance()), o = Kc(e2);
  ru.useLayoutEffect(function() {
    t.current && r && (o?.keytipProps !== e2.keytipProps || o?.disabled !== e2.disabled) && n.update(r, t.current);
  }), ru.useLayoutEffect(function() {
    return r && (t.current = n.register(r)), function() {
      r && n.unregister(r, t.current);
    };
  }, []);
  var i = { ariaDescribedBy: void 0, keytipId: void 0 };
  return r && (i = MT(n, r, e2.ariaDescribedBy)), i;
}
function MT(e2, t, r) {
  var n = e2.addParentOverflow(t), o = an(r, uS(n.keySequences)), i = Pt(n.keySequences);
  n.overflowSetSequence && (i = sS(i, n.overflowSetSequence));
  var a = hh(i);
  return { ariaDescribedBy: o, keytipId: a };
}
var Rn = function(e2) {
  var t, r = e2.children, n = on(e2, ["children"]), o = lS(n), i = o.keytipId, a = o.ariaDescribedBy;
  return r((t = {}, t[ph] = i, t[mh] = i, t["aria-describedby"] = a, t));
};
var cS = function(e2) {
  _e(t, e2);
  function t() {
    var r = e2 !== null && e2.apply(this, arguments) || this;
    return r._anchor = Do.createRef(), r._getMemoizedMenuButtonKeytipProps = ee(function(n) {
      return _(_({}, n), { hasMenu: true });
    }), r._getSubmenuTarget = function() {
      return r._anchor.current ? r._anchor.current : void 0;
    }, r._onItemClick = function(n) {
      var o = r.props, i = o.item, a = o.onItemClick;
      a && a(i, n);
    }, r._renderAriaDescription = function(n, o) {
      return n ? Do.createElement("span", { id: r._ariaDescriptionId, className: o }, n) : null;
    }, r;
  }
  return t.prototype.render = function() {
    var r = this, n = this.props, o = n.item, i = n.classNames, a = n.index, s = n.focusableElementIndex, u = n.totalItemCount, l = n.hasCheckmarks, c = n.hasIcons, d = n.contextualMenuItemAs, p = d === void 0 ? In : d, v = n.expandedMenuItemKey, g = n.onItemClick, y = n.openSubMenu, f = n.dismissSubMenu, m = n.dismissMenu, h = o.rel;
    o.target && o.target.toLowerCase() === "_blank" && (h = h || "nofollow noopener noreferrer");
    var E = Zt(o), C = ve(o, Tc), x = Jt(o), S = o.itemProps, F = o.ariaDescription, w = o.keytipProps;
    w && E && (w = this._getMemoizedMenuButtonKeytipProps(w)), F && (this._ariaDescriptionId = Ft());
    var k = an(o.ariaDescribedBy, F ? this._ariaDescriptionId : void 0, C["aria-describedby"]), V = { "aria-describedby": k };
    return Do.createElement("div", null, Do.createElement(Rn, { keytipProps: o.keytipProps, ariaDescribedBy: k, disabled: x }, function(re) {
      return Do.createElement("a", _({}, V, C, re, { ref: r._anchor, href: o.href, target: o.target, rel: h, className: i.root, role: "menuitem", "aria-haspopup": E || void 0, "aria-expanded": E ? o.key === v : void 0, "aria-posinset": s + 1, "aria-setsize": u, "aria-disabled": Jt(o), style: o.style, onClick: r._onItemClick, onMouseEnter: r._onItemMouseEnter, onMouseLeave: r._onItemMouseLeave, onMouseMove: r._onItemMouseMove, onKeyDown: E ? r._onItemKeyDown : void 0 }), Do.createElement(p, _({ componentRef: o.componentRef, item: o, classNames: i, index: a, onCheckmarkClick: l && g ? g : void 0, hasIcons: c, openSubMenu: y, dismissSubMenu: f, dismissMenu: m, getSubmenuTarget: r._getSubmenuTarget }, S)), r._renderAriaDescription(F, i.screenReaderText));
    }));
  }, t;
}(Ca);
var oi = N(L());
var fS = function(e2) {
  _e(t, e2);
  function t() {
    var r = e2 !== null && e2.apply(this, arguments) || this;
    return r._btn = oi.createRef(), r._getMemoizedMenuButtonKeytipProps = ee(function(n) {
      return _(_({}, n), { hasMenu: true });
    }), r._renderAriaDescription = function(n, o) {
      return n ? oi.createElement("span", { id: r._ariaDescriptionId, className: o }, n) : null;
    }, r._getSubmenuTarget = function() {
      return r._btn.current ? r._btn.current : void 0;
    }, r;
  }
  return t.prototype.render = function() {
    var r = this, n = this.props, o = n.item, i = n.classNames, a = n.index, s = n.focusableElementIndex, u = n.totalItemCount, l = n.hasCheckmarks, c = n.hasIcons, d = n.contextualMenuItemAs, p = d === void 0 ? In : d, v = n.expandedMenuItemKey, g = n.onItemMouseDown, y = n.onItemClick, f = n.openSubMenu, m = n.dismissSubMenu, h = n.dismissMenu, E = wo(o), C = E !== null, x = Zc(o), S = Zt(o), F = o.itemProps, w = o.ariaLabel, k = o.ariaDescription, V = ve(o, ln);
    delete V.disabled;
    var re = o.role || x;
    k && (this._ariaDescriptionId = Ft());
    var fe = an(o.ariaDescribedBy, k ? this._ariaDescriptionId : void 0, V["aria-describedby"]), De = { className: i.root, onClick: this._onItemClick, onKeyDown: S ? this._onItemKeyDown : void 0, onMouseEnter: this._onItemMouseEnter, onMouseLeave: this._onItemMouseLeave, onMouseDown: function(de) {
      return g ? g(o, de) : void 0;
    }, onMouseMove: this._onItemMouseMove, href: o.href, title: o.title, "aria-label": w, "aria-describedby": fe, "aria-haspopup": S || void 0, "aria-expanded": S ? o.key === v : void 0, "aria-posinset": s + 1, "aria-setsize": u, "aria-disabled": Jt(o), "aria-checked": (re === "menuitemcheckbox" || re === "menuitemradio") && C ? !!E : void 0, "aria-selected": re === "menuitem" && C ? !!E : void 0, role: re, style: o.style }, ze = o.keytipProps;
    return ze && S && (ze = this._getMemoizedMenuButtonKeytipProps(ze)), oi.createElement(Rn, { keytipProps: ze, ariaDescribedBy: fe, disabled: Jt(o) }, function(de) {
      return oi.createElement("button", _({ ref: r._btn }, V, De, de), oi.createElement(p, _({ componentRef: o.componentRef, item: o, classNames: i, index: a, onCheckmarkClick: l && y ? y : void 0, hasIcons: c, openSubMenu: f, dismissSubMenu: m, dismissMenu: h, getSubmenuTarget: r._getSubmenuTarget }, F)), r._renderAriaDescription(k, i.screenReaderText));
    });
  }, t;
}(Ca);
var An = N(L());
var dS = function(e2) {
  var t = e2.theme, r = e2.getClassNames, n = e2.className;
  if (!t)
    throw new Error("Theme is undefined or null.");
  if (r) {
    var o = r(t);
    return { wrapper: [o.wrapper], divider: [o.divider] };
  }
  return { wrapper: [{ display: "inline-flex", height: "100%", alignItems: "center" }, n], divider: [{ width: 1, height: "100%", backgroundColor: t.palette.neutralTertiaryAlt }] };
};
var nu = N(L());
var BT = Lt();
var vh = nu.forwardRef(function(e2, t) {
  var r = e2.styles, n = e2.theme, o = e2.getClassNames, i = e2.className, a = BT(r, { theme: n, getClassNames: o, className: i });
  return nu.createElement("span", { className: a.wrapper, ref: t }, nu.createElement("span", { className: a.divider }));
});
vh.displayName = "VerticalDividerBase";
var pS = xt(vh, dS, void 0, { scope: "VerticalDivider" });
var NT = 500;
var mS = function(e2) {
  _e(t, e2);
  function t(r) {
    var n = e2.call(this, r) || this;
    return n._getMemoizedMenuButtonKeytipProps = ee(function(o) {
      return _(_({}, o), { hasMenu: true });
    }), n._onItemKeyDown = function(o) {
      var i = n.props, a = i.item, s = i.onItemKeyDown;
      o.which === H.enter ? (n._executeItemClick(o), o.preventDefault(), o.stopPropagation()) : s && s(a, o);
    }, n._getSubmenuTarget = function() {
      return n._splitButton;
    }, n._renderAriaDescription = function(o, i) {
      return o ? An.createElement("span", { id: n._ariaDescriptionId, className: i }, o) : null;
    }, n._onItemMouseEnterPrimary = function(o) {
      var i = n.props, a = i.item, s = i.onItemMouseEnter;
      s && s(_(_({}, a), { subMenuProps: void 0, items: void 0 }), o, n._splitButton);
    }, n._onItemMouseEnterIcon = function(o) {
      var i = n.props, a = i.item, s = i.onItemMouseEnter;
      s && s(a, o, n._splitButton);
    }, n._onItemMouseMovePrimary = function(o) {
      var i = n.props, a = i.item, s = i.onItemMouseMove;
      s && s(_(_({}, a), { subMenuProps: void 0, items: void 0 }), o, n._splitButton);
    }, n._onItemMouseMoveIcon = function(o) {
      var i = n.props, a = i.item, s = i.onItemMouseMove;
      s && s(a, o, n._splitButton);
    }, n._onIconItemClick = function(o) {
      var i = n.props, a = i.item, s = i.onItemClickBase;
      s && s(a, o, n._splitButton ? n._splitButton : o.currentTarget);
    }, n._executeItemClick = function(o) {
      var i = n.props, a = i.item, s = i.executeItemClick, u = i.onItemClick;
      if (!(a.disabled || a.isDisabled)) {
        if (n._processingTouch && u)
          return u(a, o);
        s && s(a, o);
      }
    }, n._onTouchStart = function(o) {
      n._splitButton && !("onpointerdown" in n._splitButton) && n._handleTouchAndPointerEvent(o);
    }, n._onPointerDown = function(o) {
      o.pointerType === "touch" && (n._handleTouchAndPointerEvent(o), o.preventDefault(), o.stopImmediatePropagation());
    }, n._async = new ho(n), n._events = new fr(n), n;
  }
  return t.prototype.componentDidMount = function() {
    this._splitButton && "onpointerdown" in this._splitButton && this._events.on(this._splitButton, "pointerdown", this._onPointerDown, true);
  }, t.prototype.componentWillUnmount = function() {
    this._async.dispose(), this._events.dispose();
  }, t.prototype.render = function() {
    var r = this, n = this.props, o = n.item, i = n.classNames, a = n.index, s = n.focusableElementIndex, u = n.totalItemCount, l = n.hasCheckmarks, c = n.hasIcons, d = n.onItemMouseLeave, p = n.expandedMenuItemKey, v = Zt(o), g = o.keytipProps;
    g && (g = this._getMemoizedMenuButtonKeytipProps(g));
    var y = o.ariaDescription;
    return y && (this._ariaDescriptionId = Ft()), An.createElement(Rn, { keytipProps: g, disabled: Jt(o) }, function(f) {
      return An.createElement("div", { "data-ktp-target": f["data-ktp-target"], ref: function(m) {
        return r._splitButton = m;
      }, role: Zc(o), "aria-label": o.ariaLabel, className: i.splitContainer, "aria-disabled": Jt(o), "aria-expanded": v ? o.key === p : void 0, "aria-haspopup": true, "aria-describedby": an(o.ariaDescribedBy, y ? r._ariaDescriptionId : void 0, f["aria-describedby"]), "aria-checked": o.isChecked || o.checked, "aria-posinset": s + 1, "aria-setsize": u, onMouseEnter: r._onItemMouseEnterPrimary, onMouseLeave: d ? d.bind(r, _(_({}, o), { subMenuProps: null, items: null })) : void 0, onMouseMove: r._onItemMouseMovePrimary, onKeyDown: r._onItemKeyDown, onClick: r._executeItemClick, onTouchStart: r._onTouchStart, tabIndex: 0, "data-is-focusable": true, "aria-roledescription": o["aria-roledescription"] }, r._renderSplitPrimaryButton(o, i, a, l, c), r._renderSplitDivider(o), r._renderSplitIconButton(o, i, a, f), r._renderAriaDescription(y, i.screenReaderText));
    });
  }, t.prototype._renderSplitPrimaryButton = function(r, n, o, i, a) {
    var s = this.props, u = s.contextualMenuItemAs, l = u === void 0 ? In : u, c = s.onItemClick, d = { key: r.key, disabled: Jt(r) || r.primaryDisabled, name: r.name, text: r.text || r.name, secondaryText: r.secondaryText, className: n.splitPrimary, canCheck: r.canCheck, isChecked: r.isChecked, checked: r.checked, iconProps: r.iconProps, onRenderIcon: r.onRenderIcon, data: r.data, "data-is-focusable": false }, p = r.itemProps;
    return An.createElement("button", _({}, ve(d, ln)), An.createElement(l, _({ "data-is-focusable": false, item: d, classNames: n, index: o, onCheckmarkClick: i && c ? c : void 0, hasIcons: a }, p)));
  }, t.prototype._renderSplitDivider = function(r) {
    var n = r.getSplitButtonVerticalDividerClassNames || nS;
    return An.createElement(pS, { getClassNames: n });
  }, t.prototype._renderSplitIconButton = function(r, n, o, i) {
    var a = this.props, s = a.contextualMenuItemAs, u = s === void 0 ? In : s, l = a.onItemMouseLeave, c = a.onItemMouseDown, d = a.openSubMenu, p = a.dismissSubMenu, v = a.dismissMenu, g = { onClick: this._onIconItemClick, disabled: Jt(r), className: n.splitMenu, subMenuProps: r.subMenuProps, submenuIconProps: r.submenuIconProps, split: true, key: r.key }, y = _(_({}, ve(g, ln)), { onMouseEnter: this._onItemMouseEnterIcon, onMouseLeave: l ? l.bind(this, r) : void 0, onMouseDown: function(m) {
      return c ? c(r, m) : void 0;
    }, onMouseMove: this._onItemMouseMoveIcon, "data-is-focusable": false, "data-ktp-execute-target": i["data-ktp-execute-target"], "aria-hidden": true }), f = r.itemProps;
    return An.createElement("button", _({}, y), An.createElement(u, _({ componentRef: r.componentRef, item: g, classNames: n, index: o, hasIcons: false, openSubMenu: d, dismissSubMenu: p, dismissMenu: v, getSubmenuTarget: this._getSubmenuTarget }, f)));
  }, t.prototype._handleTouchAndPointerEvent = function(r) {
    var n = this, o = this.props.onTap;
    o && o(r), this._lastTouchTimeoutId && (this._async.clearTimeout(this._lastTouchTimeoutId), this._lastTouchTimeoutId = void 0), this._processingTouch = true, this._lastTouchTimeoutId = this._async.setTimeout(function() {
      n._processingTouch = false, n._lastTouchTimeoutId = void 0;
    }, NT);
  }, t;
}(Ca);
var _a = N(L());
var LT = N(L());
var Sa;
(function(e2) {
  e2[e2.small = 0] = "small", e2[e2.medium = 1] = "medium", e2[e2.large = 2] = "large", e2[e2.xLarge = 3] = "xLarge", e2[e2.xxLarge = 4] = "xxLarge", e2[e2.xxxLarge = 5] = "xxxLarge", e2[e2.unknown = 999] = "unknown";
})(Sa || (Sa = {}));
var OT = [479, 639, 1023, 1365, 1919, 99999999];
var ou;
var hS;
function gh() {
  var e2;
  return (e2 = ou ?? hS) !== null && e2 !== void 0 ? e2 : Sa.large;
}
function vS(e2) {
  var t = Sa.small;
  if (e2) {
    try {
      for (; e2.innerWidth > OT[t]; )
        t++;
    } catch {
      t = gh();
    }
    hS = t;
  } else if (ou !== void 0)
    t = ou;
  else
    throw new Error("Content was rendered in a server environment without providing a default responsive mode. Call setResponsiveMode to define what the responsive mode is.");
  return t;
}
var gS = function(e2, t) {
  var r = _a.useState(gh()), n = r[0], o = r[1], i = _a.useCallback(function() {
    var s = vS(q(e2.current));
    n !== s && o(s);
  }, [e2, n]), a = ma();
  return bo(a, "resize", i), _a.useEffect(function() {
    t === void 0 && i();
  }, [t]), t ?? n;
};
var yh = N(L());
var yS = yh.createContext({});
var zT = Lt();
var HT = Lt();
var VT = { items: [], shouldFocusOnMount: true, gapSpace: 0, directionalHint: Me.bottomAutoEdge, beakWidth: 16 };
function SS(e2) {
  return e2.subMenuProps ? e2.subMenuProps.items : e2.items;
}
function WT(e2) {
  return e2.some(function(t) {
    return !!(t.canCheck || t.sectionProps && t.sectionProps.items.some(function(r) {
      return r.canCheck === true;
    }));
  });
}
var _S = 250;
var Eh = "ContextualMenu";
var UT = ee(function() {
  for (var e2 = [], t = 0; t < arguments.length; t++)
    e2[t] = arguments[t];
  return function(r) {
    return oa.apply(void 0, Pt([r, of], e2));
  };
});
function jT(e2, t) {
  var r = e2.hidden, n = r === void 0 ? false : r, o = e2.onMenuDismissed, i = e2.onMenuOpened, a = Kc(n), s = z.useRef(i), u = z.useRef(o), l = z.useRef(e2);
  s.current = i, u.current = o, l.current = e2, z.useEffect(function() {
    var c, d;
    n && a === false ? (c = u.current) === null || c === void 0 || c.call(u, l.current) : !n && a !== false && ((d = s.current) === null || d === void 0 || d.call(s, l.current));
  }, [n, a]), z.useEffect(function() {
    return function() {
      var c;
      return (c = u.current) === null || c === void 0 ? void 0 : c.call(u, l.current);
    };
  }, []);
}
function $T(e2, t) {
  var r = e2.hidden, n = e2.items, o = e2.theme, i = e2.className, a = e2.id, s = z.useState(), u = s[0], l = s[1], c = z.useState(), d = c[0], p = c[1], v = z.useState(), g = v[0], y = v[1], f = jm(Eh, a), m = z.useCallback(function() {
    y(void 0), l(void 0), p(void 0);
  }, []), h = z.useCallback(function(x, S, F) {
    var w = x.key;
    u !== w && (S.focus(), y(F), l(w), p(S));
  }, [u]);
  z.useEffect(function() {
    r && m();
  }, [r, m]);
  var E = QT(t, m), C = function() {
    var x = FS(u, n), S = null;
    return x && (S = { items: SS(x), target: d, onDismiss: E, isSubMenu: true, id: f, shouldFocusOnMount: true, shouldFocusOnContainer: g, directionalHint: Xe(o) ? Me.leftTopEdge : Me.rightTopEdge, className: i, gapSpace: 0, isBeakVisible: false }, x.subMenuProps && Nr(S, x.subMenuProps)), S;
  };
  return [u, h, C, E];
}
function KT(e2) {
  var t = e2.delayUpdateFocusOnHover, r = e2.hidden, n = z.useRef(!t), o = z.useRef(false);
  z.useEffect(function() {
    n.current = !t, o.current = r ? false : !t && o.current;
  }, [t, r]);
  var i = z.useCallback(function() {
    t && (n.current = true);
  }, [t]);
  return [n, o, i];
}
function GT(e2, t) {
  var r = e2.hidden, n = e2.onRestoreFocus, o = z.useRef(), i = z.useCallback(function(a) {
    var s, u;
    n ? n(a) : a?.documentContainsFocus && ((u = (s = o.current) === null || s === void 0 ? void 0 : s.focus) === null || u === void 0 || u.call(s));
  }, [n]);
  return z.useLayoutEffect(function() {
    var a;
    r ? o.current && (i({ originalElement: o.current, containsFocus: true, documentContainsFocus: ((a = Ge()) === null || a === void 0 ? void 0 : a.hasFocus()) || false }), o.current = void 0) : o.current = t?.document.activeElement;
  }, [r, t?.document.activeElement, i]), [i];
}
function qT(e2, t, r, n) {
  var o = e2.theme, i = e2.isSubMenu, a = e2.focusZoneProps, s = a === void 0 ? {} : a, u = s.checkForNoWrap, l = s.direction, c = l === void 0 ? vt.vertical : l, d = z.useRef(), p = function(C, x, S) {
    var F = false;
    return x(C) && (t(C, S), C.preventDefault(), C.stopPropagation(), F = true), F;
  }, v = function(C) {
    var x = Xe(o) ? H.right : H.left;
    return C.which !== x || !i ? false : !!(c === vt.vertical || u && !Sc(C.target, "data-no-horizontal-wrap"));
  }, g = function(C) {
    return C.which === H.escape || v(C) || C.which === H.up && (C.altKey || C.metaKey);
  }, y = function(C) {
    d.current = ES(C);
    var x = C.which === H.escape && (Pm() || Rm());
    return p(C, g, x);
  }, f = function(C) {
    var x = d.current && ES(C);
    return d.current = false, !!x && !(Rm() || Pm());
  }, m = function(C) {
    return p(C, f, true);
  }, h = function(C) {
    var x = y(C);
    if (!(x || !r.current)) {
      var S = !!(C.altKey || C.metaKey), F = C.which === H.up, w = C.which === H.down;
      if (!S && (F || w)) {
        var k = F ? _C(r.current, r.current.lastChild, true) : SC(r.current, r.current.firstChild, true);
        k && (k.focus(), C.preventDefault(), C.stopPropagation());
      }
    }
  }, E = function(C, x) {
    var S = Xe(o) ? H.left : H.right;
    !C.disabled && (x.which === S || x.which === H.enter || x.which === H.down && (x.altKey || x.metaKey)) && (n(C, x.currentTarget, false), x.preventDefault());
  };
  return [y, m, h, E];
}
function YT(e2) {
  var t = z.useRef(true), r = z.useRef(), n = function() {
    !t.current && r.current !== void 0 ? (e2.clearTimeout(r.current), r.current = void 0) : t.current = false, r.current = e2.setTimeout(function() {
      t.current = true;
    }, _S);
  };
  return [n, t];
}
function QT(e2, t) {
  var r = z.useRef(false);
  z.useEffect(function() {
    return r.current = true, function() {
      r.current = false;
    };
  }, []);
  var n = function(o, i) {
    i ? e2(o, i) : r.current && t();
  };
  return n;
}
function XT(e2, t) {
  var r = e2.subMenuHoverDelay, n = r === void 0 ? _S : r, o = z.useRef(void 0), i = function() {
    o.current !== void 0 && (t.clearTimeout(o.current), o.current = void 0);
  }, a = function(s) {
    o.current = t.setTimeout(function() {
      s(), i();
    }, n);
  };
  return [i, a, o];
}
function ZT(e2, t, r, n, o, i, a, s, u, l, c, d, p) {
  var v = function(S, F, w) {
    y() || m(S, F, w);
  }, g = function(S, F, w) {
    var k = F.currentTarget;
    if (o.current)
      i.current = true;
    else
      return;
    !t.current || r.current !== void 0 || k === n?.document.activeElement || m(S, F, w);
  }, y = function() {
    return !t.current || !i.current;
  }, f = function(S, F) {
    var w;
    if (!y() && (l(), a === void 0))
      if (s.current.setActive)
        try {
          s.current.setActive();
        } catch {
        }
      else
        (w = s.current) === null || w === void 0 || w.focus();
  }, m = function(S, F, w) {
    var k = w || F.currentTarget;
    S.key !== a && (l(), a === void 0 && k.focus(), Zt(S) ? (F.stopPropagation(), u(function() {
      k.focus(), c(S, k, true);
    })) : u(function() {
      d(F), k.focus();
    }));
  }, h = function(S, F) {
    E(S, F, F.currentTarget);
  }, E = function(S, F, w) {
    var k = SS(S);
    l(), !Zt(S) && (!k || !k.length) ? x(S, F) : S.key !== a && c(S, w, F.nativeEvent.detail !== 0 || F.nativeEvent.pointerType === "mouse"), F.stopPropagation(), F.preventDefault();
  }, C = function(S, F) {
    x(S, F), F.stopPropagation();
  }, x = function(S, F) {
    if (!(S.disabled || S.isDisabled)) {
      var w = false;
      S.onClick ? w = !!S.onClick(F, S) : e2.onItemClick && (w = !!e2.onItemClick(F, S)), (w || !F.defaultPrevented) && p(F, true);
    }
  };
  return [v, g, f, h, C, x, E];
}
var Ch = z.memo(z.forwardRef(function(e2, t) {
  var r, n, o = Rc(VT, e2), i = o.ref, a = on(o, ["ref"]), s = z.useRef(null), u = wn(), l = jm(Eh, a.id);
  _1({ name: Eh, props: a, deprecations: { getMenuClassNames: "styles" } });
  var c = function(R, G) {
    var pe;
    return (pe = a.onDismiss) === null || pe === void 0 ? void 0 : pe.call(a, R, G);
  }, d = Gc(a.target, s), p = d[0], v = d[1], g = GT(a, v)[0], y = $T(a, c), f = y[0], m = y[1], h = y[2], E = y[3], C = KT(a), x = C[0], S = C[1], F = C[2], w = YT(u), k = w[0], V = w[1], re = XT(a, u), fe = re[0], De = re[1], ze = re[2], de = gS(s, a.responsiveMode);
  jT(a, v);
  var wt = qT(a, c, s, m), He = wt[0], Be = wt[1], nr = wt[2], Ut = wt[3], Fe = ZT(a, V, ze, v, x, S, f, s, De, fe, m, E, c), P = Fe[0], A = Fe[1], B = Fe[2], W = Fe[3], b = Fe[4], Z = Fe[5], T = Fe[6], Ce = function(R, G, pe) {
    var ye = 0, kt = R.items, $t = R.totalItemCount, me = R.hasCheckmarks, ir = R.hasIcons;
    return z.createElement("ul", { className: G.list, onKeyDown: He, onKeyUp: Be, role: "presentation" }, kt.map(function(Le, ar) {
      var Kr = J(Le, ar, ye, $t, me, ir, G);
      if (Le.itemType !== Wt.Divider && Le.itemType !== Wt.Header) {
        var To = Le.customOnRenderListLength ? Le.customOnRenderListLength : 1;
        ye += To;
      }
      return Kr;
    }));
  }, te = function(R, G) {
    var pe = a.focusZoneAs, ye = pe === void 0 ? k1 : pe;
    return z.createElement(ye, _({}, G), R);
  }, J = function(R, G, pe, ye, kt, $t, me) {
    var ir, Le = [], ar = R.iconProps || { iconName: "None" }, Kr = R.getItemClassNames, To = R.itemProps, uu = To ? To.styles : void 0, lu = R.itemType === Wt.Divider ? R.className : void 0, ka = R.submenuIconProps ? R.submenuIconProps.className : "", dn;
    if (Kr)
      dn = Kr(a.theme, Jt(R), f === R.key, !!wo(R), !!R.href, ar.iconName !== "None", R.className, lu, ar.className, ka, R.primaryDisabled);
    else {
      var L_ = { theme: a.theme, disabled: Jt(R), expanded: f === R.key, checked: !!wo(R), isAnchorLink: !!R.href, knownIcon: ar.iconName !== "None", itemClassName: R.className, dividerClassName: lu, iconClassName: ar.className, subMenuClassName: ka, primaryDisabled: R.primaryDisabled };
      dn = HT(UT((ir = me.subComponentStyles) === null || ir === void 0 ? void 0 : ir.menuItem, uu), L_);
    }
    switch ((R.text === "-" || R.name === "-") && (R.itemType = Wt.Divider), R.itemType) {
      case Wt.Divider:
        Le.push(X(G, dn));
        break;
      case Wt.Header:
        Le.push(X(G, dn));
        var O_ = ne(R, dn, me, G, kt, $t);
        Le.push(nt(O_, R.key || G, dn, R.title));
        break;
      case Wt.Section:
        Le.push(Je(R, dn, me, G, kt, $t));
        break;
      default:
        var z_ = ot(R, dn, G, pe, ye, kt, $t);
        Le.push(nt(z_, R.key || G, dn, R.title));
        break;
    }
    return z.createElement(z.Fragment, { key: R.key }, Le);
  }, K = function(R, G) {
    var pe = R.index, ye = R.focusableElementIndex, kt = R.totalItemCount, $t = R.hasCheckmarks, me = R.hasIcons;
    return J(R, pe, ye, kt, $t, me, G);
  }, Je = function(R, G, pe, ye, kt, $t) {
    var me = R.sectionProps;
    if (!!me) {
      var ir, Le;
      if (me.title) {
        var ar = void 0, Kr = "";
        if (typeof me.title == "string") {
          var To = l + me.title.replace(/\s/g, "");
          ar = { key: "section-" + me.title + "-title", itemType: Wt.Header, text: me.title, id: To }, Kr = To;
        } else {
          var uu = me.title.id || l + me.title.key.replace(/\s/g, "");
          ar = _(_({}, me.title), { id: uu }), Kr = uu;
        }
        ar && (Le = { role: "group", "aria-labelledby": Kr }, ir = ne(ar, G, pe, ye, kt, $t));
      }
      if (me.items && me.items.length > 0)
        return z.createElement("li", { role: "presentation", key: me.key || R.key || "section-" + ye }, z.createElement("div", _({}, Le), z.createElement("ul", { className: pe.list, role: "presentation" }, me.topDivider && X(ye, G, true, true), ir && nt(ir, R.key || ye, G, R.title), me.items.map(function(lu, ka) {
          return J(lu, ka, ka, me.items.length, kt, $t, pe);
        }), me.bottomDivider && X(ye, G, false, true))));
    }
  }, nt = function(R, G, pe, ye) {
    return z.createElement("li", { role: "presentation", title: ye, key: G, className: pe.item }, R);
  }, X = function(R, G, pe, ye) {
    return ye || R > 0 ? z.createElement("li", { role: "separator", key: "separator-" + R + (pe === void 0 ? "" : pe ? "-top" : "-bottom"), className: G.divider, "aria-hidden": "true" }) : null;
  }, ot = function(R, G, pe, ye, kt, $t, me) {
    if (R.onRender)
      return R.onRender(_({ "aria-posinset": ye + 1, "aria-setsize": kt }, R), c);
    var ir = a.contextualMenuItemAs, Le = { item: R, classNames: G, index: pe, focusableElementIndex: ye, totalItemCount: kt, hasCheckmarks: $t, hasIcons: me, contextualMenuItemAs: ir, onItemMouseEnter: P, onItemMouseLeave: B, onItemMouseMove: A, onItemMouseDown: JT, executeItemClick: Z, onItemKeyDown: Ut, expandedMenuItemKey: f, openSubMenu: m, dismissSubMenu: E, dismissMenu: c };
    return R.href ? z.createElement(cS, _({}, Le, { onItemClick: b })) : R.split && Zt(R) ? z.createElement(mS, _({}, Le, { onItemClick: W, onItemClickBase: T, onTap: fe })) : z.createElement(fS, _({}, Le, { onItemClick: W, onItemClickBase: T }));
  }, ne = function(R, G, pe, ye, kt, $t) {
    var me = a.contextualMenuItemAs, ir = me === void 0 ? In : me, Le = R.itemProps, ar = R.id, Kr = Le && ve(Le, yo);
    return z.createElement("div", _({ id: ar, className: pe.header }, Kr, { style: R.style }), z.createElement(ir, _({ item: R, classNames: G, index: ye, onCheckmarkClick: kt ? W : void 0, hasIcons: $t }, Le)));
  }, Ve = a.isBeakVisible, jt = a.items, Ye = a.labelElementId, ai = a.id, Mn = a.className, or = a.beakWidth, U = a.directionalHint, Ne = a.directionalHintForRTL, ba = a.alignTargetEdge, wa = a.gapSpace, $r = a.coverTarget, wh = a.ariaLabel, S_ = a.doNotLayer, __ = a.target, F_ = a.bounds, kh = a.useTargetWidth, Dh = a.useTargetAsMinWidth, x_ = a.directionalHintFixed, b_ = a.shouldFocusOnMount, w_ = a.shouldFocusOnContainer, Th = a.title, k_ = a.styles, Ih = a.theme, cf = a.calloutProps, Rh = a.onRenderSubMenu, D_ = Rh === void 0 ? CS : Rh, Ah = a.onRenderMenuList, T_ = Ah === void 0 ? function(R, G) {
    return Ce(R, Bn, G);
  } : Ah, I_ = a.focusZoneProps, Ph = a.getMenuClassNames, Bn = Ph ? Ph(Ih, Mn) : zT(k_, { theme: Ih, className: Mn }), R_ = Mh(jt);
  function Mh(R) {
    for (var G = 0, pe = R; G < pe.length; G++) {
      var ye = pe[G];
      if (ye.iconProps || ye.itemType === Wt.Section && ye.sectionProps && Mh(ye.sectionProps.items))
        return true;
    }
    return false;
  }
  var A_ = _(_({}, I_), { className: Bn.root, isCircularNavigation: true, handleTabKey: Ys.all, direction: (n = (r = a.focusZoneProps) === null || r === void 0 ? void 0 : r.direction) !== null && n !== void 0 ? n : vt.vertical }), P_ = WT(jt), Bh = f && a.hidden !== true ? h() : null;
  Ve = Ve === void 0 ? de <= Sa.medium : Ve;
  var ff, df = p.current;
  if ((kh || Dh) && df && df.offsetWidth) {
    var M_ = df.getBoundingClientRect(), Nh = M_.width - 2;
    kh ? ff = { width: Nh } : Dh && (ff = { minWidth: Nh });
  }
  if (jt && jt.length > 0) {
    for (var Lh = 0, pf = 0, Oh = jt; pf < Oh.length; pf++) {
      var su = Oh[pf];
      if (su.itemType !== Wt.Divider && su.itemType !== Wt.Header) {
        var B_ = su.customOnRenderListLength ? su.customOnRenderListLength : 1;
        Lh += B_;
      }
    }
    var N_ = Bn.subComponentStyles ? Bn.subComponentStyles.callout : void 0;
    return z.createElement(yS.Consumer, null, function(R) {
      return z.createElement(fh, _({ styles: N_, onRestoreFocus: g }, cf, { target: __ || R.target, isBeakVisible: Ve, beakWidth: or, directionalHint: U, directionalHintForRTL: Ne, gapSpace: wa, coverTarget: $r, doNotLayer: S_, className: Ot("ms-ContextualMenu-Callout", cf && cf.className), setInitialFocus: b_, onDismiss: a.onDismiss || R.onDismiss, onScroll: k, bounds: F_, directionalHintFixed: x_, alignTargetEdge: ba, hidden: a.hidden || R.hidden, ref: t }), z.createElement("div", { style: ff, ref: s, id: ai, className: Bn.container, tabIndex: w_ ? 0 : -1, onKeyDown: nr, onKeyUp: Be, onFocusCapture: F, "aria-label": wh, "aria-labelledby": Ye, role: "menu" }, Th && z.createElement("div", { className: Bn.title }, " ", Th, " "), jt && jt.length ? te(T_({ ariaLabel: wh, items: jt, totalItemCount: Lh, hasCheckmarks: P_, hasIcons: R_, defaultMenuItemRenderer: function(G) {
        return K(G, Bn);
      }, labelElementId: Ye }, function(G, pe) {
        return Ce(G, Bn, pe);
      }), A_) : null, Bh && D_(Bh, CS)));
    });
  } else
    return null;
}), function(e2, t) {
  return !t.shouldUpdateWhenHidden && e2.hidden && t.hidden ? true : Qo(e2, t);
});
Ch.displayName = "ContextualMenuBase";
function ES(e2) {
  return e2.which === H.alt || e2.key === "Meta";
}
function JT(e2, t) {
  var r;
  (r = e2.onMouseDown) === null || r === void 0 || r.call(e2, e2, t);
}
function CS(e2, t) {
  throw Error("ContextualMenuBase: onRenderSubMenu callback is null or undefined. Please ensure to set `onRenderSubMenu` property either manually or with `styled` helper.");
}
function FS(e2, t) {
  for (var r = 0, n = t; r < n.length; r++) {
    var o = n[r];
    if (o.itemType === Wt.Section && o.sectionProps) {
      var i = FS(e2, o.sectionProps.items);
      if (i)
        return i;
    } else if (o.key && o.key === e2)
      return o;
  }
}
var eI = { root: "ms-ContextualMenu", container: "ms-ContextualMenu-container", list: "ms-ContextualMenu-list", header: "ms-ContextualMenu-header", title: "ms-ContextualMenu-title", isopen: "is-open" };
var xS = function(e2) {
  var t = e2.className, r = e2.theme, n = Ht(eI, r), o = r.fonts, i = r.semanticColors, a = r.effects;
  return { root: [r.fonts.medium, n.root, n.isopen, { backgroundColor: i.menuBackground, minWidth: "180px" }, t], container: [n.container, { selectors: { ":focus": { outline: 0 } } }], list: [n.list, n.isopen, { listStyleType: "none", margin: "0", padding: "0" }], header: [n.header, o.small, { fontWeight: le.semibold, color: i.menuHeader, background: "none", backgroundColor: "transparent", border: "none", height: Tn, lineHeight: Tn, cursor: "default", padding: "0px 6px", userSelect: "none", textAlign: "left" }], title: [n.title, { fontSize: o.mediumPlus.fontSize, paddingRight: "14px", paddingLeft: "14px", paddingBottom: "5px", paddingTop: "5px", backgroundColor: i.menuItemBackgroundPressed }], subComponentStyles: { callout: { root: { boxShadow: a.elevation8 } }, menuItem: {} } };
};
function tI(e2) {
  return bS.createElement(wS, _({}, e2));
}
var wS = xt(Ch, xS, function() {
  return { onRenderSubMenu: tI };
}, { scope: "ContextualMenu" });
var Sh = wS;
Sh.displayName = "ContextualMenu";
var kS = { msButton: "ms-Button", msButtonHasMenu: "ms-Button--hasMenu", msButtonIcon: "ms-Button-icon", msButtonMenuIcon: "ms-Button-menuIcon", msButtonLabel: "ms-Button-label", msButtonDescription: "ms-Button-description", msButtonScreenReaderText: "ms-Button-screenReaderText", msButtonFlexContainer: "ms-Button-flexContainer", msButtonTextContainer: "ms-Button-textContainer" };
var DS = ee(function(e2, t, r, n, o, i, a, s, u, l, c) {
  var d, p, v = Ht(kS, e2 || {}), g = l && !c;
  return Br({ root: [v.msButton, t.root, n, u && ["is-checked", t.rootChecked], g && ["is-expanded", t.rootExpanded, { selectors: (d = {}, d[":hover ." + v.msButtonIcon] = t.iconExpandedHovered, d[":hover ." + v.msButtonMenuIcon] = t.menuIconExpandedHovered || t.rootExpandedHovered, d[":hover"] = t.rootExpandedHovered, d) }], s && [kS.msButtonHasMenu, t.rootHasMenu], a && ["is-disabled", t.rootDisabled], !a && !g && !u && { selectors: (p = { ":hover": t.rootHovered }, p[":hover ." + v.msButtonLabel] = t.labelHovered, p[":hover ." + v.msButtonIcon] = t.iconHovered, p[":hover ." + v.msButtonDescription] = t.descriptionHovered, p[":hover ." + v.msButtonMenuIcon] = t.menuIconHovered, p[":focus"] = t.rootFocused, p[":active"] = t.rootPressed, p[":active ." + v.msButtonIcon] = t.iconPressed, p[":active ." + v.msButtonDescription] = t.descriptionPressed, p[":active ." + v.msButtonMenuIcon] = t.menuIconPressed, p) }, a && u && [t.rootCheckedDisabled], !a && u && { selectors: { ":hover": t.rootCheckedHovered, ":active": t.rootCheckedPressed } }, r], flexContainer: [v.msButtonFlexContainer, t.flexContainer], textContainer: [v.msButtonTextContainer, t.textContainer], icon: [v.msButtonIcon, o, t.icon, g && t.iconExpanded, u && t.iconChecked, a && t.iconDisabled], label: [v.msButtonLabel, t.label, u && t.labelChecked, a && t.labelDisabled], menuIcon: [v.msButtonMenuIcon, i, t.menuIcon, u && t.menuIconChecked, a && !c && t.menuIconDisabled, !a && !g && !u && { selectors: { ":hover": t.menuIconHovered, ":active": t.menuIconPressed } }, g && ["is-expanded", t.menuIconExpanded]], description: [v.msButtonDescription, t.description, u && t.descriptionChecked, a && t.descriptionDisabled], screenReaderText: [v.msButtonScreenReaderText, t.screenReaderText] });
});
var TS = ee(function(e2, t, r, n, o) {
  return { root: _t(e2.splitButtonMenuButton, r && [e2.splitButtonMenuButtonExpanded], t && [e2.splitButtonMenuButtonDisabled], n && !t && [e2.splitButtonMenuButtonChecked], o && !t && [{ selectors: { ":focus": e2.splitButtonMenuFocused } }]), splitButtonContainer: _t(e2.splitButtonContainer, !t && n && [e2.splitButtonContainerChecked, { selectors: { ":hover": e2.splitButtonContainerCheckedHovered } }], !t && !n && [{ selectors: { ":hover": e2.splitButtonContainerHovered, ":focus": e2.splitButtonContainerFocused } }], t && e2.splitButtonContainerDisabled), icon: _t(e2.splitButtonMenuIcon, t && e2.splitButtonMenuIconDisabled, !t && o && e2.splitButtonMenuIcon), flexContainer: _t(e2.splitButtonFlexContainer), divider: _t(e2.splitButtonDivider, (o || t) && e2.splitButtonDividerDisabled) };
});
var rI = 500;
var IS = "BaseButton";
var RS = function(e2) {
  _e(t, e2);
  function t(r) {
    var n = e2.call(this, r) || this;
    return n._buttonElement = ge.createRef(), n._splitButtonContainer = ge.createRef(), n._mergedRef = Vs(), n._renderedVisibleMenu = false, n._getMemoizedMenuButtonKeytipProps = ee(function(o) {
      return _(_({}, o), { hasMenu: true });
    }), n._onRenderIcon = function(o, i) {
      var a = n.props.iconProps;
      if (a && (a.iconName !== void 0 || a.imageProps)) {
        var s = a.className, u = a.imageProps, l = on(a, ["className", "imageProps"]);
        if (a.styles)
          return ge.createElement(ri, _({ className: Ot(n._classNames.icon, s), imageProps: u }, l));
        if (a.iconName)
          return ge.createElement(Qc, _({ className: Ot(n._classNames.icon, s) }, l));
        if (u)
          return ge.createElement(w1, _({ className: Ot(n._classNames.icon, s), imageProps: u }, l));
      }
      return null;
    }, n._onRenderTextContents = function() {
      var o = n.props, i = o.text, a = o.children, s = o.secondaryText, u = s === void 0 ? n.props.description : s, l = o.onRenderText, c = l === void 0 ? n._onRenderText : l, d = o.onRenderDescription, p = d === void 0 ? n._onRenderDescription : d;
      return i || typeof a == "string" || u ? ge.createElement("span", { className: n._classNames.textContainer }, c(n.props, n._onRenderText), p(n.props, n._onRenderDescription)) : [c(n.props, n._onRenderText), p(n.props, n._onRenderDescription)];
    }, n._onRenderText = function() {
      var o = n.props.text, i = n.props.children;
      return o === void 0 && typeof i == "string" && (o = i), n._hasText() ? ge.createElement("span", { key: n._labelId, className: n._classNames.label, id: n._labelId }, o) : null;
    }, n._onRenderChildren = function() {
      var o = n.props.children;
      return typeof o == "string" ? null : o;
    }, n._onRenderDescription = function(o) {
      var i = o.secondaryText, a = i === void 0 ? n.props.description : i;
      return a ? ge.createElement("span", { key: n._descriptionId, className: n._classNames.description, id: n._descriptionId }, a) : null;
    }, n._onRenderAriaDescription = function() {
      var o = n.props.ariaDescription;
      return o ? ge.createElement("span", { className: n._classNames.screenReaderText, id: n._ariaDescriptionId }, o) : null;
    }, n._onRenderMenuIcon = function(o) {
      var i = n.props.menuIconProps;
      return ge.createElement(Qc, _({ iconName: "ChevronDown" }, i, { className: n._classNames.menuIcon }));
    }, n._onRenderMenu = function(o) {
      var i = n.props.persistMenu, a = n.state.menuHidden, s = n.props.menuAs || Sh;
      return !o.ariaLabel && !o.labelElementId && n._hasText() && (o = _(_({}, o), { labelElementId: n._labelId })), ge.createElement(s, _({ id: n._labelId + "-menu", directionalHint: Me.bottomLeftEdge }, o, { shouldFocusOnContainer: n._menuShouldFocusOnContainer, shouldFocusOnMount: n._menuShouldFocusOnMount, hidden: i ? a : void 0, className: Ot("ms-BaseButton-menuhost", o.className), target: n._isSplitButton ? n._splitButtonContainer.current : n._buttonElement.current, onDismiss: n._onDismissMenu }));
    }, n._onDismissMenu = function(o) {
      var i = n.props.menuProps;
      i && i.onDismiss && i.onDismiss(o), (!o || !o.defaultPrevented) && n._dismissMenu();
    }, n._dismissMenu = function() {
      n._menuShouldFocusOnMount = void 0, n._menuShouldFocusOnContainer = void 0, n.setState({ menuHidden: true });
    }, n._openMenu = function(o, i) {
      i === void 0 && (i = true), n.props.menuProps && (n._menuShouldFocusOnContainer = o, n._menuShouldFocusOnMount = i, n._renderedVisibleMenu = true, n.setState({ menuHidden: false }));
    }, n._onToggleMenu = function(o) {
      var i = true;
      n.props.menuProps && n.props.menuProps.shouldFocusOnMount === false && (i = false), n.state.menuHidden ? n._openMenu(o, i) : n._dismissMenu();
    }, n._onSplitContainerFocusCapture = function(o) {
      var i = n._splitButtonContainer.current;
      !i || o.target && zs(o.target, i) || i.focus();
    }, n._onSplitButtonPrimaryClick = function(o) {
      n.state.menuHidden || n._dismissMenu(), !n._processingTouch && n.props.onClick ? n.props.onClick(o) : n._processingTouch && n._onMenuClick(o);
    }, n._onKeyDown = function(o) {
      n.props.disabled && (o.which === H.enter || o.which === H.space) ? (o.preventDefault(), o.stopPropagation()) : n.props.disabled || (n.props.menuProps ? n._onMenuKeyDown(o) : n.props.onKeyDown !== void 0 && n.props.onKeyDown(o));
    }, n._onKeyUp = function(o) {
      !n.props.disabled && n.props.onKeyUp !== void 0 && n.props.onKeyUp(o);
    }, n._onKeyPress = function(o) {
      !n.props.disabled && n.props.onKeyPress !== void 0 && n.props.onKeyPress(o);
    }, n._onMouseUp = function(o) {
      !n.props.disabled && n.props.onMouseUp !== void 0 && n.props.onMouseUp(o);
    }, n._onMouseDown = function(o) {
      !n.props.disabled && n.props.onMouseDown !== void 0 && n.props.onMouseDown(o);
    }, n._onClick = function(o) {
      n.props.disabled || (n.props.menuProps ? n._onMenuClick(o) : n.props.onClick !== void 0 && n.props.onClick(o));
    }, n._onSplitButtonContainerKeyDown = function(o) {
      o.which === H.enter || o.which === H.space ? n._buttonElement.current && (n._buttonElement.current.click(), o.preventDefault(), o.stopPropagation()) : n._onMenuKeyDown(o);
    }, n._onMenuKeyDown = function(o) {
      if (!n.props.disabled) {
        n.props.onKeyDown && n.props.onKeyDown(o);
        var i = o.which === H.up, a = o.which === H.down;
        if (!o.defaultPrevented && n._isValidMenuOpenKey(o)) {
          var s = n.props.onMenuClick;
          s && s(o, n.props), n._onToggleMenu(false), o.preventDefault(), o.stopPropagation();
        }
        if ((o.which === H.enter || o.which === H.space) && _n(true, o.target), !(o.altKey || o.metaKey) && (i || a) && !n.state.menuHidden && n.props.menuProps) {
          var u = n._menuShouldFocusOnMount !== void 0 ? n._menuShouldFocusOnMount : n.props.menuProps.shouldFocusOnMount;
          u || (o.preventDefault(), o.stopPropagation(), n._menuShouldFocusOnMount = true, n.forceUpdate());
        }
      }
    }, n._onTouchStart = function() {
      n._isSplitButton && n._splitButtonContainer.current && !("onpointerdown" in n._splitButtonContainer.current) && n._handleTouchAndPointerEvent();
    }, n._onMenuClick = function(o) {
      var i = n.props.onMenuClick;
      if (i && i(o, n.props), !o.defaultPrevented) {
        var a = o.nativeEvent.detail !== 0 || o.nativeEvent.pointerType === "mouse";
        n._onToggleMenu(a), o.preventDefault(), o.stopPropagation();
      }
    }, Eo(n), n._async = new ho(n), n._events = new fr(n), vc(IS, r, ["menuProps", "onClick"], "split", n.props.split), gc(IS, r, { rootProps: void 0, description: "secondaryText", toggled: "checked" }), n._labelId = Ft(), n._descriptionId = Ft(), n._ariaDescriptionId = Ft(), n.state = { menuHidden: true }, n;
  }
  return Object.defineProperty(t.prototype, "_isSplitButton", { get: function() {
    return !!this.props.menuProps && !!this.props.onClick && this.props.split === true;
  }, enumerable: false, configurable: true }), t.prototype.render = function() {
    var r, n = this.props, o = n.ariaDescription, i = n.ariaLabel, a = n.ariaHidden, s = n.className, u = n.disabled, l = n.allowDisabledFocus, c = n.primaryDisabled, d = n.secondaryText, p = d === void 0 ? this.props.description : d, v = n.href, g = n.iconProps, y = n.menuIconProps, f = n.styles, m = n.checked, h = n.variantClassName, E = n.theme, C = n.toggle, x = n.getClassNames, S = n.role, F = this.state.menuHidden, w = u || c;
    this._classNames = x ? x(E, s, h, g && g.className, y && y.className, w, m, !F, !!this.props.menuProps, this.props.split, !!l) : DS(E, f, s, h, g && g.className, y && y.className, w, !!this.props.menuProps, m, !F, this.props.split);
    var k = this, V = k._ariaDescriptionId, re = k._labelId, fe = k._descriptionId, De = !w && !!v, ze = De ? "a" : "button", de = ve(Nr(De ? {} : { type: "button" }, this.props.rootProps, this.props), De ? Tc : ln, ["disabled"]), wt = i || de["aria-label"], He = void 0;
    o ? He = V : p && this.props.onRenderDescription !== aa ? He = fe : de["aria-describedby"] && (He = de["aria-describedby"]);
    var Be = void 0;
    de["aria-labelledby"] ? Be = de["aria-labelledby"] : He && !wt && (Be = this._hasText() ? re : void 0);
    var nr = !(this.props["data-is-focusable"] === false || u && !l || this._isSplitButton), Ut = S === "menuitemcheckbox" || S === "checkbox", Fe = Ut || C === true ? !!m : void 0, P = Nr(de, (r = { className: this._classNames.root, ref: this._mergedRef(this.props.elementRef, this._buttonElement), disabled: w && !l, onKeyDown: this._onKeyDown, onKeyPress: this._onKeyPress, onKeyUp: this._onKeyUp, onMouseDown: this._onMouseDown, onMouseUp: this._onMouseUp, onClick: this._onClick, "aria-label": wt, "aria-labelledby": Be, "aria-describedby": He, "aria-disabled": w, "data-is-focusable": nr }, r[Ut ? "aria-checked" : "aria-pressed"] = Fe, r));
    if (a && (P["aria-hidden"] = true), this._isSplitButton)
      return this._onRenderSplitButtonContent(ze, P);
    if (this.props.menuProps) {
      var A = this.props.menuProps.id, B = A === void 0 ? this._labelId + "-menu" : A;
      Nr(P, { "aria-expanded": !F, "aria-controls": F ? null : B, "aria-haspopup": true });
    }
    return this._onRenderContent(ze, P);
  }, t.prototype.componentDidMount = function() {
    this._isSplitButton && this._splitButtonContainer.current && ("onpointerdown" in this._splitButtonContainer.current && this._events.on(this._splitButtonContainer.current, "pointerdown", this._onPointerDown, true), "onpointerup" in this._splitButtonContainer.current && this.props.onPointerUp && this._events.on(this._splitButtonContainer.current, "pointerup", this.props.onPointerUp, true));
  }, t.prototype.componentDidUpdate = function(r, n) {
    this.props.onAfterMenuDismiss && !n.menuHidden && this.state.menuHidden && this.props.onAfterMenuDismiss();
  }, t.prototype.componentWillUnmount = function() {
    this._async.dispose(), this._events.dispose();
  }, t.prototype.focus = function() {
    this._isSplitButton && this._splitButtonContainer.current ? (_n(true), this._splitButtonContainer.current.focus()) : this._buttonElement.current && (_n(true), this._buttonElement.current.focus());
  }, t.prototype.dismissMenu = function() {
    this._dismissMenu();
  }, t.prototype.openMenu = function(r, n) {
    this._openMenu(r, n);
  }, t.prototype._onRenderContent = function(r, n) {
    var o = this, i = this.props, a = r, s = i.menuIconProps, u = i.menuProps, l = i.onRenderIcon, c = l === void 0 ? this._onRenderIcon : l, d = i.onRenderAriaDescription, p = d === void 0 ? this._onRenderAriaDescription : d, v = i.onRenderChildren, g = v === void 0 ? this._onRenderChildren : v, y = i.onRenderMenu, f = y === void 0 ? this._onRenderMenu : y, m = i.onRenderMenuIcon, h = m === void 0 ? this._onRenderMenuIcon : m, E = i.disabled, C = i.keytipProps;
    C && u && (C = this._getMemoizedMenuButtonKeytipProps(C));
    var x = function(F) {
      return ge.createElement(a, _({}, n, F), ge.createElement("span", { className: o._classNames.flexContainer, "data-automationid": "splitbuttonprimary" }, c(i, o._onRenderIcon), o._onRenderTextContents(), p(i, o._onRenderAriaDescription), g(i, o._onRenderChildren), !o._isSplitButton && (u || s || o.props.onRenderMenuIcon) && h(o.props, o._onRenderMenuIcon), u && !u.doNotLayer && o._shouldRenderMenu() && f(u, o._onRenderMenu)));
    }, S = C ? ge.createElement(Rn, { keytipProps: this._isSplitButton ? void 0 : C, ariaDescribedBy: n["aria-describedby"], disabled: E }, function(F) {
      return x(F);
    }) : x();
    return u && u.doNotLayer ? ge.createElement(ge.Fragment, null, S, this._shouldRenderMenu() && f(u, this._onRenderMenu)) : ge.createElement(ge.Fragment, null, S, ge.createElement(QC, null));
  }, t.prototype._shouldRenderMenu = function() {
    var r = this.state.menuHidden, n = this.props, o = n.persistMenu, i = n.renderPersistedMenuHiddenOnMount;
    if (r) {
      if (o && (this._renderedVisibleMenu || i))
        return true;
    } else
      return true;
    return false;
  }, t.prototype._hasText = function() {
    return this.props.text !== null && (this.props.text !== void 0 || typeof this.props.children == "string");
  }, t.prototype._onRenderSplitButtonContent = function(r, n) {
    var o = this, i = this.props, a = i.styles, s = a === void 0 ? {} : a, u = i.disabled, l = i.allowDisabledFocus, c = i.checked, d = i.getSplitButtonClassNames, p = i.primaryDisabled, v = i.menuProps, g = i.toggle, y = i.role, f = i.primaryActionButtonProps, m = this.props.keytipProps, h = this.state.menuHidden, E = d ? d(!!u, !h, !!c, !!l) : s && TS(s, !!u, !h, !!c, !!p);
    Nr(n, { onClick: void 0, onPointerDown: void 0, onPointerUp: void 0, tabIndex: -1, "data-is-focusable": false }), m && v && (m = this._getMemoizedMenuButtonKeytipProps(m));
    var C = ve(n, [], ["disabled"]);
    f && Nr(n, f);
    var x = function(S) {
      return ge.createElement("div", _({}, C, { "data-ktp-target": S ? S["data-ktp-target"] : void 0, role: y || "button", "aria-disabled": u, "aria-haspopup": true, "aria-expanded": !h, "aria-pressed": g ? !!c : void 0, "aria-describedby": an(n["aria-describedby"], S ? S["aria-describedby"] : void 0), className: E && E.splitButtonContainer, onKeyDown: o._onSplitButtonContainerKeyDown, onTouchStart: o._onTouchStart, ref: o._splitButtonContainer, "data-is-focusable": true, onClick: !u && !p ? o._onSplitButtonPrimaryClick : void 0, tabIndex: !u && !p || l ? 0 : void 0, "aria-roledescription": n["aria-roledescription"], onFocusCapture: o._onSplitContainerFocusCapture }), ge.createElement("span", { style: { display: "flex" } }, o._onRenderContent(r, n), o._onRenderSplitButtonMenuButton(E, S), o._onRenderSplitButtonDivider(E)));
    };
    return m ? ge.createElement(Rn, { keytipProps: m, disabled: u }, function(S) {
      return x(S);
    }) : x();
  }, t.prototype._onRenderSplitButtonDivider = function(r) {
    if (r && r.divider) {
      var n = function(o) {
        o.stopPropagation();
      };
      return ge.createElement("span", { className: r.divider, "aria-hidden": true, onClick: n });
    }
    return null;
  }, t.prototype._onRenderSplitButtonMenuButton = function(r, n) {
    var o = this.props, i = o.allowDisabledFocus, a = o.checked, s = o.disabled, u = o.splitButtonMenuProps, l = o.splitButtonAriaLabel, c = o.primaryDisabled, d = this.state.menuHidden, p = this.props.menuIconProps;
    p === void 0 && (p = { iconName: "ChevronDown" });
    var v = _(_({}, u), { styles: r, checked: a, disabled: s, allowDisabledFocus: i, onClick: this._onMenuClick, menuProps: void 0, iconProps: _(_({}, p), { className: this._classNames.menuIcon }), ariaLabel: l, "aria-haspopup": true, "aria-expanded": !d, "data-is-focusable": false });
    return ge.createElement(t, _({}, v, { "data-ktp-execute-target": n && n["data-ktp-execute-target"], onMouseDown: this._onMouseDown, tabIndex: c && !i ? 0 : -1 }));
  }, t.prototype._onPointerDown = function(r) {
    var n = this.props.onPointerDown;
    n && n(r), r.pointerType === "touch" && (this._handleTouchAndPointerEvent(), r.preventDefault(), r.stopImmediatePropagation());
  }, t.prototype._handleTouchAndPointerEvent = function() {
    var r = this;
    this._lastTouchTimeoutId !== void 0 && (this._async.clearTimeout(this._lastTouchTimeoutId), this._lastTouchTimeoutId = void 0), this._processingTouch = true, this._lastTouchTimeoutId = this._async.setTimeout(function() {
      r._processingTouch = false, r._lastTouchTimeoutId = void 0, r.focus();
    }, rI);
  }, t.prototype._isValidMenuOpenKey = function(r) {
    return this.props.menuTriggerKeyCode ? r.which === this.props.menuTriggerKeyCode : this.props.menuProps ? r.which === H.down && (r.altKey || r.metaKey) : false;
  }, t.defaultProps = { baseClassName: "ms-Button", styles: {}, split: false }, t;
}(ge.Component);
var sf = N(L());
var AS = { outline: 0 };
var PS = function(e2) {
  return { fontSize: e2, margin: "0 4px", height: "16px", lineHeight: "16px", textAlign: "center", flexShrink: 0 };
};
var MS = ee(function(e2) {
  var t, r, n = e2.semanticColors, o = e2.effects, i = e2.fonts, a = n.buttonBorder, s = n.disabledBackground, u = n.disabledText, l = { left: -2, top: -2, bottom: -2, right: -2, outlineColor: "ButtonText" };
  return { root: [xn(e2, { inset: 1, highContrastStyle: l, borderColor: "transparent" }), e2.fonts.medium, { boxSizing: "border-box", border: "1px solid " + a, userSelect: "none", display: "inline-block", textDecoration: "none", textAlign: "center", cursor: "pointer", padding: "0 16px", borderRadius: o.roundedCorner2, selectors: { ":active > *": { position: "relative", left: 0, top: 0 } } }], rootDisabled: [xn(e2, { inset: 1, highContrastStyle: l, borderColor: "transparent" }), { backgroundColor: s, borderColor: s, color: u, cursor: "default", selectors: { ":hover": AS, ":focus": AS } }], iconDisabled: { color: u, selectors: (t = {}, t[$] = { color: "GrayText" }, t) }, menuIconDisabled: { color: u, selectors: (r = {}, r[$] = { color: "GrayText" }, r) }, flexContainer: { display: "flex", height: "100%", flexWrap: "nowrap", justifyContent: "center", alignItems: "center" }, description: { display: "block" }, textContainer: { flexGrow: 1, display: "block" }, icon: PS(i.mediumPlus.fontSize), menuIcon: PS(i.small.fontSize), label: { margin: "0 4px", lineHeight: "100%", display: "block" }, screenReaderText: js };
});
var BS = ee(function(e2, t) {
  var r, n, o, i, a, s, u, l, c, d, p, v, g, y = e2.effects, f = e2.palette, m = e2.semanticColors, h = { left: -2, top: -2, bottom: -2, right: -2, border: "none" }, E = { position: "absolute", width: 1, right: 31, top: 8, bottom: 8 }, C = { splitButtonContainer: [xn(e2, { highContrastStyle: h, inset: 2 }), { display: "inline-flex", selectors: { ".ms-Button--default": { borderTopRightRadius: "0", borderBottomRightRadius: "0", borderRight: "none" }, ".ms-Button--primary": { borderTopRightRadius: "0", borderBottomRightRadius: "0", border: "none", selectors: (r = {}, r[$] = _({ color: "WindowText", backgroundColor: "Window", border: "1px solid WindowText", borderRightWidth: "0" }, Wr()), r) }, ".ms-Button--primary + .ms-Button": { border: "none", selectors: (n = {}, n[$] = { border: "1px solid WindowText", borderLeftWidth: "0" }, n) } } }], splitButtonContainerHovered: { selectors: { ".ms-Button--primary": { selectors: (o = {}, o[$] = { color: "Window", backgroundColor: "Highlight" }, o) }, ".ms-Button.is-disabled": { color: m.buttonTextDisabled, selectors: (i = {}, i[$] = { color: "GrayText", borderColor: "GrayText", backgroundColor: "Window" }, i) } } }, splitButtonContainerChecked: { selectors: { ".ms-Button--primary": { selectors: (a = {}, a[$] = _({ color: "Window", backgroundColor: "WindowText" }, Wr()), a) } } }, splitButtonContainerCheckedHovered: { selectors: { ".ms-Button--primary": { selectors: (s = {}, s[$] = _({ color: "Window", backgroundColor: "WindowText" }, Wr()), s) } } }, splitButtonContainerFocused: { outline: "none!important" }, splitButtonMenuButton: (u = { padding: 6, height: "auto", boxSizing: "border-box", borderRadius: 0, borderTopRightRadius: y.roundedCorner2, borderBottomRightRadius: y.roundedCorner2, border: "1px solid " + f.neutralSecondaryAlt, borderLeft: "none", outline: "transparent", userSelect: "none", display: "inline-block", textDecoration: "none", textAlign: "center", cursor: "pointer", verticalAlign: "top", width: 32, marginLeft: -1, marginTop: 0, marginRight: 0, marginBottom: 0 }, u[$] = { ".ms-Button-menuIcon": { color: "WindowText" } }, u), splitButtonDivider: _(_({}, E), { selectors: (l = {}, l[$] = { backgroundColor: "WindowText" }, l) }), splitButtonDividerDisabled: _(_({}, E), { selectors: (c = {}, c[$] = { backgroundColor: "GrayText" }, c) }), splitButtonMenuButtonDisabled: { pointerEvents: "none", border: "none", selectors: (d = { ":hover": { cursor: "default" }, ".ms-Button--primary": { selectors: (p = {}, p[$] = { color: "GrayText", borderColor: "GrayText", backgroundColor: "Window" }, p) }, ".ms-Button-menuIcon": { selectors: (v = {}, v[$] = { color: "GrayText" }, v) } }, d[$] = { color: "GrayText", border: "1px solid GrayText", backgroundColor: "Window" }, d) }, splitButtonFlexContainer: { display: "flex", height: "100%", flexWrap: "nowrap", justifyContent: "center", alignItems: "center" }, splitButtonContainerDisabled: { outline: "none", border: "none", selectors: (g = {}, g[$] = _({ color: "GrayText", borderColor: "GrayText", backgroundColor: "Window" }, Wr()), g) }, splitButtonMenuFocused: _({}, xn(e2, { highContrastStyle: h, inset: 2 })) };
  return Mt(C, t);
});
var NS = function() {
  return { position: "absolute", width: 1, right: 31, top: 8, bottom: 8 };
};
function LS(e2) {
  var t, r, n, o, i, a = e2.semanticColors, s = e2.palette, u = a.buttonBackground, l = a.buttonBackgroundPressed, c = a.buttonBackgroundHovered, d = a.buttonBackgroundDisabled, p = a.buttonText, v = a.buttonTextHovered, g = a.buttonTextDisabled, y = a.buttonTextChecked, f = a.buttonTextCheckedHovered;
  return { root: { backgroundColor: u, color: p }, rootHovered: { backgroundColor: c, color: v, selectors: (t = {}, t[$] = { borderColor: "Highlight", color: "Highlight" }, t) }, rootPressed: { backgroundColor: l, color: y }, rootExpanded: { backgroundColor: l, color: y }, rootChecked: { backgroundColor: l, color: y }, rootCheckedHovered: { backgroundColor: l, color: f }, rootDisabled: { color: g, backgroundColor: d, selectors: (r = {}, r[$] = { color: "GrayText", borderColor: "GrayText", backgroundColor: "Window" }, r) }, splitButtonContainer: { selectors: (n = {}, n[$] = { border: "none" }, n) }, splitButtonMenuButton: { color: s.white, backgroundColor: "transparent", selectors: { ":hover": { backgroundColor: s.neutralLight, selectors: (o = {}, o[$] = { color: "Highlight" }, o) } } }, splitButtonMenuButtonDisabled: { backgroundColor: a.buttonBackgroundDisabled, selectors: { ":hover": { backgroundColor: a.buttonBackgroundDisabled } } }, splitButtonDivider: _(_({}, NS()), { backgroundColor: s.neutralTertiaryAlt, selectors: (i = {}, i[$] = { backgroundColor: "WindowText" }, i) }), splitButtonDividerDisabled: { backgroundColor: e2.palette.neutralTertiaryAlt }, splitButtonMenuButtonChecked: { backgroundColor: s.neutralQuaternaryAlt, selectors: { ":hover": { backgroundColor: s.neutralQuaternaryAlt } } }, splitButtonMenuButtonExpanded: { backgroundColor: s.neutralQuaternaryAlt, selectors: { ":hover": { backgroundColor: s.neutralQuaternaryAlt } } }, splitButtonMenuIcon: { color: a.buttonText }, splitButtonMenuIconDisabled: { color: a.buttonTextDisabled } };
}
function OS(e2) {
  var t, r, n, o, i, a, s, u, l, c = e2.palette, d = e2.semanticColors;
  return { root: { backgroundColor: d.primaryButtonBackground, border: "1px solid " + d.primaryButtonBackground, color: d.primaryButtonText, selectors: (t = {}, t[$] = _({ color: "Window", backgroundColor: "WindowText", borderColor: "WindowText" }, Wr()), t["." + rt + " &:focus"] = { selectors: { ":after": { border: "none", outlineColor: c.white } } }, t) }, rootHovered: { backgroundColor: d.primaryButtonBackgroundHovered, border: "1px solid " + d.primaryButtonBackgroundHovered, color: d.primaryButtonTextHovered, selectors: (r = {}, r[$] = { color: "Window", backgroundColor: "Highlight", borderColor: "Highlight" }, r) }, rootPressed: { backgroundColor: d.primaryButtonBackgroundPressed, border: "1px solid " + d.primaryButtonBackgroundPressed, color: d.primaryButtonTextPressed, selectors: (n = {}, n[$] = _({ color: "Window", backgroundColor: "WindowText", borderColor: "WindowText" }, Wr()), n) }, rootExpanded: { backgroundColor: d.primaryButtonBackgroundPressed, color: d.primaryButtonTextPressed }, rootChecked: { backgroundColor: d.primaryButtonBackgroundPressed, color: d.primaryButtonTextPressed }, rootCheckedHovered: { backgroundColor: d.primaryButtonBackgroundPressed, color: d.primaryButtonTextPressed }, rootDisabled: { color: d.primaryButtonTextDisabled, backgroundColor: d.primaryButtonBackgroundDisabled, selectors: (o = {}, o[$] = { color: "GrayText", borderColor: "GrayText", backgroundColor: "Window" }, o) }, splitButtonContainer: { selectors: (i = {}, i[$] = { border: "none" }, i) }, splitButtonDivider: _(_({}, NS()), { backgroundColor: c.white, selectors: (a = {}, a[$] = { backgroundColor: "Window" }, a) }), splitButtonMenuButton: { backgroundColor: d.primaryButtonBackground, color: d.primaryButtonText, selectors: (s = {}, s[$] = { backgroundColor: "WindowText" }, s[":hover"] = { backgroundColor: d.primaryButtonBackgroundHovered, selectors: (u = {}, u[$] = { color: "Highlight" }, u) }, s) }, splitButtonMenuButtonDisabled: { backgroundColor: d.primaryButtonBackgroundDisabled, selectors: { ":hover": { backgroundColor: d.primaryButtonBackgroundDisabled } } }, splitButtonMenuButtonChecked: { backgroundColor: d.primaryButtonBackgroundPressed, selectors: { ":hover": { backgroundColor: d.primaryButtonBackgroundPressed } } }, splitButtonMenuButtonExpanded: { backgroundColor: d.primaryButtonBackgroundPressed, selectors: { ":hover": { backgroundColor: d.primaryButtonBackgroundPressed } } }, splitButtonMenuIcon: { color: d.primaryButtonText }, splitButtonMenuIconDisabled: { color: c.neutralTertiary, selectors: (l = {}, l[$] = { color: "GrayText" }, l) } };
}
var nI = "32px";
var oI = "80px";
var zS = ee(function(e2, t, r) {
  var n = MS(e2), o = BS(e2), i = { root: { minWidth: oI, height: nI }, label: { fontWeight: le.semibold } };
  return Mt(n, i, r ? OS(e2) : LS(e2), o, t);
});
var HS = function(e2) {
  _e(t, e2);
  function t() {
    return e2 !== null && e2.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var r = this.props, n = r.primary, o = n === void 0 ? false : n, i = r.styles, a = r.theme;
    return sf.createElement(RS, _({}, this.props, { variantClassName: o ? "ms-Button--primary" : "ms-Button--default", styles: zS(a, i, o), onRenderDescription: aa }));
  }, t = lc([wc("DefaultButton", ["theme", "styles"], true)], t), t;
}(sf.Component);
var uf = N(L());
var VS = function(e2) {
  _e(t, e2);
  function t() {
    return e2 !== null && e2.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    return uf.createElement(HS, _({}, this.props, { primary: true, onRenderDescription: aa }));
  }, t = lc([wc("PrimaryButton", ["theme", "styles"], true)], t), t;
}(uf.Component);
var Re = N(L());
var iI = () => Re.createElement("img", { alt: "", src: "https://az742526.vo.msecnd.net/files/odsp-next-release-odc_2019-03-15_20190322.001/odsp-media/images/itemtypes/20/folder.svg", style: { width: 20, height: 20 } });
var _h = [{ key: "type", style: { minWidth: 32, maxWidth: 32, justifyContent: "center", alignItems: "center", textAlign: "center" }, children: Re.createElement(ke, { iconName: "Page" }) }, { key: "nameRow", style: { flexGrow: 1, minWidth: 150, maxWidth: 400 }, canSort: true, children: Re.createElement(Re.Fragment, null, Re.createElement("span", null, "Name"), Re.createElement(ke, { iconName: "SortUp" }), Re.createElement(ke, { iconName: "ChevronDownSmall", style: { fontSize: 8 } })) }, { key: "modified", style: { minWidth: 120, maxWidth: 180 }, canSort: true, children: Re.createElement(Re.Fragment, null, Re.createElement("span", null, "Modified"), Re.createElement(ke, { iconName: "ChevronDownSmall", style: { fontSize: 8 } })) }, { key: "sharing", style: { minWidth: 120, maxWidth: 180 }, canSort: true, children: Re.createElement(Re.Fragment, null, Re.createElement("span", null, "Sharing"), Re.createElement(ke, { iconName: "ChevronDownSmall", style: { fontSize: 8 } })) }, { key: "size", style: { minWidth: 120, maxWidth: 180 }, canSort: true, children: Re.createElement(Re.Fragment, null, Re.createElement("span", null, "Size"), Re.createElement(ke, { iconName: "ChevronDownSmall", style: { fontSize: 8 } })) }];
var Fh = Array.from({ length: 1e3 }).map((e2, t) => ({ key: `item${t}`, type: Re.createElement(iI, null), name: `Item ${t}`, nameRow: Re.createElement(Re.Fragment, null, Re.createElement("span", { style: { fontSize: 14 } }, `Item ${t}`, " ")), modified: "Jan 26, 2017", sharing: "Sharing", size: `${Math.round(Math.random() * 100)} KB` }));
var jr = N(L());
var Fa = N(L());
var WS = (e2) => {
  let [t, r] = Fa.useState(void 0), n = Fa.useCallback((o) => {
    r(o[0].target.getBoundingClientRect());
  }, []);
  return Fa.useEffect(() => {
    let o;
    return e2.current && (o = new window.ResizeObserver(n), o.observe(e2.current)), () => {
      o && o.disconnect();
    };
  }, [e2, n]), t;
};
var xh = jr.createContext({});
var US = (e2) => {
  let { style: t, ...r } = e2, n = jr.useRef(void 0), o = WS(n), [i, a] = jr.useState({}), s = { overflow: "scroll", outline: "none", padding: "0 16px", ...t }, u = jr.useCallback((l) => {
    let { scrollTop: c, clientHeight: d, clientTop: p } = l.target;
    a({ viewportRect: o, clientTop: p, scrollTop: c, scrollBottom: c + d });
  }, [o]);
  return jr.createElement(xh.Provider, { value: i }, jr.createElement("div", { ref: n, style: s, tabIndex: 0, ...r, onScroll: u }));
};
var Pn = N(L());
var iu = N(L());
var jS = (e2) => {
  let [t] = iu.useState({ isMeasuring: false, rafHandle: 0 }), [r, n] = iu.useState(void 0);
  return iu.useEffect(() => {
    if (!t.isMeasuring && e2.current)
      return t.isMeasuring = true, t.rafHandle = requestAnimationFrame(() => {
        t.isMeasuring = false, n(e2.current.getBoundingClientRect());
      }), () => cancelAnimationFrame(t.rafHandle);
  }, [e2.current]), r;
};
var aI = ({ items: e2, itemSize: t, viewport: r, surfaceRect: n }) => {
  if (r && r.viewportRect && n) {
    let i = r.viewportRect.top - n.top + r.scrollTop, a = Math.max(0, Math.floor((i - 0) / t.height)), s = Math.min(e2.length, Math.ceil((i + r.viewportRect.height + 0) / t.height));
    return [{ start: a, end: s }];
  }
  return [{ start: 0, end: Math.min(e2.length, Math.ceil(window.outerHeight / t.height)) }];
};
var $S = (e2) => {
  let { as: t = "div", items: r = [], itemProps: n, itemAs: o, itemSize: i, style: a, ...s } = e2, [u] = Pn.useState({ styles: {} }), l = Pn.useRef(void 0), c = Pn.useContext(xh), d = jS(l), p = [], v = aI({ items: r, itemSize: i, viewport: c, surfaceRect: d }), g = { position: "relative", height: `${r.length * i.height}px`, ...a };
  for (let y of v)
    for (let f = y.start; f < y.end; f++) {
      let m = r[f], h = u.styles[f] = u.styles[f] || { ...n.style, position: "absolute", width: "100%", height: `${i.height}px`, top: f * i.height }, E = { ...n, index: f, item: m, style: h, key: m.key };
      p.push(Pn.createElement(o, { ...E }));
    }
  return Pn.createElement(t, { ...s, ref: l, style: g, children: p });
};
var { ThemeProvider: sI, styled: Oe, StyleMethod: uI } = oc;
var KS = Oe.div`
  ${(e2) => e2.theme.default}
  ${Um}
  display: grid;
  grid-template-rows: 50px 44px auto;
  grid-template-columns: 228px auto;
  grid-template-areas:
    "header header"
    "search commands"
    "nav content";
  width: 100vw;
  height: 100vh;
`;
KS.displayName = "AppFrame";
var lI = (e2) => `
> * {
  margin-left: ${e2};
}
> *:first-child {
  margin-left: 0;
}
`;
var ii = Oe.button`
  ${Um}
  ${Ks}
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: inherit;
  border: none;
  color: var(${Cn});

  :hover {
    background-color: var(${xr});
  }

  :active {
    background-color: var(${rn});
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px var(${uo}) inset;
  }
`;
ii.displayName = "Button";
var lf = Oe(ii)`
  width: ${(e2) => e2.size || "50px"};
  height: ${(e2) => e2.size || "50px"};
`;
lf.displayName = "SquareButton";
var cI = Oe("div", { displayName: "Header" })`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(e2) => e2.theme.strong}
`;
var GS = Oe.h1`
  ${h1}
  padding: 0 20px;
  font-size: 16px;
  flex-grow: 1;
`;
GS.displayName = "ProductTitle";
var fI = Oe.div`
  flex-shrink: 0;
  background: rgb(126, 56, 120);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var dI = Oe.div`
  ${(e2) => e2.theme.default}

  grid-area: commands;
  display: flex;
  padding: 0 20px;
`;
var xa = Oe(ii)`
  height: 44px;
  padding: 0 12px;
  background-color: transparent;

  & > [data-icon-name]:first-child {
    color: var(${co});
  }

  ${lI("8px")}
`;
var pI = Oe.div`
  ${(e2) => e2.theme.neutral}
  font-size: 14px;
  font-weight: 600;
  grid-area: search;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid var(${tn});

  & > * {
    margin: 0 8px;
  }
`;
var mI = Oe.div`
  ${(e2) => e2.theme.neutral}
  grid-area: nav;
  display: flex;
  padding: 16px 0;
  border-right: 1px solid var(${tn});
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
`;
var au = Oe(ii, { displayName: "SideNavButton" })`
  display: flex;
  gap: 12px;
  justify-content: start;
  font-weight: ${(e2) => e2.selected ? 600 : 400};
  font-size: 14px;
  padding: 0 16px;
  height: 36px;
  background-color: ${(e2) => e2.selected ? `var(${xr})` : "transparent"};

  :hover {
    background-color: var(${xr});
  }

  :active {
    background-color: var(${rn});
  }
`;
var hI = Oe.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  overflow: auto;

  & > * {
    margin-top: 20px;
  }

  & > *:first-child {
    margin-top: 0;
  }
`;
var vI = Oe.div`
  padding: 32px 32px 32px;
`;
var gI = Oe.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 4px;
  line-height: 36px;
`;
var yI = Oe.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-min-cells: 1000000;
  grid-gap: 8px;
`;
var EI = Oe(ii)`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  border-radius: 3px;

  &:hover {
    background: var(${xr});
  }
`;
var CI = () => I.createElement("div", { style: { position: "relative", alignSelf: "center" } }, I.createElement("img", { alt: "", src: "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/foldericons/folder-small_backplate.svg" }), I.createElement("img", { alt: "", style: { position: "absolute", left: 0, top: 0 }, src: "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/foldericons/folder-small_frontplate_thumbnail.svg" }));
var SI = Oe.div`
  ${Ks}
`;
var _I = Oe.div`
  ${Ks}
  font-size: 12px;

  color: var(${lo});
`;
var FI = (e2) => I.createElement(EI, null, I.createElement(CI, null), I.createElement(SI, null, e2.name), I.createElement(_I, null, e2.date));
var qS = (e2) => I.createElement(ii, { ...e2, style: { position: "relative", width: 40 } }, I.createElement(ke, { iconName: "CircleRing", style: { fontSize: 18 } }), I.createElement(ke, { style: { fontSize: 16, position: "absolute", left: "50%", top: "50%", marginTop: -1.5, transform: "translate(-50%, -50%)" }, iconName: "StatusCircleCheckmark" }));
var YS = Oe.div`
  display: flex;
  height: 32px;
  line-height: 32px;
  align-items: stretch;
  border-bottom: 1px solid var(${tn});
`;
var QS = Oe.div`
  display: flex;
  gap: 4px;
  justify-content: start;
  font-size: ${qe.medium};

  flex-grow: 1;
  box-sizing: border-box;
  padding: 0 8px;

  ${Ks}
`;
var xI = Oe(ii)`
  display: flex;
  flex-grow: 1;
  gap: 4px;
  justify-content: start;
  font-size: ${qe.small};
`;
var bI = (e2) => I.createElement(YS, null, I.createElement(qS, { size: "40px", style: { flexShrink: 0 } }), _h.map((t) => I.createElement(QS, { ...t, as: t.canSort && xI })));
var wI = Oe(YS)`
  width: 100%;
  height: 42px;
  line-height: 42px;

  :hover {
    background: var(${xr});
  }
  :active {
    background: var(${rn});
  }
`;
var kI = Oe(QS)`
  font-weight: normal;
`;
var DI = (e2) => {
  let { item: t, index: r, columns: n, ...o } = e2;
  return I.createElement(wI, { ...o }, I.createElement(qS, { as: "span", size: "40px", style: { flexShrink: 0 } }), n.map((i, a) => I.createElement(kI, { key: a, style: i.style }, t[i.key])));
};
var TI = (e2) => I.createElement(fI, null, "DZ");
var XS = (e2) => {
  let [t, r] = I.useState(false), [n, o] = I.useState(true);
  return I.createElement(sI, { theme: t ? CE : EE }, I.createElement(I.Fragment, null, I.createElement(KS, null, I.createElement(cI, null, I.createElement(lf, null, I.createElement(ke, { iconName: "waffle", style: { fontSize: 24 } })), I.createElement(GS, null, `OneDrive (${uI})`), I.createElement(lf, null, I.createElement(ke, { iconName: "help", style: { fontSize: 16 } })), I.createElement(lf, null, I.createElement(TI, null))), I.createElement(pI, null, "David Zearing"), I.createElement("div", { style: { background: "white", borderBottom: "1px solid #edebe9" } }, I.createElement(dI, null, I.createElement("div", { style: { display: "flex", flexGrow: 1 } }, I.createElement(xa, null, I.createElement(ke, { iconName: "add", style: { fontSize: 16 } }), I.createElement("span", null, "New"), I.createElement(ke, { iconName: "chevrondownsmall", style: { fontSize: 8 } })), I.createElement(xa, null, I.createElement(ke, { iconName: "upload", style: { fontSize: 16 } }), I.createElement("span", null, "Upload"), I.createElement(ke, { iconName: "chevrondownsmall", style: { fontSize: 8 } })), I.createElement(xa, { onClick: () => r(!t) }, I.createElement(ke, { iconName: "brush", style: { fontSize: 16 } }), I.createElement("span", null, t ? "Light mode" : "Dark mode"))), I.createElement(xa, null, I.createElement(ke, { iconName: "sortlines", style: { fontSize: 16 } }), I.createElement("span", null, "Sort"), I.createElement(ke, { iconName: "chevrondownsmall", style: { fontSize: 8 } })), I.createElement(xa, { onClick: () => o(!n) }, I.createElement(ke, { iconName: n ? "list" : "viewall", style: { fontSize: 16 } })), I.createElement(xa, null, I.createElement(ke, { iconName: "info", style: { fontSize: 16 } })))), I.createElement(mI, null, I.createElement(au, { selected: true }, I.createElement(ke, { iconName: "FabricFolder", style: { fontSize: 16 } }), I.createElement("span", null, "My files")), I.createElement(au, null, I.createElement(ke, { iconName: "History", style: { fontSize: 16 } }), I.createElement("span", null, "Recent")), I.createElement(au, null, I.createElement(ke, { iconName: "Photo2", style: { fontSize: 16 } }), I.createElement("span", null, "Photos")), I.createElement(au, null, I.createElement(ke, { iconName: "People", style: { fontSize: 16 } }), I.createElement("span", null, "Shared")), I.createElement(au, null, I.createElement(ke, { iconName: "RecycleBin", style: { fontSize: 16 } }), I.createElement("span", null, "Recycle"))), I.createElement(US, { as: hI }, I.createElement(vI, null, I.createElement(gI, null, "My files"), process.env.useFluentButton && I.createElement(VS, null, "I'm a Fluent vj8 PrimaryButton!")), n ? I.createElement(I.Fragment, null, I.createElement(bI, null), I.createElement($S, { items: Fh, itemProps: { columns: _h }, itemSize: { height: 40 }, itemAs: DI })) : I.createElement(yI, null, Fh.map((i) => I.createElement(FI, { key: i.name, ...i })))))));
};
function ZS(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons"', src: "url('" + e2 + "fabric-icons-a13498cf.woff') format('woff')" }, icons: { GlobalNavButton: "\uE700", ChevronDown: "\uE70D", ChevronUp: "\uE70E", Edit: "\uE70F", Add: "\uE710", Cancel: "\uE711", More: "\uE712", Settings: "\uE713", Mail: "\uE715", Filter: "\uE71C", Search: "\uE721", Share: "\uE72D", BlockedSite: "\uE72F", FavoriteStar: "\uE734", FavoriteStarFill: "\uE735", CheckMark: "\uE73E", Delete: "\uE74D", ChevronLeft: "\uE76B", ChevronRight: "\uE76C", Calendar: "\uE787", Megaphone: "\uE789", Undo: "\uE7A7", Flag: "\uE7C1", Page: "\uE7C3", Pinned: "\uE840", View: "\uE890", Clear: "\uE894", Download: "\uE896", Upload: "\uE898", Folder: "\uE8B7", Sort: "\uE8CB", AlignRight: "\uE8E2", AlignLeft: "\uE8E4", Tag: "\uE8EC", AddFriend: "\uE8FA", Info: "\uE946", SortLines: "\uE9D0", List: "\uEA37", CircleRing: "\uEA3A", Heart: "\uEB51", HeartFill: "\uEB52", Tiles: "\uECA5", Embed: "\uECCE", Glimmer: "\uECF4", Ascending: "\uEDC0", Descending: "\uEDC1", SortUp: "\uEE68", SortDown: "\uEE69", SyncToPC: "\uEE6E", LargeGrid: "\uEECB", SkypeCheck: "\uEF80", SkypeClock: "\uEF81", SkypeMinus: "\uEF82", ClearFilter: "\uEF8F", Flow: "\uEF90", StatusCircleCheckmark: "\uF13E", MoreVertical: "\uF2BC" } };
  Y(r, t);
}
function JS(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-0"', src: "url('" + e2 + "fabric-icons-0-467ee27f.woff') format('woff')" }, icons: { PageLink: "\uE302", CommentSolid: "\uE30E", ChangeEntitlements: "\uE310", Installation: "\uE311", WebAppBuilderModule: "\uE313", WebAppBuilderFragment: "\uE314", WebAppBuilderSlot: "\uE315", BullseyeTargetEdit: "\uE319", WebAppBuilderFragmentCreate: "\uE31B", PageData: "\uE31C", PageHeaderEdit: "\uE31D", ProductList: "\uE31E", UnpublishContent: "\uE31F", DependencyAdd: "\uE344", DependencyRemove: "\uE345", EntitlementPolicy: "\uE346", EntitlementRedemption: "\uE347", SchoolDataSyncLogo: "\uE34C", PinSolid12: "\uE352", PinSolidOff12: "\uE353", AddLink: "\uE35E", SharepointAppIcon16: "\uE365", DataflowsLink: "\uE366", TimePicker: "\uE367", UserWarning: "\uE368", ComplianceAudit: "\uE369", InternetSharing: "\uE704", Brightness: "\uE706", MapPin: "\uE707", Airplane: "\uE709", Tablet: "\uE70A", QuickNote: "\uE70B", Video: "\uE714", People: "\uE716", Phone: "\uE717", Pin: "\uE718", Shop: "\uE719", Stop: "\uE71A", Link: "\uE71B", AllApps: "\uE71D", Zoom: "\uE71E", ZoomOut: "\uE71F", Microphone: "\uE720", Camera: "\uE722", Attach: "\uE723", Send: "\uE724", FavoriteList: "\uE728", PageSolid: "\uE729", Forward: "\uE72A", Back: "\uE72B", Refresh: "\uE72C", Lock: "\uE72E", ReportHacked: "\uE730", EMI: "\uE731", MiniLink: "\uE732", Blocked: "\uE733", ReadingMode: "\uE736", Favicon: "\uE737", Remove: "\uE738", Checkbox: "\uE739", CheckboxComposite: "\uE73A", CheckboxFill: "\uE73B", CheckboxIndeterminate: "\uE73C", CheckboxCompositeReversed: "\uE73D", BackToWindow: "\uE73F", FullScreen: "\uE740", Print: "\uE749", Up: "\uE74A", Down: "\uE74B", OEM: "\uE74C", Save: "\uE74E", ReturnKey: "\uE751", Cloud: "\uE753", Flashlight: "\uE754", CommandPrompt: "\uE756", Sad: "\uE757", RealEstate: "\uE758", SIPMove: "\uE759", EraseTool: "\uE75C", GripperTool: "\uE75E", Dialpad: "\uE75F", PageLeft: "\uE760", PageRight: "\uE761", MultiSelect: "\uE762", KeyboardClassic: "\uE765", Play: "\uE768", Pause: "\uE769", InkingTool: "\uE76D", Emoji2: "\uE76E", GripperBarHorizontal: "\uE76F", System: "\uE770", Personalize: "\uE771", SearchAndApps: "\uE773", Globe: "\uE774", EaseOfAccess: "\uE776", ContactInfo: "\uE779", Unpin: "\uE77A", Contact: "\uE77B", Memo: "\uE77C", IncomingCall: "\uE77E" } };
  Y(r, t);
}
function e_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-1"', src: "url('" + e2 + "fabric-icons-1-4d521695.woff') format('woff')" }, icons: { Paste: "\uE77F", WindowsLogo: "\uE782", Error: "\uE783", GripperBarVertical: "\uE784", Unlock: "\uE785", Slideshow: "\uE786", Trim: "\uE78A", AutoEnhanceOn: "\uE78D", AutoEnhanceOff: "\uE78E", Color: "\uE790", SaveAs: "\uE792", Light: "\uE793", Filters: "\uE795", AspectRatio: "\uE799", Contrast: "\uE7A1", Redo: "\uE7A6", Crop: "\uE7A8", PhotoCollection: "\uE7AA", Album: "\uE7AB", Rotate: "\uE7AD", PanoIndicator: "\uE7B0", Translate: "\uE7B2", RedEye: "\uE7B3", ViewOriginal: "\uE7B4", ThumbnailView: "\uE7B6", Package: "\uE7B8", Telemarketer: "\uE7B9", Warning: "\uE7BA", Financial: "\uE7BB", Education: "\uE7BE", ShoppingCart: "\uE7BF", Train: "\uE7C0", Move: "\uE7C2", TouchPointer: "\uE7C9", Merge: "\uE7D5", TurnRight: "\uE7DB", Ferry: "\uE7E3", Highlight: "\uE7E6", PowerButton: "\uE7E8", Tab: "\uE7E9", Admin: "\uE7EF", TVMonitor: "\uE7F4", Speakers: "\uE7F5", Game: "\uE7FC", HorizontalTabKey: "\uE7FD", UnstackSelected: "\uE7FE", StackIndicator: "\uE7FF", Nav2DMapView: "\uE800", StreetsideSplitMinimize: "\uE802", Car: "\uE804", Bus: "\uE806", EatDrink: "\uE807", SeeDo: "\uE808", LocationCircle: "\uE80E", Home: "\uE80F", SwitcherStartEnd: "\uE810", ParkingLocation: "\uE811", IncidentTriangle: "\uE814", Touch: "\uE815", MapDirections: "\uE816", CaretHollow: "\uE817", CaretSolid: "\uE818", History: "\uE81C", Location: "\uE81D", MapLayers: "\uE81E", SearchNearby: "\uE820", Work: "\uE821", Recent: "\uE823", Hotel: "\uE824", Bank: "\uE825", LocationDot: "\uE827", Dictionary: "\uE82D", ChromeBack: "\uE830", FolderOpen: "\uE838", PinnedFill: "\uE842", RevToggleKey: "\uE845", USB: "\uE88E", Previous: "\uE892", Next: "\uE893", Sync: "\uE895", Help: "\uE897", Emoji: "\uE899", MailForward: "\uE89C", ClosePane: "\uE89F", OpenPane: "\uE8A0", PreviewLink: "\uE8A1", ZoomIn: "\uE8A3", Bookmarks: "\uE8A4", Document: "\uE8A5", ProtectedDocument: "\uE8A6", OpenInNewWindow: "\uE8A7", MailFill: "\uE8A8", ViewAll: "\uE8A9", Switch: "\uE8AB", Rename: "\uE8AC", Go: "\uE8AD", Remote: "\uE8AF", SelectAll: "\uE8B3", Orientation: "\uE8B4", Import: "\uE8B5" } };
  Y(r, t);
}
function t_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-2"', src: "url('" + e2 + "fabric-icons-2-63c99abf.woff') format('woff')" }, icons: { Picture: "\uE8B9", ChromeClose: "\uE8BB", ShowResults: "\uE8BC", Message: "\uE8BD", CalendarDay: "\uE8BF", CalendarWeek: "\uE8C0", MailReplyAll: "\uE8C2", Read: "\uE8C3", Cut: "\uE8C6", PaymentCard: "\uE8C7", Copy: "\uE8C8", Important: "\uE8C9", MailReply: "\uE8CA", GotoToday: "\uE8D1", Font: "\uE8D2", FontColor: "\uE8D3", FolderFill: "\uE8D5", Permissions: "\uE8D7", DisableUpdates: "\uE8D8", Unfavorite: "\uE8D9", Italic: "\uE8DB", Underline: "\uE8DC", Bold: "\uE8DD", MoveToFolder: "\uE8DE", Dislike: "\uE8E0", Like: "\uE8E1", AlignCenter: "\uE8E3", OpenFile: "\uE8E5", ClearSelection: "\uE8E6", FontDecrease: "\uE8E7", FontIncrease: "\uE8E8", FontSize: "\uE8E9", CellPhone: "\uE8EA", RepeatOne: "\uE8ED", RepeatAll: "\uE8EE", Calculator: "\uE8EF", Library: "\uE8F1", PostUpdate: "\uE8F3", NewFolder: "\uE8F4", CalendarReply: "\uE8F5", UnsyncFolder: "\uE8F6", SyncFolder: "\uE8F7", BlockContact: "\uE8F8", Accept: "\uE8FB", BulletedList: "\uE8FD", Preview: "\uE8FF", News: "\uE900", Chat: "\uE901", Group: "\uE902", World: "\uE909", Comment: "\uE90A", DockLeft: "\uE90C", DockRight: "\uE90D", Repair: "\uE90F", Accounts: "\uE910", Street: "\uE913", RadioBullet: "\uE915", Stopwatch: "\uE916", Clock: "\uE917", WorldClock: "\uE918", AlarmClock: "\uE919", Photo: "\uE91B", ActionCenter: "\uE91C", Hospital: "\uE91D", Timer: "\uE91E", FullCircleMask: "\uE91F", LocationFill: "\uE920", ChromeMinimize: "\uE921", ChromeRestore: "\uE923", Annotation: "\uE924", Fingerprint: "\uE928", Handwriting: "\uE929", ChromeFullScreen: "\uE92D", Completed: "\uE930", Label: "\uE932", FlickDown: "\uE935", FlickUp: "\uE936", FlickLeft: "\uE937", FlickRight: "\uE938", MiniExpand: "\uE93A", MiniContract: "\uE93B", Streaming: "\uE93E", MusicInCollection: "\uE940", OneDriveLogo: "\uE941", CompassNW: "\uE942", Code: "\uE943", LightningBolt: "\uE945", CalculatorMultiply: "\uE947", CalculatorAddition: "\uE948", CalculatorSubtract: "\uE949", CalculatorPercentage: "\uE94C", CalculatorEqualTo: "\uE94E", PrintfaxPrinterFile: "\uE956", StorageOptical: "\uE958", Communications: "\uE95A", Headset: "\uE95B", Health: "\uE95E", Webcam2: "\uE960", FrontCamera: "\uE96B", ChevronUpSmall: "\uE96D" } };
  Y(r, t);
}
function r_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-3"', src: "url('" + e2 + "fabric-icons-3-089e217a.woff') format('woff')" }, icons: { ChevronDownSmall: "\uE96E", ChevronLeftSmall: "\uE96F", ChevronRightSmall: "\uE970", ChevronUpMed: "\uE971", ChevronDownMed: "\uE972", ChevronLeftMed: "\uE973", ChevronRightMed: "\uE974", Devices2: "\uE975", PC1: "\uE977", PresenceChickletVideo: "\uE979", Reply: "\uE97A", HalfAlpha: "\uE97E", ConstructionCone: "\uE98F", DoubleChevronLeftMed: "\uE991", Volume0: "\uE992", Volume1: "\uE993", Volume2: "\uE994", Volume3: "\uE995", Chart: "\uE999", Robot: "\uE99A", Manufacturing: "\uE99C", LockSolid: "\uE9A2", FitPage: "\uE9A6", FitWidth: "\uE9A7", BidiLtr: "\uE9AA", BidiRtl: "\uE9AB", RightDoubleQuote: "\uE9B1", Sunny: "\uE9BD", CloudWeather: "\uE9BE", Cloudy: "\uE9BF", PartlyCloudyDay: "\uE9C0", PartlyCloudyNight: "\uE9C1", ClearNight: "\uE9C2", RainShowersDay: "\uE9C3", Rain: "\uE9C4", Thunderstorms: "\uE9C6", RainSnow: "\uE9C7", Snow: "\uE9C8", BlowingSnow: "\uE9C9", Frigid: "\uE9CA", Fog: "\uE9CB", Squalls: "\uE9CC", Duststorm: "\uE9CD", Unknown: "\uE9CE", Precipitation: "\uE9CF", Ribbon: "\uE9D1", AreaChart: "\uE9D2", Assign: "\uE9D3", FlowChart: "\uE9D4", CheckList: "\uE9D5", Diagnostic: "\uE9D9", Generate: "\uE9DA", LineChart: "\uE9E6", Equalizer: "\uE9E9", BarChartHorizontal: "\uE9EB", BarChartVertical: "\uE9EC", Freezing: "\uE9EF", FunnelChart: "\uE9F1", Processing: "\uE9F5", Quantity: "\uE9F8", ReportDocument: "\uE9F9", StackColumnChart: "\uE9FC", SnowShowerDay: "\uE9FD", HailDay: "\uEA00", WorkFlow: "\uEA01", HourGlass: "\uEA03", StoreLogoMed20: "\uEA04", TimeSheet: "\uEA05", TriangleSolid: "\uEA08", UpgradeAnalysis: "\uEA0B", VideoSolid: "\uEA0C", RainShowersNight: "\uEA0F", SnowShowerNight: "\uEA11", Teamwork: "\uEA12", HailNight: "\uEA13", PeopleAdd: "\uEA15", Glasses: "\uEA16", DateTime2: "\uEA17", Shield: "\uEA18", Header1: "\uEA19", PageAdd: "\uEA1A", NumberedList: "\uEA1C", PowerBILogo: "\uEA1E", Info2: "\uEA1F", MusicInCollectionFill: "\uEA36", Asterisk: "\uEA38", ErrorBadge: "\uEA39", CircleFill: "\uEA3B", Record2: "\uEA3F", AllAppsMirrored: "\uEA40", BookmarksMirrored: "\uEA41", BulletedListMirrored: "\uEA42", CaretHollowMirrored: "\uEA45", CaretSolidMirrored: "\uEA46", ChromeBackMirrored: "\uEA47", ClearSelectionMirrored: "\uEA48", ClosePaneMirrored: "\uEA49", DockLeftMirrored: "\uEA4C", DoubleChevronLeftMedMirrored: "\uEA4D", GoMirrored: "\uEA4F" } };
  Y(r, t);
}
function n_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-4"', src: "url('" + e2 + "fabric-icons-4-a656cc0a.woff') format('woff')" }, icons: { HelpMirrored: "\uEA51", ImportMirrored: "\uEA52", ImportAllMirrored: "\uEA53", ListMirrored: "\uEA55", MailForwardMirrored: "\uEA56", MailReplyMirrored: "\uEA57", MailReplyAllMirrored: "\uEA58", MiniContractMirrored: "\uEA59", MiniExpandMirrored: "\uEA5A", OpenPaneMirrored: "\uEA5B", ParkingLocationMirrored: "\uEA5E", SendMirrored: "\uEA63", ShowResultsMirrored: "\uEA65", ThumbnailViewMirrored: "\uEA67", Media: "\uEA69", Devices3: "\uEA6C", Focus: "\uEA6F", VideoLightOff: "\uEA74", Lightbulb: "\uEA80", StatusTriangle: "\uEA82", VolumeDisabled: "\uEA85", Puzzle: "\uEA86", EmojiNeutral: "\uEA87", EmojiDisappointed: "\uEA88", HomeSolid: "\uEA8A", Ringer: "\uEA8F", PDF: "\uEA90", HeartBroken: "\uEA92", StoreLogo16: "\uEA96", MultiSelectMirrored: "\uEA98", Broom: "\uEA99", AddToShoppingList: "\uEA9A", Cocktails: "\uEA9D", Wines: "\uEABF", Articles: "\uEAC1", Cycling: "\uEAC7", DietPlanNotebook: "\uEAC8", Pill: "\uEACB", ExerciseTracker: "\uEACC", HandsFree: "\uEAD0", Medical: "\uEAD4", Running: "\uEADA", Weights: "\uEADB", Trackers: "\uEADF", AddNotes: "\uEAE3", AllCurrency: "\uEAE4", BarChart4: "\uEAE7", CirclePlus: "\uEAEE", Coffee: "\uEAEF", Cotton: "\uEAF3", Market: "\uEAFC", Money: "\uEAFD", PieDouble: "\uEB04", PieSingle: "\uEB05", RemoveFilter: "\uEB08", Savings: "\uEB0B", Sell: "\uEB0C", StockDown: "\uEB0F", StockUp: "\uEB11", Lamp: "\uEB19", Source: "\uEB1B", MSNVideos: "\uEB1C", Cricket: "\uEB1E", Golf: "\uEB1F", Baseball: "\uEB20", Soccer: "\uEB21", MoreSports: "\uEB22", AutoRacing: "\uEB24", CollegeHoops: "\uEB25", CollegeFootball: "\uEB26", ProFootball: "\uEB27", ProHockey: "\uEB28", Rugby: "\uEB2D", SubstitutionsIn: "\uEB31", Tennis: "\uEB33", Arrivals: "\uEB34", Design: "\uEB3C", Website: "\uEB41", Drop: "\uEB42", HistoricalWeather: "\uEB43", SkiResorts: "\uEB45", Snowflake: "\uEB46", BusSolid: "\uEB47", FerrySolid: "\uEB48", AirplaneSolid: "\uEB4C", TrainSolid: "\uEB4D", Ticket: "\uEB54", WifiWarning4: "\uEB63", Devices4: "\uEB66", AzureLogo: "\uEB6A", BingLogo: "\uEB6B", MSNLogo: "\uEB6C", OutlookLogoInverse: "\uEB6D", OfficeLogo: "\uEB6E", SkypeLogo: "\uEB6F", Door: "\uEB75", EditMirrored: "\uEB7E", GiftCard: "\uEB8E", DoubleBookmark: "\uEB8F", StatusErrorFull: "\uEB90" } };
  Y(r, t);
}
function o_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-5"', src: "url('" + e2 + "fabric-icons-5-f95ba260.woff') format('woff')" }, icons: { Certificate: "\uEB95", FastForward: "\uEB9D", Rewind: "\uEB9E", Photo2: "\uEB9F", OpenSource: "\uEBC2", Movers: "\uEBCD", CloudDownload: "\uEBD3", Family: "\uEBDA", WindDirection: "\uEBE6", Bug: "\uEBE8", SiteScan: "\uEBEC", BrowserScreenShot: "\uEBED", F12DevTools: "\uEBEE", CSS: "\uEBEF", JS: "\uEBF0", DeliveryTruck: "\uEBF4", ReminderPerson: "\uEBF7", ReminderGroup: "\uEBF8", ReminderTime: "\uEBF9", TabletMode: "\uEBFC", Umbrella: "\uEC04", NetworkTower: "\uEC05", CityNext: "\uEC06", CityNext2: "\uEC07", Section: "\uEC0C", OneNoteLogoInverse: "\uEC0D", ToggleFilled: "\uEC11", ToggleBorder: "\uEC12", SliderThumb: "\uEC13", ToggleThumb: "\uEC14", Documentation: "\uEC17", Badge: "\uEC1B", Giftbox: "\uEC1F", VisualStudioLogo: "\uEC22", HomeGroup: "\uEC26", ExcelLogoInverse: "\uEC28", WordLogoInverse: "\uEC29", PowerPointLogoInverse: "\uEC2A", Cafe: "\uEC32", SpeedHigh: "\uEC4A", Commitments: "\uEC4D", ThisPC: "\uEC4E", MusicNote: "\uEC4F", MicOff: "\uEC54", PlaybackRate1x: "\uEC57", EdgeLogo: "\uEC60", CompletedSolid: "\uEC61", AlbumRemove: "\uEC62", MessageFill: "\uEC70", TabletSelected: "\uEC74", MobileSelected: "\uEC75", LaptopSelected: "\uEC76", TVMonitorSelected: "\uEC77", DeveloperTools: "\uEC7A", Shapes: "\uEC7C", InsertTextBox: "\uEC7D", LowerBrightness: "\uEC8A", WebComponents: "\uEC8B", OfflineStorage: "\uEC8C", DOM: "\uEC8D", CloudUpload: "\uEC8E", ScrollUpDown: "\uEC8F", DateTime: "\uEC92", Event: "\uECA3", Cake: "\uECA4", Org: "\uECA6", PartyLeader: "\uECA7", DRM: "\uECA8", CloudAdd: "\uECA9", AppIconDefault: "\uECAA", Photo2Add: "\uECAB", Photo2Remove: "\uECAC", Calories: "\uECAD", POI: "\uECAF", AddTo: "\uECC8", RadioBtnOff: "\uECCA", RadioBtnOn: "\uECCB", ExploreContent: "\uECCD", Product: "\uECDC", ProgressLoopInner: "\uECDE", ProgressLoopOuter: "\uECDF", Blocked2: "\uECE4", FangBody: "\uECEB", Toolbox: "\uECED", PageHeader: "\uECEE", ChatInviteFriend: "\uECFE", Brush: "\uECFF", Shirt: "\uED00", Crown: "\uED01", Diamond: "\uED02", ScaleUp: "\uED09", QRCode: "\uED14", Feedback: "\uED15", SharepointLogoInverse: "\uED18", YammerLogo: "\uED19", Hide: "\uED1A", Uneditable: "\uED1D", ReturnToSession: "\uED24", OpenFolderHorizontal: "\uED25", CalendarMirrored: "\uED28" } };
  Y(r, t);
}
function i_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-6"', src: "url('" + e2 + "fabric-icons-6-ef6fd590.woff') format('woff')" }, icons: { SwayLogoInverse: "\uED29", OutOfOffice: "\uED34", Trophy: "\uED3F", ReopenPages: "\uED50", EmojiTabSymbols: "\uED58", AADLogo: "\uED68", AccessLogo: "\uED69", AdminALogoInverse32: "\uED6A", AdminCLogoInverse32: "\uED6B", AdminDLogoInverse32: "\uED6C", AdminELogoInverse32: "\uED6D", AdminLLogoInverse32: "\uED6E", AdminMLogoInverse32: "\uED6F", AdminOLogoInverse32: "\uED70", AdminPLogoInverse32: "\uED71", AdminSLogoInverse32: "\uED72", AdminYLogoInverse32: "\uED73", DelveLogoInverse: "\uED76", ExchangeLogoInverse: "\uED78", LyncLogo: "\uED79", OfficeVideoLogoInverse: "\uED7A", SocialListeningLogo: "\uED7C", VisioLogoInverse: "\uED7D", Balloons: "\uED7E", Cat: "\uED7F", MailAlert: "\uED80", MailCheck: "\uED81", MailLowImportance: "\uED82", MailPause: "\uED83", MailRepeat: "\uED84", SecurityGroup: "\uED85", Table: "\uED86", VoicemailForward: "\uED87", VoicemailReply: "\uED88", Waffle: "\uED89", RemoveEvent: "\uED8A", EventInfo: "\uED8B", ForwardEvent: "\uED8C", WipePhone: "\uED8D", AddOnlineMeeting: "\uED8E", JoinOnlineMeeting: "\uED8F", RemoveLink: "\uED90", PeopleBlock: "\uED91", PeopleRepeat: "\uED92", PeopleAlert: "\uED93", PeoplePause: "\uED94", TransferCall: "\uED95", AddPhone: "\uED96", UnknownCall: "\uED97", NoteReply: "\uED98", NoteForward: "\uED99", NotePinned: "\uED9A", RemoveOccurrence: "\uED9B", Timeline: "\uED9C", EditNote: "\uED9D", CircleHalfFull: "\uED9E", Room: "\uED9F", Unsubscribe: "\uEDA0", Subscribe: "\uEDA1", HardDrive: "\uEDA2", RecurringTask: "\uEDB2", TaskManager: "\uEDB7", TaskManagerMirrored: "\uEDB8", Combine: "\uEDBB", Split: "\uEDBC", DoubleChevronUp: "\uEDBD", DoubleChevronLeft: "\uEDBE", DoubleChevronRight: "\uEDBF", TextBox: "\uEDC2", TextField: "\uEDC3", NumberField: "\uEDC4", Dropdown: "\uEDC5", PenWorkspace: "\uEDC6", BookingsLogo: "\uEDC7", ClassNotebookLogoInverse: "\uEDC8", DelveAnalyticsLogo: "\uEDCA", DocsLogoInverse: "\uEDCB", Dynamics365Logo: "\uEDCC", DynamicSMBLogo: "\uEDCD", OfficeAssistantLogo: "\uEDCE", OfficeStoreLogo: "\uEDCF", OneNoteEduLogoInverse: "\uEDD0", PlannerLogo: "\uEDD1", PowerApps: "\uEDD2", Suitcase: "\uEDD3", ProjectLogoInverse: "\uEDD4", CaretLeft8: "\uEDD5", CaretRight8: "\uEDD6", CaretUp8: "\uEDD7", CaretDown8: "\uEDD8", CaretLeftSolid8: "\uEDD9", CaretRightSolid8: "\uEDDA", CaretUpSolid8: "\uEDDB", CaretDownSolid8: "\uEDDC", ClearFormatting: "\uEDDD", Superscript: "\uEDDE", Subscript: "\uEDDF", Strikethrough: "\uEDE0", Export: "\uEDE1", ExportMirrored: "\uEDE2" } };
  Y(r, t);
}
function a_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-7"', src: "url('" + e2 + "fabric-icons-7-2b97bb99.woff') format('woff')" }, icons: { SingleBookmark: "\uEDFF", SingleBookmarkSolid: "\uEE00", DoubleChevronDown: "\uEE04", FollowUser: "\uEE05", ReplyAll: "\uEE0A", WorkforceManagement: "\uEE0F", RecruitmentManagement: "\uEE12", Questionnaire: "\uEE19", ManagerSelfService: "\uEE23", ProductionFloorManagement: "\uEE29", ProductRelease: "\uEE2E", ProductVariant: "\uEE30", ReplyMirrored: "\uEE35", ReplyAllMirrored: "\uEE36", Medal: "\uEE38", AddGroup: "\uEE3D", QuestionnaireMirrored: "\uEE4B", CloudImportExport: "\uEE55", TemporaryUser: "\uEE58", CaretSolid16: "\uEE62", GroupedDescending: "\uEE66", GroupedAscending: "\uEE67", AwayStatus: "\uEE6A", MyMoviesTV: "\uEE6C", GenericScan: "\uEE6F", AustralianRules: "\uEE70", WifiEthernet: "\uEE77", TrackersMirrored: "\uEE92", DateTimeMirrored: "\uEE93", StopSolid: "\uEE95", DoubleChevronUp12: "\uEE96", DoubleChevronDown12: "\uEE97", DoubleChevronLeft12: "\uEE98", DoubleChevronRight12: "\uEE99", CalendarAgenda: "\uEE9A", ConnectVirtualMachine: "\uEE9D", AddEvent: "\uEEB5", AssetLibrary: "\uEEB6", DataConnectionLibrary: "\uEEB7", DocLibrary: "\uEEB8", FormLibrary: "\uEEB9", FormLibraryMirrored: "\uEEBA", ReportLibrary: "\uEEBB", ReportLibraryMirrored: "\uEEBC", ContactCard: "\uEEBD", CustomList: "\uEEBE", CustomListMirrored: "\uEEBF", IssueTracking: "\uEEC0", IssueTrackingMirrored: "\uEEC1", PictureLibrary: "\uEEC2", OfficeAddinsLogo: "\uEEC7", OfflineOneDriveParachute: "\uEEC8", OfflineOneDriveParachuteDisabled: "\uEEC9", TriangleSolidUp12: "\uEECC", TriangleSolidDown12: "\uEECD", TriangleSolidLeft12: "\uEECE", TriangleSolidRight12: "\uEECF", TriangleUp12: "\uEED0", TriangleDown12: "\uEED1", TriangleLeft12: "\uEED2", TriangleRight12: "\uEED3", ArrowUpRight8: "\uEED4", ArrowDownRight8: "\uEED5", DocumentSet: "\uEED6", GoToDashboard: "\uEEED", DelveAnalytics: "\uEEEE", ArrowUpRightMirrored8: "\uEEEF", ArrowDownRightMirrored8: "\uEEF0", CompanyDirectory: "\uEF0D", OpenEnrollment: "\uEF1C", CompanyDirectoryMirrored: "\uEF2B", OneDriveAdd: "\uEF32", ProfileSearch: "\uEF35", Header2: "\uEF36", Header3: "\uEF37", Header4: "\uEF38", RingerSolid: "\uEF3A", Eyedropper: "\uEF3C", MarketDown: "\uEF42", CalendarWorkWeek: "\uEF51", SidePanel: "\uEF52", GlobeFavorite: "\uEF53", CaretTopLeftSolid8: "\uEF54", CaretTopRightSolid8: "\uEF55", ViewAll2: "\uEF56", DocumentReply: "\uEF57", PlayerSettings: "\uEF58", ReceiptForward: "\uEF59", ReceiptReply: "\uEF5A", ReceiptCheck: "\uEF5B", Fax: "\uEF5C", RecurringEvent: "\uEF5D", ReplyAlt: "\uEF5E", ReplyAllAlt: "\uEF5F", EditStyle: "\uEF60", EditMail: "\uEF61", Lifesaver: "\uEF62", LifesaverLock: "\uEF63", InboxCheck: "\uEF64", FolderSearch: "\uEF65" } };
  Y(r, t);
}
function s_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-8"', src: "url('" + e2 + "fabric-icons-8-6fdf1528.woff') format('woff')" }, icons: { CollapseMenu: "\uEF66", ExpandMenu: "\uEF67", Boards: "\uEF68", SunAdd: "\uEF69", SunQuestionMark: "\uEF6A", LandscapeOrientation: "\uEF6B", DocumentSearch: "\uEF6C", PublicCalendar: "\uEF6D", PublicContactCard: "\uEF6E", PublicEmail: "\uEF6F", PublicFolder: "\uEF70", WordDocument: "\uEF71", PowerPointDocument: "\uEF72", ExcelDocument: "\uEF73", GroupedList: "\uEF74", ClassroomLogo: "\uEF75", Sections: "\uEF76", EditPhoto: "\uEF77", Starburst: "\uEF78", ShareiOS: "\uEF79", AirTickets: "\uEF7A", PencilReply: "\uEF7B", Tiles2: "\uEF7C", SkypeCircleCheck: "\uEF7D", SkypeCircleClock: "\uEF7E", SkypeCircleMinus: "\uEF7F", SkypeMessage: "\uEF83", ClosedCaption: "\uEF84", ATPLogo: "\uEF85", OfficeFormsLogoInverse: "\uEF86", RecycleBin: "\uEF87", EmptyRecycleBin: "\uEF88", Hide2: "\uEF89", Breadcrumb: "\uEF8C", BirthdayCake: "\uEF8D", TimeEntry: "\uEF95", CRMProcesses: "\uEFB1", PageEdit: "\uEFB6", PageArrowRight: "\uEFB8", PageRemove: "\uEFBA", Database: "\uEFC7", DataManagementSettings: "\uEFC8", CRMServices: "\uEFD2", EditContact: "\uEFD3", ConnectContacts: "\uEFD4", AppIconDefaultAdd: "\uEFDA", AppIconDefaultList: "\uEFDE", ActivateOrders: "\uEFE0", DeactivateOrders: "\uEFE1", ProductCatalog: "\uEFE8", ScatterChart: "\uEFEB", AccountActivity: "\uEFF4", DocumentManagement: "\uEFFC", CRMReport: "\uEFFE", KnowledgeArticle: "\uF000", Relationship: "\uF003", HomeVerify: "\uF00E", ZipFolder: "\uF012", SurveyQuestions: "\uF01B", TextDocument: "\uF029", TextDocumentShared: "\uF02B", PageCheckedOut: "\uF02C", PageShared: "\uF02D", SaveAndClose: "\uF038", Script: "\uF03A", Archive: "\uF03F", ActivityFeed: "\uF056", Compare: "\uF057", EventDate: "\uF059", ArrowUpRight: "\uF069", CaretRight: "\uF06B", SetAction: "\uF071", ChatBot: "\uF08B", CaretSolidLeft: "\uF08D", CaretSolidDown: "\uF08E", CaretSolidRight: "\uF08F", CaretSolidUp: "\uF090", PowerAppsLogo: "\uF091", PowerApps2Logo: "\uF092", SearchIssue: "\uF09A", SearchIssueMirrored: "\uF09B", FabricAssetLibrary: "\uF09C", FabricDataConnectionLibrary: "\uF09D", FabricDocLibrary: "\uF09E", FabricFormLibrary: "\uF09F", FabricFormLibraryMirrored: "\uF0A0", FabricReportLibrary: "\uF0A1", FabricReportLibraryMirrored: "\uF0A2", FabricPublicFolder: "\uF0A3", FabricFolderSearch: "\uF0A4", FabricMovetoFolder: "\uF0A5", FabricUnsyncFolder: "\uF0A6", FabricSyncFolder: "\uF0A7", FabricOpenFolderHorizontal: "\uF0A8", FabricFolder: "\uF0A9", FabricFolderFill: "\uF0AA", FabricNewFolder: "\uF0AB", FabricPictureLibrary: "\uF0AC", PhotoVideoMedia: "\uF0B1", AddFavorite: "\uF0C8" } };
  Y(r, t);
}
function u_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-9"', src: "url('" + e2 + "fabric-icons-9-c6162b42.woff') format('woff')" }, icons: { AddFavoriteFill: "\uF0C9", BufferTimeBefore: "\uF0CF", BufferTimeAfter: "\uF0D0", BufferTimeBoth: "\uF0D1", PublishContent: "\uF0D4", ClipboardList: "\uF0E3", ClipboardListMirrored: "\uF0E4", CannedChat: "\uF0F2", SkypeForBusinessLogo: "\uF0FC", TabCenter: "\uF100", PageCheckedin: "\uF104", PageList: "\uF106", ReadOutLoud: "\uF112", CaretBottomLeftSolid8: "\uF121", CaretBottomRightSolid8: "\uF122", FolderHorizontal: "\uF12B", MicrosoftStaffhubLogo: "\uF130", GiftboxOpen: "\uF133", StatusCircleOuter: "\uF136", StatusCircleInner: "\uF137", StatusCircleRing: "\uF138", StatusTriangleOuter: "\uF139", StatusTriangleInner: "\uF13A", StatusTriangleExclamation: "\uF13B", StatusCircleExclamation: "\uF13C", StatusCircleErrorX: "\uF13D", StatusCircleInfo: "\uF13F", StatusCircleBlock: "\uF140", StatusCircleBlock2: "\uF141", StatusCircleQuestionMark: "\uF142", StatusCircleSync: "\uF143", Toll: "\uF160", ExploreContentSingle: "\uF164", CollapseContent: "\uF165", CollapseContentSingle: "\uF166", InfoSolid: "\uF167", GroupList: "\uF168", ProgressRingDots: "\uF16A", CaloriesAdd: "\uF172", BranchFork: "\uF173", MuteChat: "\uF17A", AddHome: "\uF17B", AddWork: "\uF17C", MobileReport: "\uF18A", ScaleVolume: "\uF18C", HardDriveGroup: "\uF18F", FastMode: "\uF19A", ToggleLeft: "\uF19E", ToggleRight: "\uF19F", TriangleShape: "\uF1A7", RectangleShape: "\uF1A9", CubeShape: "\uF1AA", Trophy2: "\uF1AE", BucketColor: "\uF1B6", BucketColorFill: "\uF1B7", Taskboard: "\uF1C2", SingleColumn: "\uF1D3", DoubleColumn: "\uF1D4", TripleColumn: "\uF1D5", ColumnLeftTwoThirds: "\uF1D6", ColumnRightTwoThirds: "\uF1D7", AccessLogoFill: "\uF1DB", AnalyticsLogo: "\uF1DE", AnalyticsQuery: "\uF1DF", NewAnalyticsQuery: "\uF1E0", AnalyticsReport: "\uF1E1", WordLogo: "\uF1E3", WordLogoFill: "\uF1E4", ExcelLogo: "\uF1E5", ExcelLogoFill: "\uF1E6", OneNoteLogo: "\uF1E7", OneNoteLogoFill: "\uF1E8", OutlookLogo: "\uF1E9", OutlookLogoFill: "\uF1EA", PowerPointLogo: "\uF1EB", PowerPointLogoFill: "\uF1EC", PublisherLogo: "\uF1ED", PublisherLogoFill: "\uF1EE", ScheduleEventAction: "\uF1EF", FlameSolid: "\uF1F3", ServerProcesses: "\uF1FE", Server: "\uF201", SaveAll: "\uF203", LinkedInLogo: "\uF20A", Decimals: "\uF218", SidePanelMirrored: "\uF221", ProtectRestrict: "\uF22A", Blog: "\uF22B", UnknownMirrored: "\uF22E", PublicContactCardMirrored: "\uF230", GridViewSmall: "\uF232", GridViewMedium: "\uF233", GridViewLarge: "\uF234", Step: "\uF241", StepInsert: "\uF242", StepShared: "\uF243", StepSharedAdd: "\uF244", StepSharedInsert: "\uF245", ViewDashboard: "\uF246", ViewList: "\uF247" } };
  Y(r, t);
}
function l_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-10"', src: "url('" + e2 + "fabric-icons-10-c4ded8e4.woff') format('woff')" }, icons: { ViewListGroup: "\uF248", ViewListTree: "\uF249", TriggerAuto: "\uF24A", TriggerUser: "\uF24B", PivotChart: "\uF24C", StackedBarChart: "\uF24D", StackedLineChart: "\uF24E", BuildQueue: "\uF24F", BuildQueueNew: "\uF250", UserFollowed: "\uF25C", ContactLink: "\uF25F", Stack: "\uF26F", Bullseye: "\uF272", VennDiagram: "\uF273", FiveTileGrid: "\uF274", FocalPoint: "\uF277", Insert: "\uF278", RingerRemove: "\uF279", TeamsLogoInverse: "\uF27A", TeamsLogo: "\uF27B", TeamsLogoFill: "\uF27C", SkypeForBusinessLogoFill: "\uF27D", SharepointLogo: "\uF27E", SharepointLogoFill: "\uF27F", DelveLogo: "\uF280", DelveLogoFill: "\uF281", OfficeVideoLogo: "\uF282", OfficeVideoLogoFill: "\uF283", ExchangeLogo: "\uF284", ExchangeLogoFill: "\uF285", Signin: "\uF286", DocumentApproval: "\uF28B", CloneToDesktop: "\uF28C", InstallToDrive: "\uF28D", Blur: "\uF28E", Build: "\uF28F", ProcessMetaTask: "\uF290", BranchFork2: "\uF291", BranchLocked: "\uF292", BranchCommit: "\uF293", BranchCompare: "\uF294", BranchMerge: "\uF295", BranchPullRequest: "\uF296", BranchSearch: "\uF297", BranchShelveset: "\uF298", RawSource: "\uF299", MergeDuplicate: "\uF29A", RowsGroup: "\uF29B", RowsChild: "\uF29C", Deploy: "\uF29D", Redeploy: "\uF29E", ServerEnviroment: "\uF29F", VisioDiagram: "\uF2A0", HighlightMappedShapes: "\uF2A1", TextCallout: "\uF2A2", IconSetsFlag: "\uF2A4", VisioLogo: "\uF2A7", VisioLogoFill: "\uF2A8", VisioDocument: "\uF2A9", TimelineProgress: "\uF2AA", TimelineDelivery: "\uF2AB", Backlog: "\uF2AC", TeamFavorite: "\uF2AD", TaskGroup: "\uF2AE", TaskGroupMirrored: "\uF2AF", ScopeTemplate: "\uF2B0", AssessmentGroupTemplate: "\uF2B1", NewTeamProject: "\uF2B2", CommentAdd: "\uF2B3", CommentNext: "\uF2B4", CommentPrevious: "\uF2B5", ShopServer: "\uF2B6", LocaleLanguage: "\uF2B7", QueryList: "\uF2B8", UserSync: "\uF2B9", UserPause: "\uF2BA", StreamingOff: "\uF2BB", ArrowTallUpLeft: "\uF2BD", ArrowTallUpRight: "\uF2BE", ArrowTallDownLeft: "\uF2BF", ArrowTallDownRight: "\uF2C0", FieldEmpty: "\uF2C1", FieldFilled: "\uF2C2", FieldChanged: "\uF2C3", FieldNotChanged: "\uF2C4", RingerOff: "\uF2C5", PlayResume: "\uF2C6", BulletedList2: "\uF2C7", BulletedList2Mirrored: "\uF2C8", ImageCrosshair: "\uF2C9", GitGraph: "\uF2CA", Repo: "\uF2CB", RepoSolid: "\uF2CC", FolderQuery: "\uF2CD", FolderList: "\uF2CE", FolderListMirrored: "\uF2CF", LocationOutline: "\uF2D0", POISolid: "\uF2D1", CalculatorNotEqualTo: "\uF2D2", BoxSubtractSolid: "\uF2D3" } };
  Y(r, t);
}
function c_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-11"', src: "url('" + e2 + "fabric-icons-11-2a8393d6.woff') format('woff')" }, icons: { BoxAdditionSolid: "\uF2D4", BoxMultiplySolid: "\uF2D5", BoxPlaySolid: "\uF2D6", BoxCheckmarkSolid: "\uF2D7", CirclePauseSolid: "\uF2D8", CirclePause: "\uF2D9", MSNVideosSolid: "\uF2DA", CircleStopSolid: "\uF2DB", CircleStop: "\uF2DC", NavigateBack: "\uF2DD", NavigateBackMirrored: "\uF2DE", NavigateForward: "\uF2DF", NavigateForwardMirrored: "\uF2E0", UnknownSolid: "\uF2E1", UnknownMirroredSolid: "\uF2E2", CircleAddition: "\uF2E3", CircleAdditionSolid: "\uF2E4", FilePDB: "\uF2E5", FileTemplate: "\uF2E6", FileSQL: "\uF2E7", FileJAVA: "\uF2E8", FileASPX: "\uF2E9", FileCSS: "\uF2EA", FileSass: "\uF2EB", FileLess: "\uF2EC", FileHTML: "\uF2ED", JavaScriptLanguage: "\uF2EE", CSharpLanguage: "\uF2EF", CSharp: "\uF2F0", VisualBasicLanguage: "\uF2F1", VB: "\uF2F2", CPlusPlusLanguage: "\uF2F3", CPlusPlus: "\uF2F4", FSharpLanguage: "\uF2F5", FSharp: "\uF2F6", TypeScriptLanguage: "\uF2F7", PythonLanguage: "\uF2F8", PY: "\uF2F9", CoffeeScript: "\uF2FA", MarkDownLanguage: "\uF2FB", FullWidth: "\uF2FE", FullWidthEdit: "\uF2FF", Plug: "\uF300", PlugSolid: "\uF301", PlugConnected: "\uF302", PlugDisconnected: "\uF303", UnlockSolid: "\uF304", Variable: "\uF305", Parameter: "\uF306", CommentUrgent: "\uF307", Storyboard: "\uF308", DiffInline: "\uF309", DiffSideBySide: "\uF30A", ImageDiff: "\uF30B", ImagePixel: "\uF30C", FileBug: "\uF30D", FileCode: "\uF30E", FileComment: "\uF30F", BusinessHoursSign: "\uF310", FileImage: "\uF311", FileSymlink: "\uF312", AutoFillTemplate: "\uF313", WorkItem: "\uF314", WorkItemBug: "\uF315", LogRemove: "\uF316", ColumnOptions: "\uF317", Packages: "\uF318", BuildIssue: "\uF319", AssessmentGroup: "\uF31A", VariableGroup: "\uF31B", FullHistory: "\uF31C", Wheelchair: "\uF31F", SingleColumnEdit: "\uF321", DoubleColumnEdit: "\uF322", TripleColumnEdit: "\uF323", ColumnLeftTwoThirdsEdit: "\uF324", ColumnRightTwoThirdsEdit: "\uF325", StreamLogo: "\uF329", PassiveAuthentication: "\uF32A", AlertSolid: "\uF331", MegaphoneSolid: "\uF332", TaskSolid: "\uF333", ConfigurationSolid: "\uF334", BugSolid: "\uF335", CrownSolid: "\uF336", Trophy2Solid: "\uF337", QuickNoteSolid: "\uF338", ConstructionConeSolid: "\uF339", PageListSolid: "\uF33A", PageListMirroredSolid: "\uF33B", StarburstSolid: "\uF33C", ReadingModeSolid: "\uF33D", SadSolid: "\uF33E", HealthSolid: "\uF33F", ShieldSolid: "\uF340", GiftBoxSolid: "\uF341", ShoppingCartSolid: "\uF342", MailSolid: "\uF343", ChatSolid: "\uF344", RibbonSolid: "\uF345" } };
  Y(r, t);
}
function f_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-12"', src: "url('" + e2 + "fabric-icons-12-7e945a1e.woff') format('woff')" }, icons: { FinancialSolid: "\uF346", FinancialMirroredSolid: "\uF347", HeadsetSolid: "\uF348", PermissionsSolid: "\uF349", ParkingSolid: "\uF34A", ParkingMirroredSolid: "\uF34B", DiamondSolid: "\uF34C", AsteriskSolid: "\uF34D", OfflineStorageSolid: "\uF34E", BankSolid: "\uF34F", DecisionSolid: "\uF350", Parachute: "\uF351", ParachuteSolid: "\uF352", FiltersSolid: "\uF353", ColorSolid: "\uF354", ReviewSolid: "\uF355", ReviewRequestSolid: "\uF356", ReviewRequestMirroredSolid: "\uF357", ReviewResponseSolid: "\uF358", FeedbackRequestSolid: "\uF359", FeedbackRequestMirroredSolid: "\uF35A", FeedbackResponseSolid: "\uF35B", WorkItemBar: "\uF35C", WorkItemBarSolid: "\uF35D", Separator: "\uF35E", NavigateExternalInline: "\uF35F", PlanView: "\uF360", TimelineMatrixView: "\uF361", EngineeringGroup: "\uF362", ProjectCollection: "\uF363", CaretBottomRightCenter8: "\uF364", CaretBottomLeftCenter8: "\uF365", CaretTopRightCenter8: "\uF366", CaretTopLeftCenter8: "\uF367", DonutChart: "\uF368", ChevronUnfold10: "\uF369", ChevronFold10: "\uF36A", DoubleChevronDown8: "\uF36B", DoubleChevronUp8: "\uF36C", DoubleChevronLeft8: "\uF36D", DoubleChevronRight8: "\uF36E", ChevronDownEnd6: "\uF36F", ChevronUpEnd6: "\uF370", ChevronLeftEnd6: "\uF371", ChevronRightEnd6: "\uF372", ContextMenu: "\uF37C", AzureAPIManagement: "\uF37F", AzureServiceEndpoint: "\uF380", VSTSLogo: "\uF381", VSTSAltLogo1: "\uF382", VSTSAltLogo2: "\uF383", FileTypeSolution: "\uF387", WordLogoInverse16: "\uF390", WordLogo16: "\uF391", WordLogoFill16: "\uF392", PowerPointLogoInverse16: "\uF393", PowerPointLogo16: "\uF394", PowerPointLogoFill16: "\uF395", ExcelLogoInverse16: "\uF396", ExcelLogo16: "\uF397", ExcelLogoFill16: "\uF398", OneNoteLogoInverse16: "\uF399", OneNoteLogo16: "\uF39A", OneNoteLogoFill16: "\uF39B", OutlookLogoInverse16: "\uF39C", OutlookLogo16: "\uF39D", OutlookLogoFill16: "\uF39E", PublisherLogoInverse16: "\uF39F", PublisherLogo16: "\uF3A0", PublisherLogoFill16: "\uF3A1", VisioLogoInverse16: "\uF3A2", VisioLogo16: "\uF3A3", VisioLogoFill16: "\uF3A4", TestBeaker: "\uF3A5", TestBeakerSolid: "\uF3A6", TestExploreSolid: "\uF3A7", TestAutoSolid: "\uF3A8", TestUserSolid: "\uF3A9", TestImpactSolid: "\uF3AA", TestPlan: "\uF3AB", TestStep: "\uF3AC", TestParameter: "\uF3AD", TestSuite: "\uF3AE", TestCase: "\uF3AF", Sprint: "\uF3B0", SignOut: "\uF3B1", TriggerApproval: "\uF3B2", Rocket: "\uF3B3", AzureKeyVault: "\uF3B4", Onboarding: "\uF3BA", Transition: "\uF3BC", LikeSolid: "\uF3BF", DislikeSolid: "\uF3C0", CRMCustomerInsightsApp: "\uF3C8", EditCreate: "\uF3C9", PlayReverseResume: "\uF3E4", PlayReverse: "\uF3E5", SearchData: "\uF3F1", UnSetColor: "\uF3F9", DeclineCall: "\uF405" } };
  Y(r, t);
}
function d_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-13"', src: "url('" + e2 + "fabric-icons-13-c3989a02.woff') format('woff')" }, icons: { RectangularClipping: "\uF407", TeamsLogo16: "\uF40A", TeamsLogoFill16: "\uF40B", Spacer: "\uF40D", SkypeLogo16: "\uF40E", SkypeForBusinessLogo16: "\uF40F", SkypeForBusinessLogoFill16: "\uF410", FilterSolid: "\uF412", MailUndelivered: "\uF415", MailTentative: "\uF416", MailTentativeMirrored: "\uF417", MailReminder: "\uF418", ReceiptUndelivered: "\uF419", ReceiptTentative: "\uF41A", ReceiptTentativeMirrored: "\uF41B", Inbox: "\uF41C", IRMReply: "\uF41D", IRMReplyMirrored: "\uF41E", IRMForward: "\uF41F", IRMForwardMirrored: "\uF420", VoicemailIRM: "\uF421", EventAccepted: "\uF422", EventTentative: "\uF423", EventTentativeMirrored: "\uF424", EventDeclined: "\uF425", IDBadge: "\uF427", BackgroundColor: "\uF42B", OfficeFormsLogoInverse16: "\uF433", OfficeFormsLogo: "\uF434", OfficeFormsLogoFill: "\uF435", OfficeFormsLogo16: "\uF436", OfficeFormsLogoFill16: "\uF437", OfficeFormsLogoInverse24: "\uF43A", OfficeFormsLogo24: "\uF43B", OfficeFormsLogoFill24: "\uF43C", PageLock: "\uF43F", NotExecuted: "\uF440", NotImpactedSolid: "\uF441", FieldReadOnly: "\uF442", FieldRequired: "\uF443", BacklogBoard: "\uF444", ExternalBuild: "\uF445", ExternalTFVC: "\uF446", ExternalXAML: "\uF447", IssueSolid: "\uF448", DefectSolid: "\uF449", LadybugSolid: "\uF44A", NugetLogo: "\uF44C", TFVCLogo: "\uF44D", ProjectLogo32: "\uF47E", ProjectLogoFill32: "\uF47F", ProjectLogo16: "\uF480", ProjectLogoFill16: "\uF481", SwayLogo32: "\uF482", SwayLogoFill32: "\uF483", SwayLogo16: "\uF484", SwayLogoFill16: "\uF485", ClassNotebookLogo32: "\uF486", ClassNotebookLogoFill32: "\uF487", ClassNotebookLogo16: "\uF488", ClassNotebookLogoFill16: "\uF489", ClassNotebookLogoInverse32: "\uF48A", ClassNotebookLogoInverse16: "\uF48B", StaffNotebookLogo32: "\uF48C", StaffNotebookLogoFill32: "\uF48D", StaffNotebookLogo16: "\uF48E", StaffNotebookLogoFill16: "\uF48F", StaffNotebookLogoInverted32: "\uF490", StaffNotebookLogoInverted16: "\uF491", KaizalaLogo: "\uF492", TaskLogo: "\uF493", ProtectionCenterLogo32: "\uF494", GallatinLogo: "\uF496", Globe2: "\uF49A", Guitar: "\uF49B", Breakfast: "\uF49C", Brunch: "\uF49D", BeerMug: "\uF49E", Vacation: "\uF49F", Teeth: "\uF4A0", Taxi: "\uF4A1", Chopsticks: "\uF4A2", SyncOccurence: "\uF4A3", UnsyncOccurence: "\uF4A4", GIF: "\uF4A9", PrimaryCalendar: "\uF4AE", SearchCalendar: "\uF4AF", VideoOff: "\uF4B0", MicrosoftFlowLogo: "\uF4B1", BusinessCenterLogo: "\uF4B2", ToDoLogoBottom: "\uF4B3", ToDoLogoTop: "\uF4B4", EditSolid12: "\uF4B5", EditSolidMirrored12: "\uF4B6", UneditableSolid12: "\uF4B7", UneditableSolidMirrored12: "\uF4B8", UneditableMirrored: "\uF4B9", AdminALogo32: "\uF4BA", AdminALogoFill32: "\uF4BB", ToDoLogoInverse: "\uF4BC" } };
  Y(r, t);
}
function p_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-14"', src: "url('" + e2 + "fabric-icons-14-5cf58db8.woff') format('woff')" }, icons: { Snooze: "\uF4BD", WaffleOffice365: "\uF4E0", ImageSearch: "\uF4E8", NewsSearch: "\uF4E9", VideoSearch: "\uF4EA", R: "\uF4EB", FontColorA: "\uF4EC", FontColorSwatch: "\uF4ED", LightWeight: "\uF4EE", NormalWeight: "\uF4EF", SemiboldWeight: "\uF4F0", GroupObject: "\uF4F1", UngroupObject: "\uF4F2", AlignHorizontalLeft: "\uF4F3", AlignHorizontalCenter: "\uF4F4", AlignHorizontalRight: "\uF4F5", AlignVerticalTop: "\uF4F6", AlignVerticalCenter: "\uF4F7", AlignVerticalBottom: "\uF4F8", HorizontalDistributeCenter: "\uF4F9", VerticalDistributeCenter: "\uF4FA", Ellipse: "\uF4FB", Line: "\uF4FC", Octagon: "\uF4FD", Hexagon: "\uF4FE", Pentagon: "\uF4FF", RightTriangle: "\uF500", HalfCircle: "\uF501", QuarterCircle: "\uF502", ThreeQuarterCircle: "\uF503", "6PointStar": "\uF504", "12PointStar": "\uF505", ArrangeBringToFront: "\uF506", ArrangeSendToBack: "\uF507", ArrangeSendBackward: "\uF508", ArrangeBringForward: "\uF509", BorderDash: "\uF50A", BorderDot: "\uF50B", LineStyle: "\uF50C", LineThickness: "\uF50D", WindowEdit: "\uF50E", HintText: "\uF50F", MediaAdd: "\uF510", AnchorLock: "\uF511", AutoHeight: "\uF512", ChartSeries: "\uF513", ChartXAngle: "\uF514", ChartYAngle: "\uF515", Combobox: "\uF516", LineSpacing: "\uF517", Padding: "\uF518", PaddingTop: "\uF519", PaddingBottom: "\uF51A", PaddingLeft: "\uF51B", PaddingRight: "\uF51C", NavigationFlipper: "\uF51D", AlignJustify: "\uF51E", TextOverflow: "\uF51F", VisualsFolder: "\uF520", VisualsStore: "\uF521", PictureCenter: "\uF522", PictureFill: "\uF523", PicturePosition: "\uF524", PictureStretch: "\uF525", PictureTile: "\uF526", Slider: "\uF527", SliderHandleSize: "\uF528", DefaultRatio: "\uF529", NumberSequence: "\uF52A", GUID: "\uF52B", ReportAdd: "\uF52C", DashboardAdd: "\uF52D", MapPinSolid: "\uF52E", WebPublish: "\uF52F", PieSingleSolid: "\uF530", BlockedSolid: "\uF531", DrillDown: "\uF532", DrillDownSolid: "\uF533", DrillExpand: "\uF534", DrillShow: "\uF535", SpecialEvent: "\uF536", OneDriveFolder16: "\uF53B", FunctionalManagerDashboard: "\uF542", BIDashboard: "\uF543", CodeEdit: "\uF544", RenewalCurrent: "\uF545", RenewalFuture: "\uF546", SplitObject: "\uF547", BulkUpload: "\uF548", DownloadDocument: "\uF549", GreetingCard: "\uF54B", Flower: "\uF54E", WaitlistConfirm: "\uF550", WaitlistConfirmMirrored: "\uF551", LaptopSecure: "\uF552", DragObject: "\uF553", EntryView: "\uF554", EntryDecline: "\uF555", ContactCardSettings: "\uF556", ContactCardSettingsMirrored: "\uF557" } };
  Y(r, t);
}
function m_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-15"', src: "url('" + e2 + "fabric-icons-15-3807251b.woff') format('woff')" }, icons: { CalendarSettings: "\uF558", CalendarSettingsMirrored: "\uF559", HardDriveLock: "\uF55A", HardDriveUnlock: "\uF55B", AccountManagement: "\uF55C", ReportWarning: "\uF569", TransitionPop: "\uF5B2", TransitionPush: "\uF5B3", TransitionEffect: "\uF5B4", LookupEntities: "\uF5B5", ExploreData: "\uF5B6", AddBookmark: "\uF5B7", SearchBookmark: "\uF5B8", DrillThrough: "\uF5B9", MasterDatabase: "\uF5BA", CertifiedDatabase: "\uF5BB", MaximumValue: "\uF5BC", MinimumValue: "\uF5BD", VisualStudioIDELogo32: "\uF5D0", PasteAsText: "\uF5D5", PasteAsCode: "\uF5D6", BrowserTab: "\uF5D7", BrowserTabScreenshot: "\uF5D8", DesktopScreenshot: "\uF5D9", FileYML: "\uF5DA", ClipboardSolid: "\uF5DC", FabricUserFolder: "\uF5E5", FabricNetworkFolder: "\uF5E6", BullseyeTarget: "\uF5F0", AnalyticsView: "\uF5F1", Video360Generic: "\uF609", Untag: "\uF60B", Leave: "\uF627", Trending12: "\uF62D", Blocked12: "\uF62E", Warning12: "\uF62F", CheckedOutByOther12: "\uF630", CheckedOutByYou12: "\uF631", CircleShapeSolid: "\uF63C", SquareShapeSolid: "\uF63D", TriangleShapeSolid: "\uF63E", DropShapeSolid: "\uF63F", RectangleShapeSolid: "\uF640", ZoomToFit: "\uF649", InsertColumnsLeft: "\uF64A", InsertColumnsRight: "\uF64B", InsertRowsAbove: "\uF64C", InsertRowsBelow: "\uF64D", DeleteColumns: "\uF64E", DeleteRows: "\uF64F", DeleteRowsMirrored: "\uF650", DeleteTable: "\uF651", AccountBrowser: "\uF652", VersionControlPush: "\uF664", StackedColumnChart2: "\uF666", TripleColumnWide: "\uF66E", QuadColumn: "\uF66F", WhiteBoardApp16: "\uF673", WhiteBoardApp32: "\uF674", PinnedSolid: "\uF676", InsertSignatureLine: "\uF677", ArrangeByFrom: "\uF678", Phishing: "\uF679", CreateMailRule: "\uF67A", PublishCourse: "\uF699", DictionaryRemove: "\uF69A", UserRemove: "\uF69B", UserEvent: "\uF69C", Encryption: "\uF69D", PasswordField: "\uF6AA", OpenInNewTab: "\uF6AB", Hide3: "\uF6AC", VerifiedBrandSolid: "\uF6AD", MarkAsProtected: "\uF6AE", AuthenticatorApp: "\uF6B1", WebTemplate: "\uF6B2", DefenderTVM: "\uF6B3", MedalSolid: "\uF6B9", D365TalentLearn: "\uF6BB", D365TalentInsight: "\uF6BC", D365TalentHRCore: "\uF6BD", BacklogList: "\uF6BF", ButtonControl: "\uF6C0", TableGroup: "\uF6D9", MountainClimbing: "\uF6DB", TagUnknown: "\uF6DF", TagUnknownMirror: "\uF6E0", TagUnknown12: "\uF6E1", TagUnknown12Mirror: "\uF6E2", Link12: "\uF6E3", Presentation: "\uF6E4", Presentation12: "\uF6E5", Lock12: "\uF6E6", BuildDefinition: "\uF6E9", ReleaseDefinition: "\uF6EA", SaveTemplate: "\uF6EC", UserGauge: "\uF6ED", BlockedSiteSolid12: "\uF70A", TagSolid: "\uF70E", OfficeChat: "\uF70F" } };
  Y(r, t);
}
function h_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-16"', src: "url('" + e2 + "fabric-icons-16-9cf93f3b.woff') format('woff')" }, icons: { OfficeChatSolid: "\uF710", MailSchedule: "\uF72E", WarningSolid: "\uF736", Blocked2Solid: "\uF737", SkypeCircleArrow: "\uF747", SkypeArrow: "\uF748", SyncStatus: "\uF751", SyncStatusSolid: "\uF752", ProjectDocument: "\uF759", ToDoLogoOutline: "\uF75B", VisioOnlineLogoFill32: "\uF75F", VisioOnlineLogo32: "\uF760", VisioOnlineLogoCloud32: "\uF761", VisioDiagramSync: "\uF762", Event12: "\uF763", EventDateMissed12: "\uF764", UserOptional: "\uF767", ResponsesMenu: "\uF768", DoubleDownArrow: "\uF769", DistributeDown: "\uF76A", BookmarkReport: "\uF76B", FilterSettings: "\uF76C", GripperDotsVertical: "\uF772", MailAttached: "\uF774", AddIn: "\uF775", LinkedDatabase: "\uF779", TableLink: "\uF77A", PromotedDatabase: "\uF77D", BarChartVerticalFilter: "\uF77E", BarChartVerticalFilterSolid: "\uF77F", MicOff2: "\uF781", MicrosoftTranslatorLogo: "\uF782", ShowTimeAs: "\uF787", FileRequest: "\uF789", WorkItemAlert: "\uF78F", PowerBILogo16: "\uF790", PowerBILogoBackplate16: "\uF791", BulletedListText: "\uF792", BulletedListBullet: "\uF793", BulletedListTextMirrored: "\uF794", BulletedListBulletMirrored: "\uF795", NumberedListText: "\uF796", NumberedListNumber: "\uF797", NumberedListTextMirrored: "\uF798", NumberedListNumberMirrored: "\uF799", RemoveLinkChain: "\uF79A", RemoveLinkX: "\uF79B", FabricTextHighlight: "\uF79C", ClearFormattingA: "\uF79D", ClearFormattingEraser: "\uF79E", Photo2Fill: "\uF79F", IncreaseIndentText: "\uF7A0", IncreaseIndentArrow: "\uF7A1", DecreaseIndentText: "\uF7A2", DecreaseIndentArrow: "\uF7A3", IncreaseIndentTextMirrored: "\uF7A4", IncreaseIndentArrowMirrored: "\uF7A5", DecreaseIndentTextMirrored: "\uF7A6", DecreaseIndentArrowMirrored: "\uF7A7", CheckListText: "\uF7A8", CheckListCheck: "\uF7A9", CheckListTextMirrored: "\uF7AA", CheckListCheckMirrored: "\uF7AB", NumberSymbol: "\uF7AC", Coupon: "\uF7BC", VerifiedBrand: "\uF7BD", ReleaseGate: "\uF7BE", ReleaseGateCheck: "\uF7BF", ReleaseGateError: "\uF7C0", M365InvoicingLogo: "\uF7C1", RemoveFromShoppingList: "\uF7D5", ShieldAlert: "\uF7D7", FabricTextHighlightComposite: "\uF7DA", Dataflows: "\uF7DD", GenericScanFilled: "\uF7DE", DiagnosticDataBarTooltip: "\uF7DF", SaveToMobile: "\uF7E0", Orientation2: "\uF7E1", ScreenCast: "\uF7E2", ShowGrid: "\uF7E3", SnapToGrid: "\uF7E4", ContactList: "\uF7E5", NewMail: "\uF7EA", EyeShadow: "\uF7EB", FabricFolderConfirm: "\uF7FF", InformationBarriers: "\uF803", CommentActive: "\uF804", ColumnVerticalSectionEdit: "\uF806", WavingHand: "\uF807", ShakeDevice: "\uF80A", SmartGlassRemote: "\uF80B", Rotate90Clockwise: "\uF80D", Rotate90CounterClockwise: "\uF80E", CampaignTemplate: "\uF811", ChartTemplate: "\uF812", PageListFilter: "\uF813", SecondaryNav: "\uF814", ColumnVerticalSection: "\uF81E", SkypeCircleSlash: "\uF825", SkypeSlash: "\uF826" } };
  Y(r, t);
}
function v_(e2, t) {
  e2 === void 0 && (e2 = "");
  var r = { style: { MozOsxFontSmoothing: "grayscale", WebkitFontSmoothing: "antialiased", fontStyle: "normal", fontWeight: "normal", speak: "none" }, fontFace: { fontFamily: '"FabricMDL2Icons-17"', src: "url('" + e2 + "fabric-icons-17-0c4ed701.woff') format('woff')" }, icons: { CustomizeToolbar: "\uF828", DuplicateRow: "\uF82A", RemoveFromTrash: "\uF82B", MailOptions: "\uF82C", Childof: "\uF82D", Footer: "\uF82E", Header: "\uF82F", BarChartVerticalFill: "\uF830", StackedColumnChart2Fill: "\uF831", PlainText: "\uF834", AccessibiltyChecker: "\uF835", DatabaseSync: "\uF842", ReservationOrders: "\uF845", TabOneColumn: "\uF849", TabTwoColumn: "\uF84A", TabThreeColumn: "\uF84B", BulletedTreeList: "\uF84C", MicrosoftTranslatorLogoGreen: "\uF852", MicrosoftTranslatorLogoBlue: "\uF853", InternalInvestigation: "\uF854", AddReaction: "\uF85D", ContactHeart: "\uF862", VisuallyImpaired: "\uF866", EventToDoLogo: "\uF869", Variable2: "\uF86D", ModelingView: "\uF871", DisconnectVirtualMachine: "\uF873", ReportLock: "\uF875", Uneditable2: "\uF876", Uneditable2Mirrored: "\uF877", BarChartVerticalEdit: "\uF89D", GlobalNavButtonActive: "\uF89F", PollResults: "\uF8A0", Rerun: "\uF8A1", QandA: "\uF8A2", QandAMirror: "\uF8A3", BookAnswers: "\uF8A4", AlertSettings: "\uF8B6", TrimStart: "\uF8BB", TrimEnd: "\uF8BC", TableComputed: "\uF8F5", DecreaseIndentLegacy: "\uE290", IncreaseIndentLegacy: "\uE291", SizeLegacy: "\uE2B2" } };
  Y(r, t);
}
var g_ = function() {
  Fn("trash", "delete"), Fn("onedrive", "onedrivelogo"), Fn("alertsolid12", "eventdatemissed12"), Fn("sixpointstar", "6pointstar"), Fn("twelvepointstar", "12pointstar"), Fn("toggleon", "toggleleft"), Fn("toggleoff", "toggleright");
};
nn("@fluentui/font-icons-mdl2", "8.1.17");
var II = "https://spoppe-b.azureedge.net/files/fabric-cdn-prod_20210407.001/assets/icons/";
function y_(e2, t) {
  e2 === void 0 && (e2 = II), [ZS, JS, e_, t_, r_, n_, o_, i_, a_, s_, u_, l_, c_, f_, d_, p_, m_, h_, v_].forEach(function(r) {
    return r(e2, t);
  }), g_();
}
var RI = `body {
  padding: 0;
  margin: 0;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
`;
var bh = document.createElement("style");
bh.setAttribute("data-sourceFile", "src/reset.global.css");
bh.appendChild(document.createTextNode(RI));
document.head.appendChild(bh);
y_();
var AI = document.getElementById("root");
var PI = XS;
performance.mark("start");
(0, C_.render)(E_.createElement(PI, null), AI);
performance.mark("end");
performance.measure("render", "start", "end");
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

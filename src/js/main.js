!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 59));
})([
  function (t, e, n) {
    (function (e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof e && e) ||
        Function("return this")();
    }.call(this, n(61)));
  },
  function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e);
    };
  },
  function (t, e, n) {
    var r = n(5),
      o = n(7),
      i = n(14);
    t.exports = r
      ? function (t, e, n) {
          return o.f(t, e, i(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(13),
      i = n(1),
      c = n(24),
      u = n(30),
      a = n(44),
      s = o("wks"),
      f = r.Symbol,
      l = a ? f : c;
    t.exports = function (t) {
      return (
        i(s, t) || (u && i(f, t) ? (s[t] = f[t]) : (s[t] = l("Symbol." + t))),
        s[t]
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, n) {
    var r = n(4);
    t.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e, n) {
    var r = n(5),
      o = n(37),
      i = n(8),
      c = n(22),
      u = Object.defineProperty;
    e.f = r
      ? u
      : function (t, e, n) {
          if ((i(t), (e = c(e, !0)), i(n), o))
            try {
              return u(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        };
  },
  function (t, e, n) {
    var r = n(6);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(21),
      o = n(11);
    t.exports = function (t) {
      return r(o(t));
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(20).f,
      i = n(2),
      c = n(12),
      u = n(23),
      a = n(40),
      s = n(67);
    t.exports = function (t, e) {
      var n,
        f,
        l,
        p,
        v,
        d = t.target,
        y = t.global,
        m = t.stat;
      if ((n = y ? r : m ? r[d] || u(d, {}) : (r[d] || {}).prototype))
        for (f in e) {
          if (
            ((p = e[f]),
            (l = t.noTargetGet ? (v = o(n, f)) && v.value : n[f]),
            !s(y ? f : d + (m ? "." : "#") + f, t.forced) && void 0 !== l)
          ) {
            if (typeof p == typeof l) continue;
            a(p, l);
          }
          (t.sham || (l && l.sham)) && i(p, "sham", !0), c(n, f, p, t);
        }
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(13),
      i = n(2),
      c = n(1),
      u = n(23),
      a = n(39),
      s = n(17),
      f = s.get,
      l = s.enforce,
      p = String(a).split("toString");
    o("inspectSource", function (t) {
      return a.call(t);
    }),
      (t.exports = function (t, e, n, o) {
        var a = !!o && !!o.unsafe,
          s = !!o && !!o.enumerable,
          f = !!o && !!o.noTargetGet;
        "function" == typeof n &&
          ("string" != typeof e || c(n, "name") || i(n, "name", e),
          (l(n).source = p.join("string" == typeof e ? e : ""))),
          t !== r
            ? (a ? !f && t[e] && (s = !0) : delete t[e],
              s ? (t[e] = n) : i(t, e, n))
            : s
            ? (t[e] = n)
            : u(e, n);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && f(this).source) || a.call(this);
      });
  },
  function (t, e, n) {
    var r = n(16),
      o = n(62);
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.4.2",
      mode: r ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, n) {
    var r,
      o,
      i,
      c = n(63),
      u = n(0),
      a = n(6),
      s = n(2),
      f = n(1),
      l = n(18),
      p = n(19),
      v = u.WeakMap;
    if (c) {
      var d = new v(),
        y = d.get,
        m = d.has,
        g = d.set;
      (r = function (t, e) {
        return g.call(d, t, e), e;
      }),
        (o = function (t) {
          return y.call(d, t) || {};
        }),
        (i = function (t) {
          return m.call(d, t);
        });
    } else {
      var h = l("state");
      (p[h] = !0),
        (r = function (t, e) {
          return s(t, h, e), e;
        }),
        (o = function (t) {
          return f(t, h) ? t[h] : {};
        }),
        (i = function (t) {
          return f(t, h);
        });
    }
    t.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function (t) {
        return i(t) ? o(t) : r(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!a(e) || (n = o(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      },
    };
  },
  function (t, e, n) {
    var r = n(13),
      o = n(24),
      i = r("keys");
    t.exports = function (t) {
      return i[t] || (i[t] = o(t));
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(5),
      o = n(36),
      i = n(14),
      c = n(9),
      u = n(22),
      a = n(1),
      s = n(37),
      f = Object.getOwnPropertyDescriptor;
    e.f = r
      ? f
      : function (t, e) {
          if (((t = c(t)), (e = u(e, !0)), s))
            try {
              return f(t, e);
            } catch (t) {}
          if (a(t, e)) return i(!o.f.call(t, e), t[e]);
        };
  },
  function (t, e, n) {
    var r = n(4),
      o = n(15),
      i = "".split;
    t.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == o(t) ? i.call(t, "") : Object(t);
        }
      : Object;
  },
  function (t, e, n) {
    var r = n(6);
    t.exports = function (t, e) {
      if (!r(t)) return t;
      var n, o;
      if (e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
        return o;
      if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
      if (!e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(2);
    t.exports = function (t, e) {
      try {
        o(r, t, e);
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  },
  function (t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++n + r).toString(36)
      );
    };
  },
  function (t, e, n) {
    var r = n(41),
      o = n(0),
      i = function (t) {
        return "function" == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? i(r[t]) || i(o[t])
        : (r[t] && r[t][e]) || (o[t] && o[t][e]);
    };
  },
  function (t, e, n) {
    var r = n(42),
      o = n(29).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e, n) {
    var r = n(28),
      o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  },
  function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, e, n) {
    var r = n(4);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function () {
        return !String(Symbol());
      });
  },
  function (t, e, n) {
    var r = n(11);
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  function (t, e, n) {
    var r = n(8),
      o = n(68),
      i = n(29),
      c = n(19),
      u = n(69),
      a = n(38),
      s = n(18)("IE_PROTO"),
      f = function () {},
      l = function () {
        var t,
          e = a("iframe"),
          n = i.length;
        for (
          e.style.display = "none",
            u.appendChild(e),
            e.src = String("javascript:"),
            (t = e.contentWindow.document).open(),
            t.write("<script>document.F=Object</script>"),
            t.close(),
            l = t.F;
          n--;

        )
          delete l.prototype[i[n]];
        return l();
      };
    (t.exports =
      Object.create ||
      function (t, e) {
        var n;
        return (
          null !== t
            ? ((f.prototype = r(t)),
              (n = new f()),
              (f.prototype = null),
              (n[s] = t))
            : (n = l()),
          void 0 === e ? n : o(n, e)
        );
      }),
      (c[s] = !0);
  },
  function (t, e, n) {
    var r = n(7).f,
      o = n(1),
      i = n(3)("toStringTag");
    t.exports = function (t, e, n) {
      t &&
        !o((t = n ? t : t.prototype), i) &&
        r(t, i, { configurable: !0, value: e });
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = {};
    (r[n(3)("toStringTag")] = "z"), (t.exports = "[object z]" === String(r));
  },
  function (t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({ 1: 2 }, 1);
    e.f = i
      ? function (t) {
          var e = o(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  function (t, e, n) {
    var r = n(5),
      o = n(4),
      i = n(38);
    t.exports =
      !r &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(i("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, n) {
    var r = n(0),
      o = n(6),
      i = r.document,
      c = o(i) && o(i.createElement);
    t.exports = function (t) {
      return c ? i.createElement(t) : {};
    };
  },
  function (t, e, n) {
    var r = n(13);
    t.exports = r("native-function-to-string", Function.toString);
  },
  function (t, e, n) {
    var r = n(1),
      o = n(64),
      i = n(20),
      c = n(7);
    t.exports = function (t, e) {
      for (var n = o(e), u = c.f, a = i.f, s = 0; s < n.length; s++) {
        var f = n[s];
        r(t, f) || u(t, f, a(e, f));
      }
    };
  },
  function (t, e, n) {
    t.exports = n(0);
  },
  function (t, e, n) {
    var r = n(1),
      o = n(9),
      i = n(65).indexOf,
      c = n(19);
    t.exports = function (t, e) {
      var n,
        u = o(t),
        a = 0,
        s = [];
      for (n in u) !r(c, n) && r(u, n) && s.push(n);
      for (; e.length > a; ) r(u, (n = e[a++])) && (~i(s, n) || s.push(n));
      return s;
    };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var r = n(30);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol();
  },
  function (t, e, n) {
    var r = n(15);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == r(t);
      };
  },
  function (t, e, n) {
    var r = n(42),
      o = n(29);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e, n) {
    e.f = n(3);
  },
  function (t, e, n) {
    var r = n(41),
      o = n(1),
      i = n(47),
      c = n(7).f;
    t.exports = function (t) {
      var e = r.Symbol || (r.Symbol = {});
      o(e, t) || c(e, t, { value: i.f(t) });
    };
  },
  function (t, e, n) {
    var r = n(71),
      o = n(21),
      i = n(31),
      c = n(27),
      u = n(73),
      a = [].push,
      s = function (t) {
        var e = 1 == t,
          n = 2 == t,
          s = 3 == t,
          f = 4 == t,
          l = 6 == t,
          p = 5 == t || l;
        return function (v, d, y, m) {
          for (
            var g,
              h,
              b = i(v),
              x = o(b),
              S = r(d, y, 3),
              _ = c(x.length),
              w = 0,
              O = m || u,
              L = e ? O(v, _) : n ? O(v, 0) : void 0;
            _ > w;
            w++
          )
            if ((p || w in x) && ((h = S((g = x[w]), w, b)), t))
              if (e) L[w] = h;
              else if (h)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return g;
                  case 6:
                    return w;
                  case 2:
                    a.call(L, g);
                }
              else if (f) return !1;
          return l ? -1 : s || f ? f : L;
        };
      };
    t.exports = {
      forEach: s(0),
      map: s(1),
      filter: s(2),
      some: s(3),
      every: s(4),
      find: s(5),
      findIndex: s(6),
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(9),
      o = n(76),
      i = n(34),
      c = n(17),
      u = n(51),
      a = c.set,
      s = c.getterFor("Array Iterator");
    (t.exports = u(
      Array,
      "Array",
      function (t, e) {
        a(this, { type: "Array Iterator", target: r(t), index: 0, kind: e });
      },
      function () {
        var t = s(this),
          e = t.target,
          n = t.kind,
          r = t.index++;
        return !e || r >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: r, done: !1 }
          : "values" == n
          ? { value: e[r], done: !1 }
          : { value: [r, e[r]], done: !1 };
      },
      "values"
    )),
      (i.Arguments = i.Array),
      o("keys"),
      o("values"),
      o("entries");
  },
  function (t, e, n) {
    "use strict";
    var r = n(10),
      o = n(77),
      i = n(53),
      c = n(79),
      u = n(33),
      a = n(2),
      s = n(12),
      f = n(3),
      l = n(16),
      p = n(34),
      v = n(52),
      d = v.IteratorPrototype,
      y = v.BUGGY_SAFARI_ITERATORS,
      m = f("iterator"),
      g = function () {
        return this;
      };
    t.exports = function (t, e, n, f, v, h, b) {
      o(n, e, f);
      var x,
        S,
        _,
        w = function (t) {
          if (t === v && E) return E;
          if (!y && t in T) return T[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        O = e + " Iterator",
        L = !1,
        T = t.prototype,
        j = T[m] || T["@@iterator"] || (v && T[v]),
        E = (!y && j) || w(v),
        A = ("Array" == e && T.entries) || j;
      if (
        (A &&
          ((x = i(A.call(new t()))),
          d !== Object.prototype &&
            x.next &&
            (l ||
              i(x) === d ||
              (c ? c(x, d) : "function" != typeof x[m] && a(x, m, g)),
            u(x, O, !0, !0),
            l && (p[O] = g))),
        "values" == v &&
          j &&
          "values" !== j.name &&
          ((L = !0),
          (E = function () {
            return j.call(this);
          })),
        (l && !b) || T[m] === E || a(T, m, E),
        (p[e] = E),
        v)
      )
        if (
          ((S = {
            values: w("values"),
            keys: h ? E : w("keys"),
            entries: w("entries"),
          }),
          b)
        )
          for (_ in S) (!y && !L && _ in T) || s(T, _, S[_]);
        else r({ target: e, proto: !0, forced: y || L }, S);
      return S;
    };
  },
  function (t, e, n) {
    "use strict";
    var r,
      o,
      i,
      c = n(53),
      u = n(2),
      a = n(1),
      s = n(3),
      f = n(16),
      l = s("iterator"),
      p = !1;
    [].keys &&
      ("next" in (i = [].keys())
        ? (o = c(c(i))) !== Object.prototype && (r = o)
        : (p = !0)),
      null == r && (r = {}),
      f ||
        a(r, l) ||
        u(r, l, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p });
  },
  function (t, e, n) {
    var r = n(1),
      o = n(31),
      i = n(18),
      c = n(78),
      u = i("IE_PROTO"),
      a = Object.prototype;
    t.exports = c
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = o(t)),
            r(t, u)
              ? t[u]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? a
              : null
          );
        };
  },
  function (t, e, n) {
    "use strict";
    var r = n(4);
    t.exports = function (t, e) {
      var n = [][t];
      return (
        !n ||
        !r(function () {
          n.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (t, e, n) {
    var r = n(28),
      o = n(11),
      i = function (t) {
        return function (e, n) {
          var i,
            c,
            u = String(o(e)),
            a = r(n),
            s = u.length;
          return a < 0 || a >= s
            ? t
              ? ""
              : void 0
            : (i = u.charCodeAt(a)) < 55296 ||
              i > 56319 ||
              a + 1 === s ||
              (c = u.charCodeAt(a + 1)) < 56320 ||
              c > 57343
            ? t
              ? u.charAt(a)
              : i
            : t
            ? u.slice(a, a + 2)
            : c - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: i(!1), charAt: i(!0) };
  },
  function (t, e, n) {
    "use strict";
    var r,
      o,
      i = n(89),
      c = RegExp.prototype.exec,
      u = String.prototype.replace,
      a = c,
      s =
        ((r = /a/),
        (o = /b*/g),
        c.call(r, "a"),
        c.call(o, "a"),
        0 !== r.lastIndex || 0 !== o.lastIndex),
      f = void 0 !== /()??/.exec("")[1];
    (s || f) &&
      (a = function (t) {
        var e,
          n,
          r,
          o,
          a = this;
        return (
          f && (n = new RegExp("^" + a.source + "$(?!\\s)", i.call(a))),
          s && (e = a.lastIndex),
          (r = c.call(a, t)),
          s && r && (a.lastIndex = a.global ? r.index + r[0].length : e),
          f &&
            r &&
            r.length > 1 &&
            u.call(r[0], n, function () {
              for (o = 1; o < arguments.length - 2; o++)
                void 0 === arguments[o] && (r[o] = void 0);
            }),
          r
        );
      }),
      (t.exports = a);
  },
  function (t, e) {
    t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
  },
  function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    n(60),
      n(74),
      n(75),
      n(50),
      n(81),
      n(82),
      n(83),
      n(86),
      n(87),
      n(92),
      n(95),
      n(97);
    window.addEventListener("DOMContentLoaded", function () {
      var t,
        e,
        n,
        r,
        o,
        i,
        c,
        u,
        a,
        s = {
          almaty: {
            introText: "Разных размеров и типов перфорации",
            introTitle:
              '<span class="text_green">ПЕРФОРИРОВАННЫЕ ЛИСТЫ</span> ВЫСОКОГО КАЧЕСТВА',
            introSubtitle: "Доставка в любых объемах по Казахстану",
            assortmentTitle:
              'ВИДЫ <span class="text_green">ПЕРФОРИРОВАННЫX<br>ЛИСТОВ</span> В НАЛИЧИИ',
            assortmentText:
              "В изготовлении перфорированных листов применяются нержавеющий, оцинкованный, стальной (горячекатаной и холоднокатаной) или алюминиевый металл. В зависимости от требований предлагаем подходящие по размеру и материалу листы с доставкой по городу Алматы и всей стране. По доступной стоимости предлагаются листы с разной формой отверстий и расположением.",
            questionTitle:
              'ОСТАЛИСЬ ВОПРОСЫ? <span class="text_green">ОСТАВЬТЕ ЗАЯВКУ</span>',
            questionText:
              "Благодаря большому ассортименту мы подберем перфолисты под любые требования заказчика. Предлагаем листы в нестандартных размерах, любой толщины и видом перфорации. Для заказа в Казахстане нажимайте “Оставить заявку” и специалисты свяжутся с Вами. ",
            name: "DANEX LTD-ALMATY",
            email: "almaty@perfograd.kz",
            phone: "+7 (771) 033 0434",
            address: "г.Алматы<br>ул. Ауэзова 1б",
            mapLink:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.8668036590985!2d76.90262949727055!3d43.23821574705604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369fca7ab5057%3A0x735672ae89d4d07d!2sDANEX%20LTD-ALMATY!5e0!3m2!1sru!2sua!4v1661700274780!5m2!1sru!2sua",
          },
          nursultan: {
            introText: "Разных размеров и типов перфорации",
            introTitle:
              '<span class="text_green">ПЕРФОРИРОВАННЫЕ ЛИСТЫ</span> ВЫСОКОГО КАЧЕСТВА',
            introSubtitle: "Доставка в любых объемах по Казахстану",
            assortmentTitle:
              'ВИДЫ <span class="text_green">ПЕРФОРИРОВАННЫX<br>ЛИСТОВ</span> В НАЛИЧИИ',
            assortmentText:
              "В изготовлении перфорированных листов применяются нержавеющий, оцинкованный, стальной (горячекатаной и холоднокатаной) или алюминиевый металл. В зависимости от требований предлагаем подходящие по размеру и материалу листы с доставкой по городу Нур-Султан и всей стране. По доступной стоимости предлагаются листы с разной формой отверстий и расположением.",
            questionTitle:
              'ОСТАЛИСЬ ВОПРОСЫ? <span class="text_green">ОСТАВЬТЕ ЗАЯВКУ</span>',
            questionText:
              "Благодаря большому ассортименту мы подберем перфолисты под любые требования заказчика. Предлагаем листы в нестандартных размерах, любой толщины и видом перфорации. Для заказа в Казахстане нажимайте “Оставить заявку” и специалисты свяжутся с Вами.",
            name: "DANEX LTD",
            email: "Danexltd@mail.ru",
            phone: "+ 7 (707) 550-84-88",
            address: "Г. Нур-Султан<br>\n      УЛ. Пушкина, 42 оф. 33",
            mapLink:
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1413.92990659563!2d71.48702208096599!3d51.17832002712885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424581aa16dcfb93%3A0x76b3bab62ea9361b!2z0YPQuy4g0JDQu9C10LrRgdCw0L3QtNGA0LAg0J_Rg9GI0LrQuNC90LAgNDIsINCd0YPRgC3QodGD0LvRgtCw0L0gMDIwMDAwLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2sua!4v1661523309333!5m2!1sru!2sua",
          },
        };
      function f(t, e) {
        new window.JustValidate(t, {
          rules: e,
          messages: {
            name: "Укажите имя",
            email: "Укажите E-mail",
            phone: "Укажите телефон",
            question: "Укажите вопрос",
          },
          submitHandler: function (t) {
            console.log(t);
            var e = document.querySelector(".alert");
            e && e.remove();
            var n = document.createElement("div");
            n.classList.add("alert");
            var r = new FormData(t),
              o = new XMLHttpRequest();
            (o.onreadystatechange = function () {
              4 === o.readyState &&
                (200 === o.status
                  ? ((n.innerText = "Заявка успешно отправлена."), t.append(n))
                  : ((n.innerText =
                      "Ошибка, не удалось отправить заявку, попробуйте еще раз."),
                    t.append(n)),
                t.reset()),
                setTimeout(function () {
                  n.remove();
                }, 3e3);
            }),
              o.open("POST", "/mailer/smart.php", !0),
              o.send(r);
          },
        });
      }
      function l(t, e, n, r) {
        var o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : null,
          i = document.querySelector(e),
          c = !1;
        t && (c = document.querySelectorAll(t)),
          (function (t, e, n) {
            var r,
              i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
            t
              ? t.forEach(function (t) {
                  t.addEventListener("click", function () {
                    e.classList.add(n),
                      (document.body.style.overflow = "hidden");
                  });
                })
              : (i && (r = window.localStorage.getItem(o)),
                r ||
                  (e.classList.add(n),
                  (document.body.style.overflow = "hidden")));
          })(c, i, r, o),
          (function (t, e, n) {
            t.querySelector(e).addEventListener("click", function () {
              t.setAttribute("class", "modal"),
                (document.body.style.overflow = "visible");
            }),
              t.addEventListener("click", function (t) {
                t.target.classList.contains(n) &&
                  (t.target.classList.remove(n),
                  (document.body.style.overflow = "visible"));
              });
          })(i, n, r);
      }
      function p(t, e, n, r, o, i, c, u, a, s, f, l, p, v, d, y) {
        var m = document.querySelectorAll(t),
          g = document.querySelectorAll(n),
          h = document.querySelector(r),
          b = document.querySelectorAll(o),
          x = document.querySelector(i),
          S = document.querySelector(c),
          _ = document.querySelectorAll(u),
          w = document.querySelector(a),
          O = document.querySelector(f),
          L = document.querySelector(s),
          T = document.querySelector(l),
          j = document.querySelector(p),
          E = document.querySelector(v),
          A = document.querySelector(d);
        function q(t) {
          try {
            (w.textContent = t.introText),
              (L.innerHTML = t.introTitle),
              (O.textContent = t.introSubtitle),
              (T.innerHTML = t.assortmentTitle),
              (j.textContent = t.assortmentText),
              (E.innerHTML = t.questionTitle),
              (A.textContent = t.questionText),
              (x.src = t.mapLink),
              (S.innerHTML = t.address),
              _.forEach(function (e) {
                e.innerHTML = t.name;
              }),
              g.forEach(function (e) {
                e.value = t.email;
              }),
              b.forEach(function (e) {
                (e.textContent = t.phone),
                  (e.href = "tel:".concat(
                    (function (t) {
                      return t.match(/(\+|\d)/g).join("");
                    })(t.phone)
                  ));
              }),
              (h.innerHTML = t.email),
              (h.href = "mailto:".concat(t.email));
          } catch (t) {
            console.log(t);
          }
        }
        var P = window.localStorage.getItem(e) || "Нур-Султан";
        m.forEach(function (t) {
          t.textContent = P;
        }),
          q("Алматы" == P ? y.almaty : y.nursultan);
      }
      function v(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          r = document.querySelectorAll(t),
          o = document.querySelector(e);
        r.forEach(function (t) {
          t.addEventListener("click", function (e) {
            e.preventDefault(),
              window.localStorage.setItem("city", t.textContent.trim()),
              n &&
                (o.classList.remove(n),
                (document.body.style.overflow = "visible"));
            try {
              document
                .querySelector(".footer__change-city")
                .classList.remove("change__city_active");
            } catch (t) {}
            p(
              ".current__city",
              "city",
              '[name="admin_email"]',
              ".contact-email",
              ".contact-phone",
              ".footer__map iframe",
              ".address",
              ".company-name",
              ".intro__text",
              ".intro__title",
              ".intro__subtitle",
              ".assortment__title",
              ".assortment__description",
              ".question__title",
              ".question__text",
              s
            );
          });
        });
      }
      function d(t, e) {
        document.querySelector(t).addEventListener("click", function (t) {
          t.preventDefault(),
            document.querySelector(e).classList.toggle("change__city_active");
        });
      }
      new WOW().init(),
        (t = '[name="phone"'),
        (e = "+7(999)999-99-99"),
        (n = document.querySelectorAll(t)),
        new Inputmask(e).mask(n),
        f("#question-form", {
          name: { required: !0 },
          phone: { required: !0 },
          email: { required: !0, email: !0 },
        }),
        f("#order-form", {
          name: { required: !0 },
          phone: { required: !0 },
          email: { required: !0, email: !0 },
        }),
        f("#call-form", {
          name: { required: !0 },
          phone: { required: !0 },
          email: { required: !0, email: !0 },
        }),
        (r = ".burger"),
        (o = ".navbar"),
        (i = "burger_active"),
        (c = "navbar_active"),
        (u = document.querySelector(r)),
        (a = document.querySelector(o)),
        u.addEventListener("click", function () {
          u.classList.toggle(i), a.classList.toggle(c);
        }),
        l(!1, "#city", ".modal__close", "modal_active", "city"),
        l(".assortment__button", "#order", ".modal__close", "modal_active"),
        l(".call_button", "#call", ".modal__close", "modal_active"),
        p(
          ".current__city",
          "city",
          '[name="admin_email"]',
          ".contact-email",
          ".contact-phone",
          ".footer__map iframe",
          ".address",
          ".company-name",
          ".intro__text",
          ".intro__title",
          ".intro__subtitle",
          ".assortment__title",
          ".assortment__description",
          ".question__title",
          ".question__text",
          s
        ),
        v(".modal__button", "#city", "modal_active"),
        v(".change__city-button"),
        d(".contacts__item_choice", ".header__change-city"),
        d(".footer__select-city", ".footer__change-city"),
        document.querySelectorAll(".assortment__button").forEach(function (t) {
          t.addEventListener("click", function (e) {
            e.preventDefault();
            var n = t.parentElement,
              r = n.querySelector(".assortment__name").textContent,
              o = n.querySelector(".assortment__details").textContent,
              i = document.querySelector('[name="order-title"]'),
              c = document.querySelector('[name="order-details"]');
            (i.value = r), (c.value = o);
          });
        }),
        (function () {
          var t = document.querySelectorAll('a[href^="#"]'),
            e = !0,
            n = !1,
            r = void 0;
          try {
            for (
              var o,
                i = function () {
                  var t = o.value;
                  t.addEventListener("click", function (e) {
                    var n = t.getAttribute("href");
                    try {
                      var r = document.querySelector(".navbar"),
                        o = document.querySelector(".burger");
                      r.classList.remove("navbar_active"),
                        o.classList.remove("burger_active");
                    } catch (t) {}
                    document
                      .querySelector(n)
                      .scrollIntoView({ behavior: "smooth", block: "start" }),
                      history.pushState(null, null, n),
                      e.preventDefault();
                  });
                },
                c = t[Symbol.iterator]();
              !(e = (o = c.next()).done);
              e = !0
            )
              i();
          } catch (t) {
            (n = !0), (r = t);
          } finally {
            try {
              e || null == c.return || c.return();
            } finally {
              if (n) throw r;
            }
          }
        })();
    });
  },
  function (t, e, n) {
    "use strict";
    var r = n(10),
      o = n(0),
      i = n(25),
      c = n(16),
      u = n(5),
      a = n(30),
      s = n(44),
      f = n(4),
      l = n(1),
      p = n(45),
      v = n(6),
      d = n(8),
      y = n(31),
      m = n(9),
      g = n(22),
      h = n(14),
      b = n(32),
      x = n(46),
      S = n(26),
      _ = n(70),
      w = n(43),
      O = n(20),
      L = n(7),
      T = n(36),
      j = n(2),
      E = n(12),
      A = n(13),
      q = n(18),
      P = n(19),
      I = n(24),
      k = n(3),
      M = n(47),
      C = n(48),
      D = n(33),
      R = n(17),
      N = n(49).forEach,
      F = q("hidden"),
      G = k("toPrimitive"),
      H = R.set,
      V = R.getterFor("Symbol"),
      Q = Object.prototype,
      Y = o.Symbol,
      z = i("JSON", "stringify"),
      W = O.f,
      X = L.f,
      J = _.f,
      $ = T.f,
      B = A("symbols"),
      U = A("op-symbols"),
      K = A("string-to-symbol-registry"),
      Z = A("symbol-to-string-registry"),
      tt = A("wks"),
      et = o.QObject,
      nt = !et || !et.prototype || !et.prototype.findChild,
      rt =
        u &&
        f(function () {
          return (
            7 !=
            b(
              X({}, "a", {
                get: function () {
                  return X(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (t, e, n) {
              var r = W(Q, e);
              r && delete Q[e], X(t, e, n), r && t !== Q && X(Q, e, r);
            }
          : X,
      ot = function (t, e) {
        var n = (B[t] = b(Y.prototype));
        return (
          H(n, { type: "Symbol", tag: t, description: e }),
          u || (n.description = e),
          n
        );
      },
      it =
        a && "symbol" == typeof Y.iterator
          ? function (t) {
              return "symbol" == typeof t;
            }
          : function (t) {
              return Object(t) instanceof Y;
            },
      ct = function (t, e, n) {
        t === Q && ct(U, e, n), d(t);
        var r = g(e, !0);
        return (
          d(n),
          l(B, r)
            ? (n.enumerable
                ? (l(t, F) && t[F][r] && (t[F][r] = !1),
                  (n = b(n, { enumerable: h(0, !1) })))
                : (l(t, F) || X(t, F, h(1, {})), (t[F][r] = !0)),
              rt(t, r, n))
            : X(t, r, n)
        );
      },
      ut = function (t, e) {
        d(t);
        var n = m(e),
          r = x(n).concat(lt(n));
        return (
          N(r, function (e) {
            (u && !at.call(n, e)) || ct(t, e, n[e]);
          }),
          t
        );
      },
      at = function (t) {
        var e = g(t, !0),
          n = $.call(this, e);
        return (
          !(this === Q && l(B, e) && !l(U, e)) &&
          (!(n || !l(this, e) || !l(B, e) || (l(this, F) && this[F][e])) || n)
        );
      },
      st = function (t, e) {
        var n = m(t),
          r = g(e, !0);
        if (n !== Q || !l(B, r) || l(U, r)) {
          var o = W(n, r);
          return (
            !o || !l(B, r) || (l(n, F) && n[F][r]) || (o.enumerable = !0), o
          );
        }
      },
      ft = function (t) {
        var e = J(m(t)),
          n = [];
        return (
          N(e, function (t) {
            l(B, t) || l(P, t) || n.push(t);
          }),
          n
        );
      },
      lt = function (t) {
        var e = t === Q,
          n = J(e ? U : m(t)),
          r = [];
        return (
          N(n, function (t) {
            !l(B, t) || (e && !l(Q, t)) || r.push(B[t]);
          }),
          r
        );
      };
    (a ||
      (E(
        (Y = function () {
          if (this instanceof Y) throw TypeError("Symbol is not a constructor");
          var t =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            e = I(t),
            n = function (t) {
              this === Q && n.call(U, t),
                l(this, F) && l(this[F], e) && (this[F][e] = !1),
                rt(this, e, h(1, t));
            };
          return u && nt && rt(Q, e, { configurable: !0, set: n }), ot(e, t);
        }).prototype,
        "toString",
        function () {
          return V(this).tag;
        }
      ),
      (T.f = at),
      (L.f = ct),
      (O.f = st),
      (S.f = _.f = ft),
      (w.f = lt),
      u &&
        (X(Y.prototype, "description", {
          configurable: !0,
          get: function () {
            return V(this).description;
          },
        }),
        c || E(Q, "propertyIsEnumerable", at, { unsafe: !0 }))),
    s ||
      (M.f = function (t) {
        return ot(k(t), t);
      }),
    r({ global: !0, wrap: !0, forced: !a, sham: !a }, { Symbol: Y }),
    N(x(tt), function (t) {
      C(t);
    }),
    r(
      { target: "Symbol", stat: !0, forced: !a },
      {
        for: function (t) {
          var e = String(t);
          if (l(K, e)) return K[e];
          var n = Y(e);
          return (K[e] = n), (Z[n] = e), n;
        },
        keyFor: function (t) {
          if (!it(t)) throw TypeError(t + " is not a symbol");
          if (l(Z, t)) return Z[t];
        },
        useSetter: function () {
          nt = !0;
        },
        useSimple: function () {
          nt = !1;
        },
      }
    ),
    r(
      { target: "Object", stat: !0, forced: !a, sham: !u },
      {
        create: function (t, e) {
          return void 0 === e ? b(t) : ut(b(t), e);
        },
        defineProperty: ct,
        defineProperties: ut,
        getOwnPropertyDescriptor: st,
      }
    ),
    r(
      { target: "Object", stat: !0, forced: !a },
      { getOwnPropertyNames: ft, getOwnPropertySymbols: lt }
    ),
    r(
      {
        target: "Object",
        stat: !0,
        forced: f(function () {
          w.f(1);
        }),
      },
      {
        getOwnPropertySymbols: function (t) {
          return w.f(y(t));
        },
      }
    ),
    z) &&
      r(
        {
          target: "JSON",
          stat: !0,
          forced:
            !a ||
            f(function () {
              var t = Y();
              return (
                "[null]" != z([t]) ||
                "{}" != z({ a: t }) ||
                "{}" != z(Object(t))
              );
            }),
        },
        {
          stringify: function (t, e, n) {
            for (var r, o = [t], i = 1; arguments.length > i; )
              o.push(arguments[i++]);
            if (((r = e), (v(e) || void 0 !== t) && !it(t)))
              return (
                p(e) ||
                  (e = function (t, e) {
                    if (
                      ("function" == typeof r && (e = r.call(this, t, e)),
                      !it(e))
                    )
                      return e;
                  }),
                (o[1] = e),
                z.apply(null, o)
              );
          },
        }
      );
    Y.prototype[G] || j(Y.prototype, G, Y.prototype.valueOf),
      D(Y, "Symbol"),
      (P[F] = !0);
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    var r = n(0),
      o = n(23),
      i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(0),
      o = n(39),
      i = r.WeakMap;
    t.exports = "function" == typeof i && /native code/.test(o.call(i));
  },
  function (t, e, n) {
    var r = n(25),
      o = n(26),
      i = n(43),
      c = n(8);
    t.exports =
      r("Reflect", "ownKeys") ||
      function (t) {
        var e = o.f(c(t)),
          n = i.f;
        return n ? e.concat(n(t)) : e;
      };
  },
  function (t, e, n) {
    var r = n(9),
      o = n(27),
      i = n(66),
      c = function (t) {
        return function (e, n, c) {
          var u,
            a = r(e),
            s = o(a.length),
            f = i(c, s);
          if (t && n != n) {
            for (; s > f; ) if ((u = a[f++]) != u) return !0;
          } else
            for (; s > f; f++)
              if ((t || f in a) && a[f] === n) return t || f || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: c(!0), indexOf: c(!1) };
  },
  function (t, e, n) {
    var r = n(28),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      var n = r(t);
      return n < 0 ? o(n + e, 0) : i(n, e);
    };
  },
  function (t, e, n) {
    var r = n(4),
      o = /#|\.prototype\./,
      i = function (t, e) {
        var n = u[c(t)];
        return n == s || (n != a && ("function" == typeof e ? r(e) : !!e));
      },
      c = (i.normalize = function (t) {
        return String(t).replace(o, ".").toLowerCase();
      }),
      u = (i.data = {}),
      a = (i.NATIVE = "N"),
      s = (i.POLYFILL = "P");
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(5),
      o = n(7),
      i = n(8),
      c = n(46);
    t.exports = r
      ? Object.defineProperties
      : function (t, e) {
          i(t);
          for (var n, r = c(e), u = r.length, a = 0; u > a; )
            o.f(t, (n = r[a++]), e[n]);
          return t;
        };
  },
  function (t, e, n) {
    var r = n(25);
    t.exports = r("document", "documentElement");
  },
  function (t, e, n) {
    var r = n(9),
      o = n(26).f,
      i = {}.toString,
      c =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function (t) {
      return c && "[object Window]" == i.call(t)
        ? (function (t) {
            try {
              return o(t);
            } catch (t) {
              return c.slice();
            }
          })(t)
        : o(r(t));
    };
  },
  function (t, e, n) {
    var r = n(72);
    t.exports = function (t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function (n, r, o) {
            return t.call(e, n, r, o);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(6),
      o = n(45),
      i = n(3)("species");
    t.exports = function (t, e) {
      var n;
      return (
        o(t) &&
          ("function" != typeof (n = t.constructor) ||
          (n !== Array && !o(n.prototype))
            ? r(n) && null === (n = n[i]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(10),
      o = n(5),
      i = n(0),
      c = n(1),
      u = n(6),
      a = n(7).f,
      s = n(40),
      f = i.Symbol;
    if (
      o &&
      "function" == typeof f &&
      (!("description" in f.prototype) || void 0 !== f().description)
    ) {
      var l = {},
        p = function () {
          var t =
              arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : String(arguments[0]),
            e = this instanceof p ? new f(t) : void 0 === t ? f() : f(t);
          return "" === t && (l[e] = !0), e;
        };
      s(p, f);
      var v = (p.prototype = f.prototype);
      v.constructor = p;
      var d = v.toString,
        y = "Symbol(test)" == String(f("test")),
        m = /^Symbol\((.*)\)[^)]+$/;
      a(v, "description", {
        configurable: !0,
        get: function () {
          var t = u(this) ? this.valueOf() : this,
            e = d.call(t);
          if (c(l, t)) return "";
          var n = y ? e.slice(7, -1) : e.replace(m, "$1");
          return "" === n ? void 0 : n;
        },
      }),
        r({ global: !0, forced: !0 }, { Symbol: p });
    }
  },
  function (t, e, n) {
    n(48)("iterator");
  },
  function (t, e, n) {
    var r = n(3),
      o = n(32),
      i = n(2),
      c = r("unscopables"),
      u = Array.prototype;
    null == u[c] && i(u, c, o(null)),
      (t.exports = function (t) {
        u[c][t] = !0;
      });
  },
  function (t, e, n) {
    "use strict";
    var r = n(52).IteratorPrototype,
      o = n(32),
      i = n(14),
      c = n(33),
      u = n(34),
      a = function () {
        return this;
      };
    t.exports = function (t, e, n) {
      var s = e + " Iterator";
      return (
        (t.prototype = o(r, { next: i(1, n) })), c(t, s, !1, !0), (u[s] = a), t
      );
    };
  },
  function (t, e, n) {
    var r = n(4);
    t.exports = !r(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, n) {
    var r = n(8),
      o = n(80);
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(n, []),
                (e = n instanceof Array);
            } catch (t) {}
            return function (n, i) {
              return r(n), o(i), e ? t.call(n, i) : (n.__proto__ = i), n;
            };
          })()
        : void 0);
  },
  function (t, e, n) {
    var r = n(6);
    t.exports = function (t) {
      if (!r(t) && null !== t)
        throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(10),
      o = n(21),
      i = n(9),
      c = n(54),
      u = [].join,
      a = o != Object,
      s = c("join", ",");
    r(
      { target: "Array", proto: !0, forced: a || s },
      {
        join: function (t) {
          return u.call(i(this), void 0 === t ? "," : t);
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(5),
      o = n(7).f,
      i = Function.prototype,
      c = i.toString,
      u = /^\s*function ([^ (]*)/;
    !r ||
      "name" in i ||
      o(i, "name", {
        configurable: !0,
        get: function () {
          try {
            return c.call(this).match(u)[1];
          } catch (t) {
            return "";
          }
        },
      });
  },
  function (t, e, n) {
    var r = n(35),
      o = n(12),
      i = n(84);
    r || o(Object.prototype, "toString", i, { unsafe: !0 });
  },
  function (t, e, n) {
    "use strict";
    var r = n(35),
      o = n(85);
    t.exports = r
      ? {}.toString
      : function () {
          return "[object " + o(this) + "]";
        };
  },
  function (t, e, n) {
    var r = n(35),
      o = n(15),
      i = n(3)("toStringTag"),
      c =
        "Arguments" ==
        o(
          (function () {
            return arguments;
          })()
        );
    t.exports = r
      ? o
      : function (t) {
          var e, n, r;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (n = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), i))
            ? n
            : c
            ? o(e)
            : "Object" == (r = o(e)) && "function" == typeof e.callee
            ? "Arguments"
            : r;
        };
  },
  function (t, e, n) {
    "use strict";
    var r = n(55).charAt,
      o = n(17),
      i = n(51),
      c = o.set,
      u = o.getterFor("String Iterator");
    i(
      String,
      "String",
      function (t) {
        c(this, { type: "String Iterator", string: String(t), index: 0 });
      },
      function () {
        var t,
          e = u(this),
          n = e.string,
          o = e.index;
        return o >= n.length
          ? { value: void 0, done: !0 }
          : ((t = r(n, o)), (e.index += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(88),
      o = n(8),
      i = n(27),
      c = n(11),
      u = n(90),
      a = n(91);
    r("match", 1, function (t, e, n) {
      return [
        function (e) {
          var n = c(this),
            r = null == e ? void 0 : e[t];
          return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
        },
        function (t) {
          var r = n(e, t, this);
          if (r.done) return r.value;
          var c = o(t),
            s = String(this);
          if (!c.global) return a(c, s);
          var f = c.unicode;
          c.lastIndex = 0;
          for (var l, p = [], v = 0; null !== (l = a(c, s)); ) {
            var d = String(l[0]);
            (p[v] = d),
              "" === d && (c.lastIndex = u(s, i(c.lastIndex), f)),
              v++;
          }
          return 0 === v ? null : p;
        },
      ];
    });
  },
  function (t, e, n) {
    "use strict";
    var r = n(2),
      o = n(12),
      i = n(4),
      c = n(3),
      u = n(56),
      a = c("species"),
      s = !i(function () {
        var t = /./;
        return (
          (t.exec = function () {
            var t = [];
            return (t.groups = { a: "7" }), t;
          }),
          "7" !== "".replace(t, "$<a>")
        );
      }),
      f = !i(function () {
        var t = /(?:)/,
          e = t.exec;
        t.exec = function () {
          return e.apply(this, arguments);
        };
        var n = "ab".split(t);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
      });
    t.exports = function (t, e, n, l) {
      var p = c(t),
        v = !i(function () {
          var e = {};
          return (
            (e[p] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        d =
          v &&
          !i(function () {
            var e = !1,
              n = /a/;
            return (
              "split" === t &&
                (((n = {}).constructor = {}),
                (n.constructor[a] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[p] = /./[p])),
              (n.exec = function () {
                return (e = !0), null;
              }),
              n[p](""),
              !e
            );
          });
      if (!v || !d || ("replace" === t && !s) || ("split" === t && !f)) {
        var y = /./[p],
          m = n(p, ""[t], function (t, e, n, r, o) {
            return e.exec === u
              ? v && !o
                ? { done: !0, value: y.call(e, n, r) }
                : { done: !0, value: t.call(n, e, r) }
              : { done: !1 };
          }),
          g = m[0],
          h = m[1];
        o(String.prototype, t, g),
          o(
            RegExp.prototype,
            p,
            2 == e
              ? function (t, e) {
                  return h.call(t, this, e);
                }
              : function (t) {
                  return h.call(t, this);
                }
          ),
          l && r(RegExp.prototype[p], "sham", !0);
      }
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(8);
    t.exports = function () {
      var t = r(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(55).charAt;
    t.exports = function (t, e, n) {
      return e + (n ? r(t, e).length : 1);
    };
  },
  function (t, e, n) {
    var r = n(15),
      o = n(56);
    t.exports = function (t, e) {
      var n = t.exec;
      if ("function" == typeof n) {
        var i = n.call(t, e);
        if ("object" != typeof i)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return i;
      }
      if ("RegExp" !== r(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return o.call(t, e);
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(10),
      o = n(93).trim;
    r(
      { target: "String", proto: !0, forced: n(94)("trim") },
      {
        trim: function () {
          return o(this);
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(11),
      o = "[" + n(57) + "]",
      i = RegExp("^" + o + o + "*"),
      c = RegExp(o + o + "*$"),
      u = function (t) {
        return function (e) {
          var n = String(r(e));
          return (
            1 & t && (n = n.replace(i, "")), 2 & t && (n = n.replace(c, "")), n
          );
        };
      };
    t.exports = { start: u(1), end: u(2), trim: u(3) };
  },
  function (t, e, n) {
    var r = n(4),
      o = n(57);
    t.exports = function (t) {
      return r(function () {
        return !!o[t]() || "​᠎" != "​᠎"[t]() || o[t].name !== t;
      });
    };
  },
  function (t, e, n) {
    var r = n(0),
      o = n(58),
      i = n(96),
      c = n(2);
    for (var u in o) {
      var a = r[u],
        s = a && a.prototype;
      if (s && s.forEach !== i)
        try {
          c(s, "forEach", i);
        } catch (t) {
          s.forEach = i;
        }
    }
  },
  function (t, e, n) {
    "use strict";
    var r = n(49).forEach,
      o = n(54);
    t.exports = o("forEach")
      ? function (t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      : [].forEach;
  },
  function (t, e, n) {
    var r = n(0),
      o = n(58),
      i = n(50),
      c = n(2),
      u = n(3),
      a = u("iterator"),
      s = u("toStringTag"),
      f = i.values;
    for (var l in o) {
      var p = r[l],
        v = p && p.prototype;
      if (v) {
        if (v[a] !== f)
          try {
            c(v, a, f);
          } catch (t) {
            v[a] = f;
          }
        if ((v[s] || c(v, s, l), o[l]))
          for (var d in i)
            if (v[d] !== i[d])
              try {
                c(v, d, i[d]);
              } catch (t) {
                v[d] = i[d];
              }
      }
    }
  },
]);

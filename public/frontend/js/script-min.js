!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  function n(e, t, n) {
    var i,
      o = (t = t || se).createElement("script");
    if (((o.text = e), n)) for (i in we) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function i(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? pe[fe.call(e)] || "object"
      : typeof e;
  }
  function o(e) {
    var t = !!e && "length" in e && e.length,
      n = i(e);
    return (
      !ye(e) &&
      !be(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function r(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function s(e, t, n) {
    return ye(t)
      ? Te.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? Te.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? Te.grep(e, function (e) {
          return de.call(t, e) > -1 !== n;
        })
      : Te.filter(t, e, n);
  }
  function a(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function l(e) {
    var t = {};
    return (
      Te.each(e.match(Ie) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function c(e) {
    return e;
  }
  function u(e) {
    throw e;
  }
  function d(e, t, n, i) {
    var o;
    try {
      e && ye((o = e.promise))
        ? o.call(e).done(t).fail(n)
        : e && ye((o = e.then))
        ? o.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  function p() {
    se.removeEventListener("DOMContentLoaded", p),
      e.removeEventListener("load", p),
      Te.ready();
  }
  function f(e, t) {
    return t.toUpperCase();
  }
  function h(e) {
    return e.replace(Pe, "ms-").replace(He, f);
  }
  function g() {
    this.expando = Te.expando + g.uid++;
  }
  function m(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Re.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function v(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(ze, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n = m(n);
        } catch (e) {}
        We.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function y(e, t, n, i) {
    var o,
      r,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return Te.css(e, t, "");
          },
      l = a(),
      c = (n && n[3]) || (Te.cssNumber[t] ? "" : "px"),
      u = (Te.cssNumber[t] || ("px" !== c && +l)) && Be.exec(Te.css(e, t));
    if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--; )
        Te.style(e, t, u + c),
          (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
          (u /= r);
      (u *= 2), Te.style(e, t, u + c), (n = n || []);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = o))),
      o
    );
  }
  function b(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      o = Ke[i];
    return (
      o ||
      ((t = n.body.appendChild(n.createElement(i))),
      (o = Te.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === o && (o = "block"),
      (Ke[i] = o),
      o)
    );
  }
  function w(e, t) {
    for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
      (i = e[r]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((o[r] = qe.get(i, "display") || null),
              o[r] || (i.style.display = "")),
            "" === i.style.display && Xe(i) && (o[r] = b(i)))
          : "none" !== n && ((o[r] = "none"), qe.set(i, "display", n)));
    for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
    return e;
  }
  function T(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && r(e, t)) ? Te.merge([e], n) : n
    );
  }
  function _(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval"));
  }
  function S(e, t, n, o, r) {
    for (
      var s,
        a,
        l,
        c,
        u,
        d,
        p = t.createDocumentFragment(),
        f = [],
        h = 0,
        g = e.length;
      h < g;
      h++
    )
      if ((s = e[h]) || 0 === s)
        if ("object" === i(s)) Te.merge(f, s.nodeType ? [s] : s);
        else if (Ze.test(s)) {
          for (
            a = a || p.appendChild(t.createElement("div")),
              l = (Ve.exec(s) || ["", ""])[1].toLowerCase(),
              c = Je[l] || Je._default,
              a.innerHTML = c[1] + Te.htmlPrefilter(s) + c[2],
              d = c[0];
            d--;

          )
            a = a.lastChild;
          Te.merge(f, a.childNodes), ((a = p.firstChild).textContent = "");
        } else f.push(t.createTextNode(s));
    for (p.textContent = "", h = 0; (s = f[h++]); )
      if (o && Te.inArray(s, o) > -1) r && r.push(s);
      else if (
        ((u = Te.contains(s.ownerDocument, s)),
        (a = T(p.appendChild(s), "script")),
        u && _(a),
        n)
      )
        for (d = 0; (s = a[d++]); ) Ge.test(s.type || "") && n.push(s);
    return p;
  }
  function C() {
    return !0;
  }
  function x() {
    return !1;
  }
  function E() {
    try {
      return se.activeElement;
    } catch (e) {}
  }
  function k(e, t, n, i, o, r) {
    var s, a;
    if ("object" == typeof t) {
      "string" != typeof n && ((i = i || n), (n = void 0));
      for (a in t) k(e, a, n, i, t[a], r);
      return e;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ("string" == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = x;
    else if (!o) return e;
    return (
      1 === r &&
        ((s = o),
        ((o = function (e) {
          return Te().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = Te.guid++))),
      e.each(function () {
        Te.event.add(this, t, o, i, n);
      })
    );
  }
  function A(e, t) {
    return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? Te(e).children("tbody")[0] || e
      : e;
  }
  function D(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function O(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function N(e, t) {
    var n, i, o, r, s, a, l, c;
    if (1 === t.nodeType) {
      if (
        qe.hasData(e) &&
        ((r = qe.access(e)), (s = qe.set(t, r)), (c = r.events))
      ) {
        delete s.handle, (s.events = {});
        for (o in c)
          for (n = 0, i = c[o].length; n < i; n++) Te.event.add(t, o, c[o][n]);
      }
      We.hasData(e) &&
        ((a = We.access(e)), (l = Te.extend({}, a)), We.set(t, l));
    }
  }
  function I(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Qe.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function L(e, t, i, o) {
    t = ce.apply([], t);
    var r,
      s,
      a,
      l,
      c,
      u,
      d = 0,
      p = e.length,
      f = p - 1,
      h = t[0],
      g = ye(h);
    if (g || (p > 1 && "string" == typeof h && !ve.checkClone && st.test(h)))
      return e.each(function (n) {
        var r = e.eq(n);
        g && (t[0] = h.call(this, n, r.html())), L(r, t, i, o);
      });
    if (
      p &&
      ((r = S(t, e[0].ownerDocument, !1, e, o)),
      (s = r.firstChild),
      1 === r.childNodes.length && (r = s),
      s || o)
    ) {
      for (l = (a = Te.map(T(r, "script"), D)).length; d < p; d++)
        (c = r),
          d !== f &&
            ((c = Te.clone(c, !0, !0)), l && Te.merge(a, T(c, "script"))),
          i.call(e[d], c, d);
      if (l)
        for (u = a[a.length - 1].ownerDocument, Te.map(a, O), d = 0; d < l; d++)
          (c = a[d]),
            Ge.test(c.type || "") &&
              !qe.access(c, "globalEval") &&
              Te.contains(u, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? Te._evalUrl && Te._evalUrl(c.src)
                : n(c.textContent.replace(at, ""), u, c));
    }
    return e;
  }
  function $(e, t, n) {
    for (var i, o = t ? Te.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
      n || 1 !== i.nodeType || Te.cleanData(T(i)),
        i.parentNode &&
          (n && Te.contains(i.ownerDocument, i) && _(T(i, "script")),
          i.parentNode.removeChild(i));
    return e;
  }
  function j(e, t, n) {
    var i,
      o,
      r,
      s,
      a = e.style;
    return (
      (n = n || ct(e)) &&
        ("" !== (s = n.getPropertyValue(t) || n[t]) ||
          Te.contains(e.ownerDocument, e) ||
          (s = Te.style(e, t)),
        !ve.pixelBoxStyles() &&
          lt.test(s) &&
          ut.test(t) &&
          ((i = a.width),
          (o = a.minWidth),
          (r = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = r))),
      void 0 !== s ? s + "" : s
    );
  }
  function P(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function H(e) {
    if (e in mt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--; )
      if ((e = gt[n] + t) in mt) return e;
  }
  function M(e) {
    var t = Te.cssProps[e];
    return t || (t = Te.cssProps[e] = H(e) || e), t;
  }
  function q(e, t, n) {
    var i = Be.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function W(e, t, n, i, o, r) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (l += Te.css(e, n + Ue[s], !0, o)),
        i
          ? ("content" === n && (l -= Te.css(e, "padding" + Ue[s], !0, o)),
            "margin" !== n &&
              (l -= Te.css(e, "border" + Ue[s] + "Width", !0, o)))
          : ((l += Te.css(e, "padding" + Ue[s], !0, o)),
            "padding" !== n
              ? (l += Te.css(e, "border" + Ue[s] + "Width", !0, o))
              : (a += Te.css(e, "border" + Ue[s] + "Width", !0, o)));
    return (
      !i &&
        r >= 0 &&
        (l += Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5
          )
        )),
      l
    );
  }
  function R(e, t, n) {
    var i = ct(e),
      o = j(e, t, i),
      r = "border-box" === Te.css(e, "boxSizing", !1, i),
      s = r;
    if (lt.test(o)) {
      if (!n) return o;
      o = "auto";
    }
    return (
      (s = s && (ve.boxSizingReliable() || o === e.style[t])),
      ("auto" === o ||
        (!parseFloat(o) && "inline" === Te.css(e, "display", !1, i))) &&
        ((o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
      (o = parseFloat(o) || 0) +
        W(e, t, n || (r ? "border" : "content"), s, i, o) +
        "px"
    );
  }
  function z(e, t, n, i, o) {
    return new z.prototype.init(e, t, n, i, o);
  }
  function F() {
    yt &&
      (!1 === se.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(F)
        : e.setTimeout(F, Te.fx.interval),
      Te.fx.tick());
  }
  function B() {
    return (
      e.setTimeout(function () {
        vt = void 0;
      }),
      (vt = Date.now())
    );
  }
  function U(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      o["margin" + (n = Ue[i])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function X(e, t, n) {
    for (
      var i,
        o = (Q.tweeners[t] || []).concat(Q.tweeners["*"]),
        r = 0,
        s = o.length;
      r < s;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i;
  }
  function Y(e, t, n) {
    var i,
      o,
      r,
      s,
      a,
      l,
      c,
      u,
      d = "width" in t || "height" in t,
      p = this,
      f = {},
      h = e.style,
      g = e.nodeType && Xe(e),
      m = qe.get(e, "fxshow");
    n.queue ||
      (null == (s = Te._queueHooks(e, "fx")).unqueued &&
        ((s.unqueued = 0),
        (a = s.empty.fire),
        (s.empty.fire = function () {
          s.unqueued || a();
        })),
      s.unqueued++,
      p.always(function () {
        p.always(function () {
          s.unqueued--, Te.queue(e, "fx").length || s.empty.fire();
        });
      }));
    for (i in t)
      if (((o = t[i]), bt.test(o))) {
        if (
          (delete t[i], (r = r || "toggle" === o), o === (g ? "hide" : "show"))
        ) {
          if ("show" !== o || !m || void 0 === m[i]) continue;
          g = !0;
        }
        f[i] = (m && m[i]) || Te.style(e, i);
      }
    if ((l = !Te.isEmptyObject(t)) || !Te.isEmptyObject(f)) {
      d &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (c = m && m.display) && (c = qe.get(e, "display")),
        "none" === (u = Te.css(e, "display")) &&
          (c
            ? (u = c)
            : (w([e], !0),
              (c = e.style.display || c),
              (u = Te.css(e, "display")),
              w([e]))),
        ("inline" === u || ("inline-block" === u && null != c)) &&
          "none" === Te.css(e, "float") &&
          (l ||
            (p.done(function () {
              h.display = c;
            }),
            null == c && ((u = h.display), (c = "none" === u ? "" : u))),
          (h.display = "inline-block"))),
        n.overflow &&
          ((h.overflow = "hidden"),
          p.always(function () {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          })),
        (l = !1);
      for (i in f)
        l ||
          (m
            ? "hidden" in m && (g = m.hidden)
            : (m = qe.access(e, "fxshow", { display: c })),
          r && (m.hidden = !g),
          g && w([e], !0),
          p.done(function () {
            g || w([e]), qe.remove(e, "fxshow");
            for (i in f) Te.style(e, i, f[i]);
          })),
          (l = X(g ? m[i] : 0, i, p)),
          i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
    }
  }
  function K(e, t) {
    var n, i, o, r, s;
    for (n in e)
      if (
        ((i = h(n)),
        (o = t[i]),
        (r = e[n]),
        Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
        n !== i && ((e[i] = r), delete e[n]),
        (s = Te.cssHooks[i]) && "expand" in s)
      ) {
        (r = s.expand(r)), delete e[i];
        for (n in r) n in e || ((e[n] = r[n]), (t[n] = o));
      } else t[i] = o;
  }
  function Q(e, t, n) {
    var i,
      o,
      r = 0,
      s = Q.prefilters.length,
      a = Te.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (
          var t = vt || B(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            r = 0,
            s = c.tweens.length;
          r < s;
          r++
        )
          c.tweens[r].run(i);
        return (
          a.notifyWith(e, [c, i, n]),
          i < 1 && s
            ? n
            : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: Te.extend({}, t),
        opts: Te.extend(
          !0,
          { specialEasing: {}, easing: Te.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: vt || B(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = Te.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
              : a.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      u = c.props;
    for (K(u, c.opts.specialEasing); r < s; r++)
      if ((i = Q.prefilters[r].call(c, e, u, c.opts)))
        return (
          ye(i.stop) &&
            (Te._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      Te.map(u, X, c),
      ye(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      Te.fx.timer(Te.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  function V(e) {
    return (e.match(Ie) || []).join(" ");
  }
  function G(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function J(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(Ie) || [] : [];
  }
  function Z(e, t, n, o) {
    var r;
    if (Array.isArray(t))
      Te.each(t, function (t, i) {
        n || Nt.test(e)
          ? o(e, i)
          : Z(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              o
            );
      });
    else if (n || "object" !== i(t)) o(e, t);
    else for (r in t) Z(e + "[" + r + "]", t[r], n, o);
  }
  function ee(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        o = 0,
        r = t.toLowerCase().match(Ie) || [];
      if (ye(n))
        for (; (i = r[o++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function te(e, t, n, i) {
    function o(a) {
      var l;
      return (
        (r[a] = !0),
        Te.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || s || r[c]
            ? s
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), o(c), !1);
        }),
        l
      );
    }
    var r = {},
      s = e === Ft;
    return o(t.dataTypes[0]) || (!r["*"] && o("*"));
  }
  function ne(e, t) {
    var n,
      i,
      o = Te.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && Te.extend(!0, e, i), e;
  }
  function ie(e, t, n) {
    for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
      l.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i)
      for (o in a)
        if (a[o] && a[o].test(i)) {
          l.unshift(o);
          break;
        }
    if (l[0] in n) r = l[0];
    else {
      for (o in n) {
        if (!l[0] || e.converters[o + " " + l[0]]) {
          r = o;
          break;
        }
        s || (s = o);
      }
      r = r || s;
    }
    if (r) return r !== l[0] && l.unshift(r), n[r];
  }
  function oe(e, t, n, i) {
    var o,
      r,
      s,
      a,
      l,
      c = {},
      u = e.dataTypes.slice();
    if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
    for (r = u.shift(); r; )
      if (
        (e.responseFields[r] && (n[e.responseFields[r]] = t),
        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = r),
        (r = u.shift()))
      )
        if ("*" === r) r = l;
        else if ("*" !== l && l !== r) {
          if (!(s = c[l + " " + r] || c["* " + r]))
            for (o in c)
              if (
                (a = o.split(" "))[1] === r &&
                (s = c[l + " " + a[0]] || c["* " + a[0]])
              ) {
                !0 === s
                  ? (s = c[o])
                  : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                break;
              }
          if (!0 !== s)
            if (s && e.throws) t = s(t);
            else
              try {
                t = s(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: s ? e : "No conversion from " + l + " to " + r,
                };
              }
        }
    return { state: "success", data: t };
  }
  var re = [],
    se = e.document,
    ae = Object.getPrototypeOf,
    le = re.slice,
    ce = re.concat,
    ue = re.push,
    de = re.indexOf,
    pe = {},
    fe = pe.toString,
    he = pe.hasOwnProperty,
    ge = he.toString,
    me = ge.call(Object),
    ve = {},
    ye = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    be = function (e) {
      return null != e && e === e.window;
    },
    we = { type: !0, src: !0, noModule: !0 },
    Te = function (e, t) {
      return new Te.fn.init(e, t);
    },
    _e = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (Te.fn = Te.prototype =
    {
      jquery: "3.3.1",
      constructor: Te,
      length: 0,
      toArray: function () {
        return le.call(this);
      },
      get: function (e) {
        return null == e
          ? le.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = Te.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return Te.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          Te.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(le.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: ue,
      sort: re.sort,
      splice: re.splice,
    }),
    (Te.extend = Te.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || ye(s) || (s = {}),
            a === l && ((s = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = s[t]),
                s !== (i = e[t]) &&
                  (c && i && (Te.isPlainObject(i) || (o = Array.isArray(i)))
                    ? (o
                        ? ((o = !1), (r = n && Array.isArray(n) ? n : []))
                        : (r = n && Te.isPlainObject(n) ? n : {}),
                      (s[t] = Te.extend(c, r, i)))
                    : void 0 !== i && (s[t] = i));
        return s;
      }),
    Te.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== fe.call(e) ||
          ((t = ae(e)) &&
            ("function" !=
              typeof (n = he.call(t, "constructor") && t.constructor) ||
              ge.call(n) !== me))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        n(e);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (o(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(_e, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (o(Object(e))
              ? Te.merge(n, "string" == typeof e ? [e] : e)
              : ue.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : de.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
          !t(e[o], o) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          s = 0,
          a = [];
        if (o(e))
          for (i = e.length; s < i; s++)
            null != (r = t(e[s], s, n)) && a.push(r);
        else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
        return ce.apply([], a);
      },
      guid: 1,
      support: ve,
    }),
    "function" == typeof Symbol &&
      (Te.fn[Symbol.iterator] = re[Symbol.iterator]),
    Te.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        pe["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var Se = (function (e) {
    function t(e, t, n, i) {
      var o,
        r,
        s,
        a,
        l,
        u,
        p,
        f = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (
        !i &&
        ((t ? t.ownerDocument || t : q) !== N && O(t), (t = t || N), L)
      ) {
        if (11 !== h && (l = ge.exec(e)))
          if ((o = l[1])) {
            if (9 === h) {
              if (!(s = t.getElementById(o))) return n;
              if (s.id === o) return n.push(s), n;
            } else if (f && (s = f.getElementById(o)) && H(t, s) && s.id === o)
              return n.push(s), n;
          } else {
            if (l[2]) return V.apply(n, t.getElementsByTagName(e)), n;
            if (
              (o = l[3]) &&
              w.getElementsByClassName &&
              t.getElementsByClassName
            )
              return V.apply(n, t.getElementsByClassName(o)), n;
          }
        if (w.qsa && !B[e + " "] && (!$ || !$.test(e))) {
          if (1 !== h) (f = t), (p = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (a = t.getAttribute("id"))
                ? (a = a.replace(be, we))
                : t.setAttribute("id", (a = M)),
                r = (u = C(e)).length;
              r--;

            )
              u[r] = "#" + a + " " + d(u[r]);
            (p = u.join(",")), (f = (me.test(e) && c(t.parentNode)) || t);
          }
          if (p)
            try {
              return V.apply(n, f.querySelectorAll(p)), n;
            } catch (e) {
            } finally {
              a === M && t.removeAttribute("id");
            }
        }
      }
      return E(e.replace(re, "$1"), t, n, i);
    }
    function n() {
      function e(n, i) {
        return (
          t.push(n + " ") > T.cacheLength && delete e[t.shift()],
          (e[n + " "] = i)
        );
      }
      var t = [];
      return e;
    }
    function i(e) {
      return (e[M] = !0), e;
    }
    function o(e) {
      var t = N.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function r(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) T.attrHandle[n[i]] = t;
    }
    function s(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function a(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && _e(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function l(e) {
      return i(function (t) {
        return (
          (t = +t),
          i(function (n, i) {
            for (var o, r = e([], n.length, t), s = r.length; s--; )
              n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function c(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function u() {}
    function d(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function p(e, t, n) {
      var i = t.dir,
        o = t.next,
        r = o || i,
        s = n && "parentNode" === r,
        a = R++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, o);
            return !1;
          }
        : function (t, n, l) {
            var c,
              u,
              d,
              p = [W, a];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (
                    ((d = t[M] || (t[M] = {})),
                    (u = d[t.uniqueID] || (d[t.uniqueID] = {})),
                    o && o === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((c = u[r]) && c[0] === W && c[1] === a)
                      return (p[2] = c[2]);
                    if (((u[r] = p), (p[2] = e(t, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function f(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function h(e, n, i) {
      for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
      return i;
    }
    function g(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
      return s;
    }
    function m(e, t, n, o, r, s) {
      return (
        o && !o[M] && (o = m(o)),
        r && !r[M] && (r = m(r, s)),
        i(function (i, s, a, l) {
          var c,
            u,
            d,
            p = [],
            f = [],
            m = s.length,
            v = i || h(t || "*", a.nodeType ? [a] : a, []),
            y = !e || (!i && t) ? v : g(v, p, e, a, l),
            b = n ? (r || (i ? e : m || o) ? [] : s) : y;
          if ((n && n(y, b, a, l), o))
            for (c = g(b, f), o(c, [], a, l), u = c.length; u--; )
              (d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
          if (i) {
            if (r || e) {
              if (r) {
                for (c = [], u = b.length; u--; )
                  (d = b[u]) && c.push((y[u] = d));
                r(null, (b = []), c, l);
              }
              for (u = b.length; u--; )
                (d = b[u]) &&
                  (c = r ? J(i, d) : p[u]) > -1 &&
                  (i[c] = !(s[c] = d));
            }
          } else (b = g(b === s ? b.splice(m, b.length) : b)), r ? r(null, s, b, l) : V.apply(s, b);
        })
      );
    }
    function v(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          r = T.relative[e[0].type],
          s = r || T.relative[" "],
          a = r ? 1 : 0,
          l = p(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          c = p(
            function (e) {
              return J(t, e) > -1;
            },
            s,
            !0
          ),
          u = [
            function (e, n, i) {
              var o =
                (!r && (i || n !== k)) ||
                ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
              return (t = null), o;
            },
          ];
        a < o;
        a++
      )
        if ((n = T.relative[e[a].type])) u = [p(f(u), n)];
        else {
          if ((n = T.filter[e[a].type].apply(null, e[a].matches))[M]) {
            for (i = ++a; i < o && !T.relative[e[i].type]; i++);
            return m(
              a > 1 && f(u),
              a > 1 &&
                d(
                  e
                    .slice(0, a - 1)
                    .concat({ value: " " === e[a - 2].type ? "*" : "" })
                ).replace(re, "$1"),
              n,
              a < i && v(e.slice(a, i)),
              i < o && v((e = e.slice(i))),
              i < o && d(e)
            );
          }
          u.push(n);
        }
      return f(u);
    }
    function y(e, n) {
      var o = n.length > 0,
        r = e.length > 0,
        s = function (i, s, a, l, c) {
          var u,
            d,
            p,
            f = 0,
            h = "0",
            m = i && [],
            v = [],
            y = k,
            b = i || (r && T.find.TAG("*", c)),
            w = (W += null == y ? 1 : Math.random() || 0.1),
            _ = b.length;
          for (
            c && (k = s === N || s || c);
            h !== _ && null != (u = b[h]);
            h++
          ) {
            if (r && u) {
              for (
                d = 0, s || u.ownerDocument === N || (O(u), (a = !L));
                (p = e[d++]);

              )
                if (p(u, s || N, a)) {
                  l.push(u);
                  break;
                }
              c && (W = w);
            }
            o && ((u = !p && u) && f--, i && m.push(u));
          }
          if (((f += h), o && h !== f)) {
            for (d = 0; (p = n[d++]); ) p(m, v, s, a);
            if (i) {
              if (f > 0) for (; h--; ) m[h] || v[h] || (v[h] = K.call(l));
              v = g(v);
            }
            V.apply(l, v),
              c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l);
          }
          return c && ((W = w), (k = y)), m;
        };
      return o ? i(s) : s;
    }
    var b,
      w,
      T,
      _,
      S,
      C,
      x,
      E,
      k,
      A,
      D,
      O,
      N,
      I,
      L,
      $,
      j,
      P,
      H,
      M = "sizzle" + 1 * new Date(),
      q = e.document,
      W = 0,
      R = 0,
      z = n(),
      F = n(),
      B = n(),
      U = function (e, t) {
        return e === t && (D = !0), 0;
      },
      X = {}.hasOwnProperty,
      Y = [],
      K = Y.pop,
      Q = Y.push,
      V = Y.push,
      G = Y.slice,
      J = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      Z =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ee = "[\\x20\\t\\r\\n\\f]",
      te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ne =
        "\\[" +
        ee +
        "*(" +
        te +
        ")(?:" +
        ee +
        "*([*^$|!~]?=)" +
        ee +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        te +
        "))|)" +
        ee +
        "*\\]",
      ie =
        ":(" +
        te +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ne +
        ")*)|.*)\\)|)",
      oe = new RegExp(ee + "+", "g"),
      re = new RegExp(
        "^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$",
        "g"
      ),
      se = new RegExp("^" + ee + "*," + ee + "*"),
      ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
      le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
      ce = new RegExp(ie),
      ue = new RegExp("^" + te + "$"),
      de = {
        ID: new RegExp("^#(" + te + ")"),
        CLASS: new RegExp("^\\.(" + te + ")"),
        TAG: new RegExp("^(" + te + "|[*])"),
        ATTR: new RegExp("^" + ne),
        PSEUDO: new RegExp("^" + ie),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ee +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ee +
            "*(?:([+-]|)" +
            ee +
            "*(\\d+)|))" +
            ee +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + Z + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ee +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ee +
            "*((?:-\\d)?\\d*)" +
            ee +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      pe = /^(?:input|select|textarea|button)$/i,
      fe = /^h\d$/i,
      he = /^[^{]+\{\s*\[native \w/,
      ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      me = /[+~]/,
      ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
      ye = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i !== i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      we = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      Te = function () {
        O();
      },
      _e = p(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      V.apply((Y = G.call(q.childNodes)), q.childNodes),
        Y[q.childNodes.length].nodeType;
    } catch (e) {
      V = {
        apply: Y.length
          ? function (e, t) {
              Q.apply(e, G.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    (w = t.support = {}),
      (S = t.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (O = t.setDocument =
        function (e) {
          var t,
            n,
            i = e ? e.ownerDocument || e : q;
          return i !== N && 9 === i.nodeType && i.documentElement
            ? ((N = i),
              (I = N.documentElement),
              (L = !S(N)),
              q !== N &&
                (n = N.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", Te, !1)
                  : n.attachEvent && n.attachEvent("onunload", Te)),
              (w.attributes = o(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (w.getElementsByTagName = o(function (e) {
                return (
                  e.appendChild(N.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (w.getElementsByClassName = he.test(N.getElementsByClassName)),
              (w.getById = o(function (e) {
                return (
                  (I.appendChild(e).id = M),
                  !N.getElementsByName || !N.getElementsByName(M).length
                );
              })),
              w.getById
                ? ((T.filter.ID = function (e) {
                    var t = e.replace(ve, ye);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (T.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && L) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((T.filter.ID = function (e) {
                    var t = e.replace(ve, ye);
                    return function (e) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (T.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && L) {
                      var n,
                        i,
                        o,
                        r = t.getElementById(e);
                      if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                          return [r];
                        for (o = t.getElementsByName(e), i = 0; (r = o[i++]); )
                          if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                      }
                      return [];
                    }
                  })),
              (T.find.TAG = w.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : w.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      o = 0,
                      r = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }
                    return r;
                  }),
              (T.find.CLASS =
                w.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && L)
                    return t.getElementsByClassName(e);
                }),
              (j = []),
              ($ = []),
              (w.qsa = he.test(N.querySelectorAll)) &&
                (o(function (e) {
                  (I.appendChild(e).innerHTML =
                    "<a id='" +
                    M +
                    "'></a><select id='" +
                    M +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      $.push("[*^$]=" + ee + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      $.push("\\[" + ee + "*(?:value|" + Z + ")"),
                    e.querySelectorAll("[id~=" + M + "-]").length ||
                      $.push("~="),
                    e.querySelectorAll(":checked").length || $.push(":checked"),
                    e.querySelectorAll("a#" + M + "+*").length ||
                      $.push(".#.+[+~]");
                }),
                o(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = N.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      $.push("name" + ee + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      $.push(":enabled", ":disabled"),
                    (I.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      $.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    $.push(",.*:");
                })),
              (w.matchesSelector = he.test(
                (P =
                  I.matches ||
                  I.webkitMatchesSelector ||
                  I.mozMatchesSelector ||
                  I.oMatchesSelector ||
                  I.msMatchesSelector)
              )) &&
                o(function (e) {
                  (w.disconnectedMatch = P.call(e, "*")),
                    P.call(e, "[s!='']:x"),
                    j.push("!=", ie);
                }),
              ($ = $.length && new RegExp($.join("|"))),
              (j = j.length && new RegExp(j.join("|"))),
              (t = he.test(I.compareDocumentPosition)),
              (H =
                t || he.test(I.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                      return (
                        e === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (U = t
                ? function (e, t) {
                    if (e === t) return (D = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!w.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === N || (e.ownerDocument === q && H(q, e))
                          ? -1
                          : t === N || (t.ownerDocument === q && H(q, t))
                          ? 1
                          : A
                          ? J(A, e) - J(A, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (D = !0), 0;
                    var n,
                      i = 0,
                      o = e.parentNode,
                      r = t.parentNode,
                      a = [e],
                      l = [t];
                    if (!o || !r)
                      return e === N
                        ? -1
                        : t === N
                        ? 1
                        : o
                        ? -1
                        : r
                        ? 1
                        : A
                        ? J(A, e) - J(A, t)
                        : 0;
                    if (o === r) return s(e, t);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (n = t; (n = n.parentNode); ) l.unshift(n);
                    for (; a[i] === l[i]; ) i++;
                    return i
                      ? s(a[i], l[i])
                      : a[i] === q
                      ? -1
                      : l[i] === q
                      ? 1
                      : 0;
                  }),
              N)
            : N;
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          ((e.ownerDocument || e) !== N && O(e),
          (n = n.replace(le, "='$1']")),
          w.matchesSelector &&
            L &&
            !B[n + " "] &&
            (!j || !j.test(n)) &&
            (!$ || !$.test(n)))
        )
          try {
            var i = P.call(e, n);
            if (
              i ||
              w.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return i;
          } catch (e) {}
        return t(n, N, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== N && O(e), H(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== N && O(e);
        var n = T.attrHandle[t.toLowerCase()],
          i = n && X.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
        return void 0 !== i
          ? i
          : w.attributes || !L
          ? e.getAttribute(t)
          : (i = e.getAttributeNode(t)) && i.specified
          ? i.value
          : null;
      }),
      (t.escape = function (e) {
        return (e + "").replace(be, we);
      }),
      (t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          i = 0,
          o = 0;
        if (
          ((D = !w.detectDuplicates),
          (A = !w.sortStable && e.slice(0)),
          e.sort(U),
          D)
        ) {
          for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
          for (; i--; ) e.splice(n[i], 1);
        }
        return (A = null), e;
      }),
      (_ = t.getText =
        function (e) {
          var t,
            n = "",
            i = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += _(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; (t = e[i++]); ) n += _(t);
          return n;
        }),
      ((T = t.selectors =
        {
          cacheLength: 50,
          createPseudo: i,
          match: de,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(ve, ye)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return de.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      ce.test(n) &&
                      (t = C(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(ve, ye).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = z[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) &&
                  z(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, n, i) {
              return function (o) {
                var r = t.attr(o, e);
                return null == r
                  ? "!=" === n
                  : !n ||
                      ((r += ""),
                      "=" === n
                        ? r === i
                        : "!=" === n
                        ? r !== i
                        : "^=" === n
                        ? i && 0 === r.indexOf(i)
                        : "*=" === n
                        ? i && r.indexOf(i) > -1
                        : "$=" === n
                        ? i && r.slice(-i.length) === i
                        : "~=" === n
                        ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1
                        : "|=" === n &&
                          (r === i || r.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (e, t, n, i, o) {
              var r = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;
              return 1 === i && 0 === o
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, l) {
                    var c,
                      u,
                      d,
                      p,
                      f,
                      h,
                      g = r !== s ? "nextSibling" : "previousSibling",
                      m = t.parentNode,
                      v = a && t.nodeName.toLowerCase(),
                      y = !l && !a,
                      b = !1;
                    if (m) {
                      if (r) {
                        for (; g; ) {
                          for (p = t; (p = p[g]); )
                            if (
                              a
                                ? p.nodeName.toLowerCase() === v
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [s ? m.firstChild : m.lastChild]), s && y)) {
                        for (
                          b =
                            (f =
                              (c =
                                (u =
                                  (d = (p = m)[M] || (p[M] = {}))[p.uniqueID] ||
                                  (d[p.uniqueID] = {}))[e] || [])[0] === W &&
                              c[1]) && c[2],
                            p = f && m.childNodes[f];
                          (p = (++f && p && p[g]) || (b = f = 0) || h.pop());

                        )
                          if (1 === p.nodeType && ++b && p === t) {
                            u[e] = [W, f, b];
                            break;
                          }
                      } else if (
                        (y &&
                          (b = f =
                            (c =
                              (u =
                                (d = (p = t)[M] || (p[M] = {}))[p.uniqueID] ||
                                (d[p.uniqueID] = {}))[e] || [])[0] === W &&
                            c[1]),
                        !1 === b)
                      )
                        for (
                          ;
                          (p = (++f && p && p[g]) || (b = f = 0) || h.pop()) &&
                          ((a
                            ? p.nodeName.toLowerCase() !== v
                            : 1 !== p.nodeType) ||
                            !++b ||
                            (y &&
                              ((u =
                                (d = p[M] || (p[M] = {}))[p.uniqueID] ||
                                (d[p.uniqueID] = {}))[e] = [W, b]),
                            p !== t));

                        );
                      return (b -= o) === i || (b % i == 0 && b / i >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var o,
                r =
                  T.pseudos[e] ||
                  T.setFilters[e.toLowerCase()] ||
                  t.error("unsupported pseudo: " + e);
              return r[M]
                ? r(n)
                : r.length > 1
                ? ((o = [e, e, "", n]),
                  T.setFilters.hasOwnProperty(e.toLowerCase())
                    ? i(function (e, t) {
                        for (var i, o = r(e, n), s = o.length; s--; )
                          e[(i = J(e, o[s]))] = !(t[i] = o[s]);
                      })
                    : function (e) {
                        return r(e, 0, o);
                      })
                : r;
            },
          },
          pseudos: {
            not: i(function (e) {
              var t = [],
                n = [],
                o = x(e.replace(re, "$1"));
              return o[M]
                ? i(function (e, t, n, i) {
                    for (var r, s = o(e, null, i, []), a = e.length; a--; )
                      (r = s[a]) && (e[a] = !(t[a] = r));
                  })
                : function (e, i, r) {
                    return (
                      (t[0] = e), o(t, null, r, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: i(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: i(function (e) {
              return (
                (e = e.replace(ve, ye)),
                function (t) {
                  return (t.textContent || t.innerText || _(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: i(function (e) {
              return (
                ue.test(e || "") || t.error("unsupported lang: " + e),
                (e = e.replace(ve, ye).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = L
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === I;
            },
            focus: function (e) {
              return (
                e === N.activeElement &&
                (!N.hasFocus || N.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: a(!1),
            disabled: a(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !T.pseudos.empty(e);
            },
            header: function (e) {
              return fe.test(e.nodeName);
            },
            input: function (e) {
              return pe.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: l(function () {
              return [0];
            }),
            last: l(function (e, t) {
              return [t - 1];
            }),
            eq: l(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: l(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: l(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: l(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
              return e;
            }),
            gt: l(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
              return e;
            }),
          },
        }).pseudos.nth = T.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      T.pseudos[b] = (function (e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      })(b);
    for (b in { submit: !0, reset: !0 })
      T.pseudos[b] = (function (e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      })(b);
    return (
      (u.prototype = T.filters = T.pseudos),
      (T.setFilters = new u()),
      (C = t.tokenize =
        function (e, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            c,
            u = F[e + " "];
          if (u) return n ? 0 : u.slice(0);
          for (a = e, l = [], c = T.preFilter; a; ) {
            (i && !(o = se.exec(a))) ||
              (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
              (i = !1),
              (o = ae.exec(a)) &&
                ((i = o.shift()),
                r.push({ value: i, type: o[0].replace(re, " ") }),
                (a = a.slice(i.length)));
            for (s in T.filter)
              !(o = de[s].exec(a)) ||
                (c[s] && !(o = c[s](o))) ||
                ((i = o.shift()),
                r.push({ value: i, type: s, matches: o }),
                (a = a.slice(i.length)));
            if (!i) break;
          }
          return n ? a.length : a ? t.error(e) : F(e, l).slice(0);
        }),
      (x = t.compile =
        function (e, t) {
          var n,
            i = [],
            o = [],
            r = B[e + " "];
          if (!r) {
            for (t || (t = C(e)), n = t.length; n--; )
              (r = v(t[n]))[M] ? i.push(r) : o.push(r);
            (r = B(e, y(o, i))).selector = e;
          }
          return r;
        }),
      (E = t.select =
        function (e, t, n, i) {
          var o,
            r,
            s,
            a,
            l,
            u = "function" == typeof e && e,
            p = !i && C((e = u.selector || e));
          if (((n = n || []), 1 === p.length)) {
            if (
              (r = p[0] = p[0].slice(0)).length > 2 &&
              "ID" === (s = r[0]).type &&
              9 === t.nodeType &&
              L &&
              T.relative[r[1].type]
            ) {
              if (!(t = (T.find.ID(s.matches[0].replace(ve, ye), t) || [])[0]))
                return n;
              u && (t = t.parentNode), (e = e.slice(r.shift().value.length));
            }
            for (
              o = de.needsContext.test(e) ? 0 : r.length;
              o-- && ((s = r[o]), !T.relative[(a = s.type)]);

            )
              if (
                (l = T.find[a]) &&
                (i = l(
                  s.matches[0].replace(ve, ye),
                  (me.test(r[0].type) && c(t.parentNode)) || t
                ))
              ) {
                if ((r.splice(o, 1), !(e = i.length && d(r))))
                  return V.apply(n, i), n;
                break;
              }
          }
          return (
            (u || x(e, p))(
              i,
              t,
              !L,
              n,
              !t || (me.test(e) && c(t.parentNode)) || t
            ),
            n
          );
        }),
      (w.sortStable = M.split("").sort(U).join("") === M),
      (w.detectDuplicates = !!D),
      O(),
      (w.sortDetached = o(function (e) {
        return 1 & e.compareDocumentPosition(N.createElement("fieldset"));
      })),
      o(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        r("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (w.attributes &&
        o(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        r("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      o(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        r(Z, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      t
    );
  })(e);
  (Te.find = Se),
    (Te.expr = Se.selectors),
    (Te.expr[":"] = Te.expr.pseudos),
    (Te.uniqueSort = Te.unique = Se.uniqueSort),
    (Te.text = Se.getText),
    (Te.isXMLDoc = Se.isXML),
    (Te.contains = Se.contains),
    (Te.escapeSelector = Se.escape);
  var Ce = function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && Te(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    xe = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    Ee = Te.expr.match.needsContext,
    ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  (Te.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? Te.find.matchesSelector(i, e)
          ? [i]
          : []
        : Te.find.matches(
            e,
            Te.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    Te.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            Te(e).filter(function () {
              for (t = 0; t < i; t++) if (Te.contains(o[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) Te.find(e, o[t], n);
        return i > 1 ? Te.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(s(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(s(this, e || [], !0));
      },
      is: function (e) {
        return !!s(
          this,
          "string" == typeof e && Ee.test(e) ? Te(e) : e || [],
          !1
        ).length;
      },
    });
  var Ae,
    De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((Te.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || Ae), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : De.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof Te ? t[0] : t),
          Te.merge(
            this,
            Te.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)
          ),
          ke.test(i[1]) && Te.isPlainObject(t))
        )
          for (i in t) ye(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = se.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
        this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : ye(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(Te)
      : Te.makeArray(e, this);
  }).prototype = Te.fn),
    (Ae = Te(se));
  var Oe = /^(?:parents|prev(?:Until|All))/,
    Ne = { children: !0, contents: !0, next: !0, prev: !0 };
  Te.fn.extend({
    has: function (e) {
      var t = Te(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (Te.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        s = "string" != typeof e && Te(e);
      if (!Ee.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && Te.find.matchesSelector(n, e))
            ) {
              r.push(n);
              break;
            }
      return this.pushStack(r.length > 1 ? Te.uniqueSort(r) : r);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? de.call(Te(e), this[0])
          : de.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(Te.uniqueSort(Te.merge(this.get(), Te(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    Te.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return Ce(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return Ce(e, "parentNode", n);
        },
        next: function (e) {
          return a(e, "nextSibling");
        },
        prev: function (e) {
          return a(e, "previousSibling");
        },
        nextAll: function (e) {
          return Ce(e, "nextSibling");
        },
        prevAll: function (e) {
          return Ce(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return Ce(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return Ce(e, "previousSibling", n);
        },
        siblings: function (e) {
          return xe((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return xe(e.firstChild);
        },
        contents: function (e) {
          return r(e, "iframe")
            ? e.contentDocument
            : (r(e, "template") && (e = e.content || e),
              Te.merge([], e.childNodes));
        },
      },
      function (e, t) {
        Te.fn[e] = function (n, i) {
          var o = Te.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = Te.filter(i, o)),
            this.length > 1 &&
              (Ne[e] || Te.uniqueSort(o), Oe.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var Ie = /[^\x20\t\r\n\f]+/g;
  (Te.Callbacks = function (e) {
    e = "string" == typeof e ? l(e) : Te.extend({}, e);
    var t,
      n,
      o,
      r,
      s = [],
      a = [],
      c = -1,
      u = function () {
        for (r = r || e.once, o = t = !0; a.length; c = -1)
          for (n = a.shift(); ++c < s.length; )
            !1 === s[c].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((c = s.length), (n = !1));
        e.memory || (n = !1), (t = !1), r && (s = n ? [] : "");
      },
      d = {
        add: function () {
          return (
            s &&
              (n && !t && ((c = s.length - 1), a.push(n)),
              (function t(n) {
                Te.each(n, function (n, o) {
                  ye(o)
                    ? (e.unique && d.has(o)) || s.push(o)
                    : o && o.length && "string" !== i(o) && t(o);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            Te.each(arguments, function (e, t) {
              for (var n; (n = Te.inArray(t, s, n)) > -1; )
                s.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? Te.inArray(e, s) > -1 : s.length > 0;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (r = a = []), (s = n = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (r = a = []), n || t || (s = n = ""), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (e, n) {
          return (
            r ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return d;
  }),
    Te.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              Te.Callbacks("memory"),
              Te.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              Te.Callbacks("once memory"),
              Te.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              Te.Callbacks("once memory"),
              Te.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          o = {
            state: function () {
              return i;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return o.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return Te.Deferred(function (t) {
                Te.each(n, function (n, i) {
                  var o = ye(e[i[4]]) && e[i[4]];
                  r[i[1]](function () {
                    var e = o && o.apply(this, arguments);
                    e && ye(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[i[0] + "With"](this, o ? [e] : arguments);
                  });
                }),
                  (e = null);
              }).promise();
            },
            then: function (t, i, o) {
              function r(t, n, i, o) {
                return function () {
                  var a = this,
                    l = arguments,
                    d = function () {
                      var e, d;
                      if (!(t < s)) {
                        if ((e = i.apply(a, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (d =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          ye(d)
                            ? o
                              ? d.call(e, r(s, n, c, o), r(s, n, u, o))
                              : (s++,
                                d.call(
                                  e,
                                  r(s, n, c, o),
                                  r(s, n, u, o),
                                  r(s, n, c, n.notifyWith)
                                ))
                            : (i !== c && ((a = void 0), (l = [e])),
                              (o || n.resolveWith)(a, l));
                      }
                    },
                    p = o
                      ? d
                      : function () {
                          try {
                            d();
                          } catch (e) {
                            Te.Deferred.exceptionHook &&
                              Te.Deferred.exceptionHook(e, p.stackTrace),
                              t + 1 >= s &&
                                (i !== u && ((a = void 0), (l = [e])),
                                n.rejectWith(a, l));
                          }
                        };
                  t
                    ? p()
                    : (Te.Deferred.getStackHook &&
                        (p.stackTrace = Te.Deferred.getStackHook()),
                      e.setTimeout(p));
                };
              }
              var s = 0;
              return Te.Deferred(function (e) {
                n[0][3].add(r(0, e, ye(o) ? o : c, e.notifyWith)),
                  n[1][3].add(r(0, e, ye(t) ? t : c)),
                  n[2][3].add(r(0, e, ye(i) ? i : u));
              }).promise();
            },
            promise: function (e) {
              return null != e ? Te.extend(e, o) : o;
            },
          },
          r = {};
        return (
          Te.each(n, function (e, t) {
            var s = t[2],
              a = t[5];
            (o[t[1]] = s.add),
              a &&
                s.add(
                  function () {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (r[t[0]] = function () {
                return (
                  r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                );
              }),
              (r[t[0] + "With"] = s.fireWith);
          }),
          o.promise(r),
          t && t.call(r, r),
          r
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = le.call(arguments),
          r = Te.Deferred(),
          s = function (e) {
            return function (n) {
              (i[e] = this),
                (o[e] = arguments.length > 1 ? le.call(arguments) : n),
                --t || r.resolveWith(i, o);
            };
          };
        if (
          t <= 1 &&
          (d(e, r.done(s(n)).resolve, r.reject, !t),
          "pending" === r.state() || ye(o[n] && o[n].then))
        )
          return r.then();
        for (; n--; ) d(o[n], s(n), r.reject);
        return r.promise();
      },
    });
  var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (Te.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      Le.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (Te.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var $e = Te.Deferred();
  (Te.fn.ready = function (e) {
    return (
      $e.then(e).catch(function (e) {
        Te.readyException(e);
      }),
      this
    );
  }),
    Te.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --Te.readyWait : Te.isReady) ||
          ((Te.isReady = !0),
          (!0 !== e && --Te.readyWait > 0) || $e.resolveWith(se, [Te]));
      },
    }),
    (Te.ready.then = $e.then),
    "complete" === se.readyState ||
    ("loading" !== se.readyState && !se.documentElement.doScroll)
      ? e.setTimeout(Te.ready)
      : (se.addEventListener("DOMContentLoaded", p),
        e.addEventListener("load", p));
  var je = function (e, t, n, o, r, s, a) {
      var l = 0,
        c = e.length,
        u = null == n;
      if ("object" === i(n)) {
        r = !0;
        for (l in n) je(e, t, l, n[l], !0, s, a);
      } else if (
        void 0 !== o &&
        ((r = !0),
        ye(o) || (a = !0),
        u &&
          (a
            ? (t.call(e, o), (t = null))
            : ((u = t),
              (t = function (e, t, n) {
                return u.call(Te(e), n);
              }))),
        t)
      )
        for (; l < c; l++) t(e[l], n, a ? o : o.call(e[l], l, t(e[l], n)));
      return r ? e : u ? t.call(e) : c ? t(e[0], n) : s;
    },
    Pe = /^-ms-/,
    He = /-([a-z])/g,
    Me = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (g.uid = 1),
    (g.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Me(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          o = this.cache(e);
        if ("string" == typeof t) o[h(t)] = n;
        else for (i in t) o[h(i)] = t[i];
        return o;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][h(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(h)
              : (t = h(t)) in i
              ? [t]
              : t.match(Ie) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || Te.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !Te.isEmptyObject(t);
      },
    });
  var qe = new g(),
    We = new g(),
    Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ze = /[A-Z]/g;
  Te.extend({
    hasData: function (e) {
      return We.hasData(e) || qe.hasData(e);
    },
    data: function (e, t, n) {
      return We.access(e, t, n);
    },
    removeData: function (e, t) {
      We.remove(e, t);
    },
    _data: function (e, t, n) {
      return qe.access(e, t, n);
    },
    _removeData: function (e, t) {
      qe.remove(e, t);
    },
  }),
    Te.fn.extend({
      data: function (e, t) {
        var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((o = We.get(r)), 1 === r.nodeType && !qe.get(r, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (i = s[n].name).indexOf("data-") &&
                ((i = h(i.slice(5))), v(r, i, o[i]));
            qe.set(r, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e
          ? this.each(function () {
              We.set(this, e);
            })
          : je(
              this,
              function (t) {
                var n;
                if (r && void 0 === t) {
                  if (void 0 !== (n = We.get(r, e))) return n;
                  if (void 0 !== (n = v(r, e))) return n;
                } else
                  this.each(function () {
                    We.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          We.remove(this, e);
        });
      },
    }),
    Te.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = qe.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = qe.access(e, t, Te.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = Te.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = Te._queueHooks(e, t),
          s = function () {
            Te.dequeue(e, t);
          };
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, s, r)),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          qe.get(e, n) ||
          qe.access(e, n, {
            empty: Te.Callbacks("once memory").add(function () {
              qe.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    Te.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? Te.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = Te.queue(this, e, t);
                Te._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && Te.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          Te.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          o = Te.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --i || o.resolveWith(r, [r]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = qe.get(r[s], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), o.promise(t);
      },
    });
  var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Be = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
    Ue = ["Top", "Right", "Bottom", "Left"],
    Xe = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          Te.contains(e.ownerDocument, e) &&
          "none" === Te.css(e, "display"))
      );
    },
    Ye = function (e, t, n, i) {
      var o,
        r,
        s = {};
      for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
      o = n.apply(e, i || []);
      for (r in t) e.style[r] = s[r];
      return o;
    },
    Ke = {};
  Te.fn.extend({
    show: function () {
      return w(this, !0);
    },
    hide: function () {
      return w(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            Xe(this) ? Te(this).show() : Te(this).hide();
          });
    },
  });
  var Qe = /^(?:checkbox|radio)$/i,
    Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Ge = /^$|^module$|\/(?:java|ecma)script/i,
    Je = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (Je.optgroup = Je.option),
    (Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead),
    (Je.th = Je.td);
  var Ze = /<|&#?\w+;/;
  !(function () {
    var e = se.createDocumentFragment().appendChild(se.createElement("div")),
      t = se.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (ve.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (ve.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var et = se.documentElement,
    tt = /^key/,
    nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    it = /^([^.]*)(?:\.(.+)|)/;
  (Te.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        g,
        m = qe.get(e);
      if (m)
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            o && Te.find.matchesSelector(et, o),
            n.guid || (n.guid = Te.guid++),
            (l = m.events) || (l = m.events = {}),
            (s = m.handle) ||
              (s = m.handle =
                function (t) {
                  return void 0 !== Te && Te.event.triggered !== t.type
                    ? Te.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            c = (t = (t || "").match(Ie) || [""]).length;
          c--;

        )
          (f = g = (a = it.exec(t[c]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            f &&
              ((d = Te.event.special[f] || {}),
              (f = (o ? d.delegateType : d.bindType) || f),
              (d = Te.event.special[f] || {}),
              (u = Te.extend(
                {
                  type: f,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && Te.expr.match.needsContext.test(o),
                  namespace: h.join("."),
                },
                r
              )),
              (p = l[f]) ||
                (((p = l[f] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, i, h, s)) ||
                  (e.addEventListener && e.addEventListener(f, s))),
              d.add &&
                (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
              (Te.event.global[f] = !0));
    },
    remove: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        g,
        m = qe.hasData(e) && qe.get(e);
      if (m && (l = m.events)) {
        for (c = (t = (t || "").match(Ie) || [""]).length; c--; )
          if (
            ((a = it.exec(t[c]) || []),
            (f = g = a[1]),
            (h = (a[2] || "").split(".").sort()),
            f)
          ) {
            for (
              d = Te.event.special[f] || {},
                p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = r = p.length;
              r--;

            )
              (u = p[r]),
                (!o && g !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (p.splice(r, 1),
                  u.selector && p.delegateCount--,
                  d.remove && d.remove.call(e, u));
            s &&
              !p.length &&
              ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) ||
                Te.removeEvent(e, f, m.handle),
              delete l[f]);
          } else for (f in l) Te.event.remove(e, f + t[c], n, i, !0);
        Te.isEmptyObject(l) && qe.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a = Te.event.fix(e),
        l = new Array(arguments.length),
        c = (qe.get(this, "events") || {})[a.type] || [],
        u = Te.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((a.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, a))
      ) {
        for (
          s = Te.event.handlers.call(this, a, c), t = 0;
          (o = s[t++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = o.elem, n = 0;
            (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();

          )
            (a.rnamespace && !a.rnamespace.test(r.namespace)) ||
              ((a.handleObj = r),
              (a.data = r.data),
              void 0 !==
                (i = (
                  (Te.event.special[r.origType] || {}).handle || r.handler
                ).apply(o.elem, l)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        s,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (r = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(o = (i = t[n]).selector + " ")] &&
                (s[o] = i.needsContext
                  ? Te(o, this).index(c) > -1
                  : Te.find(o, this, null, [c]).length),
                s[o] && r.push(i);
            r.length && a.push({ elem: c, handlers: r });
          }
      return (
        (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(Te.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: ye(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[Te.expando] ? e : new Te.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== E() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === E() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && r(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return r(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (Te.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (Te.Event = function (e, t) {
      if (!(this instanceof Te.Event)) return new Te.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? C
              : x),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && Te.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[Te.expando] = !0);
    }),
    (Te.Event.prototype = {
      constructor: Te.Event,
      isDefaultPrevented: x,
      isPropagationStopped: x,
      isImmediatePropagationStopped: x,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = C),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = C),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = C),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    Te.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && tt.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && nt.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      Te.event.addProp
    ),
    Te.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        Te.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = this,
              o = e.relatedTarget,
              r = e.handleObj;
            return (
              (o && (o === i || Te.contains(i, o))) ||
                ((e.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    Te.fn.extend({
      on: function (e, t, n, i) {
        return k(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return k(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            Te(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = x),
          this.each(function () {
            Te.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ot =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    rt = /<script|<style|<link/i,
    st = /checked\s*(?:[^=]|=\s*.checked.)/i,
    at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  Te.extend({
    htmlPrefilter: function (e) {
      return e.replace(ot, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var i,
        o,
        r,
        s,
        a = e.cloneNode(!0),
        l = Te.contains(e.ownerDocument, e);
      if (
        !(
          ve.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          Te.isXMLDoc(e)
        )
      )
        for (s = T(a), i = 0, o = (r = T(e)).length; i < o; i++) I(r[i], s[i]);
      if (t)
        if (n)
          for (r = r || T(e), s = s || T(a), i = 0, o = r.length; i < o; i++)
            N(r[i], s[i]);
        else N(e, a);
      return (s = T(a, "script")).length > 0 && _(s, !l && T(e, "script")), a;
    },
    cleanData: function (e) {
      for (var t, n, i, o = Te.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (Me(n)) {
          if ((t = n[qe.expando])) {
            if (t.events)
              for (i in t.events)
                o[i] ? Te.event.remove(n, i) : Te.removeEvent(n, i, t.handle);
            n[qe.expando] = void 0;
          }
          n[We.expando] && (n[We.expando] = void 0);
        }
    },
  }),
    Te.fn.extend({
      detach: function (e) {
        return $(this, e, !0);
      },
      remove: function (e) {
        return $(this, e);
      },
      text: function (e) {
        return je(
          this,
          function (e) {
            return void 0 === e
              ? Te.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return L(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            A(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return L(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = A(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return L(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return L(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (Te.cleanData(T(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return Te.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return je(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !rt.test(e) &&
              !Je[(Ve.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = Te.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (Te.cleanData(T(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return L(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            Te.inArray(this, e) < 0 &&
              (Te.cleanData(T(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    Te.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        Te.fn[e] = function (e) {
          for (var n, i = [], o = Te(e), r = o.length - 1, s = 0; s <= r; s++)
            (n = s === r ? this : this.clone(!0)),
              Te(o[s])[t](n),
              ue.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var lt = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
    ct = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    ut = new RegExp(Ue.join("|"), "i");
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          et.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = "1%" !== t.top),
          (a = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (r = 36 === c.offsetWidth || "absolute"),
          et.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      r,
      s,
      a,
      l = se.createElement("div"),
      c = se.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (ve.clearCloneStyle = "content-box" === c.style.backgroundClip),
      Te.extend(ve, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), a;
        },
        scrollboxSize: function () {
          return t(), r;
        },
      }));
  })();
  var dt = /^(none|table(?!-c[ea]).+)/,
    pt = /^--/,
    ft = { position: "absolute", visibility: "hidden", display: "block" },
    ht = { letterSpacing: "0", fontWeight: "400" },
    gt = ["Webkit", "Moz", "ms"],
    mt = se.createElement("div").style;
  Te.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = j(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          s,
          a = h(t),
          l = pt.test(t),
          c = e.style;
        if (
          (l || (t = M(a)),
          (s = Te.cssHooks[t] || Te.cssHooks[a]),
          void 0 === n)
        )
          return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
        "string" == (r = typeof n) &&
          (o = Be.exec(n)) &&
          o[1] &&
          ((n = y(e, t, o)), (r = "number")),
          null != n &&
            n === n &&
            ("number" === r &&
              (n += (o && o[3]) || (Te.cssNumber[a] ? "" : "px")),
            ve.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var o,
        r,
        s,
        a = h(t);
      return (
        pt.test(t) || (t = M(a)),
        (s = Te.cssHooks[t] || Te.cssHooks[a]) &&
          "get" in s &&
          (o = s.get(e, !0, n)),
        void 0 === o && (o = j(e, t, i)),
        "normal" === o && t in ht && (o = ht[t]),
        "" === n || n
          ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
          : o
      );
    },
  }),
    Te.each(["height", "width"], function (e, t) {
      Te.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !dt.test(Te.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? R(e, t, i)
              : Ye(e, ft, function () {
                  return R(e, t, i);
                });
        },
        set: function (e, n, i) {
          var o,
            r = ct(e),
            s = "border-box" === Te.css(e, "boxSizing", !1, r),
            a = i && W(e, t, i, s, r);
          return (
            s &&
              ve.scrollboxSize() === r.position &&
              (a -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(r[t]) -
                  W(e, t, "border", !1, r) -
                  0.5
              )),
            a &&
              (o = Be.exec(n)) &&
              "px" !== (o[3] || "px") &&
              ((e.style[t] = n), (n = Te.css(e, t))),
            q(e, n, a)
          );
        },
      };
    }),
    (Te.cssHooks.marginLeft = P(ve.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(j(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ye(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    Te.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (Te.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            o[e + Ue[i] + t] = r[i] || r[i - 2] || r[0];
          return o;
        },
      }),
        "margin" !== e && (Te.cssHooks[e + t].set = q);
    }),
    Te.fn.extend({
      css: function (e, t) {
        return je(
          this,
          function (e, t, n) {
            var i,
              o,
              r = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = ct(e), o = t.length; s < o; s++)
                r[t[s]] = Te.css(e, t[s], !1, i);
              return r;
            }
            return void 0 !== n ? Te.style(e, t, n) : Te.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (Te.Tween = z),
    (z.prototype = {
      constructor: z,
      init: function (e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || Te.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (Te.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = z.propHooks[this.prop];
        return e && e.get ? e.get(this) : z.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = z.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                Te.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : z.propHooks._default.set(this),
          this
        );
      },
    }),
    (z.prototype.init.prototype = z.prototype),
    (z.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = Te.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          Te.fx.step[e.prop]
            ? Te.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[Te.cssProps[e.prop]] &&
                !Te.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : Te.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (z.propHooks.scrollTop = z.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (Te.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (Te.fx = z.prototype.init),
    (Te.fx.step = {});
  var vt,
    yt,
    bt = /^(?:toggle|show|hide)$/,
    wt = /queueHooks$/;
  (Te.Animation = Te.extend(Q, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return y(n.elem, e, Be.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      ye(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ie));
      for (var n, i = 0, o = e.length; i < o; i++)
        (n = e[i]),
          (Q.tweeners[n] = Q.tweeners[n] || []),
          Q.tweeners[n].unshift(t);
    },
    prefilters: [Y],
    prefilter: function (e, t) {
      t ? Q.prefilters.unshift(e) : Q.prefilters.push(e);
    },
  })),
    (Te.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? Te.extend({}, e)
          : {
              complete: n || (!n && t) || (ye(e) && e),
              duration: e,
              easing: (n && t) || (t && !ye(t) && t),
            };
      return (
        Te.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in Te.fx.speeds
              ? (i.duration = Te.fx.speeds[i.duration])
              : (i.duration = Te.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          ye(i.old) && i.old.call(this), i.queue && Te.dequeue(this, i.queue);
        }),
        i
      );
    }),
    Te.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(Xe)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var o = Te.isEmptyObject(e),
          r = Te.speed(t, n, i),
          s = function () {
            var t = Q(this, Te.extend({}, e), r);
            (o || qe.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              o = null != e && e + "queueHooks",
              r = Te.timers,
              s = qe.get(this);
            if (o) s[o] && s[o].stop && i(s[o]);
            else for (o in s) s[o] && s[o].stop && wt.test(o) && i(s[o]);
            for (o = r.length; o--; )
              r[o].elem !== this ||
                (null != e && r[o].queue !== e) ||
                (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
            (!t && n) || Te.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = qe.get(this),
              i = n[e + "queue"],
              o = n[e + "queueHooks"],
              r = Te.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
                Te.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === e &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < s; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    Te.each(["toggle", "show", "hide"], function (e, t) {
      var n = Te.fn[t];
      Te.fn[t] = function (e, i, o) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(U(t, !0), e, i, o);
      };
    }),
    Te.each(
      {
        slideDown: U("show"),
        slideUp: U("hide"),
        slideToggle: U("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        Te.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (Te.timers = []),
    (Te.fx.tick = function () {
      var e,
        t = 0,
        n = Te.timers;
      for (vt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || Te.fx.stop(), (vt = void 0);
    }),
    (Te.fx.timer = function (e) {
      Te.timers.push(e), Te.fx.start();
    }),
    (Te.fx.interval = 13),
    (Te.fx.start = function () {
      yt || ((yt = !0), F());
    }),
    (Te.fx.stop = function () {
      yt = null;
    }),
    (Te.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (Te.fn.delay = function (t, n) {
      return (
        (t = Te.fx ? Te.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var o = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(o);
          };
        })
      );
    }),
    (function () {
      var e = se.createElement("input"),
        t = se.createElement("select").appendChild(se.createElement("option"));
      (e.type = "checkbox"),
        (ve.checkOn = "" !== e.value),
        (ve.optSelected = t.selected),
        ((e = se.createElement("input")).value = "t"),
        (e.type = "radio"),
        (ve.radioValue = "t" === e.value);
    })();
  var Tt,
    _t = Te.expr.attrHandle;
  Te.fn.extend({
    attr: function (e, t) {
      return je(this, Te.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        Te.removeAttr(this, e);
      });
    },
  }),
    Te.extend({
      attr: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === e.getAttribute
            ? Te.prop(e, t, n)
            : ((1 === r && Te.isXMLDoc(e)) ||
                (o =
                  Te.attrHooks[t.toLowerCase()] ||
                  (Te.expr.match.bool.test(t) ? Tt : void 0)),
              void 0 !== n
                ? null === n
                  ? void Te.removeAttr(e, t)
                  : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = Te.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!ve.radioValue && "radio" === t && r(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          o = t && t.match(Ie);
        if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
      },
    }),
    (Tt = {
      set: function (e, t, n) {
        return !1 === t ? Te.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    Te.each(Te.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = _t[t] || Te.find.attr;
      _t[t] = function (e, t, i) {
        var o,
          r,
          s = t.toLowerCase();
        return (
          i ||
            ((r = _t[s]),
            (_t[s] = o),
            (o = null != n(e, t, i) ? s : null),
            (_t[s] = r)),
          o
        );
      };
    });
  var St = /^(?:input|select|textarea|button)$/i,
    Ct = /^(?:a|area)$/i;
  Te.fn.extend({
    prop: function (e, t) {
      return je(this, Te.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[Te.propFix[e] || e];
      });
    },
  }),
    Te.extend({
      prop: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && Te.isXMLDoc(e)) ||
              ((t = Te.propFix[t] || t), (o = Te.propHooks[t])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && "get" in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = Te.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : St.test(e.nodeName) || (Ct.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    ve.optSelected ||
      (Te.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    Te.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        Te.propFix[this.toLowerCase()] = this;
      }
    ),
    Te.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (ye(e))
          return this.each(function (t) {
            Te(this).addClass(e.call(this, t, G(this)));
          });
        if ((t = J(e)).length)
          for (; (n = this[l++]); )
            if (((o = G(n)), (i = 1 === n.nodeType && " " + V(o) + " "))) {
              for (s = 0; (r = t[s++]); )
                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              o !== (a = V(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (ye(e))
          return this.each(function (t) {
            Te(this).removeClass(e.call(this, t, G(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = J(e)).length)
          for (; (n = this[l++]); )
            if (((o = G(n)), (i = 1 === n.nodeType && " " + V(o) + " "))) {
              for (s = 0; (r = t[s++]); )
                for (; i.indexOf(" " + r + " ") > -1; )
                  i = i.replace(" " + r + " ", " ");
              o !== (a = V(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ye(e)
          ? this.each(function (n) {
              Te(this).toggleClass(e.call(this, n, G(this), t), t);
            })
          : this.each(function () {
              var t, o, r, s;
              if (i)
                for (o = 0, r = Te(this), s = J(e); (t = s[o++]); )
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = G(this)) && qe.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : qe.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && (" " + V(G(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  Te.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = ye(e)),
          this.each(function (n) {
            var o;
            1 === this.nodeType &&
              (null == (o = i ? e.call(this, n, Te(this).val()) : e)
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : Array.isArray(o) &&
                  (o = Te.map(o, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                Te.valHooks[this.type] ||
                Te.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, o, "value")) ||
                (this.value = o));
          }))
        : o
        ? (t = Te.valHooks[o.type] || Te.valHooks[o.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(o, "value"))
          ? n
          : "string" == typeof (n = o.value)
          ? n.replace(xt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    Te.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = Te.find.attr(e, "value");
            return null != t ? t : V(Te.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              o = e.options,
              s = e.selectedIndex,
              a = "select-one" === e.type,
              l = a ? null : [],
              c = a ? s + 1 : o.length;
            for (i = s < 0 ? c : a ? s : 0; i < c; i++)
              if (
                ((n = o[i]).selected || i === s) &&
                !n.disabled &&
                (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))
              ) {
                if (((t = Te(n).val()), a)) return t;
                l.push(t);
              }
            return l;
          },
          set: function (e, t) {
            for (
              var n, i, o = e.options, r = Te.makeArray(t), s = o.length;
              s--;

            )
              ((i = o[s]).selected =
                Te.inArray(Te.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    Te.each(["radio", "checkbox"], function () {
      (Te.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = Te.inArray(Te(e).val(), t) > -1);
        },
      }),
        ve.checkOn ||
          (Te.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (ve.focusin = "onfocusin" in e);
  var Et = /^(?:focusinfocus|focusoutblur)$/,
    kt = function (e) {
      e.stopPropagation();
    };
  Te.extend(Te.event, {
    trigger: function (t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f = [i || se],
        h = he.call(t, "type") ? t.type : t,
        g = he.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = p = a = i = i || se),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !Et.test(h + Te.event.triggered) &&
          (h.indexOf(".") > -1 && ((h = (g = h.split(".")).shift()), g.sort()),
          (c = h.indexOf(":") < 0 && "on" + h),
          (t = t[Te.expando] ? t : new Te.Event(h, "object" == typeof t && t)),
          (t.isTrigger = o ? 2 : 3),
          (t.namespace = g.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : Te.makeArray(n, [t])),
          (d = Te.event.special[h] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !be(i)) {
          for (
            l = d.delegateType || h, Et.test(l + h) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            f.push(s), (a = s);
          a === (i.ownerDocument || se) &&
            f.push(a.defaultView || a.parentWindow || e);
        }
        for (r = 0; (s = f[r++]) && !t.isPropagationStopped(); )
          (p = s),
            (t.type = r > 1 ? l : d.bindType || h),
            (u = (qe.get(s, "events") || {})[t.type] && qe.get(s, "handle")) &&
              u.apply(s, n),
            (u = c && s[c]) &&
              u.apply &&
              Me(s) &&
              ((t.result = u.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = h),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(f.pop(), n)) ||
            !Me(i) ||
            (c &&
              ye(i[h]) &&
              !be(i) &&
              ((a = i[c]) && (i[c] = null),
              (Te.event.triggered = h),
              t.isPropagationStopped() && p.addEventListener(h, kt),
              i[h](),
              t.isPropagationStopped() && p.removeEventListener(h, kt),
              (Te.event.triggered = void 0),
              a && (i[c] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = Te.extend(new Te.Event(), n, { type: e, isSimulated: !0 });
      Te.event.trigger(i, null, t);
    },
  }),
    Te.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          Te.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return Te.event.trigger(e, t, n, !0);
      },
    }),
    ve.focusin ||
      Te.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          Te.event.simulate(t, e.target, Te.event.fix(e));
        };
        Te.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this,
              o = qe.access(i, t);
            o || i.addEventListener(e, n, !0), qe.access(i, t, (o || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              o = qe.access(i, t) - 1;
            o
              ? qe.access(i, t, o)
              : (i.removeEventListener(e, n, !0), qe.remove(i, t));
          },
        };
      });
  var At = e.location,
    Dt = Date.now(),
    Ot = /\?/;
  Te.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        Te.error("Invalid XML: " + t),
      n
    );
  };
  var Nt = /\[\]$/,
    It = /\r?\n/g,
    Lt = /^(?:submit|button|image|reset|file)$/i,
    $t = /^(?:input|select|textarea|keygen)/i;
  (Te.param = function (e, t) {
    var n,
      i = [],
      o = function (e, t) {
        var n = ye(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !Te.isPlainObject(e)))
      Te.each(e, function () {
        o(this.name, this.value);
      });
    else for (n in e) Z(n, e[n], t, o);
    return i.join("&");
  }),
    Te.fn.extend({
      serialize: function () {
        return Te.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = Te.prop(this, "elements");
          return e ? Te.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !Te(this).is(":disabled") &&
              $t.test(this.nodeName) &&
              !Lt.test(e) &&
              (this.checked || !Qe.test(e))
            );
          })
          .map(function (e, t) {
            var n = Te(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? Te.map(n, function (e) {
                  return { name: t.name, value: e.replace(It, "\r\n") };
                })
              : { name: t.name, value: n.replace(It, "\r\n") };
          })
          .get();
      },
    });
  var jt = /%20/g,
    Pt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Wt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    zt = {},
    Ft = {},
    Bt = "*/".concat("*"),
    Ut = se.createElement("a");
  (Ut.href = At.href),
    Te.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: At.href,
        type: "GET",
        isLocal: qt.test(At.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Bt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": Te.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? ne(ne(e, Te.ajaxSettings), t) : ne(Te.ajaxSettings, e);
      },
      ajaxPrefilter: ee(zt),
      ajaxTransport: ee(Ft),
      ajax: function (t, n) {
        function i(t, n, i, a) {
          var c,
            p,
            f,
            w,
            T,
            _ = n;
          u ||
            ((u = !0),
            l && e.clearTimeout(l),
            (o = void 0),
            (s = a || ""),
            (S.readyState = t > 0 ? 4 : 0),
            (c = (t >= 200 && t < 300) || 304 === t),
            i && (w = ie(h, S, i)),
            (w = oe(h, w, S, c)),
            c
              ? (h.ifModified &&
                  ((T = S.getResponseHeader("Last-Modified")) &&
                    (Te.lastModified[r] = T),
                  (T = S.getResponseHeader("etag")) && (Te.etag[r] = T)),
                204 === t || "HEAD" === h.type
                  ? (_ = "nocontent")
                  : 304 === t
                  ? (_ = "notmodified")
                  : ((_ = w.state), (p = w.data), (c = !(f = w.error))))
              : ((f = _), (!t && _) || ((_ = "error"), t < 0 && (t = 0))),
            (S.status = t),
            (S.statusText = (n || _) + ""),
            c ? v.resolveWith(g, [p, _, S]) : v.rejectWith(g, [S, _, f]),
            S.statusCode(b),
            (b = void 0),
            d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? p : f]),
            y.fireWith(g, [S, _]),
            d &&
              (m.trigger("ajaxComplete", [S, h]),
              --Te.active || Te.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var o,
          r,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          f,
          h = Te.ajaxSetup({}, n),
          g = h.context || h,
          m = h.context && (g.nodeType || g.jquery) ? Te(g) : Te.event,
          v = Te.Deferred(),
          y = Te.Callbacks("once memory"),
          b = h.statusCode || {},
          w = {},
          T = {},
          _ = "canceled",
          S = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (u) {
                if (!a)
                  for (a = {}; (t = Mt.exec(s)); ) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return u ? s : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == u &&
                  ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                  (w[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == u && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (u) S.always(e[S.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || _;
              return o && o.abort(t), i(0, t), this;
            },
          };
        if (
          (v.promise(S),
          (h.url = ((t || h.url || At.href) + "").replace(
            Rt,
            At.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(Ie) || [""]),
          null == h.crossDomain)
        ) {
          c = se.createElement("a");
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain =
                Ut.protocol + "//" + Ut.host != c.protocol + "//" + c.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = Te.param(h.data, h.traditional)),
          te(zt, h, n, S),
          u)
        )
          return S;
        (d = Te.event && h.global) &&
          0 == Te.active++ &&
          Te.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !Wt.test(h.type)),
          (r = h.url.replace(Pt, "")),
          h.hasContent
            ? h.data &&
              h.processData &&
              0 ===
                (h.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (h.data = h.data.replace(jt, "+"))
            : ((f = h.url.slice(r.length)),
              h.data &&
                (h.processData || "string" == typeof h.data) &&
                ((r += (Ot.test(r) ? "&" : "?") + h.data), delete h.data),
              !1 === h.cache &&
                ((r = r.replace(Ht, "$1")),
                (f = (Ot.test(r) ? "&" : "?") + "_=" + Dt++ + f)),
              (h.url = r + f)),
          h.ifModified &&
            (Te.lastModified[r] &&
              S.setRequestHeader("If-Modified-Since", Te.lastModified[r]),
            Te.etag[r] && S.setRequestHeader("If-None-Match", Te.etag[r])),
          ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
            S.setRequestHeader("Content-Type", h.contentType),
          S.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "")
              : h.accepts["*"]
          );
        for (p in h.headers) S.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || u))
          return S.abort();
        if (
          ((_ = "abort"),
          y.add(h.complete),
          S.done(h.success),
          S.fail(h.error),
          (o = te(Ft, h, n, S)))
        ) {
          if (((S.readyState = 1), d && m.trigger("ajaxSend", [S, h]), u))
            return S;
          h.async &&
            h.timeout > 0 &&
            (l = e.setTimeout(function () {
              S.abort("timeout");
            }, h.timeout));
          try {
            (u = !1), o.send(w, i);
          } catch (e) {
            if (u) throw e;
            i(-1, e);
          }
        } else i(-1, "No Transport");
        return S;
      },
      getJSON: function (e, t, n) {
        return Te.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return Te.get(e, void 0, t, "script");
      },
    }),
    Te.each(["get", "post"], function (e, t) {
      Te[t] = function (e, n, i, o) {
        return (
          ye(n) && ((o = o || i), (i = n), (n = void 0)),
          Te.ajax(
            Te.extend(
              { url: e, type: t, dataType: o, data: n, success: i },
              Te.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (Te._evalUrl = function (e) {
      return Te.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    Te.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (ye(e) && (e = e.call(this[0])),
            (t = Te(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return ye(e)
          ? this.each(function (t) {
              Te(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = Te(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = ye(e);
        return this.each(function (n) {
          Te(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              Te(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (Te.expr.pseudos.hidden = function (e) {
      return !Te.expr.pseudos.visible(e);
    }),
    (Te.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (Te.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Xt = { 0: 200, 1223: 204 },
    Yt = Te.ajaxSettings.xhr();
  (ve.cors = !!Yt && "withCredentials" in Yt),
    (ve.ajax = Yt = !!Yt),
    Te.ajaxTransport(function (t) {
      var n, i;
      if (ve.cors || (Yt && !t.crossDomain))
        return {
          send: function (o, r) {
            var s,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
              t.crossDomain ||
                o["X-Requested-With"] ||
                (o["X-Requested-With"] = "XMLHttpRequest");
            for (s in o) a.setRequestHeader(s, o[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? r(0, "error")
                      : r(a.status, a.statusText)
                    : r(
                        Xt[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    Te.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    Te.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return Te.globalEval(e), e;
        },
      },
    }),
    Te.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    Te.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, o) {
            (t = Te("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              se.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Kt = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  Te.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || Te.expando + "_" + Dt++;
      return (this[e] = !0), e;
    },
  }),
    Te.ajaxPrefilter("json jsonp", function (t, n, i) {
      var o,
        r,
        s,
        a =
          !1 !== t.jsonp &&
          (Qt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Qt.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (o = t.jsonpCallback =
            ye(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Qt, "$1" + o))
            : !1 !== t.jsonp &&
              (t.url += (Ot.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
          (t.converters["script json"] = function () {
            return s || Te.error(o + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (r = e[o]),
          (e[o] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === r ? Te(e).removeProp(o) : (e[o] = r),
              t[o] && ((t.jsonpCallback = n.jsonpCallback), Kt.push(o)),
              s && ye(r) && r(s[0]),
              (s = r = void 0);
          }),
          "script"
        );
    }),
    (ve.createHTMLDocument = (function () {
      var e = se.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (Te.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && ((n = t), (t = !1));
      var i, o, r;
      return (
        t ||
          (ve.createHTMLDocument
            ? (((i = (t =
                se.implementation.createHTMLDocument("")).createElement(
                "base"
              )).href = se.location.href),
              t.head.appendChild(i))
            : (t = se)),
        (o = ke.exec(e)),
        (r = !n && []),
        o
          ? [t.createElement(o[1])]
          : ((o = S([e], t, r)),
            r && r.length && Te(r).remove(),
            Te.merge([], o.childNodes))
      );
    }),
    (Te.fn.load = function (e, t, n) {
      var i,
        o,
        r,
        s = this,
        a = e.indexOf(" ");
      return (
        a > -1 && ((i = V(e.slice(a))), (e = e.slice(0, a))),
        ye(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (o = "POST"),
        s.length > 0 &&
          Te.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
            .done(function (e) {
              (r = arguments),
                s.html(i ? Te("<div>").append(Te.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, r || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    Te.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        Te.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (Te.expr.pseudos.animated = function (e) {
      return Te.grep(Te.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (Te.offset = {
      setOffset: function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c = Te.css(e, "position"),
          u = Te(e),
          d = {};
        "static" === c && (e.style.position = "relative"),
          (a = u.offset()),
          (r = Te.css(e, "top")),
          (l = Te.css(e, "left")),
          ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1
            ? ((s = (i = u.position()).top), (o = i.left))
            : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          ye(t) && (t = t.call(e, n, Te.extend({}, a))),
          null != t.top && (d.top = t.top - a.top + s),
          null != t.left && (d.left = t.left - a.left + o),
          "using" in t ? t.using.call(e, d) : u.css(d);
      },
    }),
    Te.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                Te.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 };
          if ("fixed" === Te.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === Te.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((o = Te(e).offset()).top += Te.css(e, "borderTopWidth", !0)),
              (o.left += Te.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - o.top - Te.css(i, "marginTop", !0),
            left: t.left - o.left - Te.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === Te.css(e, "position");

          )
            e = e.offsetParent;
          return e || et;
        });
      },
    }),
    Te.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        Te.fn[e] = function (i) {
          return je(
            this,
            function (e, i, o) {
              var r;
              if (
                (be(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === o)
              )
                return r ? r[t] : e[i];
              r
                ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
                : (e[i] = o);
            },
            e,
            i,
            arguments.length
          );
        };
      }
    ),
    Te.each(["top", "left"], function (e, t) {
      Te.cssHooks[t] = P(ve.pixelPosition, function (e, n) {
        if (n)
          return (n = j(e, t)), lt.test(n) ? Te(e).position()[t] + "px" : n;
      });
    }),
    Te.each({ Height: "height", Width: "width" }, function (e, t) {
      Te.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, i) {
          Te.fn[i] = function (o, r) {
            var s = arguments.length && (n || "boolean" != typeof o),
              a = n || (!0 === o || !0 === r ? "margin" : "border");
            return je(
              this,
              function (t, n, o) {
                var r;
                return be(t)
                  ? 0 === i.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((r = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      r["scroll" + e],
                      t.body["offset" + e],
                      r["offset" + e],
                      r["client" + e]
                    ))
                  : void 0 === o
                  ? Te.css(t, n, a)
                  : Te.style(t, n, o, a);
              },
              t,
              s ? o : void 0,
              s
            );
          };
        }
      );
    }),
    Te.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        Te.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    Te.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    Te.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (Te.proxy = function (e, t) {
      var n, i, o;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), ye(e)))
        return (
          (i = le.call(arguments, 2)),
          (o = function () {
            return e.apply(t || this, i.concat(le.call(arguments)));
          }),
          (o.guid = e.guid = e.guid || Te.guid++),
          o
        );
    }),
    (Te.holdReady = function (e) {
      e ? Te.readyWait++ : Te.ready(!0);
    }),
    (Te.isArray = Array.isArray),
    (Te.parseJSON = JSON.parse),
    (Te.nodeName = r),
    (Te.isFunction = ye),
    (Te.isWindow = be),
    (Te.camelCase = h),
    (Te.type = i),
    (Te.now = Date.now),
    (Te.isNumeric = function (e) {
      var t = Te.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return Te;
      });
  var Vt = e.jQuery,
    Gt = e.$;
  return (
    (Te.noConflict = function (t) {
      return (
        e.$ === Te && (e.$ = Gt), t && e.jQuery === Te && (e.jQuery = Vt), Te
      );
    }),
    t || (e.jQuery = e.$ = Te),
    Te
  );
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : (e.Popper = t());
  })(this, function () {
    "use strict";
    function e(e) {
      return e && "[object Function]" === {}.toString.call(e);
    }
    function t(e, t) {
      if (1 !== e.nodeType) return [];
      var n = window.getComputedStyle(e, null);
      return t ? n[t] : n;
    }
    function n(e) {
      return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function i(e) {
      if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName))
        return window.document.body;
      var o = t(e),
        r = o.overflow,
        s = o.overflowX;
      return /(auto|scroll)/.test(r + o.overflowY + s) ? e : i(n(e));
    }
    function o(e) {
      var n = e && e.offsetParent,
        i = n && n.nodeName;
      return i && "BODY" !== i && "HTML" !== i
        ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) &&
          "static" === t(n, "position")
          ? o(n)
          : n
        : window.document.documentElement;
    }
    function r(e) {
      var t = e.nodeName;
      return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e);
    }
    function s(e) {
      return null === e.parentNode ? e : s(e.parentNode);
    }
    function a(e, t) {
      if (!(e && e.nodeType && t && t.nodeType))
        return window.document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        l = n ? t : e,
        c = document.createRange();
      c.setStart(i, 0), c.setEnd(l, 0);
      var u = c.commonAncestorContainer;
      if ((e !== u && t !== u) || i.contains(l)) return r(u) ? u : o(u);
      var d = s(e);
      return d.host ? a(d.host, t) : a(e, s(t).host);
    }
    function l(e) {
      var t =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "top",
        n = "top" === t ? "scrollTop" : "scrollLeft",
        i = e.nodeName;
      if ("BODY" === i || "HTML" === i) {
        var o = window.document.documentElement;
        return (window.document.scrollingElement || o)[n];
      }
      return e[n];
    }
    function c(e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = l(t, "top"),
        o = l(t, "left"),
        r = n ? -1 : 1;
      return (
        (e.top += i * r),
        (e.bottom += i * r),
        (e.left += o * r),
        (e.right += o * r),
        e
      );
    }
    function u(e, t) {
      var n = "x" === t ? "Left" : "Top",
        i = "Left" == n ? "Right" : "Bottom";
      return (
        +e["border" + n + "Width"].split("px")[0] +
        +e["border" + i + "Width"].split("px")[0]
      );
    }
    function d(e, t, n, i) {
      return Y(
        t["offset" + e],
        n["client" + e],
        n["offset" + e],
        ne()
          ? n["offset" + e] +
              i["margin" + ("Height" === e ? "Top" : "Left")] +
              i["margin" + ("Height" === e ? "Bottom" : "Right")]
          : 0
      );
    }
    function p() {
      var e = window.document.body,
        t = window.document.documentElement,
        n = ne() && window.getComputedStyle(t);
      return { height: d("Height", e, t, n), width: d("Width", e, t, n) };
    }
    function f(e) {
      return se({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function h(e) {
      var n = {};
      if (ne())
        try {
          n = e.getBoundingClientRect();
          var i = l(e, "top"),
            o = l(e, "left");
          (n.top += i), (n.left += o), (n.bottom += i), (n.right += o);
        } catch (e) {}
      else n = e.getBoundingClientRect();
      var r = {
          left: n.left,
          top: n.top,
          width: n.right - n.left,
          height: n.bottom - n.top,
        },
        s = "HTML" === e.nodeName ? p() : {},
        a = s.width || e.clientWidth || r.right - r.left,
        c = s.height || e.clientHeight || r.bottom - r.top,
        d = e.offsetWidth - a,
        h = e.offsetHeight - c;
      if (d || h) {
        var g = t(e);
        (d -= u(g, "x")), (h -= u(g, "y")), (r.width -= d), (r.height -= h);
      }
      return f(r);
    }
    function g(e, n) {
      var o = ne(),
        r = "HTML" === n.nodeName,
        s = h(e),
        a = h(n),
        l = i(e),
        u = t(n),
        d = +u.borderTopWidth.split("px")[0],
        p = +u.borderLeftWidth.split("px")[0],
        g = f({
          top: s.top - a.top - d,
          left: s.left - a.left - p,
          width: s.width,
          height: s.height,
        });
      if (((g.marginTop = 0), (g.marginLeft = 0), !o && r)) {
        var m = +u.marginTop.split("px")[0],
          v = +u.marginLeft.split("px")[0];
        (g.top -= d - m),
          (g.bottom -= d - m),
          (g.left -= p - v),
          (g.right -= p - v),
          (g.marginTop = m),
          (g.marginLeft = v);
      }
      return (
        (o ? n.contains(l) : n === l && "BODY" !== l.nodeName) && (g = c(g, n)),
        g
      );
    }
    function m(e) {
      var t = window.document.documentElement,
        n = g(e, t),
        i = Y(t.clientWidth, window.innerWidth || 0),
        o = Y(t.clientHeight, window.innerHeight || 0),
        r = l(t),
        s = l(t, "left");
      return f({
        top: r - n.top + n.marginTop,
        left: s - n.left + n.marginLeft,
        width: i,
        height: o,
      });
    }
    function v(e) {
      var i = e.nodeName;
      return (
        "BODY" !== i &&
        "HTML" !== i &&
        ("fixed" === t(e, "position") || v(n(e)))
      );
    }
    function y(e, t, o, r) {
      var s = { top: 0, left: 0 },
        l = a(e, t);
      if ("viewport" === r) s = m(l);
      else {
        var c;
        "scrollParent" === r
          ? ((c = i(n(e))),
            "BODY" === c.nodeName && (c = window.document.documentElement))
          : (c = "window" === r ? window.document.documentElement : r);
        var u = g(c, l);
        if ("HTML" !== c.nodeName || v(l)) s = u;
        else {
          var d = p(),
            f = d.height,
            h = d.width;
          (s.top += u.top - u.marginTop),
            (s.bottom = f + u.top),
            (s.left += u.left - u.marginLeft),
            (s.right = h + u.left);
        }
      }
      return (s.left += o), (s.top += o), (s.right -= o), (s.bottom -= o), s;
    }
    function b(e) {
      return e.width * e.height;
    }
    function w(e, t, n, i, o) {
      var r =
        5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === e.indexOf("auto")) return e;
      var s = y(n, i, r, o),
        a = {
          top: { width: s.width, height: t.top - s.top },
          right: { width: s.right - t.right, height: s.height },
          bottom: { width: s.width, height: s.bottom - t.bottom },
          left: { width: t.left - s.left, height: s.height },
        },
        l = Object.keys(a)
          .map(function (e) {
            return se({ key: e }, a[e], { area: b(a[e]) });
          })
          .sort(function (e, t) {
            return t.area - e.area;
          }),
        c = l.filter(function (e) {
          var t = e.width,
            i = e.height;
          return t >= n.clientWidth && i >= n.clientHeight;
        }),
        u = 0 < c.length ? c[0].key : l[0].key,
        d = e.split("-")[1];
      return u + (d ? "-" + d : "");
    }
    function T(e, t, n) {
      return g(n, a(t, n));
    }
    function _(e) {
      var t = window.getComputedStyle(e),
        n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
      return { width: e.offsetWidth + i, height: e.offsetHeight + n };
    }
    function S(e) {
      var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return e.replace(/left|right|bottom|top/g, function (e) {
        return t[e];
      });
    }
    function C(e, t, n) {
      n = n.split("-")[0];
      var i = _(e),
        o = { width: i.width, height: i.height },
        r = -1 !== ["right", "left"].indexOf(n),
        s = r ? "top" : "left",
        a = r ? "left" : "top",
        l = r ? "height" : "width",
        c = r ? "width" : "height";
      return (
        (o[s] = t[s] + t[l] / 2 - i[l] / 2),
        (o[a] = n === a ? t[a] - i[c] : t[S(a)]),
        o
      );
    }
    function x(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function E(e, t, n) {
      if (Array.prototype.findIndex)
        return e.findIndex(function (e) {
          return e[t] === n;
        });
      var i = x(e, function (e) {
        return e[t] === n;
      });
      return e.indexOf(i);
    }
    function k(t, n, i) {
      return (
        (void 0 === i ? t : t.slice(0, E(t, "name", i))).forEach(function (t) {
          t.function &&
            console.warn(
              "`modifier.function` is deprecated, use `modifier.fn`!"
            );
          var i = t.function || t.fn;
          t.enabled &&
            e(i) &&
            ((n.offsets.popper = f(n.offsets.popper)),
            (n.offsets.reference = f(n.offsets.reference)),
            (n = i(n, t)));
        }),
        n
      );
    }
    function A() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        };
        (e.offsets.reference = T(this.state, this.popper, this.reference)),
          (e.placement = w(
            this.options.placement,
            e.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (e.originalPlacement = e.placement),
          (e.offsets.popper = C(this.popper, e.offsets.reference, e.placement)),
          (e.offsets.popper.position = "absolute"),
          (e = k(this.modifiers, e)),
          this.state.isCreated
            ? this.options.onUpdate(e)
            : ((this.state.isCreated = !0), this.options.onCreate(e));
      }
    }
    function D(e, t) {
      return e.some(function (e) {
        var n = e.name;
        return e.enabled && n === t;
      });
    }
    function O(e) {
      for (
        var t = [!1, "ms", "Webkit", "Moz", "O"],
          n = e.charAt(0).toUpperCase() + e.slice(1),
          i = 0;
        i < t.length - 1;
        i++
      ) {
        var o = t[i],
          r = o ? "" + o + n : e;
        if (void 0 !== window.document.body.style[r]) return r;
      }
      return null;
    }
    function N() {
      return (
        (this.state.isDestroyed = !0),
        D(this.modifiers, "applyStyle") &&
          (this.popper.removeAttribute("x-placement"),
          (this.popper.style.left = ""),
          (this.popper.style.position = ""),
          (this.popper.style.top = ""),
          (this.popper.style[O("transform")] = "")),
        this.disableEventListeners(),
        this.options.removeOnDestroy &&
          this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function I(e, t, n, o) {
      var r = "BODY" === e.nodeName,
        s = r ? window : e;
      s.addEventListener(t, n, { passive: !0 }),
        r || I(i(s.parentNode), t, n, o),
        o.push(s);
    }
    function L(e, t, n, o) {
      (n.updateBound = o),
        window.addEventListener("resize", n.updateBound, { passive: !0 });
      var r = i(e);
      return (
        I(r, "scroll", n.updateBound, n.scrollParents),
        (n.scrollElement = r),
        (n.eventsEnabled = !0),
        n
      );
    }
    function $() {
      this.state.eventsEnabled ||
        (this.state = L(
          this.reference,
          this.options,
          this.state,
          this.scheduleUpdate
        ));
    }
    function j(e, t) {
      return (
        window.removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function (e) {
          e.removeEventListener("scroll", t.updateBound);
        }),
        (t.updateBound = null),
        (t.scrollParents = []),
        (t.scrollElement = null),
        (t.eventsEnabled = !1),
        t
      );
    }
    function P() {
      this.state.eventsEnabled &&
        (window.cancelAnimationFrame(this.scheduleUpdate),
        (this.state = j(this.reference, this.state)));
    }
    function H(e) {
      return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function M(e, t) {
      Object.keys(t).forEach(function (n) {
        var i = "";
        -1 !==
          ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
          H(t[n]) &&
          (i = "px"),
          (e.style[n] = t[n] + i);
      });
    }
    function q(e, t) {
      Object.keys(t).forEach(function (n) {
        !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
      });
    }
    function W(e, t, n) {
      var i = x(e, function (e) {
          return e.name === t;
        }),
        o =
          !!i &&
          e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order;
          });
      if (!o) {
        var r = "`" + t + "`";
        console.warn(
          "`" +
            n +
            "` modifier is required by " +
            r +
            " modifier in order to work, be sure to include it before " +
            r +
            "!"
        );
      }
      return o;
    }
    function R(e) {
      return "end" === e ? "start" : "start" === e ? "end" : e;
    }
    function z(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = le.indexOf(e),
        i = le.slice(n + 1).concat(le.slice(0, n));
      return t ? i.reverse() : i;
    }
    function F(e, t, n, i) {
      var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +o[1],
        s = o[2];
      if (!r) return e;
      if (0 === s.indexOf("%")) {
        var a;
        switch (s) {
          case "%p":
            a = n;
            break;
          case "%":
          case "%r":
          default:
            a = i;
        }
        return (f(a)[t] / 100) * r;
      }
      if ("vh" === s || "vw" === s) {
        return (
          (("vh" === s
            ? Y(document.documentElement.clientHeight, window.innerHeight || 0)
            : Y(document.documentElement.clientWidth, window.innerWidth || 0)) /
            100) *
          r
        );
      }
      return r;
    }
    function B(e, t, n, i) {
      var o = [0, 0],
        r = -1 !== ["right", "left"].indexOf(i),
        s = e.split(/(\+|\-)/).map(function (e) {
          return e.trim();
        }),
        a = s.indexOf(
          x(s, function (e) {
            return -1 !== e.search(/,|\s/);
          })
        );
      s[a] &&
        -1 === s[a].indexOf(",") &&
        console.warn(
          "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
        );
      var l = /\s*,\s*|\s+/,
        c =
          -1 === a
            ? [s]
            : [
                s.slice(0, a).concat([s[a].split(l)[0]]),
                [s[a].split(l)[1]].concat(s.slice(a + 1)),
              ];
      return (
        (c = c.map(function (e, i) {
          var o = (1 === i ? !r : r) ? "height" : "width",
            s = !1;
          return e
            .reduce(function (e, t) {
              return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                ? ((e[e.length - 1] = t), (s = !0), e)
                : s
                ? ((e[e.length - 1] += t), (s = !1), e)
                : e.concat(t);
            }, [])
            .map(function (e) {
              return F(e, o, t, n);
            });
        })),
        c.forEach(function (e, t) {
          e.forEach(function (n, i) {
            H(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1));
          });
        }),
        o
      );
    }
    for (
      var U = Math.min,
        X = Math.floor,
        Y = Math.max,
        K = ["native code", "[object MutationObserverConstructor]"],
        Q = "undefined" != typeof window,
        V = ["Edge", "Trident", "Firefox"],
        G = 0,
        J = 0;
      J < V.length;
      J += 1
    )
      if (Q && 0 <= navigator.userAgent.indexOf(V[J])) {
        G = 1;
        break;
      }
    var Z,
      ee =
        Q &&
        (function (e) {
          return K.some(function (t) {
            return -1 < (e || "").toString().indexOf(t);
          });
        })(window.MutationObserver),
      te = ee
        ? function (e) {
            var t = !1,
              n = 0,
              i = document.createElement("span");
            return (
              new MutationObserver(function () {
                e(), (t = !1);
              }).observe(i, { attributes: !0 }),
              function () {
                t || ((t = !0), i.setAttribute("x-index", n), ++n);
              }
            );
          }
        : function (e) {
            var t = !1;
            return function () {
              t ||
                ((t = !0),
                setTimeout(function () {
                  (t = !1), e();
                }, G));
            };
          },
      ne = function () {
        return (
          void 0 == Z && (Z = -1 !== navigator.appVersion.indexOf("MSIE 10")), Z
        );
      },
      ie = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      },
      oe = (function () {
        function e(e, t) {
          for (var n, i = 0; i < t.length; i++)
            (n = t[i]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      re = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      },
      se =
        Object.assign ||
        function (e) {
          for (var t, n = 1; n < arguments.length; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        },
      ae = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start",
      ],
      le = ae.slice(3),
      ce = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise",
      },
      ue = (function () {
        function t(n, i) {
          var o = this,
            r =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          ie(this, t),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(o.update);
            }),
            (this.update = te(this.update.bind(this))),
            (this.options = se({}, t.Defaults, r)),
            (this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: [],
            }),
            (this.reference = n.jquery ? n[0] : n),
            (this.popper = i.jquery ? i[0] : i),
            (this.options.modifiers = {}),
            Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(
              function (e) {
                o.options.modifiers[e] = se(
                  {},
                  t.Defaults.modifiers[e] || {},
                  r.modifiers ? r.modifiers[e] : {}
                );
              }
            ),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (e) {
                return se({ name: e }, o.options.modifiers[e]);
              })
              .sort(function (e, t) {
                return e.order - t.order;
              })),
            this.modifiers.forEach(function (t) {
              t.enabled &&
                e(t.onLoad) &&
                t.onLoad(o.reference, o.popper, o.options, t, o.state);
            }),
            this.update();
          var s = this.options.eventsEnabled;
          s && this.enableEventListeners(), (this.state.eventsEnabled = s);
        }
        return (
          oe(t, [
            {
              key: "update",
              value: function () {
                return A.call(this);
              },
            },
            {
              key: "destroy",
              value: function () {
                return N.call(this);
              },
            },
            {
              key: "enableEventListeners",
              value: function () {
                return $.call(this);
              },
            },
            {
              key: "disableEventListeners",
              value: function () {
                return P.call(this);
              },
            },
          ]),
          t
        );
      })();
    return (
      (ue.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
      (ue.placements = ae),
      (ue.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (e) {
              var t = e.placement,
                n = t.split("-")[0],
                i = t.split("-")[1];
              if (i) {
                var o = e.offsets,
                  r = o.reference,
                  s = o.popper,
                  a = -1 !== ["bottom", "top"].indexOf(n),
                  l = a ? "left" : "top",
                  c = a ? "width" : "height",
                  u = {
                    start: re({}, l, r[l]),
                    end: re({}, l, r[l] + r[c] - s[c]),
                  };
                e.offsets.popper = se({}, s, u[i]);
              }
              return e;
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (e, t) {
              var n,
                i = t.offset,
                o = e.placement,
                r = e.offsets,
                s = r.popper,
                a = r.reference,
                l = o.split("-")[0];
              return (
                (n = H(+i) ? [+i, 0] : B(i, s, a, l)),
                "left" === l
                  ? ((s.top += n[0]), (s.left -= n[1]))
                  : "right" === l
                  ? ((s.top += n[0]), (s.left += n[1]))
                  : "top" === l
                  ? ((s.left += n[0]), (s.top -= n[1]))
                  : "bottom" === l && ((s.left += n[0]), (s.top += n[1])),
                (e.popper = s),
                e
              );
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (e, t) {
              var n = t.boundariesElement || o(e.instance.popper);
              e.instance.reference === n && (n = o(n));
              var i = y(e.instance.popper, e.instance.reference, t.padding, n);
              t.boundaries = i;
              var r = t.priority,
                s = e.offsets.popper,
                a = {
                  primary: function (e) {
                    var n = s[e];
                    return (
                      s[e] < i[e] &&
                        !t.escapeWithReference &&
                        (n = Y(s[e], i[e])),
                      re({}, e, n)
                    );
                  },
                  secondary: function (e) {
                    var n = "right" === e ? "left" : "top",
                      o = s[n];
                    return (
                      s[e] > i[e] &&
                        !t.escapeWithReference &&
                        (o = U(
                          s[n],
                          i[e] - ("right" === e ? s.width : s.height)
                        )),
                      re({}, n, o)
                    );
                  },
                };
              return (
                r.forEach(function (e) {
                  var t =
                    -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                  s = se({}, s, a[t](e));
                }),
                (e.offsets.popper = s),
                e
              );
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent",
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (e) {
              var t = e.offsets,
                n = t.popper,
                i = t.reference,
                o = e.placement.split("-")[0],
                r = X,
                s = -1 !== ["top", "bottom"].indexOf(o),
                a = s ? "right" : "bottom",
                l = s ? "left" : "top",
                c = s ? "width" : "height";
              return (
                n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]),
                n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])),
                e
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (e, t) {
              if (!W(e.instance.modifiers, "arrow", "keepTogether")) return e;
              var n = t.element;
              if ("string" == typeof n) {
                if (!(n = e.instance.popper.querySelector(n))) return e;
              } else if (!e.instance.popper.contains(n))
                return (
                  console.warn(
                    "WARNING: `arrow.element` must be child of its popper element!"
                  ),
                  e
                );
              var i = e.placement.split("-")[0],
                o = e.offsets,
                r = o.popper,
                s = o.reference,
                a = -1 !== ["left", "right"].indexOf(i),
                l = a ? "height" : "width",
                c = a ? "top" : "left",
                u = a ? "left" : "top",
                d = a ? "bottom" : "right",
                p = _(n)[l];
              s[d] - p < r[c] && (e.offsets.popper[c] -= r[c] - (s[d] - p)),
                s[c] + p > r[d] && (e.offsets.popper[c] += s[c] + p - r[d]);
              var h = s[c] + s[l] / 2 - p / 2,
                g = h - f(e.offsets.popper)[c];
              return (
                (g = Y(U(r[l] - p, g), 0)),
                (e.arrowElement = n),
                (e.offsets.arrow = {}),
                (e.offsets.arrow[c] = Math.round(g)),
                (e.offsets.arrow[u] = ""),
                e
              );
            },
            element: "[x-arrow]",
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (e, t) {
              if (D(e.instance.modifiers, "inner")) return e;
              if (e.flipped && e.placement === e.originalPlacement) return e;
              var n = y(
                  e.instance.popper,
                  e.instance.reference,
                  t.padding,
                  t.boundariesElement
                ),
                i = e.placement.split("-")[0],
                o = S(i),
                r = e.placement.split("-")[1] || "",
                s = [];
              switch (t.behavior) {
                case ce.FLIP:
                  s = [i, o];
                  break;
                case ce.CLOCKWISE:
                  s = z(i);
                  break;
                case ce.COUNTERCLOCKWISE:
                  s = z(i, !0);
                  break;
                default:
                  s = t.behavior;
              }
              return (
                s.forEach(function (a, l) {
                  if (i !== a || s.length === l + 1) return e;
                  (i = e.placement.split("-")[0]), (o = S(i));
                  var c = e.offsets.popper,
                    u = e.offsets.reference,
                    d = X,
                    p =
                      ("left" === i && d(c.right) > d(u.left)) ||
                      ("right" === i && d(c.left) < d(u.right)) ||
                      ("top" === i && d(c.bottom) > d(u.top)) ||
                      ("bottom" === i && d(c.top) < d(u.bottom)),
                    f = d(c.left) < d(n.left),
                    h = d(c.right) > d(n.right),
                    g = d(c.top) < d(n.top),
                    m = d(c.bottom) > d(n.bottom),
                    v =
                      ("left" === i && f) ||
                      ("right" === i && h) ||
                      ("top" === i && g) ||
                      ("bottom" === i && m),
                    y = -1 !== ["top", "bottom"].indexOf(i),
                    b =
                      !!t.flipVariations &&
                      ((y && "start" === r && f) ||
                        (y && "end" === r && h) ||
                        (!y && "start" === r && g) ||
                        (!y && "end" === r && m));
                  (p || v || b) &&
                    ((e.flipped = !0),
                    (p || v) && (i = s[l + 1]),
                    b && (r = R(r)),
                    (e.placement = i + (r ? "-" + r : "")),
                    (e.offsets.popper = se(
                      {},
                      e.offsets.popper,
                      C(e.instance.popper, e.offsets.reference, e.placement)
                    )),
                    (e = k(e.instance.modifiers, e, "flip")));
                }),
                e
              );
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (e) {
              var t = e.placement,
                n = t.split("-")[0],
                i = e.offsets,
                o = i.popper,
                r = i.reference,
                s = -1 !== ["left", "right"].indexOf(n),
                a = -1 === ["top", "left"].indexOf(n);
              return (
                (o[s ? "left" : "top"] =
                  r[t] - (a ? o[s ? "width" : "height"] : 0)),
                (e.placement = S(t)),
                (e.offsets.popper = f(o)),
                e
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (e) {
              if (!W(e.instance.modifiers, "hide", "preventOverflow")) return e;
              var t = e.offsets.reference,
                n = x(e.instance.modifiers, function (e) {
                  return "preventOverflow" === e.name;
                }).boundaries;
              if (
                t.bottom < n.top ||
                t.left > n.right ||
                t.top > n.bottom ||
                t.right < n.left
              ) {
                if (!0 === e.hide) return e;
                (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
              } else {
                if (!1 === e.hide) return e;
                (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
              }
              return e;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (e, t) {
              var n = t.x,
                i = t.y,
                r = e.offsets.popper,
                s = x(e.instance.modifiers, function (e) {
                  return "applyStyle" === e.name;
                }).gpuAcceleration;
              void 0 !== s &&
                console.warn(
                  "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                );
              var a,
                l,
                c = void 0 === s ? t.gpuAcceleration : s,
                u = o(e.instance.popper),
                d = h(u),
                p = { position: r.position },
                f = {
                  left: X(r.left),
                  top: X(r.top),
                  bottom: X(r.bottom),
                  right: X(r.right),
                },
                g = "bottom" === n ? "top" : "bottom",
                m = "right" === i ? "left" : "right",
                v = O("transform");
              if (
                ((l = "bottom" == g ? -d.height + f.bottom : f.top),
                (a = "right" == m ? -d.width + f.right : f.left),
                c && v)
              )
                (p[v] = "translate3d(" + a + "px, " + l + "px, 0)"),
                  (p[g] = 0),
                  (p[m] = 0),
                  (p.willChange = "transform");
              else {
                var y = "bottom" == g ? -1 : 1,
                  b = "right" == m ? -1 : 1;
                (p[g] = l * y), (p[m] = a * b), (p.willChange = g + ", " + m);
              }
              var w = { "x-placement": e.placement };
              return (
                (e.attributes = se({}, w, e.attributes)),
                (e.styles = se({}, p, e.styles)),
                e
              );
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right",
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (e) {
              return (
                M(e.instance.popper, e.styles),
                q(e.instance.popper, e.attributes),
                e.offsets.arrow && M(e.arrowElement, e.offsets.arrow),
                e
              );
            },
            onLoad: function (e, t, n, i, o) {
              var r = T(o, t, e),
                s = w(
                  n.placement,
                  r,
                  t,
                  e,
                  n.modifiers.flip.boundariesElement,
                  n.modifiers.flip.padding
                );
              return (
                t.setAttribute("x-placement", s),
                M(t, { position: "absolute" }),
                n
              );
            },
            gpuAcceleration: void 0,
          },
        },
      }),
      ue
    );
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], t)
      : t(((e = e || self).bootstrap = {}), e.jQuery, e.Popper);
  })(this, function (e, t, n) {
    "use strict";
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function o(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }
    function r(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
          (i = i.concat(
            Object.getOwnPropertySymbols(n).filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          i.forEach(function (t) {
            var i, o, r;
            (i = e),
              (r = n[(o = t)]),
              o in i
                ? Object.defineProperty(i, o, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (i[o] = r);
          });
      }
      return e;
    }
    function s(e) {
      var n = this,
        i = !1;
      return (
        t(this).one(c.TRANSITION_END, function () {
          i = !0;
        }),
        setTimeout(function () {
          i || c.triggerTransitionEnd(n);
        }, e),
        this
      );
    }
    function a(e, t, n) {
      if (0 === e.length) return e;
      if (n && "function" == typeof n) return n(e);
      for (
        var i = new window.DOMParser().parseFromString(e, "text/html"),
          o = Object.keys(t),
          r = [].slice.call(i.body.querySelectorAll("*")),
          s = 0,
          a = r.length;
        s < a;
        s++
      )
        !(function (e, n) {
          var i = r[e],
            s = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), "continue";
          var a = [].slice.call(i.attributes),
            l = [].concat(t["*"] || [], t[s] || []);
          a.forEach(function (e) {
            (function (e, t) {
              var n = e.nodeName.toLowerCase();
              if (-1 !== t.indexOf(n))
                return (
                  -1 === De.indexOf(n) ||
                  Boolean(e.nodeValue.match(Ne) || e.nodeValue.match(Ie))
                );
              for (
                var i = t.filter(function (e) {
                    return e instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(e, l) || i.removeAttribute(e.nodeName);
          });
        })(s);
      return i.body.innerHTML;
    }
    (t = t && t.hasOwnProperty("default") ? t.default : t),
      (n = n && n.hasOwnProperty("default") ? n.default : n);
    var l = "transitionend",
      c = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (e) {
          for (; (e += ~~(1e6 * Math.random())), document.getElementById(e); );
          return e;
        },
        getSelectorFromElement: function (e) {
          var t = e.getAttribute("data-target");
          if (!t || "#" === t) {
            var n = e.getAttribute("href");
            t = n && "#" !== n ? n.trim() : "";
          }
          try {
            return document.querySelector(t) ? t : null;
          } catch (e) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (e) {
          if (!e) return 0;
          var n = t(e).css("transition-duration"),
            i = t(e).css("transition-delay"),
            o = parseFloat(n),
            r = parseFloat(i);
          return o || r
            ? ((n = n.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (parseFloat(n) + parseFloat(i)))
            : 0;
        },
        reflow: function (e) {
          return e.offsetHeight;
        },
        triggerTransitionEnd: function (e) {
          t(e).trigger(l);
        },
        supportsTransitionEnd: function () {
          return Boolean(l);
        },
        isElement: function (e) {
          return (e[0] || e).nodeType;
        },
        typeCheckConfig: function (e, t, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var o = n[i],
                r = t[i],
                s =
                  r && c.isElement(r)
                    ? "element"
                    : ((a = r),
                      {}.toString
                        .call(a)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase());
              if (!new RegExp(o).test(s))
                throw new Error(
                  e.toUpperCase() +
                    ': Option "' +
                    i +
                    '" provided type "' +
                    s +
                    '" but expected type "' +
                    o +
                    '".'
                );
            }
          var a;
        },
        findShadowRoot: function (e) {
          if (!document.documentElement.attachShadow) return null;
          if ("function" != typeof e.getRootNode)
            return e instanceof ShadowRoot
              ? e
              : e.parentNode
              ? c.findShadowRoot(e.parentNode)
              : null;
          var t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        },
      };
    (t.fn.emulateTransitionEnd = s),
      (t.event.special[c.TRANSITION_END] = {
        bindType: l,
        delegateType: l,
        handle: function (e) {
          if (t(e.target).is(this))
            return e.handleObj.handler.apply(this, arguments);
        },
      });
    var u = "alert",
      d = "bs.alert",
      p = "." + d,
      f = t.fn[u],
      h = {
        CLOSE: "close" + p,
        CLOSED: "closed" + p,
        CLICK_DATA_API: "click" + p + ".data-api",
      },
      g = (function () {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.close = function (e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
              this._triggerCloseEvent(t).isDefaultPrevented() ||
                this._removeElement(t);
          }),
          (n.dispose = function () {
            t.removeData(this._element, d), (this._element = null);
          }),
          (n._getRootElement = function (e) {
            var n = c.getSelectorFromElement(e),
              i = !1;
            return (
              n && (i = document.querySelector(n)),
              i || (i = t(e).closest(".alert")[0]),
              i
            );
          }),
          (n._triggerCloseEvent = function (e) {
            var n = t.Event(h.CLOSE);
            return t(e).trigger(n), n;
          }),
          (n._removeElement = function (e) {
            var n = this;
            if ((t(e).removeClass("show"), t(e).hasClass("fade"))) {
              var i = c.getTransitionDurationFromElement(e);
              t(e)
                .one(c.TRANSITION_END, function (t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(i);
            } else this._destroyElement(e);
          }),
          (n._destroyElement = function (e) {
            t(e).detach().trigger(h.CLOSED).remove();
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                o = i.data(d);
              o || ((o = new e(this)), i.data(d, o)),
                "close" === n && o[n](this);
            });
          }),
          (e._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          o(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.3.1";
              },
            },
          ]),
          e
        );
      })();
    t(document).on(
      h.CLICK_DATA_API,
      '[data-dismiss="alert"]',
      g._handleDismiss(new g())
    ),
      (t.fn[u] = g._jQueryInterface),
      (t.fn[u].Constructor = g),
      (t.fn[u].noConflict = function () {
        return (t.fn[u] = f), g._jQueryInterface;
      });
    var m = "button",
      v = "bs.button",
      y = "." + v,
      b = ".data-api",
      w = t.fn[m],
      T = "active",
      _ = '[data-toggle^="button"]',
      S = ".btn",
      C = {
        CLICK_DATA_API: "click" + y + b,
        FOCUS_BLUR_DATA_API: "focus" + y + b + " blur" + y + b,
      },
      x = (function () {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.toggle = function () {
            var e = !0,
              n = !0,
              i = t(this._element).closest('[data-toggle="buttons"]')[0];
            if (i) {
              var o = this._element.querySelector('input:not([type="hidden"])');
              if (o) {
                if ("radio" === o.type)
                  if (o.checked && this._element.classList.contains(T)) e = !1;
                  else {
                    var r = i.querySelector(".active");
                    r && t(r).removeClass(T);
                  }
                if (e) {
                  if (
                    o.hasAttribute("disabled") ||
                    i.hasAttribute("disabled") ||
                    o.classList.contains("disabled") ||
                    i.classList.contains("disabled")
                  )
                    return;
                  (o.checked = !this._element.classList.contains(T)),
                    t(o).trigger("change");
                }
                o.focus(), (n = !1);
              }
            }
            n &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains(T)
              ),
              e && t(this._element).toggleClass(T);
          }),
          (n.dispose = function () {
            t.removeData(this._element, v), (this._element = null);
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data(v);
              i || ((i = new e(this)), t(this).data(v, i)),
                "toggle" === n && i[n]();
            });
          }),
          o(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.3.1";
              },
            },
          ]),
          e
        );
      })();
    t(document)
      .on(C.CLICK_DATA_API, _, function (e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass("btn") || (n = t(n).closest(S)),
          x._jQueryInterface.call(t(n), "toggle");
      })
      .on(C.FOCUS_BLUR_DATA_API, _, function (e) {
        var n = t(e.target).closest(S)[0];
        t(n).toggleClass("focus", /^focus(in)?$/.test(e.type));
      }),
      (t.fn[m] = x._jQueryInterface),
      (t.fn[m].Constructor = x),
      (t.fn[m].noConflict = function () {
        return (t.fn[m] = w), x._jQueryInterface;
      });
    var E = "carousel",
      k = "bs.carousel",
      A = "." + k,
      D = ".data-api",
      O = t.fn[E],
      N = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      I = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      L = "next",
      $ = "prev",
      j = {
        SLIDE: "slide" + A,
        SLID: "slid" + A,
        KEYDOWN: "keydown" + A,
        MOUSEENTER: "mouseenter" + A,
        MOUSELEAVE: "mouseleave" + A,
        TOUCHSTART: "touchstart" + A,
        TOUCHMOVE: "touchmove" + A,
        TOUCHEND: "touchend" + A,
        POINTERDOWN: "pointerdown" + A,
        POINTERUP: "pointerup" + A,
        DRAG_START: "dragstart" + A,
        LOAD_DATA_API: "load" + A + D,
        CLICK_DATA_API: "click" + A + D,
      },
      P = "active",
      H = ".active.carousel-item",
      M = ".carousel-indicators",
      q = { TOUCH: "touch", PEN: "pen" },
      W = (function () {
        function e(e, t) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(t)),
            (this._element = e),
            (this._indicatorsElement = this._element.querySelector(M)),
            (this._touchSupported =
              "ontouchstart" in document.documentElement ||
              0 < navigator.maxTouchPoints),
            (this._pointerEvent = Boolean(
              window.PointerEvent || window.MSPointerEvent
            )),
            this._addEventListeners();
        }
        var n = e.prototype;
        return (
          (n.next = function () {
            this._isSliding || this._slide(L);
          }),
          (n.nextWhenVisible = function () {
            !document.hidden &&
              t(this._element).is(":visible") &&
              "hidden" !== t(this._element).css("visibility") &&
              this.next();
          }),
          (n.prev = function () {
            this._isSliding || this._slide($);
          }),
          (n.pause = function (e) {
            e || (this._isPaused = !0),
              this._element.querySelector(
                ".carousel-item-next, .carousel-item-prev"
              ) && (c.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (n.cycle = function (e) {
            e || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (n.to = function (e) {
            var n = this;
            this._activeElement = this._element.querySelector(H);
            var i = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
              if (this._isSliding)
                t(this._element).one(j.SLID, function () {
                  return n.to(e);
                });
              else {
                if (i === e) return this.pause(), void this.cycle();
                var o = i < e ? L : $;
                this._slide(o, this._items[e]);
              }
          }),
          (n.dispose = function () {
            t(this._element).off(A),
              t.removeData(this._element, k),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (n._getConfig = function (e) {
            return (e = r({}, N, e)), c.typeCheckConfig(E, e, I), e;
          }),
          (n._handleSwipe = function () {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
              var t = e / this.touchDeltaX;
              0 < t && this.prev(), t < 0 && this.next();
            }
          }),
          (n._addEventListeners = function () {
            var e = this;
            this._config.keyboard &&
              t(this._element).on(j.KEYDOWN, function (t) {
                return e._keydown(t);
              }),
              "hover" === this._config.pause &&
                t(this._element)
                  .on(j.MOUSEENTER, function (t) {
                    return e.pause(t);
                  })
                  .on(j.MOUSELEAVE, function (t) {
                    return e.cycle(t);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (n._addTouchEventListeners = function () {
            var e = this;
            if (this._touchSupported) {
              var n = function (t) {
                  e._pointerEvent &&
                  q[t.originalEvent.pointerType.toUpperCase()]
                    ? (e.touchStartX = t.originalEvent.clientX)
                    : e._pointerEvent ||
                      (e.touchStartX = t.originalEvent.touches[0].clientX);
                },
                i = function (t) {
                  e._pointerEvent &&
                    q[t.originalEvent.pointerType.toUpperCase()] &&
                    (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    "hover" === e._config.pause &&
                      (e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval)));
                };
              t(this._element.querySelectorAll(".carousel-item img")).on(
                j.DRAG_START,
                function (e) {
                  return e.preventDefault();
                }
              ),
                this._pointerEvent
                  ? (t(this._element).on(j.POINTERDOWN, function (e) {
                      return n(e);
                    }),
                    t(this._element).on(j.POINTERUP, function (e) {
                      return i(e);
                    }),
                    this._element.classList.add("pointer-event"))
                  : (t(this._element).on(j.TOUCHSTART, function (e) {
                      return n(e);
                    }),
                    t(this._element).on(j.TOUCHMOVE, function (t) {
                      var n;
                      (n = t).originalEvent.touches &&
                      1 < n.originalEvent.touches.length
                        ? (e.touchDeltaX = 0)
                        : (e.touchDeltaX =
                            n.originalEvent.touches[0].clientX - e.touchStartX);
                    }),
                    t(this._element).on(j.TOUCHEND, function (e) {
                      return i(e);
                    }));
            }
          }),
          (n._keydown = function (e) {
            if (!/input|textarea/i.test(e.target.tagName))
              switch (e.which) {
                case 37:
                  e.preventDefault(), this.prev();
                  break;
                case 39:
                  e.preventDefault(), this.next();
              }
          }),
          (n._getItemIndex = function (e) {
            return (
              (this._items =
                e && e.parentNode
                  ? [].slice.call(
                      e.parentNode.querySelectorAll(".carousel-item")
                    )
                  : []),
              this._items.indexOf(e)
            );
          }),
          (n._getItemByDirection = function (e, t) {
            var n = e === L,
              i = e === $,
              o = this._getItemIndex(t),
              r = this._items.length - 1;
            if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
              return t;
            var s = (o + (e === $ ? -1 : 1)) % this._items.length;
            return -1 === s
              ? this._items[this._items.length - 1]
              : this._items[s];
          }),
          (n._triggerSlideEvent = function (e, n) {
            var i = this._getItemIndex(e),
              o = this._getItemIndex(this._element.querySelector(H)),
              r = t.Event(j.SLIDE, {
                relatedTarget: e,
                direction: n,
                from: o,
                to: i,
              });
            return t(this._element).trigger(r), r;
          }),
          (n._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
              var n = [].slice.call(
                this._indicatorsElement.querySelectorAll(".active")
              );
              t(n).removeClass(P);
              var i = this._indicatorsElement.children[this._getItemIndex(e)];
              i && t(i).addClass(P);
            }
          }),
          (n._slide = function (e, n) {
            var i,
              o,
              r,
              s = this,
              a = this._element.querySelector(H),
              l = this._getItemIndex(a),
              u = n || (a && this._getItemByDirection(e, a)),
              d = this._getItemIndex(u),
              p = Boolean(this._interval);
            if (
              ((r =
                e === L
                  ? ((i = "carousel-item-left"),
                    (o = "carousel-item-next"),
                    "left")
                  : ((i = "carousel-item-right"),
                    (o = "carousel-item-prev"),
                    "right")),
              u && t(u).hasClass(P))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(u, r).isDefaultPrevented() &&
              a &&
              u
            ) {
              (this._isSliding = !0),
                p && this.pause(),
                this._setActiveIndicatorElement(u);
              var f = t.Event(j.SLID, {
                relatedTarget: u,
                direction: r,
                from: l,
                to: d,
              });
              if (t(this._element).hasClass("slide")) {
                t(u).addClass(o),
                  c.reflow(u),
                  t(a).addClass(i),
                  t(u).addClass(i);
                var h = parseInt(u.getAttribute("data-interval"), 10);
                this._config.interval = h
                  ? ((this._config.defaultInterval =
                      this._config.defaultInterval || this._config.interval),
                    h)
                  : this._config.defaultInterval || this._config.interval;
                var g = c.getTransitionDurationFromElement(a);
                t(a)
                  .one(c.TRANSITION_END, function () {
                    t(u)
                      .removeClass(i + " " + o)
                      .addClass(P),
                      t(a).removeClass(P + " " + o + " " + i),
                      (s._isSliding = !1),
                      setTimeout(function () {
                        return t(s._element).trigger(f);
                      }, 0);
                  })
                  .emulateTransitionEnd(g);
              } else
                t(a).removeClass(P),
                  t(u).addClass(P),
                  (this._isSliding = !1),
                  t(this._element).trigger(f);
              p && this.cycle();
            }
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data(k),
                o = r({}, N, t(this).data());
              "object" == typeof n && (o = r({}, o, n));
              var s = "string" == typeof n ? n : o.slide;
              if (
                (i || ((i = new e(this, o)), t(this).data(k, i)),
                "number" == typeof n)
              )
                i.to(n);
              else if ("string" == typeof s) {
                if (void 0 === i[s])
                  throw new TypeError('No method named "' + s + '"');
                i[s]();
              } else o.interval && o.ride && (i.pause(), i.cycle());
            });
          }),
          (e._dataApiClickHandler = function (n) {
            var i = c.getSelectorFromElement(this);
            if (i) {
              var o = t(i)[0];
              if (o && t(o).hasClass("carousel")) {
                var s = r({}, t(o).data(), t(this).data()),
                  a = this.getAttribute("data-slide-to");
                a && (s.interval = !1),
                  e._jQueryInterface.call(t(o), s),
                  a && t(o).data(k).to(a),
                  n.preventDefault();
              }
            }
          }),
          o(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.3.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return N;
              },
            },
          ]),
          e
        );
      })();
    t(document).on(
      j.CLICK_DATA_API,
      "[data-slide], [data-slide-to]",
      W._dataApiClickHandler
    ),
      t(window).on(j.LOAD_DATA_API, function () {
        for (
          var e = [].slice.call(
              document.querySelectorAll('[data-ride="carousel"]')
            ),
            n = 0,
            i = e.length;
          n < i;
          n++
        ) {
          var o = t(e[n]);
          W._jQueryInterface.call(o, o.data());
        }
      }),
      (t.fn[E] = W._jQueryInterface),
      (t.fn[E].Constructor = W),
      (t.fn[E].noConflict = function () {
        return (t.fn[E] = O), W._jQueryInterface;
      });
    var R = "collapse",
      z = "bs.collapse",
      F = "." + z,
      B = t.fn[R],
      U = { toggle: !0, parent: "" },
      X = { toggle: "boolean", parent: "(string|element)" },
      Y = {
        SHOW: "show" + F,
        SHOWN: "shown" + F,
        HIDE: "hide" + F,
        HIDDEN: "hidden" + F,
        CLICK_DATA_API: "click" + F + ".data-api",
      },
      K = "show",
      Q = "collapse",
      V = "collapsing",
      G = "collapsed",
      J = '[data-toggle="collapse"]',
      Z = (function () {
        function e(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  e.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  e.id +
                  '"]'
              )
            ));
          for (
            var n = [].slice.call(document.querySelectorAll(J)),
              i = 0,
              o = n.length;
            i < o;
            i++
          ) {
            var r = n[i],
              s = c.getSelectorFromElement(r),
              a = [].slice
                .call(document.querySelectorAll(s))
                .filter(function (t) {
                  return t === e;
                });
            null !== s &&
              0 < a.length &&
              ((this._selector = s), this._triggerArray.push(r));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var n = e.prototype;
        return (
          (n.toggle = function () {
            t(this._element).hasClass(K) ? this.hide() : this.show();
          }),
          (n.show = function () {
            var n,
              i,
              o = this;
            if (
              !(
                this._isTransitioning ||
                t(this._element).hasClass(K) ||
                (this._parent &&
                  0 ===
                    (n = [].slice
                      .call(this._parent.querySelectorAll(".show, .collapsing"))
                      .filter(function (e) {
                        return "string" == typeof o._config.parent
                          ? e.getAttribute("data-parent") === o._config.parent
                          : e.classList.contains(Q);
                      })).length &&
                  (n = null),
                n &&
                  (i = t(n).not(this._selector).data(z)) &&
                  i._isTransitioning)
              )
            ) {
              var r = t.Event(Y.SHOW);
              if ((t(this._element).trigger(r), !r.isDefaultPrevented())) {
                n &&
                  (e._jQueryInterface.call(t(n).not(this._selector), "hide"),
                  i || t(n).data(z, null));
                var s = this._getDimension();
                t(this._element).removeClass(Q).addClass(V),
                  (this._element.style[s] = 0),
                  this._triggerArray.length &&
                    t(this._triggerArray)
                      .removeClass(G)
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                  l = c.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(c.TRANSITION_END, function () {
                    t(o._element).removeClass(V).addClass(Q).addClass(K),
                      (o._element.style[s] = ""),
                      o.setTransitioning(!1),
                      t(o._element).trigger(Y.SHOWN);
                  })
                  .emulateTransitionEnd(l),
                  (this._element.style[s] = this._element[a] + "px");
              }
            }
          }),
          (n.hide = function () {
            var e = this;
            if (!this._isTransitioning && t(this._element).hasClass(K)) {
              var n = t.Event(Y.HIDE);
              if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                var i = this._getDimension();
                (this._element.style[i] =
                  this._element.getBoundingClientRect()[i] + "px"),
                  c.reflow(this._element),
                  t(this._element).addClass(V).removeClass(Q).removeClass(K);
                var o = this._triggerArray.length;
                if (0 < o)
                  for (var r = 0; r < o; r++) {
                    var s = this._triggerArray[r],
                      a = c.getSelectorFromElement(s);
                    null !== a &&
                      (t([].slice.call(document.querySelectorAll(a))).hasClass(
                        K
                      ) ||
                        t(s).addClass(G).attr("aria-expanded", !1));
                  }
                this.setTransitioning(!0), (this._element.style[i] = "");
                var l = c.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(c.TRANSITION_END, function () {
                    e.setTransitioning(!1),
                      t(e._element)
                        .removeClass(V)
                        .addClass(Q)
                        .trigger(Y.HIDDEN);
                  })
                  .emulateTransitionEnd(l);
              }
            }
          }),
          (n.setTransitioning = function (e) {
            this._isTransitioning = e;
          }),
          (n.dispose = function () {
            t.removeData(this._element, z),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (n._getConfig = function (e) {
            return (
              ((e = r({}, U, e)).toggle = Boolean(e.toggle)),
              c.typeCheckConfig(R, e, X),
              e
            );
          }),
          (n._getDimension = function () {
            return t(this._element).hasClass("width") ? "width" : "height";
          }),
          (n._getParent = function () {
            var n,
              i = this;
            c.isElement(this._config.parent)
              ? ((n = this._config.parent),
                void 0 !== this._config.parent.jquery &&
                  (n = this._config.parent[0]))
              : (n = document.querySelector(this._config.parent));
            var o =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]',
              r = [].slice.call(n.querySelectorAll(o));
            return (
              t(r).each(function (t, n) {
                i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]);
              }),
              n
            );
          }),
          (n._addAriaAndCollapsedClass = function (e, n) {
            var i = t(e).hasClass(K);
            n.length && t(n).toggleClass(G, !i).attr("aria-expanded", i);
          }),
          (e._getTargetFromElement = function (e) {
            var t = c.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null;
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                o = i.data(z),
                s = r({}, U, i.data(), "object" == typeof n && n ? n : {});
              if (
                (!o && s.toggle && /show|hide/.test(n) && (s.toggle = !1),
                o || ((o = new e(this, s)), i.data(z, o)),
                "string" == typeof n)
              ) {
                if (void 0 === o[n])
                  throw new TypeError('No method named "' + n + '"');
                o[n]();
              }
            });
          }),
          o(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.3.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return U;
              },
            },
          ]),
          e
        );
      })();
    t(document).on(Y.CLICK_DATA_API, J, function (e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var n = t(this),
        i = c.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(i));
      t(o).each(function () {
        var e = t(this),
          i = e.data(z) ? "toggle" : n.data();
        Z._jQueryInterface.call(e, i);
      });
    }),
      (t.fn[R] = Z._jQueryInterface),
      (t.fn[R].Constructor = Z),
      (t.fn[R].noConflict = function () {
        return (t.fn[R] = B), Z._jQueryInterface;
      });
    var ee = "dropdown",
      te = "bs.dropdown",
      ne = "." + te,
      ie = ".data-api",
      oe = t.fn[ee],
      re = new RegExp("38|40|27"),
      se = {
        HIDE: "hide" + ne,
        HIDDEN: "hidden" + ne,
        SHOW: "show" + ne,
        SHOWN: "shown" + ne,
        CLICK: "click" + ne,
        CLICK_DATA_API: "click" + ne + ie,
        KEYDOWN_DATA_API: "keydown" + ne + ie,
        KEYUP_DATA_API: "keyup" + ne + ie,
      },
      ae = "disabled",
      le = "show",
      ce = "dropdown-menu-right",
      ue = '[data-toggle="dropdown"]',
      de = ".dropdown-menu",
      pe = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
      },
      fe = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
      },
      he = (function () {
        function e(e, t) {
          (this._element = e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var i = e.prototype;
        return (
          (i.toggle = function () {
            if (!this._element.disabled && !t(this._element).hasClass(ae)) {
              var i = e._getParentFromElement(this._element),
                o = t(this._menu).hasClass(le);
              if ((e._clearMenus(), !o)) {
                var r = { relatedTarget: this._element },
                  s = t.Event(se.SHOW, r);
                if ((t(i).trigger(s), !s.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if (void 0 === n)
                      throw new TypeError(
                        "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                      );
                    var a = this._element;
                    "parent" === this._config.reference
                      ? (a = i)
                      : c.isElement(this._config.reference) &&
                        ((a = this._config.reference),
                        void 0 !== this._config.reference.jquery &&
                          (a = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary &&
                        t(i).addClass("position-static"),
                      (this._popper = new n(
                        a,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === t(i).closest(".navbar-nav").length &&
                    t(document.body).children().on("mouseover", null, t.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    t(this._menu).toggleClass(le),
                    t(i).toggleClass(le).trigger(t.Event(se.SHOWN, r));
                }
              }
            }
          }),
          (i.show = function () {
            if (
              !(
                this._element.disabled ||
                t(this._element).hasClass(ae) ||
                t(this._menu).hasClass(le)
              )
            ) {
              var n = { relatedTarget: this._element },
                i = t.Event(se.SHOW, n),
                o = e._getParentFromElement(this._element);
              t(o).trigger(i),
                i.isDefaultPrevented() ||
                  (t(this._menu).toggleClass(le),
                  t(o).toggleClass(le).trigger(t.Event(se.SHOWN, n)));
            }
          }),
          (i.hide = function () {
            if (
              !this._element.disabled &&
              !t(this._element).hasClass(ae) &&
              t(this._menu).hasClass(le)
            ) {
              var n = { relatedTarget: this._element },
                i = t.Event(se.HIDE, n),
                o = e._getParentFromElement(this._element);
              t(o).trigger(i),
                i.isDefaultPrevented() ||
                  (t(this._menu).toggleClass(le),
                  t(o).toggleClass(le).trigger(t.Event(se.HIDDEN, n)));
            }
          }),
          (i.dispose = function () {
            t.removeData(this._element, te),
              t(this._element).off(ne),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (i.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (i._addEventListeners = function () {
            var e = this;
            t(this._element).on(se.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (i._getConfig = function (e) {
            return (
              (e = r({}, this.constructor.Default, t(this._element).data(), e)),
              c.typeCheckConfig(ee, e, this.constructor.DefaultType),
              e
            );
          }),
          (i._getMenuElement = function () {
            if (!this._menu) {
              var t = e._getParentFromElement(this._element);
              t && (this._menu = t.querySelector(de));
            }
            return this._menu;
          }),
          (i._getPlacement = function () {
            var e = t(this._element.parentNode),
              n = "bottom-start";
            return (
              e.hasClass("dropup")
                ? ((n = "top-start"),
                  t(this._menu).hasClass(ce) && (n = "top-end"))
                : e.hasClass("dropright")
                ? (n = "right-start")
                : e.hasClass("dropleft")
                ? (n = "left-start")
                : t(this._menu).hasClass(ce) && (n = "bottom-end"),
              n
            );
          }),
          (i._detectNavbar = function () {
            return 0 < t(this._element).closest(".navbar").length;
          }),
          (i._getOffset = function () {
            var e = this,
              t = {};
            return (
              "function" == typeof this._config.offset
                ? (t.fn = function (t) {
                    return (
                      (t.offsets = r(
                        {},
                        t.offsets,
                        e._config.offset(t.offsets, e._element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this._config.offset),
              t
            );
          }),
          (i._getPopperConfig = function () {
            var e = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (e.modifiers.applyStyle = { enabled: !1 }),
              e
            );
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data(te);
              if (
                (i ||
                  ((i = new e(this, "object" == typeof n ? n : null)),
                  t(this).data(te, i)),
                "string" == typeof n)
              ) {
                if (void 0 === i[n])
                  throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          (e._clearMenus = function (n) {
            if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
              for (
                var i = [].slice.call(document.querySelectorAll(ue)),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              ) {
                var s = e._getParentFromElement(i[o]),
                  a = t(i[o]).data(te),
                  l = { relatedTarget: i[o] };
                if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                  var c = a._menu;
                  if (
                    t(s).hasClass(le) &&
                    !(
                      n &&
                      (("click" === n.type &&
                        /input|textarea/i.test(n.target.tagName)) ||
                        ("keyup" === n.type && 9 === n.which)) &&
                      t.contains(s, n.target)
                    )
                  ) {
                    var u = t.Event(se.HIDE, l);
                    t(s).trigger(u),
                      u.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          t(document.body)
                            .children()
                            .off("mouseover", null, t.noop),
                        i[o].setAttribute("aria-expanded", "false"),
                        t(c).removeClass(le),
                        t(s).removeClass(le).trigger(t.Event(se.HIDDEN, l)));
                  }
                }
              }
          }),
          (e._getParentFromElement = function (e) {
            var t,
              n = c.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode;
          }),
          (e._dataApiKeydownHandler = function (n) {
            if (
              (/input|textarea/i.test(n.target.tagName)
                ? !(
                    32 === n.which ||
                    (27 !== n.which &&
                      ((40 !== n.which && 38 !== n.which) ||
                        t(n.target).closest(de).length))
                  )
                : re.test(n.which)) &&
              (n.preventDefault(),
              n.stopPropagation(),
              !this.disabled && !t(this).hasClass(ae))
            ) {
              var i = e._getParentFromElement(this),
                o = t(i).hasClass(le);
              if (o && (!o || (27 !== n.which && 32 !== n.which))) {
                var r = [].slice.call(
                  i.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                );
                if (0 !== r.length) {
                  var s = r.indexOf(n.target);
                  38 === n.which && 0 < s && s--,
                    40 === n.which && s < r.length - 1 && s++,
                    s < 0 && (s = 0),
                    r[s].focus();
                }
              } else {
                if (27 === n.which) {
                  var a = i.querySelector(ue);
                  t(a).trigger("focus");
                }
                t(this).trigger("click");
              }
            }
          }),
          o(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.3.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return pe;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return fe;
              },
            },
          ]),
          e
        );
      })();
    t(document)
      .on(se.KEYDOWN_DATA_API, ue, he._dataApiKeydownHandler)
      .on(se.KEYDOWN_DATA_API, de, he._dataApiKeydownHandler)
      .on(se.CLICK_DATA_API + " " + se.KEYUP_DATA_API, he._clearMenus)
      .on(se.CLICK_DATA_API, ue, function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          he._jQueryInterface.call(t(this), "toggle");
      })
      .on(se.CLICK_DATA_API, ".dropdown form", function (e) {
        e.stopPropagation();
      }),
      (t.fn[ee] = he._jQueryInterface),
      (t.fn[ee].Constructor = he),
      (t.fn[ee].noConflict = function () {
        return (t.fn[ee] = oe), he._jQueryInterface;
      });
    var ge = "modal",
      me = "bs.modal",
      ve = "." + me,
      ye = t.fn[ge],
      be = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      we = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      },
      Te = {
        HIDE: "hide" + ve,
        HIDDEN: "hidden" + ve,
        SHOW: "show" + ve,
        SHOWN: "shown" + ve,
        FOCUSIN: "focusin" + ve,
        RESIZE: "resize" + ve,
        CLICK_DISMISS: "click.dismiss" + ve,
        KEYDOWN_DISMISS: "keydown.dismiss" + ve,
        MOUSEUP_DISMISS: "mouseup.dismiss" + ve,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + ve,
        CLICK_DATA_API: "click" + ve + ".data-api",
      },
      _e = "modal-open",
      Se = "fade",
      Ce = "show",
      xe = ".modal-dialog",
      Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      ke = ".sticky-top",
      Ae = (function () {
        function e(e, t) {
          (this._config = this._getConfig(t)),
            (this._element = e),
            (this._dialog = e.querySelector(xe)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var n = e.prototype;
        return (
          (n.toggle = function (e) {
            return this._isShown ? this.hide() : this.show(e);
          }),
          (n.show = function (e) {
            var n = this;
            if (!this._isShown && !this._isTransitioning) {
              t(this._element).hasClass(Se) && (this._isTransitioning = !0);
              var i = t.Event(Te.SHOW, { relatedTarget: e });
              t(this._element).trigger(i),
                this._isShown ||
                  i.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  t(this._element).on(
                    Te.CLICK_DISMISS,
                    '[data-dismiss="modal"]',
                    function (e) {
                      return n.hide(e);
                    }
                  ),
                  t(this._dialog).on(Te.MOUSEDOWN_DISMISS, function () {
                    t(n._element).one(Te.MOUSEUP_DISMISS, function (e) {
                      t(e.target).is(n._element) &&
                        (n._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return n._showElement(e);
                  }));
            }
          }),
          (n.hide = function (e) {
            var n = this;
            if (
              (e && e.preventDefault(), this._isShown && !this._isTransitioning)
            ) {
              var i = t.Event(Te.HIDE);
              if (
                (t(this._element).trigger(i),
                this._isShown && !i.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var o = t(this._element).hasClass(Se);
                if (
                  (o && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  t(document).off(Te.FOCUSIN),
                  t(this._element).removeClass(Ce),
                  t(this._element).off(Te.CLICK_DISMISS),
                  t(this._dialog).off(Te.MOUSEDOWN_DISMISS),
                  o)
                ) {
                  var r = c.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(c.TRANSITION_END, function (e) {
                      return n._hideModal(e);
                    })
                    .emulateTransitionEnd(r);
                } else this._hideModal();
              }
            }
          }),
          (n.dispose = function () {
            [window, this._element, this._dialog].forEach(function (e) {
              return t(e).off(ve);
            }),
              t(document).off(Te.FOCUSIN),
              t.removeData(this._element, me),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (n.handleUpdate = function () {
            this._adjustDialog();
          }),
          (n._getConfig = function (e) {
            return (e = r({}, be, e)), c.typeCheckConfig(ge, e, we), e;
          }),
          (n._showElement = function (e) {
            var n = this,
              i = t(this._element).hasClass(Se);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              t(this._dialog).hasClass("modal-dialog-scrollable")
                ? (this._dialog.querySelector(".modal-body").scrollTop = 0)
                : (this._element.scrollTop = 0),
              i && c.reflow(this._element),
              t(this._element).addClass(Ce),
              this._config.focus && this._enforceFocus();
            var o = t.Event(Te.SHOWN, { relatedTarget: e }),
              r = function () {
                n._config.focus && n._element.focus(),
                  (n._isTransitioning = !1),
                  t(n._element).trigger(o);
              };
            if (i) {
              var s = c.getTransitionDurationFromElement(this._dialog);
              t(this._dialog).one(c.TRANSITION_END, r).emulateTransitionEnd(s);
            } else r();
          }),
          (n._enforceFocus = function () {
            var e = this;
            t(document)
              .off(Te.FOCUSIN)
              .on(Te.FOCUSIN, function (n) {
                document !== n.target &&
                  e._element !== n.target &&
                  0 === t(e._element).has(n.target).length &&
                  e._element.focus();
              });
          }),
          (n._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard
              ? t(this._element).on(Te.KEYDOWN_DISMISS, function (t) {
                  27 === t.which && (t.preventDefault(), e.hide());
                })
              : this._isShown || t(this._element).off(Te.KEYDOWN_DISMISS);
          }),
          (n._setResizeEvent = function () {
            var e = this;
            this._isShown
              ? t(window).on(Te.RESIZE, function (t) {
                  return e.handleUpdate(t);
                })
              : t(window).off(Te.RESIZE);
          }),
          (n._hideModal = function () {
            var e = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                t(document.body).removeClass(_e),
                  e._resetAdjustments(),
                  e._resetScrollbar(),
                  t(e._element).trigger(Te.HIDDEN);
              });
          }),
          (n._removeBackdrop = function () {
            this._backdrop &&
              (t(this._backdrop).remove(), (this._backdrop = null));
          }),
          (n._showBackdrop = function (e) {
            var n = this,
              i = t(this._element).hasClass(Se) ? Se : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "modal-backdrop"),
                i && this._backdrop.classList.add(i),
                t(this._backdrop).appendTo(document.body),
                t(this._element).on(Te.CLICK_DISMISS, function (e) {
                  n._ignoreBackdropClick
                    ? (n._ignoreBackdropClick = !1)
                    : e.target === e.currentTarget &&
                      ("static" === n._config.backdrop
                        ? n._element.focus()
                        : n.hide());
                }),
                i && c.reflow(this._backdrop),
                t(this._backdrop).addClass(Ce),
                !e)
              )
                return;
              if (!i) return void e();
              var o = c.getTransitionDurationFromElement(this._backdrop);
              t(this._backdrop)
                .one(c.TRANSITION_END, e)
                .emulateTransitionEnd(o);
            } else if (!this._isShown && this._backdrop) {
              t(this._backdrop).removeClass(Ce);
              var r = function () {
                n._removeBackdrop(), e && e();
              };
              if (t(this._element).hasClass(Se)) {
                var s = c.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop)
                  .one(c.TRANSITION_END, r)
                  .emulateTransitionEnd(s);
              } else r();
            } else e && e();
          }),
          (n._adjustDialog = function () {
            var e =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              e &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !e &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (n._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (n._checkScrollbar = function () {
            var e = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (n._setScrollbar = function () {
            var e = this;
            if (this._isBodyOverflowing) {
              var n = [].slice.call(document.querySelectorAll(Ee)),
                i = [].slice.call(document.querySelectorAll(ke));
              t(n).each(function (n, i) {
                var o = i.style.paddingRight,
                  r = t(i).css("padding-right");
                t(i)
                  .data("padding-right", o)
                  .css(
                    "padding-right",
                    parseFloat(r) + e._scrollbarWidth + "px"
                  );
              }),
                t(i).each(function (n, i) {
                  var o = i.style.marginRight,
                    r = t(i).css("margin-right");
                  t(i)
                    .data("margin-right", o)
                    .css(
                      "margin-right",
                      parseFloat(r) - e._scrollbarWidth + "px"
                    );
                });
              var o = document.body.style.paddingRight,
                r = t(document.body).css("padding-right");
              t(document.body)
                .data("padding-right", o)
                .css(
                  "padding-right",
                  parseFloat(r) + this._scrollbarWidth + "px"
                );
            }
            t(document.body).addClass(_e);
          }),
          (n._resetScrollbar = function () {
            var e = [].slice.call(document.querySelectorAll(Ee));
            t(e).each(function (e, n) {
              var i = t(n).data("padding-right");
              t(n).removeData("padding-right"),
                (n.style.paddingRight = i || "");
            });
            var n = [].slice.call(document.querySelectorAll("" + ke));
            t(n).each(function (e, n) {
              var i = t(n).data("margin-right");
              void 0 !== i &&
                t(n).css("margin-right", i).removeData("margin-right");
            });
            var i = t(document.body).data("padding-right");
            t(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = i || "");
          }),
          (n._getScrollbarWidth = function () {
            var e = document.createElement("div");
            (e.className = "modal-scrollbar-measure"),
              document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t;
          }),
          (e._jQueryInterface = function (n, i) {
            return this.each(function () {
              var o = t(this).data(me),
                s = r(
                  {},
                  be,
                  t(this).data(),
                  "object" == typeof n && n ? n : {}
                );
              if (
                (o || ((o = new e(this, s)), t(this).data(me, o)),
                "string" == typeof n)
              ) {
                if (void 0 === o[n])
                  throw new TypeError('No method named "' + n + '"');
                o[n](i);
              } else s.show && o.show(i);
            });
          }),
          o(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.3.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return be;
              },
            },
          ]),
          e
        );
      })();
    t(document).on(Te.CLICK_DATA_API, '[data-toggle="modal"]', function (e) {
      var n,
        i = this,
        o = c.getSelectorFromElement(this);
      o && (n = document.querySelector(o));
      var s = t(n).data(me) ? "toggle" : r({}, t(n).data(), t(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
      var a = t(n).one(Te.SHOW, function (e) {
        e.isDefaultPrevented() ||
          a.one(Te.HIDDEN, function () {
            t(i).is(":visible") && i.focus();
          });
      });
      Ae._jQueryInterface.call(t(n), s, this);
    }),
      (t.fn[ge] = Ae._jQueryInterface),
      (t.fn[ge].Constructor = Ae),
      (t.fn[ge].noConflict = function () {
        return (t.fn[ge] = ye), Ae._jQueryInterface;
      });
    var De = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      Oe = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      Ne = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Ie =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
      Le = "tooltip",
      $e = "bs.tooltip",
      je = "." + $e,
      Pe = t.fn[Le],
      He = "bs-tooltip",
      Me = new RegExp("(^|\\s)" + He + "\\S+", "g"),
      qe = ["sanitize", "whiteList", "sanitizeFn"],
      We = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
      },
      Re = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left",
      },
      ze = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: Oe,
      },
      Fe = "show",
      Be = {
        HIDE: "hide" + je,
        HIDDEN: "hidden" + je,
        SHOW: "show" + je,
        SHOWN: "shown" + je,
        INSERTED: "inserted" + je,
        CLICK: "click" + je,
        FOCUSIN: "focusin" + je,
        FOCUSOUT: "focusout" + je,
        MOUSEENTER: "mouseenter" + je,
        MOUSELEAVE: "mouseleave" + je,
      },
      Ue = "fade",
      Xe = "show",
      Ye = "hover",
      Ke = "focus",
      Qe = (function () {
        function e(e, t) {
          if (void 0 === n)
            throw new TypeError(
              "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = e),
            (this.config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        var i = e.prototype;
        return (
          (i.enable = function () {
            this._isEnabled = !0;
          }),
          (i.disable = function () {
            this._isEnabled = !1;
          }),
          (i.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (i.toggle = function (e) {
            if (this._isEnabled)
              if (e) {
                var n = this.constructor.DATA_KEY,
                  i = t(e.currentTarget).data(n);
                i ||
                  ((i = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(n, i)),
                  (i._activeTrigger.click = !i._activeTrigger.click),
                  i._isWithActiveTrigger()
                    ? i._enter(null, i)
                    : i._leave(null, i);
              } else {
                if (t(this.getTipElement()).hasClass(Xe))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (i.dispose = function () {
            clearTimeout(this._timeout),
              t.removeData(this.element, this.constructor.DATA_KEY),
              t(this.element).off(this.constructor.EVENT_KEY),
              t(this.element).closest(".modal").off("hide.bs.modal"),
              this.tip && t(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper &&
                this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (i.show = function () {
            var e = this;
            if ("none" === t(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var i = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              t(this.element).trigger(i);
              var o = c.findShadowRoot(this.element),
                r = t.contains(
                  null !== o ? o : this.element.ownerDocument.documentElement,
                  this.element
                );
              if (i.isDefaultPrevented() || !r) return;
              var s = this.getTipElement(),
                a = c.getUID(this.constructor.NAME);
              s.setAttribute("id", a),
                this.element.setAttribute("aria-describedby", a),
                this.setContent(),
                this.config.animation && t(s).addClass(Ue);
              var l =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, s, this.element)
                    : this.config.placement,
                u = this._getAttachment(l);
              this.addAttachmentClass(u);
              var d = this._getContainer();
              t(s).data(this.constructor.DATA_KEY, this),
                t.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || t(s).appendTo(d),
                t(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new n(this.element, s, {
                  placement: u,
                  modifiers: {
                    offset: this._getOffset(),
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: ".arrow" },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate: function (t) {
                    t.originalPlacement !== t.placement &&
                      e._handlePopperPlacementChange(t);
                  },
                  onUpdate: function (t) {
                    return e._handlePopperPlacementChange(t);
                  },
                })),
                t(s).addClass(Xe),
                "ontouchstart" in document.documentElement &&
                  t(document.body).children().on("mouseover", null, t.noop);
              var p = function () {
                e.config.animation && e._fixTransition();
                var n = e._hoverState;
                (e._hoverState = null),
                  t(e.element).trigger(e.constructor.Event.SHOWN),
                  "out" === n && e._leave(null, e);
              };
              if (t(this.tip).hasClass(Ue)) {
                var f = c.getTransitionDurationFromElement(this.tip);
                t(this.tip).one(c.TRANSITION_END, p).emulateTransitionEnd(f);
              } else p();
            }
          }),
          (i.hide = function (e) {
            var n = this,
              i = this.getTipElement(),
              o = t.Event(this.constructor.Event.HIDE),
              r = function () {
                n._hoverState !== Fe &&
                  i.parentNode &&
                  i.parentNode.removeChild(i),
                  n._cleanTipClass(),
                  n.element.removeAttribute("aria-describedby"),
                  t(n.element).trigger(n.constructor.Event.HIDDEN),
                  null !== n._popper && n._popper.destroy(),
                  e && e();
              };
            if ((t(this.element).trigger(o), !o.isDefaultPrevented())) {
              if (
                (t(i).removeClass(Xe),
                "ontouchstart" in document.documentElement &&
                  t(document.body).children().off("mouseover", null, t.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger[Ke] = !1),
                (this._activeTrigger[Ye] = !1),
                t(this.tip).hasClass(Ue))
              ) {
                var s = c.getTransitionDurationFromElement(i);
                t(i).one(c.TRANSITION_END, r).emulateTransitionEnd(s);
              } else r();
              this._hoverState = "";
            }
          }),
          (i.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (i.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (i.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass(He + "-" + e);
          }),
          (i.getTipElement = function () {
            return (
              (this.tip = this.tip || t(this.config.template)[0]), this.tip
            );
          }),
          (i.setContent = function () {
            var e = this.getTipElement();
            this.setElementContent(
              t(e.querySelectorAll(".tooltip-inner")),
              this.getTitle()
            ),
              t(e).removeClass(Ue + " " + Xe);
          }),
          (i.setElementContent = function (e, n) {
            "object" != typeof n || (!n.nodeType && !n.jquery)
              ? this.config.html
                ? (this.config.sanitize &&
                    (n = a(n, this.config.whiteList, this.config.sanitizeFn)),
                  e.html(n))
                : e.text(n)
              : this.config.html
              ? t(n).parent().is(e) || e.empty().append(n)
              : e.text(t(n).text());
          }),
          (i.getTitle = function () {
            var e = this.element.getAttribute("data-original-title");
            return (
              e ||
                (e =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this.element)
                    : this.config.title),
              e
            );
          }),
          (i._getOffset = function () {
            var e = this,
              t = {};
            return (
              "function" == typeof this.config.offset
                ? (t.fn = function (t) {
                    return (
                      (t.offsets = r(
                        {},
                        t.offsets,
                        e.config.offset(t.offsets, e.element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this.config.offset),
              t
            );
          }),
          (i._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : c.isElement(this.config.container)
              ? t(this.config.container)
              : t(document).find(this.config.container);
          }),
          (i._getAttachment = function (e) {
            return Re[e.toUpperCase()];
          }),
          (i._setListeners = function () {
            var e = this;
            this.config.trigger.split(" ").forEach(function (n) {
              if ("click" === n)
                t(e.element).on(
                  e.constructor.Event.CLICK,
                  e.config.selector,
                  function (t) {
                    return e.toggle(t);
                  }
                );
              else if ("manual" !== n) {
                var i =
                    n === Ye
                      ? e.constructor.Event.MOUSEENTER
                      : e.constructor.Event.FOCUSIN,
                  o =
                    n === Ye
                      ? e.constructor.Event.MOUSELEAVE
                      : e.constructor.Event.FOCUSOUT;
                t(e.element)
                  .on(i, e.config.selector, function (t) {
                    return e._enter(t);
                  })
                  .on(o, e.config.selector, function (t) {
                    return e._leave(t);
                  });
              }
            }),
              t(this.element)
                .closest(".modal")
                .on("hide.bs.modal", function () {
                  e.element && e.hide();
                }),
              this.config.selector
                ? (this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (i._fixTitle = function () {
            var e = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== e) &&
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (i._enter = function (e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) ||
              ((n = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              t(e.currentTarget).data(i, n)),
              e && (n._activeTrigger["focusin" === e.type ? Ke : Ye] = !0),
              t(n.getTipElement()).hasClass(Xe) || n._hoverState === Fe
                ? (n._hoverState = Fe)
                : (clearTimeout(n._timeout),
                  (n._hoverState = Fe),
                  n.config.delay && n.config.delay.show
                    ? (n._timeout = setTimeout(function () {
                        n._hoverState === Fe && n.show();
                      }, n.config.delay.show))
                    : n.show());
          }),
          (i._leave = function (e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) ||
              ((n = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              t(e.currentTarget).data(i, n)),
              e && (n._activeTrigger["focusout" === e.type ? Ke : Ye] = !1),
              n._isWithActiveTrigger() ||
                (clearTimeout(n._timeout),
                (n._hoverState = "out"),
                n.config.delay && n.config.delay.hide
                  ? (n._timeout = setTimeout(function () {
                      "out" === n._hoverState && n.hide();
                    }, n.config.delay.hide))
                  : n.hide());
          }),
          (i._isWithActiveTrigger = function () {
            for (var e in this._activeTrigger)
              if (this._activeTrigger[e]) return !0;
            return !1;
          }),
          (i._getConfig = function (e) {
            var n = t(this.element).data();
            return (
              Object.keys(n).forEach(function (e) {
                -1 !== qe.indexOf(e) && delete n[e];
              }),
              "number" ==
                typeof (e = r(
                  {},
                  this.constructor.Default,
                  n,
                  "object" == typeof e && e ? e : {}
                )).delay && (e.delay = { show: e.delay, hide: e.delay }),
              "number" == typeof e.title && (e.title = e.title.toString()),
              "number" == typeof e.content &&
                (e.content = e.content.toString()),
              c.typeCheckConfig(Le, e, this.constructor.DefaultType),
              e.sanitize &&
                (e.template = a(e.template, e.whiteList, e.sanitizeFn)),
              e
            );
          }),
          (i._getDelegateConfig = function () {
            var e = {};
            if (this.config)
              for (var t in this.config)
                this.constructor.Default[t] !== this.config[t] &&
                  (e[t] = this.config[t]);
            return e;
          }),
          (i._cleanTipClass = function () {
            var e = t(this.getTipElement()),
              n = e.attr("class").match(Me);
            null !== n && n.length && e.removeClass(n.join(""));
          }),
          (i._handlePopperPlacementChange = function (e) {
            var t = e.instance;
            (this.tip = t.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(e.placement));
          }),
          (i._fixTransition = function () {
            var e = this.getTipElement(),
              n = this.config.animation;
            null === e.getAttribute("x-placement") &&
              (t(e).removeClass(Ue),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = n));
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data($e),
                o = "object" == typeof n && n;
              if (
                (i || !/dispose|hide/.test(n)) &&
                (i || ((i = new e(this, o)), t(this).data($e, i)),
                "string" == typeof n)
              ) {
                if (void 0 === i[n])
                  throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          o(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.3.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return ze;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Le;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return $e;
              },
            },
            {
              key: "Event",
              get: function () {
                return Be;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return je;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return We;
              },
            },
          ]),
          e
        );
      })();
    (t.fn[Le] = Qe._jQueryInterface),
      (t.fn[Le].Constructor = Qe),
      (t.fn[Le].noConflict = function () {
        return (t.fn[Le] = Pe), Qe._jQueryInterface;
      });
    var Ve = "popover",
      Ge = "bs.popover",
      Je = "." + Ge,
      Ze = t.fn[Ve],
      et = "bs-popover",
      tt = new RegExp("(^|\\s)" + et + "\\S+", "g"),
      nt = r({}, Qe.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      it = r({}, Qe.DefaultType, { content: "(string|element|function)" }),
      ot = {
        HIDE: "hide" + Je,
        HIDDEN: "hidden" + Je,
        SHOW: "show" + Je,
        SHOWN: "shown" + Je,
        INSERTED: "inserted" + Je,
        CLICK: "click" + Je,
        FOCUSIN: "focusin" + Je,
        FOCUSOUT: "focusout" + Je,
        MOUSEENTER: "mouseenter" + Je,
        MOUSELEAVE: "mouseleave" + Je,
      },
      rt = (function (e) {
        function n() {
          return e.apply(this, arguments) || this;
        }
        var i, r;
        (r = e),
          ((i = n).prototype = Object.create(r.prototype)),
          ((i.prototype.constructor = i).__proto__ = r);
        var s = n.prototype;
        return (
          (s.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (s.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass(et + "-" + e);
          }),
          (s.getTipElement = function () {
            return (
              (this.tip = this.tip || t(this.config.template)[0]), this.tip
            );
          }),
          (s.setContent = function () {
            var e = t(this.getTipElement());
            this.setElementContent(e.find(".popover-header"), this.getTitle());
            var n = this._getContent();
            "function" == typeof n && (n = n.call(this.element)),
              this.setElementContent(e.find(".popover-body"), n),
              e.removeClass("fade show");
          }),
          (s._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (s._cleanTipClass = function () {
            var e = t(this.getTipElement()),
              n = e.attr("class").match(tt);
            null !== n && 0 < n.length && e.removeClass(n.join(""));
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var i = t(this).data(Ge),
                o = "object" == typeof e ? e : null;
              if (
                (i || !/dispose|hide/.test(e)) &&
                (i || ((i = new n(this, o)), t(this).data(Ge, i)),
                "string" == typeof e)
              ) {
                if (void 0 === i[e])
                  throw new TypeError('No method named "' + e + '"');
                i[e]();
              }
            });
          }),
          o(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.3.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return nt;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Ve;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Ge;
              },
            },
            {
              key: "Event",
              get: function () {
                return ot;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Je;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return it;
              },
            },
          ]),
          n
        );
      })(Qe);
    (t.fn[Ve] = rt._jQueryInterface),
      (t.fn[Ve].Constructor = rt),
      (t.fn[Ve].noConflict = function () {
        return (t.fn[Ve] = Ze), rt._jQueryInterface;
      });
    var st = "scrollspy",
      at = "bs.scrollspy",
      lt = "." + at,
      ct = t.fn[st],
      ut = { offset: 10, method: "auto", target: "" },
      dt = { offset: "number", method: "string", target: "(string|element)" },
      pt = {
        ACTIVATE: "activate" + lt,
        SCROLL: "scroll" + lt,
        LOAD_DATA_API: "load" + lt + ".data-api",
      },
      ft = "active",
      ht = ".nav, .list-group",
      gt = ".nav-link",
      mt = ".list-group-item",
      vt = ".dropdown-item",
      yt = "position",
      bt = (function () {
        function e(e, n) {
          var i = this;
          (this._element = e),
            (this._scrollElement = "BODY" === e.tagName ? window : e),
            (this._config = this._getConfig(n)),
            (this._selector =
              this._config.target +
              " " +
              gt +
              "," +
              this._config.target +
              " " +
              mt +
              "," +
              this._config.target +
              " " +
              vt),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            t(this._scrollElement).on(pt.SCROLL, function (e) {
              return i._process(e);
            }),
            this.refresh(),
            this._process();
        }
        var n = e.prototype;
        return (
          (n.refresh = function () {
            var e = this,
              n =
                this._scrollElement === this._scrollElement.window
                  ? "offset"
                  : yt,
              i = "auto" === this._config.method ? n : this._config.method,
              o = i === yt ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (e) {
                  var n,
                    r = c.getSelectorFromElement(e);
                  if ((r && (n = document.querySelector(r)), n)) {
                    var s = n.getBoundingClientRect();
                    if (s.width || s.height) return [t(n)[i]().top + o, r];
                  }
                  return null;
                })
                .filter(function (e) {
                  return e;
                })
                .sort(function (e, t) {
                  return e[0] - t[0];
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (n.dispose = function () {
            t.removeData(this._element, at),
              t(this._scrollElement).off(lt),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (n._getConfig = function (e) {
            if (
              "string" !=
              typeof (e = r({}, ut, "object" == typeof e && e ? e : {})).target
            ) {
              var n = t(e.target).attr("id");
              n || ((n = c.getUID(st)), t(e.target).attr("id", n)),
                (e.target = "#" + n);
            }
            return c.typeCheckConfig(st, e, dt), e;
          }),
          (n._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (n._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (n._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (n._process = function () {
            var e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();
            if ((this._scrollHeight !== t && this.refresh(), n <= e)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                e < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var o = this._offsets.length; o--; )
                this._activeTarget !== this._targets[o] &&
                  e >= this._offsets[o] &&
                  (void 0 === this._offsets[o + 1] ||
                    e < this._offsets[o + 1]) &&
                  this._activate(this._targets[o]);
            }
          }),
          (n._activate = function (e) {
            (this._activeTarget = e), this._clear();
            var n = this._selector.split(",").map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                );
              }),
              i = t([].slice.call(document.querySelectorAll(n.join(","))));
            i.hasClass("dropdown-item")
              ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(ft),
                i.addClass(ft))
              : (i.addClass(ft),
                i
                  .parents(ht)
                  .prev(gt + ", " + mt)
                  .addClass(ft),
                i.parents(ht).prev(".nav-item").children(gt).addClass(ft)),
              t(this._scrollElement).trigger(pt.ACTIVATE, { relatedTarget: e });
          }),
          (n._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (e) {
                return e.classList.contains(ft);
              })
              .forEach(function (e) {
                return e.classList.remove(ft);
              });
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data(at);
              if (
                (i ||
                  ((i = new e(this, "object" == typeof n && n)),
                  t(this).data(at, i)),
                "string" == typeof n)
              ) {
                if (void 0 === i[n])
                  throw new TypeError('No method named "' + n + '"');
                i[n]();
              }
            });
          }),
          o(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.3.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return ut;
              },
            },
          ]),
          e
        );
      })();
    t(window).on(pt.LOAD_DATA_API, function () {
      for (
        var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
          n = e.length;
        n--;

      ) {
        var i = t(e[n]);
        bt._jQueryInterface.call(i, i.data());
      }
    }),
      (t.fn[st] = bt._jQueryInterface),
      (t.fn[st].Constructor = bt),
      (t.fn[st].noConflict = function () {
        return (t.fn[st] = ct), bt._jQueryInterface;
      });
    var wt = "bs.tab",
      Tt = "." + wt,
      _t = t.fn.tab,
      St = {
        HIDE: "hide" + Tt,
        HIDDEN: "hidden" + Tt,
        SHOW: "show" + Tt,
        SHOWN: "shown" + Tt,
        CLICK_DATA_API: "click" + Tt + ".data-api",
      },
      Ct = "active",
      xt = ".active",
      Et = "> li > .active",
      kt = (function () {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.show = function () {
            var e = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  t(this._element).hasClass(Ct)) ||
                t(this._element).hasClass("disabled")
              )
            ) {
              var n,
                i,
                o = t(this._element).closest(".nav, .list-group")[0],
                r = c.getSelectorFromElement(this._element);
              if (o) {
                var s = "UL" === o.nodeName || "OL" === o.nodeName ? Et : xt;
                i = (i = t.makeArray(t(o).find(s)))[i.length - 1];
              }
              var a = t.Event(St.HIDE, { relatedTarget: this._element }),
                l = t.Event(St.SHOW, { relatedTarget: i });
              if (
                (i && t(i).trigger(a),
                t(this._element).trigger(l),
                !l.isDefaultPrevented() && !a.isDefaultPrevented())
              ) {
                r && (n = document.querySelector(r)),
                  this._activate(this._element, o);
                var u = function () {
                  var n = t.Event(St.HIDDEN, { relatedTarget: e._element }),
                    o = t.Event(St.SHOWN, { relatedTarget: i });
                  t(i).trigger(n), t(e._element).trigger(o);
                };
                n ? this._activate(n, n.parentNode, u) : u();
              }
            }
          }),
          (n.dispose = function () {
            t.removeData(this._element, wt), (this._element = null);
          }),
          (n._activate = function (e, n, i) {
            var o = this,
              r = (
                !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
                  ? t(n).children(xt)
                  : t(n).find(Et)
              )[0],
              s = i && r && t(r).hasClass("fade"),
              a = function () {
                return o._transitionComplete(e, r, i);
              };
            if (r && s) {
              var l = c.getTransitionDurationFromElement(r);
              t(r)
                .removeClass("show")
                .one(c.TRANSITION_END, a)
                .emulateTransitionEnd(l);
            } else a();
          }),
          (n._transitionComplete = function (e, n, i) {
            if (n) {
              t(n).removeClass(Ct);
              var o = t(n.parentNode).find("> .dropdown-menu .active")[0];
              o && t(o).removeClass(Ct),
                "tab" === n.getAttribute("role") &&
                  n.setAttribute("aria-selected", !1);
            }
            if (
              (t(e).addClass(Ct),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !0),
              c.reflow(e),
              e.classList.contains("fade") && e.classList.add("show"),
              e.parentNode && t(e.parentNode).hasClass("dropdown-menu"))
            ) {
              var r = t(e).closest(".dropdown")[0];
              if (r) {
                var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                t(s).addClass(Ct);
              }
              e.setAttribute("aria-expanded", !0);
            }
            i && i();
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                o = i.data(wt);
              if (
                (o || ((o = new e(this)), i.data(wt, o)), "string" == typeof n)
              ) {
                if (void 0 === o[n])
                  throw new TypeError('No method named "' + n + '"');
                o[n]();
              }
            });
          }),
          o(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.3.1";
              },
            },
          ]),
          e
        );
      })();
    t(document).on(
      St.CLICK_DATA_API,
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (e) {
        e.preventDefault(), kt._jQueryInterface.call(t(this), "show");
      }
    ),
      (t.fn.tab = kt._jQueryInterface),
      (t.fn.tab.Constructor = kt),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = _t), kt._jQueryInterface;
      });
    var At = "toast",
      Dt = "bs.toast",
      Ot = "." + Dt,
      Nt = t.fn[At],
      It = {
        CLICK_DISMISS: "click.dismiss" + Ot,
        HIDE: "hide" + Ot,
        HIDDEN: "hidden" + Ot,
        SHOW: "show" + Ot,
        SHOWN: "shown" + Ot,
      },
      Lt = "show",
      $t = "showing",
      jt = { animation: "boolean", autohide: "boolean", delay: "number" },
      Pt = { animation: !0, autohide: !0, delay: 500 },
      Ht = (function () {
        function e(e, t) {
          (this._element = e),
            (this._config = this._getConfig(t)),
            (this._timeout = null),
            this._setListeners();
        }
        var n = e.prototype;
        return (
          (n.show = function () {
            var e = this;
            t(this._element).trigger(It.SHOW),
              this._config.animation && this._element.classList.add("fade");
            var n = function () {
              e._element.classList.remove($t),
                e._element.classList.add(Lt),
                t(e._element).trigger(It.SHOWN),
                e._config.autohide && e.hide();
            };
            if (
              (this._element.classList.remove("hide"),
              this._element.classList.add($t),
              this._config.animation)
            ) {
              var i = c.getTransitionDurationFromElement(this._element);
              t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
            } else n();
          }),
          (n.hide = function (e) {
            var n = this;
            this._element.classList.contains(Lt) &&
              (t(this._element).trigger(It.HIDE),
              e
                ? this._close()
                : (this._timeout = setTimeout(function () {
                    n._close();
                  }, this._config.delay)));
          }),
          (n.dispose = function () {
            clearTimeout(this._timeout),
              (this._timeout = null),
              this._element.classList.contains(Lt) &&
                this._element.classList.remove(Lt),
              t(this._element).off(It.CLICK_DISMISS),
              t.removeData(this._element, Dt),
              (this._element = null),
              (this._config = null);
          }),
          (n._getConfig = function (e) {
            return (
              (e = r(
                {},
                Pt,
                t(this._element).data(),
                "object" == typeof e && e ? e : {}
              )),
              c.typeCheckConfig(At, e, this.constructor.DefaultType),
              e
            );
          }),
          (n._setListeners = function () {
            var e = this;
            t(this._element).on(
              It.CLICK_DISMISS,
              '[data-dismiss="toast"]',
              function () {
                return e.hide(!0);
              }
            );
          }),
          (n._close = function () {
            var e = this,
              n = function () {
                e._element.classList.add("hide"),
                  t(e._element).trigger(It.HIDDEN);
              };
            if ((this._element.classList.remove(Lt), this._config.animation)) {
              var i = c.getTransitionDurationFromElement(this._element);
              t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
            } else n();
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                o = i.data(Dt);
              if (
                (o ||
                  ((o = new e(this, "object" == typeof n && n)), i.data(Dt, o)),
                "string" == typeof n)
              ) {
                if (void 0 === o[n])
                  throw new TypeError('No method named "' + n + '"');
                o[n](this);
              }
            });
          }),
          o(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.3.1";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return jt;
              },
            },
            {
              key: "Default",
              get: function () {
                return Pt;
              },
            },
          ]),
          e
        );
      })();
    (t.fn[At] = Ht._jQueryInterface),
      (t.fn[At].Constructor = Ht),
      (t.fn[At].noConflict = function () {
        return (t.fn[At] = Nt), Ht._jQueryInterface;
      }),
      (function () {
        if (void 0 === t)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (
          (e[0] < 2 && e[1] < 9) ||
          (1 === e[0] && 9 === e[1] && e[2] < 1) ||
          4 <= e[0]
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      })(),
      (e.Util = c),
      (e.Alert = g),
      (e.Button = x),
      (e.Carousel = W),
      (e.Collapse = Z),
      (e.Dropdown = he),
      (e.Modal = Ae),
      (e.Popover = rt),
      (e.Scrollspy = bt),
      (e.Tab = kt),
      (e.Toast = Ht),
      (e.Tooltip = Qe),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (e) {
    "use strict";
    var t = window.Slick || {};
    (t = (function () {
      function t(t, i) {
        var o,
          r = this;
        (r.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(t),
          appendDots: e(t),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (t, n) {
            return e('<button type="button" />').text(n + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          e.extend(r, r.initials),
          (r.activeBreakpoint = null),
          (r.animType = null),
          (r.animProp = null),
          (r.breakpoints = []),
          (r.breakpointSettings = []),
          (r.cssTransitions = !1),
          (r.focussed = !1),
          (r.interrupted = !1),
          (r.hidden = "hidden"),
          (r.paused = !0),
          (r.positionProp = null),
          (r.respondTo = null),
          (r.rowCount = 1),
          (r.shouldClick = !0),
          (r.$slider = e(t)),
          (r.$slidesCache = null),
          (r.transformType = null),
          (r.transitionType = null),
          (r.visibilityChange = "visibilitychange"),
          (r.windowWidth = 0),
          (r.windowTimer = null),
          (o = e(t).data("slick") || {}),
          (r.options = e.extend({}, r.defaults, i, o)),
          (r.currentSlide = r.options.initialSlide),
          (r.originalSettings = r.options),
          void 0 !== document.mozHidden
            ? ((r.hidden = "mozHidden"),
              (r.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((r.hidden = "webkitHidden"),
              (r.visibilityChange = "webkitvisibilitychange")),
          (r.autoPlay = e.proxy(r.autoPlay, r)),
          (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
          (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
          (r.changeSlide = e.proxy(r.changeSlide, r)),
          (r.clickHandler = e.proxy(r.clickHandler, r)),
          (r.selectHandler = e.proxy(r.selectHandler, r)),
          (r.setPosition = e.proxy(r.setPosition, r)),
          (r.swipeHandler = e.proxy(r.swipeHandler, r)),
          (r.dragHandler = e.proxy(r.dragHandler, r)),
          (r.keyHandler = e.proxy(r.keyHandler, r)),
          (r.instanceUid = n++),
          (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          r.registerBreakpoints(),
          r.init(!0);
      }
      var n = 0;
      return t;
    })()),
      (t.prototype.activateADA = function () {
        this.$slideTrack
          .find(".slick-active")
          .attr({ "aria-hidden": "false" })
          .find("a, input, button, select")
          .attr({ tabindex: "0" });
      }),
      (t.prototype.addSlide = t.prototype.slickAdd =
        function (t, n, i) {
          var o = this;
          if ("boolean" == typeof n) (i = n), (n = null);
          else if (n < 0 || n >= o.slideCount) return !1;
          o.unload(),
            "number" == typeof n
              ? 0 === n && 0 === o.$slides.length
                ? e(t).appendTo(o.$slideTrack)
                : i
                ? e(t).insertBefore(o.$slides.eq(n))
                : e(t).insertAfter(o.$slides.eq(n))
              : !0 === i
              ? e(t).prependTo(o.$slideTrack)
              : e(t).appendTo(o.$slideTrack),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            o.$slides.each(function (t, n) {
              e(n).attr("data-slick-index", t);
            }),
            (o.$slidesCache = o.$slides),
            o.reinit();
        }),
      (t.prototype.animateHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({ height: t }, e.options.speed);
        }
      }),
      (t.prototype.animateSlide = function (t, n) {
        var i = {},
          o = this;
        o.animateHeight(),
          !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
          !1 === o.transformsEnabled
            ? !1 === o.options.vertical
              ? o.$slideTrack.animate(
                  { left: t },
                  o.options.speed,
                  o.options.easing,
                  n
                )
              : o.$slideTrack.animate(
                  { top: t },
                  o.options.speed,
                  o.options.easing,
                  n
                )
            : !1 === o.cssTransitions
            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
              e({ animStart: o.currentLeft }).animate(
                { animStart: t },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function (e) {
                    (e = Math.ceil(e)),
                      !1 === o.options.vertical
                        ? ((i[o.animType] = "translate(" + e + "px, 0px)"),
                          o.$slideTrack.css(i))
                        : ((i[o.animType] = "translate(0px," + e + "px)"),
                          o.$slideTrack.css(i));
                  },
                  complete: function () {
                    n && n.call();
                  },
                }
              ))
            : (o.applyTransition(),
              (t = Math.ceil(t)),
              !1 === o.options.vertical
                ? (i[o.animType] = "translate3d(" + t + "px, 0px, 0px)")
                : (i[o.animType] = "translate3d(0px," + t + "px, 0px)"),
              o.$slideTrack.css(i),
              n &&
                setTimeout(function () {
                  o.disableTransition(), n.call();
                }, o.options.speed));
      }),
      (t.prototype.getNavTarget = function () {
        var t = this,
          n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)), n;
      }),
      (t.prototype.asNavFor = function (t) {
        var n = this,
          i = n.getNavTarget();
        null !== i &&
          "object" == typeof i &&
          i.each(function () {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0);
          });
      }),
      (t.prototype.applyTransition = function (e) {
        var t = this,
          n = {};
        !1 === t.options.fade
          ? (n[t.transitionType] =
              t.transformType +
              " " +
              t.options.speed +
              "ms " +
              t.options.cssEase)
          : (n[t.transitionType] =
              "opacity " + t.options.speed + "ms " + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ));
      }),
      (t.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer);
      }),
      (t.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
                ((t = e.currentSlide - e.options.slidesToScroll),
                e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t));
      }),
      (t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows &&
          ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
          (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
          t.slideCount > t.options.slidesToShow
            ? (t.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.htmlExpr.test(t.options.prevArrow) &&
                t.$prevArrow.prependTo(t.options.appendArrows),
              t.htmlExpr.test(t.options.nextArrow) &&
                t.$nextArrow.appendTo(t.options.appendArrows),
              !0 !== t.options.infinite &&
                t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : t.$prevArrow
                .add(t.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (t.prototype.buildDots = function () {
        var t,
          n,
          i = this;
        if (!0 === i.options.dots) {
          for (
            i.$slider.addClass("slick-dotted"),
              n = e("<ul />").addClass(i.options.dotsClass),
              t = 0;
            t <= i.getDotCount();
            t += 1
          )
            n.append(
              e("<li />").append(i.options.customPaging.call(this, i, t))
            );
          (i.$dots = n.appendTo(i.options.appendDots)),
            i.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (t.prototype.buildOut = function () {
        var t = this;
        (t.$slides = t.$slider
          .children(t.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, n) {
            e(n)
              .attr("data-slick-index", t)
              .data("originalStyling", e(n).attr("style") || "");
          }),
          t.$slider.addClass("slick-slider"),
          (t.$slideTrack =
            0 === t.slideCount
              ? e('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          t.$slideTrack.css("opacity", 0),
          (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
            (t.options.slidesToScroll = 1),
          e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          !0 === t.options.draggable && t.$list.addClass("draggable");
      }),
      (t.prototype.buildRows = function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        if (
          ((i = document.createDocumentFragment()),
          (r = a.$slider.children()),
          a.options.rows > 1)
        ) {
          for (
            s = a.options.slidesPerRow * a.options.rows,
              o = Math.ceil(r.length / s),
              e = 0;
            e < o;
            e++
          ) {
            var l = document.createElement("div");
            for (t = 0; t < a.options.rows; t++) {
              var c = document.createElement("div");
              for (n = 0; n < a.options.slidesPerRow; n++) {
                var u = e * s + (t * a.options.slidesPerRow + n);
                r.get(u) && c.appendChild(r.get(u));
              }
              l.appendChild(c);
            }
            i.appendChild(l);
          }
          a.$slider.empty().append(i),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (t.prototype.checkResponsive = function (t, n) {
        var i,
          o,
          r,
          s = this,
          a = !1,
          l = s.$slider.width(),
          c = window.innerWidth || e(window).width();
        if (
          ("window" === s.respondTo
            ? (r = c)
            : "slider" === s.respondTo
            ? (r = l)
            : "min" === s.respondTo && (r = Math.min(c, l)),
          s.options.responsive &&
            s.options.responsive.length &&
            null !== s.options.responsive)
        ) {
          o = null;
          for (i in s.breakpoints)
            s.breakpoints.hasOwnProperty(i) &&
              (!1 === s.originalSettings.mobileFirst
                ? r < s.breakpoints[i] && (o = s.breakpoints[i])
                : r > s.breakpoints[i] && (o = s.breakpoints[i]));
          null !== o
            ? null !== s.activeBreakpoint
              ? (o !== s.activeBreakpoint || n) &&
                ((s.activeBreakpoint = o),
                "unslick" === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = e.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[o]
                    )),
                    !0 === t && (s.currentSlide = s.options.initialSlide),
                    s.refresh(t)),
                (a = o))
              : ((s.activeBreakpoint = o),
                "unslick" === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = e.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[o]
                    )),
                    !0 === t && (s.currentSlide = s.options.initialSlide),
                    s.refresh(t)),
                (a = o))
            : null !== s.activeBreakpoint &&
              ((s.activeBreakpoint = null),
              (s.options = s.originalSettings),
              !0 === t && (s.currentSlide = s.options.initialSlide),
              s.refresh(t),
              (a = o)),
            t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
        }
      }),
      (t.prototype.changeSlide = function (t, n) {
        var i,
          o,
          r,
          s = this,
          a = e(t.currentTarget);
        switch (
          (a.is("a") && t.preventDefault(),
          a.is("li") || (a = a.closest("li")),
          (r = s.slideCount % s.options.slidesToScroll != 0),
          (i = r
            ? 0
            : (s.slideCount - s.currentSlide) % s.options.slidesToScroll),
          t.data.message)
        ) {
          case "previous":
            (o =
              0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i),
              s.slideCount > s.options.slidesToShow &&
                s.slideHandler(s.currentSlide - o, !1, n);
            break;
          case "next":
            (o = 0 === i ? s.options.slidesToScroll : i),
              s.slideCount > s.options.slidesToShow &&
                s.slideHandler(s.currentSlide + o, !1, n);
            break;
          case "index":
            var l =
              0 === t.data.index
                ? 0
                : t.data.index || a.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(l), !1, n),
              a.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (t.prototype.checkNavigable = function (e) {
        var t,
          n,
          i = this;
        if (((t = i.getNavigableIndexes()), (n = 0), e > t[t.length - 1]))
          e = t[t.length - 1];
        else
          for (var o in t) {
            if (e < t[o]) {
              e = n;
              break;
            }
            n = t[o];
          }
        return e;
      }),
      (t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots &&
          null !== t.$dots &&
          (e("li", t.$dots)
            .off("click.slick", t.changeSlide)
            .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
            .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
          !0 === t.options.accessibility &&
            t.$dots.off("keydown.slick", t.keyHandler)),
          t.$slider.off("focus.slick blur.slick"),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
            !0 === t.options.accessibility &&
              (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
              t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
          t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
          t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
          t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
          t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
          t.$list.off("click.slick", t.clickHandler),
          e(document).off(t.visibilityChange, t.visibility),
          t.cleanUpSlideEvents(),
          !0 === t.options.accessibility &&
            t.$list.off("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack).children().off("click.slick", t.selectHandler),
          e(window).off(
            "orientationchange.slick.slick-" + t.instanceUid,
            t.orientationChange
          ),
          e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
          e("[draggable!=true]", t.$slideTrack).off(
            "dragstart",
            t.preventDefault
          ),
          e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
          t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.cleanUpRows = function () {
        var e,
          t = this;
        t.options.rows > 1 &&
          ((e = t.$slides.children().children()),
          e.removeAttr("style"),
          t.$slider.empty().append(e));
      }),
      (t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault());
      }),
      (t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(),
          (n.touchObject = {}),
          n.cleanUpEvents(),
          e(".slick-cloned", n.$slider).detach(),
          n.$dots && n.$dots.remove(),
          n.$prevArrow &&
            n.$prevArrow.length &&
            (n.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
          n.$nextArrow &&
            n.$nextArrow.length &&
            (n.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
          n.$slides &&
            (n.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                e(this).attr("style", e(this).data("originalStyling"));
              }),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.detach(),
            n.$list.detach(),
            n.$slider.append(n.$slides)),
          n.cleanUpRows(),
          n.$slider.removeClass("slick-slider"),
          n.$slider.removeClass("slick-initialized"),
          n.$slider.removeClass("slick-dotted"),
          (n.unslicked = !0),
          t || n.$slider.trigger("destroy", [n]);
      }),
      (t.prototype.disableTransition = function (e) {
        var t = this,
          n = {};
        (n[t.transitionType] = ""),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
            n.$slides
              .eq(e)
              .animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
            t &&
              setTimeout(function () {
                n.disableTransition(e), t.call();
              }, n.options.speed));
      }),
      (t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions
          ? t.$slides
              .eq(e)
              .animate(
                { opacity: 0, zIndex: t.options.zIndex - 2 },
                t.options.speed,
                t.options.easing
              )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
      }),
      (t.prototype.filterSlides = t.prototype.slickFilter =
        function (e) {
          var t = this;
          null !== e &&
            ((t.$slidesCache = t.$slides),
            t.unload(),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slidesCache.filter(e).appendTo(t.$slideTrack),
            t.reinit());
        }),
      (t.prototype.focusHandler = function () {
        var t = this;
        t.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function (n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function () {
              t.options.pauseOnFocus &&
                ((t.focussed = i.is(":focus")), t.autoPlay());
            }, 0);
          });
      }),
      (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (t.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          n = 0,
          i = 0;
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++i;
          else
            for (; t < e.slideCount; )
              ++i,
                (t = n + e.options.slidesToScroll),
                (n +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
          for (; t < e.slideCount; )
            ++i,
              (t = n + e.options.slidesToScroll),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
        else
          i =
            1 +
            Math.ceil(
              (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
            );
        return i - 1;
      }),
      (t.prototype.getLeft = function (e) {
        var t,
          n,
          i,
          o,
          r = this,
          s = 0;
        return (
          (r.slideOffset = 0),
          (n = r.$slides.first().outerHeight(!0)),
          !0 === r.options.infinite
            ? (r.slideCount > r.options.slidesToShow &&
                ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                (o = -1),
                !0 === r.options.vertical &&
                  !0 === r.options.centerMode &&
                  (2 === r.options.slidesToShow
                    ? (o = -1.5)
                    : 1 === r.options.slidesToShow && (o = -2)),
                (s = n * r.options.slidesToShow * o)),
              r.slideCount % r.options.slidesToScroll != 0 &&
                e + r.options.slidesToScroll > r.slideCount &&
                r.slideCount > r.options.slidesToShow &&
                (e > r.slideCount
                  ? ((r.slideOffset =
                      (r.options.slidesToShow - (e - r.slideCount)) *
                      r.slideWidth *
                      -1),
                    (s =
                      (r.options.slidesToShow - (e - r.slideCount)) * n * -1))
                  : ((r.slideOffset =
                      (r.slideCount % r.options.slidesToScroll) *
                      r.slideWidth *
                      -1),
                    (s = (r.slideCount % r.options.slidesToScroll) * n * -1))))
            : e + r.options.slidesToShow > r.slideCount &&
              ((r.slideOffset =
                (e + r.options.slidesToShow - r.slideCount) * r.slideWidth),
              (s = (e + r.options.slidesToShow - r.slideCount) * n)),
          r.slideCount <= r.options.slidesToShow &&
            ((r.slideOffset = 0), (s = 0)),
          !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow
            ? (r.slideOffset =
                (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 -
                (r.slideWidth * r.slideCount) / 2)
            : !0 === r.options.centerMode && !0 === r.options.infinite
            ? (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2) -
                r.slideWidth)
            : !0 === r.options.centerMode &&
              ((r.slideOffset = 0),
              (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
          (t =
            !1 === r.options.vertical
              ? e * r.slideWidth * -1 + r.slideOffset
              : e * n * -1 + s),
          !0 === r.options.variableWidth &&
            ((i =
              r.slideCount <= r.options.slidesToShow ||
              !1 === r.options.infinite
                ? r.$slideTrack.children(".slick-slide").eq(e)
                : r.$slideTrack
                    .children(".slick-slide")
                    .eq(e + r.options.slidesToShow)),
            (t =
              !0 === r.options.rtl
                ? i[0]
                  ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                  : 0
                : i[0]
                ? -1 * i[0].offsetLeft
                : 0),
            !0 === r.options.centerMode &&
              ((i =
                r.slideCount <= r.options.slidesToShow ||
                !1 === r.options.infinite
                  ? r.$slideTrack.children(".slick-slide").eq(e)
                  : r.$slideTrack
                      .children(".slick-slide")
                      .eq(e + r.options.slidesToShow + 1)),
              (t =
                !0 === r.options.rtl
                  ? i[0]
                    ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                    : 0
                  : i[0]
                  ? -1 * i[0].offsetLeft
                  : 0),
              (t += (r.$list.width() - i.outerWidth()) / 2))),
          t
        );
      }),
      (t.prototype.getOption = t.prototype.slickGetOption =
        function (e) {
          return this.options[e];
        }),
      (t.prototype.getNavigableIndexes = function () {
        var e,
          t = this,
          n = 0,
          i = 0,
          o = [];
        for (
          !1 === t.options.infinite
            ? (e = t.slideCount)
            : ((n = -1 * t.options.slidesToScroll),
              (i = -1 * t.options.slidesToScroll),
              (e = 2 * t.slideCount));
          n < e;

        )
          o.push(n),
            (n = i + t.options.slidesToScroll),
            (i +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow);
        return o;
      }),
      (t.prototype.getSlick = function () {
        return this;
      }),
      (t.prototype.getSlideCount = function () {
        var t,
          n,
          i = this;
        return (
          (n =
            !0 === i.options.centerMode
              ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
              : 0),
          !0 === i.options.swipeToSlide
            ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
                if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft)
                  return (t = r), !1;
              }),
              Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1)
            : i.options.slidesToScroll
        );
      }),
      (t.prototype.goTo = t.prototype.slickGoTo =
        function (e, t) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(e) } },
            t
          );
        }),
      (t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") ||
          (e(n.$slider).addClass("slick-initialized"),
          n.buildRows(),
          n.buildOut(),
          n.setProps(),
          n.startLoad(),
          n.loadSlider(),
          n.initializeEvents(),
          n.updateArrows(),
          n.updateDots(),
          n.checkResponsive(!0),
          n.focusHandler()),
          t && n.$slider.trigger("init", [n]),
          !0 === n.options.accessibility && n.initADA(),
          n.options.autoplay && ((n.paused = !1), n.autoPlay());
      }),
      (t.prototype.initADA = function () {
        var t = this,
          n = Math.ceil(t.slideCount / t.options.slidesToShow),
          i = t.getNavigableIndexes().filter(function (e) {
            return e >= 0 && e < t.slideCount;
          });
        t.$slides
          .add(t.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== t.$dots &&
            (t.$slides
              .not(t.$slideTrack.find(".slick-cloned"))
              .each(function (n) {
                var o = i.indexOf(n);
                e(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + t.instanceUid + n,
                  tabindex: -1,
                }),
                  -1 !== o &&
                    e(this).attr({
                      "aria-describedby":
                        "slick-slide-control" + t.instanceUid + o,
                    });
              }),
            t.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (o) {
                var r = i[o];
                e(this).attr({ role: "presentation" }),
                  e(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + t.instanceUid + o,
                      "aria-controls": "slick-slide" + t.instanceUid + r,
                      "aria-label": o + 1 + " of " + n,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(t.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++)
          t.$slides.eq(o).attr("tabindex", 0);
        t.activateADA();
      }),
      (t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, e.changeSlide),
          e.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow.on("keydown.slick", e.keyHandler),
            e.$nextArrow.on("keydown.slick", e.keyHandler)));
      }),
      (t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots &&
          (e("li", t.$dots).on(
            "click.slick",
            { message: "index" },
            t.changeSlide
          ),
          !0 === t.options.accessibility &&
            t.$dots.on("keydown.slick", t.keyHandler)),
          !0 === t.options.dots &&
            !0 === t.options.pauseOnDotsHover &&
            e("li", t.$dots)
              .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
              .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover &&
          (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
          t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
      }),
      (t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.initSlideEvents(),
          t.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on("click.slick", t.clickHandler),
          e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
          !0 === t.options.accessibility &&
            t.$list.on("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          e(window).on(
            "orientationchange.slick.slick-" + t.instanceUid,
            e.proxy(t.orientationChange, t)
          ),
          e(window).on(
            "resize.slick.slick-" + t.instanceUid,
            e.proxy(t.resize, t)
          ),
          e("[draggable!=true]", t.$slideTrack).on(
            "dragstart",
            t.preventDefault
          ),
          e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
          e(t.setPosition);
      }),
      (t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.show();
      }),
      (t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({
                data: { message: !0 === t.options.rtl ? "next" : "previous" },
              })
            : 39 === e.keyCode &&
              !0 === t.options.accessibility &&
              t.changeSlide({
                data: { message: !0 === t.options.rtl ? "previous" : "next" },
              }));
      }),
      (t.prototype.lazyLoad = function () {
        function t(t) {
          e("img[data-lazy]", t).each(function () {
            var t = e(this),
              n = e(this).attr("data-lazy"),
              i = e(this).attr("data-srcset"),
              o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
              r = document.createElement("img");
            (r.onload = function () {
              t.animate({ opacity: 0 }, 100, function () {
                i && (t.attr("srcset", i), o && t.attr("sizes", o)),
                  t.attr("src", n).animate({ opacity: 1 }, 200, function () {
                    t.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  s.$slider.trigger("lazyLoaded", [s, t, n]);
              });
            }),
              (r.onerror = function () {
                t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  s.$slider.trigger("lazyLoadError", [s, t, n]);
              }),
              (r.src = n);
          });
        }
        var n,
          i,
          o,
          r,
          s = this;
        if (
          (!0 === s.options.centerMode
            ? !0 === s.options.infinite
              ? ((o = s.currentSlide + (s.options.slidesToShow / 2 + 1)),
                (r = o + s.options.slidesToShow + 2))
              : ((o = Math.max(
                  0,
                  s.currentSlide - (s.options.slidesToShow / 2 + 1)
                )),
                (r = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
            : ((o = s.options.infinite
                ? s.options.slidesToShow + s.currentSlide
                : s.currentSlide),
              (r = Math.ceil(o + s.options.slidesToShow)),
              !0 === s.options.fade &&
                (o > 0 && o--, r <= s.slideCount && r++)),
          (n = s.$slider.find(".slick-slide").slice(o, r)),
          "anticipated" === s.options.lazyLoad)
        )
          for (
            var a = o - 1, l = r, c = s.$slider.find(".slick-slide"), u = 0;
            u < s.options.slidesToScroll;
            u++
          )
            a < 0 && (a = s.slideCount - 1),
              (n = n.add(c.eq(a))),
              (n = n.add(c.eq(l))),
              a--,
              l++;
        t(n),
          s.slideCount <= s.options.slidesToShow
            ? ((i = s.$slider.find(".slick-slide")), t(i))
            : s.currentSlide >= s.slideCount - s.options.slidesToShow
            ? ((i = s.$slider
                .find(".slick-cloned")
                .slice(0, s.options.slidesToShow)),
              t(i))
            : 0 === s.currentSlide &&
              ((i = s.$slider
                .find(".slick-cloned")
                .slice(-1 * s.options.slidesToShow)),
              t(i));
      }),
      (t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass("slick-loading"),
          e.initUI(),
          "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (t.prototype.next = t.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (t.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive(), e.setPosition();
      }),
      (t.prototype.pause = t.prototype.slickPause =
        function () {
          var e = this;
          e.autoPlayClear(), (e.paused = !0);
        }),
      (t.prototype.play = t.prototype.slickPlay =
        function () {
          var e = this;
          e.autoPlay(),
            (e.options.autoplay = !0),
            (e.paused = !1),
            (e.focussed = !1),
            (e.interrupted = !1);
        }),
      (t.prototype.postSlide = function (t) {
        var n = this;
        if (
          !n.unslicked &&
          (n.$slider.trigger("afterChange", [n, t]),
          (n.animating = !1),
          n.slideCount > n.options.slidesToShow && n.setPosition(),
          (n.swipeLeft = null),
          n.options.autoplay && n.autoPlay(),
          !0 === n.options.accessibility &&
            (n.initADA(), n.options.focusOnChange))
        ) {
          e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus();
        }
      }),
      (t.prototype.prev = t.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (t.prototype.preventDefault = function (e) {
        e.preventDefault();
      }),
      (t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var n,
          i,
          o,
          r,
          s,
          a = this,
          l = e("img[data-lazy]", a.$slider);
        l.length
          ? ((n = l.first()),
            (i = n.attr("data-lazy")),
            (o = n.attr("data-srcset")),
            (r = n.attr("data-sizes") || a.$slider.attr("data-sizes")),
            (s = document.createElement("img")),
            (s.onload = function () {
              o && (n.attr("srcset", o), r && n.attr("sizes", r)),
                n
                  .attr("src", i)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === a.options.adaptiveHeight && a.setPosition(),
                a.$slider.trigger("lazyLoaded", [a, n, i]),
                a.progressiveLazyLoad();
            }),
            (s.onerror = function () {
              t < 3
                ? setTimeout(function () {
                    a.progressiveLazyLoad(t + 1);
                  }, 500)
                : (n
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  a.$slider.trigger("lazyLoadError", [a, n, i]),
                  a.progressiveLazyLoad());
            }),
            (s.src = i))
          : a.$slider.trigger("allImagesLoaded", [a]);
      }),
      (t.prototype.refresh = function (t) {
        var n,
          i,
          o = this;
        (i = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (n = o.currentSlide),
          o.destroy(!0),
          e.extend(o, o.initials, { currentSlide: n }),
          o.init(),
          t || o.changeSlide({ data: { message: "index", index: n } }, !1);
      }),
      (t.prototype.registerBreakpoints = function () {
        var t,
          n,
          i,
          o = this,
          r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
          o.respondTo = o.options.respondTo || "window";
          for (t in r)
            if (((i = o.breakpoints.length - 1), r.hasOwnProperty(t))) {
              for (n = r[t].breakpoint; i >= 0; )
                o.breakpoints[i] &&
                  o.breakpoints[i] === n &&
                  o.breakpoints.splice(i, 1),
                  i--;
              o.breakpoints.push(n), (o.breakpointSettings[n] = r[t].settings);
            }
          o.breakpoints.sort(function (e, t) {
            return o.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (t.prototype.reinit = function () {
        var t = this;
        (t.$slides = t.$slideTrack
          .children(t.options.slide)
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.registerBreakpoints(),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.cleanUpSlideEvents(),
          t.initSlideEvents(),
          t.checkResponsive(!1, !0),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          t.setPosition(),
          t.focusHandler(),
          (t.paused = !t.options.autoplay),
          t.autoPlay(),
          t.$slider.trigger("reInit", [t]);
      }),
      (t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
          (t.windowDelay = window.setTimeout(function () {
            (t.windowWidth = e(window).width()),
              t.checkResponsive(),
              t.unslicked || t.setPosition();
          }, 50)));
      }),
      (t.prototype.removeSlide = t.prototype.slickRemove =
        function (e, t, n) {
          var i = this;
          if (
            ("boolean" == typeof e
              ? ((t = e), (e = !0 === t ? 0 : i.slideCount - 1))
              : (e = !0 === t ? --e : e),
            i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
          )
            return !1;
          i.unload(),
            !0 === n
              ? i.$slideTrack.children().remove()
              : i.$slideTrack.children(this.options.slide).eq(e).remove(),
            (i.$slides = i.$slideTrack.children(this.options.slide)),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.append(i.$slides),
            (i.$slidesCache = i.$slides),
            i.reinit();
        }),
      (t.prototype.setCSS = function (e) {
        var t,
          n,
          i = this,
          o = {};
        !0 === i.options.rtl && (e = -e),
          (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (o[i.positionProp] = e),
          !1 === i.transformsEnabled
            ? i.$slideTrack.css(o)
            : ((o = {}),
              !1 === i.cssTransitions
                ? ((o[i.animType] = "translate(" + t + ", " + n + ")"),
                  i.$slideTrack.css(o))
                : ((o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
                  i.$slideTrack.css(o)));
      }),
      (t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical
          ? !0 === e.options.centerMode &&
            e.$list.css({ padding: "0px " + e.options.centerPadding })
          : (e.$list.height(
              e.$slides.first().outerHeight(!0) * e.options.slidesToShow
            ),
            !0 === e.options.centerMode &&
              e.$list.css({ padding: e.options.centerPadding + " 0px" })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(
                Math.ceil(
                  e.slideWidth * e.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)),
              e.$slideTrack.height(
                Math.ceil(
                  e.$slides.first().outerHeight(!0) *
                    e.$slideTrack.children(".slick-slide").length
                )
              ));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth &&
          e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }),
      (t.prototype.setFade = function () {
        var t,
          n = this;
        n.$slides.each(function (i, o) {
          (t = n.slideWidth * i * -1),
            !0 === n.options.rtl
              ? e(o).css({
                  position: "relative",
                  right: t,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                })
              : e(o).css({
                  position: "relative",
                  left: t,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          n.$slides
            .eq(n.currentSlide)
            .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
      }),
      (t.prototype.setHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }),
      (t.prototype.setOption = t.prototype.slickSetOption =
        function () {
          var t,
            n,
            i,
            o,
            r,
            s = this,
            a = !1;
          if (
            ("object" === e.type(arguments[0])
              ? ((i = arguments[0]), (a = arguments[1]), (r = "multiple"))
              : "string" === e.type(arguments[0]) &&
                ((i = arguments[0]),
                (o = arguments[1]),
                (a = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === e.type(arguments[1])
                  ? (r = "responsive")
                  : void 0 !== arguments[1] && (r = "single")),
            "single" === r)
          )
            s.options[i] = o;
          else if ("multiple" === r)
            e.each(i, function (e, t) {
              s.options[e] = t;
            });
          else if ("responsive" === r)
            for (n in o)
              if ("array" !== e.type(s.options.responsive))
                s.options.responsive = [o[n]];
              else {
                for (t = s.options.responsive.length - 1; t >= 0; )
                  s.options.responsive[t].breakpoint === o[n].breakpoint &&
                    s.options.responsive.splice(t, 1),
                    t--;
                s.options.responsive.push(o[n]);
              }
          a && (s.unload(), s.reinit());
        }),
      (t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(),
          e.setHeight(),
          !1 === e.options.fade
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger("setPosition", [e]);
      }),
      (t.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
          "top" === e.positionProp
            ? e.$slider.addClass("slick-vertical")
            : e.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade &&
            ("number" == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = "OTransform"),
            (e.transformType = "-o-transform"),
            (e.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = "MozTransform"),
            (e.transformType = "-moz-transform"),
            (e.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = "webkitTransform"),
            (e.transformType = "-webkit-transform"),
            (e.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = "msTransform"),
            (e.transformType = "-ms-transform"),
            (e.transitionType = "msTransition"),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            !1 !== e.animType &&
            ((e.animType = "transform"),
            (e.transformType = "transform"),
            (e.transitionType = "transition")),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (t.prototype.setSlideClasses = function (e) {
        var t,
          n,
          i,
          o,
          r = this;
        if (
          ((n = r.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
          r.$slides.eq(e).addClass("slick-current"),
          !0 === r.options.centerMode)
        ) {
          var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
          (t = Math.floor(r.options.slidesToShow / 2)),
            !0 === r.options.infinite &&
              (e >= t && e <= r.slideCount - 1 - t
                ? r.$slides
                    .slice(e - t + s, e + t + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((i = r.options.slidesToShow + e),
                  n
                    .slice(i - t + 1 + s, i + t + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === e
                ? n
                    .eq(n.length - 1 - r.options.slidesToShow)
                    .addClass("slick-center")
                : e === r.slideCount - 1 &&
                  n.eq(r.options.slidesToShow).addClass("slick-center")),
            r.$slides.eq(e).addClass("slick-center");
        } else
          e >= 0 && e <= r.slideCount - r.options.slidesToShow
            ? r.$slides
                .slice(e, e + r.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : n.length <= r.options.slidesToShow
            ? n.addClass("slick-active").attr("aria-hidden", "false")
            : ((o = r.slideCount % r.options.slidesToShow),
              (i = !0 === r.options.infinite ? r.options.slidesToShow + e : e),
              r.options.slidesToShow == r.options.slidesToScroll &&
              r.slideCount - e < r.options.slidesToShow
                ? n
                    .slice(i - (r.options.slidesToShow - o), i + o)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : n
                    .slice(i, i + r.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== r.options.lazyLoad &&
          "anticipated" !== r.options.lazyLoad) ||
          r.lazyLoad();
      }),
      (t.prototype.setupInfinite = function () {
        var t,
          n,
          i,
          o = this;
        if (
          (!0 === o.options.fade && (o.options.centerMode = !1),
          !0 === o.options.infinite &&
            !1 === o.options.fade &&
            ((n = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            i =
              !0 === o.options.centerMode
                ? o.options.slidesToShow + 1
                : o.options.slidesToShow,
              t = o.slideCount;
            t > o.slideCount - i;
            t -= 1
          )
            (n = t - 1),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass("slick-cloned");
          for (t = 0; t < i + o.slideCount; t += 1)
            (n = t),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass("slick-cloned");
          o.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              e(this).attr("id", "");
            });
        }
      }),
      (t.prototype.interrupt = function (e) {
        var t = this;
        e || t.autoPlay(), (t.interrupted = e);
      }),
      (t.prototype.selectHandler = function (t) {
        var n = this,
          i = e(t.target).is(".slick-slide")
            ? e(t.target)
            : e(t.target).parents(".slick-slide"),
          o = parseInt(i.attr("data-slick-index"));
        if ((o || (o = 0), n.slideCount <= n.options.slidesToShow))
          return void n.slideHandler(o, !1, !0);
        n.slideHandler(o);
      }),
      (t.prototype.slideHandler = function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l = null,
          c = this;
        if (
          ((t = t || !1),
          !(
            (!0 === c.animating && !0 === c.options.waitForAnimate) ||
            (!0 === c.options.fade && c.currentSlide === e)
          ))
        ) {
          if (
            (!1 === t && c.asNavFor(e),
            (i = e),
            (l = c.getLeft(i)),
            (s = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
            !1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
          )
            return void (
              !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(s, function () {
                    c.postSlide(i);
                  })
                : c.postSlide(i))
            );
          if (
            !1 === c.options.infinite &&
            !0 === c.options.centerMode &&
            (e < 0 || e > c.slideCount - c.options.slidesToScroll)
          )
            return void (
              !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(s, function () {
                    c.postSlide(i);
                  })
                : c.postSlide(i))
            );
          if (
            (c.options.autoplay && clearInterval(c.autoPlayTimer),
            (o =
              i < 0
                ? c.slideCount % c.options.slidesToScroll != 0
                  ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                  : c.slideCount + i
                : i >= c.slideCount
                ? c.slideCount % c.options.slidesToScroll != 0
                  ? 0
                  : i - c.slideCount
                : i),
            (c.animating = !0),
            c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
            (r = c.currentSlide),
            (c.currentSlide = o),
            c.setSlideClasses(c.currentSlide),
            c.options.asNavFor &&
              ((a = c.getNavTarget()),
              (a = a.slick("getSlick")),
              a.slideCount <= a.options.slidesToShow &&
                a.setSlideClasses(c.currentSlide)),
            c.updateDots(),
            c.updateArrows(),
            !0 === c.options.fade)
          )
            return (
              !0 !== n
                ? (c.fadeSlideOut(r),
                  c.fadeSlide(o, function () {
                    c.postSlide(o);
                  }))
                : c.postSlide(o),
              void c.animateHeight()
            );
          !0 !== n
            ? c.animateSlide(l, function () {
                c.postSlide(o);
              })
            : c.postSlide(o);
        }
      }),
      (t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass("slick-loading");
      }),
      (t.prototype.swipeDirection = function () {
        var e,
          t,
          n,
          i,
          o = this;
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (n = Math.atan2(t, e)),
          (i = Math.round((180 * n) / Math.PI)),
          i < 0 && (i = 360 - Math.abs(i)),
          i <= 45 && i >= 0
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : i <= 360 && i >= 315
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : i >= 135 && i <= 225
            ? !1 === o.options.rtl
              ? "right"
              : "left"
            : !0 === o.options.verticalSwiping
            ? i >= 35 && i <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (t.prototype.swipeEnd = function (e) {
        var t,
          n,
          i = this;
        if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
          return (i.scrolling = !1), !1;
        if (
          ((i.interrupted = !1),
          (i.shouldClick = !(i.touchObject.swipeLength > 10)),
          void 0 === i.touchObject.curX)
        )
          return !1;
        if (
          (!0 === i.touchObject.edgeHit &&
            i.$slider.trigger("edge", [i, i.swipeDirection()]),
          i.touchObject.swipeLength >= i.touchObject.minSwipe)
        ) {
          switch ((n = i.swipeDirection())) {
            case "left":
            case "down":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                : i.currentSlide + i.getSlideCount()),
                (i.currentDirection = 0);
              break;
            case "right":
            case "up":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                : i.currentSlide - i.getSlideCount()),
                (i.currentDirection = 1);
          }
          "vertical" != n &&
            (i.slideHandler(t),
            (i.touchObject = {}),
            i.$slider.trigger("swipe", [i, n]));
        } else
          i.touchObject.startX !== i.touchObject.curX &&
            (i.slideHandler(i.currentSlide), (i.touchObject = {}));
      }),
      (t.prototype.swipeHandler = function (e) {
        var t = this;
        if (
          !(
            !1 === t.options.swipe ||
            ("ontouchend" in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping &&
              (t.touchObject.minSwipe =
                t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (t.prototype.swipeMove = function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        return (
          (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
            ((t = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
            (a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
            (a.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
            )),
            (s = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
            )),
            !a.options.verticalSwiping && !a.swiping && s > 4
              ? ((a.scrolling = !0), !1)
              : (!0 === a.options.verticalSwiping &&
                  (a.touchObject.swipeLength = s),
                (n = a.swipeDirection()),
                void 0 !== e.originalEvent &&
                  a.touchObject.swipeLength > 4 &&
                  ((a.swiping = !0), e.preventDefault()),
                (o =
                  (!1 === a.options.rtl ? 1 : -1) *
                  (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping &&
                  (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (i = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1),
                !1 === a.options.infinite &&
                  ((0 === a.currentSlide && "right" === n) ||
                    (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                  ((i = a.touchObject.swipeLength * a.options.edgeFriction),
                  (a.touchObject.edgeHit = !0)),
                !1 === a.options.vertical
                  ? (a.swipeLeft = t + i * o)
                  : (a.swipeLeft =
                      t + i * (a.$list.height() / a.listWidth) * o),
                !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
                !0 !== a.options.fade &&
                  !1 !== a.options.touchMove &&
                  (!0 === a.animating
                    ? ((a.swipeLeft = null), !1)
                    : void a.setCSS(a.swipeLeft))))
        );
      }),
      (t.prototype.swipeStart = function (e) {
        var t,
          n = this;
        if (
          ((n.interrupted = !0),
          1 !== n.touchObject.fingerCount ||
            n.slideCount <= n.options.slidesToShow)
        )
          return (n.touchObject = {}), !1;
        void 0 !== e.originalEvent &&
          void 0 !== e.originalEvent.touches &&
          (t = e.originalEvent.touches[0]),
          (n.touchObject.startX = n.touchObject.curX =
            void 0 !== t ? t.pageX : e.clientX),
          (n.touchObject.startY = n.touchObject.curY =
            void 0 !== t ? t.pageY : e.clientY),
          (n.dragging = !0);
      }),
      (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
        function () {
          var e = this;
          null !== e.$slidesCache &&
            (e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.appendTo(e.$slideTrack),
            e.reinit());
        }),
      (t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.htmlExpr.test(t.options.prevArrow) &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            t.htmlExpr.test(t.options.nextArrow) &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy();
      }),
      (t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            e.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === e.currentSlide
              ? (e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                !1 === e.options.centerMode
              ? (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - 1 &&
                !0 === e.options.centerMode &&
                (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots.find("li").removeClass("slick-active").end(),
          e.$dots
            .find("li")
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay &&
          (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
      }),
      (e.fn.slick = function () {
        var e,
          n,
          i = this,
          o = arguments[0],
          r = Array.prototype.slice.call(arguments, 1),
          s = i.length;
        for (e = 0; e < s; e++)
          if (
            ("object" == typeof o || void 0 === o
              ? (i[e].slick = new t(i[e], o))
              : (n = i[e].slick[o].apply(i[e].slick, r)),
            void 0 !== n)
          )
            return n;
        return i;
      });
  });
var VanillaTilt = (function () {
    "use strict";
    var e = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      },
      t = (function () {
        function t(n) {
          var i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if ((e(this, t), !(n instanceof Node)))
            throw (
              "Can't initialize VanillaTilt because " + n + " is not a Node."
            );
          (this.width = null),
            (this.height = null),
            (this.clientWidth = null),
            (this.clientHeight = null),
            (this.left = null),
            (this.top = null),
            (this.gammazero = null),
            (this.betazero = null),
            (this.lastgammazero = null),
            (this.lastbetazero = null),
            (this.transitionTimeout = null),
            (this.updateCall = null),
            (this.event = null),
            (this.updateBind = this.update.bind(this)),
            (this.resetBind = this.reset.bind(this)),
            (this.element = n),
            (this.settings = this.extendSettings(i)),
            (this.reverse = this.settings.reverse ? -1 : 1),
            (this.glare = t.isSettingTrue(this.settings.glare)),
            (this.glarePrerender = t.isSettingTrue(
              this.settings["glare-prerender"]
            )),
            (this.fullPageListening = t.isSettingTrue(
              this.settings["full-page-listening"]
            )),
            (this.gyroscope = t.isSettingTrue(this.settings.gyroscope)),
            (this.gyroscopeSamples = this.settings.gyroscopeSamples),
            (this.elementListener = this.getElementListener()),
            this.glare && this.prepareGlare(),
            this.fullPageListening && this.updateClientSize(),
            this.addEventListeners(),
            this.updateInitialPosition();
        }
        return (
          (t.isSettingTrue = function (e) {
            return "" === e || !0 === e || 1 === e;
          }),
          (t.prototype.getElementListener = function () {
            if (this.fullPageListening) return window.document;
            if ("string" == typeof this.settings["mouse-event-element"]) {
              var e = document.querySelector(
                this.settings["mouse-event-element"]
              );
              if (e) return e;
            }
            return this.settings["mouse-event-element"] instanceof Node
              ? this.settings["mouse-event-element"]
              : this.element;
          }),
          (t.prototype.addEventListeners = function () {
            (this.onMouseEnterBind = this.onMouseEnter.bind(this)),
              (this.onMouseMoveBind = this.onMouseMove.bind(this)),
              (this.onMouseLeaveBind = this.onMouseLeave.bind(this)),
              (this.onWindowResizeBind = this.onWindowResize.bind(this)),
              (this.onDeviceOrientationBind =
                this.onDeviceOrientation.bind(this)),
              this.elementListener.addEventListener(
                "mouseenter",
                this.onMouseEnterBind
              ),
              this.elementListener.addEventListener(
                "mouseleave",
                this.onMouseLeaveBind
              ),
              this.elementListener.addEventListener(
                "mousemove",
                this.onMouseMoveBind
              ),
              (this.glare || this.fullPageListening) &&
                window.addEventListener("resize", this.onWindowResizeBind),
              this.gyroscope &&
                window.addEventListener(
                  "deviceorientation",
                  this.onDeviceOrientationBind
                );
          }),
          (t.prototype.removeEventListeners = function () {
            this.elementListener.removeEventListener(
              "mouseenter",
              this.onMouseEnterBind
            ),
              this.elementListener.removeEventListener(
                "mouseleave",
                this.onMouseLeaveBind
              ),
              this.elementListener.removeEventListener(
                "mousemove",
                this.onMouseMoveBind
              ),
              this.gyroscope &&
                window.removeEventListener(
                  "deviceorientation",
                  this.onDeviceOrientationBind
                ),
              (this.glare || this.fullPageListening) &&
                window.removeEventListener("resize", this.onWindowResizeBind);
          }),
          (t.prototype.destroy = function () {
            clearTimeout(this.transitionTimeout),
              null !== this.updateCall && cancelAnimationFrame(this.updateCall),
              this.reset(),
              this.removeEventListeners(),
              (this.element.vanillaTilt = null),
              delete this.element.vanillaTilt,
              (this.element = null);
          }),
          (t.prototype.onDeviceOrientation = function (e) {
            if (null !== e.gamma && null !== e.beta) {
              this.updateElementPosition(),
                this.gyroscopeSamples > 0 &&
                  ((this.lastgammazero = this.gammazero),
                  (this.lastbetazero = this.betazero),
                  null === this.gammazero
                    ? ((this.gammazero = e.gamma), (this.betazero = e.beta))
                    : ((this.gammazero = (e.gamma + this.lastgammazero) / 2),
                      (this.betazero = (e.beta + this.lastbetazero) / 2)),
                  (this.gyroscopeSamples -= 1));
              var t =
                  this.settings.gyroscopeMaxAngleX -
                  this.settings.gyroscopeMinAngleX,
                n =
                  this.settings.gyroscopeMaxAngleY -
                  this.settings.gyroscopeMinAngleY,
                i = t / this.width,
                o = n / this.height,
                r =
                  e.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero),
                s = e.beta - (this.settings.gyroscopeMinAngleY + this.betazero),
                a = r / i,
                l = s / o;
              null !== this.updateCall && cancelAnimationFrame(this.updateCall),
                (this.event = {
                  clientX: a + this.left,
                  clientY: l + this.top,
                }),
                (this.updateCall = requestAnimationFrame(this.updateBind));
            }
          }),
          (t.prototype.onMouseEnter = function () {
            this.updateElementPosition(),
              (this.element.style.willChange = "transform"),
              this.setTransition();
          }),
          (t.prototype.onMouseMove = function (e) {
            null !== this.updateCall && cancelAnimationFrame(this.updateCall),
              (this.event = e),
              (this.updateCall = requestAnimationFrame(this.updateBind));
          }),
          (t.prototype.onMouseLeave = function () {
            this.setTransition(),
              this.settings.reset && requestAnimationFrame(this.resetBind);
          }),
          (t.prototype.reset = function () {
            (this.event = {
              clientX: this.left + this.width / 2,
              clientY: this.top + this.height / 2,
            }),
              this.element &&
                this.element.style &&
                (this.element.style.transform =
                  "perspective(" +
                  this.settings.perspective +
                  "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),
              this.resetGlare();
          }),
          (t.prototype.resetGlare = function () {
            this.glare &&
              ((this.glareElement.style.transform =
                "rotate(180deg) translate(-50%, -50%)"),
              (this.glareElement.style.opacity = "0"));
          }),
          (t.prototype.updateInitialPosition = function () {
            if (0 !== this.settings.startX || 0 !== this.settings.startY) {
              this.onMouseEnter(),
                this.fullPageListening
                  ? (this.event = {
                      clientX:
                        ((this.settings.startX + this.settings.max) /
                          (2 * this.settings.max)) *
                        this.clientWidth,
                      clientY:
                        ((this.settings.startY + this.settings.max) /
                          (2 * this.settings.max)) *
                        this.clientHeight,
                    })
                  : (this.event = {
                      clientX:
                        this.left +
                        ((this.settings.startX + this.settings.max) /
                          (2 * this.settings.max)) *
                          this.width,
                      clientY:
                        this.top +
                        ((this.settings.startY + this.settings.max) /
                          (2 * this.settings.max)) *
                          this.height,
                    });
              var e = this.settings.scale;
              (this.settings.scale = 1),
                this.update(),
                (this.settings.scale = e),
                this.resetGlare();
            }
          }),
          (t.prototype.getValues = function () {
            var e = void 0,
              t = void 0;
            return (
              this.fullPageListening
                ? ((e = this.event.clientX / this.clientWidth),
                  (t = this.event.clientY / this.clientHeight))
                : ((e = (this.event.clientX - this.left) / this.width),
                  (t = (this.event.clientY - this.top) / this.height)),
              (e = Math.min(Math.max(e, 0), 1)),
              (t = Math.min(Math.max(t, 0), 1)),
              {
                tiltX: (
                  this.reverse *
                  (this.settings.max - e * this.settings.max * 2)
                ).toFixed(2),
                tiltY: (
                  this.reverse *
                  (t * this.settings.max * 2 - this.settings.max)
                ).toFixed(2),
                percentageX: 100 * e,
                percentageY: 100 * t,
                angle:
                  Math.atan2(
                    this.event.clientX - (this.left + this.width / 2),
                    -(this.event.clientY - (this.top + this.height / 2))
                  ) *
                  (180 / Math.PI),
              }
            );
          }),
          (t.prototype.updateElementPosition = function () {
            var e = this.element.getBoundingClientRect();
            (this.width = this.element.offsetWidth),
              (this.height = this.element.offsetHeight),
              (this.left = e.left),
              (this.top = e.top);
          }),
          (t.prototype.update = function () {
            var e = this.getValues();
            (this.element.style.transform =
              "perspective(" +
              this.settings.perspective +
              "px) rotateX(" +
              ("x" === this.settings.axis ? 0 : e.tiltY) +
              "deg) rotateY(" +
              ("y" === this.settings.axis ? 0 : e.tiltX) +
              "deg) scale3d(" +
              this.settings.scale +
              ", " +
              this.settings.scale +
              ", " +
              this.settings.scale +
              ")"),
              this.glare &&
                ((this.glareElement.style.transform =
                  "rotate(" + e.angle + "deg) translate(-50%, -50%)"),
                (this.glareElement.style.opacity =
                  "" + (e.percentageY * this.settings["max-glare"]) / 100)),
              this.element.dispatchEvent(
                new CustomEvent("tiltChange", { detail: e })
              ),
              (this.updateCall = null);
          }),
          (t.prototype.prepareGlare = function () {
            if (!this.glarePrerender) {
              var e = document.createElement("div");
              e.classList.add("js-tilt-glare");
              var t = document.createElement("div");
              t.classList.add("js-tilt-glare-inner"),
                e.appendChild(t),
                this.element.appendChild(e);
            }
            (this.glareElementWrapper =
              this.element.querySelector(".js-tilt-glare")),
              (this.glareElement = this.element.querySelector(
                ".js-tilt-glare-inner"
              )),
              this.glarePrerender ||
                (Object.assign(this.glareElementWrapper.style, {
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  "pointer-events": "none",
                }),
                Object.assign(this.glareElement.style, {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  "pointer-events": "none",
                  "background-image":
                    "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                  width: 2 * this.element.offsetWidth + "px",
                  height: 2 * this.element.offsetWidth + "px",
                  transform: "rotate(180deg) translate(-50%, -50%)",
                  "transform-origin": "0% 0%",
                  opacity: "0",
                }));
          }),
          (t.prototype.updateGlareSize = function () {
            this.glare &&
              Object.assign(this.glareElement.style, {
                width: "" + 2 * this.element.offsetWidth,
                height: "" + 2 * this.element.offsetWidth,
              });
          }),
          (t.prototype.updateClientSize = function () {
            (this.clientWidth =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth),
              (this.clientHeight =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight);
          }),
          (t.prototype.onWindowResize = function () {
            this.updateGlareSize(), this.updateClientSize();
          }),
          (t.prototype.setTransition = function () {
            var e = this;
            clearTimeout(this.transitionTimeout),
              (this.element.style.transition =
                this.settings.speed + "ms " + this.settings.easing),
              this.glare &&
                (this.glareElement.style.transition =
                  "opacity " +
                  this.settings.speed +
                  "ms " +
                  this.settings.easing),
              (this.transitionTimeout = setTimeout(function () {
                (e.element.style.transition = ""),
                  e.glare && (e.glareElement.style.transition = "");
              }, this.settings.speed));
          }),
          (t.prototype.extendSettings = function (e) {
            var t = {
                reverse: !1,
                max: 15,
                startX: 0,
                startY: 0,
                perspective: 1e3,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                scale: 1,
                speed: 300,
                transition: !0,
                axis: null,
                glare: !1,
                "max-glare": 1,
                "glare-prerender": !1,
                "full-page-listening": !1,
                "mouse-event-element": null,
                reset: !0,
                gyroscope: !0,
                gyroscopeMinAngleX: -45,
                gyroscopeMaxAngleX: 45,
                gyroscopeMinAngleY: -45,
                gyroscopeMaxAngleY: 45,
                gyroscopeSamples: 10,
              },
              n = {};
            for (var i in t)
              if (i in e) n[i] = e[i];
              else if (this.element.hasAttribute("data-tilt-" + i)) {
                var o = this.element.getAttribute("data-tilt-" + i);
                try {
                  n[i] = JSON.parse(o);
                } catch (e) {
                  n[i] = o;
                }
              } else n[i] = t[i];
            return n;
          }),
          (t.init = function (e, n) {
            e instanceof Node && (e = [e]),
              e instanceof NodeList && (e = [].slice.call(e)),
              e instanceof Array &&
                e.forEach(function (e) {
                  "vanillaTilt" in e || (e.vanillaTilt = new t(e, n));
                });
          }),
          t
        );
      })();
    return (
      "undefined" != typeof document &&
        ((window.VanillaTilt = t),
        t.init(document.querySelectorAll("[data-tilt]"))),
      t
    );
  })(),
  $container = $(".step"),
  $p = $container.find("p"),
  currentIndex = 0;
$p.on("click", function (e) {
  var t = $(e.currentTarget),
    n = $p.index(t);
  console.log(n),
    n > currentIndex
      ? $container.addClass("forward")
      : $container.removeClass("forward"),
    (currentIndex = n),
    $container.attr("data-step", n),
    0 == $container.attr("data-step")
      ? $(".vizard-content #content-item-1").addClass("active")
      : 1 == $container.attr("data-step")
      ? $(".vizard-content #content-item-2").addClass("active")
      : 2 == $container.attr("data-step")
      ? $(".vizard-content #content-item-3").addClass("active")
      : 3 == $container.attr("data-step")
      ? $(".vizard-content #content-item-4").addClass("active")
      : 4 == $container.attr("data-step") &&
        $(".vizard-content #content-item-5").addClass("active");
}),
  $("#menu-toggle").on("click", function () {
    $(".mobile-menu").addClass("active");
  }),
  $("#close-toggle").on("click", function () {
    $(".mobile-menu").removeClass("active");
  }),
  $(".right-block").on("click", function () {
    $(".mobile-menu").removeClass("active");
  }),
  $(".arrow-rights").click(function () {
    event.preventDefault(),
      $(".vizard-content").animate({ scrollLeft: "+=300px" }, "slow");
  }),
  $(".arrow-lefts").click(function () {
    event.preventDefault(),
      $(".vizard-content").animate({ scrollLeft: "-=300px" }, "slow");
  }),
  $(".more-plan-btn").on("click", function () {
    $(".more-plan").toggleClass("active");
  }),
  $(".more-btn").on("click", function () {
    $(".more-text").toggleClass("active");
  }),
  VanillaTilt.init(document.querySelectorAll(".hover-effect"), {
    max: 20,
    speed: 10,
  });











  function Ant(crslId) {

    let id = document.getElementById(crslId);
    if(id) {
      this.crslRoot = id
    }
    else {
      this.crslRoot = document.querySelector('.ant-carousel')
    };
  
    // Carousel objects
    this.crslList = this.crslRoot.querySelector('.ant-carousel-list');
    this.crslElements = this.crslList.querySelectorAll('.ant-carousel-element');
    this.crslElemFirst = this.crslList.querySelector('.ant-carousel-element');
    this.leftArrow = this.crslRoot.querySelector('div.ant-carousel-arrow-left');
    this.rightArrow = this.crslRoot.querySelector('div.ant-carousel-arrow-right');
    this.indicatorDots = this.crslRoot.querySelector('div.ant-carousel-dots');
  
    // Initialization
    this.options = Ant.defaults;
    Ant.initialize(this)
  };
  
  Ant.defaults = {
  
    // Default options for the carousel
    elemVisible: 1, // Кол-во отображаемых элементов в карусели
    loop: true,     // Бесконечное зацикливание карусели 
    auto: true,     // Автоматическая прокрутка
    interval: 3000, // Интервал между прокруткой элементов (мс)
    speed: 200,     // Скорость анимации (мс)
    touch: true,    // Прокрутка  прикосновением
    arrows: true,   // Прокрутка стрелками
    dots: false      // Индикаторные точки
  };

  
  
  Ant.prototype.elemPrev = function(num) {
    num = num || 1;
  
    if(this.options.dots) this.dotOn(this.currentElement);
    this.currentElement -= num;
    if(this.currentElement < 0) this.currentElement = this.dotsVisible-1;
    if(this.options.dots) this.dotOff(this.currentElement);
  
    if(!this.options.loop) {  // сдвиг вправо без цикла
      this.currentOffset += this.elemWidth*num;
      this.crslList.style.marginLeft = this.currentOffset + 'px';
      if(this.currentElement == 0) {
        this.leftArrow.style.display = 'none'; this.touchPrev = false
      }
      this.rightArrow.style.display = 'block'; this.touchNext = true
    }
    else {                    // сдвиг вправо с циклом
      let elm, buf, this$ = this;
      for(let i=0; i<num; i++) {
        elm = this.crslList.lastElementChild;
        buf = elm.cloneNode(true);
        this.crslList.insertBefore(buf, this.crslList.firstElementChild);
        this.crslList.removeChild(elm)
      };
      this.crslList.style.marginLeft = '-' + this.elemWidth*num + 'px';
      let compStyle = window.getComputedStyle(this.crslList).marginLeft;
      this.crslList.style.cssText = 'transition:margin '+this.options.speed+'ms ease;';
      this.crslList.style.marginLeft = '0px';
      setTimeout(function() {
        this$.crslList.style.cssText = 'transition:none;'
      }, this.options.speed)
    }
  };
  
  Ant.prototype.elemNext = function(num) {
    num = num || 1;
  
    if(this.options.dots) this.dotOn(this.currentElement);
    this.currentElement += num; if(this.currentElement >= this.dotsVisible) this.currentElement = 0;
    if(this.options.dots) this.dotOff(this.currentElement);
  
    if(!this.options.loop) {  // сдвиг влево без цикла
      this.currentOffset -= this.elemWidth*num;
      this.crslList.style.marginLeft = this.currentOffset + 'px';
      if(this.currentElement == this.dotsVisible-1) {
        this.rightArrow.style.display = 'none'; this.touchNext = false
      }
      this.leftArrow.style.display = 'block'; this.touchPrev = true
    }
    else {                    // сдвиг влево с циклом
      let elm, buf, this$ = this;
      this.crslList.style.cssText = 'transition:margin '+this.options.speed+'ms ease;';
      this.crslList.style.marginLeft = '-' + this.elemWidth*num + 'px';
      setTimeout(function() {
        this$.crslList.style.cssText = 'transition:none;';
        for(let i=0; i<num; i++) {
          elm = this$.crslList.firstElementChild;
          buf = elm.cloneNode(true); this$.crslList.appendChild(buf);
          this$.crslList.removeChild(elm)
        };
        this$.crslList.style.marginLeft = '0px'
      }, this.options.speed)
    }
  };
  
  Ant.prototype.dotOn = function(num) {
    this.indicatorDotsAll[num].style.cssText = 'background-color:#BBB; cursor:pointer;'
  };
  
  Ant.prototype.dotOff = function(num) {
    this.indicatorDotsAll[num].style.cssText = 'background-color:#556; cursor:default;'
  };
  
  Ant.initialize = function(that) {
  
    // Constants
    that.elemCount = that.crslElements.length; // Количество элементов
    that.dotsVisible = that.elemCount;         // Число видимых точек
    let elemStyle = window.getComputedStyle(that.crslElemFirst);
    that.elemWidth = that.crslElemFirst.offsetWidth +  // Ширина элемента (без margin)
      parseInt(elemStyle.marginLeft) + parseInt(elemStyle.marginRight);
  
    // Variables
    that.currentElement = 0; that.currentOffset = 0;
    that.touchPrev = true; that.touchNext = true;
    let xTouch, yTouch, xDiff, yDiff, dragTime;
    let bgTime = getTime();
  
    // Functions
    function getTime() {
      return new Date().getTime();
    };
    function setAutoScroll() {
      that.autoScroll = setInterval(function() {
        let fnTime = getTime();
        if(fnTime - bgTime + 10 > that.options.interval) {
          bgTime = fnTime; that.elemNext()
        }
      }, that.options.interval)
    };
  
    // Start initialization
    if(that.elemCount <= that.options.elemVisible) {   // Отключить навигацию
      that.options.auto = false; that.options.touch = false;
      that.options.arrows = false; that.options.dots = false;
      that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
    };
  
    if(!that.options.loop) {       // если нет цикла - уточнить количество точек
      that.dotsVisible = that.elemCount - that.options.elemVisible + 1;
      that.leftArrow.style.display = 'none';  // отключить левую стрелку
      that.touchPrev = false;    // отключить прокрутку прикосновением вправо
      that.options.auto = false; // отключить автопркрутку
    }
    else if(that.options.auto) {   // инициализация автопрокруки
      setAutoScroll();
      // Остановка прокрутки при наведении мыши на элемент
      that.crslList.addEventListener('mouseenter', function() {clearInterval(that.autoScroll)}, false);
      that.crslList.addEventListener('mouseleave', setAutoScroll, false)
    };
  
    if(that.options.touch) {   // инициализация прокрутки прикосновением
      that.crslList.addEventListener('touchstart', function(e) {
        xTouch = parseInt(e.touches[0].clientX);
        yTouch = parseInt(e.touches[0].clientY);
        dragTime = getTime()
      }, false);
      that.crslList.addEventListener('touchmove', function(e) {
        if(!xTouch || !yTouch) return;
        xDiff = xTouch - parseInt(e.touches[0].clientX);
        yDiff = yTouch - parseInt(e.touches[0].clientY);
        if(Math.abs(xDiff) > 15 && Math.abs(xDiff) > Math.abs(yDiff) && getTime() - dragTime < 75) {
          if(that.touchNext && xDiff > 0) {
            bgTime = getTime(); that.elemNext()
          }
          else if(that.touchPrev && xDiff < 0) {
            bgTime = getTime(); that.elemPrev()
          }
        }
      }, false)
    };
  
    if(that.options.arrows) {  // инициализация стрелок
      if(!that.options.loop) that.crslList.style.cssText = 'transition:margin '+that.options.speed+'ms ease;';
      that.leftArrow.addEventListener('click', function() {
        let fnTime = getTime();
        if(fnTime - bgTime > that.options.speed) {
          bgTime = fnTime; that.elemPrev()
        }
      }, false);
      that.rightArrow.addEventListener('click', function() {
        let fnTime = getTime();
        if(fnTime - bgTime > that.options.speed) {
          bgTime = fnTime; that.elemNext()
        }
      }, false)
    }
    else {
      that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
    };
  
    if(that.options.dots) {  // инициализация индикаторных точек
      let sum = '', diffNum;
      for(let i=0; i<that.dotsVisible; i++) {
        sum += '<span class="ant-dot"></span>'
      };
      that.indicatorDots.innerHTML = sum;
      that.indicatorDotsAll = that.crslRoot.querySelectorAll('span.ant-dot');
      // Назначаем точкам обработчик события 'click'
      for(let n=0; n<that.dotsVisible; n++) {
        that.indicatorDotsAll[n].addEventListener('click', function() {
          diffNum = Math.abs(n - that.currentElement);
          if(n < that.currentElement) {
            bgTime = getTime(); that.elemPrev(diffNum)
          }
          else if(n > that.currentElement) {
            bgTime = getTime(); that.elemNext(diffNum)
          }
          // Если n == that.currentElement ничего не делаем
        }, false)
      };
      that.dotOff(0);  // точка[0] выключена, остальные включены
      for(let i=1; i<that.dotsVisible; i++) {
        that.dotOn(i)
      }
    }
  };
  
  new Ant();


  
  
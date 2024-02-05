// @fancyapps/ui/Fancybox v4.0.0-alpha.4
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).window = t.window || {})
}(this, (function(t) {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function o(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && r(t, e)
    }

    function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function r(t, e) {
        return (r = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function l(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function c(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? l(t) : e
    }

    function h(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, n = a(t);
            if (e) {
                var o = a(this).constructor;
                i = Reflect.construct(n, arguments, o)
            } else i = n.apply(this, arguments);
            return c(this, i)
        }
    }

    function d(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null == i) return;
            var n, o, s = [],
                a = !0,
                r = !1;
            try {
                for (i = i.call(t); !(a = (n = i.next()).done) && (s.push(n.value), !e || s.length !== e); a = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    a || null == i.return || i.return()
                } finally {
                    if (r) throw o
                }
            }
            return s
        }(t, e) || f(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function u(t) {
        return function(t) {
            if (Array.isArray(t)) return v(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || f(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function f(t, e) {
        if (t) {
            if ("string" == typeof t) return v(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? v(t, e) : void 0
        }
    }

    function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    function p(t, e) {
        var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!i) {
            if (Array.isArray(t) || (i = f(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var n = 0,
                    o = function() {};
                return {
                    s: o,
                    n: function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var s, a = !0,
            r = !1;
        return {
            s: function() {
                i = i.call(t)
            },
            n: function() {
                var t = i.next();
                return a = t.done, t
            },
            e: function(t) {
                r = !0, s = t
            },
            f: function() {
                try {
                    a || null == i.return || i.return()
                } finally {
                    if (r) throw s
                }
            }
        }
    }
    var g = function(t) {
            return "object" === e(t) && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t)
        },
        m = function t() {
            for (var i = !1, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
            "boolean" == typeof o[0] && (i = o.shift());
            var a = o[0];
            if (!a || "object" !== e(a)) throw new Error("extendee must be an object");
            for (var r = o.slice(1), l = r.length, c = 0; c < l; c++) {
                var h = r[c];
                for (var d in h)
                    if (h.hasOwnProperty(d)) {
                        var u = h[d];
                        if (i && (Array.isArray(u) || g(u))) {
                            var f = Array.isArray(u) ? [] : {};
                            a[d] = t(!0, a.hasOwnProperty(d) ? a[d] : f, u)
                        } else a[d] = u
                    }
            }
            return a
        },
        y = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
            return t = parseFloat(t) || 0, Math.round((t + Number.EPSILON) * e) / e
        },
        b = "undefined" != typeof window && window.ResizeObserver || function() {
            function t(e) {
                i(this, t), this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = e
            }
            return o(t, [{
                key: "observe",
                value: function(t) {
                    if (!this.observables.some((function(e) {
                            return e.el === t
                        }))) {
                        var e = {
                            el: t,
                            size: {
                                height: t.clientHeight,
                                width: t.clientWidth
                            }
                        };
                        this.observables.push(e)
                    }
                }
            }, {
                key: "unobserve",
                value: function(t) {
                    this.observables = this.observables.filter((function(e) {
                        return e.el !== t
                    }))
                }
            }, {
                key: "disconnect",
                value: function() {
                    this.observables = []
                }
            }, {
                key: "check",
                value: function() {
                    var t = this.observables.filter((function(t) {
                        var e = t.el.clientHeight,
                            i = t.el.clientWidth;
                        if (t.size.height !== e || t.size.width !== i) return t.size.height = e, t.size.width = i, !0
                    })).map((function(t) {
                        return t.el
                    }));
                    t.length > 0 && this.callback(t), window.requestAnimationFrame(this.boundCheck)
                }
            }]), t
        }(),
        w = function t(e) {
            return !(!e || e.classList.contains("carousel__track") || e === document.body) && (function(t) {
                var e = window.getComputedStyle(t)["overflow-y"],
                    i = window.getComputedStyle(t)["overflow-x"],
                    n = ("scroll" === e || "auto" === e) && Math.abs(t.scrollHeight - t.clientHeight) > 1,
                    o = ("scroll" === i || "auto" === i) && Math.abs(t.scrollWidth - t.clientWidth) > 1;
                return n || o
            }(e) ? e : t(e.parentNode))
        },
        x = function(t) {
            var e = 0;
            return t && (e = t instanceof SVGElement ? Math.min(t.getClientRects()[0].height, t.height.baseVal.value) : Math.max(t.offsetHeight, t.scrollHeight)), e
        },
        k = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, t), this.options = m(!0, {}, e), this.plugins = [], this.events = {};
                for (var n = 0, o = ["on", "once"]; n < o.length; n++)
                    for (var s = o[n], a = 0, r = Object.entries(this.options[s] || {}); a < r.length; a++) {
                        var l = r[a];
                        this[s].apply(this, u(l))
                    }
            }
            return o(t, [{
                key: "option",
                value: function(t, e) {
                    t = String(t);
                    var i, n, o = (i = t, n = this.options, i.split(".").reduce((function(t, e) {
                        return t[e]
                    }), n));
                    return "function" == typeof o && (o = o.call(this, t)), void 0 === o ? e : o
                }
            }, {
                key: "localize",
                value: function(t) {
                    var e = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (function(t, n, o) {
                        var s = !1;
                        if (!(s = o ? e.option("".concat(n[0] + n.toLowerCase().substring(1), ".l10n.").concat(o)) : e.option("l10n.".concat(n)))) return n;
                        for (var a = 0; a < i.length; a++) s = s.split(i[a][0]).join(i[a][1]);
                        return s
                    }))
                }
            }, {
                key: "on",
                value: function(t, e) {
                    var i = this;
                    if (g(t)) {
                        for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                            var s = o[n];
                            this.on.apply(this, u(s))
                        }
                        return this
                    }
                    return String(t).split(" ").forEach((function(t) {
                        var n = i.events[t] = i.events[t] || []; - 1 == n.indexOf(e) && n.push(e)
                    })), this
                }
            }, {
                key: "once",
                value: function(t, e) {
                    var i = this;
                    if (g(t)) {
                        for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                            var s = o[n];
                            this.once.apply(this, u(s))
                        }
                        return this
                    }
                    return String(t).split(" ").forEach((function(t) {
                        var n = function n() {
                            i.off(t, n);
                            for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++) s[a] = arguments[a];
                            e.call.apply(e, [i, i].concat(s))
                        };
                        n._ = e, i.on(t, n)
                    })), this
                }
            }, {
                key: "off",
                value: function(t, e) {
                    var i = this;
                    if (!g(t)) return t.split(" ").forEach((function(t) {
                        var n = i.events[t];
                        if (!n || !n.length) return i;
                        for (var o = -1, s = 0, a = n.length; s < a; s++) {
                            var r = n[s];
                            if (r && (r === e || r._ === e)) {
                                o = s;
                                break
                            }
                        } - 1 != o && n.splice(o, 1)
                    })), this;
                    for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                        var s = o[n];
                        this.off.apply(this, u(s))
                    }
                }
            }, {
                key: "trigger",
                value: function(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                    var o, s = p(u(this.events[t] || []).slice());
                    try {
                        for (s.s(); !(o = s.n()).done;) {
                            var a = o.value;
                            if (a && !1 === a.call.apply(a, [this, this].concat(i))) return !1
                        }
                    } catch (t) {
                        s.e(t)
                    } finally {
                        s.f()
                    }
                    var r, l = p(u(this.events["*"] || []).slice());
                    try {
                        for (l.s(); !(r = l.n()).done;) {
                            var c = r.value;
                            if (c && !1 === c.call.apply(c, [this, t, this].concat(i))) return !1
                        }
                    } catch (t) {
                        l.e(t)
                    } finally {
                        l.f()
                    }
                    return !0
                }
            }, {
                key: "attachPlugins",
                value: function(t) {
                    for (var e = {}, i = 0, n = Object.entries(t || {}); i < n.length; i++) {
                        var o = d(n[i], 2),
                            s = o[0],
                            a = o[1];
                        !1 !== this.options[s] && (this.options[s] = m({}, a.defaults || {}, this.options[s]), e[s] = new a(this))
                    }
                    for (var r = 0, l = Object.entries(e); r < l.length; r++) {
                        var c = d(l[r], 2);
                        c[0], c[1].attach(this)
                    }
                    return this.plugins = Object.assign({}, this.plugins, e), this
                }
            }, {
                key: "detachPlugins",
                value: function() {
                    for (var t in this.plugins) {
                        var e = void 0;
                        (e = this.plugins[t]) && "function" == typeof e.detach && e.detach(this)
                    }
                    return this.plugins = {}, this
                }
            }]), t
        }(),
        $ = {
            panOnlyZoomed: !1,
            lockAxis: !1,
            friction: .72,
            decelFriction: .92,
            zoomFriction: .72,
            bounceForce: .1,
            baseScale: 1,
            minScale: 1,
            maxScale: 2,
            step: .5,
            zoomInCentered: !0,
            pinchToZoom: !0,
            textSelection: !0,
            click: "toggleZoom",
            clickDelay: 250,
            doubleClick: !1,
            wheel: "zoom",
            wheelFactor: 30,
            wheelLimit: 3,
            touch: !0,
            draggableClass: "is-draggable",
            draggingClass: "is-dragging"
        },
        C = function(t) {
            s(n, t);
            var e = h(n);

            function n(t) {
                var o, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (i(this, n), s = m(!0, {}, $, s), o = e.call(this, s), !(t instanceof HTMLElement)) throw new Error("Viewport not found");
                o.state = "init", o.$viewport = t;
                for (var a = 0, r = ["onPointerDown", "onPointerMove", "onPointerUp", "onWheel", "onClick"]; a < r.length; a++) {
                    var c = r[a];
                    o[c] = o[c].bind(l(o))
                }
                if (o.$content = o.option("content"), o.$content || (o.$content = o.$viewport.querySelector(".panzoom__content")), !o.$content) throw new Error("Content not found");
                if (!1 === o.option("textSelection") && o.$viewport.classList.add("not-selectable"), o.resetValues(), o.attachPlugins(n.Plugins), o.trigger("init"), o.handleContent(), o.attachEvents(), o.trigger("ready"), "init" === o.state) {
                    var h = o.option("baseScale");
                    1 === h ? (o.state = "ready", o.handleCursor()) : o.panTo({
                        scale: h,
                        friction: 0
                    })
                }
                return o
            }
            return o(n, [{
                key: "handleContent",
                value: function() {
                    var t = this;
                    if (this.$content instanceof HTMLImageElement) {
                        var e = function() {
                            var e = t.$content.naturalWidth;
                            t.maxScale = t.option("maxScale"), t.options.maxScale = function() {
                                var t = this.contentDim.width;
                                return e > 0 && t > 0 ? e / t * this.maxScale : this.maxScale
                            }, t.updateMetrics(), t.trigger(e > 0 ? "load" : "error")
                        };
                        !0 !== this.$content.complete ? (this.$content.onload = function() {
                            return e()
                        }, this.$content.onerror = function() {
                            return e()
                        }) : e()
                    } else this.updateMetrics()
                }
            }, {
                key: "resetValues",
                value: function() {
                    this.viewportDim = {
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    }, this.contentDim = {
                        width: 0,
                        height: 0
                    }, this.friction = this.option("friction"), this.current = {
                        x: 0,
                        y: 0,
                        scale: 1
                    }, this.velocity = {
                        x: 0,
                        y: 0,
                        scale: 0
                    }, this.pan = {
                        x: 0,
                        y: 0,
                        scale: 1
                    }, this.drag = {
                        startTime: null,
                        firstPosition: null,
                        startPosition: null,
                        startPoint: null,
                        startDistance: null,
                        endPosition: null,
                        endPoint: null,
                        distance: 0,
                        distanceX: 0,
                        distanceY: 0,
                        elapsedTime: 0
                    }, this.lockAxis = null, this.pendingAnimateUpdate = null, this.pendingResizeUpdate = null, this.pointers = []
                }
            }, {
                key: "updateMetrics",
                value: function() {
                    var t, e, i = this.$viewport.getBoundingClientRect(),
                        n = i.top,
                        o = i.left,
                        s = i.width,
                        a = i.height,
                        r = window.getComputedStyle(this.$viewport);
                    s -= parseFloat(r.paddingLeft) + parseFloat(r.paddingRight), a -= parseFloat(r.paddingTop) + parseFloat(r.paddingBottom), this.viewportDim = {
                        top: n,
                        left: o,
                        width: s,
                        height: a
                    }, this.contentDim = {
                        width: this.option("width", (t = this.$content, e = 0, t && (e = t instanceof SVGElement ? Math.min(t.getClientRects()[0].width, t.width.baseVal.value) : Math.max(t.offsetWidth, t.scrollWidth)), e)),
                        height: this.option("hidth", x(this.$content))
                    }, this.trigger("updateMetrics"), this.updateBounds()
                }
            }, {
                key: "updateBounds",
                value: function(t) {
                    var e = {
                            from: 0,
                            to: 0
                        },
                        i = {
                            from: 0,
                            to: 0
                        };
                    if (t || (t = this.velocity.scale ? this.pan.scale : this.current.scale), t < 1) return [e, i];
                    var n = this.contentDim,
                        o = this.viewportDim,
                        s = n.width * t,
                        a = n.height * t;
                    return e.to = y(.5 * (s - n.width)), n.width > o.width ? e.from = y(e.to + o.width - s) : e.from = y(-1 * e.to), i.to = y(.5 * (a - n.height)), n.height > o.height ? i.from = y(i.to + o.height - a) : i.from = y(-1 * i.to), this.boundX = e, this.boundY = i, this.trigger("updateBounds", t), [this.boundX, this.boundY]
                }
            }, {
                key: "zoomIn",
                value: function(t) {
                    this.zoomTo(this.current.scale + (t || this.option("step")))
                }
            }, {
                key: "zoomOut",
                value: function(t) {
                    this.zoomTo(this.current.scale - (t || this.option("step")))
                }
            }, {
                key: "toggleZoom",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = this.option("maxScale"),
                        i = this.option("baseScale");
                    this.zoomTo(this.current.scale > i + .5 * (e - i) ? i : e, t)
                }
            }, {
                key: "zoomTo",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = e.x,
                        n = void 0 === i ? null : i,
                        o = e.y,
                        s = void 0 === o ? null : o,
                        a = e.friction,
                        r = void 0 === a ? this.option("zoomFriction") : a;
                    t || (t = this.option("baseScale")), t = Math.max(Math.min(t, this.option("maxScale")), this.option("minScale"));
                    var l = this.contentDim.width,
                        c = this.contentDim.height,
                        h = l * this.current.scale,
                        d = c * this.current.scale,
                        u = l * t,
                        f = c * t;
                    null === n && (n = .5 * h), null === s && (s = .5 * d), !1 === this.option("zoomInCentered") && (n < .5 * h && (n = h), n > h && (n = 0), s < 0 && (s = d), s > d && (s = 0));
                    var v = h > 0 ? n / h : 0,
                        p = d > 0 ? s / d : 0,
                        g = (u - h) * (v - .5),
                        m = (f - d) * (p - .5);
                    Math.abs(g) < 1 && (g = 0), Math.abs(m) < 1 && (m = 0), n = this.current.x - g, s = this.current.y - m, this.panTo({
                        x: n,
                        y: s,
                        scale: t,
                        friction: r
                    })
                }
            }, {
                key: "panTo",
                value: function(t) {
                    var e = t.x,
                        i = void 0 === e ? 0 : e,
                        n = t.y,
                        o = void 0 === n ? 0 : n,
                        s = t.scale,
                        a = void 0 === s ? this.current.scale : s,
                        r = t.friction,
                        l = void 0 === r ? this.option("friction") : r,
                        c = t.ignoreBounds,
                        h = void 0 !== c && c;
                    if (l || this.stopMoving(), !0 !== h) {
                        var u = d(this.updateBounds(a), 2),
                            f = u[0],
                            v = u[1];
                        f && (i = Math.max(Math.min(i, f.to), f.from)), v && (o = Math.max(Math.min(o, v.to), v.from))
                    }
                    return l > 0 && (Math.abs(i - this.current.x) > .1 || Math.abs(o - this.current.y) > .1 || Math.abs(a - this.current.scale) > .1) ? (this.state = "panning", this.friction = l, this.pan = {
                        x: i,
                        y: o,
                        scale: a
                    }, this.velocity = {
                        x: (1 / this.friction - 1) * (i - this.current.x),
                        y: (1 / this.friction - 1) * (o - this.current.y),
                        scale: (1 / this.friction - 1) * (a - this.current.scale)
                    }, this.animate(), this) : (this.pendingAnimateUpdate && (cancelAnimationFrame(this.pendingAnimateUpdate), this.pendingAnimateUpdate = null), this.state = "ready", this.stopMoving(), this.current = {
                        x: i,
                        y: o,
                        scale: a
                    }, this.transform(), this.handleCursor(), this.trigger("afterAnimate", !0), this)
                }
            }, {
                key: "animate",
                value: function() {
                    var t = this;
                    if (!this.pendingAnimateUpdate) {
                        if (this.applyBoundForce(), this.applyDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.current.x += this.velocity.x, this.current.y += this.velocity.y, this.current.scale += this.velocity.scale, "dragging" == this.state || "pointerdown" == this.state || Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05) return this.transform(), void(this.pendingAnimateUpdate = requestAnimationFrame((function() {
                            t.pendingAnimateUpdate = null, t.animate()
                        })));
                        this.current.x = y(this.current.x + this.velocity.x / (1 / this.friction - 1)), this.current.y = y(this.current.y + this.velocity.y / (1 / this.friction - 1)), Math.abs(this.current.x) < .5 && (this.current.x = 0), Math.abs(this.current.y) < .5 && (this.current.y = 0), this.current.scale = y(this.current.scale + this.velocity.scale / (1 / this.friction - 1), 1e4), Math.abs(this.current.scale - 1) < .01 && (this.current.scale = 1), this.state = "ready", this.stopMoving(), this.transform(), this.handleCursor(), this.trigger("afterAnimate")
                    }
                }
            }, {
                key: "handleCursor",
                value: function() {
                    var t = this.option("draggableClass");
                    t && this.option("touch") && (this.contentDim.width <= this.viewportDim.width && 1 == this.option("panOnlyZoomed") && this.current.scale <= this.option("baseScale") ? this.$viewport.classList.remove(t) : this.$viewport.classList.add(t))
                }
            }, {
                key: "isMoved",
                value: function() {
                    return 0 !== this.current.x || 0 !== this.current.y || 1 !== this.current.scale || this.velocity.x > 0 || this.velocity.y > 0 || this.velocity.scale > 0
                }
            }, {
                key: "stopMoving",
                value: function() {
                    this.velocity = {
                        x: 0,
                        y: 0,
                        scale: 0
                    }
                }
            }, {
                key: "transform",
                value: function() {
                    this.trigger("beforeTransform");
                    var t = y(this.current.x, 100),
                        e = y(this.current.y, 100),
                        i = y(this.current.scale, 1e4);
                    Math.abs(t) <= .1 && Math.abs(e) <= .1 && Math.abs(i - 1) <= .1 ? this.$content.style.transform = "" : this.$content.style.transform = "translate(".concat(t, "px, ").concat(e, "px) scale(").concat(i, ")"), this.trigger("afterTransform")
                }
            }, {
                key: "applyBoundForce",
                value: function() {
                    if ("decel" === this.state) {
                        var t, e, i, n, o = {
                                x: 0,
                                y: 0
                            },
                            s = this.option("bounceForce"),
                            a = this.boundX,
                            r = this.boundY;
                        if (a && (t = this.current.x < a.from, e = this.current.x > a.to), r && (i = this.current.y < r.from, n = this.current.y > r.to), t || e) {
                            var l = (t ? a.from : a.to) - this.current.x,
                                c = l * s,
                                h = this.current.x + (this.velocity.x + c) / (1 / this.friction - 1);
                            t && h < a.from || e && h > a.to || (c = l * s - this.velocity.x), o.x = c
                        }
                        if (i || n) {
                            var d = (i ? r.from : r.to) - this.current.y,
                                u = d * s,
                                f = this.current.y + (this.velocity.y + u) / (1 / this.friction - 1);
                            i && f < r.from || n && f > r.to || (u = d * s - this.velocity.y), o.y = u
                        }
                        this.velocity.x += o.x, this.velocity.y += o.y
                    }
                }
            }, {
                key: "applyDragForce",
                value: function() {
                    "dragging" === this.state && (this.velocity = {
                        x: (1 / this.friction - 1) * (this.drag.endPosition.x - this.current.x),
                        y: (1 / this.friction - 1) * (this.drag.endPosition.y - this.current.y),
                        scale: (1 / this.friction - 1) * (this.drag.endPosition.scale - this.current.scale)
                    })
                }
            }, {
                key: "attachEvents",
                value: function() {
                    var t = this,
                        e = this.$viewport;
                    this.resizeObserver = this.resizeObserver || new b((function(e) {
                        t.pendingResizeUpdate = t.pendingResizeUpdate || setTimeout((function() {
                            var i = e && e[0].contentRect;
                            !i && t.$viewport && (i = t.$viewport.getBoundingClientRect()), i && (Math.abs(i.width - t.viewportDim.width) > 1 || Math.abs(i.height - t.viewportDim.height) > 1) && t.updateMetrics(), t.pendingResizeUpdate = null
                        }), t.option("updateRate", 250))
                    })), this.resizeObserver.observe(e), e.addEventListener("click", this.onClick, {
                        passive: !1
                    }), e.addEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.option("touch") && (window.PointerEvent ? (e.addEventListener("pointerdown", this.onPointerDown, {
                        passive: !1
                    }), e.addEventListener("pointermove", this.onPointerMove, {
                        passive: !1
                    }), e.addEventListener("pointerup", this.onPointerUp), e.addEventListener("pointercancel", this.onPointerUp)) : (e.addEventListener("touchstart", this.onPointerDown, {
                        passive: !1
                    }), e.addEventListener("touchmove", this.onPointerMove, {
                        passive: !1
                    }), e.addEventListener("touchend", this.onPointerUp), e.addEventListener("touchcancel", this.onPointerUp), e.addEventListener("mousedown", this.onPointerDown)))
                }
            }, {
                key: "detachEvents",
                value: function() {
                    this.resizeObserver && this.resizeObserver.disconnect(), this.resizeObserver = null, this.pendingResizeUpdate && (clearTimeout(this.pendingResizeUpdate), this.pendingResizeUpdate = null);
                    var t = this.$viewport;
                    window.PointerEvent ? (t.removeEventListener("pointerdown", this.onPointerDown, {
                        passive: !1
                    }), t.removeEventListener("pointermove", this.onPointerMove, {
                        passive: !1
                    }), t.removeEventListener("pointerup", this.onPointerUp), t.removeEventListener("pointercancel", this.onPointerUp)) : (t.removeEventListener("touchstart", this.onPointerDown, {
                        passive: !1
                    }), t.removeEventListener("touchmove", this.onPointerMove, {
                        passive: !1
                    }), t.removeEventListener("touchend", this.onPointerUp), t.removeEventListener("touchcancel", this.onPointerUp), t.removeEventListener("mousedown", this.onPointerDown)), t.removeEventListener("click", this.onClick, {
                        passive: !1
                    }), t.removeEventListener("wheel", this.onWheel, {
                        passive: !1
                    })
                }
            }, {
                key: "copyPointer",
                value: function(t) {
                    return {
                        pointerId: t.pointerId,
                        clientX: t.clientX,
                        clientY: t.clientY
                    }
                }
            }, {
                key: "findPointerIndex",
                value: function(t) {
                    for (var e = this.pointers.length; e--;)
                        if (this.pointers[e].pointerId === t.pointerId) return e;
                    return -1
                }
            }, {
                key: "addPointer",
                value: function(t) {
                    var e = 0;
                    if (t.touches && t.touches.length) {
                        var i, n = p(t.touches);
                        try {
                            for (n.s(); !(i = n.n()).done;) {
                                var o = i.value;
                                o.pointerId = e++, this.addPointer(o)
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    } else(e = this.findPointerIndex(t)) > -1 && this.pointers.splice(e, 1), this.pointers.push(t)
                }
            }, {
                key: "removePointer",
                value: function(t) {
                    if (t.touches)
                        for (; this.pointers.length;) this.pointers.pop();
                    else {
                        var e = this.findPointerIndex(t);
                        e > -1 && this.pointers.splice(e, 1)
                    }
                }
            }, {
                key: "getMiddlePoint",
                value: function() {
                    var t = u(this.pointers),
                        e = (t = t.sort((function(t, e) {
                            return e.pointerId - t.pointerId
                        }))).shift(),
                        i = t.shift();
                    return i ? {
                        clientX: .5 * (e.clientX - i.clientX) + i.clientX,
                        clientY: .5 * (e.clientY - i.clientY) + i.clientY
                    } : {
                        clientX: e ? e.clientX : 0,
                        clientY: e ? e.clientY : 0
                    }
                }
            }, {
                key: "getDistance",
                value: function(t, e) {
                    if (!(t = (t = t || u(this.pointers)).slice()) || t.length < 2) return 0;
                    var i = (t = t.sort((function(t, e) {
                            return e.pointerId - t.pointerId
                        }))).shift(),
                        n = t.shift(),
                        o = Math.abs(n.clientX - i.clientX);
                    if ("x" === e) return o;
                    var s = Math.abs(n.clientY - i.clientY);
                    return "y" === e ? s : Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2))
                }
            }, {
                key: "resetDragState",
                value: function() {
                    var t = this.$content.getClientRects()[0],
                        e = t.left,
                        i = t.top,
                        n = this.getMiddlePoint(),
                        o = {
                            top: i,
                            left: e,
                            x: this.current.x,
                            y: this.current.y,
                            scale: this.current.scale
                        };
                    m(this.drag, {
                        startPosition: m({}, o),
                        startPoint: m({}, n),
                        startDistance: this.getDistance(),
                        endPosition: m({}, o),
                        endPoint: m({}, n),
                        distance: 0,
                        distanceX: 0,
                        distanceY: 0
                    }), "pointerdown" === this.state && (this.lockAxis = null, this.drag.startTime = new Date, this.drag.firstPosition = Object.assign({}, o)), this.stopMoving(), this.friction = this.option("friction")
                }
            }, {
                key: "onPointerDown",
                value: function(t) {
                    if (t && !(t.button && t.button > 0))
                        if (this.option("panOnlyZoomed") && this.velocity.scale) t.preventDefault();
                        else {
                            if (this.resetDragState(), !this.pointers.length) {
                                if (-1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(t.target.nodeName)) return;
                                if (this.option("textSelection") && function(t, e, i) {
                                        for (var n = t.childNodes, o = document.createRange(), s = 0; s < n.length; s++) {
                                            var a = n[s];
                                            if (a.nodeType === Node.TEXT_NODE) {
                                                o.selectNodeContents(a);
                                                var r = o.getBoundingClientRect();
                                                if (e >= r.left && i >= r.top && e <= r.right && i <= r.bottom) return a
                                            }
                                        }
                                        return !1
                                    }(t.target, t.clientX, t.clientY)) return;
                                if (w(t.target)) return
                            }
                            var e;
                            if ((e = window.getSelection ? window.getSelection() : document.selection) && e.rangeCount && e.getRangeAt(0).getClientRects().length && (e.removeAllRanges ? e.removeAllRanges() : e.empty && e.empty()), this.pointers.length > 1 || this.pointers.length && this.lockAxis) t.preventDefault();
                            else if (!1 !== this.trigger("touchStart", t))
                                if (t.preventDefault(), this.state = "pointerdown", this.addPointer(this.copyPointer(t)), this.resetDragState(), window.PointerEvent) try {
                                    t.target.setPointerCapture(t.pointerId)
                                } catch (t) {} else document.addEventListener("mousemove", this.onPointerMove, {
                                    passive: !1
                                }), document.addEventListener("mouseup", this.onPointerUp, {
                                    passive: !1
                                })
                        }
                }
            }, {
                key: "onPointerMove",
                value: function(t) {
                    if (!(t.targetTouches && t.targetTouches.length > 1 || "pointerdown" !== this.state && "dragging" !== this.state))
                        if (0 != this.trigger("touchMove", t)) {
                            if (this.addPointer(this.copyPointer(t)), !(this.pointers.length > 1 && !1 === this.option("pinchToZoom")))
                                if (1 == this.option("panOnlyZoomed") && this.current.scale === this.option("baseScale") && this.pointers.length < 2) t.preventDefault();
                                else {
                                    var e = this.getMiddlePoint(),
                                        i = [e, this.drag.startPoint];
                                    this.drag.distance = this.getDistance(i);
                                    var n = this.events.click && this.events.click.length || this.events.doubleClick && this.events.doubleClick.length || this.option.click || this.option.doubleClick;
                                    if (!(this.drag.distance < 6 && (n || this.option("lockAxis") && !this.lockAxis)) && ("pointerdown" == this.state && (this.state = "dragging"), "dragging" === this.state)) {
                                        var o = this.option("lockAxis");
                                        if (!this.lockAxis && o)
                                            if ("xy" === o) {
                                                var s = this.getDistance(i, "x"),
                                                    a = this.getDistance(i, "y"),
                                                    r = Math.abs(180 * Math.atan2(a, s) / Math.PI);
                                                this.lockAxis = r > 45 && r < 135 ? "y" : "x"
                                            } else this.lockAxis = o;
                                        t.preventDefault(), t.stopPropagation(), this.$viewport.classList.add(this.option("draggingClass")), this.animate();
                                        var l = this.current.scale,
                                            c = 0,
                                            h = 0;
                                        if (this.current.scale === this.option("baseScale") && "y" === this.lockAxis || (c = e.clientX - this.drag.startPoint.clientX), this.current.scale === this.option("baseScale") && "x" === this.lockAxis || (h = e.clientY - this.drag.startPoint.clientY), this.drag.endPosition.x = this.drag.startPosition.x + c, this.drag.endPosition.y = this.drag.startPosition.y + h, this.pointers.length > 1) {
                                            this.drag.middlePoint = e, l = this.drag.startPosition.scale * this.getDistance() / this.drag.startDistance, l = Math.max(Math.min(l, 2 * this.option("maxScale")), .5 * this.option("minScale"));
                                            var d = this.$content.width,
                                                u = this.$content.height,
                                                f = d * this.drag.startPosition.scale,
                                                v = u * this.drag.startPosition.scale,
                                                p = u * l,
                                                g = (d * l - f) * ((this.drag.startPoint.clientX - this.drag.startPosition.left) / f - .5),
                                                m = (p - v) * ((this.drag.startPoint.clientY - this.drag.startPosition.top) / v - .5);
                                            this.drag.endPosition.x -= g, this.drag.endPosition.y -= m, this.drag.endPosition.scale = l, this.updateBounds(l)
                                        }
                                        this.applyDragResistance()
                                    }
                                }
                        } else t.preventDefault()
                }
            }, {
                key: "onPointerUp",
                value: function(t) {
                    if (this.removePointer(t), window.PointerEvent) try {
                        t.target.releasePointerCapture(t.pointerId)
                    } catch (t) {} else document.removeEventListener("mousemove", this.onPointerMove, {
                        passive: !1
                    }), document.removeEventListener("mouseup", this.onPointerUp, {
                        passive: !1
                    });
                    if (this.pointers.length > 0) return t.preventDefault(), void this.resetDragState();
                    if ("pointerdown" === this.state || "dragging" === this.state) {
                        this.$viewport.classList.remove(this.option("draggingClass"));
                        var e = this.$content.getClientRects()[0],
                            i = e.top,
                            n = e.left,
                            o = this.drag;
                        if (m(!0, o, {
                                elapsedTime: new Date - o.startTime,
                                distanceX: o.endPosition.x - o.firstPosition.x,
                                distanceY: o.endPosition.y - o.firstPosition.y,
                                endPosition: {
                                    top: i,
                                    left: n
                                }
                            }), o.distance = Math.sqrt(Math.pow(o.distanceX, 2) + Math.pow(o.distanceY, 2)), this.state = "decel", this.friction = this.option("decelFriction"), this.pan = {
                                x: this.current.x + this.velocity.x / (1 / this.friction - 1),
                                y: this.current.y + this.velocity.y / (1 / this.friction - 1),
                                scale: this.current.scale + this.velocity.scale / (1 / this.friction - 1)
                            }, !1 !== this.trigger("touchEnd", t) && "decel" === this.state) {
                            var s = this.option("minScale");
                            if (this.current.scale < s) this.zoomTo(s, {
                                friction: .64
                            });
                            else {
                                var a = this.option("maxScale");
                                if (this.current.scale - a > .01) {
                                    var r = {
                                        friction: .64
                                    };
                                    o.middlePoint && (r.x = o.middlePoint.clientX - n, r.y = o.middlePoint.clientY - i), this.zoomTo(a, r)
                                }
                            }
                        }
                    }
                }
            }, {
                key: "applyDragResistance",
                value: function() {
                    var t, e, i, n, o = this.boundX,
                        s = this.boundY;
                    if (o && (t = this.drag.endPosition.x < o.from, e = this.drag.endPosition.x > o.to), s && (i = this.drag.endPosition.y < s.from, n = this.drag.endPosition.y > s.to), t || e) {
                        var a = t ? o.from : o.to,
                            r = this.drag.endPosition.x - a;
                        this.drag.endPosition.x = a + .3 * r
                    }
                    if (i || n) {
                        var l = i ? s.from : s.to,
                            c = this.drag.endPosition.y - l;
                        this.drag.endPosition.y = l + .3 * c
                    }
                }
            }, {
                key: "onWheel",
                value: function(t) {
                    !1 !== this.trigger("wheel", t) && "zoom" == this.option("wheel", t) && this.zoomWithWheel(t)
                }
            }, {
                key: "zoomWithWheel",
                value: function(t) {
                    void 0 === this.changedDelta && (this.changedDelta = 0);
                    var e = this.current.scale,
                        i = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail));
                    if (i < 0 && e <= this.option("minScale") || i > 0 && e >= this.option("maxScale")) {
                        if (this.changedDelta += Math.abs(i), this.changedDelta > this.option("wheelLimit")) return
                    } else this.changedDelta = 0;
                    e = e * (100 + i * this.option("wheelFactor")) / 100, t.preventDefault();
                    var n = this.$content.getClientRects()[0],
                        o = n.top,
                        s = n.left,
                        a = t.clientX - s,
                        r = t.clientY - o;
                    this.zoomTo(e, {
                        x: a,
                        y: r
                    })
                }
            }, {
                key: "onClick",
                value: function(t) {
                    var e = this;
                    if (!t.defaultPrevented) {
                        if (window.getSelection().toString().length) return t.stopPropagation(), void t.stopImmediatePropagation();
                        if (this.drag.startPosition && this.drag.endPosition && (Math.abs(this.drag.endPosition.top - this.drag.startPosition.top) > 1 || Math.abs(this.drag.endPosition.left - this.drag.startPosition.left) > 1)) return t.stopPropagation(), void t.stopImmediatePropagation();
                        if (this.drag.distance > (this.lockAxis ? 6 : 1)) return t.preventDefault(), t.stopPropagation(), void t.stopImmediatePropagation();
                        var i = null,
                            n = null;
                        void 0 !== t.clientX && void 0 !== t.clientY && (i = t.clientX - this.$content.getClientRects()[0].left, n = t.clientY - this.$content.getClientRects()[0].top);
                        var o = this.options.doubleClick;
                        if (!o && this.events.doubleClick && this.events.doubleClick.length && (o = !0), o) {
                            if (!this.clickTimer) return this.lastClickEvent = t, void(this.clickTimer = setTimeout((function() {
                                e.clickTimer = null, !1 !== e.trigger("click", t) && "toggleZoom" === e.option("click") && e.toggleZoom({
                                    x: i,
                                    y: n
                                })
                            }), this.option("clickDelay")));
                            this.getDistance([t, this.lastClickEvent]) >= 6 || (clearTimeout(this.clickTimer), this.clickTimer = null, !1 !== this.trigger("doubleClick", t) && "toggleZoom" === this.option("doubleClick") && this.toggleZoom({
                                x: i,
                                y: n
                            }))
                        } else {
                            if (!1 === this.trigger("click", t)) return;
                            "toggleZoom" === this.option("click") && this.toggleZoom({
                                x: i,
                                y: n
                            })
                        }
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    "destroy" !== this.state && (this.state = "destroy", this.$viewport.classList.remove("not-selectable"), this.$content instanceof HTMLImageElement && !this.$content.complete && (this.$content.onload = null, this.$content.onerror = null), this.pendingAnimateUpdate && (cancelAnimationFrame(this.pendingAnimateUpdate), this.pendingAnimateUpdate = null), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.detachEvents(), this.pointers = [], this.resetValues(), this.$viewport = null, this.$content = null, this.options = {}, this.events = {})
                }
            }]), n
        }(k);
    C.version = "4.0.0-alpha.4", C.Plugins = {};
    var P = function(t, e) {
            var i = 0;
            return function() {
                var n = (new Date).getTime();
                if (!(n - i < e)) return i = n, t.apply(void 0, arguments)
            }
        },
        S = function() {
            function t(e) {
                i(this, t), this.$container = null, this.$prev = null, this.$next = null, this.carousel = e, this.onRefresh = this.onRefresh.bind(this)
            }
            return o(t, [{
                key: "option",
                value: function(t) {
                    return this.carousel.option("Navigation.".concat(t))
                }
            }, {
                key: "createButton",
                value: function(t) {
                    var e, i = this,
                        n = document.createElement("button");
                    n.setAttribute("aria-label", this.carousel.localize("{{".concat(t.toUpperCase(), "}}")));
                    var o = this.option("classNames.button") + " " + this.option("classNames.".concat(t));
                    return (e = n.classList).add.apply(e, u(o.split(" "))), n.setAttribute("tabindex", "0"), n.innerHTML = this.carousel.localize(this.option("".concat(t, "Tpl"))), n.addEventListener("click", (function(e) {
                        e.preventDefault(), e.stopPropagation(), i.carousel["slide".concat("next" === t ? "Next" : "Prev")]()
                    })), n
                }
            }, {
                key: "build",
                value: function() {
                    this.$container || (this.$container = document.createElement("div"), this.$container.classList.add(this.option("classNames.main")), this.carousel.$element.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev))
                }
            }, {
                key: "onRefresh",
                value: function() {
                    var t = this.carousel.pages.length;
                    t <= 1 || t > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= t - 1 && this.$next.setAttribute("disabled", "")))
                }
            }, {
                key: "cleanup",
                value: function() {
                    this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null
                }
            }, {
                key: "attach",
                value: function() {
                    this.carousel.on("refresh change", this.onRefresh)
                }
            }, {
                key: "detach",
                value: function() {
                    this.carousel.off("refresh change", this.onRefresh), this.cleanup()
                }
            }]), t
        }();
    S.defaults = {
        prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
        nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        classNames: {
            main: "carousel__nav",
            button: "carousel__button",
            next: "is-next",
            prev: "is-prev"
        }
    };
    var E = function() {
            function t(e) {
                i(this, t), this.carousel = e, this.$list = null, this.events = {
                    change: this.onChange.bind(this),
                    refresh: this.onRefresh.bind(this)
                }
            }
            return o(t, [{
                key: "buildList",
                value: function() {
                    var t = this;
                    if (!(this.carousel.pages.length < 2)) {
                        var e = document.createElement("ol");
                        return e.classList.add("carousel__dots"), e.addEventListener("click", (function(e) {
                            if ("page" in e.target.dataset) {
                                e.preventDefault(), e.stopPropagation();
                                var i = parseInt(e.target.dataset.page, 10),
                                    n = t.carousel;
                                i !== n.page && (n.pages.length < 3 && n.option("infinite") ? n[0 == i ? "slidePrev" : "slideNext"]() : n.slideTo(i))
                            }
                        })), this.$list = e, this.carousel.$element.appendChild(e), this.carousel.$element.classList.add("has-dots"), e
                    }
                }
            }, {
                key: "removeList",
                value: function() {
                    this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null)
                }
            }, {
                key: "rebuildDots",
                value: function() {
                    var t = this,
                        e = this.$list,
                        i = !!e,
                        n = this.carousel.pages.length;
                    if (n < 2) i && this.removeList();
                    else {
                        i || (e = this.buildList());
                        var o = this.$list.children.length;
                        if (o > n)
                            for (var s = n; s < o; s++) this.$list.removeChild(this.$list.lastChild);
                        else {
                            for (var a = function(e) {
                                    var i = document.createElement("li");
                                    i.classList.add("carousel__dot"), i.dataset.page = e, i.setAttribute("role", "button"), i.setAttribute("tabindex", "0"), i.setAttribute("aria-label", t.carousel.localize("{{GOTO}}", [
                                        ["%d", e + 1]
                                    ])), i.addEventListener("keydown", (function(t) {
                                        var e, n = t.code;
                                        "Enter" === n || "NumpadEnter" === n ? e = i : "ArrowRight" === n ? e = i.nextSibling : "ArrowLeft" === n && (e = i.previousSibling), e && e.click()
                                    })), t.$list.appendChild(i)
                                }, r = o; r < n; r++) a(r);
                            this.setActiveDot()
                        }
                    }
                }
            }, {
                key: "setActiveDot",
                value: function() {
                    if (this.$list) {
                        this.$list.childNodes.forEach((function(t) {
                            t.classList.remove("is-selected")
                        }));
                        var t = this.$list.childNodes[this.carousel.page];
                        t && t.classList.add("is-selected")
                    }
                }
            }, {
                key: "onChange",
                value: function() {
                    this.setActiveDot()
                }
            }, {
                key: "onRefresh",
                value: function() {
                    this.rebuildDots()
                }
            }, {
                key: "attach",
                value: function() {
                    this.carousel.on(this.events)
                }
            }, {
                key: "detach",
                value: function() {
                    this.removeList(), this.carousel.off(this.events), this.carousel = null
                }
            }]), t
        }(),
        L = function() {
            function t(e) {
                i(this, t), this.nav = e, this.selectedIndex = null, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this)
            }
            return o(t, [{
                key: "onNavReady",
                value: function() {
                    this.onTargetChange(!0), this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.updateMetrics", this.onTargetChange), this.nav.Panzoom.on("click", this.onNavClick), this.sync.on("change", this.onTargetChange)
                }
            }, {
                key: "onNavCreateSlide",
                value: function(t, e) {
                    e.index === this.selectedIndex && this.markSelectedSlide(e.index)
                }
            }, {
                key: "onNavClick",
                value: function(t, e) {
                    var i = e.target.closest(".carousel__slide");
                    if (i) {
                        e.preventDefault();
                        var n = parseInt(i.dataset.index, 10),
                            o = this.sync.getPageforSlide(n);
                        this.sync.page !== o && this.sync.slideTo(o, {
                            friction: this.nav.option("Sync.friction")
                        }), this.markSelectedSlide(n)
                    }
                }
            }, {
                key: "markSelectedSlide",
                value: function(t) {
                    this.selectedIndex = t, u(this.nav.slides).filter((function(t) {
                        return t.$el && t.$el.classList.remove("is-nav-selected")
                    }));
                    var e = this.nav.slides[t];
                    e && e.$el && e.$el.classList.add("is-nav-selected")
                }
            }, {
                key: "onTargetChange",
                value: function(t) {
                    var e = this.sync.pages[this.sync.page].indexes[0],
                        i = this.nav.getPageforSlide(e);
                    null !== i && (this.nav.slideTo(i, !0 === t ? {
                        friction: 0
                    } : {}), this.markSelectedSlide(e))
                }
            }, {
                key: "attach",
                value: function() {
                    var t = this.nav.options.Sync;
                    t && (g(t) && "object" === e(t.with) && (this.sync = t.with), this.sync && this.nav.on("ready", this.onNavReady))
                }
            }, {
                key: "detach",
                value: function() {
                    this.sync && (this.nav.off("ready", this.onNavReady), this.nav.off("createSlide", this.onNavCreate), this.nav.on("Panzoom.updateMetrics", this.onTargetChange), this.sync.off("change", this.onTargetChange)), this.nav.Panzoom.off("click", this.onNavClick), this.sync = null, this.selectedIndex = null
                }
            }]), t
        }();
    L.defaults = {
        friction: .92
    };
    var T = {
            Navigation: S,
            Dots: E,
            Sync: L
        },
        M = {
            slides: [],
            preload: 0,
            slidesPerPage: "auto",
            initialPage: 0,
            friction: .92,
            center: !0,
            infinite: !0,
            fill: !0,
            dragFree: !1,
            classNames: {
                viewport: "carousel__viewport",
                track: "carousel__track",
                slide: "carousel__slide",
                slideSelected: "is-selected"
            },
            l10n: {
                NEXT: "Next slide",
                PREV: "Previous slide",
                GOTO: "Go to slide %d"
            }
        },
        D = function(t) {
            s(n, t);
            var e = h(n);

            function n(t) {
                var o, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return i(this, n), s = m(!0, {}, M, s), (o = e.call(this, s)).state = "init", o.$element = t, t.Carousel = l(o), o.page = o.pageIndex = null, o.prevPage = o.prevPageIndex = null, o.slideNext = P(o.slideNext.bind(l(o)), 250), o.slidePrev = P(o.slidePrev.bind(l(o)), 250), o.attachPlugins(n.Plugins), o.trigger("init"), o.initLayout(), o.initSlides(), o.initPanzoom(), o.state = "ready", o.trigger("ready"), o
            }
            return o(n, [{
                key: "initLayout",
                value: function() {
                    if (!(this.$element instanceof HTMLElement)) throw new Error("No root element provided");
                    var t, e, i = this.option("classNames");
                    (this.$viewport = this.option("viewport") || this.$element.querySelector("." + i.viewport), this.$viewport) || (this.$viewport = document.createElement("div"), this.$viewport.classList.add(i.viewport), (t = this.$viewport).append.apply(t, u(this.$element.childNodes)), this.$element.appendChild(this.$viewport));
                    (this.$track = this.option("track") || this.$element.querySelector("." + i.track), this.$track) || (this.$track = document.createElement("div"), this.$track.classList.add(i.track), (e = this.$track).append.apply(e, u(this.$viewport.childNodes)), this.$viewport.appendChild(this.$track))
                }
            }, {
                key: "initSlides",
                value: function() {
                    var t = this;
                    this.slides = [], this.$viewport.querySelectorAll("." + this.option("classNames.slide")).forEach((function(e) {
                        var i = {
                            $el: e,
                            isDom: !0
                        };
                        t.slides.push(i), t.trigger("createSlide", i, t.slides.length)
                    })), Array.isArray(this.options.slides) && (this.slides = m(!0, u(this.slides), this.options.slides))
                }
            }, {
                key: "updatePage",
                value: function() {
                    var t = this.page;
                    null === t && (t = this.page = this.option("initialPage")), this.updateMetrics();
                    var e = this.pages;
                    e[t] || (t = e.length ? e[e.length - 1].index : 0), this.slideTo(t, {
                        friction: 0
                    })
                }
            }, {
                key: "updateBounds",
                value: function() {
                    var t = this.Panzoom,
                        e = this.option("infinite"),
                        i = this.option("infiniteX", e),
                        n = this.option("infiniteY", e);
                    i && (t.boundX = null), n && (t.boundY = null), i || n || (t.boundX = {
                        from: -1 * this.pages[this.pages.length - 1].left,
                        to: -1 * this.pages[0].left
                    })
                }
            }, {
                key: "initPanzoom",
                value: function() {
                    var t = this,
                        e = m(!0, {}, {
                            content: this.$track,
                            click: !1,
                            doubleClick: !1,
                            wheel: !1,
                            pinchToZoom: !1,
                            lockAxis: "x",
                            textSelection: function() {
                                return t.option("textSelection", !1)
                            },
                            panOnlyZoomed: function() {
                                return t.option("panOnlyZoomed", t.elemDimWidth < t.wrapDimWidth)
                            },
                            on: {
                                "*": function(e) {
                                    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                                    return t.trigger.apply(t, ["Panzoom.".concat(e)].concat(n))
                                },
                                init: function(e) {
                                    return t.Panzoom = e
                                },
                                updateMetrics: function() {
                                    t.updatePage()
                                },
                                updateBounds: function() {
                                    t.updateBounds()
                                },
                                beforeTransform: this.onBeforeTransform.bind(this),
                                afterAnimate: this.onAfterAnimate.bind(this),
                                touchEnd: this.onTouchEnd.bind(this)
                            }
                        }, this.option("Panzoom"));
                    new C(this.$viewport, e)
                }
            }, {
                key: "onBeforeTransform",
                value: function() {
                    this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), this.manageSlideVisiblity()
                }
            }, {
                key: "onAfterAnimate",
                value: function(t, e) {
                    e || this.trigger("settle")
                }
            }, {
                key: "onTouchEnd",
                value: function(t) {
                    var e = this.option("dragFree");
                    if (!e && this.pages.length > 1 && t.drag.elapsedTime < 350 && Math.abs(t.drag.distanceY) < 1 && Math.abs(t.drag.distanceX) > 5) this[t.drag.distanceX < 0 ? "slideNext" : "slidePrev"]();
                    else if (e) {
                        var i = d(this.getPageFromPosition(-1 * this.Panzoom.pan.x), 2)[1];
                        this.setPage(i)
                    } else this.slideToClosest()
                }
            }, {
                key: "manageInfiniteTrack",
                value: function() {
                    if (!(!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || this.elemDimWidth < this.wrapDimWidth)) {
                        var t = this.Panzoom,
                            e = !1;
                        return t.current.x < -1 * (t.contentDim.width - t.viewportDim.width) && (t.current.x += t.contentDim.width, t.drag.firstPosition && (t.drag.firstPosition.x += t.contentDim.width), this.pageIndex = this.pageIndex - this.pages.length, e = !0), t.current.x > t.viewportDim.width && (t.current.x -= t.contentDim.width, t.drag.firstPosition && (t.drag.firstPosition.x -= t.contentDim.width), this.pageIndex = this.pageIndex + this.pages.length, e = !0), e && "dragging" === t.state && t.resetDragState(), e
                    }
                }
            }, {
                key: "manageSlideVisiblity",
                value: function() {
                    var t = this,
                        e = this.elemDimWidth,
                        i = this.wrapDimWidth,
                        n = -1 * this.Panzoom.current.x;
                    Math.abs(n) < .1 && (n = 0);
                    var o = this.option("preload"),
                        s = this.option("infiniteX", this.option("infinite")),
                        a = parseFloat(window.getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")),
                        r = parseFloat(window.getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
                    this.slides.forEach((function(l) {
                        var c, h, d = 0;
                        c = n - a, h = n + i + r, c -= o * (i + a + r), h += o * (i + a + r);
                        var u = l.left + l.width > c && l.left < h;
                        c = n + e - a, h = n + e + i + r, c -= o * (i + a + r);
                        var f = s && l.left + l.width > c && l.left < h;
                        c = n - e - a, h = n - e + i + r, c -= o * (i + a + r);
                        var v = s && l.left + l.width > c && l.left < h;
                        f || u || v ? (t.createSlideEl(l), u && (d = 0), f && (d = -1), v && (d = 1), l.left + l.width > n && l.left <= n + i + r && (d = 0)) : t.removeSlideEl(l), l.hasDiff = d
                    }));
                    var l = 0,
                        c = 0;
                    this.slides.forEach((function(t, i) {
                        var n = 0;
                        t.$el ? (i !== l || t.hasDiff ? n = c + t.hasDiff * e : c = 0, t.$el.style.left = Math.abs(n) > .1 ? "".concat(c + t.hasDiff * e, "px") : "", l++) : c += t.width
                    })), this.Panzoom.viewportDim.height = this.Panzoom.$content.clientHeight, this.markSelectedSlides()
                }
            }, {
                key: "markSelectedSlides",
                value: function() {
                    var t = this,
                        e = this.option("classNames.slideSelected"),
                        i = "aria-hidden";
                    this.slides.forEach((function(n, o) {
                        var s = n.$el;
                        if (s) {
                            var a = t.pages[t.page];
                            a && a.indexes && a.indexes.indexOf(o) > -1 ? (e && !s.classList.contains(e) && (s.classList.add(e), t.trigger("selectSlide", n)), s.removeAttribute(i)) : (e && s.classList.contains(e) && (s.classList.remove(e), t.trigger("unselectSlide", n)), s.setAttribute(i, !0))
                        }
                    }))
                }
            }, {
                key: "createSlideEl",
                value: function(t) {
                    if (t) {
                        if (!t.$el) {
                            var e, i = document.createElement("div");
                            if (i.dataset.index = t.index, i.classList.add(this.option("classNames.slide")), t.customClass)(e = i.classList).add.apply(e, u(t.customClass.split(" ")));
                            t.html && (i.innerHTML = t.html);
                            var n = [];
                            this.slides.forEach((function(t, e) {
                                t.$el && n.push(e)
                            }));
                            var o = t.index,
                                s = null;
                            if (n.length) {
                                var a = n.reduce((function(t, e) {
                                    return Math.abs(e - o) < Math.abs(t - o) ? e : t
                                }));
                                s = this.slides[a]
                            }
                            return this.$track.insertBefore(i, s && s.$el ? s.index < t.index ? s.$el.nextSibling : s.$el : null), t.$el = i, this.trigger("createSlide", t, o), t
                        }
                        var r;
                        parseInt(t.$el.dataset.index, 10) !== t.index && (t.$el.dataset.index = t.index, t.$el.querySelectorAll("[data-lazy-src]").forEach((function(t) {
                            var e = t.dataset.lazySrc;
                            t instanceof HTMLImageElement ? t.src = e : t.style.backgroundImage = "url('".concat(e, "')")
                        })), (r = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = "url('".concat(r, "')")), t.state = "ready")
                    }
                }
            }, {
                key: "getSlideMetrics",
                value: function(t) {
                    if (!t) {
                        var e, i = this.slides[0];
                        if ((t = document.createElement("div")).dataset.isTestEl = 1, t.style.visibility = "hidden", t.classList.add(this.option("classNames.slide")), i.customClass)(e = t.classList).add.apply(e, u(i.customClass.split(" ")));
                        this.$track.prepend(t)
                    }
                    var n = y(t.getBoundingClientRect().width),
                        o = t.currentStyle || window.getComputedStyle(t);
                    return n = n + (parseFloat(o.marginLeft) || 0) + (parseFloat(o.marginRight) || 0), window.visualViewport && (n *= window.visualViewport.scale), t.dataset.isTestEl && t.remove(), n
                }
            }, {
                key: "updateMetrics",
                value: function() {
                    var t, e = this,
                        i = 0,
                        n = [];
                    this.slides.forEach((function(o, s) {
                        var a = o.$el,
                            r = o.isDom || !t ? e.getSlideMetrics(a) : t;
                        o.index = s, o.width = r, o.left = i, t = r, i += r, n.push(s)
                    })), this.elemDimWidth = y(i), this.Panzoom.contentDim.width = this.elemDimWidth, this.wrapDimWidth = y(this.$viewport.getBoundingClientRect().width);
                    var o = window.getComputedStyle(this.$viewport),
                        s = parseFloat(o.paddingLeft) + parseFloat(o.paddingRight);
                    this.wrapDimWidth = this.wrapDimWidth - s, window.visualViewport && (this.wrapDimWidth *= window.visualViewport.scale), this.Panzoom.viewportDim.width = this.wrapDimWidth;
                    var a = [],
                        r = this.option("slidesPerPage");
                    if (Number.isInteger(r) && this.elemDimWidth > this.wrapDimWidth)
                        for (var l = 0; l < this.slides.length; l += r) a.push({
                            indexes: n.slice(l, l + r),
                            slides: this.slides.slice(l, l + r)
                        });
                    else
                        for (var c = 0, h = 0, d = 0; d < this.slides.length; d += 1) {
                            var f = this.slides[d];
                            (!a.length || h + f.width > this.wrapDimWidth) && (a.push({
                                indexes: [],
                                slides: []
                            }), c = a.length - 1, h = 0), h += f.width, a[c].indexes.push(d), a[c].slides.push(f)
                        }
                    var v = this.option("center"),
                        p = this.option("fill");
                    a.forEach((function(t, i) {
                        t.index = i, t.width = t.slides.reduce((function(t, e) {
                            return t + e.width
                        }), 0), t.left = t.slides[0].left, v && (t.left += .5 * (e.wrapDimWidth - t.width) * -1), p && !e.option("infiniteX", e.option("infinite")) && e.elemDimWidth > e.wrapDimWidth && (t.left = Math.max(t.left, 0), t.left = Math.min(t.left, e.elemDimWidth - e.wrapDimWidth))
                    }));
                    var g, m = [];
                    a.forEach((function(t) {
                        g && t.left === g.left ? (g.width += t.width, g.slides = [].concat(u(g.slides), u(t.slides)), g.indexes = [].concat(u(g.indexes), u(t.indexes))) : (t.index = m.length, g = t, m.push(t))
                    })), this.pages = m, this.manageSlideVisiblity(), this.trigger("refresh")
                }
            }, {
                key: "setPage",
                value: function(t, e) {
                    var i = 0,
                        n = parseInt(t, 10) || 0,
                        o = this.page,
                        s = this.pageIndex,
                        a = this.pages.length;
                    if (t = (n % a + a) % a, this.option("infiniteX", this.option("infinite")) && this.elemDimWidth > this.wrapDimWidth) {
                        var r = Math.floor(n / a) || 0,
                            l = this.elemDimWidth;
                        if (i = this.pages[t].left + r * l, !0 === e && a > 2) {
                            var c = -1 * this.Panzoom.current.x,
                                h = i - l,
                                d = i + l,
                                u = Math.abs(c - i),
                                f = Math.abs(c - h),
                                v = Math.abs(c - d);
                            v < u && v <= f ? (i = d, n += a) : f < u && f < v && (i = h, n -= a)
                        }
                    } else t = n = Math.max(0, Math.min(n, a - 1)), i = this.pages[t].left;
                    return this.page = t, this.pageIndex = n, null !== o && t !== o && (this.prevPage = o, this.prevPageIndex = s, this.trigger("change", t, o)), i
                }
            }, {
                key: "slideTo",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = e.friction,
                        n = void 0 === i ? this.option("friction") : i;
                    this.Panzoom.panTo({
                        x: -1 * this.setPage(t, !0),
                        y: 0,
                        friction: n
                    })
                }
            }, {
                key: "slideToClosest",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = this.getPageFromPosition(-1 * this.Panzoom.pan.x),
                        i = d(e, 2),
                        n = i[1];
                    this.slideTo(n, t)
                }
            }, {
                key: "slideNext",
                value: function() {
                    this.slideTo(this.pageIndex + 1)
                }
            }, {
                key: "slidePrev",
                value: function() {
                    this.slideTo(this.pageIndex - 1)
                }
            }, {
                key: "getPageforSlide",
                value: function(t) {
                    var e = this.pages.find((function(e) {
                        return e.indexes.indexOf(t) > -1
                    }));
                    return e ? e.index : null
                }
            }, {
                key: "getPageFromPosition",
                value: function(t) {
                    var e = this.pages.length;
                    this.option("center") && (t += .5 * this.wrapDimWidth);
                    var i = Math.floor(t / this.elemDimWidth);
                    t -= i * this.elemDimWidth;
                    var n = this.slides.find((function(e) {
                        return e.left < t && e.left + e.width > t
                    }));
                    if (n) {
                        var o = this.getPageforSlide(n.index);
                        return [o, o + i * e]
                    }
                    return [0, 0]
                }
            }, {
                key: "removeSlideEl",
                value: function(t) {
                    t.$el && !t.isDom && (this.trigger("deleteSlide", t), t.$el.remove(), t.$el = null)
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.state = "destroy", this.slides.forEach((function(e) {
                        t.removeSlideEl(e)
                    })), this.Panzoom.destroy(), this.options = {}, this.events = {}
                }
            }]), n
        }(k);
    D.version = "4.0.0-alpha.4", D.Plugins = T;
    var A = !("undefined" == typeof window || !window.document || !window.document.createElement),
        z = function() {
            function t(e) {
                i(this, t), this.fancybox = e, this.viewport = null, this.pendingUpdate = null;
                for (var n = 0, o = ["onReady", "onResize", "onTouchstart", "onTouchmove"]; n < o.length; n++) {
                    var s = o[n];
                    this[s] = this[s].bind(this)
                }
            }
            return o(t, [{
                key: "onReady",
                value: function() {
                    var t = window.visualViewport;
                    t && (this.viewport = t, this.startY = 0, t.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, {
                        passive: !1
                    }), window.addEventListener("touchmove", this.onTouchmove, {
                        passive: !1
                    })
                }
            }, {
                key: "onResize",
                value: function() {
                    this.updateViewport()
                }
            }, {
                key: "updateViewport",
                value: function() {
                    var t = this.fancybox,
                        e = this.viewport,
                        i = e.scale,
                        n = t.$container;
                    if (n) {
                        var o = "",
                            s = "",
                            a = "";
                        Math.abs(i - 1) > .1 && (o = "".concat(e.width * i, "px"), s = "".concat(e.height * i, "px"), a = "translate3d(".concat(e.offsetLeft, "px, ").concat(e.offsetTop, "px, 0) scale(").concat(1 / i, ")")), n.style.width = o, n.style.height = s, n.style.transform = a
                    }
                }
            }, {
                key: "onTouchstart",
                value: function(t) {
                    this.startY = t.touches ? t.touches[0].screenY : t.screenY
                }
            }, {
                key: "onTouchmove",
                value: function(t) {
                    var e = this.startY,
                        i = window.innerWidth / window.document.documentElement.clientWidth;
                    if (!(t.touches.length > 1 || 1 !== i)) {
                        var n = t.target,
                            o = w(n);
                        if (o) {
                            var s = window.getComputedStyle(o),
                                a = parseInt(s.getPropertyValue("height"), 10),
                                r = t.touches ? t.touches[0].screenY : t.screenY,
                                l = e <= r && 0 === o.scrollTop,
                                c = e >= r && o.scrollHeight - o.scrollTop === a;
                            (l || c) && t.preventDefault()
                        } else t.preventDefault()
                    }
                }
            }, {
                key: "cleanup",
                value: function() {
                    this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
                    var t = this.viewport;
                    t && (t.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), window.removeEventListener("touchmove", this.onTouchmove, !1)
                }
            }, {
                key: "attach",
                value: function() {
                    this.fancybox.on("initLayout", this.onReady)
                }
            }, {
                key: "detach",
                value: function() {
                    this.fancybox.off("initLayout", this.onReady), this.cleanup()
                }
            }]), t
        }(),
        I = function() {
            function t(e) {
                i(this, t), this.fancybox = e, this.$wrap = null, this.state = "init";
                for (var n = 0, o = ["onReady", "onClosing", "onKeydown"]; n < o.length; n++) {
                    var s = o[n];
                    this[s] = this[s].bind(this)
                }
                this.events = {
                    ready: this.onReady,
                    closing: this.onClosing,
                    keydown: this.onKeydown
                }
            }
            return o(t, [{
                key: "onReady",
                value: function() {
                    !0 === this.fancybox.option("Thumbs.autoStart") && this.initLayout()
                }
            }, {
                key: "onClosing",
                value: function() {
                    this.Carousel && this.Carousel.Panzoom.detachEvents()
                }
            }, {
                key: "onKeydown",
                value: function(t, e) {
                    e === t.option("Thumbs.key") && this.toggle()
                }
            }, {
                key: "initLayout",
                value: function() {
                    var t = this;
                    if ("init" === this.state) {
                        var e = this.getSlides();
                        if (e.length < this.fancybox.option("Thumbs.minSlideCount")) return !1;
                        var i = document.createElement("div");
                        i.classList.add("fancybox__thumbs"), this.fancybox.$container.appendChild(i), this.Carousel = new D(i, m(!0, {
                            Dots: !1,
                            Navigation: !1,
                            Sync: {
                                friction: 0
                            },
                            infinite: !1,
                            center: !0,
                            fill: !0,
                            dragFree: !0,
                            slidesPerPage: 1,
                            preload: 1
                        }, this.fancybox.option("Thumbs.Carousel"), {
                            Sync: {
                                with: this.fancybox.Carousel
                            },
                            slides: e
                        })), this.Carousel.Panzoom.on("wheel", (function(e, i) {
                            i.preventDefault(), t.fancybox[i.deltaY < 0 ? "prev" : "next"]()
                        })), this.$wrap = i, this.state = "ready"
                    }
                }
            }, {
                key: "getSlides",
                value: function() {
                    var t = [];
                    return this.fancybox.items.forEach((function(e) {
                        var i = e.thumb;
                        i && t.push({
                            html: '<div class="fancybox__thumb" style="background-image:url('.concat(i, ')"></div>'),
                            customClass: "has-thumb has-".concat(e.type || "image")
                        })
                    })), t
                }
            }, {
                key: "toggle",
                value: function() {
                    return "ready" === this.state ? (this.Carousel.Panzoom.detachEvents(), this.$wrap.style.display = "none", void(this.state = "hidden")) : "hidden" === this.state ? (this.$wrap.style.display = "", this.Carousel.Panzoom.attachEvents(), void(this.state = "ready")) : void this.initLayout()
                }
            }, {
                key: "cleanup",
                value: function() {
                    this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$wrap && (this.$wrap.remove(), this.$wrap = null), this.state = "init"
                }
            }, {
                key: "attach",
                value: function() {
                    this.fancybox.on(this.events)
                }
            }, {
                key: "detach",
                value: function() {
                    this.fancybox.off(this.events), this.cleanup()
                }
            }]), t
        }();
    I.defaults = {
        autoStart: !0,
        minSlideCount: 3,
        key: "t"
    };
    var _ = function(t) {
            return Object.entries(t).map((function(t) {
                return t.map(encodeURIComponent).join("=")
            })).join("&")
        },
        R = function() {
            function t(e) {
                i(this, t), this.fancybox = e;
                for (var n = 0, o = ["onPrepare", "onCreateSlide", "onDeleteSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"]; n < o.length; n++) {
                    var s = o[n];
                    this[s] = this[s].bind(this)
                }
                this.events = {
                    init: this.onPrepare,
                    "Carousel.createSlide": this.onCreateSlide,
                    "Carousel.deleteSlide": this.onDeleteSlide,
                    "Carousel.selectSlide": this.onSelectSlide,
                    "Carousel.unselectSlide": this.onUnselectSlide,
                    "Carousel.refresh": this.onRefresh
                }
            }
            return o(t, [{
                key: "onPrepare",
                value: function() {
                    var t = this;
                    this.fancybox.items.forEach((function(e) {
                        t.processType(e)
                    }))
                }
            }, {
                key: "processType",
                value: function(t) {
                    if (t.html) return t.src = t.html, t.type = "html", void delete t.html;
                    var e = t.src || "",
                        i = t.type || this.fancybox.options.type,
                        n = null;
                    if (!e || "string" == typeof e) {
                        if (n = e.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                            var o = _(this.fancybox.option("Html.youtube")),
                                s = encodeURIComponent(n[1]);
                            t.videoId = s, t.src = "https://www.youtube-nocookie.com/embed/".concat(s, "?").concat(o), t.thumb = t.thumb || "https://i.ytimg.com/vi/".concat(s, "/mqdefault.jpg"), t.vendor = "youtube", i = "video"
                        } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
                            var a = _(this.fancybox.option("Html.vimeo")),
                                r = encodeURIComponent(n[1]);
                            t.videoId = r, t.src = "https://player.vimeo.com/video/".concat(r, "?").concat(a), t.vendor = "vimeo", i = "video"
                        } else(n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = "//maps.google.".concat(n[1], "/?ll=").concat((n[2] ? n[2] + "&z=" + Math.floor(n[3]) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&"), "&output=").concat(n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"), i = "map") : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = "//maps.google.".concat(n[1], "/maps?q=").concat(n[2].replace("query=", "q=").replace("api=1", ""), "&output=embed"), i = "map");
                        i || ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "html5video", t.format = t.format || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")), t.type = i || this.fancybox.option("defaultType", "image"), "html5video" !== i && "video" !== i || (t.video = m({}, this.fancybox.option("Html.video"), t.video), t.width && t.height ? t.ratio = parseFloat(t.width) / parseFloat(t.height) : t.ratio = t.ratio || t.video.ratio)
                    }
                }
            }, {
                key: "loadInlineContent",
                value: function(t) {
                    var e;
                    if (t.src instanceof HTMLElement) e = t.src;
                    else if ("string" == typeof t.src) {
                        var i = t.src.split("#", 2),
                            n = 2 === i.length && "" === i[0] ? i[1] : i[0];
                        e = document.getElementById(n)
                    }
                    if (e) {
                        if ("clone" === t.type || e.$placeHolder) {
                            var o = (e = e.cloneNode(!0)).getAttribute("id");
                            o = o ? "".concat(o, "--clone") : "clone-".concat(this.fancybox.id, "-").concat(t.index), e.setAttribute("id", o)
                        } else {
                            var s = document.createElement("div");
                            s.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(s, e), e.$placeHolder = s
                        }
                        this.fancybox.setContent(t, e)
                    } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}")
                }
            }, {
                key: "loadAjaxContent",
                value: function(t) {
                    var e = this.fancybox,
                        i = new XMLHttpRequest;
                    e.showLoading(t), i.onreadystatechange = function() {
                        i.readyState === XMLHttpRequest.DONE && "ready" === e.state && (e.hideLoading(t), 200 === i.status ? e.setContent(t, i.responseText) : e.setError(t, 404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"))
                    }, i.open("GET", t.src), i.send(t.ajax || null), t.xhr = i
                }
            }, {
                key: "loadIframeContent",
                value: function(t) {
                    var e = this,
                        i = this.fancybox,
                        n = document.createElement("iframe");
                    if (n.className = "fancybox__iframe", n.setAttribute("id", "fancybox__iframe_".concat(i.id, "_").concat(t.index)), n.setAttribute("allow", "autoplay; fullscreen"), n.setAttribute("scrolling", "auto"), t.$iframe = n, "iframe" !== t.type || !1 === t.preload) return n.setAttribute("src", t.src), void this.fancybox.setContent(t, n);
                    i.showLoading(t);
                    var o = document.createElement("div");
                    o.style.visibility = "hidden", this.fancybox.setContent(t, o), o.appendChild(n), n.onerror = function() {
                        i.setError(t, "{{IFRAME_ERROR}}")
                    }, n.onload = function() {
                        i.hideLoading(t);
                        var o = !1;
                        "yes" !== n.dataset.ready && (n.dataset.ready = "yes", o = !0), n.src.length && (n.parentNode.style.visibility = "", !1 !== t.autoSize && e.autoSizeIframe(n), o && i.revealContent(t))
                    }, n.setAttribute("src", t.src)
                }
            }, {
                key: "setAspectRatio",
                value: function(t) {
                    var e = t.ratio;
                    if (e && t.$content) {
                        t.$content.style.maxWidth = "", t.$content.style.maxHeight = "";
                        var i = t.$content.offsetWidth,
                            n = t.$content.offsetHeight,
                            o = t.width,
                            s = t.height;
                        if (o && s && (i > o || n > s)) {
                            var a = Math.min(o / i, s / n);
                            i *= a, n *= a
                        }
                        e < i / n ? i = n * e : n = i / e, t.$content.style.maxWidth = "".concat(i, "px"), t.$content.style.maxHeight = "".concat(n, "px")
                    }
                }
            }, {
                key: "autoSizeIframe",
                value: function(t) {
                    if (t.dataset && "yes" === t.dataset.ready) {
                        var e = t.parentNode.style;
                        e.flex = "1 1 auto", e.width = "", e.height = "";
                        try {
                            var i = t.contentWindow.document,
                                n = i.getElementsByTagName("html")[0],
                                o = i.body,
                                s = window.getComputedStyle(t.parentNode),
                                a = parseFloat(s.paddingLeft) + parseFloat(s.paddingRight),
                                r = parseFloat(s.paddingTop) + parseFloat(s.paddingBottom);
                            o.style.overflow = "hidden";
                            var l = n.scrollWidth;
                            e.width = "".concat(l + a, "px"), o.style.overflow = "", e.flex = "", e.flexShrink = "0", e.height = "".concat(o.scrollHeight, "px");
                            var c = n.scrollHeight;
                            e.height = "".concat(c + r, "px")
                        } catch (t) {
                            e = ""
                        }
                    }
                }
            }, {
                key: "onRefresh",
                value: function(t, e) {
                    var i = this;
                    e.slides.forEach((function(t) {
                        t.$el && (t.$iframe && !1 !== t.autoSize && i.autoSizeIframe(t.$iframe), t.ratio && i.setAspectRatio(t))
                    }))
                }
            }, {
                key: "onCreateSlide",
                value: function(t, e, i) {
                    if (i && !i.isDom) {
                        switch (i.type) {
                            case "html":
                                this.fancybox.setContent(i, i.src);
                                break;
                            case "html5video":
                                this.fancybox.setContent(i, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, i.src).replace("{{format}}", i.format || i.html5video && i.html5video.format || "").replace("{{poster}}", i.thumb || ""));
                                break;
                            case "inline":
                            case "clone":
                                this.loadInlineContent(i);
                                break;
                            case "ajax":
                                this.loadAjaxContent(i);
                                break;
                            case "iframe":
                            case "pdf":
                            case "video":
                            case "map":
                                this.loadIframeContent(i)
                        }
                        i.ratio && this.setAspectRatio(i)
                    }
                }
            }, {
                key: "onSelectSlide",
                value: function(t, e, i) {
                    if ("html5video" === i.type && i.$el.querySelector("video").play(), "video" === i.type && i.$iframe && i.$iframe.contentWindow) {
                        ! function t() {
                            if ("done" === i.state && i.$iframe.contentWindow) {
                                var e;
                                if (i.$iframe.isReady) return i.video && i.video.autoplay && (e = "youtube" == i.vendor ? {
                                    event: "command",
                                    func: "playVideo"
                                } : {
                                    method: "play",
                                    value: "true"
                                }), void(e && i.$iframe.contentWindow.postMessage(JSON.stringify(e), "*"));
                                "youtube" === i.vendor && (e = {
                                    event: "listening",
                                    id: i.$iframe.getAttribute("id")
                                }, i.$iframe.contentWindow.postMessage(JSON.stringify(e), "*")), i.poller = setTimeout(t, 250)
                            }
                        }()
                    }
                }
            }, {
                key: "onUnselectSlide",
                value: function(t, e, i) {
                    if ("html5video" !== i.type) {
                        var n = !1;
                        "vimeo" == i.vendor ? n = {
                            method: "pause",
                            value: "true"
                        } : "youtube" === i.vendor && (n = {
                            event: "command",
                            func: "pauseVideo"
                        }), n && i.$iframe && i.$iframe.contentWindow && i.$iframe.contentWindow.postMessage(JSON.stringify(n), "*"), clearTimeout(i.poller)
                    } else try {
                        i.$el.querySelector("video").pause()
                    } catch (t) {}
                }
            }, {
                key: "onDeleteSlide",
                value: function(t, e, i) {
                    i.xhr && (i.xhr.abort(), i.xhr = null), i.$iframe && (i.$iframe.onload = i.$iframe.onerror = null, i.$iframe.src = "//about:blank", i.$iframe = null);
                    var n = i.$content;
                    "inline" === i.type && n && (n.classList.remove("fancybox__content"), "none" !== n.style.display && (n.style.display = "none"), i.$closeButton && (i.$closeButton.remove(), i.$closeButton = null));
                    var o = n && n.$placeHolder;
                    o && (o.parentNode.insertBefore(n, o), o.remove(), n.$placeHolder = null)
                }
            }, {
                key: "onMessage",
                value: function(t) {
                    try {
                        var e = JSON.parse(t.data);
                        if ("https://player.vimeo.com" === t.origin) {
                            if ("ready" === e.event) {
                                var i, n = p(document.getElementsByClassName("fancybox__iframe"));
                                try {
                                    for (n.s(); !(i = n.n()).done;) {
                                        var o = i.value;
                                        o.contentWindow === t.source && (o.isReady = 1)
                                    }
                                } catch (t) {
                                    n.e(t)
                                } finally {
                                    n.f()
                                }
                            }
                        } else "https://www.youtube-nocookie.com" === t.origin && "onReady" === e.event && (document.getElementById(e.id).isReady = 1)
                    } catch (t) {}
                }
            }, {
                key: "attach",
                value: function() {
                    this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1)
                }
            }, {
                key: "detach",
                value: function() {
                    this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1)
                }
            }]), t
        }();
    R.defaults = {
        video: {
            autoplay: !0,
            ratio: 16 / 9
        },
        youtube: {
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1
        },
        vimeo: {
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1
        },
        html5video: {
            tpl: '<video class="fancybox__html5video" tabindex="0" playsinline controls poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />\n  Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!\n</video>',
            format: ""
        }
    };
    var O = function(t) {
            var e = t.naturalWidth,
                i = t.naturalHeight,
                n = t.width,
                o = t.height,
                s = e / i,
                a = {
                    width: n,
                    height: o
                };
            return s > n / o ? a.height = n / s : a.width = o * s, a.left = .5 * (n - a.width), a.right = e + a.left, a
        },
        N = function() {
            function t(e) {
                i(this, t), this.fancybox = e;
                for (var n = 0, o = ["onReady", "onClosing", "onPageChange", "onCreateSlide", "onRemoveSlide", "onRefresh", "onImageStatusChange"]; n < o.length; n++) {
                    var s = o[n];
                    this[s] = this[s].bind(this)
                }
                this.events = {
                    ready: this.onReady,
                    closing: this.onClosing,
                    "Carousel.change": this.onPageChange,
                    "Carousel.createSlide": this.onCreateSlide,
                    "Carousel.deleteSlide": this.onRemoveSlide,
                    "Carousel.Panzoom.updateMetrics": this.onRefresh
                }
            }
            return o(t, [{
                key: "onReady",
                value: function() {
                    var t = this.fancybox.getSlide();
                    "ready" === t.state && this.revealContent(t)
                }
            }, {
                key: "onCreateSlide",
                value: function(t, e, i) {
                    var n = this;
                    if (!(i.isDom || i.html || i.type && "image" !== i.type)) {
                        i.type = "image", i.state = "loading";
                        var o = document.createElement("div");
                        o.style.visibility = "hidden";
                        var s = document.createElement("img");
                        s.onload = function() {
                            return n.onImageStatusChange(i)
                        }, s.onerror = function() {
                            return n.onImageStatusChange(i)
                        }, s.src = i.src, s.alt = "", s.draggable = !1, s.classList.add("fancybox__image"), i.srcset && s.setAttribute("srcset", i.srcset), i.sizes && s.setAttribute("sizes", i.sizes), i.$image = s, o.appendChild(s), i.$el.dataset.imageFit = this.fancybox.option("Image.fit"), i.$el.style.display = "none", i.$el.offsetHeight, i.$el.style.display = "", this.fancybox.setContent(i, o), s.complete || s.error ? (s.onload = s.onerror = null, this.onImageStatusChange(i)) : s.complete || this.fancybox.showLoading(i)
                    }
                }
            }, {
                key: "initSlidePanzoom",
                value: function(t) {
                    var e = this;
                    t.Panzoom || (t.Panzoom = new C(t.$el, m(!0, this.fancybox.option("Image.Panzoom"), {
                        content: t.$image,
                        panOnlyZoomed: !0,
                        click: null,
                        doubleClick: null,
                        wheel: null,
                        on: {
                            afterAnimate: function(i) {
                                "zoomIn" === t.state && (i.attachEvents(), e.fancybox.done(t)), e.handleCursor(t)
                            },
                            updateMetrics: function() {
                                e.handleCursor(t)
                            },
                            touchMove: function() {
                                if (e.fancybox.Carousel.Panzoom.lockAxis) return !1
                            }
                        }
                    })), this.fancybox.option("Image.wheel") && t.Panzoom.on("wheel", (function(t, i) {
                        return e.onWheel(t, i)
                    })), this.fancybox.option("Image.click") && t.Panzoom.on("click", (function(t, i) {
                        return e.onClick(t, i)
                    })), "toggleZoom" === this.fancybox.option("Image.doubleClick") && t.Panzoom.on("doubleClick", (function(t, e) {
                        if (e.target.closest(".fancybox__content")) {
                            e.preventDefault(), e.stopPropagation();
                            var i = e.clientX - t.$content.getClientRects()[0].left,
                                n = e.clientY - t.$content.getClientRects()[0].top;
                            t.toggleZoom({
                                x: i,
                                y: n
                            })
                        }
                    })))
                }
            }, {
                key: "onImageStatusChange",
                value: function(t) {
                    this.fancybox.hideLoading(t);
                    var e = t.$image;
                    e.complete && e.width && e.height ? (t.state = "ready", this.updateDimensions(t), this.initSlidePanzoom(t), this.revealContent(t)) : this.fancybox.setError(t, "{{IMAGE_ERROR}}")
                }
            }, {
                key: "updateDimensions",
                value: function(t) {
                    if ("cover" !== t.$el.dataset.imageFit) {
                        var e = t.$image,
                            i = t.$content;
                        i.style.maxWidth = "";
                        var n = e.offsetWidth - e.clientWidth;
                        i.style.maxWidth = "".concat(O(e).width + n, "px")
                    }
                    this.handleCursor(t)
                }
            }, {
                key: "revealContent",
                value: function(t) {
                    this.updateDimensions(t), null === this.fancybox.Carousel.prevPage && t.index === this.fancybox.options.startIndex && this.canZoom(t) ? this.zoomIn() : this.fancybox.revealContent(t)
                }
            }, {
                key: "canZoom",
                value: function(t) {
                    var e = this.fancybox,
                        i = e.$container,
                        n = !1;
                    if (!e.option("Image.zoom")) return n;
                    var o = t.$thumb;
                    if (!o || "loading" === t.state) return n;
                    i.style.pointerEvents = "none";
                    var s = o.getBoundingClientRect();
                    if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
                        var a = document.elementFromPoint(s.left + 1, s.top + 1) === o,
                            r = document.elementFromPoint(s.right - 1, s.bottom - 1) === o;
                        n = a && r
                    } else n = document.elementFromPoint(s.left + .5 * s.width, s.top + .5 * s.height) === o;
                    return i.style.pointerEvents = "", n
                }
            }, {
                key: "getZoomInfo",
                value: function(t) {
                    var e = t.$thumb.getBoundingClientRect(),
                        i = e.width,
                        n = e.height,
                        o = t.$content.getBoundingClientRect(),
                        s = O(t.$image),
                        a = s.width,
                        r = s.height,
                        l = o.top + .5 * r - (e.top + .5 * n),
                        c = o.left + .5 * a - (e.left + .5 * i),
                        h = this.fancybox.option("Image.zoomOpacity");
                    return "auto" === h && (h = Math.abs(i / n - a / r) > .1), {
                        top: l,
                        left: c,
                        scale: e.width / a,
                        opacity: h
                    }
                }
            }, {
                key: "zoomIn",
                value: function() {
                    var t = this.fancybox;
                    if ("init" !== t.Carousel.state) {
                        var e = t.getSlide(),
                            i = e.Panzoom,
                            n = this.getZoomInfo(e),
                            o = n.top,
                            s = n.left,
                            a = n.scale,
                            r = n.opacity;
                        e.state = "zoomIn", i.detachEvents(), t.trigger("reveal", e), i.panTo({
                            x: -1 * s,
                            y: -1 * o,
                            scale: a,
                            friction: 0,
                            ignoreBounds: !0
                        }), e.$content.style.visibility = "", !0 === r && i.on("afterTransform", (function(t) {
                            "zoomIn" !== e.state && "zoomOut" !== e.state || (t.$content.style.opacity = Math.min(1, t.current.scale))
                        })), i.panTo({
                            x: 0,
                            y: 0,
                            scale: 1,
                            friction: this.fancybox.option("Image.zoomFriction")
                        })
                    }
                }
            }, {
                key: "zoomOut",
                value: function() {
                    var t = this,
                        e = this.fancybox,
                        i = e.getSlide(),
                        n = i.Panzoom;
                    if (n) {
                        i.state = "zoomOut", e.state = "customClosing", i.$caption && (i.$caption.style.visibility = "hidden");
                        var o = .75 * this.fancybox.option("Image.zoomFriction"),
                            s = function() {
                                var e = t.getZoomInfo(i),
                                    s = e.top,
                                    a = e.left,
                                    r = e.scale;
                                n.panTo({
                                    x: -1 * a,
                                    y: -1 * s,
                                    scale: r,
                                    ignoreBounds: !0,
                                    friction: o
                                }), o *= .98
                            };
                        window.addEventListener("scroll", s), n.on("afterAnimate", (function() {
                            window.removeEventListener("scroll", s), e.destroy()
                        })), s()
                    }
                }
            }, {
                key: "handleCursor",
                value: function(t) {
                    var e = t.Panzoom,
                        i = this.fancybox.option("Image.click"),
                        n = t.$el.classList;
                    e && "toggleZoom" === i ? n[e && 1 === e.current.scale && e.option("maxScale") - e.current.scale > .01 ? "add" : "remove"](this.fancybox.option("Image.canZoomInClass")) : "close" === i && n.add(this.fancybox.option("Image.canZoomOutClass"))
                }
            }, {
                key: "onWheel",
                value: function(t, e) {
                    switch (this.fancybox.option("Image.wheel")) {
                        case "zoom":
                            t.zoomWithWheel(e);
                            break;
                        case "close":
                            this.fancybox.close();
                            break;
                        case "slide":
                            this.fancybox[e.deltaY < 0 ? "prev" : "next"]()
                    }
                    e.preventDefault()
                }
            }, {
                key: "onClick",
                value: function(t, e) {
                    if (!(this.fancybox.Carousel.Panzoom.drag.distance >= 6 || this.fancybox.Carousel.Panzoom.lockAxis || "IMG" != e.target.tagName && !e.target.classList.contains("fancybox__content"))) switch (e.preventDefault(), e.stopPropagation(), this.fancybox.option("Image.click")) {
                        case "toggleZoom":
                            var i = e.clientX - t.$content.getClientRects()[0].left,
                                n = e.clientY - t.$content.getClientRects()[0].top;
                            t.toggleZoom({
                                x: i,
                                y: n
                            });
                            break;
                        case "close":
                            this.fancybox.close();
                            break;
                        case "next":
                            this.fancybox.next();
                            break;
                        case "prev":
                            this.fancybox.prev()
                    }
                }
            }, {
                key: "onRefresh",
                value: function(t, e) {
                    var i = this;
                    e.slides.forEach((function(t) {
                        t.Panzoom && i.updateDimensions(t)
                    }))
                }
            }, {
                key: "onRemoveSlide",
                value: function(t, e, i) {
                    i.$image && (i.$el.classList.remove(t.option("Image.canZoomInClass")), i.$image.onload = i.$image.onerror = null, i.$image.remove(), i.$image = null), i.Panzoom && (i.Panzoom.destroy(), i.Panzoom = null), delete i.$el.dataset.imageFit
                }
            }, {
                key: "onClosing",
                value: function(t) {
                    t.Carousel.slides.forEach((function(t) {
                        t.$image && (t.$image.onload = t.$image.onerror = null), t.Panzoom && t.Panzoom.detachEvents()
                    })), "closing" === this.fancybox.state && this.canZoom(t.getSlide()) && this.zoomOut()
                }
            }, {
                key: "onPageChange",
                value: function(t, e) {
                    var i = this,
                        n = t.getSlide();
                    e.slides.forEach((function(t) {
                        t.Panzoom && "done" === t.state && (t.index !== n.index ? t.Panzoom.panTo({
                            x: 0,
                            y: 0,
                            scale: 1,
                            friction: .8
                        }) : 0 === e.Panzoom.velocity.x && i.revealContent(t))
                    }))
                }
            }, {
                key: "attach",
                value: function() {
                    this.fancybox.on(this.events)
                }
            }, {
                key: "detach",
                value: function() {
                    this.fancybox.off(this.events)
                }
            }]), t
        }();
    N.defaults = {
        Panzoom: {
            maxScale: 1
        },
        canZoomInClass: "can-zoom_in",
        canZoomOutClass: "can-zoom_out",
        zoom: !0,
        zoomOpacity: "auto",
        zoomFriction: .8,
        ignoreCoveredThumbnail: !1,
        click: "toggleZoom",
        doubleClick: null,
        wheel: "zoom",
        fit: "contain"
    };
    var F = function() {
            var t = window.location.hash.substr(1),
                e = t.split("-"),
                i = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || null;
            return {
                hash: t,
                slug: e.join("-"),
                index: i
            }
        },
        B = {
            ScrollLock: z,
            Thumbs: I,
            Html: R,
            Image: N,
            Hash: function() {
                function t(e) {
                    i(this, t), this.fancybox = e, this.events = {
                        closing: this.onClosing.bind(this),
                        "Carousel.ready Carousel.change": this.onChange.bind(this)
                    }, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null
                }
                return o(t, [{
                    key: "onChange",
                    value: function(t, e) {
                        var i = this;
                        this.timer && clearTimeout(this.timer);
                        var n = null === e.prevPage,
                            o = t.getSlide(),
                            s = o.$trigger && o.$trigger.dataset,
                            a = window.location.hash.substr(1),
                            r = !1;
                        if (o.slug) r = o.slug;
                        else {
                            var l = s && s.fancybox;
                            l && l.length && "true" !== l && (r = l + (e.slides.length > 1 ? "-" + (o.index + 1) : ""))
                        }
                        n && (this.origHash = a !== r ? this.origHash : ""), r && a !== r && (this.timer = setTimeout((function() {
                            try {
                                window.history[n ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + "#" + r), n && (i.hasCreatedHistory = !0)
                            } catch (t) {}
                        }), 300))
                    }
                }, {
                    key: "onClosing",
                    value: function() {
                        if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) {
                            if (!this.hasCreatedHistory) try {
                                return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash ? "#" + this.origHash : ""))
                            } catch (t) {}
                            window.history.back()
                        }
                    }
                }, {
                    key: "attach",
                    value: function(t) {
                        t.on(this.events)
                    }
                }, {
                    key: "detach",
                    value: function(t) {
                        t.off(this.events)
                    }
                }], [{
                    key: "startFromUrl",
                    value: function() {
                        if (!t.Fancybox.getInstance()) {
                            var e = F(),
                                i = e.hash,
                                n = e.slug,
                                o = e.index;
                            if (n) {
                                var s = document.querySelector('[data-slug="'.concat(i, '"]'));
                                if (s && s.dispatchEvent(new CustomEvent("click", {
                                        bubbles: !0,
                                        cancelable: !0
                                    })), !t.Fancybox.getInstance()) {
                                    var a = document.querySelectorAll('[data-fancybox="'.concat(n, '"]'));
                                    a.length && (null === o && 1 === a.length ? s = a[0] : o && (s = a[o - 1]), s && s.dispatchEvent(new CustomEvent("click", {
                                        bubbles: !0,
                                        cancelable: !0
                                    })))
                                }
                            }
                        }
                    }
                }, {
                    key: "onHashChange",
                    value: function() {
                        var e = F(),
                            i = e.slug,
                            n = e.index,
                            o = t.Fancybox.getInstance();
                        if (o) {
                            if (i) {
                                var s, a = o.Carousel,
                                    r = p(a.slides);
                                try {
                                    for (r.s(); !(s = r.n()).done;) {
                                        var l = s.value;
                                        if (l.slug && l.slug === i) return a.slideTo(l.index)
                                    }
                                } catch (t) {
                                    r.e(t)
                                } finally {
                                    r.f()
                                }
                                var c = o.getSlide(),
                                    h = c.$trigger && c.$trigger.dataset;
                                if (h && h.fancybox === i) return a.slideTo(n - 1)
                            }
                            o.plugins.Hash.hasSilentClose = !0, o.close()
                        }
                        t.startFromUrl()
                    }
                }, {
                    key: "onReady",
                    value: function() {
                        window.addEventListener("hashchange", t.onHashChange, !1), t.startFromUrl()
                    }
                }, {
                    key: "create",
                    value: function() {
                        A && window.requestAnimationFrame((function() {
                            t.onReady()
                        }))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        window.removeEventListener("hashchange", t.onHashChange, !1)
                    }
                }]), t
            }()
        },
        W = 0,
        H = null,
        U = function(t) {
            s(n, t);
            var e = h(n);

            function n(t) {
                var o, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                i(this, n);
                var a, r = function(t, e) {
                    var i = m(!0, {}, t[e.startIndex] || {});
                    return t.forEach((function(t) {
                        var e = t.$trigger;
                        if (e) {
                            var i = e.dataset || {};
                            t.src = i.src || e.getAttribute("href") || t.src, t.type = i.type || t.type
                        }
                    })), m(!0, {}, n.defaults, e, i)
                };
                return a = !1, document.createElement("div").focus({
                    get preventScroll() {
                        return a = !0, !1
                    }
                }), H = a, (o = e.call(this, r(t, s))).state = "init", o.items = t, o.bindHandlers(), o.attachPlugins(n.Plugins), o.trigger("init"), !0 === o.option("hideScrollbar") && o.hideScrollbar(), o.initLayout(), o.initCarousel(o.getSlides()), o.attachEvents(), o.state = "ready", o.trigger("ready"), o.$container.setAttribute("aria-hidden", "false"), o
            }
            return o(n, [{
                key: "bindHandlers",
                value: function() {
                    for (var t = 0, e = ["onMousedown", "onKeydown", "onClick", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform"]; t < e.length; t++) {
                        var i = e[t];
                        this[i] = this[i].bind(this)
                    }
                }
            }, {
                key: "attachEvents",
                value: function() {
                    document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown), this.$container.addEventListener("click", this.onClick)
                }
            }, {
                key: "detachEvents",
                value: function() {
                    document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown), this.$container.removeEventListener("click", this.onClick)
                }
            }, {
                key: "initLayout",
                value: function() {
                    var t = this;
                    this.$root = this.option("parentEl") || document.body;
                    var e = this.option("template.main");
                    e && (this.$root.insertAdjacentHTML("beforeend", this.localize(e)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = function() {
                        return t.$container.scrollLeft = 0, !1
                    }, Object.entries({
                        class: "fancybox__container",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-hidden": "true",
                        "aria-label": this.localize("{{MODAL}}")
                    }).forEach((function(e) {
                        var i;
                        return (i = t.$container).setAttribute.apply(i, u(e))
                    })), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++W, this.$container.setAttribute("id", "fancybox-" + this.id));
                    var i, n = this.options.mainClass;
                    n && (i = this.$container.classList).add.apply(i, u(n.split(" ")));
                    return document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this
                }
            }, {
                key: "getSlides",
                value: function() {
                    var t = u(this.items);
                    return t.forEach((function(t) {
                        !t.src && t.$trigger && t.$trigger instanceof HTMLImageElement && (t.src = t.$trigger.currentSrc || t.$trigger.src);
                        var e = t.$thumb,
                            i = t.$trigger && t.$trigger.origTarget;
                        i && (e = i instanceof HTMLImageElement ? i : i.querySelector("img")), !e && t.$trigger && (e = t.$trigger instanceof HTMLImageElement ? t.$trigger : t.$trigger.querySelector("img")), t.$thumb = e || null;
                        var n = t.thumb;
                        !n && t.$thumb && (n = e.currentSrc || e.src), n || t.type && "image" !== t.type || (n = t.src), t.thumb = n || null
                    })), t
                }
            }, {
                key: "initCarousel",
                value: function(t) {
                    var e = this;
                    return new D(this.$carousel, m(!0, {}, {
                        classNames: {
                            viewport: "fancybox__viewport",
                            track: "fancybox__track",
                            slide: "fancybox__slide"
                        },
                        textSelection: !0,
                        preload: this.option("preload"),
                        friction: .88,
                        slides: t,
                        initialPage: this.options.startIndex,
                        slidesPerPage: 1,
                        infiniteX: this.option("infinite"),
                        infiniteY: !0,
                        l10n: this.option("l10n"),
                        Dots: !1,
                        Navigation: {
                            classNames: {
                                main: "fancybox__nav",
                                button: "carousel__button",
                                next: "is-next",
                                prev: "is-prev"
                            }
                        },
                        Panzoom: {
                            panOnlyZoomed: function() {
                                return e.Carousel.pages.length < 2 && !e.options.dragToClose
                            },
                            lockAxis: function() {
                                var t = e.Carousel.pages.length > 1 ? "x" : "";
                                return e.options.dragToClose && (t += "y"), t
                            }
                        },
                        on: {
                            "*": function(t) {
                                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                                return e.trigger.apply(e, ["Carousel.".concat(t)].concat(n))
                            },
                            init: function(t) {
                                return e.Carousel = t
                            },
                            createSlide: this.onCreateSlide,
                            settle: this.onSettle
                        }
                    }, this.option("Carousel"))), this.options.dragToClose && this.Carousel.Panzoom.on({
                        touchMove: this.onTouchMove,
                        afterTransform: this.onTransform,
                        touchEnd: this.onTouchEnd
                    }), this.trigger("initCarousel"), this
                }
            }, {
                key: "onCreateSlide",
                value: function(t, e) {
                    var i = e.caption;
                    if (i) {
                        var n = document.createElement("div"),
                            o = "fancybox__caption_".concat(this.id, "_").concat(e.index);
                        n.className = "fancybox__caption", n.innerHTML = i, n.setAttribute("id", o), e.$caption = e.$el.appendChild(n), e.$el.classList.add("has-caption"), e.$el.setAttribute("aria-labelledby", o)
                    }
                }
            }, {
                key: "onSettle",
                value: function() {
                    this.focus()
                }
            }, {
                key: "onClick",
                value: function(t) {
                    if (!t.defaultPrevented && !t.target.closest(".fancybox__content") && !window.getSelection().toString().length) {
                        var e = this.option("click");
                        if ("function" == typeof e) return e.call(this);
                        switch (e) {
                            case "close":
                                this.close();
                                break;
                            case "next":
                                this.next()
                        }
                    }
                }
            }, {
                key: "onTouchMove",
                value: function() {
                    var t = this.getSlide().Panzoom;
                    return !t || 1 === t.current.scale
                }
            }, {
                key: "onTouchEnd",
                value: function(t) {
                    var e = t.drag.distanceY;
                    (Math.abs(e) >= 150 || Math.abs(e) >= 35 && t.drag.elapsedTime < 350) && (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut".concat(t.current.y < 0 ? "Up" : "Down")), this.close())
                }
            }, {
                key: "onTransform",
                value: function(t) {
                    if (this.$backdrop) {
                        var e = Math.abs(t.current.y),
                            i = e < 1 ? "" : Math.max(0, Math.min(1, 1 - e / t.$content.clientHeight * 1.5));
                        this.$container.style.setProperty("--fancybox-ts", i ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", i)
                    }
                }
            }, {
                key: "onMousedown",
                value: function() {
                    document.body.classList.add("is-using-mouse")
                }
            }, {
                key: "onKeydown",
                value: function(t) {
                    if (n.getInstance().id === this.id) {
                        document.body.classList.remove("is-using-mouse");
                        var e = t.key;
                        if ("Tab" === e && this.option("trapFocus")) this.focus(t);
                        else {
                            var i = this.option("keyboard");
                            if (i && !t.ctrlKey && !t.altKey && !t.shiftKey) {
                                var o = document.activeElement && document.activeElement.classList,
                                    s = o && o.contains("carousel__button");
                                if ("Escape" !== e && !s)
                                    if (t.target.isContentEditable || -1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(t.target.nodeName)) return;
                                if (!1 !== this.trigger("keydown", e)) {
                                    "Enter" !== e && t.preventDefault();
                                    var a = i[e];
                                    "function" == typeof this[a] && this[a]()
                                }
                            }
                        }
                    }
                }
            }, {
                key: "getSlide",
                value: function() {
                    var t = this.Carousel;
                    if (!t) return null;
                    var e = null === t.page ? t.option("initialPage") : t.page,
                        i = t.pages || [];
                    return i.length && i[e] ? i[e].slides[0] : null
                }
            }, {
                key: "focus",
                value: function(t) {
                    var e = function(t) {
                        t.setActive ? t.setActive() : H ? t.focus({
                            preventScroll: !0
                        }) : t.focus()
                    };
                    t && t.preventDefault();
                    var i = this.getSlide().$el;
                    i.tabIndex = 0;
                    var n, o = [],
                        s = p([].slice.call(this.$container.querySelectorAll(["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'])));
                    try {
                        for (s.s(); !(n = s.n()).done;) {
                            var a = n.value;
                            if (!a.classList || !a.classList.contains("fancybox__slide")) {
                                var r = a.closest(".fancybox__slide");
                                r ? r === i && o[a.hasAttribute("autofocus") ? "unshift" : "push"](a) : o.push(a)
                            }
                        }
                    } catch (t) {
                        s.e(t)
                    } finally {
                        s.f()
                    }
                    if (o.length) {
                        this.Carousel.pages.length > 1 && o.push(i);
                        var l = o.indexOf(document.activeElement),
                            c = t && !t.shiftKey,
                            h = t && t.shiftKey;
                        return c ? l === o.length - 1 ? e(o[0]) : e(o[l + 1]) : h ? e(0 === l ? o[o.length - 1] : o[l - 1]) : l < 0 ? e(o[0]) : void 0
                    }
                }
            }, {
                key: "hideScrollbar",
                value: function() {
                    if (A) {
                        var t = window.innerWidth - document.documentElement.getBoundingClientRect().width,
                            e = "fancybox-style-noscroll",
                            i = document.getElementById(e);
                        i || t && ((i = document.createElement("style")).id = e, i.type = "text/css", i.innerHTML = ".compensate-for-scrollbar {padding-right: ".concat(t, "px;}"), document.getElementsByTagName("head")[0].appendChild(i), document.body.classList.add("compensate-for-scrollbar"))
                    }
                }
            }, {
                key: "revealScrollbar",
                value: function() {
                    document.body.classList.remove("compensate-for-scrollbar");
                    var t = document.getElementById("fancybox-style-noscroll");
                    t && t.remove()
                }
            }, {
                key: "clearContent",
                value: function(t) {
                    this.Carousel.trigger("deleteSlide", t), t.$content && (t.$content.remove(), t.$content = null), t._className && t.$el.classList.remove(t._className)
                }
            }, {
                key: "setContent",
                value: function(t, e) {
                    var i, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = t.$el;
                    if (e instanceof HTMLElement ? ["img", "iframe", "video", "audio"].indexOf(e.nodeName.toLowerCase()) > -1 ? (i = document.createElement("div")).appendChild(e) : i = e : (i = document.createElement("div")).innerHTML = e, !(i instanceof Element)) throw new Error("Element expected");
                    return t._className = "has-".concat(n.suffix || t.type || "unknown"), o.classList.add(t._className), i.classList.add("fancybox__content"), "none" !== i.style.display && "none" !== window.getComputedStyle(i).getPropertyValue("display") || (i.style.display = "flex"), t.id && i.setAttribute("id", t.id), t.$content = i, o.insertBefore(i, o.querySelector(".fancybox__caption")), this.manageCloseButton(t), "loading" !== t.state && this.revealContent(t), i
                }
            }, {
                key: "manageCloseButton",
                value: function(t) {
                    var e = this,
                        i = void 0 === t.closeButton ? this.option("closeButton") : t.closeButton;
                    if (i && (!this.$closeButton || "inside" === i)) {
                        var n = document.createElement("button");
                        n.classList.add("carousel__button", "is-close"), n.setAttribute("aria-label", this.options.l10n.CLOSE), n.innerHTML = this.option("template.closeButton"), n.addEventListener("click", (function(t) {
                            return e.close(t)
                        })), "inside" === i ? (t.$closeButton && t.$closeButton.remove(), t.$closeButton = t.$content.appendChild(n)) : this.$closeButton = this.$container.insertBefore(n, this.$container.firstChild)
                    }
                }
            }, {
                key: "revealContent",
                value: function(t) {
                    var e = this;
                    this.trigger("reveal", t), t.$content.style.visibility = "";
                    var i = !1;
                    "error" !== t.state && "ready" !== t.state && null === this.Carousel.prevPage && t.index === this.options.startIndex && (i = void 0 === t.showClass ? this.option("showClass") : t.showClass), i ? (t.state = "animating", this.animateCSS(t.$content, i, (function() {
                        e.done(t)
                    }))) : this.done(t)
                }
            }, {
                key: "animateCSS",
                value: function(t, e, i) {
                    if (t && t.dispatchEvent(new CustomEvent("animationend", {
                            bubbles: !0,
                            cancelable: !0
                        })), t && e) {
                        t.addEventListener("animationend", (function n(o) {
                            o.currentTarget === this && (t.classList.remove(e), t.removeEventListener("animationend", n), i && i())
                        })), t.classList.add(e)
                    } else "function" == typeof i && i()
                }
            }, {
                key: "done",
                value: function(t) {
                    if ("init" === this.state || "ready" === this.state) {
                        t.state = "done", this.trigger("done", t);
                        var e = this.getSlide();
                        e && t.index === e.index && this.option("autoFocus") && this.focus()
                    }
                }
            }, {
                key: "setError",
                value: function(t, e) {
                    t.state = "error", this.hideLoading(t), this.clearContent(t);
                    var i = document.createElement("div");
                    i.classList.add("fancybox-error"), i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, i, {
                        suffix: "error"
                    })
                }
            }, {
                key: "showLoading",
                value: function(t) {
                    var e = this;
                    t.state = "loading", this.trigger("load", t), t.$el.classList.add("is-loading");
                    var i = t.$el.querySelector(".fancybox__spinner");
                    i || ((i = document.createElement("div")).classList.add("fancybox__spinner"), i.innerHTML = this.option("template.spinner"), i.addEventListener("click", (function() {
                        e.Carousel.Panzoom.velocity || e.close()
                    })), t.$el.insertBefore(i, t.$el.firstChild))
                }
            }, {
                key: "hideLoading",
                value: function(t) {
                    var e = t.$el && t.$el.querySelector(".fancybox__spinner");
                    e && (e.remove(), t.$el.classList.remove("is-loading")), "loading" === t.state && (t.state = "ready")
                }
            }, {
                key: "next",
                value: function() {
                    var t = this.Carousel;
                    t && t.pages.length > 1 && t.slideNext()
                }
            }, {
                key: "prev",
                value: function() {
                    var t = this.Carousel;
                    t && t.pages.length > 1 && t.slidePrev()
                }
            }, {
                key: "jumpTo",
                value: function() {
                    var t;
                    this.Carousel && (t = this.Carousel).slideTo.apply(t, arguments)
                }
            }, {
                key: "close",
                value: function(t) {
                    var e = this;
                    if (t && t.preventDefault(), !(["closing", "customClosing", "destroy"].indexOf(this.state) > -1) && !1 !== this.trigger("shouldClose", t) && (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", t), "destroy" !== this.state)) {
                        this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
                        var i = this.getSlide();
                        if (this.Carousel.slides.forEach((function(t) {
                                t.$content && t.index !== i.index && t.$content.remove()
                            })), "closing" === this.state) {
                            var n = void 0 === i.hideClass ? this.option("hideClass") : i.hideClass;
                            this.animateCSS(i.$content, n, (function() {
                                e.destroy()
                            }))
                        }
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.state = "destroy", this.trigger("destroy");
                    var t = this.option("placeFocusBack") ? this.getSlide().$trigger : null;
                    if (this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, t)
                        if (H) t.focus({
                            preventScroll: !0
                        });
                        else {
                            var e = document.body.scrollTop;
                            t.focus(), document.body.scrollTop = e
                        }
                    var i = n.getInstance();
                    i ? i.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar())
                }
            }], [{
                key: "show",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new n(t, e)
                }
            }, {
                key: "fromEvent",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!t.defaultPrevented && !(t.button && 0 !== t.button || t.ctrlKey || t.metaKey || t.shiftKey)) {
                        var i, o, s, a = !1,
                            r = t.target;
                        if ((r.matches("[data-fancybox-trigger]") || (r = r.closest("[data-fancybox-trigger]"))) && (s = r && r.dataset && r.dataset.fancyboxTrigger), s) {
                            var l = document.querySelectorAll('[data-fancybox="'.concat(s, '"]')),
                                c = parseInt(r.dataset.fancyboxIndex, 10) || 0;
                            r = l.length ? l[c] : r
                        }
                        r || (r = t.target), Array.from(n.openers.keys()).reverse().some((function(e) {
                            if ((i = r).matches(e) || (i = i.closest(e))) return t.preventDefault(), o = e, !0
                        })), o && (e.target = i, i.origTarget = t.target, a = n.fromOpener(o, e));
                        var h = n.getInstance();
                        return h && "ready" === h.state && t.detail && document.body.classList.add("is-using-mouse"), a
                    }
                }
            }, {
                key: "fromOpener",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = function(t) {
                            for (var e = ["false", "0", "no", "null"], i = ["true", "1", "yes"], n = Object.assign({}, t.dataset), o = 0, s = Object.entries(n); o < s.length; o++) {
                                var a = d(s[o], 2),
                                    r = a[0],
                                    l = a[1];
                                if ("string" == typeof l || l instanceof String)
                                    if (e.indexOf(l) > -1) n[r] = !1;
                                    else if (i.indexOf(n[r]) > -1) n[r] = !0;
                                else try {
                                    n[r] = JSON.parse(l)
                                } catch (t) {
                                    n[r] = l
                                }
                            }
                            return delete n.fancybox, delete n.type, t instanceof Element && (n.$trigger = t), n
                        },
                        o = [],
                        s = e.startIndex || 0,
                        a = (e = m({}, e, n.openers.get(t))).groupAttr;
                    void 0 === a && (a = "data-fancybox");
                    var r = e.target;
                    if (a) {
                        if (r && t && t === "[".concat(a, "]")) {
                            var l = r.getAttribute("".concat(a));
                            t = !(!l || !l.length || "true" === l) && "[".concat(a, "='").concat(l, "']")
                        }
                    } else t = !1;
                    if (t && (o = [].slice.call(document.querySelectorAll(t))), !o.length && r && (o = [r]), !o.length) return !1;
                    var c = n.getInstance();
                    return !(c && o.indexOf(c.options.$trigger) > -1) && (s = r ? o.indexOf(r) : s, new n(o = o.map(i), m({}, e, {
                        startIndex: s,
                        $trigger: r
                    })))
                }
            }, {
                key: "bind",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (A) {
                        if (!n.openers.size) {
                            document.body.addEventListener("click", n.fromEvent, !1);
                            for (var i = 0, o = Object.entries(n.Plugins || {}); i < o.length; i++) {
                                var s = d(o[i], 2);
                                s[0];
                                var a = s[1];
                                a.Fancybox = this, "function" == typeof a.create && a.create()
                            }
                        }
                        n.openers.set(t, e)
                    }
                }
            }, {
                key: "unbind",
                value: function(t) {
                    n.openers.delete(t), n.openers.size || n.destroy()
                }
            }, {
                key: "destroy",
                value: function() {
                    for (var t; t = n.getInstance();) t.destroy();
                    n.openers = new Map, document.body.removeEventListener("click", n.fromEvent, !1)
                }
            }, {
                key: "getInstance",
                value: function(t) {
                    var e, i = p(t ? [document.getElementById("fancybox-".concat(t))] : Array.from(document.querySelectorAll(".fancybox__container")).reverse());
                    try {
                        for (i.s(); !(e = i.n()).done;) {
                            var n = e.value,
                                o = n && n.Fancybox;
                            if (o && "closing" !== o.state && "customClosing" !== o.state) return o
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    return null
                }
            }, {
                key: "close",
                value: function() {
                    for (var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = null; e = n.getInstance();)
                        if (e.close(), !t) return
                }
            }]), n
        }(k);
    U.version = "4.0.0-alpha.4", U.defaults = {
        startIndex: 0,
        preload: 1,
        infinite: !0,
        showClass: "fancybox-zoomInUp",
        hideClass: "fancybox-fadeOut",
        animated: !0,
        hideScrollbar: !0,
        parentEl: null,
        mainClass: null,
        autoFocus: !0,
        // trapFocus: !0,
        trapFocus: 1,
        placeFocusBack: !0,
        click: "close",
        closeButton: "inside",
        dragToClose: !0,
        keyboard: {
            Escape: "close",
            Delete: "close",
            Backspace: "close",
            PageUp: "next",
            PageDown: "prev",
            ArrowUp: "next",
            ArrowDown: "prev",
            ArrowRight: "next",
            ArrowLeft: "prev"
        },
        template: {
            closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
            spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
            main: null
        },
        l10n: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            MODAL: "You can close this modal content with the ESC key",
            ERROR: "Something Went Wrong, Please Try Again Later",
            IMAGE_ERROR: "Image Not Found",
            ELEMENT_NOT_FOUND: "HTML Element Not Found",
            AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
            AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
            IFRAME_ERROR: "Error Loading Page"
        }
    }, U.openers = new Map, U.Plugins = B, U.isMobile = function() {
        return !!navigator && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, U.bind("[data-fancybox]"), t.Carousel = D, t.Fancybox = U, t.Panzoom = C
}));
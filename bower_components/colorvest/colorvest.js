var require, define;
! function(e) {
    function r(e, r) {
        function t() {
            clearTimeout(o)
        }
        if (!(e in u)) {
            u[e] = !0;
            var i = document.createElement("script");
            if (r) {
                var o = setTimeout(r, require.timeout);
                i.onerror = function() {
                    clearTimeout(o), r()
                }, "onload" in i ? i.onload = t : i.onreadystatechange = function() {
                    ("loaded" == this.readyState || "complete" == this.readyState) && t()
                }
            }
            return i.type = "text/javascript", i.src = e, n.appendChild(i), i
        }
    }

    function t(e, t, n) {
        var o = i[e] || (i[e] = []);
        o.push(t);
        var a, u = s[e] || {},
            f = u.pkg;
        a = f ? c[f].url : u.url || e, r(a, n && function() {
            n(e)
        })
    }
    var n = document.getElementsByTagName("head")[0],
        i = {},
        o = {},
        a = {},
        u = {},
        s = {},
        c = {};
    define = function(e, r) {
        o[e] = r;
        var t = i[e];
        if (t) {
            for (var n = 0, a = t.length; a > n; n++) t[n]();
            delete i[e]
        }
    }, require = function(e) {
        e = require.alias(e);
        var r = a[e];
        if (r) return r.exports;
        var t = o[e];
        if (!t) throw "[ModJS] Cannot find module `" + e + "`";
        r = a[e] = {
            exports: {}
        };
        var n = "function" == typeof t ? t.apply(r, [require, r.exports, r]) : t;
        return n && (r.exports = n), r.exports
    }, require.async = function(r, n, i) {
        function a(e) {
            for (var r = 0, n = e.length; n > r; r++) {
                var c = e[r];
                if (c in o) {
                    var f = s[c];
                    f && "deps" in f && a(f.deps)
                } else if (!(c in l)) {
                    l[c] = !0, p++, t(c, u, i);
                    var f = s[c];
                    f && "deps" in f && a(f.deps)
                }
            }
        }

        function u() {
            if (0 == p--) {
                for (var t = [], i = 0, o = r.length; o > i; i++) t[i] = require(r[i]);
                n && n.apply(e, t)
            }
        }
        "string" == typeof r && (r = [r]);
        for (var c = 0, f = r.length; f > c; c++) r[c] = require.alias(r[c]);
        var l = {},
            p = 0;
        a(r), u()
    }, require.resourceMap = function(e) {
        var r, t;
        t = e.res;
        for (r in t) t.hasOwnProperty(r) && (s[r] = t[r]);
        t = e.pkg;
        for (r in t) t.hasOwnProperty(r) && (c[r] = t[r])
    }, require.loadJs = function(e) {
        r(e)
    }, require.loadCss = function(e) {
        if (e.content) {
            var r = document.createElement("style");
            r.type = "text/css", r.styleSheet ? r.styleSheet.cssText = e.content : r.innerHTML = e.content, n.appendChild(r)
        } else if (e.url) {
            var t = document.createElement("link");
            t.href = e.url, t.rel = "stylesheet", t.type = "text/css", n.appendChild(t)
        }
    }, require.alias = function(e) {
        return e
    }, require.timeout = 5e3
}(this);;
define("core/widget", function(i, n, t) {
    (function() {
        var i;
        i = function() {
            function i(i) {
                this.options = i
            }
            return i.prototype.initialize = function() {}, i
        }(), t.exports = i
    }).call(this)
});;
define("core/app", function(t, r, o) {
    (function() {
        var r, e, n = {}.hasOwnProperty,
            u = function(t, r) {
                function o() {
                    this.constructor = t
                }
                for (var e in r) n.call(r, e) && (t[e] = r[e]);
                return o.prototype = r.prototype, t.prototype = new o, t.__super__ = r.prototype, t
            };
        e = t("core/widget"), r = function(t) {
            function r(t) {
                var r;
                this.options = t, r = Backbone.Router.extend(t), this.router = new r
            }
            return u(r, t), r.prototype.start = function() {
                return React.render(this.render(), document.body), Backbone.history.start()
            }, r.prototype.route = function(t, r) {
                return this.router.route(t, r)
            }, r
        }(e), o.exports = r
    }).call(this)
});;
define("app/stack", function(t, e, n) {
    (function() {
        var e, r, o = {}.hasOwnProperty,
            c = function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) o.call(e, r) && (t[r] = e[r]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
            };
        e = t("core/app"), r = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return c(e, t), e.prototype.mapRegions = function(t) {
                return React.createElement("div", {
                    id: t.region,
                    style: {
                        height: t.height
                    },
                    className: "col-xs-12"
                }, t.content)
            }, e.prototype.render = function() {
                return React.createElement("div", {
                    className: "container-fluid"
                }, React.createElement("div", {
                    className: "row"
                }, this.options.regions.map(this.mapRegions)))
            }, e
        }(e), n.exports = r
    }).call(this)
});;
define("colorvest", function(t, c, a) {
    (function() {
        var c, n;
        n = t("app/stack"), c = {
            StackApp: n
        }, a.exports = c
    }).call(this)
});

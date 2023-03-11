/*! For license information please see main.4a724859180035ff46b8.js.LICENSE.txt */ !(function () {
  var e = {
      460: function () {
        $(function () {
          $(".change-theme").click(function () {
            $("body").toggleClass("dark");
          });
        });
      },
      575: function () {
        $(function () {
          var e,
            t = new Date(),
            n = ((e = "1/1/2001".split("/")), new Date(e[2], e[0] - 1, e[1]));
          var r = Math.round((t - n) / 864e5);
          $(".days").text(r.toLocaleString());
        });
      },
      792: function () {
        document.body.addEventListener(
          "load",
          function (e) {
            "IMG" == e.target.tagName &&
              (e.target.style.backgroundImage = "none");
          },
          !0
        );
      },
      264: function () {
        var e = !1,
          t = window.navigator.userAgent,
          n = t.indexOf("MSIE "),
          r = t.indexOf("Trident/"),
          o = t.indexOf("Edge/");
        (n > -1 || r > -1 || o > -1) && (e = !0),
          e && $("html").addClass("dontZoom");
      },
      238: function (e, t, n) {
        "use strict";
        var r, o, i;
        (o = [n(172)]),
          (r = function (e) {
            var t = Math.round,
              n = !1,
              r = function () {
                n = !1;
              },
              o = {
                bgVertical: function (e, t) {
                  return e.css({
                    "background-position": "center " + -t + "px",
                  });
                },
                bgHorizontal: function (e, t) {
                  return e.css({
                    "background-position": -t + "px center",
                  });
                },
                vertical: function (e, t, n, r) {
                  return (
                    "none" === r && (r = ""),
                    e.css({
                      "-webkit-transform": "translateY(" + t + "px)" + r,
                      "-moz-transform": "translateY(" + t + "px)" + r,
                      transform: "translate(0," + t + "px)" + r,
                      transition: n,
                      "will-change": "transform",
                    })
                  );
                },
                horizontal: function (e, t, n, r) {
                  return (
                    "none" === r && (r = ""),
                    e.css({
                      "-webkit-transform": "translateX(" + t + "px)" + r,
                      "-moz-transform": "translateX(" + t + "px)" + r,
                      transform: "translate(" + t + "px, 0)" + r,
                      transition: n,
                      "will-change": "transform",
                    })
                  );
                },
              },
              i = {
                factor: function (e, t, n) {
                  var r = e.data("paroller-factor"),
                    o = r || n.factor;
                  if (576 > t) {
                    var i = e.data("paroller-factor-xs"),
                      a = i || n.factorXs;
                    return a || o;
                  }
                  if (768 >= t) {
                    var s = e.data("paroller-factor-sm"),
                      u = s || n.factorSm;
                    return u || o;
                  }
                  if (1024 >= t) {
                    var l = e.data("paroller-factor-md"),
                      c = l || n.factorMd;
                    return c || o;
                  }
                  if (1200 >= t) {
                    var f = e.data("paroller-factor-lg"),
                      p = f || n.factorLg;
                    return p || o;
                  }
                  if (1920 >= t) {
                    var d = e.data("paroller-factor-xl"),
                      h = d || n.factorXl;
                    return h || o;
                  }
                  return o;
                },
                bgOffset: function (e, n) {
                  return t(e * n);
                },
                transform: function (e, n, r, o) {
                  return t((e - r / 2 + o) * n);
                },
              },
              a = {
                background: function (e) {
                  return e.css({
                    "background-position": "unset",
                  });
                },
                foreground: function (e) {
                  return e.css({
                    transform: "unset",
                    transition: "unset",
                  });
                },
              };
            e.fn.paroller = function (s) {
              var u = e(window).height(),
                l = e(document).height();
              return (
                (s = e.extend(
                  {
                    factor: 0,
                    factorXs: 0,
                    factorSm: 0,
                    factorMd: 0,
                    factorLg: 0,
                    factorXl: 0,
                    transition: "transform .1s ease",
                    type: "background",
                    direction: "vertical",
                  },
                  s
                )),
                this.each(function () {
                  var c = e(this),
                    f = c.outerHeight(),
                    p = e(window).width(),
                    d = c.offset().top,
                    h = 0,
                    g = function (e, t) {
                      return e || (h = t), t - h;
                    },
                    y = c.data("paroller-type"),
                    v = c.data("paroller-direction"),
                    m = c.data("paroller-transition"),
                    x = c.css("transform"),
                    w = m || s.transition,
                    b = y || s.type,
                    T = v || s.direction,
                    C = 0,
                    S = i.bgOffset(d, C),
                    k = i.transform(d, C, u, f);
                  "background" === b
                    ? "vertical" === T
                      ? o.bgVertical(c, S)
                      : "horizontal" === T && o.bgHorizontal(c, S)
                    : "foreground" === b &&
                      ("vertical" === T
                        ? o.vertical(c, k, w, x)
                        : "horizontal" === T && o.horizontal(c, k, w, x)),
                    e(window).on("resize", function () {
                      var h = e(this).scrollTop();
                      (p = e(window).width()),
                        (d = c.offset().top),
                        (f = c.outerHeight()),
                        (C = i.factor(c, p, s)),
                        (S = t(d * C));
                      var y = g(
                        e(document).scrollTop(),
                        t((d - u / 2 + f) * C)
                      );
                      n || (window.requestAnimationFrame(r), (n = !0)),
                        "background" === b
                          ? (a.background(c),
                            "vertical" === T
                              ? o.bgVertical(c, S)
                              : "horizontal" === T && o.bgHorizontal(c, S))
                          : "foreground" === b &&
                            h <= l &&
                            (a.foreground(c),
                            "vertical" === T
                              ? o.vertical(c, y, w)
                              : "horizontal" === T && o.horizontal(c, y, w));
                    }),
                    e(window).on("load scroll", function () {
                      var a = e(this).scrollTop(),
                        h = e(document).scrollTop();
                      C = i.factor(c, p, s);
                      var y = g(h, t((d - u / 2 + f - a) * C));
                      n || (window.requestAnimationFrame(r), (n = !0)),
                        "background" === b
                          ? "vertical" === T
                            ? o.bgVertical(c, S)
                            : "horizontal" === T && o.bgHorizontal(c, S)
                          : "foreground" === b &&
                            a <= l &&
                            ("vertical" === T
                              ? o.vertical(c, y, w, x)
                              : "horizontal" === T && o.horizontal(c, y, w, x));
                    });
                })
              );
            };
          }),
          void 0 === (i = "function" == typeof r ? r.apply(t, o) : r) ||
            (e.exports = i);
      },
      368: function () {
        !(function () {
          "use strict";

          function e(r) {
            if (!r)
              throw new Error("No options passed to Waypoint constructor");
            if (!r.element)
              throw new Error(
                "No element option passed to Waypoint constructor"
              );
            if (!r.handler)
              throw new Error(
                "No handler option passed to Waypoint constructor"
              );
            (this.key = "waypoint-" + t),
              (this.options = e.Adapter.extend({}, e.defaults, r)),
              (this.element = this.options.element),
              (this.adapter = new e.Adapter(this.element)),
              (this.callback = r.handler),
              (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
              (this.enabled = this.options.enabled),
              (this.triggerPoint = null),
              (this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis,
              })),
              (this.context = e.Context.findOrCreateByElement(
                this.options.context
              )),
              e.offsetAliases[this.options.offset] &&
                (this.options.offset = e.offsetAliases[this.options.offset]),
              this.group.add(this),
              this.context.add(this),
              (n[this.key] = this),
              (t += 1);
          }
          var t = 0,
            n = {};
          (e.prototype.queueTrigger = function (e) {
            this.group.queueTrigger(this, e);
          }),
            (e.prototype.trigger = function (e) {
              this.enabled && this.callback && this.callback.apply(this, e);
            }),
            (e.prototype.destroy = function () {
              this.context.remove(this),
                this.group.remove(this),
                delete n[this.key];
            }),
            (e.prototype.disable = function () {
              return (this.enabled = !1), this;
            }),
            (e.prototype.enable = function () {
              return this.context.refresh(), (this.enabled = !0), this;
            }),
            (e.prototype.next = function () {
              return this.group.next(this);
            }),
            (e.prototype.previous = function () {
              return this.group.previous(this);
            }),
            (e.invokeAll = function (e) {
              var t = [];
              for (var r in n) t.push(n[r]);
              for (var o = 0, i = t.length; i > o; o++) t[o][e]();
            }),
            (e.destroyAll = function () {
              e.invokeAll("destroy");
            }),
            (e.disableAll = function () {
              e.invokeAll("disable");
            }),
            (e.enableAll = function () {
              for (var t in (e.Context.refreshAll(), n)) n[t].enabled = !0;
              return this;
            }),
            (e.refreshAll = function () {
              e.Context.refreshAll();
            }),
            (e.viewportHeight = function () {
              return (
                window.innerHeight || document.documentElement.clientHeight
              );
            }),
            (e.viewportWidth = function () {
              return document.documentElement.clientWidth;
            }),
            (e.adapters = []),
            (e.defaults = {
              context: window,
              continuous: !0,
              enabled: !0,
              group: "default",
              horizontal: !1,
              offset: 0,
            }),
            (e.offsetAliases = {
              "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight();
              },
              "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth();
              },
            }),
            (window.Waypoint = e);
        })(),
          (function () {
            "use strict";

            function e(e) {
              window.setTimeout(e, 1e3 / 60);
            }

            function t(e) {
              (this.element = e),
                (this.Adapter = o.Adapter),
                (this.adapter = new this.Adapter(e)),
                (this.key = "waypoint-context-" + n),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = {
                  x: this.adapter.scrollLeft(),
                  y: this.adapter.scrollTop(),
                }),
                (this.waypoints = {
                  vertical: {},
                  horizontal: {},
                }),
                (e.waypointContextKey = this.key),
                (r[e.waypointContextKey] = this),
                (n += 1),
                o.windowContext ||
                  ((o.windowContext = !0), (o.windowContext = new t(window))),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
            }
            var n = 0,
              r = {},
              o = window.Waypoint,
              i = window.onload;
            (t.prototype.add = function (e) {
              var t = e.options.horizontal ? "horizontal" : "vertical";
              (this.waypoints[t][e.key] = e), this.refresh();
            }),
              (t.prototype.checkEmpty = function () {
                var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                  t = this.Adapter.isEmptyObject(this.waypoints.vertical),
                  n = this.element == this.element.window;
                e &&
                  t &&
                  !n &&
                  (this.adapter.off(".waypoints"), delete r[this.key]);
              }),
              (t.prototype.createThrottledResizeHandler = function () {
                function e() {
                  t.handleResize(), (t.didResize = !1);
                }
                var t = this;
                this.adapter.on("resize.waypoints", function () {
                  t.didResize ||
                    ((t.didResize = !0), o.requestAnimationFrame(e));
                });
              }),
              (t.prototype.createThrottledScrollHandler = function () {
                function e() {
                  t.handleScroll(), (t.didScroll = !1);
                }
                var t = this;
                this.adapter.on("scroll.waypoints", function () {
                  (!t.didScroll || o.isTouch) &&
                    ((t.didScroll = !0), o.requestAnimationFrame(e));
                });
              }),
              (t.prototype.handleResize = function () {
                o.Context.refreshAll();
              }),
              (t.prototype.handleScroll = function () {
                var e = {},
                  t = {
                    horizontal: {
                      newScroll: this.adapter.scrollLeft(),
                      oldScroll: this.oldScroll.x,
                      forward: "right",
                      backward: "left",
                    },
                    vertical: {
                      newScroll: this.adapter.scrollTop(),
                      oldScroll: this.oldScroll.y,
                      forward: "down",
                      backward: "up",
                    },
                  };
                for (var n in t) {
                  var r = t[n],
                    o = r.newScroll > r.oldScroll ? r.forward : r.backward;
                  for (var i in this.waypoints[n]) {
                    var a = this.waypoints[n][i];
                    if (null !== a.triggerPoint) {
                      var s = r.oldScroll < a.triggerPoint,
                        u = r.newScroll >= a.triggerPoint;
                      ((s && u) || (!s && !u)) &&
                        (a.queueTrigger(o), (e[a.group.id] = a.group));
                    }
                  }
                }
                for (var l in e) e[l].flushTriggers();
                this.oldScroll = {
                  x: t.horizontal.newScroll,
                  y: t.vertical.newScroll,
                };
              }),
              (t.prototype.innerHeight = function () {
                return this.element == this.element.window
                  ? o.viewportHeight()
                  : this.adapter.innerHeight();
              }),
              (t.prototype.remove = function (e) {
                delete this.waypoints[e.axis][e.key], this.checkEmpty();
              }),
              (t.prototype.innerWidth = function () {
                return this.element == this.element.window
                  ? o.viewportWidth()
                  : this.adapter.innerWidth();
              }),
              (t.prototype.destroy = function () {
                var e = [];
                for (var t in this.waypoints)
                  for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
                for (var r = 0, o = e.length; o > r; r++) e[r].destroy();
              }),
              (t.prototype.refresh = function () {
                var e,
                  t = this.element == this.element.window,
                  n = t ? void 0 : this.adapter.offset(),
                  r = {};
                for (var i in (this.handleScroll(),
                (e = {
                  horizontal: {
                    contextOffset: t ? 0 : n.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left",
                  },
                  vertical: {
                    contextOffset: t ? 0 : n.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top",
                  },
                }))) {
                  var a = e[i];
                  for (var s in this.waypoints[i]) {
                    var u,
                      l,
                      c,
                      f,
                      p = this.waypoints[i][s],
                      d = p.options.offset,
                      h = p.triggerPoint,
                      g = 0,
                      y = null == h;
                    p.element !== p.element.window &&
                      (g = p.adapter.offset()[a.offsetProp]),
                      "function" == typeof d
                        ? (d = d.apply(p))
                        : "string" == typeof d &&
                          ((d = parseFloat(d)),
                          p.options.offset.indexOf("%") > -1 &&
                            (d = Math.ceil((a.contextDimension * d) / 100))),
                      (u = a.contextScroll - a.contextOffset),
                      (p.triggerPoint = Math.floor(g + u - d)),
                      (l = h < a.oldScroll),
                      (c = p.triggerPoint >= a.oldScroll),
                      (f = !l && !c),
                      !y && l && c
                        ? (p.queueTrigger(a.backward),
                          (r[p.group.id] = p.group))
                        : ((!y && f) || (y && a.oldScroll >= p.triggerPoint)) &&
                          (p.queueTrigger(a.forward),
                          (r[p.group.id] = p.group));
                  }
                }
                return (
                  o.requestAnimationFrame(function () {
                    for (var e in r) r[e].flushTriggers();
                  }),
                  this
                );
              }),
              (t.findOrCreateByElement = function (e) {
                return t.findByElement(e) || new t(e);
              }),
              (t.refreshAll = function () {
                for (var e in r) r[e].refresh();
              }),
              (t.findByElement = function (e) {
                return r[e.waypointContextKey];
              }),
              (window.onload = function () {
                i && i(), t.refreshAll();
              }),
              (o.requestAnimationFrame = function (t) {
                (
                  window.requestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  e
                ).call(window, t);
              }),
              (o.Context = t);
          })(),
          (function () {
            "use strict";

            function e(e, t) {
              return e.triggerPoint - t.triggerPoint;
            }

            function t(e, t) {
              return t.triggerPoint - e.triggerPoint;
            }

            function n(e) {
              (this.name = e.name),
                (this.axis = e.axis),
                (this.id = this.name + "-" + this.axis),
                (this.waypoints = []),
                this.clearTriggerQueues(),
                (r[this.axis][this.name] = this);
            }
            var r = {
                vertical: {},
                horizontal: {},
              },
              o = window.Waypoint;
            (n.prototype.add = function (e) {
              this.waypoints.push(e);
            }),
              (n.prototype.clearTriggerQueues = function () {
                this.triggerQueues = {
                  up: [],
                  down: [],
                  left: [],
                  right: [],
                };
              }),
              (n.prototype.flushTriggers = function () {
                for (var n in this.triggerQueues) {
                  var r = this.triggerQueues[n],
                    o = "up" === n || "left" === n;
                  r.sort(o ? t : e);
                  for (var i = 0, a = r.length; a > i; i += 1) {
                    var s = r[i];
                    (s.options.continuous || i === r.length - 1) &&
                      s.trigger([n]);
                  }
                }
                this.clearTriggerQueues();
              }),
              (n.prototype.next = function (t) {
                this.waypoints.sort(e);
                var n = o.Adapter.inArray(t, this.waypoints);
                return n === this.waypoints.length - 1
                  ? null
                  : this.waypoints[n + 1];
              }),
              (n.prototype.previous = function (t) {
                this.waypoints.sort(e);
                var n = o.Adapter.inArray(t, this.waypoints);
                return n ? this.waypoints[n - 1] : null;
              }),
              (n.prototype.queueTrigger = function (e, t) {
                this.triggerQueues[t].push(e);
              }),
              (n.prototype.remove = function (e) {
                var t = o.Adapter.inArray(e, this.waypoints);
                t > -1 && this.waypoints.splice(t, 1);
              }),
              (n.prototype.first = function () {
                return this.waypoints[0];
              }),
              (n.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1];
              }),
              (n.findOrCreate = function (e) {
                return r[e.axis][e.name] || new n(e);
              }),
              (o.Group = n);
          })(),
          (function () {
            "use strict";

            function e(e) {
              this.$element = t(e);
            }
            var t = window.jQuery,
              n = window.Waypoint;
            t.each(
              [
                "innerHeight",
                "innerWidth",
                "off",
                "offset",
                "on",
                "outerHeight",
                "outerWidth",
                "scrollLeft",
                "scrollTop",
              ],
              function (t, n) {
                e.prototype[n] = function () {
                  var e = Array.prototype.slice.call(arguments);
                  return this.$element[n].apply(this.$element, e);
                };
              }
            ),
              t.each(["extend", "inArray", "isEmptyObject"], function (n, r) {
                e[r] = t[r];
              }),
              n.adapters.push({
                name: "jquery",
                Adapter: e,
              }),
              (n.Adapter = e);
          })(),
          (function () {
            "use strict";

            function e(e) {
              return function () {
                var n = [],
                  r = arguments[0];
                return (
                  e.isFunction(arguments[0]) &&
                    ((r = e.extend({}, arguments[1])).handler = arguments[0]),
                  this.each(function () {
                    var o = e.extend({}, r, {
                      element: this,
                    });
                    "string" == typeof o.context &&
                      (o.context = e(this).closest(o.context)[0]),
                      n.push(new t(o));
                  }),
                  n
                );
              };
            }
            var t = window.Waypoint;
            window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)),
              window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto));
          })();
      },
      93: function () {
        function e(t) {
          return (
            (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            e(t)
          );
        }
        !(function (t, n, r) {
          function o(t, n) {
            return e(t) === n;
          }

          function i() {
            return "function" != typeof n.createElement
              ? n.createElement(arguments[0])
              : p
              ? n.createElementNS.call(
                  n,
                  "http://www.w3.org/2000/svg",
                  arguments[0]
                )
              : n.createElement.apply(n, arguments);
          }

          function a() {
            var e = n.body;
            return e || ((e = i(p ? "svg" : "body")).fake = !0), e;
          }
          var s = [],
            u = [],
            l = {
              _version: "3.5.0",
              _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0,
              },
              _q: [],
              on: function (e, t) {
                var n = this;
                setTimeout(function () {
                  t(n[e]);
                }, 0);
              },
              addTest: function (e, t, n) {
                u.push({
                  name: e,
                  fn: t,
                  options: n,
                });
              },
              addAsyncTest: function (e) {
                u.push({
                  name: null,
                  fn: e,
                });
              },
            },
            c = function () {};
          (c.prototype = l), (c = new c());
          var f = n.documentElement,
            p = "svg" === f.nodeName.toLowerCase(),
            d = l._config.usePrefixes
              ? " -webkit- -moz- -o- -ms- ".split(" ")
              : ["", ""];
          l._prefixes = d;
          var h = (l.testStyles = function (e, t, r, o) {
            var s,
              u,
              l,
              c,
              p = "modernizr",
              d = i("div"),
              h = a();
            if (parseInt(r, 10))
              for (; r--; )
                ((l = i("div")).id = o ? o[r] : p + (r + 1)), d.appendChild(l);
            return (
              ((s = i("style")).type = "text/css"),
              (s.id = "s" + p),
              (h.fake ? h : d).appendChild(s),
              h.appendChild(d),
              s.styleSheet
                ? (s.styleSheet.cssText = e)
                : s.appendChild(n.createTextNode(e)),
              (d.id = p),
              h.fake &&
                ((h.style.background = ""),
                (h.style.overflow = "hidden"),
                (c = f.style.overflow),
                (f.style.overflow = "hidden"),
                f.appendChild(h)),
              (u = t(d, e)),
              h.fake
                ? (h.parentNode.removeChild(h),
                  (f.style.overflow = c),
                  f.offsetHeight)
                : d.parentNode.removeChild(d),
              !!u
            );
          });
          c.addTest("touchevents", function () {
            var e;
            if (
              "ontouchstart" in t ||
              (t.DocumentTouch && n instanceof DocumentTouch)
            )
              e = !0;
            else {
              var r = [
                "@media (",
                d.join("touch-enabled),("),
                "heartz",
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join("");
              h(r, function (t) {
                e = 9 === t.offsetTop;
              });
            }
            return e;
          }),
            (function () {
              var e, t, n, r, i, a;
              for (var l in u)
                if (u.hasOwnProperty(l)) {
                  if (
                    ((e = []),
                    (t = u[l]).name &&
                      (e.push(t.name.toLowerCase()),
                      t.options &&
                        t.options.aliases &&
                        t.options.aliases.length))
                  )
                    for (n = 0; n < t.options.aliases.length; n++)
                      e.push(t.options.aliases[n].toLowerCase());
                  for (
                    r = o(t.fn, "function") ? t.fn() : t.fn, i = 0;
                    i < e.length;
                    i++
                  )
                    1 === (a = e[i].split(".")).length
                      ? (c[a[0]] = r)
                      : (!c[a[0]] ||
                          c[a[0]] instanceof Boolean ||
                          (c[a[0]] = new Boolean(c[a[0]])),
                        (c[a[0]][a[1]] = r)),
                      s.push((r ? "" : "no-") + a.join("-"));
                }
            })(),
            (function (e) {
              var t = f.className,
                n = c._config.classPrefix || "";
              if ((p && (t = t.baseVal), c._config.enableJSClass)) {
                var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(r, "$1" + n + "js$2");
              }
              c._config.enableClasses &&
                ((t += " " + n + e.join(" " + n)),
                p ? (f.className.baseVal = t) : (f.className = t));
            })(s),
            delete l.addTest,
            delete l.addAsyncTest;
          for (var g = 0; g < c._q.length; g++) c._q[g]();
          t.Modernizr = c;
        })(window, document);
      },
      590: function () {
        $(function () {
          $(".scroll-top").click(function () {
            $("html,body").animate(
              {
                scrollTop: 0,
              },
              "slow"
            );
          });
        });
      },
      172: function (e, t, n) {
        var r = n(755),
          o = n(672);
        void 0 === o.$ && (o.$ = r),
          void 0 === o.jQuery && (o.jQuery = r),
          (e.exports = r);
      },
      672: function (e, t, n) {
        "use strict";
        e.exports = (function () {
          if ("object" == typeof globalThis) return globalThis;
          var e;
          try {
            e = this || new Function("return this")();
          } catch (e) {
            if ("object" == typeof window) return window;
            if ("object" == typeof self) return self;
            if (void 0 !== n.g) return n.g;
          }
          return e;
        })();
      },
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, o) {
          "use strict";
          var i = [],
            a = Object.getPrototypeOf,
            s = i.slice,
            u = i.flat
              ? function (e) {
                  return i.flat.call(e);
                }
              : function (e) {
                  return i.concat.apply([], e);
                },
            l = i.push,
            c = i.indexOf,
            f = {},
            p = f.toString,
            d = f.hasOwnProperty,
            h = d.toString,
            g = h.call(Object),
            y = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            m = function (e) {
              return null != e && e === e.window;
            },
            x = r.document,
            w = {
              type: !0,
              src: !0,
              nonce: !0,
              noModule: !0,
            };

          function b(e, t, n) {
            var r,
              o,
              i = (n = n || x).createElement("script");
            if (((i.text = e), t))
              for (r in w)
                (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i);
          }

          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[p.call(e)] || "object"
              : typeof e;
          }
          var C = "3.6.0",
            S = function (e, t) {
              return new S.fn.init(e, t);
            };

          function k(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !v(e) &&
              !m(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (S.fn = S.prototype =
            {
              jquery: C,
              constructor: S,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = S.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return S.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  S.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  S.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  S.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: l,
              sort: i.sort,
              splice: i.splice,
            }),
            (S.extend = S.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  i,
                  a = arguments[0] || {},
                  s = 1,
                  u = arguments.length,
                  l = !1;
                for (
                  "boolean" == typeof a &&
                    ((l = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || v(a) || (a = {}),
                    s === u && ((a = this), s--);
                  s < u;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (l &&
                          r &&
                          (S.isPlainObject(r) || (o = Array.isArray(r)))
                            ? ((n = a[t]),
                              (i =
                                o && !Array.isArray(n)
                                  ? []
                                  : o || S.isPlainObject(n)
                                  ? n
                                  : {}),
                              (o = !1),
                              (a[t] = S.extend(l, i, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            S.extend({
              expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== p.call(e)) &&
                  (!(t = a(e)) ||
                    ("function" ==
                      typeof (n = d.call(t, "constructor") && t.constructor) &&
                      h.call(n) === g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                b(
                  e,
                  {
                    nonce: t && t.nonce,
                  },
                  n
                );
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (k(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (k(Object(e))
                      ? S.merge(n, "string" == typeof e ? [e] : e)
                      : l.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                  e[o++] = t[r];
                return (e.length = o), e;
              },
              grep: function (e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                  !t(e[o], o) !== a && r.push(e[o]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  o,
                  i = 0,
                  a = [];
                if (k(e))
                  for (r = e.length; i < r; i++)
                    null != (o = t(e[i], i, n)) && a.push(o);
                else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return u(a);
              },
              guid: 1,
              support: y,
            }),
            "function" == typeof Symbol &&
              (S.fn[Symbol.iterator] = i[Symbol.iterator]),
            S.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                f["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var A = (function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              y,
              v,
              m,
              x,
              w = "sizzle" + 1 * new Date(),
              b = e.document,
              T = 0,
              C = 0,
              S = ue(),
              k = ue(),
              A = ue(),
              E = ue(),
              j = function (e, t) {
                return e === t && (f = !0), 0;
              },
              N = {}.hasOwnProperty,
              D = [],
              q = D.pop,
              L = D.push,
              H = D.push,
              O = D.slice,
              P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              M = "[\\x20\\t\\r\\n\\f]",
              $ =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              z =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                $ +
                ")(?:" +
                M +
                "*([*^$|!~]?=)" +
                M +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                $ +
                "))|)" +
                M +
                "*\\]",
              W =
                ":(" +
                $ +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                z +
                ")*)|.*)\\)|)",
              I = new RegExp(M + "+", "g"),
              F = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              B = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              _ = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              X = new RegExp(M + "|>"),
              U = new RegExp(W),
              Q = new RegExp("^" + $ + "$"),
              V = {
                ID: new RegExp("^#(" + $ + ")"),
                CLASS: new RegExp("^\\.(" + $ + ")"),
                TAG: new RegExp("^(" + $ + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              G = /HTML$/i,
              Y = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              oe = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              ie = function () {
                p();
              },
              ae = we(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                {
                  dir: "parentNode",
                  next: "legend",
                }
              );
            try {
              H.apply((D = O.call(b.childNodes)), b.childNodes),
                D[b.childNodes.length].nodeType;
            } catch (e) {
              H = {
                apply: D.length
                  ? function (e, t) {
                      L.apply(e, O.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }

            function se(e, t, r, o) {
              var i,
                s,
                l,
                c,
                f,
                h,
                v,
                m = t && t.ownerDocument,
                b = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== b && 9 !== b && 11 !== b))
              )
                return r;
              if (!o && (p(t), (t = t || d), g)) {
                if (11 !== b && (f = Z.exec(e)))
                  if ((i = f[1])) {
                    if (9 === b) {
                      if (!(l = t.getElementById(i))) return r;
                      if (l.id === i) return r.push(l), r;
                    } else if (
                      m &&
                      (l = m.getElementById(i)) &&
                      x(t, l) &&
                      l.id === i
                    )
                      return r.push(l), r;
                  } else {
                    if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (i = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return H.apply(r, t.getElementsByClassName(i)), r;
                  }
                if (
                  n.qsa &&
                  !E[e + " "] &&
                  (!y || !y.test(e)) &&
                  (1 !== b || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((v = e), (m = t), 1 === b && (X.test(e) || _.test(e)))) {
                    for (
                      ((m = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((c = t.getAttribute("id"))
                          ? (c = c.replace(re, oe))
                          : t.setAttribute("id", (c = w))),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                    v = h.join(",");
                  }
                  try {
                    return H.apply(r, m.querySelectorAll(v)), r;
                  } catch (t) {
                    E(e, !0);
                  } finally {
                    c === w && t.removeAttribute("id");
                  }
                }
              }
              return u(e.replace(F, "$1"), t, r, o);
            }

            function ue() {
              var e = [];
              return function t(n, o) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = o)
                );
              };
            }

            function le(e) {
              return (e[w] = !0), e;
            }

            function ce(e) {
              var t = d.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }

            function fe(e, t) {
              for (var n = e.split("|"), o = n.length; o--; )
                r.attrHandle[n[o]] = t;
            }

            function pe(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }

            function de(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }

            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }

            function ge(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }

            function ye(e) {
              return le(function (t) {
                return (
                  (t = +t),
                  le(function (n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                      n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                  })
                );
              });
            }

            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (i = se.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !G.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = se.setDocument =
              function (e) {
                var t,
                  o,
                  a = e ? e.ownerDocument || e : b;
                return a != d && 9 === a.nodeType && a.documentElement
                  ? ((h = (d = a).documentElement),
                    (g = !i(d)),
                    b != d &&
                      (o = d.defaultView) &&
                      o.top !== o &&
                      (o.addEventListener
                        ? o.addEventListener("unload", ie, !1)
                        : o.attachEvent && o.attachEvent("onunload", ie)),
                    (n.scope = ce(function (e) {
                      return (
                        h.appendChild(e).appendChild(d.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ce(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ce(function (e) {
                      return (
                        e.appendChild(d.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = K.test(
                      d.getElementsByClassName
                    )),
                    (n.getById = ce(function (e) {
                      return (
                        (h.appendChild(e).id = w),
                        !d.getElementsByName || !d.getElementsByName(w).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n,
                              r,
                              o,
                              i = t.getElementById(e);
                            if (i) {
                              if (
                                (n = i.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [i];
                              for (
                                o = t.getElementsByName(e), r = 0;
                                (i = o[r++]);

                              )
                                if (
                                  (n = i.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [i];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = i[o++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return i;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g)
                          return t.getElementsByClassName(e);
                      }),
                    (v = []),
                    (y = []),
                    (n.qsa = K.test(d.querySelectorAll)) &&
                      (ce(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          w +
                          "'></a><select id='" +
                          w +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            y.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + R + ")"
                            ),
                          e.querySelectorAll("[id~=" + w + "-]").length ||
                            y.push("~="),
                          (t = d.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            y.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            y.push(":checked"),
                          e.querySelectorAll("a#" + w + "+*").length ||
                            y.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          y.push("[\\r\\n\\f]");
                      }),
                      ce(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            y.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            y.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            y.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          y.push(",.*:");
                      })),
                    (n.matchesSelector = K.test(
                      (m =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      ce(function (e) {
                        (n.disconnectedMatch = m.call(e, "*")),
                          m.call(e, "[s!='']:x"),
                          v.push("!=", W);
                      }),
                    (y = y.length && new RegExp(y.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = K.test(h.compareDocumentPosition)),
                    (x =
                      t || K.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (j = t
                      ? function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var r =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === r)
                              ? e == d || (e.ownerDocument == b && x(b, e))
                                ? -1
                                : t == d || (t.ownerDocument == b && x(b, t))
                                ? 1
                                : c
                                ? P(c, e) - P(c, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var n,
                            r = 0,
                            o = e.parentNode,
                            i = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!o || !i)
                            return e == d
                              ? -1
                              : t == d
                              ? 1
                              : o
                              ? -1
                              : i
                              ? 1
                              : c
                              ? P(c, e) - P(c, t)
                              : 0;
                          if (o === i) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[r] === s[r]; ) r++;
                          return r
                            ? pe(a[r], s[r])
                            : a[r] == b
                            ? -1
                            : s[r] == b
                            ? 1
                            : 0;
                        }),
                    d)
                  : d;
              }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  g &&
                  !E[t + " "] &&
                  (!v || !v.test(t)) &&
                  (!y || !y.test(t)))
              )
                try {
                  var r = m.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {
                  E(t, !0);
                }
              return se(t, d, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != d && p(e), x(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != d && p(e);
              var o = r.attrHandle[t.toLowerCase()],
                i =
                  o && N.call(r.attrHandle, t.toLowerCase())
                    ? o(e, t, !g)
                    : void 0;
              return void 0 !== i
                ? i
                : n.attributes || !g
                ? e.getAttribute(t)
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(re, oe);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                r = [],
                o = 0,
                i = 0;
              if (
                ((f = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(j),
                f)
              ) {
                for (; (t = e[i++]); ) t === e[i] && (o = r.push(i));
                for (; o--; ) e.splice(r[o], 1);
              }
              return (c = null), e;
            }),
            (o = se.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  i = e.nodeType;
                if (i) {
                  if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                  } else if (3 === i || 4 === i) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += o(t);
                return n;
              }),
            (r = se.selectors =
              {
                cacheLength: 50,
                createPseudo: le,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                  ">": {
                    dir: "parentNode",
                    first: !0,
                  },
                  " ": {
                    dir: "parentNode",
                  },
                  "+": {
                    dir: "previousSibling",
                    first: !0,
                  },
                  "~": {
                    dir: "previousSibling",
                  },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || se.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && se.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return V.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            U.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = S[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + M + "|$)"
                      )) &&
                        S(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var o = se.attr(r, e);
                      return null == o
                        ? "!=" === t
                        : !t ||
                            ((o += ""),
                            "=" === t
                              ? o === n
                              : "!=" === t
                              ? o !== n
                              : "^=" === t
                              ? n && 0 === o.indexOf(n)
                              : "*=" === t
                              ? n && o.indexOf(n) > -1
                              : "$=" === t
                              ? n && o.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + o.replace(I, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (o === n ||
                                  o.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === o
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          var l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            g = i !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                          if (y) {
                            if (i) {
                              for (; g; ) {
                                for (p = t; (p = p[g]); )
                                  if (
                                    s
                                      ? p.nodeName.toLowerCase() === v
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                h = g = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? y.firstChild : y.lastChild]), a && m)
                            ) {
                              for (
                                x =
                                  (d =
                                    (l =
                                      (c =
                                        (f = (p = y)[w] || (p[w] = {}))[
                                          p.uniqueID
                                        ] || (f[p.uniqueID] = {}))[e] ||
                                      [])[0] === T && l[1]) && l[2],
                                  p = d && y.childNodes[d];
                                (p =
                                  (++d && p && p[g]) || (x = d = 0) || h.pop());

                              )
                                if (1 === p.nodeType && ++x && p === t) {
                                  c[e] = [T, d, x];
                                  break;
                                }
                            } else if (
                              (m &&
                                (x = d =
                                  (l =
                                    (c =
                                      (f = (p = t)[w] || (p[w] = {}))[
                                        p.uniqueID
                                      ] || (f[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && l[1]),
                              !1 === x)
                            )
                              for (
                                ;
                                (p =
                                  (++d && p && p[g]) ||
                                  (x = d = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? p.nodeName.toLowerCase() !== v
                                  : 1 !== p.nodeType) ||
                                  !++x ||
                                  (m &&
                                    ((c =
                                      (f = p[w] || (p[w] = {}))[p.uniqueID] ||
                                      (f[p.uniqueID] = {}))[e] = [T, x]),
                                  p !== t));

                              );
                            return (x -= o) === r || (x % r == 0 && x / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      o =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        se.error("unsupported pseudo: " + e);
                    return o[w]
                      ? o(t)
                      : o.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? le(function (e, n) {
                              for (var r, i = o(e, t), a = i.length; a--; )
                                e[(r = P(e, i[a]))] = !(n[r] = i[a]);
                            })
                          : function (e) {
                              return o(e, 0, n);
                            })
                      : o;
                  },
                },
                pseudos: {
                  not: le(function (e) {
                    var t = [],
                      n = [],
                      r = s(e.replace(F, "$1"));
                    return r[w]
                      ? le(function (e, t, n, o) {
                          for (
                            var i, a = r(e, null, o, []), s = e.length;
                            s--;

                          )
                            (i = a[s]) && (e[s] = !(t[s] = i));
                        })
                      : function (e, o, i) {
                          return (
                            (t[0] = e),
                            r(t, null, i, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: le(function (e) {
                    return function (t) {
                      return se(e, t).length > 0;
                    };
                  }),
                  contains: le(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || o(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: le(function (e) {
                    return (
                      Q.test(e || "") || se.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = g
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
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
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === d.activeElement &&
                      (!d.hasFocus || d.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return J.test(e.nodeName);
                  },
                  input: function (e) {
                    return Y.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
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
                  first: ye(function () {
                    return [0];
                  }),
                  last: ye(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ye(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ye(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ye(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ye(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: ye(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }),
            (r.pseudos.nth = r.pseudos.eq),
            {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0,
            }))
              r.pseudos[t] = de(t);
            for (t in {
              submit: !0,
              reset: !0,
            })
              r.pseudos[t] = he(t);

            function me() {}

            function xe(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }

            function we(e, t, n) {
              var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && "parentNode" === i,
                s = C++;
              return t.first
                ? function (t, n, o) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, o);
                    return !1;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      p = [T, s];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((c =
                              (f = t[w] || (t[w] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            o && o === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((l = c[i]) && l[0] === T && l[1] === s)
                              return (p[2] = l[2]);
                            if (((c[i] = p), (p[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }

            function be(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }

            function Te(e, t, n, r, o) {
              for (
                var i, a = [], s = 0, u = e.length, l = null != t;
                s < u;
                s++
              )
                (i = e[s]) &&
                  ((n && !n(i, r, o)) || (a.push(i), l && t.push(s)));
              return a;
            }

            function Ce(e, t, n, r, o, i) {
              return (
                r && !r[w] && (r = Ce(r)),
                o && !o[w] && (o = Ce(o, i)),
                le(function (i, a, s, u) {
                  var l,
                    c,
                    f,
                    p = [],
                    d = [],
                    h = a.length,
                    g =
                      i ||
                      (function (e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++)
                          se(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || (!i && t) ? g : Te(g, p, e, s, u),
                    v = n ? (o || (i ? e : h || r) ? [] : a) : y;
                  if ((n && n(y, v, s, u), r))
                    for (l = Te(v, d), r(l, [], s, u), c = l.length; c--; )
                      (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                  if (i) {
                    if (o || e) {
                      if (o) {
                        for (l = [], c = v.length; c--; )
                          (f = v[c]) && l.push((y[c] = f));
                        o(null, (v = []), l, u);
                      }
                      for (c = v.length; c--; )
                        (f = v[c]) &&
                          (l = o ? P(i, f) : p[c]) > -1 &&
                          (i[l] = !(a[l] = f));
                    }
                  } else (v = Te(v === a ? v.splice(h, v.length) : v)), o ? o(null, a, v, u) : H.apply(a, v);
                })
              );
            }

            function Se(e) {
              for (
                var t,
                  n,
                  o,
                  i = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[" "],
                  u = a ? 1 : 0,
                  c = we(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  f = we(
                    function (e) {
                      return P(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  p = [
                    function (e, n, r) {
                      var o =
                        (!a && (r || n !== l)) ||
                        ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                      return (t = null), o;
                    },
                  ];
                u < i;
                u++
              )
                if ((n = r.relative[e[u].type])) p = [we(be(p), n)];
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[w]) {
                    for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                    return Ce(
                      u > 1 && be(p),
                      u > 1 &&
                        xe(
                          e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : "",
                          })
                        ).replace(F, "$1"),
                      n,
                      u < o && Se(e.slice(u, o)),
                      o < i && Se((e = e.slice(o))),
                      o < i && xe(e)
                    );
                  }
                  p.push(n);
                }
              return be(p);
            }
            return (
              (me.prototype = r.filters = r.pseudos),
              (r.setFilters = new me()),
              (a = se.tokenize =
                function (e, t) {
                  var n,
                    o,
                    i,
                    a,
                    s,
                    u,
                    l,
                    c = k[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (s = e, u = [], l = r.preFilter; s; ) {
                    for (a in ((n && !(o = B.exec(s))) ||
                      (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
                    (n = !1),
                    (o = _.exec(s)) &&
                      ((n = o.shift()),
                      i.push({
                        value: n,
                        type: o[0].replace(F, " "),
                      }),
                      (s = s.slice(n.length))),
                    r.filter))
                      !(o = V[a].exec(s)) ||
                        (l[a] && !(o = l[a](o))) ||
                        ((n = o.shift()),
                        i.push({
                          value: n,
                          type: a,
                          matches: o,
                        }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : k(e, u).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    o = [],
                    i = [],
                    s = A[e + " "];
                  if (!s) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (s = Se(t[n]))[w] ? o.push(s) : i.push(s);
                    (s = A(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          o = e.length > 0,
                          i = function (i, a, s, u, c) {
                            var f,
                              h,
                              y,
                              v = 0,
                              m = "0",
                              x = i && [],
                              w = [],
                              b = l,
                              C = i || (o && r.find.TAG("*", c)),
                              S = (T += null == b ? 1 : Math.random() || 0.1),
                              k = C.length;
                            for (
                              c && (l = a == d || a || c);
                              m !== k && null != (f = C[m]);
                              m++
                            ) {
                              if (o && f) {
                                for (
                                  h = 0,
                                    a ||
                                      f.ownerDocument == d ||
                                      (p(f), (s = !g));
                                  (y = e[h++]);

                                )
                                  if (y(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                  }
                                c && (T = S);
                              }
                              n && ((f = !y && f) && v--, i && x.push(f));
                            }
                            if (((v += m), n && m !== v)) {
                              for (h = 0; (y = t[h++]); ) y(x, w, a, s);
                              if (i) {
                                if (v > 0)
                                  for (; m--; )
                                    x[m] || w[m] || (w[m] = q.call(u));
                                w = Te(w);
                              }
                              H.apply(u, w),
                                c &&
                                  !i &&
                                  w.length > 0 &&
                                  v + t.length > 1 &&
                                  se.uniqueSort(u);
                            }
                            return c && ((T = S), (l = b)), x;
                          };
                        return n ? le(i) : i;
                      })(i, o)
                    )),
                      (s.selector = e);
                  }
                  return s;
                }),
              (u = se.select =
                function (e, t, n, o) {
                  var i,
                    u,
                    l,
                    c,
                    f,
                    p = "function" == typeof e && e,
                    d = !o && a((e = p.selector || e));
                  if (((n = n || []), 1 === d.length)) {
                    if (
                      (u = d[0] = d[0].slice(0)).length > 2 &&
                      "ID" === (l = u[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      r.relative[u[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(u.shift().value.length));
                    }
                    for (
                      i = V.needsContext.test(e) ? 0 : u.length;
                      i-- && ((l = u[i]), !r.relative[(c = l.type)]);

                    )
                      if (
                        (f = r.find[c]) &&
                        (o = f(
                          l.matches[0].replace(te, ne),
                          (ee.test(u[0].type) && ve(t.parentNode)) || t
                        ))
                      ) {
                        if ((u.splice(i, 1), !(e = o.length && xe(u))))
                          return H.apply(n, o), n;
                        break;
                      }
                  }
                  return (
                    (p || s(e, d))(
                      o,
                      t,
                      !g,
                      n,
                      !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = w.split("").sort(j).join("") === w),
              (n.detectDuplicates = !!f),
              p(),
              (n.sortDetached = ce(function (e) {
                return (
                  1 & e.compareDocumentPosition(d.createElement("fieldset"))
                );
              })),
              ce(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                fe("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ce(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                fe("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ce(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                fe(R, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              se
            );
          })(r);
          (S.find = A),
            (S.expr = A.selectors),
            (S.expr[":"] = S.expr.pseudos),
            (S.uniqueSort = S.unique = A.uniqueSort),
            (S.text = A.getText),
            (S.isXMLDoc = A.isXML),
            (S.contains = A.contains),
            (S.escapeSelector = A.escape);
          var E = function (e, t, n) {
              for (
                var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (o && S(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            j = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            N = S.expr.match.needsContext;

          function D(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var q =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

          function L(e, t, n) {
            return v(t)
              ? S.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? S.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? S.grep(e, function (e) {
                  return c.call(t, e) > -1 !== n;
                })
              : S.filter(t, e, n);
          }
          (S.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? S.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : S.find.matches(
                    e,
                    S.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            S.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  o = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    S(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (S.contains(o[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  S.find(e, o[t], n);
                return r > 1 ? S.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(L(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(L(this, e || [], !0));
              },
              is: function (e) {
                return !!L(
                  this,
                  "string" == typeof e && N.test(e) ? S(e) : e || [],
                  !1
                ).length;
              },
            });
          var H,
            O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((S.fn.init = function (e, t, n) {
            var r, o;
            if (!e) return this;
            if (((n = n || H), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : O.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof S ? t[0] : t),
                  S.merge(
                    this,
                    S.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : x,
                      !0
                    )
                  ),
                  q.test(r[1]) && S.isPlainObject(t))
                )
                  for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (o = x.getElementById(r[2])) &&
                  ((this[0] = o), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(S)
              : S.makeArray(e, this);
          }).prototype = S.fn),
            (H = S(x));
          var P = /^(?:parents|prev(?:Until|All))/,
            R = {
              children: !0,
              contents: !0,
              next: !0,
              prev: !0,
            };

          function M(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          S.fn.extend({
            has: function (e) {
              var t = S(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (S.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && S(e);
              if (!N.test(e))
                for (; r < o; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && S.find.matchesSelector(n, e))
                    ) {
                      i.push(n);
                      break;
                    }
              return this.pushStack(i.length > 1 ? S.uniqueSort(i) : i);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? c.call(S(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            S.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return E(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return E(e, "parentNode", n);
                },
                next: function (e) {
                  return M(e, "nextSibling");
                },
                prev: function (e) {
                  return M(e, "previousSibling");
                },
                nextAll: function (e) {
                  return E(e, "nextSibling");
                },
                prevAll: function (e) {
                  return E(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return E(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return E(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return j((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return j(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (D(e, "template") && (e = e.content || e),
                      S.merge([], e.childNodes));
                },
              },
              function (e, t) {
                S.fn[e] = function (n, r) {
                  var o = S.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (o = S.filter(r, o)),
                    this.length > 1 &&
                      (R[e] || S.uniqueSort(o), P.test(e) && o.reverse()),
                    this.pushStack(o)
                  );
                };
              }
            );
          var $ = /[^\x20\t\r\n\f]+/g;

          function z(e) {
            return e;
          }

          function W(e) {
            throw e;
          }

          function I(e, t, n, r) {
            var o;
            try {
              e && v((o = e.promise))
                ? o.call(e).done(t).fail(n)
                : e && v((o = e.then))
                ? o.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (S.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      S.each(e.match($) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : S.extend({}, e);
            var t,
              n,
              r,
              o,
              i = [],
              a = [],
              s = -1,
              u = function () {
                for (o = o || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < i.length; )
                    !1 === i[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = i.length), (n = !1));
                e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
              },
              l = {
                add: function () {
                  return (
                    i &&
                      (n && !t && ((s = i.length - 1), a.push(n)),
                      (function t(n) {
                        S.each(n, function (n, r) {
                          v(r)
                            ? (e.unique && l.has(r)) || i.push(r)
                            : r && r.length && "string" !== T(r) && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    S.each(arguments, function (e, t) {
                      for (var n; (n = S.inArray(t, i, n)) > -1; )
                        i.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? S.inArray(e, i) > -1 : i.length > 0;
                },
                empty: function () {
                  return i && (i = []), this;
                },
                disable: function () {
                  return (o = a = []), (i = n = ""), this;
                },
                disabled: function () {
                  return !i;
                },
                lock: function () {
                  return (o = a = []), n || t || (i = n = ""), this;
                },
                locked: function () {
                  return !!o;
                },
                fireWith: function (e, n) {
                  return (
                    o ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || u()),
                    this
                  );
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return l;
          }),
            S.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      S.Callbacks("memory"),
                      S.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  o = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return i.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return o.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return S.Deferred(function (n) {
                        S.each(t, function (t, r) {
                          var o = v(e[r[4]]) && e[r[4]];
                          i[r[1]](function () {
                            var e = o && o.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, o ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, o) {
                      var i = 0;

                      function a(e, t, n, o) {
                        return function () {
                          var s = this,
                            u = arguments,
                            l = function () {
                              var r, l;
                              if (!(e < i)) {
                                if ((r = n.apply(s, u)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (l =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  v(l)
                                    ? o
                                      ? l.call(r, a(i, t, z, o), a(i, t, W, o))
                                      : (i++,
                                        l.call(
                                          r,
                                          a(i, t, z, o),
                                          a(i, t, W, o),
                                          a(i, t, z, t.notifyWith)
                                        ))
                                    : (n !== z && ((s = void 0), (u = [r])),
                                      (o || t.resolveWith)(s, u));
                              }
                            },
                            c = o
                              ? l
                              : function () {
                                  try {
                                    l();
                                  } catch (r) {
                                    S.Deferred.exceptionHook &&
                                      S.Deferred.exceptionHook(r, c.stackTrace),
                                      e + 1 >= i &&
                                        (n !== W && ((s = void 0), (u = [r])),
                                        t.rejectWith(s, u));
                                  }
                                };
                          e
                            ? c()
                            : (S.Deferred.getStackHook &&
                                (c.stackTrace = S.Deferred.getStackHook()),
                              r.setTimeout(c));
                        };
                      }
                      return S.Deferred(function (r) {
                        t[0][3].add(a(0, r, v(o) ? o : z, r.notifyWith)),
                          t[1][3].add(a(0, r, v(e) ? e : z)),
                          t[2][3].add(a(0, r, v(n) ? n : W));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? S.extend(e, o) : o;
                    },
                  },
                  i = {};
                return (
                  S.each(t, function (e, r) {
                    var a = r[2],
                      s = r[5];
                    (o[r[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(r[3].fire),
                      (i[r[0]] = function () {
                        return (
                          i[r[0] + "With"](
                            this === i ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (i[r[0] + "With"] = a.fireWith);
                  }),
                  o.promise(i),
                  e && e.call(i, i),
                  i
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  o = s.call(arguments),
                  i = S.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (o[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || i.resolveWith(r, o);
                    };
                  };
                if (
                  t <= 1 &&
                  (I(e, i.done(a(n)).resolve, i.reject, !t),
                  "pending" === i.state() || v(o[n] && o[n].then))
                )
                  return i.then();
                for (; n--; ) I(o[n], a(n), i.reject);
                return i.promise();
              },
            });
          var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (S.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              F.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (S.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var B = S.Deferred();

          function _() {
            x.removeEventListener("DOMContentLoaded", _),
              r.removeEventListener("load", _),
              S.ready();
          }
          (S.fn.ready = function (e) {
            return (
              B.then(e).catch(function (e) {
                S.readyException(e);
              }),
              this
            );
          }),
            S.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                  ((S.isReady = !0),
                  (!0 !== e && --S.readyWait > 0) || B.resolveWith(x, [S]));
              },
            }),
            (S.ready.then = B.then),
            "complete" === x.readyState ||
            ("loading" !== x.readyState && !x.documentElement.doScroll)
              ? r.setTimeout(S.ready)
              : (x.addEventListener("DOMContentLoaded", _),
                r.addEventListener("load", _));
          var X = function (e, t, n, r, o, i, a) {
              var s = 0,
                u = e.length,
                l = null == n;
              if ("object" === T(n))
                for (s in ((o = !0), n)) X(e, t, s, n[s], !0, i, a);
              else if (
                void 0 !== r &&
                ((o = !0),
                v(r) || (a = !0),
                l &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                      (t = function (e, t, n) {
                        return l.call(S(e), n);
                      }))),
                t)
              )
                for (; s < u; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
            },
            U = /^-ms-/,
            Q = /-([a-z])/g;

          function V(e, t) {
            return t.toUpperCase();
          }

          function G(e) {
            return e.replace(U, "ms-").replace(Q, V);
          }
          var Y = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };

          function J() {
            this.expando = S.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Y(e) &&
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
                var r,
                  o = this.cache(e);
                if ("string" == typeof t) o[G(t)] = n;
                else for (r in t) o[G(r)] = t[r];
                return o;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][G(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(G)
                      : (t = G(t)) in r
                      ? [t]
                      : t.match($) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || S.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
              },
            });
          var K = new J(),
            Z = new J(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;

          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          S.extend({
            hasData: function (e) {
              return Z.hasData(e) || K.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return K.access(e, t, n);
            },
            _removeData: function (e, t) {
              K.remove(e, t);
            },
          }),
            S.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  o,
                  i = this[0],
                  a = i && i.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((o = Z.get(i)),
                    1 === i.nodeType && !K.get(i, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = G(r.slice(5))), ne(i, r, o[r]));
                    K.set(i, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : X(
                      this,
                      function (t) {
                        var n;
                        if (i && void 0 === t)
                          return void 0 !== (n = Z.get(i, e)) ||
                            void 0 !== (n = ne(i, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
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
                  Z.remove(this, e);
                });
              },
            }),
            S.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = K.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = K.access(e, t, S.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  i = S._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), r--),
                  o &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete i.stop,
                    o.call(
                      e,
                      function () {
                        S.dequeue(e, t);
                      },
                      i
                    )),
                  !r && i && i.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  K.get(e, n) ||
                  K.access(e, n, {
                    empty: S.Callbacks("once memory").add(function () {
                      K.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            S.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? S.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = S.queue(this, e, t);
                        S._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            S.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  S.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  o = S.Deferred(),
                  i = this,
                  a = this.length,
                  s = function () {
                    --r || o.resolveWith(i, [i]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = K.get(i[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), o.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            ae = x.documentElement,
            se = function (e) {
              return S.contains(e.ownerDocument, e);
            },
            ue = {
              composed: !0,
            };
          ae.getRootNode &&
            (se = function (e) {
              return (
                S.contains(e.ownerDocument, e) ||
                e.getRootNode(ue) === e.ownerDocument
              );
            });
          var le = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                se(e) &&
                "none" === S.css(e, "display"))
            );
          };

          function ce(e, t, n, r) {
            var o,
              i,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return S.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (S.cssNumber[t] || ("px" !== l && +u)) &&
                oe.exec(S.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; a--; )
                S.style(e, t, c + l),
                  (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= i);
              (c *= 2), S.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = o))),
              o
            );
          }
          var fe = {};

          function pe(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              o = fe[r];
            return (
              o ||
              ((t = n.body.appendChild(n.createElement(r))),
              (o = S.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === o && (o = "block"),
              (fe[r] = o),
              o)
            );
          }

          function de(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
              (r = e[i]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((o[i] = K.get(r, "display") || null),
                      o[i] || (r.style.display = "")),
                    "" === r.style.display && le(r) && (o[i] = pe(r)))
                  : "none" !== n && ((o[i] = "none"), K.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e;
          }
          S.fn.extend({
            show: function () {
              return de(this, !0);
            },
            hide: function () {
              return de(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    le(this) ? S(this).show() : S(this).hide();
                  });
            },
          });
          var he,
            ge,
            ye = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            me = /^$|^module$|\/(?:java|ecma)script/i;
          (he = x.createDocumentFragment().appendChild(x.createElement("div"))),
            (ge = x.createElement("input")).setAttribute("type", "radio"),
            ge.setAttribute("checked", "checked"),
            ge.setAttribute("name", "t"),
            he.appendChild(ge),
            (y.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (y.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (y.option = !!he.lastChild);
          var xe = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };

          function we(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && D(e, t)) ? S.merge([e], n) : n
            );
          }

          function be(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
          }
          (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
            (xe.th = xe.td),
            y.option ||
              (xe.optgroup = xe.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Te = /<|&#?\w+;/;

          function Ce(e, t, n, r, o) {
            for (
              var i,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
              d < h;
              d++
            )
              if ((i = e[d]) || 0 === i)
                if ("object" === T(i)) S.merge(p, i.nodeType ? [i] : i);
                else if (Te.test(i)) {
                  for (
                    a = a || f.appendChild(t.createElement("div")),
                      s = (ve.exec(i) || ["", ""])[1].toLowerCase(),
                      u = xe[s] || xe._default,
                      a.innerHTML = u[1] + S.htmlPrefilter(i) + u[2],
                      c = u[0];
                    c--;

                  )
                    a = a.lastChild;
                  S.merge(p, a.childNodes),
                    ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(i));
            for (f.textContent = "", d = 0; (i = p[d++]); )
              if (r && S.inArray(i, r) > -1) o && o.push(i);
              else if (
                ((l = se(i)),
                (a = we(f.appendChild(i), "script")),
                l && be(a),
                n)
              )
                for (c = 0; (i = a[c++]); ) me.test(i.type || "") && n.push(i);
            return f;
          }
          var Se = /^([^.]*)(?:\.(.+)|)/;

          function ke() {
            return !0;
          }

          function Ae() {
            return !1;
          }

          function Ee(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return x.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }

          function je(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                je(e, s, n, r, t[s], i);
              return e;
            }
            if (
              (null == r && null == o
                ? ((o = n), (r = n = void 0))
                : null == o &&
                  ("string" == typeof n
                    ? ((o = r), (r = void 0))
                    : ((o = r), (r = n), (n = void 0))),
              !1 === o)
            )
              o = Ae;
            else if (!o) return e;
            return (
              1 === i &&
                ((a = o),
                (o = function (e) {
                  return S().off(e), a.apply(this, arguments);
                }),
                (o.guid = a.guid || (a.guid = S.guid++))),
              e.each(function () {
                S.event.add(this, t, o, r, n);
              })
            );
          }

          function Ne(e, t, n) {
            n
              ? (K.set(e, t, !1),
                S.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      o,
                      i = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (i.length)
                        (S.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((i = s.call(arguments)),
                        K.set(this, t, i),
                        (r = n(this, t)),
                        this[t](),
                        i !== (o = K.get(this, t)) || r
                          ? K.set(this, t, !1)
                          : (o = {}),
                        i !== o)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          o && o.value
                        );
                    } else
                      i.length &&
                        (K.set(this, t, {
                          value: S.event.trigger(
                            S.extend(i[0], S.Event.prototype),
                            i.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === K.get(e, t) && S.event.add(e, t, ke);
          }
          (S.event = {
            global: {},
            add: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = K.get(e);
              if (Y(e))
                for (
                  n.handler && ((n = (i = n).handler), (o = i.selector)),
                    o && S.find.matchesSelector(ae, o),
                    n.guid || (n.guid = S.guid++),
                    (u = y.events) || (u = y.events = Object.create(null)),
                    (a = y.handle) ||
                      (a = y.handle =
                        function (t) {
                          return void 0 !== S && S.event.triggered !== t.type
                            ? S.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    l = (t = (t || "").match($) || [""]).length;
                  l--;

                )
                  (d = g = (s = Se.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d &&
                      ((f = S.event.special[d] || {}),
                      (d = (o ? f.delegateType : f.bindType) || d),
                      (f = S.event.special[d] || {}),
                      (c = S.extend(
                        {
                          type: d,
                          origType: g,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: o,
                          needsContext: o && S.expr.match.needsContext.test(o),
                          namespace: h.join("."),
                        },
                        i
                      )),
                      (p = u[d]) ||
                        (((p = u[d] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(d, a))),
                      f.add &&
                        (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                      (S.event.global[d] = !0));
            },
            remove: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = K.hasData(e) && K.get(e);
              if (y && (u = y.events)) {
                for (l = (t = (t || "").match($) || [""]).length; l--; )
                  if (
                    ((d = g = (s = Se.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d)
                  ) {
                    for (
                      f = S.event.special[d] || {},
                        p =
                          u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = i = p.length;
                      i--;

                    )
                      (c = p[i]),
                        (!o && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (s && !s.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ("**" !== r || !c.selector)) ||
                          (p.splice(i, 1),
                          c.selector && p.delegateCount--,
                          f.remove && f.remove.call(e, c));
                    a &&
                      !p.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                        S.removeEvent(e, d, y.handle),
                      delete u[d]);
                  } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && K.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s = new Array(arguments.length),
                u = S.event.fix(e),
                l =
                  (K.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
              for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
              ) {
                for (
                  a = S.event.handlers.call(this, u, l), t = 0;
                  (o = a[t++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = o.elem, n = 0;
                    (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== i.namespace &&
                      !u.rnamespace.test(i.namespace)) ||
                      ((u.handleObj = i),
                      (u.data = i.data),
                      void 0 !==
                        (r = (
                          (S.event.special[i.origType] || {}).handle ||
                          i.handler
                        ).apply(o.elem, s)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                o,
                i,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (
                    1 === l.nodeType &&
                    ("click" !== e.type || !0 !== l.disabled)
                  ) {
                    for (i = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(o = (r = t[n]).selector + " ")] &&
                        (a[o] = r.needsContext
                          ? S(o, this).index(l) > -1
                          : S.find(o, this, null, [l]).length),
                        a[o] && i.push(r);
                    i.length &&
                      s.push({
                        elem: l,
                        handlers: i,
                      });
                  }
              return (
                (l = this),
                u < t.length &&
                  s.push({
                    elem: l,
                    handlers: t.slice(u),
                  }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(S.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
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
              return e[S.expando] ? e : new S.Event(e);
            },
            special: {
              load: {
                noBubble: !0,
              },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ye.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      Ne(t, "click", ke),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ye.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      Ne(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ye.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      K.get(t, "click")) ||
                    D(t, "a")
                  );
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
            (S.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (S.Event = function (e, t) {
              if (!(this instanceof S.Event)) return new S.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? ke
                      : Ae),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
            }),
            (S.Event.prototype = {
              constructor: S.Event,
              isDefaultPrevented: Ae,
              isPropagationStopped: Ae,
              isImmediatePropagationStopped: Ae,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = ke),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = ke),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = ke),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            S.each(
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
                code: !0,
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
                which: !0,
              },
              S.event.addProp
            ),
            S.each(
              {
                focus: "focusin",
                blur: "focusout",
              },
              function (e, t) {
                S.event.special[e] = {
                  setup: function () {
                    return Ne(this, e, Ee), !1;
                  },
                  trigger: function () {
                    return Ne(this, e), !0;
                  },
                  _default: function () {
                    return !0;
                  },
                  delegateType: t,
                };
              }
            ),
            S.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                S.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = this,
                      o = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (o && (o === r || S.contains(r, o))) ||
                        ((e.type = i.origType),
                        (n = i.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            S.fn.extend({
              on: function (e, t, n, r) {
                return je(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return je(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    S(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Ae),
                  this.each(function () {
                    S.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var De = /<script|<style|<link/i,
            qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

          function He(e, t) {
            return (
              (D(e, "table") &&
                D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                S(e).children("tbody")[0]) ||
              e
            );
          }

          function Oe(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }

          function Pe(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }

          function Re(e, t) {
            var n, r, o, i, a, s;
            if (1 === t.nodeType) {
              if (K.hasData(e) && (s = K.get(e).events))
                for (o in (K.remove(t, "handle events"), s))
                  for (n = 0, r = s[o].length; n < r; n++)
                    S.event.add(t, o, s[o][n]);
              Z.hasData(e) &&
                ((i = Z.access(e)), (a = S.extend({}, i)), Z.set(t, a));
            }
          }

          function Me(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ye.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }

          function $e(e, t, n, r) {
            t = u(t);
            var o,
              i,
              a,
              s,
              l,
              c,
              f = 0,
              p = e.length,
              d = p - 1,
              h = t[0],
              g = v(h);
            if (
              g ||
              (p > 1 && "string" == typeof h && !y.checkClone && qe.test(h))
            )
              return e.each(function (o) {
                var i = e.eq(o);
                g && (t[0] = h.call(this, o, i.html())), $e(i, t, n, r);
              });
            if (
              p &&
              ((i = (o = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === o.childNodes.length && (o = i),
              i || r)
            ) {
              for (s = (a = S.map(we(o, "script"), Oe)).length; f < p; f++)
                (l = o),
                  f !== d &&
                    ((l = S.clone(l, !0, !0)),
                    s && S.merge(a, we(l, "script"))),
                  n.call(e[f], l, f);
              if (s)
                for (
                  c = a[a.length - 1].ownerDocument, S.map(a, Pe), f = 0;
                  f < s;
                  f++
                )
                  (l = a[f]),
                    me.test(l.type || "") &&
                      !K.access(l, "globalEval") &&
                      S.contains(c, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? S._evalUrl &&
                          !l.noModule &&
                          S._evalUrl(
                            l.src,
                            {
                              nonce: l.nonce || l.getAttribute("nonce"),
                            },
                            c
                          )
                        : b(l.textContent.replace(Le, ""), l, c));
            }
            return e;
          }

          function ze(e, t, n) {
            for (
              var r, o = t ? S.filter(t, e) : e, i = 0;
              null != (r = o[i]);
              i++
            )
              n || 1 !== r.nodeType || S.cleanData(we(r)),
                r.parentNode &&
                  (n && se(r) && be(we(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          S.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                o,
                i,
                a,
                s = e.cloneNode(!0),
                u = se(e);
              if (
                !(
                  y.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  S.isXMLDoc(e)
                )
              )
                for (a = we(s), r = 0, o = (i = we(e)).length; r < o; r++)
                  Me(i[r], a[r]);
              if (t)
                if (n)
                  for (
                    i = i || we(e), a = a || we(s), r = 0, o = i.length;
                    r < o;
                    r++
                  )
                    Re(i[r], a[r]);
                else Re(e, s);
              return (
                (a = we(s, "script")).length > 0 &&
                  be(a, !u && we(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, o = S.event.special, i = 0;
                void 0 !== (n = e[i]);
                i++
              )
                if (Y(n)) {
                  if ((t = n[K.expando])) {
                    if (t.events)
                      for (r in t.events)
                        o[r]
                          ? S.event.remove(n, r)
                          : S.removeEvent(n, r, t.handle);
                    n[K.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            S.fn.extend({
              detach: function (e) {
                return ze(this, e, !0);
              },
              remove: function (e) {
                return ze(this, e);
              },
              text: function (e) {
                return X(
                  this,
                  function (e) {
                    return void 0 === e
                      ? S.text(this)
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
                return $e(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    He(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return $e(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = He(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return $e(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return $e(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (S.cleanData(we(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return S.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return X(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !De.test(e) &&
                      !xe[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = S.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (S.cleanData(we(t, !1)), (t.innerHTML = e));
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
                return $e(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    S.inArray(this, e) < 0 &&
                      (S.cleanData(we(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            S.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                S.fn[e] = function (e) {
                  for (
                    var n, r = [], o = S(e), i = o.length - 1, a = 0;
                    a <= i;
                    a++
                  )
                    (n = a === i ? this : this.clone(!0)),
                      S(o[a])[t](n),
                      l.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            Ie = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            Fe = function (e, t, n) {
              var r,
                o,
                i = {};
              for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
              for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
              return r;
            },
            Be = new RegExp(ie.join("|"), "i");

          function _e(e, t, n) {
            var r,
              o,
              i,
              a,
              s = e.style;
            return (
              (n = n || Ie(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  se(e) ||
                  (a = S.style(e, t)),
                !y.pixelBoxStyles() &&
                  We.test(a) &&
                  Be.test(t) &&
                  ((r = s.width),
                  (o = s.minWidth),
                  (i = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = o),
                  (s.maxWidth = i))),
              void 0 !== a ? a + "" : a
            );
          }

          function Xe(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (l.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ae.appendChild(l).appendChild(c);
                var e = r.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (o = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (i = 12 === t(c.offsetWidth / 3)),
                  ae.removeChild(l),
                  (c = null);
              }
            }

            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              o,
              i,
              a,
              s,
              u,
              l = x.createElement("div"),
              c = x.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (y.clearCloneStyle = "content-box" === c.style.backgroundClip),
              S.extend(y, {
                boxSizingReliable: function () {
                  return e(), o;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), i;
                },
                reliableTrDimensions: function () {
                  var e, t, n, o;
                  return (
                    null == s &&
                      ((e = x.createElement("table")),
                      (t = x.createElement("tr")),
                      (n = x.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      ae.appendChild(e).appendChild(t).appendChild(n),
                      (o = r.getComputedStyle(t)),
                      (s =
                        parseInt(o.height, 10) +
                          parseInt(o.borderTopWidth, 10) +
                          parseInt(o.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ae.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Ue = ["Webkit", "Moz", "ms"],
            Qe = x.createElement("div").style,
            Ve = {};

          function Ge(e) {
            var t = S.cssProps[e] || Ve[e];
            return (
              t ||
              (e in Qe
                ? e
                : (Ve[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
                        n--;

                      )
                        if ((e = Ue[n] + t) in Qe) return e;
                    })(e) || e))
            );
          }
          var Ye = /^(none|table(?!-c[ea]).+)/,
            Je = /^--/,
            Ke = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ze = {
              letterSpacing: "0",
              fontWeight: "400",
            };

          function et(e, t, n) {
            var r = oe.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }

          function tt(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += S.css(e, n + ie[a], !0, o)),
                r
                  ? ("content" === n &&
                      (u -= S.css(e, "padding" + ie[a], !0, o)),
                    "margin" !== n &&
                      (u -= S.css(e, "border" + ie[a] + "Width", !0, o)))
                  : ((u += S.css(e, "padding" + ie[a], !0, o)),
                    "padding" !== n
                      ? (u += S.css(e, "border" + ie[a] + "Width", !0, o))
                      : (s += S.css(e, "border" + ie[a] + "Width", !0, o)));
            return (
              !r &&
                i >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        i -
                        u -
                        s -
                        0.5
                    )
                  ) || 0),
              u
            );
          }

          function nt(e, t, n) {
            var r = Ie(e),
              o =
                (!y.boxSizingReliable() || n) &&
                "border-box" === S.css(e, "boxSizing", !1, r),
              i = o,
              a = _e(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (We.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!y.boxSizingReliable() && o) ||
                (!y.reliableTrDimensions() && D(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((o = "border-box" === S.css(e, "boxSizing", !1, r)),
                (i = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                tt(e, t, n || (o ? "border" : "content"), i, r, a) +
                "px"
            );
          }

          function rt(e, t, n, r, o) {
            return new rt.prototype.init(e, t, n, r, o);
          }
          S.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = _e(e, "opacity");
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
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  i,
                  a,
                  s = G(t),
                  u = Je.test(t),
                  l = e.style;
                if (
                  (u || (t = Ge(s)),
                  (a = S.cssHooks[t] || S.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (o = a.get(e, !1, r))
                    ? o
                    : l[t];
                "string" === (i = typeof n) &&
                  (o = oe.exec(n)) &&
                  o[1] &&
                  ((n = ce(e, t, o)), (i = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== i ||
                      u ||
                      (n += (o && o[3]) || (S.cssNumber[s] ? "" : "px")),
                    y.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (l[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var o,
                i,
                a,
                s = G(t);
              return (
                Je.test(t) || (t = Ge(s)),
                (a = S.cssHooks[t] || S.cssHooks[s]) &&
                  "get" in a &&
                  (o = a.get(e, !0, n)),
                void 0 === o && (o = _e(e, t, r)),
                "normal" === o && t in Ze && (o = Ze[t]),
                "" === n || n
                  ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
                  : o
              );
            },
          }),
            S.each(["height", "width"], function (e, t) {
              S.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Ye.test(S.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, r)
                      : Fe(e, Ke, function () {
                          return nt(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var o,
                    i = Ie(e),
                    a = !y.scrollboxSize() && "absolute" === i.position,
                    s =
                      (a || r) && "border-box" === S.css(e, "boxSizing", !1, i),
                    u = r ? tt(e, t, r, s, i) : 0;
                  return (
                    s &&
                      a &&
                      (u -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(i[t]) -
                          tt(e, t, "border", !1, i) -
                          0.5
                      )),
                    u &&
                      (o = oe.exec(n)) &&
                      "px" !== (o[3] || "px") &&
                      ((e.style[t] = n), (n = S.css(e, t))),
                    et(0, n, u)
                  );
                },
              };
            }),
            (S.cssHooks.marginLeft = Xe(y.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(_e(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Fe(
                        e,
                        {
                          marginLeft: 0,
                        },
                        function () {
                          return e.getBoundingClientRect().left;
                        }
                      )) + "px"
                );
            })),
            S.each(
              {
                margin: "",
                padding: "",
                border: "Width",
              },
              function (e, t) {
                (S.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        o = {},
                        i = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
                    return o;
                  },
                }),
                  "margin" !== e && (S.cssHooks[e + t].set = et);
              }
            ),
            S.fn.extend({
              css: function (e, t) {
                return X(
                  this,
                  function (e, t, n) {
                    var r,
                      o,
                      i = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = Ie(e), o = t.length; a < o; a++)
                        i[t[a]] = S.css(e, t[a], !1, r);
                      return i;
                    }
                    return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (S.Tween = rt),
            (rt.prototype = {
              constructor: rt,
              init: function (e, t, n, r, o, i) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = o || S.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = i || (S.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = rt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : rt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = rt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        S.easing[this.easing](
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
                  n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (rt.prototype.init.prototype = rt.prototype),
            (rt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  S.fx.step[e.prop]
                    ? S.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!S.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : S.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (rt.propHooks.scrollTop = rt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (S.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (S.fx = rt.prototype.init),
            (S.fx.step = {});
          var ot,
            it,
            at = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;

          function ut() {
            it &&
              (!1 === x.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(ut)
                : r.setTimeout(ut, S.fx.interval),
              S.fx.tick());
          }

          function lt() {
            return (
              r.setTimeout(function () {
                ot = void 0;
              }),
              (ot = Date.now())
            );
          }

          function ct(e, t) {
            var n,
              r = 0,
              o = {
                height: e,
              };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              o["margin" + (n = ie[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o;
          }

          function ft(e, t, n) {
            for (
              var r,
                o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                i = 0,
                a = o.length;
              i < a;
              i++
            )
              if ((r = o[i].call(n, t, e))) return r;
          }

          function pt(e, t, n) {
            var r,
              o,
              i = 0,
              a = pt.prefilters.length,
              s = S.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (o) return !1;
                for (
                  var t = ot || lt(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = 1 - (n / l.duration || 0),
                    i = 0,
                    a = l.tweens.length;
                  i < a;
                  i++
                )
                  l.tweens[i].run(r);
                return (
                  s.notifyWith(e, [l, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [l, 1, 0]),
                      s.resolveWith(e, [l]),
                      !1)
                );
              },
              l = s.promise({
                elem: e,
                props: S.extend({}, t),
                opts: S.extend(
                  !0,
                  {
                    specialEasing: {},
                    easing: S.easing._default,
                  },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: ot || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = S.Tween(
                    e,
                    l.opts,
                    t,
                    n,
                    l.opts.specialEasing[t] || l.opts.easing
                  );
                  return l.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? l.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; n < r; n++) l.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                      : s.rejectWith(e, [l, t]),
                    this
                  );
                },
              }),
              c = l.props;
            for (
              !(function (e, t) {
                var n, r, o, i, a;
                for (n in e)
                  if (
                    ((o = t[(r = G(n))]),
                    (i = e[n]),
                    Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                    n !== r && ((e[r] = i), delete e[n]),
                    (a = S.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((i = a.expand(i)), delete e[r], i))
                      (n in e) || ((e[n] = i[n]), (t[n] = o));
                  else t[r] = o;
              })(c, l.opts.specialEasing);
              i < a;
              i++
            )
              if ((r = pt.prefilters[i].call(l, e, c, l.opts)))
                return (
                  v(r.stop) &&
                    (S._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              S.map(c, ft, l),
              v(l.opts.start) && l.opts.start.call(e, l),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
              S.fx.timer(
                S.extend(u, {
                  elem: e,
                  anim: l,
                  queue: l.opts.queue,
                })
              ),
              l
            );
          }
          (S.Animation = S.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ce(n.elem, e, oe.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match($));
              for (var n, r = 0, o = e.length; r < o; r++)
                (n = e[r]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f = "width" in t || "height" in t,
                  p = this,
                  d = {},
                  h = e.style,
                  g = e.nodeType && le(e),
                  y = K.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = S._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((o = t[r]), at.test(o))) {
                    if (
                      (delete t[r],
                      (i = i || "toggle" === o),
                      o === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== o || !y || void 0 === y[r]) continue;
                      g = !0;
                    }
                    d[r] = (y && y[r]) || S.style(e, r);
                  }
                if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = y && y.display) && (l = K.get(e, "display")),
                    "none" === (c = S.css(e, "display")) &&
                      (l
                        ? (c = l)
                        : (de([e], !0),
                          (l = e.style.display || l),
                          (c = S.css(e, "display")),
                          de([e]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                      "none" === S.css(e, "float") &&
                      (u ||
                        (p.done(function () {
                          h.display = l;
                        }),
                        null == l &&
                          ((c = h.display), (l = "none" === c ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  d))
                    u ||
                      (y
                        ? "hidden" in y && (g = y.hidden)
                        : (y = K.access(e, "fxshow", {
                            display: l,
                          })),
                      i && (y.hidden = !g),
                      g && de([e], !0),
                      p.done(function () {
                        for (r in (g || de([e]), K.remove(e, "fxshow"), d))
                          S.style(e, r, d[r]);
                      })),
                      (u = ft(g ? y[r] : 0, r, p)),
                      r in y ||
                        ((y[r] = u.start),
                        g && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (S.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? S.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                S.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in S.fx.speeds
                      ? (r.duration = S.fx.speeds[r.duration])
                      : (r.duration = S.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  v(r.old) && r.old.call(this),
                    r.queue && S.dequeue(this, r.queue);
                }),
                r
              );
            }),
            S.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(le).css("opacity", 0).show().end().animate(
                  {
                    opacity: t,
                  },
                  e,
                  n,
                  r
                );
              },
              animate: function (e, t, n, r) {
                var o = S.isEmptyObject(e),
                  i = S.speed(t, n, r),
                  a = function () {
                    var t = pt(this, S.extend({}, e), i);
                    (o || K.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      o = null != e && e + "queueHooks",
                      i = S.timers,
                      a = K.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                      for (o in a) a[o] && a[o].stop && st.test(o) && r(a[o]);
                    for (o = i.length; o--; )
                      i[o].elem !== this ||
                        (null != e && i[o].queue !== e) ||
                        (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                    (!t && n) || S.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = K.get(this),
                      r = n[e + "queue"],
                      o = n[e + "queueHooks"],
                      i = S.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        S.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = i.length;
                      t--;

                    )
                      i[t].elem === this &&
                        i[t].queue === e &&
                        (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            S.each(["toggle", "show", "hide"], function (e, t) {
              var n = S.fn[t];
              S.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ct(t, !0), e, r, o);
              };
            }),
            S.each(
              {
                slideDown: ct("show"),
                slideUp: ct("hide"),
                slideToggle: ct("toggle"),
                fadeIn: {
                  opacity: "show",
                },
                fadeOut: {
                  opacity: "hide",
                },
                fadeToggle: {
                  opacity: "toggle",
                },
              },
              function (e, t) {
                S.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (S.timers = []),
            (S.fx.tick = function () {
              var e,
                t = 0,
                n = S.timers;
              for (ot = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || S.fx.stop(), (ot = void 0);
            }),
            (S.fx.timer = function (e) {
              S.timers.push(e), S.fx.start();
            }),
            (S.fx.interval = 13),
            (S.fx.start = function () {
              it || ((it = !0), ut());
            }),
            (S.fx.stop = function () {
              it = null;
            }),
            (S.fx.speeds = {
              slow: 600,
              fast: 200,
              _default: 400,
            }),
            (S.fn.delay = function (e, t) {
              return (
                (e = (S.fx && S.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var o = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(o);
                  };
                })
              );
            }),
            (function () {
              var e = x.createElement("input"),
                t = x
                  .createElement("select")
                  .appendChild(x.createElement("option"));
              (e.type = "checkbox"),
                (y.checkOn = "" !== e.value),
                (y.optSelected = t.selected),
                ((e = x.createElement("input")).value = "t"),
                (e.type = "radio"),
                (y.radioValue = "t" === e.value);
            })();
          var dt,
            ht = S.expr.attrHandle;
          S.fn.extend({
            attr: function (e, t) {
              return X(this, S.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                S.removeAttr(this, e);
              });
            },
          }),
            S.extend({
              attr: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return void 0 === e.getAttribute
                    ? S.prop(e, t, n)
                    : ((1 === i && S.isXMLDoc(e)) ||
                        (o =
                          S.attrHooks[t.toLowerCase()] ||
                          (S.expr.match.bool.test(t) ? dt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void S.removeAttr(e, t)
                          : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : o && "get" in o && null !== (r = o.get(e, t))
                        ? r
                        : null == (r = S.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!y.radioValue && "radio" === t && D(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  o = t && t.match($);
                if (o && 1 === e.nodeType)
                  for (; (n = o[r++]); ) e.removeAttribute(n);
              },
            }),
            (dt = {
              set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ht[t] || S.find.attr;
              ht[t] = function (e, t, r) {
                var o,
                  i,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((i = ht[a]),
                    (ht[a] = o),
                    (o = null != n(e, t, r) ? a : null),
                    (ht[a] = i)),
                  o
                );
              };
            });
          var gt = /^(?:input|select|textarea|button)$/i,
            yt = /^(?:a|area)$/i;

          function vt(e) {
            return (e.match($) || []).join(" ");
          }

          function mt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }

          function xt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match($)) || [];
          }
          S.fn.extend({
            prop: function (e, t) {
              return X(this, S.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[S.propFix[e] || e];
              });
            },
          }),
            S.extend({
              prop: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return (
                    (1 === i && S.isXMLDoc(e)) ||
                      ((t = S.propFix[t] || t), (o = S.propHooks[t])),
                    void 0 !== n
                      ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : o && "get" in o && null !== (r = o.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: {
                for: "htmlFor",
                class: "className",
              },
            }),
            y.optSelected ||
              (S.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            S.each(
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
                S.propFix[this.toLowerCase()] = this;
              }
            ),
            S.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u = 0;
                if (v(e))
                  return this.each(function (t) {
                    S(this).addClass(e.call(this, t, mt(this)));
                  });
                if ((t = xt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((o = mt(n)), (r = 1 === n.nodeType && " " + vt(o) + " "))
                    ) {
                      for (a = 0; (i = t[a++]); )
                        r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                      o !== (s = vt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u = 0;
                if (v(e))
                  return this.each(function (t) {
                    S(this).removeClass(e.call(this, t, mt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = xt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((o = mt(n)), (r = 1 === n.nodeType && " " + vt(o) + " "))
                    ) {
                      for (a = 0; (i = t[a++]); )
                        for (; r.indexOf(" " + i + " ") > -1; )
                          r = r.replace(" " + i + " ", " ");
                      o !== (s = vt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : v(e)
                  ? this.each(function (n) {
                      S(this).toggleClass(e.call(this, n, mt(this), t), t);
                    })
                  : this.each(function () {
                      var t, o, i, a;
                      if (r)
                        for (o = 0, i = S(this), a = xt(e); (t = a[o++]); )
                          i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = mt(this)) && K.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : K.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + vt(mt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var wt = /\r/g;
          S.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                o = this[0];
              return arguments.length
                ? ((r = v(e)),
                  this.each(function (n) {
                    var o;
                    1 === this.nodeType &&
                      (null == (o = r ? e.call(this, n, S(this).val()) : e)
                        ? (o = "")
                        : "number" == typeof o
                        ? (o += "")
                        : Array.isArray(o) &&
                          (o = S.map(o, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        S.valHooks[this.type] ||
                        S.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, o, "value")) ||
                        (this.value = o));
                  }))
                : o
                ? (t =
                    S.valHooks[o.type] ||
                    S.valHooks[o.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(o, "value"))
                  ? n
                  : "string" == typeof (n = o.value)
                  ? n.replace(wt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            S.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      o = e.options,
                      i = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                      if (
                        ((n = o[r]).selected || r === i) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
                      ) {
                        if (((t = S(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, o = e.options, i = S.makeArray(t), a = o.length;
                      a--;

                    )
                      ((r = o[a]).selected =
                        S.inArray(S.valHooks.option.get(r), i) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), i;
                  },
                },
              },
            }),
            S.each(["radio", "checkbox"], function () {
              (S.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = S.inArray(S(e).val(), t) > -1);
                },
              }),
                y.checkOn ||
                  (S.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (y.focusin = "onfocusin" in r);
          var bt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
              e.stopPropagation();
            };
          S.extend(S.event, {
            trigger: function (e, t, n, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                h = [n || x],
                g = d.call(e, "type") ? e.type : e,
                y = d.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = p = s = n = n || x),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !bt.test(g + S.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((y = g.split(".")), (g = y.shift()), y.sort()),
                  (l = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[S.expando]
                    ? e
                    : new S.Event(g, "object" == typeof e && e)).isTrigger = o
                    ? 2
                    : 3),
                  (e.namespace = y.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : S.makeArray(t, [e])),
                  (f = S.event.special[g] || {}),
                  o || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!o && !f.noBubble && !m(n)) {
                  for (
                    u = f.delegateType || g,
                      bt.test(u + g) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || x) &&
                    h.push(s.defaultView || s.parentWindow || r);
                }
                for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
                  (p = a),
                    (e.type = i > 1 ? u : f.bindType || g),
                    (c =
                      (K.get(a, "events") || Object.create(null))[e.type] &&
                      K.get(a, "handle")) && c.apply(a, t),
                    (c = l && a[l]) &&
                      c.apply &&
                      Y(a) &&
                      ((e.result = c.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  o ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                    !Y(n) ||
                    (l &&
                      v(n[g]) &&
                      !m(n) &&
                      ((s = n[l]) && (n[l] = null),
                      (S.event.triggered = g),
                      e.isPropagationStopped() && p.addEventListener(g, Tt),
                      n[g](),
                      e.isPropagationStopped() && p.removeEventListener(g, Tt),
                      (S.event.triggered = void 0),
                      s && (n[l] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = S.extend(new S.Event(), n, {
                type: e,
                isSimulated: !0,
              });
              S.event.trigger(r, null, t);
            },
          }),
            S.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  S.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
              },
            }),
            y.focusin ||
              S.each(
                {
                  focus: "focusin",
                  blur: "focusout",
                },
                function (e, t) {
                  var n = function (e) {
                    S.event.simulate(t, e.target, S.event.fix(e));
                  };
                  S.event.special[t] = {
                    setup: function () {
                      var r = this.ownerDocument || this.document || this,
                        o = K.access(r, t);
                      o || r.addEventListener(e, n, !0),
                        K.access(r, t, (o || 0) + 1);
                    },
                    teardown: function () {
                      var r = this.ownerDocument || this.document || this,
                        o = K.access(r, t) - 1;
                      o
                        ? K.access(r, t, o)
                        : (r.removeEventListener(e, n, !0), K.remove(r, t));
                    },
                  };
                }
              );
          var Ct = r.location,
            St = {
              guid: Date.now(),
            },
            kt = /\?/;
          S.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                S.error(
                  "Invalid XML: " +
                    (n
                      ? S.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var At = /\[\]$/,
            Et = /\r?\n/g,
            jt = /^(?:submit|button|image|reset|file)$/i,
            Nt = /^(?:input|select|textarea|keygen)/i;

          function Dt(e, t, n, r) {
            var o;
            if (Array.isArray(t))
              S.each(t, function (t, o) {
                n || At.test(e)
                  ? r(e, o)
                  : Dt(
                      e +
                        "[" +
                        ("object" == typeof o && null != o ? t : "") +
                        "]",
                      o,
                      n,
                      r
                    );
              });
            else if (n || "object" !== T(t)) r(e, t);
            else for (o in t) Dt(e + "[" + o + "]", t[o], n, r);
          }
          (S.param = function (e, t) {
            var n,
              r = [],
              o = function (e, t) {
                var n = v(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
              S.each(e, function () {
                o(this.name, this.value);
              });
            else for (n in e) Dt(n, e[n], t, o);
            return r.join("&");
          }),
            S.fn.extend({
              serialize: function () {
                return S.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = S.prop(this, "elements");
                  return e ? S.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !S(this).is(":disabled") &&
                      Nt.test(this.nodeName) &&
                      !jt.test(e) &&
                      (this.checked || !ye.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = S(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? S.map(n, function (e) {
                          return {
                            name: t.name,
                            value: e.replace(Et, "\r\n"),
                          };
                        })
                      : {
                          name: t.name,
                          value: n.replace(Et, "\r\n"),
                        };
                  })
                  .get();
              },
            });
          var qt = /%20/g,
            Lt = /#.*$/,
            Ht = /([?&])_=[^&]*/,
            Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Pt = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            Mt = {},
            $t = {},
            zt = "*/".concat("*"),
            Wt = x.createElement("a");

          function It(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                o = 0,
                i = t.toLowerCase().match($) || [];
              if (v(n))
                for (; (r = i[o++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }

          function Ft(e, t, n, r) {
            var o = {},
              i = e === $t;

            function a(s) {
              var u;
              return (
                (o[s] = !0),
                S.each(e[s] || [], function (e, s) {
                  var l = s(t, n, r);
                  return "string" != typeof l || i || o[l]
                    ? i
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!o["*"] && a("*"));
          }

          function Bt(e, t) {
            var n,
              r,
              o = S.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && S.extend(!0, e, r), e;
          }
          (Wt.href = Ct.href),
            S.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ct.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": zt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: {
                  xml: /\bxml\b/,
                  html: /\bhtml/,
                  json: /\bjson\b/,
                },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": S.parseXML,
                },
                flatOptions: {
                  url: !0,
                  context: !0,
                },
              },
              ajaxSetup: function (e, t) {
                return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e);
              },
              ajaxPrefilter: It(Mt),
              ajaxTransport: It($t),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f,
                  p,
                  d = S.ajaxSetup({}, t),
                  h = d.context || d,
                  g = d.context && (h.nodeType || h.jquery) ? S(h) : S.event,
                  y = S.Deferred(),
                  v = S.Callbacks("once memory"),
                  m = d.statusCode || {},
                  w = {},
                  b = {},
                  T = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (l) {
                        if (!a)
                          for (a = {}; (t = Ot.exec(i)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return l ? i : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == l &&
                          ((e = b[e.toLowerCase()] = b[e.toLowerCase()] || e),
                          (w[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == l && (d.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (l) C.always(e[C.status]);
                        else for (t in e) m[t] = [m[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), k(0, t), this;
                    },
                  };
                if (
                  (y.promise(C),
                  (d.url = ((e || d.url || Ct.href) + "").replace(
                    Rt,
                    Ct.protocol + "//"
                  )),
                  (d.type = t.method || t.type || d.method || d.type),
                  (d.dataTypes = (d.dataType || "*").toLowerCase().match($) || [
                    "",
                  ]),
                  null == d.crossDomain)
                ) {
                  u = x.createElement("a");
                  try {
                    (u.href = d.url),
                      (u.href = u.href),
                      (d.crossDomain =
                        Wt.protocol + "//" + Wt.host !=
                        u.protocol + "//" + u.host);
                  } catch (e) {
                    d.crossDomain = !0;
                  }
                }
                if (
                  (d.data &&
                    d.processData &&
                    "string" != typeof d.data &&
                    (d.data = S.param(d.data, d.traditional)),
                  Ft(Mt, d, t, C),
                  l)
                )
                  return C;
                for (f in ((c = S.event && d.global) &&
                  0 == S.active++ &&
                  S.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !Pt.test(d.type)),
                (o = d.url.replace(Lt, "")),
                d.hasContent
                  ? d.data &&
                    d.processData &&
                    0 ===
                      (d.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (d.data = d.data.replace(qt, "+"))
                  : ((p = d.url.slice(o.length)),
                    d.data &&
                      (d.processData || "string" == typeof d.data) &&
                      ((o += (kt.test(o) ? "&" : "?") + d.data), delete d.data),
                    !1 === d.cache &&
                      ((o = o.replace(Ht, "$1")),
                      (p = (kt.test(o) ? "&" : "?") + "_=" + St.guid++ + p)),
                    (d.url = o + p)),
                d.ifModified &&
                  (S.lastModified[o] &&
                    C.setRequestHeader("If-Modified-Since", S.lastModified[o]),
                  S.etag[o] && C.setRequestHeader("If-None-Match", S.etag[o])),
                ((d.data && d.hasContent && !1 !== d.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", d.contentType),
                C.setRequestHeader(
                  "Accept",
                  d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                    ? d.accepts[d.dataTypes[0]] +
                        ("*" !== d.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
                    : d.accepts["*"]
                ),
                d.headers))
                  C.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || l))
                  return C.abort();
                if (
                  ((T = "abort"),
                  v.add(d.complete),
                  C.done(d.success),
                  C.fail(d.error),
                  (n = Ft($t, d, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), c && g.trigger("ajaxSend", [C, d]), l)
                  )
                    return C;
                  d.async &&
                    d.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      C.abort("timeout");
                    }, d.timeout));
                  try {
                    (l = !1), n.send(w, k);
                  } catch (e) {
                    if (l) throw e;
                    k(-1, e);
                  }
                } else k(-1, "No Transport");

                function k(e, t, a, u) {
                  var f,
                    p,
                    x,
                    w,
                    b,
                    T = t;
                  l ||
                    ((l = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (i = u || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (w = (function (e, t, n) {
                        for (
                          var r, o, i, a, s = e.contents, u = e.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (o in s)
                            if (s[o] && s[o].test(r)) {
                              u.unshift(o);
                              break;
                            }
                        if (u[0] in n) i = u[0];
                        else {
                          for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                              i = o;
                              break;
                            }
                            a || (a = o);
                          }
                          i = i || a;
                        }
                        if (i) return i !== u[0] && u.unshift(i), n[i];
                      })(d, C, a)),
                    !f &&
                      S.inArray("script", d.dataTypes) > -1 &&
                      S.inArray("json", d.dataTypes) < 0 &&
                      (d.converters["text script"] = function () {}),
                    (w = (function (e, t, n, r) {
                      var o,
                        i,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          l[a.toLowerCase()] = e.converters[a];
                      for (i = c.shift(); i; )
                        if (
                          (e.responseFields[i] && (n[e.responseFields[i]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = i),
                          (i = c.shift()))
                        )
                          if ("*" === i) i = u;
                          else if ("*" !== u && u !== i) {
                            if (!(a = l[u + " " + i] || l["* " + i]))
                              for (o in l)
                                if (
                                  (s = o.split(" "))[1] === i &&
                                  (a = l[u + " " + s[0]] || l["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = l[o])
                                    : !0 !== l[o] &&
                                      ((i = s[0]), c.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + u + " to " + i,
                                  };
                                }
                          }
                      return {
                        state: "success",
                        data: t,
                      };
                    })(d, w, C, f)),
                    f
                      ? (d.ifModified &&
                          ((b = C.getResponseHeader("Last-Modified")) &&
                            (S.lastModified[o] = b),
                          (b = C.getResponseHeader("etag")) && (S.etag[o] = b)),
                        204 === e || "HEAD" === d.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = w.state), (p = w.data), (f = !(x = w.error))))
                      : ((x = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || T) + ""),
                    f
                      ? y.resolveWith(h, [p, T, C])
                      : y.rejectWith(h, [C, T, x]),
                    C.statusCode(m),
                    (m = void 0),
                    c &&
                      g.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        C,
                        d,
                        f ? p : x,
                      ]),
                    v.fireWith(h, [C, T]),
                    c &&
                      (g.trigger("ajaxComplete", [C, d]),
                      --S.active || S.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return S.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return S.get(e, void 0, t, "script");
              },
            }),
            S.each(["get", "post"], function (e, t) {
              S[t] = function (e, n, r, o) {
                return (
                  v(n) && ((o = o || r), (r = n), (n = void 0)),
                  S.ajax(
                    S.extend(
                      {
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: r,
                      },
                      S.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            S.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (S._evalUrl = function (e, t, n) {
              return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                  "text script": function () {},
                },
                dataFilter: function (e) {
                  S.globalEval(e, t, n);
                },
              });
            }),
            S.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
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
                return v(e)
                  ? this.each(function (t) {
                      S(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = S(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  S(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      S(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (S.expr.pseudos.hidden = function (e) {
              return !S.expr.pseudos.visible(e);
            }),
            (S.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (S.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var _t = {
              0: 200,
              1223: 204,
            },
            Xt = S.ajaxSettings.xhr();
          (y.cors = !!Xt && "withCredentials" in Xt),
            (y.ajax = Xt = !!Xt),
            S.ajaxTransport(function (e) {
              var t, n;
              if (y.cors || (Xt && !e.crossDomain))
                return {
                  send: function (o, i) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      o["X-Requested-With"] ||
                      (o["X-Requested-With"] = "XMLHttpRequest"),
                    o))
                      s.setRequestHeader(a, o[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? i(0, "error")
                              : i(s.status, s.statusText)
                            : i(
                                _t[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? {
                                      binary: s.response,
                                    }
                                  : {
                                      text: s.responseText,
                                    },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            S.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            S.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: {
                script: /\b(?:java|ecma)script\b/,
              },
              converters: {
                "text script": function (e) {
                  return S.globalEval(e), e;
                },
              },
            }),
            S.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            S.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, o) {
                    (t = S("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({
                        charset: e.scriptCharset,
                        src: e.url,
                      })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && o("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      x.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Ut,
            Qt = [],
            Vt = /(=)\?(?=&|$)|\?\?/;
          S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Qt.pop() || S.expando + "_" + St.guid++;
              return (this[e] = !0), e;
            },
          }),
            S.ajaxPrefilter("json jsonp", function (e, t, n) {
              var o,
                i,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Vt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Vt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (o = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Vt, "$1" + o))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                  (e.converters["script json"] = function () {
                    return a || S.error(o + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (i = r[o]),
                  (r[o] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === i ? S(r).removeProp(o) : (r[o] = i),
                      e[o] && ((e.jsonpCallback = t.jsonpCallback), Qt.push(o)),
                      a && v(i) && i(a[0]),
                      (a = i = void 0);
                  }),
                  "script"
                );
            }),
            (y.createHTMLDocument =
              (((Ut = x.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Ut.childNodes.length)),
            (S.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (y.createHTMLDocument
                      ? (((r = (t =
                          x.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = x.location.href),
                        t.head.appendChild(r))
                      : (t = x)),
                  (i = !n && []),
                  (o = q.exec(e))
                    ? [t.createElement(o[1])]
                    : ((o = Ce([e], t, i)),
                      i && i.length && S(i).remove(),
                      S.merge([], o.childNodes)));
              var r, o, i;
            }),
            (S.fn.load = function (e, t, n) {
              var r,
                o,
                i,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (o = "POST"),
                a.length > 0 &&
                  S.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (i = arguments),
                        a.html(
                          r ? S("<div>").append(S.parseHTML(e)).find(r) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, i || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (S.expr.pseudos.animated = function (e) {
              return S.grep(S.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (S.offset = {
              setOffset: function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l = S.css(e, "position"),
                  c = S(e),
                  f = {};
                "static" === l && (e.style.position = "relative"),
                  (s = c.offset()),
                  (i = S.css(e, "top")),
                  (u = S.css(e, "left")),
                  ("absolute" === l || "fixed" === l) &&
                  (i + u).indexOf("auto") > -1
                    ? ((a = (r = c.position()).top), (o = r.left))
                    : ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
                  v(t) && (t = t.call(e, n, S.extend({}, s))),
                  null != t.top && (f.top = t.top - s.top + a),
                  null != t.left && (f.left = t.left - s.left + o),
                  "using" in t ? t.using.call(e, f) : c.css(f);
              },
            }),
            S.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        S.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : {
                        top: 0,
                        left: 0,
                      }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    o = {
                      top: 0,
                      left: 0,
                    };
                  if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === S.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((o = S(e).offset()).top += S.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (o.left += S.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - o.top - S.css(r, "marginTop", !0),
                    left: t.left - o.left - S.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === S.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            S.each(
              {
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset",
              },
              function (e, t) {
                var n = "pageYOffset" === t;
                S.fn[e] = function (r) {
                  return X(
                    this,
                    function (e, r, o) {
                      var i;
                      if (
                        (m(e)
                          ? (i = e)
                          : 9 === e.nodeType && (i = e.defaultView),
                        void 0 === o)
                      )
                        return i ? i[t] : e[r];
                      i
                        ? i.scrollTo(
                            n ? i.pageXOffset : o,
                            n ? o : i.pageYOffset
                          )
                        : (e[r] = o);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            S.each(["top", "left"], function (e, t) {
              S.cssHooks[t] = Xe(y.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = _e(e, t)), We.test(n) ? S(e).position()[t] + "px" : n
                  );
              });
            }),
            S.each(
              {
                Height: "height",
                Width: "width",
              },
              function (e, t) {
                S.each(
                  {
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e,
                  },
                  function (n, r) {
                    S.fn[r] = function (o, i) {
                      var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (!0 === o || !0 === i ? "margin" : "border");
                      return X(
                        this,
                        function (t, n, o) {
                          var i;
                          return m(t)
                            ? 0 === r.indexOf("outer")
                              ? t["inner" + e]
                              : t.document.documentElement["client" + e]
                            : 9 === t.nodeType
                            ? ((i = t.documentElement),
                              Math.max(
                                t.body["scroll" + e],
                                i["scroll" + e],
                                t.body["offset" + e],
                                i["offset" + e],
                                i["client" + e]
                              ))
                            : void 0 === o
                            ? S.css(t, n, s)
                            : S.style(t, n, o, s);
                        },
                        t,
                        a ? o : void 0,
                        a
                      );
                    };
                  }
                );
              }
            ),
            S.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                S.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            S.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            S.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                S.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (S.proxy = function (e, t) {
            var n, r, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (r = s.call(arguments, 2)),
                (o = function () {
                  return e.apply(t || this, r.concat(s.call(arguments)));
                }),
                (o.guid = e.guid = e.guid || S.guid++),
                o
              );
          }),
            (S.holdReady = function (e) {
              e ? S.readyWait++ : S.ready(!0);
            }),
            (S.isArray = Array.isArray),
            (S.parseJSON = JSON.parse),
            (S.nodeName = D),
            (S.isFunction = v),
            (S.isWindow = m),
            (S.camelCase = G),
            (S.type = T),
            (S.now = Date.now),
            (S.isNumeric = function (e) {
              var t = S.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (S.trim = function (e) {
              return null == e ? "" : (e + "").replace(Gt, "");
            }),
            void 0 ===
              (n = function () {
                return S;
              }.apply(t, [])) || (e.exports = n);
          var Yt = r.jQuery,
            Jt = r.$;
          return (
            (S.noConflict = function (e) {
              return (
                r.$ === S && (r.$ = Jt),
                e && r.jQuery === S && (r.jQuery = Yt),
                S
              );
            }),
            void 0 === o && (r.jQuery = r.$ = S),
            S
          );
        });
      },
      551: function (e, t, n) {
        "use strict";
        e.exports = n.p + "assets/img/star-apple.f60e38ba934dd78bf95a.svg";
      },
      434: function (e, t, n) {
        "use strict";
        e.exports = n.p + "assets/img/star-craig.d155e4d82c8b9064a097.png";
      },
      429: function (e, t, n) {
        "use strict";
        e.exports = n.p + "assets/img/star-peach.2fc9f94aa416df4f007e.svg";
      },
      300: function (e, t, n) {
        "use strict";
        e.exports = n.p + "assets/img/star-plum.5113ff677debe6077893.svg";
      },
    },
    t = {};

  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = {
      exports: {},
    });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (n.p = ""),
    (function () {
      "use strict";
      n(172), n(93), n(264), n(792), n(590), n(575);
      var e = n(429),
        t = n(300),
        r = n(434),
        o = n(551);
      $(function () {
        if ($(".homepage")) {
          for (
            var n = $(".shapes"),
              i =
                '<div class="shapes-group">\n\t\t\t<img class="parallax" src="'
                  .concat(
                    e,
                    '" width="70" height="70" loading="lazy" alt="" />\n\t\t\t<img class="parallax" src="'
                  )
                  .concat(
                    t,
                    '" width="70" height="70" loading="lazy" alt="" />\n\t\t\t<img class="parallax" src="'
                  )
                  .concat(
                    r,
                    '" width="270" height="270" loading="lazy" alt="" />\n\t\t\t<img class="parallax" src="'
                  )
                  .concat(
                    o,
                    '" width="170" height="170" loading="lazy" alt="" />\n\t\t\t<img class="parallax" src="'
                  )
                  .concat(
                    e,
                    '" width="70" height="70" loading="lazy" alt="" />\n\t\t\t<img class="parallax" src="'
                  )
                  .concat(
                    o,
                    '" width="170" height="170" loading="lazy" alt="" />\n\t\t</div>'
                  ),
              a = 0;
            a < 10;
            a++
          )
            n.append(i);
          $(".shapes .shapes-group").each(function (e) {
            var t = 3 * (e + 1);
            $(this).find($("img")).css("paddingBottom", "".concat(t, "px"));
          });
        }
      });
      n(460), n(238);
      $(function () {
        $(".parallax").paroller({
          factor: 0.15,
          factorXs: 0.15,
          factorSm: 0.15,
          type: "foreground",
        });
      });
      n(368);
      $(function () {
        $(".animated").waypoint(
          function () {
            $(this.element).addClass("fade-in");
          },
          {
            offset: "80%",
          }
        );
      });
    })();
})();

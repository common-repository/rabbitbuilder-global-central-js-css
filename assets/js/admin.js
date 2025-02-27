! function(e) {
    "use strict";
    var t, n, i;
    switch (function(e) {
        var t;
        if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
            var n = window.Cookies,
                i = window.Cookies = e();
            i.noConflict = function() {
                return window.Cookies = n, i
            }
        }
    }(function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) t[i] = n[i]
            }
            return t
        }

        function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        return function n(i) {
            function r() {}

            function a(t, n, a) {
                if ("undefined" != typeof document) {
                    "number" == typeof(a = e({
                        path: "/"
                    }, r.defaults, a)).expires && (a.expires = new Date(1 * new Date + 864e5 * a.expires)), a.expires = a.expires ? a.expires.toUTCString() : "";
                    try {
                        var o = JSON.stringify(n);
                        /^[\{\[]/.test(o) && (n = o)
                    } catch (e) {}
                    n = i.write ? i.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var l in a) a[l] && (s += "; " + l, !0 !== a[l] && (s += "=" + a[l].split(";")[0]));
                    return document.cookie = t + "=" + n + s
                }
            }

            function o(e, n) {
                if ("undefined" != typeof document) {
                    for (var r = {}, a = document.cookie ? document.cookie.split("; ") : [], o = 0; o < a.length; o++) {
                        var s = a[o].split("="),
                            l = s.slice(1).join("=");
                        n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                        try {
                            var c = t(s[0]);
                            if (l = (i.read || i)(l, c) || t(l), n) try {
                                l = JSON.parse(l)
                            } catch (e) {}
                            if (r[c] = l, e === c) break
                        } catch (e) {}
                    }
                    return e ? r[e] : r
                }
            }
            return r.set = a, r.get = function(e) {
                return o(e, !1)
            }, r.getJSON = function(e) {
                return o(e, !0)
            }, r.remove = function(t, n) {
                a(t, "", e(n, {
                    expires: -1
                }))
            }, r.defaults = {}, r.withConverter = n, r
        }(function() {})
    }), e("#customjscss-app-items").length ? e(".customjscss .customjscss-toggle").on("click touchend", function(t) {
        t.stopPropagation(), t.preventDefault();
        var n = e(this),
            i = n.data("id"),
            r = null;
        if (!n.hasClass("customjscss-locked")) {
            n.addClass("customjscss-readonly"), n.hasClass("customjscss-checked") ? (n.removeClass("customjscss-checked").addClass("customjscss-unchecked"), r = !1) : (n.removeClass("customjscss-unchecked").addClass("customjscss-checked"), r = !0);
            var a = rabbitbuilder_js_css.ajax_url,
                o = rabbitbuilder_js_css.ajax_nonce,
                s = rabbitbuilder_js_css.ajax_action_update,
                l = rabbitbuilder_js_css.ajax_msg_error,
                c = {
                    id: i,
                    active: r
                },
                u = e.extend(!0, {}, c);
            u = JSON.stringify(u), e.ajax({
                url: a,
                type: "POST",
                dataType: "json",
                data: {
                    nonce: o,
                    action: s,
                    config: u
                }
            }).done(function(e) {
                e && !e.success && (r ? n.removeClass("customjscss-checked").addClass("customjscss-unchecked") : n.removeClass("customjscss-unchecked").addClass("customjscss-checked"))
            }).fail(function() {
                console.log(l)
            }).always(function() {
                n.removeClass("customjscss-readonly")
            })
        }
    }) : e("#customjscss-app-item").length ? (i = {
        alight: null,
        rootScope: null,
        resizableHandle: {
            lastY: null,
            height: null
        },
        filters: null,
        settings: {
            themeJavaScript: null,
            themeCSS: null,
            themeHTML: null
        },
        ajax_url: null,
        ajax_nonce: null,
        ajax_action_update: null,
        ajax_action_get: null,
        ajax_msg_error: null,
        config: {
            id: null,
            title: null,
            data: null,
            type: null,
            active: !0,
            options: {
                showOptionsPanel: !1,
                showEditorPanel: !0,
                minify: !1,
                preprocessor: "none",
                file: "internal",
                whereonpage: "header",
                whereinsite: "user",
                filter: null
            }
        },
        fn: {
            init: function(t) {
                e("#customjscss-app-item").removeAttr("style"), t.plan = rabbitbuilder_js_css.plan, t.ajax_url = rabbitbuilder_js_css.ajax_url, t.ajax_nonce = rabbitbuilder_js_css.ajax_nonce, t.ajax_action_update = rabbitbuilder_js_css.ajax_action_update, t.ajax_action_get = rabbitbuilder_js_css.ajax_action_get, t.ajax_msg_error = rabbitbuilder_js_css.ajax_msg_error, t.fn.initConfig(t), t.fn.initResizableHandle(t)
            },
            enableLoading: function(t) {
                e("#customjscss-app-item").removeClass("customjscss-active")
            },
            disableLoading: function(t) {
                setTimeout(function() {
                    e("#customjscss-app-item").addClass("customjscss-active")
                }, 1e3)
            },
            initResizableHandle: function(t) {
                e("#customjscss-resizable-handle").on("mousedown", t, t.fn.onResizableHandleDragStart)
            },
            onResizableHandleDragStart: function(t) {
                var n = t.data;
                n.resizableHandle.lastY = t.pageY, n.resizableHandle.height = e("#customjscss-notepad").outerHeight(), e("body").on("mousemove", n, n.fn.onResizableHandleDragMove), e("body").on("mouseup mouseleave", n, n.fn.onResizableHandleDragEnd)
            },
            onResizableHandleDragMove: function(t) {
                t.preventDefault(), t.stopPropagation();
                var n = t.data,
                    i = t.pageY - n.resizableHandle.lastY;
                n.resizableHandle.lastY = t.pageY, n.resizableHandle.height += i;
                var r = e("#customjscss-notepad");
                r.css({
                    height: n.resizableHandle.height
                }), ace.edit(r.get(0)).resize()
            },
            onResizableHandleDragEnd: function(t) {
                t.preventDefault(), t.stopPropagation();
                var n = t.data;
                e("body").off("mousemove", n.fn.onResizableHandleDragMove), e("body").off("mouseup mouseleave", n.fn.onResizableHandleDragEnd), n.resizableHandle = {
                    lastY: null,
                    height: null
                }
            },
            loadFilters: function(t) {
                var n = e.Deferred();
                return e.ajax({
                    url: t.ajax_url,
                    type: "POST",
                    dataType: "json",
                    data: {
                        nonce: t.ajax_nonce,
                        action: t.ajax_action_get,
                        type: "filters"
                    },
                    success: function(e) {
                        e && e.success ? n.resolve(e.data.list) : this.error()
                    },
                    error: function(e, i, r) {
                        t.fn.showNotice(t, t.ajax_msg_error, "notice-error"), n.resolve(null)
                    }
                }), n.promise()
            },
            toggleOptionsPanel: function(e) {
                e.config.options.showOptionsPanel = !e.config.options.showOptionsPanel, e.rootScope.scan()
            },
            toggleEditorPanel: function(t) {
                t.config.options.showEditorPanel = !t.config.options.showEditorPanel, t.rootScope.scan();
                var n = e("#customjscss-notepad");
                ace.edit(n.get(0)).resize(!0)
            },
            initConfig: function(t) {
                t.fn.enableLoading(t), t.config.id = rabbitbuilder_js_css.ajax_id, t.config.type = rabbitbuilder_js_css.ajax_type, t.fn.loadFilters(t).done(function(e) {
                    t.filters = e
                }).always(function() {
                    var n;
                    if (rabbitbuilder_js_css.config && (n = e.extend(!0, {}, JSON.parse(rabbitbuilder_js_css.config))))
                        for (var i in n) t.config.hasOwnProperty(i) && (t.config[i] = n[i]);
                    if (rabbitbuilder_js_css.settings && (n = e.extend(!0, {}, JSON.parse(rabbitbuilder_js_css.settings))))
                        for (var i in n) t.settings.hasOwnProperty(i) && (t.settings[i] = n[i]);
                    var r = e("#customjscss-notepad"),
                        a = ace.edit(r.get(0));
                    a.$blockScrolling = 1 / 0, a.setTheme("ace/theme/monokai"), "css" == t.config.type ? ("less" == t.config.options.preprocessor ? a.session.setMode("ace/mode/less") : "scss" == t.config.options.preprocessor ? a.session.setMode("ace/mode/scss") : a.session.setMode("ace/mode/css"), t.settings.themeCSS && a.setTheme("ace/theme/" + t.settings.themeCSS)) : "js" == t.config.type ? (a.session.setMode("ace/mode/javascript"), t.settings.themeJavaScript && a.setTheme("ace/theme/" + t.settings.themeJavaScript)) : "html" == t.config.type ? (a.session.setMode("ace/mode/html"), t.settings.themeHTML && a.setTheme("ace/theme/" + t.settings.themeHTML)) : a.session.setMode("ace/mode/text"), t.config.data && a.getSession().setValue(t.config.data), t.rootScope.scan(), t.fn.disableLoading(t), t.rootScope.watch("appData.config.options.preprocessor", function(n) {
                        var i = e("#customjscss-notepad"),
                            r = ace.edit(i.get(0));
                        "css" == t.config.type && ("less" == t.config.options.preprocessor ? r.session.setMode("ace/mode/less") : "scss" == t.config.options.preprocessor ? r.session.setMode("ace/mode/scss") : r.session.setMode("ace/mode/css"))
                    })
                })
            },
            saveConfig: function(t) {
                t.fn.enableLoading(t);
                var n = e("#customjscss-notepad"),
                    i = ace.edit(n.get(0));
                t.config.data = i.getSession().getValue();
                var r = e.extend(!0, {}, t.config);
                r = JSON.stringify(r), e.ajax({
                    url: t.ajax_url,
                    type: "POST",
                    dataType: "json",
                    data: {
                        nonce: t.ajax_nonce,
                        action: t.ajax_action_update,
                        config: r
                    }
                }).done(function(e) {
					if (e.success == false){
						alert(e.data.msg.split("Message: ")[1]);
					}
                    if (e) return t.config.id = e.data.id, void t.fn.showNotice(t, e.data.msg, e.success ? "notice-success" : "notice-error");
                    t.fn.showNotice(t, t.ajax_msg_error, "notice-error")
                }).fail(function() {
                    t.fn.showNotice(t, t.ajax_msg_error, "notice-error")
                }).always(function() {
                    t.fn.disableLoading(t)
                })
            },
            showNotice: function(t, n, i) {
                var r = e("#customjscss-messages"),
                    a = e("<div></div>").addClass("notice is-dismissible").addClass(i),
                    o = e("<p></p>").html(n),
                    s = e("<button></button>").attr("type", "button").addClass("notice-dismiss").html('<span class="screen-reader-text">Dismiss this notice.</span>');

                function l() {
                    clearTimeout(a.data("timer")), a.fadeTo(100, 0, function() {
                        a.slideUp(100, function() {
                            a.remove()
                        })
                    })
                }
                a.data("timer", setTimeout(l, 5e3)), s.click(function(e) {
                    e.preventDefault(), l()
                }), a.append(o, s), r.append(a)
            }
        }
    }, window.alightInitCallback = function(t) {
        delete window.alightInitCallback, t.directives.al.text = {
            restrict: "EA",
            link: function(t, n, i, r) {
                var a = e(n),
                    o = e(n);
                o.on("input change", function(e) {
                    var n, s = o.val();
                    (!(n = s) || /^\s*$/.test(n)) && (s = null), r.setValue(i, s), r.scan(),
                        function() {
                            var e = a.data("callback");
                            if (e) {
                                var n = r.changeDetector.compile(e);
                                n(t)
                            }
                        }()
                }), r.watch(i, function(e) {
                    null == e ? o.val(null) : o.val(e)
                }, {
                    readOnly: !0
                })
            }
        }, t.directives.al.checkbox = {
            restrict: "EA",
            link: function(t, n, i, r) {
                var a = e(n);
                a.addClass("customjscss-toggle").html("&nbsp;"), a.on("mousedown touchstart", function(e) {
                    r.setValue(i, !r.getValue(i)), r.scan(),
                        function() {
                            var e = a.data("callback");
                            if (e) {
                                var n = r.changeDetector.compile(e);
                                n(t)
                            }
                        }()
                }), r.watch(i, function(e) {
                    e ? a.addClass("customjscss-checked").removeClass("customjscss-unchecked") : a.removeClass("customjscss-checked").addClass("customjscss-unchecked")
                }, {
                    readOnly: !0
                })
            }
        }, i.alight = t, i.rootScope = i.alight(document.querySelectorAll("#customjscss-app-item")[0], {
            appData: i
        }), i.fn.init(i)
    }) : e("#customjscss-app-filters").length || (e("#customjscss-app-filter").length ? (n = {
        alight: null,
        rootScope: null,
        ajax_url: null,
        ajax_nonce: null,
        ajax_action_update: null,
        ajax_action_get: null,
        ajax_msg_error: null,
        filter: {
            actions: null,
            operations: null,
            ruleFields: null
        },
        config: {
            id: null,
            title: null,
            data: null
        },
        fn: {
            preinit: function(t) {
                var n = e.Deferred();
                return t.fn.enableLoading(t), t.plan = rabbitbuilder_js_css.plan, t.ajax_url = rabbitbuilder_js_css.ajax_url, t.ajax_nonce = rabbitbuilder_js_css.ajax_nonce, t.ajax_action_update = rabbitbuilder_js_css.ajax_action_update, t.ajax_action_get = rabbitbuilder_js_css.ajax_action_get, t.ajax_msg_error = rabbitbuilder_js_css.ajax_msg_error, t.fn.initFilter(t).done(function() {
                    n.resolve()
                }), n.promise()
            },
            init: function(t) {
                e("#customjscss-app-filter").removeAttr("style"), t.fn.initConfig(t)
            },
            enableLoading: function(t) {
                e("#customjscss-app-filter").removeClass("customjscss-active")
            },
            disableLoading: function(t) {
                setTimeout(function() {
                    e("#customjscss-app-filter").addClass("customjscss-active")
                }, 1e3)
            },
            getFilterData: function(t, n) {
                var i = e.Deferred();
                return e.ajax({
                    url: t.ajax_url,
                    type: "POST",
                    dataType: "json",
                    data: {
                        nonce: t.ajax_nonce,
                        action: t.ajax_action_get,
                        type: n
                    },
                    success: function(e) {
                        e && e.success ? i.resolve(e.data.list) : this.error()
                    },
                    error: function(e, n, r) {
                        t.fn.showNotice(t, t.ajax_msg_error, "notice-error"), i.resolve(null)
                    }
                }), i.promise()
            },
            initFilter: function(t) {
                var n = e.Deferred();
                return e.when(t.fn.getFilterData(t, "actions"), t.fn.getFilterData(t, "operations"), t.fn.getFilterData(t, "ruleFields"), t.fn.getFilterData(t, "ruleOperations")).done(function(e, i, r, a) {
                    t.filter.actions = e, t.filter.operations = i, t.filter.ruleFields = r, t.filter.ruleOperations = a, n.resolve()
                }), n.promise()
            },
            initConfig: function(t) {
                if (t.fn.enableLoading(t), t.config.id = rabbitbuilder_js_css.ajax_id, rabbitbuilder_js_css.config) {
                    var n = e.extend(!0, {}, JSON.parse(rabbitbuilder_js_css.config));
                    if (n)
                        for (var i in n) t.config.hasOwnProperty(i) && (t.config[i] = n[i])
                }
                t.rootScope.scan(), t.fn.disableLoading(t)
            },
            saveConfig: function(t) {
                t.fn.enableLoading(t);
                var n = e.extend(!0, {}, t.config);
                n = JSON.stringify(n), e.ajax({
                    url: t.ajax_url,
                    type: "POST",
                    dataType: "json",
                    data: {
                        nonce: t.ajax_nonce,
                        action: t.ajax_action_update,
                        config: n
                    }
                }).done(function(e) {
                    if (e) return t.config.id = e.data.id, void t.fn.showNotice(t, e.data.msg, e.success ? "notice-success" : "notice-error");
                    t.fn.showNotice(t, t.ajax_msg_error, "notice-error")
                }).fail(function() {
                    t.fn.showNotice(t, t.ajax_msg_error, "notice-error")
                }).always(function() {
                    t.fn.disableLoading(t)
                })
            },
            showNotice: function(t, n, i) {
                var r = e("#customjscss-messages"),
                    a = e("<div></div>").addClass("notice is-dismissible").addClass(i),
                    o = e("<p></p>").html(n),
                    s = e("<button></button>").attr("type", "button").addClass("notice-dismiss").html('<span class="screen-reader-text">Dismiss this notice.</span>');

                function l() {
                    clearTimeout(a.data("timer")), a.fadeTo(100, 0, function() {
                        a.slideUp(100, function() {
                            a.remove()
                        })
                    })
                }
                a.data("timer", setTimeout(l, 5e3)), s.click(function(e) {
                    e.preventDefault(), l()
                }), a.append(o, s), r.append(a)
            },
            getActions: function(e) {
                return e.filter.actions
            },
            getOperations: function(e) {
                return e.filter.operations
            },
            getRuleFields: function(e) {
                return e.filter.ruleFields
            },
            getRuleOperations: function(e) {
                return e.filter.ruleOperations
            }
        }
    }, window.alightInitCallback = function(t) {
        delete window.alightInitCallback, t.directives.al.text = {
            restrict: "EA",
            link: function(t, n, i, r) {
                var a = e(n),
                    o = e(n);
                o.on("input change", function(e) {
                    var n, s = o.val();
                    (!(n = s) || /^\s*$/.test(n)) && (s = null), r.setValue(i, s), r.scan(),
                        function() {
                            var e = a.data("callback");
                            if (e) {
                                var n = r.changeDetector.compile(e);
                                n(t)
                            }
                        }()
                }), r.watch(i, function(e) {
                    null == e ? o.val(null) : o.val(e)
                }, {
                    readOnly: !0
                })
            }
        }, t.directives.al.filter = {
            restrict: "EA",
            init: function(n, i, r, a) {
                var o, s;
                return a.stopBinding = !0, o = a.changeDetector, s = {
                    start: function() {
                        s.prepareData(), s.buildUpdateDom(), s.watchModel()
                    },
                    prepareData: function() {
                        var t, a = null,
                            l = null,
                            c = null,
                            u = null,
                            f = null,
                            d = null,
                            p = null,
                            h = null;
                        if (s.expression = r, s.operations = [], s.actions = [], s.ruleFields = [], s.ruleOperations = [], s.valueBlank = null, s.$el = e(i), s.$el.addClass("customjscss-filter-builder"), a = s.$el.data("get-operations"))
                            for (d = (a = o.compile(a))({
                                    appData: n.appData
                                }), l = 0; l < d.length; l++) u = d[l], s.operations[u.id] = {
                                title: u.title
                            };
                        else console.error('The option "data-get-operations" not set');
                        if (a = s.$el.data("get-actions"))
                            for (f = (a = o.compile(a))({
                                    appData: n.appData
                                }), l = 0; l < f.length; l++) u = f[l], s.actions[u.id] = {
                                title: u.title
                            };
                        else console.error('The option "data-get-actions" not set');
                        if (a = s.$el.data("get-rule-fields"))
                            for (p = (a = o.compile(a))({
                                    appData: n.appData
                                }), l = 0; l < p.length; l++)
                                if ((u = p[l]).hasOwnProperty("list"))
                                    for (s.ruleFields[u.id] = {
                                            title: u.title,
                                            type: "group"
                                        }, c = 0; c < u.list.length; c++) s.ruleFields[u.list[c].id] = {
                                        title: u.list[c].title,
                                        type: u.list[c].type,
                                        enter: u.list[c].enter,
                                        placeholder: u.list[c].placeholder,
                                        getlist: u.list[c].getlist,
                                        pro: u.list[c].pro
                                    };
                                else s.ruleFields[u.id] = {
                                    title: u.title,
                                    type: u.type,
                                    enter: u.enter,
                                    placeholder: u.placeholder,
                                    getlist: u.getlist,
                                    pro: u.pro
                                };
                        else console.error('The option "data-get-rule-fields" not set');
                        if (a = s.$el.data("get-rule-operations")) {
                            var m = function(e, t) {
                                for (var n = 0; n < t.length; n++)
                                    if (e == t[n].id) return t[n];
                                return null
                            };
                            for (h = (a = o.compile(a))({
                                    appData: n.appData
                                }), l = 0; l < h.operations.length; l++) {
                                u = h.operations[l];
                                var v = [];
                                for (c = 0; c < u.list.length; c++) {
                                    var g = m(u.list[c], h.properties);
                                    v[u.list[c]] = {
                                        title: g.title
                                    }
                                }
                                s.ruleOperations[u.id] = v
                            }
                        } else console.error('The option "data-get-rule-operations" not set');
                        t = s.$el.data("string-value-blank"), s.valueBlank = t || "&nbsp;"
                    },
                    watchModel: function() {
                        s.watch = o.watch(s.expression, s.updateDom, {
                            deep: !0
                        })
                    },
                    rawUpdateDom: function(e, t) {
                        var n, i;
                        for (i = 0; i < e.length; i++)(n = e[i]).remove();
                        for (i = 0; i < t.length; i++)(n = t[i]).$parent.append(n.$el)
                    },
                    buildUpdateDom: function() {
                        return s.updateDom = function() {
                            var i, r, a, l, c = [],
                                u = 0;

                            function f(t) {
                                var n = e(t.currentTarget);
                                if (!n.hasClass("customjscss-filter-active")) {
                                    var i, r, a, l = t.data,
                                        c = e("<div></div>").addClass("customjscss-filter-dropdown");
                                    for (var u in s.operations) {
                                        var f = s.operations[u];
                                        i = u, r = f, a = void 0, a = null, (a = e("<a></a>").attr("href", "#").html(r.title)).on("click touchend", {
                                            operation: i,
                                            node: l
                                        }, p), l.tree.operation == i && a.addClass("customjscss-filter-selected"), c.append(a)
                                    }
                                    n.append(c);
                                    var d = function(t) {
                                        n.get(0).offsetHeight, n.hasClass("customjscss-filter-active") ? (n.removeClass("customjscss-filter-active"), c.remove(), e(window).off("click touchend", d)) : n.addClass("customjscss-filter-active")
                                    };
                                    e(window).on("click touchend", d)
                                }

                                function p(e) {
                                    var t = e.data.operation;
                                    e.data.node.tree.operation = t, o.scan()
                                }
                            }

                            function d(t) {
                                var n = e(t.currentTarget);
                                if (!n.hasClass("customjscss-filter-active")) {
                                    var i, r, a, l = t.data,
                                        c = e("<div></div>").addClass("customjscss-filter-dropdown");
                                    for (var u in s.actions) {
                                        var f = s.actions[u];
                                        "group" == u && l.level >= 2 || (i = u, r = f, a = void 0, a = null, (a = e("<a></a>").attr("href", "#").html(r.title)).on("click touchend", {
                                            action: i,
                                            node: l
                                        }, p), c.append(a))
                                    }
                                    n.append(c);
                                    var d = function(t) {
                                        n.get(0).offsetHeight, n.hasClass("customjscss-filter-active") ? (n.removeClass("customjscss-filter-active"), c.remove(), e(window).off("click touchend", d)) : n.addClass("customjscss-filter-active")
                                    };
                                    e(window).on("click touchend", d)
                                }

                                function p(e) {
                                    var t = e.data.action,
                                        n = e.data.node.tree.list;
                                    if ("rule" == t) {
                                        var i = {
                                            type: "rule",
                                            field: Object.keys(s.ruleFields)[0],
                                            operation: null,
                                            value: null
                                        };
                                        n.unshift(i)
                                    } else "group" == t && (i = {
                                        type: "group",
                                        operation: Object.keys(s.operations)[0],
                                        list: []
                                    }, n.unshift(i));
                                    o.scan()
                                }
                            }

                            function p(e) {
                                var t = e.data,
                                    n = t.parent.tree.list,
                                    i = t.index;
                                n.splice(i, 1), o.scan()
                            }

                            function h(t) {
                                var n = e(t.currentTarget);
                                if (!n.hasClass("customjscss-filter-active")) {
                                    var i = t.data,
                                        r = e("<div></div>").addClass("customjscss-filter-dropdown");
                                    for (var a in s.ruleFields) u(a, s.ruleFields[a]);
                                    n.append(r);
                                    var l = function(t) {
                                        n.get(0).offsetHeight, n.hasClass("customjscss-filter-active") ? (n.removeClass("customjscss-filter-active"), r.remove(), e(window).off("click touchend", l)) : n.addClass("customjscss-filter-active")
                                    };
                                    e(window).on("click touchend", l)
                                }

                                function c(e) {
                                    var t = e.data.field,
                                        n = e.data.node,
                                        i = n.tree,
                                        r = null;
                                    if (i.field != t) {
                                        if (i.field = t, t = s.ruleFields[n.tree.field]) {
                                            var a = s.ruleOperations[t.type];
                                            a && Object.keys(a).length > 0 && (r = Object.keys(a)[0])
                                        }
                                        i.operation = r, i.value = null, o.scan()
                                    }
                                }

                                function u(t, n) {
                                    var a = null;
                                    if ("group" == n.type) a = e("<b></b>").html(n.title);
                                    else {
                                        if (a = e("<a></a>").attr("href", "#").html(n.title), "lite" == rabbitbuilder_js_css.plan && n.pro) {
                                            var o = e("<div></div>").addClass("customjscss-pro").text("pro").attr("title", rabbitbuilder_js_css.msg_pro_title);
                                            a.append(o)
                                        }
                                        a.on("click touchend", {
                                            field: t,
                                            node: i
                                        }, c), i.tree.field == t && a.addClass("customjscss-filter-selected")
                                    }
                                    r.append(a)
                                }
                            }

                            function m(t) {
                                var n = e(t.currentTarget);
                                if (!n.hasClass("customjscss-filter-active")) {
                                    var i, r, a, l = t.data,
                                        c = e("<div></div>").addClass("customjscss-filter-dropdown"),
                                        u = s.ruleFields[l.tree.field];
                                    if (u) {
                                        var f = s.ruleOperations[u.type];
                                        if (f) {
                                            for (var d in f) {
                                                var p = f[d];
                                                i = d, r = p, a = void 0, a = null, (a = e("<a></a>").attr("href", "#").html(r.title)).on("click touchend", {
                                                    operation: i,
                                                    node: l
                                                }, m), l.tree.operation == i && a.addClass("customjscss-filter-selected"), c.append(a)
                                            }
                                            n.append(c)
                                        }
                                    }
                                    var h = function(t) {
                                        n.get(0).offsetHeight, n.hasClass("customjscss-filter-active") ? (n.removeClass("customjscss-filter-active"), c.remove(), e(window).off("click touchend", h)) : n.addClass("customjscss-filter-active")
                                    };
                                    e(window).on("click touchend", h)
                                }

                                function m(e) {
                                    var t = e.data.operation;
                                    e.data.node.tree.operation = t, o.scan()
                                }
                            }

                            function v(i) {
                                var r = e(i.currentTarget);
                                if (!r.hasClass("customjscss-filter-active")) {
                                    var a = i.data,
                                        l = s.ruleFields[a.tree.field],
                                        c = null,
                                        u = null,
                                        f = null,
                                        d = null,
                                        p = e("<div></div>").addClass("customjscss-filter-input-wrap"),
                                        h = e("<input>").addClass("customjscss-filter-input"),
                                        m = e("<div></div>").addClass("customjscss-filter-input-select customjscss-filter-loading").html("..."),
                                        v = e("<div></div>").addClass("customjscss-filter-input-clear").html('<i class="customjscss-icon-cross"></i>'),
                                        g = e("<div></div>").addClass("customjscss-filter-input-dlg-select"),
                                        y = e("<div></div>").addClass("customjscss-filter-input-dlg-select-loading"),
                                        b = e("<div></div>").addClass("customjscss-filter-input-dlg-select-data"),
                                        _ = e("<ul></ul>").addClass("customjscss-filter-input-dlg-select-data-list"),
                                        w = e("<li>{{item.title}}</li>").attr("al-repeat", "item in dialogData.items").attr("data-title", "{{item.title}}").addClass("customjscss-filter-input-dlg-select-data-list-item"),
                                        x = {
                                            scope: null,
                                            items: []
                                        },
                                        j = {
                                            dialogData: x
                                        },
                                        k = t.ChangeDetector(j);
                                    x.scope = k, _.append(w), b.append(_), g.append(y, b), m.append(g), n.appData.alight.bind(k, g.get(0)), f = function(e) {
                                            r.get(0).offsetHeight, r.hasClass("customjscss-filter-active") ? C() : r.addClass("customjscss-filter-active")
                                        }, e(window).on("click touchend", f),
                                        function() {
                                            switch (h.val(a.tree.value), l.type) {
                                                case "date":
                                                    c = {
                                                        mask: Date,
                                                        pattern: "DD/MM/YYYY",
                                                        lazy: !0,
                                                        min: new Date(1900, 0, 1),
                                                        max: new Date(2100, 0, 1),
                                                        format: function(e) {
                                                            var t = e.getDate(),
                                                                n = e.getMonth() + 1,
                                                                i = e.getFullYear();
                                                            return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), [t, n, i].join("/")
                                                        },
                                                        parse: function(e) {
                                                            var t = e.split("/");
                                                            return new Date(t[2], t[1] - 1, t[0])
                                                        },
                                                        groups: {
                                                            DD: new IMask.MaskedPattern.Group.Range([1, 31]),
                                                            MM: new IMask.MaskedPattern.Group.Range([1, 12]),
                                                            YYYY: new IMask.MaskedPattern.Group.Range([1900, 9999])
                                                        }
                                                    };
                                                    break;
                                                case "time":
                                                    c = {
                                                        mask: Date,
                                                        pattern: "HH:mm",
                                                        lazy: !0,
                                                        format: function(e) {
                                                            var t = e.getHours(),
                                                                n = e.getMinutes();
                                                            return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), [t, n].join(":")
                                                        },
                                                        parse: function(e) {
                                                            var t = e.split(":");
                                                            return new Date(1900, 0, 1, t[0], t[1])
                                                        },
                                                        groups: {
                                                            HH: new IMask.MaskedPattern.Group.Range([0, 23]),
                                                            mm: new IMask.MaskedPattern.Group.Range([0, 59])
                                                        }
                                                    };
                                                    break;
                                                case "minutes":
                                                    c = {
                                                        mask: /^([1-9]|[1-5][0-9])$/
                                                    };
                                                    break;
                                                case "hours":
                                                    c = {
                                                        mask: /^([1-9]|1[0-9]|2[0-3])$/
                                                    };
                                                    break;
                                                case "day":
                                                    c = {
                                                        mask: /^([1-9]|[1-2][0-9]|3[0-1])$/
                                                    };
                                                    break;
                                                case "day_of_week":
                                                    c = {
                                                        mask: /^([1-7])$/
                                                    };
                                                    break;
                                                case "month":
                                                    c = {
                                                        mask: /^([1-9]|1[012])$/
                                                    };
                                                    break;
                                                case "year":
                                                    c = {
                                                        mask: /^([0-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])$/
                                                    }
                                            }
                                            c && (u = new IMask(h.get(0), c)), l.placeholder && h.attr("placeholder", l.placeholder), l.getlist ? (p.addClass("customjscss-filter-input-ctrls-02"), p.append(h, m, v), m.on("click touchend", ".customjscss-filter-input-dlg-select-data-list-item", function(t) {
                                                t.stopPropagation(), t.preventDefault();
                                                var n = e(this).data("title"),
                                                    i = h.val();
                                                i = !i || /^\s*$/.test(i) ? n : i + "; " + n, h.val(i).focus()
                                            }), m.on("click touchend", function(e) {
                                                if (m.hasClass("customjscss-filter-active")) m.removeClass("customjscss-filter-active").addClass("customjscss-filter-loading");
                                                else {
                                                    m.addClass("customjscss-filter-active customjscss-filter-loading"), y.show();
                                                    var t = s.$el.data("get-list");
                                                    t && (t = o.compile(t))({
                                                        appData: n.appData,
                                                        type: l.getlist
                                                    }).done(function(e) {
                                                        x.items = e, x.scope.scan()
                                                    }).always(function() {
                                                        m.removeClass("customjscss-filter-loading"), y.hide()
                                                    })
                                                }
                                            })) : (p.addClass("customjscss-filter-input-ctrls-01"), p.append(h, v)), p.on("click touchend", function(e) {
                                                e.stopPropagation(), e.preventDefault()
                                            }), h.on("keydown", function(e) {
                                                if (13 === e.keyCode)
                                                    if (!u || u.masked.isComplete) {
                                                        C();
                                                        var t = h.val();
                                                        t && !/^\s*$/.test(t) || (t = null), a.tree.value = t, o.scan()
                                                    } else p.addClass("customjscss-filter-input-warn"), clearTimeout(d), d = setTimeout(function() {
                                                        p.removeClass("customjscss-filter-input-warn")
                                                    }, 3e3)
                                            }), v.on("click touchend", function(e) {
                                                e.stopPropagation(), e.preventDefault(), C(), a.tree.value = null, o.scan()
                                            }), r.append(p), h.focus()
                                        }()
                                }

                                function C() {
                                    clearTimeout(d), u && u.destroy(), r.removeClass("customjscss-filter-active"), p.remove(), e(window).off("click touchend", f)
                                }
                            }

                            function g(t) {
                                if ("group" != t.tree.type) {
                                    if ("rule" == t.tree.type) {
                                        var n = s.ruleFields[t.tree.field];
                                        if (a = null, !n) return;
                                        if (t.$field.html(n ? n.title : "&nbsp"), "lite" == rabbitbuilder_js_css.plan && n.pro) {
                                            var i = e("<div></div>").addClass("customjscss-pro").text("pro").attr("title", rabbitbuilder_js_css.msg_pro_title);
                                            t.$field.append(i)
                                        }
                                        if (n) {
                                            var r = s.ruleOperations[n.type];
                                            a = r ? r[t.tree.operation] : null
                                        }
                                        t.$operation.html(a ? a.title : "&nbsp"), t.$value.html('<div class="customjscss-filter-rule-value-title">' + (t.tree.value ? t.tree.value : s.valueBlank) + "</div>"), a ? (t.$operation.removeClass("customjscss-filter-hide"), t.$value.removeClass("customjscss-filter-hide")) : (t.$operation.addClass("customjscss-filter-hide"), t.$value.addClass("customjscss-filter-hide")), n.enter || t.$value.addClass("customjscss-filter-hide")
                                    }
                                } else {
                                    var a = s.operations[t.tree.operation];
                                    t.$operation.html(a.title)
                                }
                            }
                            return window.Map ? (i = new Map, a = function(e) {
                                    return i.get(e)
                                }, r = function(e) {
                                    i.delete(e.item)
                                }, l = function(e, t) {
                                    i.set(e, t)
                                }) : (i = {}, a = function(e) {
                                    var t;
                                    return "object" != typeof e ? i[e] || null : (t = e.$alite_id) ? i[t] : null
                                }, r = function(e) {
                                    var t;
                                    t = e.$id, i[t] && (e.$id = null, delete i[t])
                                }, l = function(e, n) {
                                    var r;
                                    "object" == typeof e ? (r = t.utils.getId(), e.$alite_id = r, n.$id = r, i[r] = n) : (n.$id = e, i[e] = n)
                                }),
                                function(t) {
                                    var n = t;
                                    if (n) {
                                        u++;
                                        var i = [],
                                            o = [],
                                            y = [],
                                            b = 0,
                                            _ = 0,
                                            w = null;
                                        for (b = 0, _ = c.length; b < _; b++)(w = c[b]).active = !1;
                                        var x = function(t, n, r, c, y) {
                                            var b = a(t);
                                            if (b) b.active = !0, b.index = y, b.version = u, g(b);
                                            else {
                                                var _ = null,
                                                    w = null,
                                                    j = null,
                                                    k = null,
                                                    C = null,
                                                    D = null,
                                                    $ = null,
                                                    T = null;
                                                "group" == t.type ? (_ = e("<div></div>").addClass("customjscss-filter-group"), w = e("<div></div>").addClass("customjscss-filter-group-header"), j = e("<div></div>").addClass("customjscss-filter-group-data"), k = e("<div></div>").addClass("customjscss-filter-group-operation"), C = e("<div></div>").addClass("customjscss-filter-group-action").html('<i class="customjscss-icon-plus"></i>'), D = e("<div></div>").addClass("customjscss-filter-group-delete").html('<i class="customjscss-icon-cross"></i>'), n ? w.append(D, k, C) : w.append(k, C), _.append(w, j)) : "rule" == t.type && (_ = e("<div></div>").addClass("customjscss-filter-rule"), D = e("<div></div>").addClass("customjscss-filter-rule-delete").html('<i class="customjscss-icon-cross"></i>'), $ = e("<div></div>").addClass("customjscss-filter-rule-field"), k = e("<div></div>").addClass("customjscss-filter-rule-operation"), T = e("<div></div>").addClass("customjscss-filter-rule-value"), _.append(D, $, k, T)), b = {
                                                    $el: _,
                                                    $field: $,
                                                    $operation: k,
                                                    $value: T,
                                                    $data: j,
                                                    parent: n,
                                                    prev: r,
                                                    next: null,
                                                    version: u,
                                                    level: c,
                                                    index: y,
                                                    tree: t
                                                }, r && (r.next = b), "group" == t.type ? (D.on("click touchend", b, p), k.on("click touchend", b, f), C.on("click touchend", b, d)) : "rule" == t.type && (D.on("click touchend", b, p), $.on("click touchend", b, h), k.on("click touchend", b, m), T.on("click touchend", b, v)), g(b)
                                            }
                                            if (l(t, b), o.push({
                                                    $el: b.$el,
                                                    $parent: n ? n.$data : s.$el
                                                }), t.hasOwnProperty("list")) {
                                                c++;
                                                for (var S = null, A = 0; A < t.list.length; A++) S = x(t.list[A], b, S, c, A)
                                            }
                                            return i.push(b), b
                                        };
                                        for (x(n, null, null, 0, 0), b = 0, _ = c.length; b < _; b++)(w = c[b]).active || (w.prev && (w.prev.next = w.next), w.next && (w.next.prev = w.prev), r(w), w.parent = null, w.next = null, w.prev = null, y.push(w.$el));
                                        c = i, s.rawUpdateDom(y, o), y.length = 0, o.length = 0
                                    }
                                }
                        }()
                    }
                }
            }
        }, n.fn.preinit(n).always(function() {
            n.alight = t, n.rootScope = n.alight(document.querySelectorAll("#customjscss-app-filter")[0], {
                appData: n
            }), n.fn.init(n)
        })
    }) : e("#customjscss-app-settings").length && (t = {
        alight: null,
        rootScope: null,
        ajax_url: null,
        ajax_nonce: null,
        ajax_action_update: null,
        ajax_action_get: null,
        ajax_action_delete_data: null,
        ajax_msg_error: null,
        themes: null,
        config: {
            themeJavaScript: null,
            themeCSS: null,
            themeHTML: null
        },
        fn: {
            init: function(t) {
                e("#customjscss-app-settings").removeAttr("style"), t.plan = rabbitbuilder_js_css.plan, t.ajax_url = rabbitbuilder_js_css.ajax_url, t.ajax_nonce = rabbitbuilder_js_css.ajax_nonce, t.ajax_action_update = rabbitbuilder_js_css.ajax_action_update, t.ajax_action_get = rabbitbuilder_js_css.ajax_action_get, t.ajax_action_delete_data = rabbitbuilder_js_css.ajax_action_delete_data, t.ajax_msg_error = rabbitbuilder_js_css.ajax_msg_error, t.fn.initConfig(t)
            },
            enableLoading: function(t) {
                e("#customjscss-app-settings").removeClass("customjscss-active")
            },
            disableLoading: function(t) {
                setTimeout(function() {
                    e("#customjscss-app-settings").addClass("customjscss-active")
                }, 1e3)
            },
            loadThemes: function(t) {
                var n = e.Deferred();
                return e.ajax({
                    url: t.ajax_url,
                    type: "POST",
                    dataType: "json",
                    data: {
                        nonce: t.ajax_nonce,
                        action: t.ajax_action_get,
                        type: "themes"
                    },
                    success: function(e) {
                        e && e.success ? n.resolve(e.data.list) : this.error()
                    },
                    error: function(e, i, r) {
                        t.fn.showNotice(t, t.ajax_msg_error, "notice-error"), n.resolve(null)
                    }
                }), n.promise()
            },
            initConfig: function(t) {
                t.fn.enableLoading(t), t.fn.loadThemes(t).done(function(e) {
                    t.themes = e
                }).always(function() {
                    if (rabbitbuilder_js_css.config) {
                        var n = e.extend(!0, {}, JSON.parse(rabbitbuilder_js_css.config));
                        if (n)
                            for (var i in n) t.config.hasOwnProperty(i) && (t.config[i] = n[i])
                    }
                    t.rootScope.scan(), t.fn.disableLoading(t)
                })
            },
            saveConfig: function(t) {
                t.fn.enableLoading(t);
                var n = e.extend(!0, {}, t.config);
                n = JSON.stringify(n), e.ajax({
                    url: t.ajax_url,
                    type: "POST",
                    dataType: "json",
                    data: {
                        nonce: t.ajax_nonce,
                        action: t.ajax_action_update,
                        config: n
                    }
                }).done(function(e) {
                    e ? t.fn.showNotice(t, e.data.msg, e.success ? "notice-success" : "notice-error") : t.fn.showNotice(t, t.ajax_msg_error, "notice-error")
                }).fail(function() {
                    t.fn.showNotice(t, t.ajax_msg_error, "notice-error")
                }).always(function() {
                    t.fn.disableLoading(t)
                })
            },
            deleteAllData: function(t, n) {
                confirm(n) && (t.fn.enableLoading(t), e.ajax({
                    url: t.ajax_url,
                    type: "POST",
                    dataType: "json",
                    data: {
                        nonce: t.ajax_nonce,
                        action: t.ajax_action_delete_data
                    }
                }).done(function(e) {
                    e ? t.fn.showNotice(t, e.data.msg, e.success ? "notice-success" : "notice-error") : t.fn.showNotice(t, t.ajax_msg_error, "notice-error")
                }).fail(function() {
                    t.fn.showNotice(t, t.ajax_msg_error, "notice-error")
                }).always(function() {
                    t.fn.disableLoading(t)
                }))
            },
            showNotice: function(t, n, i) {
                var r = e("#customjscss-messages"),
                    a = e("<div></div>").addClass("notice is-dismissible").addClass(i),
                    o = e("<p></p>").html(n),
                    s = e("<button></button>").attr("type", "button").addClass("notice-dismiss").html('<span class="screen-reader-text">Dismiss this notice.</span>');

                function l() {
                    clearTimeout(a.data("timer")), a.fadeTo(100, 0, function() {
                        a.slideUp(100, function() {
                            a.remove()
                        })
                    })
                }
                a.data("timer", setTimeout(l, 5e3)), s.click(function(e) {
                    e.preventDefault(), l()
                }), a.append(o, s), r.append(a)
            }
        }
    }, window.alightInitCallback = function(e) {
        delete window.alightInitCallback, t.alight = e, t.rootScope = t.alight(document.querySelectorAll("#customjscss-app-settings")[0], {
            appData: t
        }), t.fn.init(t)
    })), rabbitbuilder_js_css.plan) {
        case "lite":
            e(".customjscss.wrap").addClass("customjscss-version-lite");
            break;
        case "pro":
            e(".customjscss.wrap").addClass("customjscss-version-pro")
    }
    var r = e(".customjscss-page-info");
    r.length && !Cookies.get("customjscss-page-info-hidden") && r.addClass("customjscss-active").find(".customjscss-page-info-close").on("click", function(e) {
            r.removeClass("customjscss-active"), Cookies.set("customjscss-page-info-hidden", !0, {
                expires: 365
            })
        }),
        function() {
            function e() {
                var e = function(t, n) {
                    return e.bootstrap(t, n)
                };
                e.version = "0.14.0", e.filters = {}, e.text = {}, e.core = {}, e.utils = {}, e.option = {
                    globalController: !1,
                    removeAttribute: !0,
                    domOptimization: !0,
                    domOptimizationRemoveEmpty: !0,
                    fastBinding: !0
                }, e.debug = {
                    scan: 0,
                    directive: !1,
                    watch: !1,
                    watchText: !1,
                    parser: !1
                }, e.ctrl = e.controllers = {}, e.d = e.directives = {
                    al: {},
                    bo: {},
                    $global: {}
                }, e.hooks = {
                    directive: [],
                    binding: []
                }, e.priority = {
                    al: {
                        app: 2e3,
                        checked: 20,
                        class: 30,
                        css: 30,
                        focused: 20,
                        if: 700,
                        ifnot: 700,
                        model: 25,
                        radio: 25,
                        repeat: 1e3,
                        select: 20,
                        stop: -10,
                        value: 20,
                        on: 10
                    },
                    $component: 5,
                    $attribute: -5
                };
                var t, n, i, r, a, o, s, l, c, u, f, d, p, h, m, v, g, y, b, _, w, x, j, k, C, D, $, T, S, A, E, N, B, O, M, L, F, H, I, R, V, P, z, K, U, W, Y, q, J, G, Q, Z, X, ee, te, ne, ie, re, ae, oe, se, le = e.f$ = {},
                    ce = function(e, t) {
                        var n = e.indexOf(t);
                        n >= 0 ? e.splice(n, 1) : console.warn("trying to remove not exist item")
                    };

                function ue(e, t) {
                    var n, i = [],
                        r = !1,
                        a = t.cd,
                        o = t.callback;
                    if (t.filterConf.args.length) {
                        var s = [];
                        t.filterConf.args.forEach(function(e, t) {
                            var n = a.watch(e, function(e) {
                                i[t + 1] = e, c()
                            });
                            n.$.isStatic || s.push(n)
                        });
                        var l = !1,
                            c = function() {
                                l || (l = !0, a.watch("$onScanOnce", function() {
                                    if (l = !1, r) {
                                        var t = e.apply(null, i);
                                        le.isPromise(t) ? t.then(function(e) {
                                            o(e), a.scan()
                                        }) : o(t)
                                    }
                                }))
                            };
                        s.length && (n = function() {
                            s.forEach(function(e) {
                                return e.stop()
                            })
                        })
                    } else c = function() {
                        var t = e(i[0]);
                        le.isPromise(t) ? t.then(function(e) {
                            o(e), a.scan()
                        }) : o(t)
                    };
                    return {
                        onChange: function(e) {
                            r = !0, i[0] = e, c()
                        },
                        onStop: n,
                        watchMode: t.watchMode
                    }
                }

                function fe(e, t, n, i) {
                    i.setValue(i.attrArgument, t)
                }
                return le.before = function(e, t) {
                        e.parentNode.insertBefore(t, e)
                    }, le.after = function(e, t) {
                        var n = e.parentNode,
                            i = e.nextSibling;
                        i ? n.insertBefore(t, i) : n.appendChild(t)
                    }, le.remove = function(e) {
                        var t = e.parentNode;
                        t && t.removeChild(e)
                    }, le.on = function(e, t, n) {
                        e.addEventListener(t, n, !1)
                    }, le.off = function(e, t, n) {
                        e.removeEventListener(t, n, !1)
                    }, le.isFunction = function(e) {
                        return e && "[object Function]" === Object.prototype.toString.call(e)
                    }, le.isObject = function(e) {
                        return e && "[object Object]" === Object.prototype.toString.call(e)
                    }, le.isPromise = function(e) {
                        return e && window.Promise && e instanceof window.Promise
                    }, le.isElement = function(e) {
                        return e instanceof HTMLElement
                    }, le.addClass = function(e, t) {
                        e.classList ? e.classList.add(t) : e.className += " " + t
                    }, le.removeClass = function(e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi"), " ")
                    }, le.rawAjax = function(e) {
                        var t = new XMLHttpRequest;
                        for (var n in t.open(e.type || "GET", e.url, !0, e.username, e.password), e.headers) t.setRequestHeader(n, e.headers[n]);
                        e.success && (t.onload = function() {
                            t.status >= 200 && t.status < 400 ? e.success(t.responseText) : e.error && e.error()
                        }), e.error && (t.onerror = e.error), t.send(e.data || null)
                    }, le.ajaxCache = {}, le.ajax = function(e) {
                        if (e.username || e.password || e.headers || e.data || !e.cache) return le.rawAjax(e);
                        var t = e.type || "GET",
                            n = t + ":" + e.url,
                            i = le.ajaxCache[n];
                        i || (le.ajaxCache[n] = i = {
                            callback: []
                        }), i.result ? e.success && e.success(i.result) : (i.callback.push(e), i.loading || (i.loading = !0, le.rawAjax({
                            type: t,
                            url: e.url,
                            success: function(e) {
                                i.loading = !1, i.result = e;
                                for (var t = 0; t < i.callback.length; t++) i.callback[t].success && i.callback[t].success(e);
                                i.callback.length = 0
                            },
                            error: function() {
                                i.loading = !1;
                                for (var e = 0; e < i.callback.length; e++) i.callback[e].error && i.callback[e].error();
                                i.callback.length = 0
                            }
                        })))
                    }, t = '@charset "UTF-8";[al-cloak],[hidden],.al-hide{display:none !important;}', n = document.querySelectorAll("head")[0], (i = document.createElement("style")).setAttribute("type", "text/css"), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t)), n.appendChild(i), le.ready = function() {
                        var e = [],
                            t = !1;
                        return le.on(document, "DOMContentLoaded", function n() {
                                t = !0, le.off(document, "DOMContentLoaded", n);
                                for (var i = 0; i < e.length; i++) e[i]();
                                e.length = 0
                            }),
                            function(n) {
                                t ? n() : e.push(n)
                            }
                    }(), window.jQuery && (window.jQuery.fn.alight = function(t) {
                        var n = [];
                        if (this.each(function(e, t) {
                                return n.push(t)
                            }), n.length) return e(n, t)
                    }), e.core.getFilter = function(t, n) {
                        var i = n.locals[t];
                        if (i && (le.isFunction(i) || i.init || i.fn)) return i;
                        if (i = e.filters[t]) return i;
                        throw "Filter not found: " + t
                    }, e.core.buildFilterNode = function(e, t, n, i) {
                        if (le.isFunction(n)) return ue(n, {
                            cd: e,
                            filterConf: t,
                            callback: i
                        });
                        if (n.init) return n.init.call(e, e.scope, t.raw, {
                            setValue: i,
                            conf: t,
                            changeDetector: e
                        });
                        if (le.isFunction(n.fn)) return ue(n.fn, {
                            cd: e,
                            filterConf: t,
                            callback: i,
                            watchMode: n.watchMode
                        });
                        throw "Wrong filter: " + t.name
                    }, e.ChangeDetector = function(e) {
                        var t, n;
                        return n = new o, t = new r(n, e || {}), n.topCD = t, t
                    }, (o = function() {
                        return this.watchers = {
                            any: [],
                            finishBinding: [],
                            finishScan: [],
                            finishScanOnce: [],
                            onScanOnce: []
                        }, this.status = null, this.extraLoop = !1, this.finishBinding_lock = !1, this.lateScan = !1, this.topCD = null, this
                    }).prototype.destroy = function() {
                        if (this.watchers.any.length = 0, this.watchers.finishBinding.length = 0, this.watchers.finishScan.length = 0, this.watchers.finishScanOnce.length = 0, this.watchers.onScanOnce.length = 0, this.topCD) return this.topCD.destroy()
                    }, (r = function(e, t) {
                        this.scope = t, this.locals = t, this.root = e, this.watchList = [], this.destroy_callbacks = [], this.parent = null, this.children = [], this.rwatchers = {
                            any: [],
                            finishScan: [],
                            elEvents: []
                        }
                    }).prototype.new = function(e, t) {
                        var n, i, a;
                        return t = t || {}, a = this, null == e && (e = a.scope), (i = new r(a.root, e)).parent = a, e === a.scope && (t.locals ? ((n = a._ChildLocals) || (a._ChildLocals = n = function() {
                            return this.$$root = e, this
                        }, n.prototype = a.locals), i.locals = new n) : i.locals = a.locals), a.children.push(i), i
                    }, r.prototype.destroy = function() {
                        var e, t, n, i, r, a, o, s, l, c, u, f, d, p, h, m, v, g, y, b, _, w, x;
                        for (w = (e = this).root, e.scope = null, e.parent && ce(e.parent.children, e), i = 0, o = (m = e.destroy_callbacks).length; i < o; i++)(0, m[i])();
                        for (r = 0, s = (v = e.children.slice()).length; r < s; r++) v[r].destroy();
                        for (e.destroy_callbacks.length = 0, a = 0, l = (g = e.watchList).length; a < l; a++)(t = g[a]).onStop && t.onStop();
                        for (e.watchList.length = 0, d = 0, c = (y = e.rwatchers.any).length; d < c; d++) x = y[d], ce(w.watchers.any, x);
                        for (e.rwatchers.any.length = 0, p = 0, u = (b = e.rwatchers.finishScan).length; p < u; p++) x = b[p], ce(w.watchers.finishScan, x);
                        for (e.rwatchers.finishScan.length = 0, h = 0, f = (_ = this.rwatchers.elEvents).length; h < f; h++) n = _[h], le.off(n[0], n[1], n[2]);
                        this.rwatchers.elEvents.length = 0, w.topCD === e && (w.topCD = null, w.destroy())
                    }, s = function(e) {
                        return this.cb = e
                    }, h = function(e, t, n) {
                        var i, r;
                        return i = e.root, r = new s(n), e.rwatchers[t].push(r), i.watchers[t].push(r), {
                            stop: function() {
                                return ce(e.rwatchers[t], r), ce(i.watchers[t], r)
                            }
                        }
                    }, r.prototype.on = function(e, t, n) {
                        return le.on(e, t, n), this.rwatchers.elEvents.push([e, t, n])
                    }, f = {
                        $any: function(e, t) {
                            return h(e, "any", t)
                        },
                        $finishScan: function(e, t) {
                            return h(e, "finishScan", t)
                        },
                        $finishScanOnce: function(e, t) {
                            e.root.watchers.finishScanOnce.push(t)
                        },
                        $onScanOnce: function(e, t) {
                            e.root.watchers.onScanOnce.push(t)
                        },
                        $destroy: function(e, t) {
                            e.destroy_callbacks.push(t)
                        },
                        $finishBinding: function(e, t) {
                            e.root.watchers.finishBinding.push(t)
                        }
                    }, m = function() {}, r.prototype.watch = function(t, n, i) {
                        var r, a, o, s, l, u, d, p, h, v;
                        if (l = f[t]) return l(this, n);
                        if (!0 === (i = i || {}) && (i = {
                                isArray: !0
                            }), i.init && console.warn("watch.init is depricated"), (r = this).root, v = r.scope, le.isFunction(t) ? (s = t, p = e.utils.getId(), u = !0) : (u = !1, s = null, "::" === (t = t.trim()).slice(0, 2) && (t = t.slice(2), i.oneTime = !0), p = t, p = i.deep ? "d#" + p : i.isArray ? "a#" + p : "v#" + p), e.debug.watch && console.log("$watch", t), d = !1, !u)
                            if (i.watchText) s = i.watchText.fn;
                            else {
                                if ((a = e.utils.compile.expression(t)).filter) return function(t, n, i, r) {
                                    var a = null,
                                        o = r.oneTime;
                                    if (r.isArray ? a = "array" : r.deep && (a = "deep"), !i) {
                                        var s = {
                                            el: r.element,
                                            ea: r.elementAttr
                                        };
                                        i = function(e) {
                                            c(t.scope, s, e)
                                        }
                                    }
                                    for (var l = e.utils.parsFilter(n.filter), u = [], f = l.result.length - 1; f >= 0; f--) {
                                        var d = e.core.getFilter(l.result[f].name, t),
                                            p = e.core.buildFilterNode(t, l.result[f], d, i);
                                        p.watchMode && (a = p.watchMode), p.onStop && u.push(p.onStop), i = p.onChange
                                    }
                                    return r = {
                                        oneTime: o
                                    }, "array" === a ? r.isArray = !0 : "deep" === a && (r.deep = !0), u.length && (r.onStop = function() {
                                        u.forEach(function(e) {
                                            return e()
                                        }), u.length = 0
                                    }), t.watch(n.expression, i, r)
                                }(r, a, n, i);
                                d = a.isSimple && 0 === a.simpleVariables.length, s = a.fn
                            }
                        return i.deep && (i.isArray = !1), o = {
                            isStatic: d,
                            isArray: Boolean(i.isArray),
                            extraLoop: !i.readOnly,
                            deep: !0 === i.deep ? 10 : i.deep,
                            value: m,
                            callback: n,
                            exp: s,
                            src: "" + t,
                            onStop: i.onStop || null,
                            el: i.element || null,
                            ea: i.elementAttr || null
                        }, d ? r.watch("$onScanOnce", function() {
                            return c(v, o, o.exp(v))
                        }) : r.watchList.push(o), h = {
                            $: o,
                            stop: function() {
                                var n;
                                if (i.onStop) try {
                                    i.onStop()
                                } catch (i) {
                                    n = i, e.exceptionHandler(n, "Error in onStop of watcher: " + t, t)
                                }
                                if (!o.isStatic) return ce(r.watchList, o)
                            },
                            refresh: function() {
                                var t;
                                return (t = o.exp(r.locals)) && o.deep ? o.value = e.utils.clone(t, o.deep) : t && o.isArray ? o.value = t.slice() : o.value = t
                            }
                        }, i.oneTime && (o.callback = function(e) {
                            if (void 0 !== e) return h.stop(), n(e)
                        }), h
                    }, r.prototype.watchGroup = function(e, t) {
                        var n, i, r, a, o, s;
                        if (n = this, !t && le.isFunction(e) && (t = e, e = null), s = !1, i = function() {
                                if (!s) return s = !0, n.watch("$onScanOnce", function() {
                                    return s = !1, t()
                                })
                            }, e)
                            for (r = 0, o = e.length; r < o; r++) a = e[r], n.watch(a, i);
                        return i
                    }, u = window.performance ? function() {
                        return Math.floor(performance.now())
                    } : function() {
                        return (new Date).getTime()
                    }, d = function(e, t) {
                        var n, i, r, a;
                        if (null === e || null === t) return !0;
                        if ((a = typeof e) !== typeof t) return !0;
                        if ("object" === a) {
                            if (e.length !== t.length) return !0;
                            for (n = i = 0, r = e.length; i < r; n = ++i)
                                if (e[n] !== t[n]) return !0
                        }
                        return !1
                    }, c = function(e, t, n) {
                        t.el ? t.ea ? t.el.setAttribute(t.ea, n) : t.el.nodeValue = n : t.callback.call(e, n)
                    }, l = function(t, n, i, r) {
                        var a, o;
                        return a = {
                            src: i.src,
                            scope: n.scope,
                            locals: n.locals
                        }, i.el && (a.element = i.el), o = 1 === r ? "$scan, error in callback: " : "$scan, error in expression: ", e.exceptionHandler(t, o + i.src, a)
                    }, a = function() {}, p = function(t, n) {
                        var i, r, o, s, c, u, f, p, h, v, g, y, b, _, w, x, j;
                        if (t.root, u = !1, s = 0, w = 0, t) {
                            for (b = [], f = 0, o = t; o;) {
                                for (g = o.locals, w += o.watchList.length, p = 0, v = (_ = o.watchList.slice()).length; p < v; p++) {
                                    h = (j = _[p]).value;
                                    try {
                                        x = j.exp(g)
                                    } catch (e) {
                                        c = e, x = a
                                    }
                                    if (h !== x) {
                                        if (y = !1, j.isArray ? (i = Array.isArray(h)) === (r = Array.isArray(x)) ? i ? d(h, x) && (y = !0, j.value = x.slice()) : (y = !0, j.value = x) : (y = !0, j.value = r ? x.slice() : x) : j.deep ? e.utils.equal(h, x, j.deep) || (y = !0, j.value = e.utils.clone(x, j.deep)) : (y = !0, j.value = x), y)
                                            if (y = !1, x === a) l(c, o, j);
                                            else {
                                                s++;
                                                try {
                                                    j.el ? j.ea ? null != x ? j.el.setAttribute(j.ea, x) : j.el.removeAttribute(j.ea) : j.el.nodeValue = x : (h === m && (h = void 0), "$scanNoChanges" !== j.callback.call(o.scope, x, h) && j.extraLoop && (u = !0))
                                                } catch (e) {
                                                    l(c = e, o, j, 1)
                                                }
                                            }
                                        e.debug.scan > 1 && console.log("changed:", j.src)
                                    }
                                }
                                b.push.apply(b, o.children), o = b[f++]
                            }
                            n.total = w, n.changes = s, n.extraLoop = u
                        }
                    }, r.prototype.digest = function() {
                        var t, n, i, r, a, o, s, l, c;
                        for (s = this.root, r = 10, c = 0, e.debug.scan && (l = u()), o = {
                                total: 0,
                                changes: 0,
                                extraLoop: !1,
                                src: "",
                                scope: null,
                                element: null
                            }; r;) {
                            if (r--, s.extraLoop = !1, s.watchers.onScanOnce.length)
                                for (a = s.watchers.onScanOnce.slice(), s.watchers.onScanOnce.length = 0, n = 0, i = a.length; n < i; n++) a[n].call(s);
                            if (p(this, o), c += o.changes, !o.extraLoop && !s.extraLoop && !s.watchers.onScanOnce.length) break
                        }
                        return e.debug.scan && (t = u() - l, console.log("$scan: loops: (" + (10 - r) + "), last-loop changes: " + o.changes + ", watches: " + o.total + " / " + t + "ms")), o.mainLoop = r, o.totalChanges = c, o
                    }, r.prototype.scan = function(t) {
                        var n, i, r, a, o, s, l, c, u, f, d;
                        if (d = this.root, t = t || {}, !e.option.zone || t.zone) {
                            if (le.isFunction(t) && (t = {
                                    callback: t
                                }), t.callback && d.watchers.finishScanOnce.push(t.callback), t.late) {
                                if (d.lateScan) return;
                                return d.lateScan = !0, void e.nextTick(function() {
                                    if (d.lateScan) return d.topCD.scan()
                                })
                            }
                            if ("scaning" !== d.status) {
                                if (d.lateScan = !1, d.status = "scaning", (f = d.topCD ? d.topCD.digest() : {}).totalChanges)
                                    for (i = 0, o = (c = d.watchers.any).length; i < o; i++)(0, c[i])();
                                for (d.status = null, r = 0, s = (u = d.watchers.finishScan).length; r < s; r++)(0, u[r])();
                                for (n = d.watchers.finishScanOnce.slice(), d.watchers.finishScanOnce.length = 0, a = 0, l = n.length; a < l; a++) n[a].call(d);
                                if (0 === f.mainLoop) throw "Infinity loop detected";
                                return f
                            }
                            d.extraLoop = !0
                        }
                    }, e.core.ChangeDetector = r, r.prototype.compile = function(t, n) {
                        return e.utils.compile.expression(t, n).fn
                    }, r.prototype.setValue = function(t, n) {
                        var i, r, a, o, s, l, c, u, f, d;
                        a = (i = this).compile(t + " = $value", {
                            input: ["$value"],
                            no_return: !0
                        });
                        try {
                            return a(i.locals, n)
                        } catch (p) {
                            if (r = p, u = "can't set variable: " + t, e.debug.parser && console.warn(u), ("" + r).indexOf("TypeError") >= 0 && (d = t.match(/^([\w\d\.]+)\.[\w\d]+$/)) && d[1]) {
                                for (c = i.locals, f = d[1].split("."), o = 0, l = f.length; o < l; o++) s = f[o], void 0 === c[s] && (c[s] = {}), c = c[s];
                                try {
                                    return void a(i.locals, n)
                                } catch (e) {}
                            }
                            return e.exceptionHandler(r, u, {
                                name: t,
                                value: n
                            })
                        }
                    }, r.prototype.eval = function(e) {
                        return this.compile(e)(this.locals)
                    }, r.prototype.getValue = function(e) {
                        return this.eval(e)
                    }, e.text.$base = function(t) {
                        var n, i, r, a, o;
                        if (a = t.point, !(i = (o = (n = t.cd).scope).$ns && o.$ns.text ? o.$ns.text[t.name] : e.text[t.name])) throw "No directive alight.text." + t.name;
                        return r = {
                            changeDetector: n,
                            setter: function(e) {
                                if (t.update) return a.value = null === e ? "" : "" + e, t.update()
                            },
                            setterRaw: function(e) {
                                if (t.updateRaw) return a.value = null === e ? "" : "" + e, t.updateRaw()
                            },
                            finally: function(e) {
                                if (t.finally) return a.value = null === e ? "" : "" + e, a.type = "text", t.finally(), t.update = null, t.finally = null
                            }
                        }, i.call(n, r.setter, t.exp, o, r)
                    }, v = function(t, n, i) {
                        var r, a, o, s, l, u, f, d, p, h, m, v, g, y, b, _, w, x, j, k, C, D, $, T, S, A, E, N, B;
                        if (i = i || {}, a = this, e.debug.watchText && console.log("$watchText", t), T = e.utils.compile.buildSimpleText(t, null)) a.watch(t, n, {
                            watchText: T,
                            element: i.element,
                            elementAttr: i.elementAttr
                        });
                        else {
                            for (l = e.utils.parsText(t), N = 0, r = !0, C = !1, f = d = u = function() {}, g = 0, _ = l.length; g < _; g++)
                                if ("expression" === (s = l[g]).type)
                                    if (j = (p = s.list.join("|")).match(/^([^\w\d\s\$"'\(\u0410-\u044F\u0401\u0451]+)/)) s.isDir = !0, "#" === (k = j[1]) ? (v = p.indexOf(" ")) < 0 ? (k = p.substring(1), p = "") : (k = p.slice(1, v), p = p.slice(v)) : p = p.substring(k.length), e.text.$base({
                                        name: k,
                                        exp: p,
                                        cd: a,
                                        point: s,
                                        update: function() {
                                            return f()
                                        },
                                        updateRaw: function() {
                                            return d()
                                        },
                                        finally: function() {
                                            return f(), u()
                                        }
                                    }), C = !0, "text" !== s.type && (r = !1);
                                    else if ((o = e.utils.compile.expression(p, {
                                    string: !0
                                })).filter) N++, r = !1, s.watched = !0,
                                function(e) {
                                    a.watch(p, function(t) {
                                        return null == t && (t = ""), e.value = t, f()
                                    })
                                }(s);
                            else {
                                if (s.fn = o.fn, !o.rawExpression) throw "Error";
                                o.isSimple && 0 === o.simpleVariables.length ? (s.type = "text", s.value = s.fn()) : (s.re = o.rawExpression, N++)
                            }
                            if (r) {
                                if (!N) {
                                    for (A = "", y = 0, w = l.length; y < w; y++) s = l[y], A += s.value;
                                    return void a.watch("$onScanOnce", function() {
                                        return c(a.scope, {
                                            callback: n,
                                            el: i.element,
                                            ea: i.elementAttr
                                        }, A)
                                    })
                                }
                                return T = C ? e.utils.compile.buildSimpleText(null, l) : e.utils.compile.buildSimpleText(t, l), void a.watch(t, n, {
                                    watchText: {
                                        fn: T.fn
                                    },
                                    element: i.element,
                                    elementAttr: i.elementAttr
                                })
                            }
                            if (B = {
                                    callback: n,
                                    el: i.element,
                                    ea: i.elementAttr
                                }, l.scope = a.scope, m = e.utils.compile.buildText(t, l), d = function() {
                                    return c(a.scope, B, m())
                                }, N) {
                                for (E = null, $ = "", f = function() {
                                        $ = m()
                                    }, u = function() {
                                        var e, t;
                                        for (v = !0, e = 0, t = l.length; e < t; e++)
                                            if ("expression" === (s = l[e]).type) {
                                                v = !1;
                                                break
                                            }
                                        v && (a.watch("$finishScanOnce", function() {
                                            return E.stop()
                                        }), i.onStatic && i.onStatic())
                                    }, D = function() {
                                        return $
                                    }, b = 0, x = l.length; b < x; b++)
                                    if ("expression" === (s = l[b]).type) {
                                        if (s.isDir || s.watched) continue;
                                        s.watched = !0,
                                            function(e, t) {
                                                a.watch(t, function(t) {
                                                    return null == t && (t = ""), e.value = t, f()
                                                })
                                            }(s, s.list.join(" | "))
                                    }
                                f(), E = a.watch(D, n, {
                                    element: i.element,
                                    elementAttr: i.elementAttr
                                })
                            } else S = !1, h = function() {
                                return S = !1, d()
                            }, (f = function() {
                                if (!S) return S = !0, a.watch("$onScanOnce", h)
                            })()
                        }
                    }, r.prototype.watchText = v, g = {
                        TR: 1,
                        TD: 1,
                        LI: 1
                    }, e.utils.optmizeElement = function(t, n) {
                        var i, r, a, o, s, l, c, u, f, d, p, h, m, v, y, b, _, w, x;
                        if (1 === t.nodeType) {
                            for (n = n || !e.option.domOptimizationRemoveEmpty, "PRE" === t.nodeName && (n = !0), !(o = t.firstChild) || 3 !== o.nodeType || o.nodeValue.trim() || n || (le.remove(o), o = t.firstChild), y = !1; o;) m = o.nextSibling, !y || 3 !== o.nodeType || o.nodeValue.trim() || n ? (y = 1 === o.nodeType && g[o.nodeName], e.utils.optmizeElement(o, n)) : le.remove(o), o = m;
                            !(o = t.lastChild) || 3 !== o.nodeType || o.nodeValue.trim() || n || le.remove(o)
                        } else if (3 === t.nodeType) {
                            if (w = t.data, p = e.utils.pars_start_tag, (l = w.indexOf(p)) < 0) return;
                            if (w.slice(l + p.length).indexOf(p) < 0) return;
                            for (v = "t", _ = [i = {
                                    value: ""
                                }], c = 0, f = (a = e.utils.parsText(w)).length; c < f; c++) "text" === (r = a[c]).type ? i.value += r.value : (s = r.list.join("|"), x = e.utils.pars_start_tag + s + e.utils.pars_finish_tag, s.match(/^([^\w\d\s\$"'\(\u0410-\u044F\u0401\u0451]+)/) ? ("t" === v || "d" === v ? i.value += x : (i = {
                                value: x
                            }, _.push(i)), v = "d") : 1 === r.list.length ? ("t" === v || "v" === v ? i.value += x : (i = {
                                value: x
                            }, _.push(i)), v = "v") : "t" === v ? i.value += x : (i = {
                                value: x
                            }, _.push(i)));
                            if (_.length < 2) return;
                            for ((o = t).data = _[0].value, u = 0, d = (b = _.slice(1)).length; u < d; u++) r = b[u], h = document.createTextNode(r.value), le.after(o, h), o = h
                        }
                    }, e.hooks.attribute = D = [], D.push({
                        code: "dataPrefix",
                        fn: function() {
                            "data-" === this.attrName.slice(0, 5) && (this.attrName = this.attrName.slice(5))
                        }
                    }), D.push({
                        code: "colonNameSpace",
                        fn: function() {
                            var e, t;
                            this.directive || this.name || ((t = this.attrName.match(/^(\w+)[\-\:](.+)$/)) ? (this.ns = t[1], e = t[2]) : (this.ns = "$global", e = this.attrName), (t = e.match(/^([^\.]+)\.(.*)$/)) && (e = t[1], this.attrArgument = t[2]), this.name = e.replace(/(-\w)/g, function(e) {
                                return e.substring(1).toUpperCase()
                            }))
                        }
                    }), D.push({
                        code: "getGlobalDirective",
                        fn: function() {
                            var t;
                            if (!this.directive) {
                                if (!(t = e.d[this.ns])) return this.result = "noNS", void(this.stop = !0);
                                this.directive = t[this.name], this.directive || ("$global" === this.ns ? this.result = "noNS" : this.result = "noDirective", this.stop = !0)
                            }
                        }
                    }), D.push({
                        code: "cloneDirective",
                        fn: function() {
                            var t, n, i, r, a, o;
                            if (a = this.directive, r = this.ns, i = this.name, t = {}, le.isFunction(a)) t.init = a;
                            else {
                                if (!le.isObject(a)) throw "Wrong directive: " + r + "." + i;
                                for (n in a) o = a[n], t[n] = o
                            }
                            if (t.priority = a.priority || e.priority[r] && e.priority[r][i] || 0, t.restrict = a.restrict || "A", t.restrict.indexOf(this.attrType) < 0) throw "Directive has wrong binding (attribute/element): " + i;
                            this.directive = t
                        }
                    }), D.push({
                        code: "preprocessor",
                        fn: function() {
                            var t, n, i;
                            i = this.ns, n = this.name, (t = this.directive).$init = function(r, a, o, s) {
                                var l, c;
                                if (l = function() {
                                        var e, t, n, i;
                                        for (e = t = 0, i = (n = c.procLine).length; t < i; e = ++t)
                                            if (n[e].fn.call(c), c.isDeferred) {
                                                c.procLine = n.slice(e + 1);
                                                break
                                            }
                                        return c.async = !0, null
                                    }, c = {
                                        element: a,
                                        value: o,
                                        cd: r,
                                        env: s,
                                        ns: i,
                                        name: n,
                                        doBinding: !1,
                                        directive: t,
                                        isDeferred: !1,
                                        procLine: e.hooks.directive,
                                        makeDeferred: function() {
                                            return c.isDeferred = !0, c.doBinding = !0, c.retStopBinding = !0, c.async = !1,
                                                function() {
                                                    if (c.isDeferred = !1, c.async) return l()
                                                }
                                        }
                                    }, t.stopBinding && (s.stopBinding = !0), l(), c.retStopBinding) return "stopBinding"
                            }
                        }
                    }), ($ = e.hooks.directive).push({
                        code: "init",
                        fn: function() {
                            var t;
                            this.directive.init && (e.debug.directive && this.directive.scope && console.warn(this.ns + "-" + this.name + " uses scope and init together, probably you need use link instead of init"), this.env.changeDetector = this.cd, (t = this.directive.init.call(this.env, this.cd.scope, this.element, this.value, this.env)) && t.start && t.start())
                        }
                    }), $.push({
                        code: "templateUrl",
                        fn: function() {
                            var e, t;
                            t = this, this.directive.templateUrl && (e = this.makeDeferred(), le.ajax({
                                cache: !0,
                                url: this.directive.templateUrl,
                                success: function(n) {
                                    return t.directive.template = n, e()
                                },
                                error: e
                            }))
                        }
                    }), $.push({
                        code: "template",
                        fn: function() {
                            var e;
                            this.directive.template && (1 === this.element.nodeType ? this.element.innerHTML = this.directive.template : 8 === this.element.nodeType && ((e = document.createElement("p")).innerHTML = this.directive.template.trim(), e = e.firstChild, le.after(this.element, e), this.element = e, this.doBinding = !0))
                        }
                    }), $.push({
                        code: "scope",
                        fn: function() {
                            var t, n;
                            if (this.directive.scope) {
                                switch (n = this.cd, this.directive.scope) {
                                    case !0:
                                        t = n.new({
                                            $parent: n.scope
                                        });
                                        break;
                                    case "root":
                                        t = e.ChangeDetector({
                                            $parent: n.scope
                                        }), n.watch("$destroy", function() {
                                            return t.destroy()
                                        });
                                        break;
                                    default:
                                        throw "Wrong scope value: " + this.directive.scope
                                }
                                this.env.parentChangeDetector = n, this.cd = t, this.doBinding = !0, this.retStopBinding = !0
                            }
                        }
                    }), $.push({
                        code: "link",
                        fn: function() {
                            var e;
                            this.directive.link && (this.env.changeDetector = this.cd, (e = this.directive.link.call(this.env, this.cd.scope, this.element, this.value, this.env)) && e.start && e.start())
                        }
                    }), $.push({
                        code: "scopeBinding",
                        fn: function() {
                            this.doBinding && !this.env.stopBinding && e.bind(this.cd, this.element, {
                                skip_attr: this.env.skippedAttr()
                            })
                        }
                    }), T = function(t, n, i) {
                        var r;
                        "A" === n.attr_type ? ((r = i || {}).priority = e.priority.$attribute, r.is_attr = !0, r.name = t, r.attrName = t, r.element = n.element, n.list.push(r)) : "M" === n.attr_type && n.list.push(i)
                    }, C = function(t, n) {
                        var i, r, a, o;
                        if (n.skip_attr.indexOf(t) >= 0) return T(t, n, {
                            skip: !0
                        });
                        for (i = {
                                attrName: t,
                                attrType: n.attr_type,
                                element: n.element,
                                cd: n.cd,
                                result: null
                            }, r = 0, a = (o = e.hooks.attribute).length; r < a && (o[r].fn.call(i), !i.stop); r++);
                        if ("noNS" !== i.result) return "noDirective" === i.result ? "E" === n.attr_type ? void n.list.push({
                            name: t,
                            priority: -10,
                            attrName: t,
                            noDirective: !0
                        }) : void T(t, n, {
                            noDirective: !0
                        }) : void n.list.push({
                            name: t,
                            directive: i.directive,
                            priority: i.directive.priority,
                            attrName: t,
                            attrArgument: i.attrArgument
                        });
                        T(t, n)
                    }, k = function(e, t) {
                        return e.priority === t.priority ? 0 : e.priority > t.priority ? -1 : 1
                    }, b = function(t, n, i, r) {
                        var a;
                        if (!((a = i).indexOf(e.utils.pars_start_tag) < 0)) return t.watchText(a, null, {
                            element: n,
                            elementAttr: r
                        }), !0
                    }, j = function(t, n, i) {
                        var r;
                        if (!((r = n.data).indexOf(e.utils.pars_start_tag) < 0)) return t.watchText(r, null, {
                            element: n
                        }), r
                    }, _ = function(t, n, i) {
                        var r, a, o, s, l, c, u, f, d, p;
                        if ("directive:" === (d = n.nodeValue.trim()).slice(0, 10)) {
                            if ((u = (d = d.slice(10).trim()).indexOf(" ")) >= 0 ? (o = d.slice(0, +(u - 1) + 1 || 9e9), p = d.slice(u + 1)) : (o = d, p = ""), r = {
                                    list: f = [],
                                    element: n,
                                    attr_type: "M",
                                    cd: t,
                                    skip_attr: []
                                }, C(o, r), (a = f[0]).noDirective) throw "Comment directive not found: " + o;
                            s = a.directive, c = new y({
                                element: n,
                                attrName: a.attrName,
                                attributes: f
                            }), e.debug.directive && console.log("bind", a.attrName, p, a);
                            try {
                                s.$init(t, n, p, c)
                            } catch (i) {
                                l = i, e.exceptionHandler(l, "Error in directive: " + a.name, {
                                    value: p,
                                    env: c,
                                    cd: t,
                                    scope: t.scope,
                                    element: n
                                })
                            }
                            return c.skipToElement ? {
                                directive: 1,
                                skipToElement: c.skipToElement
                            } : {
                                directive: 1,
                                skipToElement: null
                            }
                        }
                    }, (y = function(e) {
                        var t, n;
                        for (t in e) n = e[t], this[t] = n;
                        return this
                    }).prototype.takeAttr = function(e, t) {
                        var n, i, r, a;
                        for (1 === arguments.length && (t = !0), i = 0, r = (a = this.attributes).length; i < r; i++)
                            if ((n = a[i]).attrName === e) return t && (n.skip = !0), this.element.getAttribute(e) || !0
                    }, y.prototype.skippedAttr = function() {
                        var e, t, n, i, r;
                        for (r = [], t = 0, n = (i = this.attributes).length; t < n; t++)(e = i[t]).skip && r.push(e.attrName);
                        return r
                    }, y.prototype.scan = function(e) {
                        return this.changeDetector.scan(e)
                    }, y.prototype.on = function(e, t, n) {
                        return this.changeDetector.on(e, t, n)
                    }, y.prototype.watch = function(e, t, n) {
                        return this.changeDetector.watch(e, t, n)
                    }, y.prototype.watchGroup = function(e, t) {
                        return this.changeDetector.watchGroup(e, t)
                    }, y.prototype.watchText = function(e, t, n) {
                        return this.changeDetector.watchText(e, t, n)
                    }, y.prototype.getValue = function(e) {
                        return this.changeDetector.getValue(e)
                    }, y.prototype.setValue = function(e, t) {
                        return this.changeDetector.setValue(e, t)
                    }, y.prototype.eval = function(e) {
                        return this.changeDetector.eval(e)
                    }, y.prototype.new = function(e, t) {
                        return !0 === t ? t = {
                            locals: !0
                        } : !0 === e && null == t && (e = null, t = {
                            locals: !0
                        }), this.changeDetector.new(e, t)
                    }, y.prototype.bind = function(t, n, i) {
                        var a, o, s, l, c, u, f;
                        for (this.stopBinding = !0, s = 0, c = 0, u = arguments.length; c < u; c++)(a = arguments[c]) instanceof r && (o = a, s += 1), le.isElement(a) && (l = a, s += 1);
                        return (f = arguments[s]) || (f = {
                            skip: this.skippedAttr()
                        }), l || (l = this.element), o || (o = this.changeDetector), e.bind(o, l, f)
                    }, w = function(t, n, i) {
                        var r, a, o, s, l, c, u, f, d, p, h, m, v, g, _, w, j, D, $, T, S, A, E, N, B, O, M, L;
                        if (s = {
                                directive: 0,
                                hook: 0,
                                skipToElement: null,
                                fb: v = {
                                    attr: [],
                                    dir: [],
                                    children: []
                                }
                            }, B = !1, M = (i = i || {}).skip_attr, !0 === i.skip ? i.skip_top = !0 : M || (M = i.skip || []), M instanceof Array || (M = [M]), !i.skip_top) {
                            for (r = {
                                    list: $ = [],
                                    element: n,
                                    skip_attr: M,
                                    attr_type: "E",
                                    cd: t
                                }, o = n.nodeName.toLowerCase(), C(o, r), "script" !== o && "style" !== o || (B = !0), r.attr_type = "A", _ = 0, w = (E = n.attributes).length; _ < w; _++) a = E[_], C(a.name, r);
                            if (i.attachDirective)
                                for (o in N = i.attachDirective) N[o], C(o, r);
                            for (T = 0, j = ($ = $.sort(k)).length; T < j; T++)
                                if (!(f = $[T]).skip) {
                                    if (f.noDirective) throw "Directive not found: " + f.name;
                                    if (f.skip = !0, L = i.attachDirective && i.attachDirective[f.attrName] ? i.attachDirective[f.attrName] : n.getAttribute(f.attrName), f.is_attr) b(t, n, L, f.attrName) && v.attr.push({
                                        attrName: f.attrName,
                                        value: L
                                    });
                                    else {
                                        d = f.directive, h = new y({
                                            element: n,
                                            attrName: f.attrName,
                                            attrArgument: f.attrArgument || null,
                                            attributes: $,
                                            stopBinding: !1,
                                            elementCanBeRemoved: i.elementCanBeRemoved,
                                            fbElement: i.fbElement
                                        }), e.debug.directive && console.log("bind", f.attrName, L, f);
                                        try {
                                            "stopBinding" === d.$init(t, n, L, h) && (B = !0)
                                        } catch (i) {
                                            p = i, e.exceptionHandler(p, "Error in directive: " + f.attrName, {
                                                value: L,
                                                env: h,
                                                cd: t,
                                                scope: t.scope,
                                                element: n
                                            })
                                        }
                                        if (h.fastBinding ? (m = le.isFunction(h.fastBinding) ? h.fastBinding : d.init, v.dir.push({
                                                fb: m,
                                                attrName: f.attrName,
                                                value: L,
                                                attrArgument: h.attrArgument,
                                                fbData: h.fbData
                                            })) : s.directive++, h.stopBinding) {
                                            B = !0;
                                            break
                                        }
                                        h.skipToElement && (s.skipToElement = h.skipToElement)
                                    }
                                }
                        }
                        if (!B)
                            for (O = null, g = S = 0, D = (c = function() {
                                    var e, t, i, r;
                                    for (r = [], t = 0, e = (i = n.childNodes).length; t < e; t++) l = i[t], r.push(l);
                                    return r
                                }()).length; S < D; g = ++S)(l = c[g]) && (O ? O === l && (O = null) : (i.fbElement && (u = {
                                fbElement: i.fbElement.childNodes[g]
                            }), A = x(t, l, u), s.directive += A.directive, s.hook += A.hook, O = A.skipToElement, A.fb && (A.fb.text || A.fb.attr && A.fb.attr.length || A.fb.dir && A.fb.dir.length || A.fb.children && A.fb.children.length) && v.children.push({
                                index: g,
                                fb: A.fb
                            })));
                        return s
                    }, x = function(t, n, i) {
                        var r, a, o, s, l, c, u;
                        if (c = {
                                directive: 0,
                                hook: 0,
                                skipToElement: null,
                                fb: null
                            }, e.hooks.binding.length)
                            for (a = 0, o = (l = e.hooks.binding).length; a < o; a++)
                                if (r = l[a], c.hook += 1, (s = r.fn(t, n, i)) && s.owner) return c;
                        return 1 === n.nodeType ? (s = w(t, n, i), c.directive += s.directive, c.hook += s.hook, c.skipToElement = s.skipToElement, c.fb = s.fb) : 3 === n.nodeType ? (u = j(t, n)) && (c.fb = {
                            text: u
                        }) : 8 === n.nodeType && (s = _(t, n)) && (c.directive += s.directive, c.skipToElement = s.skipToElement), c
                    }, e.nextTick = (E = null, A = [], S = function() {
                        var t, n, i, r, a, o, s;
                        for (E = null, n = A.slice(), A.length = 0, a = 0, o = n.length; a < o; a++) {
                            r = n[a], t = r[0], s = r[1];
                            try {
                                t.call(s)
                            } catch (n) {
                                i = n, e.exceptionHandler(i, "$nextTick, error in function", {
                                    fn: t,
                                    self: s
                                })
                            }
                        }
                        return null
                    }, function(e) {
                        if (A.push([e, this]), !E) return E = setTimeout(S, 0)
                    }), e.bind = function(t, n, i) {
                        var r, a, o, s, l, c;
                        if (!t) throw "No changeDetector";
                        if (!n) throw "No element";
                        if (i = i || {}, e.option.domOptimization && !i.noDomOptimization && e.utils.optmizeElement(n), (r = !(c = t.root).finishBinding_lock) && (c.finishBinding_lock = !0, c.bindingResult = {
                                directive: 0,
                                hook: 0
                            }), l = x(t, n, i), c.bindingResult.directive += l.directive, c.bindingResult.hook += l.hook, t.digest(), r) {
                            for (c.finishBinding_lock = !1, s = c.watchers.finishBinding.slice(), c.watchers.finishBinding.length = 0, a = 0, o = s.length; a < o; a++)(0, s[a])();
                            l.total = c.bindingResult
                        }
                        return l
                    },
                    function() {
                        function t(e, t, n, i, r, a) {
                            i.callback.apply(null, a);
                            var o = t._properties.root;
                            o && o.topCD && o.topCD.scan({
                                zone: !0
                            })
                        }
                        var n = e.bind;
                        e.bind = function(i, r, a) {
                            var o = i.root,
                                s = e.option.zone;
                            if (s) {
                                var l = !0 === s ? Zone : s,
                                    c = o.zone;
                                if (c || (o.zone = c = l.current.fork({
                                        name: l.current.name + ".x",
                                        properties: {
                                            root: o
                                        },
                                        onInvokeTask: t
                                    })), l.current !== c) return o.zone.run(n, null, [i, r, a])
                            }
                            return n(i, r, a)
                        }
                    }(), e.bootstrap = function(t, n) {
                        if (!t) return e.bootstrap("[al-app]"), e.bootstrap("[al\\:app]"), void e.bootstrap("[data-al-app]");
                        var i;
                        if (t instanceof e.core.ChangeDetector) i = t, t = n;
                        else if (n instanceof e.core.ChangeDetector) i = n;
                        else if (le.isFunction(n)) {
                            var r = {};
                            i = e.ChangeDetector(r), n.call(i, r)
                        } else n && (i = e.ChangeDetector(n));
                        if (Array.isArray(t)) {
                            for (var a = void 0, o = 0, s = t; o < s.length; o++) {
                                var l = s[o];
                                a = e.bootstrap(l, i)
                            }
                            return a
                        }
                        if ("string" == typeof t) {
                            a = void 0;
                            for (var c = 0, u = document.querySelectorAll(t); c < u.length; c++) {
                                var f = u[c];
                                a = e.bootstrap(f, i)
                            }
                            return a
                        }
                        if (i || (i = e.ChangeDetector()), le.isElement(t)) {
                            for (var d, p, h, m = 0, v = ["al-app", "al:app", "data-al-app"]; m < v.length && (d = v[m], p = t.getAttribute(d), t.removeAttribute(d), !p); m++);
                            return p && (h = {
                                skip_attr: [d],
                                attachDirective: {}
                            }, e.d.al.ctrl ? h.attachDirective["al-ctrl"] = p : h.attachDirective[p + "!"] = ""), e.bind(i, t, h), i
                        }
                        e.exceptionHandler("Error in bootstrap", "Error input arguments", {
                            input: t
                        })
                    }, e.utils.getId = (M = function() {
                        var e, t, n, i, r;
                        for (r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), n = Math.floor((new Date).valueOf() / 1e3) - 1388512800, i = ""; n > 0;) t = n - 62 * (e = Math.floor(n / 62)), n = e, i = r[t] + i;
                        return i
                    }(), O = 1, function() {
                        return M + "#" + O++
                    }), e.utils.clone = N = function(e, t) {
                        var n, i, r, a;
                        if (null == t && (t = 128), t < 1) return null;
                        if (!e) return e;
                        if ("object" == typeof e) {
                            if (e instanceof Array) return r = function() {
                                var i, r, a;
                                for (a = [], i = 0, r = e.length; i < r; i++) n = e[i], a.push(N(n, t - 1));
                                return a
                            }();
                            if (e instanceof Date) return new Date(e.valueOf());
                            if (e.nodeType && "function" == typeof e.cloneNode) return e;
                            for (i in r = {}, e) a = e[i], "$" !== i[0] && (r[i] = N(a, t - 1));
                            return r
                        }
                        return e
                    }, e.utils.equal = B = function(e, t, n) {
                        var i, r, a, o, s, l, c;
                        if (null == n && (n = 128), n < 1) return !0;
                        if (!e || !t) return e === t;
                        if ((l = typeof e) !== typeof t) return !1;
                        if ("object" === l) {
                            if (e instanceof Array) {
                                if (e.length !== t.length) return !1;
                                for (i = r = 0, o = e.length; r < o; i = ++r)
                                    if (c = e[i], !B(c, t[i], n - 1)) return !1;
                                return !0
                            }
                            if (e instanceof Date) return e.valueOf() === t.valueOf();
                            if (e.nodeType && "function" == typeof e.cloneNode) return e === t;
                            for (a in s = {}, e)
                                if (c = e[a], "$" !== a[0] && (s[a] = !0, !B(c, t[a], n - 1))) return !1;
                            for (a in t)
                                if (c = t[a], "$" !== a[0] && !s[a] && !B(c, e[a], n - 1)) return !1;
                            return !0
                        }
                        return e === t
                    }, e.exceptionHandler = function(e, t, n) {
                        var i;
                        return i = [], t && i.push(t), e && e.message && i.push(e.message), n && i.push(n), e && i.push(e.stack ? e.stack : e), console.error.apply(console, i)
                    }, R = (V = function() {
                        var e, t, n;
                        for (n = {}, e = 0, t = arguments.length; e < t; e++) n[arguments[e]] = !0;
                        return n
                    })("instanceof", "typeof", "in", "null", "true", "false", "undefined", "return"), P = /[a-zA-Z\u0410-\u044F\u0401\u0451_\.\$]/, F = function(e) {
                        return e.match(P)
                    }, H = function(e) {
                        return e.charCodeAt() >= 48 && e.charCodeAt() <= 57
                    }, z = V("+", "-", ">", "<", "=", "&", "|", "^", "!", "~"), I = function(e) {
                        return z[e] || !1
                    }, L = V("=", "+=", "-=", "++", "--", "|=", "^=", "&=", "!=", "<<=", ">>="), e.utils.parsExpression = function(t, n) {
                        var i, r, a, o, s, l, c, u, f, d;
                        return s = V.apply(null, (n = n || {}).input || []), d = 1, a = (l = function(e) {
                            var t, n, i, r, a, o, s, c, u, f, p, h, m, v, g, y, b, _, w, x, j;
                            for (m = e.line, v = e.result || [], f = e.index || 0, h = e.level || 0, b = e.stopKey || null, x = "", p = null, j = [], g = "", s = "", y = !1, _ = "", w = "", u = "", r = 0, c = null, o = function() {
                                    return u && v.push({
                                        type: "free",
                                        value: u
                                    }), u = ""
                                }; f <= m.length;)
                                if (i = m[f - 1], t = m[f++] || "", n = m[f], (y && u || !t) && o(), "string" !== y) {
                                    if ("key" === y) {
                                        if (F(t) || H(t)) {
                                            x += t;
                                            continue
                                        }
                                        if ("[" === t) {
                                            if (x += t, !(a = l({
                                                    line: m,
                                                    index: f,
                                                    level: h + 1,
                                                    stopKey: "]"
                                                })).stopKeyOk) throw "Error expression";
                                            f = a.index, x += "###" + a.uniq + "###]", j.push(a);
                                            continue
                                        }
                                        if ("?" === t && ("." === n || "(" === n || "[" === n)) {
                                            x += t;
                                            continue
                                        }
                                        if ("(" === t) {
                                            if (x += t, !(a = l({
                                                    line: m,
                                                    index: f,
                                                    level: h + 1,
                                                    stopKey: ")"
                                                })).stopKeyOk) throw "Error expression";
                                            f = a.index, x += "###" + a.uniq + "###)", j.push(a);
                                            continue
                                        }
                                        p = {
                                            type: "key",
                                            value: x,
                                            start: f - x.length - 1,
                                            finish: f - 1,
                                            children: j
                                        }, v.push(p), y = "", x = "", j = []
                                    } else if ("sign" === y) {
                                        if (I(t)) {
                                            g += t;
                                            continue
                                        }
                                        if ("|" === g && 0 === h && 0 === r) {
                                            c = m.substring(f - 1), f = m.length + 1;
                                            continue
                                        }(L[g] || "=" === g[0] && "=" !== g[1]) && (p.assignment = !0), v.push({
                                            type: "sign",
                                            value: g
                                        }), y = "", g = ""
                                    } else if ("digit" === y) {
                                        if (H(t) || "." === t) {
                                            s += t;
                                            continue
                                        }
                                        v.push({
                                            type: "digit",
                                            value: s
                                        }), s = ""
                                    }
                                    if (F(t)) y = "key", x += t;
                                    else if (I(t)) y = "sign", g += t;
                                    else if (H(t)) y = "digit", s += t;
                                    else if ('"' !== t && "'" !== t) {
                                        if (t === b) return o(), {
                                            result: v,
                                            index: f,
                                            stopKeyOk: !0,
                                            uniq: d++
                                        };
                                        "(" === t && r++, ")" === t && r--, "{" !== t ? (":" === t && "}" === b && (p.type = "free"), u += t) : (o(), a = l({
                                            line: m,
                                            index: f,
                                            level: h + 1,
                                            stopKey: "}"
                                        }), v.push({
                                            type: "{}",
                                            child: a
                                        }), f = a.index)
                                    } else _ = t, y = "string", w += t
                                } else {
                                    if (t === _ && "\\" !== i) {
                                        w += t, v.push({
                                            type: "string",
                                            value: w
                                        }), w = "", _ = "", y = "";
                                        continue
                                    }
                                    w += t
                                }
                            return o(), {
                                result: v,
                                index: f,
                                filter: c
                            }
                        })({
                            line: t
                        }), c = {
                            isSimple: !a.filter,
                            simpleVariables: []
                        }, a.filter ? (c.expression = t.substring(0, t.length - a.filter.length - 1), c.filter = a.filter) : c.expression = t, u = function(e) {
                            var t;
                            return {
                                count: (t = e.split(/[\.\[\(\?]/)).length,
                                firstPart: t[0]
                            }
                        }, f = function(e, t) {
                            return t ? "($$=" + e + ",$$==null)?undefined:" : "($$=$$" + e + ",$$==null)?undefined:"
                        }, o = function(e) {
                            return e.split(/[\.\[\(\?]/)[0]
                        }, r = function(e) {
                            var t, n, i, r, a, l, c, u, d, p;
                            if ("this" === e) return "$$scope";
                            if (t = o(e), r = R[t] || s[t], "this" === t && (e = "$$scope" + e.slice(4), r = !0), 1 === (u = e.split("?")).length) return r ? e : "$$scope." + e;
                            for (r ? (p = f(u[0], !0), n = u[0]) : (p = f("scope." + u[0]), n = "scope." + u[0]), i = 0, l = (d = u.slice(1, u.length - 1)).length; i < l; i++) "(" === (c = d[i])[0] ? p += f(n + c, r) : (p += f(c), n += c);
                            return "(" === (a = u[u.length - 1])[0] ? (r || (p += "$$"), p += n + a) : p += "$$" + a, "(" + p + ")"
                        }, i = function(e) {
                            var t, n, a, o, l, f, d, p, h, m, v, g, y;
                            for (g = "", o = 0, d = (m = e.result).length; o < d; o++)
                                if ("key" !== (a = m[o]).type) "{}" !== a.type ? g += a.value : g += "{" + i(a.child) + "}";
                                else {
                                    if (a.assignment ? (h = "this" === (y = u(a.value)).firstPart ? "$$scope" + a.value.substring(4) : s[y.firstPart] ? a.value : y.count < 2 ? "($$scope.$$root || $$scope)." + a.value : "$$scope." + a.value, c.isSimple = !1) : R[a.value] ? h = a.value : (h = r(a.value), c.simpleVariables.push(h)), a.children.length)
                                        for (l = 0, p = (v = a.children).length; l < p; l++) f = "###" + (t = v[l]).uniq + "###", n = i(t), h = h.split(f).join(n);
                                    g += h
                                }
                            return g
                        }, c.result = i(a), e.debug.parser && console.log(t, c), c
                    }, e.utils.parsFilter = function(t) {
                        var n, i, r;
                        for (r = [], t = t.trim(); t;) {
                            if (!(n = t.match(/^(\w+)([^\w])(.*)$/))) {
                                if (!(n = t.match(/^(\w+)$/))) return null;
                                r.push({
                                    name: n[1],
                                    args: [],
                                    raw: ""
                                });
                                break
                            }
                            "|" === n[2] ? (r.push({
                                name: n[1],
                                args: [],
                                raw: ""
                            }), t = n[3]) : (i = e.utils.parsArguments(n[3], {
                                stop: "|"
                            }), r.push({
                                name: n[1],
                                args: i.result,
                                raw: n[3].slice(0, i.length)
                            }), t = n[3].slice(i.length + 1).trim())
                        }
                        return {
                            result: r
                        }
                    }, e.utils.parsArguments = function(e, t) {
                        var n, i, r, a, o, s, l, c;
                        for (t = t || {}, o = 0, r = [], i = "", a = 0, l = !1, c = !1, s = function() {
                                i && (r.push(i), i = "")
                            }; o <= e.length;)
                            if (n = e[o] || "", o++, l) i += n, '"' === n && (l = !1);
                            else if (c) i += n, "'" === n && (c = !1);
                        else if ('"' !== n)
                            if ("'" !== n)
                                if (a) i += n, "(" === n && a++, ")" === n && a--;
                                else if (" " !== n && "," !== n) {
                            if (t.stop && t.stop === n) {
                                s();
                                break
                            }
                            "(" === n && (a = 1), i += n
                        } else s();
                        else i += n, c = !0;
                        else i += n, l = !0;
                        return s(), {
                            result: r,
                            length: o - 1
                        }
                    }, e.utils.pars_start_tag = "{{", e.utils.pars_finish_tag = "}}", W = function(t) {
                        var n, i, r, a, o, s, l, c;
                        return c = e.utils.pars_start_tag, n = e.utils.pars_finish_tag, s = [], r = 0, o = 0, i = function(e) {
                                var n;
                                return e = e || 1, n = t.substring(o, r - e), o = r, n
                            }, l = null, a = function(e, o, c) {
                                var u, f, d;
                                for (e || (l = {
                                        type: "expression",
                                        list: []
                                    }, s.push(l)), u = null; r < t.length;) {
                                    if (f = u + (u = t[r]), d = t[r += 1], u === o) return;
                                    if (!c) {
                                        if (f === n && 0 === e) return l.list.push(i(2)), !0;
                                        "(" === u ? a(e + 1, ")") : "{" === u ? a(e + 1, "}") : '"' === u ? a(e + 1, '"', !0) : "'" === u ? a(e + 1, "'", !0) : "|" === u && 0 === e && ("|" === d ? r += 1 : l.list.push(i()))
                                    }
                                }
                            },
                            function() {
                                var e, n, o, l;
                                for (n = null, e = null; r < t.length;)
                                    if (n = e, e = t[r], r += 1, n + e === c) {
                                        if ((l = i(2)) && s.push({
                                                type: "text",
                                                value: l
                                            }), !a(0)) throw "Wrong expression" + t;
                                        e = null
                                    }
                                if (o = i(-1)) s.push({
                                    type: "text",
                                    value: o
                                })
                            }(), e.debug.parser && console.log("parsText", s), s
                    }, K = {}, U = function(e) {
                        var t, n;
                        return function() {
                            var i, r, a;
                            for (a = [], i = 0, r = e.length; i < r; i++) t = e[i], n = {
                                type: t.type,
                                value: t.value
                            }, t.list && (n.list = t.list.slice()), a.push(n);
                            return a
                        }()
                    }, e.utils.parsText = function(e) {
                        var t;
                        return (t = K[e]) || (K[e] = t = W(e)), U(t)
                    }, e.utils.compile = Y = {}, Y.cache = {}, Y.Function = Function, Y.expression = function(t, n) {
                        var i, r, a, o, s, l, c;
                        if (n = n || {}, l = (t = t.trim()) + "#", l += n.no_return ? "+" : "-", l += n.string ? "s" : "v", n.input && (l += n.input.join(",")), s = Y.cache[l]) return s;
                        s = e.utils.parsExpression(t, {
                            input: n.input
                        }), a = s.result, n.no_return ? c = "var $$;" + a : n.string && !s.filter ? (c = "var $$, __ = (" + a + "); return '' + (__ || (__ == null?'':__))", s.rawExpression = "(__=" + a + ") || (__ == null?'':__)") : c = "var $$;return (" + a + ")";
                        try {
                            n.input ? ((i = n.input.slice()).unshift("$$scope"), i.push(c), o = Y.Function.apply(null, i)) : o = Y.Function("$$scope", c)
                        } catch (i) {
                            throw r = i, e.exceptionHandler(r, "Wrong expression: " + t, {
                                src: t,
                                cfg: n
                            }), "Wrong expression: " + a
                        }
                        return s.fn = o, Y.cache[l] = s
                    }, Y.cacheText = {}, Y.buildText = function(e, t) {
                        var n, i, r, a, o, s, l;
                        if (r = Y.cacheText[e]) return function() {
                            return r.call(t)
                        };
                        for (l = [], o = a = 0, s = t.length; a < s; o = ++a) "expression" === (n = t[o]).type ? n.fn ? l.push("this[" + o + "].fn(this.scope)") : l.push("((x=this[" + o + "].value) || (x == null?'':x))") : n.value && (i = n.value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n"), l.push('"' + i + '"'));
                        return l = l.join(" + "), r = Y.Function("var x; return (" + l + ")"), Y.cacheText[e] = r,
                            function() {
                                return r.call(t)
                            }
                    }, Y.cacheSimpleText = {}, Y.buildSimpleText = function(e, t) {
                        var n, i, r, a, o, s, l, c;
                        if ((o = e ? Y.cacheSimpleText[e] : null) || !t) return o || null;
                        for (l = [], c = [], a = r = 0, s = t.length; r < s; a = ++r) "expression" === (n = t[a]).type ? (l.push("(" + n.re + ")"), n.simpleVariables && c.push.apply(c, n.simpleVariables)) : n.value && (i = n.value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n"), l.push('"' + i + '"'));
                        return l = l.join(" + "), o = {
                            fn: Y.Function("$$scope", "var $$, __; return (" + l + ")"),
                            simpleVariables: c
                        }, e && (Y.cacheSimpleText[e] = o), o
                    }, G = function(e) {
                        var t, n, i;
                        if (!e.length) return "el";
                        for (i = "el", t = 0, n = e.length; t < n; t++) i += ".childNodes[" + e[t] + "]";
                        return i
                    }, J = function(t) {
                        var n, i, r, a, o, s;
                        for (a = 0, s = (r = e.utils.parsText(t)).length; a < s; a++)
                            if ("expression" === (i = r[a]).type) {
                                if (i.list.length > 1) return null;
                                if ("#" === (o = i.list[0])[0]) return null;
                                if ("=" === o[0]) return null;
                                if ("::" === o.slice(0, 2)) return null;
                                if (!(n = e.utils.compile.expression(o, {
                                        string: !0
                                    })).rawExpression) throw "Error";
                                i.re = n.rawExpression
                            }
                        return e.utils.compile.buildSimpleText(t, r).fn
                    }, e.core.fastBinding = function(t) {
                        if (e.option.fastBinding && !t.directive && !t.hook && t.fb) return new q(t)
                    }, (q = function(t) {
                        var n, i, r, a;
                        return r = [], (i = this).fastWatchFn = [], n = [], (a = function(e, t) {
                            var o, s, l, c, u, f, d, p, h, m, v, g, y, b, _, w;
                            if (e.dir)
                                for (b = G(n), c = 0, p = (v = e.dir).length; c < p; c++) o = v[c], r.push("s.dir(" + i.fastWatchFn.length + ", " + b + ");"), i.fastWatchFn.push(o);
                            if (e.attr)
                                for (u = 0, h = (g = e.attr).length; u < h; u++) w = (l = g[u]).value, f = l.attrName, b = G(n), s = J(w), _ = w.replace(/"/g, '\\"').replace(/\n/g, "\\n"), s ? (r.push('s.fw("' + _ + '", ' + i.fastWatchFn.length + ", " + b + ', "' + f + '");'), i.fastWatchFn.push(s)) : r.push("s.wt('" + _ + "', " + b + ", '" + f + "');");
                            if (e.text && (b = G(n), s = J(e.text), _ = e.text.replace(/"/g, '\\"').replace(/\n/g, "\\n"), s ? (r.push('s.fw("' + _ + '", ' + i.fastWatchFn.length + ", " + b + ");"), i.fastWatchFn.push(s)) : r.push('s.wt("' + _ + '", ' + b + ");")), e.children)
                                for (d = 0, m = (y = e.children).length; d < m; d++) l = y[d], n.length = t + 1, n[t] = l.index, a(l.fb, t + 1)
                        })(t.fb, 0), r = r.join("\n"), i.resultFn = e.utils.compile.Function("s", "el", "f$", r), this
                    }).prototype.bind = function(e, t) {
                        this.currentCD = e, this.resultFn(this, t, le)
                    }, q.prototype.dir = function(e, t) {
                        var n, i, r, a;
                        i = this.fastWatchFn[e], n = this.currentCD, r = new y({
                            attrName: i.attrName,
                            attrArgument: i.attrArgument,
                            changeDetector: n,
                            fbData: i.fbData
                        }), (a = i.fb.call(r, n.scope, t, i.value, r)) && a.start && a.start()
                    }, q.prototype.fw = function(e, t, n, i) {
                        var r, a, o, s;
                        r = this.currentCD, s = {
                            isStatic: !1,
                            isArray: !1,
                            extraLoop: !1,
                            deep: !1,
                            value: o = (a = this.fastWatchFn[t])(r.locals),
                            callback: null,
                            exp: a,
                            src: e,
                            onStop: null,
                            el: n,
                            ea: i || null
                        }, r.watchList.push(s), c(r.scope, s, o)
                    }, q.prototype.wt = function(e, t, n) {
                        this.currentCD.watchText(e, null, {
                            element: t,
                            elementAttr: n
                        })
                    }, e.hooks.attribute.unshift({
                        code: "events",
                        fn: function() {
                            var e;
                            (e = this.attrName.match(/^\@([\w\.\-]+)$/)) && (this.ns = "al", this.name = "on", this.attrArgument = e[1])
                        }
                    }), e.hooks.eventModifier = {}, (re = function(t, n) {
                        return e.hooks.eventModifier[t] = {
                            event: ["keydown", "keypress", "keyup"],
                            fn: function(e, t) {
                                e[n] || (t.stop = !0)
                            }
                        }
                    })("alt", "altKey"), re("control", "ctrlKey"), re("ctrl", "ctrlKey"), re("meta", "metaKey"), re("shift", "shiftKey"), e.hooks.eventModifier.self = function(e, t) {
                        if (e.target !== t.element) return t.stop = !0
                    }, e.hooks.eventModifier.once = {
                        beforeExec: function(e, t) {
                            return t.unbind()
                        }
                    }, X = function(e, t) {
                        var n, i, r, a, o, s;
                        if (s = {}, "string" == typeof e ? s.event = e : "object" == typeof e && e.event && (s.event = e.event), "string" == typeof s.event && (s.event = s.event.split(/\s+/)), t && s.event) {
                            for (r = !1, i = 0, a = (o = s.event).length; i < a; i++)
                                if (n = o[i], t.indexOf(n) >= 0) {
                                    r = !0;
                                    break
                                }
                            if (!r) return null
                        }
                        return le.isFunction(e) ? s.fn = e : e.fn && (s.fn = e.fn), e.beforeExec && (s.beforeExec = e.beforeExec), e.init && (s.init = e.init), s
                    }, e.d.al.on = function(t, n, i, r) {
                        var a, o;
                        r.attrArgument && (e.option.removeAttribute && (n.removeAttribute(r.attrName), r.fbElement && r.fbElement.removeAttribute(r.attrName)), o = r.attrArgument.split(".")[0], (a = function() {}).prototype = ie(r.attrArgument, Q[o]), i && (a.prototype.fn = r.changeDetector.compile(i, {
                            no_return: !0,
                            input: ["$event", "$element", "$value"]
                        })), a.prototype.expression = i, r.fastBinding = function(e, t, n, i) {
                            var r, o, s, l, c, u;
                            for ((s = new a).scope = e, s.element = t, s.cd = i.changeDetector, r = function(e) {
                                    return te(s, e)
                                }, l = 0, c = (u = s.eventList).length; l < c; l++) o = u[l], le.on(t, o, r);
                            s.initFn && s.initFn(e, t, n, i), s.unbind = function() {
                                var e, n, i;
                                for (e = 0, n = (i = s.eventList).length; e < n; e++) o = i[e], le.off(t, o, r)
                            }, i.changeDetector.watch("$destroy", s.unbind)
                        }, r.fastBinding(t, n, i, r))
                    }, ne = {
                        enter: 13,
                        tab: 9,
                        delete: 46,
                        backspace: 8,
                        esc: 27,
                        space: 32,
                        up: 38,
                        down: 40,
                        left: 37,
                        right: 39
                    }, Q = {
                        click: {
                            stop: !0,
                            prevent: !0
                        },
                        dblclick: {
                            stop: !0,
                            prevent: !0
                        },
                        submit: {
                            stop: !0,
                            prevent: !0
                        },
                        keyup: {
                            filterByKey: !0
                        },
                        keypress: {
                            filterByKey: !0
                        },
                        keydown: {
                            filterByKey: !0
                        }
                    }, ie = function(t, n) {
                        var i, r, a, o, s, l, c, u, f;
                        for (r = {
                                attrArgument: t,
                                throttle: null,
                                throttleTime: 0,
                                debounce: null,
                                debounceId: null,
                                initFn: null,
                                eventList: null,
                                stop: (n = n || {}).stop || !1,
                                prevent: n.prevent || !1,
                                scan: !0,
                                modifiers: []
                            }, a = (i = t.split("."))[0], o = null, (u = e.hooks.eventModifier[a]) && (u = X(u)).event && (r.eventList = u.event, u.fn && r.modifiers.push(u), u.init && (r.initFn = u.init)), r.eventList || (r.eventList = [a]), s = 0, c = (f = i.slice(1)).length; s < c; s++) "stop" !== (l = f[s]) ? "prevent" !== l ? "nostop" !== l ? "noprevent" !== l ? "noscan" !== l ? "throttle-" !== l.substring(0, 9) ? "debounce-" !== l.substring(0, 9) ? (u = e.hooks.eventModifier[l]) ? (u = X(u, r.eventList)) && r.modifiers.push(u) : n.filterByKey && (null === o && (o = {}), ne[l] && (l = ne[l]), o[l] = !0) : r.debounce = Number(l.substring(9)) : r.throttle = Number(l.substring(9)) : r.scan = !1 : r.prevent = !1 : r.stop = !1 : r.prevent = !0 : r.stop = !0;
                        return r.filterByKey = o, r
                    }, ee = function(e, t) {
                        var n;
                        return "checkbox" === (n = e.element).type ? n.checked : "radio" === n.type ? n.value || n.checked : t.component ? t.value : n.value
                    }, Z = function(t, n) {
                        var i, r, a, o, s;
                        for (r = 0, a = (s = t.modifiers).length; r < a; r++)(o = s[r]).beforeExec && o.beforeExec(n, t);
                        if (t.fn) try {
                            t.fn(t.cd.locals, n, t.element, ee(t, n))
                        } catch (r) {
                            i = r, e.exceptionHandler(i, "Error in event: " + t.attrArgument + " = " + t.expression, {
                                attr: t.attrArgument,
                                exp: t.expression,
                                scope: t.scope,
                                cd: t.cd,
                                element: t.element,
                                event: n
                            })
                        }
                        t.scan && t.cd.scan()
                    }, te = function(e, t) {
                        var n, i, r, a, o, s;
                        if (!e.filterByKey || e.filterByKey[t.keyCode]) {
                            if (e.modifiers.length)
                                for ((n = function() {}).prototype = e, (i = new n).stop = !1, r = 0, a = (s = e.modifiers).length; r < a; r++)
                                    if ((o = s[r]).fn && (o.fn(t, i), i.stop)) return;
                            e.prevent && t.preventDefault(), e.stop && t.stopPropagation(), e.debounce ? (e.debounceId && clearTimeout(e.debounceId), e.debounceId = setTimeout(function() {
                                return e.debounceId = null, Z(e, t)
                            }, e.debounce)) : e.throttle ? e.throttleTime < Date.now() && (e.throttleTime = Date.now() + e.throttle, Z(e, t)) : Z(e, t)
                        }
                    }, e.hooks.attribute.unshift({
                        code: "directDirective",
                        fn: function() {
                            var t = this.attrName.match(/^(.*)\!$/);
                            if (t) {
                                var n = t[1].replace(/(-\w)/g, function(e) {
                                        return e.substring(1).toUpperCase()
                                    }),
                                    i = this.cd.locals[n] || e.ctrl[n] || e.option.globalController && window[n];
                                le.isFunction(i) ? this.directive = function(t, n, r, a) {
                                    var o = a.changeDetector;
                                    if (r) {
                                        for (var s = e.utils.parsArguments(r), l = Array(s.result.length), c = 0; c < s.result.length; c++) l[c] = e.utils.compile.expression(s.result[c], {
                                            input: ["$element", "$env"]
                                        }).fn(o.locals, n, a);
                                        i.apply(o, l)
                                    } else i.call(o, t, n, r, a)
                                } : (this.result = "noDirective", this.stop = !0)
                            }
                        }
                    }), e.hooks.attribute.unshift({
                        code: "elementVariable",
                        fn: function() {
                            var e = this.attrName.match(/^#([\w\.]*)$/);
                            e && (this.directive = fe, this.attrArgument = e[1])
                        }
                    }), e.d.al.value = function(e, t, n, i) {
                        var r, a;
                        return i.fastBinding = !0, r = function() {
                            i.setValue(n, t.value), a.refresh(), i.scan()
                        }, i.on(t, "input", r), i.on(t, "change", r), a = i.watch(n, function(e) {
                            return null == e && (e = ""), t.value = e, "$scanNoChanges"
                        })
                    }, e.d.al.checked = function(t, n, i, r) {
                        var a = r.fbData = {
                            opt: {},
                            watch: []
                        };

                        function o(t) {
                            var i = r.takeAttr(t);
                            return e.option.removeAttribute && (n.removeAttribute(t), r.fbElement && r.fbElement.removeAttribute(t)), i
                        }

                        function s(e, t) {
                            var n = o(t);
                            if (n) return a.opt[e] = n, !0;
                            var i = o(":" + t) || o("al-attr." + t);
                            return i ? (a.watch.push([i, e]), !0) : void 0
                        }

                        function l(e, t, n) {
                            for (var i in t.fbData.opt) e[i] = t.fbData.opt[i];
                            for (var r = function(i) {
                                    var r = i[1];
                                    t.watch(i[0], function(t) {
                                        e[r] = t, n()
                                    })
                                }, a = 0, o = t.fbData.watch; a < o.length; a++) {
                                r(o[a])
                            }
                        }
                        s("value", "value") ? r.fastBinding = function(e, t, n, i) {
                            var r, a = null;

                            function o() {
                                return t.checked = a && a.indexOf(s.value) >= 0, "$scanNoChanges"
                            }
                            var s = {};
                            l(s, i, o), r = i.watch(n, function(e) {
                                a = e, Array.isArray(a) || (a = null), o()
                            }, {
                                isArray: !0
                            }), i.on(t, "change", function() {
                                if (a || (a = [], i.setValue(n, a)), t.checked) a.indexOf(s.value) < 0 && a.push(s.value);
                                else {
                                    var e = a.indexOf(s.value);
                                    e >= 0 && a.splice(e, 1)
                                }
                                r.refresh(), i.scan()
                            })
                        } : (s("true", "true-value"), s("false", "false-value"), r.fastBinding = function(e, t, n, i) {
                            var r, a, o = {
                                true: !0,
                                false: !1
                            };

                            function s() {
                                return t.checked = r === o.true, "$scanNoChanges"
                            }
                            l(o, i, s), a = i.watch(n, function(e) {
                                r = e, s()
                            }), i.on(t, "change", function() {
                                r = t.checked ? o.true : o.false, i.setValue(n, r), a.refresh(), i.scan()
                            })
                        }), r.fastBinding(t, n, i, r)
                    }, e.d.al.if = function(t, n, i, r) {
                        var a;
                        return r.elementCanBeRemoved ? (e.exceptionHandler(null, r.attrName + " can't control element because of " + r.elementCanBeRemoved, {
                            scope: t,
                            element: n,
                            value: i,
                            env: r
                        }), {}) : (r.stopBinding = !0, a = {
                            item: null,
                            childCD: null,
                            base_element: null,
                            top_element: null,
                            start: function() {
                                a.prepare(), a.watchModel()
                            },
                            prepare: function() {
                                a.base_element = n, a.top_element = document.createComment(" " + r.attrName + ": " + i + " "), le.before(n, a.top_element), le.remove(n)
                            },
                            updateDom: function(e) {
                                e ? a.insertBlock(e) : a.removeBlock()
                            },
                            removeBlock: function() {
                                a.childCD && (a.childCD.destroy(), a.childCD = null, a.removeDom(a.item), a.item = null)
                            },
                            insertBlock: function() {
                                a.childCD || (a.item = a.base_element.cloneNode(!0), a.insertDom(a.top_element, a.item), a.childCD = r.changeDetector.new(), e.bind(a.childCD, a.item, {
                                    skip_attr: r.skippedAttr(),
                                    elementCanBeRemoved: r.attrName
                                }))
                            },
                            watchModel: function() {
                                r.watch(i, a.updateDom)
                            },
                            removeDom: function(e) {
                                le.remove(e)
                            },
                            insertDom: function(e, t) {
                                le.after(e, t)
                            }
                        })
                    }, e.d.al.ifnot = function(t, n, i, r) {
                        var a;
                        return (a = e.d.al.if(t, n, i, r)).updateDom = function(e) {
                            e ? a.removeBlock() : a.insertBlock()
                        }, a
                    }, e.directives.al.repeat = {
                        restrict: "AM",
                        init: function(t, n, i, r) {
                            var a, o;
                            return r.elementCanBeRemoved ? (e.exceptionHandler(null, r.attrName + " can't control element because of " + r.elementCanBeRemoved, {
                                scope: t,
                                element: n,
                                value: i,
                                env: r
                            }), {}) : (r.stopBinding = !0, a = r.changeDetector, o = {
                                start: function() {
                                    o.parsExpression(), o.prepareDom(), o.buildUpdateDom(), o.watchModel()
                                },
                                parsExpression: function() {
                                    var e, t;
                                    if ("(" === (t = i.trim())[0])
                                        if (o.objectMode = !0, e = t.match(/\((\w+),\s*(\w+)\)\s+in\s+(.+)\s+orderBy:(.+)\s*$/)) o.objectKey = e[1], o.objectValue = e[2], o.expression = e[3] + " | toArray:" + o.objectKey + "," + o.objectValue + " | orderBy:" + e[4], o.nameOfKey = "$item", o.trackExpression = "$item." + o.objectKey;
                                        else {
                                            if (!(e = t.match(/\((\w+),\s*(\w+)\)\s+in\s+(.+)\s*$/))) throw "Wrong repeat: " + i;
                                            o.objectKey = e[1], o.objectValue = e[2], o.expression = e[3] + " | toArray:" + o.objectKey + "," + o.objectValue, o.nameOfKey = "$item", o.trackExpression = "$item." + o.objectKey
                                        } else {
                                        if ((e = t.match(/(.*) track by ([\w\.\$\(\)]+)/)) && (o.trackExpression = e[2], t = e[1]), !(e = t.match(/\s*(\w+)\s+in\s+(.+)/))) throw "Wrong repeat: " + i;
                                        o.nameOfKey = e[1], o.expression = e[2]
                                    }
                                },
                                watchModel: function() {
                                    var e;
                                    e = o.objectMode ? {
                                        deep: !0
                                    } : {
                                        isArray: !0
                                    }, o.watch = a.watch(o.expression, o.updateDom, e)
                                },
                                prepareDom: function() {
                                    var t, a, s, l, c;
                                    if (8 === n.nodeType) {
                                        for (o.top_element = n, o.element_list = a = [], t = n.nextSibling; t;) {
                                            if (8 === t.nodeType && "/directive:" === (c = t.nodeValue.trim().split(/\s+/))[0] && "al-repeat" === c[1]) {
                                                r.skipToElement = t;
                                                break
                                            }
                                            a.push(t), t = t.nextSibling
                                        }
                                        for (s = 0, l = a.length; s < l; s++) t = a[s], le.remove(t)
                                    } else o.base_element = n, o.top_element = document.createComment(" " + i + " "), le.before(n, o.top_element), le.remove(n), e.option.removeAttribute && n.removeAttribute(r.attrName)
                                },
                                makeChild: function(e, t, n) {
                                    var i;
                                    return i = a.new(null, {
                                        locals: !0
                                    }), o.updateLocals(i, e, t, n), i
                                },
                                updateLocals: function(e, t, n, i) {
                                    var r;
                                    r = e.locals, o.objectMode ? (r[o.objectKey] = t[o.objectKey], r[o.objectValue] = t[o.objectValue]) : r[o.nameOfKey] = t, r.$index = n, r.$first = 0 === n, r.$last = n === i.length - 1
                                },
                                rawUpdateDom: function(e, t) {
                                    var n, i, r, a, o, s;
                                    for (i = 0, o = e.length; i < o; i++) n = e[i], le.remove(n);
                                    for (a = 0, s = t.length; a < s; a++) r = t[a], le.after(r.after, r.element)
                                },
                                buildUpdateDom: function() {
                                    return o.updateDom = (m = [], u = 0, s = null, g = 0, v = r.skippedAttr(), "$index" === o.trackExpression ? (f = {}, p = function(e) {
                                        return f[u] || null
                                    }, d = function(e) {
                                        null != e.$id && delete f[e.$id]
                                    }, h = function(e, t) {
                                        t.$id = u, f[u] = t
                                    }) : o.trackExpression ? (f = {}, y = a.compile(o.trackExpression, {
                                        input: ["$id", o.nameOfKey]
                                    }), t = function(e, t) {
                                        return y(a.scope, e, t)
                                    }, i = function(t) {
                                        var n;
                                        return (n = t.$alite_id) ? n : n = t.$alite_id = e.utils.getId()
                                    }, p = function(e) {
                                        var n;
                                        return null != (n = t(i, e)) ? f[n] : null
                                    }, d = function(e) {
                                        var t;
                                        null != (t = e.$id) && delete f[t]
                                    }, h = function(e, n) {
                                        var r;
                                        r = t(i, e), n.$id = r, f[r] = n
                                    }) : window.Map ? (f = new Map, p = function(e) {
                                        return f.get(e)
                                    }, d = function(e) {
                                        f.delete(e.item)
                                    }, h = function(e, t) {
                                        f.set(e, t)
                                    }) : (f = {}, p = function(e) {
                                        var t;
                                        return "object" != typeof e ? f[e] || null : (t = e.$alite_id) ? f[t] : null
                                    }, d = function(e) {
                                        var t;
                                        t = e.$id, f[t] && (e.$id = null, delete f[t])
                                    }, h = function(t, n) {
                                        var i;
                                        "object" == typeof t ? (i = e.utils.getId(), t.$alite_id = i, n.$id = i, f[i] = n) : (n.$id = t, f[t] = n)
                                    }), l = [], c = function(e) {
                                        var t, n;
                                        if ("object" != (n = typeof e)) {
                                            if ("number" === n) t = Math.floor(e);
                                            else if ("string" === n && (t = Math.floor(e), isNaN(t))) return [];
                                            if (t < l.length) l.length = t;
                                            else
                                                for (; l.length < t;) l.push(l.length);
                                            return l
                                        }
                                        return e && e.length ? e : []
                                    }, o.element_list ? function(t) {
                                        var n, i, a, s, l, f, g, y, b, _, w, x, j, k, C, D, $, T, S, A, E, N, B, O, M, L, F, H, I, R, V, P, z, K, U, W, Y;
                                        for (M = c(t), D = o.top_element, s = [], R = [], b = 0, $ = m.length; b < $; b++)(I = m[b]).active = !1;
                                        for (u = j = 0, T = M.length; j < T; u = ++j) w = M[u], (I = p(w)) && (I.active = !0);
                                        for (l = [], k = 0, S = m.length; k < S; k++)
                                            if (!(I = m[k]).active) {
                                                for (I.prev && (I.prev.next = I.next), I.next && (I.next.prev = I.prev), d(I), I.CD.destroy(), C = 0, A = (U = I.element_list).length; C < A; C++) f = U[C], l.push(f);
                                                I.next = null, I.prev = null, I.element_list = null
                                            }
                                        for (n = [], K = null, z = !1, g = o.element_list.length - 1, u = L = 0, E = M.length; L < E; u = ++L)
                                            if (x = w = M[u], I = p(w)) {
                                                if (o.updateLocals(I.CD, w, u, M), I.prev === K) {
                                                    if (z)
                                                        for (F = 0, N = (W = I.element_list).length; F < N; F++) f = W[F], s.push({
                                                            element: f,
                                                            after: D
                                                        }), D = f;
                                                    K = I, D = I.element_list[g], I.active = !0, R.push(I);
                                                    continue
                                                }
                                                for (I.prev = K, K && (K.next = I), V = 0, B = (Y = I.element_list).length; V < B; V++) f = Y[V], s.push({
                                                    element: f,
                                                    after: D
                                                }), D = f;
                                                z = !0, K = I, I.active = !0, R.push(I)
                                            } else a = o.makeChild(x, u, M), y = function() {
                                                var e, t, r, l;
                                                for (l = [], t = 0, e = (r = o.element_list).length; t < e; t++) i = r[t], f = i.cloneNode(!0), n.push({
                                                    cd: a,
                                                    el: f
                                                }), s.push({
                                                    element: f,
                                                    after: D
                                                }), l.push(D = f);
                                                return l
                                            }(), h(w, I = {
                                                CD: a,
                                                element_list: y,
                                                prev: K,
                                                next: null,
                                                active: !0,
                                                item: w
                                            }), K ? (H = K.next, K.next = I, I.next = H, H && (H.prev = I)) : 0 === u && m[0] && (H = m[0], I.next = H, H.prev = I), K = I, R.push(I);
                                        for (m = R, o.rawUpdateDom(l, s), l.length = 0, s.length = 0, P = 0, O = n.length; P < O; P++) _ = n[P], e.bind(_.cd, _.el, {
                                            skip_attr: v,
                                            elementCanBeRemoved: r.attrName,
                                            noDomOptimization: !0
                                        })
                                    } : function(t) {
                                        var i, a, l, f, y, b, _, w, x, j, k, C, D, $, T, S, A, E, N, B, O, M;
                                        for (S = c(t), C = o.top_element, g++, l = [], N = [], i = [], O = null, B = !1, u = b = 0, D = S.length; b < D; u = ++b)
                                            if (x = w = S[u], E = p(w)) {
                                                if (o.updateLocals(E.CD, w, u, S), E.prev === O) {
                                                    B && l.push({
                                                        element: E.element,
                                                        after: O.element
                                                    }), O = E, C = E.element, E.version = g, N.push(E);
                                                    continue
                                                }
                                                E.prev = O, O && (O.next = E), l.push({
                                                    element: E.element,
                                                    after: C
                                                }), B = !0, C = E.element, O = E, E.version = g, N.push(E)
                                            } else a = o.makeChild(x, u, S), n = o.base_element.cloneNode(!0), null === s ? (y = o.base_element.cloneNode(!0), M = e.bind(a, n, {
                                                skip_attr: v,
                                                elementCanBeRemoved: r.attrName,
                                                noDomOptimization: !0,
                                                fbElement: y
                                            }), (s = e.core.fastBinding(M) || !1) && (o.base_element = y)) : i.push({
                                                cd: a,
                                                el: n
                                            }), l.push({
                                                element: n,
                                                after: C
                                            }), C = n, h(w, E = {
                                                CD: a,
                                                element: n,
                                                prev: O,
                                                next: null,
                                                version: g,
                                                item: w
                                            }), O ? (A = O.next, O.next = E, E.next = A, A && (A.prev = E)) : 0 === u && m[0] && (A = m[0], E.next = A, A.prev = E), O = E, N.push(E);
                                        for (f = [], j = 0, $ = m.length; j < $; j++)(E = m[j]).version !== g && (E.prev && (E.prev.next = E.next), E.next && (E.next.prev = E.prev), d(E), E.CD.destroy(), f.push(E.element), E.next = null, E.prev = null, E.element = null);
                                        for (m = N, o.rawUpdateDom(f, l), f.length = 0, l.length = 0, k = 0, T = i.length; k < T; k++) _ = i[k], s ? s.bind(_.cd, _.el) : e.bind(_.cd, _.el, {
                                            skip_attr: v,
                                            elementCanBeRemoved: r.attrName,
                                            noDomOptimization: !0
                                        })
                                    });
                                    var t, i, s, l, c, u, f, d, p, h, m, v, g, y
                                }
                            })
                        }
                    }, e.d.al.init = function(t, n, i, r) {
                        var a, o, s, l, c;
                        e.option.removeAttribute && (n.removeAttribute(r.attrName), r.fbElement && r.fbElement.removeAttribute(r.attrName)), a = r.changeDetector, c = ["$element"], "window" === r.attrArgument && c.push("window");
                        try {
                            l = a.compile(i, {
                                no_return: !0,
                                input: c
                            }), r.fastBinding = s = function(e, t, n, i) {
                                return l(i.changeDetector.locals, t, window)
                            }, s(t, n, i, r)
                        } catch (s) {
                            o = s, e.exceptionHandler(o, "al-init, error in expression: " + i, {
                                exp: i,
                                scope: t,
                                cd: a,
                                element: n
                            }), r.fastBinding = function() {}
                        }
                    }, e.d.al.app = {
                        stopBinding: !0
                    }, e.d.al.stop = {
                        restrict: "AE",
                        stopBinding: !0
                    }, e.d.al.cloak = function(e, t, n, i) {
                        t.removeAttribute(i.attrName), n && le.removeClass(t, n)
                    }, e.d.al.html = {
                        restrict: "AM",
                        priority: 100,
                        modifier: {},
                        link: function(t, n, i, r) {
                            var a;
                            return r.elementCanBeRemoved && 8 !== n.nodeType ? (e.exceptionHandler(null, r.attrName + " can't control element because of " + r.elementCanBeRemoved, {
                                scope: t,
                                element: n,
                                value: i,
                                env: r
                            }), {}) : (r.stopBinding = !0, a = {
                                baseElement: null,
                                topElement: null,
                                activeElement: null,
                                childCD: null,
                                name: i,
                                watchMode: null,
                                start: function() {
                                    a.parsing(), a.prepare(), a.watchModel()
                                },
                                parsing: function() {
                                    var o, s, l, c;
                                    if (r.attrArgument)
                                        for (o = 0, s = (c = r.attrArgument.split(".")).length; o < s; o++) "literal" !== (l = c[o]) ? "tpl" !== l ? e.d.al.html.modifier[l] && e.d.al.html.modifier[l](a, {
                                            scope: t,
                                            element: n,
                                            inputName: i,
                                            env: r
                                        }) : a.watchMode = "tpl" : a.watchMode = "literal"
                                },
                                prepare: function() {
                                    8 === n.nodeType ? (a.baseElement = null, a.topElement = n) : (a.baseElement = n, a.topElement = document.createComment(" " + r.attrName + ": " + i + " "), le.before(n, a.topElement), le.remove(n))
                                },
                                removeBlock: function() {
                                    var e, t, n, i;
                                    if (a.childCD && (a.childCD.destroy(), a.childCD = null), a.activeElement) {
                                        if (Array.isArray(a.activeElement))
                                            for (t = 0, n = (i = a.activeElement).length; t < n; t++) e = i[t], a.removeDom(e);
                                        else a.removeDom(a.activeElement);
                                        a.activeElement = null
                                    }
                                },
                                insertBlock: function(t) {
                                    var n, i, o;
                                    if (a.baseElement) a.activeElement = a.baseElement.cloneNode(!1), a.activeElement.innerHTML = t, a.insertDom(a.topElement, a.activeElement), a.childCD = r.changeDetector.new(), e.bind(a.childCD, a.activeElement, {
                                        skip_attr: r.skippedAttr(),
                                        elementCanBeRemoved: r.attrName
                                    });
                                    else
                                        for ((o = document.createElement("body")).innerHTML = t, n = a.topElement, a.activeElement = [], a.childCD = r.changeDetector.new(); i = o.firstChild;) a.insertDom(n, i), n = i, a.activeElement.push(i), e.bind(a.childCD, n, {
                                            skip_attr: r.skippedAttr(),
                                            elementCanBeRemoved: r.attrName
                                        })
                                },
                                updateDom: function(e) {
                                    a.removeBlock(), e && a.insertBlock(e)
                                },
                                removeDom: function(e) {
                                    le.remove(e)
                                },
                                insertDom: function(e, t) {
                                    le.after(e, t)
                                },
                                watchModel: function() {
                                    "literal" === a.watchMode ? a.updateDom(a.name) : "tpl" === a.watchMode ? r.watchText(a.name, a.updateDom) : r.watch(a.name, a.updateDom)
                                }
                            })
                        }
                    }, e.d.al.html.modifier.id = function(e) {
                        return e.updateDom = function(t) {
                            var n, i;
                            e.removeBlock(), (i = document.getElementById(t)) && (n = i.innerHTML) && e.insertBlock(n)
                        }
                    }, e.d.al.html.modifier.url = function(e) {
                        return e.loadHtml = function(e) {
                            le.ajax(e)
                        }, e.updateDom = function(t) {
                            t ? e.loadHtml({
                                cache: !0,
                                url: t,
                                success: function(t) {
                                    e.removeBlock(), e.insertBlock(t)
                                },
                                error: e.removeBlock
                            }) : e.removeBlock()
                        }
                    }, e.d.al.html.modifier.scope = function(t, n) {
                        var i, r, a, o;
                        if (2 === (i = t.name.split(":")).length) t.name = i[0], o = i[1];
                        else {
                            if (i = t.name.match(/(.+)\:\s*\:\:([\d\w]+)$/)) a = !0;
                            else if (a = !1, !(i = t.name.match(/(.+)\:\s*([\.\w]+)$/))) throw "Wrong expression " + t.name;
                            t.name = i[1], o = i[2]
                        }
                        return r = "outer", t.insertBlock = function(i) {
                            var s, l, c;
                            t.activeElement = t.baseElement.cloneNode(!1), t.activeElement.innerHTML = i, t.insertDom(t.topElement, t.activeElement), l = n.env.changeDetector, (s = t.childCD = l.new(null, {
                                locals: !0
                            })).locals[r] = null, c = l.watch(o, function(e) {
                                return s.locals[r] = e
                            }, {
                                oneTime: a
                            }), t.childCD.watch("$destroy", function() {
                                return c.stop()
                            }), e.bind(t.childCD, t.activeElement, {
                                skip_attr: n.env.skippedAttr()
                            })
                        }
                    }, e.d.al.html.modifier.inline = function(e, t) {
                        var n;
                        return n = e.prepare, e.prepare = function() {
                            return n(), t.env.setValue(e.name, e.baseElement.innerHTML)
                        }
                    }, e.d.al.radio = function(e, t, n, i) {
                        var r, a, o;
                        return r = i.takeAttr("al-value"), a = r ? i.eval(r) : i.takeAttr("value"), i.on(t, "change", function() {
                            i.setValue(n, a), o.refresh(), i.scan()
                        }), o = i.watch(n, function(e) {
                            return t.checked = a === e, "$scanNoChanges"
                        })
                    }, window.Map ? ((ae = function() {
                        return this.idByItem = new Map, this.itemById = {}, this.index = 1, this
                    }).prototype.acquire = function(e) {
                        var t;
                        return t = "i" + this.index++, this.idByItem.set(e, t), this.itemById[t] = e, t
                    }, ae.prototype.release = function(e) {
                        var t;
                        t = this.itemById[e], delete this.itemById[e], this.idByItem.delete(t)
                    }, ae.prototype.replace = function(e, t) {
                        var n;
                        n = this.itemById[e], this.idByItem.delete(n), this.idByItem.set(t, e), this.itemById[e] = t
                    }, ae.prototype.getId = function(e) {
                        return this.idByItem.get(e)
                    }, ae.prototype.getItem = function(e) {
                        return this.itemById[e] || null
                    }) : ((ae = function() {
                        return this.itemById = {
                            "i#null": null
                        }, this
                    }).prototype.acquire = function(t) {
                        var n;
                        return null === t ? "i#null" : ("object" == typeof t ? (n = t.$alite_id) || (t.$alite_id = n = e.utils.getId()) : n = "" + t, this.itemById[n] = t, n)
                    }, ae.prototype.release = function(e) {
                        delete this.itemById[e]
                    }, ae.prototype.replace = function(e, t) {
                        this.itemById[e] = t
                    }, ae.prototype.getId = function(e) {
                        return null === e ? "i#null" : "object" == typeof e ? e.$alite_id : "" + e
                    }, ae.prototype.getItem = function(e) {
                        return this.itemById[e] || null
                    }), e.d.al.select = function(t, n, i, r) {
                        var a, o, s, l, c, u;
                        return a = r.changeDetector.new(), r.stopBinding = !0, a.$select = {
                            mapper: s = new ae
                        }, o = null, a.$select.change = function() {
                            return e.nextTick(function() {
                                return c(o)
                            })
                        }, c = function(e) {
                            var t;
                            return (t = s.getId(e)) ? n.value = t : n.selectedIndex = -1
                        }, u = a.watch(i, function(e) {
                            return o = e, c(e)
                        }), l = function(e) {
                            return o = s.getItem(e.target.value), a.setValue(i, o), u.refresh(), a.scan()
                        }, r.on(n, "input", l), r.on(n, "change", l), e.bind(a, n, {
                            skip_attr: r.skippedAttr()
                        })
                    }, e.d.al.option = function(t, n, i, r) {
                        var a, o, s, l, c, u;
                        for (a = u = r.changeDetector, s = 0; s <= 4 && !(c = u.$select); ++s) u = u.parent || {};
                        c ? (l = c.mapper, o = null, a.watch(i, function(e) {
                            o ? l.getId(e) !== o ? (l.release(o), o = l.acquire(e), n.value = o, c.change()) : l.replace(o, e) : (o = l.acquire(e), n.value = o, c.change())
                        }), a.watch("$destroy", function() {
                            return l.release(o), c.change()
                        })) : e.exceptionHandler("", "Error in al-option - al-select is not found", {
                            cd: a,
                            scope: a.scope,
                            element: n,
                            value: i
                        })
                    }, e.hooks.attribute.unshift({
                        code: "attribute",
                        fn: function() {
                            var e, t;
                            (e = this.attrName.match(/^\:([\w\.\-]+)$/)) && ("html" === (t = e[1]).split(".")[0] ? (this.name = "html", t = t.substring(5)) : this.name = "attr", this.ns = "al", this.attrArgument = t)
                        }
                    }), oe = {
                        checked: "checked",
                        readonly: "readOnly",
                        value: "value",
                        selected: "selected",
                        muted: "muted",
                        disabled: "disabled",
                        hidden: "hidden"
                    }, e.d.al.attr = function(t, n, i, r) {
                        var a, o, s, l, c, u, f, d, p, h;
                        if (r.attrArgument) {
                            if (s = r.attrArgument.split("."), o = s[0], f = oe[o], c = s.indexOf("tpl") > 0, e.option.removeAttribute && (n.removeAttribute(r.attrName), r.fbElement && r.fbElement.removeAttribute(r.attrName)), a = {
                                    readOnly: !0
                                }, d = null, "style" === o) {
                                if (!s[1]) throw "Style is not declared";
                                p = s[1].replace(/(-\w)/g, function(e) {
                                    return e.substring(1).toUpperCase()
                                }), d = function(e, t) {
                                    return null == t && (t = ""), e.style[p] = t
                                }
                            } else "class" === o && s.length > 1 ? (c = !1, u = s.slice(1), d = function(e, t) {
                                var n, i, r, a, o;
                                if (t)
                                    for (i = 0, a = u.length; i < a; i++) n = u[i], le.addClass(e, n);
                                else
                                    for (r = 0, o = u.length; r < o; r++) n = u[r], le.removeClass(e, n)
                            }) : "focus" === o ? d = function(e, t) {
                                return t ? e.focus() : e.blur()
                            } : f ? d = function(e, t) {
                                if (void 0 === t && (t = null), e[f] !== t) return e[f] = t
                            } : (a.element = n, a.elementAttr = o);
                            h = c ? "watchText" : "watch", (l = d ? function(e, t, n, r) {
                                return r.changeDetector[h](i, function(e) {
                                    return d(t, e)
                                }, a)
                            } : function(e, t, n, r) {
                                return r.changeDetector[h](i, null, {
                                    readOnly: !0,
                                    element: t,
                                    elementAttr: o
                                })
                            })(t, n, i, r), r.fastBinding = l
                        }
                    }, e.d.al.model = function(t, n, i, r) {
                        var a;
                        if ("select" === (a = n.nodeName.toLowerCase())) return e.d.al.select.call(this, t, n, i, r);
                        if ("input" === a) {
                            if ("checkbox" === n.type) return e.d.al.checked.call(this, t, n, i, r);
                            if ("radio" === n.type) return e.d.al.radio.call(this, t, n, i, r)
                        }
                        return e.d.al.value.call(this, t, n, i, r)
                    }, e.filters.slice = function(e, t, n) {
                        return e ? n ? e.slice(t, n) : e.slice(t) : null
                    }, se = function(e) {
                        return e < 10 ? "0" + e : "" + e
                    }, e.filters.date = function(e, t) {
                        var n, i, r, a, o;
                        if (!e) return "";
                        for (a = t, i = 0, r = (o = [
                                [/yyyy/g, (e = new Date(e)).getFullYear()],
                                [/mm/g, se(e.getMonth() + 1)],
                                [/dd/g, se(e.getDate())],
                                [/HH/g, se(e.getHours())],
                                [/MM/g, se(e.getMinutes())],
                                [/SS/g, se(e.getSeconds())]
                            ]).length; i < r; i++) n = o[i], a = a.replace(n[0], n[1]);
                        return a
                    }, e.filters.json = {
                        watchMode: "deep",
                        fn: function(t) {
                            return JSON.stringify(e.utils.clone(t), null, 4)
                        }
                    }, e.filters.filter = function(e, t, n) {
                        var i, r, a, o, s, l, c, u, f, d, p;
                        if (2 === arguments.length) s = null, p = t;
                        else {
                            if (3 !== arguments.length) return e;
                            s = t, p = n
                        }
                        if (!e || null == p || "" === p) return e;
                        if (u = [], f = ("" + p).toLowerCase(), s)
                            for (r = 0, l = e.length; r < l; r++)(i = e[r])[s] === p ? u.push(i) : ("" + i[s]).toLowerCase().indexOf(f) >= 0 && u.push(i);
                        else
                            for (a = 0, c = e.length; a < c; a++)
                                for (o in i = e[a])(d = i[o]) === p ? u.push(i) : ("" + d).toLowerCase().indexOf(f) >= 0 && u.push(i);
                        return u
                    }, e.filters.orderBy = function(e, t, n) {
                        return !e instanceof Array ? null : (n = n ? 1 : -1, e.sort(function(e, i) {
                            return e[t] < i[t] ? -n : e[t] > i[t] ? n : 0
                        }))
                    }, e.filters.throttle = {
                        init: function(e, t, n) {
                            var i;
                            return t = Number(t), i = null, {
                                onChange: function(e) {
                                    return i && clearTimeout(i), i = setTimeout(function() {
                                        return i = null, n.setValue(e), n.changeDetector.scan()
                                    }, t)
                                }
                            }
                        }
                    }, e.filters.toArray = {
                        init: function(e, t, n) {
                            var i, r, a;
                            return 2 === n.conf.args.length ? (i = n.conf.args[0], a = n.conf.args[1]) : (i = "key", a = "value"), r = [], {
                                watchMode: "deep",
                                onChange: function(e) {
                                    var t, o, s;
                                    for (o in r.length = 0, e) s = e[o], (t = {})[i] = o, t[a] = s, r.push(t);
                                    return n.setValue(r)
                                }
                            }
                        }
                    }, e.filters.storeTo = {
                        init: function(e, t, n) {
                            return {
                                onChange: function(e) {
                                    return n.changeDetector.setValue(t, e), n.setValue(e)
                                }
                            }
                        }
                    }, e.text["="] = function(t, n, i, r) {
                        var a;
                        if ((a = e.utils.compile.expression(n)).filters) throw "Conflict: bindonce and filters, use one-time binding";
                        r.finally(a.fn(r.changeDetector.locals))
                    }, e.text["::"] = function(e, t, n, i) {
                        i.changeDetector.watch(t, function(e) {
                            return i.finally(e)
                        }, {
                            oneTime: !0
                        })
                    },
                    function() {
                        var t = e.f$;

                        function n(e) {
                            return e.replace(/(-\w)/g, function(e) {
                                return e.substring(1).toUpperCase()
                            })
                        }

                        function i(e) {
                            var i, r = e.listener,
                                a = e.childCD,
                                o = e.name,
                                s = e.parentName,
                                l = e.parentCD,
                                c = {};
                            if (o = n(o), r && !0 !== r)
                                if (t.isFunction(r)) i = r;
                                else {
                                    if (i = r.onChange, "copy" === r || "copy" === r.watchMode) return void(i ? i(s) : a.scope[o] = s);
                                    "array" !== r && "array" !== r.watchMode || (c.isArray = !0), "deep" !== r && "deep" !== r.watchMode || (c.deep = !0)
                                }
                            i || (i = function(e) {
                                a.scope[o] = e, a.scan()
                            }), l.watch(s, i, c)
                        }
                        e.component = function(r, a) {
                            var o, s, l = r.match(/^(\w+)[\-](.+)$/);
                            l ? (o = l[1], s = l[2]) : (o = "$global", s = r), s = n(s), e.d[o] || (e.d[o] = {}), e.d[o][s] = {
                                restrict: "E",
                                stopBinding: !0,
                                priority: e.priority.$component,
                                init: function(n, o, s, l) {
                                    var c = {
                                            $sendEvent: function(e, t) {
                                                var n = new CustomEvent(e);
                                                n.value = t, n.component = !0, o.dispatchEvent(n)
                                            }
                                        },
                                        u = l.changeDetector.new(),
                                        f = e.ChangeDetector(c),
                                        d = new y({
                                            element: o,
                                            attributes: l.attributes,
                                            changeDetector: f,
                                            parentChangeDetector: u
                                        });
                                    try {
                                        var p = a.call(f, c, o, d) || {}
                                    } catch (t) {
                                        return void e.exceptionHandler(t, "Error in component <" + r + ">: ", {
                                            element: o,
                                            scope: c,
                                            cd: f
                                        })
                                    }
                                    p.onStart && f.watch("$finishBinding", function() {
                                        p.onStart(), f.scan()
                                    });
                                    var h = !1;
                                    u.watch("$destroy", function() {
                                        h = !0, f.destroy()
                                    }), f.watch("$destroy", function() {
                                        p.onDestroy && p.onDestroy(), h || u.destroy()
                                    });
                                    for (var m = 0, v = o.attributes; m < v.length; m++) {
                                        if ("#" === (C = v[m]).name[0]) {
                                            var g = C.name.slice(1);
                                            if (g) {
                                                p.api ? u.setValue(g, p.api) : u.setValue(g, c);
                                                break
                                            }
                                        }
                                    }

                                    function b(e, t) {
                                        var n = ":" + e,
                                            r = d.takeAttr(n);
                                        if (!r) {
                                            if (!(r = d.takeAttr(e))) return;
                                            t = "copy"
                                        }
                                        i({
                                            childCD: f,
                                            listener: t,
                                            name: e,
                                            parentName: r,
                                            parentCD: u
                                        })
                                    }
                                    if (p.props)
                                        if (Array.isArray(p.props))
                                            for (var _ = 0, w = p.props; _ < w.length; _++) {
                                                b(x = w[_], !0)
                                            } else
                                                for (var x in p.props) b(x, p.props[x]);
                                        else
                                            for (var j = 0, k = o.attributes; j < k.length; j++) {
                                                var C, D = (C = k[j]).name,
                                                    $ = C.value;
                                                if ($) {
                                                    var T = D.match(/^\:(.*)$/);
                                                    T && i({
                                                        childCD: f,
                                                        name: T[1],
                                                        parentName: $,
                                                        parentCD: u
                                                    })
                                                }
                                            }
                                        var S = !1;
                                    if (u.watch("$onScanOnce", function() {
                                            return S = !0
                                        }), p.template && (o.innerHTML = p.template), p.templateId) {
                                        var A = document.getElementById(p.templateId);
                                        if (!A) throw "No template " + p.templateId;
                                        o.innerHTML = A.innerHTML
                                    }

                                    function E(t) {
                                        S || u.digest(), e.bind(f, o, {
                                            skip: !0
                                        })
                                    }
                                    p.templateUrl ? t.ajax({
                                        url: p.templateUrl,
                                        cache: !0,
                                        success: function(e) {
                                            o.innerHTML = e, E(!0)
                                        },
                                        error: function() {
                                            console.error("Template is not loaded", p.templateUrl)
                                        }
                                    }) : E()
                                }
                            }
                        }
                    }(), e
            }
            var t = e();
            t.makeInstance = e, "function" == typeof alightInitCallback ? alightInitCallback(t) : "function" == typeof define ? define(function() {
                return t
            }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = t : (t.option.globalController = !0, window.alight = t, t.f$.ready(t.bootstrap))
        }()
}(jQuery);


(function($){
	$(document).ready(function() {
		
		$(window).bind('keydown', function(event) {
			if (event.ctrlKey || event.metaKey) {
				switch (String.fromCharCode(event.which).toLowerCase()) {
				case 's':
					event.preventDefault();
					jQuery('button.customjscss-button').click();
					break;
				}
			}
		});
		
		
		$('#elementorTipsHeader').click(function(event){
			event.preventDefault();
			$('#elementorTipsBody').slideToggle('fast');
		});
	
	
	});
})(jQuery);




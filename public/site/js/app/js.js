function highdpiInit() {
    if ("1px" == $(".replace-2x").css("font-size"))
        for (var e = $("img.replace-2x").get(), t = 0; t < e.length; t++) {
            src = e[t].src, extension = src.substr(src.lastIndexOf(".") + 1), src = src.replace("." + extension, "2x." + extension);
            var i = new Image;
            i.src = src, e[t].src = 0 != i.height ? src : e[t].src
        }
}

function responsiveResize() {
    compensante = scrollCompensate(), $(window).width() + scrollCompensate() <= 767 && 0 == responsiveflag || $(window).width() + scrollCompensate() >= 768 && (accordion("disable"), accordionFooter("disable"), responsiveflag = !1), "undefined" != typeof page_name && in_array(page_name, ["category"]) && resizeCatimg()
}

function blockHover() {
    $(document).off("mouseenter").on("mouseenter", ".product_list.grid li.ajax_block_product .product-container", function() {
        if (1170 == $("body").find(".container").width()) {
            var e = $(this).parent().outerHeight(),
                t = $(this).parent().find(".button-container").outerHeight() + $(this).parent().find(".comments_note").outerHeight() + $(this).parent().find(".functional-buttons").outerHeight();
            $(this).parent().addClass("hovered").css({
                height: e + t,
                "margin-bottom": -1 * t
            })
        }
    }), $(document).off("mouseleave").on("mouseleave", ".product_list.grid li.ajax_block_product .product-container", function() {
        1170 == $("body").find(".container").width() && $(this).parent().removeClass("hovered").css({
            height: "auto",
            "margin-bottom": "0"
        })
    })
}

function dropDown() {
    elementClick = "#header .current", elementSlide = "ul.toogle_content", activeClass = "active", $(elementClick).on("click", function(e) {
        e.stopPropagation();
        var t = $(this).next(elementSlide);
        t.is(":hidden") ? (t.slideDown(), $(this).addClass(activeClass)) : (t.slideUp(), $(this).removeClass(activeClass)), $(elementClick).not(this).next(elementSlide).slideUp(), $(elementClick).not(this).removeClass(activeClass), e.preventDefault()
    }), $(elementSlide).on("click", function(e) {
        e.stopPropagation()
    }), $(document).on("click", function(e) {
        e.stopPropagation();
        var t = $(elementClick).next(elementSlide);
        $(t).slideUp(), $(elementClick).removeClass("active")
    })
}

function accordionFooter(e) {
    "enable" == e ? ($("#footer .footer-block h4").on("click", function() {
        $(this).toggleClass("active").parent().find(".toggle-footer").stop().slideToggle("medium")
    }), $("#footer").addClass("accordion").find(".toggle-footer").slideUp("fast")) : ($(".footer-block h4").removeClass("active").off().parent().find(".toggle-footer").removeAttr("style").slideDown("fast"), $("#footer").removeClass("accordion"))
}

function accordion(e) {
    leftColumnBlocks = $("#left_column"), "enable" == e ? ($("#right_column .block .title_block, #left_column .block .title_block, #left_column #newsletter_block_left h4").on("click", function() {
        $(this).toggleClass("active").parent().find(".block_content").stop().slideToggle("medium")
    }), $("#right_column, #left_column").addClass("accordion").find(".block .block_content").slideUp("fast")) : ($("#right_column .block .title_block, #left_column .block .title_block, #left_column #newsletter_block_left h4").removeClass("active").off().parent().find(".block_content").removeAttr("style").slideDown("fast"), $("#left_column, #right_column").removeClass("accordion"))
}

$(document).ready(function() {
    if (highdpiInit(), responsiveResize(), $(window).resize(responsiveResize), navigator.userAgent.match(/Android/i)) {
        var e = document.querySelector('meta[name="viewport"]');
        e.setAttribute("content", "initial-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width,height=device-height"), window.scrollTo(0, 1)
    }
    blockHover(), "undefined" != typeof quickView && quickView && quick_view(), dropDown(), "undefined" == typeof page_name || in_array(page_name, ["index", "product"]) || (bindGrid(), $(document).on("change", ".selectProductSort", function() {
        if ("undefined" != typeof request && request) var e = request;
        var t = $(this).val().split(":");
        "undefined" != typeof e && e && (document.location.href = e + (e.indexOf("?") < 0 ? "?" : "&") + "orderby=" + t[0] + "&orderway=" + t[1])
    }), $(document).on("change", 'select[name="n"]', function() {
        $(this.form).submit()
    }), $(document).on("change", 'select[name="manufacturer_list"], select[name="supplier_list"]', function() {
        "" != this.value && (location.href = this.value)
    }), $(document).on("change", 'select[name="currency_payement"]', function() {
        setCurrency($(this).val())
    })), $(document).on("click", ".back", function(e) {
        e.preventDefault(), history.back()
    }), jQuery.curCSS = jQuery.css, $.prototype.cluetip && $("a.cluetip").cluetip({
        local: !0,
        cursor: "pointer",
        dropShadow: !1,
        dropShadowSteps: 0,
        showTitle: !1,
        tracking: !0,
        sticky: !1,
        mouseOutClose: !0,
        fx: {
            open: "fadeIn",
            openSpeed: "fast"
        }
    }).css("opacity", .8), $.prototype.fancybox && $.extend($.fancybox.defaults.tpl, {
        closeBtn: '<a title="' + FancyboxI18nClose + '" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next: '<a title="' + FancyboxI18nNext + '" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev: '<a title="' + FancyboxI18nPrev + '" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
    })
});


! function(e, t, n) {
    "use strict";

    function s(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return e.prop ? e.prop.apply(e, t) : e.attr.apply(e, t)
    }

    function a(e, t, n) {
        var s, a;
        for (s in n) n.hasOwnProperty(s) && (a = s.replace(/ |$/g, t.eventNamespace), e.bind(a, n[s]))
    }

    function i(e, t, n) {
        a(e, n, {
            focus: function() {
                t.addClass(n.focusClass)
            },
            blur: function() {
                t.removeClass(n.focusClass), t.removeClass(n.activeClass)
            },
            mouseenter: function() {
                t.addClass(n.hoverClass)
            },
            mouseleave: function() {
                t.removeClass(n.hoverClass), t.removeClass(n.activeClass)
            },
            "mousedown touchbegin": function() {
                e.is(":disabled") || t.addClass(n.activeClass)
            },
            "mouseup touchend": function() {
                t.removeClass(n.activeClass)
            }
        })
    }

    function r(e, t) {
        e.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass)
    }

    function o(e, t, n) {
        n ? e.addClass(t) : e.removeClass(t)
    }

    function u(e, t, n) {
        var s = "checked",
            a = t.is(":" + s);
        t.prop ? t.prop(s, a) : a ? t.attr(s, s) : t.removeAttr(s), o(e, n.checkedClass, a)
    }

    function l(e, t, n) {
        o(e, n.disabledClass, t.is(":disabled"))
    }

    function c(e, t, n) {
        switch (n) {
            case "after":
                return e.after(t), e.next();
            case "before":
                return e.before(t), e.prev();
            case "wrap":
                return e.wrap(t), e.parent()
        }
        return null
    }

    function d(e, n, a) {
        var i, r, o;
        return a || (a = {}), a = t.extend({
            bind: {},
            divClass: null,
            divWrap: "wrap",
            spanClass: null,
            spanHtml: null,
            spanWrap: "wrap"
        }, a), i = t("<div />"), r = t("<span />"), n.autoHide && e.is(":hidden") && "none" === e.css("display") && i.hide(), a.divClass && i.addClass(a.divClass), n.wrapperClass && i.addClass(n.wrapperClass), a.spanClass && r.addClass(a.spanClass), o = s(e, "id"), n.useID && o && s(i, "id", n.idPrefix + "-" + o), a.spanHtml && r.html(a.spanHtml), i = c(e, i, a.divWrap), r = c(e, r, a.spanWrap), l(i, e, n), {
            div: i,
            span: r
        }
    }

    function f(e, n) {
        var s;
        return n.wrapperClass ? (s = t("<span />").addClass(n.wrapperClass), s = c(e, s, "wrap")) : null
    }

    function p() {
        var n, s, a, i;
        return i = "rgb(120,2,153)", s = t('<div style="width:0;height:0;color:' + i + '">'), t("body").append(s), a = s.get(0), n = e.getComputedStyle ? e.getComputedStyle(a, "").color : (a.currentStyle || a.style || {}).color, s.remove(), n.replace(/ /g, "") !== i
    }

    function m(e) {
        return e ? t("<span />").text(e).html() : ""
    }

    function v() {
        return navigator.cpuClass && !navigator.product
    }

    function h() {
        return void 0 !== e.XMLHttpRequest ? !0 : !1
    }

    function C(e) {
        var t;
        return e[0].multiple ? !0 : (t = s(e, "size"), !t || 1 >= t ? !1 : !0)
    }

    function y() {
        return !1
    }

    function b(e, t) {
        var n = "none";
        a(e, t, {
            "selectstart dragstart mousedown": y
        }), e.css({
            MozUserSelect: n,
            msUserSelect: n,
            webkitUserSelect: n,
            userSelect: n
        })
    }

    function w(e, t, n) {
        var s = e.val();
        "" === s ? s = n.fileDefaultHtml : (s = s.split(/[\/\\]+/), s = s[s.length - 1]), t.text(s)
    }

    function g(e, t, n) {
        var s, a;
        for (s = [], e.each(function() {
                var e;
                for (e in t) Object.prototype.hasOwnProperty.call(t, e) && (s.push({
                    el: this,
                    name: e,
                    old: this.style[e]
                }), this.style[e] = t[e])
            }), n(); s.length;) a = s.pop(), a.el.style[a.name] = a.old
    }

    function k(e, t) {
        var n;
        n = e.parents(), n.push(e[0]), n = n.not(":visible"), g(n, {
            visibility: "hidden",
            display: "block",
            position: "absolute"
        }, t)
    }

    function x(e, t) {
        return function() {
            e.unwrap().unwrap().unbind(t.eventNamespace)
        }
    }
    var H = !0,
        A = !1,
        W = [{
            match: function(e) {
                return e.is("a, button, :submit, :reset, input[type='button']")
            },
            apply: function(t, n) {
                var o, u, c, f, p;
                return u = n.submitDefaultHtml, t.is(":reset") && (u = n.resetDefaultHtml), f = t.is("a, button") ? function() {
                    return t.html() || u
                } : function() {
                    return m(s(t, "value")) || u
                }, c = d(t, n, {
                    divClass: n.buttonClass,
                    spanHtml: f()
                }), o = c.div, i(t, o, n), p = !1, a(o, n, {
                    "click touchend": function() {
                        var n, a, i, r;
                        p || t.is(":disabled") || (p = !0, t[0].dispatchEvent ? (n = document.createEvent("MouseEvents"), n.initEvent("click", !0, !0), a = t[0].dispatchEvent(n), t.is("a") && a && (i = s(t, "target"), r = s(t, "href"), i && "_self" !== i ? e.open(r, i) : document.location.href = r)) : t.click(), p = !1)
                    }
                }), b(o, n), {
                    remove: function() {
                        return o.after(t), o.remove(), t.unbind(n.eventNamespace), t
                    },
                    update: function() {
                        r(o, n), l(o, t, n), t.detach(), c.span.html(f()).append(t)
                    }
                }
            }
        }, {
            match: function(e) {
                return e.is(":checkbox")
            },
            apply: function(e, t) {
                var n, s, o;
                return n = d(e, t, {
                    divClass: t.checkboxClass
                }), s = n.div, o = n.span, i(e, s, t), a(e, t, {
                    "click touchend": function() {
                        u(o, e, t)
                    }
                }), u(o, e, t), {
                    remove: x(e, t),
                    update: function() {
                        r(s, t), o.removeClass(t.checkedClass), u(o, e, t), l(s, e, t)
                    }
                }
            }
        }, {
            match: function(e) {
                return e.is(":file")
            },
            apply: function(e, n) {
                function o() {
                    w(e, p, n)
                }
                var u, f, p, m;
                return u = d(e, n, {
                    divClass: n.fileClass,
                    spanClass: n.fileButtonClass,
                    spanHtml: n.fileButtonHtml,
                    spanWrap: "after"
                }), f = u.div, m = u.span, p = t("<span />").html(n.fileDefaultHtml), p.addClass(n.filenameClass), p = c(e, p, "after"), s(e, "size") || s(e, "size", f.width() / 10), i(e, f, n), o(), v() ? a(e, n, {
                    click: function() {
                        e.trigger("change"), setTimeout(o, 0)
                    }
                }) : a(e, n, {
                    change: o
                }), b(p, n), b(m, n), {
                    remove: function() {
                        return p.remove(), m.remove(), e.unwrap().unbind(n.eventNamespace)
                    },
                    update: function() {
                        r(f, n), w(e, p, n), l(f, e, n)
                    }
                }
            }
        }, {
            match: function(e) {
                if (e.is("input")) {
                    var t = (" " + s(e, "type") + " ").toLowerCase(),
                        n = " color date datetime datetime-local email month number password search tel text time url week ";
                    return n.indexOf(t) >= 0
                }
                return !1
            },
            apply: function(e, t) {
                var n, a;
                return n = s(e, "type"), e.addClass(t.inputClass), a = f(e, t), i(e, e, t), t.inputAddTypeAsClass && e.addClass(n), {
                    remove: function() {
                        e.removeClass(t.inputClass), t.inputAddTypeAsClass && e.removeClass(n), a && e.unwrap()
                    },
                    update: y
                }
            }
        }, {
            match: function(e) {
                return e.is(":radio")
            },
            apply: function(e, n) {
                var o, c, f;
                return o = d(e, n, {
                    divClass: n.radioClass
                }), c = o.div, f = o.span, i(e, c, n), a(e, n, {
                    "click touchend": function() {
                        t.uniform.update(t(':radio[name="' + s(e, "name") + '"]'))
                    }
                }), u(f, e, n), {
                    remove: x(e, n),
                    update: function() {
                        r(c, n), u(f, e, n), l(c, e, n)
                    }
                }
            }
        }, {
            match: function(e) {
                return e.is("select") && !C(e) ? !0 : !1
            },
            apply: function(e, n) {
                var s, o, u, c;
                return n.selectAutoWidth && k(e, function() {
                    c = e.width()
                }), s = d(e, n, {
                    divClass: n.selectClass,
                    spanHtml: (e.find(":selected:first") || e.find("option:first")).html(),
                    spanWrap: "before"
                }), o = s.div, u = s.span, n.selectAutoWidth ? k(e, function() {
                    g(t([u[0], o[0]]), {
                        display: "block"
                    }, function() {
                        var e;
                        e = u.outerWidth() - u.width(), o.width(c), u.width(c - e)
                    })
                }) : o.addClass("fixedWidth"), i(e, o, n), a(e, n, {
                    change: function() {
                        u.html(e.find(":selected").html()), o.removeClass(n.activeClass)
                    },
                    "click touchend": function() {
                        var t = e.find(":selected").html();
                        u.html() !== t && e.trigger("change")
                    },
                    keyup: function() {
                        u.html(e.find(":selected").html())
                    }
                }), b(u, n), {
                    remove: function() {
                        return u.remove(), e.unwrap().unbind(n.eventNamespace), e
                    },
                    update: function() {
                        n.selectAutoWidth ? (t.uniform.restore(e), e.uniform(n)) : (r(o, n), u.html(e.find(":selected").html()), l(o, e, n))
                    }
                }
            }
        }, {
            match: function(e) {
                return e.is("select") && C(e) ? !0 : !1
            },
            apply: function(e, t) {
                var n;
                return e.addClass(t.selectMultiClass), n = f(e, t), i(e, e, t), {
                    remove: function() {
                        e.removeClass(t.selectMultiClass), n && e.unwrap()
                    },
                    update: y
                }
            }
        }, {
            match: function(e) {
                return e.is("textarea")
            },
            apply: function(e, t) {
                var n;
                return e.addClass(t.textareaClass), n = f(e, t), i(e, e, t), {
                    remove: function() {
                        e.removeClass(t.textareaClass), n && e.unwrap()
                    },
                    update: y
                }
            }
        }];
    v() && !h() && (H = !1), t.uniform = {
        defaults: {
            activeClass: "active",
            autoHide: !0,
            buttonClass: "button",
            checkboxClass: "checker",
            checkedClass: "checked",
            disabledClass: "disabled",
            eventNamespace: ".uniform",
            fileButtonClass: "action",
            fileButtonHtml: "Choose File",
            fileClass: "uploader",
            fileDefaultHtml: "No file selected",
            filenameClass: "filename",
            focusClass: "focus",
            hoverClass: "hover",
            idPrefix: "uniform",
            inputAddTypeAsClass: !0,
            inputClass: "uniform-input",
            radioClass: "radio",
            resetDefaultHtml: "Reset",
            resetSelector: !1,
            selectAutoWidth: !0,
            selectClass: "selector",
            selectMultiClass: "uniform-multiselect",
            submitDefaultHtml: "Submit",
            textareaClass: "uniform",
            useID: !0,
            wrapperClass: null
        },
        elements: []
    }, t.fn.uniform = function(n) {
        var s = this;
        return n = t.extend({}, t.uniform.defaults, n), A || (A = !0, p() && (H = !1)), H ? (n.resetSelector && t(n.resetSelector).mouseup(function() {
            e.setTimeout(function() {
                t.uniform.update(s)
            }, 10)
        }), this.each(function() {
            var e, s, a, i = t(this);
            if (i.data("uniformed")) return void t.uniform.update(i);
            for (e = 0; e < W.length; e += 1)
                if (s = W[e], s.match(i, n)) return a = s.apply(i, n), i.data("uniformed", a), void t.uniform.elements.push(i.get(0))
        })) : this
    }, t.uniform.restore = t.fn.uniform.restore = function(e) {
        e === n && (e = t.uniform.elements), t(e).each(function() {
            var e, n, s = t(this);
            n = s.data("uniformed"), n && (n.remove(), e = t.inArray(this, t.uniform.elements), e >= 0 && t.uniform.elements.splice(e, 1), s.removeData("uniformed"))
        })
    }, t.uniform.update = t.fn.uniform.update = function(e) {
        e === n && (e = t.uniform.elements), t(e).each(function() {
            var e, n = t(this);
            e = n.data("uniformed"), e && e.update(n, e.options)
        })
    }
}(this, jQuery), $(window).load(function() {
    $("select.form-control,input[type='checkbox']:not(.comparator), input[type='radio'],input#id_carrier2, input[type='file']").uniform()
}), $(window).resize(function() {
    $.uniform.update("select.form-control, input[type='file']")
});

! function(e, t, n, i) {
    var o = n("html"),
        a = n(e),
        r = n(t),
        s = n.fancybox = function() {
            s.open.apply(this, arguments)
        },
        l = navigator.userAgent.match(/msie/i),
        c = null,
        d = t.createTouch !== i,
        p = function(e) {
            return e && e.hasOwnProperty && e instanceof n
        },
        h = function(e) {
            return e && "string" === n.type(e)
        },
        f = function(e) {
            return h(e) && 0 < e.indexOf("%")
        },
        u = function(e, t) {
            var n = parseInt(e, 10) || 0;
            return t && f(e) && (n *= s.getViewport()[t] / 100), Math.ceil(n)
        },
        g = function(e, t) {
            return u(e, t) + "px"
        };
    n.extend(s, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !d,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeChange: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(e, t) {
            return e && (n.isPlainObject(t) || (t = {}), !1 !== s.close(!0)) ? (n.isArray(e) || (e = p(e) ? n(e).get() : [e]), n.each(e, function(o, a) {
                var r, l, c, d, f, u = {};
                "object" === n.type(a) && (a.nodeType && (a = n(a)), p(a) ? (u = {
                    href: a.data("fancybox-href") || a.attr("href"),
                    title: a.data("fancybox-title") || a.attr("title"),
                    isDom: !0,
                    element: a
                }, n.metadata && n.extend(!0, u, a.metadata())) : u = a), r = t.href || u.href || (h(a) ? a : null), l = t.title !== i ? t.title : u.title || "", d = (c = t.content || u.content) ? "html" : t.type || u.type, !d && u.isDom && (d = a.data("fancybox-type"), d || (d = (d = a.prop("class").match(/fancybox\.(\w+)/)) ? d[1] : null)), h(r) && (d || (s.isImage(r) ? d = "image" : s.isSWF(r) ? d = "swf" : "#" === r.charAt(0) ? d = "inline" : h(a) && (d = "html", c = a)), "ajax" === d && (f = r.split(/\s+/, 2), r = f.shift(), f = f.shift())), c || ("inline" === d ? r ? c = n(h(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : u.isDom && (c = a) : "html" === d ? c = r : !d && !r && u.isDom && (d = "inline", c = a)), n.extend(u, {
                    href: r,
                    type: d,
                    content: c,
                    title: l,
                    selector: f
                }), e[o] = u
            }), s.opts = n.extend(!0, {}, s.defaults, t), t.keys !== i && (s.opts.keys = t.keys ? n.extend({}, s.defaults.keys, t.keys) : !1), s.group = e, s._start(s.opts.index)) : void 0
        },
        cancel: function() {
            var e = s.coming;
            e && !1 !== s.trigger("onCancel") && (s.hideLoading(), s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), s.coming = null, s.current || s._afterZoomOut(e))
        },
        close: function(e) {
            s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isActive && (s.isOpen && !0 !== e ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut())))
        },
        play: function(e) {
            var t = function() {
                    clearTimeout(s.player.timer)
                },
                n = function() {
                    t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
                },
                i = function() {
                    t(), r.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd")
                };
            !0 === e || !s.player.isActive && !1 !== e ? s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, r.bind({
                "onCancel.player beforeClose.player": i,
                "onUpdate.player": n,
                "beforeLoad.player": t
            }), n(), s.trigger("onPlayStart")) : i()
        },
        next: function(e) {
            var t = s.current;
            t && (h(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"))
        },
        prev: function(e) {
            var t = s.current;
            t && (h(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function(e, t, n) {
            var o = s.current;
            o && (e = u(e), s.direction = t || o.direction[e >= o.index ? "next" : "prev"], s.router = n || "jumpto", o.loop && (0 > e && (e = o.group.length + e % o.group.length), e %= o.group.length), o.group[e] !== i && (s.cancel(), s._start(e)))
        },
        reposition: function(e, t) {
            var i, o = s.current,
                a = o ? o.wrap : null;
            a && (i = s._getPosition(t), e && "scroll" === e.type ? (delete i.position, a.stop(!0, !0).animate(i, 200)) : (a.css(i), o.pos = n.extend({}, o.dim, i)))
        },
        update: function(e) {
            var t = e && e.type,
                n = !t || "orientationchange" === t;
            n && (clearTimeout(c), c = null), s.isOpen && !c && (c = setTimeout(function() {
                var i = s.current;
                i && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && i.autoResize) && s._setDimension(), "scroll" === t && i.canShrink || s.reposition(e), s.trigger("onUpdate"), c = null)
            }, n && !d ? 0 : 300))
        },
        toggle: function(e) {
            s.isOpen && (s.current.fitToView = "boolean" === n.type(e) ? e : !s.current.fitToView, d && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update())
        },
        hideLoading: function() {
            r.unbind(".loading"), n("#fancybox-loading").remove()
        },
        showLoading: function() {
            var e, t;
            s.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"), r.bind("keydown.loading", function(e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel())
            }), s.defaults.fixed || (t = s.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function() {
            var t = s.current && s.current.locked || !1,
                n = {
                    x: a.scrollLeft(),
                    y: a.scrollTop()
                };
            return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = d && e.innerWidth ? e.innerWidth : a.width(), n.h = d && e.innerHeight ? e.innerHeight : a.height()), n
        },
        unbindEvents: function() {
            s.wrap && p(s.wrap) && s.wrap.unbind(".fb"), r.unbind(".fb"), a.unbind(".fb")
        },
        bindEvents: function() {
            var e, t = s.current;
            t && (a.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update), (e = t.keys) && r.bind("keydown.fb", function(o) {
                var a = o.which || o.keyCode,
                    r = o.target || o.srcElement;
                return 27 === a && s.coming ? !1 : void!(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || r && (r.type || n(r).is("[contenteditable]")) || !n.each(e, function(e, r) {
                    return 1 < t.group.length && r[a] !== i ? (s[e](r[a]), o.preventDefault(), !1) : -1 < n.inArray(a, r) ? (s[e](), o.preventDefault(), !1) : void 0
                }))
            }), n.fn.mousewheel && t.mouseWheel && s.wrap.bind("mousewheel.fb", function(e, i, o, a) {
                for (var r = n(e.target || null), l = !1; r.length && !l && !r.is(".fancybox-skin") && !r.is(".fancybox-wrap");) l = r[0] && !(r[0].style.overflow && "hidden" === r[0].style.overflow) && (r[0].clientWidth && r[0].scrollWidth > r[0].clientWidth || r[0].clientHeight && r[0].scrollHeight > r[0].clientHeight), r = n(r).parent();
                0 !== i && !l && 1 < s.group.length && !t.canShrink && (a > 0 || o > 0 ? s.prev(a > 0 ? "down" : "left") : (0 > a || 0 > o) && s.next(0 > a ? "up" : "right"), e.preventDefault())
            }))
        },
        trigger: function(e, t) {
            var i, o = t || s.coming || s.current;
            if (o) {
                if (n.isFunction(o[e]) && (i = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), !1 === i) return !1;
                o.helpers && n.each(o.helpers, function(t, i) {
                    i && s.helpers[t] && n.isFunction(s.helpers[t][e]) && s.helpers[t][e](n.extend(!0, {}, s.helpers[t].defaults, i), o)
                }), r.trigger(e)
            }
        },
        isImage: function(e) {
            return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(e) {
            return h(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(e) {
            var t, i, o = {};
            if (e = u(e), t = s.group[e] || null, !t) return !1;
            if (o = n.extend(!0, {}, s.opts, t), t = o.margin, i = o.padding, "number" === n.type(t) && (o.margin = [t, t, t, t]), "number" === n.type(i) && (o.padding = [i, i, i, i]), o.modal && n.extend(!0, o, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: !1
                        }
                    }
                }), o.autoSize && (o.autoWidth = o.autoHeight = !0), "auto" === o.width && (o.autoWidth = !0), "auto" === o.height && (o.autoHeight = !0), o.group = s.group, o.index = e, s.coming = o, !1 === s.trigger("beforeLoad")) s.coming = null;
            else {
                if (i = o.type, t = o.href, !i) return s.coming = null, s.current && s.router && "jumpto" !== s.router ? (s.current.index = e, s[s.router](s.direction)) : !1;
                if (s.isActive = !0, ("image" === i || "swf" === i) && (o.autoHeight = o.autoWidth = !1, o.scrolling = "visible"), "image" === i && (o.aspectRatio = !0), "iframe" === i && d && (o.scrolling = "scroll"), o.wrap = n(o.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + i + " fancybox-tmp " + o.wrapCSS).appendTo(o.parent || "body"), n.extend(o, {
                        skin: n(".fancybox-skin", o.wrap),
                        outer: n(".fancybox-outer", o.wrap),
                        inner: n(".fancybox-inner", o.wrap)
                    }), n.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                        o.skin.css("padding" + t, g(o.padding[e]))
                    }), s.trigger("onReady"), "inline" === i || "html" === i) {
                    if (!o.content || !o.content.length) return s._error("content")
                } else if (!t) return s._error("href");
                "image" === i ? s._loadImage() : "ajax" === i ? s._loadAjax() : "iframe" === i ? s._loadIframe() : s._afterLoad()
            }
        },
        _error: function(e) {
            n.extend(s.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: s.coming.tpl.error
            }), s._afterLoad()
        },
        _loadImage: function() {
            var e = s.imgPreload = new Image;
            e.onload = function() {
                this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad()
            }, e.onerror = function() {
                this.onload = this.onerror = null, s._error("image")
            }, e.src = s.coming.href, !0 !== e.complete && s.showLoading()
        },
        _loadAjax: function() {
            var e = s.coming;
            s.showLoading(), s.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                url: e.href,
                error: function(e, t) {
                    s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading()
                },
                success: function(t, n) {
                    "success" === n && (e.content = t, s._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var e = s.coming,
                t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
            n(e.wrap).bind("onReset", function() {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {}
            }), e.iframe.preload && (s.showLoading(), t.one("load", function() {
                n(this).data("ready", 1), d || n(this).bind("load.fb", s.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad()
            })), e.content = t.appendTo(e.inner), e.iframe.preload || s._afterLoad()
        },
        _preloadImages: function() {
            var e, t, n = s.group,
                i = s.current,
                o = n.length,
                a = i.preload ? Math.min(i.preload, o - 1) : 0;
            for (t = 1; a >= t; t += 1) e = n[(i.index + t) % o], "image" === e.type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function() {
            var e, t, i, o, a, r = s.coming,
                l = s.current;
            if (s.hideLoading(), r && !1 !== s.isActive)
                if (!1 === s.trigger("afterLoad", r, l)) r.wrap.stop(!0).trigger("onReset").remove(), s.coming = null;
                else {
                    switch (l && (s.trigger("beforeChange", l), l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), s.unbindEvents(), e = r.content, t = r.type, i = r.scrolling, n.extend(s, {
                        wrap: r.wrap,
                        skin: r.skin,
                        outer: r.outer,
                        inner: r.inner,
                        current: r,
                        previous: l
                    }), o = r.href, t) {
                        case "inline":
                        case "ajax":
                        case "html":
                            r.selector ? e = n("<div>").html(e).find(r.selector) : p(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", n('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), r.wrap.bind("onReset", function() {
                                n(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                            }));
                            break;
                        case "image":
                            e = r.tpl.image.replace("{href}", o);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + o + '"></param>', a = "", n.each(r.swf, function(t, n) {
                                e += '<param name="' + t + '" value="' + n + '"></param>', a += " " + t + '="' + n + '"'
                            }), e += '<embed src="' + o + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
                    }(!p(e) || !e.parent().is(r.inner)) && r.inner.append(e), s.trigger("beforeShow"), r.inner.css("overflow", "yes" === i ? "scroll" : "no" === i ? "hidden" : i), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? l.prevMethod && s.transitions[l.prevMethod]() : n(".fancybox-wrap").not(r.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? r.nextMethod : r.openMethod](), s._preloadImages()
                }
        },
        _setDimension: function() {
            var e, t, i, o, a, r, l, c, d, p = s.getViewport(),
                h = 0,
                m = !1,
                y = !1,
                m = s.wrap,
                x = s.skin,
                v = s.inner,
                w = s.current,
                y = w.width,
                b = w.height,
                k = w.minWidth,
                C = w.minHeight,
                O = w.maxWidth,
                W = w.maxHeight,
                _ = w.scrolling,
                S = w.scrollOutside ? w.scrollbarWidth : 0,
                T = w.margin,
                L = u(T[1] + T[3]),
                E = u(T[0] + T[2]);
            if (m.add(x).add(v).width("auto").height("auto").removeClass("fancybox-tmp"), T = u(x.outerWidth(!0) - x.width()), e = u(x.outerHeight(!0) - x.height()), t = L + T, i = E + e, o = f(y) ? (p.w - t) * u(y) / 100 : y, a = f(b) ? (p.h - i) * u(b) / 100 : b, "iframe" === w.type) {
                if (d = w.content, w.autoHeight && 1 === d.data("ready")) try {
                    d[0].contentWindow.document.location && (v.width(o).height(9999), r = d.contents().find("body"), S && r.css("overflow-x", "hidden"), a = r.outerHeight(!0))
                } catch (R) {}
            } else(w.autoWidth || w.autoHeight) && (v.addClass("fancybox-tmp"), w.autoWidth || v.width(o), w.autoHeight || v.height(a), w.autoWidth && (o = v.width()), w.autoHeight && (a = v.height()), v.removeClass("fancybox-tmp"));
            if (y = u(o), b = u(a), c = o / a, k = u(f(k) ? u(k, "w") - t : k), O = u(f(O) ? u(O, "w") - t : O), C = u(f(C) ? u(C, "h") - i : C), W = u(f(W) ? u(W, "h") - i : W), r = O, l = W, w.fitToView && (O = Math.min(p.w - t, O), W = Math.min(p.h - i, W)), t = p.w - L, E = p.h - E, w.aspectRatio ? (y > O && (y = O, b = u(y / c)), b > W && (b = W, y = u(b * c)), k > y && (y = k, b = u(y / c)), C > b && (b = C, y = u(b * c))) : (y = Math.max(k, Math.min(y, O)), w.autoHeight && "iframe" !== w.type && (v.width(y), b = v.height()), b = Math.max(C, Math.min(b, W))), w.fitToView)
                if (v.width(y).height(b), m.width(y + T), p = m.width(), L = m.height(), w.aspectRatio)
                    for (;
                        (p > t || L > E) && y > k && b > C && !(19 < h++);) b = Math.max(C, Math.min(W, b - 10)), y = u(b * c), k > y && (y = k, b = u(y / c)), y > O && (y = O, b = u(y / c)), v.width(y).height(b), m.width(y + T), p = m.width(), L = m.height();
                else y = Math.max(k, Math.min(y, y - (p - t))), b = Math.max(C, Math.min(b, b - (L - E)));
            S && "auto" === _ && a > b && t > y + T + S && (y += S), v.width(y).height(b), m.width(y + T), p = m.width(), L = m.height(), m = (p > t || L > E) && y > k && b > C, y = w.aspectRatio ? r > y && l > b && o > y && a > b : (r > y || l > b) && (o > y || a > b), n.extend(w, {
                dim: {
                    width: g(p),
                    height: g(L)
                },
                origWidth: o,
                origHeight: a,
                canShrink: m,
                canExpand: y,
                wPadding: T,
                hPadding: e,
                wrapSpace: L - x.outerHeight(!0),
                skinSpace: x.height() - b
            }), !d && w.autoHeight && b > C && W > b && !y && v.height("auto")
        },
        _getPosition: function(e) {
            var t = s.current,
                n = s.getViewport(),
                i = t.margin,
                o = s.wrap.width() + i[1] + i[3],
                a = s.wrap.height() + i[0] + i[2],
                i = {
                    position: "absolute",
                    top: i[0],
                    left: i[3]
                };
            return t.autoCenter && t.fixed && !e && a <= n.h && o <= n.w ? i.position = "fixed" : t.locked || (i.top += n.y, i.left += n.x), i.top = g(Math.max(i.top, i.top + (n.h - a) * t.topRatio)), i.left = g(Math.max(i.left, i.left + (n.w - o) * t.leftRatio)), i
        },
        _afterZoomIn: function() {
            var e = s.current;
            e && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible").addClass("fancybox-opened"), s.update(), (e.closeClick || e.nextClick && 1 < s.group.length) && s.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                !n(t.target).is("a") && !n(t.target).parent().is("a") && (t.preventDefault(), s[e.closeClick ? "close" : "next"]())
            }), e.closeBtn && n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb", function(e) {
                e.preventDefault(), s.close()
            }), e.arrows && 1 < s.group.length && ((e.loop || 0 < e.index) && n(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && n(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play()) : s.play(!1))
        },
        _afterZoomOut: function(e) {
            e = e || s.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(s, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), s.trigger("afterClose", e)
        }
    }), s.transitions = {
        getOrigPosition: function() {
            var e = s.current,
                t = e.element,
                n = e.orig,
                i = {},
                o = 50,
                a = 50,
                r = e.hPadding,
                l = e.wPadding,
                c = s.getViewport();
            return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), p(n) ? (i = n.offset(), n.is("img") && (o = n.outerWidth(), a = n.outerHeight())) : (i.top = c.y + (c.h - a) * e.topRatio, i.left = c.x + (c.w - o) * e.leftRatio), ("fixed" === s.wrap.css("position") || e.locked) && (i.top -= c.y, i.left -= c.x), i = {
                top: g(i.top - r * e.topRatio),
                left: g(i.left - l * e.leftRatio),
                width: g(o + l),
                height: g(a + r)
            }
        },
        step: function(e, t) {
            var n, i, o = t.prop;
            i = s.current;
            var a = i.wrapSpace,
                r = i.skinSpace;
            ("width" === o || "height" === o) && (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), s.isClosing && (n = 1 - n), i = "width" === o ? i.wPadding : i.hPadding, i = e - i, s.skin[o](u("width" === o ? i : i - a * n)), s.inner[o](u("width" === o ? i : i - a * n - r * n)))
        },
        zoomIn: function() {
            var e = s.current,
                t = e.pos,
                i = e.openEffect,
                o = "elastic" === i,
                a = n.extend({
                    opacity: 1
                }, t);
            delete a.position, o ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1), s.wrap.css(t).animate(a, {
                duration: "none" === i ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: o ? this.step : null,
                complete: s._afterZoomIn
            })
        },
        zoomOut: function() {
            var e = s.current,
                t = e.closeEffect,
                n = "elastic" === t,
                i = {
                    opacity: .1
                };
            n && (i = this.getOrigPosition(), e.closeOpacity && (i.opacity = .1)), s.wrap.animate(i, {
                duration: "none" === t ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: n ? this.step : null,
                complete: s._afterZoomOut
            })
        },
        changeIn: function() {
            var e, t = s.current,
                n = t.nextEffect,
                i = t.pos,
                o = {
                    opacity: 1
                },
                a = s.direction;
            i.opacity = .1, "elastic" === n && (e = "down" === a || "up" === a ? "top" : "left", "down" === a || "right" === a ? (i[e] = g(u(i[e]) - 200), o[e] = "+=200px") : (i[e] = g(u(i[e]) + 200), o[e] = "-=200px")), "none" === n ? s._afterZoomIn() : s.wrap.css(i).animate(o, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: s._afterZoomIn
            })
        },
        changeOut: function() {
            var e = s.previous,
                t = e.prevEffect,
                i = {
                    opacity: .1
                },
                o = s.direction;
            "elastic" === t && (i["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=200px"), e.wrap.animate(i, {
                duration: "none" === t ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function() {
                    n(this).trigger("onReset").remove()
                }
            })
        }
    }, s.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !d,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: n("html"),
        create: function(e) {
            e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(s.coming ? s.coming.parent : e.parent), this.fixed = !1, e.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(e) {
            var t = this;
            e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (a.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                return n(e.target).hasClass("fancybox-overlay") ? (s.isActive ? s.close() : t.close(), !1) : void 0
            }), this.overlay.css(e.css).show()
        },
        close: function() {
            var e, t;
            a.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), e = a.scrollTop(), t = a.scrollLeft(), this.el.removeClass("fancybox-lock"), a.scrollTop(e).scrollLeft(t)), n(".fancybox-overlay").remove().hide(), n.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var e, n = "100%";
            this.overlay.width(n).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), r.width() > e && (n = r.width())) : r.width() > a.width() && (n = r.width()), this.overlay.width(n).height(r.height())
        },
        onReady: function(e, t) {
            var i = this.overlay;
            n(".fancybox-overlay").stop(!0, !0), i || this.create(e), e.locked && this.fixed && t.fixed && (i || (this.margin = r.height() > a.height() ? n("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(e, t) {
            var i, o;
            t.locked && (!1 !== this.margin && (n("*").filter(function() {
                return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), i = a.scrollTop(), o = a.scrollLeft(), this.el.addClass("fancybox-lock"), a.scrollTop(i).scrollLeft(o)), this.open(e)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(e) {
            this.overlay && !s.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
        }
    }, s.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(e) {
            var t = s.current,
                i = t.title,
                o = e.type;
            if (n.isFunction(i) && (i = i.call(t.element, t)), h(i) && "" !== n.trim(i)) {
                switch (t = n('<div class="fancybox-title fancybox-title-' + o + '-wrap">' + i + "</div>"), o) {
                    case "inside":
                        o = s.skin;
                        break;
                    case "outside":
                        o = s.wrap;
                        break;
                    case "over":
                        o = s.inner;
                        break;
                    default:
                        o = s.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(u(t.css("margin-bottom")))
                }
                t["top" === e.position ? "prependTo" : "appendTo"](o)
            }
        }
    }, n.fn.fancybox = function(e) {
        var t, i = n(this),
            o = this.selector || "",
            a = function(a) {
                var r, l, c = n(this).blur(),
                    d = t;
                !(a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || c.is(".fancybox-wrap") || (r = e.groupAttr || "data-fancybox-group", l = c.attr(r), l || (r = "rel", l = c.get(0)[r]), l && "" !== l && "nofollow" !== l && (c = o.length ? n(o) : i, c = c.filter("[" + r + '="' + l + '"]'), d = c.index(this)), e.index = d, !1 === s.open(c, e) || !a.preventDefault()))
            };
        return e = e || {}, t = e.index || 0, o && !1 !== e.live ? r.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : i.unbind("click.fb-start").bind("click.fb-start", a), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, r.ready(function() {
        var t, a;
        if (n.scrollbarWidth === i && (n.scrollbarWidth = function() {
                var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    t = e.children(),
                    t = t.innerWidth() - t.height(99).innerWidth();
                return e.remove(), t
            }), n.support.fixedPosition === i) {
            t = n.support, a = n('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var r = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
            a.remove(), t.fixedPosition = r
        }
        n.extend(s.defaults, {
            scrollbarWidth: n.scrollbarWidth(),
            fixed: n.support.fixedPosition,
            parent: n("body")
        }), t = n(e).width(), o.addClass("fancybox-lock-test"), a = n(e).width(), o.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (a - t) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery);

function openBranch(e, l) {
    e.addClass("OPEN").removeClass("CLOSE"), l ? e.parent().find("ul:first").show() : e.parent().find("ul:first").slideDown()
}

function closeBranch(e, l) {
    e.addClass("CLOSE").removeClass("OPEN"), l ? e.parent().find("ul:first").hide() : e.parent().find("ul:first").slideUp()
}

function toggleBranch(e, l) {
    e.hasClass("OPEN") ? closeBranch(e, l) : openBranch(e, l)
}
$(document).ready(function() {
    $("ul.tree.dhtml").hide(), $("ul.tree.dhtml").hasClass("dynamized") || ($("ul.tree.dhtml ul").prev().before("<span class='grower OPEN'> </span>"), $("ul.tree.dhtml ul li:last-child, ul.tree.dhtml li:last-child").addClass("last"), $("ul.tree.dhtml span.grower.OPEN").addClass("CLOSE").removeClass("OPEN").parent().find("ul:first").hide(), $("ul.tree.dhtml").show(), $("ul.tree.dhtml .selected").parents().each(function() {
        $(this).is("ul") && toggleBranch($(this).prev().prev(), !0)
    }), toggleBranch($("ul.tree.dhtml .selected").prev(), !0), $("ul.tree.dhtml span.grower").click(function() {
        toggleBranch($(this))
    }), $("ul.tree.dhtml").addClass("dynamized"), $("ul.tree.dhtml").removeClass("dhtml"))
});

! function(t, i) {
    var s = "responsiver",
        e = (i.document, {
            interval: 800,
            speed: 800,
            fx: "slide",
            start: 0,
            itemExpr: ".item",
            reverse: !1,
            step: 1,
            pause: "hover",
            control: {
                next: null,
                prev: null,
                pager: null,
                pause: null
            },
            selector: {
                item: ".item",
                container: ".vpi-wrap"
            }
        }),
        n = function(n, o) {
            if (this.element = t(n), this.options = o, this._defaults = e, this._name = s, this.element.removeClass("not-js").addClass("js-loaded"), this.container = t(this.options.selector.container, this.element), this.viewport = this.container.parent(), this.items = t(this.options.selector.item, this.container), this.sliding = !1, this.current = this.options.start || 0, this.slidingTo = this.current, this.count = this.items.length, (this.options.control.prev || this.options.control.next || this.options.control.pager || this.options.control.pause) && (this.options.control.prev && t(this.options.control.prev).click(t.proxy(this.prev, this)), this.options.control.next && t(this.options.control.next).click(t.proxy(this.next, this)), this.options.control.pause && t(this.options.control.pause).click(function() {})), this.options.preload) {
                var r = t("img", this.items),
                    h = [],
                    l = 0,
                    c = this;
                if (r.length) {
                    for (var a = 0; a < r.length; a++) {
                        var u = t(r[a]).attr("data-src") || t(r[a]).attr("src"); - 1 < t.inArray(u, h) || h.push(u)
                    }
                    t.each(h, function() {
                        t("<img>").bind("error load", function() {
                            l++, l == h.length && c.init()
                        }).attr("src", this + "?" + (time = (new Date).getTime()))
                    })
                } else this.init()
            } else this.init();
            t(this.viewport).mouseenter(t.proxy(function() {
                "hover" == this.options.pause && this.pause()
            }, this)).mouseleave(t.proxy(function() {
                "hover" == this.options.pause && this.cycle()
            }, this)), t(i).bind("resize.responsiver", this.resize.bind(this))
        };
    n.prototype = {
        init: function() {
            this._setViewport(), this.to(this.slidingTo, 0)
        },
        next: function() {
            return this.sliding ? void 0 : this.slide(this._getNext())
        },
        prev: function() {
            return this.sliding ? void 0 : this.slide(this._getPrevious())
        },
        pause: function(t) {
            return t || (this.paused = !0), clearInterval(this.interval), this.interval = null, this
        },
        pauseToggle: function() {},
        slide: function(i, s) {
            if (i.length) {
                var e = this.interval,
                    n = t.Event("slide"),
                    o = this;
                if (this.sliding = !0, e && this.pause(), !n.isDefaultPrevented()) {
                    var r = "number" == typeof s ? s : this.options.speed;
                    if ("slide" == this.options.fx) t(this.container).addClass("tt-effect-active"), t(".item-wrap").addClass("tt-old"), this.container.animate({
                        left: -i.position().left
                    }, {
                        duration: r,
                        complete: function() {
                            o.slidingTo >= o.count && (o.slidingTo %= o.count, o.container.css({
                                left: -o.items.eq(o.slidingTo).position().left
                            })), o.current = o.slidingTo, o.sliding = !1, t(o.container).removeClass("tt-effect-active"), t(".item-wrap").removeClass("tt-old"), o.update()
                        }
                    });
                    else if ("fade" == this.options.fx) {
                        var h = this.container.clone().appendTo(this.viewport);
                        t(this.container).addClass("tt-effect-active"), t(".item-wrap").addClass("tt-old"), this.container.css({
                            opacity: 0,
                            left: -i.position().left,
                            "z-index": 2
                        }).animate({
                            opacity: 1
                        }, {
                            duration: r,
                            complete: function() {
                                (o.slidingTo >= o.count || o.slidingTo < 0) && (o.slidingTo += o.count, o.slidingTo %= o.count, o.container.css({
                                    left: -o.items.eq(o.slidingTo).position().left
                                })), o.current = o.slidingTo, o.sliding = !1, t(o.container).removeClass("tt-effect-active"), t(".item-wrap").removeClass("tt-old"), o.update()
                            }
                        }), t(h).css({
                            "z-index": 1
                        }).animate({
                            opacity: 0
                        }, {
                            duration: this.options.speed,
                            complete: function() {
                                t(this).remove()
                            }
                        })
                    }
                    return e && this.cycle(), this
                }
            }
        },
        to: function(t, i) {
            return this.slide(this._getNext(t), i)
        },
        cycle: function(i) {
            return i || (this.paused = !1), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        },
        update: function() {
            this.options, this._getColumns();
            this.current < 0 ? this.current += this.count : this.current >= this.count && (this.current %= this.count), !this.options.circular, !this.options.circular && this.current <= 0 ? t(this.options.prev).addClass("disabled") : t(this.options.prev).removeClass("disabled"), !this.options.circular && this.current + this._getColumns() >= this.count ? t(this.options.next).addClass("disabled") : t(this.options.next).removeClass("disabled")
        },
        resize: function() {
            this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                this._setViewport(), this.to(this.current, 0)
            }.bind(this), 10)
        },
        _getColumns: function() {
            if ("function" == typeof this.options.getColumns) this.column = this.options.getColumns.apply(this.element, [this.element]);
            else if ("number" == typeof this.options.getColumns) this.column = this.options.getColumns;
            else {
                var i = parseInt(this.options.getColumns);
                this.column = i ? i : 1
            }
            if (this.options.circular === !0) {
                var s = t(".clone", this.container).length,
                    e = this.column + this.getStep() - 1;
                if (e > s)
                    for (var n = s; e > n && !(n > this.items.length - 1); n++) this.items.eq(n).clone().appendTo(this.container).addClass("clone")
            }
            return this.column
        },
        _setViewport: function() {
            var i = 0;
            t.each(this.items, function() {
                i < t(this).height() && (i = t(this).height())
            }), this.viewport.stop(!0, !0).animate({
                height: i
            }, {
                duration: 400
            })
        },
        _getNext: function(i) {
            if (this.slidingTo = "undefined" == typeof i ? this.current + (this.isForward() ? this.getStep() : -this.getStep()) : i, this.slidingTo < 0)
                if (this.options.circular) {
                    var s = t(".clone:eq(" + this.current + ")", this.container);
                    s.length && this.container.css({
                        left: -s.position().left
                    })
                } else this.slidingTo += this.count;
            else if (this.slidingTo >= this.count)
                if (this.options.circular) {
                    if (this.isForward()) return t(".clone:eq(" + this.slidingTo % this.count + ")", this.container)
                } else this.slidingTo %= this.count;
            return this.items.eq(this.slidingTo)
        },
        _getPrevious: function(t) {
            var i = this.options.reverse || !1;
            this.options.reverse = !i;
            var s = this._getNext(t);
            return this.options.reverse = i, s
        },
        isForward: function() {
            return this.options.reverse ? !1 : !0
        },
        getStep: function() {
            return this.options.step
        }
    }, t.fn[s] = function(i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("plugin_" + s),
                h = "object" == typeof i ? t.extend({}, e, i) : e;
            r || o.data("plugin_" + s, r = new n(this, h)), "number" == typeof i ? r.to(i) : "string" == typeof i ? r[i]() : h.interval && r.cycle()
        })
    }, t.fn[s].Constructor = n
}(jQuery, window);
! function(t) {
    function i(i) {
        t(this).touchSwipeLeft(i).touchSwipeRight(i)
    }

    function e(i) {
        var e = t(this);
        e.data("swipeLeft") || e.data("swipeLeft", i), e.data("swipeRight") || a(e)
    }

    function n(i) {
        var e = t(this);
        e.data("swipeRight") || e.data("swipeRight", i), e.data("swipeLeft") || a(e)
    }

    function a(t) {
        t.unbindSwipe(!0).bind(h, o)
    }

    function o(i) {
        function e() {
            g.unbind(p), f && h && d > h - f && Math.abs(v - a) > u && Math.abs(b - o) < c && (v > a ? g.data("swipeLeft") && g.data("swipeLeft")("left") : g.data("swipeRight") && g.data("swipeRight")("right")), f = h = null
        }

        function n(t) {
            f && (r = t.originalEvent.touches ? t.originalEvent.touches[0] : t, h = (new Date).getTime(), a = r.pageX, o = r.pageY, Math.abs(v - a) > w && t.preventDefault())
        }
        var a, o, h, f = (new Date).getTime(),
            r = i.originalEvent.touches ? i.originalEvent.touches[0] : i,
            g = t(this).bind(p, n).one(s, e),
            v = r.pageX,
            b = r.pageY;
        g.data("stopPropagation") && i.stopImmediatePropagation()
    }
    var s, p, h, u = 30,
        c = 75,
        w = 10,
        d = 1e3;
    "ontouchend" in document ? (s = "touchend.cj_swp", p = "touchmove.cj_swp", h = "touchstart.cj_swp") : (s = "mouseup.cj_swp", p = "mousemove.cj_swp", h = "mousedown.cj_swp"), t.fn.touchSwipe = function(t, e) {
        return e && this.data("stopPropagation", !0), t ? this.each(i, [t]) : void 0
    }, t.fn.touchSwipeLeft = function(t, i) {
        return i && this.data("stopPropagation", !0), t ? this.each(e, [t]) : void 0
    }, t.fn.touchSwipeRight = function(t, i) {
        return i && this.data("stopPropagation", !0), t ? this.each(n, [t]) : void 0
    }, t.fn.unbindSwipeLeft = function() {
        this.removeData("swipeLeft"), this.data("swipeRight") || this.unbindSwipe(!0)
    }, t.fn.unbindSwipeRight = function() {
        this.removeData("swipeRight"), this.data("swipeLeft") || this.unbindSwipe(!0)
    }, t.fn.unbindSwipe = function(t) {
        return t || this.removeData("swipeLeft swipeRight stopPropagation"), this.unbind(h + " " + p + " " + s)
    }
}(jQuery);
! function(e) {
    e.fn.extend({
        autocomplete: function(t, a) {
            var n = "string" == typeof t;
            return a = e.extend({}, e.Autocompleter.defaults, {
                url: n ? t : null,
                data: n ? null : t,
                delay: n ? e.Autocompleter.defaults.delay : 10,
                max: a && !a.scroll ? 10 : 150
            }, a), a.highlight = a.highlight || function(e) {
                return e
            }, a.formatMatch = a.formatMatch || a.formatItem, this.each(function() {
                new e.Autocompleter(this, a)
            })
        },
        result: function(e) {
            return this.bind("result", e)
        },
        search: function(e) {
            return this.trigger("search", [e])
        },
        flushCache: function() {
            return this.trigger("flushCache")
        },
        setOptions: function(e) {
            return this.trigger("setOptions", [e])
        },
        unautocomplete: function() {
            return this.trigger("unautocomplete")
        }
    }), e.Autocompleter = function(t, a) {
        function n() {
            var e = S.selected();
            if (!e) return !1;
            var t = e.result;
            if (b = t, a.multiple) {
                var n = i(C.val());
                n.length > 1 && (t = n.slice(0, n.length - 1).join(a.multipleSeparator) + a.multipleSeparator + t), t += a.multipleSeparator
            }
            return C.val(t), u(), C.trigger("result", [e.data, e.value]), !0
        }

        function r(e, t) {
            if (p == v.DEL) return void S.hide();
            var n = C.val();
            (t || n != b) && (b = n, n = o(n), n.length >= a.minChars ? (C.addClass(a.loadingClass), a.matchCase || (n = n.toLowerCase()), f(n, c, u)) : (m(), S.hide()))
        }

        function i(t) {
            if (!t) return [""];
            var n = t.split(a.multipleSeparator),
                r = [];
            return e.each(n, function(t, a) {
                e.trim(a) && (r[t] = e.trim(a))
            }), r
        }

        function o(e) {
            if (!a.multiple) return e;
            var t = i(e);
            return t[t.length - 1]
        }

        function l(n, r) {
            a.autoFill && o(C.val()).toLowerCase() == n.toLowerCase() && p != v.BACKSPACE && (C.val(C.val() + r.substring(o(b).length)), e.Autocompleter.Selection(t, b.length, b.length + r.length))
        }

        function s() {
            clearTimeout(d), d = setTimeout(u, 200)
        }

        function u() {
            var n = S.visible();
            S.hide(), clearTimeout(d), m(), a.mustMatch && C.search(function(e) {
                if (!e)
                    if (a.multiple) {
                        var t = i(C.val()).slice(0, -1);
                        C.val(t.join(a.multipleSeparator) + (t.length ? a.multipleSeparator : ""))
                    } else C.val("")
            }), n && e.Autocompleter.Selection(t, t.value.length, t.value.length)
        }

        function c(e, t) {
            t && t.length && A ? (m(), S.display(t, e), l(e, t[0].value), S.show()) : u()
        }

        function f(n, r, i) {
            a.matchCase || (n = n.toLowerCase());
            var l = w.load(n);
            if (l && l.length) r(n, l);
            else if ("string" == typeof a.url && a.url.length > 0) {
                var s = {
                    timestamp: +new Date
                };
                e.each(a.extraParams, function(e, t) {
                    s[e] = "function" == typeof t ? t() : t
                }), e.ajax({
                    mode: "abort",
                    port: "autocomplete" + t.name,
                    dataType: a.dataType,
                    url: a.url,
                    data: e.extend({
                        q: o(n),
                        limit: a.max
                    }, s),
                    success: function(e) {
                        var t = a.parse && a.parse(e) || h(e);
                        w.add(n, t), r(n, t)
                    }
                })
            } else S.emptyList(), i(n)
        }

        function h(t) {
            for (var n = [], r = t.split("\n"), i = 0; i < r.length; i++) {
                var o = e.trim(r[i]);
                o && (o = o.split("|"), n[n.length] = {
                    data: o,
                    value: o[0],
                    result: a.formatResult && a.formatResult(o, o[0]) || o[0]
                })
            }
            return n
        }

        function m() {
            C.removeClass(a.loadingClass)
        }
        var d, p, g, v = {
                UP: 38,
                DOWN: 40,
                DEL: 46,
                TAB: 9,
                RETURN: 13,
                ESC: 27,
                COMMA: 188,
                PAGEUP: 33,
                PAGEDOWN: 34,
                BACKSPACE: 8
            },
            C = e(t).attr("autocomplete", "off").addClass(a.inputClass),
            b = "",
            w = e.Autocompleter.Cache(a),
            A = 0,
            T = {
                mouseDownOnSelect: !1
            },
            S = e.Autocompleter.Select(a, t, n, T);
        e.browser.opera && e(t.form).bind("submit.autocomplete", function() {
            return g ? (g = !1, !1) : void 0
        }), C.bind((e.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(t) {
            switch (p = t.keyCode, t.keyCode) {
                case v.UP:
                    t.preventDefault(), S.visible() ? S.prev() : r(0, !0);
                    break;
                case v.DOWN:
                    t.preventDefault(), S.visible() ? S.next() : r(0, !0);
                    break;
                case v.PAGEUP:
                    t.preventDefault(), S.visible() ? S.pageUp() : r(0, !0);
                    break;
                case v.PAGEDOWN:
                    t.preventDefault(), S.visible() ? S.pageDown() : r(0, !0);
                    break;
                case a.multiple && "," == e.trim(a.multipleSeparator) && v.COMMA:
                case v.TAB:
                case v.RETURN:
                    if (n()) return t.preventDefault(), g = !0, !1;
                    break;
                case v.ESC:
                    S.hide();
                    break;
                default:
                    clearTimeout(d), d = setTimeout(r, a.delay)
            }
        }).focus(function() {
            A++
        }).blur(function() {
            A = 0, T.mouseDownOnSelect || s()
        }).click(function() {
            A++ > 1 && !S.visible() && r(0, !0)
        }).bind("search", function() {
            function t(e, t) {
                var n;
                if (t && t.length)
                    for (var r = 0; r < t.length; r++)
                        if (t[r].result.toLowerCase() == e.toLowerCase()) {
                            n = t[r];
                            break
                        }
                        "function" == typeof a ? a(n) : C.trigger("result", n && [n.data, n.value])
            }
            var a = arguments.length > 1 ? arguments[1] : null;
            e.each(i(C.val()), function(e, a) {
                f(a, t, t)
            })
        }).bind("flushCache", function() {
            w.flush()
        }).bind("setOptions", function() {
            e.extend(a, arguments[1]), "data" in arguments[1] && w.populate()
        }).bind("unautocomplete", function() {
            S.unbind(), C.unbind(), e(t.form).unbind(".autocomplete")
        })
    }, e.Autocompleter.defaults = {
        inputClass: "ac_input",
        resultsClass: "ac_results",
        loadingClass: "ac_loading",
        minChars: 1,
        delay: 400,
        matchCase: !1,
        matchSubset: !0,
        matchContains: !1,
        cacheLength: 10,
        max: 100,
        mustMatch: !1,
        extraParams: {},
        selectFirst: !0,
        formatItem: function(e) {
            return e[0]
        },
        formatMatch: null,
        autoFill: !1,
        width: 0,
        multiple: !1,
        multipleSeparator: ", ",
        highlight: function(e, t) {
            return e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + t.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>")
        },
        scroll: !0,
        scrollHeight: 180
    }, e.Autocompleter.Cache = function(t) {
        function a(e, a) {
            t.matchCase || (e = e.toLowerCase());
            var n = e.indexOf(a);
            return -1 == n ? !1 : 0 == n || t.matchContains
        }

        function n(e, a) {
            l > t.cacheLength && i(), o[e] || l++, o[e] = a
        }

        function r() {
            if (!t.data) return !1;
            var a = {},
                r = 0;
            t.url || (t.cacheLength = 1), a[""] = [];
            for (var i = 0, o = t.data.length; o > i; i++) {
                var l = t.data[i];
                l = "string" == typeof l ? [l] : l;
                var s = t.formatMatch(l, i + 1, t.data.length);
                if (s !== !1) {
                    var u = s.charAt(0).toLowerCase();
                    a[u] || (a[u] = []);
                    var c = {
                        value: s,
                        data: l,
                        result: t.formatResult && t.formatResult(l) || s
                    };
                    a[u].push(c), r++ < t.max && a[""].push(c)
                }
            }
            e.each(a, function(e, a) {
                t.cacheLength++, n(e, a)
            })
        }

        function i() {
            o = {}, l = 0
        }
        var o = {},
            l = 0;
        return setTimeout(r, 25), {
            flush: i,
            add: n,
            populate: r,
            load: function(n) {
                if (!t.cacheLength || !l) return null;
                if (!t.url && t.matchContains) {
                    var r = [];
                    for (var i in o)
                        if (i.length > 0) {
                            var s = o[i];
                            e.each(s, function(e, t) {
                                a(t.value, n) && r.push(t)
                            })
                        }
                    return r
                }
                if (o[n]) return o[n];
                if (t.matchSubset)
                    for (var u = n.length - 1; u >= t.minChars; u--) {
                        var s = o[n.substr(0, u)];
                        if (s) {
                            var r = [];
                            return e.each(s, function(e, t) {
                                a(t.value, n) && (r[r.length] = t)
                            }), r
                        }
                    }
                return null
            }
        }
    }, e.Autocompleter.Select = function(t, a, n, r) {
        function i() {
            C && (m = e("<div/>").hide().addClass(t.resultsClass).css("position", "absolute").appendTo(document.body), d = e("<ul/>").appendTo(m).mouseover(function(t) {
                o(t).nodeName && "LI" == o(t).nodeName.toUpperCase() && (g = e("li", d).removeClass(p.ACTIVE).index(o(t)), e(o(t)).addClass(p.ACTIVE))
            }).click(function(t) {
                return e(o(t)).addClass(p.ACTIVE), n(), a.focus(), !1
            }).mousedown(function() {
                r.mouseDownOnSelect = !0
            }).mouseup(function() {
                r.mouseDownOnSelect = !1
            }), t.width > 0 && m.css("width", t.width), C = !1)
        }

        function o(e) {
            for (var t = e.target; t && "LI" != t.tagName;) t = t.parentNode;
            return t ? t : []
        }

        function l(e) {
            f.slice(g, g + 1).removeClass(p.ACTIVE), s(e);
            var a = f.slice(g, g + 1).addClass(p.ACTIVE);
            if (t.scroll) {
                var n = 0;
                f.slice(0, g).each(function() {
                    n += this.offsetHeight
                }), n + a[0].offsetHeight - d.scrollTop() > d[0].clientHeight ? d.scrollTop(n + a[0].offsetHeight - d.innerHeight()) : n < d.scrollTop() && d.scrollTop(n)
            }
        }

        function s(e) {
            g += e, 0 > g ? g = f.size() - 1 : g >= f.size() && (g = 0)
        }

        function u(e) {
            return t.max && t.max < e ? t.max : e
        }

        function c() {
            d.empty();
            for (var a = u(h.length), n = 0; a > n; n++)
                if (h[n]) {
                    var r = t.formatItem(h[n].data, n + 1, a, h[n].value, v);
                    if (r !== !1) {
                        var i = e("<li/>").html(t.highlight(r, v)).addClass(n % 2 == 0 ? "ac_even" : "ac_odd").appendTo(d)[0];
                        e.data(i, "ac_data", h[n])
                    }
                }
            f = d.find("li"), t.selectFirst && (f.slice(0, 1).addClass(p.ACTIVE), g = 0), e.fn.bgiframe && d.bgiframe()
        }
        var f, h, m, d, p = {
                ACTIVE: "ac_over"
            },
            g = -1,
            v = "",
            C = !0;
        return {
            display: function(e, t) {
                i(), h = e, v = t, c()
            },
            next: function() {
                l(1)
            },
            prev: function() {
                l(-1)
            },
            pageUp: function() {
                l(0 != g && 0 > g - 8 ? -g : -8)
            },
            pageDown: function() {
                l(g != f.size() - 1 && g + 8 > f.size() ? f.size() - 1 - g : 8)
            },
            hide: function() {
                m && m.hide(), f && f.removeClass(p.ACTIVE), g = -1
            },
            visible: function() {
                return m && m.is(":visible")
            },
            current: function() {
                return this.visible() && (f.filter("." + p.ACTIVE)[0] || t.selectFirst && f[0])
            },
            show: function() {
                var n = e(a).offset();
                if (m.css({
                        width: "string" == typeof t.width || t.width > 0 ? t.width : e(a).width() + parseInt(e(a).css("padding-left")) + parseInt(e(a).css("padding-right")) + parseInt(e(a).css("margin-left")) + parseInt(e(a).css("margin-right")),
                        top: n.top + a.offsetHeight,
                        left: n.left
                    }).show(), t.scroll && (d.css({
                        maxHeight: t.scrollHeight,
                        overflow: "auto"
                    }), e.browser.msie && "undefined" == typeof document.body.style.maxHeight)) {
                    var r = 0;
                    f.each(function() {
                        r += this.offsetHeight
                    });
                    var i = r > t.scrollHeight;
                    d.css("height", i ? t.scrollHeight : r), i || f.width(d.width() - parseInt(f.css("padding-left")) - parseInt(f.css("padding-right")))
                }
            },
            selected: function() {
                var t = f && f.filter("." + p.ACTIVE).removeClass(p.ACTIVE);
                return t && t.length && e.data(t[0], "ac_data")
            },
            emptyList: function() {
                d && d.empty()
            },
            unbind: function() {
                m && m.remove()
            }
        }
    }, e.Autocompleter.Selection = function(e, t, a) {
        if (e.createTextRange) {
            var n = e.createTextRange();
            n.collapse(!0), n.moveStart("character", t), n.moveEnd("character", a), n.select()
        } else e.setSelectionRange ? e.setSelectionRange(t, a) : e.selectionStart && (e.selectionStart = t, e.selectionEnd = a);
        e.focus()
    }
}(jQuery);
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(t) {
        return e.isFunction(t) || "object" == typeof t ? t : {
            top: t,
            left: t
        }
    }
    var n = e.scrollTo = function(t, n, o) {
        return e(window).scrollTo(t, n, o)
    };
    return n.defaults = {
        axis: "xy",
        duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1,
        limit: !0
    }, n.window = function() {
        return e(window)._scrollable()
    }, e.fn._scrollable = function() {
        return this.map(function() {
            var t = this,
                n = !t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
            if (!n) return t;
            var o = (t.contentWindow || t).document || t.ownerDocument || t;
            return /webkit/i.test(navigator.userAgent) || "BackCompat" == o.compatMode ? o.body : o.documentElement
        })
    }, e.fn.scrollTo = function(o, r, i) {
        return "object" == typeof r && (i = r, r = 0), "function" == typeof i && (i = {
            onAfter: i
        }), "max" == o && (o = 9e9), i = e.extend({}, n.defaults, i), r = r || i.duration, i.queue = i.queue && i.axis.length > 1, i.queue && (r /= 2), i.offset = t(i.offset), i.over = t(i.over), this._scrollable().each(function() {
            function a(e) {
                u.animate(l, r, i.easing, e && function() {
                    e.call(this, c, i)
                })
            }
            if (null != o) {
                var s, f = this,
                    u = e(f),
                    c = o,
                    l = {},
                    d = u.is("html,body");
                switch (typeof c) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(c)) {
                            c = t(c);
                            break
                        }
                        if (c = d ? e(c) : e(c, this), !c.length) return;
                    case "object":
                        (c.is || c.style) && (s = (c = e(c)).offset())
                }
                var m = e.isFunction(i.offset) && i.offset(f, c) || i.offset;
                e.each(i.axis.split(""), function(e, t) {
                    var o = "x" == t ? "Left" : "Top",
                        r = o.toLowerCase(),
                        h = "scroll" + o,
                        p = f[h],
                        w = n.max(f, t);
                    if (s) l[h] = s[r] + (d ? 0 : p - u.offset()[r]), i.margin && (l[h] -= parseInt(c.css("margin" + o)) || 0, l[h] -= parseInt(c.css("border" + o + "Width")) || 0), l[h] += m[r] || 0, i.over[r] && (l[h] += c["x" == t ? "width" : "height"]() * i.over[r]);
                    else {
                        var y = c[r];
                        l[h] = y.slice && "%" == y.slice(-1) ? parseFloat(y) / 100 * w : y
                    }
                    i.limit && /^\d+$/.test(l[h]) && (l[h] = l[h] <= 0 ? 0 : Math.min(l[h], w)), !e && i.queue && (p != l[h] && a(i.onAfterFirst), delete l[h])
                }), a(i.onAfter)
            }
        }).end()
    }, n.max = function(t, n) {
        var o = "x" == n ? "Width" : "Height",
            r = "scroll" + o;
        if (!e(t).is("html,body")) return t[r] - e(t)[o.toLowerCase()]();
        var i = "client" + o,
            a = t.ownerDocument.documentElement,
            s = t.ownerDocument.body;
        return Math.max(a[r], s[r]) - Math.min(a[i], s[i])
    }, n
});
! function(t) {
    var n = t.serialScroll = function(n) {
        return t(window).serialScroll(n)
    };
    n.defaults = {
        duration: 1e3,
        axis: "x",
        event: "click",
        start: 0,
        step: 1,
        lock: !0,
        cycle: !0,
        constant: !0
    }, t.fn.serialScroll = function(e) {
        return this.each(function() {
            function i(t) {
                t.data += x, r(t, this)
            }

            function r(t, n) {
                isNaN(n) || (t.data = n, n = h);
                var e, i = t.data,
                    r = t.type,
                    c = u.exclude ? a().slice(0, -u.exclude) : a(),
                    d = c.length,
                    b = c[i],
                    v = u.duration;
                if (r && t.preventDefault(), S && (l(), s = setTimeout(o, u.interval)), !b) {
                    if (e = 0 > i ? 0 : d - 1, x != e) i = e;
                    else {
                        if (!u.cycle) return;
                        i = d - e - 1
                    }
                    b = c[i]
                }!b || u.lock && g.is(":animated") || r && u.onBefore && u.onBefore(t, b, g, a(), i) === !1 || (u.stop && g.queue("fx", []).stop(), u.constant && (v = Math.abs(v / f * (x - i))), g.scrollTo(b, v, u).trigger("notify.serialScroll", [i]))
            }

            function o() {
                g.trigger("next.serialScroll")
            }

            function l() {
                clearTimeout(s)
            }

            function a() {
                return t(p, h)
            }

            function c(t) {
                if (!isNaN(t)) return t;
                for (var n, e = a(); - 1 == (n = e.index(t)) && t != h;) t = t.parentNode;
                return n
            }
            var s, u = t.extend({}, n.defaults, e),
                d = u.event,
                f = u.step,
                b = u.lazy,
                v = u.target ? this : document,
                g = t(u.target || this, v),
                h = g[0],
                p = u.items,
                x = u.start,
                S = u.interval,
                y = u.navigation;
            b || (p = a()), u.force && r({}, x), t(u.prev || [], v).bind(d, -f, i), t(u.next || [], v).bind(d, f, i), h.ssbound || g.bind("prev.serialScroll", -f, i).bind("next.serialScroll", f, i).bind("goto.serialScroll", r), S && g.bind("start.serialScroll", function() {
                S || (l(), S = !0, o())
            }).bind("stop.serialScroll", function() {
                l(), S = !1
            }), g.bind("notify.serialScroll", function(t, n) {
                var e = c(n);
                e > -1 && (x = e)
            }), h.ssbound = !0, u.jump && (b ? g : a()).bind(d, function(t) {
                r(t, c(t.target))
            }), y && (y = t(y, v).bind(d, function(t) {
                t.data = Math.round(a().length / y.length) * y.index(this), r(t, this)
            }))
        })
    }
}(jQuery);
! function(t) {
    var e = {},
        s = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            responsive: !0,
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            autoHover: !1,
            autoDelay: 0,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            onSliderLoad: function() {},
            onSlideBefore: function() {},
            onSlideAfter: function() {},
            onSlideNext: function() {},
            onSlidePrev: function() {}
        };
    t.fn.bxSlider = function(n) {
        if (0 == this.length) return this;
        if (this.length > 1) return this.each(function() {
            t(this).bxSlider(n)
        }), this;
        var o = {},
            r = this;
        e.el = this;
        var a = t(window).width(),
            l = t(window).height(),
            d = function() {
                o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                    index: o.settings.startSlide
                }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() {
                    var t = document.createElement("div"),
                        e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in e)
                        if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                    return !1
                }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function() {
                    t(this).data("origStyle", t(this).attr("style"))
                }), c()
            },
            c = function() {
                r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
                    width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
                    position: "relative"
                }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }), o.viewport.parent().css({
                    maxWidth: v()
                }), o.settings.pager || o.viewport.parent().css({
                    margin: "0 auto 0px"
                }), o.children.css({
                    "float": "horizontal" == o.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), o.children.eq(o.settings.startSlide).css({
                    zIndex: 50,
                    display: "block"
                })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
                var e = o.children.eq(o.settings.startSlide);
                "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
            },
            g = function(e, i) {
                var s = e.find("img, iframe").length;
                if (0 == s) return i(), void 0;
                var n = 0;
                e.find("img, iframe").each(function() {
                    t(this).one("load", function() {
                        ++n == s && i()
                    }).each(function() {
                        this.complete && t(this).load()
                    })
                })
            },
            h = function() {
                if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
                    var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
                        i = o.children.slice(0, e).clone().addClass("bx-clone"),
                        s = o.children.slice(-e).clone().addClass("bx-clone");
                    r.append(i).prepend(s)
                }
                o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(p()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", B), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && I(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
            },
            p = function() {
                var e = 0,
                    s = t();
                if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
                    if (o.carousel) {
                        var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
                        for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
                    } else s = o.children.eq(o.active.index);
                else s = o.children;
                return "vertical" == o.settings.mode ? (s.each(function() {
                    e += t(this).outerHeight()
                }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function() {
                    return t(this).outerHeight(!1)
                }).get()), e
            },
            v = function() {
                var t = "100%";
                return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
            },
            u = function() {
                var t = o.settings.slideWidth,
                    e = o.viewport.width();
                return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
            },
            f = function() {
                var t = 1;
                if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
                    if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
                    else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
                else {
                    var e = o.children.first().width();
                    t = Math.floor(o.viewport.width() / e)
                } else "vertical" == o.settings.mode && (t = o.settings.minSlides);
                return t
            },
            x = function() {
                var t = 0;
                if (o.settings.moveSlides > 0)
                    if (o.settings.infiniteLoop) t = o.children.length / m();
                    else
                        for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
                else t = Math.ceil(o.children.length / f());
                return t
            },
            m = function() {
                return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
            },
            S = function() {
                if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
                    if ("horizontal" == o.settings.mode) {
                        var t = o.children.last(),
                            e = t.position();
                        b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
                    } else if ("vertical" == o.settings.mode) {
                        var i = o.children.length - o.settings.minSlides,
                            e = o.children.eq(i).position();
                        b(-e.top, "reset", 0)
                    }
                } else {
                    var e = o.children.eq(o.active.index * m()).position();
                    o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
                }
            },
            b = function(t, e, i, s) {
                if (o.usingCSS) {
                    var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                    r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
                    })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
                    }))
                } else {
                    var a = {};
                    a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function() {
                        D()
                    }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function() {
                        b(s.resetValue, "reset", 0), N()
                    })
                }
            },
            w = function() {
                for (var e = "", i = x(), s = 0; i > s; s++) {
                    var n = "";
                    o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
                }
                o.pagerEl.html(e)
            },
            T = function() {
                o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.delegate("a", "click", q)
            },
            C = function() {
                o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
            },
            E = function() {
                o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.delegate(".bx-start", "click", k), o.controls.autoEl.delegate(".bx-stop", "click", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
            },
            P = function() {
                o.children.each(function() {
                    var e = t(this).find("img:first").attr("title");
                    void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                })
            },
            y = function(t) {
                o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
            },
            z = function(t) {
                o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
            },
            k = function(t) {
                r.startAuto(), t.preventDefault()
            },
            M = function(t) {
                r.stopAuto(), t.preventDefault()
            },
            q = function(e) {
                o.settings.auto && r.stopAuto();
                var i = t(e.currentTarget),
                    s = parseInt(i.attr("data-slide-index"));
                s != o.active.index && r.goToSlide(s), e.preventDefault()
            },
            I = function(e) {
                var i = o.children.length;
                return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function(i, s) {
                    t(s).find("a").eq(e).addClass("active")
                }), void 0)
            },
            D = function() {
                if (o.settings.infiniteLoop) {
                    var t = "";
                    0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), "horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0)
                }
                o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
            },
            A = function(t) {
                o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
            },
            W = function() {
                1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
            },
            H = function() {
                o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function() {
                    o.interval && (r.stopAuto(!0), o.autoPaused = !0)
                }, function() {
                    o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
                })
            },
            L = function() {
                var e = 0;
                if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
                else {
                    r.prepend(o.children.clone().addClass("bx-clone"));
                    var i = o.children.first().position();
                    e = "horizontal" == o.settings.mode ? -i.left : -i.top
                }
                b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
                    r.stop()
                }, function() {
                    var e = 0;
                    o.children.each(function() {
                        e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                    });
                    var i = o.settings.speed / e,
                        s = "horizontal" == o.settings.mode ? "left" : "top",
                        n = i * (e - Math.abs(parseInt(r.css(s))));
                    N(n)
                }), N()
            },
            N = function(t) {
                speed = t ? t : o.settings.speed;
                var e = {
                        left: 0,
                        top: 0
                    },
                    i = {
                        left: 0,
                        top: 0
                    };
                "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
                var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
                    n = "horizontal" == o.settings.mode ? -i.left : -i.top,
                    a = {
                        resetValue: n
                    };
                b(s, "ticker", speed, a)
            },
            O = function() {
                o.touch = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                }, o.viewport.bind("touchstart", X)
            },
            X = function(t) {
                if (o.working) t.preventDefault();
                else {
                    o.touch.originalPos = r.position();
                    var e = t.originalEvent;
                    o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
                }
            },
            Y = function(t) {
                var e = t.originalEvent,
                    i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
                    s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
                if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
                    var n = 0;
                    if ("horizontal" == o.settings.mode) {
                        var r = e.changedTouches[0].pageX - o.touch.start.x;
                        n = o.touch.originalPos.left + r
                    } else {
                        var r = e.changedTouches[0].pageY - o.touch.start.y;
                        n = o.touch.originalPos.top + r
                    }
                    b(n, "reset", 0)
                }
            },
            V = function(t) {
                o.viewport.unbind("touchmove", Y);
                var e = t.originalEvent,
                    i = 0;
                if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
                    var s = Math.abs(o.touch.start.x - o.touch.end.x);
                    s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
                } else {
                    var s = 0;
                    "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
                }
                o.viewport.unbind("touchend", V)
            },
            B = function() {
                var e = t(window).width(),
                    i = t(window).height();
                (a != e || l != i) && (a = e, l = i, r.redrawSlider())
            };
        return r.goToSlide = function(e, i) {
            if (!o.working && o.active.index != e)
                if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && I(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != p() && o.viewport.animate({
                    height: p()
                }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                    zIndex: 0
                }), o.children.eq(o.active.index).css("zIndex", 51).fadeIn(o.settings.speed, function() {
                    t(this).css("zIndex", 50), D()
                });
                else {
                    o.settings.adaptiveHeight && o.viewport.height() != p() && o.viewport.animate({
                        height: p()
                    }, o.settings.adaptiveHeightSpeed);
                    var s = 0,
                        n = {
                            left: 0,
                            top: 0
                        };
                    if (!o.settings.infiniteLoop && o.carousel && o.active.last)
                        if ("horizontal" == o.settings.mode) {
                            var a = o.children.eq(o.children.length - 1);
                            n = a.position(), s = o.viewport.width() - a.outerWidth()
                        } else {
                            var l = o.children.length - o.settings.minSlides;
                            n = o.children.eq(l).position()
                        } else if (o.carousel && o.active.last && "prev" == i) {
                        var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
                            a = r.children(".bx-clone").eq(d);
                        n = a.position()
                    } else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
                    else if (e >= 0) {
                        var c = e * m();
                        n = o.children.eq(c).position()
                    }
                    if ("undefined" != typeof n) {
                        var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
                        b(g, "slide", o.settings.speed)
                    }
                }
        }, r.goToNextSlide = function() {
            if (o.settings.infiniteLoop || !o.active.last) {
                var t = parseInt(o.active.index) + 1;
                r.goToSlide(t, "next")
            }
        }, r.goToPrevSlide = function() {
            if (o.settings.infiniteLoop || 0 != o.active.index) {
                var t = parseInt(o.active.index) - 1;
                r.goToSlide(t, "prev")
            }
        }, r.startAuto = function(t) {
            o.interval || (o.interval = setInterval(function() {
                "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
            }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
        }, r.stopAuto = function(t) {
            o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
        }, r.getCurrentSlide = function() {
            return o.active.index
        }, r.getSlideCount = function() {
            return o.children.length
        }, r.redrawSlider = function() {
            o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", p()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), I(o.active.index))
        }, r.destroySlider = function() {
            o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() {
                void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
            }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", B))
        }, r.reloadSlider = function(t) {
            void 0 != t && (n = t), r.destroySlider(), d()
        }, d(), this
    }
}(jQuery);

function serialScrollFixLock(e, o, t, i, n) {
    serialScrollNbImages = $("#thumbs_list li:visible").length, serialScrollNbImagesDisplayed = 3;
    var s = 0 == n ? !0 : !1,
        l = n + serialScrollNbImagesDisplayed >= serialScrollNbImages ? !0 : !1;
    return $("#view_scroll_left").css("cursor", s ? "default" : "pointer").css("display", s ? "none" : "block").fadeTo(0, s ? 0 : 1), $("#view_scroll_right").css("cursor", l ? "default" : "pointer").fadeTo(0, l ? 0 : 1).css("display", l ? "none" : "block"), !0
}

function refreshProductImages(e) {
    if ($("#thumbs_list_frame").scrollTo("li:eq(0)", 700, {
            axis: "x"
        }), e = parseInt(e), e > 0 && "undefined" != typeof combinationImages && "undefined" != typeof combinationImages[e]) {
        $("#thumbs_list li").hide(), $("#thumbs_list").trigger("goto", 0);
        for (var o = 0; o < combinationImages[e].length; o++) "undefined" != typeof jqZoomEnabled && jqZoomEnabled ? $("#thumbnail_" + parseInt(combinationImages[e][o])).show().children("a.shown").trigger("click") : $("#thumbnail_" + parseInt(combinationImages[e][o])).show()
    } else $("#thumbs_list li").show();
    parseInt($("#thumbs_list_frame >li:visible").length) != parseInt($("#thumbs_list_frame >li").length) ? $("#wrapResetImages").stop(!0, !0).show() : $("#wrapResetImages").stop(!0, !0).hide();
    var t = $("#thumbs_list_frame >li").outerWidth() + parseInt($("#thumbs_list_frame >li").css("marginRight"));
    $("#thumbs_list_frame").width(parseInt(t * $("#thumbs_list_frame >li").length) + "px"), $("#thumbs_list").trigger("goto", 0), serialScrollFixLock("", "", "", "", 0)
}

function initLocationChange(e) {
    e || (e = 500), setInterval(checkUrl, e)
}

function arrayUnique(e) {
    return e.reduce(function(e, o) {
        return e.indexOf(o) < 0 && e.push(o), e
    }, [])
}

function function_exists(e) {
    return "string" == typeof e ? "function" == typeof window[e] : e instanceof Function
}

function oosHookJsCode() {
    for (var e = 0; e < oosHookJsCodeFunctions.length; e++) function_exists(oosHookJsCodeFunctions[e]) && setTimeout(oosHookJsCodeFunctions[e] + "()", 0)
}

function displayImage(e, o) {
    if ("undefined" == typeof o && (o = !1), e.prop("href")) {
        var t = e.attr("href").replace("thickbox", "large"),
            i = e.attr("title"),
            n = e.attr("href");
        $("#bigpic").prop("src") != t && $("#bigpic").attr({
            src: t,
            alt: i,
            title: i
        }).load(function() {
            "undefined" != typeof jqZoomEnabled && jqZoomEnabled && $(this).attr("rel", n)
        }), $("#views_block li a").removeClass("shown"), $(e).addClass("shown")
    }
}
var selectedCombination = [],
    globalQuantity = 0,
    colors = [];
$(document).ready(function() {
    if ($("#thumbs_list").serialScroll({
            items: "li:visible",
            prev: "#view_scroll_left",
            next: "#view_scroll_right",
            axis: "x",
            offset: 0,
            start: 0,
            stop: !0,
            onBefore: serialScrollFixLock,
            duration: 700,
            step: 2,
            lazy: !0,
            lock: !1,
            force: !1,
            cycle: !1
        }), $("#thumbs_list").trigger("goto", 1), $("#thumbs_list").trigger("goto", 0), $("#views_block li a").hover(function() {
            displayImage($(this))
        }, function() {}), "undefined" != typeof jqZoomEnabled && jqZoomEnabled) {
        if ($(window).width() <= 800) var e = "innerzoom";
        else var e = "standard";
        $(".jqzoom").jqzoom({
            zoomType: e,
            zoomWidth: 458,
            zoomHeight: 430,
            xOffset: 21,
            yOffset: 0,
            title: !0
        })
    }
    $(document).on("click", "#view_full_size, #image-block", function() {
        $("#views_block .shown").click()
    }), $(document).on("click", "#short_description_block .button", function() {
        $("#more_info_tab_more_info").click(), $.scrollTo("#more_info_tabs", 1200)
    }), 0 == contentOnly ? $.prototype.fancybox && $("li:visible .fancybox, .fancybox.shown").fancybox({
        hideOnContentClick: !0,
        openEffect: "elastic",
        closeEffect: "elastic"
    }) : ($(document).on("click", ".fancybox", function(e) {
        e.preventDefault()
    }), $(document).on("click", "#image-block", function(e) {
        e.preventDefault();
        var o = window.document.location.href + "",
            t = o.replace("content_only=1", "");
        window.parent.document.location.href = t
    }), "undefined" == typeof ajax_allowed || ajax_allowed || $("#buy_block").attr("target", "_top")), $.prototype.bxSlider && $("#bxslider").bxSlider({
        minSlides: 1,
        maxSlides: 6,
        slideWidth: 178,
        slideMargin: 20,
        pager: !1,
        nextText: "",
        prevText: "",
        moveSlides: 1,
        infiniteLoop: !1,
        hideControlOnEnd: !0
    }), refreshProductImages(0)
});
! function($) {
    var isIE6 = $.browser.msie && $.browser.version < 7,
        body = $(document.body),
        window = $(window),
        jqzoompluging_disabled = !1;
    $.fn.jqzoom = function(e) {
        return this.each(function() {
            var t = this.nodeName.toLowerCase();
            "a" == t && new jqzoom(this, e)
        })
    }, jqzoom = function(el, options) {
        function Smallimage(image) {
            var $obj = this;
            return this.node = image[0], this.findborder = function() {
                var bordertop = 0;
                bordertop = image.css("border-top-width"), btop = "";
                var borderleft = 0;
                if (borderleft = image.css("border-left-width"), bleft = "", bordertop)
                    for (i = 0; i < 3; i++) {
                        var x = [];
                        if (x = bordertop.substr(i, 1), 0 != isNaN(x)) break;
                        btop = btop + "" + bordertop.substr(i, 1)
                    }
                if (borderleft)
                    for (i = 0; i < 3 && !isNaN(borderleft.substr(i, 1)); i++) bleft += borderleft.substr(i, 1);
                $obj.btop = btop.length > 0 ? eval(btop) : 0, $obj.bleft = bleft.length > 0 ? eval(bleft) : 0
            }, this.fetchdata = function() {
                $obj.findborder(), $obj.w = image.width(), $obj.h = image.height(), $obj.ow = image.outerWidth(), $obj.oh = image.outerHeight(), $obj.pos = image.offset(), $obj.pos.l = image.offset().left + $obj.bleft, $obj.pos.t = image.offset().top + $obj.btop, $obj.pos.r = $obj.w + $obj.pos.l, $obj.pos.b = $obj.h + $obj.pos.t, $obj.rightlimit = image.offset().left + $obj.ow, $obj.bottomlimit = image.offset().top + $obj.oh
            }, this.node.onerror = function() {
                throw "Problems while loading image."
            }, this.node.onload = function() {
                $obj.fetchdata(), 0 == $(".zoomPad", el).length && obj.create()
            }, $obj
        }

        function Loader() {
            return this.append = function() {
                this.node = $("<div/>").addClass("zoomPreload").css("visibility", "hidden").html(settings.preloadText), $(".zoomPad", el).append(this.node)
            }, this.show = function() {
                this.node.top = (smallimage.oh - this.node.height()) / 2, this.node.left = (smallimage.ow - this.node.width()) / 2, this.node.css({
                    top: this.node.top,
                    left: this.node.left,
                    position: "absolute",
                    visibility: "visible"
                })
            }, this.hide = function() {
                this.node.css("visibility", "hidden")
            }, this
        }

        function Lens() {
            var e = this;
            return this.node = $("<div/>").addClass("zoomPup"), this.append = function() {
                $(".zoomPad", el).append($(this.node).hide()), "reverse" == settings.zoomType && (this.image = new Image, this.image.src = smallimage.node.src, $(this.node).empty().append(this.image))
            }, this.setdimensions = function() {
                this.node.w = parseInt(settings.zoomWidth / el.scale.x) > smallimage.w ? smallimage.w : parseInt(settings.zoomWidth / el.scale.x), this.node.h = parseInt(settings.zoomHeight / el.scale.y) > smallimage.h ? smallimage.h : parseInt(settings.zoomHeight / el.scale.y), this.node.top = (smallimage.oh - this.node.h - 2) / 2, this.node.left = (smallimage.ow - this.node.w - 2) / 2, this.node.css({
                    top: 0,
                    left: 0,
                    width: this.node.w + "px",
                    height: this.node.h + "px",
                    position: "absolute",
                    display: "none",
                    borderWidth: "1px"
                }), "reverse" == settings.zoomType && (this.image.src = smallimage.node.src, $(this.node).css({
                    opacity: 1
                }), $(this.image).css({
                    position: "absolute",
                    display: "block",
                    left: -(this.node.left + 1 - smallimage.bleft) + "px",
                    top: -(this.node.top + 1 - smallimage.btop) + "px"
                }))
            }, this.setcenter = function() {
                this.node.top = (smallimage.oh - this.node.h - 2) / 2, this.node.left = (smallimage.ow - this.node.w - 2) / 2, this.node.css({
                    top: this.node.top,
                    left: this.node.left
                }), "reverse" == settings.zoomType && $(this.image).css({
                    position: "absolute",
                    display: "block",
                    left: -(this.node.left + 1 - smallimage.bleft) + "px",
                    top: -(this.node.top + 1 - smallimage.btop) + "px"
                }), largeimage.setposition()
            }, this.setposition = function(e) {
                function t(e) {
                    return el.mousepos.x - e.w / 2 < smallimage.pos.l
                }

                function o(e) {
                    return el.mousepos.x + e.w / 2 > smallimage.pos.r
                }

                function s(e) {
                    return el.mousepos.y - e.h / 2 < smallimage.pos.t
                }

                function i(e) {
                    return el.mousepos.y + e.h / 2 > smallimage.pos.b
                }
                el.mousepos.x = e.pageX, el.mousepos.y = e.pageY;
                var a = 0,
                    l = 0;
                a = el.mousepos.x + smallimage.bleft - smallimage.pos.l - (this.node.w + 2) / 2, l = el.mousepos.y + smallimage.btop - smallimage.pos.t - (this.node.h + 2) / 2, t(this.node) ? a = smallimage.bleft - 1 : o(this.node) && (a = smallimage.w + smallimage.bleft - this.node.w - 1), s(this.node) ? l = smallimage.btop - 1 : i(this.node) && (l = smallimage.h + smallimage.btop - this.node.h - 1), this.node.left = a, this.node.top = l, this.node.css({
                    left: a + "px",
                    top: l + "px"
                }), "reverse" == settings.zoomType && ($.browser.msie && $.browser.version > 7 && $(this.node).empty().append(this.image), $(this.image).css({
                    position: "absolute",
                    display: "block",
                    left: -(this.node.left + 1 - smallimage.bleft) + "px",
                    top: -(this.node.top + 1 - smallimage.btop) + "px"
                })), largeimage.setposition()
            }, this.hide = function() {
                img.css({
                    opacity: 1
                }), this.node.hide()
            }, this.show = function() {
                "innerzoom" == settings.zoomType || !settings.lens && "drag" != settings.zoomType || this.node.show(), "reverse" == settings.zoomType && img.css({
                    opacity: settings.imageOpacity
                })
            }, this.getoffset = function() {
                var t = {};
                return t.left = e.node.left, t.top = e.node.top, t
            }, this
        }

        function Stage() {
            var e = this;
            this.node = $("<div class='zoomWindow'><div class='zoomWrapper'><div class='zoomWrapperTitle'></div><div class='zoomWrapperImage'></div></div></div>"), this.ieframe = $('<iframe class="zoomIframe" src="javascript:\'\';" marginwidth="0" marginheight="0" align="bottom" scrolling="no" frameborder="0" ></iframe>'), this.setposition = function() {
                if (this.node.leftpos = 0, this.node.toppos = 0, "innerzoom" != settings.zoomType) switch (settings.position) {
                    case "left":
                        this.node.leftpos = smallimage.pos.l - smallimage.bleft - Math.abs(settings.xOffset) - settings.zoomWidth > 0 ? 0 - settings.zoomWidth - Math.abs(settings.xOffset) : smallimage.ow + Math.abs(settings.xOffset), this.node.toppos = Math.abs(settings.yOffset);
                        break;
                    case "top":
                        this.node.leftpos = Math.abs(settings.xOffset), this.node.toppos = smallimage.pos.t - smallimage.btop - Math.abs(settings.yOffset) - settings.zoomHeight > 0 ? 0 - settings.zoomHeight - Math.abs(settings.yOffset) : smallimage.oh + Math.abs(settings.yOffset);
                        break;
                    case "bottom":
                        this.node.leftpos = Math.abs(settings.xOffset), this.node.toppos = smallimage.pos.t - smallimage.btop + smallimage.oh + Math.abs(settings.yOffset) + settings.zoomHeight < screen.height ? smallimage.oh + Math.abs(settings.yOffset) : 0 - settings.zoomHeight - Math.abs(settings.yOffset);
                        break;
                    default:
                        this.node.leftpos = smallimage.rightlimit + Math.abs(settings.xOffset) + settings.zoomWidth < screen.width ? smallimage.ow + Math.abs(settings.xOffset) : 0 - settings.zoomWidth - Math.abs(settings.xOffset), this.node.toppos = Math.abs(settings.yOffset)
                }
                return this.node.css({
                    left: this.node.leftpos + "px",
                    top: this.node.toppos + "px"
                }), this
            }, this.append = function() {
                if ($(".zoomPad", el).append(this.node), this.node.css({
                        position: "absolute",
                        display: "none",
                        zIndex: 5001
                    }), "innerzoom" == settings.zoomType) {
                    this.node.css({
                        cursor: "default"
                    });
                    var t = 0 == smallimage.bleft ? 1 : smallimage.bleft;
                    $(".zoomWrapper", this.node).css({
                        borderWidth: t + "px"
                    })
                }
                $(".zoomWrapper", this.node).css({
                    width: Math.round(settings.zoomWidth) + "px",
                    borderWidth: t + "px"
                }), $(".zoomWrapperImage", this.node).css({
                    width: "100%",
                    height: Math.round(settings.zoomHeight) + "px"
                }), $(".zoomWrapperTitle", this.node).css({
                    width: "100%",
                    position: "absolute"
                }), $(".zoomWrapperTitle", this.node).hide(), settings.title && zoomtitle.length > 0 && $(".zoomWrapperTitle", this.node).html(zoomtitle).show(), e.setposition()
            }, this.hide = function() {
                switch (settings.hideEffect) {
                    case "fadeout":
                        this.node.fadeOut(settings.fadeoutSpeed, function() {});
                        break;
                    default:
                        this.node.hide()
                }
                this.ieframe.hide()
            }, this.show = function() {
                switch (settings.showEffect) {
                    case "fadein":
                        this.node.fadeIn(), this.node.fadeIn(settings.fadeinSpeed, function() {});
                        break;
                    default:
                        this.node.show()
                }
                isIE6 && "innerzoom" != settings.zoomType && (this.ieframe.width = this.node.width(), this.ieframe.height = this.node.height(), this.ieframe.left = this.node.leftpos, this.ieframe.top = this.node.toppos, this.ieframe.css({
                    display: "block",
                    position: "absolute",
                    left: this.ieframe.left,
                    top: this.ieframe.top,
                    zIndex: 99,
                    width: this.ieframe.width + "px",
                    height: this.ieframe.height + "px"
                }), $(".zoomPad", el).append(this.ieframe), this.ieframe.show())
            }
        }

        function Largeimage() {
            var e = this;
            return this.node = new Image, this.loadimage = function(e) {
                loader.show(), this.url = e, this.node.style.position = "absolute", this.node.style.border = "0px", this.node.style.display = "none", this.node.style.left = "-5000px", this.node.style.top = "0px", document.body.appendChild(this.node), this.node.src = e
            }, this.fetchdata = function() {
                var t = $(this.node),
                    o = {};
                this.node.style.display = "block", e.w = t.width(), e.h = t.height(), e.pos = t.offset(), e.pos.l = t.offset().left, e.pos.t = t.offset().top, e.pos.r = e.w + e.pos.l, e.pos.b = e.h + e.pos.t, o.x = e.w / smallimage.w, o.y = e.h / smallimage.h, el.scale = o, document.body.removeChild(this.node), $(".zoomWrapperImage", el).empty().append(this.node), lens.setdimensions()
            }, this.node.onerror = function() {
                throw "Problems while loading the big image."
            }, this.node.onload = function() {
                e.fetchdata(), loader.hide(), el.largeimageloading = !1, el.largeimageloaded = !0, ("drag" == settings.zoomType || settings.alwaysOn) && (lens.show(), stage.show(), lens.setcenter())
            }, this.setposition = function() {
                var e = -el.scale.x * (lens.getoffset().left - smallimage.bleft + 1),
                    t = -el.scale.y * (lens.getoffset().top - smallimage.btop + 1);
                $(this.node).css({
                    left: e + "px",
                    top: t + "px"
                })
            }, this
        }
        var api = null;
        if (api = $(el).data("jqzoom")) return api;
        var obj = this,
            settings = $.extend({}, $.jqzoom.defaults, options || {});
        obj.el = el, el.rel = $(el).attr("rel"), el.zoom_active = !1, el.zoom_disabled = !1, el.largeimageloading = !1, el.largeimageloaded = !1, el.scale = {}, el.timer = null, el.mousepos = {}, el.mouseDown = !1, $(el).css({
            "outline-style": "none",
            "text-decoration": "none"
        });
        var img = $("img:eq(0)", el);
        el.title = $(el).attr("title"), el.imagetitle = img.attr("title");
        var zoomtitle = $.trim(el.title).length > 0 ? el.title : el.imagetitle,
            smallimage = new Smallimage(img),
            lens = new Lens,
            stage = new Stage,
            largeimage = new Largeimage,
            loader = new Loader;
        $(el).bind("click", function(e) {
            return e.preventDefault(), !1
        });
        var zoomtypes = ["standard", "drag", "innerzoom", "reverse"];
        $.inArray($.trim(settings.zoomType), zoomtypes) < 0 && (settings.zoomType = "standard"), $.extend(obj, {
            create: function() {
                0 == $(".zoomPad", el).length && (el.zoomPad = $("<div/>").addClass("zoomPad"), img.wrap(el.zoomPad)), "innerzoom" == settings.zoomType && (settings.zoomWidth = smallimage.w, settings.zoomHeight = smallimage.h), 0 == $(".zoomPup", el).length && lens.append(), 0 == $(".zoomWindow", el).length && stage.append(), 0 == $(".zoomPreload", el).length && loader.append(), (settings.preloadImages || "drag" == settings.zoomType || settings.alwaysOn) && obj.load(), obj.init()
            },
            init: function() {
                "drag" == settings.zoomType && ($(".zoomPad", el).mousedown(function() {
                    el.mouseDown = !0
                }), $(".zoomPad", el).mouseup(function() {
                    el.mouseDown = !1
                }), document.body.ondragstart = function() {
                    return !1
                }, $(".zoomPad", el).css({
                    cursor: "default"
                }), $(".zoomPup", el).css({
                    cursor: "move"
                })), "innerzoom" == settings.zoomType && $(".zoomWrapper", el).css({
                    cursor: "crosshair"
                }), $(".zoomPad", el).bind("mouseenter mouseover", function(e) {
                    img.attr("title", ""), $(el).attr("title", ""), el.zoom_active = !0, smallimage.fetchdata(), el.largeimageloaded ? obj.activate(e) : obj.load()
                }), $(".zoomPad", el).bind("mouseleave", function() {
                    obj.deactivate()
                }), $(".zoomPad", el).bind("mousemove", function(e) {
                    return e.pageX > smallimage.pos.r || e.pageX < smallimage.pos.l || e.pageY < smallimage.pos.t || e.pageY > smallimage.pos.b ? (lens.setcenter(), !1) : (el.zoom_active = !0, el.largeimageloaded && !$(".zoomWindow", el).is(":visible") && obj.activate(e), void(el.largeimageloaded && ("drag" != settings.zoomType || "drag" == settings.zoomType && el.mouseDown) && lens.setposition(e)))
                });
                var thumb_preload = new Array,
                    i = 0,
                    thumblist = new Array;
                if (thumblist = $("a").filter(function() {
                        var e = new RegExp("gallery[\\s]*:[\\s]*'" + $.trim(el.rel) + "'", "i"),
                            t = $(this).attr("rel");
                        return e.test(t) ? this : void 0
                    }), thumblist.length > 0) {
                    var first = thumblist.splice(0, 1);
                    thumblist.push(first)
                }
                thumblist.each(function() {
                    if (settings.preloadImages) {
                        var thumb_options = $.extend({}, eval("(" + $.trim($(this).attr("rel")) + ")"));
                        thumb_preload[i] = new Image, thumb_preload[i].src = thumb_options.largeimage, i++
                    }
                    $(this).click(function(e) {
                        return $(this).hasClass("zoomThumbActive") ? !1 : (thumblist.each(function() {
                            $(this).removeClass("zoomThumbActive")
                        }), e.preventDefault(), obj.swapimage(this), !1)
                    })
                })
            },
            load: function() {
                if (0 == el.largeimageloaded && 0 == el.largeimageloading) {
                    var e = $(el).attr("href");
                    el.largeimageloading = !0, largeimage.loadimage(e)
                }
            },
            activate: function() {
                clearTimeout(el.timer), lens.show(), stage.show()
            },
            deactivate: function() {
                switch (settings.zoomType) {
                    case "drag":
                        break;
                    default:
                        img.attr("title", el.imagetitle), $(el).attr("title", el.title), settings.alwaysOn ? lens.setcenter() : (stage.hide(), lens.hide())
                }
                el.zoom_active = !1
            },
            swapimage: function(link) {
                el.largeimageloading = !1, el.largeimageloaded = !1;
                var options = new Object;
                if (options = $.extend({}, eval("(" + $.trim($(link).attr("rel")) + ")")), !options.smallimage || !options.largeimage) throw "ERROR :: Missing parameter for largeimage or smallimage.";
                var smallimage = options.smallimage,
                    largeimage = options.largeimage;
                return $(link).addClass("zoomThumbActive"), $(el).attr("href", largeimage), img.attr("src", smallimage), lens.hide(), stage.hide(), obj.load(), !1
            }
        }), img[0].complete && (smallimage.fetchdata(), 0 == $(".zoomPad", el).length && obj.create()), $(el).data("jqzoom", obj)
    }, $.jqzoom = {
        defaults: {
            zoomType: "standard",
            zoomWidth: 300,
            zoomHeight: 300,
            xOffset: 10,
            yOffset: 0,
            position: "right",
            preloadImages: !0,
            preloadText: "Loading zoom",
            title: !0,
            lens: !0,
            imageOpacity: .4,
            alwaysOn: !1,
            showEffect: "show",
            hideEffect: "hide",
            fadeinSpeed: "slow",
            fadeoutSpeed: "2000"
        },
        disable: function(e) {
            var t = $(e).data("jqzoom");
            return t.disable(), !1
        },
        enable: function(e) {
            var t = $(e).data("jqzoom");
            return t.enable(), !1
        },
        disableAll: function() {
            jqzoompluging_disabled = !0
        },
        enableAll: function() {
            jqzoompluging_disabled = !1
        }
    }
}(jQuery);

$(document).ready(function() {
    $("button.social-sharing").on("click", function() {
        if (type = $(this).attr("data-type"), type.length) switch (type) {
            case "twitter":
                window.open("https://twitter.com/intent/tweet?text=" + sharing_name + " " + encodeURIComponent(sharing_url), "sharertwt", "toolbar=0,status=0,width=640,height=445");
                break;
            case "facebook":
                window.open("http://www.facebook.com/sharer.php?u=" + sharing_url, "sharer", "toolbar=0,status=0,width=660,height=445");
                break;
            case "google-plus":
                window.open("https://plus.google.com/share?url=" + sharing_url, "sharer", "toolbar=0,status=0,width=660,height=445");
                break;
            case "pinterest":
                window.open("http://www.pinterest.com/pin/create/button/?media=" + sharing_img + "&url=" + sharing_url, "sharerpinterest", "toolbar=0,status=0,width=660,height=445")
        }
    })
});
$(document).ready(function() {
    $.prototype.bxSlider && $("#bxslider1").bxSlider({
        minSlides: 2,
        maxSlides: 4,
        slideWidth: 270,
        slideMargin: 20,
        pager: !1,
        nextText: "next",
        prevText: "pre",
        moveSlides: 1,
        infiniteLoop: !1,
        hideControlOnEnd: !1
    })
});
$(document).ready(function() {
    $("#newsletter-input").on({
        focus: function() {
            ($(this).val() == placeholder_blocknewsletter || $(this).val() == msg_newsl) && $(this).val("")
        },
        blur: function() {
            "" == $(this).val() && $(this).val(placeholder_blocknewsletter)
        }
    });
    var e = "alert alert-danger";
    "undefined" == typeof nw_error || nw_error || (e = "alert alert-success"), "undefined" != typeof msg_newsl && msg_newsl && ($("#columns").prepend('<div class="clearfix"></div><p class="' + e + '"> ' + alert_blocknewsletter + "</p>"), $("html, body").animate({
        scrollTop: $("#columns").offset().top
    }, "slow"))
});
$(document).ready(function() {
    "undefined" == typeof homeslider_speed && (homeslider_speed = 500), "undefined" == typeof homeslider_pause && (homeslider_pause = 3e3), "undefined" == typeof homeslider_loop && (homeslider_loop = !0), "undefined" == typeof homeslider_width && (homeslider_width = 779), $.prototype.bxSlider && $("#homeslider").bxSlider({
        useCSS: !1,
        maxSlides: 1,
        slideWidth: homeslider_width,
        infiniteLoop: homeslider_loop,
        hideControlOnEnd: !0,
        pager: !1,
        autoHover: !0,
        auto: homeslider_loop,
        speed: parseInt(homeslider_speed),
        pause: homeslider_pause,
        controls: !0
    }), $(".homeslider-description").click(function() {
        window.location.href = $(this).prev("a").prop("href")
    }), $("#homepage-slider").addClass($("#htmlcontent_top").length > 0 ? "col-xs-8" : "col-xs-12")
});

! function(t, i) {
    var s = "responsiver",
        e = (i.document, {
            interval: 800,
            speed: 800,
            fx: "slide",
            start: 0,
            itemExpr: ".item",
            reverse: !1,
            step: 1,
            pause: "hover",
            control: {
                next: null,
                prev: null,
                pager: null,
                pause: null
            },
            selector: {
                item: ".item",
                container: ".vpi-wrap"
            }
        }),
        n = function(n, o) {
            if (this.element = t(n), this.options = o, this._defaults = e, this._name = s, this.element.removeClass("not-js").addClass("js-loaded"), this.container = t(this.options.selector.container, this.element), this.viewport = this.container.parent(), this.items = t(this.options.selector.item, this.container), this.sliding = !1, this.current = this.options.start || 0, this.slidingTo = this.current, this.count = this.items.length, (this.options.control.prev || this.options.control.next || this.options.control.pager || this.options.control.pause) && (this.options.control.prev && t(this.options.control.prev).click(t.proxy(this.prev, this)), this.options.control.next && t(this.options.control.next).click(t.proxy(this.next, this)), this.options.control.pause && t(this.options.control.pause).click(function() {})), this.options.preload) {
                var r = t("img", this.items),
                    h = [],
                    l = 0,
                    c = this;
                if (r.length) {
                    for (var a = 0; a < r.length; a++) {
                        var u = t(r[a]).attr("data-src") || t(r[a]).attr("src"); - 1 < t.inArray(u, h) || h.push(u)
                    }
                    t.each(h, function() {
                        t("<img>").bind("error load", function() {
                            l++, l == h.length && c.init()
                        }).attr("src", this + "?" + (time = (new Date).getTime()))
                    })
                } else this.init()
            } else this.init();
            t(this.viewport).mouseenter(t.proxy(function() {
                "hover" == this.options.pause && this.pause()
            }, this)).mouseleave(t.proxy(function() {
                "hover" == this.options.pause && this.cycle()
            }, this)), t(i).bind("resize.responsiver", this.resize.bind(this))
        };
    n.prototype = {
        init: function() {
            this._setViewport(), this.to(this.slidingTo, 0)
        },
        next: function() {
            return this.sliding ? void 0 : this.slide(this._getNext())
        },
        prev: function() {
            return this.sliding ? void 0 : this.slide(this._getPrevious())
        },
        pause: function(t) {
            return t || (this.paused = !0), clearInterval(this.interval), this.interval = null, this
        },
        pauseToggle: function() {},
        slide: function(i, s) {
            if (i.length) {
                var e = this.interval,
                    n = t.Event("slide"),
                    o = this;
                if (this.sliding = !0, e && this.pause(), !n.isDefaultPrevented()) {
                    var r = "number" == typeof s ? s : this.options.speed;
                    if ("slide" == this.options.fx) t(this.container).addClass("tt-effect-active"), t(".item-wrap").addClass("tt-old"), this.container.animate({
                        left: -i.position().left
                    }, {
                        duration: r,
                        complete: function() {
                            o.slidingTo >= o.count && (o.slidingTo %= o.count, o.container.css({
                                left: -o.items.eq(o.slidingTo).position().left
                            })), o.current = o.slidingTo, o.sliding = !1, t(o.container).removeClass("tt-effect-active"), t(".item-wrap").removeClass("tt-old"), o.update()
                        }
                    });
                    else if ("fade" == this.options.fx) {
                        var h = this.container.clone().appendTo(this.viewport);
                        t(this.container).addClass("tt-effect-active"), t(".item-wrap").addClass("tt-old"), this.container.css({
                            opacity: 0,
                            left: -i.position().left,
                            "z-index": 2
                        }).animate({
                            opacity: 1
                        }, {
                            duration: r,
                            complete: function() {
                                (o.slidingTo >= o.count || o.slidingTo < 0) && (o.slidingTo += o.count, o.slidingTo %= o.count, o.container.css({
                                    left: -o.items.eq(o.slidingTo).position().left
                                })), o.current = o.slidingTo, o.sliding = !1, t(o.container).removeClass("tt-effect-active"), t(".item-wrap").removeClass("tt-old"), o.update()
                            }
                        }), t(h).css({
                            "z-index": 1
                        }).animate({
                            opacity: 0
                        }, {
                            duration: this.options.speed,
                            complete: function() {
                                t(this).remove()
                            }
                        })
                    }
                    return e && this.cycle(), this
                }
            }
        },
        to: function(t, i) {
            return this.slide(this._getNext(t), i)
        },
        cycle: function(i) {
            return i || (this.paused = !1), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        },
        update: function() {
            this.options, this._getColumns();
            this.current < 0 ? this.current += this.count : this.current >= this.count && (this.current %= this.count), !this.options.circular, !this.options.circular && this.current <= 0 ? t(this.options.prev).addClass("disabled") : t(this.options.prev).removeClass("disabled"), !this.options.circular && this.current + this._getColumns() >= this.count ? t(this.options.next).addClass("disabled") : t(this.options.next).removeClass("disabled")
        },
        resize: function() {
            this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                this._setViewport(), this.to(this.current, 0)
            }.bind(this), 10)
        },
        _getColumns: function() {
            if ("function" == typeof this.options.getColumns) this.column = this.options.getColumns.apply(this.element, [this.element]);
            else if ("number" == typeof this.options.getColumns) this.column = this.options.getColumns;
            else {
                var i = parseInt(this.options.getColumns);
                this.column = i ? i : 1
            }
            if (this.options.circular === !0) {
                var s = t(".clone", this.container).length,
                    e = this.column + this.getStep() - 1;
                if (e > s)
                    for (var n = s; e > n && !(n > this.items.length - 1); n++) this.items.eq(n).clone().appendTo(this.container).addClass("clone")
            }
            return this.column
        },
        _setViewport: function() {
            var i = 0;
            t.each(this.items, function() {
                i < t(this).height() && (i = t(this).height())
            }), this.viewport.stop(!0, !0).animate({
                height: i
            }, {
                duration: 400
            })
        },
        _getNext: function(i) {
            if (this.slidingTo = "undefined" == typeof i ? this.current + (this.isForward() ? this.getStep() : -this.getStep()) : i, this.slidingTo < 0)
                if (this.options.circular) {
                    var s = t(".clone:eq(" + this.current + ")", this.container);
                    s.length && this.container.css({
                        left: -s.position().left
                    })
                } else this.slidingTo += this.count;
            else if (this.slidingTo >= this.count)
                if (this.options.circular) {
                    if (this.isForward()) return t(".clone:eq(" + this.slidingTo % this.count + ")", this.container)
                } else this.slidingTo %= this.count;
            return this.items.eq(this.slidingTo)
        },
        _getPrevious: function(t) {
            var i = this.options.reverse || !1;
            this.options.reverse = !i;
            var s = this._getNext(t);
            return this.options.reverse = i, s
        },
        isForward: function() {
            return this.options.reverse ? !1 : !0
        },
        getStep: function() {
            return this.options.step
        }
    }, t.fn[s] = function(i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("plugin_" + s),
                h = "object" == typeof i ? t.extend({}, e, i) : e;
            r || o.data("plugin_" + s, r = new n(this, h)), "number" == typeof i ? r.to(i) : "string" == typeof i ? r[i]() : h.interval && r.cycle()
        })
    }, t.fn[s].Constructor = n
}(jQuery, window);
! function(t) {
    function i(i) {
        t(this).touchSwipeLeft(i).touchSwipeRight(i)
    }

    function e(i) {
        var e = t(this);
        e.data("swipeLeft") || e.data("swipeLeft", i), e.data("swipeRight") || a(e)
    }

    function n(i) {
        var e = t(this);
        e.data("swipeRight") || e.data("swipeRight", i), e.data("swipeLeft") || a(e)
    }

    function a(t) {
        t.unbindSwipe(!0).bind(h, o)
    }

    function o(i) {
        function e() {
            g.unbind(p), f && h && d > h - f && Math.abs(v - a) > u && Math.abs(b - o) < c && (v > a ? g.data("swipeLeft") && g.data("swipeLeft")("left") : g.data("swipeRight") && g.data("swipeRight")("right")), f = h = null
        }

        function n(t) {
            f && (r = t.originalEvent.touches ? t.originalEvent.touches[0] : t, h = (new Date).getTime(), a = r.pageX, o = r.pageY, Math.abs(v - a) > w && t.preventDefault())
        }
        var a, o, h, f = (new Date).getTime(),
            r = i.originalEvent.touches ? i.originalEvent.touches[0] : i,
            g = t(this).bind(p, n).one(s, e),
            v = r.pageX,
            b = r.pageY;
        g.data("stopPropagation") && i.stopImmediatePropagation()
    }
    var s, p, h, u = 30,
        c = 75,
        w = 10,
        d = 1e3;
    "ontouchend" in document ? (s = "touchend.cj_swp", p = "touchmove.cj_swp", h = "touchstart.cj_swp") : (s = "mouseup.cj_swp", p = "mousemove.cj_swp", h = "mousedown.cj_swp"), t.fn.touchSwipe = function(t, e) {
        return e && this.data("stopPropagation", !0), t ? this.each(i, [t]) : void 0
    }, t.fn.touchSwipeLeft = function(t, i) {
        return i && this.data("stopPropagation", !0), t ? this.each(e, [t]) : void 0
    }, t.fn.touchSwipeRight = function(t, i) {
        return i && this.data("stopPropagation", !0), t ? this.each(n, [t]) : void 0
    }, t.fn.unbindSwipeLeft = function() {
        this.removeData("swipeLeft"), this.data("swipeRight") || this.unbindSwipe(!0)
    }, t.fn.unbindSwipeRight = function() {
        this.removeData("swipeRight"), this.data("swipeLeft") || this.unbindSwipe(!0)
    }, t.fn.unbindSwipe = function(t) {
        return t || this.removeData("swipeLeft swipeRight stopPropagation"), this.unbind(h + " " + p + " " + s)
    }
}(jQuery);

function swipeLeft() {
    slider.goToNextSlide()
}

function swipeRight() {
    slider.goToPrevSlide()
}
var slider = "";
$(document).ready(function() {
    "undefined" == typeof homeslider_speed && (homeslider_speed = 500), "undefined" == typeof homeslider_pause && (homeslider_pause = 3e3), "undefined" == typeof homeslider_loop && (homeslider_loop = !0), "undefined" == typeof homeslider_width && (homeslider_width = 779), $(".homeslider-description").click(function() {
        window.location.href = $(this).prev("a").prop("href")
    }), $("#homepage-slider").addClass($("#htmlcontent_top").length > 0 ? "col-xs-8" : "col-xs-12"), $.prototype.bxSlider && (slider = $("#homeslider").bxSlider({
        useCSS: !1,
        maxSlides: 1,
        slideWidth: homeslider_width,
        infiniteLoop: homeslider_loop,
        hideControlOnEnd: !0,
        pager: !1,
        autoHover: !0,
        auto: homeslider_loop,
        speed: parseInt(homeslider_speed),
        pause: homeslider_pause,
        controls: !0
    }))
});
! function(e) {
    "use strict";
    var s = function() {
        var s = {
                bcClass: "sf-breadcrumb",
                menuClass: "sf-js-enabled",
                anchorClass: "sf-haveshild",
                menuArrowClass: "sf-arrows"
            },
            n = function() {
                var s = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                return s && e(window).load(function() {
                    e("body").children().on("click", e.noop)
                }), s
            }(),
            o = function() {
                var e = document.documentElement.style;
                return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
            }(),
            t = function(e, n) {
                var o = s.menuClass;
                n.cssArrows && (o += " " + s.menuArrowClass), e.toggleClass(o)
            },
            i = function(n, o) {
                return n.find("li." + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + " " + s.bcClass).filter(function() {
                    return e(this).children(o.popUpSelector).hide().show().length
                }).removeClass(o.pathClass)
            },
            r = function(n) {
                var o = e(['<span class="fa fa-angle-down"> </span>'].join(""));
                n.toggleClass(s.anchorClass), n.children("a").append(o.clone())
            },
            a = function(e) {
                var s = e.css("ms-touch-action");
                s = "pan-y" === s ? "auto" : "pan-y", e.css("ms-touch-action", s)
            },
            l = function(s, t) {
                var i = "li:has(" + t.popUpSelector + ")";
                e.fn.hoverIntent && !t.disableHI ? s.hoverIntent(p, u, i) : s.on("mouseenter.superfish", i, p).on("mouseleave.superfish", i, u);
                var r = "MSPointerDown.superfish";
                n || (r += " touchend.superfish"), o && (r += " mousedown.superfish"), s.on("focusin.superfish", "li", p).on("focusout.superfish", "li", u).on(r, "a", t, h)
            },
            h = function(s) {
                var n = e(this),
                    o = n.siblings(s.data.popUpSelector);
                o.length > 0 && o.is(":hidden") && (n.one("click.superfish", !1), "MSPointerDown" === s.type ? n.trigger("focus") : e.proxy(p, n.parent("li"))())
            },
            p = function() {
                var s = e(this),
                    n = d(s);
                clearTimeout(n.sfTimer), s.siblings().superfish("hide").end().superfish("show")
            },
            u = function() {
                var s = e(this),
                    o = d(s);
                n ? e.proxy(f, s, o)() : (clearTimeout(o.sfTimer), o.sfTimer = setTimeout(e.proxy(f, s, o), o.delay))
            },
            f = function(s) {
                s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(c(this)), s.$path.length && e.proxy(p, s.$path)())
            },
            c = function(e) {
                return e.closest("." + s.menuClass)
            },
            d = function(e) {
                return c(e).data("sf-options")
            };
        return {
            hide: function(s) {
                if (this.length) {
                    var n = this,
                        o = d(n);
                    if (!o) return this;
                    var t = o.retainPath === !0 ? o.$path : "",
                        i = n.find("li." + o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector),
                        r = o.speedOut;
                    s && (i.show(), r = 0), o.retainPath = !1, o.onBeforeHide.call(i), i.stop(!0, !0).animate(o.animationOut, r, function() {
                        var s = e(this);
                        o.onHide.call(s)
                    })
                }
                return this
            },
            show: function() {
                var e = d(this);
                if (!e) return this;
                var s = this.addClass(e.hoverClass),
                    n = s.children(e.popUpSelector);
                return e.onBeforeShow.call(n), n.stop(!0, !0).animate(e.animation, e.speed, function() {
                    e.onShow.call(n)
                }), this
            },
            destroy: function() {
                return this.each(function() {
                    var n, o = e(this),
                        i = o.data("sf-options");
                    return i ? (n = o.find(i.popUpSelector).parent("li"), clearTimeout(i.sfTimer), t(o, i), r(n), a(o), o.off(".superfish").off(".hoverIntent"), n.children(i.popUpSelector).attr("style", function(e, s) {
                        return s.replace(/display[^;]+;?/g, "")
                    }), i.$path.removeClass(i.hoverClass + " " + s.bcClass).addClass(i.pathClass), o.find("." + i.hoverClass).removeClass(i.hoverClass), i.onDestroy.call(o), void o.removeData("sf-options")) : !1
                })
            },
            init: function(n) {
                return this.each(function() {
                    var o = e(this);
                    if (o.data("sf-options")) return !1;
                    var h = e.extend({}, e.fn.superfish.defaults, n),
                        p = o.find(h.popUpSelector).parent("li");
                    h.$path = i(o, h), o.data("sf-options", h), t(o, 1), r(p), a(o), l(o, h), p.not("." + s.bcClass).superfish("hide", !0), h.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function(n) {
        return s[n] ? s[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? e.error("Method " + n + " does not exist on jQuery.fn.superfish") : s.init.apply(this, arguments)
    }, e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop
    }, e.fn.extend({
        hideSuperfishUl: s.hide,
        showSuperfishUl: s.show
    })
}(jQuery);
! function(e) {
    e.fn.hoverIntent = function(t, n, o) {
        var r = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        r = "object" == typeof t ? e.extend(r, t) : e.isFunction(n) ? e.extend(r, {
            over: t,
            out: n,
            selector: o
        }) : e.extend(r, {
            over: t,
            out: t,
            selector: n
        });
        var v, u, i, s, h = function(e) {
                v = e.pageX, u = e.pageY
            },
            a = function(t, n) {
                return n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.abs(i - v) + Math.abs(s - u) < r.sensitivity ? (e(n).off("mousemove.hoverIntent", h), n.hoverIntent_s = 1, r.over.apply(n, [t])) : (i = v, s = u, n.hoverIntent_t = setTimeout(function() {
                    a(t, n)
                }, r.interval), void 0)
            },
            I = function(e, t) {
                return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = 0, r.out.apply(t, [e])
            },
            c = function(t) {
                var n = jQuery.extend({}, t),
                    o = this;
                o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)), "mouseenter" == t.type ? (i = n.pageX, s = n.pageY, e(o).on("mousemove.hoverIntent", h), 1 != o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function() {
                    a(n, o)
                }, r.interval))) : (e(o).off("mousemove.hoverIntent", h), 1 == o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function() {
                    I(n, o)
                }, r.timeout)))
            };
        return this.on({
            "mouseenter.hoverIntent": c,
            "mouseleave.hoverIntent": c
        }, r.selector)
    }
}(jQuery);

function responsiveMenu() {
    $(document).width() <= 780 && 0 == responsiveflagMenu ? (menuChange("enable"), responsiveflagMenu = !0) : $(document).width() >= 781 && (menuChange("disable"), responsiveflagMenu = !1)
}

function desktopInit() {
    mCategoryGrover.off(), mCategoryGrover.removeClass("active"), $(".sf-menu > li > ul").removeClass("menu-mobile").parent().find(".menu-mobile-grover").remove(), $(".sf-menu").removeAttr("style"), categoryMenu.superfish("init"), $(".sf-menu > li > ul").addClass("submenu-container clearfix"), $(".sf-menu > li > ul").each(function() {
        i = 0, $(this).each(function() {
            "category-thumbnail" != $(this).attr("id") && (i++, i % 2 == 1 ? $(this).addClass("first-in-line-xs") : i % 5 == 1 && $(this).addClass("first-in-line-lg"))
        })
    })
}

function mobileInit() {
    categoryMenu.superfish("destroy"), $(".sf-menu").removeAttr("style"), mCategoryGrover.on("click touchstart", function() {
        return $(this).toggleClass("active").parent().find("ul.menu-content").stop().slideToggle("medium"), !1
    }), $(".sf-menu > li > ul").addClass("menu-mobile clearfix").parent().prepend('<span class="menu-mobile-grover"></span>'), $(".sf-menu .menu-mobile-grover").on("click touchstart", function() {
        var e = $(this).next().next(".menu-mobile");
        return e.is(":hidden") ? (e.slideDown(), $(this).addClass("active")) : (e.slideUp(), $(this).removeClass("active")), !1
    }), $("#block_top_menu > ul:first > li > a").on("click touchstart", function(e) {
        var n = $(this).prev().offset(),
            t = n.left - e.pageX;
        if ($(this).parent("li").find("ul").length && t >= 0 && 20 >= t) {
            e.preventDefault();
            var i = $(this).next(".menu-mobile"),
                s = $(this).prev();
            i.is(":hidden") ? (i.slideDown(), s.addClass("active")) : (i.slideUp(), s.removeClass("active"))
        }
    })
}

function menuChange(e) {
    "enable" == e ? mobileInit() : desktopInit()
}
var responsiveflagMenu = !1,
    categoryMenu = $("ul.sf-menu"),
    mCategoryGrover = $(".sf-contener .cat-title");
$(document).ready(function() {
    categoryMenu = $("ul.sf-menu"), mCategoryGrover = $(".sf-contener .cat-title"), responsiveMenu(), $(window).resize(responsiveMenu)
});
$(document).ready(function() {
    $("#page") && $("#page").append("<a id='sp-totop' class='backtotop' href='#'><i class='fa fa-angle-up'></i></a>"), $(".backtotop").addClass("hidden-top"), $(window).scroll(function() {
        0 === $(this).scrollTop() ? $(".backtotop").addClass("hidden-top") : $(".backtotop").removeClass("hidden-top")
    }), $(".backtotop").click(function() {
        return $("body,html").animate({
            scrollTop: 0
        }, 1200), !1
    })
});

function scrollCompensate() {
    var e = document.createElement("p");
    e.style.width = "100%", e.style.height = "200px";
    var o = document.createElement("div");
    o.style.position = "absolute", o.style.top = "0px", o.style.left = "0px", o.style.visibility = "hidden", o.style.width = "200px", o.style.height = "150px", o.style.overflow = "hidden", o.appendChild(e), document.body.appendChild(o);
    var t = e.offsetWidth;
    o.style.overflow = "scroll";
    var n = e.offsetWidth;
    return t == n && (n = o.clientWidth), document.body.removeChild(o), t - n
}

function processScroll(e, o, t) {
    var n = $(window).scrollTop();
    $(e).height() < $(window).height() && (n > t ? ($(e).addClass(o), $(".header-bottom").addClass("has-top-margin"), setTimeout(function() {
        $(e).addClass("animate-children")
    }, 150)) : t >= n && ($(e).removeClass(o), $(".header-bottom").removeClass("has-top-margin"), setTimeout(function() {
        $(e).removeClass("animate-children")
    }, 150)))
}
$(window).on("load", function() {
    $(window).width() + scrollCompensate() > 768 && $(".header-top") && (offset_top = $(".header-top").offset().top, processScroll(".header-top", "menu-fixed", offset_top), $(window).scroll(function() {
        processScroll(".header-top", "menu-fixed", offset_top)
    }))
}), $(document).ready(function() {
    $(window).on("orientationchange", function() {
        console.log(orientation)
    })
});

!
function(n) {
    var a;
    n(".navbar-burger").click(function() {
        n(this).toggleClass("is-active"),
        n(".navbar-main .navbar-start").toggleClass("is-active"),
        n(".navbar-main .navbar-end").toggleClass("is-active")
    }),
    document.getElementsByClassName("post-toc") && n(".post-toc a").toArray().forEach(function(t) {
        var a = t.innerText;
        console.log(a),
        a = (a = unescape(a.replace(/\\u/g, "%u"))).replace(/&#(x)?(\w+);/g,
        function(t, a, n) {
            return String.fromCharCode(parseInt(n, a ? 16 : 10))
        }),
        t.innerText = a
    });
    var r = 0,
    e = n(".navbar-main").outerHeight();
    n(window).scroll(function(t) {
        a = !0
    }),
    // setInterval(function() {
    //     a && (function() {
    //         var t = n(this).scrollTop();
    //         if (Math.abs(r - t) <= 5) return; {
    //             var a;
    //             r < t && e < t ? (a = Math.min(t, e), n(".navbar-main").css({
    //                 "-webkit-transform": "translateY(-" + a + "px)",
    //                 "-moz-transform": "translateY(-" + a + "px)",
    //                 "-ms-transform": "translateY(-" + a + "px)",
    //                 "-o-transform": "translateY(-" + a + "px)",
    //                 transform: "translateY(-" + a + "px)"
    //             })) : t + n(window).height() < n(document).height() && n(".navbar-main").css({
    //                 "-webkit-transform": "translateY(0px)",
    //                 "-moz-transform": "translateY(0px)",
    //                 "-ms-transform": "translateY(0px)",
    //                 "-o-transform": "translateY(0px)",
    //                 transform: "translateY(0px)"
    //             })
    //         }
    //         r = t
    //     } (), a = !1)
    // },
    // 250),
    n('.article.gallery img:not(".not-gallery-item")').each(function() {
        0 === n(this).parent("a").length && (n(this).wrap('<a class="gallery-item" href="' + n(this).attr("src") + '"></a>'), this.alt && n(this).after('<div class="caption">' + this.alt + "</div>"))
    }),
    n(".article-entry").find("h1, h2, h3, h4, h5, h6").on("click",
    function() {
        n(this).get(0).id && (window.location.hash = n(this).get(0).id)
    }),
    "function" == typeof moment && n(".article-meta time").each(function() {
        n(this).text(moment(n(this).attr("datetime")).fromNow())
    })
} (jQuery);
(function ($) {
    $(".navbar-burger").click(function () {
        $(this).toggleClass("is-active");
        $(".navbar-main .navbar-start").toggleClass("is-active");
        $(".navbar-main .navbar-end").toggleClass("is-active");
    });

    // change nav and totop button when scroll down
    function hasScrolled() {
        if (window.scrollY > 30) {
            // scroll Down
            $(".navbar-main").addClass("scroll");
            $("#totop").addClass("scroll");
        } else {
            // scroll in the top
            $(".navbar-main").removeClass("scroll");
            $("#totop").removeClass("scroll");
        }
    }
    window.addEventListener("scroll", hasScrolled);

    $('.article.gallery img:not(".not-gallery-item")').each(function () {
        // wrap images with link and add caption if possible
        if ($(this).parent("a").length === 0) {
            $(this).wrap(
                '<a class="gallery-item" href="' +
                    $(this).attr("src") +
                    '"></a>'
            );
            if (this.alt) {
                $(this).after('<div class="caption">' + this.alt + "</div>");
            }
        }
    });
    $(".article-entry")
        .find("h1, h2, h3, h4, h5, h6")
        .on("click", function () {
            if ($(this).get(0).id) {
                window.location.hash = $(this).get(0).id;
            }
        });

    if (typeof moment === "function") {
        $(".article-meta time").each(function () {
            $(this).text(moment($(this).attr("datetime")).format("ll")); //.fromNow());
        });
    }
    // totop button setttings
    var scrollSpeed = 500;
    $("#totop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, scrollSpeed);
    });

})(jQuery);

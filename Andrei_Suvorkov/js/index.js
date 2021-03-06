(function () {
    var section1 = $('#section1');
    var section2 = $('#section2');
    var section3 = $('#section3');
    $(window).on('scroll', function() {
        if (section1.visible(true) || $('.after_sec_1').visible(true)) {
            section1.addClass('bg-img');
            section1.addClass('bg-img1');
            section2.removeClass('bg-img');
            section2.removeClass('bg-img1');
            section3.removeClass('bg-img');
            section3.removeClass('bg-img1');
        }
        if (section2.visible(true) || $('.before_sec_2').visible(true) || $('.after_sec_2').visible(true)) {
            section2.addClass('bg-img');
            section2.addClass('bg-img2');
            section1.removeClass('bg-img');
            section1.removeClass('bg-img1');
            section3.removeClass('bg-img');
            section3.removeClass('bg-img3');
        }
        if (section3.visible(true) || $('.before_sec_3').visible(true)) {
            section3.addClass('bg-img');
            section3.addClass('bg-img3');
            section1.removeClass('bg-img');
            section1.removeClass('bg-img1');
            section2.removeClass('bg-img');
            section2.removeClass('bg-img2');
        }
    });

    /* Main container nav menu and text appearance */
    $(document).ready(function(){
        setTimeout ("$('#main_text').fadeIn('slow');", 1000);
        setTimeout ("$ ('#main_picture div.animated').css ('display', 'block');", 2000);
        setTimeout("$('#main_picture div.animated').addClass('fadeInDown');", 2000);
        if (window.innerWidth < 992) {
            setTimeout ("$ ('.slogan').css ('padding-top', 200);", 2000);
        }

    });

    /* Hamburger button controller */
    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }
    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
            $(document).ready(function () {
                var leftShouldBe = $( document ).width() - 350;
                $ ("#hamburger_collapse").css ("left", leftShouldBe);
            });
        });
    }

    /* portfolio projects animation */
    $('.project_wrapper_1').hide();
    $('.project_1').hover(function() {
        $('.project_wrapper_1').toggle();
    });
    $('.project_wrapper_2').hide();
    $('.project_2').hover(function() {
        $('.project_wrapper_2').toggle();
    });
    $('.project_wrapper_3').hide();
    $('.project_3').hover(function() {
        $('.project_wrapper_3').toggle();
    });

    /* blog posts animation */
    $('.blog_wrapper_1').hide();
    $('.blog_1').hover(function() {
        $('.blog_wrapper_1').toggle();
    });
    $('.blog_wrapper_2').hide();
    $('.blog_2').hover(function() {
        $('.blog_wrapper_2').toggle();
    });
    $('.blog_wrapper_3').hide();
    $('.blog_3').hover(function() {
        $('.blog_wrapper_3').toggle();
    });

    /* about popup carousel */
    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title');
                }
            }
        });
    });

})();





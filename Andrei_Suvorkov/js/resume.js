(function () {
    window.onload = function() {

        // Alternate Background Page with scrolling content (Bg Pages are odd#s)
        var $bgImg = $('.bg-img');
        var $nav = $('nav');
        var winw = window.innerWidth;
        var winh = window.innerHeight;
        var page1Bottom;
        var page3Top;
        var page3Bottom;
        var page5Top;
        var page5Bottom;
        if (winw < 768){
            console.log("1");
            page1Bottom = winh;
            page3Top = winh * 1.5;
            page3Bottom = winh * 5.8;
            page5Top = winh * 5.85;
            page5Bottom = winh * 6;
        } else {
            if (winw > 768 && winw < 1200){
                console.log("2");
                page1Bottom = winh;
                page3Top = winh * 1.5;
                page3Bottom = winh * 4;
                page5Top = winh * 4;
                page5Bottom = winh * 6;
            } else {
                console.log("3");
                page1Bottom = winh;
                page3Top = winh;
                page3Bottom = winh * 4;
                page5Top = winh * 4;
                page5Bottom = winh * 6;
            }
        }
        var scrollPos = 0;
        var page = 1;

        $(window).on('scroll', function() {

            scrollPos = Number($(window).scrollTop().toFixed(2));
            page = Math.floor(Number(scrollPos / winh) +1);
            if (scrollPos >= 0 && scrollPos < page1Bottom ) {
                if (! $bgImg.hasClass('bg-img1')) {

                    removeBg( $bgImg, 2, 3, 1 ); // element, low, high, current
                    $bgImg.addClass('bg-img1');
                }
            } else if (scrollPos >= page3Top && scrollPos <= page3Bottom) {
                if (! $bgImg.hasClass('bg-img2')) {

                    removeBg( $bgImg, 1, 3, 2 ); // element, low, high, current
                    $bgImg.addClass('bg-img2');
                }
            } else if (scrollPos >= page5Top && scrollPos <= page5Bottom) {
                if (! $bgImg.hasClass('bg-img3')) {

                    removeBg( $bgImg, 1, 2, 3 ); // element, low, high, current
                    $bgImg.addClass('bg-img3');
                }
            }
            $nav.html("Page# " + page + " window position: " + scrollPos);

        });
    }

// This function was created to fix a problem where the mouse moves off the
// screen, this results in improper removal of background image class. Fix
// by removing any background class not applicable to current page.
    function removeBg( el, low, high, current ) {
        if (low > high || low <= 0 || high <= 0) {
            console.log ("bad low/high parameters in removeBg");
        }
        for (var i=low; i<=high; i++) {
            if ( i != current ) { // avoid removing class we are trying to add
                if (el.hasClass('bg-img' +i )) {
                    el.removeClass('bg-img' +i );
                }
            }
        }
    } // removeBg()

    /* Main container nav menu and text appearance */
    $(document).ready(function(){
        setTimeout ("$('#main_text').fadeIn('slow');", 1000);
        setTimeout ("$ ('#download').css ('display', 'block');", 1500);
        if (window.innerWidth > 992) {
            setTimeout("$('#download').addClass('flipInY');", 1500);
        }
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

    /* featured skills stars animation */
    var speed = 300;
    $('#skills_1 .container_text').hover(function(){
        $(this).find(".fa").stop().animate({padding:3},speed);
    },function(){
        $(this).find(".fa").stop().animate({padding:0},speed);
    })
    $('#skills_2 .container_text').hover(function(){
        $(this).find(".fa").stop().animate({padding:3},speed);
    },function(){
        $(this).find(".fa").stop().animate({padding:0},speed);
    })

})();





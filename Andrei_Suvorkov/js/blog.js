(function () {
    var section1 = $('#section1');
    var section2 = $('#section2');
    $(window).on('scroll', function() {
        if (section1.visible(true)) {
            section1.addClass('bg-img');
            section1.addClass('bg-img1');
            section2.removeClass('bg-img');
            section2.removeClass('bg-img1');
        }
        if (section2.visible(true)) {
            section2.addClass('bg-img');
            section2.addClass('bg-img2');
            section1.removeClass('bg-img');
            section1.removeClass('bg-img1');
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
    /* portfolio projects animation */
    $('.project_wrapper').hide();
    $('.project').hover(function() {
        $(this).find('.project_wrapper').toggle();
    });
})();

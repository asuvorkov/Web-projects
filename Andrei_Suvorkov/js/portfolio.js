(function () {
    /* Main container nav menu and text appearance */
    $(document).ready(function(){
        setTimeout ("$('#main_text').fadeIn('slow');", 1500);
        setTimeout ("$ ('#main_picture div.animated').css ('display', 'block');", 2500);
        setTimeout("$('#main_picture div.animated').addClass('fadeInDown');", 2500);
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
    $('.project_wrapper_4').hide();
    $('.project_4').hover(function() {
        $('.project_wrapper_4').toggle();
    });
    $('.project_wrapper_5').hide();
    $('.project_5').hover(function() {
        $('.project_wrapper_5').toggle();
    });
    $('.project_wrapper_6').hide();
    $('.project_6').hover(function() {
        $('.project_wrapper_6').toggle();
    });
    $('.project_wrapper_7').hide();
    $('.project_7').hover(function() {
        $('.project_wrapper_7').toggle();
    });
    $('.project_wrapper_8').hide();
    $('.project_8').hover(function() {
        $('.project_wrapper_8').toggle();
    });
    $('.project_wrapper_9').hide();
    $('.project_9').hover(function() {
        $('.project_wrapper_9').toggle();
    });

})();
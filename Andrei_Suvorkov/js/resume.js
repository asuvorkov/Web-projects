(function () {
    /* Main container nav menu and text appearance */
    $(document).ready(function(){
        setTimeout ("$('#main_text').fadeIn('slow');", 1500);
        setTimeout ("$ ('#download').css ('display', 'block');", 2000);
        setTimeout("$('#download').addClass('flipInY');", 2000);
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





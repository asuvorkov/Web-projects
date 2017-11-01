(function () {
    /* Main container nav menu and text appearance */
    $(document).ready(function(){
        setTimeout ("$('#main_text').fadeIn('slow');", 1000);
        setTimeout ("$ ('#main_picture div.animated').css ('display', 'block');", 2000);
        setTimeout("$('#main_picture div.animated').addClass('fadeInDown');", 2000);
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

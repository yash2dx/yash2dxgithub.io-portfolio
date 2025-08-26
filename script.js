$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    // smooth scroll on menu items
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation
    var typed = new Typed(".typing", {
        strings: ["a Front End Developer", "an Applied AI Engineer", "a Full Stack Developer","a Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["a Front End Developer", "an Applied AI Engineer", "a Full Stack Developer","a Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{ items: 1, nav: false },
            600:{ items: 2, nav: false },
            1000:{ items: 3, nav: false }
        }
    });

    // 🔗 LinkedIn click functionality for mentor cards
    (function () {
        const $cards = $('.teams .carousel .card');
        let dragged = false;

        // detect dragging so clicks don’t fire accidentally
        $('.carousel').on('drag.owl.carousel', function () { dragged = true; });
        $('.carousel').on('dragged.owl.carousel', function () {
            setTimeout(() => (dragged = false), 0);
        });

        // open LinkedIn on click
        $cards.on('click', function () {
            if (dragged) return;
            const url = $(this).data('linkedin');
            if (url) window.open(url, '_blank', 'noopener');
        });

        // also open with keyboard (Enter / Space)
        $cards.on('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const url = $(this).data('linkedin');
                if (url) window.open(url, '_blank', 'noopener');
            }
        });
    })();
});

$('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                autoplay: true,
                autoplaySpeed: 1000,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// navbar

let menub = document.querySelector(".menubar");
let navbar = document.querySelector(".navbar-items");

menub.addEventListener("click", function () {
    navbar.classList.toggle("show");
})

// slick dots

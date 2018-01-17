$(document).ready(function () {

    $('.sl-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    

});

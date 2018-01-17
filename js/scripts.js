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
    

    
    
    $('.slider-advisors').slick({
        slidesToShow: 4,
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
    
    
    
    $(".timeline-period").click(function(){
        $(".timeline-period").removeClass('active');
        $(this).addClass('active');
        
        
        if($(this).index()){
            $('.body-sec-time-line .left-side').removeClass('active for-w-1');
            $('.body-sec-time-line .right-side').addClass('active for-w-1');
        }
        else{
            $('.body-sec-time-line .right-side').removeClass('active for-w-1');
            $('.body-sec-time-line .left-side').addClass('active for-w-1');
        }
        
    });
    
    
       $('.new-slider-3').slick({
        slidesToShow: 3,
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

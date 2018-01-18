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
            $('.spr-t').removeClass('active');
            $('.sum-t').addClass('active');
        }
        else{
            $('.body-sec-time-line .right-side').removeClass('active for-w-1');
            $('.body-sec-time-line .left-side').addClass('active for-w-1');
            $('.sum-t').removeClass('active');
            $('.spr-t').addClass('active');
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
    
    
    
    $('.uniq-class').click(function(){
        $(".uniq-class").removeClass('active');
        $(this).addClass('active');
        
        if($(this).index()){
            $('.sl-2').slick('slickGoTo',$(this).index()+1);
        }
        else{
            $('.sl-2').slick('slickGoTo',$(this).index());
        }
        
    });
    
    $('.sl-2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".uniq-class").removeClass('active');
        $(".uniq-class").eq(nextSlide).addClass('active')
    });
    
});

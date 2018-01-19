$(document).ready(function () {

    $('.sl-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows:false,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    adaptiveHeight: true
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
                breakpoint: 1200,
                settings: {
                   slidesToShow: 3
                }
            },
             {
                breakpoint: 992,
                settings: {
                   slidesToShow: 2
                }
            },
             {
                breakpoint: 768,
                settings: {
                   slidesToShow: 1
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
                breakpoint: 1321,
                settings: {
                   slidesToShow: 2
                }
            },
            
             {
                breakpoint: 992,
                settings: {
                   slidesToShow: 1
                }
            },
            
             {
                breakpoint: 768,
                settings: {
                     slidesToShow: 1,
                   adaptiveHeight: true,
                    arrows:false,
                    dots:true
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
    
    
    
    var win = $(window);
    var scrFunc = function () {
        var t = win.scrollTop(),
            e = win.height();
        $("[data-anim], .max-w-770, .advisors, .flex-one, .new-slider-3").each(function (n, i) {
            var r = $(i).offset().top,
                s = t + .9 * e;
            s > r ? $(i).attr("data-anim", "true") : true;

        })
    }
    scrFunc();
    
    
    
   
     $(window).scroll(function () {
        scrFunc();
        if ($(window).scrollTop() >= $(".sec-lvl-1").height()) {
            $(".fixed-menu").addClass("js-fixed");
        }
        else{
            $(".fixed-menu").removeClass("js-fixed");
        }
    });
    
     if ($(window).scrollTop() >= $(".sec-lvl-1").height()) {
        $(".fixed-menu").addClass("js-fixed");
    }
    else{
        $(".fixed-menu").removeClass("js-fixed");
    }
    
    
    
    $('.menu li a').click(function (e) {
        e.preventDefault;
        if ($(this).attr('href')) {
            var el = $(this).attr('href');
            $('body, html').animate({
                scrollTop: $(el).offset().top - 71
            }, 700);
            return false;
        }
    });
    
    
    var flag_change = true;
    
    
    $('.flag-vr').click(function(){
        if(flag_change){
            $(".dropdown-wrch").slideDown(0);
            flag_change = false;
        }
        else{
            $(".dropdown-wrch").slideUp(0);
            flag_change = true;
        }
        
    });
    
    
    
    
    
    
    
});

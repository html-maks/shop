$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $(document).ready(function(){
        $('.slider').slick({
            arrows:false,
            dots:false,
            slidesToShow:1,
            autoplay:true,
            speed:1000,
            autoplaySpeed:2000,
            fade: true,
            responsive:[
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow:1
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow:1
                    }
                }
            ]
        });
    });

    $(document).ready(function(){
        $('.slider1').slick({
            arrows:true,
            dots:false,
            slidesToShow:4,
            speed:500,
            autoplaySpeed:2000,
            responsive:[
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow:1
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow:1
                    }
                }
            ]
        });
    });
    
    
});


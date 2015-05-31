$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay:true,
    autoplaySpeed: 500,
    onAfterChange:function(slickSlider,i){

        $('.slider-nav .slick-slide').removeClass('slick-active');

        $('.slider-nav .slick-slide').eq(i).addClass('slick-active');
    }

});
/*$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true/!*,
     focusOnSelect: true*!/
});*/
//set active class to first slide
$('.slider-nav .slick-slide').eq(0).addClass('slick-active');
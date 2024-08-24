$(document).on('ready', function() {


$('.hero').slick({
    dots: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

$('.barista-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true
});






}); 
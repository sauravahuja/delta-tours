import "../styles/style.css";

if(module.hot){
    module.hot.accept();
}
//TESTING
console.log("Hello world");

$(document).ready(function(){
    $('#hero-slider').owlCarousel({
       autoplay: 'true',
        items: 1,
        loop: 'true',
        smartSpeed: 500,
        dots: 'false'
    })
});

$(document).ready(function(){
    $('#testimonial-wrapper').owlCarousel({
       autoplay: 'true',
        items: 3,
        loop: 'true',
        smartSpeed: 500,
        dots: 'false',
        responsive:{
            0:{
                items: 1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});

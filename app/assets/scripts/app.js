import "../styles/style.css";

if(module.hot){
    module.hot.accept();
}
//TESTING
console.log("Hello world");

$(document).ready(function(){
    $('#hero-slider').owlCarousel({
//        autoplay: 'true',
        items: 1,
        loop: 'true',
        smartSpeed: 500,
        dots: 'false'
    })
});
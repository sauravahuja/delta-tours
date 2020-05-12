import "../styles/style.css";

if (module.hot) {
    module.hot.accept();
}
//TESTING
console.log("Hello world");

$(document).ready(function() {
    $('#hero-slider').owlCarousel({
        autoplay: 'true',
        items: 1,
        loop: 'true',
        smartSpeed: 500,
        dots: 'false'
    })
});

$(document).ready(function() {
    $('#testimonial-wrapper').owlCarousel({
        autoplay: 'true',
        items: 1,
        loop: 'true',
        smartSpeed: 500,
        dots: 'false',
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});

$(document.addEventListener("scroll", function() {
    const navbar = document.getElementById('navigation-bar');
    if (scrollY > '200') {
        navbar.classList.add('nav-on-scroll');
    } else {
        navbar.classList.remove('nav-on-scroll');
    }

}));

$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});



const ham = document.querySelector(".ham-burger");
const nav = document.querySelector(".mobile-nav");
ham.addEventListener('click', function() {
    console.log(nav);
    nav.classList.toggle("mobile-nav-list");
})
$(document).ready(function() {
    const bar = document.querySelector('.bar');
    bar.addEventListener('click', function() {
        bar.classList.toggle('bar-close');
    });
});
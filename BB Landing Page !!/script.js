document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animations to images
document.querySelectorAll('img').forEach(image => {
    image.addEventListener('load', function() {
        this.classList.add('fade-in');
    });
});

// Add tap animation on mobile devices
document.addEventListener('touchstart', function(event) {
    event.target.classList.add('tap');
    setTimeout(function() {
        event.target.classList.remove('tap');
    }, 500);
});
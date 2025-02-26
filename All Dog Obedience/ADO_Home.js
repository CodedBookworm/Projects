let currentSlide = 0;
const slide = document.querySelectorAll('.slide');  // selecting all slide elements

function showSlide(index) {
    slide.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slide.length;  // fixed the typo here
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);  // this will automatically move to the next slide every 5 seconds

showSlide(currentSlide);  // show the initial slide



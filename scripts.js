// script.js

window.addEventListener('scroll', function () {
    const image = document.querySelector('.scroll-image');
    let scrollPosition = window.scrollY;
    image.style.transform = `translateX(${scrollPosition * 0.5}px)`; // Adjust multiplier for more/less movement
});
html {
    scroll-behavior: smooth;
}


document.addEventListener('scroll', () => {
    if (window.scrollY != 0) {
        document.querySelector('nav').classList.add('scrolled');
    }
    else {
        document.querySelector('nav').classList.remove('scrolled');
    }
});

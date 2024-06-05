let header_mobile = document.querySelector('.header_mobile'),
    menu_close = document.querySelector('.menu_close'),
    hamburger = document.querySelector('.hamburger'),
    overlay = document.querySelector('.overlay'),
    body = document.body;

hamburger.addEventListener('click', function () {
    header_mobile.classList.remove('-left-full');
    header_mobile.classList.add('left-0');
    overlay.classList.add('active');
    body.style.overflow = 'hidden';
    body.classList.add('h-screen');
});

menu_close.addEventListener('click', function () {
    header_mobile.classList.remove('left-0');
    header_mobile.classList.add('-left-full');
    overlay.classList.remove('active');
    body.style.overflow = 'auto';
    body.classList.remove('h-screen');
});

overlay.addEventListener('click', function () {
    header_mobile.classList.remove('left-0');
    header_mobile.classList.add('-left-full');
    overlay.classList.remove('active');
    body.style.overflow = 'auto';
    body.classList.remove('h-screen');
});

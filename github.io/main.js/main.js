const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
    navLink.addEventListener('mouseenter', function () {
        navLink.style.color = '#ff0000';
    });

    navLink.addEventListener('mouseleave', function () {
        navLink.style.color = '#fff';
    });
});

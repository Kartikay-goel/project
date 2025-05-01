const nav1Icon = document.getElementById('nav1-icon');
const sideMenu = document.getElementById('side-menu');
const closeMenuIcon = document.getElementById('close-menu-icon');
const body = document.querySelector('body');

nav1Icon.addEventListener('click', () => {
    sideMenu.classList.add('menu-active');
    nav1Icon.classList.toggle('change');
    body.classList.add('overflow-hidden');
});

closeMenuIcon.addEventListener('click', () => {
    sideMenu.classList.remove('menu-active');
    nav1Icon.classList.remove('change');
    body.classList.remove('overflow-hidden');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !nav1Icon.contains(event.target) && sideMenu.classList.contains('menu-active')) {
        sideMenu.classList.remove('menu-active');
        nav1Icon.classList.remove('change');
        body.classList.remove('overflow-hidden');
    }
});
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const desktopNav = document.querySelector('.desktop-nav');

mobileMenuIcon.addEventListener('click', () => {
    desktopNav.classList.toggle('active');
});


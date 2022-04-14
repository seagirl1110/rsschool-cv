// hamburger-menu    
const menu = document.querySelector('.hamburger-menu');

menu.addEventListener('click', function () {
    this.classList.toggle('hamburger-menu--open');
})
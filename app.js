const menu = document.querySelector('.menu-toggle')
const menuLinks = document.querySelector(".navbar__menu")
menu.addEventListener('click', function(){
    menuLinks.classList.toggle('navbar__menu--active')
    menu.classList.toggle('menu-toggle--active')


})
const btn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu')

btn.addEventListener('click', function() {
    menu.classList.toggle('menu--open')
})
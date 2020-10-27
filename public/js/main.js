const toggle = document.getElementById('toggle')
const close = document.getElementById('close')
const nav = document.getElementById('nav')

const menuIcon = document.getElementById('menu-icon')

//Toggle my nav.
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("menu-icon--close-x")
    nav.classList.toggle('isVisible')
})
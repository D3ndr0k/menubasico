const menubtn = document.querySelector('.menubtn')
const nav = document.querySelector('.nav-links')
const menu = document.querySelector('.nav')
const cerrar = document.querySelector('.cerrar')



menubtn.addEventListener('click', ()=> {

    nav.classList.toggle('activo')
    menu.classList.toggle('activo')
    cerrar.classList.toggle('activo')

})

cerrar.addEventListener('click', ()=> {

    nav.classList.toggle('activo')
    menu.classList.toggle('activo')
    cerrar.classList.toggle('activo')

})


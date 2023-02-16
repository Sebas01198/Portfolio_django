
//Desplegar el modal del navbar y cerrarlo
const menuBtn = document.querySelector('.header-icons__menu');
const modalNavbar = document.querySelector('.navbar-modal');
const closeModalBtn = document.querySelector('.navbar-modal__icon');

menuBtn.addEventListener('click',()=>{
    modalNavbar.style.display = 'block';
});

closeModalBtn.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
})
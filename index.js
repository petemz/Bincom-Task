const toggleOpen = document.querySelector('.toggle-open');
const toggleClose = document.querySelector('.toggle-close');
const navLinks = document.querySelectorAll('.dropdown-link');
const navList = document.querySelector('.dropdown');

toggleOpen.addEventListener('click', () => {
    navList.classList.toggle('active');
});
    
toggleClose.addEventListener('click', () => {
    navList.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.toggle('active');
    })
})

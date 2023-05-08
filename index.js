/*const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

const isOpen = false

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    isOpen = !isOpen;
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        isOpen = !isOpen;
    })
})

function myFunction() {
    const navToggle = document.querySelector('.nav-toggle');

    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
        isOpen = !isOpen;
    });

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }*/

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

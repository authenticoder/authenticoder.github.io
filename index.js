
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');
const links = document.querySelectorAll('nav ul li');


function activateNav() {
    burger.addEventListener('click', function() {

        nav.classList.toggle('active');

        links.forEach(link => {
            if(link.style.animation) {
                link.style.animation = '';
            }
            link.style.animation = `navLinkFade 0.5s ease forwards`;
        })

        burger.classList.toggle('close');
    });
}

activateNav();

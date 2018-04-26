// Função executada quando clica no ícone de barras (responsividade)
document.getElementById('responsiveBars').addEventListener('click', function () {
    let nav = document.getElementsByClassName('nav-list')[0];
    let logo = document.getElementsByClassName('nav-logo')[0];
    if (nav.style.display == '') {
        nav.style.display = 'flex';
        logo.style.display = 'none';
    } else {
        nav.style.display = '';
        logo.style.display = '';
    }
});

// Botões da galeria
function galleryBtn(direction) {
    let active = document.querySelector('#workplaceImgs img.active');
    active.classList.remove('active');

    if (direction == 'next'){
        if (active.nextElementSibling != null)
            active.nextElementSibling.classList.add('active');
        else
            active.parentElement.firstElementChild.classList.add('active');
    }
    else { // Então 'prev'
        if (active.previousElementSibling != null)
            active.previousElementSibling.classList.add('active');
        else
            active.parentElement.lastElementChild.classList.add('active');
    }

}

// Quando clica em uma âncora ele dá um efeito suave para o scroll da página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Salva a navbar (header)
let myNav = document.getElementsByClassName('navbar-sticky')[0];
// Salva a altura da section #mainBanner
let bannerOff = document.getElementById('mainBanner').offsetHeight;

window.onscroll = function () {
    "use strict";
    // Quando o usuário rola a página até o #mainBanner ele muda a cor da navbar
    if (document.documentElement.scrollTop >= bannerOff ) {
        myNav.classList.add("navbar-bg-solid");
        myNav.classList.remove("navbar-bg-transp");
    }
    else {
        myNav.classList.add("navbar-bg-transp");
        myNav.classList.remove("navbar-bg-solid");
    }
};

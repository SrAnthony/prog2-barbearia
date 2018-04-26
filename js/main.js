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

document.getElementById('galleryPrev').addEventListener('click', function () {
    let active = document.querySelector('#workplaceImgs img.active');
    active.classList.remove('active');

    if (active.previousElementSibling != null)
        active.previousElementSibling.classList.add('active');
    else
        active.parentElement.lastElementChild.classList.add('active');
});

document.getElementById('galleryNext').addEventListener('click', function () {
    let active = document.querySelector('#workplaceImgs img.active');
    active.classList.remove('active');

    if (active.nextElementSibling != null)
        active.nextElementSibling.classList.add('active');
    else
        active.parentElement.firstElementChild.classList.add('active');
});

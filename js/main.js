// Função executada quando clica no ícone de barras (responsividade)
document.getElementById('responsiveBars').addEventListener("click", function () {
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

document.getElementById('imgT').addEventListener("click", function () {
    if (this.dataset.zoomed == '0'){
        this.style.position = 'absolute';
        this.style.top = '1675px';
        this.style.left = '14%'
        this.style.width = '1000px';
        this.dataset.zoomed = '1';
    }
    else {
        this.style.position = '';
        this.style.top = '';
        this.style.left = ''
        this.style.width = '';
        this.dataset.zoomed = '0';
    }
});

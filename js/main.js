// Função executada quando clica no ícone de barras (responsividade)
document.getElementById('responsiveBars').addEventListener("click", function() {
    let nav = document.getElementsByClassName('nav-list')[0];
    let logo = document.getElementsByClassName('nav-logo')[0];
    if(nav.style.display == ''){
        nav.style.display = 'flex';
        logo.style.display = 'none';
    }
    else{
        nav.style.display = '';
        logo.style.display = '';
    }
});

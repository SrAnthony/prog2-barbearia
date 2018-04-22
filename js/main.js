// Função executada quando clica no ícone de barras (responsividade)
document.getElementById('responsiveBars').addEventListener("click", function() {
    let nav = document.getElementsByClassName('nav-list')[0];
    if(nav.style.display == '')
        nav.style.display = 'flex';
    else
        nav.style.display = '';
});

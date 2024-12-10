const head = document.getElementById('head');
const body = document.getElementById('body');

const favicon = "<link rel='shortcut icon' href='assets/img/favicon_io/favicon.ico' type='image/x-icon'>"
head.innerHTML += favicon;


const header = document.createElement('header');
header.innerHTML +=

"<a href='index.html'><img id='logo-header' src='/assets/img/logo.png' alt='logo'></a>" +
"<div id='navbar'>" +
    "<a class='navbar-items navitems-header' href='>COMPRAR</a>" +
    "<a class='navbar-items navitems-header' href='>ALUGAR</a>" +
    "<a class='navbar-items navitems-header' href='>VENDER</a>" +
    "<a class='navbar-items navitems-header' href='>SOBRE NÓS</a>" +
    "<a class='navbar-items navitems-header' href='assets/html/contato.html'>CONTATO</a>" +
    "<i class='bi bi-list'></i>" +
"</div>";










const hamburguerIcon = document.getElementsByClassName('bi-list')[0];
const sidebar = document.getElementById('sidebar');

hamburguerIcon.addEventListener('click', () => {
    if(sidebar.style.display == 'none') {
        sidebar.style.display = 'flex'
    } else {
        sidebar.style.display = 'none'
    }
})
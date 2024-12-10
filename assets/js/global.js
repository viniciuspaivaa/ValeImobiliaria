const head = document.getElementById('head');
const body = document.getElementById('body');

const globalCss = "<link rel='stylesheet' href='/assets/css/global.css'>";
head.innerHTML += globalCss;

const favicon = "<link rel='shortcut icon' href='/assets/img/favicon_io/favicon.ico' type='image/x-icon'>"
head.innerHTML += favicon;

const bootstrapIcons = "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'>";
head.innerHTML += bootstrapIcons;

const header = document.createElement('header');
header.setAttribute('id', 'header');

header.innerHTML +=
"<a href='/index.html'><img id='logo-header' src='/assets/img/logo.png' alt='logo'></a>" +
"<div id='navbar'>" +
    "<a class='navbar-items navitems-header' href=''>COMPRAR</a>" +
    "<a class='navbar-items navitems-header' href=''>ALUGAR</a>" +
    "<a class='navbar-items navitems-header' href=''>VENDER</a>" +
    "<a class='navbar-items navitems-header' href=''>SOBRE NÓS</a>" +
    "<a class='navbar-items navitems-header' href='/assets/html/contato.html'>CONTATO</a>" +
    "<i class='bi bi-list'></i>" +
"</div>";
body.prepend(header);

const sidebarContent = document.createElement('div');
sidebarContent.setAttribute('id', 'sidebar');
sidebarContent.setAttribute('style', 'display: none;');

sidebarContent.innerHTML =
    "<a class='navbar-items' href='''>COMPRAR</a>" +
    "<a class='navbar-items' href=''>ALUGAR</a>" +
    "<a class='navbar-items' href=''>VENDER</a>" +
    "<a class='navbar-items' href=''>SOBRE NÓS</a>" +
    "<a class='navbar-items' href='/assets/html/contato.html'>CONTATO</a>";
body.prepend(sidebarContent);

const sidebar = document.getElementById('sidebar');
const hamburguerIcon = document.getElementsByClassName('bi-list')[0];

hamburguerIcon.addEventListener('click', () => {
    sidebar.style.display = sidebar.style.display == 'none' ? 'flex' : 'none';
})

const footer = document.createElement('footer');
footer.setAttribute('id', 'footer');

footer.innerHTML +=
"<a href='/index.html'><img id='footer-logo' src='/assets/img/logo.png' alt='logo'></a>" +
"<p id='rights'>&copy; 2024 Vale Imobiliária. Todos os direitos reservados.</p>" +
"<div id='follow'>" +
    "<p id='follow-text'>SIGA A VALE IMOBILIÁRIA</p>" +
    "<i class='bi bi-instagram'></i>" +
"</div>";
body.appendChild(footer);

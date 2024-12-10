const head = document.getElementById('head');
const body = document.getElementById('body');

const favicon = "<link rel='shortcut icon' href='assets/img/favicon_io/favicon.ico' type='image/x-icon'>"
head.innerHTML += favicon;

const hamburguerIcon = document.getElementsByClassName('bi-list')[0];
const sidebar = document.getElementById('sidebar');

hamburguerIcon.addEventListener('click', () => {
    if(sidebar.style.display == 'none') {
        sidebar.style.display = 'flex'
    } else {
        sidebar.style.display = 'none'
    }
})
const hamburguerIcon = document.getElementsByClassName('bi-list')[0];
const sidebar = document.getElementById('sidebar');

hamburguerIcon.addEventListener('click', () => {
    if(sidebar.style.display == 'none') {
        sidebar.style.display = 'flex'
    } else {
        sidebar.style.display = 'none'
    }
})
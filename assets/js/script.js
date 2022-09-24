const navbarBtnMenu = document.getElementById('js-navbar-btn-menu');
var navbarList = document.getElementById('js-navbar-list');
navbarBtnMenu.addEventListener('click', function () {
    if(navbarList.style.display === '') {
        navbarList.style.display = 'block';
    } else {
        navbarList.style.display = '';
    }
})
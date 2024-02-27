document.addEventListener('DOMContentLoaded', function () {
    var headerBurger = document.querySelector('.headerBurger');
    var headerMenu = document.querySelector('.headerMenu');
    var headerLinks = document.querySelectorAll('.headerLink');
    var body = document.body;

    function toggleClasses() {
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        body.classList.toggle('lock');
    }

    headerBurger.addEventListener('click', function (event) {
        toggleClasses();
    });

    headerLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            toggleClasses();
        });
    });
});

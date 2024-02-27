
// При прокручивании добавляем цвет для header

var scrolled;
window.onscroll = function(){
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector(".header");

    if(scrolled > 70){
        header.style.background = "#111";
        header.style.transition = "0.4s";
    }else{
        header.style.background = "none";
        header.style.transition = "0.4s";
    }
}

// якоря

document.addEventListener('DOMContentLoaded', function () {
    var smoothScrollLinks = document.querySelectorAll('.smoothScroll');
    var headerHeight = 180;
  
    smoothScrollLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        var targetId = link.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          var offset = targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: offset - headerHeight,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
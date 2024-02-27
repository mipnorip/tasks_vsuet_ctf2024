document.addEventListener('DOMContentLoaded', function () {
  var openModalBtns = document.querySelectorAll('.openModalBtn');
  var modal = document.getElementById('modal');
  var closeModalBtn = document.getElementById('closeModalBtn');
  var newsTitle = document.getElementById('newsTitle');
  var newsDescription = document.getElementById('newsDescription');
  var newsImage = document.getElementById('newsImage');
  var newsDate = document.getElementById('newsDate');

  openModalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var newsName = btn.getAttribute('data-news');
      var description = btn.getAttribute('data-description');
      var imageSrc = btn.getAttribute('data-image');
      var date = btn.getAttribute('data-date');

      newsTitle.textContent = newsName;
      newsDescription.textContent = description;
      newsImage.src = imageSrc;
      newsDate.textContent = date;

      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});

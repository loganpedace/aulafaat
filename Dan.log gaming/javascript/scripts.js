document.addEventListener('DOMContentLoaded', () => {
  const images = document.getElementsByClassName('zoomImagem');

  Array.from(images).forEach(image => {
      image.addEventListener('mouseover', () => {
          image.classList.add('zoomed');
      });

      image.addEventListener('mouseout', () => {
          image.classList.remove('zoomed');
      });
    });
});





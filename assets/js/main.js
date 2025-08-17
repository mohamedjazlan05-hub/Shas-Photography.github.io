
function toggleMenu(){
  document.body.classList.toggle('mobile-open');
}

function openLightbox(src){
  const lb = document.querySelector('.lightbox');
  const img = lb.querySelector('img');
  img.src = src;
  lb.classList.add('open');
}
function closeLightbox(e){
  if(e.target.classList.contains('lightbox')){
    e.target.classList.remove('open');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
});

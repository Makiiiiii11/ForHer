const btn = document.querySelector('.continue-btn');
const video = document.querySelector('.video');
const message1 = document.querySelector('.message1');
const message2 = document.querySelector('.message2');
const tagline = document.querySelector('.tagline');

btn.addEventListener('click', () => {
  video.classList.add('visible');
  message1.classList.add('visible');
  message2.classList.add('visible');
  tagline.classList.add('visible');
  video.scrollIntoView({ behavior: 'smooth', block: 'center' });
  btn.disabled = true;
  btn.textContent = 'Take your time po mwuuaaahhhh';
});
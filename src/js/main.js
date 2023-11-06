const html = document.getElementById('html');
const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', () => {
  html.classList.toggle('light');
});

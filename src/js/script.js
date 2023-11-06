const html = document.documentElement; // Acessa o elemento <html>
const switchButton = document.getElementById('switch');

const toggleImage = () => {
  const image = document.getElementById('image');

  if (html.classList.contains('light')) {
    image.src = 'assets/avatar-light.png';
  } else {
    image.src = 'assets/avatar.png';
  }
};

switchButton.addEventListener('click', () => {
  html.classList.toggle('light');

  toggleImage();
});

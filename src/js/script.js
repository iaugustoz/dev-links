const html = document.documentElement; // Acessa o elemento <html>
const switchButton = document.getElementById('switch');

// Arrow Function que realiza a troca da imagem
const toggleImage = () => {
  const image = document.querySelector('#profile img');

  if (html.classList.contains('light')) {
    image.src = 'assets/avatar-light.png';
    image.alt =
      'Foto de Igor Augusto sorrindo e camisa vermelha, cavanhaque e fundo gradiente (do azul para o roxo).';
  } else {
    image.src = 'assets/avatar.png';
    image.alt =
      'Foto de Igor Augusto sorrindo e camisa vermelha, cavanhaque e fundo laranja.';
  }
};

switchButton.addEventListener('click', () => {
  html.classList.toggle('light');

  toggleImage();
});

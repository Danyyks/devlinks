function toggleMode() {
  const html = document.documentElement;
  //if (html.classList.contains("light")) {
  //html.classList.remove("light");
  // } else {
  //html.classList.add("light");
  // }

  // toda essa função pode ser feita dessa forma mais simples:
  html.classList.toggle("light");

  //pegar a tag img
  const img = document.querySelector("#profile img");

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.jpeg");
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.jpg");
  }

  //substituir o alt da imagem
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "foto de perfil usando oculos normal e olhos abertos"
    );
  } else {
    img.setAttribute(
      "alt",
      "foto de perfil usando oculos normal e olhos fechados"
    );
  }
}

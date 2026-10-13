// Menu mobile : ouvre et ferme la liste de liens
const bouton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

bouton.addEventListener("click", function () {
  const ouvert = menu.classList.toggle("ouvert");
  bouton.setAttribute("aria-expanded", ouvert);
});

// Referme le menu après un clic sur un lien
menu.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    menu.classList.remove("ouvert");
    bouton.setAttribute("aria-expanded", "false");
  }
});
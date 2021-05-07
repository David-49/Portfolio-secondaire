/*gestion menu responsive*/

var btn = document.querySelector(".burger");
var nav = document.querySelector(".navResponsive");

// fonction qui permet de changer la classe navResponsive en navResponsive_open grace au clic sur la balise posseddant la classe burger
btn.onclick = function () {
  nav.classList.toggle("navResponsive_open");
};

//rajoute la class active à la div burger permettant de faire l'animation du outon burger
var burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});

//ferme le burger quand on ckick pour aller à une section de la page
var goTitreToggle = document.querySelectorAll(".goTitreToggle");

goTitreToggle.forEach((title) => {
  title.addEventListener("click", () => {
    nav.classList.toggle("navResponsive_open");
    burger.classList.toggle("active");
  });
});

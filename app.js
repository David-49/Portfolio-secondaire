const toggleSwitch = document.querySelector("#checkbox");

const labelBtn = document.querySelector("#label-btn");

const urlPage = window.location.href;
const urlStatus = urlPage.substring(urlPage.lastIndexOf("/") + 1);

if (urlStatus === "") {
  const illustrationDev = document.querySelector("#illustration-dev");
  function switchTheme(e) {
    if (e.target.checked) {
      labelBtn.textContent = "🌑";
      document.documentElement.setAttribute("data-theme", "light");
      illustrationDev.src =
        "../img/illustration/illustration-accueil-light-theme.svg";
      localStorage.setItem("label", "🌑");

      localStorage.setItem("theme", "light");
      localStorage.setItem(
        "src",
        "../img/illustration/illustration-accueil-light-theme.svg"
      );
    } else {
      labelBtn.textContent = "🌞";
      document.documentElement.setAttribute("data-theme", "dark");
      illustrationDev.src =
        "../img/illustration/illustration-accueil-dark-theme.svg";
      localStorage.setItem("label", "🌞");
      localStorage.setItem("theme", "dark");
      localStorage.setItem(
        "src",
        "../img/illustration/illustration-accueil-dark-theme.svg"
      );
    }
  }
  toggleSwitch.addEventListener("change", switchTheme, false);

  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;

  const currentSrc = localStorage.getItem("src")
    ? localStorage.getItem("src")
    : null;

  const currentLabel = localStorage.getItem("label")
    ? localStorage.getItem("label")
    : null;

  if (currentTheme && currentSrc && currentLabel) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    illustrationDev.src = currentSrc;
    labelBtn.textContent = currentLabel;

    if (currentTheme === "dark") {
      toggleSwitch.checked = false;
      illustrationDev.src =
        "../img/illustration/illustration-accueil-dark-theme.svg";
    }
    if (currentTheme === "light") {
      toggleSwitch.checked = true;
    }
    if (currentTheme === "dark") {
      toggleSwitch.checked = false;
    }
  }
} else {
  function switchTheme(e) {
    if (e.target.checked) {
      labelBtn.textContent = "🌑";
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("label", "🌑");
      localStorage.setItem("theme", "light");
    } else {
      labelBtn.textContent = "🌞";
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("label", "🌞");
      localStorage.setItem("theme", "dark");
    }
  }
  toggleSwitch.addEventListener("change", switchTheme, false);

  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;

  const currentLabel = localStorage.getItem("label")
    ? localStorage.getItem("label")
    : null;

  if (currentTheme && currentLabel) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    labelBtn.textContent = currentLabel;

    if (currentTheme === "dark") {
      toggleSwitch.checked = false;
    }
    if (currentTheme === "light") {
      toggleSwitch.checked = true;
    }
  }
}

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

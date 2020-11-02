const toggleSwitch = document.querySelector("#checkbox");

const labelBtn = document.querySelector("#label-btn");

const illustrationDev = document.querySelector("#illustration-dev");
console.log(illustrationDev);

function switchTheme(e) {
  console.log(e.target.checked);
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
  }
}

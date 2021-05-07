const toggleSwitch = document.querySelector("#checkbox");

const labelBtn = document.querySelector("#label-btn");

const urlPage = window.location.href;
const urlStatus = urlPage.substring(urlPage.lastIndexOf("/") + 1);

const illustrationDev = document.querySelector("#illustration-dev");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    localStorage.setItem("label", "🌞");
    labelBtn.textContent = "🌞";
    illustrationDev.src =
      "./img/illustration/illustration-accueil-dark-theme.svg";

    localStorage.setItem(
      "src",
      "./img/illustration/illustration-accueil-dark-theme.svg"
    );
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");

    localStorage.setItem("label", "🌑");
    labelBtn.textContent = "🌑";
    illustrationDev.src =
      "./img/illustration/illustration-accueil-light-theme.svg";

    localStorage.setItem(
      "src",
      "./img/illustration/illustration-accueil-light-theme.svg"
    );
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

window.onload = checkTheme();

function checkTheme() {
  const localStorageTheme = localStorage.getItem("theme");

  if (localStorageTheme !== null && localStorageTheme === "dark") {
    document.documentElement.className = localStorageTheme;
    labelBtn.textContent = "🌞";
    illustrationDev.src =
      "./img/illustration/illustration-accueil-dark-theme.svg";

    toggleSwitch.checked = true;
  } else {
    labelBtn.textContent = "🌑";
    illustrationDev.src =
      "./img/illustration/illustration-accueil-light-theme.svg";
    toggleSwitch.checked = false;
  }
}

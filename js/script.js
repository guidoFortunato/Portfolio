const toggleTheme = document.querySelector("#toggle-theme");
const toggleIcon = document.querySelector("#toggle-icon");
const toggleText = document.querySelector("#toggle-text");
const toggleColors = document.querySelector("#toggle-colors");
const rootStyles = document.documentElement.style; //aqui tenemos todas las variables de nuestro archivo css
const textsToChange = document.querySelectorAll("[data-section]");

const flagsElement = document.getElementById("flags");

const initialValuesColors =
  JSON.parse(localStorage.getItem("colors")) || "#3182ED";
rootStyles.setProperty("--primary-color", initialValuesColors);
const initialLanguage = JSON.parse(localStorage.getItem("language")) || 'es'

const changeLanguage = async (language) => {
  try {
    const res = await fetch(`./languages/${language}.json`);
    const data = await res.json();
    for (const text of textsToChange) {
      const section = text.dataset.section;
      const value = text.dataset.value;
      text.innerHTML = data[section][value];
      text.innerHTML = data[section][value];
    }
  } catch (error) {
    console.log(error);
  }
};
changeLanguage(initialLanguage);

flagsElement.addEventListener("click", (e) => {
  localStorage.setItem('language',JSON.stringify(e.target.parentElement.dataset.language))
  changeLanguage(JSON.parse(localStorage.getItem("language")));
});

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
    toggleIcon.src = "assets/icons/moon.svg";
  } else {
    localStorage.setItem("dark-mode", "false");
    toggleIcon.src = "assets/icons/sun.svg";
  }
});

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  toggleIcon.src = "assets/icons/moon.svg";
} else {
  document.body.classList.remove("dark");
  toggleIcon.src = "assets/icons/sun.svg";
}

toggleColors.addEventListener("click", (e) => {
  if (e.target.dataset.color) {
    localStorage.setItem("colors", JSON.stringify(e.target.dataset.color));
    rootStyles.setProperty(
      "--primary-color",
      JSON.parse(localStorage.getItem("colors"))
    );
  }
});

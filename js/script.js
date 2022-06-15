const toggleTheme = document.querySelector("#toggle-theme");
const toggleIcon = document.querySelector("#toggle-icon");
const toggleText = document.querySelector("#toggle-text");
const toggleColors = document.querySelector("#toggle-colors");
// const toggleColorBlue = document.querySelector('#colors-blue')
// const toggleColorGreen = document.querySelector('#colors-green')
// const toggleColorPurple = document.querySelector('#colors-purple')
// const toggleColorSalmon = document.querySelector('#colors-salmon')
const rootStyles = document.documentElement.style; //aqui tenemos todas las variables de nuestro archivo css
const textsToChange = document.querySelectorAll("[data-section]")

const flagsElement = document.getElementById("flags");

const changeLanguage = async (language) => {
  try {
    const res = await fetch(`./languages/${language}.json`);
    const data = await res.json();
    for (const text of textsToChange) {
        const section = text.dataset.section
        const value = text.dataset.value
        // console.log(section)
        console.log(data[section][value])
        text.innerHTML = data[section][value]
        text.innerHTML = data[section][value]
    }
  } catch (error) {
    console.log(error);
  }
};


flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (toggleIcon.src.includes("moon.svg")) {
    toggleIcon.src = "assets/icons/sun.svg";
    toggleText.textContent = "Light Mode";
  } else {
    toggleIcon.src = "assets/icons/moon.svg";
    toggleText.textContent = "Dark Mode";
  }
});

toggleColors.addEventListener("click", (e) => {
  console.log(e.target.dataset.color);
  if (e.target.dataset.color) {
    rootStyles.setProperty("--primary-color", e.target.dataset.color);
  }
});
// toggleColorBlue.addEventListener('click', (e)=>{
//     rootStyles.setProperty('--primary-color', e.target.dataset.color)
// })
// toggleColorGreen.addEventListener('click', (e)=>{
//     rootStyles.setProperty('--primary-color', e.target.dataset.color)
// })
// toggleColorPurple.addEventListener('click', (e)=>{
//     rootStyles.setProperty('--primary-color', e.target.dataset.color)
// })
// toggleColorSalmon.addEventListener('click', (e)=>{
//     rootStyles.setProperty('--primary-color', e.target.dataset.color)
// })

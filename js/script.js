const toggleTheme = document.querySelector('#toggle-theme')
const toggleIcon = document.querySelector('#toggle-icon')
const toggleText = document.querySelector('#toggle-text')
const toggleColorBlue = document.querySelector('#colors-blue')
const toggleColorGreen = document.querySelector('#colors-green')
const toggleColorPurple = document.querySelector('#colors-purple')
const toggleColorOrange = document.querySelector('#colors-orange')
const rootStyles = document.documentElement.style //aqui tenemos todas las variables de nuestro archivo css

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = 'assets/icons/sun.svg'
        toggleText.textContent = 'Light Mode'
    }else{
        toggleIcon.src = 'assets/icons/moon.svg'
        toggleText.textContent = 'Dark Mode'
    }
})

toggleColorBlue.addEventListener('click', (e)=>{
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
})
toggleColorGreen.addEventListener('click', (e)=>{
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
})
toggleColorPurple.addEventListener('click', (e)=>{
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
})
toggleColorOrange.addEventListener('click', (e)=>{
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
})
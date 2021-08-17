//Hambuerguer menu
const hamburguer = document.querySelector('.hamburguer-menu');
const menu = document.querySelector('.menu');

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active');
});

//Scroll Up
btn = document.getElementById('arrow-up');
window.onscroll = function() { scrollFunction() };

function scrollFunction() {

    if (document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}


function topFunction() {
    document.documentElement.scrollTop = 0;
}
//dark-mode
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const currentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const currentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})
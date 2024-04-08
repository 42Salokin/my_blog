let themeChange = document.querySelector('.themeChange');
const container = document.querySelector('.container');
const label = document.querySelector('#label');
let mode = 'light';
console.log("test");

themeChange.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
        label.textContent = "Dark";
        themeChange.setAttribute('class', 'em em-cityscape themeChange');
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light');
        label.textContent = "Light";
        themeChange.setAttribute('class', 'em em-city_sunrise themeChange');
    }
})


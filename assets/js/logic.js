let themeChange = document.querySelector('.themeChange');
const container = document.querySelector('.container');
const label = document.querySelector('#label');
let mode = 'light';

// when the themeChange button is clicked, it changes the container class from 'light' to 'dark' and back again, which then pulls from different styles in the CSS
themeChange.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
        label.textContent = "Dark";
        // changing the class of the emoji changes it to the other emoji, and back
        themeChange.setAttribute('class', 'em em-cityscape themeChange');
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light');
        label.textContent = "Light";
        themeChange.setAttribute('class', 'em em-city_sunrise themeChange');
    }
})


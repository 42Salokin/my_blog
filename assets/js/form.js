const themeChange = document.querySelector('#themeChange');
const themeChange2 = document.querySelector('#themeChange2');
const container = document.querySelector('.container');
const label = document.querySelector('#label');
let mode = 'light';
document.getElementById(themeChange2).style.display = "none"

themeChange.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
        label.textContent = "Dark";
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light')
        label.textContent = "Light";
    }
})
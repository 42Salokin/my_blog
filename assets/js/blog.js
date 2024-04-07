const themeChange = document.querySelector('#themeChange');
const container = document.querySelector('.container')

let mode = 'light';

themeChange.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light')
    }
})
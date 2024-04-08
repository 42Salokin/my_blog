const userName = document.querySelector('#userName');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const submit = document.querySelector('#submit');

submit.addEventListener('click', function (event) {
    event.preventDefault();

    const blogEntry = {
        userName: userName.value,
        title: title.value,
        content: content.value,
    }
    localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
})
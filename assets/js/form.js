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
    if (blogEntry.userName === null) {
        document.querySelector('.message').textContent = `Please fill out each box`;
    }
    localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
    confirmMessage();
})

function confirmMessage() {
    const lastEntry = JSON.parse(localStorage.getItem('blogEntry'));
    if (lastEntry !== null) {
        document.querySelector('.message').textContent = `Entry "${lastEntry.title}" received`
        setTimeout(newPage, 2000)
    } 
}

function newPage() {
    location.assign("other page");
    const lastEntry = JSON.parse(localStorage.getItem('blogEntry'));
    if (lastEntry !== null) {
      document.getElementById('box1h2').innerHTML = blogEntry.title;
      document.getElementById('box1p').innerHTML = blogEntry.content;
      document.getElementById('box1art').innerHTML = blogEntry.userName;
    }
}
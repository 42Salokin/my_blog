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
    if ((blogEntry.userName == null || blogEntry.userName == "") || (blogEntry.title == null || blogEntry.title == "") || (blogEntry.content == null || blogEntry.content == "")) {
        document.querySelector('.message').textContent = `Please fill out each box`;
        setTimeout(function() {
            document.querySelector('.message').textContent = '';
        }, 2000)
    } else {
        localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
        confirmMessage();
    }
})


function confirmMessage() {
    const lastEntry = JSON.parse(localStorage.getItem('blogEntry'));
    console.log(lastEntry);
    if (lastEntry !== null) {
        document.querySelector('.message').textContent = `Entry "${lastEntry.title}" received`;
        setTimeout(newPage, 2000);
    } 
}

function newPage() {
    window.open("blog.html", "_self");
    userName.textContent = '';
    content.textContent = '';
    title.textContent = '';
}
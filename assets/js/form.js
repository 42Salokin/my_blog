const userName = document.querySelector('#userName');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const submit = document.querySelector('#submit');

// when submit button is clicked, it puts the three input values into an object
submit.addEventListener('click', function (event) {
    event.preventDefault();
    const blogEntry = {
        userName: userName.value,
        title: title.value,
        content: content.value,
    }    
    // if any of the input fields are empty, it displays a message which disappears after 2 seconds
    if ((blogEntry.userName == null || blogEntry.userName == "") || (blogEntry.title == null || blogEntry.title == "") || (blogEntry.content == null || blogEntry.content == "")) {
        document.querySelector('.message').textContent = `Please fill out each box`;
        setTimeout(function() {
            document.querySelector('.message').textContent = '';
        }, 2000)
    } else {
        // otherwise, it turns the object into a string and sends it to local storage
        localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
        confirmMessage();
    }
})

// then it pulls the string out of local storage, turns it back into an object, and displays a message confirming the entry with the entry title
function confirmMessage() {
    const lastEntry = JSON.parse(localStorage.getItem('blogEntry'));
    console.log(lastEntry);
    if (lastEntry !== null) {
        document.querySelector('.message').textContent = `Entry "${lastEntry.title}" received`;
        setTimeout(newPage, 2000);
    } 
}
// then it opens the second page in the same tab and clears the three input fields
function newPage() {
    window.open("blog.html", "_self");
    userName.textContent = '';
    content.textContent = '';
    title.textContent = '';
}
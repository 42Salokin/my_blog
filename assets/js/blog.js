function init() {
const lastEntry = JSON.parse(localStorage.getItem('blogEntry'));
console.log(lastEntry);
    if (lastEntry !== null) {
      document.getElementById('box1h2').innerHTML = lastEntry.title;
      document.getElementById('box1p').innerHTML = lastEntry.content;
      document.getElementById('box1art').innerHTML = lastEntry.userName;
    }
}

init();
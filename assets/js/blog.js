const back = document.querySelector('#back');

const newEntry = function() {
const lastPost = localStorage.getItem('blogEntry');
const lastEntry = JSON.parse(lastPost) || [];
console.log(lastEntry);
const main = document.querySelector('.page2');

// for (i = 0; i < lastEntry.length; i++) {
  console.log("for loop");
  let boxDiv = document.createElement('div');
  let titleH1 = document.createElement('h1');
  let contentP = document.createElement('p');
  let userH2 = document.createElement('h2');

  titleH1.textContent = lastEntry.title;
  console.log(lastEntry.title);
  contentP.textContent = lastEntry.content;
  console.log(lastEntry.content);
  userH2.textContent = lastEntry.userName;
  console.log(lastEntry.userName);

  // titleH1.textContent = lastEntry[i].title;
  // console.log(lastEntry[i].title);
  // contentP.textContent = lastEntry[i].content;
  // console.log(lastEntry[i].content);
  // userH2.textContent = lastEntry[i].userName;
  // console.log(lastEntry[i].userName);

  boxDiv.setAttribute('class', 'boxes');
  titleH1.setAttribute('class', 'title');
  contentP.setAttribute('class', 'content');
  userH2.setAttribute('class', 'user');

  main.appendChild(boxDiv);
  boxDiv.appendChild(titleH1);
  boxDiv.appendChild(contentP);
  boxDiv.appendChild(userH2);
// }
    
}

newEntry();

back.addEventListener('click', function() {
  window.open("https://42salokin.github.io/my_blog/", "_self")
})
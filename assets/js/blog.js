const main = document.querySelector('.page2');
const back = document.querySelector('#back');

function newEntry() {
const lastEntry = JSON.parse(localStorage.getItem('blogEntry'));
console.log(lastEntry);

// for(let i=0;i<lastEntry.length;i++){
  // console.log("for loop");
  const boxDiv = document.createElement('div');
  const titleH1 = document.createElement('h1');
  const contentP = document.createElement('p');
  const userH2 = document.createElement('h2');

  titleH1.textContent = lastEntry.title;
  console.log(lastEntry.title);
  contentP.textContent = lastEntry.content;
  console.log(lastEntry.content);
  userH2.textContent = lastEntry.userName;
  console.log(lastEntry.userName);

  boxDiv.setAttribute('class', 'boxes');

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
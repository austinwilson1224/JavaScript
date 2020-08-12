// the window object 
console.log(window.innerWidth);
console.log(window.outerWidth);
console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window);
localStorage.setItem('key1',"stuff goes here!");
console.log(localStorage);

// window.open("http://www.google.com");

console.log(location);
console.log(location.pathname);
console.log(document.title);
console.log(document.body);
console.log(document.body.children);
console.log(document.body.children[0]);
console.log(document.body.children[1].textContent);
document.body.children[1].textContent = "new content";
document.body.children[0].style.backgroundColor = "lightblue";

console.log(document.body.children[2].children);
console.log(document.body.lastElementChild);
console.log(document.body.firstElementChild);

// selecting elements
console.log(document.getElementsByClassName("simple"));
console.log(document.getElementById('custom-id'));

// selecting elements with the query selector ...
console.log('\n\n\n\n\n\n');
console.log(document.querySelector('h1'));
console.log(document.querySelector('.simple'));
console.log(document.querySelectorAll('.simple'));
console.log(document.querySelector('#easy'));
document.querySelector('#easy').style.backgroundColor = 'lime';

// selecting elements exercises
document.querySelector('a').style.backgroundColor = 'red';
document.querySelectorAll('.simplex')[0].firstElementChild.style.backgroundColor = 'yellow';
document.querySelector('.simplex').firstElementChild.textContent = "HELLO!"

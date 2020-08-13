
window.onload = function() {
    console.log("Window loaded");
}


var button = document.querySelector('button');

button.addEventListener('click',() => {
    console.log("HELLO!")
})

document.querySelector('#another-button').addEventListener('click',function() {
    console.log("Another button clicked!");
})

// third button
var button3 = document.querySelector(".btn");
button3.onclick = function() { console.log("SDLJFDKL")}

// listeners

function listener1() {
    console.log("Listener 1");
}

function listener2() {
    console.log("Listener 2");
}

setTimeout(function() {
    btn.removeEventListener('click',listener1);
},2000)

var btn = document.getElementById('btn');
btn.addEventListener('click',listener1);
btn.addEventListener('click',listener2);

// event behavior
var inner = document.getElementById('inner');
var outer = document.getElementById('outer');

inner.addEventListener('click',innerListener);
outer.addEventListener('click',outerListener);


function innerListener(event) {
    console.log(event.target);
    event.target.style.backgroundColor = 'red';
    console.log(event.clientX,event.clientY);
    // event.target.sytle.backgroundColor = 'red';
    console.log(event.bubbles);
    event.stopPropagation();
    console.log('clicked inner');
}

function outerListener(event) {
    console.log('clicked outer');
}


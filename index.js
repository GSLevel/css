var main = document.getElementById('main');
var desc = document.getElementById('desc');
var btns = document.getElementById('buttons');

setTimeout(() => {
   main.classList.add("fade2");
}, 1000)

setTimeout(() => {
    desc.classList.add("fade3");
 }, 2500)

 setTimeout(() => {
    btns.classList.add("fade4");
    setTimeout(() => {
        btns.style.opacity = "1"
    }, 8,700)
 }, 3500)

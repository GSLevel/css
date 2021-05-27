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


 function getCSS() {
    fetch('css.json')
      .then(res => res.json())
      .then(data => {
         const html = data.csses.map(css => {
            return `
            <div id="${css.id}">
            <h3>${css.text}</h3>
            <img src="${css.img}" onclick="document.location.href='${css.link}'">
            </div>
            `
         }).join("")
         document.getElementById('items').insertAdjacentHTML('beforeend', html)
      })
 }

 getCSS()
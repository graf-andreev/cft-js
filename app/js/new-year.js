export function makeNewYear(){
let elems = document.querySelectorAll('*');

function randomColor() {
    return Math.floor(Math.random() * (999999 - 0 + 1)) + 0;
}

function getRandom() {
    let a = Math.floor(Math.random() * (elems.length - 0 + 1)) + 0;
    elems[a].style.backgroundColor = `#${randomColor()}`;
}

function clear() {
    let a = Math.floor(Math.random() * (elems.length - 0 + 1)) + 0;
    elems[a].removeAttribute('style');
}

setInterval(getRandom, 2000);
setInterval(clear, 2000);
}




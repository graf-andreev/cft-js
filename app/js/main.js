const container = document.querySelector('.items-container');
const newYearStart = document.querySelector('.new-year');
const cartCounter = document.querySelector('.counter');
const totalElem = document.querySelector('.total');
let count = 0;
let total = 0;
import {makeNewYear} from './new-year.js';
import {renderCard} from './renderCard.js';
newYearStart.addEventListener('click', makeNewYear);

window.onload = function () {
    cartCounter.textContent = localStorage.count;
    totalElem.textContent = localStorage.total;
    let path = "../data.json";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);
    xhr.onload = function () {
        let data = JSON.parse(this.responseText);
        render(data);
        listenerAdd(data);  
        afterRender(data);    
    };
    xhr.send();
};

function render(data) {
    for (var key in data) {
        var html = `<a data-id="${data[key].id}" href="/items/id${data[key].id}" class="single-item">
        <div class="single-item__img">
            <img src="../img/${data[key].image}" alt="">
        </div>
        <div class="single-item__wrapper">
            <p class="single-item__name">${data[key].name}</p>
            <p class="single-item__price">${data[key].price}₽</p>
            <button data-number="${data[key].id}" class="single-item__button">В корзину</button>
        </div>
        </a>`;
        container.innerHTML += html;
    }
    listenerAdd();
    afterRender();
}

function listenerAdd(data) {
    let items = document.querySelectorAll('.single-item');
    items.forEach(function (elem) {
        elem.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            let clickedId = this.getAttribute('data-id');
            renderCard(data, clickedId);
        }); 
    }); 
}

function afterRender(data){
    let cartButton = document.querySelectorAll('.single-item__button');
        cartButton.forEach(function (elem){
            elem.addEventListener('click', function(e){
                e.stopPropagation()
                e.preventDefault()
                let currentPrice = data[this.getAttribute('data-number') - 1].price;
                total += +currentPrice;
                totalElem.textContent = 'На сумму ' + total + '₽';
                localStorage.total = totalElem.textContent;
                count += +1;
                cartCounter.textContent = count;
                localStorage.count = cartCounter.textContent;
            });
        });
    }
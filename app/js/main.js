let renderContainer = document.querySelector('.main-content');
let container = document.querySelector('.items-container');
let newYearStart = document.querySelector('.new-year');
import {makeNewYear} from './new-year.js';
newYearStart.addEventListener('click', makeNewYear)


window.onload = function () {
    let path = "../data.json";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);
    xhr.onload = function () {
        let data = JSON.parse(this.responseText);
        render(data);
        filter(data);
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

function afterRender(data){
let cartButton = document.querySelectorAll('.single-item__button');
    cartButton.forEach(function (elem){
        elem.addEventListener('click', function(e){
            e.stopPropagation()
            e.preventDefault()
            let currentPrice = data[this.getAttribute('data-number') - 1].price;
            console.log(currentPrice);
            let sum;
            sum += currentPrice;

            console.log(typeof(currentPrice))
        });
    })
}


function listenerAdd(data) {
    let items = document.querySelectorAll('.single-item');
    items.forEach(function (elem) {
        elem.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            let clickedId = this.getAttribute('data-id');
            renderTwo(data, clickedId);
        }); 
    }); 
}

function renderTwo(data, clickedId) {
    let header = document.querySelector('.top-block__header');
    header.textContent = data[clickedId - 1].name;
    let itemCard = `
<div class="item-img-wrapper">
    <img class="item-img-wrapper__img" src="../img/${data[clickedId - 1].image}" alt="">
</div>
<div class="item-info">
    <p class="item-info__header">Характеристика ${data[clickedId - 1].name}</p>
    <div class="item-info__row">
        <p class="item-info__type">Тип</p>
        <p class="item-info__value">Охотничьи, Компаньоны</p>
    </div>
    <div class="item-info__row">
        <p class="item-info__type">Размер</p>
        <p class="item-info__value">Средняя (${data[clickedId - 1].size}кг)</p>
    </div>
    <div class="item-info__row">
        <p class="item-info__type">Основные черты</p>
        <p class="item-info__value">Очень преданная, Дружелюбная,
            Подходит для охоты, Мало лает</p>
    </div>
    <div class="item-info__row">
        <p class="item-info__type">Частые заболевания</p>
        <p class="item-info__value">Глухота, Паралич гортани </p>
    </div>
    <div class="item-info__row">
        <p class="item-info__type">Интеллект</p>
        <p class="item-info__value">45%</p>
    </div>
    <div class="payment-block">
        <p class="payment-block__header">Стоимость</p>
        <p class="payment-block__price">${data[clickedId -1].price}₽</p>
        <button class="payment-block__buy">Забрать</button>
        <button class="payment-block__to-cart">Добавить в корзину</button>
    </div>
</div>`
        renderContainer.innerHTML = itemCard;
}







function filter(data) {
    let checkbox = document.querySelectorAll('.filter-item__input');
    checkbox.forEach(function (item) {
        item.addEventListener('change', function () {
            for (key in data) {
                // console.log(data[key].char)
            }
        });
    });
}

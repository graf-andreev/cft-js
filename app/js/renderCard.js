function renderCard(data, clickedId) {
    let renderContainer = document.querySelector('.main-content');
    let header = document.querySelector('.top-block__header');
    function randomIq() {
        return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    }
    header.textContent = data[clickedId - 1].name;
    let itemCard = `
<div class="item-img-wrapper">
    <img class="item-img-wrapper__img" src="../img/${data[clickedId - 1].image}" alt="">
</div>
<div class="item-info">
    <p class="item-info__header">Характеристика ${data[clickedId - 1].name}</p>
    <div class="item-info__row">
        <p class="item-info__type">Тип</p>
        <p class="item-info__value">${data[clickedId - 1].type}</p>
    </div>
    <div class="item-info__row">
        <p class="item-info__type">Размер</p>
        <p class="item-info__value">Средняя (${data[clickedId - 1].size}кг)</p>
    </div>
    <div class="item-info__row">
        <p class="item-info__type">Основные черты</p>
        <p class="item-info__value">${data[clickedId - 1].char}</p>
    </div>
    <div class="item-info__row">
        <p class="item-info__type">Интеллект</p>
        <p class="item-info__value">${randomIq()}%</p>
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
export {renderCard};
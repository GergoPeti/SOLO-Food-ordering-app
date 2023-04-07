'use strict';

import { menuArray } from './data.js';

// Selecting elements
const addBtns = document.querySelectorAll('.add-btn');

// Loading the content with JS
function loadMenuContent() {
  let menuHTML = '';

  menuArray.forEach(
    menu =>
      (menuHTML += `<div class="menu-item">
    <div class="emoji_box">
      <span>${menu.emoji}</span>
    </div>
    <div class="food-info_box">
      <p class="food-name">${menu.name}</p>
      <p class="ingredients">${menu.ingredients}</p>
      <p class="food-price">$${menu.price}</p>
    </div>
    <div class="add-btn_box">
      <div class="add-btn" data-uuid="${menu.id}">+</div>
    </div>
  </div>`)
  );

  return menuHTML;
}

// Rendering the loaded content
function renderMenu() {
  document.querySelector('.menu').innerHTML = loadMenuContent();
}

renderMenu();

// when click on the '+' add food object in a new array called 'order'
// render on the page with JS
// make 'remove' button work, when pushed delete object from array
// render this change on the page with JS
// SUM the ordered food price

const orders = [];
// 1 eventListener on the page
document.addEventListener('click', function (e) {
  // console.log(e.target.parentElement.parentElement);
  // console.log(e.target.dataset.uuid);

  orders.push(
    menuArray.filter(menuObj => menuObj.id === Number(e.target.dataset.uuid))[0]
  );

  console.log('orderLIST', orders);

  renderOrders();
});

function renderOrders() {
  console.log(document.querySelector('.order-sum'));

  document.querySelector('.order-sum').innerHTML = loadOrderContent();
}

function loadOrderContent() {
  let orderHTML = '';

  orders.forEach(
    orderItem =>
      (orderHTML += `<div class="order-item">
    <p class="food-name">${orderItem.name}</p>
    <p class="remove-order">remove</p>
    <p class="food-price marle-auto">$${orderItem.price}</p>
  </div>
  `)
  );

  return orderHTML;
}

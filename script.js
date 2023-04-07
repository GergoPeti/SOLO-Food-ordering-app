'use strict';

import { menuArray } from './data.js';

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

const orders = [];

document.addEventListener('click', function (e) {
  if (e.target.dataset.uuid) {
    orders.push(
      menuArray.filter(
        menuObj => menuObj.id === Number(e.target.dataset.uuid)
      )[0]
    );
  } else if (e.target.dataset.remove) {
    orders.splice(
      orders.indexOf(
        menuArray.filter(
          menuObj => menuObj.id === Number(e.target.dataset.remove)
        )[0]
      ),
      1
    );
  }

  renderOrders();
});

renderOrders();

document.addEventListener('click', function (e) {
  if (e.target.className === 'complete-btn') {
    document.querySelector('.form-box_container').classList.remove('hidden');
  } else if (e.target.className === 'esc') {
    document.querySelector('.form-box_container').classList.add('hidden');
  } // else if (e.target.id === 'form-btn') {
  // console.log('form-btn clicked');
  // document.querySelector('.order-bigbox').classList.add('hidden');
  // document.querySelector('.form-box_container').classList.add('hidden');
  //}
  console.log(e);
});

const payBtn = document.querySelector('#form-btn');

payBtn.addEventListener('click', function (e) {
  // e.preventDefault();
  console.log('form-btn clicked');
  document.querySelector('.order-bigbox').classList.add('hidden');
  document.querySelector('.form-box_container').classList.add('hidden');
});

// Closing payment container with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelector('.form-box_container').classList.add('hidden');
  }
});

function renderOrders() {
  document.querySelector('.order-bigbox').classList.remove('hidden');
  document.querySelector('.insert-orders').innerHTML = loadOrderContent();

  // if (orders.length === 0) {
  //   document.querySelector('.insert-orders').classList.add('hidden');
  // }

  totalPriceCalc();
}

function loadOrderContent() {
  let orderHTML = '';

  orders.forEach(
    orderItem =>
      (orderHTML += `<div class="order-item">
    <p class="food-name">${orderItem.name}</p>
    <p class="remove-order" data-remove="${orderItem.id}">remove</p>
    <p class="food-price marle-auto">$${orderItem.price}</p>
  </div>`)
  );

  return orderHTML;
}

function totalPriceCalc() {
  let price = 0;
  orders.forEach(order => (price += order.price));

  document.querySelector('.sum-price_box').innerHTML = `<p>Total price:</p>
  <p>$${price}</p>
  `;
}

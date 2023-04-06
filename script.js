'use strict';

import { menuArray } from './data.js';

// Selecting elements
const addBtns = document.querySelectorAll('.add-btn');

// Loading the content with JS
const loadMenuContent = function () {
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
      <div class="add-btn">+</div>
    </div>
  </div>`)
  );

  return menuHTML;
};

// Rendering the loaded content
const renderMenu = function () {
  document.querySelector('.menu').innerHTML = loadMenuContent();
};

renderMenu();

import clearContent from './clearContent.js'

// initialize empty menu
function newMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.classList.add('card');
  return menu
}

function addMenuItem(menu, title, description) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  const menuItemTitle = document.createElement('h4');
  menuItemTitle.classList.add('menu-title');
  menuItemTitle.textContent = title;
  const menuItemDescription = document.createElement('p');
  menuItemDescription.classList.add('menu-description');
  menuItemDescription.textContent = description;
  menuItem.appendChild(menuItemTitle);
  menuItem.appendChild(menuItemDescription);
  menu.appendChild(menuItem);
}

function createMenu() {
  clearContent();
  let divMenu = newMenu();
  const content = document.getElementById('content');
  addMenuItem(divMenu, 'Tokujyo Rosu UNAGI-DON', 'BBQ premium unagi');
  addMenuItem(divMenu, 'Cheese UNAGI-DON', 'Deep fried breaded mozzarella wrapped with thinly sliced pork unagi');
  content.appendChild(divMenu);
}


export default createMenu
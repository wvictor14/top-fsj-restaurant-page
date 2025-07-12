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
  const menuItemTitle = document.createElement('h4');
  menuItemTitle.textContent = title;
  const menuItemDescription = document.createElement('p');
  menuItemDescription.textContent = description;
  menuItem.appendChild(menuItemTitle);
  menuItem.appendChild(menuItemDescription);
  menu.appendChild(menuItem);
}

function createMenu() {
  clearContent();
  let divMenu = newMenu();
  const content = document.getElementById('content');
  addMenuItem(divMenu, 'Tokujyo Rosu Katsu', 'Deep fried premium pork cut loin');
  addMenuItem(divMenu, 'Cheese Katsu', 'Deep fried breaded mozzarella wrapped with thinly sliced pork loin');
  content.appendChild(divMenu);
}


export default createMenu
// modules/menu.js
export default function createMenu() {
  const menu = document.createElement('div');
  menu.id = 'menu-tab';

  const foods = [
    { id: 'fries', name: 'Fries' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'cupcakes', name: 'Cupcakes' },
    { id: 'burger', name: 'Burger' },
    { id: 'hotdog', name: 'Hotdog' },
    { id: 'drumsticks', name: 'Drumsticks' }
  ];

  foods.forEach(food => {
    const foodDiv = document.createElement('div');
    foodDiv.className = 'foods';
    
    const span = document.createElement('span');
    span.id = food.id;
    
    const heading = document.createElement('h4');
    heading.textContent = food.name;
    
    foodDiv.appendChild(span);
    foodDiv.appendChild(heading);
    menu.appendChild(foodDiv);
  });

  return menu;
}
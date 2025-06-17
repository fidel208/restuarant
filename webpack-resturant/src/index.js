// index.js

import "./style.css";
import createHome from './home.js';
import createMenu from './menu.js';
import createAbout from './about.js';
import createContact from './contact.js';

const content = document.getElementById('content');
const navButtons = document.querySelectorAll('nav button');

// Tab switching function
function switchTab(tabName) {
  // Clear current content
  content.innerHTML = '';
  
  // Create new content based on tab
  switch(tabName) {
    case 'home':
      content.appendChild(createHome());
      break;
    case 'menu':
      content.appendChild(createMenu());
      break;
    case 'about':
      content.appendChild(createAbout());
      break;
    case 'contact':
      content.appendChild(createContact());
      break;
  }
  
  // Update active button
  navButtons.forEach(btn => {
    btn.classList.toggle('active', btn.id === tabName);
  });
}

// Set up event listeners
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    switchTab(button.id);
  });
});

// Initialize with home tab
switchTab('home');
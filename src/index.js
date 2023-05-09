import './style.css';

const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const form = document.querySelector('form');

//Task Array
const tasks = [
  { description: 'Morning Prayer', completed: false, index: 0 },
  { description: 'Morning Session meeting', completed: true, index: 1 },
  { description: 'Lunch Break', completed: false, index: 2 },
  { description: 'Finish the project for the day', completed: false, index: 3 },
];

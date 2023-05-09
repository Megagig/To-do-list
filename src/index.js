import './style.css';
import createTodoListItemEl from './modules/createTodoListItem.js';
import addNewTodo from './modules/Addnew.js';

const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-Input');
const form = document.querySelector('form');

//Task Array
const tasks = [
  { description: 'Morning Prayer', completed: false, index: 0 },
  { description: 'Morning Session meeting', completed: true, index: 1 },
  { description: 'Lunch Break', completed: false, index: 2 },
  { description: 'Finish the project for the day', completed: false, index: 3 },
];

//Add an event listener to the form element to handle todo list creation
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoDescription = todoInput.value;
  if (todoDescription.trim() === '') {
    return;
  }
  // Add the new task and reset the input field
  addNewTodo(todoDescription);
  todoInput.value = '';
});

const renderTodoList = () => {
  todoList.innerHTML = '';
  tasks
    .sort((task1, task2) => task1.index - task2.index)
    .forEach((task) => {
      const listItemEl = createTodoListItemEl(task);
      todoList.appendChild(listItemEl);
    });
};

renderTodoList();
window.addEventListener('load', renderTodoList);

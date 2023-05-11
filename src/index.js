import './style.css';
import addNewTodo from './modules/add.js';
import renderTodoList from './modules/displaytask.js';

const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-Input');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoDescription = todoInput.value;
  if (todoDescription.trim() === '') {
    return;
  }
  addNewTodo(
    todoDescription,
    JSON.parse(localStorage.getItem('tasks')),
    todoList,
  );
  todoInput.value = '';
});

window.addEventListener('load', () => {
  renderTodoList(todoList, JSON.parse(localStorage.getItem('tasks')));
});

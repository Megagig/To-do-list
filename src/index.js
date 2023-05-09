import './style.css';
import addNewTodo from './modules/Addnew.js';
// import createTodoListItemEl from './modules/createTodoListItem.js';

const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-Input');
const form = document.querySelector('form');

// Get the tasks from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editTodoDescription;
let deleteTodo;

const saveTodos = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const createTodoLists = (task) => {
  const deleteButton = document.createElement('button');
  const listItemEl = document.createElement('li');
  const iconEl = document.createElement('i');
  const descriptionEl = document.createElement('span');

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.checked = task.completed;

  checkboxEl.addEventListener('change', () => {
    task.completed = checkboxEl.checked;
    saveTodos();

    //check if the checkbox is checked
    if (checkboxEl.checked) {
      deleteButton.style.display = 'block';
      iconEl.style.display = 'none';
      listItemEl.style.display = 'flex';
      listItemEl.style.justifyContent = 'flex-start';
      deleteButton.style.marginLeft = 'auto';
    } else {
      deleteButton.style.display = 'none';
      iconEl.style.display = 'block';
      descriptionEl.style.color = '#999';
    }
  });

  descriptionEl.textContent = task.description;
  descriptionEl.addEventListener('click', () => {
    editTodoDescription(task);
  });

  listItemEl.appendChild(checkboxEl);
  listItemEl.appendChild(descriptionEl);

  iconEl.classList.add('uil', 'uil-ellipsis-v');
  iconEl.addEventListener('click', () => {
    editTodoDescription(task);
  });

  listItemEl.appendChild(iconEl);

  deleteButton.innerHTML = '<i class="uil uil-trash"></i>';
  deleteButton.classList.add('delete-button');
  deleteButton.style.display = 'none';

  deleteButton.addEventListener('click', () => {
    deleteTodo(task.index);
  });

  listItemEl.appendChild(deleteButton);
  return listItemEl;
};

const updateTodoIndexes = () => {
  tasks.forEach((task, index) => {
    task.index = index;
  });
};

const renderTodoList = () => {
  todoList.innerHTML = '';
  tasks
    .sort((task1, task2) => task1.index - task2.index)
    .forEach((task) => {
      const listItemEl = createTodoListItemEl(task);
      todoList.appendChild(listItemEl);
    });
};

deleteTodo = (index) => {
  tasks = tasks.filter((task) => task.index !== index);
  updateTodoIndexes();
  saveTodos();
  renderTodoList();
};

editTodoDescription = (task) => {
  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.value = task.description;
  inputEl.classList.add('edit-input');

  inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      task.description = inputEl.value.trim();
      saveTodos();
      renderTodoList();
    } else if (event.key === 'Escape') {
      renderTodoList();
    }
  });

  const listItemEl = todoList.children[task.index];
  listItemEl.replaceChild(inputEl, listItemEl.children[1]);
  inputEl.select();
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoDescription = todoInput.value;
  if (todoDescription.trim() === '') {
    return;
  }
  addNewTodo(todoDescription);
  todoInput.value = '';
});

renderTodoList();
window.addEventListener('load', renderTodoList);

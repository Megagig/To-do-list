import './style.css';

// Select elements and store them in variables
const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-Input');
const form = document.querySelector('form');

// Retrieves the tasks from local storage and parses it as JSON
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editTodoDescription;
let deleteTodo;
// Saves the tasks to local storage as a JSON string
const saveTodos = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

//Create a function that creates a new todo list item element based on the "task" object passed as a parameter.
const createTodoListItemEl = (task) => {
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

// Update the "index" property of each task object in the "tasks" array.
const updateTodoIndexes = () => {
  tasks.forEach((task, index) => {
    task.index = index;
  });
};

// Clear the existing todo list and renders a new todo list based on the "tasks" array.
const renderTodoList = () => {
  todoList.innerHTML = '';
  tasks
    .sort((task1, task2) => task1.index - task2.index)
    .forEach((task) => {
      const listItemEl = createTodoListItemEl(task);
      todoList.appendChild(listItemEl);
    });
};

// Delete the task with the specified "index" from the "tasks" array, updates the indexes of the remaining tasks, saves the updated "tasks" array to local storage, and renders the updated todo list.
deleteTodo = (index) => {
  tasks = tasks.filter((task) => task.index !== index);
  updateTodoIndexes();
  saveTodos();
  renderTodoList();
};

// Replace the description of the specified "task" object with an input element that allows the user to edit the description. If the user presses "Enter", the new description is saved to the "tasks" array, saved to local storage, and the updated todo list is rendered. If the user presses "Escape", the original todo list is rendered.
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

// Create a new task object with the specified "description", add it to the "tasks" array, save the updated "tasks" array to local storage, and renders the updated todo list.
function addNewTodo(description) {
  const taskIndex = tasks.length;

  const task = { description, completed: false, index: taskIndex };
  tasks.push(task);
  saveTodos();

  const listItemElement = createTodoListItemEl(task);
  todoList.appendChild(listItemElement);
}

// Add an event listener that listens for a "submit" event on the form element. When the form is submitted, it prevents the default behavior (which is to refresh the page), gets the value of the todo input, creates a new todo item with the value, clears the todo input, and renders the updated todo list.
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

import deleteTodos from './delete.js';
import editTodoDescription from './edit.js';

const createTodoListItemEl = (task) => {
  const deleteButton = document.createElement('button');
  const listItemEl = document.createElement('li');
  const iconEl = document.createElement('i');
  const descriptionEl = document.createElement('span');
  const todoList = document.getElementById('todo-list');

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.checked = task.completed;

  checkboxEl.addEventListener('change', () => {
    task.completed = checkboxEl.checked;
    deleteButton.addEventListener('click', () => {
      deleteTodos(task.index, JSON.parse(localStorage.getItem('tasks')));
    });

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
    editTodoDescription(task, todoList);
  });

  listItemEl.appendChild(checkboxEl);
  listItemEl.appendChild(descriptionEl);

  iconEl.classList.add('uil', 'uil-ellipsis-v');
  iconEl.addEventListener('click', () => {
    editTodoDescription(task, todoList);
  });

  listItemEl.appendChild(iconEl);

  deleteButton.innerHTML = '<i class="uil uil-trash"></i>';
  deleteButton.classList.add('delete-button');
  deleteButton.style.display = 'none';

  listItemEl.appendChild(deleteButton);
  return listItemEl;
};

export default createTodoListItemEl;

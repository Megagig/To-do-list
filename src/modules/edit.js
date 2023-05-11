import saveTodos from './save';
import renderTodoList from './displaytask';
const editTodoDescription = (task, todoList) => {
  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.value = task.description;
  inputEl.classList.add('edit-input');

  const listItemEl = todoList.childNodes[task.index];
  listItemEl.replaceChild(inputEl, listItemEl.children[1]);
  inputEl.select();

  inputEl.addEventListener('keydown', (event) => {
    const local = JSON.parse(localStorage.getItem('tasks'));
    let id = task.index;
    if (event.key === 'Enter') {
      task.description = inputEl.value.trim();
      local[id].description = task.description;
      saveTodos(local);
      renderTodoList(todoList, local);
    } else if (event.key === 'Escape') {
      renderTodoList(todoList);
    }
  });
};

export default editTodoDescription;

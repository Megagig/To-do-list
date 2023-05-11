import createTodoListItemEl from './createLiItem.js';

const renderTodoList = (todoList, tasks) => {
  const clonedTask = tasks ? [...tasks] : [];
  todoList.innerHTML = '';
  clonedTask
    .sort((task1, task2) => task1.index - task2.index)
    .forEach((task) => {
      const listItemEl = createTodoListItemEl(task);
      todoList.appendChild(listItemEl);
    });
};

export default renderTodoList;

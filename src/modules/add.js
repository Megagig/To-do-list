import saveTodos from './save.js';
import renderTodoList from './displaytask.js';

const addNewTodo = (description, tasks, todoList) => {
  const clonedTask = tasks ? [...tasks] : [];
  const taskIndex = clonedTask.length + 1;

  const task = { description, completed: false, index: taskIndex };
  clonedTask.push(task);
  saveTodos(clonedTask);
  renderTodoList(todoList, clonedTask);
};

export default addNewTodo;

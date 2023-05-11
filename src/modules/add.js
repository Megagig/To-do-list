import saveTodos from './save';
import renderTodoList from './displaytask';
const addNewTodo = (description, tasks, todoList) => {
  const clonedTask = tasks ? [...tasks] : [];
  const taskIndex = clonedTask.length + 1;

  const task = { description, completed: false, index: taskIndex };
  clonedTask.push(task);
  saveTodos(clonedTask);
  renderTodoList(todoList, clonedTask);
};

export default addNewTodo;

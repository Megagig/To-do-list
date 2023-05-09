// const addNewTodo = (description, tasks, createTodoListItemEl, todoList) => {
//   const taskIndex = tasks.length;
//   const task = { description, completed: false, index: taskIndex };
//   tasks.push(task);
//   saveTodos();
//   const listItemEl = createTodoListItemEl(task);
//   todoList.appendChild(listItemEl);
// };

function addNewTask(description) {
  const taskIndex = tasks.length;

  const task = { description, completed: false, index: taskIndex };
  tasks.push(task);
  saveTasks();

  const listItemElement = createTaskLists(task);
  taskList.appendChild(listItemElement);
}
export default addNewTodo;

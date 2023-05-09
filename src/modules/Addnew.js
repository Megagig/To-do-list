const addNewTodo = (description, tasks, createTodoListItemEl, todoList) => {
  const taskIndex = tasks.length;
  const task = { description, completed: false, index: taskIndex };
  tasks.push(task);
  const listItemEl = createTodoListItemEl(task);
  todoList.appendChild(listItemEl);
};

export default addNewTodo;

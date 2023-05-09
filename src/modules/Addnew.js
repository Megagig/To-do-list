//Create new Todo List Item
const addNewTodo = (description) => {
  const taskIndex = tasks.length;
  const task = { description, completed: false, index: taskIndex };
  tasks.push(task);
  const listItemEl = createTodoListItemEl(task);
  todoList.appendChild(listItemEl);
};

export default addNewTodo;

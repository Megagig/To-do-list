import saveTodos from './save.js';
import displaytask from './displaytask.js';

const deleteTodos = (index, tasks) => {
  const todoList = document.getElementById('todo-list');
  const newTasks = tasks.filter((task) => task.index !== index);

  // Reassign index for all tasks in the newTasks array
  for (let i = 0; i < newTasks.length; i += 1) {
    newTasks[i].index = i + 1;
  }

  saveTodos(newTasks);
  displaytask(todoList, newTasks);
};

export default deleteTodos;

import saveTodos from './save';
import displaytask from './displaytask';

const deleteTodos = (index, tasks) => {
  const todoList = document.getElementById('todo-list');
  tasks = tasks.filter((task) => task.index !== index);
  for (let i = 1; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
  saveTodos(tasks);
  displaytask(todoList, tasks);
};

export default deleteTodos;

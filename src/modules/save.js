const saveTodos = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default saveTodos;

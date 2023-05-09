const createTodoListItemEl = (task) => {
  // Create the list item element
  const listItemEl = document.createElement('li');

  // Create the checkbox element
  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.checked = task.completed;

  // Add an event listener to the checkbox to update the task object when checked
  checkboxEl.addEventListener('change', () => {
    task.completed = checkboxEl.checked;
  });

  // Create the description element
  const descriptionEl = document.createElement('span');
  descriptionEl.textContent = task.description;

  //Append the checkbox and description elements to the list item
  listItemEl.appendChild(checkboxEl);
  listItemEl.appendChild(descriptionEl);

  //Create a horizontal line element
  const hrEl = document.createElement('hr');

  //Append the horizontal line element to the list item
  listItemEl.appendChild(hrEl);
  return listItemEl;
};

export default createTodoListItemEl;

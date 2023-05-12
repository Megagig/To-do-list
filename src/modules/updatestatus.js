const completedTo = (task) => {
  task.completed = true;
};

const incompleteTo = (task) => {
  task.completed = false;
};

export { completedTo, incompleteTo };

// export const completedTo = (task) => {
//   return {
//     ...task,
//     completed: true,
//   };
// };

// export const incompleteTo = (task) => {
//   return {
//     ...task,
//     completed: false,
//   };
// };

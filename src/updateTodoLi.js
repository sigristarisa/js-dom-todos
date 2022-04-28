const updateTodoLi = (todo, todoLi) => {
  if (todo.completed) todoLi.setAttribute("class", "completed");
};

export default updateTodoLi;
